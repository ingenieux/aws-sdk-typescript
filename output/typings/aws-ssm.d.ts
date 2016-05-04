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
   * Simple Systems Manager (SSM) enables you to remotely manage the configuration of
your Amazon EC2 instance. Using SSM, you can run scripts or commands using
either EC2 Run Command or SSM Config. (SSM Config is currently available only
for Windows instances.)



Run CommandRun Command provides an on-demand experience for executing commands.
You can use pre-defined Amazon SSM documents to perform the actions listed later
in this section, or you can create your own documents. With these documents, you
can remotely configure your instances by sending commands using the Commands 
page in the Amazon EC2 console [http://console.aws.amazon.com/ec2/] , AWS Tools
for Windows PowerShell
[http://docs.aws.amazon.com/powershell/latest/reference/items/Amazon_Simple_Systems_Management_cmdlets.html] 
, or the AWS CLI
[http://docs.aws.amazon.com/cli/latest/reference/ssm/index.html] .

Run Command reports the status of the command execution for each instance
targeted by a command. You can also audit the command execution to understand
who executed commands, when, and what changes were made. By switching between
different SSM documents, you can quickly configure your instances with different
types of commands. To get started with Run Command, verify that your environment
meets the prerequisites for remotely running commands on EC2 instances ( Linux
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/remote-commands-prereq.html] 
or Windows
[http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/remote-commands-prereq.html] 
).



SSM ConfigSSM Config is a lightweight instance configuration solution. SSM
Config is currently only available for Windows instances. With SSM Config, you
can specify a setup configuration for your instances. SSM Config is similar to
EC2 User Data, which is another way of running one-time scripts or applying
settings during instance launch. SSM Config is an extension of this capability.
Using SSM documents, you can specify which actions the system should perform on
your instances, including which applications to install, which AWS Directory
Service directory to join, which Microsoft PowerShell modules to install, etc.
If an instance is missing one or more of these configurations, the system makes
those changes. By default, the system checks every five minutes to see if there
is a new configuration to apply as defined in a new SSM document. If so, the
system updates the instances accordingly. In this way, you can remotely maintain
a consistent configuration baseline on your instances. SSM Config is available
using the AWS CLI or the AWS Tools for Windows PowerShell. For more information,
see Managing Windows Instance Configuration
[http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-configuration-manage.html] 
.

SSM Config and Run Command include the following pre-defined documents.

Amazon Pre-defined SSM Documents Name Description PlatformAWS-RunShellScript

Run shell scripts

Linux

AWS-UpdateSSMAgent

Update the Amazon SSM agent

Linux

AWS-JoinDirectoryServiceDomain

Join an AWS Directory

Windows

AWS-RunPowerShellScript

Run PowerShell commands or scripts

Windows

AWS-UpdateEC2Config

Update the EC2Config service

Windows

AWS-ConfigureWindowsUpdate

Configure Windows Update settings

Windows

AWS-InstallApplication

Install, repair, or uninstall software using an MSI package

Windows

AWS-InstallPowerShellModule

Install PowerShell modules

Windows

AWS-ConfigureCloudWatch

Configure Amazon CloudWatch Logs to monitor applications and systems

Windows

The commands or scripts specified in SSM documents run with administrative
privilege on your instances because the Amazon SSM agent runs as root on Linux
and the EC2Config service runs in the Local System account on Windows. If a user
has permission to execute any of the pre-defined SSM documents (any document
that begins with AWS-&amp;#42;) then that user also has administrator access to the
instance. Delegate access to SSM and Run Command judiciously. This becomes
extremely important if you create your own SSM documents. Amazon Web Services
does not provide guidance about how to create secure SSM documents. You create
SSM documents and delegate access to Run Command at your own risk. As a security
best practice, we recommend that you assign access to &quot;AWS-*&quot; documents,
especially the AWS-RunShellScript document on Linux and the
AWS-RunPowerShellScript document on Windows, to trusted administrators only. You
can create SSM documents for specific tasks and delegate access to
non-administrators.
   *
   */
  export class SSM extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Attempts to cancel the command specified by the Command ID. There is no
guarantee that the command will be terminated and the underlying process
stopped.
     *
     * @error InvalidCommandId   
     * @error InvalidInstanceId   
     * @error DuplicateInstanceId   
     */
    cancelCommand(params: SSM.CancelCommandRequest, callback?: (err: SSM.InvalidCommandId|SSM.InvalidInstanceId|SSM.DuplicateInstanceId|any, data: SSM.CancelCommandResult|any) => void): Request<SSM.CancelCommandResult|any,SSM.InvalidCommandId|SSM.InvalidInstanceId|SSM.DuplicateInstanceId|any>;
    /**
     * Associates the specified SSM document with the specified instance.

When you associate an SSM document with an instance, the configuration agent on
the instance processes the document and configures the instance as specified.

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
    createAssociation(params: SSM.CreateAssociationRequest, callback?: (err: SSM.AssociationAlreadyExists|SSM.AssociationLimitExceeded|SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidInstanceId|SSM.UnsupportedPlatformType|SSM.InvalidParameters|any, data: SSM.CreateAssociationResult|any) => void): Request<SSM.CreateAssociationResult|any,SSM.AssociationAlreadyExists|SSM.AssociationLimitExceeded|SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidInstanceId|SSM.UnsupportedPlatformType|SSM.InvalidParameters|any>;
    /**
     * Associates the specified SSM document with the specified instances.

When you associate an SSM document with an instance, the configuration agent on
the instance processes the document and configures the instance as specified.

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
    createAssociationBatch(params: SSM.CreateAssociationBatchRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidInstanceId|SSM.InvalidParameters|SSM.DuplicateInstanceId|SSM.AssociationLimitExceeded|SSM.UnsupportedPlatformType|any, data: SSM.CreateAssociationBatchResult|any) => void): Request<SSM.CreateAssociationBatchResult|any,SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidInstanceId|SSM.InvalidParameters|SSM.DuplicateInstanceId|SSM.AssociationLimitExceeded|SSM.UnsupportedPlatformType|any>;
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
    createDocument(params: SSM.CreateDocumentRequest, callback?: (err: SSM.DocumentAlreadyExists|SSM.MaxDocumentSizeExceeded|SSM.InternalServerError|SSM.InvalidDocumentContent|SSM.DocumentLimitExceeded|any, data: SSM.CreateDocumentResult|any) => void): Request<SSM.CreateDocumentResult|any,SSM.DocumentAlreadyExists|SSM.MaxDocumentSizeExceeded|SSM.InternalServerError|SSM.InvalidDocumentContent|SSM.DocumentLimitExceeded|any>;
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
     * @error AssociatedInstances   
     */
    deleteDocument(params: SSM.DeleteDocumentRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidDocument|SSM.AssociatedInstances|any, data: SSM.DeleteDocumentResult|any) => void): Request<SSM.DeleteDocumentResult|any,SSM.InternalServerError|SSM.InvalidDocument|SSM.AssociatedInstances|any>;
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
     * Describes the specified SSM document.
     *
     * @error InternalServerError   
     * @error InvalidDocument   
     */
    describeDocument(params: SSM.DescribeDocumentRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidDocument|any, data: SSM.DescribeDocumentResult|any) => void): Request<SSM.DescribeDocumentResult|any,SSM.InternalServerError|SSM.InvalidDocument|any>;
    /**
     * Describes one or more of your instances. You can use this to get information
about instances like the operating system platform, the SSM agent version,
status etc. If you specify one or more instance IDs, it returns information for
those instances. If you do not specify instance IDs, it returns information for
all your instances. If you specify an instance ID that is not valid or an
instance that you do not own, you receive an error.
     *
     * @error InternalServerError   
     * @error InvalidInstanceId   
     * @error InvalidNextToken   
     * @error InvalidInstanceInformationFilterValue   
     * @error InvalidFilterKey   
     */
    describeInstanceInformation(params: SSM.DescribeInstanceInformationRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidInstanceId|SSM.InvalidNextToken|SSM.InvalidInstanceInformationFilterValue|SSM.InvalidFilterKey|any, data: SSM.DescribeInstanceInformationResult|any) => void): Request<SSM.DescribeInstanceInformationResult|any,SSM.InternalServerError|SSM.InvalidInstanceId|SSM.InvalidNextToken|SSM.InvalidInstanceInformationFilterValue|SSM.InvalidFilterKey|any>;
    /**
     * Gets the contents of the specified SSM document.
     *
     * @error InternalServerError   
     * @error InvalidDocument   
     */
    getDocument(params: SSM.GetDocumentRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidDocument|any, data: SSM.GetDocumentResult|any) => void): Request<SSM.GetDocumentResult|any,SSM.InternalServerError|SSM.InvalidDocument|any>;
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
     * @error InvalidCommandId   
     * @error InvalidInstanceId   
     * @error InvalidFilterKey   
     * @error InvalidNextToken   
     */
    listCommandInvocations(params: SSM.ListCommandInvocationsRequest, callback?: (err: SSM.InvalidCommandId|SSM.InvalidInstanceId|SSM.InvalidFilterKey|SSM.InvalidNextToken|any, data: SSM.ListCommandInvocationsResult|any) => void): Request<SSM.ListCommandInvocationsResult|any,SSM.InvalidCommandId|SSM.InvalidInstanceId|SSM.InvalidFilterKey|SSM.InvalidNextToken|any>;
    /**
     * Lists the commands requested by users of the AWS account.
     *
     * @error InvalidCommandId   
     * @error InvalidInstanceId   
     * @error InvalidFilterKey   
     * @error InvalidNextToken   
     */
    listCommands(params: SSM.ListCommandsRequest, callback?: (err: SSM.InvalidCommandId|SSM.InvalidInstanceId|SSM.InvalidFilterKey|SSM.InvalidNextToken|any, data: SSM.ListCommandsResult|any) => void): Request<SSM.ListCommandsResult|any,SSM.InvalidCommandId|SSM.InvalidInstanceId|SSM.InvalidFilterKey|SSM.InvalidNextToken|any>;
    /**
     * Describes one or more of your SSM documents.
     *
     * @error InternalServerError   
     * @error InvalidNextToken   
     * @error InvalidFilterKey   
     */
    listDocuments(params: SSM.ListDocumentsRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidNextToken|SSM.InvalidFilterKey|any, data: SSM.ListDocumentsResult|any) => void): Request<SSM.ListDocumentsResult|any,SSM.InternalServerError|SSM.InvalidNextToken|SSM.InvalidFilterKey|any>;
    /**
     * Executes commands on one or more remote instances.
     *
     * @error DuplicateInstanceId   
     * @error InvalidInstanceId   
     * @error InvalidDocument   
     * @error InvalidOutputFolder   
     * @error InvalidParameters   
     * @error UnsupportedPlatformType   
     */
    sendCommand(params: SSM.SendCommandRequest, callback?: (err: SSM.DuplicateInstanceId|SSM.InvalidInstanceId|SSM.InvalidDocument|SSM.InvalidOutputFolder|SSM.InvalidParameters|SSM.UnsupportedPlatformType|any, data: SSM.SendCommandResult|any) => void): Request<SSM.SendCommandResult|any,SSM.DuplicateInstanceId|SSM.InvalidInstanceId|SSM.InvalidDocument|SSM.InvalidOutputFolder|SSM.InvalidParameters|SSM.UnsupportedPlatformType|any>;
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

  }

  export module SSM {
    
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
    
    export type CreateAssociationBatchRequestEntries = CreateAssociationBatchRequestEntry[];
    
    export type DateTime = number;
    
    export type DescriptionInDocument = string;
    
    export type DocumentContent = string;
    
    export type DocumentFilterKey = string;
    
    export type DocumentFilterList = DocumentFilter[];
    
    export type DocumentFilterValue = string;
    
    export type DocumentIdentifierList = DocumentIdentifier[];
    
    export type DocumentName = string;
    
    export type DocumentParameterDefaultValue = string;
    
    export type DocumentParameterDescrption = string;
    
    export type DocumentParameterList = DocumentParameter[];
    
    export type DocumentParameterName = string;
    
    export type DocumentParameterType = string;
    
    export type DocumentSha1 = string;
    
    export type DocumentStatus = string;
    
    export type FailedCreateAssociationList = FailedCreateAssociation[];
    
    export type Fault = string;
    
    export type InstanceId = string;
    
    export type InstanceIdList = InstanceId[];
    
    export type InstanceInformationFilterKey = string;
    
    export type InstanceInformationFilterList = InstanceInformationFilter[];
    
    export type InstanceInformationFilterValue = string;
    
    export type InstanceInformationFilterValueSet = InstanceInformationFilterValue[];
    
    export type InstanceInformationList = InstanceInformation[];
    
    export type InvocationTraceOutput = string;
    
    export type MaxResults = number;
    
    export type MaxResultsEC2Compatible = number;
    
    export type NextToken = string;
    
    export type ParameterName = string;
    
    export type ParameterValue = string;
    
    export type ParameterValueList = ParameterValue[];
    
    export type Parameters = {[key:string]: ParameterValueList};
    
    export type PingStatus = string;
    
    export type PlatformType = string;
    
    export type PlatformTypeList = PlatformType[];
    
    export type ResponseCode = number;
    
    export type S3BucketName = string;
    
    export type S3KeyPrefix = string;
    
    export type StatusAdditionalInfo = string;
    
    export type StatusMessage = string;
    
    export type String = string;
    
    export type TimeoutSeconds = number;
    
    export type Version = string;

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
        /** The Windows Server instance ID. **/
        InstanceId: InstanceId;
        /** The parameters for the documents runtime configuration. **/
        Parameters?: Parameters;
    }
    export interface CreateAssociationResult {
        /** Information about the association. **/
        AssociationDescription?: AssociationDescription;
    }
    export interface CreateDocumentRequest {
        /** A valid JSON string. For more information about the contents of this string, see 
SSM Document
[http://docs.aws.amazon.com/ssm/latest/APIReference/aws-ssm-document.html] . **/
        Content: DocumentContent;
        /** A name for the SSM document. **/
        Name: DocumentName;
    }
    export interface CreateDocumentResult {
        /** Information about the SSM document. **/
        DocumentDescription?: DocumentDescription;
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
    export interface DescribeAssociationRequest {
        /** The name of the SSM document. **/
        Name: DocumentName;
        /** The Windows Server instance ID. **/
        InstanceId: InstanceId;
    }
    export interface DescribeAssociationResult {
        /** Information about the association. **/
        AssociationDescription?: AssociationDescription;
    }
    export interface DescribeDocumentRequest {
        /** The name of the SSM document. **/
        Name: DocumentName;
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
    }
    export interface DocumentDescription {
        /** The SHA1 hash of the document, which you can use for verification purposes. **/
        Sha1?: DocumentSha1;
        /** The name of the SSM document. **/
        Name?: DocumentName;
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
        Name?: DocumentName;
        /** The operating system platform. **/
        PlatformTypes?: PlatformTypeList;
    }
    export interface DocumentLimitExceeded {
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
        Name: DocumentName;
    }
    export interface GetDocumentResult {
        /** The name of the SSM document. **/
        Name?: DocumentName;
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
        /** The version of the SSM agent running on your instance. **/
        AgentVersion?: Version;
        /** Indicates whether latest version of the SSM agent is running on your instance. **/
        IsLatestVersion?: Boolean;
        /** The operating system platform type. **/
        PlatformType?: PlatformType;
        /** The name of the operating system platform running on your instance. **/
        PlatformName?: String;
        /** The version of the OS platform running on your instance. **/
        PlatformVersion?: String;
    }
    export interface InstanceInformationFilter {
        /** The name of the filter. **/
        key: InstanceInformationFilterKey;
        /** The filter values. **/
        valueSet: InstanceInformationFilterValueSet;
    }
    export interface InternalServerError {
        /** An error occurred on the server side. **/
        message?: String;
    }
    export interface InvalidCommandId {
    }
    export interface InvalidDocument {
        /** The SSM document does not exist or the document is not available to the user.
This exception can be issued by CreateAssociation, CreateAssociationBatch,
DeleteAssociation, DeleteDocument, DescribeAssociation, DescribeDocument,
GetDocument, SendCommand, or UpdateAssociationStatus. **/
        message?: String;
    }
    export interface InvalidDocumentContent {
        /** A description of the validation error. **/
        message?: String;
    }
    export interface InvalidFilterKey {
    }
    export interface InvalidInstanceId {
    }
    export interface InvalidInstanceInformationFilterValue {
        message?: String;
    }
    export interface InvalidNextToken {
    }
    export interface InvalidOutputFolder {
    }
    export interface InvalidParameters {
        /** The parameter values entered by the user do not work in the SSM document. For
example, incorrect type. This exception can be issued by CreateAssociation,
CreateAssociationBatch, or SendCommand. **/
        message?: String;
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
    export interface MaxDocumentSizeExceeded {
    }
    export interface SendCommandRequest {
        /** Required. The instance IDs where the command should execute. **/
        InstanceIds: InstanceIdList;
        /** Required. The name of the SSM document to execute. This can be an SSM public
document or a custom document. **/
        DocumentName: DocumentName;
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
    }
    export interface SendCommandResult {
        /** The request as it was received by SSM. Also provides the command ID which can be
used future references to this request. **/
        Command?: Command;
    }
    export interface StatusUnchanged {
    }
    export interface TooManyUpdates {
    }
    export interface UnsupportedPlatformType {
        message?: String;
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
  }
}
