// Type definitions for aws-sdk - AWS Database Migration Service
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2016-01-01
    * endpointPrefix: dms
    * serviceAbbreviation: 
    * signatureVersion: v4
    * protocol: json
    *
    * AWS Database Migration Service AWS Database Migration Service (AWS DMS) can
 migrate your data to and from the most widely used commercial and open-source
 databases such as Oracle, PostgreSQL, Microsoft SQL Server, Amazon Redshift,
 MariaDB, Amazon Aurora, and MySQL. The service supports homogeneous migrations
 such as Oracle to Oracle, as well as heterogeneous migrations between different
 database platforms, such as Oracle to MySQL or SQL Server to PostgreSQL.
    *
    */
  export class DMS extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Adds metadata tags to a DMS resource, including replication instance, endpoint,
security group, and migration task. These tags can also be used with cost
allocation reporting to track cost associated with DMS resources, or used in a
Condition statement in an IAM policy for DMS.
     *
     * @error ResourceNotFoundFault   
     */
    addTagsToResource(params: DMS.AddTagsToResourceMessage, callback?: (err: DMS.ResourceNotFoundFault | any, data: DMS.AddTagsToResourceResponse | any) => void): Request<DMS.AddTagsToResourceResponse | any, DMS.ResourceNotFoundFault | any>;
    /**
     * Creates an endpoint using the provided settings.
     *
     * @error KMSKeyNotAccessibleFault   
     * @error ResourceAlreadyExistsFault   
     * @error ResourceQuotaExceededFault   
     * @error InvalidResourceStateFault   
     * @error ResourceNotFoundFault   
     */
    createEndpoint(params: DMS.CreateEndpointMessage, callback?: (err: DMS.KMSKeyNotAccessibleFault | DMS.ResourceAlreadyExistsFault | DMS.ResourceQuotaExceededFault | DMS.InvalidResourceStateFault | DMS.ResourceNotFoundFault | any, data: DMS.CreateEndpointResponse | any) => void): Request<DMS.CreateEndpointResponse | any, DMS.KMSKeyNotAccessibleFault | DMS.ResourceAlreadyExistsFault | DMS.ResourceQuotaExceededFault | DMS.InvalidResourceStateFault | DMS.ResourceNotFoundFault | any>;
    /**
     * Creates the replication instance using the specified parameters.
     *
     * @error AccessDeniedFault   
     * @error ResourceAlreadyExistsFault   
     * @error InsufficientResourceCapacityFault   
     * @error ResourceQuotaExceededFault   
     * @error StorageQuotaExceededFault   
     * @error ResourceNotFoundFault   
     * @error ReplicationSubnetGroupDoesNotCoverEnoughAZs   
     * @error InvalidResourceStateFault   
     * @error InvalidSubnet   
     * @error KMSKeyNotAccessibleFault   
     */
    createReplicationInstance(params: DMS.CreateReplicationInstanceMessage, callback?: (err: DMS.AccessDeniedFault | DMS.ResourceAlreadyExistsFault | DMS.InsufficientResourceCapacityFault | DMS.ResourceQuotaExceededFault | DMS.StorageQuotaExceededFault | DMS.ResourceNotFoundFault | DMS.ReplicationSubnetGroupDoesNotCoverEnoughAZs | DMS.InvalidResourceStateFault | DMS.InvalidSubnet | DMS.KMSKeyNotAccessibleFault | any, data: DMS.CreateReplicationInstanceResponse | any) => void): Request<DMS.CreateReplicationInstanceResponse | any, DMS.AccessDeniedFault | DMS.ResourceAlreadyExistsFault | DMS.InsufficientResourceCapacityFault | DMS.ResourceQuotaExceededFault | DMS.StorageQuotaExceededFault | DMS.ResourceNotFoundFault | DMS.ReplicationSubnetGroupDoesNotCoverEnoughAZs | DMS.InvalidResourceStateFault | DMS.InvalidSubnet | DMS.KMSKeyNotAccessibleFault | any>;
    /**
     * Creates a replication subnet group given a list of the subnet IDs in a VPC.
     *
     * @error AccessDeniedFault   
     * @error ResourceAlreadyExistsFault   
     * @error ResourceNotFoundFault   
     * @error ResourceQuotaExceededFault   
     * @error ReplicationSubnetGroupDoesNotCoverEnoughAZs   
     * @error InvalidSubnet   
     */
    createReplicationSubnetGroup(params: DMS.CreateReplicationSubnetGroupMessage, callback?: (err: DMS.AccessDeniedFault | DMS.ResourceAlreadyExistsFault | DMS.ResourceNotFoundFault | DMS.ResourceQuotaExceededFault | DMS.ReplicationSubnetGroupDoesNotCoverEnoughAZs | DMS.InvalidSubnet | any, data: DMS.CreateReplicationSubnetGroupResponse | any) => void): Request<DMS.CreateReplicationSubnetGroupResponse | any, DMS.AccessDeniedFault | DMS.ResourceAlreadyExistsFault | DMS.ResourceNotFoundFault | DMS.ResourceQuotaExceededFault | DMS.ReplicationSubnetGroupDoesNotCoverEnoughAZs | DMS.InvalidSubnet | any>;
    /**
     * Creates a replication task using the specified parameters.
     *
     * @error InvalidResourceStateFault   
     * @error ResourceAlreadyExistsFault   
     * @error ResourceNotFoundFault   
     * @error KMSKeyNotAccessibleFault   
     * @error ResourceQuotaExceededFault   
     */
    createReplicationTask(params: DMS.CreateReplicationTaskMessage, callback?: (err: DMS.InvalidResourceStateFault | DMS.ResourceAlreadyExistsFault | DMS.ResourceNotFoundFault | DMS.KMSKeyNotAccessibleFault | DMS.ResourceQuotaExceededFault | any, data: DMS.CreateReplicationTaskResponse | any) => void): Request<DMS.CreateReplicationTaskResponse | any, DMS.InvalidResourceStateFault | DMS.ResourceAlreadyExistsFault | DMS.ResourceNotFoundFault | DMS.KMSKeyNotAccessibleFault | DMS.ResourceQuotaExceededFault | any>;
    /**
     * Deletes the specified certificate.
     *
     * @error ResourceNotFoundFault   
     * @error InvalidResourceStateFault   
     */
    deleteCertificate(params: DMS.DeleteCertificateMessage, callback?: (err: DMS.ResourceNotFoundFault | DMS.InvalidResourceStateFault | any, data: DMS.DeleteCertificateResponse | any) => void): Request<DMS.DeleteCertificateResponse | any, DMS.ResourceNotFoundFault | DMS.InvalidResourceStateFault | any>;
    /**
     * Deletes the specified endpoint.

All tasks associated with the endpoint must be deleted before you can delete the
endpoint.
     *
     * @error ResourceNotFoundFault   
     * @error InvalidResourceStateFault   
     */
    deleteEndpoint(params: DMS.DeleteEndpointMessage, callback?: (err: DMS.ResourceNotFoundFault | DMS.InvalidResourceStateFault | any, data: DMS.DeleteEndpointResponse | any) => void): Request<DMS.DeleteEndpointResponse | any, DMS.ResourceNotFoundFault | DMS.InvalidResourceStateFault | any>;
    /**
     * Deletes the specified replication instance.

You must delete any migration tasks that are associated with the replication
instance before you can delete it.
     *
     * @error InvalidResourceStateFault   
     * @error ResourceNotFoundFault   
     */
    deleteReplicationInstance(params: DMS.DeleteReplicationInstanceMessage, callback?: (err: DMS.InvalidResourceStateFault | DMS.ResourceNotFoundFault | any, data: DMS.DeleteReplicationInstanceResponse | any) => void): Request<DMS.DeleteReplicationInstanceResponse | any, DMS.InvalidResourceStateFault | DMS.ResourceNotFoundFault | any>;
    /**
     * Deletes a subnet group.
     *
     * @error InvalidResourceStateFault   
     * @error ResourceNotFoundFault   
     */
    deleteReplicationSubnetGroup(params: DMS.DeleteReplicationSubnetGroupMessage, callback?: (err: DMS.InvalidResourceStateFault | DMS.ResourceNotFoundFault | any, data: DMS.DeleteReplicationSubnetGroupResponse | any) => void): Request<DMS.DeleteReplicationSubnetGroupResponse | any, DMS.InvalidResourceStateFault | DMS.ResourceNotFoundFault | any>;
    /**
     * Deletes the specified replication task.
     *
     * @error ResourceNotFoundFault   
     * @error InvalidResourceStateFault   
     */
    deleteReplicationTask(params: DMS.DeleteReplicationTaskMessage, callback?: (err: DMS.ResourceNotFoundFault | DMS.InvalidResourceStateFault | any, data: DMS.DeleteReplicationTaskResponse | any) => void): Request<DMS.DeleteReplicationTaskResponse | any, DMS.ResourceNotFoundFault | DMS.InvalidResourceStateFault | any>;
    /**
     * Lists all of the AWS DMS attributes for a customer account. The attributes
include AWS DMS quotas for the account, such as the number of replication
instances allowed. The description for a quota includes the quota name, current
usage toward that quota, and the quota&#x27;s maximum value.

This command does not take any parameters.
     *
     */
    describeAccountAttributes(params: DMS.DescribeAccountAttributesMessage, callback?: (err: any, data: DMS.DescribeAccountAttributesResponse | any) => void): Request<DMS.DescribeAccountAttributesResponse | any, any>;
    /**
     * Provides a description of the certificate.
     *
     * @error ResourceNotFoundFault   
     */
    describeCertificates(params: DMS.DescribeCertificatesMessage, callback?: (err: DMS.ResourceNotFoundFault | any, data: DMS.DescribeCertificatesResponse | any) => void): Request<DMS.DescribeCertificatesResponse | any, DMS.ResourceNotFoundFault | any>;
    /**
     * Describes the status of the connections that have been made between the
replication instance and an endpoint. Connections are created when you test an
endpoint.
     *
     * @error ResourceNotFoundFault   
     */
    describeConnections(params: DMS.DescribeConnectionsMessage, callback?: (err: DMS.ResourceNotFoundFault | any, data: DMS.DescribeConnectionsResponse | any) => void): Request<DMS.DescribeConnectionsResponse | any, DMS.ResourceNotFoundFault | any>;
    /**
     * Returns information about the type of endpoints available.
     *
     */
    describeEndpointTypes(params: DMS.DescribeEndpointTypesMessage, callback?: (err: any, data: DMS.DescribeEndpointTypesResponse | any) => void): Request<DMS.DescribeEndpointTypesResponse | any, any>;
    /**
     * Returns information about the endpoints for your account in the current region.
     *
     * @error ResourceNotFoundFault   
     */
    describeEndpoints(params: DMS.DescribeEndpointsMessage, callback?: (err: DMS.ResourceNotFoundFault | any, data: DMS.DescribeEndpointsResponse | any) => void): Request<DMS.DescribeEndpointsResponse | any, DMS.ResourceNotFoundFault | any>;
    /**
     * Returns information about the replication instance types that can be created in
the specified region.
     *
     */
    describeOrderableReplicationInstances(params: DMS.DescribeOrderableReplicationInstancesMessage, callback?: (err: any, data: DMS.DescribeOrderableReplicationInstancesResponse | any) => void): Request<DMS.DescribeOrderableReplicationInstancesResponse | any, any>;
    /**
     * Returns the status of the RefreshSchemas operation.
     *
     * @error InvalidResourceStateFault   
     * @error ResourceNotFoundFault   
     */
    describeRefreshSchemasStatus(params: DMS.DescribeRefreshSchemasStatusMessage, callback?: (err: DMS.InvalidResourceStateFault | DMS.ResourceNotFoundFault | any, data: DMS.DescribeRefreshSchemasStatusResponse | any) => void): Request<DMS.DescribeRefreshSchemasStatusResponse | any, DMS.InvalidResourceStateFault | DMS.ResourceNotFoundFault | any>;
    /**
     * Returns information about replication instances for your account in the current
region.
     *
     * @error ResourceNotFoundFault   
     */
    describeReplicationInstances(params: DMS.DescribeReplicationInstancesMessage, callback?: (err: DMS.ResourceNotFoundFault | any, data: DMS.DescribeReplicationInstancesResponse | any) => void): Request<DMS.DescribeReplicationInstancesResponse | any, DMS.ResourceNotFoundFault | any>;
    /**
     * Returns information about the replication subnet groups.
     *
     * @error ResourceNotFoundFault   
     */
    describeReplicationSubnetGroups(params: DMS.DescribeReplicationSubnetGroupsMessage, callback?: (err: DMS.ResourceNotFoundFault | any, data: DMS.DescribeReplicationSubnetGroupsResponse | any) => void): Request<DMS.DescribeReplicationSubnetGroupsResponse | any, DMS.ResourceNotFoundFault | any>;
    /**
     * Returns information about replication tasks for your account in the current
region.
     *
     * @error ResourceNotFoundFault   
     */
    describeReplicationTasks(params: DMS.DescribeReplicationTasksMessage, callback?: (err: DMS.ResourceNotFoundFault | any, data: DMS.DescribeReplicationTasksResponse | any) => void): Request<DMS.DescribeReplicationTasksResponse | any, DMS.ResourceNotFoundFault | any>;
    /**
     * Returns information about the schema for the specified endpoint.
     *
     * @error InvalidResourceStateFault   
     * @error ResourceNotFoundFault   
     */
    describeSchemas(params: DMS.DescribeSchemasMessage, callback?: (err: DMS.InvalidResourceStateFault | DMS.ResourceNotFoundFault | any, data: DMS.DescribeSchemasResponse | any) => void): Request<DMS.DescribeSchemasResponse | any, DMS.InvalidResourceStateFault | DMS.ResourceNotFoundFault | any>;
    /**
     * Returns table statistics on the database migration task, including table name,
rows inserted, rows updated, and rows deleted.
     *
     * @error ResourceNotFoundFault   
     * @error InvalidResourceStateFault   
     */
    describeTableStatistics(params: DMS.DescribeTableStatisticsMessage, callback?: (err: DMS.ResourceNotFoundFault | DMS.InvalidResourceStateFault | any, data: DMS.DescribeTableStatisticsResponse | any) => void): Request<DMS.DescribeTableStatisticsResponse | any, DMS.ResourceNotFoundFault | DMS.InvalidResourceStateFault | any>;
    /**
     * Uploads the specified certificate.
     *
     * @error ResourceAlreadyExistsFault   
     * @error InvalidCertificateFault   
     */
    importCertificate(params: DMS.ImportCertificateMessage, callback?: (err: DMS.ResourceAlreadyExistsFault | DMS.InvalidCertificateFault | any, data: DMS.ImportCertificateResponse | any) => void): Request<DMS.ImportCertificateResponse | any, DMS.ResourceAlreadyExistsFault | DMS.InvalidCertificateFault | any>;
    /**
     * Lists all tags for an AWS DMS resource.
     *
     * @error ResourceNotFoundFault   
     */
    listTagsForResource(params: DMS.ListTagsForResourceMessage, callback?: (err: DMS.ResourceNotFoundFault | any, data: DMS.ListTagsForResourceResponse | any) => void): Request<DMS.ListTagsForResourceResponse | any, DMS.ResourceNotFoundFault | any>;
    /**
     * Modifies the specified endpoint.
     *
     * @error InvalidResourceStateFault   
     * @error ResourceNotFoundFault   
     * @error ResourceAlreadyExistsFault   
     * @error KMSKeyNotAccessibleFault   
     */
    modifyEndpoint(params: DMS.ModifyEndpointMessage, callback?: (err: DMS.InvalidResourceStateFault | DMS.ResourceNotFoundFault | DMS.ResourceAlreadyExistsFault | DMS.KMSKeyNotAccessibleFault | any, data: DMS.ModifyEndpointResponse | any) => void): Request<DMS.ModifyEndpointResponse | any, DMS.InvalidResourceStateFault | DMS.ResourceNotFoundFault | DMS.ResourceAlreadyExistsFault | DMS.KMSKeyNotAccessibleFault | any>;
    /**
     * Modifies the replication instance to apply new settings. You can change one or
more parameters by specifying these parameters and the new values in the
request.

Some settings are applied during the maintenance window.
     *
     * @error InvalidResourceStateFault   
     * @error ResourceAlreadyExistsFault   
     * @error ResourceNotFoundFault   
     * @error InsufficientResourceCapacityFault   
     * @error StorageQuotaExceededFault   
     * @error UpgradeDependencyFailureFault   
     */
    modifyReplicationInstance(params: DMS.ModifyReplicationInstanceMessage, callback?: (err: DMS.InvalidResourceStateFault | DMS.ResourceAlreadyExistsFault | DMS.ResourceNotFoundFault | DMS.InsufficientResourceCapacityFault | DMS.StorageQuotaExceededFault | DMS.UpgradeDependencyFailureFault | any, data: DMS.ModifyReplicationInstanceResponse | any) => void): Request<DMS.ModifyReplicationInstanceResponse | any, DMS.InvalidResourceStateFault | DMS.ResourceAlreadyExistsFault | DMS.ResourceNotFoundFault | DMS.InsufficientResourceCapacityFault | DMS.StorageQuotaExceededFault | DMS.UpgradeDependencyFailureFault | any>;
    /**
     * Modifies the settings for the specified replication subnet group.
     *
     * @error AccessDeniedFault   
     * @error ResourceNotFoundFault   
     * @error ResourceQuotaExceededFault   
     * @error SubnetAlreadyInUse   
     * @error ReplicationSubnetGroupDoesNotCoverEnoughAZs   
     * @error InvalidSubnet   
     */
    modifyReplicationSubnetGroup(params: DMS.ModifyReplicationSubnetGroupMessage, callback?: (err: DMS.AccessDeniedFault | DMS.ResourceNotFoundFault | DMS.ResourceQuotaExceededFault | DMS.SubnetAlreadyInUse | DMS.ReplicationSubnetGroupDoesNotCoverEnoughAZs | DMS.InvalidSubnet | any, data: DMS.ModifyReplicationSubnetGroupResponse | any) => void): Request<DMS.ModifyReplicationSubnetGroupResponse | any, DMS.AccessDeniedFault | DMS.ResourceNotFoundFault | DMS.ResourceQuotaExceededFault | DMS.SubnetAlreadyInUse | DMS.ReplicationSubnetGroupDoesNotCoverEnoughAZs | DMS.InvalidSubnet | any>;
    /**
     * Populates the schema for the specified endpoint. This is an asynchronous
operation and can take several minutes. You can check the status of this
operation by calling the DescribeRefreshSchemasStatus operation.
     *
     * @error InvalidResourceStateFault   
     * @error ResourceNotFoundFault   
     * @error KMSKeyNotAccessibleFault   
     * @error ResourceQuotaExceededFault   
     */
    refreshSchemas(params: DMS.RefreshSchemasMessage, callback?: (err: DMS.InvalidResourceStateFault | DMS.ResourceNotFoundFault | DMS.KMSKeyNotAccessibleFault | DMS.ResourceQuotaExceededFault | any, data: DMS.RefreshSchemasResponse | any) => void): Request<DMS.RefreshSchemasResponse | any, DMS.InvalidResourceStateFault | DMS.ResourceNotFoundFault | DMS.KMSKeyNotAccessibleFault | DMS.ResourceQuotaExceededFault | any>;
    /**
     * Removes metadata tags from a DMS resource.
     *
     * @error ResourceNotFoundFault   
     */
    removeTagsFromResource(params: DMS.RemoveTagsFromResourceMessage, callback?: (err: DMS.ResourceNotFoundFault | any, data: DMS.RemoveTagsFromResourceResponse | any) => void): Request<DMS.RemoveTagsFromResourceResponse | any, DMS.ResourceNotFoundFault | any>;
    /**
     * Starts the replication task.
     *
     * @error ResourceNotFoundFault   
     * @error InvalidResourceStateFault   
     */
    startReplicationTask(params: DMS.StartReplicationTaskMessage, callback?: (err: DMS.ResourceNotFoundFault | DMS.InvalidResourceStateFault | any, data: DMS.StartReplicationTaskResponse | any) => void): Request<DMS.StartReplicationTaskResponse | any, DMS.ResourceNotFoundFault | DMS.InvalidResourceStateFault | any>;
    /**
     * Stops the replication task.
     *
     * @error ResourceNotFoundFault   
     * @error InvalidResourceStateFault   
     */
    stopReplicationTask(params: DMS.StopReplicationTaskMessage, callback?: (err: DMS.ResourceNotFoundFault | DMS.InvalidResourceStateFault | any, data: DMS.StopReplicationTaskResponse | any) => void): Request<DMS.StopReplicationTaskResponse | any, DMS.ResourceNotFoundFault | DMS.InvalidResourceStateFault | any>;
    /**
     * Tests the connection between the replication instance and the endpoint.
     *
     * @error ResourceNotFoundFault   
     * @error InvalidResourceStateFault   
     * @error KMSKeyNotAccessibleFault   
     * @error ResourceQuotaExceededFault   
     */
    testConnection(params: DMS.TestConnectionMessage, callback?: (err: DMS.ResourceNotFoundFault | DMS.InvalidResourceStateFault | DMS.KMSKeyNotAccessibleFault | DMS.ResourceQuotaExceededFault | any, data: DMS.TestConnectionResponse | any) => void): Request<DMS.TestConnectionResponse | any, DMS.ResourceNotFoundFault | DMS.InvalidResourceStateFault | DMS.KMSKeyNotAccessibleFault | DMS.ResourceQuotaExceededFault | any>;

  }

  export module DMS {

    export type AccountQuotaList = AccountQuota[];

    export type Boolean = boolean;

    export type BooleanOptional = boolean;

    export type CertificateList = Certificate[];

    export type ConnectionList = Connection[];

    export type DmsSslModeValue = string;

    export type EndpointList = Endpoint[];

    export type ExceptionMessage = string;

    export type FilterList = Filter[];

    export type FilterValueList = String[];

    export type Integer = number;

    export type IntegerOptional = number;

    export type KeyList = String[];

    export type Long = number;

    export type MigrationTypeValue = string;

    export type OrderableReplicationInstanceList = OrderableReplicationInstance[];

    export type RefreshSchemasStatusTypeValue = string;

    export type ReplicationEndpointTypeValue = string;

    export type ReplicationInstanceList = ReplicationInstance[];

    export type ReplicationInstancePrivateIpAddressList = String[];

    export type ReplicationInstancePublicIpAddressList = String[];

    export type ReplicationSubnetGroups = ReplicationSubnetGroup[];

    export type ReplicationTaskList = ReplicationTask[];

    export type SchemaList = String[];

    export type SecretString = string;

    export type StartReplicationTaskTypeValue = string;

    export type String = string;

    export type SubnetIdentifierList = String[];

    export type SubnetList = Subnet[];

    export type SupportedEndpointTypeList = SupportedEndpointType[];

    export type TStamp = number;

    export type TableStatisticsList = TableStatistics[];

    export type TagList = Tag[];

    export type VpcSecurityGroupIdList = String[];

    export type VpcSecurityGroupMembershipList = VpcSecurityGroupMembership[];

    export interface AccessDeniedFault {
      /**  **/
      message?: ExceptionMessage;
    }
    export interface AccountQuota {
      /** The name of the AWS DMS quota for this AWS account. **/
      AccountQuotaName?: String;
      /** The amount currently used toward the quota maximum. **/
      Used?: Long;
      /** The maximum allowed value for the quota. **/
      Max?: Long;
    }
    export interface AddTagsToResourceMessage {
      /** The Amazon Resource Name (ARN) of the AWS DMS resource the tag is to be added
to. AWS DMS resources include a replication instance, endpoint, and a
replication task. **/
      ResourceArn: String;
      /** The tag to be assigned to the DMS resource. **/
      Tags: TagList;
    }
    export interface AddTagsToResourceResponse {
    }
    export interface AvailabilityZone {
      /** The name of the availability zone. **/
      Name?: String;
    }
    export interface Certificate {
      /** The customer-assigned name of the certificate. Valid characters are [A-z_0-9]. **/
      CertificateIdentifier?: String;
      /** the date the certificate was created. **/
      CertificateCreationDate?: TStamp;
      /** The contents of the .pem X.509 certificate file. **/
      CertificatePem?: String;
      /** The Amazon Resource Name (ARN) for the certificate. **/
      CertificateArn?: String;
      /** The owner of the certificate. **/
      CertificateOwner?: String;
      /** The beginning date the certificate is valid. **/
      ValidFromDate?: TStamp;
      /** the final date the certificate is valid. **/
      ValidToDate?: TStamp;
      /** The signing algorithm for the certificate. **/
      SigningAlgorithm?: String;
      /** The key length of the cryptographic algorithm being used. **/
      KeyLength?: IntegerOptional;
    }
    export interface Connection {
      /** The Amazon Resource Name (ARN) of the replication instance. **/
      ReplicationInstanceArn?: String;
      /** The Amazon Resource Name (ARN) string that uniquely identifies the endpoint. **/
      EndpointArn?: String;
      /** The connection status. **/
      Status?: String;
      /** The error message when the connection last failed. **/
      LastFailureMessage?: String;
      /** The identifier of the endpoint. Identifiers must begin with a letter; must
contain only ASCII letters, digits, and hyphens; and must not end with a hyphen
or contain two consecutive hyphens. **/
      EndpointIdentifier?: String;
      /** The replication instance identifier. This parameter is stored as a lowercase
string. **/
      ReplicationInstanceIdentifier?: String;
    }
    export interface CreateEndpointMessage {
      /** The database endpoint identifier. Identifiers must begin with a letter; must
contain only ASCII letters, digits, and hyphens; and must not end with a hyphen
or contain two consecutive hyphens. **/
      EndpointIdentifier: String;
      /** The type of endpoint. **/
      EndpointType: ReplicationEndpointTypeValue;
      /** The type of engine for the endpoint. Valid values include MYSQL, ORACLE,
POSTGRES, MARIADB, AURORA, REDSHIFT, and SQLSERVER. **/
      EngineName: String;
      /** The user name to be used to login to the endpoint database. **/
      Username: String;
      /** The password to be used to login to the endpoint database. **/
      Password: SecretString;
      /** The name of the server where the endpoint database resides. **/
      ServerName: String;
      /** The port used by the endpoint database. **/
      Port: IntegerOptional;
      /** The name of the endpoint database. **/
      DatabaseName?: String;
      /** Additional attributes associated with the connection. **/
      ExtraConnectionAttributes?: String;
      /** The KMS key identifier that will be used to encrypt the connection parameters.
If you do not specify a value for the KmsKeyId parameter, then AWS DMS will use
your default encryption key. AWS KMS creates the default encryption key for your
AWS account. Your AWS account has a different default encryption key for each
AWS region. **/
      KmsKeyId?: String;
      /** Tags to be added to the endpoint. **/
      Tags?: TagList;
      /** The Amazon Resource Number (ARN) for the certificate. **/
      CertificateArn?: String;
      /** The SSL mode to use for the SSL connection.

SSL mode can be one of four values: none, require, verify-ca, verify-full. 

The default value is none. **/
      SslMode?: DmsSslModeValue;
    }
    export interface CreateEndpointResponse {
      /** The endpoint that was created. **/
      Endpoint?: Endpoint;
    }
    export interface CreateReplicationInstanceMessage {
      /** The replication instance identifier. This parameter is stored as a lowercase
string.

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens.
 
 
*  First character must be a letter.
 
 
*  Cannot end with a hyphen or contain two consecutive hyphens.
 
 

Example: myrepinstance **/
      ReplicationInstanceIdentifier: String;
      /** The amount of storage (in gigabytes) to be initially allocated for the
replication instance. **/
      AllocatedStorage?: IntegerOptional;
      /** The compute and memory capacity of the replication instance as specified by the
replication instance class.

Valid Values: dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large |
dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge **/
      ReplicationInstanceClass: String;
      /** Specifies the VPC security group to be used with the replication instance. The
VPC security group must work with the VPC containing the replication instance. **/
      VpcSecurityGroupIds?: VpcSecurityGroupIdList;
      /** The EC2 Availability Zone that the replication instance will be created in.

Default: A random, system-chosen Availability Zone in the endpoint&#x27;s region.

Example: us-east-1d **/
      AvailabilityZone?: String;
      /** A subnet group to associate with the replication instance. **/
      ReplicationSubnetGroupIdentifier?: String;
      /** The weekly time range during which system maintenance can occur, in Universal
Coordinated Time (UTC).

Format: ddd:hh24:mi-ddd:hh24:mi 

Default: A 30-minute window selected at random from an 8-hour block of time per
region, occurring on a random day of the week.

Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun

Constraints: Minimum 30-minute window. **/
      PreferredMaintenanceWindow?: String;
      /** Specifies if the replication instance is a Multi-AZ deployment. You cannot set
the AvailabilityZone parameter if the Multi-AZ parameter is set to true. **/
      MultiAZ?: BooleanOptional;
      /** The engine version number of the replication instance. **/
      EngineVersion?: String;
      /** Indicates that minor engine upgrades will be applied automatically to the
replication instance during the maintenance window.

Default: true **/
      AutoMinorVersionUpgrade?: BooleanOptional;
      /** Tags to be associated with the replication instance. **/
      Tags?: TagList;
      /** The KMS key identifier that will be used to encrypt the content on the
replication instance. If you do not specify a value for the KmsKeyId parameter,
then AWS DMS will use your default encryption key. AWS KMS creates the default
encryption key for your AWS account. Your AWS account has a different default
encryption key for each AWS region. **/
      KmsKeyId?: String;
      /** Specifies the accessibility options for the replication instance. A value of 
true represents an instance with a public IP address. A value of false 
represents an instance with a private IP address. The default value is true. **/
      PubliclyAccessible?: BooleanOptional;
    }
    export interface CreateReplicationInstanceResponse {
      /** The replication instance that was created. **/
      ReplicationInstance?: ReplicationInstance;
    }
    export interface CreateReplicationSubnetGroupMessage {
      /** The name for the replication subnet group. This value is stored as a lowercase
string.

Constraints: Must contain no more than 255 alphanumeric characters, periods,
spaces, underscores, or hyphens. Must not be &quot;default&quot;.

Example: mySubnetgroup **/
      ReplicationSubnetGroupIdentifier: String;
      /** The description for the subnet group. **/
      ReplicationSubnetGroupDescription: String;
      /** The EC2 subnet IDs for the subnet group. **/
      SubnetIds: SubnetIdentifierList;
      /** The tag to be assigned to the subnet group. **/
      Tags?: TagList;
    }
    export interface CreateReplicationSubnetGroupResponse {
      /** The replication subnet group that was created. **/
      ReplicationSubnetGroup?: ReplicationSubnetGroup;
    }
    export interface CreateReplicationTaskMessage {
      /** The replication task identifier.

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens.
 
 
*  First character must be a letter.
 
 
*  Cannot end with a hyphen or contain two consecutive hyphens. **/
      ReplicationTaskIdentifier: String;
      /** The Amazon Resource Name (ARN) string that uniquely identifies the endpoint. **/
      SourceEndpointArn: String;
      /** The Amazon Resource Name (ARN) string that uniquely identifies the endpoint. **/
      TargetEndpointArn: String;
      /** The Amazon Resource Name (ARN) of the replication instance. **/
      ReplicationInstanceArn: String;
      /** The migration type. **/
      MigrationType: MigrationTypeValue;
      /** The path of the JSON file that contains the table mappings. Preceed the path
with &quot;file://&quot;.

For example, --table-mappings file://mappingfile.json **/
      TableMappings: String;
      /** Settings for the task, such as target metadata settings. **/
      ReplicationTaskSettings?: String;
      /** The start time for the Change Data Capture (CDC) operation. **/
      CdcStartTime?: TStamp;
      /** Tags to be added to the replication instance. **/
      Tags?: TagList;
    }
    export interface CreateReplicationTaskResponse {
      /** The replication task that was created. **/
      ReplicationTask?: ReplicationTask;
    }
    export interface DeleteCertificateMessage {
      /** the Amazon Resource Name (ARN) of the deleted certificate. **/
      CertificateArn: String;
    }
    export interface DeleteCertificateResponse {
      /** The SSL certificate. **/
      Certificate?: Certificate;
    }
    export interface DeleteEndpointMessage {
      /** The Amazon Resource Name (ARN) string that uniquely identifies the endpoint. **/
      EndpointArn: String;
    }
    export interface DeleteEndpointResponse {
      /** The endpoint that was deleted. **/
      Endpoint?: Endpoint;
    }
    export interface DeleteReplicationInstanceMessage {
      /** The Amazon Resource Name (ARN) of the replication instance to be deleted. **/
      ReplicationInstanceArn: String;
    }
    export interface DeleteReplicationInstanceResponse {
      /** The replication instance that was deleted. **/
      ReplicationInstance?: ReplicationInstance;
    }
    export interface DeleteReplicationSubnetGroupMessage {
      /** The subnet group name of the replication instance. **/
      ReplicationSubnetGroupIdentifier: String;
    }
    export interface DeleteReplicationSubnetGroupResponse {
    }
    export interface DeleteReplicationTaskMessage {
      /** The Amazon Resource Name (ARN) of the replication task to be deleted. **/
      ReplicationTaskArn: String;
    }
    export interface DeleteReplicationTaskResponse {
      /** The deleted replication task. **/
      ReplicationTask?: ReplicationTask;
    }
    export interface DescribeAccountAttributesMessage {
    }
    export interface DescribeAccountAttributesResponse {
      /** Account quota information. **/
      AccountQuotas?: AccountQuotaList;
    }
    export interface DescribeCertificatesMessage {
      /** Filters applied to the certificate described in the form of key-value pairs. **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 10 **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
    }
    export interface DescribeCertificatesResponse {
      /** The pagination token. **/
      Marker?: String;
      /** The SSL certificates associated with the replication instance. **/
      Certificates?: CertificateList;
    }
    export interface DescribeConnectionsMessage {
      /** The filters applied to the connection.

Valid filter names: endpoint-arn | replication-instance-arn **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
    }
    export interface DescribeConnectionsResponse {
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
      /** A description of the connections. **/
      Connections?: ConnectionList;
    }
    export interface DescribeEndpointTypesMessage {
      /** Filters applied to the describe action.

Valid filter names: engine-name | endpoint-type **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
    }
    export interface DescribeEndpointTypesResponse {
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
      /** The type of endpoints that are supported. **/
      SupportedEndpointTypes?: SupportedEndpointTypeList;
    }
    export interface DescribeEndpointsMessage {
      /** Filters applied to the describe action.

Valid filter names: endpoint-arn | endpoint-type | endpoint-id | engine-name **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
    }
    export interface DescribeEndpointsResponse {
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
      /** Endpoint description. **/
      Endpoints?: EndpointList;
    }
    export interface DescribeOrderableReplicationInstancesMessage {
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
    }
    export interface DescribeOrderableReplicationInstancesResponse {
      /** The order-able replication instances available. **/
      OrderableReplicationInstances?: OrderableReplicationInstanceList;
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
    }
    export interface DescribeRefreshSchemasStatusMessage {
      /** The Amazon Resource Name (ARN) string that uniquely identifies the endpoint. **/
      EndpointArn: String;
    }
    export interface DescribeRefreshSchemasStatusResponse {
      /** The status of the schema. **/
      RefreshSchemasStatus?: RefreshSchemasStatus;
    }
    export interface DescribeReplicationInstancesMessage {
      /** Filters applied to the describe action.

Valid filter names: replication-instance-arn | replication-instance-id |
replication-instance-class | engine-version **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
    }
    export interface DescribeReplicationInstancesResponse {
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
      /** The replication instances described. **/
      ReplicationInstances?: ReplicationInstanceList;
    }
    export interface DescribeReplicationSubnetGroupsMessage {
      /** Filters applied to the describe action. **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
    }
    export interface DescribeReplicationSubnetGroupsResponse {
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
      /** A description of the replication subnet groups. **/
      ReplicationSubnetGroups?: ReplicationSubnetGroups;
    }
    export interface DescribeReplicationTasksMessage {
      /** Filters applied to the describe action.

Valid filter names: replication-task-arn | replication-task-id | migration-type
| endpoint-arn | replication-instance-arn **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
    }
    export interface DescribeReplicationTasksResponse {
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
      /** A description of the replication tasks. **/
      ReplicationTasks?: ReplicationTaskList;
    }
    export interface DescribeSchemasMessage {
      /** The Amazon Resource Name (ARN) string that uniquely identifies the endpoint. **/
      EndpointArn: String;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
    }
    export interface DescribeSchemasResponse {
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
      /** The described schema. **/
      Schemas?: SchemaList;
    }
    export interface DescribeTableStatisticsMessage {
      /** The Amazon Resource Name (ARN) of the replication task. **/
      ReplicationTaskArn: String;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
    }
    export interface DescribeTableStatisticsResponse {
      /** The Amazon Resource Name (ARN) of the replication task. **/
      ReplicationTaskArn?: String;
      /** The table statistics. **/
      TableStatistics?: TableStatisticsList;
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
    }
    export interface Endpoint {
      /** The database endpoint identifier. Identifiers must begin with a letter; must
contain only ASCII letters, digits, and hyphens; and must not end with a hyphen
or contain two consecutive hyphens. **/
      EndpointIdentifier?: String;
      /** The type of endpoint. **/
      EndpointType?: ReplicationEndpointTypeValue;
      /** The database engine name. **/
      EngineName?: String;
      /** The user name used to connect to the endpoint. **/
      Username?: String;
      /** The name of the server at the endpoint. **/
      ServerName?: String;
      /** The port value used to access the endpoint. **/
      Port?: IntegerOptional;
      /** The name of the database at the endpoint. **/
      DatabaseName?: String;
      /** Additional connection attributes used to connect to the endpoint. **/
      ExtraConnectionAttributes?: String;
      /** The status of the endpoint. **/
      Status?: String;
      /** The KMS key identifier that will be used to encrypt the connection parameters.
If you do not specify a value for the KmsKeyId parameter, then AWS DMS will use
your default encryption key. AWS KMS creates the default encryption key for your
AWS account. Your AWS account has a different default encryption key for each
AWS region. **/
      KmsKeyId?: String;
      /** The Amazon Resource Name (ARN) string that uniquely identifies the endpoint. **/
      EndpointArn?: String;
      /** The Amazon Resource Name (ARN) used for SSL connection to the endpoint. **/
      CertificateArn?: String;
      /** The SSL mode used to connect to the endpoint.

SSL mode can be one of four values: none, require, verify-ca, verify-full. 

The default value is none. **/
      SslMode?: DmsSslModeValue;
    }
    export interface Filter {
      /** The name of the filter. **/
      Name: String;
      /** The filter value. **/
      Values: FilterValueList;
    }
    export interface ImportCertificateMessage {
      /** The customer-assigned name of the certificate. Valid characters are [A-z_0-9]. **/
      CertificateIdentifier: String;
      /** The contents of the .pem X.509 certificate file. **/
      CertificatePem?: String;
    }
    export interface ImportCertificateResponse {
      /** The certificate to be uploaded. **/
      Certificate?: Certificate;
    }
    export interface InsufficientResourceCapacityFault {
      /**  **/
      message?: ExceptionMessage;
    }
    export interface InvalidCertificateFault {
      message?: ExceptionMessage;
    }
    export interface InvalidResourceStateFault {
      /**  **/
      message?: ExceptionMessage;
    }
    export interface InvalidSubnet {
      /**  **/
      message?: ExceptionMessage;
    }
    export interface KMSKeyNotAccessibleFault {
      /**  **/
      message?: ExceptionMessage;
    }
    export interface ListTagsForResourceMessage {
      /** The Amazon Resource Name (ARN) string that uniquely identifies the AWS DMS
resource. **/
      ResourceArn: String;
    }
    export interface ListTagsForResourceResponse {
      /** A list of tags for the resource. **/
      TagList?: TagList;
    }
    export interface ModifyEndpointMessage {
      /** The Amazon Resource Name (ARN) string that uniquely identifies the endpoint. **/
      EndpointArn: String;
      /** The database endpoint identifier. Identifiers must begin with a letter; must
contain only ASCII letters, digits, and hyphens; and must not end with a hyphen
or contain two consecutive hyphens. **/
      EndpointIdentifier?: String;
      /** The type of endpoint. **/
      EndpointType?: ReplicationEndpointTypeValue;
      /** The type of engine for the endpoint. Valid values include MYSQL, ORACLE,
POSTGRES, MARIADB, AURORA, REDSHIFT, and SQLSERVER. **/
      EngineName?: String;
      /** The user name to be used to login to the endpoint database. **/
      Username?: String;
      /** The password to be used to login to the endpoint database. **/
      Password?: SecretString;
      /** The name of the server where the endpoint database resides. **/
      ServerName?: String;
      /** The port used by the endpoint database. **/
      Port?: IntegerOptional;
      /** The name of the endpoint database. **/
      DatabaseName?: String;
      /** Additional attributes associated with the connection. **/
      ExtraConnectionAttributes?: String;
      /** The Amazon Resource Name (ARN) of the certificate used for SSL connection. **/
      CertificateArn?: String;
      /** The SSL mode to be used.

SSL mode can be one of four values: none, require, verify-ca, verify-full. 

The default value is none. **/
      SslMode?: DmsSslModeValue;
    }
    export interface ModifyEndpointResponse {
      /** The modified endpoint. **/
      Endpoint?: Endpoint;
    }
    export interface ModifyReplicationInstanceMessage {
      /** The Amazon Resource Name (ARN) of the replication instance. **/
      ReplicationInstanceArn: String;
      /** The amount of storage (in gigabytes) to be allocated for the replication
instance. **/
      AllocatedStorage?: IntegerOptional;
      /** Indicates whether the changes should be applied immediately or during the next
maintenance window. **/
      ApplyImmediately?: Boolean;
      /** The compute and memory capacity of the replication instance.

Valid Values: dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large |
dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge **/
      ReplicationInstanceClass?: String;
      /** Specifies the VPC security group to be used with the replication instance. The
VPC security group must work with the VPC containing the replication instance. **/
      VpcSecurityGroupIds?: VpcSecurityGroupIdList;
      /** The weekly time range (in UTC) during which system maintenance can occur, which
might result in an outage. Changing this parameter does not result in an outage,
except in the following situation, and the change is asynchronously applied as
soon as possible. If moving this window to the current time, there must be at
least 30 minutes between the current time and end of the window to ensure
pending changes are applied.

Default: Uses existing setting

Format: ddd:hh24:mi-ddd:hh24:mi

Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun

Constraints: Must be at least 30 minutes **/
      PreferredMaintenanceWindow?: String;
      /** Specifies if the replication instance is a Multi-AZ deployment. You cannot set
the AvailabilityZone parameter if the Multi-AZ parameter is set to true. **/
      MultiAZ?: BooleanOptional;
      /** The engine version number of the replication instance. **/
      EngineVersion?: String;
      /** Indicates that major version upgrades are allowed. Changing this parameter does
not result in an outage and the change is asynchronously applied as soon as
possible.

Constraints: This parameter must be set to true when specifying a value for the 
EngineVersion parameter that is a different major version than the replication
instance&#x27;s current version. **/
      AllowMajorVersionUpgrade?: Boolean;
      /** Indicates that minor version upgrades will be applied automatically to the
replication instance during the maintenance window. Changing this parameter does
not result in an outage except in the following case and the change is
asynchronously applied as soon as possible. An outage will result if this
parameter is set to true during the maintenance window, and a newer minor
version is available, and AWS DMS has enabled auto patching for that engine
version. **/
      AutoMinorVersionUpgrade?: BooleanOptional;
      /** The replication instance identifier. This parameter is stored as a lowercase
string. **/
      ReplicationInstanceIdentifier?: String;
    }
    export interface ModifyReplicationInstanceResponse {
      /** The modified replication instance. **/
      ReplicationInstance?: ReplicationInstance;
    }
    export interface ModifyReplicationSubnetGroupMessage {
      /** The name of the replication instance subnet group. **/
      ReplicationSubnetGroupIdentifier: String;
      /** The description of the replication instance subnet group. **/
      ReplicationSubnetGroupDescription?: String;
      /** A list of subnet IDs. **/
      SubnetIds: SubnetIdentifierList;
    }
    export interface ModifyReplicationSubnetGroupResponse {
      /** The modified replication subnet group. **/
      ReplicationSubnetGroup?: ReplicationSubnetGroup;
    }
    export interface OrderableReplicationInstance {
      /** The version of the replication engine. **/
      EngineVersion?: String;
      /** The compute and memory capacity of the replication instance.

Valid Values: dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large |
dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge **/
      ReplicationInstanceClass?: String;
      /** The type of storage used by the replication instance. **/
      StorageType?: String;
      /** The minimum amount of storage (in gigabytes) that can be allocated for the
replication instance. **/
      MinAllocatedStorage?: Integer;
      /** The minimum amount of storage (in gigabytes) that can be allocated for the
replication instance. **/
      MaxAllocatedStorage?: Integer;
      /** The default amount of storage (in gigabytes) that is allocated for the
replication instance. **/
      DefaultAllocatedStorage?: Integer;
      /** The amount of storage (in gigabytes) that is allocated for the replication
instance. **/
      IncludedAllocatedStorage?: Integer;
    }
    export interface RefreshSchemasMessage {
      /** The Amazon Resource Name (ARN) string that uniquely identifies the endpoint. **/
      EndpointArn: String;
      /** The Amazon Resource Name (ARN) of the replication instance. **/
      ReplicationInstanceArn: String;
    }
    export interface RefreshSchemasResponse {
      /** The status of the refreshed schema. **/
      RefreshSchemasStatus?: RefreshSchemasStatus;
    }
    export interface RefreshSchemasStatus {
      /** The Amazon Resource Name (ARN) string that uniquely identifies the endpoint. **/
      EndpointArn?: String;
      /** The Amazon Resource Name (ARN) of the replication instance. **/
      ReplicationInstanceArn?: String;
      /** The status of the schema. **/
      Status?: RefreshSchemasStatusTypeValue;
      /** The date the schema was last refreshed. **/
      LastRefreshDate?: TStamp;
      /** The last failure message for the schema. **/
      LastFailureMessage?: String;
    }
    export interface RemoveTagsFromResourceMessage {
      /** &gt;The Amazon Resource Name (ARN) of the AWS DMS resource the tag is to be removed
from. **/
      ResourceArn: String;
      /** The tag key (name) of the tag to be removed. **/
      TagKeys: KeyList;
    }
    export interface RemoveTagsFromResourceResponse {
    }
    export interface ReplicationInstance {
      /** The replication instance identifier. This parameter is stored as a lowercase
string.

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens.
 
 
*  First character must be a letter.
 
 
*  Cannot end with a hyphen or contain two consecutive hyphens.
 
 

Example: myrepinstance **/
      ReplicationInstanceIdentifier?: String;
      /** The compute and memory capacity of the replication instance.

Valid Values: dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large |
dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge **/
      ReplicationInstanceClass?: String;
      /** The status of the replication instance. **/
      ReplicationInstanceStatus?: String;
      /** The amount of storage (in gigabytes) that is allocated for the replication
instance. **/
      AllocatedStorage?: Integer;
      /** The time the replication instance was created. **/
      InstanceCreateTime?: TStamp;
      /** The VPC security group for the instance. **/
      VpcSecurityGroups?: VpcSecurityGroupMembershipList;
      /** The Availability Zone for the instance. **/
      AvailabilityZone?: String;
      /** The subnet group for the replication instance. **/
      ReplicationSubnetGroup?: ReplicationSubnetGroup;
      /** The maintenance window times for the replication instance. **/
      PreferredMaintenanceWindow?: String;
      /** The pending modification values. **/
      PendingModifiedValues?: ReplicationPendingModifiedValues;
      /** Specifies if the replication instance is a Multi-AZ deployment. You cannot set
the AvailabilityZone parameter if the Multi-AZ parameter is set to true. **/
      MultiAZ?: Boolean;
      /** The engine version number of the replication instance. **/
      EngineVersion?: String;
      /** Boolean value indicating if minor version upgrades will be automatically applied
to the instance. **/
      AutoMinorVersionUpgrade?: Boolean;
      /** The KMS key identifier that is used to encrypt the content on the replication
instance. If you do not specify a value for the KmsKeyId parameter, then AWS DMS
will use your default encryption key. AWS KMS creates the default encryption key
for your AWS account. Your AWS account has a different default encryption key
for each AWS region. **/
      KmsKeyId?: String;
      /** The Amazon Resource Name (ARN) of the replication instance. **/
      ReplicationInstanceArn?: String;
      /** The public IP address of the replication instance. **/
      ReplicationInstancePublicIpAddress?: String;
      /** The private IP address of the replication instance. **/
      ReplicationInstancePrivateIpAddress?: String;
      /** The public IP address of the replication instance. **/
      ReplicationInstancePublicIpAddresses?: ReplicationInstancePublicIpAddressList;
      /** The private IP address of the replication instance. **/
      ReplicationInstancePrivateIpAddresses?: ReplicationInstancePrivateIpAddressList;
      /** Specifies the accessibility options for the replication instance. A value of 
true represents an instance with a public IP address. A value of false 
represents an instance with a private IP address. The default value is true. **/
      PubliclyAccessible?: Boolean;
    }
    export interface ReplicationPendingModifiedValues {
      /** The compute and memory capacity of the replication instance.

Valid Values: dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large |
dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge **/
      ReplicationInstanceClass?: String;
      /** The amount of storage (in gigabytes) that is allocated for the replication
instance. **/
      AllocatedStorage?: IntegerOptional;
      /** Specifies if the replication instance is a Multi-AZ deployment. You cannot set
the AvailabilityZone parameter if the Multi-AZ parameter is set to true. **/
      MultiAZ?: BooleanOptional;
      /** The engine version number of the replication instance. **/
      EngineVersion?: String;
    }
    export interface ReplicationSubnetGroup {
      /** The identifier of the replication instance subnet group. **/
      ReplicationSubnetGroupIdentifier?: String;
      /** The description of the replication subnet group. **/
      ReplicationSubnetGroupDescription?: String;
      /** The ID of the VPC. **/
      VpcId?: String;
      /** The status of the subnet group. **/
      SubnetGroupStatus?: String;
      /** The subnets that are in the subnet group. **/
      Subnets?: SubnetList;
    }
    export interface ReplicationSubnetGroupDoesNotCoverEnoughAZs {
      /**  **/
      message?: ExceptionMessage;
    }
    export interface ReplicationTask {
      /** The replication task identifier.

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens.
 
 
*  First character must be a letter.
 
 
*  Cannot end with a hyphen or contain two consecutive hyphens. **/
      ReplicationTaskIdentifier?: String;
      /** The Amazon Resource Name (ARN) string that uniquely identifies the endpoint. **/
      SourceEndpointArn?: String;
      /** The Amazon Resource Name (ARN) string that uniquely identifies the endpoint. **/
      TargetEndpointArn?: String;
      /** The Amazon Resource Name (ARN) of the replication instance. **/
      ReplicationInstanceArn?: String;
      /** The type of migration. **/
      MigrationType?: MigrationTypeValue;
      /** Table mappings specified in the task. **/
      TableMappings?: String;
      /** The settings for the replication task. **/
      ReplicationTaskSettings?: String;
      /** The status of the replication task. **/
      Status?: String;
      /** The last error (failure) message generated for the replication instance. **/
      LastFailureMessage?: String;
      /** The date the replication task was created. **/
      ReplicationTaskCreationDate?: TStamp;
      /** The date the replication task is scheduled to start. **/
      ReplicationTaskStartDate?: TStamp;
      /** The Amazon Resource Name (ARN) of the replication task. **/
      ReplicationTaskArn?: String;
      /** The statistics for the task, including elapsed time, tables loaded, and table
errors. **/
      ReplicationTaskStats?: ReplicationTaskStats;
    }
    export interface ReplicationTaskStats {
      /** The percent complete for the full load migration task. **/
      FullLoadProgressPercent?: Integer;
      /** The elapsed time of the task, in milliseconds. **/
      ElapsedTimeMillis?: Long;
      /** The number of tables loaded for this task. **/
      TablesLoaded?: Integer;
      /** The number of tables currently loading for this task. **/
      TablesLoading?: Integer;
      /** The number of tables queued for this task. **/
      TablesQueued?: Integer;
      /** The number of errors that have occurred during this task. **/
      TablesErrored?: Integer;
    }
    export interface ResourceAlreadyExistsFault {
      /**  **/
      message?: ExceptionMessage;
    }
    export interface ResourceNotFoundFault {
      /**  **/
      message?: ExceptionMessage;
    }
    export interface ResourceQuotaExceededFault {
      /**  **/
      message?: ExceptionMessage;
    }
    export interface StartReplicationTaskMessage {
      /** The Amazon Resource Number (ARN) of the replication task to be started. **/
      ReplicationTaskArn: String;
      /** The type of replication task. **/
      StartReplicationTaskType: StartReplicationTaskTypeValue;
      /** The start time for the Change Data Capture (CDC) operation. **/
      CdcStartTime?: TStamp;
    }
    export interface StartReplicationTaskResponse {
      /** The replication task started. **/
      ReplicationTask?: ReplicationTask;
    }
    export interface StopReplicationTaskMessage {
      /** The Amazon Resource Number(ARN) of the replication task to be stopped. **/
      ReplicationTaskArn: String;
    }
    export interface StopReplicationTaskResponse {
      /** The replication task stopped. **/
      ReplicationTask?: ReplicationTask;
    }
    export interface StorageQuotaExceededFault {
      /**  **/
      message?: ExceptionMessage;
    }
    export interface Subnet {
      /** The subnet identifier. **/
      SubnetIdentifier?: String;
      /** The Availability Zone of the subnet. **/
      SubnetAvailabilityZone?: AvailabilityZone;
      /** The status of the subnet. **/
      SubnetStatus?: String;
    }
    export interface SubnetAlreadyInUse {
      /**  **/
      message?: ExceptionMessage;
    }
    export interface SupportedEndpointType {
      /** The database engine name. **/
      EngineName?: String;
      /** Indicates if Change Data Capture (CDC) is supported. **/
      SupportsCDC?: Boolean;
      /** The type of endpoint. **/
      EndpointType?: ReplicationEndpointTypeValue;
    }
    export interface TableStatistics {
      /** The schema name. **/
      SchemaName?: String;
      /** The name of the table. **/
      TableName?: String;
      /** The number of insert actions performed on a table. **/
      Inserts?: Long;
      /** The number of delete actions performed on a table. **/
      Deletes?: Long;
      /** The number of update actions performed on a table. **/
      Updates?: Long;
      /** The Data Definition Language (DDL) used to build and modify the structure of
your tables. **/
      Ddls?: Long;
      /** The number of rows added during the Full Load operation. **/
      FullLoadRows?: Long;
      /** The last time the table was updated. **/
      LastUpdateTime?: TStamp;
      /** The state of the table. **/
      TableState?: String;
    }
    export interface Tag {
      /** A key is the required name of the tag. The string value can be from 1 to 128
Unicode characters in length and cannot be prefixed with &quot;aws:&quot; or &quot;dms:&quot;. The
string can only contain only the set of Unicode letters, digits, white-space,
&#x27;_&#x27;, &#x27;.&#x27;, &#x27;/&#x27;, &#x27;=&#x27;, &#x27;+&#x27;, &#x27;-&#x27; (Java regex: &quot;^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]&amp;#42;)$&quot;). **/
      Key?: String;
      /** A value is the optional value of the tag. The string value can be from 1 to 256
Unicode characters in length and cannot be prefixed with &quot;aws:&quot; or &quot;dms:&quot;. The
string can only contain only the set of Unicode letters, digits, white-space,
&#x27;_&#x27;, &#x27;.&#x27;, &#x27;/&#x27;, &#x27;=&#x27;, &#x27;+&#x27;, &#x27;-&#x27; (Java regex: &quot;^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]&amp;#42;)$&quot;). **/
      Value?: String;
    }
    export interface TestConnectionMessage {
      /** The Amazon Resource Name (ARN) of the replication instance. **/
      ReplicationInstanceArn: String;
      /** The Amazon Resource Name (ARN) string that uniquely identifies the endpoint. **/
      EndpointArn: String;
    }
    export interface TestConnectionResponse {
      /** The connection tested. **/
      Connection?: Connection;
    }
    export interface UpgradeDependencyFailureFault {
      /**  **/
      message?: ExceptionMessage;
    }
    export interface VpcSecurityGroupMembership {
      /** The VPC security group Id. **/
      VpcSecurityGroupId?: String;
      /** The status of the VPC security group. **/
      Status?: String;
    }
  }
}
