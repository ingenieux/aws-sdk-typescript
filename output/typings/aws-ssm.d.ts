// Type definitions for aws-sdk - Amazon Simple Systems Manager (SSM)
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
   * Amazon EC2 Systems Manager is a collection of capabilities that helps you
automate management tasks such as collecting system inventory, applying
operating system (OS) patches, automating the creation of Amazon Machine Images
(AMIs), and configuring operating systems (OSs) and applications at scale.
Systems Manager works with managed instances: Amazon EC2 instances and servers
or virtual machines (VMs) in your on-premises environment that are configured
for Systems Manager.

This references is intended to be used with the EC2 Systems Manager User Guide ( 
Linux [http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/systems-manager.html] 
) ( Windows
[http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/systems-manager.html] ).

To get started, verify prerequisites and configure managed instances ( Linux
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/systems-manager-prereqs.html] 
) ( Windows
[http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/systems-manager-prereqs.html] 
).
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
     * @error TooManyTagsError   
     */
    addTagsToResource(params: SSM.AddTagsToResourceRequest, callback?: (err: SSM.InvalidResourceType|SSM.InvalidResourceId|SSM.InternalServerError|SSM.TooManyTagsError|any, data: SSM.AddTagsToResourceResult|any) => void): Request<SSM.AddTagsToResourceResult|any,SSM.InvalidResourceType|SSM.InvalidResourceId|SSM.InternalServerError|SSM.TooManyTagsError|any>;
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
    cancelCommand(params: SSM.CancelCommandRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidCommandId|SSM.InvalidInstanceId|SSM.DuplicateInstanceId|any, data: SSM.CancelCommandResult|any) => void): Request<SSM.CancelCommandResult|any,SSM.InternalServerError|SSM.InvalidCommandId|SSM.InvalidInstanceId|SSM.DuplicateInstanceId|any>;
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
    createActivation(params: SSM.CreateActivationRequest, callback?: (err: SSM.InternalServerError|any, data: SSM.CreateActivationResult|any) => void): Request<SSM.CreateActivationResult|any,SSM.InternalServerError|any>;
    /**
     * Associates the specified SSM document with the specified instances or targets.

When you associate an SSM document with one or more instances using instance IDs
or tags, the SSM agent running on the instance processes the document and
configures the instance as specified.

If you associate a document with an instance that already has an associated
document, the system throws the AssociationAlreadyExists exception.
     *
     * @error AssociationAlreadyExists   
     * @error AssociationLimitExceeded   
     * @error InternalServerError   
     * @error InvalidDocument   
     * @error InvalidDocumentVersion   
     * @error InvalidInstanceId   
     * @error UnsupportedPlatformType   
     * @error InvalidOutputLocation   
     * @error InvalidParameters   
     * @error InvalidTarget   
     * @error InvalidSchedule   
     */
    createAssociation(params: SSM.CreateAssociationRequest, callback?: (err: SSM.AssociationAlreadyExists|SSM.AssociationLimitExceeded|SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidDocumentVersion|SSM.InvalidInstanceId|SSM.UnsupportedPlatformType|SSM.InvalidOutputLocation|SSM.InvalidParameters|SSM.InvalidTarget|SSM.InvalidSchedule|any, data: SSM.CreateAssociationResult|any) => void): Request<SSM.CreateAssociationResult|any,SSM.AssociationAlreadyExists|SSM.AssociationLimitExceeded|SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidDocumentVersion|SSM.InvalidInstanceId|SSM.UnsupportedPlatformType|SSM.InvalidOutputLocation|SSM.InvalidParameters|SSM.InvalidTarget|SSM.InvalidSchedule|any>;
    /**
     * Associates the specified SSM document with the specified instances or targets.

When you associate an SSM document with one or more instances using instance IDs
or tags, the SSM agent running on the instance processes the document and
configures the instance as specified.

If you associate a document with an instance that already has an associated
document, the system throws the AssociationAlreadyExists exception.
     *
     * @error InternalServerError   
     * @error InvalidDocument   
     * @error InvalidDocumentVersion   
     * @error InvalidInstanceId   
     * @error InvalidParameters   
     * @error DuplicateInstanceId   
     * @error AssociationLimitExceeded   
     * @error UnsupportedPlatformType   
     * @error InvalidOutputLocation   
     * @error InvalidTarget   
     * @error InvalidSchedule   
     */
    createAssociationBatch(params: SSM.CreateAssociationBatchRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidDocumentVersion|SSM.InvalidInstanceId|SSM.InvalidParameters|SSM.DuplicateInstanceId|SSM.AssociationLimitExceeded|SSM.UnsupportedPlatformType|SSM.InvalidOutputLocation|SSM.InvalidTarget|SSM.InvalidSchedule|any, data: SSM.CreateAssociationBatchResult|any) => void): Request<SSM.CreateAssociationBatchResult|any,SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidDocumentVersion|SSM.InvalidInstanceId|SSM.InvalidParameters|SSM.DuplicateInstanceId|SSM.AssociationLimitExceeded|SSM.UnsupportedPlatformType|SSM.InvalidOutputLocation|SSM.InvalidTarget|SSM.InvalidSchedule|any>;
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
     * @error InvalidDocumentSchemaVersion   
     */
    createDocument(params: SSM.CreateDocumentRequest, callback?: (err: SSM.DocumentAlreadyExists|SSM.MaxDocumentSizeExceeded|SSM.InternalServerError|SSM.InvalidDocumentContent|SSM.DocumentLimitExceeded|SSM.InvalidDocumentSchemaVersion|any, data: SSM.CreateDocumentResult|any) => void): Request<SSM.CreateDocumentResult|any,SSM.DocumentAlreadyExists|SSM.MaxDocumentSizeExceeded|SSM.InternalServerError|SSM.InvalidDocumentContent|SSM.DocumentLimitExceeded|SSM.InvalidDocumentSchemaVersion|any>;
    /**
     * Creates a new Maintenance Window.
     *
     * @error IdempotentParameterMismatch   
     * @error ResourceLimitExceededException   
     * @error InternalServerError   
     */
    createMaintenanceWindow(params: SSM.CreateMaintenanceWindowRequest, callback?: (err: SSM.IdempotentParameterMismatch|SSM.ResourceLimitExceededException|SSM.InternalServerError|any, data: SSM.CreateMaintenanceWindowResult|any) => void): Request<SSM.CreateMaintenanceWindowResult|any,SSM.IdempotentParameterMismatch|SSM.ResourceLimitExceededException|SSM.InternalServerError|any>;
    /**
     * Creates a patch baseline.
     *
     * @error IdempotentParameterMismatch   
     * @error ResourceLimitExceededException   
     * @error InternalServerError   
     */
    createPatchBaseline(params: SSM.CreatePatchBaselineRequest, callback?: (err: SSM.IdempotentParameterMismatch|SSM.ResourceLimitExceededException|SSM.InternalServerError|any, data: SSM.CreatePatchBaselineResult|any) => void): Request<SSM.CreatePatchBaselineResult|any,SSM.IdempotentParameterMismatch|SSM.ResourceLimitExceededException|SSM.InternalServerError|any>;
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
    deleteActivation(params: SSM.DeleteActivationRequest, callback?: (err: SSM.InvalidActivationId|SSM.InvalidActivation|SSM.InternalServerError|any, data: SSM.DeleteActivationResult|any) => void): Request<SSM.DeleteActivationResult|any,SSM.InvalidActivationId|SSM.InvalidActivation|SSM.InternalServerError|any>;
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
    deleteAssociation(params: SSM.DeleteAssociationRequest, callback?: (err: SSM.AssociationDoesNotExist|SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidInstanceId|SSM.TooManyUpdates|any, data: SSM.DeleteAssociationResult|any) => void): Request<SSM.DeleteAssociationResult|any,SSM.AssociationDoesNotExist|SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidInstanceId|SSM.TooManyUpdates|any>;
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
    deleteDocument(params: SSM.DeleteDocumentRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidDocumentOperation|SSM.AssociatedInstances|any, data: SSM.DeleteDocumentResult|any) => void): Request<SSM.DeleteDocumentResult|any,SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidDocumentOperation|SSM.AssociatedInstances|any>;
    /**
     * Deletes a Maintenance Window.
     *
     * @error InternalServerError   
     */
    deleteMaintenanceWindow(params: SSM.DeleteMaintenanceWindowRequest, callback?: (err: SSM.InternalServerError|any, data: SSM.DeleteMaintenanceWindowResult|any) => void): Request<SSM.DeleteMaintenanceWindowResult|any,SSM.InternalServerError|any>;
    /**
     * Delete a parameter from the system.
     *
     * @error InternalServerError   
     * @error ParameterNotFound   
     */
    deleteParameter(params: SSM.DeleteParameterRequest, callback?: (err: SSM.InternalServerError|SSM.ParameterNotFound|any, data: SSM.DeleteParameterResult|any) => void): Request<SSM.DeleteParameterResult|any,SSM.InternalServerError|SSM.ParameterNotFound|any>;
    /**
     * Deletes a patch baseline.
     *
     * @error ResourceInUseException   
     * @error InternalServerError   
     */
    deletePatchBaseline(params: SSM.DeletePatchBaselineRequest, callback?: (err: SSM.ResourceInUseException|SSM.InternalServerError|any, data: SSM.DeletePatchBaselineResult|any) => void): Request<SSM.DeletePatchBaselineResult|any,SSM.ResourceInUseException|SSM.InternalServerError|any>;
    /**
     * Removes the server or virtual machine from the list of registered servers. You
can reregister the instance again at any time. If you don’t plan to use Run
Command on the server, we suggest uninstalling the SSM agent first.
     *
     * @error InvalidInstanceId   
     * @error InternalServerError   
     */
    deregisterManagedInstance(params: SSM.DeregisterManagedInstanceRequest, callback?: (err: SSM.InvalidInstanceId|SSM.InternalServerError|any, data: SSM.DeregisterManagedInstanceResult|any) => void): Request<SSM.DeregisterManagedInstanceResult|any,SSM.InvalidInstanceId|SSM.InternalServerError|any>;
    /**
     * Removes a patch group from a patch baseline.
     *
     * @error InvalidResourceId   
     * @error InternalServerError   
     */
    deregisterPatchBaselineForPatchGroup(params: SSM.DeregisterPatchBaselineForPatchGroupRequest, callback?: (err: SSM.InvalidResourceId|SSM.InternalServerError|any, data: SSM.DeregisterPatchBaselineForPatchGroupResult|any) => void): Request<SSM.DeregisterPatchBaselineForPatchGroupResult|any,SSM.InvalidResourceId|SSM.InternalServerError|any>;
    /**
     * Removes a target from a Maintenance Window.
     *
     * @error DoesNotExistException   
     * @error InternalServerError   
     */
    deregisterTargetFromMaintenanceWindow(params: SSM.DeregisterTargetFromMaintenanceWindowRequest, callback?: (err: SSM.DoesNotExistException|SSM.InternalServerError|any, data: SSM.DeregisterTargetFromMaintenanceWindowResult|any) => void): Request<SSM.DeregisterTargetFromMaintenanceWindowResult|any,SSM.DoesNotExistException|SSM.InternalServerError|any>;
    /**
     * Removes a task from a Maintenance Window.
     *
     * @error DoesNotExistException   
     * @error InternalServerError   
     */
    deregisterTaskFromMaintenanceWindow(params: SSM.DeregisterTaskFromMaintenanceWindowRequest, callback?: (err: SSM.DoesNotExistException|SSM.InternalServerError|any, data: SSM.DeregisterTaskFromMaintenanceWindowResult|any) => void): Request<SSM.DeregisterTaskFromMaintenanceWindowResult|any,SSM.DoesNotExistException|SSM.InternalServerError|any>;
    /**
     * Details about the activation, including: the date and time the activation was
created, the expiration date, the IAM role assigned to the instances in the
activation, and the number of instances activated by this registration.
     *
     * @error InvalidFilter   
     * @error InvalidNextToken   
     * @error InternalServerError   
     */
    describeActivations(params: SSM.DescribeActivationsRequest, callback?: (err: SSM.InvalidFilter|SSM.InvalidNextToken|SSM.InternalServerError|any, data: SSM.DescribeActivationsResult|any) => void): Request<SSM.DescribeActivationsResult|any,SSM.InvalidFilter|SSM.InvalidNextToken|SSM.InternalServerError|any>;
    /**
     * Describes the associations for the specified SSM document or instance.
     *
     * @error AssociationDoesNotExist   
     * @error InternalServerError   
     * @error InvalidDocument   
     * @error InvalidInstanceId   
     */
    describeAssociation(params: SSM.DescribeAssociationRequest, callback?: (err: SSM.AssociationDoesNotExist|SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidInstanceId|any, data: SSM.DescribeAssociationResult|any) => void): Request<SSM.DescribeAssociationResult|any,SSM.AssociationDoesNotExist|SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidInstanceId|any>;
    /**
     * Provides details about all active and terminated Automation executions.
     *
     * @error InvalidNextToken   
     * @error InternalServerError   
     */
    describeAutomationExecutions(params: SSM.DescribeAutomationExecutionsRequest, callback?: (err: SSM.InvalidNextToken|SSM.InternalServerError|any, data: SSM.DescribeAutomationExecutionsResult|any) => void): Request<SSM.DescribeAutomationExecutionsResult|any,SSM.InvalidNextToken|SSM.InternalServerError|any>;
    /**
     * Lists all patches that could possibly be included in a patch baseline.
     *
     * @error InternalServerError   
     */
    describeAvailablePatches(params: SSM.DescribeAvailablePatchesRequest, callback?: (err: SSM.InternalServerError|any, data: SSM.DescribeAvailablePatchesResult|any) => void): Request<SSM.DescribeAvailablePatchesResult|any,SSM.InternalServerError|any>;
    /**
     * Describes the specified SSM document.
     *
     * @error InternalServerError   
     * @error InvalidDocument   
     * @error InvalidDocumentVersion   
     */
    describeDocument(params: SSM.DescribeDocumentRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidDocumentVersion|any, data: SSM.DescribeDocumentResult|any) => void): Request<SSM.DescribeDocumentResult|any,SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidDocumentVersion|any>;
    /**
     * Describes the permissions for an SSM document. If you created the document, you
are the owner. If a document is shared, it can either be shared privately (by
specifying a user’s AWS account ID) or publicly ( All ).
     *
     * @error InternalServerError   
     * @error InvalidDocument   
     * @error InvalidPermissionType   
     */
    describeDocumentPermission(params: SSM.DescribeDocumentPermissionRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidPermissionType|any, data: SSM.DescribeDocumentPermissionResponse|any) => void): Request<SSM.DescribeDocumentPermissionResponse|any,SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidPermissionType|any>;
    /**
     * All associations for the instance(s).
     *
     * @error InternalServerError   
     * @error InvalidInstanceId   
     * @error InvalidNextToken   
     */
    describeEffectiveInstanceAssociations(params: SSM.DescribeEffectiveInstanceAssociationsRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidInstanceId|SSM.InvalidNextToken|any, data: SSM.DescribeEffectiveInstanceAssociationsResult|any) => void): Request<SSM.DescribeEffectiveInstanceAssociationsResult|any,SSM.InternalServerError|SSM.InvalidInstanceId|SSM.InvalidNextToken|any>;
    /**
     * Retrieves the current effective patches (the patch and the approval state) for
the specified patch baseline.
     *
     * @error InvalidResourceId   
     * @error DoesNotExistException   
     * @error InternalServerError   
     */
    describeEffectivePatchesForPatchBaseline(params: SSM.DescribeEffectivePatchesForPatchBaselineRequest, callback?: (err: SSM.InvalidResourceId|SSM.DoesNotExistException|SSM.InternalServerError|any, data: SSM.DescribeEffectivePatchesForPatchBaselineResult|any) => void): Request<SSM.DescribeEffectivePatchesForPatchBaselineResult|any,SSM.InvalidResourceId|SSM.DoesNotExistException|SSM.InternalServerError|any>;
    /**
     * The status of the associations for the instance(s).
     *
     * @error InternalServerError   
     * @error InvalidInstanceId   
     * @error InvalidNextToken   
     */
    describeInstanceAssociationsStatus(params: SSM.DescribeInstanceAssociationsStatusRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidInstanceId|SSM.InvalidNextToken|any, data: SSM.DescribeInstanceAssociationsStatusResult|any) => void): Request<SSM.DescribeInstanceAssociationsStatusResult|any,SSM.InternalServerError|SSM.InvalidInstanceId|SSM.InvalidNextToken|any>;
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
    describeInstanceInformation(params: SSM.DescribeInstanceInformationRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidInstanceId|SSM.InvalidNextToken|SSM.InvalidInstanceInformationFilterValue|SSM.InvalidFilterKey|any, data: SSM.DescribeInstanceInformationResult|any) => void): Request<SSM.DescribeInstanceInformationResult|any,SSM.InternalServerError|SSM.InvalidInstanceId|SSM.InvalidNextToken|SSM.InvalidInstanceInformationFilterValue|SSM.InvalidFilterKey|any>;
    /**
     * Retrieves the high-level patch state of one or more instances.
     *
     * @error InternalServerError   
     * @error InvalidNextToken   
     */
    describeInstancePatchStates(params: SSM.DescribeInstancePatchStatesRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidNextToken|any, data: SSM.DescribeInstancePatchStatesResult|any) => void): Request<SSM.DescribeInstancePatchStatesResult|any,SSM.InternalServerError|SSM.InvalidNextToken|any>;
    /**
     * Retrieves the high-level patch state for the instances in the specified patch
group.
     *
     * @error InternalServerError   
     * @error InvalidFilter   
     * @error InvalidNextToken   
     */
    describeInstancePatchStatesForPatchGroup(params: SSM.DescribeInstancePatchStatesForPatchGroupRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidFilter|SSM.InvalidNextToken|any, data: SSM.DescribeInstancePatchStatesForPatchGroupResult|any) => void): Request<SSM.DescribeInstancePatchStatesForPatchGroupResult|any,SSM.InternalServerError|SSM.InvalidFilter|SSM.InvalidNextToken|any>;
    /**
     * Retrieves information about the patches on the specified instance and their
state relative to the patch baseline being used for the instance.
     *
     * @error InternalServerError   
     * @error InvalidInstanceId   
     * @error InvalidFilter   
     * @error InvalidNextToken   
     */
    describeInstancePatches(params: SSM.DescribeInstancePatchesRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidInstanceId|SSM.InvalidFilter|SSM.InvalidNextToken|any, data: SSM.DescribeInstancePatchesResult|any) => void): Request<SSM.DescribeInstancePatchesResult|any,SSM.InternalServerError|SSM.InvalidInstanceId|SSM.InvalidFilter|SSM.InvalidNextToken|any>;
    /**
     * Retrieves the individual task executions (one per target) for a particular task
executed as part of a Maintenance Window execution.
     *
     * @error DoesNotExistException   
     * @error InternalServerError   
     */
    describeMaintenanceWindowExecutionTaskInvocations(params: SSM.DescribeMaintenanceWindowExecutionTaskInvocationsRequest, callback?: (err: SSM.DoesNotExistException|SSM.InternalServerError|any, data: SSM.DescribeMaintenanceWindowExecutionTaskInvocationsResult|any) => void): Request<SSM.DescribeMaintenanceWindowExecutionTaskInvocationsResult|any,SSM.DoesNotExistException|SSM.InternalServerError|any>;
    /**
     * For a given Maintenance Window execution, lists the tasks that were executed.
     *
     * @error DoesNotExistException   
     * @error InternalServerError   
     */
    describeMaintenanceWindowExecutionTasks(params: SSM.DescribeMaintenanceWindowExecutionTasksRequest, callback?: (err: SSM.DoesNotExistException|SSM.InternalServerError|any, data: SSM.DescribeMaintenanceWindowExecutionTasksResult|any) => void): Request<SSM.DescribeMaintenanceWindowExecutionTasksResult|any,SSM.DoesNotExistException|SSM.InternalServerError|any>;
    /**
     * Lists the executions of a Maintenance Window (meaning, information about when
the Maintenance Window was scheduled to be active and information about tasks
registered and run with the Maintenance Window).
     *
     * @error InternalServerError   
     */
    describeMaintenanceWindowExecutions(params: SSM.DescribeMaintenanceWindowExecutionsRequest, callback?: (err: SSM.InternalServerError|any, data: SSM.DescribeMaintenanceWindowExecutionsResult|any) => void): Request<SSM.DescribeMaintenanceWindowExecutionsResult|any,SSM.InternalServerError|any>;
    /**
     * Lists the targets registered with the Maintenance Window.
     *
     * @error DoesNotExistException   
     * @error InternalServerError   
     */
    describeMaintenanceWindowTargets(params: SSM.DescribeMaintenanceWindowTargetsRequest, callback?: (err: SSM.DoesNotExistException|SSM.InternalServerError|any, data: SSM.DescribeMaintenanceWindowTargetsResult|any) => void): Request<SSM.DescribeMaintenanceWindowTargetsResult|any,SSM.DoesNotExistException|SSM.InternalServerError|any>;
    /**
     * Lists the tasks in a Maintenance Window.
     *
     * @error DoesNotExistException   
     * @error InternalServerError   
     */
    describeMaintenanceWindowTasks(params: SSM.DescribeMaintenanceWindowTasksRequest, callback?: (err: SSM.DoesNotExistException|SSM.InternalServerError|any, data: SSM.DescribeMaintenanceWindowTasksResult|any) => void): Request<SSM.DescribeMaintenanceWindowTasksResult|any,SSM.DoesNotExistException|SSM.InternalServerError|any>;
    /**
     * Retrieves the Maintenance Windows in an AWS account.
     *
     * @error InternalServerError   
     */
    describeMaintenanceWindows(params: SSM.DescribeMaintenanceWindowsRequest, callback?: (err: SSM.InternalServerError|any, data: SSM.DescribeMaintenanceWindowsResult|any) => void): Request<SSM.DescribeMaintenanceWindowsResult|any,SSM.InternalServerError|any>;
    /**
     * Get information about a parameter.
     *
     * @error InternalServerError   
     * @error InvalidFilterValue   
     * @error InvalidNextToken   
     */
    describeParameters(params: SSM.DescribeParametersRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidFilterValue|SSM.InvalidNextToken|any, data: SSM.DescribeParametersResult|any) => void): Request<SSM.DescribeParametersResult|any,SSM.InternalServerError|SSM.InvalidFilterValue|SSM.InvalidNextToken|any>;
    /**
     * Lists the patch baselines in your AWS account.
     *
     * @error InternalServerError   
     */
    describePatchBaselines(params: SSM.DescribePatchBaselinesRequest, callback?: (err: SSM.InternalServerError|any, data: SSM.DescribePatchBaselinesResult|any) => void): Request<SSM.DescribePatchBaselinesResult|any,SSM.InternalServerError|any>;
    /**
     * Returns high-level aggregated patch compliance state for a patch group.
     *
     * @error InternalServerError   
     * @error InvalidNextToken   
     */
    describePatchGroupState(params: SSM.DescribePatchGroupStateRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidNextToken|any, data: SSM.DescribePatchGroupStateResult|any) => void): Request<SSM.DescribePatchGroupStateResult|any,SSM.InternalServerError|SSM.InvalidNextToken|any>;
    /**
     * Lists all patch groups that have been registered with patch baselines.
     *
     * @error InternalServerError   
     */
    describePatchGroups(params: SSM.DescribePatchGroupsRequest, callback?: (err: SSM.InternalServerError|any, data: SSM.DescribePatchGroupsResult|any) => void): Request<SSM.DescribePatchGroupsResult|any,SSM.InternalServerError|any>;
    /**
     * Get detailed information about a particular Automation execution.
     *
     * @error AutomationExecutionNotFoundException   
     * @error InternalServerError   
     */
    getAutomationExecution(params: SSM.GetAutomationExecutionRequest, callback?: (err: SSM.AutomationExecutionNotFoundException|SSM.InternalServerError|any, data: SSM.GetAutomationExecutionResult|any) => void): Request<SSM.GetAutomationExecutionResult|any,SSM.AutomationExecutionNotFoundException|SSM.InternalServerError|any>;
    /**
     * Returns detailed information about command execution for an invocation or
plugin.
     *
     * @error InternalServerError   
     * @error InvalidCommandId   
     * @error InvalidInstanceId   
     * @error InvalidPluginName   
     * @error InvocationDoesNotExist   
     */
    getCommandInvocation(params: SSM.GetCommandInvocationRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidCommandId|SSM.InvalidInstanceId|SSM.InvalidPluginName|SSM.InvocationDoesNotExist|any, data: SSM.GetCommandInvocationResult|any) => void): Request<SSM.GetCommandInvocationResult|any,SSM.InternalServerError|SSM.InvalidCommandId|SSM.InvalidInstanceId|SSM.InvalidPluginName|SSM.InvocationDoesNotExist|any>;
    /**
     * Retrieves the default patch baseline.
     *
     * @error InternalServerError   
     */
    getDefaultPatchBaseline(params: SSM.GetDefaultPatchBaselineRequest, callback?: (err: SSM.InternalServerError|any, data: SSM.GetDefaultPatchBaselineResult|any) => void): Request<SSM.GetDefaultPatchBaselineResult|any,SSM.InternalServerError|any>;
    /**
     * Retrieves the current snapshot for the patch baseline the instance uses. This
API is primarily used by the AWS-ApplyPatchBaseline Systems Manager document.
     *
     * @error InternalServerError   
     */
    getDeployablePatchSnapshotForInstance(params: SSM.GetDeployablePatchSnapshotForInstanceRequest, callback?: (err: SSM.InternalServerError|any, data: SSM.GetDeployablePatchSnapshotForInstanceResult|any) => void): Request<SSM.GetDeployablePatchSnapshotForInstanceResult|any,SSM.InternalServerError|any>;
    /**
     * Gets the contents of the specified SSM document.
     *
     * @error InternalServerError   
     * @error InvalidDocument   
     * @error InvalidDocumentVersion   
     */
    getDocument(params: SSM.GetDocumentRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidDocumentVersion|any, data: SSM.GetDocumentResult|any) => void): Request<SSM.GetDocumentResult|any,SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidDocumentVersion|any>;
    /**
     * Query inventory information.
     *
     * @error InternalServerError   
     * @error InvalidFilter   
     * @error InvalidNextToken   
     * @error InvalidTypeNameException   
     * @error InvalidResultAttributeException   
     */
    getInventory(params: SSM.GetInventoryRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidFilter|SSM.InvalidNextToken|SSM.InvalidTypeNameException|SSM.InvalidResultAttributeException|any, data: SSM.GetInventoryResult|any) => void): Request<SSM.GetInventoryResult|any,SSM.InternalServerError|SSM.InvalidFilter|SSM.InvalidNextToken|SSM.InvalidTypeNameException|SSM.InvalidResultAttributeException|any>;
    /**
     * Return a list of inventory type names for the account, or return a list of
attribute names for a specific Inventory item type.
     *
     * @error InternalServerError   
     * @error InvalidTypeNameException   
     * @error InvalidNextToken   
     */
    getInventorySchema(params: SSM.GetInventorySchemaRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidTypeNameException|SSM.InvalidNextToken|any, data: SSM.GetInventorySchemaResult|any) => void): Request<SSM.GetInventorySchemaResult|any,SSM.InternalServerError|SSM.InvalidTypeNameException|SSM.InvalidNextToken|any>;
    /**
     * Retrieves a Maintenance Window.
     *
     * @error DoesNotExistException   
     * @error InternalServerError   
     */
    getMaintenanceWindow(params: SSM.GetMaintenanceWindowRequest, callback?: (err: SSM.DoesNotExistException|SSM.InternalServerError|any, data: SSM.GetMaintenanceWindowResult|any) => void): Request<SSM.GetMaintenanceWindowResult|any,SSM.DoesNotExistException|SSM.InternalServerError|any>;
    /**
     * Retrieves details about a specific task executed as part of a Maintenance Window
execution.
     *
     * @error DoesNotExistException   
     * @error InternalServerError   
     */
    getMaintenanceWindowExecution(params: SSM.GetMaintenanceWindowExecutionRequest, callback?: (err: SSM.DoesNotExistException|SSM.InternalServerError|any, data: SSM.GetMaintenanceWindowExecutionResult|any) => void): Request<SSM.GetMaintenanceWindowExecutionResult|any,SSM.DoesNotExistException|SSM.InternalServerError|any>;
    /**
     * Retrieves the details about a specific task executed as part of a Maintenance
Window execution.
     *
     * @error DoesNotExistException   
     * @error InternalServerError   
     */
    getMaintenanceWindowExecutionTask(params: SSM.GetMaintenanceWindowExecutionTaskRequest, callback?: (err: SSM.DoesNotExistException|SSM.InternalServerError|any, data: SSM.GetMaintenanceWindowExecutionTaskResult|any) => void): Request<SSM.GetMaintenanceWindowExecutionTaskResult|any,SSM.DoesNotExistException|SSM.InternalServerError|any>;
    /**
     * Query a list of all parameters used by the AWS account.
     *
     * @error InternalServerError   
     * @error ParameterNotFound   
     * @error InvalidNextToken   
     */
    getParameterHistory(params: SSM.GetParameterHistoryRequest, callback?: (err: SSM.InternalServerError|SSM.ParameterNotFound|SSM.InvalidNextToken|any, data: SSM.GetParameterHistoryResult|any) => void): Request<SSM.GetParameterHistoryResult|any,SSM.InternalServerError|SSM.ParameterNotFound|SSM.InvalidNextToken|any>;
    /**
     * Get a list of parameters used by the AWS account.&gt;
     *
     * @error InternalServerError   
     */
    getParameters(params: SSM.GetParametersRequest, callback?: (err: SSM.InternalServerError|any, data: SSM.GetParametersResult|any) => void): Request<SSM.GetParametersResult|any,SSM.InternalServerError|any>;
    /**
     * Retrieves information about a patch baseline.
     *
     * @error DoesNotExistException   
     * @error InvalidResourceId   
     * @error InternalServerError   
     */
    getPatchBaseline(params: SSM.GetPatchBaselineRequest, callback?: (err: SSM.DoesNotExistException|SSM.InvalidResourceId|SSM.InternalServerError|any, data: SSM.GetPatchBaselineResult|any) => void): Request<SSM.GetPatchBaselineResult|any,SSM.DoesNotExistException|SSM.InvalidResourceId|SSM.InternalServerError|any>;
    /**
     * Retrieves the patch baseline that should be used for the specified patch group.
     *
     * @error InternalServerError   
     */
    getPatchBaselineForPatchGroup(params: SSM.GetPatchBaselineForPatchGroupRequest, callback?: (err: SSM.InternalServerError|any, data: SSM.GetPatchBaselineForPatchGroupResult|any) => void): Request<SSM.GetPatchBaselineForPatchGroupResult|any,SSM.InternalServerError|any>;
    /**
     * Lists the associations for the specified SSM document or instance.
     *
     * @error InternalServerError   
     * @error InvalidNextToken   
     */
    listAssociations(params: SSM.ListAssociationsRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidNextToken|any, data: SSM.ListAssociationsResult|any) => void): Request<SSM.ListAssociationsResult|any,SSM.InternalServerError|SSM.InvalidNextToken|any>;
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
    listCommandInvocations(params: SSM.ListCommandInvocationsRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidCommandId|SSM.InvalidInstanceId|SSM.InvalidFilterKey|SSM.InvalidNextToken|any, data: SSM.ListCommandInvocationsResult|any) => void): Request<SSM.ListCommandInvocationsResult|any,SSM.InternalServerError|SSM.InvalidCommandId|SSM.InvalidInstanceId|SSM.InvalidFilterKey|SSM.InvalidNextToken|any>;
    /**
     * Lists the commands requested by users of the AWS account.
     *
     * @error InternalServerError   
     * @error InvalidCommandId   
     * @error InvalidInstanceId   
     * @error InvalidFilterKey   
     * @error InvalidNextToken   
     */
    listCommands(params: SSM.ListCommandsRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidCommandId|SSM.InvalidInstanceId|SSM.InvalidFilterKey|SSM.InvalidNextToken|any, data: SSM.ListCommandsResult|any) => void): Request<SSM.ListCommandsResult|any,SSM.InternalServerError|SSM.InvalidCommandId|SSM.InvalidInstanceId|SSM.InvalidFilterKey|SSM.InvalidNextToken|any>;
    /**
     * List all versions for a document.
     *
     * @error InternalServerError   
     * @error InvalidNextToken   
     * @error InvalidDocument   
     */
    listDocumentVersions(params: SSM.ListDocumentVersionsRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidNextToken|SSM.InvalidDocument|any, data: SSM.ListDocumentVersionsResult|any) => void): Request<SSM.ListDocumentVersionsResult|any,SSM.InternalServerError|SSM.InvalidNextToken|SSM.InvalidDocument|any>;
    /**
     * Describes one or more of your SSM documents.
     *
     * @error InternalServerError   
     * @error InvalidNextToken   
     * @error InvalidFilterKey   
     */
    listDocuments(params: SSM.ListDocumentsRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidNextToken|SSM.InvalidFilterKey|any, data: SSM.ListDocumentsResult|any) => void): Request<SSM.ListDocumentsResult|any,SSM.InternalServerError|SSM.InvalidNextToken|SSM.InvalidFilterKey|any>;
    /**
     * A list of inventory items returned by the request.
     *
     * @error InternalServerError   
     * @error InvalidInstanceId   
     * @error InvalidTypeNameException   
     * @error InvalidFilter   
     * @error InvalidNextToken   
     */
    listInventoryEntries(params: SSM.ListInventoryEntriesRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidInstanceId|SSM.InvalidTypeNameException|SSM.InvalidFilter|SSM.InvalidNextToken|any, data: SSM.ListInventoryEntriesResult|any) => void): Request<SSM.ListInventoryEntriesResult|any,SSM.InternalServerError|SSM.InvalidInstanceId|SSM.InvalidTypeNameException|SSM.InvalidFilter|SSM.InvalidNextToken|any>;
    /**
     * Returns a list of the tags assigned to the specified resource.
     *
     * @error InvalidResourceType   
     * @error InvalidResourceId   
     * @error InternalServerError   
     */
    listTagsForResource(params: SSM.ListTagsForResourceRequest, callback?: (err: SSM.InvalidResourceType|SSM.InvalidResourceId|SSM.InternalServerError|any, data: SSM.ListTagsForResourceResult|any) => void): Request<SSM.ListTagsForResourceResult|any,SSM.InvalidResourceType|SSM.InvalidResourceId|SSM.InternalServerError|any>;
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
    modifyDocumentPermission(params: SSM.ModifyDocumentPermissionRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidPermissionType|SSM.DocumentPermissionLimit|SSM.DocumentLimitExceeded|any, data: SSM.ModifyDocumentPermissionResponse|any) => void): Request<SSM.ModifyDocumentPermissionResponse|any,SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidPermissionType|SSM.DocumentPermissionLimit|SSM.DocumentLimitExceeded|any>;
    /**
     * Bulk update custom inventory items on one more instance. The request adds an
inventory item, if it doesn&#x27;t already exist, or updates an inventory item, if it
does exist.
     *
     * @error InternalServerError   
     * @error InvalidInstanceId   
     * @error InvalidTypeNameException   
     * @error InvalidItemContentException   
     * @error TotalSizeLimitExceededException   
     * @error ItemSizeLimitExceededException   
     * @error ItemContentMismatchException   
     * @error CustomSchemaCountLimitExceededException   
     * @error UnsupportedInventorySchemaVersionException   
     */
    putInventory(params: SSM.PutInventoryRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidInstanceId|SSM.InvalidTypeNameException|SSM.InvalidItemContentException|SSM.TotalSizeLimitExceededException|SSM.ItemSizeLimitExceededException|SSM.ItemContentMismatchException|SSM.CustomSchemaCountLimitExceededException|SSM.UnsupportedInventorySchemaVersionException|any, data: SSM.PutInventoryResult|any) => void): Request<SSM.PutInventoryResult|any,SSM.InternalServerError|SSM.InvalidInstanceId|SSM.InvalidTypeNameException|SSM.InvalidItemContentException|SSM.TotalSizeLimitExceededException|SSM.ItemSizeLimitExceededException|SSM.ItemContentMismatchException|SSM.CustomSchemaCountLimitExceededException|SSM.UnsupportedInventorySchemaVersionException|any>;
    /**
     * Add one or more paramaters to the system.
     *
     * @error InternalServerError   
     * @error InvalidKeyId   
     * @error ParameterLimitExceeded   
     * @error TooManyUpdates   
     * @error ParameterAlreadyExists   
     * @error UnsupportedParameterType   
     */
    putParameter(params: SSM.PutParameterRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidKeyId|SSM.ParameterLimitExceeded|SSM.TooManyUpdates|SSM.ParameterAlreadyExists|SSM.UnsupportedParameterType|any, data: SSM.PutParameterResult|any) => void): Request<SSM.PutParameterResult|any,SSM.InternalServerError|SSM.InvalidKeyId|SSM.ParameterLimitExceeded|SSM.TooManyUpdates|SSM.ParameterAlreadyExists|SSM.UnsupportedParameterType|any>;
    /**
     * Defines the default patch baseline.
     *
     * @error InvalidResourceId   
     * @error DoesNotExistException   
     * @error InternalServerError   
     */
    registerDefaultPatchBaseline(params: SSM.RegisterDefaultPatchBaselineRequest, callback?: (err: SSM.InvalidResourceId|SSM.DoesNotExistException|SSM.InternalServerError|any, data: SSM.RegisterDefaultPatchBaselineResult|any) => void): Request<SSM.RegisterDefaultPatchBaselineResult|any,SSM.InvalidResourceId|SSM.DoesNotExistException|SSM.InternalServerError|any>;
    /**
     * Registers a patch baseline for a patch group.
     *
     * @error AlreadyExistsException   
     * @error DoesNotExistException   
     * @error InvalidResourceId   
     * @error ResourceLimitExceededException   
     * @error InternalServerError   
     */
    registerPatchBaselineForPatchGroup(params: SSM.RegisterPatchBaselineForPatchGroupRequest, callback?: (err: SSM.AlreadyExistsException|SSM.DoesNotExistException|SSM.InvalidResourceId|SSM.ResourceLimitExceededException|SSM.InternalServerError|any, data: SSM.RegisterPatchBaselineForPatchGroupResult|any) => void): Request<SSM.RegisterPatchBaselineForPatchGroupResult|any,SSM.AlreadyExistsException|SSM.DoesNotExistException|SSM.InvalidResourceId|SSM.ResourceLimitExceededException|SSM.InternalServerError|any>;
    /**
     * Registers a target with a Maintenance Window.
     *
     * @error IdempotentParameterMismatch   
     * @error DoesNotExistException   
     * @error ResourceLimitExceededException   
     * @error InternalServerError   
     */
    registerTargetWithMaintenanceWindow(params: SSM.RegisterTargetWithMaintenanceWindowRequest, callback?: (err: SSM.IdempotentParameterMismatch|SSM.DoesNotExistException|SSM.ResourceLimitExceededException|SSM.InternalServerError|any, data: SSM.RegisterTargetWithMaintenanceWindowResult|any) => void): Request<SSM.RegisterTargetWithMaintenanceWindowResult|any,SSM.IdempotentParameterMismatch|SSM.DoesNotExistException|SSM.ResourceLimitExceededException|SSM.InternalServerError|any>;
    /**
     * Adds a new task to a Maintenance Window.
     *
     * @error IdempotentParameterMismatch   
     * @error DoesNotExistException   
     * @error ResourceLimitExceededException   
     * @error InternalServerError   
     */
    registerTaskWithMaintenanceWindow(params: SSM.RegisterTaskWithMaintenanceWindowRequest, callback?: (err: SSM.IdempotentParameterMismatch|SSM.DoesNotExistException|SSM.ResourceLimitExceededException|SSM.InternalServerError|any, data: SSM.RegisterTaskWithMaintenanceWindowResult|any) => void): Request<SSM.RegisterTaskWithMaintenanceWindowResult|any,SSM.IdempotentParameterMismatch|SSM.DoesNotExistException|SSM.ResourceLimitExceededException|SSM.InternalServerError|any>;
    /**
     * Removes all tags from the specified resource.
     *
     * @error InvalidResourceType   
     * @error InvalidResourceId   
     * @error InternalServerError   
     */
    removeTagsFromResource(params: SSM.RemoveTagsFromResourceRequest, callback?: (err: SSM.InvalidResourceType|SSM.InvalidResourceId|SSM.InternalServerError|any, data: SSM.RemoveTagsFromResourceResult|any) => void): Request<SSM.RemoveTagsFromResourceResult|any,SSM.InvalidResourceType|SSM.InvalidResourceId|SSM.InternalServerError|any>;
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
    sendCommand(params: SSM.SendCommandRequest, callback?: (err: SSM.DuplicateInstanceId|SSM.InternalServerError|SSM.InvalidInstanceId|SSM.InvalidDocument|SSM.InvalidOutputFolder|SSM.InvalidParameters|SSM.UnsupportedPlatformType|SSM.MaxDocumentSizeExceeded|SSM.InvalidRole|SSM.InvalidNotificationConfig|any, data: SSM.SendCommandResult|any) => void): Request<SSM.SendCommandResult|any,SSM.DuplicateInstanceId|SSM.InternalServerError|SSM.InvalidInstanceId|SSM.InvalidDocument|SSM.InvalidOutputFolder|SSM.InvalidParameters|SSM.UnsupportedPlatformType|SSM.MaxDocumentSizeExceeded|SSM.InvalidRole|SSM.InvalidNotificationConfig|any>;
    /**
     * Initiates execution of an Automation document.
     *
     * @error AutomationDefinitionNotFoundException   
     * @error InvalidAutomationExecutionParametersException   
     * @error AutomationExecutionLimitExceededException   
     * @error AutomationDefinitionVersionNotFoundException   
     * @error InternalServerError   
     */
    startAutomationExecution(params: SSM.StartAutomationExecutionRequest, callback?: (err: SSM.AutomationDefinitionNotFoundException|SSM.InvalidAutomationExecutionParametersException|SSM.AutomationExecutionLimitExceededException|SSM.AutomationDefinitionVersionNotFoundException|SSM.InternalServerError|any, data: SSM.StartAutomationExecutionResult|any) => void): Request<SSM.StartAutomationExecutionResult|any,SSM.AutomationDefinitionNotFoundException|SSM.InvalidAutomationExecutionParametersException|SSM.AutomationExecutionLimitExceededException|SSM.AutomationDefinitionVersionNotFoundException|SSM.InternalServerError|any>;
    /**
     * Stop an Automation that is currently executing.
     *
     * @error AutomationExecutionNotFoundException   
     * @error InternalServerError   
     */
    stopAutomationExecution(params: SSM.StopAutomationExecutionRequest, callback?: (err: SSM.AutomationExecutionNotFoundException|SSM.InternalServerError|any, data: SSM.StopAutomationExecutionResult|any) => void): Request<SSM.StopAutomationExecutionResult|any,SSM.AutomationExecutionNotFoundException|SSM.InternalServerError|any>;
    /**
     * Updates an association. You can only update the document version, schedule,
parameters, and Amazon S3 output of an association.
     *
     * @error InternalServerError   
     * @error InvalidSchedule   
     * @error InvalidParameters   
     * @error InvalidOutputLocation   
     * @error InvalidDocumentVersion   
     * @error AssociationDoesNotExist   
     * @error InvalidUpdate   
     * @error TooManyUpdates   
     */
    updateAssociation(params: SSM.UpdateAssociationRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidSchedule|SSM.InvalidParameters|SSM.InvalidOutputLocation|SSM.InvalidDocumentVersion|SSM.AssociationDoesNotExist|SSM.InvalidUpdate|SSM.TooManyUpdates|any, data: SSM.UpdateAssociationResult|any) => void): Request<SSM.UpdateAssociationResult|any,SSM.InternalServerError|SSM.InvalidSchedule|SSM.InvalidParameters|SSM.InvalidOutputLocation|SSM.InvalidDocumentVersion|SSM.AssociationDoesNotExist|SSM.InvalidUpdate|SSM.TooManyUpdates|any>;
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
    updateAssociationStatus(params: SSM.UpdateAssociationStatusRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidInstanceId|SSM.InvalidDocument|SSM.AssociationDoesNotExist|SSM.StatusUnchanged|SSM.TooManyUpdates|any, data: SSM.UpdateAssociationStatusResult|any) => void): Request<SSM.UpdateAssociationStatusResult|any,SSM.InternalServerError|SSM.InvalidInstanceId|SSM.InvalidDocument|SSM.AssociationDoesNotExist|SSM.StatusUnchanged|SSM.TooManyUpdates|any>;
    /**
     * The document you want to update.
     *
     * @error MaxDocumentSizeExceeded   
     * @error DocumentVersionLimitExceeded   
     * @error InternalServerError   
     * @error DuplicateDocumentContent   
     * @error InvalidDocumentContent   
     * @error InvalidDocumentVersion   
     * @error InvalidDocumentSchemaVersion   
     * @error InvalidDocument   
     */
    updateDocument(params: SSM.UpdateDocumentRequest, callback?: (err: SSM.MaxDocumentSizeExceeded|SSM.DocumentVersionLimitExceeded|SSM.InternalServerError|SSM.DuplicateDocumentContent|SSM.InvalidDocumentContent|SSM.InvalidDocumentVersion|SSM.InvalidDocumentSchemaVersion|SSM.InvalidDocument|any, data: SSM.UpdateDocumentResult|any) => void): Request<SSM.UpdateDocumentResult|any,SSM.MaxDocumentSizeExceeded|SSM.DocumentVersionLimitExceeded|SSM.InternalServerError|SSM.DuplicateDocumentContent|SSM.InvalidDocumentContent|SSM.InvalidDocumentVersion|SSM.InvalidDocumentSchemaVersion|SSM.InvalidDocument|any>;
    /**
     * Set the default version of a document.
     *
     * @error InternalServerError   
     * @error InvalidDocument   
     * @error InvalidDocumentVersion   
     * @error InvalidDocumentSchemaVersion   
     */
    updateDocumentDefaultVersion(params: SSM.UpdateDocumentDefaultVersionRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidDocumentVersion|SSM.InvalidDocumentSchemaVersion|any, data: SSM.UpdateDocumentDefaultVersionResult|any) => void): Request<SSM.UpdateDocumentDefaultVersionResult|any,SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidDocumentVersion|SSM.InvalidDocumentSchemaVersion|any>;
    /**
     * Updates an existing Maintenance Window. Only specified parameters are modified.
     *
     * @error DoesNotExistException   
     * @error InternalServerError   
     */
    updateMaintenanceWindow(params: SSM.UpdateMaintenanceWindowRequest, callback?: (err: SSM.DoesNotExistException|SSM.InternalServerError|any, data: SSM.UpdateMaintenanceWindowResult|any) => void): Request<SSM.UpdateMaintenanceWindowResult|any,SSM.DoesNotExistException|SSM.InternalServerError|any>;
    /**
     * Assigns or changes an Amazon Identity and Access Management (IAM) role to the
managed instance.
     *
     * @error InvalidInstanceId   
     * @error InternalServerError   
     */
    updateManagedInstanceRole(params: SSM.UpdateManagedInstanceRoleRequest, callback?: (err: SSM.InvalidInstanceId|SSM.InternalServerError|any, data: SSM.UpdateManagedInstanceRoleResult|any) => void): Request<SSM.UpdateManagedInstanceRoleResult|any,SSM.InvalidInstanceId|SSM.InternalServerError|any>;
    /**
     * Modifies an existing patch baseline. Fields not specified in the request are
left unchanged.
     *
     * @error DoesNotExistException   
     * @error InternalServerError   
     */
    updatePatchBaseline(params: SSM.UpdatePatchBaselineRequest, callback?: (err: SSM.DoesNotExistException|SSM.InternalServerError|any, data: SSM.UpdatePatchBaselineResult|any) => void): Request<SSM.UpdatePatchBaselineResult|any,SSM.DoesNotExistException|SSM.InternalServerError|any>;

  }

  export module SSM {
    
    export type AccountId = string;
    
    export type AccountIdList = AccountId[];
    
    export type ActivationCode = string;
    
    export type ActivationDescription = string;
    
    export type ActivationId = string;
    
    export type ActivationList = Activation[];
    
    export type AgentErrorCode = string;
    
    export type ApproveAfterDays = number;
    
    export type AssociationDescriptionList = AssociationDescription[];
    
    export type AssociationFilterKey = string;
    
    export type AssociationFilterList = AssociationFilter[];
    
    export type AssociationFilterValue = string;
    
    export type AssociationId = string;
    
    export type AssociationList = Association[];
    
    export type AssociationStatusAggregatedCount = {[key:string]: InstanceCount};
    
    export type AssociationStatusName = string;
    
    export type AttributeName = string;
    
    export type AttributeValue = string;
    
    export type AutomationActionName = string;
    
    export type AutomationExecutionFilterKey = string;
    
    export type AutomationExecutionFilterList = AutomationExecutionFilter[];
    
    export type AutomationExecutionFilterValue = string;
    
    export type AutomationExecutionFilterValueList = AutomationExecutionFilterValue[];
    
    export type AutomationExecutionId = string;
    
    export type AutomationExecutionMetadataList = AutomationExecutionMetadata[];
    
    export type AutomationExecutionStatus = string;
    
    export type AutomationParameterKey = string;
    
    export type AutomationParameterMap = {[key:string]: AutomationParameterValueList};
    
    export type AutomationParameterValue = string;
    
    export type AutomationParameterValueList = AutomationParameterValue[];
    
    export type BaselineDescription = string;
    
    export type BaselineId = string;
    
    export type BaselineName = string;
    
    export type BatchErrorMessage = string;
    
    export type Boolean = boolean;
    
    export type ClientToken = string;
    
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
    
    export type CompletedCount = number;
    
    export type ComputerName = string;
    
    export type CreateAssociationBatchRequestEntries = CreateAssociationBatchRequestEntry[];
    
    export type CreatedDate = number;
    
    export type DateTime = number;
    
    export type DefaultBaseline = boolean;
    
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
    
    export type DocumentSchemaVersion = string;
    
    export type DocumentSha1 = string;
    
    export type DocumentStatus = string;
    
    export type DocumentType = string;
    
    export type DocumentVersion = string;
    
    export type DocumentVersionList = DocumentVersionInfo[];
    
    export type DocumentVersionNumber = string;
    
    export type EffectiveInstanceAssociationMaxResults = number;
    
    export type EffectivePatchList = EffectivePatch[];
    
    export type ErrorCount = number;
    
    export type ExpirationDate = number;
    
    export type FailedCreateAssociationList = FailedCreateAssociation[];
    
    export type Fault = string;
    
    export type GetInventorySchemaMaxResults = number;
    
    export type IPAddress = string;
    
    export type IamRole = string;
    
    export type InstanceAssociationExecutionSummary = string;
    
    export type InstanceAssociationList = InstanceAssociation[];
    
    export type InstanceAssociationStatusAggregatedCount = {[key:string]: InstanceCount};
    
    export type InstanceAssociationStatusInfos = InstanceAssociationStatusInfo[];
    
    export type InstanceCount = number;
    
    export type InstanceId = string;
    
    export type InstanceIdList = InstanceId[];
    
    export type InstanceInformationFilterKey = string;
    
    export type InstanceInformationFilterList = InstanceInformationFilter[];
    
    export type InstanceInformationFilterValue = string;
    
    export type InstanceInformationFilterValueSet = InstanceInformationFilterValue[];
    
    export type InstanceInformationList = InstanceInformation[];
    
    export type InstanceInformationStringFilterKey = string;
    
    export type InstanceInformationStringFilterList = InstanceInformationStringFilter[];
    
    export type InstancePatchStateFilterKey = string;
    
    export type InstancePatchStateFilterList = InstancePatchStateFilter[];
    
    export type InstancePatchStateFilterValue = string;
    
    export type InstancePatchStateFilterValues = InstancePatchStateFilterValue[];
    
    export type InstancePatchStateList = InstancePatchState[];
    
    export type InstancePatchStateOperatorType = string;
    
    export type InstancePatchStatesList = InstancePatchState[];
    
    export type InstanceTagName = string;
    
    export type Integer = number;
    
    export type InventoryAttributeDataType = string;
    
    export type InventoryFilterKey = string;
    
    export type InventoryFilterList = InventoryFilter[];
    
    export type InventoryFilterValue = string;
    
    export type InventoryFilterValueList = InventoryFilterValue[];
    
    export type InventoryItemAttributeList = InventoryItemAttribute[];
    
    export type InventoryItemAttributeName = string;
    
    export type InventoryItemCaptureTime = string;
    
    export type InventoryItemContentHash = string;
    
    export type InventoryItemEntry = {[key:string]: AttributeValue};
    
    export type InventoryItemEntryList = InventoryItemEntry[];
    
    export type InventoryItemList = InventoryItem[];
    
    export type InventoryItemSchemaResultList = InventoryItemSchema[];
    
    export type InventoryItemSchemaVersion = string;
    
    export type InventoryItemTypeName = string;
    
    export type InventoryItemTypeNameFilter = string;
    
    export type InventoryQueryOperatorType = string;
    
    export type InventoryResultEntityId = string;
    
    export type InventoryResultEntityList = InventoryResultEntity[];
    
    export type InventoryResultItemKey = string;
    
    export type InventoryResultItemMap = {[key:string]: InventoryResultItem};
    
    export type InvocationTraceOutput = string;
    
    export type KeyList = TagKey[];
    
    export type MaintenanceWindowAllowUnassociatedTargets = boolean;
    
    export type MaintenanceWindowCutoff = number;
    
    export type MaintenanceWindowDurationHours = number;
    
    export type MaintenanceWindowEnabled = boolean;
    
    export type MaintenanceWindowExecutionId = string;
    
    export type MaintenanceWindowExecutionList = MaintenanceWindowExecution[];
    
    export type MaintenanceWindowExecutionStatus = string;
    
    export type MaintenanceWindowExecutionStatusDetails = string;
    
    export type MaintenanceWindowExecutionTaskExecutionId = string;
    
    export type MaintenanceWindowExecutionTaskId = string;
    
    export type MaintenanceWindowExecutionTaskIdList = MaintenanceWindowExecutionTaskId[];
    
    export type MaintenanceWindowExecutionTaskIdentityList = MaintenanceWindowExecutionTaskIdentity[];
    
    export type MaintenanceWindowExecutionTaskInvocationId = string;
    
    export type MaintenanceWindowExecutionTaskInvocationIdentityList = MaintenanceWindowExecutionTaskInvocationIdentity[];
    
    export type MaintenanceWindowExecutionTaskInvocationParameters = string;
    
    export type MaintenanceWindowFilterKey = string;
    
    export type MaintenanceWindowFilterList = MaintenanceWindowFilter[];
    
    export type MaintenanceWindowFilterValue = string;
    
    export type MaintenanceWindowFilterValues = MaintenanceWindowFilterValue[];
    
    export type MaintenanceWindowId = string;
    
    export type MaintenanceWindowIdentityList = MaintenanceWindowIdentity[];
    
    export type MaintenanceWindowMaxResults = number;
    
    export type MaintenanceWindowName = string;
    
    export type MaintenanceWindowResourceType = string;
    
    export type MaintenanceWindowSchedule = string;
    
    export type MaintenanceWindowTargetId = string;
    
    export type MaintenanceWindowTargetList = MaintenanceWindowTarget[];
    
    export type MaintenanceWindowTaskArn = string;
    
    export type MaintenanceWindowTaskId = string;
    
    export type MaintenanceWindowTaskList = MaintenanceWindowTask[];
    
    export type MaintenanceWindowTaskParameterName = string;
    
    export type MaintenanceWindowTaskParameterValue = string;
    
    export type MaintenanceWindowTaskParameterValueList = MaintenanceWindowTaskParameterValue[];
    
    export type MaintenanceWindowTaskParameters = {[key:string]: MaintenanceWindowTaskParameterValueExpression};
    
    export type MaintenanceWindowTaskParametersList = MaintenanceWindowTaskParameters[];
    
    export type MaintenanceWindowTaskPriority = number;
    
    export type MaintenanceWindowTaskTargetId = string;
    
    export type MaintenanceWindowTaskType = string;
    
    export type ManagedInstanceId = string;
    
    export type MaxResults = number;
    
    export type MaxResultsEC2Compatible = number;
    
    export type NextToken = string;
    
    export type NormalStringMap = {[key:string]: String};
    
    export type NotificationArn = string;
    
    export type NotificationEvent = string;
    
    export type NotificationEventList = NotificationEvent[];
    
    export type NotificationType = string;
    
    export type OwnerInformation = string;
    
    export type PSParameterName = string;
    
    export type PSParameterValue = string;
    
    export type ParameterDescription = string;
    
    export type ParameterHistoryList = ParameterHistory[];
    
    export type ParameterKeyId = string;
    
    export type ParameterList = Parameter[];
    
    export type ParameterMetadataList = ParameterMetadata[];
    
    export type ParameterName = string;
    
    export type ParameterNameList = PSParameterName[];
    
    export type ParameterType = string;
    
    export type ParameterValue = string;
    
    export type ParameterValueList = ParameterValue[];
    
    export type Parameters = {[key:string]: ParameterValueList};
    
    export type ParametersFilterKey = string;
    
    export type ParametersFilterList = ParametersFilter[];
    
    export type ParametersFilterValue = string;
    
    export type ParametersFilterValueList = ParametersFilterValue[];
    
    export type PatchBaselineIdentityList = PatchBaselineIdentity[];
    
    export type PatchBaselineMaxResults = number;
    
    export type PatchClassification = string;
    
    export type PatchComplianceDataList = PatchComplianceData[];
    
    export type PatchComplianceDataState = string;
    
    export type PatchComplianceMaxResults = number;
    
    export type PatchContentUrl = string;
    
    export type PatchDeploymentStatus = string;
    
    export type PatchDescription = string;
    
    export type PatchFailedCount = number;
    
    export type PatchFilterKey = string;
    
    export type PatchFilterList = PatchFilter[];
    
    export type PatchFilterValue = string;
    
    export type PatchFilterValueList = PatchFilterValue[];
    
    export type PatchGroup = string;
    
    export type PatchGroupList = PatchGroup[];
    
    export type PatchGroupPatchBaselineMappingList = PatchGroupPatchBaselineMapping[];
    
    export type PatchId = string;
    
    export type PatchIdList = PatchId[];
    
    export type PatchInstalledCount = number;
    
    export type PatchInstalledOtherCount = number;
    
    export type PatchInstalledTime = number;
    
    export type PatchKbNumber = string;
    
    export type PatchLanguage = string;
    
    export type PatchList = Patch[];
    
    export type PatchMissingCount = number;
    
    export type PatchMsrcNumber = string;
    
    export type PatchMsrcSeverity = string;
    
    export type PatchNotApplicableCount = number;
    
    export type PatchOperationEndTime = number;
    
    export type PatchOperationStartTime = number;
    
    export type PatchOperationType = string;
    
    export type PatchOrchestratorFilterKey = string;
    
    export type PatchOrchestratorFilterList = PatchOrchestratorFilter[];
    
    export type PatchOrchestratorFilterValue = string;
    
    export type PatchOrchestratorFilterValues = PatchOrchestratorFilterValue[];
    
    export type PatchProduct = string;
    
    export type PatchProductFamily = string;
    
    export type PatchRuleList = PatchRule[];
    
    export type PatchSeverity = string;
    
    export type PatchTitle = string;
    
    export type PatchVendor = string;
    
    export type PingStatus = string;
    
    export type PlatformType = string;
    
    export type PlatformTypeList = PlatformType[];
    
    export type RegistrationLimit = number;
    
    export type RegistrationsCount = number;
    
    export type ResourceId = string;
    
    export type ResourceType = string;
    
    export type ResourceTypeForTagging = string;
    
    export type ResponseCode = number;
    
    export type ResultAttributeList = ResultAttribute[];
    
    export type S3BucketName = string;
    
    export type S3KeyPrefix = string;
    
    export type S3Region = string;
    
    export type ScheduleExpression = string;
    
    export type ServiceRole = string;
    
    export type SnapshotDownloadUrl = string;
    
    export type SnapshotId = string;
    
    export type StandardErrorContent = string;
    
    export type StandardOutputContent = string;
    
    export type StatusAdditionalInfo = string;
    
    export type StatusDetails = string;
    
    export type StatusMessage = string;
    
    export type StatusName = string;
    
    export type StepExecutionList = StepExecution[];
    
    export type String = string;
    
    export type StringDateTime = string;
    
    export type StringList = String[];
    
    export type TagKey = string;
    
    export type TagList = Tag[];
    
    export type TagValue = string;
    
    export type TargetCount = number;
    
    export type TargetKey = string;
    
    export type TargetValue = string;
    
    export type TargetValues = TargetValue[];
    
    export type Targets = Target[];
    
    export type TimeoutSeconds = number;
    
    export type Url = string;
    
    export type VelocityConstraint = string;
    
    export type Version = string;

    export interface Activation {
        /** The ID created by Systems Manager when you submitted the activation. **/
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
        /** One or more tags. The value parameter is required, but if you don&#x27;t want the tag
to have a value, specify the parameter with no value, and we set the value to an
empty string. **/
        Tags: TagList;
    }
    export interface AddTagsToResourceResult {
    }
    export interface AlreadyExistsException {
        Message?: String;
    }
    export interface AssociatedInstances {
    }
    export interface Association {
        /** The name of the SSM document. **/
        Name?: DocumentName;
        /** The ID of the instance. **/
        InstanceId?: InstanceId;
        /** The ID created by the system when you create an association. An association is a
binding between a document and a set of targets with a schedule. **/
        AssociationId?: AssociationId;
        /** The version of the document used in the association. **/
        DocumentVersion?: DocumentVersion;
        /** The instances targeted by the request to create an association. **/
        Targets?: Targets;
        /** The date on which the association was last run. **/
        LastExecutionDate?: DateTime;
        /** Information about the association. **/
        Overview?: AssociationOverview;
        /** A cron expression that specifies a schedule when the association runs. **/
        ScheduleExpression?: ScheduleExpression;
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
        /** The date when the association was last updated. **/
        LastUpdateAssociationDate?: DateTime;
        /** The association status. **/
        Status?: AssociationStatus;
        /** Information about the association. **/
        Overview?: AssociationOverview;
        /** The document version. **/
        DocumentVersion?: DocumentVersion;
        /** A description of the parameters for a document. **/
        Parameters?: Parameters;
        /** The association ID. **/
        AssociationId?: AssociationId;
        /** The instances targeted by the request. **/
        Targets?: Targets;
        /** A cron expression that specifies a schedule when the association runs. **/
        ScheduleExpression?: ScheduleExpression;
        /** An Amazon S3 bucket where you want to store the output details of the request. **/
        OutputLocation?: InstanceAssociationOutputLocation;
        /** The date on which the association was last run. **/
        LastExecutionDate?: DateTime;
        /** The last date on which the association was successfully run. **/
        LastSuccessfulExecutionDate?: DateTime;
    }
    export interface AssociationDoesNotExist {
        Message?: String;
    }
    export interface AssociationFilter {
        /** The name of the filter. **/
        key: AssociationFilterKey;
        /** The filter value. **/
        value: AssociationFilterValue;
    }
    export interface AssociationLimitExceeded {
    }
    export interface AssociationOverview {
        /** The status of the association. Status can be: Pending , Success , or Failed . **/
        Status?: StatusName;
        /** A detailed status of the association. **/
        DetailedStatus?: StatusName;
        /** Returns the number of targets for the association status. For example, if you
created an association with two instances, and one of them was successful, this
would return the count of instances by status. **/
        AssociationStatusAggregatedCount?: AssociationStatusAggregatedCount;
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
    export interface AutomationDefinitionNotFoundException {
        Message?: String;
    }
    export interface AutomationDefinitionVersionNotFoundException {
        Message?: String;
    }
    export interface AutomationExecution {
        /** The execution ID. **/
        AutomationExecutionId?: AutomationExecutionId;
        /** The name of the Automation document used during the execution. **/
        DocumentName?: DocumentName;
        /** The version of the document to use during execution. **/
        DocumentVersion?: DocumentVersion;
        /** The time the execution started. **/
        ExecutionStartTime?: DateTime;
        /** The time the execution finished. **/
        ExecutionEndTime?: DateTime;
        /** The execution status of the Automation. **/
        AutomationExecutionStatus?: AutomationExecutionStatus;
        /** A list of details about the current state of all steps that comprise an
execution. An Automation document contains a list of steps that are executed in
order. **/
        StepExecutions?: StepExecutionList;
        /** The key-value map of execution parameters, which were supplied when calling 
StartAutomationExecution . **/
        Parameters?: AutomationParameterMap;
        /** The list of execution outputs as defined in the automation document. **/
        Outputs?: AutomationParameterMap;
        /** A message describing why an execution has failed, if the status is set to
Failed. **/
        FailureMessage?: String;
    }
    export interface AutomationExecutionFilter {
        /** The aspect of the Automation execution information that should be limited. **/
        Key: AutomationExecutionFilterKey;
        /** The values used to limit the execution information associated with the filter&#x27;s
key. **/
        Values: AutomationExecutionFilterValueList;
    }
    export interface AutomationExecutionLimitExceededException {
        Message?: String;
    }
    export interface AutomationExecutionMetadata {
        /** The execution ID. **/
        AutomationExecutionId?: AutomationExecutionId;
        /** The name of the Automation document used during execution. **/
        DocumentName?: DocumentName;
        /** The document version used during the execution. **/
        DocumentVersion?: DocumentVersion;
        /** The status of the execution. Valid values include: Running, Succeeded, Failed,
Timed out, or Cancelled. **/
        AutomationExecutionStatus?: AutomationExecutionStatus;
        /** The time the execution started.&gt; **/
        ExecutionStartTime?: DateTime;
        /** The time the execution finished. This is not populated if the execution is still
in progress. **/
        ExecutionEndTime?: DateTime;
        /** The IAM role ARN of the user who executed the Automation. **/
        ExecutedBy?: String;
        /** An Amazon S3 bucket where execution information is stored. **/
        LogFile?: String;
        /** The list of execution outputs as defined in the Automation document. **/
        Outputs?: AutomationParameterMap;
    }
    export interface AutomationExecutionNotFoundException {
        Message?: String;
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
        /** An array of search criteria that targets instances using a Key ; Value 
combination that you specify. Targets is required if you don&#x27;t provide one or
more instance IDs in the call. **/
        Targets?: Targets;
        /** The date and time the command was requested. **/
        RequestedDateTime?: DateTime;
        /** The status of the command. **/
        Status?: CommandStatus;
        /** A detailed status of the command execution. StatusDetails includes more
information than Status because it includes states resulting from error and
concurrency control parameters. StatusDetails can show different results than 
Status . For more information about these statuses, see Monitor Commands
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitor-commands.html] 
(Linux) or Monitor Commands
[http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/monitor-commands.html] 
(Windows). StatusDetails can be one of the following values:

 &amp;#42; Pending – The command has not been sent to any instances.
   
   
 * In Progress – The command has been sent to at least one instance but has not
   reached a final state on all instances.
   
   
 * Success – The command successfully executed on all invocations. This is a
   terminal state.
   
   
 * Delivery Timed Out – The value of MaxErrors or more command invocations shows
   a status of Delivery Timed Out . This is a terminal state.
   
   
 * Execution Timed Out – The value of MaxErrors or more command invocations
   shows a status of Execution Timed Out . This is a terminal state.
   
   
 * Failed – The value of MaxErrors or more command invocations shows a status of 
   Failed . This is a terminal state.
   
   
 * Incomplete – The command was attempted on all instances and one or more
   invocations does not have a value of Success but not enough invocations
   failed for the status to be Failed . This is a terminal state.
   
   
 * Canceled – The command was terminated before it was completed. This is a
   terminal state.
   
   
 * Rate Exceeded – The number of instances targeted by the command exceeded the
   account limit for pending invocations. The system has canceled the command
   before executing it on any instance. This is a terminal state. **/
        StatusDetails?: StatusDetails;
        /** The region where the Amazon Simple Storage Service (Amazon S3) output bucket is
located. The default value is the region where Run Command is being called. **/
        OutputS3Region?: S3Region;
        /** The S3 bucket where the responses to the command executions should be stored.
This was requested when issuing the command. **/
        OutputS3BucketName?: S3BucketName;
        /** The S3 directory path inside the bucket where the responses to the command
executions should be stored. This was requested when issuing the command. **/
        OutputS3KeyPrefix?: S3KeyPrefix;
        /** The maximum number of instances that are allowed to execute the command at the
same time. You can specify a number of instances, such as 10, or a percentage of
instances, such as 10%. The default value is 50. For more information about how
to use MaxConcurrency , see Executing a Command Using Amazon EC2 Run Command
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/run-command.html] (Linux) or 
Executing a Command Using Amazon EC2 Run Command
[http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/run-command.html] 
(Windows). **/
        MaxConcurrency?: VelocityConstraint;
        /** The maximum number of errors allowed before the system stops sending the command
to additional targets. You can specify a number of errors, such as 10, or a
percentage or errors, such as 10%. The default value is 50. For more information
about how to use MaxErrors , see Executing a Command Using Amazon EC2 Run
Command [http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/run-command.html] 
(Linux) or Executing a Command Using Amazon EC2 Run Command
[http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/run-command.html] 
(Windows). **/
        MaxErrors?: VelocityConstraint;
        /** The number of targets for the command. **/
        TargetCount?: TargetCount;
        /** The number of targets for which the command invocation reached a terminal state.
Terminal states include the following: Success , Failed , Execution Timed Out , 
Delivery Timed Out , Canceled , Terminated , or Undeliverable . **/
        CompletedCount?: CompletedCount;
        /** The number of targets for which the status is Failed or Execution Timed Out . **/
        ErrorCount?: ErrorCount;
        /** The IAM service role that Run Command uses to act on your behalf when sending
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
        /** The name of the invocation target. For Amazon EC2 instances this is the value
for the aws:Name tag. For on-premises instances, this is the name of the
instance. **/
        InstanceName?: InstanceTagName;
        /** User-specified information about the command, such as a brief description of
what the command should do. **/
        Comment?: Comment;
        /** The document name that was requested for execution. **/
        DocumentName?: DocumentName;
        /** The time and date the request was sent to this instance. **/
        RequestedDateTime?: DateTime;
        /** Whether or not the invocation succeeded, failed, or is pending. **/
        Status?: CommandInvocationStatus;
        /** A detailed status of the command execution for each invocation (each instance
targeted by the command). StatusDetails includes more information than Status 
because it includes states resulting from error and concurrency control
parameters. StatusDetails can show different results than Status . For more
information about these statuses, see Monitor Commands
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitor-commands.html] 
(Linux) or Monitor Commands
[http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/monitor-commands.html] 
(Windows). StatusDetails can be one of the following values:

 &amp;#42; Pending – The command has not been sent to the instance.
   
   
 * In Progress – The command has been sent to the instance but has not reached a
   terminal state.
   
   
 * Success – The execution of the command or plugin was successfully completed.
   This is a terminal state.
   
   
 * Delivery Timed Out – The command was not delivered to the instance before the
   delivery timeout expired. Delivery timeouts do not count against the parent
   command’s MaxErrors limit, but they do contribute to whether the parent
   command status is Success or Incomplete . This is a terminal state.
   
   
 * Execution Timed Out – Command execution started on the instance, but the
   execution was not complete before the execution timeout expired. Execution
   timeouts count against the MaxErrors limit of the parent command. This is a
   terminal state.
   
   
 * Failed – The command was not successful on the instance. For a plugin, this
   indicates that the result code was not zero. For a command invocation, this
   indicates that the result code for one or more plugins was not zero.
   Invocation failures count against the MaxErrors limit of the parent command.
   This is a terminal state.
   
   
 * Canceled – The command was terminated before it was completed. This is a
   terminal state.
   
   
 * Undeliverable – The command can&#x27;t be delivered to the instance. The instance
   might not exist or might not be responding. Undeliverable invocations don&#x27;t
   count against the parent command’s MaxErrors limit and don&#x27;t contribute to
   whether the parent command status is Success or Incomplete . This is a
   terminal state.
   
   
 * Terminated – The parent command exceeded its MaxErrors limit and subsequent
   command invocations were canceled by the system. This is a terminal state. **/
        StatusDetails?: StatusDetails;
        /** Gets the trace output sent by the agent. **/
        TraceOutput?: InvocationTraceOutput;
        /** The URL to the plugin’s StdOut file in Amazon S3, if the Amazon S3 bucket was
defined for the parent command. For an invocation, StandardOutputUrl is
populated if there is just one plugin defined for the command, and the Amazon S3
bucket was defined for the command. **/
        StandardOutputUrl?: Url;
        /** The URL to the plugin’s StdErr file in Amazon S3, if the Amazon S3 bucket was
defined for the parent command. For an invocation, StandardErrorUrl is populated
if there is just one plugin defined for the command, and the Amazon S3 bucket
was defined for the command. **/
        StandardErrorUrl?: Url;
        CommandPlugins?: CommandPluginList;
        /** The IAM service role that Run Command uses to act on your behalf when sending
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
        /** A detailed status of the plugin execution. StatusDetails includes more
information than Status because it includes states resulting from error and
concurrency control parameters. StatusDetails can show different results than 
Status . For more information about these statuses, see Monitor Commands
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitor-commands.html] 
(Linux) or Monitor Commands
[http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/monitor-commands.html] 
(Windows). StatusDetails can be one of the following values:

 &amp;#42; Pending – The command has not been sent to the instance.
   
   
 * In Progress – The command has been sent to the instance but has not reached a
   terminal state.
   
   
 * Success – The execution of the command or plugin was successfully completed.
   This is a terminal state.
   
   
 * Delivery Timed Out – The command was not delivered to the instance before the
   delivery timeout expired. Delivery timeouts do not count against the parent
   command’s MaxErrors limit, but they do contribute to whether the parent
   command status is Success or Incomplete . This is a terminal state.
   
   
 * Execution Timed Out – Command execution started on the instance, but the
   execution was not complete before the execution timeout expired. Execution
   timeouts count against the MaxErrors limit of the parent command. This is a
   terminal state.
   
   
 * Failed – The command was not successful on the instance. For a plugin, this
   indicates that the result code was not zero. For a command invocation, this
   indicates that the result code for one or more plugins was not zero.
   Invocation failures count against the MaxErrors limit of the parent command.
   This is a terminal state.
   
   
 * Canceled – The command was terminated before it was completed. This is a
   terminal state.
   
   
 * Undeliverable – The command can&#x27;t be delivered to the instance. The instance
   might not exist, or it might not be responding. Undeliverable invocations
   don&#x27;t count against the parent command’s MaxErrors limit, and they don&#x27;t
   contribute to whether the parent command status is Success or Incomplete .
   This is a terminal state.
   
   
 * Terminated – The parent command exceeded its MaxErrors limit and subsequent
   command invocations were canceled by the system. This is a terminal state. **/
        StatusDetails?: StatusDetails;
        /** A numeric response code generated after executing the plugin. **/
        ResponseCode?: ResponseCode;
        /** The time the plugin started executing. **/
        ResponseStartDateTime?: DateTime;
        /** The time the plugin stopped executing. Could stop prematurely if, for example, a
cancel command was sent. **/
        ResponseFinishDateTime?: DateTime;
        /** Output of the plugin execution. **/
        Output?: CommandPluginOutput;
        /** The URL for the complete text written by the plugin to stdout in Amazon S3. If
the Amazon S3 bucket for the command was not specified, then this string is
empty. **/
        StandardOutputUrl?: Url;
        /** The URL for the complete text written by the plugin to stderr. If execution is
not yet complete, then this string is empty. **/
        StandardErrorUrl?: Url;
        /** The name of the region where the output is stored in Amazon S3. **/
        OutputS3Region?: S3Region;
        /** The S3 bucket where the responses to the command executions should be stored.
This was requested when issuing the command. For example, in the following
response:


test_folder/ab19cb99-a030-46dd-9dfc-8eSAMPLEPre-Fix/i-1234567876543/awsrunShellScript

test_folder is the name of the Amazon S3 bucket;

ab19cb99-a030-46dd-9dfc-8eSAMPLEPre-Fix is the name of the S3 prefix;

i-1234567876543 is the instance ID;

awsrunShellScript is the name of the plugin. **/
        OutputS3BucketName?: S3BucketName;
        /** The S3 directory path inside the bucket where the responses to the command
executions should be stored. This was requested when issuing the command. For
example, in the following response:


test_folder/ab19cb99-a030-46dd-9dfc-8eSAMPLEPre-Fix/i-1234567876543/awsrunShellScript

test_folder is the name of the Amazon S3 bucket;

ab19cb99-a030-46dd-9dfc-8eSAMPLEPre-Fix is the name of the S3 prefix;

i-1234567876543 is the instance ID;

awsrunShellScript is the name of the plugin. **/
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
        Name: DocumentName;
        /** The ID of the instance. **/
        InstanceId?: InstanceId;
        /** A description of the parameters for a document. **/
        Parameters?: Parameters;
        /** The document version. **/
        DocumentVersion?: DocumentVersion;
        /** The instances targeted by the request. **/
        Targets?: Targets;
        /** A cron expression that specifies a schedule when the association runs. **/
        ScheduleExpression?: ScheduleExpression;
        /** An Amazon S3 bucket where you want to store the results of this request. **/
        OutputLocation?: InstanceAssociationOutputLocation;
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
        /** The document version you want to associate with the target(s). Can be a specific
version or the default version. **/
        DocumentVersion?: DocumentVersion;
        /** The instance ID. **/
        InstanceId?: InstanceId;
        /** The parameters for the documents runtime configuration. **/
        Parameters?: Parameters;
        /** The targets (either instances or tags) for the association. Instances are
specified using Key=instanceids,Values=&lt;instanceid1&gt;,&lt;instanceid2&gt;. Tags are
specified using Key=&lt;tag name&gt;,Values=&lt;tag value&gt;. **/
        Targets?: Targets;
        /** A cron expression when the association will be applied to the target(s).
Supported expressions are every half, 1, 2, 4, 8 or 12 hour(s); every specified
day and time of the week. For example: cron(0 0/30 &amp;#42; 1/1 * ? *) to run every
thirty minutes; cron(0 0 0/4 1/1 * ? *) to run every four hours; and cron(0 0 10
? * SUN *) to run every Sunday at 10 a.m. **/
        ScheduleExpression?: ScheduleExpression;
        /** An Amazon S3 bucket where you want to store the output details of the request.
For example:

&quot;{ \&quot;S3Location\&quot;: { \&quot;OutputS3Region\&quot;: \&quot;&lt;region&gt;\&quot;, \&quot;OutputS3BucketName\&quot;:
\&quot;bucket name\&quot;, \&quot;OutputS3KeyPrefix\&quot;: \&quot;folder name\&quot; } }&quot; **/
        OutputLocation?: InstanceAssociationOutputLocation;
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
        /** The type of document to create. Valid document types include: Policy,
Automation, and Command. **/
        DocumentType?: DocumentType;
    }
    export interface CreateDocumentResult {
        /** Information about the SSM document. **/
        DocumentDescription?: DocumentDescription;
    }
    export interface CreateMaintenanceWindowRequest {
        /** The name of the Maintenance Window. **/
        Name: MaintenanceWindowName;
        /** The schedule of the Maintenance Window in the form of a cron or rate expression. **/
        Schedule: MaintenanceWindowSchedule;
        /** The duration of the Maintenance Window in hours. **/
        Duration: MaintenanceWindowDurationHours;
        /** The number of hours before the end of the Maintenance Window that Systems
Manager stops scheduling new tasks for execution. **/
        Cutoff: MaintenanceWindowCutoff;
        /** Whether targets must be registered with the Maintenance Window before tasks can
be defined for those targets. **/
        AllowUnassociatedTargets: MaintenanceWindowAllowUnassociatedTargets;
        /** User-provided idempotency token. **/
        ClientToken?: ClientToken;
    }
    export interface CreateMaintenanceWindowResult {
        /** The ID of the created Maintenance Window. **/
        WindowId?: MaintenanceWindowId;
    }
    export interface CreatePatchBaselineRequest {
        /** The name of the patch baseline. **/
        Name: BaselineName;
        /** A set of global filters used to exclude patches from the baseline. **/
        GlobalFilters?: PatchFilterGroup;
        /** A set of rules used to include patches in the baseline. **/
        ApprovalRules?: PatchRuleGroup;
        /** A list of explicitly approved patches for the baseline. **/
        ApprovedPatches?: PatchIdList;
        /** A list of explicitly rejected patches for the baseline. **/
        RejectedPatches?: PatchIdList;
        /** A description of the patch baseline. **/
        Description?: BaselineDescription;
        /** Caller-provided idempotency token. **/
        ClientToken?: ClientToken;
    }
    export interface CreatePatchBaselineResult {
        /** The ID of the created patch baseline. **/
        BaselineId?: BaselineId;
    }
    export interface CustomSchemaCountLimitExceededException {
        Message?: String;
    }
    export interface DeleteActivationRequest {
        /** The ID of the activation that you want to delete. **/
        ActivationId: ActivationId;
    }
    export interface DeleteActivationResult {
    }
    export interface DeleteAssociationRequest {
        /** The name of the SSM document. **/
        Name?: DocumentName;
        /** The ID of the instance. **/
        InstanceId?: InstanceId;
        /** The association ID that you want to delete. **/
        AssociationId?: AssociationId;
    }
    export interface DeleteAssociationResult {
    }
    export interface DeleteDocumentRequest {
        /** The name of the SSM document. **/
        Name: DocumentName;
    }
    export interface DeleteDocumentResult {
    }
    export interface DeleteMaintenanceWindowRequest {
        /** The ID of the Maintenance Window to delete. **/
        WindowId: MaintenanceWindowId;
    }
    export interface DeleteMaintenanceWindowResult {
        /** The ID of the deleted Maintenance Window. **/
        WindowId?: MaintenanceWindowId;
    }
    export interface DeleteParameterRequest {
        /** The name of the parameter to delete. **/
        Name: PSParameterName;
    }
    export interface DeleteParameterResult {
    }
    export interface DeletePatchBaselineRequest {
        /** The ID of the patch baseline to delete. **/
        BaselineId: BaselineId;
    }
    export interface DeletePatchBaselineResult {
        /** The ID of the deleted patch baseline. **/
        BaselineId?: BaselineId;
    }
    export interface DeregisterManagedInstanceRequest {
        /** The ID assigned to the managed instance when you registered it using the
activation process. **/
        InstanceId: ManagedInstanceId;
    }
    export interface DeregisterManagedInstanceResult {
    }
    export interface DeregisterPatchBaselineForPatchGroupRequest {
        /** The ID of the patch baseline to deregister the patch group from. **/
        BaselineId: BaselineId;
        /** The name of the patch group that should be deregistered from the patch baseline. **/
        PatchGroup: PatchGroup;
    }
    export interface DeregisterPatchBaselineForPatchGroupResult {
        /** The ID of the patch baseline the patch group was deregistered from. **/
        BaselineId?: BaselineId;
        /** The name of the patch group deregistered from the patch baseline. **/
        PatchGroup?: PatchGroup;
    }
    export interface DeregisterTargetFromMaintenanceWindowRequest {
        /** The ID of the Maintenance Window the target should be removed from. **/
        WindowId: MaintenanceWindowId;
        /** The ID of the target definition to remove. **/
        WindowTargetId: MaintenanceWindowTargetId;
    }
    export interface DeregisterTargetFromMaintenanceWindowResult {
        /** The ID of the Maintenance Window the target was removed from. **/
        WindowId?: MaintenanceWindowId;
        /** The ID of the removed target definition. **/
        WindowTargetId?: MaintenanceWindowTargetId;
    }
    export interface DeregisterTaskFromMaintenanceWindowRequest {
        /** The ID of the Maintenance Window the task should be removed from. **/
        WindowId: MaintenanceWindowId;
        /** The ID of the task to remove from the Maintenance Window. **/
        WindowTaskId: MaintenanceWindowTaskId;
    }
    export interface DeregisterTaskFromMaintenanceWindowResult {
        /** The ID of the Maintenance Window the task was removed from. **/
        WindowId?: MaintenanceWindowId;
        /** The ID of the task removed from the Maintenance Window. **/
        WindowTaskId?: MaintenanceWindowTaskId;
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
        Name?: DocumentName;
        /** The instance ID. **/
        InstanceId?: InstanceId;
        /** The association ID for which you want information. **/
        AssociationId?: AssociationId;
    }
    export interface DescribeAssociationResult {
        /** Information about the association. **/
        AssociationDescription?: AssociationDescription;
    }
    export interface DescribeAutomationExecutionsRequest {
        /** Filters used to limit the scope of executions that are requested. **/
        Filters?: AutomationExecutionFilterList;
        /** The maximum number of items to return for this call. The call also returns a
token that you can specify in a subsequent call to get the next set of results. **/
        MaxResults?: MaxResults;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        NextToken?: NextToken;
    }
    export interface DescribeAutomationExecutionsResult {
        /** The list of details about each automation execution which has occurred which
matches the filter specification, if any. **/
        AutomationExecutionMetadataList?: AutomationExecutionMetadataList;
        /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
        NextToken?: NextToken;
    }
    export interface DescribeAvailablePatchesRequest {
        /** Filters used to scope down the returned patches. **/
        Filters?: PatchOrchestratorFilterList;
        /** The maximum number of patches to return (per page). **/
        MaxResults?: PatchBaselineMaxResults;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        NextToken?: NextToken;
    }
    export interface DescribeAvailablePatchesResult {
        /** An array of patches. Each entry in the array is a patch structure. **/
        Patches?: PatchList;
        /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
        NextToken?: NextToken;
    }
    export interface DescribeDocumentPermissionRequest {
        /** The name of the document for which you are the owner. **/
        Name: DocumentName;
        /** The permission type for the document. The permission type can be Share . **/
        PermissionType: DocumentPermissionType;
    }
    export interface DescribeDocumentPermissionResponse {
        /** The account IDs that have permission to use this document. The ID can be either
an AWS account or All . **/
        AccountIds?: AccountIdList;
    }
    export interface DescribeDocumentRequest {
        /** The name of the SSM document. **/
        Name: DocumentARN;
        /** The document version for which you want information. Can be a specific version
or the default version. **/
        DocumentVersion?: DocumentVersion;
    }
    export interface DescribeDocumentResult {
        /** Information about the SSM document. **/
        Document?: DocumentDescription;
    }
    export interface DescribeEffectiveInstanceAssociationsRequest {
        /** The instance ID for which you want to view all associations. **/
        InstanceId: InstanceId;
        /** The maximum number of items to return for this call. The call also returns a
token that you can specify in a subsequent call to get the next set of results. **/
        MaxResults?: EffectiveInstanceAssociationMaxResults;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        NextToken?: NextToken;
    }
    export interface DescribeEffectiveInstanceAssociationsResult {
        /** The associations for the requested instance. **/
        Associations?: InstanceAssociationList;
        /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
        NextToken?: NextToken;
    }
    export interface DescribeEffectivePatchesForPatchBaselineRequest {
        /** The ID of the patch baseline to retrieve the effective patches for. **/
        BaselineId: BaselineId;
        /** The maximum number of patches to return (per page). **/
        MaxResults?: PatchBaselineMaxResults;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        NextToken?: NextToken;
    }
    export interface DescribeEffectivePatchesForPatchBaselineResult {
        /** An array of patches and patch status. **/
        EffectivePatches?: EffectivePatchList;
        /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
        NextToken?: NextToken;
    }
    export interface DescribeInstanceAssociationsStatusRequest {
        /** The instance IDs for which you want association status information. **/
        InstanceId: InstanceId;
        /** The maximum number of items to return for this call. The call also returns a
token that you can specify in a subsequent call to get the next set of results. **/
        MaxResults?: MaxResults;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        NextToken?: NextToken;
    }
    export interface DescribeInstanceAssociationsStatusResult {
        /** Status information about the association. **/
        InstanceAssociationStatusInfos?: InstanceAssociationStatusInfos;
        /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
        NextToken?: NextToken;
    }
    export interface DescribeInstanceInformationRequest {
        /** One or more filters. Use a filter to return a more specific list of instances. **/
        InstanceInformationFilterList?: InstanceInformationFilterList;
        /** One or more filters. Use a filter to return a more specific list of instances. **/
        Filters?: InstanceInformationStringFilterList;
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
    export interface DescribeInstancePatchStatesForPatchGroupRequest {
        /** The name of the patch group for which the patch state information should be
retrieved. **/
        PatchGroup: PatchGroup;
        /** Each entry in the array is a structure containing:

Key (string 1 ≤ length ≤ 200)

Values (array containing a single string)

Type (string “Equal”, “NotEqual”, “LessThan”, “GreaterThan”) **/
        Filters?: InstancePatchStateFilterList;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        NextToken?: NextToken;
        /** The maximum number of patches to return (per page). **/
        MaxResults?: PatchComplianceMaxResults;
    }
    export interface DescribeInstancePatchStatesForPatchGroupResult {
        /** The high-level patch state for the requested instances. **/
        InstancePatchStates?: InstancePatchStatesList;
        /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
        NextToken?: NextToken;
    }
    export interface DescribeInstancePatchStatesRequest {
        /** The ID of the instance whose patch state information should be retrieved. **/
        InstanceIds: InstanceIdList;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        NextToken?: NextToken;
        /** The maximum number of instances to return (per page). **/
        MaxResults?: PatchComplianceMaxResults;
    }
    export interface DescribeInstancePatchStatesResult {
        /** The high-level patch state for the requested instances. **/
        InstancePatchStates?: InstancePatchStateList;
        /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
        NextToken?: NextToken;
    }
    export interface DescribeInstancePatchesRequest {
        /** The ID of the instance whose patch state information should be retrieved. **/
        InstanceId: InstanceId;
        /** Each entry in the array is a structure containing:

Key (string, 1 ≤ length ≤ 128)

Values (array of strings 1 ≤ length ≤ 256) **/
        Filters?: PatchOrchestratorFilterList;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        NextToken?: NextToken;
        /** The maximum number of patches to return (per page). **/
        MaxResults?: PatchComplianceMaxResults;
    }
    export interface DescribeInstancePatchesResult {
        /** Each entry in the array is a structure containing:

Title (string)

KBId (string)

Classification (string)

Severity (string)

State (string – “INSTALLED”, “INSTALLED_OTHER”, “MISSING”, “NOT_APPLICABLE”,
“FAILED”)

InstalledTime (DateTime)

InstalledBy (string) **/
        Patches?: PatchComplianceDataList;
        /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
        NextToken?: NextToken;
    }
    export interface DescribeMaintenanceWindowExecutionTaskInvocationsRequest {
        /** The ID of the Maintenance Window execution the task is part of. **/
        WindowExecutionId: MaintenanceWindowExecutionId;
        /** The ID of the specific task in the Maintenance Window task that should be
retrieved. **/
        TaskId: MaintenanceWindowExecutionTaskId;
        /** Optional filters used to scope down the returned task invocations. The supported
filter key is STATUS with the corresponding values PENDING, IN_PROGRESS,
SUCCESS, FAILED, TIMED_OUT, CANCELLING, and CANCELLED. **/
        Filters?: MaintenanceWindowFilterList;
        /** The maximum number of items to return for this call. The call also returns a
token that you can specify in a subsequent call to get the next set of results. **/
        MaxResults?: MaintenanceWindowMaxResults;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        NextToken?: NextToken;
    }
    export interface DescribeMaintenanceWindowExecutionTaskInvocationsResult {
        /** Information about the task invocation results per invocation. **/
        WindowExecutionTaskInvocationIdentities?: MaintenanceWindowExecutionTaskInvocationIdentityList;
        /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
        NextToken?: NextToken;
    }
    export interface DescribeMaintenanceWindowExecutionTasksRequest {
        /** The ID of the Maintenance Window execution whose task executions should be
retrieved. **/
        WindowExecutionId: MaintenanceWindowExecutionId;
        /** Optional filters used to scope down the returned tasks. The supported filter key
is STATUS with the corresponding values PENDING, IN_PROGRESS, SUCCESS, FAILED,
TIMED_OUT, CANCELLING, and CANCELLED. **/
        Filters?: MaintenanceWindowFilterList;
        /** The maximum number of items to return for this call. The call also returns a
token that you can specify in a subsequent call to get the next set of results. **/
        MaxResults?: MaintenanceWindowMaxResults;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        NextToken?: NextToken;
    }
    export interface DescribeMaintenanceWindowExecutionTasksResult {
        /** Information about the task executions. **/
        WindowExecutionTaskIdentities?: MaintenanceWindowExecutionTaskIdentityList;
        /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
        NextToken?: NextToken;
    }
    export interface DescribeMaintenanceWindowExecutionsRequest {
        /** The ID of the Maintenance Window whose executions should be retrieved. **/
        WindowId: MaintenanceWindowId;
        /** Each entry in the array is a structure containing:

Key (string, 1 ≤ length ≤ 128)

Values (array of strings 1 ≤ length ≤ 256)

The supported Keys are ExecutedBefore and ExecutedAfter with the value being a
date/time string such as 2016-11-04T05:00:00Z. **/
        Filters?: MaintenanceWindowFilterList;
        /** The maximum number of items to return for this call. The call also returns a
token that you can specify in a subsequent call to get the next set of results. **/
        MaxResults?: MaintenanceWindowMaxResults;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        NextToken?: NextToken;
    }
    export interface DescribeMaintenanceWindowExecutionsResult {
        /** Information about the Maintenance Windows execution. **/
        WindowExecutions?: MaintenanceWindowExecutionList;
        /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
        NextToken?: NextToken;
    }
    export interface DescribeMaintenanceWindowTargetsRequest {
        /** The ID of the Maintenance Window whose targets should be retrieved. **/
        WindowId: MaintenanceWindowId;
        /** Optional filters that can be used to narrow down the scope of the returned
window targets. The supported filter keys are Type , WindowTargetId and 
OwnerInformation . **/
        Filters?: MaintenanceWindowFilterList;
        /** The maximum number of items to return for this call. The call also returns a
token that you can specify in a subsequent call to get the next set of results. **/
        MaxResults?: MaintenanceWindowMaxResults;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        NextToken?: NextToken;
    }
    export interface DescribeMaintenanceWindowTargetsResult {
        /** Information about the targets in the Maintenance Window. **/
        Targets?: MaintenanceWindowTargetList;
        /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
        NextToken?: NextToken;
    }
    export interface DescribeMaintenanceWindowTasksRequest {
        /** The ID of the Maintenance Window whose tasks should be retrieved. **/
        WindowId: MaintenanceWindowId;
        /** Optional filters used to narrow down the scope of the returned tasks. The
supported filter keys are WindowTaskId , TaskArn , Priority , and TaskType . **/
        Filters?: MaintenanceWindowFilterList;
        /** The maximum number of items to return for this call. The call also returns a
token that you can specify in a subsequent call to get the next set of results. **/
        MaxResults?: MaintenanceWindowMaxResults;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        NextToken?: NextToken;
    }
    export interface DescribeMaintenanceWindowTasksResult {
        /** Information about the tasks in the Maintenance Window. **/
        Tasks?: MaintenanceWindowTaskList;
        /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
        NextToken?: NextToken;
    }
    export interface DescribeMaintenanceWindowsRequest {
        /** Optional filters used to narrow down the scope of the returned Maintenance
Windows. Supported filter keys are Name and Enabled . **/
        Filters?: MaintenanceWindowFilterList;
        /** The maximum number of items to return for this call. The call also returns a
token that you can specify in a subsequent call to get the next set of results. **/
        MaxResults?: MaintenanceWindowMaxResults;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        NextToken?: NextToken;
    }
    export interface DescribeMaintenanceWindowsResult {
        /** Information about the Maintenance Windows. **/
        WindowIdentities?: MaintenanceWindowIdentityList;
        /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
        NextToken?: NextToken;
    }
    export interface DescribeParametersRequest {
        /** One or more filters. Use a filter to return a more specific list of results. **/
        Filters?: ParametersFilterList;
        /** The maximum number of items to return for this call. The call also returns a
token that you can specify in a subsequent call to get the next set of results. **/
        MaxResults?: MaxResults;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        NextToken?: NextToken;
    }
    export interface DescribeParametersResult {
        /** Parameters returned by the request. **/
        Parameters?: ParameterMetadataList;
        /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
        NextToken?: NextToken;
    }
    export interface DescribePatchBaselinesRequest {
        /** Each element in the array is a structure containing:

Key: (string, “NAME_PREFIX” or “OWNER”)

Value: (array of strings, exactly 1 entry, 1 ≤ length ≤ 255) **/
        Filters?: PatchOrchestratorFilterList;
        /** The maximum number of patch baselines to return (per page). **/
        MaxResults?: PatchBaselineMaxResults;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        NextToken?: NextToken;
    }
    export interface DescribePatchBaselinesResult {
        /** An array of PatchBaselineIdentity elements. **/
        BaselineIdentities?: PatchBaselineIdentityList;
        /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
        NextToken?: NextToken;
    }
    export interface DescribePatchGroupStateRequest {
        /** The name of the patch group whose patch snapshot should be retrieved. **/
        PatchGroup: PatchGroup;
    }
    export interface DescribePatchGroupStateResult {
        /** The number of instances in the patch group. **/
        Instances?: Integer;
        /** The number of instances with installed patches. **/
        InstancesWithInstalledPatches?: Integer;
        /** The number of instances with patches installed that aren’t defined in the patch
baseline. **/
        InstancesWithInstalledOtherPatches?: Integer;
        /** The number of instances with missing patches from the patch baseline. **/
        InstancesWithMissingPatches?: Integer;
        /** The number of instances with patches from the patch baseline that failed to
install. **/
        InstancesWithFailedPatches?: Integer;
        /** The number of instances with patches that aren’t applicable. **/
        InstancesWithNotApplicablePatches?: Integer;
    }
    export interface DescribePatchGroupsRequest {
        /** The maximum number of patch groups to return (per page). **/
        MaxResults?: PatchBaselineMaxResults;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        NextToken?: NextToken;
    }
    export interface DescribePatchGroupsResult {
        /** Each entry in the array contains:

PatchGroup: string (1 ≤ length ≤ 256, Regex: ^([\p{L}\p{Z}\p{N}_.:/=+\-@]&amp;#42;)$)

PatchBaselineIdentity: A PatchBaselineIdentity element. **/
        Mappings?: PatchGroupPatchBaselineMappingList;
        /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
        NextToken?: NextToken;
    }
    export interface DocumentAlreadyExists {
        Message?: String;
    }
    export interface DocumentDefaultVersionDescription {
        /** The name of the document. **/
        Name?: DocumentName;
        /** The default version of the document. **/
        DefaultVersion?: DocumentVersion;
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
        /** The document version. **/
        DocumentVersion?: DocumentVersion;
        /** A description of the document. **/
        Description?: DescriptionInDocument;
        /** A description of the parameters for a document. **/
        Parameters?: DocumentParameterList;
        /** The list of OS platforms compatible with this SSM document. **/
        PlatformTypes?: PlatformTypeList;
        /** The type of document. **/
        DocumentType?: DocumentType;
        /** The schema version. **/
        SchemaVersion?: DocumentSchemaVersion;
        /** The latest version of the document. **/
        LatestVersion?: DocumentVersion;
        /** The default version. **/
        DefaultVersion?: DocumentVersion;
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
        /** The document version. **/
        DocumentVersion?: DocumentVersion;
        /** The document type. **/
        DocumentType?: DocumentType;
        /** The schema version. **/
        SchemaVersion?: DocumentSchemaVersion;
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
    export interface DocumentVersionInfo {
        /** The document name. **/
        Name?: DocumentName;
        /** The document version. **/
        DocumentVersion?: DocumentVersion;
        /** The date the document was created. **/
        CreatedDate?: DateTime;
        /** An identifier for the default version of the document. **/
        IsDefaultVersion?: Boolean;
    }
    export interface DocumentVersionLimitExceeded {
        Message?: String;
    }
    export interface DoesNotExistException {
        Message?: String;
    }
    export interface DuplicateDocumentContent {
        Message?: String;
    }
    export interface DuplicateInstanceId {
    }
    export interface EffectivePatch {
        /** Provides metadata for a patch, including information such as the KB ID,
severity, classification and a URL for where more information can be obtained
about the patch. **/
        Patch?: Patch;
        /** The status of the patch in a patch baseline. This includes information about
whether the patch is currently approved, due to be approved by a rule,
explicitly approved, or explicitly rejected and the date the patch was or will
be approved. **/
        PatchStatus?: PatchStatus;
    }
    export interface FailedCreateAssociation {
        /** The association. **/
        Entry?: CreateAssociationBatchRequestEntry;
        /** A description of the failure. **/
        Message?: BatchErrorMessage;
        /** The source of the failure. **/
        Fault?: Fault;
    }
    export interface GetAutomationExecutionRequest {
        /** The unique identifier for an existing automation execution to examine. The
execution ID is returned by StartAutomationExecution when the execution of an
Automation document is initiated. **/
        AutomationExecutionId: AutomationExecutionId;
    }
    export interface GetAutomationExecutionResult {
        /** Detailed information about the current state of an automation execution. **/
        AutomationExecution?: AutomationExecution;
    }
    export interface GetCommandInvocationRequest {
        /** (Required) The parent command ID of the invocation plugin. **/
        CommandId: CommandId;
        /** (Required) The ID of the managed instance targeted by the command. A managed
instance can be an Amazon EC2 instance or an instance in your hybrid environment
that is configured for Systems Manager. **/
        InstanceId: InstanceId;
        /** (Optional) The name of the plugin for which you want detailed results. If the
SSM document contains only one plugin, the name can be omitted and the details
will be returned. **/
        PluginName?: CommandPluginName;
    }
    export interface GetCommandInvocationResult {
        /** The parent command ID of the invocation plugin. **/
        CommandId?: CommandId;
        /** The ID of the managed instance targeted by the command. A managed instance can
be an Amazon EC2 instance or an instance in your hybrid environment that is
configured for Systems Manager. **/
        InstanceId?: InstanceId;
        /** The comment text for the command. **/
        Comment?: Comment;
        /** The name of the SSM document that was executed. For example, AWS-RunShellScript
is an SSM document. **/
        DocumentName?: DocumentName;
        /** The name of the plugin for which you want detailed results. For example,
aws:RunShellScript is a plugin. **/
        PluginName?: CommandPluginName;
        /** The error level response code for the plugin script. If the response code is -1 
, then the command has not started executing on the instance, or it was not
received by the instance. **/
        ResponseCode?: ResponseCode;
        /** The date and time the plugin started executing. Date and time are written in ISO
8601 format. For example, August 28, 2016 is represented as 2016-08-28. If the
plugin has not started to execute, the string is empty. **/
        ExecutionStartDateTime?: StringDateTime;
        /** Duration since ExecutionStartDateTime . **/
        ExecutionElapsedTime?: StringDateTime;
        /** The date and time the plugin was finished executing. Date and time are written
in ISO 8601 format. For example, August 28, 2016 is represented as 2016-08-28.
If the plugin has not started to execute, the string is empty. **/
        ExecutionEndDateTime?: StringDateTime;
        /** The status of the parent command for this invocation. This status can be
different than StatusDetails . **/
        Status?: CommandInvocationStatus;
        /** A detailed status of the command execution for an invocation. StatusDetails 
includes more information than Status because it includes states resulting from
error and concurrency control parameters. StatusDetails can show different
results than Status . For more information about these statuses, see Monitor
Commands
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitor-commands.html] 
(Linux) or Monitor Commands
[http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/monitor-commands.html] 
(Windows). StatusDetails can be one of the following values:

 &amp;#42; Pending – The command has not been sent to the instance.
   
   
 * In Progress – The command has been sent to the instance but has not reached a
   terminal state.
   
   
 * Delayed – The system attempted to send the command to the target, but the
   target was not available. The instance might not be available because of
   network issues, the instance was stopped, etc. The system will try to deliver
   the command again.
   
   
 * Success – The command or plugin was executed successfully. This is a terminal
   state.
   
   
 * Delivery Timed Out – The command was not delivered to the instance before the
   delivery timeout expired. Delivery timeouts do not count against the parent
   command’s MaxErrors limit, but they do contribute to whether the parent
   command status is Success or Incomplete . This is a terminal state.
   
   
 * Execution Timed Out – The command started to execute on the instance, but the
   execution was not complete before the timeout expired. Execution timeouts
   count against the MaxErrors limit of the parent command. This is a terminal
   state.
   
   
 * Failed – The command wasn&#x27;t executed successfully on the instance. For a
   plugin, this indicates that the result code was not zero. For a command
   invocation, this indicates that the result code for one or more plugins was
   not zero. Invocation failures count against the MaxErrors limit of the parent
   command. This is a terminal state.
   
   
 * Canceled – The command was terminated before it was completed. This is a
   terminal state.
   
   
 * Undeliverable – The command can&#x27;t be delivered to the instance. The instance
   might not exist or might not be responding. Undeliverable invocations don&#x27;t
   count against the parent command’s MaxErrors limit and don&#x27;t contribute to
   whether the parent command status is Success or Incomplete . This is a
   terminal state.
   
   
 * Terminated – The parent command exceeded its MaxErrors limit and subsequent
   command invocations were canceled by the system. This is a terminal state. **/
        StatusDetails?: StatusDetails;
        /** The first 24,000 characters written by the plugin to stdout. If the command has
not finished executing, if ExecutionStatus is neither Succeeded nor Failed ,
then this string is empty. **/
        StandardOutputContent?: StandardOutputContent;
        /** The URL for the complete text written by the plugin to stdout in Amazon S3. If
an Amazon S3 bucket was not specified, then this string is empty. **/
        StandardOutputUrl?: Url;
        /** The first 8,000 characters written by the plugin to stderr. If the command has
not finished executing, then this string is empty. **/
        StandardErrorContent?: StandardErrorContent;
        /** The URL for the complete text written by the plugin to stderr. If the command
has not finished executing, then this string is empty. **/
        StandardErrorUrl?: Url;
    }
    export interface GetDefaultPatchBaselineRequest {
    }
    export interface GetDefaultPatchBaselineResult {
        /** The ID of the default patch baseline. **/
        BaselineId?: BaselineId;
    }
    export interface GetDeployablePatchSnapshotForInstanceRequest {
        /** The ID of the instance for which the appropriate patch snapshot should be
retrieved. **/
        InstanceId: InstanceId;
        /** The user-defined snapshot ID. **/
        SnapshotId: SnapshotId;
    }
    export interface GetDeployablePatchSnapshotForInstanceResult {
        /** The ID of the instance. **/
        InstanceId?: InstanceId;
        /** The user-defined snapshot ID. **/
        SnapshotId?: SnapshotId;
        /** A pre-signed Amazon S3 URL that can be used to download the patch snapshot. **/
        SnapshotDownloadUrl?: SnapshotDownloadUrl;
    }
    export interface GetDocumentRequest {
        /** The name of the SSM document. **/
        Name: DocumentARN;
        /** The document version for which you want information. **/
        DocumentVersion?: DocumentVersion;
    }
    export interface GetDocumentResult {
        /** The name of the SSM document. **/
        Name?: DocumentARN;
        /** The document version. **/
        DocumentVersion?: DocumentVersion;
        /** The contents of the SSM document. **/
        Content?: DocumentContent;
        /** The document type. **/
        DocumentType?: DocumentType;
    }
    export interface GetInventoryRequest {
        /** One or more filters. Use a filter to return a more specific list of results. **/
        Filters?: InventoryFilterList;
        /** The list of inventory item types to return. **/
        ResultAttributes?: ResultAttributeList;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        NextToken?: NextToken;
        /** The maximum number of items to return for this call. The call also returns a
token that you can specify in a subsequent call to get the next set of results. **/
        MaxResults?: MaxResults;
    }
    export interface GetInventoryResult {
        /** Collection of inventory entities such as a collection of instance inventory. **/
        Entities?: InventoryResultEntityList;
        /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
        NextToken?: NextToken;
    }
    export interface GetInventorySchemaRequest {
        /** The type of inventory item to return. **/
        TypeName?: InventoryItemTypeNameFilter;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        NextToken?: NextToken;
        /** The maximum number of items to return for this call. The call also returns a
token that you can specify in a subsequent call to get the next set of results. **/
        MaxResults?: GetInventorySchemaMaxResults;
    }
    export interface GetInventorySchemaResult {
        /** Inventory schemas returned by the request. **/
        Schemas?: InventoryItemSchemaResultList;
        /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
        NextToken?: NextToken;
    }
    export interface GetMaintenanceWindowExecutionRequest {
        /** The ID of the Maintenance Window execution that includes the task. **/
        WindowExecutionId: MaintenanceWindowExecutionId;
    }
    export interface GetMaintenanceWindowExecutionResult {
        /** The ID of the Maintenance Window execution. **/
        WindowExecutionId?: MaintenanceWindowExecutionId;
        /** The ID of the task executions from the Maintenance Window execution. **/
        TaskIds?: MaintenanceWindowExecutionTaskIdList;
        /** The status of the Maintenance Window execution. **/
        Status?: MaintenanceWindowExecutionStatus;
        /** The details explaining the Status. Only available for certain status values. **/
        StatusDetails?: MaintenanceWindowExecutionStatusDetails;
        /** The time the Maintenance Window started executing. **/
        StartTime?: DateTime;
        /** The time the Maintenance Window finished executing. **/
        EndTime?: DateTime;
    }
    export interface GetMaintenanceWindowExecutionTaskRequest {
        /** The ID of the Maintenance Window execution that includes the task. **/
        WindowExecutionId: MaintenanceWindowExecutionId;
        /** The ID of the specific task execution in the Maintenance Window task that should
be retrieved. **/
        TaskId: MaintenanceWindowExecutionTaskId;
    }
    export interface GetMaintenanceWindowExecutionTaskResult {
        /** The ID of the Maintenance Window execution that includes the task. **/
        WindowExecutionId?: MaintenanceWindowExecutionId;
        /** The ID of the specific task execution in the Maintenance Window task that was
retrieved. **/
        TaskExecutionId?: MaintenanceWindowExecutionTaskId;
        /** The ARN of the executed task. **/
        TaskArn?: MaintenanceWindowTaskArn;
        /** The role that was assumed when executing the task. **/
        ServiceRole?: ServiceRole;
        /** The type of task executed. **/
        Type?: MaintenanceWindowTaskType;
        /** The parameters passed to the task when it was executed. The map has the
following format:

Key: string, 1 ≤ length ≤ 255

Value: an array of strings where each string 1 ≤ length ≤ 255 **/
        TaskParameters?: MaintenanceWindowTaskParametersList;
        /** The priority of the task. **/
        Priority?: MaintenanceWindowTaskPriority;
        /** The defined maximum number of task executions that could be run in parallel. **/
        MaxConcurrency?: VelocityConstraint;
        /** The defined maximum number of task execution errors allowed before scheduling of
the task execution would have been stopped. **/
        MaxErrors?: VelocityConstraint;
        /** The status of the task. **/
        Status?: MaintenanceWindowExecutionStatus;
        /** The details explaining the Status. Only available for certain status values. **/
        StatusDetails?: MaintenanceWindowExecutionStatusDetails;
        /** The time the task execution started. **/
        StartTime?: DateTime;
        /** The time the task execution completed. **/
        EndTime?: DateTime;
    }
    export interface GetMaintenanceWindowRequest {
        /** The ID of the desired Maintenance Window. **/
        WindowId: MaintenanceWindowId;
    }
    export interface GetMaintenanceWindowResult {
        /** The ID of the created Maintenance Window. **/
        WindowId?: MaintenanceWindowId;
        /** The name of the Maintenance Window. **/
        Name?: MaintenanceWindowName;
        /** The schedule of the Maintenance Window in the form of a cron or rate expression. **/
        Schedule?: MaintenanceWindowSchedule;
        /** The duration of the Maintenance Window in hours. **/
        Duration?: MaintenanceWindowDurationHours;
        /** The number of hours before the end of the Maintenance Window that Systems
Manager stops scheduling new tasks for execution. **/
        Cutoff?: MaintenanceWindowCutoff;
        /** Whether targets must be registered with the Maintenance Window before tasks can
be defined for those targets. **/
        AllowUnassociatedTargets?: MaintenanceWindowAllowUnassociatedTargets;
        /** Whether the Maintenance Windows is enabled. **/
        Enabled?: MaintenanceWindowEnabled;
        /** The date the Maintenance Window was created. **/
        CreatedDate?: DateTime;
        /** The date the Maintenance Window was last modified. **/
        ModifiedDate?: DateTime;
    }
    export interface GetParameterHistoryRequest {
        /** The name of a parameter you want to query. **/
        Name: PSParameterName;
        /** Return decrypted values for secure string parameters. This flag is ignored for
String and StringList parameter types. **/
        WithDecryption?: Boolean;
        /** The maximum number of items to return for this call. The call also returns a
token that you can specify in a subsequent call to get the next set of results. **/
        MaxResults?: MaxResults;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        NextToken?: NextToken;
    }
    export interface GetParameterHistoryResult {
        /** A list of parameters returned by the request. **/
        Parameters?: ParameterHistoryList;
        /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
        NextToken?: NextToken;
    }
    export interface GetParametersRequest {
        /** Names of the parameters for which you want to query information. **/
        Names: ParameterNameList;
        /** Return decrypted secure string value. Return decrypted values for secure string
parameters. This flag is ignored for String and StringList parameter types. **/
        WithDecryption?: Boolean;
    }
    export interface GetParametersResult {
        /** A list of parameters used by the AWS account. **/
        Parameters?: ParameterList;
        /** A list of parameters that are not formatted correctly or do not run when
executed. **/
        InvalidParameters?: ParameterNameList;
    }
    export interface GetPatchBaselineForPatchGroupRequest {
        /** The name of the patch group whose patch baseline should be retrieved. **/
        PatchGroup: PatchGroup;
    }
    export interface GetPatchBaselineForPatchGroupResult {
        /** The ID of the patch baseline that should be used for the patch group. **/
        BaselineId?: BaselineId;
        /** The name of the patch group. **/
        PatchGroup?: PatchGroup;
    }
    export interface GetPatchBaselineRequest {
        /** The ID of the patch baseline to retrieve. **/
        BaselineId: BaselineId;
    }
    export interface GetPatchBaselineResult {
        /** The ID of the retrieved patch baseline. **/
        BaselineId?: BaselineId;
        /** The name of the patch baseline. **/
        Name?: BaselineName;
        /** A set of global filters used to exclude patches from the baseline. **/
        GlobalFilters?: PatchFilterGroup;
        /** A set of rules used to include patches in the baseline. **/
        ApprovalRules?: PatchRuleGroup;
        /** A list of explicitly approved patches for the baseline. **/
        ApprovedPatches?: PatchIdList;
        /** A list of explicitly rejected patches for the baseline. **/
        RejectedPatches?: PatchIdList;
        /** Patch groups included in the patch baseline. **/
        PatchGroups?: PatchGroupList;
        /** The date the patch baseline was created. **/
        CreatedDate?: DateTime;
        /** The date the patch baseline was last modified. **/
        ModifiedDate?: DateTime;
        /** A description of the patch baseline. **/
        Description?: BaselineDescription;
    }
    export interface IdempotentParameterMismatch {
        Message?: String;
    }
    export interface InstanceAggregatedAssociationOverview {
        /** Detailed status information about the aggregated associations. **/
        DetailedStatus?: StatusName;
        /** The number of associations for the instance(s). **/
        InstanceAssociationStatusAggregatedCount?: InstanceAssociationStatusAggregatedCount;
    }
    export interface InstanceAssociation {
        /** The association ID. **/
        AssociationId?: AssociationId;
        /** The instance ID. **/
        InstanceId?: InstanceId;
        /** The content of the association document for the instance(s). **/
        Content?: DocumentContent;
    }
    export interface InstanceAssociationOutputLocation {
        /** An Amazon S3 bucket where you want to store the results of this request. **/
        S3Location?: S3OutputLocation;
    }
    export interface InstanceAssociationOutputUrl {
        /** The URL of Amazon S3 bucket where you want to store the results of this request. **/
        S3OutputUrl?: S3OutputUrl;
    }
    export interface InstanceAssociationStatusInfo {
        /** The association ID. **/
        AssociationId?: AssociationId;
        /** The name of the association. **/
        Name?: DocumentName;
        /** The association document verions. **/
        DocumentVersion?: DocumentVersion;
        /** The instance ID where the association was created. **/
        InstanceId?: InstanceId;
        /** The date the instance association executed. **/
        ExecutionDate?: DateTime;
        /** Status information about the instance association. **/
        Status?: StatusName;
        /** Detailed status information about the instance association. **/
        DetailedStatus?: StatusName;
        /** Summary information about association execution. **/
        ExecutionSummary?: InstanceAssociationExecutionSummary;
        /** An error code returned by the request to create the association. **/
        ErrorCode?: AgentErrorCode;
        /** A URL for an Amazon S3 bucket where you want to store the results of this
request. **/
        OutputUrl?: InstanceAssociationOutputUrl;
    }
    export interface InstanceInformation {
        /** The instance ID. **/
        InstanceId?: InstanceId;
        /** Connection status of the SSM agent. **/
        PingStatus?: PingStatus;
        /** The date and time when agent last pinged Systems Manager service. **/
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
        /** The activation ID created by Systems Manager when the server or VM was
registered. **/
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
        /** The status of the association. **/
        AssociationStatus?: StatusName;
        /** The date the association was last executed. **/
        LastAssociationExecutionDate?: DateTime;
        /** The last date the association was successfully run. **/
        LastSuccessfulAssociationExecutionDate?: DateTime;
        /** Information about the association. **/
        AssociationOverview?: InstanceAggregatedAssociationOverview;
    }
    export interface InstanceInformationFilter {
        /** The name of the filter. **/
        key: InstanceInformationFilterKey;
        /** The filter values. **/
        valueSet: InstanceInformationFilterValueSet;
    }
    export interface InstanceInformationStringFilter {
        /** The filter key name to describe your instances. For example:


&quot;InstanceIds&quot;|&quot;AgentVersion&quot;|&quot;PingStatus&quot;|&quot;PlatformTypes&quot;|&quot;ActivationIds&quot;|&quot;IamRole&quot;|&quot;ResourceType&quot;|”AssociationStatus”|”Tag
Key” **/
        Key: InstanceInformationStringFilterKey;
        /** The filter values. **/
        Values: InstanceInformationFilterValueSet;
    }
    export interface InstancePatchState {
        /** The ID of the managed instance the high-level patch compliance information was
collected for. **/
        InstanceId: InstanceId;
        /** The name of the patch group the managed instance belongs to. **/
        PatchGroup: PatchGroup;
        /** The ID of the patch baseline used to patch the instance. **/
        BaselineId: BaselineId;
        /** The ID of the patch baseline snapshot used during the patching operation when
this compliance data was collected. **/
        SnapshotId?: SnapshotId;
        /** Placeholder information, this field will always be empty in the current release
of the service. **/
        OwnerInformation?: OwnerInformation;
        /** The number of patches from the patch baseline that are installed on the
instance. **/
        InstalledCount?: PatchInstalledCount;
        /** The number of patches not specified in the patch baseline that are installed on
the instance. **/
        InstalledOtherCount?: PatchInstalledOtherCount;
        /** The number of patches from the patch baseline that are applicable for the
instance but aren’t currently installed. **/
        MissingCount?: PatchMissingCount;
        /** The number of patches from the patch baseline that were attempted to be
installed during the last patching operation, but failed to install. **/
        FailedCount?: PatchFailedCount;
        /** The number of patches from the patch baseline that aren’t applicable for the
instance and hence aren’t installed on the instance. **/
        NotApplicableCount?: PatchNotApplicableCount;
        /** The time the most recent patching operation was started on the instance. **/
        OperationStartTime: PatchOperationStartTime;
        /** The time the most recent patching operation completed on the instance. **/
        OperationEndTime: PatchOperationEndTime;
        /** The type of patching operation that was performed: SCAN (assess patch compliance
state) or INSTALL (install missing patches). **/
        Operation: PatchOperationType;
    }
    export interface InstancePatchStateFilter {
        /** The key for the filter. Supported values are FailedCount, InstalledCount,
InstalledOtherCount, MissingCount and NotApplicableCount. **/
        Key: InstancePatchStateFilterKey;
        /** The value for the filter, must be an integer greater than or equal to 0. **/
        Values: InstancePatchStateFilterValues;
        /** The type of comparison that should be performed for the value: Equal, NotEqual,
LessThan or GreaterThan. **/
        Type: InstancePatchStateOperatorType;
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
    export interface InvalidAutomationExecutionParametersException {
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
    export interface InvalidDocumentSchemaVersion {
        Message?: String;
    }
    export interface InvalidDocumentVersion {
        Message?: String;
    }
    export interface InvalidFilter {
        Message?: String;
    }
    export interface InvalidFilterKey {
    }
    export interface InvalidFilterValue {
        Message?: String;
    }
    export interface InvalidInstanceId {
        Message?: String;
    }
    export interface InvalidInstanceInformationFilterValue {
        message?: String;
    }
    export interface InvalidItemContentException {
        TypeName?: InventoryItemTypeName;
        Message?: String;
    }
    export interface InvalidKeyId {
        message?: String;
    }
    export interface InvalidNextToken {
    }
    export interface InvalidNotificationConfig {
        Message?: String;
    }
    export interface InvalidOutputFolder {
    }
    export interface InvalidOutputLocation {
    }
    export interface InvalidParameters {
        Message?: String;
    }
    export interface InvalidPermissionType {
        Message?: String;
    }
    export interface InvalidPluginName {
    }
    export interface InvalidResourceId {
    }
    export interface InvalidResourceType {
    }
    export interface InvalidResultAttributeException {
        Message?: String;
    }
    export interface InvalidRole {
        Message?: String;
    }
    export interface InvalidSchedule {
        Message?: String;
    }
    export interface InvalidTarget {
        Message?: String;
    }
    export interface InvalidTypeNameException {
        Message?: String;
    }
    export interface InvalidUpdate {
        Message?: String;
    }
    export interface InventoryFilter {
        /** The name of the filter key. **/
        Key: InventoryFilterKey;
        /** Inventory filter values. Example: inventory filter where instance IDs are
specified as values Key=AWS:InstanceInformation.InstanceId,Values=
i-a12b3c4d5e6g, i-1a2b3c4d5e6,Type=Equal **/
        Values: InventoryFilterValueList;
        /** The type of filter. Valid values include the following:
&quot;Equal&quot;|&quot;NotEqual&quot;|&quot;BeginWith&quot;|&quot;LessThan&quot;|&quot;GreaterThan&quot; **/
        Type?: InventoryQueryOperatorType;
    }
    export interface InventoryItem {
        /** The name of the inventory type. Default inventory item type names start with AWS 
. Custom inventory type names will start with Custom . Default inventory item
types include the following: AWS:AWSComponent , AWS:Application , 
AWS:InstanceInformation , AWS:Network , and AWS:WindowsUpdate . **/
        TypeName: InventoryItemTypeName;
        /** The schema version for the inventory item. **/
        SchemaVersion: InventoryItemSchemaVersion;
        /** The time the inventory information was collected. **/
        CaptureTime: InventoryItemCaptureTime;
        /** MD5 hash of the inventory item type contents. The content hash is used to
determine whether to update inventory information. The PutInventory API does not
update the inventory item type contents if the MD5 hash has not changed since
last update. **/
        ContentHash?: InventoryItemContentHash;
        /** The inventory data of the inventory type. **/
        Content?: InventoryItemEntryList;
    }
    export interface InventoryItemAttribute {
        /** Name of the inventory item attribute. **/
        Name: InventoryItemAttributeName;
        /** The data type of the inventory item attribute. **/
        DataType: InventoryAttributeDataType;
    }
    export interface InventoryItemSchema {
        /** The name of the inventory type. Default inventory item type names start with AWS 
. Custom inventory type names will start with Custom . Default inventory item
types include the following: AWS:AWSComponent , AWS:Application , 
AWS:InstanceInformation , AWS:Network , and AWS:WindowsUpdate . **/
        TypeName: InventoryItemTypeName;
        /** The schema version for the inventory item. **/
        Version?: InventoryItemSchemaVersion;
        /** The schema attributes for inventory. This contains data type and attribute name. **/
        Attributes: InventoryItemAttributeList;
    }
    export interface InventoryResultEntity {
        /** ID of the inventory result entity. For example, for managed instance inventory
the result will be the managed instance ID. For EC2 instance inventory, the
result will be the instance ID. **/
        Id?: InventoryResultEntityId;
        /** The data section in the inventory result entity json. **/
        Data?: InventoryResultItemMap;
    }
    export interface InventoryResultItem {
        /** The name of the inventory result item type. **/
        TypeName: InventoryItemTypeName;
        /** The schema version for the inventory result item/ **/
        SchemaVersion: InventoryItemSchemaVersion;
        /** The time inventory item data was captured. **/
        CaptureTime?: InventoryItemCaptureTime;
        /** MD5 hash of the inventory item type contents. The content hash is used to
determine whether to update inventory information. The PutInventory API does not
update the inventory item type contents if the MD5 hash has not changed since
last update. **/
        ContentHash?: InventoryItemContentHash;
        /** Contains all the inventory data of the item type. Results include attribute
names and values. **/
        Content: InventoryItemEntryList;
    }
    export interface InvocationDoesNotExist {
    }
    export interface ItemContentMismatchException {
        TypeName?: InventoryItemTypeName;
        Message?: String;
    }
    export interface ItemSizeLimitExceededException {
        TypeName?: InventoryItemTypeName;
        Message?: String;
    }
    export interface ListAssociationsRequest {
        /** One or more filters. Use a filter to return a more specific list of results. **/
        AssociationFilterList?: AssociationFilterList;
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
    export interface ListDocumentVersionsRequest {
        /** The name of the document about which you want version information. **/
        Name: DocumentName;
        /** The maximum number of items to return for this call. The call also returns a
token that you can specify in a subsequent call to get the next set of results. **/
        MaxResults?: MaxResults;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        NextToken?: NextToken;
    }
    export interface ListDocumentVersionsResult {
        /** The document versions. **/
        DocumentVersions?: DocumentVersionList;
        /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
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
    export interface ListInventoryEntriesRequest {
        /** The instance ID for which you want inventory information. **/
        InstanceId: InstanceId;
        /** The type of inventory item for which you want information. **/
        TypeName: InventoryItemTypeName;
        /** One or more filters. Use a filter to return a more specific list of results. **/
        Filters?: InventoryFilterList;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        NextToken?: NextToken;
        /** The maximum number of items to return for this call. The call also returns a
token that you can specify in a subsequent call to get the next set of results. **/
        MaxResults?: MaxResults;
    }
    export interface ListInventoryEntriesResult {
        /** The type of inventory item returned by the request. **/
        TypeName?: InventoryItemTypeName;
        /** The instance ID targeted by the request to query inventory information. **/
        InstanceId?: InstanceId;
        /** The inventory schema version used by the instance(s). **/
        SchemaVersion?: InventoryItemSchemaVersion;
        /** The time that inventory information was collected for the instance(s). **/
        CaptureTime?: InventoryItemCaptureTime;
        /** A list of inventory items on the instance(s). **/
        Entries?: InventoryItemEntryList;
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
    export interface LoggingInfo {
        /** The name of an Amazon S3 bucket where execution logs are stored . **/
        S3BucketName: S3BucketName;
        /** (Optional) The Amazon S3 bucket subfolder. **/
        S3KeyPrefix?: S3KeyPrefix;
        /** The region where the Amazon S3 bucket is located. **/
        S3Region: S3Region;
    }
    export interface MaintenanceWindowExecution {
        /** The ID of the Maintenance Window. **/
        WindowId?: MaintenanceWindowId;
        /** The ID of the Maintenance Window execution. **/
        WindowExecutionId?: MaintenanceWindowExecutionId;
        /** The status of the execution. **/
        Status?: MaintenanceWindowExecutionStatus;
        /** The details explaining the Status. Only available for certain status values. **/
        StatusDetails?: MaintenanceWindowExecutionStatusDetails;
        /** The time the execution started. **/
        StartTime?: DateTime;
        /** The time the execution finished. **/
        EndTime?: DateTime;
    }
    export interface MaintenanceWindowExecutionTaskIdentity {
        /** The ID of the Maintenance Window execution that ran the task. **/
        WindowExecutionId?: MaintenanceWindowExecutionId;
        /** The ID of the specific task execution in the Maintenance Window execution. **/
        TaskExecutionId?: MaintenanceWindowExecutionTaskId;
        /** The status of the task execution. **/
        Status?: MaintenanceWindowExecutionStatus;
        /** The details explaining the status of the task execution. Only available for
certain status values. **/
        StatusDetails?: MaintenanceWindowExecutionStatusDetails;
        /** The time the task execution started. **/
        StartTime?: DateTime;
        /** The time the task execution finished. **/
        EndTime?: DateTime;
        /** The ARN of the executed task. **/
        TaskArn?: MaintenanceWindowTaskArn;
        /** The type of executed task. **/
        TaskType?: MaintenanceWindowTaskType;
    }
    export interface MaintenanceWindowExecutionTaskInvocationIdentity {
        /** The ID of the Maintenance Window execution that ran the task. **/
        WindowExecutionId?: MaintenanceWindowExecutionId;
        /** The ID of the specific task execution in the Maintenance Window execution. **/
        TaskExecutionId?: MaintenanceWindowExecutionTaskId;
        /** The ID of the task invocation. **/
        InvocationId?: MaintenanceWindowExecutionTaskInvocationId;
        /** The ID of the action performed in the service that actually handled the task
invocation. If the task type is RUN_COMMAND, this value is the command ID. **/
        ExecutionId?: MaintenanceWindowExecutionTaskExecutionId;
        /** The parameters that were provided for the invocation when it was executed. **/
        Parameters?: MaintenanceWindowExecutionTaskInvocationParameters;
        /** The status of the task invocation. **/
        Status?: MaintenanceWindowExecutionStatus;
        /** The details explaining the status of the task invocation. Only available for
certain Status values. **/
        StatusDetails?: MaintenanceWindowExecutionStatusDetails;
        /** The time the invocation started. **/
        StartTime?: DateTime;
        /** The time the invocation finished. **/
        EndTime?: DateTime;
        /** User-provided value that was specified when the target was registered with the
Maintenance Window. This was also included in any CloudWatch events raised
during the task invocation. **/
        OwnerInformation?: OwnerInformation;
        /** The ID of the target definition in this Maintenance Window the invocation was
performed for. **/
        WindowTargetId?: MaintenanceWindowTaskTargetId;
    }
    export interface MaintenanceWindowFilter {
        /** The name of the filter. **/
        Key?: MaintenanceWindowFilterKey;
        /** The filter values. **/
        Values?: MaintenanceWindowFilterValues;
    }
    export interface MaintenanceWindowIdentity {
        /** The ID of the Maintenance Window. **/
        WindowId?: MaintenanceWindowId;
        /** The name of the Maintenance Window. **/
        Name?: MaintenanceWindowName;
        /** Whether the Maintenance Window is enabled. **/
        Enabled?: MaintenanceWindowEnabled;
        /** The duration of the Maintenance Window in hours. **/
        Duration?: MaintenanceWindowDurationHours;
        /** The number of hours before the end of the Maintenance Window that Systems
Manager stops scheduling new tasks for execution. **/
        Cutoff?: MaintenanceWindowCutoff;
    }
    export interface MaintenanceWindowTarget {
        /** The Maintenance Window ID where the target is registered. **/
        WindowId?: MaintenanceWindowId;
        /** The ID of the target. **/
        WindowTargetId?: MaintenanceWindowTargetId;
        /** The type of target. **/
        ResourceType?: MaintenanceWindowResourceType;
        /** The targets (either instances or tags). Instances are specified using
Key=instanceids,Values=&lt;instanceid1&gt;,&lt;instanceid2&gt;. Tags are specified using
Key=&lt;tag name&gt;,Values=&lt;tag value&gt;. **/
        Targets?: Targets;
        /** User-provided value that will be included in any CloudWatch events raised while
running tasks for these targets in this Maintenance Window. **/
        OwnerInformation?: OwnerInformation;
    }
    export interface MaintenanceWindowTask {
        /** The Maintenance Window ID where the task is registered. **/
        WindowId?: MaintenanceWindowId;
        /** The task ID. **/
        WindowTaskId?: MaintenanceWindowTaskId;
        /** The ARN of the task to execute. **/
        TaskArn?: MaintenanceWindowTaskArn;
        /** The type of task. **/
        Type?: MaintenanceWindowTaskType;
        /** The targets (either instances or tags). Instances are specified using
Key=instanceids,Values=&lt;instanceid1&gt;,&lt;instanceid2&gt;. Tags are specified using
Key=&lt;tag name&gt;,Values=&lt;tag value&gt;. **/
        Targets?: Targets;
        /** The parameters that should be passed to the task when it is executed. **/
        TaskParameters?: MaintenanceWindowTaskParameters;
        /** The priority of the task in the Maintenance Window, the lower the number the
higher the priority. Tasks in a Maintenance Window are scheduled in priority
order with tasks that have the same priority scheduled in parallel. **/
        Priority?: MaintenanceWindowTaskPriority;
        /** Information about an Amazon S3 bucket to write task-level logs to. **/
        LoggingInfo?: LoggingInfo;
        /** The role that should be assumed when executing the task **/
        ServiceRoleArn?: ServiceRole;
        /** The maximum number of targets this task can be run for in parallel. **/
        MaxConcurrency?: VelocityConstraint;
        /** The maximum number of errors allowed before this task stops being scheduled. **/
        MaxErrors?: VelocityConstraint;
    }
    export interface MaintenanceWindowTaskParameterValueExpression {
        /** This field contains an array of 0 or more strings, each 1 to 255 characters in
length. **/
        Values?: MaintenanceWindowTaskParameterValueList;
    }
    export interface MaxDocumentSizeExceeded {
        Message?: String;
    }
    export interface ModifyDocumentPermissionRequest {
        /** The name of the document that you want to share. **/
        Name: DocumentName;
        /** The permission type for the document. The permission type can be Share . **/
        PermissionType: DocumentPermissionType;
        /** The AWS user accounts that should have access to the document. The account IDs
can either be a group of account IDs or All . **/
        AccountIdsToAdd?: AccountIdList;
        /** The AWS user accounts that should no longer have access to the document. The AWS
user account can either be a group of account IDs or All . This action has a
higher priority than AccountIdsToAdd . If you specify an account ID to add and
the same ID to remove, the system removes access to the document. **/
        AccountIdsToRemove?: AccountIdList;
    }
    export interface ModifyDocumentPermissionResponse {
    }
    export interface NotificationConfig {
        /** An Amazon Resource Name (ARN) for a Simple Notification Service (SNS) topic. Run
Command pushes notifications about command status changes to this topic. **/
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
    export interface Parameter {
        /** The name of the parameter. **/
        Name?: PSParameterName;
        /** The type of parameter. Valid values include the following: String, String list,
Secure string. **/
        Type?: ParameterType;
        /** The parameter value. **/
        Value?: PSParameterValue;
    }
    export interface ParameterAlreadyExists {
        message?: String;
    }
    export interface ParameterHistory {
        /** The name of the parameter. **/
        Name?: PSParameterName;
        /** The type of parameter used. **/
        Type?: ParameterType;
        /** The ID of the query key used for this parameter. **/
        KeyId?: ParameterKeyId;
        /** Date the parameter was last changed or updated. **/
        LastModifiedDate?: DateTime;
        /** Amazon Resource Name (ARN) of the AWS user who last changed the parameter. **/
        LastModifiedUser?: String;
        /** Information about the parameter. **/
        Description?: ParameterDescription;
        /** The parameter value. **/
        Value?: PSParameterValue;
    }
    export interface ParameterLimitExceeded {
        message?: String;
    }
    export interface ParameterMetadata {
        /** The parameter name. **/
        Name?: PSParameterName;
        /** The type of parameter. Valid parameter types include the following: String,
String list, Secure string. **/
        Type?: ParameterType;
        /** The ID of the query key used for this parameter. **/
        KeyId?: ParameterKeyId;
        /** Date the parameter was last changed or updated. **/
        LastModifiedDate?: DateTime;
        /** Amazon Resource Name (ARN) of the AWS user who last changed the parameter. **/
        LastModifiedUser?: String;
        /** Description of the parameter actions. **/
        Description?: ParameterDescription;
    }
    export interface ParameterNotFound {
        message?: String;
    }
    export interface ParametersFilter {
        /** The name of the filter. **/
        Key?: ParametersFilterKey;
        /** The filter values. **/
        Values: ParametersFilterValueList;
    }
    export interface Patch {
        /** The ID of the patch (this is different than the Microsoft Knowledge Base ID). **/
        Id?: PatchId;
        /** The date the patch was released. **/
        ReleaseDate?: DateTime;
        /** The title of the patch. **/
        Title?: PatchTitle;
        /** The description of the patch. **/
        Description?: PatchDescription;
        /** The URL where more information can be obtained about the patch. **/
        ContentUrl?: PatchContentUrl;
        /** The name of the vendor providing the patch. **/
        Vendor?: PatchVendor;
        /** The product family the patch is applicable for (for example, Windows). **/
        ProductFamily?: PatchProductFamily;
        /** The specific product the patch is applicable for (for example,
WindowsServer2016). **/
        Product?: PatchProduct;
        /** The classification of the patch (for example, SecurityUpdates, Updates,
CriticalUpdates). **/
        Classification?: PatchClassification;
        /** The severity of the patch (for example Critical, Important, Moderate). **/
        MsrcSeverity?: PatchMsrcSeverity;
        /** The Microsoft Knowledge Base ID of the patch. **/
        KbNumber?: PatchKbNumber;
        /** The ID of the MSRC bulletin the patch is related to. **/
        MsrcNumber?: PatchMsrcNumber;
        /** The language of the patch if it’s language-specific. **/
        Language?: PatchLanguage;
    }
    export interface PatchBaselineIdentity {
        /** The ID of the patch baseline. **/
        BaselineId?: BaselineId;
        /** The name of the patch baseline. **/
        BaselineName?: BaselineName;
        /** The description of the patch baseline. **/
        BaselineDescription?: BaselineDescription;
        /** Whether this is the default baseline. **/
        DefaultBaseline?: DefaultBaseline;
    }
    export interface PatchComplianceData {
        /** The title of the patch. **/
        Title: PatchTitle;
        /** The Microsoft Knowledge Base ID of the patch. **/
        KBId: PatchKbNumber;
        /** The classification of the patch (for example, SecurityUpdates, Updates,
CriticalUpdates). **/
        Classification: PatchClassification;
        /** The severity of the patch (for example, Critical, Important, Moderate). **/
        Severity: PatchSeverity;
        /** The state of the patch on the instance (INSTALLED, INSTALLED_OTHER, MISSING,
NOT_APPLICABLE or FAILED). **/
        State: PatchComplianceDataState;
        /** The date/time the patch was installed on the instance. **/
        InstalledTime: PatchInstalledTime;
    }
    export interface PatchFilter {
        /** The key for the filter (PRODUCT, CLASSIFICATION, MSRC_SEVERITY, PATCH_ID) **/
        Key: PatchFilterKey;
        /** The value for the filter key. **/
        Values: PatchFilterValueList;
    }
    export interface PatchFilterGroup {
        /** The set of patch filters that make up the group. **/
        PatchFilters: PatchFilterList;
    }
    export interface PatchGroupPatchBaselineMapping {
        /** The name of the patch group registered with the patch baseline. **/
        PatchGroup?: PatchGroup;
        /** The patch baseline the patch group is registered with. **/
        BaselineIdentity?: PatchBaselineIdentity;
    }
    export interface PatchOrchestratorFilter {
        /** The key for the filter. **/
        Key?: PatchOrchestratorFilterKey;
        /** The value for the filter. **/
        Values?: PatchOrchestratorFilterValues;
    }
    export interface PatchRule {
        /** The patch filter group that defines the criteria for the rule. **/
        PatchFilterGroup: PatchFilterGroup;
        /** The number of days after the release date of each patch matched by the rule the
patch is marked as approved in the patch baseline. **/
        ApproveAfterDays: ApproveAfterDays;
    }
    export interface PatchRuleGroup {
        /** The rules that make up the rule group. **/
        PatchRules: PatchRuleList;
    }
    export interface PatchStatus {
        /** The approval status of a patch (APPROVED, PENDING_APPROVAL, EXPLICIT_APPROVED,
EXPLICIT_REJECTED). **/
        DeploymentStatus?: PatchDeploymentStatus;
        /** The date the patch was approved (or will be approved if the status is
PENDING_APPROVAL). **/
        ApprovalDate?: DateTime;
    }
    export interface PutInventoryRequest {
        /** One or more instance IDs where you want to add or update inventory items. **/
        InstanceId: InstanceId;
        /** The inventory items that you want to add or update on instances. **/
        Items: InventoryItemList;
    }
    export interface PutInventoryResult {
    }
    export interface PutParameterRequest {
        /** The name of the parameter that you want to add to the system. **/
        Name: PSParameterName;
        /** Information about the parameter that you want to add to the system **/
        Description?: ParameterDescription;
        /** The parameter value that you want to add to the system. **/
        Value: PSParameterValue;
        /** The type of parameter that you want to add to the system. **/
        Type: ParameterType;
        /** The parameter key ID that you want to add to the system. **/
        KeyId?: ParameterKeyId;
        /** Overwrite an existing parameter. **/
        Overwrite?: Boolean;
    }
    export interface PutParameterResult {
    }
    export interface RegisterDefaultPatchBaselineRequest {
        /** The ID of the patch baseline that should be the default patch baseline. **/
        BaselineId: BaselineId;
    }
    export interface RegisterDefaultPatchBaselineResult {
        /** The ID of the default patch baseline. **/
        BaselineId?: BaselineId;
    }
    export interface RegisterPatchBaselineForPatchGroupRequest {
        /** The ID of the patch baseline to register the patch group with. **/
        BaselineId: BaselineId;
        /** The name of the patch group that should be registered with the patch baseline. **/
        PatchGroup: PatchGroup;
    }
    export interface RegisterPatchBaselineForPatchGroupResult {
        /** The ID of the patch baseline the patch group was registered with. **/
        BaselineId?: BaselineId;
        /** The name of the patch group registered with the patch baseline. **/
        PatchGroup?: PatchGroup;
    }
    export interface RegisterTargetWithMaintenanceWindowRequest {
        /** The ID of the Maintenance Window the target should be registered with. **/
        WindowId: MaintenanceWindowId;
        /** The type of target being registered with the Maintenance Window. **/
        ResourceType: MaintenanceWindowResourceType;
        /** The targets (either instances or tags). Instances are specified using
Key=instanceids,Values=&lt;instanceid1&gt;,&lt;instanceid2&gt;. Tags are specified using
Key=&lt;tag name&gt;,Values=&lt;tag value&gt;. **/
        Targets: Targets;
        /** User-provided value that will be included in any CloudWatch events raised while
running tasks for these targets in this Maintenance Window. **/
        OwnerInformation?: OwnerInformation;
        /** User-provided idempotency token. **/
        ClientToken?: ClientToken;
    }
    export interface RegisterTargetWithMaintenanceWindowResult {
        /** The ID of the target definition in this Maintenance Window. **/
        WindowTargetId?: MaintenanceWindowTargetId;
    }
    export interface RegisterTaskWithMaintenanceWindowRequest {
        /** The id of the Maintenance Window the task should be added to. **/
        WindowId: MaintenanceWindowId;
        /** The targets (either instances or tags). Instances are specified using
Key=instanceids,Values=&lt;instanceid1&gt;,&lt;instanceid2&gt;. Tags are specified using
Key=&lt;tag name&gt;,Values=&lt;tag value&gt;. **/
        Targets: Targets;
        /** The ARN of the task to execute **/
        TaskArn: MaintenanceWindowTaskArn;
        /** The role that should be assumed when executing the task. **/
        ServiceRoleArn: ServiceRole;
        /** The type of task being registered. **/
        TaskType: MaintenanceWindowTaskType;
        /** The parameters that should be passed to the task when it is executed. **/
        TaskParameters?: MaintenanceWindowTaskParameters;
        /** The priority of the task in the Maintenance Window, the lower the number the
higher the priority. Tasks in a Maintenance Window are scheduled in priority
order with tasks that have the same priority scheduled in parallel. **/
        Priority?: MaintenanceWindowTaskPriority;
        /** The maximum number of targets this task can be run for in parallel. **/
        MaxConcurrency: VelocityConstraint;
        /** The maximum number of errors allowed before this task stops being scheduled. **/
        MaxErrors: VelocityConstraint;
        /** A structure containing information about an Amazon S3 bucket to write
instance-level logs to. **/
        LoggingInfo?: LoggingInfo;
        /** User-provided idempotency token. **/
        ClientToken?: ClientToken;
    }
    export interface RegisterTaskWithMaintenanceWindowResult {
        /** The id of the task in the Maintenance Window. **/
        WindowTaskId?: MaintenanceWindowTaskId;
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
    export interface ResourceInUseException {
        Message?: String;
    }
    export interface ResourceLimitExceededException {
        Message?: String;
    }
    export interface ResultAttribute {
        /** Name of the inventory item type. Valid value: “AWS:InstanceInformation”. Default
Value: “AWS:InstanceInformation”. **/
        TypeName: InventoryItemTypeName;
    }
    export interface S3OutputLocation {
        /** The Amazon S3 region where the association information is stored. **/
        OutputS3Region?: S3Region;
        /** The name of the Amazon S3 bucket. **/
        OutputS3BucketName?: S3BucketName;
        /** The Amazon S3 bucket subfolder. **/
        OutputS3KeyPrefix?: S3KeyPrefix;
    }
    export interface S3OutputUrl {
        /** A URL for an Amazon S3 bucket where you want to store the results of this
request. **/
        OutputUrl?: Url;
    }
    export interface SendCommandRequest {
        /** Required. The instance IDs where the command should execute. You can specify a
maximum of 50 IDs. **/
        InstanceIds?: InstanceIdList;
        /** (Optional) An array of search criteria that targets instances using a Key ; 
Value combination that you specify. Targets is required if you don&#x27;t provide one
or more instance IDs in the call. For more information about how to use Targets 
, see Executing a Command Using Amazon EC2 Run Command
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/run-command.html] (Linux) or 
Executing a Command Using Amazon EC2 Run Command
[http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/run-command.html] 
(Windows). **/
        Targets?: Targets;
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
        /** (Optional) The region where the Amazon Simple Storage Service (Amazon S3) output
bucket is located. The default value is the region where Run Command is being
called. **/
        OutputS3Region?: S3Region;
        /** The name of the S3 bucket where command execution responses should be stored. **/
        OutputS3BucketName?: S3BucketName;
        /** The directory structure within the S3 bucket where the responses should be
stored. **/
        OutputS3KeyPrefix?: S3KeyPrefix;
        /** (Optional) The maximum number of instances that are allowed to execute the
command at the same time. You can specify a number such as “10” or a percentage
such as “10%”. The default value is 50. For more information about how to use 
MaxConcurrency , see Executing a Command Using Amazon EC2 Run Command
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/run-command.html] (Linux) or 
Executing a Command Using Amazon EC2 Run Command
[http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/run-command.html] 
(Windows). **/
        MaxConcurrency?: VelocityConstraint;
        /** The maximum number of errors allowed without the command failing. When the
command fails one more time beyond the value of MaxErrors , the systems stops
sending the command to additional targets. You can specify a number like “10” or
a percentage like “10%”. The default value is 50. For more information about how
to use MaxErrors , see Executing a Command Using Amazon EC2 Run Command
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/run-command.html] (Linux) or 
Executing a Command Using Amazon EC2 Run Command
[http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/run-command.html] 
(Windows). **/
        MaxErrors?: VelocityConstraint;
        /** The IAM role that Systems Manager uses to send notifications. **/
        ServiceRoleArn?: ServiceRole;
        /** Configurations for sending notifications. **/
        NotificationConfig?: NotificationConfig;
    }
    export interface SendCommandResult {
        /** The request as it was received by Systems Manager. Also provides the command ID
which can be used future references to this request. **/
        Command?: Command;
    }
    export interface StartAutomationExecutionRequest {
        /** The name of the Automation document to use for this execution. **/
        DocumentName: DocumentARN;
        /** The version of the Automation document to use for this execution. **/
        DocumentVersion?: DocumentVersion;
        /** A key-value map of execution parameters, which match the declared parameters in
the Automation document. **/
        Parameters?: AutomationParameterMap;
    }
    export interface StartAutomationExecutionResult {
        /** The unique ID of a newly scheduled automation execution. **/
        AutomationExecutionId?: AutomationExecutionId;
    }
    export interface StatusUnchanged {
    }
    export interface StepExecution {
        /** The name of this execution step. **/
        StepName?: String;
        /** The action this step performs. The action determines the behavior of the step. **/
        Action?: AutomationActionName;
        /** If a step has begun execution, this contains the time the step started. If the
step is in Pending status, this field is not populated. **/
        ExecutionStartTime?: DateTime;
        /** If a step has finished execution, this contains the time the execution ended. If
the step has not yet concluded, this field is not populated. **/
        ExecutionEndTime?: DateTime;
        /** The execution status for this step. Valid values include: Pending , InProgress , 
Success , Cancelled , Failed , and TimedOut . **/
        StepStatus?: AutomationExecutionStatus;
        /** The response code returned by the execution of the step. **/
        ResponseCode?: String;
        /** Fully-resolved values passed into the step before execution. **/
        Inputs?: NormalStringMap;
        /** Returned values from the execution of the step. **/
        Outputs?: AutomationParameterMap;
        /** A message associated with the response code for an execution. **/
        Response?: String;
        /** If a step failed, this message explains why the execution failed. **/
        FailureMessage?: String;
    }
    export interface StopAutomationExecutionRequest {
        /** The execution ID of the Automation to stop. **/
        AutomationExecutionId: AutomationExecutionId;
    }
    export interface StopAutomationExecutionResult {
    }
    export interface Tag {
        /** The name of the tag. **/
        Key: TagKey;
        /** The value of the tag. **/
        Value: TagValue;
    }
    export interface Target {
        /** User-defined criteria for sending commands that target instances that meet the
criteria. Key can be tag:&lt;Amazon EC2 tag&gt; or name:&lt;Amazon EC2 instance ID&gt; . For
example, tag:ServerRole or name:0123456789012345 . For more information about
how to send commands that target instances using Key ; Value parameters, see 
Executing a Command Using Amazon EC2 Run Command
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/run-command.html] (Linux) or 
Executing a Command Using Amazon EC2 Run Command
[http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/run-command.html] 
(Windows). **/
        Key?: TargetKey;
        /** User-defined criteria that maps to Key . For example, if you specified 
tag:ServerRole , you could specify value:WebServer to execute a command on
instances that include Amazon EC2 tags of ServerRole;WebServer. For more
information about how to send commands that target instances using Key ; Value 
parameters, see Executing a Command Using Amazon EC2 Run Command
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/run-command.html] (Linux) or 
Executing a Command Using Amazon EC2 Run Command
[http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/run-command.html] 
(Windows). **/
        Values?: TargetValues;
    }
    export interface TooManyTagsError {
    }
    export interface TooManyUpdates {
    }
    export interface TotalSizeLimitExceededException {
        Message?: String;
    }
    export interface UnsupportedInventorySchemaVersionException {
        Message?: String;
    }
    export interface UnsupportedParameterType {
        message?: String;
    }
    export interface UnsupportedPlatformType {
        Message?: String;
    }
    export interface UpdateAssociationRequest {
        /** The ID of the association you want to update. **/
        AssociationId: AssociationId;
        /** The parameters you want to update for the association. If you create a parameter
using Parameter Store, you can reference the parameter using
{{ssm:parameter-name}} **/
        Parameters?: Parameters;
        /** The document version you want update for the association. **/
        DocumentVersion?: DocumentVersion;
        /** The cron expression used to schedule the association that you want to update.
Supported expressions are every half, 1, 2, 4, 8 or 12 hour(s); every specified
day and time of the week. For example: cron(0 0/30 &amp;#42; 1/1 * ? *) to run every
thirty minutes; cron(0 0 0/4 1/1 * ? *) to run every four hours; and cron(0 0 10
? * SUN *) to run every Sunday at 10 a.m. **/
        ScheduleExpression?: ScheduleExpression;
        /** An Amazon S3 bucket where you want to store the results of this request.

&quot;{ \&quot;S3Location\&quot;: { \&quot;OutputS3Region\&quot;: \&quot;&lt;region&gt;\&quot;, \&quot;OutputS3BucketName\&quot;:
\&quot;bucket name\&quot;, \&quot;OutputS3KeyPrefix\&quot;: \&quot;folder name\&quot; } }&quot; **/
        OutputLocation?: InstanceAssociationOutputLocation;
    }
    export interface UpdateAssociationResult {
        /** The description of the association that was updated. **/
        AssociationDescription?: AssociationDescription;
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
    export interface UpdateDocumentDefaultVersionRequest {
        /** The name of a custom document that you want to set as the default version. **/
        Name: DocumentName;
        /** The version of a custom document that you want to set as the default version. **/
        DocumentVersion: DocumentVersionNumber;
    }
    export interface UpdateDocumentDefaultVersionResult {
        /** The description of a custom document that you want to set as the default
version. **/
        Description?: DocumentDefaultVersionDescription;
    }
    export interface UpdateDocumentRequest {
        /** The content in a document that you want to update. **/
        Content: DocumentContent;
        /** The name of the document that you want to update. **/
        Name: DocumentName;
        /** The version of the document that you want to update. **/
        DocumentVersion?: DocumentVersion;
    }
    export interface UpdateDocumentResult {
        /** A description of the document that was updated. **/
        DocumentDescription?: DocumentDescription;
    }
    export interface UpdateMaintenanceWindowRequest {
        /** The ID of the Maintenance Window to update. **/
        WindowId: MaintenanceWindowId;
        /** The name of the Maintenance Window. **/
        Name?: MaintenanceWindowName;
        /** The schedule of the Maintenance Window in the form of a cron or rate expression. **/
        Schedule?: MaintenanceWindowSchedule;
        /** The duration of the Maintenance Window in hours. **/
        Duration?: MaintenanceWindowDurationHours;
        /** The number of hours before the end of the Maintenance Window that Systems
Manager stops scheduling new tasks for execution. **/
        Cutoff?: MaintenanceWindowCutoff;
        /** Whether targets must be registered with the Maintenance Window before tasks can
be defined for those targets. **/
        AllowUnassociatedTargets?: MaintenanceWindowAllowUnassociatedTargets;
        /** Whether the Maintenance Window is enabled. **/
        Enabled?: MaintenanceWindowEnabled;
    }
    export interface UpdateMaintenanceWindowResult {
        /** The ID of the created Maintenance Window. **/
        WindowId?: MaintenanceWindowId;
        /** The name of the Maintenance Window. **/
        Name?: MaintenanceWindowName;
        /** The schedule of the Maintenance Window in the form of a cron or rate expression. **/
        Schedule?: MaintenanceWindowSchedule;
        /** The duration of the Maintenance Window in hours. **/
        Duration?: MaintenanceWindowDurationHours;
        /** The number of hours before the end of the Maintenance Window that Systems
Manager stops scheduling new tasks for execution. **/
        Cutoff?: MaintenanceWindowCutoff;
        /** Whether targets must be registered with the Maintenance Window before tasks can
be defined for those targets. **/
        AllowUnassociatedTargets?: MaintenanceWindowAllowUnassociatedTargets;
        /** Whether the Maintenance Window is enabled. **/
        Enabled?: MaintenanceWindowEnabled;
    }
    export interface UpdateManagedInstanceRoleRequest {
        /** The ID of the managed instance where you want to update the role. **/
        InstanceId: ManagedInstanceId;
        /** The IAM role you want to assign or change. **/
        IamRole: IamRole;
    }
    export interface UpdateManagedInstanceRoleResult {
    }
    export interface UpdatePatchBaselineRequest {
        /** The ID of the patch baseline to update. **/
        BaselineId: BaselineId;
        /** The name of the patch baseline. **/
        Name?: BaselineName;
        /** A set of global filters used to exclude patches from the baseline. **/
        GlobalFilters?: PatchFilterGroup;
        /** A set of rules used to include patches in the baseline. **/
        ApprovalRules?: PatchRuleGroup;
        /** A list of explicitly approved patches for the baseline. **/
        ApprovedPatches?: PatchIdList;
        /** A list of explicitly rejected patches for the baseline. **/
        RejectedPatches?: PatchIdList;
        /** A description of the patch baseline. **/
        Description?: BaselineDescription;
    }
    export interface UpdatePatchBaselineResult {
        /** The ID of the deleted patch baseline. **/
        BaselineId?: BaselineId;
        /** The name of the patch baseline. **/
        Name?: BaselineName;
        /** A set of global filters used to exclude patches from the baseline. **/
        GlobalFilters?: PatchFilterGroup;
        /** A set of rules used to include patches in the baseline. **/
        ApprovalRules?: PatchRuleGroup;
        /** A list of explicitly approved patches for the baseline. **/
        ApprovedPatches?: PatchIdList;
        /** A list of explicitly rejected patches for the baseline. **/
        RejectedPatches?: PatchIdList;
        /** The date when the patch baseline was created. **/
        CreatedDate?: DateTime;
        /** The date when the patch baseline was last modified. **/
        ModifiedDate?: DateTime;
        /** A description of the Patch Baseline. **/
        Description?: BaselineDescription;
    }
  }
}
