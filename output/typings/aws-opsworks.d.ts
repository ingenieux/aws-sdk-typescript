// Type definitions for aws-sdk - AWS OpsWorks
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2013-02-18
   * endpointPrefix: opsworks
   * serviceAbbreviation: 
   * signatureVersion: v4
   * protocol: json
   *
   * AWS OpsWorksWelcome to the AWS OpsWorks API Reference . This guide provides descriptions,
syntax, and usage examples for AWS OpsWorks actions and data types, including
common parameters and error codes.

AWS OpsWorks is an application management service that provides an integrated
experience for overseeing the complete application lifecycle. For information
about this product, go to the AWS OpsWorks [http://aws.amazon.com/opsworks/] 
details page.

SDKs and CLI

The most common way to use the AWS OpsWorks API is by using the AWS Command Line
Interface (CLI) or by using one of the AWS SDKs to implement applications in
your preferred language. For more information, see:

 &amp;#42; AWS CLI
   [http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html]
   
   
 * AWS SDK for Java
   [http://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/opsworks/AWSOpsWorksClient.html]
   
   
 * AWS SDK for .NET
   [http://docs.aws.amazon.com/sdkfornet/latest/apidocs/html/N_Amazon_OpsWorks.htm]
   
   
 * AWS SDK for PHP 2
   [http://docs.aws.amazon.com/aws-sdk-php-2/latest/class-Aws.OpsWorks.OpsWorksClient.html]
   
   
 * AWS SDK for Ruby [http://docs.aws.amazon.com/sdkforruby/api/]
   
   
 * AWS SDK for Node.js [http://aws.amazon.com/documentation/sdkforjavascript/]
   
   
 * AWS SDK for Python(Boto)
   [http://docs.pythonboto.org/en/latest/ref/opsworks.html]
   
   

Endpoints

AWS OpsWorks supports the following endpoints, all HTTPS. You must connect to
one of the following endpoints. Stacks can only be accessed or managed within
the endpoint in which they are created.

 * opsworks.us-east-1.amazonaws.com
   
   
 * opsworks.us-west-1.amazonaws.com
   
   
 * opsworks.us-west-2.amazonaws.com
   
   
 * opsworks.eu-west-1.amazonaws.com
   
   
 * opsworks.eu-central-1.amazonaws.com
   
   
 * opsworks.ap-northeast-1.amazonaws.com
   
   
 * opsworks.ap-northeast-2.amazonaws.com
   
   
 * opsworks.ap-south-1.amazonaws.com
   
   
 * opsworks.ap-southeast-1.amazonaws.com
   
   
 * opsworks.ap-southeast-2.amazonaws.com
   
   
 * opsworks.sa-east-1.amazonaws.com
   
   

Chef Versions

When you call CreateStack , CloneStack , or UpdateStack we recommend you use the 
ConfigurationManager parameter to specify the Chef version. The recommended and
default value for Linux stacks is currently 12. Windows stacks use Chef 12.2.
For more information, see Chef Versions
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-chef11.html] 
.

You can specify Chef 12, 11.10, or 11.4 for your Linux stack. We recommend
migrating your existing Linux stacks to Chef 12 as soon as possible.
   *
   */
  export class OpsWorks extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Assign a registered instance to a layer.

 &amp;#42; You can assign registered on-premises instances to any layer type.
   
   
 * You can assign registered Amazon EC2 instances only to custom layers.
   
   
 * You cannot use this action with instances that were created with AWS
   OpsWorks.
   
   

Required Permissions : To use this action, an AWS Identity and Access Management
(IAM) user must have a Manage permissions level for the stack or an attached
policy that explicitly grants permissions. For more information on user
permissions, see Managing User Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    assignInstance(params: OpsWorks.AssignInstanceRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Assigns one of the stack&#x27;s registered Amazon EBS volumes to a specified
instance. The volume must first be registered with the stack by calling 
RegisterVolume . After you register the volume, you must call UpdateVolume to
specify a mount point before calling AssignVolume . For more information, see 
Resource Management
[http://docs.aws.amazon.com/opsworks/latest/userguide/resources.html] .

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    assignVolume(params: OpsWorks.AssignVolumeRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Associates one of the stack&#x27;s registered Elastic IP addresses with a specified
instance. The address must first be registered with the stack by calling 
RegisterElasticIp . For more information, see Resource Management
[http://docs.aws.amazon.com/opsworks/latest/userguide/resources.html] .

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    associateElasticIp(params: OpsWorks.AssociateElasticIpRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Attaches an Elastic Load Balancing load balancer to a specified layer. For more
information, see Elastic Load Balancing
[http://docs.aws.amazon.com/opsworks/latest/userguide/load-balancer-elb.html] .

You must create the Elastic Load Balancing instance separately, by using the
Elastic Load Balancing console, API, or CLI. For more information, see Elastic
Load Balancing Developer Guide
[http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/Welcome.html] 
.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    attachElasticLoadBalancer(params: OpsWorks.AttachElasticLoadBalancerRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Creates a clone of a specified stack. For more information, see Clone a Stack
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-cloning.html] 
. By default, all parameters are set to the values used by the parent stack.

Required Permissions : To use this action, an IAM user must have an attached
policy that explicitly grants permissions. For more information on user
permissions, see Managing User Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    cloneStack(params: OpsWorks.CloneStackRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.CloneStackResult|any) => void): Request<OpsWorks.CloneStackResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Creates an app for a specified stack. For more information, see Creating Apps
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html] 
.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    createApp(params: OpsWorks.CreateAppRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.CreateAppResult|any) => void): Request<OpsWorks.CreateAppResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Runs deployment or stack commands. For more information, see Deploying Apps
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-deploying.html] 
and Run Stack Commands
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-commands.html] 
.

Required Permissions : To use this action, an IAM user must have a Deploy or
Manage permissions level for the stack, or an attached policy that explicitly
grants permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    createDeployment(params: OpsWorks.CreateDeploymentRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.CreateDeploymentResult|any) => void): Request<OpsWorks.CreateDeploymentResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Creates an instance in a specified stack. For more information, see Adding an
Instance to a Layer
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html] 
.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    createInstance(params: OpsWorks.CreateInstanceRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.CreateInstanceResult|any) => void): Request<OpsWorks.CreateInstanceResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Creates a layer. For more information, see How to Create a Layer
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-create.html] 
.

You should use CreateLayer for noncustom layer types such as PHP App Server only
if the stack does not have an existing layer of that type. A stack can have at
most one instance of each noncustom layer; if you attempt to create a second
instance, CreateLayer fails. A stack can have an arbitrary number of custom
layers, so you can call CreateLayer as many times as you like for that layer
type.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    createLayer(params: OpsWorks.CreateLayerRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.CreateLayerResult|any) => void): Request<OpsWorks.CreateLayerResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Creates a new stack. For more information, see Create a New Stack
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-edit.html] .

Required Permissions : To use this action, an IAM user must have an attached
policy that explicitly grants permissions. For more information on user
permissions, see Managing User Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     */
    createStack(params: OpsWorks.CreateStackRequest, callback?: (err: OpsWorks.ValidationException|any, data: OpsWorks.CreateStackResult|any) => void): Request<OpsWorks.CreateStackResult|any,OpsWorks.ValidationException|any>;
    /**
     * Creates a new user profile.

Required Permissions : To use this action, an IAM user must have an attached
policy that explicitly grants permissions. For more information on user
permissions, see Managing User Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     */
    createUserProfile(params: OpsWorks.CreateUserProfileRequest, callback?: (err: OpsWorks.ValidationException|any, data: OpsWorks.CreateUserProfileResult|any) => void): Request<OpsWorks.CreateUserProfileResult|any,OpsWorks.ValidationException|any>;
    /**
     * Deletes a specified app.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    deleteApp(params: OpsWorks.DeleteAppRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Deletes a specified instance, which terminates the associated Amazon EC2
instance. You must stop an instance before you can delete it.

For more information, see Deleting Instances
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-delete.html] 
.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    deleteInstance(params: OpsWorks.DeleteInstanceRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Deletes a specified layer. You must first stop and then delete all associated
instances or unassign registered instances. For more information, see How to
Delete a Layer
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-delete.html] 
.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    deleteLayer(params: OpsWorks.DeleteLayerRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Deletes a specified stack. You must first delete all instances, layers, and apps
or deregister registered instances. For more information, see Shut Down a Stack
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-shutting.html] 
.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    deleteStack(params: OpsWorks.DeleteStackRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Deletes a user profile.

Required Permissions : To use this action, an IAM user must have an attached
policy that explicitly grants permissions. For more information on user
permissions, see Managing User Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    deleteUserProfile(params: OpsWorks.DeleteUserProfileRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Deregisters a specified Amazon ECS cluster from a stack. For more information,
see Resource Management
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html#workinglayers-ecscluster-delete] 
.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack or an attached policy that explicitly grants
permissions. For more information on user permissions, see 
http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html

[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    deregisterEcsCluster(params: OpsWorks.DeregisterEcsClusterRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Deregisters a specified Elastic IP address. The address can then be registered
by another stack. For more information, see Resource Management
[http://docs.aws.amazon.com/opsworks/latest/userguide/resources.html] .

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    deregisterElasticIp(params: OpsWorks.DeregisterElasticIpRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Deregister a registered Amazon EC2 or on-premises instance. This action removes
the instance from the stack and returns it to your control. This action can not
be used with instances that were created with AWS OpsWorks.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    deregisterInstance(params: OpsWorks.DeregisterInstanceRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Deregisters an Amazon RDS instance.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    deregisterRdsDbInstance(params: OpsWorks.DeregisterRdsDbInstanceRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Deregisters an Amazon EBS volume. The volume can then be registered by another
stack. For more information, see Resource Management
[http://docs.aws.amazon.com/opsworks/latest/userguide/resources.html] .

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    deregisterVolume(params: OpsWorks.DeregisterVolumeRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Describes the available AWS OpsWorks agent versions. You must specify a stack ID
or a configuration manager. DescribeAgentVersions returns a list of available
agent versions for the specified stack or configuration manager.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    describeAgentVersions(params: OpsWorks.DescribeAgentVersionsRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeAgentVersionsResult|any) => void): Request<OpsWorks.DescribeAgentVersionsResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Requests a description of a specified set of apps.

You must specify at least one of the parameters.

Required Permissions : To use this action, an IAM user must have a Show, Deploy,
or Manage permissions level for the stack, or an attached policy that explicitly
grants permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    describeApps(params: OpsWorks.DescribeAppsRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeAppsResult|any) => void): Request<OpsWorks.DescribeAppsResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Describes the results of specified commands.

You must specify at least one of the parameters.

Required Permissions : To use this action, an IAM user must have a Show, Deploy,
or Manage permissions level for the stack, or an attached policy that explicitly
grants permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    describeCommands(params: OpsWorks.DescribeCommandsRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeCommandsResult|any) => void): Request<OpsWorks.DescribeCommandsResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Requests a description of a specified set of deployments.

You must specify at least one of the parameters.

Required Permissions : To use this action, an IAM user must have a Show, Deploy,
or Manage permissions level for the stack, or an attached policy that explicitly
grants permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    describeDeployments(params: OpsWorks.DescribeDeploymentsRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeDeploymentsResult|any) => void): Request<OpsWorks.DescribeDeploymentsResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Describes Amazon ECS clusters that are registered with a stack. If you specify
only a stack ID, you can use the MaxResults and NextToken parameters to paginate
the response. However, AWS OpsWorks currently supports only one cluster per
layer, so the result set has a maximum of one element.

Required Permissions : To use this action, an IAM user must have a Show, Deploy,
or Manage permissions level for the stack or an attached policy that explicitly
grants permission. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    describeEcsClusters(params: OpsWorks.DescribeEcsClustersRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeEcsClustersResult|any) => void): Request<OpsWorks.DescribeEcsClustersResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Describes Elastic IP addresses
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html] 
.

You must specify at least one of the parameters.

Required Permissions : To use this action, an IAM user must have a Show, Deploy,
or Manage permissions level for the stack, or an attached policy that explicitly
grants permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    describeElasticIps(params: OpsWorks.DescribeElasticIpsRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeElasticIpsResult|any) => void): Request<OpsWorks.DescribeElasticIpsResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Describes a stack&#x27;s Elastic Load Balancing instances.

You must specify at least one of the parameters.

Required Permissions : To use this action, an IAM user must have a Show, Deploy,
or Manage permissions level for the stack, or an attached policy that explicitly
grants permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    describeElasticLoadBalancers(params: OpsWorks.DescribeElasticLoadBalancersRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeElasticLoadBalancersResult|any) => void): Request<OpsWorks.DescribeElasticLoadBalancersResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Requests a description of a set of instances.

You must specify at least one of the parameters.

Required Permissions : To use this action, an IAM user must have a Show, Deploy,
or Manage permissions level for the stack, or an attached policy that explicitly
grants permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    describeInstances(params: OpsWorks.DescribeInstancesRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeInstancesResult|any) => void): Request<OpsWorks.DescribeInstancesResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Requests a description of one or more layers in a specified stack.

You must specify at least one of the parameters.

Required Permissions : To use this action, an IAM user must have a Show, Deploy,
or Manage permissions level for the stack, or an attached policy that explicitly
grants permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    describeLayers(params: OpsWorks.DescribeLayersRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeLayersResult|any) => void): Request<OpsWorks.DescribeLayersResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Describes load-based auto scaling configurations for specified layers.

You must specify at least one of the parameters.

Required Permissions : To use this action, an IAM user must have a Show, Deploy,
or Manage permissions level for the stack, or an attached policy that explicitly
grants permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    describeLoadBasedAutoScaling(params: OpsWorks.DescribeLoadBasedAutoScalingRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeLoadBasedAutoScalingResult|any) => void): Request<OpsWorks.DescribeLoadBasedAutoScalingResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Describes a user&#x27;s SSH information.

Required Permissions : To use this action, an IAM user must have self-management
enabled or an attached policy that explicitly grants permissions. For more
information on user permissions, see Managing User Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     */
    describeMyUserProfile(callback?: (err: any, data: OpsWorks.DescribeMyUserProfileResult|any) => void): Request<OpsWorks.DescribeMyUserProfileResult|any,any>;
    /**
     * Describes the permissions for a specified stack.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    describePermissions(params: OpsWorks.DescribePermissionsRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribePermissionsResult|any) => void): Request<OpsWorks.DescribePermissionsResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Describe an instance&#x27;s RAID arrays.

You must specify at least one of the parameters.

Required Permissions : To use this action, an IAM user must have a Show, Deploy,
or Manage permissions level for the stack, or an attached policy that explicitly
grants permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    describeRaidArrays(params: OpsWorks.DescribeRaidArraysRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeRaidArraysResult|any) => void): Request<OpsWorks.DescribeRaidArraysResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Describes Amazon RDS instances.

Required Permissions : To use this action, an IAM user must have a Show, Deploy,
or Manage permissions level for the stack, or an attached policy that explicitly
grants permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    describeRdsDbInstances(params: OpsWorks.DescribeRdsDbInstancesRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeRdsDbInstancesResult|any) => void): Request<OpsWorks.DescribeRdsDbInstancesResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Describes AWS OpsWorks service errors.

Required Permissions : To use this action, an IAM user must have a Show, Deploy,
or Manage permissions level for the stack, or an attached policy that explicitly
grants permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    describeServiceErrors(params: OpsWorks.DescribeServiceErrorsRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeServiceErrorsResult|any) => void): Request<OpsWorks.DescribeServiceErrorsResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Requests a description of a stack&#x27;s provisioning parameters.

Required Permissions : To use this action, an IAM user must have a Show, Deploy,
or Manage permissions level for the stack or an attached policy that explicitly
grants permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    describeStackProvisioningParameters(params: OpsWorks.DescribeStackProvisioningParametersRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeStackProvisioningParametersResult|any) => void): Request<OpsWorks.DescribeStackProvisioningParametersResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Describes the number of layers and apps in a specified stack, and the number of
instances in each state, such as running_setup or online .

Required Permissions : To use this action, an IAM user must have a Show, Deploy,
or Manage permissions level for the stack, or an attached policy that explicitly
grants permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    describeStackSummary(params: OpsWorks.DescribeStackSummaryRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeStackSummaryResult|any) => void): Request<OpsWorks.DescribeStackSummaryResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Requests a description of one or more stacks.

Required Permissions : To use this action, an IAM user must have a Show, Deploy,
or Manage permissions level for the stack, or an attached policy that explicitly
grants permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    describeStacks(params: OpsWorks.DescribeStacksRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeStacksResult|any) => void): Request<OpsWorks.DescribeStacksResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Describes time-based auto scaling configurations for specified instances.

You must specify at least one of the parameters.

Required Permissions : To use this action, an IAM user must have a Show, Deploy,
or Manage permissions level for the stack, or an attached policy that explicitly
grants permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    describeTimeBasedAutoScaling(params: OpsWorks.DescribeTimeBasedAutoScalingRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeTimeBasedAutoScalingResult|any) => void): Request<OpsWorks.DescribeTimeBasedAutoScalingResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Describe specified users.

Required Permissions : To use this action, an IAM user must have an attached
policy that explicitly grants permissions. For more information on user
permissions, see Managing User Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    describeUserProfiles(params: OpsWorks.DescribeUserProfilesRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeUserProfilesResult|any) => void): Request<OpsWorks.DescribeUserProfilesResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Describes an instance&#x27;s Amazon EBS volumes.

You must specify at least one of the parameters.

Required Permissions : To use this action, an IAM user must have a Show, Deploy,
or Manage permissions level for the stack, or an attached policy that explicitly
grants permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    describeVolumes(params: OpsWorks.DescribeVolumesRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeVolumesResult|any) => void): Request<OpsWorks.DescribeVolumesResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Detaches a specified Elastic Load Balancing instance from its layer.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ResourceNotFoundException   
     */
    detachElasticLoadBalancer(params: OpsWorks.DetachElasticLoadBalancerRequest, callback?: (err: OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ResourceNotFoundException|any>;
    /**
     * Disassociates an Elastic IP address from its instance. The address remains
registered with the stack. For more information, see Resource Management
[http://docs.aws.amazon.com/opsworks/latest/userguide/resources.html] .

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    disassociateElasticIp(params: OpsWorks.DisassociateElasticIpRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Gets a generated host name for the specified layer, based on the current host
name theme.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    getHostnameSuggestion(params: OpsWorks.GetHostnameSuggestionRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.GetHostnameSuggestionResult|any) => void): Request<OpsWorks.GetHostnameSuggestionResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * This action can be used only with Windows stacks.

Grants RDP access to a Windows instance for a specified time period.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    grantAccess(params: OpsWorks.GrantAccessRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.GrantAccessResult|any) => void): Request<OpsWorks.GrantAccessResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Reboots a specified instance. For more information, see Starting, Stopping, and
Rebooting Instances
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html] 
.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    rebootInstance(params: OpsWorks.RebootInstanceRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Registers a specified Amazon ECS cluster with a stack. You can register only one
cluster with a stack. A cluster can be registered with only one stack. For more
information, see Resource Management
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html] 
.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    registerEcsCluster(params: OpsWorks.RegisterEcsClusterRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.RegisterEcsClusterResult|any) => void): Request<OpsWorks.RegisterEcsClusterResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Registers an Elastic IP address with a specified stack. An address can be
registered with only one stack at a time. If the address is already registered,
you must first deregister it by calling DeregisterElasticIp . For more
information, see Resource Management
[http://docs.aws.amazon.com/opsworks/latest/userguide/resources.html] .

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    registerElasticIp(params: OpsWorks.RegisterElasticIpRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.RegisterElasticIpResult|any) => void): Request<OpsWorks.RegisterElasticIpResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Registers instances with a specified stack that were created outside of AWS
OpsWorks.

We do not recommend using this action to register instances. The complete
registration operation has two primary steps, installing the AWS OpsWorks agent
on the instance and registering the instance with the stack. RegisterInstance 
handles only the second step. You should instead use the AWS CLI register 
command, which performs the entire registration operation. For more information,
see Registering an Instance with an AWS OpsWorks Stack
[http://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register.html] 
.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    registerInstance(params: OpsWorks.RegisterInstanceRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.RegisterInstanceResult|any) => void): Request<OpsWorks.RegisterInstanceResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Registers an Amazon RDS instance with a stack.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    registerRdsDbInstance(params: OpsWorks.RegisterRdsDbInstanceRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Registers an Amazon EBS volume with a specified stack. A volume can be
registered with only one stack at a time. If the volume is already registered,
you must first deregister it by calling DeregisterVolume . For more information,
see Resource Management
[http://docs.aws.amazon.com/opsworks/latest/userguide/resources.html] .

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    registerVolume(params: OpsWorks.RegisterVolumeRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.RegisterVolumeResult|any) => void): Request<OpsWorks.RegisterVolumeResult|any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Specify the load-based auto scaling configuration for a specified layer. For
more information, see Managing Load with Time-based and Load-based Instances
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html] 
.

To use load-based auto scaling, you must create a set of load-based auto scaling
instances. Load-based auto scaling operates only on the instances from that set,
so you must ensure that you have created enough instances to handle the maximum
anticipated load.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    setLoadBasedAutoScaling(params: OpsWorks.SetLoadBasedAutoScalingRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Specifies a user&#x27;s permissions. For more information, see Security and
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingsecurity.html] .

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    setPermission(params: OpsWorks.SetPermissionRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Specify the time-based auto scaling configuration for a specified instance. For
more information, see Managing Load with Time-based and Load-based Instances
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html] 
.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    setTimeBasedAutoScaling(params: OpsWorks.SetTimeBasedAutoScalingRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Starts a specified instance. For more information, see Starting, Stopping, and
Rebooting Instances
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html] 
.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    startInstance(params: OpsWorks.StartInstanceRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Starts a stack&#x27;s instances.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    startStack(params: OpsWorks.StartStackRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Stops a specified instance. When you stop a standard instance, the data
disappears and must be reinstalled when you restart the instance. You can stop
an Amazon EBS-backed instance without losing data. For more information, see 
Starting, Stopping, and Rebooting Instances
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html] 
.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    stopInstance(params: OpsWorks.StopInstanceRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Stops a specified stack.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    stopStack(params: OpsWorks.StopStackRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Unassigns a registered instance from all of it&#x27;s layers. The instance remains in
the stack as an unassigned instance and can be assigned to another layer, as
needed. You cannot use this action with instances that were created with AWS
OpsWorks.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    unassignInstance(params: OpsWorks.UnassignInstanceRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Unassigns an assigned Amazon EBS volume. The volume remains registered with the
stack. For more information, see Resource Management
[http://docs.aws.amazon.com/opsworks/latest/userguide/resources.html] .

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    unassignVolume(params: OpsWorks.UnassignVolumeRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Updates a specified app.

Required Permissions : To use this action, an IAM user must have a Deploy or
Manage permissions level for the stack, or an attached policy that explicitly
grants permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    updateApp(params: OpsWorks.UpdateAppRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Updates a registered Elastic IP address&#x27;s name. For more information, see 
Resource Management
[http://docs.aws.amazon.com/opsworks/latest/userguide/resources.html] .

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    updateElasticIp(params: OpsWorks.UpdateElasticIpRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Updates a specified instance.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    updateInstance(params: OpsWorks.UpdateInstanceRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Updates a specified layer.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    updateLayer(params: OpsWorks.UpdateLayerRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Updates a user&#x27;s SSH public key.

Required Permissions : To use this action, an IAM user must have self-management
enabled or an attached policy that explicitly grants permissions. For more
information on user permissions, see Managing User Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     */
    updateMyUserProfile(params: OpsWorks.UpdateMyUserProfileRequest, callback?: (err: OpsWorks.ValidationException|any, data: any) => void): Request<any,OpsWorks.ValidationException|any>;
    /**
     * Updates an Amazon RDS instance.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    updateRdsDbInstance(params: OpsWorks.UpdateRdsDbInstanceRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Updates a specified stack.

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    updateStack(params: OpsWorks.UpdateStackRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Updates a specified user profile.

Required Permissions : To use this action, an IAM user must have an attached
policy that explicitly grants permissions. For more information on user
permissions, see Managing User Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    updateUserProfile(params: OpsWorks.UpdateUserProfileRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;
    /**
     * Updates an Amazon EBS volume&#x27;s name or mount point. For more information, see 
Resource Management
[http://docs.aws.amazon.com/opsworks/latest/userguide/resources.html] .

Required Permissions : To use this action, an IAM user must have a Manage
permissions level for the stack, or an attached policy that explicitly grants
permissions. For more information on user permissions, see Managing User
Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     */
    updateVolume(params: OpsWorks.UpdateVolumeRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request<any,OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any>;

  }

  export module OpsWorks {
    
    export type AgentVersions = AgentVersion[];
    
    export type AppAttributes = {[key:string]: String};
    
    export type AppAttributesKeys = string;
    
    export type AppType = string;
    
    export type Apps = App[];
    
    export type Architecture = string;
    
    export type AutoScalingType = string;
    
    export type BlockDeviceMappings = BlockDeviceMapping[];
    
    export type Boolean = boolean;
    
    export type Commands = Command[];
    
    export type DailyAutoScalingSchedule = {[key:string]: Switch};
    
    export type DataSources = DataSource[];
    
    export type DateTime = string;
    
    export type DeploymentCommandArgs = {[key:string]: Strings};
    
    export type DeploymentCommandName = string;
    
    export type Deployments = Deployment[];
    
    export type Double = number;
    
    export type EcsClusters = EcsCluster[];
    
    export type ElasticIps = ElasticIp[];
    
    export type ElasticLoadBalancers = ElasticLoadBalancer[];
    
    export type EnvironmentVariables = EnvironmentVariable[];
    
    export type Hour = string;
    
    export type Instances = Instance[];
    
    export type Integer = number;
    
    export type LayerAttributes = {[key:string]: String};
    
    export type LayerAttributesKeys = string;
    
    export type LayerType = string;
    
    export type Layers = Layer[];
    
    export type LoadBasedAutoScalingConfigurations = LoadBasedAutoScalingConfiguration[];
    
    export type Minute = number;
    
    export type Parameters = {[key:string]: String};
    
    export type Permissions = Permission[];
    
    export type RaidArrays = RaidArray[];
    
    export type RdsDbInstances = RdsDbInstance[];
    
    export type RootDeviceType = string;
    
    export type ServiceErrors = ServiceError[];
    
    export type SourceType = string;
    
    export type StackAttributes = {[key:string]: String};
    
    export type StackAttributesKeys = string;
    
    export type Stacks = Stack[];
    
    export type String = string;
    
    export type Strings = String[];
    
    export type Switch = string;
    
    export type TimeBasedAutoScalingConfigurations = TimeBasedAutoScalingConfiguration[];
    
    export type UserProfiles = UserProfile[];
    
    export type ValidForInMinutes = number;
    
    export type VirtualizationType = string;
    
    export type VolumeConfigurations = VolumeConfiguration[];
    
    export type VolumeType = string;
    
    export type Volumes = Volume[];

    export interface AgentVersion {
        /** The agent version. **/
        Version?: String;
        /** The configuration manager. **/
        ConfigurationManager?: StackConfigurationManager;
    }
    export interface App {
        /** The app ID. **/
        AppId?: String;
        /** The app stack ID. **/
        StackId?: String;
        /** The app&#x27;s short name. **/
        Shortname?: String;
        /** The app name. **/
        Name?: String;
        /** A description of the app. **/
        Description?: String;
        /** The app&#x27;s data sources. **/
        DataSources?: DataSources;
        /** The app type. **/
        Type?: AppType;
        /** A Source object that describes the app repository. **/
        AppSource?: Source;
        /** The app vhost settings with multiple domains separated by commas. For example: 
&#x27;www.example.com, example.com&#x27; **/
        Domains?: Strings;
        /** Whether to enable SSL for the app. **/
        EnableSsl?: Boolean;
        /** An SslConfiguration object with the SSL configuration. **/
        SslConfiguration?: SslConfiguration;
        /** The stack attributes. **/
        Attributes?: AppAttributes;
        /** When the app was created. **/
        CreatedAt?: String;
        /** An array of EnvironmentVariable objects that specify environment variables to be
associated with the app. After you deploy the app, these variables are defined
on the associated app server instances. For more information, see Environment
Variables
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html#workingapps-creating-environment] 
.

There is no specific limit on the number of environment variables. However, the
size of the associated data structure - which includes the variable names,
values, and protected flag values - cannot exceed 10 KB (10240 Bytes). This
limit should accommodate most if not all use cases, but if you do exceed it, you
will cause an exception (API) with an &quot;Environment: is too large (maximum is
10KB)&quot; message. **/
        Environment?: EnvironmentVariables;
    }
    export interface AssignInstanceRequest {
        /** The instance ID. **/
        InstanceId: String;
        /** The layer ID, which must correspond to a custom layer. You cannot assign a
registered instance to a built-in layer. **/
        LayerIds: Strings;
    }
    export interface AssignVolumeRequest {
        /** The volume ID. **/
        VolumeId: String;
        /** The instance ID. **/
        InstanceId?: String;
    }
    export interface AssociateElasticIpRequest {
        /** The Elastic IP address. **/
        ElasticIp: String;
        /** The instance ID. **/
        InstanceId?: String;
    }
    export interface AttachElasticLoadBalancerRequest {
        /** The Elastic Load Balancing instance&#x27;s name. **/
        ElasticLoadBalancerName: String;
        /** The ID of the layer that the Elastic Load Balancing instance is to be attached
to. **/
        LayerId: String;
    }
    export interface AutoScalingThresholds {
        /** The number of instances to add or remove when the load exceeds a threshold. **/
        InstanceCount?: Integer;
        /** The amount of time, in minutes, that the load must exceed a threshold before
more instances are added or removed. **/
        ThresholdsWaitTime?: Minute;
        /** The amount of time (in minutes) after a scaling event occurs that AWS OpsWorks
should ignore metrics and suppress additional scaling events. For example, AWS
OpsWorks adds new instances following an upscaling event but the instances won&#x27;t
start reducing the load until they have been booted and configured. There is no
point in raising additional scaling events during that operation, which
typically takes several minutes. IgnoreMetricsTime allows you to direct AWS
OpsWorks to suppress scaling events long enough to get the new instances online. **/
        IgnoreMetricsTime?: Minute;
        /** The CPU utilization threshold, as a percent of the available CPU. A value of -1
disables the threshold. **/
        CpuThreshold?: Double;
        /** The memory utilization threshold, as a percent of the available memory. A value
of -1 disables the threshold. **/
        MemoryThreshold?: Double;
        /** The load threshold. A value of -1 disables the threshold. For more information
about how load is computed, see Load (computing)
[http://en.wikipedia.org/wiki/Load_%28computing%29] . **/
        LoadThreshold?: Double;
        /** Custom Cloudwatch auto scaling alarms, to be used as thresholds. This parameter
takes a list of up to five alarm names, which are case sensitive and must be in
the same region as the stack.

To use custom alarms, you must update your service role to allow 
cloudwatch:DescribeAlarms . You can either have AWS OpsWorks update the role for
you when you first use this feature or you can edit the role manually. For more
information, see Allowing AWS OpsWorks to Act on Your Behalf
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-servicerole.html] 
. **/
        Alarms?: Strings;
    }
    export interface BlockDeviceMapping {
        /** The device name that is exposed to the instance, such as /dev/sdh . For the root
device, you can use the explicit device name or you can set this parameter to 
ROOT_DEVICE and AWS OpsWorks will provide the correct device name. **/
        DeviceName?: String;
        /** Suppresses the specified device included in the AMI&#x27;s block device mapping. **/
        NoDevice?: String;
        /** The virtual device name. For more information, see BlockDeviceMapping
[http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BlockDeviceMapping.html] 
. **/
        VirtualName?: String;
        /** An EBSBlockDevice that defines how to configure an Amazon EBS volume when the
instance is launched. **/
        Ebs?: EbsBlockDevice;
    }
    export interface ChefConfiguration {
        /** Whether to enable Berkshelf. **/
        ManageBerkshelf?: Boolean;
        /** The Berkshelf version. **/
        BerkshelfVersion?: String;
    }
    export interface CloneStackRequest {
        /** The source stack ID. **/
        SourceStackId: String;
        /** The cloned stack name. **/
        Name?: String;
        /** The cloned stack AWS region, such as &quot;ap-northeast-2&quot;. For more information
about AWS regions, see Regions and Endpoints
[http://docs.aws.amazon.com/general/latest/gr/rande.html] . **/
        Region?: String;
        /** The ID of the VPC that the cloned stack is to be launched into. It must be in
the specified region. All instances are launched into this VPC, and you cannot
change the ID later.

 &amp;#42; If your account supports EC2 Classic, the default value is no VPC.
   
   
 * If your account does not support EC2 Classic, the default value is the
   default VPC for the specified region.
   
   

If the VPC ID corresponds to a default VPC and you have specified either the 
DefaultAvailabilityZone or the DefaultSubnetId parameter only, AWS OpsWorks
infers the value of the other parameter. If you specify neither parameter, AWS
OpsWorks sets these parameters to the first valid Availability Zone for the
specified region and the corresponding default VPC subnet ID, respectively.

If you specify a nondefault VPC ID, note the following:

 * It must belong to a VPC in your account that is in the specified region.
   
   
 * You must specify a value for DefaultSubnetId .
   
   

For more information on how to use AWS OpsWorks with a VPC, see Running a Stack
in a VPC
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-vpc.html] .
For more information on default VPC and EC2 Classic, see Supported Platforms
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html] 
. **/
        VpcId?: String;
        /** A list of stack attributes and values as key/value pairs to be added to the
cloned stack. **/
        Attributes?: StackAttributes;
        /** The stack AWS Identity and Access Management (IAM) role, which allows AWS
OpsWorks to work with AWS resources on your behalf. You must set this parameter
to the Amazon Resource Name (ARN) for an existing IAM role. If you create a
stack by using the AWS OpsWorks console, it creates the role for you. You can
obtain an existing stack&#x27;s IAM ARN programmatically by calling 
DescribePermissions . For more information about IAM ARNs, see Using Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] .

You must set this parameter to a valid service role ARN or the action will fail;
there is no default value. You can specify the source stack&#x27;s service role ARN,
if you prefer, but you must do so explicitly. **/
        ServiceRoleArn: String;
        /** The Amazon Resource Name (ARN) of an IAM profile that is the default profile for
all of the stack&#x27;s EC2 instances. For more information about IAM ARNs, see Using
Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] . **/
        DefaultInstanceProfileArn?: String;
        /** The stack&#x27;s operating system, which must be set to one of the following.

 &amp;#42; A supported Linux operating system: An Amazon Linux version, such as Amazon
   Linux 2016.03 , Amazon Linux 2015.09 , or Amazon Linux 2015.03 .
   
   
 * A supported Ubuntu operating system, such as Ubuntu 16.04 LTS , Ubuntu 14.04
   LTS , or Ubuntu 12.04 LTS .
   
   
 * CentOS 7
   
   
 * Red Hat Enterprise Linux 7
   
   
 * Microsoft Windows Server 2012 R2 Base , Microsoft Windows Server 2012 R2 with
   SQL Server Express , Microsoft Windows Server 2012 R2 with SQL Server
   Standard , or Microsoft Windows Server 2012 R2 with SQL Server Web .
   
   
 * A custom AMI: Custom . You specify the custom AMI you want to use when you
   create instances. For more information on how to use custom AMIs with
   OpsWorks, see Using Custom AMIs
   [http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html] 
   .
   
   

The default option is the parent stack&#x27;s operating system. For more information
on the supported operating systems, see AWS OpsWorks Operating Systems
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-os.html] 
.

You can specify a different Linux operating system for the cloned stack, but you
cannot change from Linux to Windows or Windows to Linux. **/
        DefaultOs?: String;
        /** The stack&#x27;s host name theme, with spaces are replaced by underscores. The theme
is used to generate host names for the stack&#x27;s instances. By default, 
HostnameTheme is set to Layer_Dependent , which creates host names by appending
integers to the layer&#x27;s short name. The other themes are:

 &amp;#42; Baked_Goods
   
   
 * Clouds
   
   
 * Europe_Cities
   
   
 * Fruits
   
   
 * Greek_Deities
   
   
 * Legendary_creatures_from_Japan
   
   
 * Planets_and_Moons
   
   
 * Roman_Deities
   
   
 * Scottish_Islands
   
   
 * US_Cities
   
   
 * Wild_Cats
   
   

To obtain a generated host name, call GetHostNameSuggestion , which returns a
host name based on the current theme. **/
        HostnameTheme?: String;
        /** The cloned stack&#x27;s default Availability Zone, which must be in the specified
region. For more information, see Regions and Endpoints
[http://docs.aws.amazon.com/general/latest/gr/rande.html] . If you also specify
a value for DefaultSubnetId , the subnet must be in the same zone. For more
information, see the VpcId parameter description. **/
        DefaultAvailabilityZone?: String;
        /** The stack&#x27;s default VPC subnet ID. This parameter is required if you specify a
value for the VpcId parameter. All instances are launched into this subnet
unless you specify otherwise when you create the instance. If you also specify a
value for DefaultAvailabilityZone , the subnet must be in that zone. For
information on default values and when this parameter is required, see the VpcId 
parameter description. **/
        DefaultSubnetId?: String;
        /** A string that contains user-defined, custom JSON. It is used to override the
corresponding default stack configuration JSON values. The string should be in
the following format and must escape characters such as &#x27;&quot;&#x27;:

&quot;{\&quot;key1\&quot;: \&quot;value1\&quot;, \&quot;key2\&quot;: \&quot;value2\&quot;,...}&quot;

For more information on custom JSON, see Use Custom JSON to Modify the Stack
Configuration Attributes
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html] **/
        CustomJson?: String;
        /** The configuration manager. When you clone a stack we recommend that you use the
configuration manager to specify the Chef version: 12, 11.10, or 11.4 for Linux
stacks, or 12.2 for Windows stacks. The default value for Linux stacks is
currently 12. **/
        ConfigurationManager?: StackConfigurationManager;
        /** A ChefConfiguration object that specifies whether to enable Berkshelf and the
Berkshelf version on Chef 11.10 stacks. For more information, see Create a New
Stack
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html] 
. **/
        ChefConfiguration?: ChefConfiguration;
        /** Whether to use custom cookbooks. **/
        UseCustomCookbooks?: Boolean;
        /** Whether to associate the AWS OpsWorks built-in security groups with the stack&#x27;s
layers.

AWS OpsWorks provides a standard set of built-in security groups, one for each
layer, which are associated with layers by default. With 
UseOpsworksSecurityGroups you can instead provide your own custom security
groups. UseOpsworksSecurityGroups has the following settings:

 &amp;#42; True - AWS OpsWorks automatically associates the appropriate built-in
   security group with each layer (default setting). You can associate
   additional security groups with a layer after you create it but you cannot
   delete the built-in security group.
   
   
 * False - AWS OpsWorks does not associate built-in security groups with layers.
   You must create appropriate Amazon Elastic Compute Cloud (Amazon EC2)
   security groups and associate a security group with each layer that you
   create. However, you can still manually associate a built-in security group
   with a layer on creation; custom security groups are required only for those
   layers that need custom settings.
   
   

For more information, see Create a New Stack
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html] 
. **/
        UseOpsworksSecurityGroups?: Boolean;
        CustomCookbooksSource?: Source;
        /** A default Amazon EC2 key pair name. The default value is none. If you specify a
key pair name, AWS OpsWorks installs the public key on the instance and you can
use the private key with an SSH client to log in to the instance. For more
information, see Using SSH to Communicate with an Instance
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-ssh.html] 
and Managing SSH Access
[http://docs.aws.amazon.com/opsworks/latest/userguide/security-ssh-access.html] 
. You can override this setting by specifying a different key pair, or no key
pair, when you create an instance
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html] 
. **/
        DefaultSshKeyName?: String;
        /** Whether to clone the source stack&#x27;s permissions. **/
        ClonePermissions?: Boolean;
        /** A list of source stack app IDs to be included in the cloned stack. **/
        CloneAppIds?: Strings;
        /** The default root device type. This value is used by default for all instances in
the cloned stack, but you can override it when you create an instance. For more
information, see Storage for the Root Device
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device] 
. **/
        DefaultRootDeviceType?: RootDeviceType;
        /** The default AWS OpsWorks agent version. You have the following options:

 &amp;#42; Auto-update - Set this parameter to LATEST . AWS OpsWorks automatically
   installs new agent versions on the stack&#x27;s instances as soon as they are
   available.
   
   
 * Fixed version - Set this parameter to your preferred agent version. To update
   the agent version, you must edit the stack configuration and specify a new
   version. AWS OpsWorks then automatically installs that version on the stack&#x27;s
   instances.
   
   

The default setting is LATEST . To specify an agent version, you must use the
complete version number, not the abbreviated number shown on the console. For a
list of available agent version numbers, call DescribeAgentVersions .

You can also specify an agent version when you create or update an instance,
which overrides the stack&#x27;s default setting. **/
        AgentVersion?: String;
    }
    export interface CloneStackResult {
        /** The cloned stack ID. **/
        StackId?: String;
    }
    export interface Command {
        /** The command ID. **/
        CommandId?: String;
        /** The ID of the instance where the command was executed. **/
        InstanceId?: String;
        /** The command deployment ID. **/
        DeploymentId?: String;
        /** Date and time when the command was run. **/
        CreatedAt?: DateTime;
        /** Date and time when the command was acknowledged. **/
        AcknowledgedAt?: DateTime;
        /** Date when the command completed. **/
        CompletedAt?: DateTime;
        /** The command status:

 &amp;#42; failed
   
   
 * successful
   
   
 * skipped
   
   
 * pending **/
        Status?: String;
        /** The command exit code. **/
        ExitCode?: Integer;
        /** The URL of the command log. **/
        LogUrl?: String;
        /** The command type:

 &amp;#42; deploy
   
   
 * rollback
   
   
 * start
   
   
 * stop
   
   
 * restart
   
   
 * undeploy
   
   
 * update_dependencies
   
   
 * install_dependencies
   
   
 * update_custom_cookbooks
   
   
 * execute_recipes **/
        Type?: String;
    }
    export interface CreateAppRequest {
        /** The stack ID. **/
        StackId: String;
        /** The app&#x27;s short name. **/
        Shortname?: String;
        /** The app name. **/
        Name: String;
        /** A description of the app. **/
        Description?: String;
        /** The app&#x27;s data source. **/
        DataSources?: DataSources;
        /** The app type. Each supported type is associated with a particular layer. For
example, PHP applications are associated with a PHP layer. AWS OpsWorks deploys
an application to those instances that are members of the corresponding layer.
If your app isn&#x27;t one of the standard types, or you prefer to implement your own
Deploy recipes, specify other . **/
        Type: AppType;
        /** A Source object that specifies the app repository. **/
        AppSource?: Source;
        /** The app virtual host settings, with multiple domains separated by commas. For
example: &#x27;www.example.com, example.com&#x27; **/
        Domains?: Strings;
        /** Whether to enable SSL for the app. **/
        EnableSsl?: Boolean;
        /** An SslConfiguration object with the SSL configuration. **/
        SslConfiguration?: SslConfiguration;
        /** One or more user-defined key/value pairs to be added to the stack attributes. **/
        Attributes?: AppAttributes;
        /** An array of EnvironmentVariable objects that specify environment variables to be
associated with the app. After you deploy the app, these variables are defined
on the associated app server instance. For more information, see Environment
Variables
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html#workingapps-creating-environment] 
.

There is no specific limit on the number of environment variables. However, the
size of the associated data structure - which includes the variables&#x27; names,
values, and protected flag values - cannot exceed 10 KB (10240 Bytes). This
limit should accommodate most if not all use cases. Exceeding it will cause an
exception with the message, &quot;Environment: is too large (maximum is 10KB).&quot;

This parameter is supported only by Chef 11.10 stacks. If you have specified one
or more environment variables, you cannot modify the stack&#x27;s Chef version. **/
        Environment?: EnvironmentVariables;
    }
    export interface CreateAppResult {
        /** The app ID. **/
        AppId?: String;
    }
    export interface CreateDeploymentRequest {
        /** The stack ID. **/
        StackId: String;
        /** The app ID. This parameter is required for app deployments, but not for other
deployment commands. **/
        AppId?: String;
        /** The instance IDs for the deployment targets. **/
        InstanceIds?: Strings;
        /** The layer IDs for the deployment targets. **/
        LayerIds?: Strings;
        /** A DeploymentCommand object that specifies the deployment command and any
associated arguments. **/
        Command: DeploymentCommand;
        /** A user-defined comment. **/
        Comment?: String;
        /** A string that contains user-defined, custom JSON. It is used to override the
corresponding default stack configuration JSON values. The string should be in
the following format and must escape characters such as &#x27;&quot;&#x27;:

&quot;{\&quot;key1\&quot;: \&quot;value1\&quot;, \&quot;key2\&quot;: \&quot;value2\&quot;,...}&quot;

For more information on custom JSON, see Use Custom JSON to Modify the Stack
Configuration Attributes
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html] . **/
        CustomJson?: String;
    }
    export interface CreateDeploymentResult {
        /** The deployment ID, which can be used with other requests to identify the
deployment. **/
        DeploymentId?: String;
    }
    export interface CreateInstanceRequest {
        /** The stack ID. **/
        StackId: String;
        /** An array that contains the instance&#x27;s layer IDs. **/
        LayerIds: Strings;
        /** The instance type, such as t2.micro . For a list of supported instance types,
open the stack in the console, choose Instances , and choose + Instance . The 
Size list contains the currently supported types. For more information, see 
Instance Families and Types
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html] . The
parameter values that you use to specify the various types are in the API Name 
column of the Available Instance Types table. **/
        InstanceType: String;
        /** For load-based or time-based instances, the type. Windows stacks can use only
time-based instances. **/
        AutoScalingType?: AutoScalingType;
        /** The instance host name. **/
        Hostname?: String;
        /** The instance&#x27;s operating system, which must be set to one of the following.

 &amp;#42; A supported Linux operating system: An Amazon Linux version, such as Amazon
   Linux 2016.03 , Amazon Linux 2015.09 , or Amazon Linux 2015.03 .
   
   
 * A supported Ubuntu operating system, such as Ubuntu 16.04 LTS , Ubuntu 14.04
   LTS , or Ubuntu 12.04 LTS .
   
   
 * CentOS 7
   
   
 * Red Hat Enterprise Linux 7
   
   
 * A supported Windows operating system, such as Microsoft Windows Server 2012
   R2 Base , Microsoft Windows Server 2012 R2 with SQL Server Express , 
   Microsoft Windows Server 2012 R2 with SQL Server Standard , or Microsoft
   Windows Server 2012 R2 with SQL Server Web .
   
   
 * A custom AMI: Custom .
   
   

For more information on the supported operating systems, see AWS OpsWorks
Operating Systems
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-os.html] 
.

The default option is the current Amazon Linux version. If you set this
parameter to Custom , you must use the CreateInstance action&#x27;s AmiId parameter
to specify the custom AMI that you want to use. Block device mappings are not
supported if the value is Custom . For more information on the supported
operating systems, see Operating Systems
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-os.html] 
For more information on how to use custom AMIs with AWS OpsWorks, see Using
Custom AMIs
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html] 
. **/
        Os?: String;
        /** A custom AMI ID to be used to create the instance. The AMI should be based on
one of the supported operating systems. For more information, see Using Custom
AMIs
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html] 
.

If you specify a custom AMI, you must set Os to Custom . **/
        AmiId?: String;
        /** The instance&#x27;s Amazon EC2 key-pair name. **/
        SshKeyName?: String;
        /** The instance Availability Zone. For more information, see Regions and Endpoints
[http://docs.aws.amazon.com/general/latest/gr/rande.html] . **/
        AvailabilityZone?: String;
        /** The instance&#x27;s virtualization type, paravirtual or hvm . **/
        VirtualizationType?: String;
        /** The ID of the instance&#x27;s subnet. If the stack is running in a VPC, you can use
this parameter to override the stack&#x27;s default subnet ID value and direct AWS
OpsWorks to launch the instance in a different subnet. **/
        SubnetId?: String;
        /** The instance architecture. The default option is x86_64 . Instance types do not
necessarily support both architectures. For a list of the architectures that are
supported by the different instance types, see Instance Families and Types
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html] . **/
        Architecture?: Architecture;
        /** The instance root device type. For more information, see Storage for the Root
Device
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device] 
. **/
        RootDeviceType?: RootDeviceType;
        /** An array of BlockDeviceMapping objects that specify the instance&#x27;s block
devices. For more information, see Block Device Mapping
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html] 
. Note that block device mappings are not supported for custom AMIs. **/
        BlockDeviceMappings?: BlockDeviceMappings;
        /** Whether to install operating system and package updates when the instance boots.
The default value is true . To control when updates are installed, set this
value to false . You must then update your instances manually by using 
CreateDeployment to run the update_dependencies stack command or by manually
running yum (Amazon Linux) or apt-get (Ubuntu) on the instances.

We strongly recommend using the default value of true to ensure that your
instances have the latest security updates. **/
        InstallUpdatesOnBoot?: Boolean;
        /** Whether to create an Amazon EBS-optimized instance. **/
        EbsOptimized?: Boolean;
        /** The default AWS OpsWorks agent version. You have the following options:

 &amp;#42; INHERIT - Use the stack&#x27;s default agent version setting.
   
   
 * version_number - Use the specified agent version. This value overrides the
   stack&#x27;s default setting. To update the agent version, edit the instance
   configuration and specify a new version. AWS OpsWorks then automatically
   installs that version on the instance.
   
   

The default setting is INHERIT . To specify an agent version, you must use the
complete version number, not the abbreviated number shown on the console. For a
list of available agent version numbers, call DescribeAgentVersions . **/
        AgentVersion?: String;
        /** The instance&#x27;s tenancy option. The default option is no tenancy, or if the
instance is running in a VPC, inherit tenancy settings from the VPC. The
following are valid values for this parameter: dedicated , default , or host .
Because there are costs associated with changes in tenancy options, we recommend
that you research tenancy options before choosing them for your instances. For
more information about dedicated hosts, see Dedicated Hosts Overview
[http://aws.amazon.com/ec2/dedicated-hosts/] and Amazon EC2 Dedicated Hosts
[http://aws.amazon.com/ec2/dedicated-hosts/] . For more information about
dedicated instances, see Dedicated Instances
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/dedicated-instance.html] 
and Amazon EC2 Dedicated Instances
[http://aws.amazon.com/ec2/purchasing-options/dedicated-instances/] . **/
        Tenancy?: String;
    }
    export interface CreateInstanceResult {
        /** The instance ID. **/
        InstanceId?: String;
    }
    export interface CreateLayerRequest {
        /** The layer stack ID. **/
        StackId: String;
        /** The layer type. A stack cannot have more than one built-in layer of the same
type. It can have any number of custom layers. Built-in layers are not available
in Chef 12 stacks. **/
        Type: LayerType;
        /** The layer name, which is used by the console. **/
        Name: String;
        /** For custom layers only, use this parameter to specify the layer&#x27;s short name,
which is used internally by AWS OpsWorks and by Chef recipes. The short name is
also used as the name for the directory where your app files are installed. It
can have a maximum of 200 characters, which are limited to the alphanumeric
characters, &#x27;-&#x27;, &#x27;_&#x27;, and &#x27;.&#x27;.

The built-in layers&#x27; short names are defined by AWS OpsWorks. For more
information, see the Layer Reference
[http://docs.aws.amazon.com/opsworks/latest/userguide/layers.html] . **/
        Shortname: String;
        /** One or more user-defined key-value pairs to be added to the stack attributes.

To create a cluster layer, set the EcsClusterArn attribute to the cluster&#x27;s ARN. **/
        Attributes?: LayerAttributes;
        /** The ARN of an IAM profile to be used for the layer&#x27;s EC2 instances. For more
information about IAM ARNs, see Using Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] . **/
        CustomInstanceProfileArn?: String;
        /** A JSON-formatted string containing custom stack configuration and deployment
attributes to be installed on the layer&#x27;s instances. For more information, see 
Using Custom JSON
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-json-override.html] 
. This feature is supported as of version 1.7.42 of the AWS CLI. **/
        CustomJson?: String;
        /** An array containing the layer custom security group IDs. **/
        CustomSecurityGroupIds?: Strings;
        /** An array of Package objects that describes the layer packages. **/
        Packages?: Strings;
        /** A VolumeConfigurations object that describes the layer&#x27;s Amazon EBS volumes. **/
        VolumeConfigurations?: VolumeConfigurations;
        /** Whether to disable auto healing for the layer. **/
        EnableAutoHealing?: Boolean;
        /** Whether to automatically assign an Elastic IP address
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html] 
to the layer&#x27;s instances. For more information, see How to Edit a Layer
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html] 
. **/
        AutoAssignElasticIps?: Boolean;
        /** For stacks that are running in a VPC, whether to automatically assign a public
IP address to the layer&#x27;s instances. For more information, see How to Edit a
Layer
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html] 
. **/
        AutoAssignPublicIps?: Boolean;
        /** A LayerCustomRecipes object that specifies the layer custom recipes. **/
        CustomRecipes?: Recipes;
        /** Whether to install operating system and package updates when the instance boots.
The default value is true . To control when updates are installed, set this
value to false . You must then update your instances manually by using 
CreateDeployment to run the update_dependencies stack command or by manually
running yum (Amazon Linux) or apt-get (Ubuntu) on the instances.

To ensure that your instances have the latest security updates, we strongly
recommend using the default value of true . **/
        InstallUpdatesOnBoot?: Boolean;
        /** Whether to use Amazon EBS-optimized instances. **/
        UseEbsOptimizedInstances?: Boolean;
        /** A LifeCycleEventConfiguration object that you can use to configure the Shutdown
event to specify an execution timeout and enable or disable Elastic Load
Balancer connection draining. **/
        LifecycleEventConfiguration?: LifecycleEventConfiguration;
    }
    export interface CreateLayerResult {
        /** The layer ID. **/
        LayerId?: String;
    }
    export interface CreateStackRequest {
        /** The stack name. **/
        Name: String;
        /** The stack&#x27;s AWS region, such as &quot;ap-south-1&quot;. For more information about Amazon
regions, see Regions and Endpoints
[http://docs.aws.amazon.com/general/latest/gr/rande.html] . **/
        Region: String;
        /** The ID of the VPC that the stack is to be launched into. The VPC must be in the
stack&#x27;s region. All instances are launched into this VPC. You cannot change the
ID later.

 &amp;#42; If your account supports EC2-Classic, the default value is no VPC .
   
   
 * If your account does not support EC2-Classic, the default value is the
   default VPC for the specified region.
   
   

If the VPC ID corresponds to a default VPC and you have specified either the 
DefaultAvailabilityZone or the DefaultSubnetId parameter only, AWS OpsWorks
infers the value of the other parameter. If you specify neither parameter, AWS
OpsWorks sets these parameters to the first valid Availability Zone for the
specified region and the corresponding default VPC subnet ID, respectively.

If you specify a nondefault VPC ID, note the following:

 * It must belong to a VPC in your account that is in the specified region.
   
   
 * You must specify a value for DefaultSubnetId .
   
   

For more information on how to use AWS OpsWorks with a VPC, see Running a Stack
in a VPC
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-vpc.html] .
For more information on default VPC and EC2-Classic, see Supported Platforms
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html] 
. **/
        VpcId?: String;
        /** One or more user-defined key-value pairs to be added to the stack attributes. **/
        Attributes?: StackAttributes;
        /** The stack&#x27;s AWS Identity and Access Management (IAM) role, which allows AWS
OpsWorks to work with AWS resources on your behalf. You must set this parameter
to the Amazon Resource Name (ARN) for an existing IAM role. For more information
about IAM ARNs, see Using Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] . **/
        ServiceRoleArn: String;
        /** The Amazon Resource Name (ARN) of an IAM profile that is the default profile for
all of the stack&#x27;s EC2 instances. For more information about IAM ARNs, see Using
Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] . **/
        DefaultInstanceProfileArn: String;
        /** The stack&#x27;s default operating system, which is installed on every instance
unless you specify a different operating system when you create the instance.
You can specify one of the following.

 &amp;#42; A supported Linux operating system: An Amazon Linux version, such as Amazon
   Linux 2016.03 , Amazon Linux 2015.09 , or Amazon Linux 2015.03 .
   
   
 * A supported Ubuntu operating system, such as Ubuntu 16.04 LTS , Ubuntu 14.04
   LTS , or Ubuntu 12.04 LTS .
   
   
 * CentOS 7
   
   
 * Red Hat Enterprise Linux 7
   
   
 * A supported Windows operating system, such as Microsoft Windows Server 2012
   R2 Base , Microsoft Windows Server 2012 R2 with SQL Server Express , 
   Microsoft Windows Server 2012 R2 with SQL Server Standard , or Microsoft
   Windows Server 2012 R2 with SQL Server Web .
   
   
 * A custom AMI: Custom . You specify the custom AMI you want to use when you
   create instances. For more information, see Using Custom AMIs
   [http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html] 
   .
   
   

The default option is the current Amazon Linux version. For more information on
the supported operating systems, see AWS OpsWorks Operating Systems
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-os.html] 
. **/
        DefaultOs?: String;
        /** The stack&#x27;s host name theme, with spaces replaced by underscores. The theme is
used to generate host names for the stack&#x27;s instances. By default, HostnameTheme 
is set to Layer_Dependent , which creates host names by appending integers to
the layer&#x27;s short name. The other themes are:

 &amp;#42; Baked_Goods
   
   
 * Clouds
   
   
 * Europe_Cities
   
   
 * Fruits
   
   
 * Greek_Deities
   
   
 * Legendary_creatures_from_Japan
   
   
 * Planets_and_Moons
   
   
 * Roman_Deities
   
   
 * Scottish_Islands
   
   
 * US_Cities
   
   
 * Wild_Cats
   
   

To obtain a generated host name, call GetHostNameSuggestion , which returns a
host name based on the current theme. **/
        HostnameTheme?: String;
        /** The stack&#x27;s default Availability Zone, which must be in the specified region.
For more information, see Regions and Endpoints
[http://docs.aws.amazon.com/general/latest/gr/rande.html] . If you also specify
a value for DefaultSubnetId , the subnet must be in the same zone. For more
information, see the VpcId parameter description. **/
        DefaultAvailabilityZone?: String;
        /** The stack&#x27;s default VPC subnet ID. This parameter is required if you specify a
value for the VpcId parameter. All instances are launched into this subnet
unless you specify otherwise when you create the instance. If you also specify a
value for DefaultAvailabilityZone , the subnet must be in that zone. For
information on default values and when this parameter is required, see the VpcId 
parameter description. **/
        DefaultSubnetId?: String;
        /** A string that contains user-defined, custom JSON. It can be used to override the
corresponding default stack configuration attribute values or to pass data to
recipes. The string should be in the following escape characters such as &#x27;&quot;&#x27;:

&quot;{\&quot;key1\&quot;: \&quot;value1\&quot;, \&quot;key2\&quot;: \&quot;value2\&quot;,...}&quot;

For more information on custom JSON, see Use Custom JSON to Modify the Stack
Configuration Attributes
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html] . **/
        CustomJson?: String;
        /** The configuration manager. When you create a stack we recommend that you use the
configuration manager to specify the Chef version: 12, 11.10, or 11.4 for Linux
stacks, or 12.2 for Windows stacks. The default value for Linux stacks is
currently 11.4. **/
        ConfigurationManager?: StackConfigurationManager;
        /** A ChefConfiguration object that specifies whether to enable Berkshelf and the
Berkshelf version on Chef 11.10 stacks. For more information, see Create a New
Stack
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html] 
. **/
        ChefConfiguration?: ChefConfiguration;
        /** Whether the stack uses custom cookbooks. **/
        UseCustomCookbooks?: Boolean;
        /** Whether to associate the AWS OpsWorks built-in security groups with the stack&#x27;s
layers.

AWS OpsWorks provides a standard set of built-in security groups, one for each
layer, which are associated with layers by default. With 
UseOpsworksSecurityGroups you can instead provide your own custom security
groups. UseOpsworksSecurityGroups has the following settings:

 &amp;#42; True - AWS OpsWorks automatically associates the appropriate built-in
   security group with each layer (default setting). You can associate
   additional security groups with a layer after you create it, but you cannot
   delete the built-in security group.
   
   
 * False - AWS OpsWorks does not associate built-in security groups with layers.
   You must create appropriate EC2 security groups and associate a security
   group with each layer that you create. However, you can still manually
   associate a built-in security group with a layer on creation; custom security
   groups are required only for those layers that need custom settings.
   
   

For more information, see Create a New Stack
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html] 
. **/
        UseOpsworksSecurityGroups?: Boolean;
        CustomCookbooksSource?: Source;
        /** A default Amazon EC2 key pair name. The default value is none. If you specify a
key pair name, AWS OpsWorks installs the public key on the instance and you can
use the private key with an SSH client to log in to the instance. For more
information, see Using SSH to Communicate with an Instance
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-ssh.html] 
and Managing SSH Access
[http://docs.aws.amazon.com/opsworks/latest/userguide/security-ssh-access.html] 
. You can override this setting by specifying a different key pair, or no key
pair, when you create an instance
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html] 
. **/
        DefaultSshKeyName?: String;
        /** The default root device type. This value is the default for all instances in the
stack, but you can override it when you create an instance. The default option
is instance-store . For more information, see Storage for the Root Device
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device] 
. **/
        DefaultRootDeviceType?: RootDeviceType;
        /** The default AWS OpsWorks agent version. You have the following options:

 &amp;#42; Auto-update - Set this parameter to LATEST . AWS OpsWorks automatically
   installs new agent versions on the stack&#x27;s instances as soon as they are
   available.
   
   
 * Fixed version - Set this parameter to your preferred agent version. To update
   the agent version, you must edit the stack configuration and specify a new
   version. AWS OpsWorks then automatically installs that version on the stack&#x27;s
   instances.
   
   

The default setting is the most recent release of the agent. To specify an agent
version, you must use the complete version number, not the abbreviated number
shown on the console. For a list of available agent version numbers, call 
DescribeAgentVersions .

You can also specify an agent version when you create or update an instance,
which overrides the stack&#x27;s default setting. **/
        AgentVersion?: String;
    }
    export interface CreateStackResult {
        /** The stack ID, which is an opaque string that you use to identify the stack when
performing actions such as DescribeStacks . **/
        StackId?: String;
    }
    export interface CreateUserProfileRequest {
        /** The user&#x27;s IAM ARN. **/
        IamUserArn: String;
        /** The user&#x27;s SSH user name. The allowable characters are [a-z], [A-Z], [0-9], &#x27;-&#x27;,
and &#x27;_&#x27;. If the specified name includes other punctuation marks, AWS OpsWorks
removes them. For example, my.name will be changed to myname . If you do not
specify an SSH user name, AWS OpsWorks generates one from the IAM user name. **/
        SshUsername?: String;
        /** The user&#x27;s public SSH key. **/
        SshPublicKey?: String;
        /** Whether users can specify their own SSH public key through the My Settings page.
For more information, see Setting an IAM User&#x27;s Public SSH Key
[http://docs.aws.amazon.com/opsworks/latest/userguide/security-settingsshkey.html] 
. **/
        AllowSelfManagement?: Boolean;
    }
    export interface CreateUserProfileResult {
        /** The user&#x27;s IAM ARN. **/
        IamUserArn?: String;
    }
    export interface DataSource {
        /** The data source&#x27;s type, AutoSelectOpsworksMysqlInstance , OpsworksMysqlInstance 
, or RdsDbInstance . **/
        Type?: String;
        /** The data source&#x27;s ARN. **/
        Arn?: String;
        /** The database name. **/
        DatabaseName?: String;
    }
    export interface DeleteAppRequest {
        /** The app ID. **/
        AppId: String;
    }
    export interface DeleteInstanceRequest {
        /** The instance ID. **/
        InstanceId: String;
        /** Whether to delete the instance Elastic IP address. **/
        DeleteElasticIp?: Boolean;
        /** Whether to delete the instance&#x27;s Amazon EBS volumes. **/
        DeleteVolumes?: Boolean;
    }
    export interface DeleteLayerRequest {
        /** The layer ID. **/
        LayerId: String;
    }
    export interface DeleteStackRequest {
        /** The stack ID. **/
        StackId: String;
    }
    export interface DeleteUserProfileRequest {
        /** The user&#x27;s IAM ARN. **/
        IamUserArn: String;
    }
    export interface Deployment {
        /** The deployment ID. **/
        DeploymentId?: String;
        /** The stack ID. **/
        StackId?: String;
        /** The app ID. **/
        AppId?: String;
        /** Date when the deployment was created. **/
        CreatedAt?: DateTime;
        /** Date when the deployment completed. **/
        CompletedAt?: DateTime;
        /** The deployment duration. **/
        Duration?: Integer;
        /** The user&#x27;s IAM ARN. **/
        IamUserArn?: String;
        /** A user-defined comment. **/
        Comment?: String;
        Command?: DeploymentCommand;
        /** The deployment status:

 &amp;#42; running
   
   
 * successful
   
   
 * failed **/
        Status?: String;
        /** A string that contains user-defined custom JSON. It can be used to override the
corresponding default stack configuration attribute values for stack or to pass
data to recipes. The string should be in the following format and must escape
characters such as &#x27;&quot;&#x27;:

&quot;{\&quot;key1\&quot;: \&quot;value1\&quot;, \&quot;key2\&quot;: \&quot;value2\&quot;,...}&quot;

For more information on custom JSON, see Use Custom JSON to Modify the Stack
Configuration Attributes
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html] . **/
        CustomJson?: String;
        /** The IDs of the target instances. **/
        InstanceIds?: Strings;
    }
    export interface DeploymentCommand {
        /** Specifies the operation. You can specify only one command.

For stacks, the following commands are available:

 &amp;#42; execute_recipes : Execute one or more recipes. To specify the recipes, set an 
   Args parameter named recipes to the list of recipes to be executed. For
   example, to execute phpapp::appsetup , set Args to 
   {&quot;recipes&quot;:[&quot;phpapp::appsetup&quot;]} .
   
   
 * install_dependencies : Install the stack&#x27;s dependencies.
   
   
 * update_custom_cookbooks : Update the stack&#x27;s custom cookbooks.
   
   
 * update_dependencies : Update the stack&#x27;s dependencies.
   
   

The update_dependencies and install_dependencies commands are supported only for
Linux instances. You can run the commands successfully on Windows instances, but
they do nothing.

For apps, the following commands are available:

 * deploy : Deploy an app. Ruby on Rails apps have an optional Args parameter
   named migrate . Set Args to {&quot;migrate&quot;:[&quot;true&quot;]} to migrate the database. The
   default setting is {&quot;migrate&quot;:[&quot;false&quot;]}.
   
   
 * rollback Roll the app back to the previous version. When you update an app,
   AWS OpsWorks stores the previous version, up to a maximum of five versions.
   You can use this command to roll an app back as many as four versions.
   
   
 * start : Start the app&#x27;s web or application server.
   
   
 * stop : Stop the app&#x27;s web or application server.
   
   
 * restart : Restart the app&#x27;s web or application server.
   
   
 * undeploy : Undeploy the app. **/
        Name: DeploymentCommandName;
        /** The arguments of those commands that take arguments. It should be set to a JSON
object with the following format:

{&quot;arg_name1&quot; : [&quot;value1&quot;, &quot;value2&quot;, ...], &quot;arg_name2&quot; : [&quot;value1&quot;, &quot;value2&quot;,
...], ...}

The update_dependencies command takes two arguments:

 &amp;#42; upgrade_os_to - Specifies the desired Amazon Linux version for instances
   whose OS you want to upgrade, such as Amazon Linux 2014.09 . You must also
   set the allow_reboot argument to true.
   
   
 * allow_reboot - Specifies whether to allow AWS OpsWorks to reboot the
   instances if necessary, after installing the updates. This argument can be
   set to either true or false . The default value is false .
   
   

For example, to upgrade an instance to Amazon Linux 2014.09, set Args to the
following.

{ &quot;upgrade_os_to&quot;:[&quot;Amazon Linux 2014.09&quot;], &quot;allow_reboot&quot;:[&quot;true&quot;] } **/
        Args?: DeploymentCommandArgs;
    }
    export interface DeregisterEcsClusterRequest {
        /** The cluster&#x27;s ARN. **/
        EcsClusterArn: String;
    }
    export interface DeregisterElasticIpRequest {
        /** The Elastic IP address. **/
        ElasticIp: String;
    }
    export interface DeregisterInstanceRequest {
        /** The instance ID. **/
        InstanceId: String;
    }
    export interface DeregisterRdsDbInstanceRequest {
        /** The Amazon RDS instance&#x27;s ARN. **/
        RdsDbInstanceArn: String;
    }
    export interface DeregisterVolumeRequest {
        /** The AWS OpsWorks volume ID, which is the GUID that AWS OpsWorks assigned to the
instance when you registered the volume with the stack, not the Amazon EC2
volume ID. **/
        VolumeId: String;
    }
    export interface DescribeAgentVersionsRequest {
        /** The stack ID. **/
        StackId?: String;
        /** The configuration manager. **/
        ConfigurationManager?: StackConfigurationManager;
    }
    export interface DescribeAgentVersionsResult {
        /** The agent versions for the specified stack or configuration manager. Note that
this value is the complete version number, not the abbreviated number used by
the console. **/
        AgentVersions?: AgentVersions;
    }
    export interface DescribeAppsRequest {
        /** The app stack ID. If you use this parameter, DescribeApps returns a description
of the apps in the specified stack. **/
        StackId?: String;
        /** An array of app IDs for the apps to be described. If you use this parameter, 
DescribeApps returns a description of the specified apps. Otherwise, it returns
a description of every app. **/
        AppIds?: Strings;
    }
    export interface DescribeAppsResult {
        /** An array of App objects that describe the specified apps. **/
        Apps?: Apps;
    }
    export interface DescribeCommandsRequest {
        /** The deployment ID. If you include this parameter, DescribeCommands returns a
description of the commands associated with the specified deployment. **/
        DeploymentId?: String;
        /** The instance ID. If you include this parameter, DescribeCommands returns a
description of the commands associated with the specified instance. **/
        InstanceId?: String;
        /** An array of command IDs. If you include this parameter, DescribeCommands returns
a description of the specified commands. Otherwise, it returns a description of
every command. **/
        CommandIds?: Strings;
    }
    export interface DescribeCommandsResult {
        /** An array of Command objects that describe each of the specified commands. **/
        Commands?: Commands;
    }
    export interface DescribeDeploymentsRequest {
        /** The stack ID. If you include this parameter, DescribeDeployments returns a
description of the commands associated with the specified stack. **/
        StackId?: String;
        /** The app ID. If you include this parameter, DescribeDeployments returns a
description of the commands associated with the specified app. **/
        AppId?: String;
        /** An array of deployment IDs to be described. If you include this parameter, 
DescribeDeployments returns a description of the specified deployments.
Otherwise, it returns a description of every deployment. **/
        DeploymentIds?: Strings;
    }
    export interface DescribeDeploymentsResult {
        /** An array of Deployment objects that describe the deployments. **/
        Deployments?: Deployments;
    }
    export interface DescribeEcsClustersRequest {
        /** A list of ARNs, one for each cluster to be described. **/
        EcsClusterArns?: Strings;
        /** A stack ID. DescribeEcsClusters returns a description of the cluster that is
registered with the stack. **/
        StackId?: String;
        /** If the previous paginated request did not return all of the remaining results,
the response object&#x27;s NextToken parameter value is set to a token. To retrieve
the next set of results, call DescribeEcsClusters again and assign that token to
the request object&#x27;s NextToken parameter. If there are no remaining results, the
previous response object&#x27;s NextToken parameter is set to null . **/
        NextToken?: String;
        /** To receive a paginated response, use this parameter to specify the maximum
number of results to be returned with a single call. If the number of available
results exceeds this maximum, the response includes a NextToken value that you
can assign to the NextToken request parameter to get the next set of results. **/
        MaxResults?: Integer;
    }
    export interface DescribeEcsClustersResult {
        /** A list of EcsCluster objects containing the cluster descriptions. **/
        EcsClusters?: EcsClusters;
        /** If a paginated request does not return all of the remaining results, this
parameter is set to a token that you can assign to the request object&#x27;s 
NextToken parameter to retrieve the next set of results. If the previous
paginated request returned all of the remaining results, this parameter is set
to null . **/
        NextToken?: String;
    }
    export interface DescribeElasticIpsRequest {
        /** The instance ID. If you include this parameter, DescribeElasticIps returns a
description of the Elastic IP addresses associated with the specified instance. **/
        InstanceId?: String;
        /** A stack ID. If you include this parameter, DescribeElasticIps returns a
description of the Elastic IP addresses that are registered with the specified
stack. **/
        StackId?: String;
        /** An array of Elastic IP addresses to be described. If you include this parameter, 
DescribeElasticIps returns a description of the specified Elastic IP addresses.
Otherwise, it returns a description of every Elastic IP address. **/
        Ips?: Strings;
    }
    export interface DescribeElasticIpsResult {
        /** An ElasticIps object that describes the specified Elastic IP addresses. **/
        ElasticIps?: ElasticIps;
    }
    export interface DescribeElasticLoadBalancersRequest {
        /** A stack ID. The action describes the stack&#x27;s Elastic Load Balancing instances. **/
        StackId?: String;
        /** A list of layer IDs. The action describes the Elastic Load Balancing instances
for the specified layers. **/
        LayerIds?: Strings;
    }
    export interface DescribeElasticLoadBalancersResult {
        /** A list of ElasticLoadBalancer objects that describe the specified Elastic Load
Balancing instances. **/
        ElasticLoadBalancers?: ElasticLoadBalancers;
    }
    export interface DescribeInstancesRequest {
        /** A stack ID. If you use this parameter, DescribeInstances returns descriptions of
the instances associated with the specified stack. **/
        StackId?: String;
        /** A layer ID. If you use this parameter, DescribeInstances returns descriptions of
the instances associated with the specified layer. **/
        LayerId?: String;
        /** An array of instance IDs to be described. If you use this parameter, 
DescribeInstances returns a description of the specified instances. Otherwise,
it returns a description of every instance. **/
        InstanceIds?: Strings;
    }
    export interface DescribeInstancesResult {
        /** An array of Instance objects that describe the instances. **/
        Instances?: Instances;
    }
    export interface DescribeLayersRequest {
        /** The stack ID. **/
        StackId?: String;
        /** An array of layer IDs that specify the layers to be described. If you omit this
parameter, DescribeLayers returns a description of every layer in the specified
stack. **/
        LayerIds?: Strings;
    }
    export interface DescribeLayersResult {
        /** An array of Layer objects that describe the layers. **/
        Layers?: Layers;
    }
    export interface DescribeLoadBasedAutoScalingRequest {
        /** An array of layer IDs. **/
        LayerIds: Strings;
    }
    export interface DescribeLoadBasedAutoScalingResult {
        /** An array of LoadBasedAutoScalingConfiguration objects that describe each layer&#x27;s
configuration. **/
        LoadBasedAutoScalingConfigurations?: LoadBasedAutoScalingConfigurations;
    }
    export interface DescribeMyUserProfileResult {
        /** A UserProfile object that describes the user&#x27;s SSH information. **/
        UserProfile?: SelfUserProfile;
    }
    export interface DescribePermissionsRequest {
        /** The user&#x27;s IAM ARN. For more information about IAM ARNs, see Using Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] . **/
        IamUserArn?: String;
        /** The stack ID. **/
        StackId?: String;
    }
    export interface DescribePermissionsResult {
        /** An array of Permission objects that describe the stack permissions.

 &amp;#42; If the request object contains only a stack ID, the array contains a 
   Permission object with permissions for each of the stack IAM ARNs.
   
   
 * If the request object contains only an IAM ARN, the array contains a 
   Permission object with permissions for each of the user&#x27;s stack IDs.
   
   
 * If the request contains a stack ID and an IAM ARN, the array contains a
   single Permission object with permissions for the specified stack and IAM
   ARN. **/
        Permissions?: Permissions;
    }
    export interface DescribeRaidArraysRequest {
        /** The instance ID. If you use this parameter, DescribeRaidArrays returns
descriptions of the RAID arrays associated with the specified instance. **/
        InstanceId?: String;
        /** The stack ID. **/
        StackId?: String;
        /** An array of RAID array IDs. If you use this parameter, DescribeRaidArrays 
returns descriptions of the specified arrays. Otherwise, it returns a
description of every array. **/
        RaidArrayIds?: Strings;
    }
    export interface DescribeRaidArraysResult {
        /** A RaidArrays object that describes the specified RAID arrays. **/
        RaidArrays?: RaidArrays;
    }
    export interface DescribeRdsDbInstancesRequest {
        /** The stack ID that the instances are registered with. The operation returns
descriptions of all registered Amazon RDS instances. **/
        StackId: String;
        /** An array containing the ARNs of the instances to be described. **/
        RdsDbInstanceArns?: Strings;
    }
    export interface DescribeRdsDbInstancesResult {
        /** An a array of RdsDbInstance objects that describe the instances. **/
        RdsDbInstances?: RdsDbInstances;
    }
    export interface DescribeServiceErrorsRequest {
        /** The stack ID. If you use this parameter, DescribeServiceErrors returns
descriptions of the errors associated with the specified stack. **/
        StackId?: String;
        /** The instance ID. If you use this parameter, DescribeServiceErrors returns
descriptions of the errors associated with the specified instance. **/
        InstanceId?: String;
        /** An array of service error IDs. If you use this parameter, DescribeServiceErrors 
returns descriptions of the specified errors. Otherwise, it returns a
description of every error. **/
        ServiceErrorIds?: Strings;
    }
    export interface DescribeServiceErrorsResult {
        /** An array of ServiceError objects that describe the specified service errors. **/
        ServiceErrors?: ServiceErrors;
    }
    export interface DescribeStackProvisioningParametersRequest {
        /** The stack ID **/
        StackId: String;
    }
    export interface DescribeStackProvisioningParametersResult {
        /** The AWS OpsWorks agent installer&#x27;s URL. **/
        AgentInstallerUrl?: String;
        /** An embedded object that contains the provisioning parameters. **/
        Parameters?: Parameters;
    }
    export interface DescribeStackSummaryRequest {
        /** The stack ID. **/
        StackId: String;
    }
    export interface DescribeStackSummaryResult {
        /** A StackSummary object that contains the results. **/
        StackSummary?: StackSummary;
    }
    export interface DescribeStacksRequest {
        /** An array of stack IDs that specify the stacks to be described. If you omit this
parameter, DescribeStacks returns a description of every stack. **/
        StackIds?: Strings;
    }
    export interface DescribeStacksResult {
        /** An array of Stack objects that describe the stacks. **/
        Stacks?: Stacks;
    }
    export interface DescribeTimeBasedAutoScalingRequest {
        /** An array of instance IDs. **/
        InstanceIds: Strings;
    }
    export interface DescribeTimeBasedAutoScalingResult {
        /** An array of TimeBasedAutoScalingConfiguration objects that describe the
configuration for the specified instances. **/
        TimeBasedAutoScalingConfigurations?: TimeBasedAutoScalingConfigurations;
    }
    export interface DescribeUserProfilesRequest {
        /** An array of IAM user ARNs that identify the users to be described. **/
        IamUserArns?: Strings;
    }
    export interface DescribeUserProfilesResult {
        /** A Users object that describes the specified users. **/
        UserProfiles?: UserProfiles;
    }
    export interface DescribeVolumesRequest {
        /** The instance ID. If you use this parameter, DescribeVolumes returns descriptions
of the volumes associated with the specified instance. **/
        InstanceId?: String;
        /** A stack ID. The action describes the stack&#x27;s registered Amazon EBS volumes. **/
        StackId?: String;
        /** The RAID array ID. If you use this parameter, DescribeVolumes returns
descriptions of the volumes associated with the specified RAID array. **/
        RaidArrayId?: String;
        /** Am array of volume IDs. If you use this parameter, DescribeVolumes returns
descriptions of the specified volumes. Otherwise, it returns a description of
every volume. **/
        VolumeIds?: Strings;
    }
    export interface DescribeVolumesResult {
        /** An array of volume IDs. **/
        Volumes?: Volumes;
    }
    export interface DetachElasticLoadBalancerRequest {
        /** The Elastic Load Balancing instance&#x27;s name. **/
        ElasticLoadBalancerName: String;
        /** The ID of the layer that the Elastic Load Balancing instance is attached to. **/
        LayerId: String;
    }
    export interface DisassociateElasticIpRequest {
        /** The Elastic IP address. **/
        ElasticIp: String;
    }
    export interface EbsBlockDevice {
        /** The snapshot ID. **/
        SnapshotId?: String;
        /** The number of I/O operations per second (IOPS) that the volume supports. For
more information, see EbsBlockDevice
[http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html] 
. **/
        Iops?: Integer;
        /** The volume size, in GiB. For more information, see EbsBlockDevice
[http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html] 
. **/
        VolumeSize?: Integer;
        /** The volume type. gp2 for General Purpose (SSD) volumes, io1 for Provisioned IOPS
(SSD) volumes, and standard for Magnetic volumes. **/
        VolumeType?: VolumeType;
        /** Whether the volume is deleted on instance termination. **/
        DeleteOnTermination?: Boolean;
    }
    export interface EcsCluster {
        /** The cluster&#x27;s ARN. **/
        EcsClusterArn?: String;
        /** The cluster name. **/
        EcsClusterName?: String;
        /** The stack ID. **/
        StackId?: String;
        /** The time and date that the cluster was registered with the stack. **/
        RegisteredAt?: DateTime;
    }
    export interface ElasticIp {
        /** The IP address. **/
        Ip?: String;
        /** The name. **/
        Name?: String;
        /** The domain. **/
        Domain?: String;
        /** The AWS region. For more information, see Regions and Endpoints
[http://docs.aws.amazon.com/general/latest/gr/rande.html] . **/
        Region?: String;
        /** The ID of the instance that the address is attached to. **/
        InstanceId?: String;
    }
    export interface ElasticLoadBalancer {
        /** The Elastic Load Balancing instance&#x27;s name. **/
        ElasticLoadBalancerName?: String;
        /** The instance&#x27;s AWS region. **/
        Region?: String;
        /** The instance&#x27;s public DNS name. **/
        DnsName?: String;
        /** The ID of the stack that the instance is associated with. **/
        StackId?: String;
        /** The ID of the layer that the instance is attached to. **/
        LayerId?: String;
        /** The VPC ID. **/
        VpcId?: String;
        /** A list of Availability Zones. **/
        AvailabilityZones?: Strings;
        /** A list of subnet IDs, if the stack is running in a VPC. **/
        SubnetIds?: Strings;
        /** A list of the EC2 instances that the Elastic Load Balancing instance is managing
traffic for. **/
        Ec2InstanceIds?: Strings;
    }
    export interface EnvironmentVariable {
        /** (Required) The environment variable&#x27;s name, which can consist of up to 64
characters and must be specified. The name can contain upper- and lowercase
letters, numbers, and underscores (_), but it must start with a letter or
underscore. **/
        Key: String;
        /** (Optional) The environment variable&#x27;s value, which can be left empty. If you
specify a value, it can contain up to 256 characters, which must all be
printable. **/
        Value: String;
        /** (Optional) Whether the variable&#x27;s value will be returned by the DescribeApps 
action. To conceal an environment variable&#x27;s value, set Secure to true . 
DescribeApps then returns &amp;#42;****FILTERED***** instead of the actual value. The
default value for Secure is false . **/
        Secure?: Boolean;
    }
    export interface GetHostnameSuggestionRequest {
        /** The layer ID. **/
        LayerId: String;
    }
    export interface GetHostnameSuggestionResult {
        /** The layer ID. **/
        LayerId?: String;
        /** The generated host name. **/
        Hostname?: String;
    }
    export interface GrantAccessRequest {
        /** The instance&#x27;s AWS OpsWorks ID. **/
        InstanceId: String;
        /** The length of time (in minutes) that the grant is valid. When the grant expires
at the end of this period, the user will no longer be able to use the
credentials to log in. If the user is logged in at the time, he or she
automatically will be logged out. **/
        ValidForInMinutes?: ValidForInMinutes;
    }
    export interface GrantAccessResult {
        /** A TemporaryCredential object that contains the data needed to log in to the
instance by RDP clients, such as the Microsoft Remote Desktop Connection. **/
        TemporaryCredential?: TemporaryCredential;
    }
    export interface Instance {
        /** The agent version. This parameter is set to INHERIT if the instance inherits the
default stack setting or to a a version number for a fixed agent version. **/
        AgentVersion?: String;
        /** A custom AMI ID to be used to create the instance. For more information, see 
Instances
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html] **/
        AmiId?: String;
        /** The instance architecture: &quot;i386&quot; or &quot;x86_64&quot;. **/
        Architecture?: Architecture;
        /** For load-based or time-based instances, the type. **/
        AutoScalingType?: AutoScalingType;
        /** The instance Availability Zone. For more information, see Regions and Endpoints
[http://docs.aws.amazon.com/general/latest/gr/rande.html] . **/
        AvailabilityZone?: String;
        /** An array of BlockDeviceMapping objects that specify the instance&#x27;s block device
mappings. **/
        BlockDeviceMappings?: BlockDeviceMappings;
        /** The time that the instance was created. **/
        CreatedAt?: DateTime;
        /** Whether this is an Amazon EBS-optimized instance. **/
        EbsOptimized?: Boolean;
        /** The ID of the associated Amazon EC2 instance. **/
        Ec2InstanceId?: String;
        /** For container instances, the Amazon ECS cluster&#x27;s ARN. **/
        EcsClusterArn?: String;
        /** For container instances, the instance&#x27;s ARN. **/
        EcsContainerInstanceArn?: String;
        /** The instance Elastic IP address
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html] 
. **/
        ElasticIp?: String;
        /** The instance host name. **/
        Hostname?: String;
        /** For registered instances, the infrastructure class: ec2 or on-premises . **/
        InfrastructureClass?: String;
        /** Whether to install operating system and package updates when the instance boots.
The default value is true . If this value is set to false , you must then update
your instances manually by using CreateDeployment to run the update_dependencies 
stack command or by manually running yum (Amazon Linux) or apt-get (Ubuntu) on
the instances.

We strongly recommend using the default value of true , to ensure that your
instances have the latest security updates. **/
        InstallUpdatesOnBoot?: Boolean;
        /** The instance ID. **/
        InstanceId?: String;
        /** The ARN of the instance&#x27;s IAM profile. For more information about IAM ARNs, see 
Using Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] . **/
        InstanceProfileArn?: String;
        /** The instance type, such as t2.micro . **/
        InstanceType?: String;
        /** The ID of the last service error. For more information, call 
DescribeServiceErrors . **/
        LastServiceErrorId?: String;
        /** An array containing the instance layer IDs. **/
        LayerIds?: Strings;
        /** The instance&#x27;s operating system. **/
        Os?: String;
        /** The instance&#x27;s platform. **/
        Platform?: String;
        /** The The instance&#x27;s private DNS name. **/
        PrivateDns?: String;
        /** The instance&#x27;s private IP address. **/
        PrivateIp?: String;
        /** The instance public DNS name. **/
        PublicDns?: String;
        /** The instance public IP address. **/
        PublicIp?: String;
        /** For registered instances, who performed the registration. **/
        RegisteredBy?: String;
        /** The instance&#x27;s reported AWS OpsWorks agent version. **/
        ReportedAgentVersion?: String;
        /** For registered instances, the reported operating system. **/
        ReportedOs?: ReportedOs;
        /** The instance&#x27;s root device type. For more information, see Storage for the Root
Device
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device] 
. **/
        RootDeviceType?: RootDeviceType;
        /** The root device volume ID. **/
        RootDeviceVolumeId?: String;
        /** An array containing the instance security group IDs. **/
        SecurityGroupIds?: Strings;
        /** The SSH key&#x27;s Deep Security Agent (DSA) fingerprint. **/
        SshHostDsaKeyFingerprint?: String;
        /** The SSH key&#x27;s RSA fingerprint. **/
        SshHostRsaKeyFingerprint?: String;
        /** The instance&#x27;s Amazon EC2 key-pair name. **/
        SshKeyName?: String;
        /** The stack ID. **/
        StackId?: String;
        /** The instance status:

 &amp;#42; booting
   
   
 * connection_lost
   
   
 * online
   
   
 * pending
   
   
 * rebooting
   
   
 * requested
   
   
 * running_setup
   
   
 * setup_failed
   
   
 * shutting_down
   
   
 * start_failed
   
   
 * stop_failed
   
   
 * stopped
   
   
 * stopping
   
   
 * terminated
   
   
 * terminating **/
        Status?: String;
        /** The instance&#x27;s subnet ID; applicable only if the stack is running in a VPC. **/
        SubnetId?: String;
        /** The instance&#x27;s tenancy option, such as dedicated or host . **/
        Tenancy?: String;
        /** The instance&#x27;s virtualization type: paravirtual or hvm . **/
        VirtualizationType?: VirtualizationType;
    }
    export interface InstanceIdentity {
        /** A JSON document that contains the metadata. **/
        Document?: String;
        /** A signature that can be used to verify the document&#x27;s accuracy and authenticity. **/
        Signature?: String;
    }
    export interface InstancesCount {
        /** The number of instances in the Assigning state. **/
        Assigning?: Integer;
        /** The number of instances with booting status. **/
        Booting?: Integer;
        /** The number of instances with connection_lost status. **/
        ConnectionLost?: Integer;
        /** The number of instances in the Deregistering state. **/
        Deregistering?: Integer;
        /** The number of instances with online status. **/
        Online?: Integer;
        /** The number of instances with pending status. **/
        Pending?: Integer;
        /** The number of instances with rebooting status. **/
        Rebooting?: Integer;
        /** The number of instances in the Registered state. **/
        Registered?: Integer;
        /** The number of instances in the Registering state. **/
        Registering?: Integer;
        /** The number of instances with requested status. **/
        Requested?: Integer;
        /** The number of instances with running_setup status. **/
        RunningSetup?: Integer;
        /** The number of instances with setup_failed status. **/
        SetupFailed?: Integer;
        /** The number of instances with shutting_down status. **/
        ShuttingDown?: Integer;
        /** The number of instances with start_failed status. **/
        StartFailed?: Integer;
        /** The number of instances with stopped status. **/
        Stopped?: Integer;
        /** The number of instances with stopping status. **/
        Stopping?: Integer;
        /** The number of instances with terminated status. **/
        Terminated?: Integer;
        /** The number of instances with terminating status. **/
        Terminating?: Integer;
        /** The number of instances in the Unassigning state. **/
        Unassigning?: Integer;
    }
    export interface Layer {
        /** The layer stack ID. **/
        StackId?: String;
        /** The layer ID. **/
        LayerId?: String;
        /** The layer type. **/
        Type?: LayerType;
        /** The layer name. **/
        Name?: String;
        /** The layer short name. **/
        Shortname?: String;
        /** The layer attributes.

For the HaproxyStatsPassword , MysqlRootPassword , and GangliaPassword 
attributes, AWS OpsWorks returns &amp;#42;****FILTERED***** instead of the actual value

For an ECS Cluster layer, AWS OpsWorks the EcsClusterArn attribute is set to the
cluster&#x27;s ARN. **/
        Attributes?: LayerAttributes;
        /** The ARN of the default IAM profile to be used for the layer&#x27;s EC2 instances. For
more information about IAM ARNs, see Using Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] . **/
        CustomInstanceProfileArn?: String;
        /** A JSON formatted string containing the layer&#x27;s custom stack configuration and
deployment attributes. **/
        CustomJson?: String;
        /** An array containing the layer&#x27;s custom security group IDs. **/
        CustomSecurityGroupIds?: Strings;
        /** An array containing the layer&#x27;s security group names. **/
        DefaultSecurityGroupNames?: Strings;
        /** An array of Package objects that describe the layer&#x27;s packages. **/
        Packages?: Strings;
        /** A VolumeConfigurations object that describes the layer&#x27;s Amazon EBS volumes. **/
        VolumeConfigurations?: VolumeConfigurations;
        /** Whether auto healing is disabled for the layer. **/
        EnableAutoHealing?: Boolean;
        /** Whether to automatically assign an Elastic IP address
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html] 
to the layer&#x27;s instances. For more information, see How to Edit a Layer
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html] 
. **/
        AutoAssignElasticIps?: Boolean;
        /** For stacks that are running in a VPC, whether to automatically assign a public
IP address to the layer&#x27;s instances. For more information, see How to Edit a
Layer
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html] 
. **/
        AutoAssignPublicIps?: Boolean;
        DefaultRecipes?: Recipes;
        /** A LayerCustomRecipes object that specifies the layer&#x27;s custom recipes. **/
        CustomRecipes?: Recipes;
        /** Date when the layer was created. **/
        CreatedAt?: DateTime;
        /** Whether to install operating system and package updates when the instance boots.
The default value is true . If this value is set to false , you must then update
your instances manually by using CreateDeployment to run the update_dependencies 
stack command or manually running yum (Amazon Linux) or apt-get (Ubuntu) on the
instances.

We strongly recommend using the default value of true , to ensure that your
instances have the latest security updates. **/
        InstallUpdatesOnBoot?: Boolean;
        /** Whether the layer uses Amazon EBS-optimized instances. **/
        UseEbsOptimizedInstances?: Boolean;
        /** A LifeCycleEventConfiguration object that specifies the Shutdown event
configuration. **/
        LifecycleEventConfiguration?: LifecycleEventConfiguration;
    }
    export interface LifecycleEventConfiguration {
        /** A ShutdownEventConfiguration object that specifies the Shutdown event
configuration. **/
        Shutdown?: ShutdownEventConfiguration;
    }
    export interface LoadBasedAutoScalingConfiguration {
        /** The layer ID. **/
        LayerId?: String;
        /** Whether load-based auto scaling is enabled for the layer. **/
        Enable?: Boolean;
        /** An AutoScalingThresholds object that describes the upscaling configuration,
which defines how and when AWS OpsWorks increases the number of instances. **/
        UpScaling?: AutoScalingThresholds;
        /** An AutoScalingThresholds object that describes the downscaling configuration,
which defines how and when AWS OpsWorks reduces the number of instances. **/
        DownScaling?: AutoScalingThresholds;
    }
    export interface Permission {
        /** A stack ID. **/
        StackId?: String;
        /** The Amazon Resource Name (ARN) for an AWS Identity and Access Management (IAM)
role. For more information about IAM ARNs, see Using Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] . **/
        IamUserArn?: String;
        /** Whether the user can use SSH. **/
        AllowSsh?: Boolean;
        /** Whether the user can use sudo . **/
        AllowSudo?: Boolean;
        /** The user&#x27;s permission level, which must be the following:

 &amp;#42; deny
   
   
 * show
   
   
 * deploy
   
   
 * manage
   
   
 * iam_only
   
   

For more information on the permissions associated with these levels, see 
Managing User Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] **/
        Level?: String;
    }
    export interface RaidArray {
        /** The array ID. **/
        RaidArrayId?: String;
        /** The instance ID. **/
        InstanceId?: String;
        /** The array name. **/
        Name?: String;
        /** The RAID level [http://en.wikipedia.org/wiki/Standard_RAID_levels] . **/
        RaidLevel?: Integer;
        /** The number of disks in the array. **/
        NumberOfDisks?: Integer;
        /** The array&#x27;s size. **/
        Size?: Integer;
        /** The array&#x27;s Linux device. For example /dev/mdadm0. **/
        Device?: String;
        /** The array&#x27;s mount point. **/
        MountPoint?: String;
        /** The array&#x27;s Availability Zone. For more information, see Regions and Endpoints
[http://docs.aws.amazon.com/general/latest/gr/rande.html] . **/
        AvailabilityZone?: String;
        /** When the RAID array was created. **/
        CreatedAt?: DateTime;
        /** The stack ID. **/
        StackId?: String;
        /** The volume type, standard or PIOPS. **/
        VolumeType?: String;
        /** For PIOPS volumes, the IOPS per disk. **/
        Iops?: Integer;
    }
    export interface RdsDbInstance {
        /** The instance&#x27;s ARN. **/
        RdsDbInstanceArn?: String;
        /** The DB instance identifier. **/
        DbInstanceIdentifier?: String;
        /** The master user name. **/
        DbUser?: String;
        /** AWS OpsWorks returns &amp;#42;****FILTERED***** instead of the actual value. **/
        DbPassword?: String;
        /** The instance&#x27;s AWS region. **/
        Region?: String;
        /** The instance&#x27;s address. **/
        Address?: String;
        /** The instance&#x27;s database engine. **/
        Engine?: String;
        /** The ID of the stack that the instance is registered with. **/
        StackId?: String;
        /** Set to true if AWS OpsWorks was unable to discover the Amazon RDS instance. AWS
OpsWorks attempts to discover the instance only once. If this value is set to 
true , you must deregister the instance and then register it again. **/
        MissingOnRds?: Boolean;
    }
    export interface RebootInstanceRequest {
        /** The instance ID. **/
        InstanceId: String;
    }
    export interface Recipes {
        /** An array of custom recipe names to be run following a setup event. **/
        Setup?: Strings;
        /** An array of custom recipe names to be run following a configure event. **/
        Configure?: Strings;
        /** An array of custom recipe names to be run following a deploy event. **/
        Deploy?: Strings;
        /** An array of custom recipe names to be run following a undeploy event. **/
        Undeploy?: Strings;
        /** An array of custom recipe names to be run following a shutdown event. **/
        Shutdown?: Strings;
    }
    export interface RegisterEcsClusterRequest {
        /** The cluster&#x27;s ARN. **/
        EcsClusterArn: String;
        /** The stack ID. **/
        StackId: String;
    }
    export interface RegisterEcsClusterResult {
        /** The cluster&#x27;s ARN. **/
        EcsClusterArn?: String;
    }
    export interface RegisterElasticIpRequest {
        /** The Elastic IP address. **/
        ElasticIp: String;
        /** The stack ID. **/
        StackId: String;
    }
    export interface RegisterElasticIpResult {
        /** The Elastic IP address. **/
        ElasticIp?: String;
    }
    export interface RegisterInstanceRequest {
        /** The ID of the stack that the instance is to be registered with. **/
        StackId: String;
        /** The instance&#x27;s hostname. **/
        Hostname?: String;
        /** The instance&#x27;s public IP address. **/
        PublicIp?: String;
        /** The instance&#x27;s private IP address. **/
        PrivateIp?: String;
        /** The instances public RSA key. This key is used to encrypt communication between
the instance and the service. **/
        RsaPublicKey?: String;
        /** The instances public RSA key fingerprint. **/
        RsaPublicKeyFingerprint?: String;
        /** An InstanceIdentity object that contains the instance&#x27;s identity. **/
        InstanceIdentity?: InstanceIdentity;
    }
    export interface RegisterInstanceResult {
        /** The registered instance&#x27;s AWS OpsWorks ID. **/
        InstanceId?: String;
    }
    export interface RegisterRdsDbInstanceRequest {
        /** The stack ID. **/
        StackId: String;
        /** The Amazon RDS instance&#x27;s ARN. **/
        RdsDbInstanceArn: String;
        /** The database&#x27;s master user name. **/
        DbUser: String;
        /** The database password. **/
        DbPassword: String;
    }
    export interface RegisterVolumeRequest {
        /** The Amazon EBS volume ID. **/
        Ec2VolumeId?: String;
        /** The stack ID. **/
        StackId: String;
    }
    export interface RegisterVolumeResult {
        /** The volume ID. **/
        VolumeId?: String;
    }
    export interface ReportedOs {
        /** The operating system family. **/
        Family?: String;
        /** The operating system name. **/
        Name?: String;
        /** The operating system version. **/
        Version?: String;
    }
    export interface ResourceNotFoundException {
        /** The exception message. **/
        message?: String;
    }
    export interface SelfUserProfile {
        /** The user&#x27;s IAM ARN. **/
        IamUserArn?: String;
        /** The user&#x27;s name. **/
        Name?: String;
        /** The user&#x27;s SSH user name. **/
        SshUsername?: String;
        /** The user&#x27;s SSH public key. **/
        SshPublicKey?: String;
    }
    export interface ServiceError {
        /** The error ID. **/
        ServiceErrorId?: String;
        /** The stack ID. **/
        StackId?: String;
        /** The instance ID. **/
        InstanceId?: String;
        /** The error type. **/
        Type?: String;
        /** A message that describes the error. **/
        Message?: String;
        /** When the error occurred. **/
        CreatedAt?: DateTime;
    }
    export interface SetLoadBasedAutoScalingRequest {
        /** The layer ID. **/
        LayerId: String;
        /** Enables load-based auto scaling for the layer. **/
        Enable?: Boolean;
        /** An AutoScalingThresholds object with the upscaling threshold configuration. If
the load exceeds these thresholds for a specified amount of time, AWS OpsWorks
starts a specified number of instances. **/
        UpScaling?: AutoScalingThresholds;
        /** An AutoScalingThresholds object with the downscaling threshold configuration. If
the load falls below these thresholds for a specified amount of time, AWS
OpsWorks stops a specified number of instances. **/
        DownScaling?: AutoScalingThresholds;
    }
    export interface SetPermissionRequest {
        /** The stack ID. **/
        StackId: String;
        /** The user&#x27;s IAM ARN. **/
        IamUserArn: String;
        /** The user is allowed to use SSH to communicate with the instance. **/
        AllowSsh?: Boolean;
        /** The user is allowed to use sudo to elevate privileges. **/
        AllowSudo?: Boolean;
        /** The user&#x27;s permission level, which must be set to one of the following strings.
You cannot set your own permissions level.

 &amp;#42; deny
   
   
 * show
   
   
 * deploy
   
   
 * manage
   
   
 * iam_only
   
   

For more information on the permissions associated with these levels, see 
Managing User Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html] 
. **/
        Level?: String;
    }
    export interface SetTimeBasedAutoScalingRequest {
        /** The instance ID. **/
        InstanceId: String;
        /** An AutoScalingSchedule with the instance schedule. **/
        AutoScalingSchedule?: WeeklyAutoScalingSchedule;
    }
    export interface ShutdownEventConfiguration {
        /** The time, in seconds, that AWS OpsWorks will wait after triggering a Shutdown
event before shutting down an instance. **/
        ExecutionTimeout?: Integer;
        /** Whether to enable Elastic Load Balancing connection draining. For more
information, see Connection Draining
[http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/TerminologyandKeyConcepts.html#conn-drain] **/
        DelayUntilElbConnectionsDrained?: Boolean;
    }
    export interface Source {
        /** The repository type. **/
        Type?: SourceType;
        /** The source URL. **/
        Url?: String;
        /** This parameter depends on the repository type.

 &amp;#42; For Amazon S3 bundles, set Username to the appropriate IAM access key ID.
   
   
 * For HTTP bundles, Git repositories, and Subversion repositories, set Username 
   to the user name. **/
        Username?: String;
        /** When included in a request, the parameter depends on the repository type.

 &amp;#42; For Amazon S3 bundles, set Password to the appropriate IAM secret access key.
   
   
 * For HTTP bundles and Subversion repositories, set Password to the password.
   
   

For more information on how to safely handle IAM credentials, see 
http://docs.aws.amazon.com/general/latest/gr/aws-access-keys-best-practices.html
[http://docs.aws.amazon.com/general/latest/gr/aws-access-keys-best-practices.html] 
.

In responses, AWS OpsWorks returns *****FILTERED***** instead of the actual
value. **/
        Password?: String;
        /** In requests, the repository&#x27;s SSH key.

In responses, AWS OpsWorks returns &amp;#42;****FILTERED***** instead of the actual
value. **/
        SshKey?: String;
        /** The application&#x27;s version. AWS OpsWorks enables you to easily deploy new
versions of an application. One of the simplest approaches is to have branches
or revisions in your repository that represent different versions that can
potentially be deployed. **/
        Revision?: String;
    }
    export interface SslConfiguration {
        /** The contents of the certificate&#x27;s domain.crt file. **/
        Certificate: String;
        /** The private key; the contents of the certificate&#x27;s domain.kex file. **/
        PrivateKey: String;
        /** Optional. Can be used to specify an intermediate certificate authority key or
client authentication. **/
        Chain?: String;
    }
    export interface Stack {
        /** The stack ID. **/
        StackId?: String;
        /** The stack name. **/
        Name?: String;
        /** The stack&#x27;s ARN. **/
        Arn?: String;
        /** The stack AWS region, such as &quot;ap-northeast-2&quot;. For more information about AWS
regions, see Regions and Endpoints
[http://docs.aws.amazon.com/general/latest/gr/rande.html] . **/
        Region?: String;
        /** The VPC ID; applicable only if the stack is running in a VPC. **/
        VpcId?: String;
        /** The stack&#x27;s attributes. **/
        Attributes?: StackAttributes;
        /** The stack AWS Identity and Access Management (IAM) role. **/
        ServiceRoleArn?: String;
        /** The ARN of an IAM profile that is the default profile for all of the stack&#x27;s EC2
instances. For more information about IAM ARNs, see Using Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] . **/
        DefaultInstanceProfileArn?: String;
        /** The stack&#x27;s default operating system. **/
        DefaultOs?: String;
        /** The stack host name theme, with spaces replaced by underscores. **/
        HostnameTheme?: String;
        /** The stack&#x27;s default Availability Zone. For more information, see Regions and
Endpoints [http://docs.aws.amazon.com/general/latest/gr/rande.html] . **/
        DefaultAvailabilityZone?: String;
        /** The default subnet ID; applicable only if the stack is running in a VPC. **/
        DefaultSubnetId?: String;
        /** A JSON object that contains user-defined attributes to be added to the stack
configuration and deployment attributes. You can use custom JSON to override the
corresponding default stack configuration attribute values or to pass data to
recipes. The string should be in the following format and must escape characters
such as &#x27;&quot;&#x27;:

&quot;{\&quot;key1\&quot;: \&quot;value1\&quot;, \&quot;key2\&quot;: \&quot;value2\&quot;,...}&quot;

For more information on custom JSON, see Use Custom JSON to Modify the Stack
Configuration Attributes
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html] . **/
        CustomJson?: String;
        /** The configuration manager. **/
        ConfigurationManager?: StackConfigurationManager;
        /** A ChefConfiguration object that specifies whether to enable Berkshelf and the
Berkshelf version. For more information, see Create a New Stack
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html] 
. **/
        ChefConfiguration?: ChefConfiguration;
        /** Whether the stack uses custom cookbooks. **/
        UseCustomCookbooks?: Boolean;
        /** Whether the stack automatically associates the AWS OpsWorks built-in security
groups with the stack&#x27;s layers. **/
        UseOpsworksSecurityGroups?: Boolean;
        CustomCookbooksSource?: Source;
        /** A default Amazon EC2 key pair for the stack&#x27;s instances. You can override this
value when you create or update an instance. **/
        DefaultSshKeyName?: String;
        /** The date when the stack was created. **/
        CreatedAt?: DateTime;
        /** The default root device type. This value is used by default for all instances in
the stack, but you can override it when you create an instance. For more
information, see Storage for the Root Device
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device] 
. **/
        DefaultRootDeviceType?: RootDeviceType;
        /** The agent version. This parameter is set to LATEST for auto-update. or a version
number for a fixed agent version. **/
        AgentVersion?: String;
    }
    export interface StackConfigurationManager {
        /** The name. This parameter must be set to &quot;Chef&quot;. **/
        Name?: String;
        /** The Chef version. This parameter must be set to 12, 11.10, or 11.4 for Linux
stacks, and to 12.2 for Windows stacks. The default value for Linux stacks is
11.4. **/
        Version?: String;
    }
    export interface StackSummary {
        /** The stack ID. **/
        StackId?: String;
        /** The stack name. **/
        Name?: String;
        /** The stack&#x27;s ARN. **/
        Arn?: String;
        /** The number of layers. **/
        LayersCount?: Integer;
        /** The number of apps. **/
        AppsCount?: Integer;
        /** An InstancesCount object with the number of instances in each status. **/
        InstancesCount?: InstancesCount;
    }
    export interface StartInstanceRequest {
        /** The instance ID. **/
        InstanceId: String;
    }
    export interface StartStackRequest {
        /** The stack ID. **/
        StackId: String;
    }
    export interface StopInstanceRequest {
        /** The instance ID. **/
        InstanceId: String;
    }
    export interface StopStackRequest {
        /** The stack ID. **/
        StackId: String;
    }
    export interface TemporaryCredential {
        /** The user name. **/
        Username?: String;
        /** The password. **/
        Password?: String;
        /** The length of time (in minutes) that the grant is valid. When the grant expires,
at the end of this period, the user will no longer be able to use the
credentials to log in. If they are logged in at the time, they will be
automatically logged out. **/
        ValidForInMinutes?: Integer;
        /** The instance&#x27;s AWS OpsWorks ID. **/
        InstanceId?: String;
    }
    export interface TimeBasedAutoScalingConfiguration {
        /** The instance ID. **/
        InstanceId?: String;
        /** A WeeklyAutoScalingSchedule object with the instance schedule. **/
        AutoScalingSchedule?: WeeklyAutoScalingSchedule;
    }
    export interface UnassignInstanceRequest {
        /** The instance ID. **/
        InstanceId: String;
    }
    export interface UnassignVolumeRequest {
        /** The volume ID. **/
        VolumeId: String;
    }
    export interface UpdateAppRequest {
        /** The app ID. **/
        AppId: String;
        /** The app name. **/
        Name?: String;
        /** A description of the app. **/
        Description?: String;
        /** The app&#x27;s data sources. **/
        DataSources?: DataSources;
        /** The app type. **/
        Type?: AppType;
        /** A Source object that specifies the app repository. **/
        AppSource?: Source;
        /** The app&#x27;s virtual host settings, with multiple domains separated by commas. For
example: &#x27;www.example.com, example.com&#x27; **/
        Domains?: Strings;
        /** Whether SSL is enabled for the app. **/
        EnableSsl?: Boolean;
        /** An SslConfiguration object with the SSL configuration. **/
        SslConfiguration?: SslConfiguration;
        /** One or more user-defined key/value pairs to be added to the stack attributes. **/
        Attributes?: AppAttributes;
        /** An array of EnvironmentVariable objects that specify environment variables to be
associated with the app. After you deploy the app, these variables are defined
on the associated app server instances.For more information, see Environment
Variables
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html#workingapps-creating-environment] 
.

There is no specific limit on the number of environment variables. However, the
size of the associated data structure - which includes the variables&#x27; names,
values, and protected flag values - cannot exceed 10 KB (10240 Bytes). This
limit should accommodate most if not all use cases. Exceeding it will cause an
exception with the message, &quot;Environment: is too large (maximum is 10KB).&quot;

This parameter is supported only by Chef 11.10 stacks. If you have specified one
or more environment variables, you cannot modify the stack&#x27;s Chef version. **/
        Environment?: EnvironmentVariables;
    }
    export interface UpdateElasticIpRequest {
        /** The address. **/
        ElasticIp: String;
        /** The new name. **/
        Name?: String;
    }
    export interface UpdateInstanceRequest {
        /** The instance ID. **/
        InstanceId: String;
        /** The instance&#x27;s layer IDs. **/
        LayerIds?: Strings;
        /** The instance type, such as t2.micro . For a list of supported instance types,
open the stack in the console, choose Instances , and choose + Instance . The 
Size list contains the currently supported types. For more information, see 
Instance Families and Types
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html] . The
parameter values that you use to specify the various types are in the API Name 
column of the Available Instance Types table. **/
        InstanceType?: String;
        /** For load-based or time-based instances, the type. Windows stacks can use only
time-based instances. **/
        AutoScalingType?: AutoScalingType;
        /** The instance host name. **/
        Hostname?: String;
        /** The instance&#x27;s operating system, which must be set to one of the following.

 &amp;#42; A supported Linux operating system: An Amazon Linux version, such as Amazon
   Linux 2016.03 , Amazon Linux 2015.09 , or Amazon Linux 2015.03 .
   
   
 * A supported Ubuntu operating system, such as Ubuntu 16.04 LTS , Ubuntu 14.04
   LTS , or Ubuntu 12.04 LTS .
   
   
 * CentOS 7
   
   
 * Red Hat Enterprise Linux 7
   
   
 * A supported Windows operating system, such as Microsoft Windows Server 2012
   R2 Base , Microsoft Windows Server 2012 R2 with SQL Server Express , 
   Microsoft Windows Server 2012 R2 with SQL Server Standard , or Microsoft
   Windows Server 2012 R2 with SQL Server Web .
   
   
 * A custom AMI: Custom .
   
   

For more information on the supported operating systems, see AWS OpsWorks
Operating Systems
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-os.html] 
.

The default option is the current Amazon Linux version. If you set this
parameter to Custom , you must use the AmiId parameter to specify the custom AMI
that you want to use. For more information on the supported operating systems,
see Operating Systems
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-os.html] 
. For more information on how to use custom AMIs with OpsWorks, see Using Custom
AMIs
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html] 
.

You can specify a different Linux operating system for the updated stack, but
you cannot change from Linux to Windows or Windows to Linux. **/
        Os?: String;
        /** A custom AMI ID to be used to create the instance. The AMI must be based on one
of the supported operating systems. For more information, see Instances
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html]

If you specify a custom AMI, you must set Os to Custom . **/
        AmiId?: String;
        /** The instance&#x27;s Amazon EC2 key name. **/
        SshKeyName?: String;
        /** The instance architecture. Instance types do not necessarily support both
architectures. For a list of the architectures that are supported by the
different instance types, see Instance Families and Types
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html] . **/
        Architecture?: Architecture;
        /** Whether to install operating system and package updates when the instance boots.
The default value is true . To control when updates are installed, set this
value to false . You must then update your instances manually by using 
CreateDeployment to run the update_dependencies stack command or by manually
running yum (Amazon Linux) or apt-get (Ubuntu) on the instances.

We strongly recommend using the default value of true , to ensure that your
instances have the latest security updates. **/
        InstallUpdatesOnBoot?: Boolean;
        /** This property cannot be updated. **/
        EbsOptimized?: Boolean;
        /** The default AWS OpsWorks agent version. You have the following options:

 &amp;#42; INHERIT - Use the stack&#x27;s default agent version setting.
   
   
 * version_number - Use the specified agent version. This value overrides the
   stack&#x27;s default setting. To update the agent version, you must edit the
   instance configuration and specify a new version. AWS OpsWorks then
   automatically installs that version on the instance.
   
   

The default setting is INHERIT . To specify an agent version, you must use the
complete version number, not the abbreviated number shown on the console. For a
list of available agent version numbers, call DescribeAgentVersions . **/
        AgentVersion?: String;
    }
    export interface UpdateLayerRequest {
        /** The layer ID. **/
        LayerId: String;
        /** The layer name, which is used by the console. **/
        Name?: String;
        /** For custom layers only, use this parameter to specify the layer&#x27;s short name,
which is used internally by AWS OpsWorksand by Chef. The short name is also used
as the name for the directory where your app files are installed. It can have a
maximum of 200 characters and must be in the following format:
/\A[a-z0-9\-\_\.]+\Z/.

The built-in layers&#x27; short names are defined by AWS OpsWorks. For more
information, see the Layer Reference
[http://docs.aws.amazon.com/opsworks/latest/userguide/layers.html] **/
        Shortname?: String;
        /** One or more user-defined key/value pairs to be added to the stack attributes. **/
        Attributes?: LayerAttributes;
        /** The ARN of an IAM profile to be used for all of the layer&#x27;s EC2 instances. For
more information about IAM ARNs, see Using Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] . **/
        CustomInstanceProfileArn?: String;
        /** A JSON-formatted string containing custom stack configuration and deployment
attributes to be installed on the layer&#x27;s instances. For more information, see 
Using Custom JSON
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-json-override.html] 
. **/
        CustomJson?: String;
        /** An array containing the layer&#x27;s custom security group IDs. **/
        CustomSecurityGroupIds?: Strings;
        /** An array of Package objects that describe the layer&#x27;s packages. **/
        Packages?: Strings;
        /** A VolumeConfigurations object that describes the layer&#x27;s Amazon EBS volumes. **/
        VolumeConfigurations?: VolumeConfigurations;
        /** Whether to disable auto healing for the layer. **/
        EnableAutoHealing?: Boolean;
        /** Whether to automatically assign an Elastic IP address
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html] 
to the layer&#x27;s instances. For more information, see How to Edit a Layer
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html] 
. **/
        AutoAssignElasticIps?: Boolean;
        /** For stacks that are running in a VPC, whether to automatically assign a public
IP address to the layer&#x27;s instances. For more information, see How to Edit a
Layer
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html] 
. **/
        AutoAssignPublicIps?: Boolean;
        /** A LayerCustomRecipes object that specifies the layer&#x27;s custom recipes. **/
        CustomRecipes?: Recipes;
        /** Whether to install operating system and package updates when the instance boots.
The default value is true . To control when updates are installed, set this
value to false . You must then update your instances manually by using 
CreateDeployment to run the update_dependencies stack command or manually
running yum (Amazon Linux) or apt-get (Ubuntu) on the instances.

We strongly recommend using the default value of true , to ensure that your
instances have the latest security updates. **/
        InstallUpdatesOnBoot?: Boolean;
        /** Whether to use Amazon EBS-optimized instances. **/
        UseEbsOptimizedInstances?: Boolean;
        /**  **/
        LifecycleEventConfiguration?: LifecycleEventConfiguration;
    }
    export interface UpdateMyUserProfileRequest {
        /** The user&#x27;s SSH public key. **/
        SshPublicKey?: String;
    }
    export interface UpdateRdsDbInstanceRequest {
        /** The Amazon RDS instance&#x27;s ARN. **/
        RdsDbInstanceArn: String;
        /** The master user name. **/
        DbUser?: String;
        /** The database password. **/
        DbPassword?: String;
    }
    export interface UpdateStackRequest {
        /** The stack ID. **/
        StackId: String;
        /** The stack&#x27;s new name. **/
        Name?: String;
        /** One or more user-defined key-value pairs to be added to the stack attributes. **/
        Attributes?: StackAttributes;
        /** Do not use this parameter. You cannot update a stack&#x27;s service role. **/
        ServiceRoleArn?: String;
        /** The ARN of an IAM profile that is the default profile for all of the stack&#x27;s EC2
instances. For more information about IAM ARNs, see Using Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] . **/
        DefaultInstanceProfileArn?: String;
        /** The stack&#x27;s operating system, which must be set to one of the following:

 &amp;#42; A supported Linux operating system: An Amazon Linux version, such as Amazon
   Linux 2016.03 , Amazon Linux 2015.09 , or Amazon Linux 2015.03 .
   
   
 * A supported Ubuntu operating system, such as Ubuntu 16.04 LTS , Ubuntu 14.04
   LTS , or Ubuntu 12.04 LTS .
   
   
 * CentOS 7
   
   
 * Red Hat Enterprise Linux 7
   
   
 * A supported Windows operating system, such as Microsoft Windows Server 2012
   R2 Base , Microsoft Windows Server 2012 R2 with SQL Server Express , 
   Microsoft Windows Server 2012 R2 with SQL Server Standard , or Microsoft
   Windows Server 2012 R2 with SQL Server Web .
   
   
 * A custom AMI: Custom . You specify the custom AMI you want to use when you
   create instances. For more information on how to use custom AMIs with
   OpsWorks, see Using Custom AMIs
   [http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html] 
   .
   
   

The default option is the stack&#x27;s current operating system. For more information
on the supported operating systems, see AWS OpsWorks Operating Systems
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-os.html] 
. **/
        DefaultOs?: String;
        /** The stack&#x27;s new host name theme, with spaces replaced by underscores. The theme
is used to generate host names for the stack&#x27;s instances. By default, 
HostnameTheme is set to Layer_Dependent , which creates host names by appending
integers to the layer&#x27;s short name. The other themes are:

 &amp;#42; Baked_Goods
   
   
 * Clouds
   
   
 * Europe_Cities
   
   
 * Fruits
   
   
 * Greek_Deities
   
   
 * Legendary_creatures_from_Japan
   
   
 * Planets_and_Moons
   
   
 * Roman_Deities
   
   
 * Scottish_Islands
   
   
 * US_Cities
   
   
 * Wild_Cats
   
   

To obtain a generated host name, call GetHostNameSuggestion , which returns a
host name based on the current theme. **/
        HostnameTheme?: String;
        /** The stack&#x27;s default Availability Zone, which must be in the stack&#x27;s region. For
more information, see Regions and Endpoints
[http://docs.aws.amazon.com/general/latest/gr/rande.html] . If you also specify
a value for DefaultSubnetId , the subnet must be in the same zone. For more
information, see CreateStack . **/
        DefaultAvailabilityZone?: String;
        /** The stack&#x27;s default VPC subnet ID. This parameter is required if you specify a
value for the VpcId parameter. All instances are launched into this subnet
unless you specify otherwise when you create the instance. If you also specify a
value for DefaultAvailabilityZone , the subnet must be in that zone. For
information on default values and when this parameter is required, see the VpcId 
parameter description. **/
        DefaultSubnetId?: String;
        /** A string that contains user-defined, custom JSON. It can be used to override the
corresponding default stack configuration JSON values or to pass data to
recipes. The string should be in the following format and escape characters such
as &#x27;&quot;&#x27;:

&quot;{\&quot;key1\&quot;: \&quot;value1\&quot;, \&quot;key2\&quot;: \&quot;value2\&quot;,...}&quot;

For more information on custom JSON, see Use Custom JSON to Modify the Stack
Configuration Attributes
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html] . **/
        CustomJson?: String;
        /** The configuration manager. When you update a stack, we recommend that you use
the configuration manager to specify the Chef version: 12, 11.10, or 11.4 for
Linux stacks, or 12.2 for Windows stacks. The default value for Linux stacks is
currently 11.4. **/
        ConfigurationManager?: StackConfigurationManager;
        /** A ChefConfiguration object that specifies whether to enable Berkshelf and the
Berkshelf version on Chef 11.10 stacks. For more information, see Create a New
Stack
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html] 
. **/
        ChefConfiguration?: ChefConfiguration;
        /** Whether the stack uses custom cookbooks. **/
        UseCustomCookbooks?: Boolean;
        CustomCookbooksSource?: Source;
        /** A default Amazon EC2 key-pair name. The default value is none . If you specify a
key-pair name, AWS OpsWorks installs the public key on the instance and you can
use the private key with an SSH client to log in to the instance. For more
information, see Using SSH to Communicate with an Instance
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-ssh.html] 
and Managing SSH Access
[http://docs.aws.amazon.com/opsworks/latest/userguide/security-ssh-access.html] 
. You can override this setting by specifying a different key pair, or no key
pair, when you create an instance
[http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html] 
. **/
        DefaultSshKeyName?: String;
        /** The default root device type. This value is used by default for all instances in
the stack, but you can override it when you create an instance. For more
information, see Storage for the Root Device
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device] 
. **/
        DefaultRootDeviceType?: RootDeviceType;
        /** Whether to associate the AWS OpsWorks built-in security groups with the stack&#x27;s
layers.

AWS OpsWorks provides a standard set of built-in security groups, one for each
layer, which are associated with layers by default. UseOpsworksSecurityGroups 
allows you to provide your own custom security groups instead of using the
built-in groups. UseOpsworksSecurityGroups has the following settings:

 &amp;#42; True - AWS OpsWorks automatically associates the appropriate built-in
   security group with each layer (default setting). You can associate
   additional security groups with a layer after you create it, but you cannot
   delete the built-in security group.
   
   
 * False - AWS OpsWorks does not associate built-in security groups with layers.
   You must create appropriate EC2 security groups and associate a security
   group with each layer that you create. However, you can still manually
   associate a built-in security group with a layer on. Custom security groups
   are required only for those layers that need custom settings.
   
   

For more information, see Create a New Stack
[http://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html] 
. **/
        UseOpsworksSecurityGroups?: Boolean;
        /** The default AWS OpsWorks agent version. You have the following options:

 &amp;#42; Auto-update - Set this parameter to LATEST . AWS OpsWorks automatically
   installs new agent versions on the stack&#x27;s instances as soon as they are
   available.
   
   
 * Fixed version - Set this parameter to your preferred agent version. To update
   the agent version, you must edit the stack configuration and specify a new
   version. AWS OpsWorks then automatically installs that version on the stack&#x27;s
   instances.
   
   

The default setting is LATEST . To specify an agent version, you must use the
complete version number, not the abbreviated number shown on the console. For a
list of available agent version numbers, call DescribeAgentVersions .

You can also specify an agent version when you create or update an instance,
which overrides the stack&#x27;s default setting. **/
        AgentVersion?: String;
    }
    export interface UpdateUserProfileRequest {
        /** The user IAM ARN. **/
        IamUserArn: String;
        /** The user&#x27;s SSH user name. The allowable characters are [a-z], [A-Z], [0-9], &#x27;-&#x27;,
and &#x27;_&#x27;. If the specified name includes other punctuation marks, AWS OpsWorks
removes them. For example, my.name will be changed to myname . If you do not
specify an SSH user name, AWS OpsWorks generates one from the IAM user name. **/
        SshUsername?: String;
        /** The user&#x27;s new SSH public key. **/
        SshPublicKey?: String;
        /** Whether users can specify their own SSH public key through the My Settings page.
For more information, see Managing User Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/security-settingsshkey.html] 
. **/
        AllowSelfManagement?: Boolean;
    }
    export interface UpdateVolumeRequest {
        /** The volume ID. **/
        VolumeId: String;
        /** The new name. **/
        Name?: String;
        /** The new mount point. **/
        MountPoint?: String;
    }
    export interface UserProfile {
        /** The user&#x27;s IAM ARN. **/
        IamUserArn?: String;
        /** The user&#x27;s name. **/
        Name?: String;
        /** The user&#x27;s SSH user name. **/
        SshUsername?: String;
        /** The user&#x27;s SSH public key. **/
        SshPublicKey?: String;
        /** Whether users can specify their own SSH public key through the My Settings page.
For more information, see Managing User Permissions
[http://docs.aws.amazon.com/opsworks/latest/userguide/security-settingsshkey.html] 
. **/
        AllowSelfManagement?: Boolean;
    }
    export interface ValidationException {
        /** The exception message. **/
        message?: String;
    }
    export interface Volume {
        /** The volume ID. **/
        VolumeId?: String;
        /** The Amazon EC2 volume ID. **/
        Ec2VolumeId?: String;
        /** The volume name. **/
        Name?: String;
        /** The RAID array ID. **/
        RaidArrayId?: String;
        /** The instance ID. **/
        InstanceId?: String;
        /** The value returned by DescribeVolumes
[http://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeVolumes.html] 
. **/
        Status?: String;
        /** The volume size. **/
        Size?: Integer;
        /** The device name. **/
        Device?: String;
        /** The volume mount point. For example, &quot;/mnt/disk1&quot;. **/
        MountPoint?: String;
        /** The AWS region. For more information about AWS regions, see Regions and
Endpoints [http://docs.aws.amazon.com/general/latest/gr/rande.html] . **/
        Region?: String;
        /** The volume Availability Zone. For more information, see Regions and Endpoints
[http://docs.aws.amazon.com/general/latest/gr/rande.html] . **/
        AvailabilityZone?: String;
        /** The volume type, standard or PIOPS. **/
        VolumeType?: String;
        /** For PIOPS volumes, the IOPS per disk. **/
        Iops?: Integer;
    }
    export interface VolumeConfiguration {
        /** The volume mount point. For example &quot;/dev/sdh&quot;. **/
        MountPoint: String;
        /** The volume RAID level [http://en.wikipedia.org/wiki/Standard_RAID_levels] . **/
        RaidLevel?: Integer;
        /** The number of disks in the volume. **/
        NumberOfDisks: Integer;
        /** The volume size. **/
        Size: Integer;
        /** The volume type:

 &amp;#42; standard - Magnetic
   
   
 * io1 - Provisioned IOPS (SSD)
   
   
 * gp2 - General Purpose (SSD) **/
        VolumeType?: String;
        /** For PIOPS volumes, the IOPS per disk. **/
        Iops?: Integer;
    }
    export interface WeeklyAutoScalingSchedule {
        /** The schedule for Monday. **/
        Monday?: DailyAutoScalingSchedule;
        /** The schedule for Tuesday. **/
        Tuesday?: DailyAutoScalingSchedule;
        /** The schedule for Wednesday. **/
        Wednesday?: DailyAutoScalingSchedule;
        /** The schedule for Thursday. **/
        Thursday?: DailyAutoScalingSchedule;
        /** The schedule for Friday. **/
        Friday?: DailyAutoScalingSchedule;
        /** The schedule for Saturday. **/
        Saturday?: DailyAutoScalingSchedule;
        /** The schedule for Sunday. **/
        Sunday?: DailyAutoScalingSchedule;
    }
  }
}
