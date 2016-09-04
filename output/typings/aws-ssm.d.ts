// Type definitions for aws-sdk - Amazon Simple Systems Management Service
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2014-11-06
    * endpointPrefix: ssm
    * serviceAbbreviation: Amazon SSM
    * signatureVersion: v4
    * protocol: json
    *
    * Amazon EC2 Simple Systems Manager (SSM) enables you to remotely manage the
 configuration of your Amazon EC2 instances, virtual machines (VMs), or servers
 in your on-premises environment or in an environment provided by other cloud
 providers using scripts, commands, or the Amazon EC2 console. SSM includes an
 on-demand solution called Amazon EC2 Run Command and a lightweight instance
 configuration solution called SSM Config. 
 
 This references is intended to be used with the EC2 Run Command User Guide for 
 Linux
 [http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/execute-remote-commands.html] 
 or Windows
 [http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/execute-remote-commands.html]
 .
 
 You must register your on-premises servers and VMs through an activation process
 before you can configure them using Run Command. Registered servers and VMs are
 called managed instances. For more information, see Setting Up Run Command On
 Managed Instances (On-Premises Servers and VMs) on Linux
 [http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/managed-instances.html] or 
 Setting Up Run Command On Managed Instances (On-Premises Servers and VMs) on
 Windows
 [http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/managed-instances.html].
 
  Run Command 
 
 Run Command provides an on-demand experience for executing commands. You can use
 pre-defined SSM documents to perform the actions listed later in this section,
 or you can create your own documents. With these documents, you can remotely
 configure your instances by sending commands using the Commands page in the 
 Amazon EC2 console [http://console.aws.amazon.com/ec2/], AWS Tools for Windows
 PowerShell
 [http://docs.aws.amazon.com/powershell/latest/reference/items/Amazon_Simple_Systems_Management_cmdlets.html]
 , the AWS CLI [http://docs.aws.amazon.com/cli/latest/reference/ssm/index.html],
 or AWS SDKs.
 
 Run Command reports the status of the command execution for each instance
 targeted by a command. You can also audit the command execution to understand
 who executed commands, when, and what changes were made. By switching between
 different SSM documents, you can quickly configure your instances with different
 types of commands. To get started with Run Command, verify that your environment
 meets the prerequisites for remotely running commands on EC2 instances (Linux
 [http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/remote-commands-prereq.html] 
 or Windows
 [http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/remote-commands-prereq.html]
 ). 
 
 
 
  SSM Config 
 
 SSM Config is a lightweight instance configuration solution. SSM Config is
 currently only available for Windows instances. With SSM Config, you can specify
 a setup configuration for your instances. SSM Config is similar to EC2 User
 Data, which is another way of running one-time scripts or applying settings
 during instance launch. SSM Config is an extension of this capability. Using SSM
 documents, you can specify which actions the system should perform on your
 instances, including which applications to install, which AWS Directory Service
 directory to join, which Microsoft PowerShell modules to install, etc. If an
 instance is missing one or more of these configurations, the system makes those
 changes. By default, the system checks every five minutes to see if there is a
 new configuration to apply as defined in a new SSM document. If so, the system
 updates the instances accordingly. In this way, you can remotely maintain a
 consistent configuration baseline on your instances. SSM Config is available
 using the AWS CLI or the AWS Tools for Windows PowerShell. For more information,
 see Managing Windows Instance Configuration
 [http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-configuration-manage.html]
 .
 
 SSM Config and Run Command include the following pre-defined documents.
 
  Linux 
 
  &amp;#42;   AWS-RunShellScript to run shell scripts
    
    
  *   AWS-UpdateSSMAgent to update the Amazon SSM agent
    
    
 
 
 
  Windows 
 
  *   AWS-JoinDirectoryServiceDomain to join an AWS Directory
    
    
  *   AWS-RunPowerShellScript to run PowerShell commands or scripts
    
    
  *   AWS-UpdateEC2Config to update the EC2Config service
    
    
  *   AWS-ConfigureWindowsUpdate to configure Windows Update settings
    
    
  *   AWS-InstallApplication to install, repair, or uninstall software using an
    MSI package
    
    
  *   AWS-InstallPowerShellModule to install PowerShell modules 
    
    
  *   AWS-ConfigureCloudWatch to configure Amazon CloudWatch Logs to monitor
    applications and systems
    
    
  *   AWS-ListWindowsInventory to collect information about an EC2 instance
    running in Windows.
    
    
  *   AWS-FindWindowsUpdates to scan an instance and determines which updates are
    missing.
    
    
  *   AWS-InstallMissingWindowsUpdates to install missing updates on your EC2
    instance.
    
    
  *   AWS-InstallSpecificWindowsUpdates to install one or more specific updates.
    
    
 
 The commands or scripts specified in SSM documents run with administrative
 privilege on your instances because the Amazon SSM agent runs as root on Linux
 and the EC2Config service runs in the Local System account on Windows. If a user
 has permission to execute any of the pre-defined SSM documents (any document
 that begins with AWS-*) then that user also has administrator access to the
 instance. Delegate access to Run Command and SSM Config judiciously. This
 becomes extremely important if you create your own SSM documents. Amazon Web
 Services does not provide guidance about how to create secure SSM documents. You
 create SSM documents and delegate access to Run Command at your own risk. As a
 security best practice, we recommend that you assign access to &quot;AWS-*&quot;
 documents, especially the AWS-RunShellScript document on Linux and the
 AWS-RunPowerShellScript document on Windows, to trusted administrators only. You
 can create SSM documents for specific tasks and delegate access to
 non-administrators.
 
 For information about creating and sharing SSM documents, see the following
 topics in the SSM User Guide: 
 
  *   Creating SSM Documents
    [http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-ssm-doc.html] and 
    Sharing SSM Documents
    [http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssm-sharing.html] (Linux)
    
    
  *   Creating SSM Documents
    [http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/create-ssm-doc.html] 
    and Sharing SSM Documents
    [http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ssm-sharing.html] 
    (Windows)
    *
    */
  export class SSM extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Adds or overwrites one or more tags for the specified resource. Tags are
metadata that you assign to your managed instances. Tags enable you to
categorize your managed instances in different ways, for example, by purpose,
owner, or environment. Each tag consists of a key and an optional value, both of
which you define. For example, you could define a set of tags for your account&#x27;s
managed instances that helps you track each instance&#x27;s owner and stack level.
For example: Key=Owner and Value=DbAdmin, SysAdmin, or Dev. Or Key=Stack and
Value=Production, Pre-Production, or Test. Each resource can have a maximum of
10 tags. 

 We recommend that you devise a set of tag keys that meets your needs for each
resource type. Using a consistent set of tag keys makes it easier for you to
manage your resources. You can search and filter the resources based on the tags
you add. Tags don&#x27;t have any semantic meaning to Amazon EC2 and are interpreted
strictly as a string of characters. 

For more information about tags, see Tagging Your Amazon EC2 Resources
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html] in the
Amazon EC2 User Guide.
     *
     * @error InvalidResourceType   
     * @error InvalidResourceId   
     * @error InternalServerError   
     */
    addTagsToResource(params: SSM.AddTagsToResourceRequest, callback?: (err: SSM.InvalidResourceType | SSM.InvalidResourceId | SSM.InternalServerError | any, data: SSM.AddTagsToResourceResult | any) => void): Request<SSM.AddTagsToResourceResult | any, SSM.InvalidResourceType | SSM.InvalidResourceId | SSM.InternalServerError | any>;
    /**
     * Attempts to cancel the command specified by the Command ID. There is no
guarantee that the command will be terminated and the underlying process
stopped.
     *
     * @error InternalServerError   
     * @error InvalidCommandId   
     * @error InvalidInstanceId   
     * @error DuplicateInstanceId   
     */
    cancelCommand(params: SSM.CancelCommandRequest, callback?: (err: SSM.InternalServerError | SSM.InvalidCommandId | SSM.InvalidInstanceId | SSM.DuplicateInstanceId | any, data: SSM.CancelCommandResult | any) => void): Request<SSM.CancelCommandResult | any, SSM.InternalServerError | SSM.InvalidCommandId | SSM.InvalidInstanceId | SSM.DuplicateInstanceId | any>;
    /**
     * Registers your on-premises server or virtual machine with Amazon EC2 so that you
can manage these resources using Run Command. An on-premises server or virtual
machine that has been registered with EC2 is called a managed instance. For more
information about activations, see Setting Up Managed Instances (Linux)
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/managed-instances.html] or 
Setting Up Managed Instances (Windows)
[http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/managed-instances.html] 
in the Amazon EC2 User Guide.
     *
     * @error InternalServerError   
     */
    createActivation(params: SSM.CreateActivationRequest, callback?: (err: SSM.InternalServerError | any, data: SSM.CreateActivationResult | any) => void): Request<SSM.CreateActivationResult | any, SSM.InternalServerError | any>;
    /**
     * Associates the specified SSM document with the specified instance.

When you associate an SSM document with an instance, the configuration agent on
the instance (SSM agent for Linux and EC2Config service for Windows) processes
the document and configures the instance as specified.

If you associate a document with an instance that already has an associated
document, the system throws the AssociationAlreadyExists exception.
     *
     * @error AssociationAlreadyExists   
     * @error AssociationLimitExceeded   
     * @error InternalServerError   
     * @error InvalidDocument   
     * @error InvalidInstanceId   
     * @error UnsupportedPlatformType   
     * @error InvalidParameters   
     */
    createAssociation(params: SSM.CreateAssociationRequest, callback?: (err: SSM.AssociationAlreadyExists | SSM.AssociationLimitExceeded | SSM.InternalServerError | SSM.InvalidDocument | SSM.InvalidInstanceId | SSM.UnsupportedPlatformType | SSM.InvalidParameters | any, data: SSM.CreateAssociationResult | any) => void): Request<SSM.CreateAssociationResult | any, SSM.AssociationAlreadyExists | SSM.AssociationLimitExceeded | SSM.InternalServerError | SSM.InvalidDocument | SSM.InvalidInstanceId | SSM.UnsupportedPlatformType | SSM.InvalidParameters | any>;
    /**
     * Associates the specified SSM document with the specified instances.

When you associate an SSM document with an instance, the configuration agent on
the instance (SSM agent for Linux and EC2Config service for Windows) processes
the document and configures the instance as specified.

If you associate a document with an instance that already has an associated
document, the system throws the AssociationAlreadyExists exception.
     *
     * @error InternalServerError   
     * @error InvalidDocument   
     * @error InvalidInstanceId   
     * @error InvalidParameters   
     * @error DuplicateInstanceId   
     * @error AssociationLimitExceeded   
     * @error UnsupportedPlatformType   
     */
    createAssociationBatch(params: SSM.CreateAssociationBatchRequest, callback?: (err: SSM.InternalServerError | SSM.InvalidDocument | SSM.InvalidInstanceId | SSM.InvalidParameters | SSM.DuplicateInstanceId | SSM.AssociationLimitExceeded | SSM.UnsupportedPlatformType | any, data: SSM.CreateAssociationBatchResult | any) => void): Request<SSM.CreateAssociationBatchResult | any, SSM.InternalServerError | SSM.InvalidDocument | SSM.InvalidInstanceId | SSM.InvalidParameters | SSM.DuplicateInstanceId | SSM.AssociationLimitExceeded | SSM.UnsupportedPlatformType | any>;
    /**
     * Creates an SSM document.

After you create an SSM document, you can use CreateAssociation to associate it
with one or more running instances.
     *
     * @error DocumentAlreadyExists   
     * @error MaxDocumentSizeExceeded   
     * @error InternalServerError   
     * @error InvalidDocumentContent   
     * @error DocumentLimitExceeded   
     */
    createDocument(params: SSM.CreateDocumentRequest, callback?: (err: SSM.DocumentAlreadyExists | SSM.MaxDocumentSizeExceeded | SSM.InternalServerError | SSM.InvalidDocumentContent | SSM.DocumentLimitExceeded | any, data: SSM.CreateDocumentResult | any) => void): Request<SSM.CreateDocumentResult | any, SSM.DocumentAlreadyExists | SSM.MaxDocumentSizeExceeded | SSM.InternalServerError | SSM.InvalidDocumentContent | SSM.DocumentLimitExceeded | any>;
    /**
     * Deletes an activation. You are not required to delete an activation. If you
delete an activation, you can no longer use it to register additional managed
instances. Deleting an activation does not de-register managed instances. You
must manually de-register managed instances.
     *
     * @error InvalidActivationId   
     * @error InvalidActivation   
     * @error InternalServerError   
     */
    deleteActivation(params: SSM.DeleteActivationRequest, callback?: (err: SSM.InvalidActivationId | SSM.InvalidActivation | SSM.InternalServerError | any, data: SSM.DeleteActivationResult | any) => void): Request<SSM.DeleteActivationResult | any, SSM.InvalidActivationId | SSM.InvalidActivation | SSM.InternalServerError | any>;
    /**
     * Disassociates the specified SSM document from the specified instance.

When you disassociate an SSM document from an instance, it does not change the
configuration of the instance. To change the configuration state of an instance
after you disassociate a document, you must create a new document with the
desired configuration and associate it with the instance.
     *
     * @error AssociationDoesNotExist   
     * @error InternalServerError   
     * @error InvalidDocument   
     * @error InvalidInstanceId   
     * @error TooManyUpdates   
     */
    deleteAssociation(params: SSM.DeleteAssociationRequest, callback?: (err: SSM.AssociationDoesNotExist | SSM.InternalServerError | SSM.InvalidDocument | SSM.InvalidInstanceId | SSM.TooManyUpdates | any, data: SSM.DeleteAssociationResult | any) => void): Request<SSM.DeleteAssociationResult | any, SSM.AssociationDoesNotExist | SSM.InternalServerError | SSM.InvalidDocument | SSM.InvalidInstanceId | SSM.TooManyUpdates | any>;
    /**
     * Deletes the SSM document and all instance associations to the document.

Before you delete the SSM document, we recommend that you use DeleteAssociation
to disassociate all instances that are associated with the document.
     *
     * @error InternalServerError   
     * @error InvalidDocument   
     * @error InvalidDocumentOperation   
     * @error AssociatedInstances   
     */
    deleteDocument(params: SSM.DeleteDocumentRequest, callback?: (err: SSM.InternalServerError | SSM.InvalidDocument | SSM.InvalidDocumentOperation | SSM.AssociatedInstances | any, data: SSM.DeleteDocumentResult | any) => void): Request<SSM.DeleteDocumentResult | any, SSM.InternalServerError | SSM.InvalidDocument | SSM.InvalidDocumentOperation | SSM.AssociatedInstances | any>;
    /**
     * Removes the server or virtual machine from the list of registered servers. You
can reregister the instance again at any time. If you don’t plan to use Run
Command on the server, we suggest uninstalling the SSM agent first.
     *
     * @error InvalidInstanceId   
     * @error InternalServerError   
     */
    deregisterManagedInstance(params: SSM.DeregisterManagedInstanceRequest, callback?: (err: SSM.InvalidInstanceId | SSM.InternalServerError | any, data: SSM.DeregisterManagedInstanceResult | any) => void): Request<SSM.DeregisterManagedInstanceResult | any, SSM.InvalidInstanceId | SSM.InternalServerError | any>;
    /**
     * Details about the activation, including: the date and time the activation was
created, the expiration date, the IAM role assigned to the instances in the
activation, and the number of instances activated by this registration.
     *
     * @error InvalidFilter   
     * @error InvalidNextToken   
     * @error InternalServerError   
     */
    describeActivations(params: SSM.DescribeActivationsRequest, callback?: (err: SSM.InvalidFilter | SSM.InvalidNextToken | SSM.InternalServerError | any, data: SSM.DescribeActivationsResult | any) => void): Request<SSM.DescribeActivationsResult | any, SSM.InvalidFilter | SSM.InvalidNextToken | SSM.InternalServerError | any>;
    /**
     * Describes the associations for the specified SSM document or instance.
     *
     * @error AssociationDoesNotExist   
     * @error InternalServerError   
     * @error InvalidDocument   
     * @error InvalidInstanceId   
     */
    describeAssociation(params: SSM.DescribeAssociationRequest, callback?: (err: SSM.AssociationDoesNotExist | SSM.InternalServerError | SSM.InvalidDocument | SSM.InvalidInstanceId | any, data: SSM.DescribeAssociationResult | any) => void): Request<SSM.DescribeAssociationResult | any, SSM.AssociationDoesNotExist | SSM.InternalServerError | SSM.InvalidDocument | SSM.InvalidInstanceId | any>;
    /**
     * Describes the specified SSM document.
     *
     * @error InternalServerError   
     * @error InvalidDocument   
     */
    describeDocument(params: SSM.DescribeDocumentRequest, callback?: (err: SSM.InternalServerError | SSM.InvalidDocument | any, data: SSM.DescribeDocumentResult | any) => void): Request<SSM.DescribeDocumentResult | any, SSM.InternalServerError | SSM.InvalidDocument | any>;
    /**
     * Describes the permissions for an SSM document. If you created the document, you
are the owner. If a document is shared, it can either be shared privately (by
specifying a user’s AWS account ID) or publicly (All).
     *
     * @error InternalServerError   
     * @error InvalidDocument   
     * @error InvalidPermissionType   
     */
    describeDocumentPermission(params: SSM.DescribeDocumentPermissionRequest, callback?: (err: SSM.InternalServerError | SSM.InvalidDocument | SSM.InvalidPermissionType | any, data: SSM.DescribeDocumentPermissionResponse | any) => void): Request<SSM.DescribeDocumentPermissionResponse | any, SSM.InternalServerError | SSM.InvalidDocument | SSM.InvalidPermissionType | any>;
    /**
     * Describes one or more of your instances. You can use this to get information
about instances like the operating system platform, the SSM agent version
(Linux), status etc. If you specify one or more instance IDs, it returns
information for those instances. If you do not specify instance IDs, it returns
information for all your instances. If you specify an instance ID that is not
valid or an instance that you do not own, you receive an error.
     *
     * @error InternalServerError   
     * @error InvalidInstanceId   
     * @error InvalidNextToken   
     * @error InvalidInstanceInformationFilterValue   
     * @error InvalidFilterKey   
     */
    describeInstanceInformation(params: SSM.DescribeInstanceInformationRequest, callback?: (err: SSM.InternalServerError | SSM.InvalidInstanceId | SSM.InvalidNextToken | SSM.InvalidInstanceInformationFilterValue | SSM.InvalidFilterKey | any, data: SSM.DescribeInstanceInformationResult | any) => void): Request<SSM.DescribeInstanceInformationResult | any, SSM.InternalServerError | SSM.InvalidInstanceId | SSM.InvalidNextToken | SSM.InvalidInstanceInformationFilterValue | SSM.InvalidFilterKey | any>;
    /**
     * Gets the contents of the specified SSM document.
     *
     * @error InternalServerError   
     * @error InvalidDocument   
     */
    getDocument(params: SSM.GetDocumentRequest, callback?: (err: SSM.InternalServerError | SSM.InvalidDocument | any, data: SSM.GetDocumentResult | any) => void): Request<SSM.GetDocumentResult | any, SSM.InternalServerError | SSM.InvalidDocument | any>;
    /**
     * Lists the associations for the specified SSM document or instance.
     *
     * @error InternalServerError   
     * @error InvalidNextToken   
     */
    listAssociations(params: SSM.ListAssociationsRequest, callback?: (err: SSM.InternalServerError | SSM.InvalidNextToken | any, data: SSM.ListAssociationsResult | any) => void): Request<SSM.ListAssociationsResult | any, SSM.InternalServerError | SSM.InvalidNextToken | any>;
    /**
     * An invocation is copy of a command sent to a specific instance. A command can
apply to one or more instances. A command invocation applies to one instance.
For example, if a user executes SendCommand against three instances, then a
command invocation is created for each requested instance ID.
ListCommandInvocations provide status about command execution.
     *
     * @error InternalServerError   
     * @error InvalidCommandId   
     * @error InvalidInstanceId   
     * @error InvalidFilterKey   
     * @error InvalidNextToken   
     */
    listCommandInvocations(params: SSM.ListCommandInvocationsRequest, callback?: (err: SSM.InternalServerError | SSM.InvalidCommandId | SSM.InvalidInstanceId | SSM.InvalidFilterKey | SSM.InvalidNextToken | any, data: SSM.ListCommandInvocationsResult | any) => void): Request<SSM.ListCommandInvocationsResult | any, SSM.InternalServerError | SSM.InvalidCommandId | SSM.InvalidInstanceId | SSM.InvalidFilterKey | SSM.InvalidNextToken | any>;
    /**
     * Lists the commands requested by users of the AWS account.
     *
     * @error InternalServerError   
     * @error InvalidCommandId   
     * @error InvalidInstanceId   
     * @error InvalidFilterKey   
     * @error InvalidNextToken   
     */
    listCommands(params: SSM.ListCommandsRequest, callback?: (err: SSM.InternalServerError | SSM.InvalidCommandId | SSM.InvalidInstanceId | SSM.InvalidFilterKey | SSM.InvalidNextToken | any, data: SSM.ListCommandsResult | any) => void): Request<SSM.ListCommandsResult | any, SSM.InternalServerError | SSM.InvalidCommandId | SSM.InvalidInstanceId | SSM.InvalidFilterKey | SSM.InvalidNextToken | any>;
    /**
     * Describes one or more of your SSM documents.
     *
     * @error InternalServerError   
     * @error InvalidNextToken   
     * @error InvalidFilterKey   
     */
    listDocuments(params: SSM.ListDocumentsRequest, callback?: (err: SSM.InternalServerError | SSM.InvalidNextToken | SSM.InvalidFilterKey | any, data: SSM.ListDocumentsResult | any) => void): Request<SSM.ListDocumentsResult | any, SSM.InternalServerError | SSM.InvalidNextToken | SSM.InvalidFilterKey | any>;
    /**
     * Returns a list of the tags assigned to the specified resource.
     *
     * @error InvalidResourceType   
     * @error InvalidResourceId   
     * @error InternalServerError   
     */
    listTagsForResource(params: SSM.ListTagsForResourceRequest, callback?: (err: SSM.InvalidResourceType | SSM.InvalidResourceId | SSM.InternalServerError | any, data: SSM.ListTagsForResourceResult | any) => void): Request<SSM.ListTagsForResourceResult | any, SSM.InvalidResourceType | SSM.InvalidResourceId | SSM.InternalServerError | any>;
    /**
     * Share a document publicly or privately. If you share a document privately, you
must specify the AWS user account IDs for those people who can use the document.
If you share a document publicly, you must specify All as the account ID.
     *
     * @error InternalServerError   
     * @error InvalidDocument   
     * @error InvalidPermissionType   
     * @error DocumentPermissionLimit   
     * @error DocumentLimitExceeded   
     */
    modifyDocumentPermission(params: SSM.ModifyDocumentPermissionRequest, callback?: (err: SSM.InternalServerError | SSM.InvalidDocument | SSM.InvalidPermissionType | SSM.DocumentPermissionLimit | SSM.DocumentLimitExceeded | any, data: SSM.ModifyDocumentPermissionResponse | any) => void): Request<SSM.ModifyDocumentPermissionResponse | any, SSM.InternalServerError | SSM.InvalidDocument | SSM.InvalidPermissionType | SSM.DocumentPermissionLimit | SSM.DocumentLimitExceeded | any>;
    /**
     * Removes all tags from the specified resource.
     *
     * @error InvalidResourceType   
     * @error InvalidResourceId   
     * @error InternalServerError   
     */
    removeTagsFromResource(params: SSM.RemoveTagsFromResourceRequest, callback?: (err: SSM.InvalidResourceType | SSM.InvalidResourceId | SSM.InternalServerError | any, data: SSM.RemoveTagsFromResourceResult | any) => void): Request<SSM.RemoveTagsFromResourceResult | any, SSM.InvalidResourceType | SSM.InvalidResourceId | SSM.InternalServerError | any>;
    /**
     * Executes commands on one or more remote instances.
     *
     * @error DuplicateInstanceId   
     * @error InternalServerError   
     * @error InvalidInstanceId   
     * @error InvalidDocument   
     * @error InvalidOutputFolder   
     * @error InvalidParameters   
     * @error UnsupportedPlatformType   
     * @error MaxDocumentSizeExceeded   
     * @error InvalidRole   
     * @error InvalidNotificationConfig   
     */
    sendCommand(params: SSM.SendCommandRequest, callback?: (err: SSM.DuplicateInstanceId | SSM.InternalServerError | SSM.InvalidInstanceId | SSM.InvalidDocument | SSM.InvalidOutputFolder | SSM.InvalidParameters | SSM.UnsupportedPlatformType | SSM.MaxDocumentSizeExceeded | SSM.InvalidRole | SSM.InvalidNotificationConfig | any, data: SSM.SendCommandResult | any) => void): Request<SSM.SendCommandResult | any, SSM.DuplicateInstanceId | SSM.InternalServerError | SSM.InvalidInstanceId | SSM.InvalidDocument | SSM.InvalidOutputFolder | SSM.InvalidParameters | SSM.UnsupportedPlatformType | SSM.MaxDocumentSizeExceeded | SSM.InvalidRole | SSM.InvalidNotificationConfig | any>;
    /**
     * Updates the status of the SSM document associated with the specified instance.
     *
     * @error InternalServerError   
     * @error InvalidInstanceId   
     * @error InvalidDocument   
     * @error AssociationDoesNotExist   
     * @error StatusUnchanged   
     * @error TooManyUpdates   
     */
    updateAssociationStatus(params: SSM.UpdateAssociationStatusRequest, callback?: (err: SSM.InternalServerError | SSM.InvalidInstanceId | SSM.InvalidDocument | SSM.AssociationDoesNotExist | SSM.StatusUnchanged | SSM.TooManyUpdates | any, data: SSM.UpdateAssociationStatusResult | any) => void): Request<SSM.UpdateAssociationStatusResult | any, SSM.InternalServerError | SSM.InvalidInstanceId | SSM.InvalidDocument | SSM.AssociationDoesNotExist | SSM.StatusUnchanged | SSM.TooManyUpdates | any>;
    /**
     * Assigns or changes an Amazon Identity and Access Management (IAM) role to the
managed instance.
     *
     * @error InvalidInstanceId   
     * @error InternalServerError   
     */
    updateManagedInstanceRole(params: SSM.UpdateManagedInstanceRoleRequest, callback?: (err: SSM.InvalidInstanceId | SSM.InternalServerError | any, data: SSM.UpdateManagedInstanceRoleResult | any) => void): Request<SSM.UpdateManagedInstanceRoleResult | any, SSM.InvalidInstanceId | SSM.InternalServerError | any>;

  }

  export module SSM {

    export type AccountId = string;

    export type AccountIdList = AccountId[];

    export type ActivationCode = string;

    export type ActivationDescription = string;

    export type ActivationId = string;

    export type ActivationList = Activation[];

    export type AssociationDescriptionList = AssociationDescription[];

    export type AssociationFilterKey = string;

    export type AssociationFilterList = AssociationFilter[];

    export type AssociationFilterValue = string;

    export type AssociationList = Association[];

    export type AssociationStatusName = string;

    export type BatchErrorMessage = string;

    export type Boolean = boolean;

    export type CommandFilterKey = string;

    export type CommandFilterList = CommandFilter[];

    export type CommandFilterValue = string;

    export type CommandId = string;

    export type CommandInvocationList = CommandInvocation[];

    export type CommandInvocationStatus = string;

    export type CommandList = Command[];

    export type CommandMaxResults = number;

    export type CommandPluginList = CommandPlugin[];

    export type CommandPluginName = string;

    export type CommandPluginOutput = string;

    export type CommandPluginStatus = string;

    export type CommandStatus = string;

    export type Comment = string;

    export type ComputerName = string;

    export type CreateAssociationBatchRequestEntries = CreateAssociationBatchRequestEntry[];

    export type CreatedDate = number;

    export type DateTime = number;

    export type DefaultInstanceName = string;

    export type DescribeActivationsFilterKeys = string;

    export type DescribeActivationsFilterList = DescribeActivationsFilter[];

    export type DescriptionInDocument = string;

    export type DocumentARN = string;

    export type DocumentContent = string;

    export type DocumentFilterKey = string;

    export type DocumentFilterList = DocumentFilter[];

    export type DocumentFilterValue = string;

    export type DocumentHash = string;

    export type DocumentHashType = string;

    export type DocumentIdentifierList = DocumentIdentifier[];

    export type DocumentName = string;

    export type DocumentOwner = string;

    export type DocumentParameterDefaultValue = string;

    export type DocumentParameterDescrption = string;

    export type DocumentParameterList = DocumentParameter[];

    export type DocumentParameterName = string;

    export type DocumentParameterType = string;

    export type DocumentPermissionType = string;

    export type DocumentSha1 = string;

    export type DocumentStatus = string;

    export type ExpirationDate = number;

    export type FailedCreateAssociationList = FailedCreateAssociation[];

    export type Fault = string;

    export type IPAddress = string;

    export type IamRole = string;

    export type InstanceId = string;

    export type InstanceIdList = InstanceId[];

    export type InstanceInformationFilterKey = string;

    export type InstanceInformationFilterList = InstanceInformationFilter[];

    export type InstanceInformationFilterValue = string;

    export type InstanceInformationFilterValueSet = InstanceInformationFilterValue[];

    export type InstanceInformationList = InstanceInformation[];

    export type InvocationTraceOutput = string;

    export type KeyList = TagKey[];

    export type ManagedInstanceId = string;

    export type MaxResults = number;

    export type MaxResultsEC2Compatible = number;

    export type NextToken = string;

    export type NotificationArn = string;

    export type NotificationEvent = string;

    export type NotificationEventList = NotificationEvent[];

    export type NotificationType = string;

    export type ParameterName = string;

    export type ParameterValue = string;

    export type ParameterValueList = ParameterValue[];

    export type Parameters = { [key: string]: ParameterValueList };

    export type PingStatus = string;

    export type PlatformType = string;

    export type PlatformTypeList = PlatformType[];

    export type RegistrationLimit = number;

    export type RegistrationsCount = number;

    export type ResourceId = string;

    export type ResourceType = string;

    export type ResourceTypeForTagging = string;

    export type ResponseCode = number;

    export type S3BucketName = string;

    export type S3KeyPrefix = string;

    export type ServiceRole = string;

    export type StatusAdditionalInfo = string;

    export type StatusMessage = string;

    export type String = string;

    export type StringList = String[];

    export type TagKey = string;

    export type TagList = Tag[];

    export type TagValue = string;

    export type TimeoutSeconds = number;

    export type Version = string;

    export interface Activation {
      /** The ID created by SSM when you submitted the activation. **/
      ActivationId?: ActivationId;
      /** A user defined description of the activation. **/
      Description?: ActivationDescription;
      /** A name for the managed instance when it is created. **/
      DefaultInstanceName?: DefaultInstanceName;
      /** The Amazon Identity and Access Management (IAM) role to assign to the managed
instance. **/
      IamRole?: IamRole;
      /** The maximum number of managed instances that can be registered using this
activation. **/
      RegistrationLimit?: RegistrationLimit;
      /** The number of managed instances already registered with this activation. **/
      RegistrationsCount?: RegistrationsCount;
      /** The date when this activation can no longer be used to register managed
instances. **/
      ExpirationDate?: ExpirationDate;
      /** Whether or not the activation is expired. **/
      Expired?: Boolean;
      /** The date the activation was created. **/
      CreatedDate?: CreatedDate;
    }
    export interface AddTagsToResourceRequest {
      /** Specifies the type of resource you are tagging. **/
      ResourceType: ResourceTypeForTagging;
      /** The resource ID you want to tag. **/
      ResourceId: ResourceId;
      /** One or more tags. The value parameter is required, but if you don&#x27;t want the
tag to have a value, specify the parameter with no value, and we set the value
to an empty string. **/
      Tags: TagList;
    }
    export interface AddTagsToResourceResult {
    }
    export interface AssociatedInstances {
    }
    export interface Association {
      /** The name of the SSM document. **/
      Name?: DocumentName;
      /** The ID of the instance. **/
      InstanceId?: InstanceId;
    }
    export interface AssociationAlreadyExists {
    }
    export interface AssociationDescription {
      /** The name of the SSM document. **/
      Name?: DocumentName;
      /** The ID of the instance. **/
      InstanceId?: InstanceId;
      /** The date when the association was made. **/
      Date?: DateTime;
      /** The association status. **/
      Status?: AssociationStatus;
      /** A description of the parameters for a document. **/
      Parameters?: Parameters;
    }
    export interface AssociationDoesNotExist {
    }
    export interface AssociationFilter {
      /** The name of the filter. **/
      key: AssociationFilterKey;
      /** The filter value. **/
      value: AssociationFilterValue;
    }
    export interface AssociationLimitExceeded {
    }
    export interface AssociationStatus {
      /** The date when the status changed. **/
      Date: DateTime;
      /** The status. **/
      Name: AssociationStatusName;
      /** The reason for the status. **/
      Message: StatusMessage;
      /** A user-defined string. **/
      AdditionalInfo?: StatusAdditionalInfo;
    }
    export interface CancelCommandRequest {
      /** The ID of the command you want to cancel. **/
      CommandId: CommandId;
      /** (Optional) A list of instance IDs on which you want to cancel the command. If
not provided, the command is canceled on every instance on which it was
requested. **/
      InstanceIds?: InstanceIdList;
    }
    export interface CancelCommandResult {
    }
    export interface Command {
      /** A unique identifier for this command. **/
      CommandId?: CommandId;
      /** The name of the SSM document requested for execution. **/
      DocumentName?: DocumentName;
      /** User-specified information about the command, such as a brief description of
what the command should do. **/
      Comment?: Comment;
      /** If this time is reached and the command has not already started executing, it
will not execute. Calculated based on the ExpiresAfter user input provided as
part of the SendCommand API. **/
      ExpiresAfter?: DateTime;
      /** The parameter values to be inserted in the SSM document when executing the
command. **/
      Parameters?: Parameters;
      /** The instance IDs against which this command was requested. **/
      InstanceIds?: InstanceIdList;
      /** The date and time the command was requested. **/
      RequestedDateTime?: DateTime;
      /** The status of the command. **/
      Status?: CommandStatus;
      /** The S3 bucket where the responses to the command executions should be stored.
This was requested when issuing the command. **/
      OutputS3BucketName?: S3BucketName;
      /** The S3 directory path inside the bucket where the responses to the command
executions should be stored. This was requested when issuing the command. **/
      OutputS3KeyPrefix?: S3KeyPrefix;
      /** The IAM service role that SSM uses to act on your behalf when sending
notifications about command status changes. **/
      ServiceRole?: ServiceRole;
      /** Configurations for sending notifications about command status changes. **/
      NotificationConfig?: NotificationConfig;
    }
    export interface CommandFilter {
      /** The name of the filter. For example, requested date and time. **/
      key: CommandFilterKey;
      /** The filter value. For example: June 30, 2015. **/
      value: CommandFilterValue;
    }
    export interface CommandInvocation {
      /** The command against which this invocation was requested. **/
      CommandId?: CommandId;
      /** The instance ID in which this invocation was requested. **/
      InstanceId?: InstanceId;
      /** User-specified information about the command, such as a brief description of
what the command should do. **/
      Comment?: Comment;
      /** The document name that was requested for execution. **/
      DocumentName?: DocumentName;
      /** The time and date the request was sent to this instance. **/
      RequestedDateTime?: DateTime;
      /** Whether or not the invocation succeeded, failed, or is pending. **/
      Status?: CommandInvocationStatus;
      /** Gets the trace output sent by the agent. **/
      TraceOutput?: InvocationTraceOutput;
      CommandPlugins?: CommandPluginList;
      /** The IAM service role that SSM uses to act on your behalf when sending
notifications about command status changes on a per instance basis. **/
      ServiceRole?: ServiceRole;
      /** Configurations for sending notifications about command status changes on a per
instance basis. **/
      NotificationConfig?: NotificationConfig;
    }
    export interface CommandPlugin {
      /** The name of the plugin. Must be one of the following: aws:updateAgent,
aws:domainjoin, aws:applications, aws:runPowerShellScript, aws:psmodule,
aws:cloudWatch, aws:runShellScript, or aws:updateSSMAgent. **/
      Name?: CommandPluginName;
      /** The status of this plugin. You can execute a document with multiple plugins. **/
      Status?: CommandPluginStatus;
      /** A numeric response code generated after executing the plugin. **/
      ResponseCode?: ResponseCode;
      /** The time the plugin started executing. **/
      ResponseStartDateTime?: DateTime;
      /** The time the plugin stopped executing. Could stop prematurely if, for example, a
cancel command was sent. **/
      ResponseFinishDateTime?: DateTime;
      /** Output of the plugin execution. **/
      Output?: CommandPluginOutput;
      /** The S3 bucket where the responses to the command executions should be stored.
This was requested when issuing the command. **/
      OutputS3BucketName?: S3BucketName;
      /** The S3 directory path inside the bucket where the responses to the command
executions should be stored. This was requested when issuing the command. **/
      OutputS3KeyPrefix?: S3KeyPrefix;
    }
    export interface CreateActivationRequest {
      /** A user-defined description of the resource that you want to register with Amazon
EC2. **/
      Description?: ActivationDescription;
      /** The name of the registered, managed instance as it will appear in the Amazon EC2
console or when you use the AWS command line tools to list EC2 resources. **/
      DefaultInstanceName?: DefaultInstanceName;
      /** The Amazon Identity and Access Management (IAM) role that you want to assign to
the managed instance. **/
      IamRole: IamRole;
      /** Specify the maximum number of managed instances you want to register. The
default value is 1 instance. **/
      RegistrationLimit?: RegistrationLimit;
      /** The date by which this activation request should expire. The default value is 24
hours. **/
      ExpirationDate?: ExpirationDate;
    }
    export interface CreateActivationResult {
      /** The ID number generated by the system when it processed the activation. The
activation ID functions like a user name. **/
      ActivationId?: ActivationId;
      /** The code the system generates when it processes the activation. The activation
code functions like a password to validate the activation ID. **/
      ActivationCode?: ActivationCode;
    }
    export interface CreateAssociationBatchRequest {
      /** One or more associations. **/
      Entries: CreateAssociationBatchRequestEntries;
    }
    export interface CreateAssociationBatchRequestEntry {
      /** The name of the configuration document. **/
      Name?: DocumentName;
      /** The ID of the instance. **/
      InstanceId?: InstanceId;
      /** A description of the parameters for a document. **/
      Parameters?: Parameters;
    }
    export interface CreateAssociationBatchResult {
      /** Information about the associations that succeeded. **/
      Successful?: AssociationDescriptionList;
      /** Information about the associations that failed. **/
      Failed?: FailedCreateAssociationList;
    }
    export interface CreateAssociationRequest {
      /** The name of the SSM document. **/
      Name: DocumentName;
      /** The instance ID. **/
      InstanceId: InstanceId;
      /** The parameters for the documents runtime configuration. **/
      Parameters?: Parameters;
    }
    export interface CreateAssociationResult {
      /** Information about the association. **/
      AssociationDescription?: AssociationDescription;
    }
    export interface CreateDocumentRequest {
      /** A valid JSON string. **/
      Content: DocumentContent;
      /** A name for the SSM document. **/
      Name: DocumentName;
    }
    export interface CreateDocumentResult {
      /** Information about the SSM document. **/
      DocumentDescription?: DocumentDescription;
    }
    export interface DeleteActivationRequest {
      /** The ID of the activation that you want to delete. **/
      ActivationId: ActivationId;
    }
    export interface DeleteActivationResult {
    }
    export interface DeleteAssociationRequest {
      /** The name of the SSM document. **/
      Name: DocumentName;
      /** The ID of the instance. **/
      InstanceId: InstanceId;
    }
    export interface DeleteAssociationResult {
    }
    export interface DeleteDocumentRequest {
      /** The name of the SSM document. **/
      Name: DocumentName;
    }
    export interface DeleteDocumentResult {
    }
    export interface DeregisterManagedInstanceRequest {
      /** The ID assigned to the managed instance when you registered it using the
activation process. **/
      InstanceId: ManagedInstanceId;
    }
    export interface DeregisterManagedInstanceResult {
    }
    export interface DescribeActivationsFilter {
      /** The name of the filter. **/
      FilterKey?: DescribeActivationsFilterKeys;
      /** The filter values. **/
      FilterValues?: StringList;
    }
    export interface DescribeActivationsRequest {
      /** A filter to view information about your activations. **/
      Filters?: DescribeActivationsFilterList;
      /** The maximum number of items to return for this call. The call also returns a
token that you can specify in a subsequent call to get the next set of results. **/
      MaxResults?: MaxResults;
      /** A token to start the list. Use this token to get the next set of results. **/
      NextToken?: NextToken;
    }
    export interface DescribeActivationsResult {
      /** A list of activations for your AWS account. **/
      ActivationList?: ActivationList;
      /** The token for the next set of items to return. Use this token to get the next
set of results. **/
      NextToken?: NextToken;
    }
    export interface DescribeAssociationRequest {
      /** The name of the SSM document. **/
      Name: DocumentName;
      /** The instance ID. **/
      InstanceId: InstanceId;
    }
    export interface DescribeAssociationResult {
      /** Information about the association. **/
      AssociationDescription?: AssociationDescription;
    }
    export interface DescribeDocumentPermissionRequest {
      /** The name of the document for which you are the owner. **/
      Name: DocumentName;
      /** The permission type for the document. The permission type can be Share. **/
      PermissionType: DocumentPermissionType;
    }
    export interface DescribeDocumentPermissionResponse {
      /** The account IDs that have permission to use this document. The ID can be either
an AWS account or All. **/
      AccountIds?: AccountIdList;
    }
    export interface DescribeDocumentRequest {
      /** The name of the SSM document. **/
      Name: DocumentARN;
    }
    export interface DescribeDocumentResult {
      /** Information about the SSM document. **/
      Document?: DocumentDescription;
    }
    export interface DescribeInstanceInformationRequest {
      /** One or more filters. Use a filter to return a more specific list of instances. **/
      InstanceInformationFilterList?: InstanceInformationFilterList;
      /** The maximum number of items to return for this call. The call also returns a
token that you can specify in a subsequent call to get the next set of results. **/
      MaxResults?: MaxResultsEC2Compatible;
      /** The token for the next set of items to return. (You received this token from a
previous call.) **/
      NextToken?: NextToken;
    }
    export interface DescribeInstanceInformationResult {
      /** The instance information list. **/
      InstanceInformationList?: InstanceInformationList;
      /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
      NextToken?: NextToken;
    }
    export interface DocumentAlreadyExists {
      Message?: String;
    }
    export interface DocumentDescription {
      /** The SHA1 hash of the document, which you can use for verification purposes. **/
      Sha1?: DocumentSha1;
      /** The Sha256 or Sha1 hash created by the system when the document was created. 

Sha1 hashes have been deprecated. **/
      Hash?: DocumentHash;
      /** Sha256 or Sha1.

Sha1 hashes have been deprecated. **/
      HashType?: DocumentHashType;
      /** The name of the SSM document. **/
      Name?: DocumentARN;
      /** The AWS user account of the person who created the document. **/
      Owner?: DocumentOwner;
      /** The date when the SSM document was created. **/
      CreatedDate?: DateTime;
      /** The status of the SSM document. **/
      Status?: DocumentStatus;
      /** A description of the document. **/
      Description?: DescriptionInDocument;
      /** A description of the parameters for a document. **/
      Parameters?: DocumentParameterList;
      /** The list of OS platforms compatible with this SSM document. **/
      PlatformTypes?: PlatformTypeList;
    }
    export interface DocumentFilter {
      /** The name of the filter. **/
      key: DocumentFilterKey;
      /** The value of the filter. **/
      value: DocumentFilterValue;
    }
    export interface DocumentIdentifier {
      /** The name of the SSM document. **/
      Name?: DocumentARN;
      /** The AWS user account of the person who created the document. **/
      Owner?: DocumentOwner;
      /** The operating system platform. **/
      PlatformTypes?: PlatformTypeList;
    }
    export interface DocumentLimitExceeded {
      Message?: String;
    }
    export interface DocumentParameter {
      /** The name of the parameter. **/
      Name?: DocumentParameterName;
      /** The type of parameter. The type can be either “String” or “StringList”. **/
      Type?: DocumentParameterType;
      /** A description of what the parameter does, how to use it, the default value, and
whether or not the parameter is optional. **/
      Description?: DocumentParameterDescrption;
      /** If specified, the default values for the parameters. Parameters without a
default value are required. Parameters with a default value are optional. **/
      DefaultValue?: DocumentParameterDefaultValue;
    }
    export interface DocumentPermissionLimit {
      Message?: String;
    }
    export interface DuplicateInstanceId {
    }
    export interface FailedCreateAssociation {
      /** The association. **/
      Entry?: CreateAssociationBatchRequestEntry;
      /** A description of the failure. **/
      Message?: BatchErrorMessage;
      /** The source of the failure. **/
      Fault?: Fault;
    }
    export interface GetDocumentRequest {
      /** The name of the SSM document. **/
      Name: DocumentARN;
    }
    export interface GetDocumentResult {
      /** The name of the SSM document. **/
      Name?: DocumentARN;
      /** The contents of the SSM document. **/
      Content?: DocumentContent;
    }
    export interface InstanceInformation {
      /** The instance ID. **/
      InstanceId?: InstanceId;
      /** Connection status of the SSM agent. **/
      PingStatus?: PingStatus;
      /** The date and time when agent last pinged SSM service. **/
      LastPingDateTime?: DateTime;
      /** The version of the SSM agent running on your Linux instance. **/
      AgentVersion?: Version;
      /** Indicates whether latest version of the SSM agent is running on your instance. **/
      IsLatestVersion?: Boolean;
      /** The operating system platform type. **/
      PlatformType?: PlatformType;
      /** The name of the operating system platform running on your instance. **/
      PlatformName?: String;
      /** The version of the OS platform running on your instance. **/
      PlatformVersion?: String;
      /** The activation ID created by SSM when the server or VM was registered. **/
      ActivationId?: ActivationId;
      /** The Amazon Identity and Access Management (IAM) role assigned to EC2 instances
or managed instances. **/
      IamRole?: IamRole;
      /** The date the server or VM was registered with AWS as a managed instance. **/
      RegistrationDate?: DateTime;
      /** The type of instance. Instances are either EC2 instances or managed instances. **/
      ResourceType?: ResourceType;
      /** The name of the managed instance. **/
      Name?: String;
      /** The IP address of the managed instance. **/
      IPAddress?: IPAddress;
      /** The fully qualified host name of the managed instance. **/
      ComputerName?: ComputerName;
    }
    export interface InstanceInformationFilter {
      /** The name of the filter. **/
      key: InstanceInformationFilterKey;
      /** The filter values. **/
      valueSet: InstanceInformationFilterValueSet;
    }
    export interface InternalServerError {
      Message?: String;
    }
    export interface InvalidActivation {
      Message?: String;
    }
    export interface InvalidActivationId {
      Message?: String;
    }
    export interface InvalidCommandId {
    }
    export interface InvalidDocument {
      /** The SSM document does not exist or the document is not available to the user.
This exception can be issued by CreateAssociation, CreateAssociationBatch,
DeleteAssociation, DeleteDocument, DescribeAssociation, DescribeDocument,
GetDocument, SendCommand, or UpdateAssociationStatus. **/
      Message?: String;
    }
    export interface InvalidDocumentContent {
      /** A description of the validation error. **/
      Message?: String;
    }
    export interface InvalidDocumentOperation {
      Message?: String;
    }
    export interface InvalidFilter {
      Message?: String;
    }
    export interface InvalidFilterKey {
    }
    export interface InvalidInstanceId {
      Message?: String;
    }
    export interface InvalidInstanceInformationFilterValue {
      message?: String;
    }
    export interface InvalidNextToken {
    }
    export interface InvalidNotificationConfig {
      Message?: String;
    }
    export interface InvalidOutputFolder {
    }
    export interface InvalidParameters {
      Message?: String;
    }
    export interface InvalidPermissionType {
      Message?: String;
    }
    export interface InvalidResourceId {
    }
    export interface InvalidResourceType {
    }
    export interface InvalidRole {
      Message?: String;
    }
    export interface ListAssociationsRequest {
      /** One or more filters. Use a filter to return a more specific list of results. **/
      AssociationFilterList: AssociationFilterList;
      /** The maximum number of items to return for this call. The call also returns a
token that you can specify in a subsequent call to get the next set of results. **/
      MaxResults?: MaxResults;
      /** The token for the next set of items to return. (You received this token from a
previous call.) **/
      NextToken?: NextToken;
    }
    export interface ListAssociationsResult {
      /** The associations. **/
      Associations?: AssociationList;
      /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
      NextToken?: NextToken;
    }
    export interface ListCommandInvocationsRequest {
      /** (Optional) The invocations for a specific command ID. **/
      CommandId?: CommandId;
      /** (Optional) The command execution details for a specific instance ID. **/
      InstanceId?: InstanceId;
      /** (Optional) The maximum number of items to return for this call. The call also
returns a token that you can specify in a subsequent call to get the next set of
results. **/
      MaxResults?: CommandMaxResults;
      /** (Optional) The token for the next set of items to return. (You received this
token from a previous call.) **/
      NextToken?: NextToken;
      /** (Optional) One or more filters. Use a filter to return a more specific list of
results. **/
      Filters?: CommandFilterList;
      /** (Optional) If set this returns the response of the command executions and any
command output. By default this is set to False. **/
      Details?: Boolean;
    }
    export interface ListCommandInvocationsResult {
      /** (Optional) A list of all invocations. **/
      CommandInvocations?: CommandInvocationList;
      /** (Optional) The token for the next set of items to return. (You received this
token from a previous call.) **/
      NextToken?: NextToken;
    }
    export interface ListCommandsRequest {
      /** (Optional) If provided, lists only the specified command. **/
      CommandId?: CommandId;
      /** (Optional) Lists commands issued against this instance ID. **/
      InstanceId?: InstanceId;
      /** (Optional) The maximum number of items to return for this call. The call also
returns a token that you can specify in a subsequent call to get the next set of
results. **/
      MaxResults?: CommandMaxResults;
      /** (Optional) The token for the next set of items to return. (You received this
token from a previous call.) **/
      NextToken?: NextToken;
      /** (Optional) One or more filters. Use a filter to return a more specific list of
results. **/
      Filters?: CommandFilterList;
    }
    export interface ListCommandsResult {
      /** (Optional) The list of commands requested by the user. **/
      Commands?: CommandList;
      /** (Optional) The token for the next set of items to return. (You received this
token from a previous call.) **/
      NextToken?: NextToken;
    }
    export interface ListDocumentsRequest {
      /** One or more filters. Use a filter to return a more specific list of results. **/
      DocumentFilterList?: DocumentFilterList;
      /** The maximum number of items to return for this call. The call also returns a
token that you can specify in a subsequent call to get the next set of results. **/
      MaxResults?: MaxResults;
      /** The token for the next set of items to return. (You received this token from a
previous call.) **/
      NextToken?: NextToken;
    }
    export interface ListDocumentsResult {
      /** The names of the SSM documents. **/
      DocumentIdentifiers?: DocumentIdentifierList;
      /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
      NextToken?: NextToken;
    }
    export interface ListTagsForResourceRequest {
      /** Returns a list of tags for a specific resource type. **/
      ResourceType: ResourceTypeForTagging;
      /** The resource ID for which you want to see a list of tags. **/
      ResourceId: ResourceId;
    }
    export interface ListTagsForResourceResult {
      /** A list of tags. **/
      TagList?: TagList;
    }
    export interface MaxDocumentSizeExceeded {
      Message?: String;
    }
    export interface ModifyDocumentPermissionRequest {
      /** The name of the document that you want to share. **/
      Name: DocumentName;
      /** The permission type for the document. The permission type can be Share. **/
      PermissionType: DocumentPermissionType;
      /** The AWS user accounts that should have access to the document. The account IDs
can either be a group of account IDs or All. **/
      AccountIdsToAdd?: AccountIdList;
      /** The AWS user accounts that should no longer have access to the document. The AWS
user account can either be a group of account IDs or All. This action has a
higher priority than AccountIdsToAdd. If you specify an account ID to add and
the same ID to remove, the system removes access to the document. **/
      AccountIdsToRemove?: AccountIdList;
    }
    export interface ModifyDocumentPermissionResponse {
    }
    export interface NotificationConfig {
      /** An Amazon Resource Name (ARN) for a Simple Notification Service (SNS) topic. SSM
pushes notifications about command status changes to this topic. **/
      NotificationArn?: NotificationArn;
      /** The different events for which you can receive notifications. These events
include the following: All (events), InProgress, Success, TimedOut, Cancelled,
Failed. To learn more about these events, see Monitoring Commands
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitor-commands.html] in
the Amazon Elastic Compute Cloud User Guide . **/
      NotificationEvents?: NotificationEventList;
      /** Command: Receive notification when the status of a command changes. Invocation:
For commands sent to multiple instances, receive notification on a per-instance
basis when the status of a command changes. **/
      NotificationType?: NotificationType;
    }
    export interface RemoveTagsFromResourceRequest {
      /** The type of resource of which you want to remove a tag. **/
      ResourceType: ResourceTypeForTagging;
      /** The resource ID for which you want to remove tags. **/
      ResourceId: ResourceId;
      /** Tag keys that you want to remove from the specified resource. **/
      TagKeys: KeyList;
    }
    export interface RemoveTagsFromResourceResult {
    }
    export interface SendCommandRequest {
      /** Required. The instance IDs where the command should execute. You can specify a
maximum of 50 IDs. **/
      InstanceIds: InstanceIdList;
      /** Required. The name of the SSM document to execute. This can be an SSM public
document or a custom document. **/
      DocumentName: DocumentARN;
      /** The Sha256 or Sha1 hash created by the system when the document was created. 

Sha1 hashes have been deprecated. **/
      DocumentHash?: DocumentHash;
      /** Sha256 or Sha1.

Sha1 hashes have been deprecated. **/
      DocumentHashType?: DocumentHashType;
      /** If this time is reached and the command has not already started executing, it
will not execute. **/
      TimeoutSeconds?: TimeoutSeconds;
      /** User-specified information about the command, such as a brief description of
what the command should do. **/
      Comment?: Comment;
      /** The required and optional parameters specified in the SSM document being
executed. **/
      Parameters?: Parameters;
      /** The name of the S3 bucket where command execution responses should be stored. **/
      OutputS3BucketName?: S3BucketName;
      /** The directory structure within the S3 bucket where the responses should be
stored. **/
      OutputS3KeyPrefix?: S3KeyPrefix;
      /** The IAM role that SSM uses to send notifications. **/
      ServiceRoleArn?: ServiceRole;
      /** Configurations for sending notifications. **/
      NotificationConfig?: NotificationConfig;
    }
    export interface SendCommandResult {
      /** The request as it was received by SSM. Also provides the command ID which can be
used future references to this request. **/
      Command?: Command;
    }
    export interface StatusUnchanged {
    }
    export interface Tag {
      /** The name of the tag. **/
      Key: TagKey;
      /** The value of the tag. **/
      Value: TagValue;
    }
    export interface TooManyUpdates {
    }
    export interface UnsupportedPlatformType {
      Message?: String;
    }
    export interface UpdateAssociationStatusRequest {
      /** The name of the SSM document. **/
      Name: DocumentName;
      /** The ID of the instance. **/
      InstanceId: InstanceId;
      /** The association status. **/
      AssociationStatus: AssociationStatus;
    }
    export interface UpdateAssociationStatusResult {
      /** Information about the association. **/
      AssociationDescription?: AssociationDescription;
    }
    export interface UpdateManagedInstanceRoleRequest {
      /** The ID of the managed instance where you want to update the role. **/
      InstanceId: ManagedInstanceId;
      /** The IAM role you want to assign or change. **/
      IamRole: IamRole;
    }
    export interface UpdateManagedInstanceRoleResult {
    }
  }
}
