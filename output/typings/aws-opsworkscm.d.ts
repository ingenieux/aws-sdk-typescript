// Type definitions for aws-sdk - AWS OpsWorks for Chef Automate
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2016-11-01
   * endpointPrefix: opsworks-cm
   * serviceAbbreviation: OpsWorksCM
   * signatureVersion: v4
   * protocol: json
   *
   * AWS OpsWorks for Chef AutomateA service that runs and manages configuration
management servers.

Glossary of terms

 &amp;#42; Server : A server is a configuration management server, and can be
   highly-available. The configuration manager runs on your instances by using
   various AWS services, such as Amazon Elastic Compute Cloud (EC2), and
   potentially Amazon Relational Database Service (RDS). A server is a generic
   abstraction over the configuration manager that you want to use, much like
   Amazon RDS. In AWS OpsWorks for Chef Automate, you do not start or stop
   servers. After you create servers, they continue to run until they are
   deleted.
   
   
 * Engine : The specific configuration manager that you want to use (such as 
   Chef ) is the engine.
   
   
 * Backup : This is an application-level backup of the data that the
   configuration manager stores. A backup creates a .tar.gz file that is stored
   in an Amazon Simple Storage Service (S3) bucket in your account. AWS OpsWorks
   for Chef Automate creates the S3 bucket when you launch the first instance. A
   backup maintains a snapshot of all of a server&#x27;s important attributes at the
   time of the backup.
   
   
 * Events : Events are always related to a server. Events are written during
   server creation, when health checks run, when backups are created, etc. When
   you delete a server, the server&#x27;s events are also deleted.
   
   
 * AccountAttributes : Every account has attributes that are assigned in the AWS
   OpsWorks for Chef Automate database. These attributes store information about
   configuration limits (servers, backups, etc.) and your customer account.
   
   

Throttling limits

All API operations allow for 5 requests per second with a burst of 10 requests
per second.
   *
   */
  export class OpsWorksCM extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * 
     *
     * @error InvalidStateException   
     * @error ResourceNotFoundException   
     * @error ValidationException   
     */
    associateNode(params: OpsWorksCM.AssociateNodeRequest, callback?: (err: OpsWorksCM.InvalidStateException|OpsWorksCM.ResourceNotFoundException|OpsWorksCM.ValidationException|any, data: OpsWorksCM.AssociateNodeResponse|any) => void): Request<OpsWorksCM.AssociateNodeResponse|any,OpsWorksCM.InvalidStateException|OpsWorksCM.ResourceNotFoundException|OpsWorksCM.ValidationException|any>;
    /**
     * Creates an application-level backup of a server. While the server is BACKING_UP 
, the server can not be modified and no additional backup can be created.

Backups can be created for RUNNING , HEALTHY and UNHEALTHY servers.

This operation is asnychronous.

By default 50 manual backups can be created.

A LimitExceededException is thrown then the maximum number of manual backup is
reached. A InvalidStateException is thrown when the server is not in any of
RUNNING, HEALTHY, UNHEALTHY. A ResourceNotFoundException is thrown when the
server is not found. A ValidationException is thrown when parameters of the
request are not valid.
     *
     * @error InvalidStateException   
     * @error LimitExceededException   
     * @error ResourceNotFoundException   
     * @error ValidationException   
     */
    createBackup(params: OpsWorksCM.CreateBackupRequest, callback?: (err: OpsWorksCM.InvalidStateException|OpsWorksCM.LimitExceededException|OpsWorksCM.ResourceNotFoundException|OpsWorksCM.ValidationException|any, data: OpsWorksCM.CreateBackupResponse|any) => void): Request<OpsWorksCM.CreateBackupResponse|any,OpsWorksCM.InvalidStateException|OpsWorksCM.LimitExceededException|OpsWorksCM.ResourceNotFoundException|OpsWorksCM.ValidationException|any>;
    /**
     * Creates and immedately starts a new Server. The server can be used once it has
reached the HEALTHY state.

This operation is asnychronous.

A LimitExceededException is thrown then the maximum number of server backup is
reached. A ResourceAlreadyExistsException is raise when a server with the same
name already exists in the account. A ResourceNotFoundException is thrown when a
backupId is passed, but the backup does not exist. A ValidationException is
thrown when parameters of the request are not valid.

By default 10 servers can be created. A LimitExceededException is raised when
the limit is exceeded.

When no security groups are provided by using SecurityGroupIds , AWS OpsWorks
creates a new security group. This security group opens the Chef server to the
world on TCP port 443. If a KeyName is present, SSH access is enabled. SSH is
also open to the world on TCP port 22.

By default, the Chef Server is accessible from any IP address. We recommend that
you update your security group rules to allow access from known IP addresses and
address ranges only. To edit security group rules, open Security Groups in the
navigation pane of the EC2 management console.
     *
     * @error LimitExceededException   
     * @error ResourceAlreadyExistsException   
     * @error ResourceNotFoundException   
     * @error ValidationException   
     */
    createServer(params: OpsWorksCM.CreateServerRequest, callback?: (err: OpsWorksCM.LimitExceededException|OpsWorksCM.ResourceAlreadyExistsException|OpsWorksCM.ResourceNotFoundException|OpsWorksCM.ValidationException|any, data: OpsWorksCM.CreateServerResponse|any) => void): Request<OpsWorksCM.CreateServerResponse|any,OpsWorksCM.LimitExceededException|OpsWorksCM.ResourceAlreadyExistsException|OpsWorksCM.ResourceNotFoundException|OpsWorksCM.ValidationException|any>;
    /**
     * Deletes a backup. You can delete both manual and automated backups.

This operation is asynchronous.

A InvalidStateException is thrown then a backup is already deleting. A 
ResourceNotFoundException is thrown when the backup does not exist. A 
ValidationException is thrown when parameters of the request are not valid.
     *
     * @error InvalidStateException   
     * @error ResourceNotFoundException   
     * @error ValidationException   
     */
    deleteBackup(params: OpsWorksCM.DeleteBackupRequest, callback?: (err: OpsWorksCM.InvalidStateException|OpsWorksCM.ResourceNotFoundException|OpsWorksCM.ValidationException|any, data: OpsWorksCM.DeleteBackupResponse|any) => void): Request<OpsWorksCM.DeleteBackupResponse|any,OpsWorksCM.InvalidStateException|OpsWorksCM.ResourceNotFoundException|OpsWorksCM.ValidationException|any>;
    /**
     * Deletes the server and the underlying AWS CloudFormation stack (including the
server&#x27;s EC2 instance). The server status updated to DELETING . Once the server
is successfully deleted, it will no longer be returned by DescribeServer 
requests. If the AWS CloudFormation stack cannot be deleted, the server cannot
be deleted.

This operation is asynchronous.

A InvalidStateException is thrown then a server is already deleting. A 
ResourceNotFoundException is thrown when the server does not exist. A 
ValidationException is raised when parameters of the request are invalid.
     *
     * @error InvalidStateException   
     * @error ResourceNotFoundException   
     * @error ValidationException   
     */
    deleteServer(params: OpsWorksCM.DeleteServerRequest, callback?: (err: OpsWorksCM.InvalidStateException|OpsWorksCM.ResourceNotFoundException|OpsWorksCM.ValidationException|any, data: OpsWorksCM.DeleteServerResponse|any) => void): Request<OpsWorksCM.DeleteServerResponse|any,OpsWorksCM.InvalidStateException|OpsWorksCM.ResourceNotFoundException|OpsWorksCM.ValidationException|any>;
    /**
     * Describes your account attributes, and creates requests to increase limits
before they are reached or exceeded.

This operation is synchronous.
     *
     */
    describeAccountAttributes(params: OpsWorksCM.DescribeAccountAttributesRequest, callback?: (err: any, data: OpsWorksCM.DescribeAccountAttributesResponse|any) => void): Request<OpsWorksCM.DescribeAccountAttributesResponse|any,any>;
    /**
     * Describes backups. The results are ordered by time, with newest backups first.
If you do not specify a BackupId or ServerName, the command returns all backups.

This operation is synchronous.

A ResourceNotFoundException is thrown when the backup does not exist. A 
ValidationException is raised when parameters of the request are invalid.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     * @error InvalidNextTokenException   
     */
    describeBackups(params: OpsWorksCM.DescribeBackupsRequest, callback?: (err: OpsWorksCM.ValidationException|OpsWorksCM.ResourceNotFoundException|OpsWorksCM.InvalidNextTokenException|any, data: OpsWorksCM.DescribeBackupsResponse|any) => void): Request<OpsWorksCM.DescribeBackupsResponse|any,OpsWorksCM.ValidationException|OpsWorksCM.ResourceNotFoundException|OpsWorksCM.InvalidNextTokenException|any>;
    /**
     * Describes events for a specified server. Results are ordered by time, with
newest events first.

This operation is synchronous.

A ResourceNotFoundException is thrown when the server does not exist. A 
ValidationException is raised when parameters of the request are invalid.
     *
     * @error ValidationException   
     * @error InvalidNextTokenException   
     * @error ResourceNotFoundException   
     */
    describeEvents(params: OpsWorksCM.DescribeEventsRequest, callback?: (err: OpsWorksCM.ValidationException|OpsWorksCM.InvalidNextTokenException|OpsWorksCM.ResourceNotFoundException|any, data: OpsWorksCM.DescribeEventsResponse|any) => void): Request<OpsWorksCM.DescribeEventsResponse|any,OpsWorksCM.ValidationException|OpsWorksCM.InvalidNextTokenException|OpsWorksCM.ResourceNotFoundException|any>;
    /**
     * 
     *
     * @error ResourceNotFoundException   
     * @error ValidationException   
     */
    describeNodeAssociationStatus(params: OpsWorksCM.DescribeNodeAssociationStatusRequest, callback?: (err: OpsWorksCM.ResourceNotFoundException|OpsWorksCM.ValidationException|any, data: OpsWorksCM.DescribeNodeAssociationStatusResponse|any) => void): Request<OpsWorksCM.DescribeNodeAssociationStatusResponse|any,OpsWorksCM.ResourceNotFoundException|OpsWorksCM.ValidationException|any>;
    /**
     * Lists all configuration management servers that are identified with your
account. Only the stored results from Amazon DynamoDB are returned. AWS OpsWorks
for Chef Automate does not query other services.

This operation is synchronous.

A ResourceNotFoundException is thrown when the server does not exist. A 
ValidationException is raised when parameters of the request are invalid.
     *
     * @error ValidationException   
     * @error ResourceNotFoundException   
     * @error InvalidNextTokenException   
     */
    describeServers(params: OpsWorksCM.DescribeServersRequest, callback?: (err: OpsWorksCM.ValidationException|OpsWorksCM.ResourceNotFoundException|OpsWorksCM.InvalidNextTokenException|any, data: OpsWorksCM.DescribeServersResponse|any) => void): Request<OpsWorksCM.DescribeServersResponse|any,OpsWorksCM.ValidationException|OpsWorksCM.ResourceNotFoundException|OpsWorksCM.InvalidNextTokenException|any>;
    /**
     * 
     *
     * @error InvalidStateException   
     * @error ResourceNotFoundException   
     * @error ValidationException   
     */
    disassociateNode(params: OpsWorksCM.DisassociateNodeRequest, callback?: (err: OpsWorksCM.InvalidStateException|OpsWorksCM.ResourceNotFoundException|OpsWorksCM.ValidationException|any, data: OpsWorksCM.DisassociateNodeResponse|any) => void): Request<OpsWorksCM.DisassociateNodeResponse|any,OpsWorksCM.InvalidStateException|OpsWorksCM.ResourceNotFoundException|OpsWorksCM.ValidationException|any>;
    /**
     * Restores a backup to a server that is in a RUNNING , FAILED , or HEALTHY state.
When you run RestoreServer, the server&#x27;s EC2 instance is deleted, and a new EC2
instance is configured. RestoreServer maintains the existing server endpoint, so
configuration management of all of the server&#x27;s client devices should continue
to work.

This operation is asynchronous.

A InvalidStateException is thrown when the server is not in a valid state. A 
ResourceNotFoundException is thrown when the server does not exist. A 
ValidationException is raised when parameters of the request are invalid.
     *
     * @error InvalidStateException   
     * @error ResourceNotFoundException   
     * @error ValidationException   
     */
    restoreServer(params: OpsWorksCM.RestoreServerRequest, callback?: (err: OpsWorksCM.InvalidStateException|OpsWorksCM.ResourceNotFoundException|OpsWorksCM.ValidationException|any, data: OpsWorksCM.RestoreServerResponse|any) => void): Request<OpsWorksCM.RestoreServerResponse|any,OpsWorksCM.InvalidStateException|OpsWorksCM.ResourceNotFoundException|OpsWorksCM.ValidationException|any>;
    /**
     * Manually starts server maintenance. This command can be useful if an earlier
maintenance attempt failed, and the underlying cause of maintenance failure has
been resolved. The server will switch to UNDER_MAINTENANCE state, while
maintenace is in progress.

Maintenace can only be started for HEALTHY and UNHEALTHY servers. A 
InvalidStateException is thrown otherwise. A ResourceNotFoundException is thrown
when the server does not exist. A ValidationException is raised when parameters
of the request are invalid.
     *
     * @error InvalidStateException   
     * @error ResourceNotFoundException   
     * @error ValidationException   
     */
    startMaintenance(params: OpsWorksCM.StartMaintenanceRequest, callback?: (err: OpsWorksCM.InvalidStateException|OpsWorksCM.ResourceNotFoundException|OpsWorksCM.ValidationException|any, data: OpsWorksCM.StartMaintenanceResponse|any) => void): Request<OpsWorksCM.StartMaintenanceResponse|any,OpsWorksCM.InvalidStateException|OpsWorksCM.ResourceNotFoundException|OpsWorksCM.ValidationException|any>;
    /**
     * Updates settings for a server.

This operation is synchronous.
     *
     * @error InvalidStateException   
     * @error ResourceNotFoundException   
     * @error ValidationException   
     */
    updateServer(params: OpsWorksCM.UpdateServerRequest, callback?: (err: OpsWorksCM.InvalidStateException|OpsWorksCM.ResourceNotFoundException|OpsWorksCM.ValidationException|any, data: OpsWorksCM.UpdateServerResponse|any) => void): Request<OpsWorksCM.UpdateServerResponse|any,OpsWorksCM.InvalidStateException|OpsWorksCM.ResourceNotFoundException|OpsWorksCM.ValidationException|any>;
    /**
     * Updates engine specific attributes on a specified server. Server will enter the 
MODIFYING state when this operation is in progress. Only one update can take
place at a time.

This operation can be use to reset Chef Server main API key ( CHEF_PIVOTAL_KEY 
).

This operation is asynchronous.



This operation can only be called for HEALTHY and UNHEALTHY servers. Otherwise a 
InvalidStateException is raised. A ResourceNotFoundException is thrown when the
server does not exist. A ValidationException is raised when parameters of the
request are invalid.
     *
     * @error InvalidStateException   
     * @error ResourceNotFoundException   
     * @error ValidationException   
     */
    updateServerEngineAttributes(params: OpsWorksCM.UpdateServerEngineAttributesRequest, callback?: (err: OpsWorksCM.InvalidStateException|OpsWorksCM.ResourceNotFoundException|OpsWorksCM.ValidationException|any, data: OpsWorksCM.UpdateServerEngineAttributesResponse|any) => void): Request<OpsWorksCM.UpdateServerEngineAttributesResponse|any,OpsWorksCM.InvalidStateException|OpsWorksCM.ResourceNotFoundException|OpsWorksCM.ValidationException|any>;

  }

  export module OpsWorksCM {
    
    export type AccountAttributes = AccountAttribute[];
    
    export type AttributeName = string;
    
    export type AttributeValue = string;
    
    export type BackupId = string;
    
    export type BackupRetentionCountDefinition = number;
    
    export type BackupStatus = string;
    
    export type BackupType = string;
    
    export type Backups = Backup[];
    
    export type Boolean = boolean;
    
    export type EngineAttributes = EngineAttribute[];
    
    export type InstanceProfileArn = string;
    
    export type Integer = number;
    
    export type KeyPair = string;
    
    export type MaintenanceStatus = string;
    
    export type MaxResults = number;
    
    export type NextToken = string;
    
    export type NodeAssociationStatus = string;
    
    export type NodeAssociationStatusToken = string;
    
    export type NodeName = string;
    
    export type ServerEvents = ServerEvent[];
    
    export type ServerName = string;
    
    export type ServerStatus = string;
    
    export type Servers = Server[];
    
    export type ServiceRoleArn = string;
    
    export type String = string;
    
    export type Strings = String[];
    
    export type TimeWindowDefinition = string;
    
    export type Timestamp = number;

    export interface AccountAttribute {
        /** The attribute name. The following are supported attribute names.

 &amp;#42; ServerLimit: The number of servers that currently existing / maximal allowed.
   By default 10 servers can be created.
   
   
 * ManualBackupLimit: The number of manual backups that currently exist / are
   maximal allowed. By default 50 manual backups can be created. **/
        Name?: String;
        /** The maximum allowed value. **/
        Maximum?: Integer;
        /** The current usage, such as the current number of servers associated with the
account. **/
        Used?: Integer;
    }
    export interface AssociateNodeRequest {
        ServerName: ServerName;
        NodeName: NodeName;
        EngineAttributes?: EngineAttributes;
    }
    export interface AssociateNodeResponse {
        NodeAssociationStatusToken?: NodeAssociationStatusToken;
    }
    export interface Backup {
        /** The ARN of the backup. **/
        BackupArn?: String;
        /** The generated ID of the backup. Example: myServerName-yyyyMMddHHmmssSSS **/
        BackupId?: BackupId;
        /** The backup type. Valid values are automated or manual . **/
        BackupType?: BackupType;
        /** The time stamp when the backup was created in the database. Example: 
2016-07-29T13:38:47.520Z **/
        CreatedAt?: Timestamp;
        /** A user-provided description for a manual backup. This field is empty for
automated backups. **/
        Description?: String;
        /** The engine type that is obtained from the server when the backup is created. **/
        Engine?: String;
        /** The engine model that is obtained from the server when the backup is created. **/
        EngineModel?: String;
        /** The engine version that is obtained from the server when the backup is created. **/
        EngineVersion?: String;
        /** The EC2 instance profile ARN that is obtained from the server when the backup is
created. Because this value is stored, you are not required to provide the
InstanceProfileArn again if you restore a backup. **/
        InstanceProfileArn?: String;
        /** The instance type that is obtained from the server when the backup is created. **/
        InstanceType?: String;
        /** The key pair that is obtained from the server when the backup is created. **/
        KeyPair?: String;
        /** The preferred backup period that is obtained from the server when the backup is
created. **/
        PreferredBackupWindow?: TimeWindowDefinition;
        /** The preferred maintenance period that is obtained from the server when the
backup is created. **/
        PreferredMaintenanceWindow?: TimeWindowDefinition;
        /** The size of the backup, in bytes. The size is returned by the instance in the
command results. **/
        S3DataSize?: Integer;
        /** The Amazon S3 URL of the backup&#x27;s tar.gz file. **/
        S3DataUrl?: String;
        /** The Amazon S3 URL of the backup&#x27;s log file. **/
        S3LogUrl?: String;
        /** The security group IDs that are obtained from the server when the backup is
created. **/
        SecurityGroupIds?: Strings;
        /** The name of the server from which the backup was made. **/
        ServerName?: ServerName;
        /** The service role ARN that is obtained from the server when the backup is
created. **/
        ServiceRoleArn?: String;
        /** The status of a backup while in progress. **/
        Status?: BackupStatus;
        /** An informational message about backup status. **/
        StatusDescription?: String;
        /** The subnet IDs that are obtained from the server when the backup is created. **/
        SubnetIds?: Strings;
        /** The version of AWS OpsWorks for Chef Automate-specific tools that is obtained
from the server when the backup is created. **/
        ToolsVersion?: String;
        /** The IAM user ARN of the requester for manual backups. This field is empty for
automated backups. **/
        UserArn?: String;
    }
    export interface CreateBackupRequest {
        /** The name of the server that you want to back up. **/
        ServerName: ServerName;
        /** A user-defined description of the backup. **/
        Description?: String;
    }
    export interface CreateBackupResponse {
        /** Backup created by request. **/
        Backup?: Backup;
    }
    export interface CreateServerRequest {
        /** Enable or disable scheduled backups. Valid values are true or false . The
default value is true . **/
        DisableAutomatedBackup?: Boolean;
        /** The configuration management engine to use. Valid values include Chef . **/
        Engine?: String;
        /** The engine model, or option. Valid values include Single . **/
        EngineModel?: String;
        /** The major release version of the engine that you want to use. Values depend on
the engine that you choose. **/
        EngineVersion?: String;
        /** Engine attributes on a specified server.

Attributes accepted in a createServer request:

 &amp;#42; CHEF_PIVOTAL_KEY : A base64-encoded RSA private key that is not stored by AWS
   OpsWorks for Chef Automate. This private key is required to access the Chef
   API. **/
        EngineAttributes?: EngineAttributes;
        /** The number of automated backups that you want to keep. Whenever a new backup is
created, AWS OpsWorks for Chef Automate deletes the oldest backups if this
number is exceeded. The default value is 1 . **/
        BackupRetentionCount?: BackupRetentionCountDefinition;
        /** The name of the server. The server name must be unique within your AWS account,
within each region. Server names must start with a letter; then letters,
numbers, or hyphens (-) are allowed, up to a maximum of 32 characters. **/
        ServerName: ServerName;
        /** The ARN of the instance profile that your Amazon EC2 instances use. Although the
AWS OpsWorks console typically creates the instance profile for you, in this
release of AWS OpsWorks for Chef Automate, run the service-role-creation.yaml
AWS CloudFormation template, located at
https://s3.amazonaws.com/opsworks-stuff/latest/service-role-creation.yaml. This
template creates a stack that includes the instance profile you need. **/
        InstanceProfileArn: InstanceProfileArn;
        /** The Amazon EC2 instance type to use. Valid values must be specified in the
following format: ^([cm][34]|t2).&amp;#42; For example, c3.large . **/
        InstanceType?: String;
        /** The Amazon EC2 key pair to set for the instance. You may specify this parameter
to connect to your instances by using SSH. **/
        KeyPair?: KeyPair;
        /** The start time for a one-hour period each week during which AWS OpsWorks for
Chef Automate performs maintenance on the instance. Valid values must be
specified in the following format: DDD:HH:MM . The specified time is in
coordinated universal time (UTC). The default value is a random one-hour period
on Tuesday, Wednesday, or Friday. See TimeWindowDefinition for more information.

Example: Mon:08:00 , which represents a start time of every Monday at 08:00 UTC.
(8:00 a.m.) **/
        PreferredMaintenanceWindow?: TimeWindowDefinition;
        /** The start time for a one-hour period during which AWS OpsWorks for Chef Automate
backs up application-level data on your server if backups are enabled. Valid
values must be specified in one of the following formats:

 &amp;#42; HH:MM for daily backups
   
   
 * DDD:HH:MM for weekly backups
   
   

The specified time is in coordinated universal time (UTC). The default value is
a random, daily start time.

Example: 08:00 , which represents a daily start time of 08:00 UTC.

Example: Mon:08:00 , which represents a start time of every Monday at 08:00 UTC.
(8:00 a.m.) **/
        PreferredBackupWindow?: TimeWindowDefinition;
        /** A list of security group IDs to attach to the Amazon EC2 instance. If you add
this parameter, the specified security groups must be within the VPC that is
specified by SubnetIds .

If you do not specify this parameter, AWS OpsWorks for Chef Automate creates one
new security group that uses TCP ports 22 and 443, open to 0.0.0.0/0 (everyone). **/
        SecurityGroupIds?: Strings;
        /** The service role that the AWS OpsWorks for Chef Automate service backend uses to
work with your account. Although the AWS OpsWorks console typically creates the
service role for you, in this release of AWS OpsWorks for Chef Automate, run the
service-role-creation.yaml AWS CloudFormation template, located at
https://s3.amazonaws.com/opsworks-stuff/latest/service-role-creation.yaml. This
template creates a stack that includes the service role that you need. **/
        ServiceRoleArn: ServiceRoleArn;
        /** The IDs of subnets in which to launch the server EC2 instance.

Amazon EC2-Classic customers: This field is required. All servers must run
within a VPC. The VPC must have &quot;Auto Assign Public IP&quot; enabled.

EC2-VPC customers: This field is optional. If you do not specify subnet IDs,
your EC2 instances are created in a default subnet that is selected by Amazon
EC2. If you specify subnet IDs, the VPC must have &quot;Auto Assign Public IP&quot;
enabled.

For more information about supported Amazon EC2 platforms, see Supported
Platforms
[http://docs.aws.amazon.com/https:/docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html] 
. **/
        SubnetIds?: Strings;
        /** If you specify this field, AWS OpsWorks for Chef Automate creates the server by
using the backup represented by BackupId. **/
        BackupId?: BackupId;
    }
    export interface CreateServerResponse {
        /** The server that is created by the request. **/
        Server?: Server;
    }
    export interface DeleteBackupRequest {
        /** The ID of the backup to delete. Run the DescribeBackups command to get a list of
backup IDs. Backup IDs are in the format ServerName-yyyyMMddHHmmssSSS . **/
        BackupId: BackupId;
    }
    export interface DeleteBackupResponse {
    }
    export interface DeleteServerRequest {
        /** The ID of the server to delete. **/
        ServerName: ServerName;
    }
    export interface DeleteServerResponse {
    }
    export interface DescribeAccountAttributesRequest {
    }
    export interface DescribeAccountAttributesResponse {
        /** The attributes that are currently set for the account. **/
        Attributes?: AccountAttributes;
    }
    export interface DescribeBackupsRequest {
        /** Describes a single backup. **/
        BackupId?: BackupId;
        /** Returns backups for the server with the specified ServerName. **/
        ServerName?: ServerName;
        /** NextToken is a string that is returned in some command responses. It indicates
that not all entries have been returned, and that you must run at least one more
request to get remaining items. To get remaining results, call DescribeBackups 
again, and assign the token from the previous results as the value of the 
nextToken parameter. If there are no more results, the response object&#x27;s 
nextToken parameter value is null . Setting a nextToken value that was not
returned in your previous results causes an InvalidNextTokenException to occur. **/
        NextToken?: NextToken;
        /** To receive a paginated response, use this parameter to specify the maximum
number of results to be returned with a single call. If the number of available
results exceeds this maximum, the response includes a NextToken value that you
can assign to the NextToken request parameter to get the next set of results. **/
        MaxResults?: MaxResults;
    }
    export interface DescribeBackupsResponse {
        /** Contains the response to a DescribeBackups request. **/
        Backups?: Backups;
        /** NextToken is a string that is returned in some command responses. It indicates
that not all entries have been returned, and that you must run at least one more
request to get remaining items. To get remaining results, call DescribeBackups 
again, and assign the token from the previous results as the value of the 
nextToken parameter. If there are no more results, the response object&#x27;s 
nextToken parameter value is null . Setting a nextToken value that was not
returned in your previous results causes an InvalidNextTokenException to occur. **/
        NextToken?: String;
    }
    export interface DescribeEventsRequest {
        /** The name of the server for which you want to view events. **/
        ServerName: ServerName;
        /** NextToken is a string that is returned in some command responses. It indicates
that not all entries have been returned, and that you must run at least one more
request to get remaining items. To get remaining results, call DescribeEvents 
again, and assign the token from the previous results as the value of the 
nextToken parameter. If there are no more results, the response object&#x27;s 
nextToken parameter value is null . Setting a nextToken value that was not
returned in your previous results causes an InvalidNextTokenException to occur. **/
        NextToken?: NextToken;
        /** To receive a paginated response, use this parameter to specify the maximum
number of results to be returned with a single call. If the number of available
results exceeds this maximum, the response includes a NextToken value that you
can assign to the NextToken request parameter to get the next set of results. **/
        MaxResults?: MaxResults;
    }
    export interface DescribeEventsResponse {
        /** Contains the response to a DescribeEvents request. **/
        ServerEvents?: ServerEvents;
        /** NextToken is a string that is returned in some command responses. It indicates
that not all entries have been returned, and that you must run at least one more
request to get remaining items. To get remaining results, call DescribeEvents 
again, and assign the token from the previous results as the value of the 
nextToken parameter. If there are no more results, the response object&#x27;s 
nextToken parameter value is null . Setting a nextToken value that was not
returned in your previous results causes an InvalidNextTokenException to occur. **/
        NextToken?: String;
    }
    export interface DescribeNodeAssociationStatusRequest {
        NodeAssociationStatusToken: NodeAssociationStatusToken;
        ServerName: ServerName;
    }
    export interface DescribeNodeAssociationStatusResponse {
        NodeAssociationStatus?: NodeAssociationStatus;
    }
    export interface DescribeServersRequest {
        /** Describes the server with the specified ServerName. **/
        ServerName?: ServerName;
        /** NextToken is a string that is returned in some command responses. It indicates
that not all entries have been returned, and that you must run at least one more
request to get remaining items. To get remaining results, call DescribeServers 
again, and assign the token from the previous results as the value of the 
nextToken parameter. If there are no more results, the response object&#x27;s 
nextToken parameter value is null . Setting a nextToken value that was not
returned in your previous results causes an InvalidNextTokenException to occur. **/
        NextToken?: NextToken;
        /** To receive a paginated response, use this parameter to specify the maximum
number of results to be returned with a single call. If the number of available
results exceeds this maximum, the response includes a NextToken value that you
can assign to the NextToken request parameter to get the next set of results. **/
        MaxResults?: MaxResults;
    }
    export interface DescribeServersResponse {
        /** Contains the response to a DescribeServers request. **/
        Servers?: Servers;
        /** NextToken is a string that is returned in some command responses. It indicates
that not all entries have been returned, and that you must run at least one more
request to get remaining items. To get remaining results, call DescribeServers 
again, and assign the token from the previous results as the value of the 
nextToken parameter. If there are no more results, the response object&#x27;s 
nextToken parameter value is null . Setting a nextToken value that was not
returned in your previous results causes an InvalidNextTokenException to occur. **/
        NextToken?: String;
    }
    export interface DisassociateNodeRequest {
        ServerName: ServerName;
        NodeName: NodeName;
        EngineAttributes?: EngineAttributes;
    }
    export interface DisassociateNodeResponse {
        NodeAssociationStatusToken?: NodeAssociationStatusToken;
    }
    export interface EngineAttribute {
        /** The name of the engine attribute. **/
        Name?: String;
        /** The value of the engine attribute. **/
        Value?: String;
    }
    export interface InvalidNextTokenException {
        /** Error or informational message that can contain more detail about a nextToken
failure. **/
        Message?: String;
    }
    export interface InvalidStateException {
        /** Error or informational message that provides more detail if a resource is in a
state that is not valid for performing a specified action. **/
        Message?: String;
    }
    export interface LimitExceededException {
        /** Error or informational message that the maximum allowed number of servers or
backups has been exceeded. **/
        Message?: String;
    }
    export interface ResourceAlreadyExistsException {
        /** Error or informational message in response to a CreateServer request that a
resource cannot be created because it already exists. **/
        Message?: String;
    }
    export interface ResourceNotFoundException {
        /** Error or informational message that can contain more detail about problems
locating or accessing a resource. **/
        Message?: String;
    }
    export interface RestoreServerRequest {
        /** The ID of the backup that you want to use to restore a server. **/
        BackupId: BackupId;
        /** The name of the server that you want to restore. **/
        ServerName: ServerName;
        /** The type of the instance to create. Valid values must be specified in the
following format: ^([cm][34]|t2).&amp;#42; For example, c3.large . If you do not specify
this parameter, RestoreServer uses the instance type from the specified backup. **/
        InstanceType?: String;
        /** The name of the key pair to set on the new EC2 instance. This can be helpful if
any of the administrators who manage the server no longer have the SSH key. **/
        KeyPair?: KeyPair;
    }
    export interface RestoreServerResponse {
    }
    export interface Server {
        /** The number of automated backups to keep. **/
        BackupRetentionCount?: Integer;
        /** The name of the server. **/
        ServerName?: String;
        /** Time stamp of server creation. Example 2016-07-29T13:38:47.520Z **/
        CreatedAt?: Timestamp;
        /** Disables automated backups. The number of stored backups is dependent on the
value of PreferredBackupCount. **/
        DisableAutomatedBackup?: Boolean;
        /** A DNS name that can be used to access the engine. Example: 
myserver-asdfghjkl.us-east-1.opsworks.io **/
        Endpoint?: String;
        /** The engine type of the server. The valid value in this release is Chef . **/
        Engine?: String;
        /** The engine model of the server. The valid value in this release is Single . **/
        EngineModel?: String;
        /** The response of a createServer() request returns the master credential to access
the server in EngineAttributes. These credentials are not stored by AWS OpsWorks
for Chef Automate; they are returned only as part of the result of
createServer().

Attributes returned in a createServer response:

 &amp;#42; CHEF_PIVOTAL_KEY : A base64-encoded RSA private key that is generated by AWS
   OpsWorks for Chef Automate. This private key is required to access the Chef
   API.
   
   
 * CHEF_STARTER_KIT : A base64-encoded ZIP file. The ZIP file contains a Chef
   starter kit, which includes a README, a configuration file, and the required
   RSA private key. Save this file, unzip it, and then change to the directory
   where you&#x27;ve unzipped the file contents. From this directory, you can run
   Knife commands. **/
        EngineAttributes?: EngineAttributes;
        /** The engine version of the server. Because Chef is the engine available in this
release, the valid value for EngineVersion is 12 . **/
        EngineVersion?: String;
        /** The instance profile ARN of the server. **/
        InstanceProfileArn?: String;
        /** The instance type for the server, as specified in the CloudFormation stack. This
might not be the same instance type that is shown in the EC2 console. **/
        InstanceType?: String;
        /** The key pair associated with the server. **/
        KeyPair?: String;
        /** The status of the most recent server maintenance run. Shows SUCCESS or FAILED . **/
        MaintenanceStatus?: MaintenanceStatus;
        /** The preferred maintenance period specified for the server. **/
        PreferredMaintenanceWindow?: TimeWindowDefinition;
        /** The preferred backup period specified for the server. **/
        PreferredBackupWindow?: TimeWindowDefinition;
        /** The security group IDs for the server, as specified in the CloudFormation stack.
These might not be the same security groups that are shown in the EC2 console. **/
        SecurityGroupIds?: Strings;
        /** The service role ARN used to create the server. **/
        ServiceRoleArn?: String;
        /** The server&#x27;s status. This field displays the states of actions in progress, such
as creating, running, or backing up the server, as well as server health. **/
        Status?: ServerStatus;
        /** Depending on the server status, this field has either a human-readable message
(such as a create or backup error), or an escaped block of JSON (used for health
check results). **/
        StatusReason?: String;
        /** The subnet IDs specified in a CreateServer request. **/
        SubnetIds?: Strings;
        /** The ARN of the server. **/
        ServerArn?: String;
    }
    export interface ServerEvent {
        /** The time when the event occurred. **/
        CreatedAt?: Timestamp;
        /** The name of the server on or for which the event occurred. **/
        ServerName?: String;
        /** A human-readable informational or status message. **/
        Message?: String;
        /** The Amazon S3 URL of the event&#x27;s log file. **/
        LogUrl?: String;
    }
    export interface StartMaintenanceRequest {
        /** The name of the server on which to run maintenance. **/
        ServerName: ServerName;
    }
    export interface StartMaintenanceResponse {
        /** Contains the response to a StartMaintenance request. **/
        Server?: Server;
    }
    export interface UpdateServerEngineAttributesRequest {
        /** The name of the server to update. **/
        ServerName: ServerName;
        /** The name of the engine attribute to update. **/
        AttributeName: AttributeName;
        /** The value to set for the attribute. **/
        AttributeValue?: AttributeValue;
    }
    export interface UpdateServerEngineAttributesResponse {
        /** Contains the response to an UpdateServerEngineAttributes request. **/
        Server?: Server;
    }
    export interface UpdateServerRequest {
        /** Setting DisableAutomatedBackup to true disables automated or scheduled backups.
Automated backups are enabled by default. **/
        DisableAutomatedBackup?: Boolean;
        /** Sets the number of automated backups that you want to keep. **/
        BackupRetentionCount?: Integer;
        /** The name of the server to update. **/
        ServerName: ServerName;
        PreferredMaintenanceWindow?: TimeWindowDefinition;
        PreferredBackupWindow?: TimeWindowDefinition;
    }
    export interface UpdateServerResponse {
        /** Contains the response to a UpdateServer request. **/
        Server?: Server;
    }
    export interface ValidationException {
        /** Error or informational message that can contain more detail about a validation
failure. **/
        Message?: String;
    }
  }
}
