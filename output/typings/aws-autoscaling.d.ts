// Type definitions for aws-sdk - Auto Scaling
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2011-01-01
    * endpointPrefix: autoscaling
    * serviceAbbreviation: 
    * signatureVersion: v4
    * protocol: query
    *
    * Auto Scaling Auto Scaling is designed to automatically launch or terminate EC2
 instances based on user-defined policies, schedules, and health checks. Use this
 service in conjunction with the Amazon CloudWatch and Elastic Load Balancing
 services.
    *
    */
  export class AutoScaling extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Attaches one or more EC2 instances to the specified Auto Scaling group.

When you attach instances, Auto Scaling increases the desired capacity of the
group by the number of instances being attached. If the number of instances
being attached plus the desired capacity of the group exceeds the maximum size
of the group, the operation fails.

If there is a Classic load balancer attached to your Auto Scaling group, the
instances are also registered with the load balancer. If there are target groups
attached to your Auto Scaling group, the instances are also registered with the
target groups.

For more information, see Attach EC2 Instances to Your Auto Scaling Group
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/attach-instance-asg.html] 
in the Auto Scaling User Guide.
     *
     * @error ResourceContentionFault   
     */
    attachInstances(params: AutoScaling.AttachInstancesQuery, callback?: (err: AutoScaling.ResourceContentionFault | any, data: any) => void): Request<any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Attaches one or more target groups to the specified Auto Scaling group.

To describe the target groups for an Auto Scaling group, use 
DescribeLoadBalancerTargetGroups. To detach the target group from the Auto
Scaling group, use DetachLoadBalancerTargetGroups.

For more information, see Attach a Load Balancer to Your Auto Scaling Group
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/attach-load-balancer-asg.html] 
in the Auto Scaling User Guide.
     *
     * @error ResourceContentionFault   
     */
    attachLoadBalancerTargetGroups(params: AutoScaling.AttachLoadBalancerTargetGroupsType, callback?: (err: AutoScaling.ResourceContentionFault | any, data: AutoScaling.AttachLoadBalancerTargetGroupsResultType | any) => void): Request<AutoScaling.AttachLoadBalancerTargetGroupsResultType | any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Attaches one or more Classic load balancers to the specified Auto Scaling group.

To attach an Application load balancer instead, see 
AttachLoadBalancerTargetGroups.

To describe the load balancers for an Auto Scaling group, use 
DescribeLoadBalancers. To detach the load balancer from the Auto Scaling group,
use DetachLoadBalancers.

For more information, see Attach a Load Balancer to Your Auto Scaling Group
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/attach-load-balancer-asg.html] 
in the Auto Scaling User Guide.
     *
     * @error ResourceContentionFault   
     */
    attachLoadBalancers(params: AutoScaling.AttachLoadBalancersType, callback?: (err: AutoScaling.ResourceContentionFault | any, data: AutoScaling.AttachLoadBalancersResultType | any) => void): Request<AutoScaling.AttachLoadBalancersResultType | any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Completes the lifecycle action for the specified token or instance with the
specified result.

This step is a part of the procedure for adding a lifecycle hook to an Auto
Scaling group:

 1.  (Optional) Create a Lambda function and a rule that allows CloudWatch
    Events to invoke your Lambda function when Auto Scaling launches or
    terminates instances.
    
    
 2.  (Optional) Create a notification target and an IAM role. The target can be
    either an Amazon SQS queue or an Amazon SNS topic. The role allows Auto
    Scaling to publish lifecycle notifications to the target.
    
    
 3.  Create the lifecycle hook. Specify whether the hook is used when the
    instances launch or terminate.
    
    
 4.  If you need more time, record the lifecycle action heartbeat to keep the
    instance in a pending state.
    
    
 5.   If you finish before the timeout period ends, complete the lifecycle
    action. 
    
    

For more information, see Auto Scaling Lifecycle
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/AutoScalingGroupLifecycle.html] 
in the Auto Scaling User Guide.
     *
     * @error ResourceContentionFault   
     */
    completeLifecycleAction(params: AutoScaling.CompleteLifecycleActionType, callback?: (err: AutoScaling.ResourceContentionFault | any, data: AutoScaling.CompleteLifecycleActionAnswer | any) => void): Request<AutoScaling.CompleteLifecycleActionAnswer | any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Creates an Auto Scaling group with the specified name and attributes.

If you exceed your maximum limit of Auto Scaling groups, which by default is 20
per region, the call fails. For information about viewing and updating this
limit, see DescribeAccountLimits.

For more information, see Auto Scaling Groups
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/AutoScalingGroup.html] 
in the Auto Scaling User Guide.
     *
     * @error AlreadyExistsFault   
     * @error LimitExceededFault   
     * @error ResourceContentionFault   
     */
    createAutoScalingGroup(params: AutoScaling.CreateAutoScalingGroupType, callback?: (err: AutoScaling.AlreadyExistsFault | AutoScaling.LimitExceededFault | AutoScaling.ResourceContentionFault | any, data: any) => void): Request<any, AutoScaling.AlreadyExistsFault | AutoScaling.LimitExceededFault | AutoScaling.ResourceContentionFault | any>;
    /**
     * Creates a launch configuration.

If you exceed your maximum limit of launch configurations, which by default is
100 per region, the call fails. For information about viewing and updating this
limit, see DescribeAccountLimits.

For more information, see Launch Configurations
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/LaunchConfiguration.html] 
in the Auto Scaling User Guide.
     *
     * @error AlreadyExistsFault   
     * @error LimitExceededFault   
     * @error ResourceContentionFault   
     */
    createLaunchConfiguration(params: AutoScaling.CreateLaunchConfigurationType, callback?: (err: AutoScaling.AlreadyExistsFault | AutoScaling.LimitExceededFault | AutoScaling.ResourceContentionFault | any, data: any) => void): Request<any, AutoScaling.AlreadyExistsFault | AutoScaling.LimitExceededFault | AutoScaling.ResourceContentionFault | any>;
    /**
     * Creates or updates tags for the specified Auto Scaling group.

When you specify a tag with a key that already exists, the operation overwrites
the previous tag definition, and you do not get an error message.

For more information, see Tagging Auto Scaling Groups and Instances
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/ASTagging.html] in
the Auto Scaling User Guide.
     *
     * @error LimitExceededFault   
     * @error AlreadyExistsFault   
     * @error ResourceContentionFault   
     */
    createOrUpdateTags(params: AutoScaling.CreateOrUpdateTagsType, callback?: (err: AutoScaling.LimitExceededFault | AutoScaling.AlreadyExistsFault | AutoScaling.ResourceContentionFault | any, data: any) => void): Request<any, AutoScaling.LimitExceededFault | AutoScaling.AlreadyExistsFault | AutoScaling.ResourceContentionFault | any>;
    /**
     * Deletes the specified Auto Scaling group.

If the group has instances or scaling activities in progress, you must specify
the option to force the deletion in order for it to succeed.

If the group has policies, deleting the group deletes the policies, the
underlying alarm actions, and any alarm that no longer has an associated action.

To remove instances from the Auto Scaling group before deleting it, call 
DetachInstances with the list of instances and the option to decrement the
desired capacity so that Auto Scaling does not launch replacement instances.

To terminate all instances before deleting the Auto Scaling group, call 
UpdateAutoScalingGroup and set the minimum size and desired capacity of the Auto
Scaling group to zero.
     *
     * @error ScalingActivityInProgressFault   
     * @error ResourceInUseFault   
     * @error ResourceContentionFault   
     */
    deleteAutoScalingGroup(params: AutoScaling.DeleteAutoScalingGroupType, callback?: (err: AutoScaling.ScalingActivityInProgressFault | AutoScaling.ResourceInUseFault | AutoScaling.ResourceContentionFault | any, data: any) => void): Request<any, AutoScaling.ScalingActivityInProgressFault | AutoScaling.ResourceInUseFault | AutoScaling.ResourceContentionFault | any>;
    /**
     * Deletes the specified launch configuration.

The launch configuration must not be attached to an Auto Scaling group. When
this call completes, the launch configuration is no longer available for use.
     *
     * @error ResourceInUseFault   
     * @error ResourceContentionFault   
     */
    deleteLaunchConfiguration(params: AutoScaling.LaunchConfigurationNameType, callback?: (err: AutoScaling.ResourceInUseFault | AutoScaling.ResourceContentionFault | any, data: any) => void): Request<any, AutoScaling.ResourceInUseFault | AutoScaling.ResourceContentionFault | any>;
    /**
     * Deletes the specified lifecycle hook.

If there are any outstanding lifecycle actions, they are completed first (
ABANDON for launching instances, CONTINUE for terminating instances).
     *
     * @error ResourceContentionFault   
     */
    deleteLifecycleHook(params: AutoScaling.DeleteLifecycleHookType, callback?: (err: AutoScaling.ResourceContentionFault | any, data: AutoScaling.DeleteLifecycleHookAnswer | any) => void): Request<AutoScaling.DeleteLifecycleHookAnswer | any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Deletes the specified notification.
     *
     * @error ResourceContentionFault   
     */
    deleteNotificationConfiguration(params: AutoScaling.DeleteNotificationConfigurationType, callback?: (err: AutoScaling.ResourceContentionFault | any, data: any) => void): Request<any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Deletes the specified Auto Scaling policy.

Deleting a policy deletes the underlying alarm action, but does not delete the
alarm, even if it no longer has an associated action.
     *
     * @error ResourceContentionFault   
     */
    deletePolicy(params: AutoScaling.DeletePolicyType, callback?: (err: AutoScaling.ResourceContentionFault | any, data: any) => void): Request<any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Deletes the specified scheduled action.
     *
     * @error ResourceContentionFault   
     */
    deleteScheduledAction(params: AutoScaling.DeleteScheduledActionType, callback?: (err: AutoScaling.ResourceContentionFault | any, data: any) => void): Request<any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Deletes the specified tags.
     *
     * @error ResourceContentionFault   
     */
    deleteTags(params: AutoScaling.DeleteTagsType, callback?: (err: AutoScaling.ResourceContentionFault | any, data: any) => void): Request<any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Describes the current Auto Scaling resource limits for your AWS account.

For information about requesting an increase in these limits, see AWS Service
Limits [http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html] in
the Amazon Web Services General Reference.
     *
     * @error ResourceContentionFault   
     */
    describeAccountLimits(callback?: (err: AutoScaling.ResourceContentionFault | any, data: AutoScaling.DescribeAccountLimitsAnswer | any) => void): Request<AutoScaling.DescribeAccountLimitsAnswer | any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Describes the policy adjustment types for use with PutScalingPolicy.
     *
     * @error ResourceContentionFault   
     */
    describeAdjustmentTypes(callback?: (err: AutoScaling.ResourceContentionFault | any, data: AutoScaling.DescribeAdjustmentTypesAnswer | any) => void): Request<AutoScaling.DescribeAdjustmentTypesAnswer | any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Describes one or more Auto Scaling groups.
     *
     * @error InvalidNextToken   
     * @error ResourceContentionFault   
     */
    describeAutoScalingGroups(params: AutoScaling.AutoScalingGroupNamesType, callback?: (err: AutoScaling.InvalidNextToken | AutoScaling.ResourceContentionFault | any, data: AutoScaling.AutoScalingGroupsType | any) => void): Request<AutoScaling.AutoScalingGroupsType | any, AutoScaling.InvalidNextToken | AutoScaling.ResourceContentionFault | any>;
    /**
     * Describes one or more Auto Scaling instances.
     *
     * @error InvalidNextToken   
     * @error ResourceContentionFault   
     */
    describeAutoScalingInstances(params: AutoScaling.DescribeAutoScalingInstancesType, callback?: (err: AutoScaling.InvalidNextToken | AutoScaling.ResourceContentionFault | any, data: AutoScaling.AutoScalingInstancesType | any) => void): Request<AutoScaling.AutoScalingInstancesType | any, AutoScaling.InvalidNextToken | AutoScaling.ResourceContentionFault | any>;
    /**
     * Describes the notification types that are supported by Auto Scaling.
     *
     * @error ResourceContentionFault   
     */
    describeAutoScalingNotificationTypes(callback?: (err: AutoScaling.ResourceContentionFault | any, data: AutoScaling.DescribeAutoScalingNotificationTypesAnswer | any) => void): Request<AutoScaling.DescribeAutoScalingNotificationTypesAnswer | any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Describes one or more launch configurations.
     *
     * @error InvalidNextToken   
     * @error ResourceContentionFault   
     */
    describeLaunchConfigurations(params: AutoScaling.LaunchConfigurationNamesType, callback?: (err: AutoScaling.InvalidNextToken | AutoScaling.ResourceContentionFault | any, data: AutoScaling.LaunchConfigurationsType | any) => void): Request<AutoScaling.LaunchConfigurationsType | any, AutoScaling.InvalidNextToken | AutoScaling.ResourceContentionFault | any>;
    /**
     * Describes the available types of lifecycle hooks.
     *
     * @error ResourceContentionFault   
     */
    describeLifecycleHookTypes(callback?: (err: AutoScaling.ResourceContentionFault | any, data: AutoScaling.DescribeLifecycleHookTypesAnswer | any) => void): Request<AutoScaling.DescribeLifecycleHookTypesAnswer | any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Describes the lifecycle hooks for the specified Auto Scaling group.
     *
     * @error ResourceContentionFault   
     */
    describeLifecycleHooks(params: AutoScaling.DescribeLifecycleHooksType, callback?: (err: AutoScaling.ResourceContentionFault | any, data: AutoScaling.DescribeLifecycleHooksAnswer | any) => void): Request<AutoScaling.DescribeLifecycleHooksAnswer | any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Describes the target groups for the specified Auto Scaling group.
     *
     * @error ResourceContentionFault   
     */
    describeLoadBalancerTargetGroups(params: AutoScaling.DescribeLoadBalancerTargetGroupsRequest, callback?: (err: AutoScaling.ResourceContentionFault | any, data: AutoScaling.DescribeLoadBalancerTargetGroupsResponse | any) => void): Request<AutoScaling.DescribeLoadBalancerTargetGroupsResponse | any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Describes the load balancers for the specified Auto Scaling group.

Note that this operation describes only Classic load balancers. If you have
Application load balancers, use DescribeLoadBalancerTargetGroups instead.
     *
     * @error ResourceContentionFault   
     */
    describeLoadBalancers(params: AutoScaling.DescribeLoadBalancersRequest, callback?: (err: AutoScaling.ResourceContentionFault | any, data: AutoScaling.DescribeLoadBalancersResponse | any) => void): Request<AutoScaling.DescribeLoadBalancersResponse | any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Describes the available CloudWatch metrics for Auto Scaling.

Note that the GroupStandbyInstances metric is not returned by default. You must
explicitly request this metric when calling EnableMetricsCollection.
     *
     * @error ResourceContentionFault   
     */
    describeMetricCollectionTypes(callback?: (err: AutoScaling.ResourceContentionFault | any, data: AutoScaling.DescribeMetricCollectionTypesAnswer | any) => void): Request<AutoScaling.DescribeMetricCollectionTypesAnswer | any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Describes the notification actions associated with the specified Auto Scaling
group.
     *
     * @error InvalidNextToken   
     * @error ResourceContentionFault   
     */
    describeNotificationConfigurations(params: AutoScaling.DescribeNotificationConfigurationsType, callback?: (err: AutoScaling.InvalidNextToken | AutoScaling.ResourceContentionFault | any, data: AutoScaling.DescribeNotificationConfigurationsAnswer | any) => void): Request<AutoScaling.DescribeNotificationConfigurationsAnswer | any, AutoScaling.InvalidNextToken | AutoScaling.ResourceContentionFault | any>;
    /**
     * Describes the policies for the specified Auto Scaling group.
     *
     * @error InvalidNextToken   
     * @error ResourceContentionFault   
     */
    describePolicies(params: AutoScaling.DescribePoliciesType, callback?: (err: AutoScaling.InvalidNextToken | AutoScaling.ResourceContentionFault | any, data: AutoScaling.PoliciesType | any) => void): Request<AutoScaling.PoliciesType | any, AutoScaling.InvalidNextToken | AutoScaling.ResourceContentionFault | any>;
    /**
     * Describes one or more scaling activities for the specified Auto Scaling group.
     *
     * @error InvalidNextToken   
     * @error ResourceContentionFault   
     */
    describeScalingActivities(params: AutoScaling.DescribeScalingActivitiesType, callback?: (err: AutoScaling.InvalidNextToken | AutoScaling.ResourceContentionFault | any, data: AutoScaling.ActivitiesType | any) => void): Request<AutoScaling.ActivitiesType | any, AutoScaling.InvalidNextToken | AutoScaling.ResourceContentionFault | any>;
    /**
     * Describes the scaling process types for use with ResumeProcesses and 
SuspendProcesses.
     *
     * @error ResourceContentionFault   
     */
    describeScalingProcessTypes(callback?: (err: AutoScaling.ResourceContentionFault | any, data: AutoScaling.ProcessesType | any) => void): Request<AutoScaling.ProcessesType | any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Describes the actions scheduled for your Auto Scaling group that haven&#x27;t run. To
describe the actions that have already run, use DescribeScalingActivities.
     *
     * @error InvalidNextToken   
     * @error ResourceContentionFault   
     */
    describeScheduledActions(params: AutoScaling.DescribeScheduledActionsType, callback?: (err: AutoScaling.InvalidNextToken | AutoScaling.ResourceContentionFault | any, data: AutoScaling.ScheduledActionsType | any) => void): Request<AutoScaling.ScheduledActionsType | any, AutoScaling.InvalidNextToken | AutoScaling.ResourceContentionFault | any>;
    /**
     * Describes the specified tags.

You can use filters to limit the results. For example, you can query for the
tags for a specific Auto Scaling group. You can specify multiple values for a
filter. A tag must match at least one of the specified values for it to be
included in the results.

You can also specify multiple filters. The result includes information for a
particular tag only if it matches all the filters. If there&#x27;s no match, no
special message is returned.
     *
     * @error InvalidNextToken   
     * @error ResourceContentionFault   
     */
    describeTags(params: AutoScaling.DescribeTagsType, callback?: (err: AutoScaling.InvalidNextToken | AutoScaling.ResourceContentionFault | any, data: AutoScaling.TagsType | any) => void): Request<AutoScaling.TagsType | any, AutoScaling.InvalidNextToken | AutoScaling.ResourceContentionFault | any>;
    /**
     * Describes the termination policies supported by Auto Scaling.
     *
     * @error ResourceContentionFault   
     */
    describeTerminationPolicyTypes(callback?: (err: AutoScaling.ResourceContentionFault | any, data: AutoScaling.DescribeTerminationPolicyTypesAnswer | any) => void): Request<AutoScaling.DescribeTerminationPolicyTypesAnswer | any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Removes one or more instances from the specified Auto Scaling group.

After the instances are detached, you can manage them independently from the
rest of the Auto Scaling group.

If you do not specify the option to decrement the desired capacity, Auto Scaling
launches instances to replace the ones that are detached.

If there is a Classic load balancer attached to the Auto Scaling group, the
instances are deregistered from the load balancer. If there are target groups
attached to the Auto Scaling group, the instances are deregistered from the
target groups.

For more information, see Detach EC2 Instances from Your Auto Scaling Group
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/detach-instance-asg.html] 
in the Auto Scaling User Guide.
     *
     * @error ResourceContentionFault   
     */
    detachInstances(params: AutoScaling.DetachInstancesQuery, callback?: (err: AutoScaling.ResourceContentionFault | any, data: AutoScaling.DetachInstancesAnswer | any) => void): Request<AutoScaling.DetachInstancesAnswer | any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Detaches one or more target groups from the specified Auto Scaling group.
     *
     * @error ResourceContentionFault   
     */
    detachLoadBalancerTargetGroups(params: AutoScaling.DetachLoadBalancerTargetGroupsType, callback?: (err: AutoScaling.ResourceContentionFault | any, data: AutoScaling.DetachLoadBalancerTargetGroupsResultType | any) => void): Request<AutoScaling.DetachLoadBalancerTargetGroupsResultType | any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Detaches one or more Classic load balancers from the specified Auto Scaling
group.

Note that this operation detaches only Classic load balancers. If you have
Application load balancers, use DetachLoadBalancerTargetGroups instead.

When you detach a load balancer, it enters the Removing state while
deregistering the instances in the group. When all instances are deregistered,
then you can no longer describe the load balancer using DescribeLoadBalancers.
Note that the instances remain running.
     *
     * @error ResourceContentionFault   
     */
    detachLoadBalancers(params: AutoScaling.DetachLoadBalancersType, callback?: (err: AutoScaling.ResourceContentionFault | any, data: AutoScaling.DetachLoadBalancersResultType | any) => void): Request<AutoScaling.DetachLoadBalancersResultType | any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Disables group metrics for the specified Auto Scaling group.
     *
     * @error ResourceContentionFault   
     */
    disableMetricsCollection(params: AutoScaling.DisableMetricsCollectionQuery, callback?: (err: AutoScaling.ResourceContentionFault | any, data: any) => void): Request<any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Enables group metrics for the specified Auto Scaling group. For more
information, see Monitoring Your Auto Scaling Groups and Instances
[http://docs.aws.amazon.com/AutoScaling/latest/userguide/as-instance-monitoring.html] 
in the Auto Scaling User Guide.
     *
     * @error ResourceContentionFault   
     */
    enableMetricsCollection(params: AutoScaling.EnableMetricsCollectionQuery, callback?: (err: AutoScaling.ResourceContentionFault | any, data: any) => void): Request<any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Moves the specified instances into Standby mode.

For more information, see Auto Scaling Lifecycle
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/AutoScalingGroupLifecycle.html] 
in the Auto Scaling User Guide.
     *
     * @error ResourceContentionFault   
     */
    enterStandby(params: AutoScaling.EnterStandbyQuery, callback?: (err: AutoScaling.ResourceContentionFault | any, data: AutoScaling.EnterStandbyAnswer | any) => void): Request<AutoScaling.EnterStandbyAnswer | any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Executes the specified policy.
     *
     * @error ScalingActivityInProgressFault   
     * @error ResourceContentionFault   
     */
    executePolicy(params: AutoScaling.ExecutePolicyType, callback?: (err: AutoScaling.ScalingActivityInProgressFault | AutoScaling.ResourceContentionFault | any, data: any) => void): Request<any, AutoScaling.ScalingActivityInProgressFault | AutoScaling.ResourceContentionFault | any>;
    /**
     * Moves the specified instances out of Standby mode.

For more information, see Auto Scaling Lifecycle
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/AutoScalingGroupLifecycle.html] 
in the Auto Scaling User Guide.
     *
     * @error ResourceContentionFault   
     */
    exitStandby(params: AutoScaling.ExitStandbyQuery, callback?: (err: AutoScaling.ResourceContentionFault | any, data: AutoScaling.ExitStandbyAnswer | any) => void): Request<AutoScaling.ExitStandbyAnswer | any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Creates or updates a lifecycle hook for the specified Auto Scaling Group.

A lifecycle hook tells Auto Scaling that you want to perform an action on an
instance that is not actively in service; for example, either when the instance
launches or before the instance terminates.

This step is a part of the procedure for adding a lifecycle hook to an Auto
Scaling group:

 1.  (Optional) Create a Lambda function and a rule that allows CloudWatch
    Events to invoke your Lambda function when Auto Scaling launches or
    terminates instances.
    
    
 2.  (Optional) Create a notification target and an IAM role. The target can be
    either an Amazon SQS queue or an Amazon SNS topic. The role allows Auto
    Scaling to publish lifecycle notifications to the target.
    
    
 3.   Create the lifecycle hook. Specify whether the hook is used when the
    instances launch or terminate. 
    
    
 4.  If you need more time, record the lifecycle action heartbeat to keep the
    instance in a pending state.
    
    
 5.  If you finish before the timeout period ends, complete the lifecycle
    action.
    
    

For more information, see Auto Scaling Lifecycle
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/AutoScalingGroupLifecycle.html] 
in the Auto Scaling User Guide.

If you exceed your maximum limit of lifecycle hooks, which by default is 50 per
Auto Scaling group, the call fails. For information about updating this limit,
see AWS Service Limits
[http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html] in the 
Amazon Web Services General Reference.
     *
     * @error LimitExceededFault   
     * @error ResourceContentionFault   
     */
    putLifecycleHook(params: AutoScaling.PutLifecycleHookType, callback?: (err: AutoScaling.LimitExceededFault | AutoScaling.ResourceContentionFault | any, data: AutoScaling.PutLifecycleHookAnswer | any) => void): Request<AutoScaling.PutLifecycleHookAnswer | any, AutoScaling.LimitExceededFault | AutoScaling.ResourceContentionFault | any>;
    /**
     * Configures an Auto Scaling group to send notifications when specified events
take place. Subscribers to the specified topic can have messages delivered to an
endpoint such as a web server or an email address.

This configuration overwrites any existing configuration.

For more information see Getting SNS Notifications When Your Auto Scaling Group
Scales
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/ASGettingNotifications.html] 
in the Auto Scaling User Guide.
     *
     * @error LimitExceededFault   
     * @error ResourceContentionFault   
     */
    putNotificationConfiguration(params: AutoScaling.PutNotificationConfigurationType, callback?: (err: AutoScaling.LimitExceededFault | AutoScaling.ResourceContentionFault | any, data: any) => void): Request<any, AutoScaling.LimitExceededFault | AutoScaling.ResourceContentionFault | any>;
    /**
     * Creates or updates a policy for an Auto Scaling group. To update an existing
policy, use the existing policy name and set the parameters you want to change.
Any existing parameter not changed in an update to an existing policy is not
changed in this update request.

If you exceed your maximum limit of step adjustments, which by default is 20 per
region, the call fails. For information about updating this limit, see AWS
Service Limits
[http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html] in the 
Amazon Web Services General Reference.
     *
     * @error LimitExceededFault   
     * @error ResourceContentionFault   
     */
    putScalingPolicy(params: AutoScaling.PutScalingPolicyType, callback?: (err: AutoScaling.LimitExceededFault | AutoScaling.ResourceContentionFault | any, data: AutoScaling.PolicyARNType | any) => void): Request<AutoScaling.PolicyARNType | any, AutoScaling.LimitExceededFault | AutoScaling.ResourceContentionFault | any>;
    /**
     * Creates or updates a scheduled scaling action for an Auto Scaling group. When
updating a scheduled scaling action, if you leave a parameter unspecified, the
corresponding value remains unchanged in the affected Auto Scaling group.

For more information, see Scheduled Scaling
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/schedule_time.html] 
in the Auto Scaling User Guide.
     *
     * @error AlreadyExistsFault   
     * @error LimitExceededFault   
     * @error ResourceContentionFault   
     */
    putScheduledUpdateGroupAction(params: AutoScaling.PutScheduledUpdateGroupActionType, callback?: (err: AutoScaling.AlreadyExistsFault | AutoScaling.LimitExceededFault | AutoScaling.ResourceContentionFault | any, data: any) => void): Request<any, AutoScaling.AlreadyExistsFault | AutoScaling.LimitExceededFault | AutoScaling.ResourceContentionFault | any>;
    /**
     * Records a heartbeat for the lifecycle action associated with the specified token
or instance. This extends the timeout by the length of time defined using 
PutLifecycleHook.

This step is a part of the procedure for adding a lifecycle hook to an Auto
Scaling group:

 1.  (Optional) Create a Lambda function and a rule that allows CloudWatch
    Events to invoke your Lambda function when Auto Scaling launches or
    terminates instances.
    
    
 2.  (Optional) Create a notification target and an IAM role. The target can be
    either an Amazon SQS queue or an Amazon SNS topic. The role allows Auto
    Scaling to publish lifecycle notifications to the target.
    
    
 3.  Create the lifecycle hook. Specify whether the hook is used when the
    instances launch or terminate.
    
    
 4.   If you need more time, record the lifecycle action heartbeat to keep the
    instance in a pending state. 
    
    
 5.  If you finish before the timeout period ends, complete the lifecycle
    action.
    
    

For more information, see Auto Scaling Lifecycle
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/AutoScalingGroupLifecycle.html] 
in the Auto Scaling User Guide.
     *
     * @error ResourceContentionFault   
     */
    recordLifecycleActionHeartbeat(params: AutoScaling.RecordLifecycleActionHeartbeatType, callback?: (err: AutoScaling.ResourceContentionFault | any, data: AutoScaling.RecordLifecycleActionHeartbeatAnswer | any) => void): Request<AutoScaling.RecordLifecycleActionHeartbeatAnswer | any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Resumes the specified suspended Auto Scaling processes, or all suspended
process, for the specified Auto Scaling group.

For more information, see Suspending and Resuming Auto Scaling Processes
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/US_SuspendResume.html] 
in the Auto Scaling User Guide.
     *
     * @error ResourceInUseFault   
     * @error ResourceContentionFault   
     */
    resumeProcesses(params: AutoScaling.ScalingProcessQuery, callback?: (err: AutoScaling.ResourceInUseFault | AutoScaling.ResourceContentionFault | any, data: any) => void): Request<any, AutoScaling.ResourceInUseFault | AutoScaling.ResourceContentionFault | any>;
    /**
     * Sets the size of the specified Auto Scaling group.

For more information about desired capacity, see What Is Auto Scaling?
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/WhatIsAutoScaling.html] 
in the Auto Scaling User Guide.
     *
     * @error ScalingActivityInProgressFault   
     * @error ResourceContentionFault   
     */
    setDesiredCapacity(params: AutoScaling.SetDesiredCapacityType, callback?: (err: AutoScaling.ScalingActivityInProgressFault | AutoScaling.ResourceContentionFault | any, data: any) => void): Request<any, AutoScaling.ScalingActivityInProgressFault | AutoScaling.ResourceContentionFault | any>;
    /**
     * Sets the health status of the specified instance.

For more information, see Health Checks
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/healthcheck.html] 
in the Auto Scaling User Guide.
     *
     * @error ResourceContentionFault   
     */
    setInstanceHealth(params: AutoScaling.SetInstanceHealthQuery, callback?: (err: AutoScaling.ResourceContentionFault | any, data: any) => void): Request<any, AutoScaling.ResourceContentionFault | any>;
    /**
     * Updates the instance protection settings of the specified instances.

For more information, see Instance Protection
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/AutoScalingBehavior.InstanceTermination.html#instance-protection] 
in the Auto Scaling User Guide.
     *
     * @error LimitExceededFault   
     * @error ResourceContentionFault   
     */
    setInstanceProtection(params: AutoScaling.SetInstanceProtectionQuery, callback?: (err: AutoScaling.LimitExceededFault | AutoScaling.ResourceContentionFault | any, data: AutoScaling.SetInstanceProtectionAnswer | any) => void): Request<AutoScaling.SetInstanceProtectionAnswer | any, AutoScaling.LimitExceededFault | AutoScaling.ResourceContentionFault | any>;
    /**
     * Suspends the specified Auto Scaling processes, or all processes, for the
specified Auto Scaling group.

Note that if you suspend either the Launch or Terminate process types, it can
prevent other process types from functioning properly.

To resume processes that have been suspended, use ResumeProcesses.

For more information, see Suspending and Resuming Auto Scaling Processes
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/US_SuspendResume.html] 
in the Auto Scaling User Guide.
     *
     * @error ResourceInUseFault   
     * @error ResourceContentionFault   
     */
    suspendProcesses(params: AutoScaling.ScalingProcessQuery, callback?: (err: AutoScaling.ResourceInUseFault | AutoScaling.ResourceContentionFault | any, data: any) => void): Request<any, AutoScaling.ResourceInUseFault | AutoScaling.ResourceContentionFault | any>;
    /**
     * Terminates the specified instance and optionally adjusts the desired group size.

This call simply makes a termination request. The instance is not terminated
immediately.
     *
     * @error ScalingActivityInProgressFault   
     * @error ResourceContentionFault   
     */
    terminateInstanceInAutoScalingGroup(params: AutoScaling.TerminateInstanceInAutoScalingGroupType, callback?: (err: AutoScaling.ScalingActivityInProgressFault | AutoScaling.ResourceContentionFault | any, data: AutoScaling.ActivityType | any) => void): Request<AutoScaling.ActivityType | any, AutoScaling.ScalingActivityInProgressFault | AutoScaling.ResourceContentionFault | any>;
    /**
     * Updates the configuration for the specified Auto Scaling group.

To update an Auto Scaling group with a launch configuration with 
InstanceMonitoring set to False, you must first disable the collection of group
metrics. Otherwise, you will get an error. If you have previously enabled the
collection of group metrics, you can disable it using DisableMetricsCollection.

The new settings are registered upon the completion of this call. Any launch
configuration settings take effect on any triggers after this call returns.
Scaling activities that are currently in progress aren&#x27;t affected.

Note the following:

 &amp;#42;  If you specify a new value for MinSize without specifying a value for 
   DesiredCapacity, and the new MinSize is larger than the current size of the
   group, we implicitly call SetDesiredCapacity to set the size of the group to
   the new value of MinSize.
   
   
 *  If you specify a new value for MaxSize without specifying a value for 
   DesiredCapacity, and the new MaxSize is smaller than the current size of the
   group, we implicitly call SetDesiredCapacity to set the size of the group to
   the new value of MaxSize.
   
   
 *  All other optional parameters are left unchanged if not specified.
     *
     * @error ScalingActivityInProgressFault   
     * @error ResourceContentionFault   
     */
    updateAutoScalingGroup(params: AutoScaling.UpdateAutoScalingGroupType, callback?: (err: AutoScaling.ScalingActivityInProgressFault | AutoScaling.ResourceContentionFault | any, data: any) => void): Request<any, AutoScaling.ScalingActivityInProgressFault | AutoScaling.ResourceContentionFault | any>;

  }

  export module AutoScaling {

    export type Activities = Activity[];

    export type ActivityIds = XmlString[];

    export type AdjustmentTypes = AdjustmentType[];

    export type Alarms = Alarm[];

    export type AsciiStringMaxLen255 = string;

    export type AssociatePublicIpAddress = boolean;

    export type AutoScalingGroupDesiredCapacity = number;

    export type AutoScalingGroupMaxSize = number;

    export type AutoScalingGroupMinSize = number;

    export type AutoScalingGroupNames = ResourceName[];

    export type AutoScalingGroups = AutoScalingGroup[];

    export type AutoScalingInstances = AutoScalingInstanceDetails[];

    export type AutoScalingNotificationTypes = XmlStringMaxLen255[];

    export type AvailabilityZones = XmlStringMaxLen255[];

    export type BlockDeviceEbsDeleteOnTermination = boolean;

    export type BlockDeviceEbsEncrypted = boolean;

    export type BlockDeviceEbsIops = number;

    export type BlockDeviceEbsVolumeSize = number;

    export type BlockDeviceEbsVolumeType = string;

    export type BlockDeviceMappings = BlockDeviceMapping[];

    export type ClassicLinkVPCSecurityGroups = XmlStringMaxLen255[];

    export type Cooldown = number;

    export type EbsOptimized = boolean;

    export type EnabledMetrics = EnabledMetric[];

    export type EstimatedInstanceWarmup = number;

    export type Filters = Filter[];

    export type ForceDelete = boolean;

    export type GlobalTimeout = number;

    export type HealthCheckGracePeriod = number;

    export type HeartbeatTimeout = number;

    export type HonorCooldown = boolean;

    export type InstanceIds = XmlStringMaxLen19[];

    export type InstanceProtected = boolean;

    export type Instances = Instance[];

    export type LaunchConfigurationNames = ResourceName[];

    export type LaunchConfigurations = LaunchConfiguration[];

    export type LifecycleActionResult = string;

    export type LifecycleActionToken = string;

    export type LifecycleHookNames = AsciiStringMaxLen255[];

    export type LifecycleHooks = LifecycleHook[];

    export type LifecycleState = string;

    export type LifecycleTransition = string;

    export type LoadBalancerNames = XmlStringMaxLen255[];

    export type LoadBalancerStates = LoadBalancerState[];

    export type LoadBalancerTargetGroupStates = LoadBalancerTargetGroupState[];

    export type MaxNumberOfAutoScalingGroups = number;

    export type MaxNumberOfLaunchConfigurations = number;

    export type MaxRecords = number;

    export type MetricCollectionTypes = MetricCollectionType[];

    export type MetricGranularityTypes = MetricGranularityType[];

    export type MetricScale = number;

    export type Metrics = XmlStringMaxLen255[];

    export type MinAdjustmentMagnitude = number;

    export type MinAdjustmentStep = number;

    export type MonitoringEnabled = boolean;

    export type NoDevice = boolean;

    export type NotificationConfigurations = NotificationConfiguration[];

    export type NotificationTargetResourceName = string;

    export type NumberOfAutoScalingGroups = number;

    export type NumberOfLaunchConfigurations = number;

    export type PolicyIncrement = number;

    export type PolicyNames = ResourceName[];

    export type PolicyTypes = XmlStringMaxLen64[];

    export type ProcessNames = XmlStringMaxLen255[];

    export type Processes = ProcessType[];

    export type Progress = number;

    export type PropagateAtLaunch = boolean;

    export type ProtectedFromScaleIn = boolean;

    export type ResourceName = string;

    export type ScalingActivityStatusCode = string;

    export type ScalingPolicies = ScalingPolicy[];

    export type ScheduledActionNames = ResourceName[];

    export type ScheduledUpdateGroupActions = ScheduledUpdateGroupAction[];

    export type SecurityGroups = XmlString[];

    export type ShouldDecrementDesiredCapacity = boolean;

    export type ShouldRespectGracePeriod = boolean;

    export type SpotPrice = string;

    export type StepAdjustments = StepAdjustment[];

    export type SuspendedProcesses = SuspendedProcess[];

    export type TagDescriptionList = TagDescription[];

    export type TagKey = string;

    export type TagValue = string;

    export type Tags = Tag[];

    export type TargetGroupARNs = XmlStringMaxLen511[];

    export type TerminationPolicies = XmlStringMaxLen1600[];

    export type TimestampType = number;

    export type Values = XmlString[];

    export type XmlString = string;

    export type XmlStringMaxLen1023 = string;

    export type XmlStringMaxLen1600 = string;

    export type XmlStringMaxLen19 = string;

    export type XmlStringMaxLen2047 = string;

    export type XmlStringMaxLen255 = string;

    export type XmlStringMaxLen32 = string;

    export type XmlStringMaxLen511 = string;

    export type XmlStringMaxLen64 = string;

    export type XmlStringUserData = string;

    export interface ActivitiesType {
      /** The scaling activities. Activities are sorted by start time. Activities still in
progress are described first. **/
      Activities: Activities;
      /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
      NextToken?: XmlString;
    }
    export interface Activity {
      /** The ID of the activity. **/
      ActivityId: XmlString;
      /** The name of the Auto Scaling group. **/
      AutoScalingGroupName: XmlStringMaxLen255;
      /** A friendly, more verbose description of the activity. **/
      Description?: XmlString;
      /** The reason the activity began. **/
      Cause: XmlStringMaxLen1023;
      /** The start time of the activity. **/
      StartTime: TimestampType;
      /** The end time of the activity. **/
      EndTime?: TimestampType;
      /** The current status of the activity. **/
      StatusCode: ScalingActivityStatusCode;
      /** A friendly, more verbose description of the activity status. **/
      StatusMessage?: XmlStringMaxLen255;
      /** A value between 0 and 100 that indicates the progress of the activity. **/
      Progress?: Progress;
      /** The details about the activity. **/
      Details?: XmlString;
    }
    export interface ActivityType {
      /** A scaling activity. **/
      Activity?: Activity;
    }
    export interface AdjustmentType {
      /** The policy adjustment type. The valid values are ChangeInCapacity, ExactCapacity
, and PercentChangeInCapacity. **/
      AdjustmentType?: XmlStringMaxLen255;
    }
    export interface Alarm {
      /** The name of the alarm. **/
      AlarmName?: XmlStringMaxLen255;
      /** The Amazon Resource Name (ARN) of the alarm. **/
      AlarmARN?: ResourceName;
    }
    export interface AlreadyExistsFault {
      /**  **/
      message?: XmlStringMaxLen255;
    }
    export interface AttachInstancesQuery {
      /** One or more instance IDs. **/
      InstanceIds?: InstanceIds;
      /** The name of the group. **/
      AutoScalingGroupName: ResourceName;
    }
    export interface AttachLoadBalancerTargetGroupsResultType {
    }
    export interface AttachLoadBalancerTargetGroupsType {
      /** The name of the Auto Scaling group. **/
      AutoScalingGroupName: ResourceName;
      /** The Amazon Resource Names (ARN) of the target groups. **/
      TargetGroupARNs: TargetGroupARNs;
    }
    export interface AttachLoadBalancersResultType {
    }
    export interface AttachLoadBalancersType {
      /** The name of the group. **/
      AutoScalingGroupName: ResourceName;
      /** One or more load balancer names. **/
      LoadBalancerNames: LoadBalancerNames;
    }
    export interface AutoScalingGroup {
      /** The name of the group. **/
      AutoScalingGroupName: XmlStringMaxLen255;
      /** The Amazon Resource Name (ARN) of the group. **/
      AutoScalingGroupARN?: ResourceName;
      /** The name of the associated launch configuration. **/
      LaunchConfigurationName?: XmlStringMaxLen255;
      /** The minimum size of the group. **/
      MinSize: AutoScalingGroupMinSize;
      /** The maximum size of the group. **/
      MaxSize: AutoScalingGroupMaxSize;
      /** The desired size of the group. **/
      DesiredCapacity: AutoScalingGroupDesiredCapacity;
      /** The amount of time, in seconds, after a scaling activity completes before
another scaling activity can start. **/
      DefaultCooldown: Cooldown;
      /** One or more Availability Zones for the group. **/
      AvailabilityZones: AvailabilityZones;
      /** One or more load balancers associated with the group. **/
      LoadBalancerNames?: LoadBalancerNames;
      /** The Amazon Resource Names (ARN) of the target groups for your load balancer. **/
      TargetGroupARNs?: TargetGroupARNs;
      /** The service to use for the health checks. The valid values are EC2 and ELB. **/
      HealthCheckType: XmlStringMaxLen32;
      /** The amount of time, in seconds, that Auto Scaling waits before checking the
health status of an EC2 instance that has come into service. **/
      HealthCheckGracePeriod?: HealthCheckGracePeriod;
      /** The EC2 instances associated with the group. **/
      Instances?: Instances;
      /** The date and time the group was created. **/
      CreatedTime: TimestampType;
      /** The suspended processes associated with the group. **/
      SuspendedProcesses?: SuspendedProcesses;
      /** The name of the placement group into which you&#x27;ll launch your instances, if any.
For more information, see Placement Groups
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html] in
the Amazon Elastic Compute Cloud User Guide. **/
      PlacementGroup?: XmlStringMaxLen255;
      /** One or more subnet IDs, if applicable, separated by commas.

If you specify VPCZoneIdentifier and AvailabilityZones, ensure that the
Availability Zones of the subnets match the values for AvailabilityZones. **/
      VPCZoneIdentifier?: XmlStringMaxLen2047;
      /** The metrics enabled for the group. **/
      EnabledMetrics?: EnabledMetrics;
      /** The current state of the group when DeleteAutoScalingGroup is in progress. **/
      Status?: XmlStringMaxLen255;
      /** The tags for the group. **/
      Tags?: TagDescriptionList;
      /** The termination policies for the group. **/
      TerminationPolicies?: TerminationPolicies;
      /** Indicates whether newly launched instances are protected from termination by
Auto Scaling when scaling in. **/
      NewInstancesProtectedFromScaleIn?: InstanceProtected;
    }
    export interface AutoScalingGroupNamesType {
      /** The group names. If you omit this parameter, all Auto Scaling groups are
described. **/
      AutoScalingGroupNames?: AutoScalingGroupNames;
      /** The token for the next set of items to return. (You received this token from a
previous call.) **/
      NextToken?: XmlString;
      /** The maximum number of items to return with this call. **/
      MaxRecords?: MaxRecords;
    }
    export interface AutoScalingGroupsType {
      /** The groups. **/
      AutoScalingGroups: AutoScalingGroups;
      /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
      NextToken?: XmlString;
    }
    export interface AutoScalingInstanceDetails {
      /** The ID of the instance. **/
      InstanceId: XmlStringMaxLen19;
      /** The name of the Auto Scaling group associated with the instance. **/
      AutoScalingGroupName: XmlStringMaxLen255;
      /** The Availability Zone for the instance. **/
      AvailabilityZone: XmlStringMaxLen255;
      /** The lifecycle state for the instance. For more information, see Auto Scaling
Lifecycle
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/AutoScalingGroupLifecycle.html] 
in the Auto Scaling User Guide. **/
      LifecycleState: XmlStringMaxLen32;
      /** The last reported health status of this instance. &quot;Healthy&quot; means that the
instance is healthy and should remain in service. &quot;Unhealthy&quot; means that the
instance is unhealthy and Auto Scaling should terminate and replace it. **/
      HealthStatus: XmlStringMaxLen32;
      /** The launch configuration associated with the instance. **/
      LaunchConfigurationName: XmlStringMaxLen255;
      /** Indicates whether the instance is protected from termination by Auto Scaling
when scaling in. **/
      ProtectedFromScaleIn: InstanceProtected;
    }
    export interface AutoScalingInstancesType {
      /** The instances. **/
      AutoScalingInstances?: AutoScalingInstances;
      /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
      NextToken?: XmlString;
    }
    export interface BlockDeviceMapping {
      /** The name of the virtual device (for example, ephemeral0). **/
      VirtualName?: XmlStringMaxLen255;
      /** The device name exposed to the EC2 instance (for example, /dev/sdh or xvdh). **/
      DeviceName: XmlStringMaxLen255;
      /** The information about the Amazon EBS volume. **/
      Ebs?: Ebs;
      /** Suppresses a device mapping.

If this parameter is true for the root device, the instance might fail the EC2
health check. Auto Scaling launches a replacement instance if the instance fails
the health check. **/
      NoDevice?: NoDevice;
    }
    export interface CompleteLifecycleActionAnswer {
    }
    export interface CompleteLifecycleActionType {
      /** The name of the lifecycle hook. **/
      LifecycleHookName: AsciiStringMaxLen255;
      /** The name of the group for the lifecycle hook. **/
      AutoScalingGroupName: ResourceName;
      /** A universally unique identifier (UUID) that identifies a specific lifecycle
action associated with an instance. Auto Scaling sends this token to the
notification target you specified when you created the lifecycle hook. **/
      LifecycleActionToken?: LifecycleActionToken;
      /** The action for the group to take. This parameter can be either CONTINUE or 
ABANDON. **/
      LifecycleActionResult: LifecycleActionResult;
      /** The ID of the instance. **/
      InstanceId?: XmlStringMaxLen19;
    }
    export interface CreateAutoScalingGroupType {
      /** The name of the group. This name must be unique within the scope of your AWS
account. **/
      AutoScalingGroupName: XmlStringMaxLen255;
      /** The name of the launch configuration. Alternatively, specify an EC2 instance
instead of a launch configuration. **/
      LaunchConfigurationName?: ResourceName;
      /** The ID of the instance used to create a launch configuration for the group.
Alternatively, specify a launch configuration instead of an EC2 instance.

When you specify an ID of an instance, Auto Scaling creates a new launch
configuration and associates it with the group. This launch configuration
derives its attributes from the specified instance, with the exception of the
block device mapping.

For more information, see Create an Auto Scaling Group Using an EC2 Instance
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/create-asg-from-instance.html] 
in the Auto Scaling User Guide. **/
      InstanceId?: XmlStringMaxLen19;
      /** The minimum size of the group. **/
      MinSize: AutoScalingGroupMinSize;
      /** The maximum size of the group. **/
      MaxSize: AutoScalingGroupMaxSize;
      /** The number of EC2 instances that should be running in the group. This number
must be greater than or equal to the minimum size of the group and less than or
equal to the maximum size of the group. **/
      DesiredCapacity?: AutoScalingGroupDesiredCapacity;
      /** The amount of time, in seconds, after a scaling activity completes before
another scaling activity can start. The default is 300.

For more information, see Auto Scaling Cooldowns
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/Cooldown.html] in
the Auto Scaling User Guide. **/
      DefaultCooldown?: Cooldown;
      /** One or more Availability Zones for the group. This parameter is optional if you
specify one or more subnets. **/
      AvailabilityZones?: AvailabilityZones;
      /** One or more Classic load balancers. To specify an Application load balancer, use 
TargetGroupARNs instead.

For more information, see Using a Load Balancer With an Auto Scaling Group
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/US_SetUpASLBApp.html] 
in the Auto Scaling User Guide. **/
      LoadBalancerNames?: LoadBalancerNames;
      /** The Amazon Resource Names (ARN) of the target groups. **/
      TargetGroupARNs?: TargetGroupARNs;
      /** The service to use for the health checks. The valid values are EC2 and ELB.

By default, health checks use Amazon EC2 instance status checks to determine the
health of an instance. For more information, see Health Checks
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/healthcheck.html] 
in the Auto Scaling User Guide. **/
      HealthCheckType?: XmlStringMaxLen32;
      /** The amount of time, in seconds, that Auto Scaling waits before checking the
health status of an EC2 instance that has come into service. During this time,
any health check failures for the instance are ignored. The default is 0.

This parameter is required if you are adding an ELB health check.

For more information, see Health Checks
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/healthcheck.html] 
in the Auto Scaling User Guide. **/
      HealthCheckGracePeriod?: HealthCheckGracePeriod;
      /** The name of the placement group into which you&#x27;ll launch your instances, if any.
For more information, see Placement Groups
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html] in
the Amazon Elastic Compute Cloud User Guide. **/
      PlacementGroup?: XmlStringMaxLen255;
      /** A comma-separated list of subnet identifiers for your virtual private cloud
(VPC).

If you specify subnets and Availability Zones with this call, ensure that the
subnets&#x27; Availability Zones match the Availability Zones specified.

For more information, see Launching Auto Scaling Instances in a VPC
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/asg-in-vpc.html] 
in the Auto Scaling User Guide. **/
      VPCZoneIdentifier?: XmlStringMaxLen2047;
      /** One or more termination policies used to select the instance to terminate. These
policies are executed in the order that they are listed.

For more information, see Controlling Which Instances Auto Scaling Terminates
During Scale In
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/AutoScalingBehavior.InstanceTermination.html] 
in the Auto Scaling User Guide. **/
      TerminationPolicies?: TerminationPolicies;
      /** Indicates whether newly launched instances are protected from termination by
Auto Scaling when scaling in. **/
      NewInstancesProtectedFromScaleIn?: InstanceProtected;
      /** One or more tags.

For more information, see Tagging Auto Scaling Groups and Instances
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/ASTagging.html] in
the Auto Scaling User Guide. **/
      Tags?: Tags;
    }
    export interface CreateLaunchConfigurationType {
      /** The name of the launch configuration. This name must be unique within the scope
of your AWS account. **/
      LaunchConfigurationName: XmlStringMaxLen255;
      /** The ID of the Amazon Machine Image (AMI) to use to launch your EC2 instances.
For more information, see Finding an AMI
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html] in the 
Amazon Elastic Compute Cloud User Guide. **/
      ImageId?: XmlStringMaxLen255;
      /** The name of the key pair. For more information, see Amazon EC2 Key Pairs
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html] in the 
Amazon Elastic Compute Cloud User Guide. **/
      KeyName?: XmlStringMaxLen255;
      /** One or more security groups with which to associate the instances.

If your instances are launched in EC2-Classic, you can either specify security
group names or the security group IDs. For more information about security
groups for EC2-Classic, see Amazon EC2 Security Groups
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html] 
in the Amazon Elastic Compute Cloud User Guide.

If your instances are launched into a VPC, specify security group IDs. For more
information, see Security Groups for Your VPC
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html] 
in the Amazon Virtual Private Cloud User Guide. **/
      SecurityGroups?: SecurityGroups;
      /** The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to. This
parameter is supported only if you are launching EC2-Classic instances. For more
information, see ClassicLink
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html] in the 
Amazon Elastic Compute Cloud User Guide. **/
      ClassicLinkVPCId?: XmlStringMaxLen255;
      /** The IDs of one or more security groups for the specified ClassicLink-enabled
VPC. This parameter is required if you specify a ClassicLink-enabled VPC, and is
not supported otherwise. For more information, see ClassicLink
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html] in the 
Amazon Elastic Compute Cloud User Guide. **/
      ClassicLinkVPCSecurityGroups?: ClassicLinkVPCSecurityGroups;
      /** The user data to make available to the launched EC2 instances. For more
information, see Instance Metadata and User Data
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html] 
in the Amazon Elastic Compute Cloud User Guide. **/
      UserData?: XmlStringUserData;
      /** The ID of the instance to use to create the launch configuration.

The new launch configuration derives attributes from the instance, with the
exception of the block device mapping.

To create a launch configuration with a block device mapping or override any
other instance attributes, specify them as part of the same request.

For more information, see Create a Launch Configuration Using an EC2 Instance
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/create-lc-with-instanceID.html] 
in the Auto Scaling User Guide. **/
      InstanceId?: XmlStringMaxLen19;
      /** The instance type of the EC2 instance. For information about available instance
types, see Available Instance Types
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#AvailableInstanceTypes] 
in the Amazon Elastic Compute Cloud User Guide. **/
      InstanceType?: XmlStringMaxLen255;
      /** The ID of the kernel associated with the AMI. **/
      KernelId?: XmlStringMaxLen255;
      /** The ID of the RAM disk associated with the AMI. **/
      RamdiskId?: XmlStringMaxLen255;
      /** One or more mappings that specify how block devices are exposed to the instance.
For more information, see Block Device Mapping
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html] 
in the Amazon Elastic Compute Cloud User Guide. **/
      BlockDeviceMappings?: BlockDeviceMappings;
      /** Enables detailed monitoring (true) or basic monitoring (false) for the Auto
Scaling instances. **/
      InstanceMonitoring?: InstanceMonitoring;
      /** The maximum hourly price to be paid for any Spot Instance launched to fulfill
the request. Spot Instances are launched when the price you specify exceeds the
current Spot market price. For more information, see Launching Spot Instances in
Your Auto Scaling Group
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/US-SpotInstances.html] 
in the Auto Scaling User Guide. **/
      SpotPrice?: SpotPrice;
      /** The name or the Amazon Resource Name (ARN) of the instance profile associated
with the IAM role for the instance.

EC2 instances launched with an IAM role will automatically have AWS security
credentials available. You can use IAM roles with Auto Scaling to automatically
enable applications running on your EC2 instances to securely access other AWS
resources. For more information, see Launch Auto Scaling Instances with an IAM
Role
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/us-iam-role.html] 
in the Auto Scaling User Guide. **/
      IamInstanceProfile?: XmlStringMaxLen1600;
      /** Indicates whether the instance is optimized for Amazon EBS I/O. By default, the
instance is not optimized for EBS I/O. The optimization provides dedicated
throughput to Amazon EBS and an optimized configuration stack to provide optimal
I/O performance. This optimization is not available with all instance types.
Additional usage charges apply. For more information, see Amazon EBS-Optimized
Instances [http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html] 
in the Amazon Elastic Compute Cloud User Guide. **/
      EbsOptimized?: EbsOptimized;
      /** Used for groups that launch instances into a virtual private cloud (VPC).
Specifies whether to assign a public IP address to each instance. For more
information, see Launching Auto Scaling Instances in a VPC
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/asg-in-vpc.html] 
in the Auto Scaling User Guide.

If you specify this parameter, be sure to specify at least one subnet when you
create your group.

Default: If the instance is launched into a default subnet, the default is true.
If the instance is launched into a nondefault subnet, the default is false. For
more information, see Supported Platforms
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html] 
in the Amazon Elastic Compute Cloud User Guide. **/
      AssociatePublicIpAddress?: AssociatePublicIpAddress;
      /** The tenancy of the instance. An instance with a tenancy of dedicated runs on
single-tenant hardware and can only be launched into a VPC.

You must set the value of this parameter to dedicated if want to launch
Dedicated Instances into a shared tenancy VPC (VPC with instance placement
tenancy attribute set to default).

If you specify this parameter, be sure to specify at least one subnet when you
create your group.

For more information, see Launching Auto Scaling Instances in a VPC
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/asg-in-vpc.html] 
in the Auto Scaling User Guide.

Valid values: default | dedicated **/
      PlacementTenancy?: XmlStringMaxLen64;
    }
    export interface CreateOrUpdateTagsType {
      /** One or more tags. **/
      Tags: Tags;
    }
    export interface DeleteAutoScalingGroupType {
      /** The name of the group to delete. **/
      AutoScalingGroupName: ResourceName;
      /** Specifies that the group will be deleted along with all instances associated
with the group, without waiting for all instances to be terminated. This
parameter also deletes any lifecycle actions associated with the group. **/
      ForceDelete?: ForceDelete;
    }
    export interface DeleteLifecycleHookAnswer {
    }
    export interface DeleteLifecycleHookType {
      /** The name of the lifecycle hook. **/
      LifecycleHookName: AsciiStringMaxLen255;
      /** The name of the Auto Scaling group for the lifecycle hook. **/
      AutoScalingGroupName: ResourceName;
    }
    export interface DeleteNotificationConfigurationType {
      /** The name of the Auto Scaling group. **/
      AutoScalingGroupName: ResourceName;
      /** The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS)
topic. **/
      TopicARN: ResourceName;
    }
    export interface DeletePolicyType {
      /** The name of the Auto Scaling group. **/
      AutoScalingGroupName?: ResourceName;
      /** The name or Amazon Resource Name (ARN) of the policy. **/
      PolicyName: ResourceName;
    }
    export interface DeleteScheduledActionType {
      /** The name of the Auto Scaling group. **/
      AutoScalingGroupName: ResourceName;
      /** The name of the action to delete. **/
      ScheduledActionName: ResourceName;
    }
    export interface DeleteTagsType {
      /** One or more tags. **/
      Tags: Tags;
    }
    export interface DescribeAccountLimitsAnswer {
      /** The maximum number of groups allowed for your AWS account. The default limit is
20 per region. **/
      MaxNumberOfAutoScalingGroups?: MaxNumberOfAutoScalingGroups;
      /** The maximum number of launch configurations allowed for your AWS account. The
default limit is 100 per region. **/
      MaxNumberOfLaunchConfigurations?: MaxNumberOfLaunchConfigurations;
      /** The current number of groups for your AWS account. **/
      NumberOfAutoScalingGroups?: NumberOfAutoScalingGroups;
      /** The current number of launch configurations for your AWS account. **/
      NumberOfLaunchConfigurations?: NumberOfLaunchConfigurations;
    }
    export interface DescribeAdjustmentTypesAnswer {
      /** The policy adjustment types. **/
      AdjustmentTypes?: AdjustmentTypes;
    }
    export interface DescribeAutoScalingInstancesType {
      /** The instances to describe; up to 50 instance IDs. If you omit this parameter,
all Auto Scaling instances are described. If you specify an ID that does not
exist, it is ignored with no error. **/
      InstanceIds?: InstanceIds;
      /** The maximum number of items to return with this call. **/
      MaxRecords?: MaxRecords;
      /** The token for the next set of items to return. (You received this token from a
previous call.) **/
      NextToken?: XmlString;
    }
    export interface DescribeAutoScalingNotificationTypesAnswer {
      /** The notification types. **/
      AutoScalingNotificationTypes?: AutoScalingNotificationTypes;
    }
    export interface DescribeLifecycleHookTypesAnswer {
      /** The lifecycle hook types. **/
      LifecycleHookTypes?: AutoScalingNotificationTypes;
    }
    export interface DescribeLifecycleHooksAnswer {
      /** The lifecycle hooks for the specified group. **/
      LifecycleHooks?: LifecycleHooks;
    }
    export interface DescribeLifecycleHooksType {
      /** The name of the group. **/
      AutoScalingGroupName: ResourceName;
      /** The names of one or more lifecycle hooks. If you omit this parameter, all
lifecycle hooks are described. **/
      LifecycleHookNames?: LifecycleHookNames;
    }
    export interface DescribeLoadBalancerTargetGroupsRequest {
      /** The name of the Auto Scaling group. **/
      AutoScalingGroupName: ResourceName;
      /** The token for the next set of items to return. (You received this token from a
previous call.) **/
      NextToken?: XmlString;
      /** The maximum number of items to return with this call. **/
      MaxRecords?: MaxRecords;
    }
    export interface DescribeLoadBalancerTargetGroupsResponse {
      /** Information about the target groups. **/
      LoadBalancerTargetGroups?: LoadBalancerTargetGroupStates;
      /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
      NextToken?: XmlString;
    }
    export interface DescribeLoadBalancersRequest {
      /** The name of the group. **/
      AutoScalingGroupName: ResourceName;
      /** The token for the next set of items to return. (You received this token from a
previous call.) **/
      NextToken?: XmlString;
      /** The maximum number of items to return with this call. **/
      MaxRecords?: MaxRecords;
    }
    export interface DescribeLoadBalancersResponse {
      /** The load balancers. **/
      LoadBalancers?: LoadBalancerStates;
      /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
      NextToken?: XmlString;
    }
    export interface DescribeMetricCollectionTypesAnswer {
      /** One or more metrics. **/
      Metrics?: MetricCollectionTypes;
      /** The granularities for the metrics. **/
      Granularities?: MetricGranularityTypes;
    }
    export interface DescribeNotificationConfigurationsAnswer {
      /** The notification configurations. **/
      NotificationConfigurations: NotificationConfigurations;
      /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
      NextToken?: XmlString;
    }
    export interface DescribeNotificationConfigurationsType {
      /** The name of the group. **/
      AutoScalingGroupNames?: AutoScalingGroupNames;
      /** The token for the next set of items to return. (You received this token from a
previous call.) **/
      NextToken?: XmlString;
      /** The maximum number of items to return with this call. **/
      MaxRecords?: MaxRecords;
    }
    export interface DescribePoliciesType {
      /** The name of the group. **/
      AutoScalingGroupName?: ResourceName;
      /** One or more policy names or policy ARNs to be described. If you omit this
parameter, all policy names are described. If an group name is provided, the
results are limited to that group. This list is limited to 50 items. If you
specify an unknown policy name, it is ignored with no error. **/
      PolicyNames?: PolicyNames;
      /** One or more policy types. Valid values are SimpleScaling and StepScaling. **/
      PolicyTypes?: PolicyTypes;
      /** The token for the next set of items to return. (You received this token from a
previous call.) **/
      NextToken?: XmlString;
      /** The maximum number of items to be returned with each call. **/
      MaxRecords?: MaxRecords;
    }
    export interface DescribeScalingActivitiesType {
      /** The activity IDs of the desired scaling activities. If you omit this parameter,
all activities for the past six weeks are described. If you specify an Auto
Scaling group, the results are limited to that group. The list of requested
activities cannot contain more than 50 items. If unknown activities are
requested, they are ignored with no error. **/
      ActivityIds?: ActivityIds;
      /** The name of the group. **/
      AutoScalingGroupName?: ResourceName;
      /** The maximum number of items to return with this call. **/
      MaxRecords?: MaxRecords;
      /** The token for the next set of items to return. (You received this token from a
previous call.) **/
      NextToken?: XmlString;
    }
    export interface DescribeScheduledActionsType {
      /** The name of the group. **/
      AutoScalingGroupName?: ResourceName;
      /** Describes one or more scheduled actions. If you omit this parameter, all
scheduled actions are described. If you specify an unknown scheduled action, it
is ignored with no error.

You can describe up to a maximum of 50 instances with a single call. If there
are more items to return, the call returns a token. To get the next set of
items, repeat the call with the returned token. **/
      ScheduledActionNames?: ScheduledActionNames;
      /** The earliest scheduled start time to return. If scheduled action names are
provided, this parameter is ignored. **/
      StartTime?: TimestampType;
      /** The latest scheduled start time to return. If scheduled action names are
provided, this parameter is ignored. **/
      EndTime?: TimestampType;
      /** The token for the next set of items to return. (You received this token from a
previous call.) **/
      NextToken?: XmlString;
      /** The maximum number of items to return with this call. **/
      MaxRecords?: MaxRecords;
    }
    export interface DescribeTagsType {
      /** A filter used to scope the tags to return. **/
      Filters?: Filters;
      /** The token for the next set of items to return. (You received this token from a
previous call.) **/
      NextToken?: XmlString;
      /** The maximum number of items to return with this call. **/
      MaxRecords?: MaxRecords;
    }
    export interface DescribeTerminationPolicyTypesAnswer {
      /** The termination policies supported by Auto Scaling (OldestInstance, 
OldestLaunchConfiguration, NewestInstance, ClosestToNextInstanceHour, and 
Default). **/
      TerminationPolicyTypes?: TerminationPolicies;
    }
    export interface DetachInstancesAnswer {
      /** The activities related to detaching the instances from the Auto Scaling group. **/
      Activities?: Activities;
    }
    export interface DetachInstancesQuery {
      /** One or more instance IDs. **/
      InstanceIds?: InstanceIds;
      /** The name of the group. **/
      AutoScalingGroupName: ResourceName;
      /** If True, the Auto Scaling group decrements the desired capacity value by the
number of instances detached. **/
      ShouldDecrementDesiredCapacity: ShouldDecrementDesiredCapacity;
    }
    export interface DetachLoadBalancerTargetGroupsResultType {
    }
    export interface DetachLoadBalancerTargetGroupsType {
      /** The name of the Auto Scaling group. **/
      AutoScalingGroupName: ResourceName;
      /** The Amazon Resource Names (ARN) of the target groups. **/
      TargetGroupARNs: TargetGroupARNs;
    }
    export interface DetachLoadBalancersResultType {
    }
    export interface DetachLoadBalancersType {
      /** The name of the Auto Scaling group. **/
      AutoScalingGroupName: ResourceName;
      /** One or more load balancer names. **/
      LoadBalancerNames: LoadBalancerNames;
    }
    export interface DisableMetricsCollectionQuery {
      /** The name or Amazon Resource Name (ARN) of the group. **/
      AutoScalingGroupName: ResourceName;
      /** One or more of the following metrics. If you omit this parameter, all metrics
are disabled.

&amp;#42;   GroupMinSize 
 
 
*   GroupMaxSize 
 
 
*   GroupDesiredCapacity 
 
 
*   GroupInServiceInstances 
 
 
*   GroupPendingInstances 
 
 
*   GroupStandbyInstances 
 
 
*   GroupTerminatingInstances 
 
 
*   GroupTotalInstances **/
      Metrics?: Metrics;
    }
    export interface Ebs {
      /** The ID of the snapshot. **/
      SnapshotId?: XmlStringMaxLen255;
      /** The volume size, in GiB. For standard volumes, specify a value from 1 to 1,024.
For io1 volumes, specify a value from 4 to 16,384. For gp2 volumes, specify a
value from 1 to 16,384. If you specify a snapshot, the volume size must be equal
to or larger than the snapshot size.

Default: If you create a volume from a snapshot and you don&#x27;t specify a volume
size, the default is the snapshot size. **/
      VolumeSize?: BlockDeviceEbsVolumeSize;
      /** The volume type. For more information, see Amazon EBS Volume Types
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html] in the 
Amazon Elastic Compute Cloud User Guide.

Valid values: standard | io1 | gp2 

Default: standard **/
      VolumeType?: BlockDeviceEbsVolumeType;
      /** Indicates whether the volume is deleted on instance termination.

Default: true **/
      DeleteOnTermination?: BlockDeviceEbsDeleteOnTermination;
      /** The number of I/O operations per second (IOPS) to provision for the volume.

Constraint: Required when the volume type is io1. **/
      Iops?: BlockDeviceEbsIops;
      /** Indicates whether the volume should be encrypted. Encrypted EBS volumes must be
attached to instances that support Amazon EBS encryption. Volumes that are
created from encrypted snapshots are automatically encrypted. There is no way to
create an encrypted volume from an unencrypted snapshot or an unencrypted volume
from an encrypted snapshot. For more information, see Amazon EBS Encryption
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html] in the 
Amazon Elastic Compute Cloud User Guide. **/
      Encrypted?: BlockDeviceEbsEncrypted;
    }
    export interface EnableMetricsCollectionQuery {
      /** The name or ARN of the Auto Scaling group. **/
      AutoScalingGroupName: ResourceName;
      /** One or more of the following metrics. If you omit this parameter, all metrics
are enabled.

&amp;#42;   GroupMinSize 
 
 
*   GroupMaxSize 
 
 
*   GroupDesiredCapacity 
 
 
*   GroupInServiceInstances 
 
 
*   GroupPendingInstances 
 
 
*   GroupStandbyInstances 
 
 
*   GroupTerminatingInstances 
 
 
*   GroupTotalInstances **/
      Metrics?: Metrics;
      /** The granularity to associate with the metrics to collect. The only valid value
is 1Minute. **/
      Granularity: XmlStringMaxLen255;
    }
    export interface EnabledMetric {
      /** One of the following metrics:

&amp;#42;   GroupMinSize 
 
 
*   GroupMaxSize 
 
 
*   GroupDesiredCapacity 
 
 
*   GroupInServiceInstances 
 
 
*   GroupPendingInstances 
 
 
*   GroupStandbyInstances 
 
 
*   GroupTerminatingInstances 
 
 
*   GroupTotalInstances **/
      Metric?: XmlStringMaxLen255;
      /** The granularity of the metric. The only valid value is 1Minute. **/
      Granularity?: XmlStringMaxLen255;
    }
    export interface EnterStandbyAnswer {
      /** The activities related to moving instances into Standby mode. **/
      Activities?: Activities;
    }
    export interface EnterStandbyQuery {
      /** One or more instances to move into Standby mode. You must specify at least one
instance ID. **/
      InstanceIds?: InstanceIds;
      /** The name of the Auto Scaling group. **/
      AutoScalingGroupName: ResourceName;
      /** Specifies whether the instances moved to Standby mode count as part of the Auto
Scaling group&#x27;s desired capacity. If set, the desired capacity for the Auto
Scaling group decrements by the number of instances moved to Standby mode. **/
      ShouldDecrementDesiredCapacity: ShouldDecrementDesiredCapacity;
    }
    export interface ExecutePolicyType {
      /** The name or Amazon Resource Name (ARN) of the Auto Scaling group. **/
      AutoScalingGroupName?: ResourceName;
      /** The name or ARN of the policy. **/
      PolicyName: ResourceName;
      /** If this parameter is true, Auto Scaling waits for the cooldown period to
complete before executing the policy. Otherwise, Auto Scaling executes the
policy without waiting for the cooldown period to complete.

This parameter is not supported if the policy type is StepScaling.

For more information, see Auto Scaling Cooldowns
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/Cooldown.html] in
the Auto Scaling User Guide. **/
      HonorCooldown?: HonorCooldown;
      /** The metric value to compare to BreachThreshold. This enables you to execute a
policy of type StepScaling and determine which step adjustment to use. For
example, if the breach threshold is 50 and you want to use a step adjustment
with a lower bound of 0 and an upper bound of 10, you can set the metric value
to 59.

If you specify a metric value that doesn&#x27;t correspond to a step adjustment for
the policy, the call returns an error.

This parameter is required if the policy type is StepScaling and not supported
otherwise. **/
      MetricValue?: MetricScale;
      /** The breach threshold for the alarm.

This parameter is required if the policy type is StepScaling and not supported
otherwise. **/
      BreachThreshold?: MetricScale;
    }
    export interface ExitStandbyAnswer {
      /** The activities related to moving instances out of Standby mode. **/
      Activities?: Activities;
    }
    export interface ExitStandbyQuery {
      /** One or more instance IDs. You must specify at least one instance ID. **/
      InstanceIds?: InstanceIds;
      /** The name of the Auto Scaling group. **/
      AutoScalingGroupName: ResourceName;
    }
    export interface Filter {
      /** The name of the filter. The valid values are: &quot;auto-scaling-group&quot;, &quot;key&quot;, 
&quot;value&quot;, and &quot;propagate-at-launch&quot;. **/
      Name?: XmlString;
      /** The value of the filter. **/
      Values?: Values;
    }
    export interface Instance {
      /** The ID of the instance. **/
      InstanceId: XmlStringMaxLen19;
      /** The Availability Zone in which the instance is running. **/
      AvailabilityZone: XmlStringMaxLen255;
      /** A description of the current lifecycle state. Note that the Quarantined state is
not used. **/
      LifecycleState: LifecycleState;
      /** The last reported health status of the instance. &quot;Healthy&quot; means that the
instance is healthy and should remain in service. &quot;Unhealthy&quot; means that the
instance is unhealthy and Auto Scaling should terminate and replace it. **/
      HealthStatus: XmlStringMaxLen32;
      /** The launch configuration associated with the instance. **/
      LaunchConfigurationName: XmlStringMaxLen255;
      /** Indicates whether the instance is protected from termination by Auto Scaling
when scaling in. **/
      ProtectedFromScaleIn: InstanceProtected;
    }
    export interface InstanceMonitoring {
      /** If True, instance monitoring is enabled. **/
      Enabled?: MonitoringEnabled;
    }
    export interface InvalidNextToken {
      /**  **/
      message?: XmlStringMaxLen255;
    }
    export interface LaunchConfiguration {
      /** The name of the launch configuration. **/
      LaunchConfigurationName: XmlStringMaxLen255;
      /** The Amazon Resource Name (ARN) of the launch configuration. **/
      LaunchConfigurationARN?: ResourceName;
      /** The ID of the Amazon Machine Image (AMI). **/
      ImageId: XmlStringMaxLen255;
      /** The name of the key pair. **/
      KeyName?: XmlStringMaxLen255;
      /** The security groups to associate with the instances. **/
      SecurityGroups?: SecurityGroups;
      /** The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to. This
parameter can only be used if you are launching EC2-Classic instances. For more
information, see ClassicLink
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html] in the 
Amazon Elastic Compute Cloud User Guide. **/
      ClassicLinkVPCId?: XmlStringMaxLen255;
      /** The IDs of one or more security groups for the VPC specified in ClassicLinkVPCId
. This parameter is required if you specify a ClassicLink-enabled VPC, and
cannot be used otherwise. For more information, see ClassicLink
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html] in the 
Amazon Elastic Compute Cloud User Guide. **/
      ClassicLinkVPCSecurityGroups?: ClassicLinkVPCSecurityGroups;
      /** The user data available to the instances. **/
      UserData?: XmlStringUserData;
      /** The instance type for the instances. **/
      InstanceType: XmlStringMaxLen255;
      /** The ID of the kernel associated with the AMI. **/
      KernelId?: XmlStringMaxLen255;
      /** The ID of the RAM disk associated with the AMI. **/
      RamdiskId?: XmlStringMaxLen255;
      /** A block device mapping, which specifies the block devices for the instance. **/
      BlockDeviceMappings?: BlockDeviceMappings;
      /** Controls whether instances in this group are launched with detailed (true) or
basic (false) monitoring. **/
      InstanceMonitoring?: InstanceMonitoring;
      /** The price to bid when launching Spot Instances. **/
      SpotPrice?: SpotPrice;
      /** The name or Amazon Resource Name (ARN) of the instance profile associated with
the IAM role for the instance. **/
      IamInstanceProfile?: XmlStringMaxLen1600;
      /** The creation date and time for the launch configuration. **/
      CreatedTime: TimestampType;
      /** Controls whether the instance is optimized for EBS I/O (true) or not (false). **/
      EbsOptimized?: EbsOptimized;
      /** [EC2-VPC] Indicates whether to assign a public IP address to each instance. **/
      AssociatePublicIpAddress?: AssociatePublicIpAddress;
      /** The tenancy of the instance, either default or dedicated. An instance with 
dedicated tenancy runs in an isolated, single-tenant hardware and can only be
launched into a VPC. **/
      PlacementTenancy?: XmlStringMaxLen64;
    }
    export interface LaunchConfigurationNameType {
      /** The name of the launch configuration. **/
      LaunchConfigurationName: ResourceName;
    }
    export interface LaunchConfigurationNamesType {
      /** The launch configuration names. If you omit this parameter, all launch
configurations are described. **/
      LaunchConfigurationNames?: LaunchConfigurationNames;
      /** The token for the next set of items to return. (You received this token from a
previous call.) **/
      NextToken?: XmlString;
      /** The maximum number of items to return with this call. The default is 100. **/
      MaxRecords?: MaxRecords;
    }
    export interface LaunchConfigurationsType {
      /** The launch configurations. **/
      LaunchConfigurations: LaunchConfigurations;
      /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
      NextToken?: XmlString;
    }
    export interface LifecycleHook {
      /** The name of the lifecycle hook. **/
      LifecycleHookName?: AsciiStringMaxLen255;
      /** The name of the Auto Scaling group for the lifecycle hook. **/
      AutoScalingGroupName?: ResourceName;
      /** The state of the EC2 instance to which you want to attach the lifecycle hook.
For a list of lifecycle hook types, see DescribeLifecycleHookTypes. **/
      LifecycleTransition?: LifecycleTransition;
      /** The ARN of the notification target that Auto Scaling uses to notify you when an
instance is in the transition state for the lifecycle hook. This ARN target can
be either an SQS queue or an SNS topic. The notification message sent to the
target includes the following:

&amp;#42;  Lifecycle action token
 
 
*  User account ID
 
 
*  Name of the Auto Scaling group
 
 
*  Lifecycle hook name
 
 
*  EC2 instance ID
 
 
*  Lifecycle transition
 
 
*  Notification metadata **/
      NotificationTargetARN?: ResourceName;
      /** The ARN of the IAM role that allows the Auto Scaling group to publish to the
specified notification target. **/
      RoleARN?: ResourceName;
      /** Additional information that you want to include any time Auto Scaling sends a
message to the notification target. **/
      NotificationMetadata?: XmlStringMaxLen1023;
      /** The maximum time, in seconds, that can elapse before the lifecycle hook times
out. The default is 3600 seconds (1 hour). When the lifecycle hook times out,
Auto Scaling performs the default action. You can prevent the lifecycle hook
from timing out by calling RecordLifecycleActionHeartbeat. **/
      HeartbeatTimeout?: HeartbeatTimeout;
      /** The maximum time, in seconds, that an instance can remain in a Pending:Wait or 
Terminating:Wait state. The default is 172800 seconds (48 hours). **/
      GlobalTimeout?: GlobalTimeout;
      /** Defines the action the Auto Scaling group should take when the lifecycle hook
timeout elapses or if an unexpected failure occurs. The valid values are 
CONTINUE and ABANDON. The default value is CONTINUE. **/
      DefaultResult?: LifecycleActionResult;
    }
    export interface LimitExceededFault {
      /**  **/
      message?: XmlStringMaxLen255;
    }
    export interface LoadBalancerState {
      /** The name of the load balancer. **/
      LoadBalancerName?: XmlStringMaxLen255;
      /** One of the following load balancer states:

&amp;#42;   Adding - The instances in the group are being registered with the load
 balancer.
 
 
*   Added - All instances in the group are registered with the load balancer.
 
 
*   InService - At least one instance in the group passed an ELB health check.
 
 
*   Removing - The instances in the group are being deregistered from the load
 balancer. If connection draining is enabled, Elastic Load Balancing waits for
 in-flight requests to complete before deregistering the instances.
 
 
*   Removed - All instances in the group are deregistered from the load
 balancer. **/
      State?: XmlStringMaxLen255;
    }
    export interface LoadBalancerTargetGroupState {
      /** The Amazon Resource Name (ARN) of the target group. **/
      LoadBalancerTargetGroupARN?: XmlStringMaxLen511;
      /** The state of the target group.

&amp;#42;   Adding - The Auto Scaling instances are being registered with the target
 group.
 
 
*   Added - All Auto Scaling instances are registered with the target group.
 
 
*   InService - At least one Auto Scaling instance passed an ELB health check.
 
 
*   Removing - The Auto Scaling instances are being deregistered from the target
 group. If connection draining is enabled, Elastic Load Balancing waits for
 in-flight requests to complete before deregistering the instances.
 
 
*   Removed - All Auto Scaling instances are deregistered from the target group. **/
      State?: XmlStringMaxLen255;
    }
    export interface MetricCollectionType {
      /** One of the following metrics:

&amp;#42;   GroupMinSize 
 
 
*   GroupMaxSize 
 
 
*   GroupDesiredCapacity 
 
 
*   GroupInServiceInstances 
 
 
*   GroupPendingInstances 
 
 
*   GroupStandbyInstances 
 
 
*   GroupTerminatingInstances 
 
 
*   GroupTotalInstances **/
      Metric?: XmlStringMaxLen255;
    }
    export interface MetricGranularityType {
      /** The granularity. The only valid value is 1Minute. **/
      Granularity?: XmlStringMaxLen255;
    }
    export interface NotificationConfiguration {
      /** The name of the group. **/
      AutoScalingGroupName?: ResourceName;
      /** The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS)
topic. **/
      TopicARN?: ResourceName;
      /** One of the following event notification types:

&amp;#42;   autoscaling:EC2_INSTANCE_LAUNCH 
 
 
*   autoscaling:EC2_INSTANCE_LAUNCH_ERROR 
 
 
*   autoscaling:EC2_INSTANCE_TERMINATE 
 
 
*   autoscaling:EC2_INSTANCE_TERMINATE_ERROR 
 
 
*   autoscaling:TEST_NOTIFICATION **/
      NotificationType?: XmlStringMaxLen255;
    }
    export interface PoliciesType {
      /** The scaling policies. **/
      ScalingPolicies?: ScalingPolicies;
      /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
      NextToken?: XmlString;
    }
    export interface PolicyARNType {
      /** The Amazon Resource Name (ARN) of the policy. **/
      PolicyARN?: ResourceName;
    }
    export interface ProcessType {
      /** One of the following processes:

&amp;#42;   Launch 
 
 
*   Terminate 
 
 
*   AddToLoadBalancer 
 
 
*   AlarmNotification 
 
 
*   AZRebalance 
 
 
*   HealthCheck 
 
 
*   ReplaceUnhealthy 
 
 
*   ScheduledActions **/
      ProcessName: XmlStringMaxLen255;
    }
    export interface ProcessesType {
      /** The names of the process types. **/
      Processes?: Processes;
    }
    export interface PutLifecycleHookAnswer {
    }
    export interface PutLifecycleHookType {
      /** The name of the lifecycle hook. **/
      LifecycleHookName: AsciiStringMaxLen255;
      /** The name of the Auto Scaling group to which you want to assign the lifecycle
hook. **/
      AutoScalingGroupName: ResourceName;
      /** The instance state to which you want to attach the lifecycle hook. For a list of
lifecycle hook types, see DescribeLifecycleHookTypes.

This parameter is required for new lifecycle hooks, but optional when updating
existing hooks. **/
      LifecycleTransition?: LifecycleTransition;
      /** The ARN of the IAM role that allows the Auto Scaling group to publish to the
specified notification target.

This parameter is required for new lifecycle hooks, but optional when updating
existing hooks. **/
      RoleARN?: ResourceName;
      /** The ARN of the notification target that Auto Scaling will use to notify you when
an instance is in the transition state for the lifecycle hook. This target can
be either an SQS queue or an SNS topic. If you specify an empty string, this
overrides the current ARN.

The notification messages sent to the target include the following information:

&amp;#42;   AutoScalingGroupName. The name of the Auto Scaling group.
 
 
*   AccountId. The AWS account ID.
 
 
*   LifecycleTransition. The lifecycle hook type.
 
 
*   LifecycleActionToken. The lifecycle action token.
 
 
*   EC2InstanceId. The EC2 instance ID.
 
 
*   LifecycleHookName. The name of the lifecycle hook.
 
 
*   NotificationMetadata. User-defined information.
 
 

This operation uses the JSON format when sending notifications to an Amazon SQS
queue, and an email key/value pair format when sending notifications to an
Amazon SNS topic.

When you specify a notification target, Auto Scaling sends it a test message.
Test messages contains the following additional key/value pair: &quot;Event&quot;:
&quot;autoscaling:TEST_NOTIFICATION&quot;. **/
      NotificationTargetARN?: NotificationTargetResourceName;
      /** Contains additional information that you want to include any time Auto Scaling
sends a message to the notification target. **/
      NotificationMetadata?: XmlStringMaxLen1023;
      /** The amount of time, in seconds, that can elapse before the lifecycle hook times
out. When the lifecycle hook times out, Auto Scaling performs the default
action. You can prevent the lifecycle hook from timing out by calling 
RecordLifecycleActionHeartbeat. The default is 3600 seconds (1 hour). **/
      HeartbeatTimeout?: HeartbeatTimeout;
      /** Defines the action the Auto Scaling group should take when the lifecycle hook
timeout elapses or if an unexpected failure occurs. This parameter can be either 
CONTINUE or ABANDON. The default value is ABANDON. **/
      DefaultResult?: LifecycleActionResult;
    }
    export interface PutNotificationConfigurationType {
      /** The name of the Auto Scaling group. **/
      AutoScalingGroupName: ResourceName;
      /** The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS)
topic. **/
      TopicARN: ResourceName;
      /** The type of event that will cause the notification to be sent. For details about
notification types supported by Auto Scaling, see 
DescribeAutoScalingNotificationTypes. **/
      NotificationTypes: AutoScalingNotificationTypes;
    }
    export interface PutScalingPolicyType {
      /** The name or ARN of the group. **/
      AutoScalingGroupName: ResourceName;
      /** The name of the policy. **/
      PolicyName: XmlStringMaxLen255;
      /** The policy type. Valid values are SimpleScaling and StepScaling. If the policy
type is null, the value is treated as SimpleScaling. **/
      PolicyType?: XmlStringMaxLen64;
      /** The adjustment type. Valid values are ChangeInCapacity, ExactCapacity, and 
PercentChangeInCapacity.

For more information, see Dynamic Scaling
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/as-scale-based-on-demand.html] 
in the Auto Scaling User Guide. **/
      AdjustmentType: XmlStringMaxLen255;
      /** Available for backward compatibility. Use MinAdjustmentMagnitude instead. **/
      MinAdjustmentStep?: MinAdjustmentStep;
      /** The minimum number of instances to scale. If the value of AdjustmentType is 
PercentChangeInCapacity, the scaling policy changes the DesiredCapacity of the
Auto Scaling group by at least this many instances. Otherwise, the error is 
ValidationError. **/
      MinAdjustmentMagnitude?: MinAdjustmentMagnitude;
      /** The amount by which to scale, based on the specified adjustment type. A positive
value adds to the current capacity while a negative number removes from the
current capacity.

This parameter is required if the policy type is SimpleScaling and not supported
otherwise. **/
      ScalingAdjustment?: PolicyIncrement;
      /** The amount of time, in seconds, after a scaling activity completes and before
the next scaling activity can start. If this parameter is not specified, the
default cooldown period for the group applies.

This parameter is not supported unless the policy type is SimpleScaling.

For more information, see Auto Scaling Cooldowns
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/Cooldown.html] in
the Auto Scaling User Guide. **/
      Cooldown?: Cooldown;
      /** The aggregation type for the CloudWatch metrics. Valid values are Minimum, 
Maximum, and Average. If the aggregation type is null, the value is treated as 
Average.

This parameter is not supported if the policy type is SimpleScaling. **/
      MetricAggregationType?: XmlStringMaxLen32;
      /** A set of adjustments that enable you to scale based on the size of the alarm
breach.

This parameter is required if the policy type is StepScaling and not supported
otherwise. **/
      StepAdjustments?: StepAdjustments;
      /** The estimated time, in seconds, until a newly launched instance can contribute
to the CloudWatch metrics. The default is to use the value specified for the
default cooldown period for the group.

This parameter is not supported if the policy type is SimpleScaling. **/
      EstimatedInstanceWarmup?: EstimatedInstanceWarmup;
    }
    export interface PutScheduledUpdateGroupActionType {
      /** The name or Amazon Resource Name (ARN) of the Auto Scaling group. **/
      AutoScalingGroupName: ResourceName;
      /** The name of this scaling action. **/
      ScheduledActionName: XmlStringMaxLen255;
      /** This parameter is deprecated. **/
      Time?: TimestampType;
      /** The time for this action to start, in &quot;YYYY-MM-DDThh:mm:ssZ&quot; format in UTC/GMT
only (for example, 2014-06-01T00:00:00Z).

If you try to schedule your action in the past, Auto Scaling returns an error
message.

When StartTime and EndTime are specified with Recurrence, they form the
boundaries of when the recurring action starts and stops. **/
      StartTime?: TimestampType;
      /** The time for this action to end. **/
      EndTime?: TimestampType;
      /** The time when recurring future actions will start. Start time is specified by
the user following the Unix cron syntax format. For more information, see Cron
[http://en.wikipedia.org/wiki/Cron] in Wikipedia.

When StartTime and EndTime are specified with Recurrence, they form the
boundaries of when the recurring action will start and stop. **/
      Recurrence?: XmlStringMaxLen255;
      /** The minimum size for the Auto Scaling group. **/
      MinSize?: AutoScalingGroupMinSize;
      /** The maximum size for the Auto Scaling group. **/
      MaxSize?: AutoScalingGroupMaxSize;
      /** The number of EC2 instances that should be running in the group. **/
      DesiredCapacity?: AutoScalingGroupDesiredCapacity;
    }
    export interface RecordLifecycleActionHeartbeatAnswer {
    }
    export interface RecordLifecycleActionHeartbeatType {
      /** The name of the lifecycle hook. **/
      LifecycleHookName: AsciiStringMaxLen255;
      /** The name of the Auto Scaling group for the hook. **/
      AutoScalingGroupName: ResourceName;
      /** A token that uniquely identifies a specific lifecycle action associated with an
instance. Auto Scaling sends this token to the notification target you specified
when you created the lifecycle hook. **/
      LifecycleActionToken?: LifecycleActionToken;
      /** The ID of the instance. **/
      InstanceId?: XmlStringMaxLen19;
    }
    export interface ResourceContentionFault {
      /**  **/
      message?: XmlStringMaxLen255;
    }
    export interface ResourceInUseFault {
      /**  **/
      message?: XmlStringMaxLen255;
    }
    export interface ScalingActivityInProgressFault {
      /**  **/
      message?: XmlStringMaxLen255;
    }
    export interface ScalingPolicy {
      /** The name of the Auto Scaling group associated with this scaling policy. **/
      AutoScalingGroupName?: XmlStringMaxLen255;
      /** The name of the scaling policy. **/
      PolicyName?: XmlStringMaxLen255;
      /** The Amazon Resource Name (ARN) of the policy. **/
      PolicyARN?: ResourceName;
      /** The policy type. Valid values are SimpleScaling and StepScaling. **/
      PolicyType?: XmlStringMaxLen64;
      /** The adjustment type, which specifies how ScalingAdjustment is interpreted. Valid
values are ChangeInCapacity, ExactCapacity, and PercentChangeInCapacity. **/
      AdjustmentType?: XmlStringMaxLen255;
      /** Available for backward compatibility. Use MinAdjustmentMagnitude instead. **/
      MinAdjustmentStep?: MinAdjustmentStep;
      /** The minimum number of instances to scale. If the value of AdjustmentType is 
PercentChangeInCapacity, the scaling policy changes the DesiredCapacity of the
Auto Scaling group by at least this many instances. Otherwise, the error is 
ValidationError. **/
      MinAdjustmentMagnitude?: MinAdjustmentMagnitude;
      /** The amount by which to scale, based on the specified adjustment type. A positive
value adds to the current capacity while a negative number removes from the
current capacity. **/
      ScalingAdjustment?: PolicyIncrement;
      /** The amount of time, in seconds, after a scaling activity completes before any
further trigger-related scaling activities can start. **/
      Cooldown?: Cooldown;
      /** A set of adjustments that enable you to scale based on the size of the alarm
breach. **/
      StepAdjustments?: StepAdjustments;
      /** The aggregation type for the CloudWatch metrics. Valid values are Minimum, 
Maximum, and Average. **/
      MetricAggregationType?: XmlStringMaxLen32;
      /** The estimated time, in seconds, until a newly launched instance can contribute
to the CloudWatch metrics. **/
      EstimatedInstanceWarmup?: EstimatedInstanceWarmup;
      /** The CloudWatch alarms related to the policy. **/
      Alarms?: Alarms;
    }
    export interface ScalingProcessQuery {
      /** The name or Amazon Resource Name (ARN) of the Auto Scaling group. **/
      AutoScalingGroupName: ResourceName;
      /** One or more of the following processes. If you omit this parameter, all
processes are specified.

&amp;#42;   Launch 
 
 
*   Terminate 
 
 
*   HealthCheck 
 
 
*   ReplaceUnhealthy 
 
 
*   AZRebalance 
 
 
*   AlarmNotification 
 
 
*   ScheduledActions 
 
 
*   AddToLoadBalancer **/
      ScalingProcesses?: ProcessNames;
    }
    export interface ScheduledActionsType {
      /** The scheduled actions. **/
      ScheduledUpdateGroupActions?: ScheduledUpdateGroupActions;
      /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
      NextToken?: XmlString;
    }
    export interface ScheduledUpdateGroupAction {
      /** The name of the group. **/
      AutoScalingGroupName?: XmlStringMaxLen255;
      /** The name of the scheduled action. **/
      ScheduledActionName?: XmlStringMaxLen255;
      /** The Amazon Resource Name (ARN) of the scheduled action. **/
      ScheduledActionARN?: ResourceName;
      /** This parameter is deprecated. **/
      Time?: TimestampType;
      /** The date and time that the action is scheduled to begin. This date and time can
be up to one month in the future.

When StartTime and EndTime are specified with Recurrence, they form the
boundaries of when the recurring action will start and stop. **/
      StartTime?: TimestampType;
      /** The date and time that the action is scheduled to end. This date and time can be
up to one month in the future. **/
      EndTime?: TimestampType;
      /** The recurring schedule for the action. **/
      Recurrence?: XmlStringMaxLen255;
      /** The minimum size of the group. **/
      MinSize?: AutoScalingGroupMinSize;
      /** The maximum size of the group. **/
      MaxSize?: AutoScalingGroupMaxSize;
      /** The number of instances you prefer to maintain in the group. **/
      DesiredCapacity?: AutoScalingGroupDesiredCapacity;
    }
    export interface SetDesiredCapacityType {
      /** The name of the Auto Scaling group. **/
      AutoScalingGroupName: ResourceName;
      /** The number of EC2 instances that should be running in the Auto Scaling group. **/
      DesiredCapacity: AutoScalingGroupDesiredCapacity;
      /** By default, SetDesiredCapacity overrides any cooldown period associated with the
Auto Scaling group. Specify True to make Auto Scaling to wait for the cool-down
period associated with the Auto Scaling group to complete before initiating a
scaling activity to set your Auto Scaling group to its new capacity. **/
      HonorCooldown?: HonorCooldown;
    }
    export interface SetInstanceHealthQuery {
      /** The ID of the instance. **/
      InstanceId: XmlStringMaxLen19;
      /** The health status of the instance. Set to Healthy if you want the instance to
remain in service. Set to Unhealthy if you want the instance to be out of
service. Auto Scaling will terminate and replace the unhealthy instance. **/
      HealthStatus: XmlStringMaxLen32;
      /** If the Auto Scaling group of the specified instance has a HealthCheckGracePeriod 
specified for the group, by default, this call will respect the grace period.
Set this to False, if you do not want the call to respect the grace period
associated with the group.

For more information, see the description of the health check grace period for 
CreateAutoScalingGroup. **/
      ShouldRespectGracePeriod?: ShouldRespectGracePeriod;
    }
    export interface SetInstanceProtectionAnswer {
    }
    export interface SetInstanceProtectionQuery {
      /** One or more instance IDs. **/
      InstanceIds: InstanceIds;
      /** The name of the group. **/
      AutoScalingGroupName: ResourceName;
      /** Indicates whether the instance is protected from termination by Auto Scaling
when scaling in. **/
      ProtectedFromScaleIn: ProtectedFromScaleIn;
    }
    export interface StepAdjustment {
      /** The lower bound for the difference between the alarm threshold and the
CloudWatch metric. If the metric value is above the breach threshold, the lower
bound is inclusive (the metric must be greater than or equal to the threshold
plus the lower bound). Otherwise, it is exclusive (the metric must be greater
than the threshold plus the lower bound). A null value indicates negative
infinity. **/
      MetricIntervalLowerBound?: MetricScale;
      /** The upper bound for the difference between the alarm threshold and the
CloudWatch metric. If the metric value is above the breach threshold, the upper
bound is exclusive (the metric must be less than the threshold plus the upper
bound). Otherwise, it is inclusive (the metric must be less than or equal to the
threshold plus the upper bound). A null value indicates positive infinity.

The upper bound must be greater than the lower bound. **/
      MetricIntervalUpperBound?: MetricScale;
      /** The amount by which to scale, based on the specified adjustment type. A positive
value adds to the current capacity while a negative number removes from the
current capacity. **/
      ScalingAdjustment: PolicyIncrement;
    }
    export interface SuspendedProcess {
      /** The name of the suspended process. **/
      ProcessName?: XmlStringMaxLen255;
      /** The reason that the process was suspended. **/
      SuspensionReason?: XmlStringMaxLen255;
    }
    export interface Tag {
      /** The name of the group. **/
      ResourceId?: XmlString;
      /** The type of resource. The only supported value is auto-scaling-group. **/
      ResourceType?: XmlString;
      /** The tag key. **/
      Key: TagKey;
      /** The tag value. **/
      Value?: TagValue;
      /** Determines whether the tag is added to new instances as they are launched in the
group. **/
      PropagateAtLaunch?: PropagateAtLaunch;
    }
    export interface TagDescription {
      /** The name of the group. **/
      ResourceId?: XmlString;
      /** The type of resource. The only supported value is auto-scaling-group. **/
      ResourceType?: XmlString;
      /** The tag key. **/
      Key?: TagKey;
      /** The tag value. **/
      Value?: TagValue;
      /** Determines whether the tag is added to new instances as they are launched in the
group. **/
      PropagateAtLaunch?: PropagateAtLaunch;
    }
    export interface TagsType {
      /** One or more tags. **/
      Tags?: TagDescriptionList;
      /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
      NextToken?: XmlString;
    }
    export interface TerminateInstanceInAutoScalingGroupType {
      /** The ID of the instance. **/
      InstanceId: XmlStringMaxLen19;
      /** If true, terminating the instance also decrements the size of the Auto Scaling
group. **/
      ShouldDecrementDesiredCapacity: ShouldDecrementDesiredCapacity;
    }
    export interface UpdateAutoScalingGroupType {
      /** The name of the Auto Scaling group. **/
      AutoScalingGroupName: ResourceName;
      /** The name of the launch configuration. **/
      LaunchConfigurationName?: ResourceName;
      /** The minimum size of the Auto Scaling group. **/
      MinSize?: AutoScalingGroupMinSize;
      /** The maximum size of the Auto Scaling group. **/
      MaxSize?: AutoScalingGroupMaxSize;
      /** The number of EC2 instances that should be running in the Auto Scaling group.
This number must be greater than or equal to the minimum size of the group and
less than or equal to the maximum size of the group. **/
      DesiredCapacity?: AutoScalingGroupDesiredCapacity;
      /** The amount of time, in seconds, after a scaling activity completes before
another scaling activity can start. The default is 300.

For more information, see Auto Scaling Cooldowns
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/Cooldown.html] in
the Auto Scaling User Guide. **/
      DefaultCooldown?: Cooldown;
      /** One or more Availability Zones for the group. **/
      AvailabilityZones?: AvailabilityZones;
      /** The service to use for the health checks. The valid values are EC2 and ELB. **/
      HealthCheckType?: XmlStringMaxLen32;
      /** The amount of time, in seconds, that Auto Scaling waits before checking the
health status of an EC2 instance that has come into service. The default is 0.

For more information, see Health Checks
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/healthcheck.html] 
in the Auto Scaling User Guide. **/
      HealthCheckGracePeriod?: HealthCheckGracePeriod;
      /** The name of the placement group into which you&#x27;ll launch your instances, if any.
For more information, see Placement Groups
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html] in
the Amazon Elastic Compute Cloud User Guide. **/
      PlacementGroup?: XmlStringMaxLen255;
      /** The ID of the subnet, if you are launching into a VPC. You can specify several
subnets in a comma-separated list.

When you specify VPCZoneIdentifier with AvailabilityZones, ensure that the
subnets&#x27; Availability Zones match the values you specify for AvailabilityZones.

For more information, see Launching Auto Scaling Instances in a VPC
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/asg-in-vpc.html] 
in the Auto Scaling User Guide. **/
      VPCZoneIdentifier?: XmlStringMaxLen2047;
      /** A standalone termination policy or a list of termination policies used to select
the instance to terminate. The policies are executed in the order that they are
listed.

For more information, see Controlling Which Instances Auto Scaling Terminates
During Scale In
[http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/AutoScalingBehavior.InstanceTermination.html] 
in the Auto Scaling User Guide. **/
      TerminationPolicies?: TerminationPolicies;
      /** Indicates whether newly launched instances are protected from termination by
Auto Scaling when scaling in. **/
      NewInstancesProtectedFromScaleIn?: InstanceProtected;
    }
  }
}
