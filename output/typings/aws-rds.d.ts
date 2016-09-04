// Type definitions for aws-sdk - Amazon Relational Database Service
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2014-10-31
    * endpointPrefix: rds
    * serviceAbbreviation: Amazon RDS
    * signatureVersion: v4
    * protocol: query
    *
    * Amazon Relational Database Service  
 
 Amazon Relational Database Service (Amazon RDS) is a web service that makes it
 easier to set up, operate, and scale a relational database in the cloud. It
 provides cost-efficient, resizeable capacity for an industry-standard relational
 database and manages common database administration tasks, freeing up developers
 to focus on what makes their applications and businesses unique.
 
 Amazon RDS gives you access to the capabilities of a MySQL, MariaDB, PostgreSQL,
 Microsoft SQL Server, Oracle, or Amazon Aurora database server. These
 capabilities mean that the code, applications, and tools you already use today
 with your existing databases work with Amazon RDS without modification. Amazon
 RDS automatically backs up your database and maintains the database software
 that powers your DB instance. Amazon RDS is flexible: you can scale your
 database instance&#x27;s compute resources and storage capacity to meet your
 application&#x27;s demand. As with all Amazon Web Services, there are no up-front
 investments, and you pay only for the resources you use.
 
 This interface reference for Amazon RDS contains documentation for a programming
 or command line interface you can use to manage Amazon RDS. Note that Amazon RDS
 is asynchronous, which means that some interfaces might require techniques such
 as polling or callback functions to determine when a command has been applied.
 In this reference, the parameter descriptions indicate whether a command is
 applied immediately, on the next instance reboot, or during the maintenance
 window. The reference structure is as follows, and we list following some
 related topics from the user guide.
 
  Amazon RDS API Reference 
 
  &amp;#42;  For the alphabetical list of API actions, see API Actions
    [http://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Operations.html]
    .
    
    
  &amp;#42;  For the alphabetical list of data types, see Data Types
    [http://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Types.html].
    
    
  &amp;#42;  For a list of common query parameters, see Common Parameters
    [http://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonParameters.html]
    .
    
    
  &amp;#42;  For descriptions of the error codes, see Common Errors
    [http://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonErrors.html].
    
    
 
  Amazon RDS User Guide 
 
  &amp;#42;  For a summary of the Amazon RDS interfaces, see Available RDS Interfaces
    [http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html#Welcome.Interfaces]
    .
    
    
  &amp;#42;  For more information about how to use the Query API, see Using the Query API
    [http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Using_the_Query_API.html]
    .
    *
    */
  export class RDS extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Adds a source identifier to an existing RDS event notification subscription.
     *
     * @error SubscriptionNotFoundFault   
     * @error SourceNotFoundFault   
     */
    addSourceIdentifierToSubscription(params: RDS.AddSourceIdentifierToSubscriptionMessage, callback?: (err: RDS.SubscriptionNotFoundFault | RDS.SourceNotFoundFault | any, data: RDS.AddSourceIdentifierToSubscriptionResult | any) => void): Request<RDS.AddSourceIdentifierToSubscriptionResult | any, RDS.SubscriptionNotFoundFault | RDS.SourceNotFoundFault | any>;
    /**
     * Adds metadata tags to an Amazon RDS resource. These tags can also be used with
cost allocation reporting to track cost associated with Amazon RDS resources, or
used in a Condition statement in an IAM policy for Amazon RDS.

For an overview on tagging Amazon RDS resources, see Tagging Amazon RDS
Resources
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html].
     *
     * @error DBInstanceNotFoundFault   
     * @error DBSnapshotNotFoundFault   
     */
    addTagsToResource(params: RDS.AddTagsToResourceMessage, callback?: (err: RDS.DBInstanceNotFoundFault | RDS.DBSnapshotNotFoundFault | any, data: any) => void): Request<any, RDS.DBInstanceNotFoundFault | RDS.DBSnapshotNotFoundFault | any>;
    /**
     * Applies a pending maintenance action to a resource (for example, to a DB
instance).
     *
     * @error ResourceNotFoundFault   
     */
    applyPendingMaintenanceAction(params: RDS.ApplyPendingMaintenanceActionMessage, callback?: (err: RDS.ResourceNotFoundFault | any, data: RDS.ApplyPendingMaintenanceActionResult | any) => void): Request<RDS.ApplyPendingMaintenanceActionResult | any, RDS.ResourceNotFoundFault | any>;
    /**
     * Enables ingress to a DBSecurityGroup using one of two forms of authorization.
First, EC2 or VPC security groups can be added to the DBSecurityGroup if the
application using the database is running on EC2 or VPC instances. Second, IP
ranges are available if the application accessing your database is running on
the Internet. Required parameters for this API are one of CIDR range,
EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either
EC2SecurityGroupName or EC2SecurityGroupId for non-VPC).

You cannot authorize ingress from an EC2 security group in one region to an
Amazon RDS DB instance in another. You cannot authorize ingress from a VPC
security group in one VPC to an Amazon RDS DB instance in another.

For an overview of CIDR ranges, go to the Wikipedia Tutorial
[http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing].
     *
     * @error DBSecurityGroupNotFoundFault   
     * @error InvalidDBSecurityGroupStateFault   
     * @error AuthorizationAlreadyExistsFault   
     * @error AuthorizationQuotaExceededFault   
     */
    authorizeDBSecurityGroupIngress(params: RDS.AuthorizeDBSecurityGroupIngressMessage, callback?: (err: RDS.DBSecurityGroupNotFoundFault | RDS.InvalidDBSecurityGroupStateFault | RDS.AuthorizationAlreadyExistsFault | RDS.AuthorizationQuotaExceededFault | any, data: RDS.AuthorizeDBSecurityGroupIngressResult | any) => void): Request<RDS.AuthorizeDBSecurityGroupIngressResult | any, RDS.DBSecurityGroupNotFoundFault | RDS.InvalidDBSecurityGroupStateFault | RDS.AuthorizationAlreadyExistsFault | RDS.AuthorizationQuotaExceededFault | any>;
    /**
     * Copies the specified DB cluster parameter group.
     *
     * @error DBParameterGroupNotFoundFault   
     * @error DBParameterGroupQuotaExceededFault   
     * @error DBParameterGroupAlreadyExistsFault   
     */
    copyDBClusterParameterGroup(params: RDS.CopyDBClusterParameterGroupMessage, callback?: (err: RDS.DBParameterGroupNotFoundFault | RDS.DBParameterGroupQuotaExceededFault | RDS.DBParameterGroupAlreadyExistsFault | any, data: RDS.CopyDBClusterParameterGroupResult | any) => void): Request<RDS.CopyDBClusterParameterGroupResult | any, RDS.DBParameterGroupNotFoundFault | RDS.DBParameterGroupQuotaExceededFault | RDS.DBParameterGroupAlreadyExistsFault | any>;
    /**
     * Creates a snapshot of a DB cluster. For more information on Amazon Aurora, see 
Aurora on Amazon RDS
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Aurora.html] in the 
Amazon RDS User Guide.
     *
     * @error DBClusterSnapshotAlreadyExistsFault   
     * @error DBClusterSnapshotNotFoundFault   
     * @error InvalidDBClusterStateFault   
     * @error InvalidDBClusterSnapshotStateFault   
     */
    copyDBClusterSnapshot(params: RDS.CopyDBClusterSnapshotMessage, callback?: (err: RDS.DBClusterSnapshotAlreadyExistsFault | RDS.DBClusterSnapshotNotFoundFault | RDS.InvalidDBClusterStateFault | RDS.InvalidDBClusterSnapshotStateFault | any, data: RDS.CopyDBClusterSnapshotResult | any) => void): Request<RDS.CopyDBClusterSnapshotResult | any, RDS.DBClusterSnapshotAlreadyExistsFault | RDS.DBClusterSnapshotNotFoundFault | RDS.InvalidDBClusterStateFault | RDS.InvalidDBClusterSnapshotStateFault | any>;
    /**
     * Copies the specified DB parameter group.
     *
     * @error DBParameterGroupNotFoundFault   
     * @error DBParameterGroupAlreadyExistsFault   
     * @error DBParameterGroupQuotaExceededFault   
     */
    copyDBParameterGroup(params: RDS.CopyDBParameterGroupMessage, callback?: (err: RDS.DBParameterGroupNotFoundFault | RDS.DBParameterGroupAlreadyExistsFault | RDS.DBParameterGroupQuotaExceededFault | any, data: RDS.CopyDBParameterGroupResult | any) => void): Request<RDS.CopyDBParameterGroupResult | any, RDS.DBParameterGroupNotFoundFault | RDS.DBParameterGroupAlreadyExistsFault | RDS.DBParameterGroupQuotaExceededFault | any>;
    /**
     * Copies the specified DB snapshot. The source DB snapshot must be in the
&quot;available&quot; state.

If you are copying from a shared manual DB snapshot, the 
SourceDBSnapshotIdentifier must be the ARN of the shared DB snapshot.
     *
     * @error DBSnapshotAlreadyExistsFault   
     * @error DBSnapshotNotFoundFault   
     * @error InvalidDBSnapshotStateFault   
     * @error SnapshotQuotaExceededFault   
     * @error KMSKeyNotAccessibleFault   
     */
    copyDBSnapshot(params: RDS.CopyDBSnapshotMessage, callback?: (err: RDS.DBSnapshotAlreadyExistsFault | RDS.DBSnapshotNotFoundFault | RDS.InvalidDBSnapshotStateFault | RDS.SnapshotQuotaExceededFault | RDS.KMSKeyNotAccessibleFault | any, data: RDS.CopyDBSnapshotResult | any) => void): Request<RDS.CopyDBSnapshotResult | any, RDS.DBSnapshotAlreadyExistsFault | RDS.DBSnapshotNotFoundFault | RDS.InvalidDBSnapshotStateFault | RDS.SnapshotQuotaExceededFault | RDS.KMSKeyNotAccessibleFault | any>;
    /**
     * Copies the specified option group.
     *
     * @error OptionGroupAlreadyExistsFault   
     * @error OptionGroupNotFoundFault   
     * @error OptionGroupQuotaExceededFault   
     */
    copyOptionGroup(params: RDS.CopyOptionGroupMessage, callback?: (err: RDS.OptionGroupAlreadyExistsFault | RDS.OptionGroupNotFoundFault | RDS.OptionGroupQuotaExceededFault | any, data: RDS.CopyOptionGroupResult | any) => void): Request<RDS.CopyOptionGroupResult | any, RDS.OptionGroupAlreadyExistsFault | RDS.OptionGroupNotFoundFault | RDS.OptionGroupQuotaExceededFault | any>;
    /**
     * Creates a new Amazon Aurora DB cluster.

You can use the ReplicationSourceIdentifier parameter to create the DB cluster
as a Read Replica of another DB cluster.

For more information on Amazon Aurora, see Aurora on Amazon RDS
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Aurora.html] in the 
Amazon RDS User Guide.
     *
     * @error DBClusterAlreadyExistsFault   
     * @error InsufficientStorageClusterCapacityFault   
     * @error DBClusterQuotaExceededFault   
     * @error StorageQuotaExceededFault   
     * @error DBSubnetGroupNotFoundFault   
     * @error InvalidVPCNetworkStateFault   
     * @error InvalidDBClusterStateFault   
     * @error InvalidDBSubnetGroupStateFault   
     * @error InvalidSubnet   
     * @error DBClusterParameterGroupNotFoundFault   
     * @error KMSKeyNotAccessibleFault   
     * @error DBClusterNotFoundFault   
     */
    createDBCluster(params: RDS.CreateDBClusterMessage, callback?: (err: RDS.DBClusterAlreadyExistsFault | RDS.InsufficientStorageClusterCapacityFault | RDS.DBClusterQuotaExceededFault | RDS.StorageQuotaExceededFault | RDS.DBSubnetGroupNotFoundFault | RDS.InvalidVPCNetworkStateFault | RDS.InvalidDBClusterStateFault | RDS.InvalidDBSubnetGroupStateFault | RDS.InvalidSubnet | RDS.DBClusterParameterGroupNotFoundFault | RDS.KMSKeyNotAccessibleFault | RDS.DBClusterNotFoundFault | any, data: RDS.CreateDBClusterResult | any) => void): Request<RDS.CreateDBClusterResult | any, RDS.DBClusterAlreadyExistsFault | RDS.InsufficientStorageClusterCapacityFault | RDS.DBClusterQuotaExceededFault | RDS.StorageQuotaExceededFault | RDS.DBSubnetGroupNotFoundFault | RDS.InvalidVPCNetworkStateFault | RDS.InvalidDBClusterStateFault | RDS.InvalidDBSubnetGroupStateFault | RDS.InvalidSubnet | RDS.DBClusterParameterGroupNotFoundFault | RDS.KMSKeyNotAccessibleFault | RDS.DBClusterNotFoundFault | any>;
    /**
     * Creates a new DB cluster parameter group.

Parameters in a DB cluster parameter group apply to all of the instances in a DB
cluster.

 A DB cluster parameter group is initially created with the default parameters
for the database engine used by instances in the DB cluster. To provide custom
values for any of the parameters, you must modify the group after creating it
using ModifyDBClusterParameterGroup. Once you&#x27;ve created a DB cluster parameter
group, you need to associate it with your DB cluster using ModifyDBCluster. When
you associate a new DB cluster parameter group with a running DB cluster, you
need to reboot the DB instances in the DB cluster without failover for the new
DB cluster parameter group and associated settings to take effect. 

After you create a DB cluster parameter group, you should wait at least 5
minutes before creating your first DB cluster that uses that DB cluster
parameter group as the default parameter group. This allows Amazon RDS to fully
complete the create action before the DB cluster parameter group is used as the
default for a new DB cluster. This is especially important for parameters that
are critical when creating the default database for a DB cluster, such as the
character set for the default database defined by the character_set_database 
parameter. You can use the Parameter Groups option of the Amazon RDS console
[https://console.aws.amazon.com/rds/] or the DescribeDBClusterParameters command
to verify that your DB cluster parameter group has been created or modified.

For more information on Amazon Aurora, see Aurora on Amazon RDS
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Aurora.html] in the 
Amazon RDS User Guide.
     *
     * @error DBParameterGroupQuotaExceededFault   
     * @error DBParameterGroupAlreadyExistsFault   
     */
    createDBClusterParameterGroup(params: RDS.CreateDBClusterParameterGroupMessage, callback?: (err: RDS.DBParameterGroupQuotaExceededFault | RDS.DBParameterGroupAlreadyExistsFault | any, data: RDS.CreateDBClusterParameterGroupResult | any) => void): Request<RDS.CreateDBClusterParameterGroupResult | any, RDS.DBParameterGroupQuotaExceededFault | RDS.DBParameterGroupAlreadyExistsFault | any>;
    /**
     * Creates a snapshot of a DB cluster. For more information on Amazon Aurora, see 
Aurora on Amazon RDS
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Aurora.html] in the 
Amazon RDS User Guide.
     *
     * @error DBClusterSnapshotAlreadyExistsFault   
     * @error InvalidDBClusterStateFault   
     * @error DBClusterNotFoundFault   
     * @error SnapshotQuotaExceededFault   
     * @error InvalidDBClusterSnapshotStateFault   
     */
    createDBClusterSnapshot(params: RDS.CreateDBClusterSnapshotMessage, callback?: (err: RDS.DBClusterSnapshotAlreadyExistsFault | RDS.InvalidDBClusterStateFault | RDS.DBClusterNotFoundFault | RDS.SnapshotQuotaExceededFault | RDS.InvalidDBClusterSnapshotStateFault | any, data: RDS.CreateDBClusterSnapshotResult | any) => void): Request<RDS.CreateDBClusterSnapshotResult | any, RDS.DBClusterSnapshotAlreadyExistsFault | RDS.InvalidDBClusterStateFault | RDS.DBClusterNotFoundFault | RDS.SnapshotQuotaExceededFault | RDS.InvalidDBClusterSnapshotStateFault | any>;
    /**
     * Creates a new DB instance.
     *
     * @error DBInstanceAlreadyExistsFault   
     * @error InsufficientDBInstanceCapacityFault   
     * @error DBParameterGroupNotFoundFault   
     * @error DBSecurityGroupNotFoundFault   
     * @error InstanceQuotaExceededFault   
     * @error StorageQuotaExceededFault   
     * @error DBSubnetGroupNotFoundFault   
     * @error DBSubnetGroupDoesNotCoverEnoughAZs   
     * @error InvalidDBClusterStateFault   
     * @error InvalidSubnet   
     * @error InvalidVPCNetworkStateFault   
     * @error ProvisionedIopsNotAvailableInAZFault   
     * @error OptionGroupNotFoundFault   
     * @error DBClusterNotFoundFault   
     * @error StorageTypeNotSupportedFault   
     * @error AuthorizationNotFoundFault   
     * @error KMSKeyNotAccessibleFault   
     * @error DomainNotFoundFault   
     */
    createDBInstance(params: RDS.CreateDBInstanceMessage, callback?: (err: RDS.DBInstanceAlreadyExistsFault | RDS.InsufficientDBInstanceCapacityFault | RDS.DBParameterGroupNotFoundFault | RDS.DBSecurityGroupNotFoundFault | RDS.InstanceQuotaExceededFault | RDS.StorageQuotaExceededFault | RDS.DBSubnetGroupNotFoundFault | RDS.DBSubnetGroupDoesNotCoverEnoughAZs | RDS.InvalidDBClusterStateFault | RDS.InvalidSubnet | RDS.InvalidVPCNetworkStateFault | RDS.ProvisionedIopsNotAvailableInAZFault | RDS.OptionGroupNotFoundFault | RDS.DBClusterNotFoundFault | RDS.StorageTypeNotSupportedFault | RDS.AuthorizationNotFoundFault | RDS.KMSKeyNotAccessibleFault | RDS.DomainNotFoundFault | any, data: RDS.CreateDBInstanceResult | any) => void): Request<RDS.CreateDBInstanceResult | any, RDS.DBInstanceAlreadyExistsFault | RDS.InsufficientDBInstanceCapacityFault | RDS.DBParameterGroupNotFoundFault | RDS.DBSecurityGroupNotFoundFault | RDS.InstanceQuotaExceededFault | RDS.StorageQuotaExceededFault | RDS.DBSubnetGroupNotFoundFault | RDS.DBSubnetGroupDoesNotCoverEnoughAZs | RDS.InvalidDBClusterStateFault | RDS.InvalidSubnet | RDS.InvalidVPCNetworkStateFault | RDS.ProvisionedIopsNotAvailableInAZFault | RDS.OptionGroupNotFoundFault | RDS.DBClusterNotFoundFault | RDS.StorageTypeNotSupportedFault | RDS.AuthorizationNotFoundFault | RDS.KMSKeyNotAccessibleFault | RDS.DomainNotFoundFault | any>;
    /**
     * Creates a DB instance for a DB instance running MySQL, MariaDB, or PostgreSQL
that acts as a Read Replica of a source DB instance.

All Read Replica DB instances are created as Single-AZ deployments with backups
disabled. All other DB instance attributes (including DB security groups and DB
parameter groups) are inherited from the source DB instance, except as specified
below.

The source DB instance must have backup retention enabled.
     *
     * @error DBInstanceAlreadyExistsFault   
     * @error InsufficientDBInstanceCapacityFault   
     * @error DBParameterGroupNotFoundFault   
     * @error DBSecurityGroupNotFoundFault   
     * @error InstanceQuotaExceededFault   
     * @error StorageQuotaExceededFault   
     * @error DBInstanceNotFoundFault   
     * @error InvalidDBInstanceStateFault   
     * @error DBSubnetGroupNotFoundFault   
     * @error DBSubnetGroupDoesNotCoverEnoughAZs   
     * @error InvalidSubnet   
     * @error InvalidVPCNetworkStateFault   
     * @error ProvisionedIopsNotAvailableInAZFault   
     * @error OptionGroupNotFoundFault   
     * @error DBSubnetGroupNotAllowedFault   
     * @error InvalidDBSubnetGroupFault   
     * @error StorageTypeNotSupportedFault   
     * @error KMSKeyNotAccessibleFault   
     */
    createDBInstanceReadReplica(params: RDS.CreateDBInstanceReadReplicaMessage, callback?: (err: RDS.DBInstanceAlreadyExistsFault | RDS.InsufficientDBInstanceCapacityFault | RDS.DBParameterGroupNotFoundFault | RDS.DBSecurityGroupNotFoundFault | RDS.InstanceQuotaExceededFault | RDS.StorageQuotaExceededFault | RDS.DBInstanceNotFoundFault | RDS.InvalidDBInstanceStateFault | RDS.DBSubnetGroupNotFoundFault | RDS.DBSubnetGroupDoesNotCoverEnoughAZs | RDS.InvalidSubnet | RDS.InvalidVPCNetworkStateFault | RDS.ProvisionedIopsNotAvailableInAZFault | RDS.OptionGroupNotFoundFault | RDS.DBSubnetGroupNotAllowedFault | RDS.InvalidDBSubnetGroupFault | RDS.StorageTypeNotSupportedFault | RDS.KMSKeyNotAccessibleFault | any, data: RDS.CreateDBInstanceReadReplicaResult | any) => void): Request<RDS.CreateDBInstanceReadReplicaResult | any, RDS.DBInstanceAlreadyExistsFault | RDS.InsufficientDBInstanceCapacityFault | RDS.DBParameterGroupNotFoundFault | RDS.DBSecurityGroupNotFoundFault | RDS.InstanceQuotaExceededFault | RDS.StorageQuotaExceededFault | RDS.DBInstanceNotFoundFault | RDS.InvalidDBInstanceStateFault | RDS.DBSubnetGroupNotFoundFault | RDS.DBSubnetGroupDoesNotCoverEnoughAZs | RDS.InvalidSubnet | RDS.InvalidVPCNetworkStateFault | RDS.ProvisionedIopsNotAvailableInAZFault | RDS.OptionGroupNotFoundFault | RDS.DBSubnetGroupNotAllowedFault | RDS.InvalidDBSubnetGroupFault | RDS.StorageTypeNotSupportedFault | RDS.KMSKeyNotAccessibleFault | any>;
    /**
     * Creates a new DB parameter group.

 A DB parameter group is initially created with the default parameters for the
database engine used by the DB instance. To provide custom values for any of the
parameters, you must modify the group after creating it using 
ModifyDBParameterGroup. Once you&#x27;ve created a DB parameter group, you need to
associate it with your DB instance using ModifyDBInstance. When you associate a
new DB parameter group with a running DB instance, you need to reboot the DB
instance without failover for the new DB parameter group and associated settings
to take effect. 

After you create a DB parameter group, you should wait at least 5 minutes before
creating your first DB instance that uses that DB parameter group as the default
parameter group. This allows Amazon RDS to fully complete the create action
before the parameter group is used as the default for a new DB instance. This is
especially important for parameters that are critical when creating the default
database for a DB instance, such as the character set for the default database
defined by the character_set_database parameter. You can use the Parameter
Groups option of the Amazon RDS console [https://console.aws.amazon.com/rds/] or
the DescribeDBParameters command to verify that your DB parameter group has been
created or modified.
     *
     * @error DBParameterGroupQuotaExceededFault   
     * @error DBParameterGroupAlreadyExistsFault   
     */
    createDBParameterGroup(params: RDS.CreateDBParameterGroupMessage, callback?: (err: RDS.DBParameterGroupQuotaExceededFault | RDS.DBParameterGroupAlreadyExistsFault | any, data: RDS.CreateDBParameterGroupResult | any) => void): Request<RDS.CreateDBParameterGroupResult | any, RDS.DBParameterGroupQuotaExceededFault | RDS.DBParameterGroupAlreadyExistsFault | any>;
    /**
     * Creates a new DB security group. DB security groups control access to a DB
instance.
     *
     * @error DBSecurityGroupAlreadyExistsFault   
     * @error DBSecurityGroupQuotaExceededFault   
     * @error DBSecurityGroupNotSupportedFault   
     */
    createDBSecurityGroup(params: RDS.CreateDBSecurityGroupMessage, callback?: (err: RDS.DBSecurityGroupAlreadyExistsFault | RDS.DBSecurityGroupQuotaExceededFault | RDS.DBSecurityGroupNotSupportedFault | any, data: RDS.CreateDBSecurityGroupResult | any) => void): Request<RDS.CreateDBSecurityGroupResult | any, RDS.DBSecurityGroupAlreadyExistsFault | RDS.DBSecurityGroupQuotaExceededFault | RDS.DBSecurityGroupNotSupportedFault | any>;
    /**
     * Creates a DBSnapshot. The source DBInstance must be in &quot;available&quot; state.
     *
     * @error DBSnapshotAlreadyExistsFault   
     * @error InvalidDBInstanceStateFault   
     * @error DBInstanceNotFoundFault   
     * @error SnapshotQuotaExceededFault   
     */
    createDBSnapshot(params: RDS.CreateDBSnapshotMessage, callback?: (err: RDS.DBSnapshotAlreadyExistsFault | RDS.InvalidDBInstanceStateFault | RDS.DBInstanceNotFoundFault | RDS.SnapshotQuotaExceededFault | any, data: RDS.CreateDBSnapshotResult | any) => void): Request<RDS.CreateDBSnapshotResult | any, RDS.DBSnapshotAlreadyExistsFault | RDS.InvalidDBInstanceStateFault | RDS.DBInstanceNotFoundFault | RDS.SnapshotQuotaExceededFault | any>;
    /**
     * Creates a new DB subnet group. DB subnet groups must contain at least one subnet
in at least two AZs in the region.
     *
     * @error DBSubnetGroupAlreadyExistsFault   
     * @error DBSubnetGroupQuotaExceededFault   
     * @error DBSubnetQuotaExceededFault   
     * @error DBSubnetGroupDoesNotCoverEnoughAZs   
     * @error InvalidSubnet   
     */
    createDBSubnetGroup(params: RDS.CreateDBSubnetGroupMessage, callback?: (err: RDS.DBSubnetGroupAlreadyExistsFault | RDS.DBSubnetGroupQuotaExceededFault | RDS.DBSubnetQuotaExceededFault | RDS.DBSubnetGroupDoesNotCoverEnoughAZs | RDS.InvalidSubnet | any, data: RDS.CreateDBSubnetGroupResult | any) => void): Request<RDS.CreateDBSubnetGroupResult | any, RDS.DBSubnetGroupAlreadyExistsFault | RDS.DBSubnetGroupQuotaExceededFault | RDS.DBSubnetQuotaExceededFault | RDS.DBSubnetGroupDoesNotCoverEnoughAZs | RDS.InvalidSubnet | any>;
    /**
     * Creates an RDS event notification subscription. This action requires a topic ARN
(Amazon Resource Name) created by either the RDS console, the SNS console, or
the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS
and subscribe to the topic. The ARN is displayed in the SNS console.

You can specify the type of source (SourceType) you want to be notified of,
provide a list of RDS sources (SourceIds) that triggers the events, and provide
a list of event categories (EventCategories) for events you want to be notified
of. For example, you can specify SourceType = db-instance, SourceIds =
mydbinstance1, mydbinstance2 and EventCategories = Availability, Backup.

If you specify both the SourceType and SourceIds, such as SourceType =
db-instance and SourceIdentifier = myDBInstance1, you will be notified of all
the db-instance events for the specified source. If you specify a SourceType but
do not specify a SourceIdentifier, you will receive notice of the events for
that source type for all your RDS sources. If you do not specify either the
SourceType nor the SourceIdentifier, you will be notified of events generated
from all RDS sources belonging to your customer account.
     *
     * @error EventSubscriptionQuotaExceededFault   
     * @error SubscriptionAlreadyExistFault   
     * @error SNSInvalidTopicFault   
     * @error SNSNoAuthorizationFault   
     * @error SNSTopicArnNotFoundFault   
     * @error SubscriptionCategoryNotFoundFault   
     * @error SourceNotFoundFault   
     */
    createEventSubscription(params: RDS.CreateEventSubscriptionMessage, callback?: (err: RDS.EventSubscriptionQuotaExceededFault | RDS.SubscriptionAlreadyExistFault | RDS.SNSInvalidTopicFault | RDS.SNSNoAuthorizationFault | RDS.SNSTopicArnNotFoundFault | RDS.SubscriptionCategoryNotFoundFault | RDS.SourceNotFoundFault | any, data: RDS.CreateEventSubscriptionResult | any) => void): Request<RDS.CreateEventSubscriptionResult | any, RDS.EventSubscriptionQuotaExceededFault | RDS.SubscriptionAlreadyExistFault | RDS.SNSInvalidTopicFault | RDS.SNSNoAuthorizationFault | RDS.SNSTopicArnNotFoundFault | RDS.SubscriptionCategoryNotFoundFault | RDS.SourceNotFoundFault | any>;
    /**
     * Creates a new option group. You can create up to 20 option groups.
     *
     * @error OptionGroupAlreadyExistsFault   
     * @error OptionGroupQuotaExceededFault   
     */
    createOptionGroup(params: RDS.CreateOptionGroupMessage, callback?: (err: RDS.OptionGroupAlreadyExistsFault | RDS.OptionGroupQuotaExceededFault | any, data: RDS.CreateOptionGroupResult | any) => void): Request<RDS.CreateOptionGroupResult | any, RDS.OptionGroupAlreadyExistsFault | RDS.OptionGroupQuotaExceededFault | any>;
    /**
     * The DeleteDBCluster action deletes a previously provisioned DB cluster. When you
delete a DB cluster, all automated backups for that DB cluster are deleted and
cannot be recovered. Manual DB cluster snapshots of the specified DB cluster are
not deleted.



For more information on Amazon Aurora, see Aurora on Amazon RDS
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Aurora.html] in the 
Amazon RDS User Guide.
     *
     * @error DBClusterNotFoundFault   
     * @error InvalidDBClusterStateFault   
     * @error DBClusterSnapshotAlreadyExistsFault   
     * @error SnapshotQuotaExceededFault   
     * @error InvalidDBClusterSnapshotStateFault   
     */
    deleteDBCluster(params: RDS.DeleteDBClusterMessage, callback?: (err: RDS.DBClusterNotFoundFault | RDS.InvalidDBClusterStateFault | RDS.DBClusterSnapshotAlreadyExistsFault | RDS.SnapshotQuotaExceededFault | RDS.InvalidDBClusterSnapshotStateFault | any, data: RDS.DeleteDBClusterResult | any) => void): Request<RDS.DeleteDBClusterResult | any, RDS.DBClusterNotFoundFault | RDS.InvalidDBClusterStateFault | RDS.DBClusterSnapshotAlreadyExistsFault | RDS.SnapshotQuotaExceededFault | RDS.InvalidDBClusterSnapshotStateFault | any>;
    /**
     * Deletes a specified DB cluster parameter group. The DB cluster parameter group
to be deleted cannot be associated with any DB clusters.

For more information on Amazon Aurora, see Aurora on Amazon RDS
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Aurora.html] in the 
Amazon RDS User Guide.
     *
     * @error InvalidDBParameterGroupStateFault   
     * @error DBParameterGroupNotFoundFault   
     */
    deleteDBClusterParameterGroup(params: RDS.DeleteDBClusterParameterGroupMessage, callback?: (err: RDS.InvalidDBParameterGroupStateFault | RDS.DBParameterGroupNotFoundFault | any, data: any) => void): Request<any, RDS.InvalidDBParameterGroupStateFault | RDS.DBParameterGroupNotFoundFault | any>;
    /**
     * Deletes a DB cluster snapshot. If the snapshot is being copied, the copy
operation is terminated.

The DB cluster snapshot must be in the available state to be deleted.

For more information on Amazon Aurora, see Aurora on Amazon RDS
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Aurora.html] in the 
Amazon RDS User Guide.
     *
     * @error InvalidDBClusterSnapshotStateFault   
     * @error DBClusterSnapshotNotFoundFault   
     */
    deleteDBClusterSnapshot(params: RDS.DeleteDBClusterSnapshotMessage, callback?: (err: RDS.InvalidDBClusterSnapshotStateFault | RDS.DBClusterSnapshotNotFoundFault | any, data: RDS.DeleteDBClusterSnapshotResult | any) => void): Request<RDS.DeleteDBClusterSnapshotResult | any, RDS.InvalidDBClusterSnapshotStateFault | RDS.DBClusterSnapshotNotFoundFault | any>;
    /**
     * The DeleteDBInstance action deletes a previously provisioned DB instance. When
you delete a DB instance, all automated backups for that instance are deleted
and cannot be recovered. Manual DB snapshots of the DB instance to be deleted by 
DeleteDBInstance are not deleted.

 If you request a final DB snapshot the status of the Amazon RDS DB instance is 
deleting until the DB snapshot is created. The API action DescribeDBInstance is
used to monitor the status of this operation. The action cannot be canceled or
reverted once submitted. 

Note that when a DB instance is in a failure state and has a status of failed, 
incompatible-restore, or incompatible-network, you can only delete it when the 
SkipFinalSnapshot parameter is set to true.

If the specified DB instance is part of an Amazon Aurora DB cluster, you cannot
delete the DB instance if the following are true:

 &amp;#42;  The DB cluster is a Read Replica of another Amazon Aurora DB cluster.
   
   
 &amp;#42;  The DB instance is the only instance in the DB cluster.
   
   

To delete a DB instance in this case, first call the PromoteReadReplicaDBCluster 
API action to promote the DB cluster so it&#x27;s no longer a Read Replica. After the
promotion completes, then call the DeleteDBInstance API action to delete the
final instance in the DB cluster.
     *
     * @error DBInstanceNotFoundFault   
     * @error InvalidDBInstanceStateFault   
     * @error DBSnapshotAlreadyExistsFault   
     * @error SnapshotQuotaExceededFault   
     * @error InvalidDBClusterStateFault   
     */
    deleteDBInstance(params: RDS.DeleteDBInstanceMessage, callback?: (err: RDS.DBInstanceNotFoundFault | RDS.InvalidDBInstanceStateFault | RDS.DBSnapshotAlreadyExistsFault | RDS.SnapshotQuotaExceededFault | RDS.InvalidDBClusterStateFault | any, data: RDS.DeleteDBInstanceResult | any) => void): Request<RDS.DeleteDBInstanceResult | any, RDS.DBInstanceNotFoundFault | RDS.InvalidDBInstanceStateFault | RDS.DBSnapshotAlreadyExistsFault | RDS.SnapshotQuotaExceededFault | RDS.InvalidDBClusterStateFault | any>;
    /**
     * Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted cannot
be associated with any DB instances.
     *
     * @error InvalidDBParameterGroupStateFault   
     * @error DBParameterGroupNotFoundFault   
     */
    deleteDBParameterGroup(params: RDS.DeleteDBParameterGroupMessage, callback?: (err: RDS.InvalidDBParameterGroupStateFault | RDS.DBParameterGroupNotFoundFault | any, data: any) => void): Request<any, RDS.InvalidDBParameterGroupStateFault | RDS.DBParameterGroupNotFoundFault | any>;
    /**
     * Deletes a DB security group.

The specified DB security group must not be associated with any DB instances.
     *
     * @error InvalidDBSecurityGroupStateFault   
     * @error DBSecurityGroupNotFoundFault   
     */
    deleteDBSecurityGroup(params: RDS.DeleteDBSecurityGroupMessage, callback?: (err: RDS.InvalidDBSecurityGroupStateFault | RDS.DBSecurityGroupNotFoundFault | any, data: any) => void): Request<any, RDS.InvalidDBSecurityGroupStateFault | RDS.DBSecurityGroupNotFoundFault | any>;
    /**
     * Deletes a DBSnapshot. If the snapshot is being copied, the copy operation is
terminated.

The DBSnapshot must be in the available state to be deleted.
     *
     * @error InvalidDBSnapshotStateFault   
     * @error DBSnapshotNotFoundFault   
     */
    deleteDBSnapshot(params: RDS.DeleteDBSnapshotMessage, callback?: (err: RDS.InvalidDBSnapshotStateFault | RDS.DBSnapshotNotFoundFault | any, data: RDS.DeleteDBSnapshotResult | any) => void): Request<RDS.DeleteDBSnapshotResult | any, RDS.InvalidDBSnapshotStateFault | RDS.DBSnapshotNotFoundFault | any>;
    /**
     * Deletes a DB subnet group.

The specified database subnet group must not be associated with any DB
instances.
     *
     * @error InvalidDBSubnetGroupStateFault   
     * @error InvalidDBSubnetStateFault   
     * @error DBSubnetGroupNotFoundFault   
     */
    deleteDBSubnetGroup(params: RDS.DeleteDBSubnetGroupMessage, callback?: (err: RDS.InvalidDBSubnetGroupStateFault | RDS.InvalidDBSubnetStateFault | RDS.DBSubnetGroupNotFoundFault | any, data: any) => void): Request<any, RDS.InvalidDBSubnetGroupStateFault | RDS.InvalidDBSubnetStateFault | RDS.DBSubnetGroupNotFoundFault | any>;
    /**
     * Deletes an RDS event notification subscription.
     *
     * @error SubscriptionNotFoundFault   
     * @error InvalidEventSubscriptionStateFault   
     */
    deleteEventSubscription(params: RDS.DeleteEventSubscriptionMessage, callback?: (err: RDS.SubscriptionNotFoundFault | RDS.InvalidEventSubscriptionStateFault | any, data: RDS.DeleteEventSubscriptionResult | any) => void): Request<RDS.DeleteEventSubscriptionResult | any, RDS.SubscriptionNotFoundFault | RDS.InvalidEventSubscriptionStateFault | any>;
    /**
     * Deletes an existing option group.
     *
     * @error OptionGroupNotFoundFault   
     * @error InvalidOptionGroupStateFault   
     */
    deleteOptionGroup(params: RDS.DeleteOptionGroupMessage, callback?: (err: RDS.OptionGroupNotFoundFault | RDS.InvalidOptionGroupStateFault | any, data: any) => void): Request<any, RDS.OptionGroupNotFoundFault | RDS.InvalidOptionGroupStateFault | any>;
    /**
     * Lists all of the attributes for a customer account. The attributes include
Amazon RDS quotas for the account, such as the number of DB instances allowed.
The description for a quota includes the quota name, current usage toward that
quota, and the quota&#x27;s maximum value.

This command does not take any parameters.
     *
     */
    describeAccountAttributes(params: RDS.DescribeAccountAttributesMessage, callback?: (err: any, data: RDS.AccountAttributesMessage | any) => void): Request<RDS.AccountAttributesMessage | any, any>;
    /**
     * Lists the set of CA certificates provided by Amazon RDS for this AWS account.
     *
     * @error CertificateNotFoundFault   
     */
    describeCertificates(params: RDS.DescribeCertificatesMessage, callback?: (err: RDS.CertificateNotFoundFault | any, data: RDS.CertificateMessage | any) => void): Request<RDS.CertificateMessage | any, RDS.CertificateNotFoundFault | any>;
    /**
     * Returns a list of DBClusterParameterGroup descriptions. If a 
DBClusterParameterGroupName parameter is specified, the list will contain only
the description of the specified DB cluster parameter group. 

For more information on Amazon Aurora, see Aurora on Amazon RDS
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Aurora.html] in the 
Amazon RDS User Guide.
     *
     * @error DBParameterGroupNotFoundFault   
     */
    describeDBClusterParameterGroups(params: RDS.DescribeDBClusterParameterGroupsMessage, callback?: (err: RDS.DBParameterGroupNotFoundFault | any, data: RDS.DBClusterParameterGroupsMessage | any) => void): Request<RDS.DBClusterParameterGroupsMessage | any, RDS.DBParameterGroupNotFoundFault | any>;
    /**
     * Returns the detailed parameter list for a particular DB cluster parameter group.

For more information on Amazon Aurora, see Aurora on Amazon RDS
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Aurora.html] in the 
Amazon RDS User Guide.
     *
     * @error DBParameterGroupNotFoundFault   
     */
    describeDBClusterParameters(params: RDS.DescribeDBClusterParametersMessage, callback?: (err: RDS.DBParameterGroupNotFoundFault | any, data: RDS.DBClusterParameterGroupDetails | any) => void): Request<RDS.DBClusterParameterGroupDetails | any, RDS.DBParameterGroupNotFoundFault | any>;
    /**
     * Returns a list of DB cluster snapshot attribute names and values for a manual DB
cluster snapshot.

When sharing snapshots with other AWS accounts, 
DescribeDBClusterSnapshotAttributes returns the restore attribute and a list of
IDs for the AWS accounts that are authorized to copy or restore the manual DB
cluster snapshot. If all is included in the list of values for the restore 
attribute, then the manual DB cluster snapshot is public and can be copied or
restored by all AWS accounts.

To add or remove access for an AWS account to copy or restore a manual DB
cluster snapshot, or to make the manual DB cluster snapshot public or private,
use the ModifyDBClusterSnapshotAttribute API action.
     *
     * @error DBClusterSnapshotNotFoundFault   
     */
    describeDBClusterSnapshotAttributes(params: RDS.DescribeDBClusterSnapshotAttributesMessage, callback?: (err: RDS.DBClusterSnapshotNotFoundFault | any, data: RDS.DescribeDBClusterSnapshotAttributesResult | any) => void): Request<RDS.DescribeDBClusterSnapshotAttributesResult | any, RDS.DBClusterSnapshotNotFoundFault | any>;
    /**
     * Returns information about DB cluster snapshots. This API action supports
pagination.

For more information on Amazon Aurora, see Aurora on Amazon RDS
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Aurora.html] in the 
Amazon RDS User Guide.
     *
     * @error DBClusterSnapshotNotFoundFault   
     */
    describeDBClusterSnapshots(params: RDS.DescribeDBClusterSnapshotsMessage, callback?: (err: RDS.DBClusterSnapshotNotFoundFault | any, data: RDS.DBClusterSnapshotMessage | any) => void): Request<RDS.DBClusterSnapshotMessage | any, RDS.DBClusterSnapshotNotFoundFault | any>;
    /**
     * Returns information about provisioned Aurora DB clusters. This API supports
pagination.

For more information on Amazon Aurora, see Aurora on Amazon RDS
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Aurora.html] in the 
Amazon RDS User Guide.
     *
     * @error DBClusterNotFoundFault   
     */
    describeDBClusters(params: RDS.DescribeDBClustersMessage, callback?: (err: RDS.DBClusterNotFoundFault | any, data: RDS.DBClusterMessage | any) => void): Request<RDS.DBClusterMessage | any, RDS.DBClusterNotFoundFault | any>;
    /**
     * Returns a list of the available DB engines.
     *
     */
    describeDBEngineVersions(params: RDS.DescribeDBEngineVersionsMessage, callback?: (err: any, data: RDS.DBEngineVersionMessage | any) => void): Request<RDS.DBEngineVersionMessage | any, any>;
    /**
     * Returns information about provisioned RDS instances. This API supports
pagination.
     *
     * @error DBInstanceNotFoundFault   
     */
    describeDBInstances(params: RDS.DescribeDBInstancesMessage, callback?: (err: RDS.DBInstanceNotFoundFault | any, data: RDS.DBInstanceMessage | any) => void): Request<RDS.DBInstanceMessage | any, RDS.DBInstanceNotFoundFault | any>;
    /**
     * Returns a list of DB log files for the DB instance.
     *
     * @error DBInstanceNotFoundFault   
     */
    describeDBLogFiles(params: RDS.DescribeDBLogFilesMessage, callback?: (err: RDS.DBInstanceNotFoundFault | any, data: RDS.DescribeDBLogFilesResponse | any) => void): Request<RDS.DescribeDBLogFilesResponse | any, RDS.DBInstanceNotFoundFault | any>;
    /**
     * Returns a list of DBParameterGroup descriptions. If a DBParameterGroupName is
specified, the list will contain only the description of the specified DB
parameter group.
     *
     * @error DBParameterGroupNotFoundFault   
     */
    describeDBParameterGroups(params: RDS.DescribeDBParameterGroupsMessage, callback?: (err: RDS.DBParameterGroupNotFoundFault | any, data: RDS.DBParameterGroupsMessage | any) => void): Request<RDS.DBParameterGroupsMessage | any, RDS.DBParameterGroupNotFoundFault | any>;
    /**
     * Returns the detailed parameter list for a particular DB parameter group.
     *
     * @error DBParameterGroupNotFoundFault   
     */
    describeDBParameters(params: RDS.DescribeDBParametersMessage, callback?: (err: RDS.DBParameterGroupNotFoundFault | any, data: RDS.DBParameterGroupDetails | any) => void): Request<RDS.DBParameterGroupDetails | any, RDS.DBParameterGroupNotFoundFault | any>;
    /**
     * Returns a list of DBSecurityGroup descriptions. If a DBSecurityGroupName is
specified, the list will contain only the descriptions of the specified DB
security group.
     *
     * @error DBSecurityGroupNotFoundFault   
     */
    describeDBSecurityGroups(params: RDS.DescribeDBSecurityGroupsMessage, callback?: (err: RDS.DBSecurityGroupNotFoundFault | any, data: RDS.DBSecurityGroupMessage | any) => void): Request<RDS.DBSecurityGroupMessage | any, RDS.DBSecurityGroupNotFoundFault | any>;
    /**
     * Returns a list of DB snapshot attribute names and values for a manual DB
snapshot.

When sharing snapshots with other AWS accounts, DescribeDBSnapshotAttributes 
returns the restore attribute and a list of IDs for the AWS accounts that are
authorized to copy or restore the manual DB snapshot. If all is included in the
list of values for the restore attribute, then the manual DB snapshot is public
and can be copied or restored by all AWS accounts.

To add or remove access for an AWS account to copy or restore a manual DB
snapshot, or to make the manual DB snapshot public or private, use the 
ModifyDBSnapshotAttribute API action.
     *
     * @error DBSnapshotNotFoundFault   
     */
    describeDBSnapshotAttributes(params: RDS.DescribeDBSnapshotAttributesMessage, callback?: (err: RDS.DBSnapshotNotFoundFault | any, data: RDS.DescribeDBSnapshotAttributesResult | any) => void): Request<RDS.DescribeDBSnapshotAttributesResult | any, RDS.DBSnapshotNotFoundFault | any>;
    /**
     * Returns information about DB snapshots. This API action supports pagination.
     *
     * @error DBSnapshotNotFoundFault   
     */
    describeDBSnapshots(params: RDS.DescribeDBSnapshotsMessage, callback?: (err: RDS.DBSnapshotNotFoundFault | any, data: RDS.DBSnapshotMessage | any) => void): Request<RDS.DBSnapshotMessage | any, RDS.DBSnapshotNotFoundFault | any>;
    /**
     * Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is
specified, the list will contain only the descriptions of the specified
DBSubnetGroup.

For an overview of CIDR ranges, go to the Wikipedia Tutorial
[http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing].
     *
     * @error DBSubnetGroupNotFoundFault   
     */
    describeDBSubnetGroups(params: RDS.DescribeDBSubnetGroupsMessage, callback?: (err: RDS.DBSubnetGroupNotFoundFault | any, data: RDS.DBSubnetGroupMessage | any) => void): Request<RDS.DBSubnetGroupMessage | any, RDS.DBSubnetGroupNotFoundFault | any>;
    /**
     * Returns the default engine and system parameter information for the cluster
database engine.

For more information on Amazon Aurora, see Aurora on Amazon RDS
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Aurora.html] in the 
Amazon RDS User Guide.
     *
     */
    describeEngineDefaultClusterParameters(params: RDS.DescribeEngineDefaultClusterParametersMessage, callback?: (err: any, data: RDS.DescribeEngineDefaultClusterParametersResult | any) => void): Request<RDS.DescribeEngineDefaultClusterParametersResult | any, any>;
    /**
     * Returns the default engine and system parameter information for the specified
database engine.
     *
     */
    describeEngineDefaultParameters(params: RDS.DescribeEngineDefaultParametersMessage, callback?: (err: any, data: RDS.DescribeEngineDefaultParametersResult | any) => void): Request<RDS.DescribeEngineDefaultParametersResult | any, any>;
    /**
     * Displays a list of categories for all event source types, or, if specified, for
a specified source type. You can see a list of the event categories and source
types in the Events
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html] topic
in the Amazon RDS User Guide.
     *
     */
    describeEventCategories(params: RDS.DescribeEventCategoriesMessage, callback?: (err: any, data: RDS.EventCategoriesMessage | any) => void): Request<RDS.EventCategoriesMessage | any, any>;
    /**
     * Lists all the subscription descriptions for a customer account. The description
for a subscription includes SubscriptionName, SNSTopicARN, CustomerID,
SourceType, SourceID, CreationTime, and Status.

If you specify a SubscriptionName, lists the description for that subscription.
     *
     * @error SubscriptionNotFoundFault   
     */
    describeEventSubscriptions(params: RDS.DescribeEventSubscriptionsMessage, callback?: (err: RDS.SubscriptionNotFoundFault | any, data: RDS.EventSubscriptionsMessage | any) => void): Request<RDS.EventSubscriptionsMessage | any, RDS.SubscriptionNotFoundFault | any>;
    /**
     * Returns events related to DB instances, DB security groups, DB snapshots, and DB
parameter groups for the past 14 days. Events specific to a particular DB
instance, DB security group, database snapshot, or DB parameter group can be
obtained by providing the name as a parameter. By default, the past hour of
events are returned.
     *
     */
    describeEvents(params: RDS.DescribeEventsMessage, callback?: (err: any, data: RDS.EventsMessage | any) => void): Request<RDS.EventsMessage | any, any>;
    /**
     * Describes all available options.
     *
     */
    describeOptionGroupOptions(params: RDS.DescribeOptionGroupOptionsMessage, callback?: (err: any, data: RDS.OptionGroupOptionsMessage | any) => void): Request<RDS.OptionGroupOptionsMessage | any, any>;
    /**
     * Describes the available option groups.
     *
     * @error OptionGroupNotFoundFault   
     */
    describeOptionGroups(params: RDS.DescribeOptionGroupsMessage, callback?: (err: RDS.OptionGroupNotFoundFault | any, data: RDS.OptionGroups | any) => void): Request<RDS.OptionGroups | any, RDS.OptionGroupNotFoundFault | any>;
    /**
     * Returns a list of orderable DB instance options for the specified engine.
     *
     */
    describeOrderableDBInstanceOptions(params: RDS.DescribeOrderableDBInstanceOptionsMessage, callback?: (err: any, data: RDS.OrderableDBInstanceOptionsMessage | any) => void): Request<RDS.OrderableDBInstanceOptionsMessage | any, any>;
    /**
     * Returns a list of resources (for example, DB instances) that have at least one
pending maintenance action.
     *
     * @error ResourceNotFoundFault   
     */
    describePendingMaintenanceActions(params: RDS.DescribePendingMaintenanceActionsMessage, callback?: (err: RDS.ResourceNotFoundFault | any, data: RDS.PendingMaintenanceActionsMessage | any) => void): Request<RDS.PendingMaintenanceActionsMessage | any, RDS.ResourceNotFoundFault | any>;
    /**
     * Returns information about reserved DB instances for this account, or about a
specified reserved DB instance.
     *
     * @error ReservedDBInstanceNotFoundFault   
     */
    describeReservedDBInstances(params: RDS.DescribeReservedDBInstancesMessage, callback?: (err: RDS.ReservedDBInstanceNotFoundFault | any, data: RDS.ReservedDBInstanceMessage | any) => void): Request<RDS.ReservedDBInstanceMessage | any, RDS.ReservedDBInstanceNotFoundFault | any>;
    /**
     * Lists available reserved DB instance offerings.
     *
     * @error ReservedDBInstancesOfferingNotFoundFault   
     */
    describeReservedDBInstancesOfferings(params: RDS.DescribeReservedDBInstancesOfferingsMessage, callback?: (err: RDS.ReservedDBInstancesOfferingNotFoundFault | any, data: RDS.ReservedDBInstancesOfferingMessage | any) => void): Request<RDS.ReservedDBInstancesOfferingMessage | any, RDS.ReservedDBInstancesOfferingNotFoundFault | any>;
    /**
     * Downloads all or a portion of the specified log file, up to 1 MB in size.
     *
     * @error DBInstanceNotFoundFault   
     * @error DBLogFileNotFoundFault   
     */
    downloadDBLogFilePortion(params: RDS.DownloadDBLogFilePortionMessage, callback?: (err: RDS.DBInstanceNotFoundFault | RDS.DBLogFileNotFoundFault | any, data: RDS.DownloadDBLogFilePortionDetails | any) => void): Request<RDS.DownloadDBLogFilePortionDetails | any, RDS.DBInstanceNotFoundFault | RDS.DBLogFileNotFoundFault | any>;
    /**
     * Forces a failover for a DB cluster.

A failover for a DB cluster promotes one of the read-only instances in the DB
cluster to the master DB instance (the cluster writer) and deletes the current
primary instance.

Amazon Aurora will automatically fail over to a read-only instance, if one
exists, when the primary instance fails. You can force a failover when you want
to simulate a failure of a DB instance for testing. Because each instance in a
DB cluster has its own endpoint address, you will need to clean up and
re-establish any existing connections that use those endpoint addresses when the
failover is complete.

For more information on Amazon Aurora, see Aurora on Amazon RDS
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Aurora.html] in the 
Amazon RDS User Guide.
     *
     * @error DBClusterNotFoundFault   
     * @error InvalidDBClusterStateFault   
     * @error InvalidDBInstanceStateFault   
     */
    failoverDBCluster(params: RDS.FailoverDBClusterMessage, callback?: (err: RDS.DBClusterNotFoundFault | RDS.InvalidDBClusterStateFault | RDS.InvalidDBInstanceStateFault | any, data: RDS.FailoverDBClusterResult | any) => void): Request<RDS.FailoverDBClusterResult | any, RDS.DBClusterNotFoundFault | RDS.InvalidDBClusterStateFault | RDS.InvalidDBInstanceStateFault | any>;
    /**
     * Lists all tags on an Amazon RDS resource.

For an overview on tagging an Amazon RDS resource, see Tagging Amazon RDS
Resources
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html].
     *
     * @error DBInstanceNotFoundFault   
     * @error DBSnapshotNotFoundFault   
     */
    listTagsForResource(params: RDS.ListTagsForResourceMessage, callback?: (err: RDS.DBInstanceNotFoundFault | RDS.DBSnapshotNotFoundFault | any, data: RDS.TagListMessage | any) => void): Request<RDS.TagListMessage | any, RDS.DBInstanceNotFoundFault | RDS.DBSnapshotNotFoundFault | any>;
    /**
     * Modify a setting for an Amazon Aurora DB cluster. You can change one or more
database configuration parameters by specifying these parameters and the new
values in the request. For more information on Amazon Aurora, see Aurora on
Amazon RDS
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Aurora.html] in the 
Amazon RDS User Guide.
     *
     * @error DBClusterNotFoundFault   
     * @error InvalidDBClusterStateFault   
     * @error StorageQuotaExceededFault   
     * @error DBSubnetGroupNotFoundFault   
     * @error InvalidVPCNetworkStateFault   
     * @error InvalidDBSubnetGroupStateFault   
     * @error InvalidSubnet   
     * @error DBClusterParameterGroupNotFoundFault   
     * @error InvalidDBSecurityGroupStateFault   
     * @error InvalidDBInstanceStateFault   
     * @error DBClusterAlreadyExistsFault   
     */
    modifyDBCluster(params: RDS.ModifyDBClusterMessage, callback?: (err: RDS.DBClusterNotFoundFault | RDS.InvalidDBClusterStateFault | RDS.StorageQuotaExceededFault | RDS.DBSubnetGroupNotFoundFault | RDS.InvalidVPCNetworkStateFault | RDS.InvalidDBSubnetGroupStateFault | RDS.InvalidSubnet | RDS.DBClusterParameterGroupNotFoundFault | RDS.InvalidDBSecurityGroupStateFault | RDS.InvalidDBInstanceStateFault | RDS.DBClusterAlreadyExistsFault | any, data: RDS.ModifyDBClusterResult | any) => void): Request<RDS.ModifyDBClusterResult | any, RDS.DBClusterNotFoundFault | RDS.InvalidDBClusterStateFault | RDS.StorageQuotaExceededFault | RDS.DBSubnetGroupNotFoundFault | RDS.InvalidVPCNetworkStateFault | RDS.InvalidDBSubnetGroupStateFault | RDS.InvalidSubnet | RDS.DBClusterParameterGroupNotFoundFault | RDS.InvalidDBSecurityGroupStateFault | RDS.InvalidDBInstanceStateFault | RDS.DBClusterAlreadyExistsFault | any>;
    /**
     * Modifies the parameters of a DB cluster parameter group. To modify more than
one parameter, submit a list of the following: ParameterName, ParameterValue,
and ApplyMethod. A maximum of 20 parameters can be modified in a single request. 

For more information on Amazon Aurora, see Aurora on Amazon RDS
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Aurora.html] in the 
Amazon RDS User Guide. 

Changes to dynamic parameters are applied immediately. Changes to static
parameters require a reboot without failover to the DB cluster associated with
the parameter group before the change can take effect.

After you create a DB cluster parameter group, you should wait at least 5
minutes before creating your first DB cluster that uses that DB cluster
parameter group as the default parameter group. This allows Amazon RDS to fully
complete the create action before the parameter group is used as the default for
a new DB cluster. This is especially important for parameters that are critical
when creating the default database for a DB cluster, such as the character set
for the default database defined by the character_set_database parameter. You
can use the Parameter Groups option of the Amazon RDS console
[https://console.aws.amazon.com/rds/] or the DescribeDBClusterParameters command
to verify that your DB cluster parameter group has been created or modified.
     *
     * @error DBParameterGroupNotFoundFault   
     * @error InvalidDBParameterGroupStateFault   
     */
    modifyDBClusterParameterGroup(params: RDS.ModifyDBClusterParameterGroupMessage, callback?: (err: RDS.DBParameterGroupNotFoundFault | RDS.InvalidDBParameterGroupStateFault | any, data: RDS.DBClusterParameterGroupNameMessage | any) => void): Request<RDS.DBClusterParameterGroupNameMessage | any, RDS.DBParameterGroupNotFoundFault | RDS.InvalidDBParameterGroupStateFault | any>;
    /**
     * Adds an attribute and values to, or removes an attribute and values from, a
manual DB cluster snapshot.

To share a manual DB cluster snapshot with other AWS accounts, specify restore 
as the AttributeName and use the ValuesToAdd parameter to add a list of IDs of
the AWS accounts that are authorized to restore the manual DB cluster snapshot.
Use the value all to make the manual DB cluster snapshot public, which means
that it can be copied or restored by all AWS accounts. Do not add the all value
for any manual DB cluster snapshots that contain private information that you
don&#x27;t want available to all AWS accounts.

To view which AWS accounts have access to copy or restore a manual DB cluster
snapshot, or whether a manual DB cluster snapshot public or private, use the 
DescribeDBClusterSnapshotAttributes API action.

If a manual DB cluster snapshot is encrypted, it cannot be shared.
     *
     * @error DBClusterSnapshotNotFoundFault   
     * @error InvalidDBClusterSnapshotStateFault   
     * @error SharedSnapshotQuotaExceededFault   
     */
    modifyDBClusterSnapshotAttribute(params: RDS.ModifyDBClusterSnapshotAttributeMessage, callback?: (err: RDS.DBClusterSnapshotNotFoundFault | RDS.InvalidDBClusterSnapshotStateFault | RDS.SharedSnapshotQuotaExceededFault | any, data: RDS.ModifyDBClusterSnapshotAttributeResult | any) => void): Request<RDS.ModifyDBClusterSnapshotAttributeResult | any, RDS.DBClusterSnapshotNotFoundFault | RDS.InvalidDBClusterSnapshotStateFault | RDS.SharedSnapshotQuotaExceededFault | any>;
    /**
     * Modifies settings for a DB instance. You can change one or more database
configuration parameters by specifying these parameters and the new values in
the request.
     *
     * @error InvalidDBInstanceStateFault   
     * @error InvalidDBSecurityGroupStateFault   
     * @error DBInstanceAlreadyExistsFault   
     * @error DBInstanceNotFoundFault   
     * @error DBSecurityGroupNotFoundFault   
     * @error DBParameterGroupNotFoundFault   
     * @error InsufficientDBInstanceCapacityFault   
     * @error StorageQuotaExceededFault   
     * @error InvalidVPCNetworkStateFault   
     * @error ProvisionedIopsNotAvailableInAZFault   
     * @error OptionGroupNotFoundFault   
     * @error DBUpgradeDependencyFailureFault   
     * @error StorageTypeNotSupportedFault   
     * @error AuthorizationNotFoundFault   
     * @error CertificateNotFoundFault   
     * @error DomainNotFoundFault   
     */
    modifyDBInstance(params: RDS.ModifyDBInstanceMessage, callback?: (err: RDS.InvalidDBInstanceStateFault | RDS.InvalidDBSecurityGroupStateFault | RDS.DBInstanceAlreadyExistsFault | RDS.DBInstanceNotFoundFault | RDS.DBSecurityGroupNotFoundFault | RDS.DBParameterGroupNotFoundFault | RDS.InsufficientDBInstanceCapacityFault | RDS.StorageQuotaExceededFault | RDS.InvalidVPCNetworkStateFault | RDS.ProvisionedIopsNotAvailableInAZFault | RDS.OptionGroupNotFoundFault | RDS.DBUpgradeDependencyFailureFault | RDS.StorageTypeNotSupportedFault | RDS.AuthorizationNotFoundFault | RDS.CertificateNotFoundFault | RDS.DomainNotFoundFault | any, data: RDS.ModifyDBInstanceResult | any) => void): Request<RDS.ModifyDBInstanceResult | any, RDS.InvalidDBInstanceStateFault | RDS.InvalidDBSecurityGroupStateFault | RDS.DBInstanceAlreadyExistsFault | RDS.DBInstanceNotFoundFault | RDS.DBSecurityGroupNotFoundFault | RDS.DBParameterGroupNotFoundFault | RDS.InsufficientDBInstanceCapacityFault | RDS.StorageQuotaExceededFault | RDS.InvalidVPCNetworkStateFault | RDS.ProvisionedIopsNotAvailableInAZFault | RDS.OptionGroupNotFoundFault | RDS.DBUpgradeDependencyFailureFault | RDS.StorageTypeNotSupportedFault | RDS.AuthorizationNotFoundFault | RDS.CertificateNotFoundFault | RDS.DomainNotFoundFault | any>;
    /**
     * Modifies the parameters of a DB parameter group. To modify more than one
parameter, submit a list of the following: ParameterName, ParameterValue, and 
ApplyMethod. A maximum of 20 parameters can be modified in a single request. 

Changes to dynamic parameters are applied immediately. Changes to static
parameters require a reboot without failover to the DB instance associated with
the parameter group before the change can take effect.

After you modify a DB parameter group, you should wait at least 5 minutes before
creating your first DB instance that uses that DB parameter group as the default
parameter group. This allows Amazon RDS to fully complete the modify action
before the parameter group is used as the default for a new DB instance. This is
especially important for parameters that are critical when creating the default
database for a DB instance, such as the character set for the default database
defined by the character_set_database parameter. You can use the Parameter
Groups option of the Amazon RDS console [https://console.aws.amazon.com/rds/] or
the DescribeDBParameters command to verify that your DB parameter group has been
created or modified.
     *
     * @error DBParameterGroupNotFoundFault   
     * @error InvalidDBParameterGroupStateFault   
     */
    modifyDBParameterGroup(params: RDS.ModifyDBParameterGroupMessage, callback?: (err: RDS.DBParameterGroupNotFoundFault | RDS.InvalidDBParameterGroupStateFault | any, data: RDS.DBParameterGroupNameMessage | any) => void): Request<RDS.DBParameterGroupNameMessage | any, RDS.DBParameterGroupNotFoundFault | RDS.InvalidDBParameterGroupStateFault | any>;
    /**
     * Adds an attribute and values to, or removes an attribute and values from, a
manual DB snapshot.

To share a manual DB snapshot with other AWS accounts, specify restore as the 
AttributeName and use the ValuesToAdd parameter to add a list of IDs of the AWS
accounts that are authorized to restore the manual DB snapshot. Uses the value 
all to make the manual DB snapshot public, which means it can be copied or
restored by all AWS accounts. Do not add the all value for any manual DB
snapshots that contain private information that you don&#x27;t want available to all
AWS accounts.

To view which AWS accounts have access to copy or restore a manual DB snapshot,
or whether a manual DB snapshot public or private, use the 
DescribeDBSnapshotAttributes API action.

If the manual DB snapshot is encrypted, it cannot be shared.
     *
     * @error DBSnapshotNotFoundFault   
     * @error InvalidDBSnapshotStateFault   
     * @error SharedSnapshotQuotaExceededFault   
     */
    modifyDBSnapshotAttribute(params: RDS.ModifyDBSnapshotAttributeMessage, callback?: (err: RDS.DBSnapshotNotFoundFault | RDS.InvalidDBSnapshotStateFault | RDS.SharedSnapshotQuotaExceededFault | any, data: RDS.ModifyDBSnapshotAttributeResult | any) => void): Request<RDS.ModifyDBSnapshotAttributeResult | any, RDS.DBSnapshotNotFoundFault | RDS.InvalidDBSnapshotStateFault | RDS.SharedSnapshotQuotaExceededFault | any>;
    /**
     * Modifies an existing DB subnet group. DB subnet groups must contain at least one
subnet in at least two AZs in the region.
     *
     * @error DBSubnetGroupNotFoundFault   
     * @error DBSubnetQuotaExceededFault   
     * @error SubnetAlreadyInUse   
     * @error DBSubnetGroupDoesNotCoverEnoughAZs   
     * @error InvalidSubnet   
     */
    modifyDBSubnetGroup(params: RDS.ModifyDBSubnetGroupMessage, callback?: (err: RDS.DBSubnetGroupNotFoundFault | RDS.DBSubnetQuotaExceededFault | RDS.SubnetAlreadyInUse | RDS.DBSubnetGroupDoesNotCoverEnoughAZs | RDS.InvalidSubnet | any, data: RDS.ModifyDBSubnetGroupResult | any) => void): Request<RDS.ModifyDBSubnetGroupResult | any, RDS.DBSubnetGroupNotFoundFault | RDS.DBSubnetQuotaExceededFault | RDS.SubnetAlreadyInUse | RDS.DBSubnetGroupDoesNotCoverEnoughAZs | RDS.InvalidSubnet | any>;
    /**
     * Modifies an existing RDS event notification subscription. Note that you cannot
modify the source identifiers using this call; to change source identifiers for
a subscription, use the AddSourceIdentifierToSubscription and 
RemoveSourceIdentifierFromSubscription calls.

You can see a list of the event categories for a given SourceType in the Events
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html] topic
in the Amazon RDS User Guide or by using the DescribeEventCategories action.
     *
     * @error EventSubscriptionQuotaExceededFault   
     * @error SubscriptionNotFoundFault   
     * @error SNSInvalidTopicFault   
     * @error SNSNoAuthorizationFault   
     * @error SNSTopicArnNotFoundFault   
     * @error SubscriptionCategoryNotFoundFault   
     */
    modifyEventSubscription(params: RDS.ModifyEventSubscriptionMessage, callback?: (err: RDS.EventSubscriptionQuotaExceededFault | RDS.SubscriptionNotFoundFault | RDS.SNSInvalidTopicFault | RDS.SNSNoAuthorizationFault | RDS.SNSTopicArnNotFoundFault | RDS.SubscriptionCategoryNotFoundFault | any, data: RDS.ModifyEventSubscriptionResult | any) => void): Request<RDS.ModifyEventSubscriptionResult | any, RDS.EventSubscriptionQuotaExceededFault | RDS.SubscriptionNotFoundFault | RDS.SNSInvalidTopicFault | RDS.SNSNoAuthorizationFault | RDS.SNSTopicArnNotFoundFault | RDS.SubscriptionCategoryNotFoundFault | any>;
    /**
     * Modifies an existing option group.
     *
     * @error InvalidOptionGroupStateFault   
     * @error OptionGroupNotFoundFault   
     */
    modifyOptionGroup(params: RDS.ModifyOptionGroupMessage, callback?: (err: RDS.InvalidOptionGroupStateFault | RDS.OptionGroupNotFoundFault | any, data: RDS.ModifyOptionGroupResult | any) => void): Request<RDS.ModifyOptionGroupResult | any, RDS.InvalidOptionGroupStateFault | RDS.OptionGroupNotFoundFault | any>;
    /**
     * Promotes a Read Replica DB instance to a standalone DB instance.

We recommend that you enable automated backups on your Read Replica before
promoting the Read Replica. This ensures that no backup is taken during the
promotion process. Once the instance is promoted to a primary instance, backups
are taken based on your backup settings.
     *
     * @error InvalidDBInstanceStateFault   
     * @error DBInstanceNotFoundFault   
     */
    promoteReadReplica(params: RDS.PromoteReadReplicaMessage, callback?: (err: RDS.InvalidDBInstanceStateFault | RDS.DBInstanceNotFoundFault | any, data: RDS.PromoteReadReplicaResult | any) => void): Request<RDS.PromoteReadReplicaResult | any, RDS.InvalidDBInstanceStateFault | RDS.DBInstanceNotFoundFault | any>;
    /**
     * Promotes a Read Replica DB cluster to a standalone DB cluster.
     *
     * @error DBClusterNotFoundFault   
     * @error InvalidDBClusterStateFault   
     */
    promoteReadReplicaDBCluster(params: RDS.PromoteReadReplicaDBClusterMessage, callback?: (err: RDS.DBClusterNotFoundFault | RDS.InvalidDBClusterStateFault | any, data: RDS.PromoteReadReplicaDBClusterResult | any) => void): Request<RDS.PromoteReadReplicaDBClusterResult | any, RDS.DBClusterNotFoundFault | RDS.InvalidDBClusterStateFault | any>;
    /**
     * Purchases a reserved DB instance offering.
     *
     * @error ReservedDBInstancesOfferingNotFoundFault   
     * @error ReservedDBInstanceAlreadyExistsFault   
     * @error ReservedDBInstanceQuotaExceededFault   
     */
    purchaseReservedDBInstancesOffering(params: RDS.PurchaseReservedDBInstancesOfferingMessage, callback?: (err: RDS.ReservedDBInstancesOfferingNotFoundFault | RDS.ReservedDBInstanceAlreadyExistsFault | RDS.ReservedDBInstanceQuotaExceededFault | any, data: RDS.PurchaseReservedDBInstancesOfferingResult | any) => void): Request<RDS.PurchaseReservedDBInstancesOfferingResult | any, RDS.ReservedDBInstancesOfferingNotFoundFault | RDS.ReservedDBInstanceAlreadyExistsFault | RDS.ReservedDBInstanceQuotaExceededFault | any>;
    /**
     * Rebooting a DB instance restarts the database engine service. A reboot also
applies to the DB instance any modifications to the associated DB parameter
group that were pending. Rebooting a DB instance results in a momentary outage
of the instance, during which the DB instance status is set to rebooting. If the
RDS instance is configured for MultiAZ, it is possible that the reboot will be
conducted through a failover. An Amazon RDS event is created when the reboot is
completed.

If your DB instance is deployed in multiple Availability Zones, you can force a
failover from one AZ to the other during the reboot. You might force a failover
to test the availability of your DB instance deployment or to restore operations
to the original AZ after a failover occurs.

The time required to reboot is a function of the specific database engine&#x27;s
crash recovery process. To improve the reboot time, we recommend that you reduce
database activities as much as possible during the reboot process to reduce
rollback activity for in-transit transactions.
     *
     * @error InvalidDBInstanceStateFault   
     * @error DBInstanceNotFoundFault   
     */
    rebootDBInstance(params: RDS.RebootDBInstanceMessage, callback?: (err: RDS.InvalidDBInstanceStateFault | RDS.DBInstanceNotFoundFault | any, data: RDS.RebootDBInstanceResult | any) => void): Request<RDS.RebootDBInstanceResult | any, RDS.InvalidDBInstanceStateFault | RDS.DBInstanceNotFoundFault | any>;
    /**
     * Removes a source identifier from an existing RDS event notification
subscription.
     *
     * @error SubscriptionNotFoundFault   
     * @error SourceNotFoundFault   
     */
    removeSourceIdentifierFromSubscription(params: RDS.RemoveSourceIdentifierFromSubscriptionMessage, callback?: (err: RDS.SubscriptionNotFoundFault | RDS.SourceNotFoundFault | any, data: RDS.RemoveSourceIdentifierFromSubscriptionResult | any) => void): Request<RDS.RemoveSourceIdentifierFromSubscriptionResult | any, RDS.SubscriptionNotFoundFault | RDS.SourceNotFoundFault | any>;
    /**
     * Removes metadata tags from an Amazon RDS resource.

For an overview on tagging an Amazon RDS resource, see Tagging Amazon RDS
Resources
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html].
     *
     * @error DBInstanceNotFoundFault   
     * @error DBSnapshotNotFoundFault   
     */
    removeTagsFromResource(params: RDS.RemoveTagsFromResourceMessage, callback?: (err: RDS.DBInstanceNotFoundFault | RDS.DBSnapshotNotFoundFault | any, data: any) => void): Request<any, RDS.DBInstanceNotFoundFault | RDS.DBSnapshotNotFoundFault | any>;
    /**
     * Modifies the parameters of a DB cluster parameter group to the default value.
To reset specific parameters submit a list of the following: ParameterName and 
ApplyMethod. To reset the entire DB cluster parameter group, specify the 
DBClusterParameterGroupName and ResetAllParameters parameters. 

 When resetting the entire group, dynamic parameters are updated immediately and
static parameters are set to pending-reboot to take effect on the next DB
instance restart or RebootDBInstance request. You must call RebootDBInstance for
every DB instance in your DB cluster that you want the updated static parameter
to apply to.

For more information on Amazon Aurora, see Aurora on Amazon RDS
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Aurora.html] in the 
Amazon RDS User Guide.
     *
     * @error InvalidDBParameterGroupStateFault   
     * @error DBParameterGroupNotFoundFault   
     */
    resetDBClusterParameterGroup(params: RDS.ResetDBClusterParameterGroupMessage, callback?: (err: RDS.InvalidDBParameterGroupStateFault | RDS.DBParameterGroupNotFoundFault | any, data: RDS.DBClusterParameterGroupNameMessage | any) => void): Request<RDS.DBClusterParameterGroupNameMessage | any, RDS.InvalidDBParameterGroupStateFault | RDS.DBParameterGroupNotFoundFault | any>;
    /**
     * Modifies the parameters of a DB parameter group to the engine/system default
value. To reset specific parameters submit a list of the following: 
ParameterName and ApplyMethod. To reset the entire DB parameter group, specify
the DBParameterGroup name and ResetAllParameters parameters. When resetting the
entire group, dynamic parameters are updated immediately and static parameters
are set to pending-reboot to take effect on the next DB instance restart or 
RebootDBInstance request.
     *
     * @error InvalidDBParameterGroupStateFault   
     * @error DBParameterGroupNotFoundFault   
     */
    resetDBParameterGroup(params: RDS.ResetDBParameterGroupMessage, callback?: (err: RDS.InvalidDBParameterGroupStateFault | RDS.DBParameterGroupNotFoundFault | any, data: RDS.DBParameterGroupNameMessage | any) => void): Request<RDS.DBParameterGroupNameMessage | any, RDS.InvalidDBParameterGroupStateFault | RDS.DBParameterGroupNotFoundFault | any>;
    /**
     * Creates an Amazon Aurora DB cluster from data stored in an Amazon S3 bucket.
Amazon RDS must be authorized to access the Amazon S3 bucket and the data must
be created using the Percona XtraBackup utility as described in Migrating Data
from an External MySQL Database to an Amazon Aurora DB Cluster
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Migrate.html].
     *
     * @error DBClusterAlreadyExistsFault   
     * @error DBClusterQuotaExceededFault   
     * @error StorageQuotaExceededFault   
     * @error DBSubnetGroupNotFoundFault   
     * @error InvalidVPCNetworkStateFault   
     * @error InvalidDBClusterStateFault   
     * @error InvalidDBSubnetGroupStateFault   
     * @error InvalidSubnet   
     * @error InvalidS3BucketFault   
     * @error DBClusterParameterGroupNotFoundFault   
     * @error KMSKeyNotAccessibleFault   
     * @error DBClusterNotFoundFault   
     * @error InsufficientStorageClusterCapacityFault   
     */
    restoreDBClusterFromS3(params: RDS.RestoreDBClusterFromS3Message, callback?: (err: RDS.DBClusterAlreadyExistsFault | RDS.DBClusterQuotaExceededFault | RDS.StorageQuotaExceededFault | RDS.DBSubnetGroupNotFoundFault | RDS.InvalidVPCNetworkStateFault | RDS.InvalidDBClusterStateFault | RDS.InvalidDBSubnetGroupStateFault | RDS.InvalidSubnet | RDS.InvalidS3BucketFault | RDS.DBClusterParameterGroupNotFoundFault | RDS.KMSKeyNotAccessibleFault | RDS.DBClusterNotFoundFault | RDS.InsufficientStorageClusterCapacityFault | any, data: RDS.RestoreDBClusterFromS3Result | any) => void): Request<RDS.RestoreDBClusterFromS3Result | any, RDS.DBClusterAlreadyExistsFault | RDS.DBClusterQuotaExceededFault | RDS.StorageQuotaExceededFault | RDS.DBSubnetGroupNotFoundFault | RDS.InvalidVPCNetworkStateFault | RDS.InvalidDBClusterStateFault | RDS.InvalidDBSubnetGroupStateFault | RDS.InvalidSubnet | RDS.InvalidS3BucketFault | RDS.DBClusterParameterGroupNotFoundFault | RDS.KMSKeyNotAccessibleFault | RDS.DBClusterNotFoundFault | RDS.InsufficientStorageClusterCapacityFault | any>;
    /**
     * Creates a new DB cluster from a DB cluster snapshot. The target DB cluster is
created from the source DB cluster restore point with the same configuration as
the original source DB cluster, except that the new DB cluster is created with
the default security group.

For more information on Amazon Aurora, see Aurora on Amazon RDS
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Aurora.html] in the 
Amazon RDS User Guide.
     *
     * @error DBClusterAlreadyExistsFault   
     * @error DBClusterQuotaExceededFault   
     * @error StorageQuotaExceededFault   
     * @error DBSubnetGroupNotFoundFault   
     * @error DBSnapshotNotFoundFault   
     * @error DBClusterSnapshotNotFoundFault   
     * @error InsufficientDBClusterCapacityFault   
     * @error InsufficientStorageClusterCapacityFault   
     * @error InvalidDBSnapshotStateFault   
     * @error InvalidDBClusterSnapshotStateFault   
     * @error StorageQuotaExceededFault   
     * @error InvalidVPCNetworkStateFault   
     * @error InvalidRestoreFault   
     * @error DBSubnetGroupNotFoundFault   
     * @error InvalidSubnet   
     * @error OptionGroupNotFoundFault   
     * @error KMSKeyNotAccessibleFault   
     */
    restoreDBClusterFromSnapshot(params: RDS.RestoreDBClusterFromSnapshotMessage, callback?: (err: RDS.DBClusterAlreadyExistsFault | RDS.DBClusterQuotaExceededFault | RDS.StorageQuotaExceededFault | RDS.DBSubnetGroupNotFoundFault | RDS.DBSnapshotNotFoundFault | RDS.DBClusterSnapshotNotFoundFault | RDS.InsufficientDBClusterCapacityFault | RDS.InsufficientStorageClusterCapacityFault | RDS.InvalidDBSnapshotStateFault | RDS.InvalidDBClusterSnapshotStateFault | RDS.StorageQuotaExceededFault | RDS.InvalidVPCNetworkStateFault | RDS.InvalidRestoreFault | RDS.DBSubnetGroupNotFoundFault | RDS.InvalidSubnet | RDS.OptionGroupNotFoundFault | RDS.KMSKeyNotAccessibleFault | any, data: RDS.RestoreDBClusterFromSnapshotResult | any) => void): Request<RDS.RestoreDBClusterFromSnapshotResult | any, RDS.DBClusterAlreadyExistsFault | RDS.DBClusterQuotaExceededFault | RDS.StorageQuotaExceededFault | RDS.DBSubnetGroupNotFoundFault | RDS.DBSnapshotNotFoundFault | RDS.DBClusterSnapshotNotFoundFault | RDS.InsufficientDBClusterCapacityFault | RDS.InsufficientStorageClusterCapacityFault | RDS.InvalidDBSnapshotStateFault | RDS.InvalidDBClusterSnapshotStateFault | RDS.StorageQuotaExceededFault | RDS.InvalidVPCNetworkStateFault | RDS.InvalidRestoreFault | RDS.DBSubnetGroupNotFoundFault | RDS.InvalidSubnet | RDS.OptionGroupNotFoundFault | RDS.KMSKeyNotAccessibleFault | any>;
    /**
     * Restores a DB cluster to an arbitrary point in time. Users can restore to any
point in time before LatestRestorableTime for up to BackupRetentionPeriod days.
The target DB cluster is created from the source DB cluster with the same
configuration as the original DB cluster, except that the new DB cluster is
created with the default DB security group. 

For more information on Amazon Aurora, see Aurora on Amazon RDS
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Aurora.html] in the 
Amazon RDS User Guide.
     *
     * @error DBClusterAlreadyExistsFault   
     * @error DBClusterQuotaExceededFault   
     * @error StorageQuotaExceededFault   
     * @error DBSubnetGroupNotFoundFault   
     * @error DBClusterNotFoundFault   
     * @error DBClusterSnapshotNotFoundFault   
     * @error InsufficientDBClusterCapacityFault   
     * @error InsufficientStorageClusterCapacityFault   
     * @error InvalidDBSnapshotStateFault   
     * @error InvalidDBClusterSnapshotStateFault   
     * @error StorageQuotaExceededFault   
     * @error InvalidVPCNetworkStateFault   
     * @error InvalidRestoreFault   
     * @error DBSubnetGroupNotFoundFault   
     * @error InvalidSubnet   
     * @error OptionGroupNotFoundFault   
     * @error KMSKeyNotAccessibleFault   
     */
    restoreDBClusterToPointInTime(params: RDS.RestoreDBClusterToPointInTimeMessage, callback?: (err: RDS.DBClusterAlreadyExistsFault | RDS.DBClusterQuotaExceededFault | RDS.StorageQuotaExceededFault | RDS.DBSubnetGroupNotFoundFault | RDS.DBClusterNotFoundFault | RDS.DBClusterSnapshotNotFoundFault | RDS.InsufficientDBClusterCapacityFault | RDS.InsufficientStorageClusterCapacityFault | RDS.InvalidDBSnapshotStateFault | RDS.InvalidDBClusterSnapshotStateFault | RDS.StorageQuotaExceededFault | RDS.InvalidVPCNetworkStateFault | RDS.InvalidRestoreFault | RDS.DBSubnetGroupNotFoundFault | RDS.InvalidSubnet | RDS.OptionGroupNotFoundFault | RDS.KMSKeyNotAccessibleFault | any, data: RDS.RestoreDBClusterToPointInTimeResult | any) => void): Request<RDS.RestoreDBClusterToPointInTimeResult | any, RDS.DBClusterAlreadyExistsFault | RDS.DBClusterQuotaExceededFault | RDS.StorageQuotaExceededFault | RDS.DBSubnetGroupNotFoundFault | RDS.DBClusterNotFoundFault | RDS.DBClusterSnapshotNotFoundFault | RDS.InsufficientDBClusterCapacityFault | RDS.InsufficientStorageClusterCapacityFault | RDS.InvalidDBSnapshotStateFault | RDS.InvalidDBClusterSnapshotStateFault | RDS.StorageQuotaExceededFault | RDS.InvalidVPCNetworkStateFault | RDS.InvalidRestoreFault | RDS.DBSubnetGroupNotFoundFault | RDS.InvalidSubnet | RDS.OptionGroupNotFoundFault | RDS.KMSKeyNotAccessibleFault | any>;
    /**
     * Creates a new DB instance from a DB snapshot. The target database is created
from the source database restore point with the most of original configuration
with the default security group and the default DB parameter group. By default,
the new DB instance is created as a single-AZ deployment except when the
instance is a SQL Server instance that has an option group that is associated
with mirroring; in this case, the instance becomes a mirrored AZ deployment and
not a single-AZ deployment.

If your intent is to replace your original DB instance with the new, restored DB
instance, then rename your original DB instance before you call the
RestoreDBInstanceFromDBSnapshot action. RDS does not allow two DB instances with
the same name. Once you have renamed your original DB instance with a different
identifier, then you can pass the original name of the DB instance as the
DBInstanceIdentifier in the call to the RestoreDBInstanceFromDBSnapshot action.
The result is that you will replace the original DB instance with the DB
instance created from the snapshot.

If you are restoring from a shared manual DB snapshot, the DBSnapshotIdentifier 
must be the ARN of the shared DB snapshot.
     *
     * @error DBInstanceAlreadyExistsFault   
     * @error DBSnapshotNotFoundFault   
     * @error InstanceQuotaExceededFault   
     * @error InsufficientDBInstanceCapacityFault   
     * @error InvalidDBSnapshotStateFault   
     * @error StorageQuotaExceededFault   
     * @error InvalidVPCNetworkStateFault   
     * @error InvalidRestoreFault   
     * @error DBSubnetGroupNotFoundFault   
     * @error DBSubnetGroupDoesNotCoverEnoughAZs   
     * @error InvalidSubnet   
     * @error ProvisionedIopsNotAvailableInAZFault   
     * @error OptionGroupNotFoundFault   
     * @error StorageTypeNotSupportedFault   
     * @error AuthorizationNotFoundFault   
     * @error KMSKeyNotAccessibleFault   
     * @error DBSecurityGroupNotFoundFault   
     * @error DomainNotFoundFault   
     */
    restoreDBInstanceFromDBSnapshot(params: RDS.RestoreDBInstanceFromDBSnapshotMessage, callback?: (err: RDS.DBInstanceAlreadyExistsFault | RDS.DBSnapshotNotFoundFault | RDS.InstanceQuotaExceededFault | RDS.InsufficientDBInstanceCapacityFault | RDS.InvalidDBSnapshotStateFault | RDS.StorageQuotaExceededFault | RDS.InvalidVPCNetworkStateFault | RDS.InvalidRestoreFault | RDS.DBSubnetGroupNotFoundFault | RDS.DBSubnetGroupDoesNotCoverEnoughAZs | RDS.InvalidSubnet | RDS.ProvisionedIopsNotAvailableInAZFault | RDS.OptionGroupNotFoundFault | RDS.StorageTypeNotSupportedFault | RDS.AuthorizationNotFoundFault | RDS.KMSKeyNotAccessibleFault | RDS.DBSecurityGroupNotFoundFault | RDS.DomainNotFoundFault | any, data: RDS.RestoreDBInstanceFromDBSnapshotResult | any) => void): Request<RDS.RestoreDBInstanceFromDBSnapshotResult | any, RDS.DBInstanceAlreadyExistsFault | RDS.DBSnapshotNotFoundFault | RDS.InstanceQuotaExceededFault | RDS.InsufficientDBInstanceCapacityFault | RDS.InvalidDBSnapshotStateFault | RDS.StorageQuotaExceededFault | RDS.InvalidVPCNetworkStateFault | RDS.InvalidRestoreFault | RDS.DBSubnetGroupNotFoundFault | RDS.DBSubnetGroupDoesNotCoverEnoughAZs | RDS.InvalidSubnet | RDS.ProvisionedIopsNotAvailableInAZFault | RDS.OptionGroupNotFoundFault | RDS.StorageTypeNotSupportedFault | RDS.AuthorizationNotFoundFault | RDS.KMSKeyNotAccessibleFault | RDS.DBSecurityGroupNotFoundFault | RDS.DomainNotFoundFault | any>;
    /**
     * Restores a DB instance to an arbitrary point in time. You can restore to any
point in time before the time identified by the LatestRestorableTime property.
You can restore to a point up to the number of days specified by the
BackupRetentionPeriod property.

The target database is created with most of the original configuration, but in a
system-selected availability zone, with the default security group, the default
subnet group, and the default DB parameter group. By default, the new DB
instance is created as a single-AZ deployment except when the instance is a SQL
Server instance that has an option group that is associated with mirroring; in
this case, the instance becomes a mirrored deployment and not a single-AZ
deployment.
     *
     * @error DBInstanceAlreadyExistsFault   
     * @error DBInstanceNotFoundFault   
     * @error InstanceQuotaExceededFault   
     * @error InsufficientDBInstanceCapacityFault   
     * @error InvalidDBInstanceStateFault   
     * @error PointInTimeRestoreNotEnabledFault   
     * @error StorageQuotaExceededFault   
     * @error InvalidVPCNetworkStateFault   
     * @error InvalidRestoreFault   
     * @error DBSubnetGroupNotFoundFault   
     * @error DBSubnetGroupDoesNotCoverEnoughAZs   
     * @error InvalidSubnet   
     * @error ProvisionedIopsNotAvailableInAZFault   
     * @error OptionGroupNotFoundFault   
     * @error StorageTypeNotSupportedFault   
     * @error AuthorizationNotFoundFault   
     * @error KMSKeyNotAccessibleFault   
     * @error DBSecurityGroupNotFoundFault   
     * @error DomainNotFoundFault   
     */
    restoreDBInstanceToPointInTime(params: RDS.RestoreDBInstanceToPointInTimeMessage, callback?: (err: RDS.DBInstanceAlreadyExistsFault | RDS.DBInstanceNotFoundFault | RDS.InstanceQuotaExceededFault | RDS.InsufficientDBInstanceCapacityFault | RDS.InvalidDBInstanceStateFault | RDS.PointInTimeRestoreNotEnabledFault | RDS.StorageQuotaExceededFault | RDS.InvalidVPCNetworkStateFault | RDS.InvalidRestoreFault | RDS.DBSubnetGroupNotFoundFault | RDS.DBSubnetGroupDoesNotCoverEnoughAZs | RDS.InvalidSubnet | RDS.ProvisionedIopsNotAvailableInAZFault | RDS.OptionGroupNotFoundFault | RDS.StorageTypeNotSupportedFault | RDS.AuthorizationNotFoundFault | RDS.KMSKeyNotAccessibleFault | RDS.DBSecurityGroupNotFoundFault | RDS.DomainNotFoundFault | any, data: RDS.RestoreDBInstanceToPointInTimeResult | any) => void): Request<RDS.RestoreDBInstanceToPointInTimeResult | any, RDS.DBInstanceAlreadyExistsFault | RDS.DBInstanceNotFoundFault | RDS.InstanceQuotaExceededFault | RDS.InsufficientDBInstanceCapacityFault | RDS.InvalidDBInstanceStateFault | RDS.PointInTimeRestoreNotEnabledFault | RDS.StorageQuotaExceededFault | RDS.InvalidVPCNetworkStateFault | RDS.InvalidRestoreFault | RDS.DBSubnetGroupNotFoundFault | RDS.DBSubnetGroupDoesNotCoverEnoughAZs | RDS.InvalidSubnet | RDS.ProvisionedIopsNotAvailableInAZFault | RDS.OptionGroupNotFoundFault | RDS.StorageTypeNotSupportedFault | RDS.AuthorizationNotFoundFault | RDS.KMSKeyNotAccessibleFault | RDS.DBSecurityGroupNotFoundFault | RDS.DomainNotFoundFault | any>;
    /**
     * Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or
EC2 or VPC Security Groups. Required parameters for this API are one of CIDRIP,
EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either
EC2SecurityGroupName or EC2SecurityGroupId).
     *
     * @error DBSecurityGroupNotFoundFault   
     * @error AuthorizationNotFoundFault   
     * @error InvalidDBSecurityGroupStateFault   
     */
    revokeDBSecurityGroupIngress(params: RDS.RevokeDBSecurityGroupIngressMessage, callback?: (err: RDS.DBSecurityGroupNotFoundFault | RDS.AuthorizationNotFoundFault | RDS.InvalidDBSecurityGroupStateFault | any, data: RDS.RevokeDBSecurityGroupIngressResult | any) => void): Request<RDS.RevokeDBSecurityGroupIngressResult | any, RDS.DBSecurityGroupNotFoundFault | RDS.AuthorizationNotFoundFault | RDS.InvalidDBSecurityGroupStateFault | any>;

  }

  export module RDS {

    export type AccountQuotaList = AccountQuota[];

    export type ApplyMethod = string;

    export type AttributeValueList = String[];

    export type AvailabilityZoneList = AvailabilityZone[];

    export type AvailabilityZones = String[];

    export type Boolean = boolean;

    export type BooleanOptional = boolean;

    export type CertificateList = Certificate[];

    export type DBClusterList = DBCluster[];

    export type DBClusterMemberList = DBClusterMember[];

    export type DBClusterOptionGroupMemberships = DBClusterOptionGroupStatus[];

    export type DBClusterParameterGroupList = DBClusterParameterGroup[];

    export type DBClusterSnapshotAttributeList = DBClusterSnapshotAttribute[];

    export type DBClusterSnapshotList = DBClusterSnapshot[];

    export type DBEngineVersionList = DBEngineVersion[];

    export type DBInstanceList = DBInstance[];

    export type DBInstanceStatusInfoList = DBInstanceStatusInfo[];

    export type DBParameterGroupList = DBParameterGroup[];

    export type DBParameterGroupStatusList = DBParameterGroupStatus[];

    export type DBSecurityGroupMembershipList = DBSecurityGroupMembership[];

    export type DBSecurityGroupNameList = String[];

    export type DBSecurityGroups = DBSecurityGroup[];

    export type DBSnapshotAttributeList = DBSnapshotAttribute[];

    export type DBSnapshotList = DBSnapshot[];

    export type DBSubnetGroups = DBSubnetGroup[];

    export type DescribeDBLogFilesList = DescribeDBLogFilesDetails[];

    export type DomainMembershipList = DomainMembership[];

    export type Double = number;

    export type EC2SecurityGroupList = EC2SecurityGroup[];

    export type EventCategoriesList = String[];

    export type EventCategoriesMapList = EventCategoriesMap[];

    export type EventList = Event[];

    export type EventSubscriptionsList = EventSubscription[];

    export type FilterList = Filter[];

    export type FilterValueList = String[];

    export type IPRangeList = IPRange[];

    export type Integer = number;

    export type IntegerOptional = number;

    export type KeyList = String[];

    export type Long = number;

    export type OptionConfigurationList = OptionConfiguration[];

    export type OptionGroupMembershipList = OptionGroupMembership[];

    export type OptionGroupOptionSettingsList = OptionGroupOptionSetting[];

    export type OptionGroupOptionVersionsList = OptionVersion[];

    export type OptionGroupOptionsList = OptionGroupOption[];

    export type OptionGroupsList = OptionGroup[];

    export type OptionNamesList = String[];

    export type OptionSettingConfigurationList = OptionSetting[];

    export type OptionSettingsList = OptionSetting[];

    export type OptionsConflictsWith = String[];

    export type OptionsDependedOn = String[];

    export type OptionsList = Option[];

    export type OrderableDBInstanceOptionsList = OrderableDBInstanceOption[];

    export type ParametersList = Parameter[];

    export type PendingMaintenanceActionDetails = PendingMaintenanceAction[];

    export type PendingMaintenanceActions = ResourcePendingMaintenanceActions[];

    export type ReadReplicaDBInstanceIdentifierList = String[];

    export type ReadReplicaIdentifierList = String[];

    export type RecurringChargeList = RecurringCharge[];

    export type ReservedDBInstanceList = ReservedDBInstance[];

    export type ReservedDBInstancesOfferingList = ReservedDBInstancesOffering[];

    export type SourceIdsList = String[];

    export type SourceType = string;

    export type String = string;

    export type SubnetIdentifierList = String[];

    export type SubnetList = Subnet[];

    export type SupportedCharacterSetsList = CharacterSet[];

    export type TStamp = number;

    export type TagList = Tag[];

    export type ValidUpgradeTargetList = UpgradeTarget[];

    export type VpcSecurityGroupIdList = String[];

    export type VpcSecurityGroupMembershipList = VpcSecurityGroupMembership[];

    export interface AccountAttributesMessage {
      /** A list of AccountQuota objects. Within this list, each quota has a name, a count
of usage toward the quota maximum, and a maximum value for the quota. **/
      AccountQuotas?: AccountQuotaList;
    }
    export interface AccountQuota {
      /** The name of the Amazon RDS quota for this AWS account. **/
      AccountQuotaName?: String;
      /** The amount currently used toward the quota maximum. **/
      Used?: Long;
      /** The maximum allowed value for the quota. **/
      Max?: Long;
    }
    export interface AddSourceIdentifierToSubscriptionMessage {
      /** The name of the RDS event notification subscription you want to add a source
identifier to. **/
      SubscriptionName: String;
      /** The identifier of the event source to be added. An identifier must begin with a
letter and must contain only ASCII letters, digits, and hyphens; it cannot end
with a hyphen or contain two consecutive hyphens.

Constraints:

&amp;#42;  If the source type is a DB instance, then a DBInstanceIdentifier must be
 supplied.
 
 
&amp;#42;  If the source type is a DB security group, a DBSecurityGroupName must be
 supplied.
 
 
&amp;#42;  If the source type is a DB parameter group, a DBParameterGroupName must be
 supplied.
 
 
&amp;#42;  If the source type is a DB snapshot, a DBSnapshotIdentifier must be supplied. **/
      SourceIdentifier: String;
    }
    export interface AddSourceIdentifierToSubscriptionResult {
      EventSubscription?: EventSubscription;
    }
    export interface AddTagsToResourceMessage {
      /** The Amazon RDS resource the tags will be added to. This value is an Amazon
Resource Name (ARN). For information about creating an ARN, see Constructing an
RDS Amazon Resource Name (ARN)
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing]
. **/
      ResourceName: String;
      /** The tags to be assigned to the Amazon RDS resource. **/
      Tags: TagList;
    }
    export interface ApplyPendingMaintenanceActionMessage {
      /** The RDS Amazon Resource Name (ARN) of the resource that the pending maintenance
action applies to. For information about creating an ARN, see Constructing an
RDS Amazon Resource Name (ARN)
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing]
. **/
      ResourceIdentifier: String;
      /** The pending maintenance action to apply to this resource.

Valid values: system-update, db-upgrade **/
      ApplyAction: String;
      /** A value that specifies the type of opt-in request, or undoes an opt-in request.
An opt-in request of type immediate cannot be undone.

Valid values:

&amp;#42;   immediate - Apply the maintenance action immediately.
 
 
&amp;#42;   next-maintenance - Apply the maintenance action during the next maintenance
 window for the resource.
 
 
&amp;#42;   undo-opt-in - Cancel any existing next-maintenance opt-in requests. **/
      OptInType: String;
    }
    export interface ApplyPendingMaintenanceActionResult {
      ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
    }
    export interface AuthorizationAlreadyExistsFault {
    }
    export interface AuthorizationNotFoundFault {
    }
    export interface AuthorizationQuotaExceededFault {
    }
    export interface AuthorizeDBSecurityGroupIngressMessage {
      /** The name of the DB security group to add authorization to. **/
      DBSecurityGroupName: String;
      /** The IP range to authorize. **/
      CIDRIP?: String;
      /** Name of the EC2 security group to authorize. For VPC DB security groups, 
EC2SecurityGroupId must be provided. Otherwise, EC2SecurityGroupOwnerId and
either EC2SecurityGroupName or EC2SecurityGroupId must be provided. **/
      EC2SecurityGroupName?: String;
      /** Id of the EC2 security group to authorize. For VPC DB security groups, 
EC2SecurityGroupId must be provided. Otherwise, EC2SecurityGroupOwnerId and
either EC2SecurityGroupName or EC2SecurityGroupId must be provided. **/
      EC2SecurityGroupId?: String;
      /** AWS account number of the owner of the EC2 security group specified in the 
EC2SecurityGroupName parameter. The AWS Access Key ID is not an acceptable
value. For VPC DB security groups, EC2SecurityGroupId must be provided.
Otherwise, EC2SecurityGroupOwnerId and either EC2SecurityGroupName or 
EC2SecurityGroupId must be provided. **/
      EC2SecurityGroupOwnerId?: String;
    }
    export interface AuthorizeDBSecurityGroupIngressResult {
      DBSecurityGroup?: DBSecurityGroup;
    }
    export interface AvailabilityZone {
      /** The name of the availability zone. **/
      Name?: String;
    }
    export interface Certificate {
      /** The unique key that identifies a certificate. **/
      CertificateIdentifier?: String;
      /** The type of the certificate. **/
      CertificateType?: String;
      /** The thumbprint of the certificate. **/
      Thumbprint?: String;
      /** The starting date from which the certificate is valid. **/
      ValidFrom?: TStamp;
      /** The final date that the certificate continues to be valid. **/
      ValidTill?: TStamp;
      /** The Amazon Resource Name (ARN) for the certificate. **/
      CertificateArn?: String;
    }
    export interface CertificateMessage {
      /** The list of Certificate objects for the AWS account. **/
      Certificates?: CertificateList;
      /** An optional pagination token provided by a previous DescribeCertificates 
request. If this parameter is specified, the response includes only records
beyond the marker, up to the value specified by MaxRecords . **/
      Marker?: String;
    }
    export interface CertificateNotFoundFault {
    }
    export interface CharacterSet {
      /** The name of the character set. **/
      CharacterSetName?: String;
      /** The description of the character set. **/
      CharacterSetDescription?: String;
    }
    export interface CopyDBClusterParameterGroupMessage {
      /** The identifier or Amazon Resource Name (ARN) for the source DB cluster parameter
group. For information about creating an ARN, see Constructing an RDS Amazon
Resource Name (ARN)
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing]
. 

Constraints:

&amp;#42;  Must specify a valid DB cluster parameter group.
 
 
&amp;#42;  If the source DB cluster parameter group is in the same region as the copy,
 specify a valid DB parameter group identifier, for example 
 my-db-cluster-param-group, or a valid ARN.
 
 
&amp;#42;  If the source DB parameter group is in a different region than the copy,
 specify a valid DB cluster parameter group ARN, for example 
 arn:aws:rds:us-east-1:123456789012:cluster-pg:custom-cluster-group1. **/
      SourceDBClusterParameterGroupIdentifier: String;
      /** The identifier for the copied DB cluster parameter group.

Constraints:

&amp;#42;  Cannot be null, empty, or blank
 
 
&amp;#42;  Must contain from 1 to 255 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens
 
 

Example: my-cluster-param-group1 **/
      TargetDBClusterParameterGroupIdentifier: String;
      /** A description for the copied DB cluster parameter group. **/
      TargetDBClusterParameterGroupDescription: String;
      Tags?: TagList;
    }
    export interface CopyDBClusterParameterGroupResult {
      DBClusterParameterGroup?: DBClusterParameterGroup;
    }
    export interface CopyDBClusterSnapshotMessage {
      /** The identifier of the DB cluster snapshot to copy. This parameter is not
case-sensitive.

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens.
 
 
&amp;#42;  First character must be a letter.
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens.
 
 

Example: my-cluster-snapshot1 **/
      SourceDBClusterSnapshotIdentifier: String;
      /** The identifier of the new DB cluster snapshot to create from the source DB
cluster snapshot. This parameter is not case-sensitive.

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens.
 
 
&amp;#42;  First character must be a letter.
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens.
 
 

Example: my-cluster-snapshot2 **/
      TargetDBClusterSnapshotIdentifier: String;
      Tags?: TagList;
    }
    export interface CopyDBClusterSnapshotResult {
      DBClusterSnapshot?: DBClusterSnapshot;
    }
    export interface CopyDBParameterGroupMessage {
      /** The identifier or ARN for the source DB parameter group. For information about
creating an ARN, see Constructing an RDS Amazon Resource Name (ARN)
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing]
. 

Constraints:

&amp;#42;  Must specify a valid DB parameter group.
 
 
&amp;#42;   Must specify a valid DB parameter group identifier, for example 
 my-db-param-group, or a valid ARN. **/
      SourceDBParameterGroupIdentifier: String;
      /** The identifier for the copied DB parameter group.

Constraints:

&amp;#42;  Cannot be null, empty, or blank
 
 
&amp;#42;  Must contain from 1 to 255 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens
 
 

Example: my-db-parameter-group **/
      TargetDBParameterGroupIdentifier: String;
      /** A description for the copied DB parameter group. **/
      TargetDBParameterGroupDescription: String;
      Tags?: TagList;
    }
    export interface CopyDBParameterGroupResult {
      DBParameterGroup?: DBParameterGroup;
    }
    export interface CopyDBSnapshotMessage {
      /** The identifier for the source DB snapshot.

If you are copying from a shared manual DB snapshot, this must be the ARN of the
shared DB snapshot.

Constraints:

&amp;#42;  Must specify a valid system snapshot in the &quot;available&quot; state.
 
 
&amp;#42;  If the source snapshot is in the same region as the copy, specify a valid DB
 snapshot identifier.
 
 
&amp;#42;  If the source snapshot is in a different region than the copy, specify a
 valid DB snapshot ARN. For more information, go to Copying a DB Snapshot
 [http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html]
 .
 
 

Example: rds:mydb-2012-04-02-00-01 

Example: 
arn:aws:rds:rr-regn-1:123456789012:snapshot:mysql-instance1-snapshot-20130805 **/
      SourceDBSnapshotIdentifier: String;
      /** The identifier for the copied snapshot.

Constraints:

&amp;#42;  Cannot be null, empty, or blank
 
 
&amp;#42;  Must contain from 1 to 255 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens
 
 

Example: my-db-snapshot **/
      TargetDBSnapshotIdentifier: String;
      /** The AWS Key Management Service (AWS KMS) key identifier for an encrypted DB
snapshot. The KMS key identifier is the Amazon Resource Name (ARN) or the KMS
key alias for the KMS encryption key.

If you copy an unencrypted DB snapshot and specify a value for the KmsKeyId 
parameter, Amazon RDS encrypts the target DB snapshot using the specified KMS
encryption key.

If you copy an encrypted DB snapshot from your AWS account, you can specify a
value for KmsKeyId to encrypt the copy with a new KMS encryption key. If you
don&#x27;t specify a value for KmsKeyId then the copy of the DB snapshot is encrypted
with the same KMS key as the source DB snapshot. 

If you copy an encrypted DB snapshot that is shared from another AWS account,
then you must specify a value for KmsKeyId. **/
      KmsKeyId?: String;
      Tags?: TagList;
      /** True to copy all tags from the source DB snapshot to the target DB snapshot;
otherwise false. The default is false. **/
      CopyTags?: BooleanOptional;
    }
    export interface CopyDBSnapshotResult {
      DBSnapshot?: DBSnapshot;
    }
    export interface CopyOptionGroupMessage {
      /** The identifier or ARN for the source option group. For information about
creating an ARN, see Constructing an RDS Amazon Resource Name (ARN)
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing]
. 

Constraints:

&amp;#42;  Must specify a valid option group.
 
 
&amp;#42;  If the source option group is in the same region as the copy, specify a
 valid option group identifier, for example my-option-group, or a valid ARN.
 
 
&amp;#42;  If the source option group is in a different region than the copy, specify a
 valid option group ARN, for example 
 arn:aws:rds:us-west-2:123456789012:og:special-options. **/
      SourceOptionGroupIdentifier: String;
      /** The identifier for the copied option group.

Constraints:

&amp;#42;  Cannot be null, empty, or blank
 
 
&amp;#42;  Must contain from 1 to 255 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens
 
 

Example: my-option-group **/
      TargetOptionGroupIdentifier: String;
      /** The description for the copied option group. **/
      TargetOptionGroupDescription: String;
      Tags?: TagList;
    }
    export interface CopyOptionGroupResult {
      OptionGroup?: OptionGroup;
    }
    export interface CreateDBClusterMessage {
      /** A list of EC2 Availability Zones that instances in the DB cluster can be created
in. For information on regions and Availability Zones, see Regions and
Availability Zones
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html]
. **/
      AvailabilityZones?: AvailabilityZones;
      /** The number of days for which automated backups are retained. You must specify a
minimum value of 1.

Default: 1

Constraints:

&amp;#42;  Must be a value from 1 to 35 **/
      BackupRetentionPeriod?: IntegerOptional;
      /** A value that indicates that the DB cluster should be associated with the
specified CharacterSet. **/
      CharacterSetName?: String;
      /** The name for your database of up to 8 alpha-numeric characters. If you do not
provide a name, Amazon RDS will not create a database in the DB cluster you are
creating. **/
      DatabaseName?: String;
      /** The DB cluster identifier. This parameter is stored as a lowercase string.

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens.
 
 
&amp;#42;  First character must be a letter.
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens.
 
 

Example: my-cluster1 **/
      DBClusterIdentifier: String;
      /** The name of the DB cluster parameter group to associate with this DB cluster.
If this argument is omitted, default.aurora5.6 will be used. 

Constraints:

&amp;#42;  Must be 1 to 255 alphanumeric characters
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      DBClusterParameterGroupName?: String;
      /** A list of EC2 VPC security groups to associate with this DB cluster. **/
      VpcSecurityGroupIds?: VpcSecurityGroupIdList;
      /** A DB subnet group to associate with this DB cluster.

Constraints: Must contain no more than 255 alphanumeric characters, periods,
underscores, spaces, or hyphens. Must not be default.

Example: mySubnetgroup **/
      DBSubnetGroupName?: String;
      /** The name of the database engine to be used for this DB cluster.

Valid Values: aurora **/
      Engine: String;
      /** The version number of the database engine to use.

Aurora 

Example: 5.6.10a **/
      EngineVersion?: String;
      /** The port number on which the instances in the DB cluster accept connections.

Default: 3306 **/
      Port?: IntegerOptional;
      /** The name of the master user for the DB cluster.

Constraints:

&amp;#42;  Must be 1 to 16 alphanumeric characters.
 
 
&amp;#42;  First character must be a letter.
 
 
&amp;#42;  Cannot be a reserved word for the chosen database engine. **/
      MasterUsername?: String;
      /** The password for the master database user. This password can contain any
printable ASCII character except &quot;/&quot;, &quot;&quot;&quot;, or &quot;@&quot;.

Constraints: Must contain from 8 to 41 characters. **/
      MasterUserPassword?: String;
      /** A value that indicates that the DB cluster should be associated with the
specified option group.

Permanent options cannot be removed from an option group. The option group
cannot be removed from a DB cluster once it is associated with a DB cluster. **/
      OptionGroupName?: String;
      /** The daily time range during which automated backups are created if automated
backups are enabled using the BackupRetentionPeriod parameter. 

Default: A 30-minute window selected at random from an 8-hour block of time per
region. To see the time blocks available, see Adjusting the Preferred
Maintenance Window
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html] 
in the Amazon RDS User Guide. 

Constraints:

&amp;#42;  Must be in the format hh24:mi-hh24:mi.
 
 
&amp;#42;  Times should be in Universal Coordinated Time (UTC).
 
 
&amp;#42;  Must not conflict with the preferred maintenance window.
 
 
&amp;#42;  Must be at least 30 minutes. **/
      PreferredBackupWindow?: String;
      /** The weekly time range during which system maintenance can occur, in Universal
Coordinated Time (UTC).

Format: ddd:hh24:mi-ddd:hh24:mi 

Default: A 30-minute window selected at random from an 8-hour block of time per
region, occurring on a random day of the week. To see the time blocks available,
see Adjusting the Preferred Maintenance Window
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html] 
in the Amazon RDS User Guide. 

Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun

Constraints: Minimum 30-minute window. **/
      PreferredMaintenanceWindow?: String;
      /** The Amazon Resource Name (ARN) of the source DB cluster if this DB cluster is
created as a Read Replica. **/
      ReplicationSourceIdentifier?: String;
      Tags?: TagList;
      /** Specifies whether the DB cluster is encrypted. **/
      StorageEncrypted?: BooleanOptional;
      /** The KMS key identifier for an encrypted DB cluster.

The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption
key. If you are creating a DB cluster with the same AWS account that owns the
KMS encryption key used to encrypt the new DB cluster, then you can use the KMS
key alias instead of the ARN for the KM encryption key.

If the StorageEncrypted parameter is true, and you do not specify a value for
the KmsKeyId parameter, then Amazon RDS will use your default encryption key.
AWS KMS creates the default encryption key for your AWS account. Your AWS
account has a different default encryption key for each AWS region. **/
      KmsKeyId?: String;
    }
    export interface CreateDBClusterParameterGroupMessage {
      /** The name of the DB cluster parameter group.

Constraints:

&amp;#42;  Must be 1 to 255 alphanumeric characters
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens
 
 

This value is stored as a lowercase string. **/
      DBClusterParameterGroupName: String;
      /** The DB cluster parameter group family name. A DB cluster parameter group can be
associated with one and only one DB cluster parameter group family, and can be
applied only to a DB cluster running a database engine and engine version
compatible with that DB cluster parameter group family. **/
      DBParameterGroupFamily: String;
      /** The description for the DB cluster parameter group. **/
      Description: String;
      Tags?: TagList;
    }
    export interface CreateDBClusterParameterGroupResult {
      DBClusterParameterGroup?: DBClusterParameterGroup;
    }
    export interface CreateDBClusterResult {
      DBCluster?: DBCluster;
    }
    export interface CreateDBClusterSnapshotMessage {
      /** The identifier of the DB cluster snapshot. This parameter is stored as a
lowercase string.

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens.
 
 
&amp;#42;  First character must be a letter.
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens.
 
 

Example: my-cluster1-snapshot1 **/
      DBClusterSnapshotIdentifier: String;
      /** The identifier of the DB cluster to create a snapshot for. This parameter is not
case-sensitive.

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens.
 
 
&amp;#42;  First character must be a letter.
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens.
 
 

Example: my-cluster1 **/
      DBClusterIdentifier: String;
      /** The tags to be assigned to the DB cluster snapshot. **/
      Tags?: TagList;
    }
    export interface CreateDBClusterSnapshotResult {
      DBClusterSnapshot?: DBClusterSnapshot;
    }
    export interface CreateDBInstanceMessage {
      /** The meaning of this parameter differs according to the database engine you use.

Type: String

MySQL 

The name of the database to create when the DB instance is created. If this
parameter is not specified, no database is created in the DB instance.

Constraints:

&amp;#42;  Must contain 1 to 64 alphanumeric characters
 
 
&amp;#42;  Cannot be a word reserved by the specified database engine
 
 

MariaDB 

The name of the database to create when the DB instance is created. If this
parameter is not specified, no database is created in the DB instance.

Constraints:

&amp;#42;  Must contain 1 to 64 alphanumeric characters
 
 
&amp;#42;  Cannot be a word reserved by the specified database engine
 
 

PostgreSQL 

The name of the database to create when the DB instance is created. If this
parameter is not specified, the default &quot;postgres&quot; database is created in the DB
instance.

Constraints:

&amp;#42;  Must contain 1 to 63 alphanumeric characters
 
 
&amp;#42;  Must begin with a letter or an underscore. Subsequent characters can be
 letters, underscores, or digits (0-9).
 
 
&amp;#42;  Cannot be a word reserved by the specified database engine
 
 

Oracle 

The Oracle System ID (SID) of the created DB instance.

Default: ORCL 

Constraints:

&amp;#42;  Cannot be longer than 8 characters
 
 

SQL Server 

Not applicable. Must be null.

Amazon Aurora 

The name of the database to create when the primary instance of the DB cluster
is created. If this parameter is not specified, no database is created in the DB
instance.

Constraints:

&amp;#42;  Must contain 1 to 64 alphanumeric characters
 
 
&amp;#42;  Cannot be a word reserved by the specified database engine **/
      DBName?: String;
      /** The DB instance identifier. This parameter is stored as a lowercase string.

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens (1 to 15 for
 SQL Server).
 
 
&amp;#42;  First character must be a letter.
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens.
 
 

Example: mydbinstance **/
      DBInstanceIdentifier: String;
      /** The amount of storage (in gigabytes) to be initially allocated for the database
instance.

Type: Integer

MySQL 

Constraints: Must be an integer from 5 to 6144.

MariaDB 

Constraints: Must be an integer from 5 to 6144.

PostgreSQL 

Constraints: Must be an integer from 5 to 6144.

Oracle 

Constraints: Must be an integer from 10 to 6144.

SQL Server 

Constraints: Must be an integer from 200 to 4096 (Standard Edition and
Enterprise Edition) or from 20 to 4096 (Express Edition and Web Edition) **/
      AllocatedStorage?: IntegerOptional;
      /** The compute and memory capacity of the DB instance.

Valid Values: db.t1.micro | db.m1.small | db.m1.medium | db.m1.large |
db.m1.xlarge | db.m2.xlarge |db.m2.2xlarge | db.m2.4xlarge | db.m3.medium |
db.m3.large | db.m3.xlarge | db.m3.2xlarge | db.m4.large | db.m4.xlarge |
db.m4.2xlarge | db.m4.4xlarge | db.m4.10xlarge | db.r3.large | db.r3.xlarge |
db.r3.2xlarge | db.r3.4xlarge | db.r3.8xlarge | db.t2.micro | db.t2.small |
db.t2.medium | db.t2.large **/
      DBInstanceClass: String;
      /** The name of the database engine to be used for this instance.

Valid Values: MySQL | mariadb | oracle-se1 | oracle-se | oracle-ee | 
sqlserver-ee | sqlserver-se | sqlserver-ex | sqlserver-web | postgres | aurora 

Not every database engine is available for every AWS region. **/
      Engine: String;
      /** The name of master user for the client DB instance.

MySQL 

Constraints:

&amp;#42;  Must be 1 to 16 alphanumeric characters.
 
 
&amp;#42;  First character must be a letter.
 
 
&amp;#42;  Cannot be a reserved word for the chosen database engine.
 
 

MariaDB 

Constraints:

&amp;#42;  Must be 1 to 16 alphanumeric characters.
 
 
&amp;#42;  Cannot be a reserved word for the chosen database engine.
 
 

Type: String

Oracle 

Constraints:

&amp;#42;  Must be 1 to 30 alphanumeric characters.
 
 
&amp;#42;  First character must be a letter.
 
 
&amp;#42;  Cannot be a reserved word for the chosen database engine.
 
 

SQL Server 

Constraints:

&amp;#42;  Must be 1 to 128 alphanumeric characters.
 
 
&amp;#42;  First character must be a letter.
 
 
&amp;#42;  Cannot be a reserved word for the chosen database engine.
 
 

PostgreSQL 

Constraints:

&amp;#42;  Must be 1 to 63 alphanumeric characters.
 
 
&amp;#42;  First character must be a letter.
 
 
&amp;#42;  Cannot be a reserved word for the chosen database engine. **/
      MasterUsername?: String;
      /** The password for the master database user. Can be any printable ASCII character
except &quot;/&quot;, &quot;&quot;&quot;, or &quot;@&quot;.

Type: String

MySQL 

Constraints: Must contain from 8 to 41 characters.

MariaDB 

Constraints: Must contain from 8 to 41 characters.

Oracle 

Constraints: Must contain from 8 to 30 characters.

SQL Server 

Constraints: Must contain from 8 to 128 characters.

PostgreSQL 

Constraints: Must contain from 8 to 128 characters.

Amazon Aurora 

Constraints: Must contain from 8 to 41 characters. **/
      MasterUserPassword?: String;
      /** A list of DB security groups to associate with this DB instance.

Default: The default DB security group for the database engine. **/
      DBSecurityGroups?: DBSecurityGroupNameList;
      /** A list of EC2 VPC security groups to associate with this DB instance.

Default: The default EC2 VPC security group for the DB subnet group&#x27;s VPC. **/
      VpcSecurityGroupIds?: VpcSecurityGroupIdList;
      /** The EC2 Availability Zone that the database instance will be created in. For
information on regions and Availability Zones, see Regions and Availability
Zones
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html]
. 

Default: A random, system-chosen Availability Zone in the endpoint&#x27;s region.

Example: us-east-1d 

Constraint: The AvailabilityZone parameter cannot be specified if the MultiAZ
parameter is set to true. The specified Availability Zone must be in the same
region as the current endpoint. **/
      AvailabilityZone?: String;
      /** A DB subnet group to associate with this DB instance.

If there is no DB subnet group, then it is a non-VPC DB instance. **/
      DBSubnetGroupName?: String;
      /** The weekly time range during which system maintenance can occur, in Universal
Coordinated Time (UTC). For more information, see DB Instance Maintenance
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBMaintenance.html]
. 

Format: ddd:hh24:mi-ddd:hh24:mi 

Default: A 30-minute window selected at random from an 8-hour block of time per
region, occurring on a random day of the week. To see the time blocks available,
see Adjusting the Preferred Maintenance Window
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html] 
in the Amazon RDS User Guide. 

Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun

Constraints: Minimum 30-minute window. **/
      PreferredMaintenanceWindow?: String;
      /** The name of the DB parameter group to associate with this DB instance. If this
argument is omitted, the default DBParameterGroup for the specified engine will
be used.

Constraints:

&amp;#42;  Must be 1 to 255 alphanumeric characters
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      DBParameterGroupName?: String;
      /** The number of days for which automated backups are retained. Setting this
parameter to a positive number enables backups. Setting this parameter to 0
disables automated backups.

Default: 1

Constraints:

&amp;#42;  Must be a value from 0 to 35
 
 
&amp;#42;  Cannot be set to 0 if the DB instance is a source to Read Replicas **/
      BackupRetentionPeriod?: IntegerOptional;
      /** The daily time range during which automated backups are created if automated
backups are enabled, using the BackupRetentionPeriod parameter. For more
information, see DB Instance Backups
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.BackingUpAndRestoringAmazonRDSInstances.html]
. 

Default: A 30-minute window selected at random from an 8-hour block of time per
region. To see the time blocks available, see Adjusting the Preferred
Maintenance Window
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html] 
in the Amazon RDS User Guide. 

Constraints:

&amp;#42;  Must be in the format hh24:mi-hh24:mi.
 
 
&amp;#42;  Times should be in Universal Coordinated Time (UTC).
 
 
&amp;#42;  Must not conflict with the preferred maintenance window.
 
 
&amp;#42;  Must be at least 30 minutes. **/
      PreferredBackupWindow?: String;
      /** The port number on which the database accepts connections.

MySQL 

Default: 3306 

Valid Values: 1150-65535 

Type: Integer

MariaDB 

Default: 3306 

Valid Values: 1150-65535 

Type: Integer

PostgreSQL 

Default: 5432 

Valid Values: 1150-65535 

Type: Integer

Oracle 

Default: 1521 

Valid Values: 1150-65535 

SQL Server 

Default: 1433 

Valid Values: 1150-65535 except for 1434, 3389, 47001, 49152, and 49152 through 
49156. 

Amazon Aurora 

Default: 3306 

Valid Values: 1150-65535 

Type: Integer **/
      Port?: IntegerOptional;
      /** Specifies if the DB instance is a Multi-AZ deployment. You cannot set the
AvailabilityZone parameter if the MultiAZ parameter is set to true. **/
      MultiAZ?: BooleanOptional;
      /** The version number of the database engine to use.

The following are the database engines and major and minor versions that are
available with Amazon RDS. Not every database engine is available for every AWS
region.

Amazon Aurora 

&amp;#42;   Version 5.6 (only available in AWS regions ap-northeast-1, ap-northeast-2,
 ap-south-1, ap-southeast-2, eu-west-1, us-east-1, us-west-2): 5.6.10a 
 
 

MariaDB 

&amp;#42;   Version 10.1 (available in all AWS regions except us-gov-west-1): 10.1.14 
 
 
&amp;#42;   Version 10.0 (available in all AWS regions): 10.0.17 | 10.0.24 
 
 

Microsoft SQL Server Enterprise Edition (sqlserver-ee) 

&amp;#42;   Version 11.00 (available in all AWS regions): 11.00.2100.60.v1 |
 11.00.5058.0.v1 | 11.00.6020.0.v1 
 
 
&amp;#42;   Version 10.50 (available in all AWS regions): 10.50.2789.0.v1 |
 10.50.6000.34.v1 | 10.50.6529.0.v1 
 
 

Microsoft SQL Server Express Edition (sqlserver-ex) 

&amp;#42;   Version 12.00 (available in all AWS regions): 12.00.4422.0.v1 
 
 
&amp;#42;   Version 11.00 (available in all AWS regions): 11.00.2100.60.v1 |
 11.00.5058.0.v1 | 11.00.6020.0.v1 
 
 
&amp;#42;   Version 10.50 (available in all AWS regions): 10.50.2789.0.v1 |
 10.50.6000.34.v1 | 10.50.6529.0.v1 
 
 

Microsoft SQL Server Standard Edition (sqlserver-se) 

&amp;#42;   Version 12.00 (available in all AWS regions): 12.00.4422.0.v1 
 
 
&amp;#42;   Version 11.00 (available in all AWS regions): 11.00.2100.60.v1 |
 11.00.5058.0.v1 | 11.00.6020.0.v1 
 
 
&amp;#42;   Version 10.50 (available in all AWS regions): 10.50.2789.0.v1 |
 10.50.6000.34.v1 | 10.50.6529.0.v1 
 
 

Microsoft SQL Server Web Edition (sqlserver-web) 

&amp;#42;   Version 12.00 (available in all AWS regions): 12.00.4422.0.v1 
 
 
&amp;#42;   Version 11.00 (available in all AWS regions): 11.00.2100.60.v1 |
 11.00.5058.0.v1 | 11.00.6020.0.v1 
 
 
&amp;#42;   Version 10.50 (available in all AWS regions): 10.50.2789.0.v1 |
 10.50.6000.34.v1 | 10.50.6529.0.v1 
 
 

MySQL 

&amp;#42;   Version 5.7 (available in all AWS regions): 5.7.10 | 5.7.11 
 
 
&amp;#42;   Version 5.6 (available in all AWS regions except ap-south-1,
 ap-northeast-2): 5.6.19a | 5.6.19b | 5.6.21 | 5.6.21b | 5.6.22 
 
 
&amp;#42;   Version 5.6 (available in all AWS regions except ap-south-1): 5.6.23 
 
 
&amp;#42;   Version 5.6 (available in all AWS regions): 5.6.27 | 5.6.29 
 
 
&amp;#42;   Version 5.5 (only available in AWS regions ap-northeast-1, ap-southeast-1,
 ap-southeast-2, eu-west-1, sa-east-1, us-east-1, us-gov-west-1, us-west-1,
 us-west-2): 5.5.40 | 5.5.40a 
 
 
&amp;#42;   Version 5.5 (available in all AWS regions except ap-south-1,
 ap-northeast-2): 5.5.40b | 5.5.41 
 
 
&amp;#42;   Version 5.5 (available in all AWS regions except ap-south-1): 5.5.42 
 
 
&amp;#42;   Version 5.5 (available in all AWS regions): 5.5.46 
 
 

Oracle Database Enterprise Edition (oracle-ee) 

&amp;#42;   Version 12.1 (available in all AWS regions except ap-south-1,
 ap-northeast-2): 12.1.0.1.v1 | 12.1.0.1.v2 
 
 
&amp;#42;   Version 12.1 (only available in AWS regions ap-northeast-1, ap-southeast-1,
 ap-southeast-2, eu-central-1, eu-west-1, sa-east-1, us-east-1, us-west-1,
 us-west-2): 12.1.0.1.v3 | 12.1.0.1.v4 | 12.1.0.1.v5 
 
 
&amp;#42;   Version 12.1 (available in all AWS regions): 12.1.0.2.v1 
 
 
&amp;#42;   Version 12.1 (available in all AWS regions except us-gov-west-1): 
 12.1.0.2.v2 | 12.1.0.2.v3 | 12.1.0.2.v4 
 
 
&amp;#42;   Version 11.2 (available in all AWS regions): 11.2.0.4.v1 | 11.2.0.4.v3 |
 11.2.0.4.v4 
 
 
&amp;#42;   Version 11.2 (available in all AWS regions except us-gov-west-1): 
 11.2.0.4.v5 | 11.2.0.4.v6 | 11.2.0.4.v7 | 11.2.0.4.v8 
 
 

Oracle Database Standard Edition (oracle-se) 

&amp;#42;   Version 12.1 (available in all AWS regions except ap-south-1,
 ap-northeast-2): 12.1.0.1.v1 | 12.1.0.1.v2 
 
 
&amp;#42;   Version 12.1 (only available in AWS regions ap-northeast-1, ap-southeast-1,
 ap-southeast-2, eu-central-1, eu-west-1, sa-east-1, us-east-1, us-west-1,
 us-west-2): 12.1.0.1.v3 | 12.1.0.1.v4 | 12.1.0.1.v5 
 
 
&amp;#42;   Version 11.2 (available in all AWS regions): 11.2.0.4.v1 | 11.2.0.4.v3 |
 11.2.0.4.v4 
 
 
&amp;#42;   Version 11.2 (available in all AWS regions except us-gov-west-1): 
 11.2.0.4.v5 | 11.2.0.4.v6 | 11.2.0.4.v7 | 11.2.0.4.v8 
 
 

Oracle Database Standard Edition One (oracle-se1) 

&amp;#42;   Version 12.1 (available in all AWS regions except ap-south-1,
 ap-northeast-2): 12.1.0.1.v1 | 12.1.0.1.v2 
 
 
&amp;#42;   Version 12.1 (only available in AWS regions ap-northeast-1, ap-southeast-1,
 ap-southeast-2, eu-central-1, eu-west-1, sa-east-1, us-east-1, us-west-1,
 us-west-2): 12.1.0.1.v3 | 12.1.0.1.v4 | 12.1.0.1.v5 
 
 
&amp;#42;   Version 11.2 (available in all AWS regions): 11.2.0.4.v1 | 11.2.0.4.v3 |
 11.2.0.4.v4 
 
 
&amp;#42;   Version 11.2 (available in all AWS regions except us-gov-west-1): 
 11.2.0.4.v5 | 11.2.0.4.v6 | 11.2.0.4.v7 | 11.2.0.4.v8 
 
 

Oracle Database Standard Edition Two (oracle-se2) 

&amp;#42;   Version 12.1 (available in all AWS regions except us-gov-west-1): 
 12.1.0.2.v2 | 12.1.0.2.v3 | 12.1.0.2.v4 
 
 

PostgreSQL 

&amp;#42;   Version 9.5 (available in all AWS regions except us-gov-west-1): 9.5.2 
 
 
&amp;#42;   Version 9.4 (available in all AWS regions except ap-south-1): 9.4.1 | 9.4.4 
 
 
&amp;#42;   Version 9.4 (available in all AWS regions): 9.4.5 
 
 
&amp;#42;   Version 9.4 (available in all AWS regions except us-gov-west-1): 9.4.7 
 
 
&amp;#42;   Version 9.3 (only available in AWS regions ap-northeast-1, ap-southeast-1,
 ap-southeast-2, eu-west-1, sa-east-1, us-east-1, us-gov-west-1, us-west-1,
 us-west-2): 9.3.1 | 9.3.2 
 
 
&amp;#42;   Version 9.3 (available in all AWS regions except ap-south-1,
 ap-northeast-2): 9.3.10 | 9.3.3 | 9.3.5 | 9.3.6 | 9.3.9 
 
 
&amp;#42;   Version 9.3 (only available in AWS regions ap-northeast-1, ap-southeast-1,
 ap-southeast-2, eu-central-1, eu-west-1, sa-east-1, us-east-1, us-west-1,
 us-west-2): 9.3.12 **/
      EngineVersion?: String;
      /** Indicates that minor engine upgrades will be applied automatically to the DB
instance during the maintenance window.

Default: true **/
      AutoMinorVersionUpgrade?: BooleanOptional;
      /** License model information for this DB instance.

Valid values: license-included | bring-your-own-license | 
general-public-license **/
      LicenseModel?: String;
      /** The amount of Provisioned IOPS (input/output operations per second) to be
initially allocated for the DB instance.

Constraints: Must be a multiple between 3 and 10 of the storage amount for the
DB instance. Must also be an integer multiple of 1000. For example, if the size
of your DB instance is 500 GB, then your Iops value can be 2000, 3000, 4000, or
5000. **/
      Iops?: IntegerOptional;
      /** Indicates that the DB instance should be associated with the specified option
group.

Permanent options, such as the TDE option for Oracle Advanced Security TDE,
cannot be removed from an option group, and that option group cannot be removed
from a DB instance once it is associated with a DB instance **/
      OptionGroupName?: String;
      /** For supported engines, indicates that the DB instance should be associated with
the specified CharacterSet. **/
      CharacterSetName?: String;
      /** Specifies the accessibility options for the DB instance. A value of true
specifies an Internet-facing instance with a publicly resolvable DNS name, which
resolves to a public IP address. A value of false specifies an internal instance
with a DNS name that resolves to a private IP address.

Default: The default behavior varies depending on whether a VPC has been
requested or not. The following list shows the default behavior in each case.

&amp;#42;   Default VPC: true
 
 
&amp;#42;   VPC: false
 
 

If no DB subnet group has been specified as part of the request and the
PubliclyAccessible value has not been set, the DB instance will be publicly
accessible. If a specific DB subnet group has been specified as part of the
request and the PubliclyAccessible value has not been set, the DB instance will
be private. **/
      PubliclyAccessible?: BooleanOptional;
      Tags?: TagList;
      /** The identifier of the DB cluster that the instance will belong to.

For information on creating a DB cluster, see CreateDBCluster.

Type: String **/
      DBClusterIdentifier?: String;
      /** Specifies the storage type to be associated with the DB instance.

Valid values: standard | gp2 | io1 

If you specify io1, you must also include a value for the Iops parameter. 

Default: io1 if the Iops parameter is specified; otherwise standard **/
      StorageType?: String;
      /** The ARN from the Key Store with which to associate the instance for TDE
encryption. **/
      TdeCredentialArn?: String;
      /** The password for the given ARN from the Key Store in order to access the device. **/
      TdeCredentialPassword?: String;
      /** Specifies whether the DB instance is encrypted.

Default: false **/
      StorageEncrypted?: BooleanOptional;
      /** The KMS key identifier for an encrypted DB instance.

The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption
key. If you are creating a DB instance with the same AWS account that owns the
KMS encryption key used to encrypt the new DB instance, then you can use the KMS
key alias instead of the ARN for the KM encryption key.

If the StorageEncrypted parameter is true, and you do not specify a value for
the KmsKeyId parameter, then Amazon RDS will use your default encryption key.
AWS KMS creates the default encryption key for your AWS account. Your AWS
account has a different default encryption key for each AWS region. **/
      KmsKeyId?: String;
      /** Specify the Active Directory Domain to create the instance in. **/
      Domain?: String;
      /** True to copy all tags from the DB instance to snapshots of the DB instance;
otherwise false. The default is false. **/
      CopyTagsToSnapshot?: BooleanOptional;
      /** The interval, in seconds, between points when Enhanced Monitoring metrics are
collected for the DB instance. To disable collecting Enhanced Monitoring
metrics, specify 0. The default is 0.

If MonitoringRoleArn is specified, then you must also set MonitoringInterval to
a value other than 0.

Valid Values: 0, 1, 5, 10, 15, 30, 60 **/
      MonitoringInterval?: IntegerOptional;
      /** The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to
CloudWatch Logs. For example, arn:aws:iam:123456789012:role/emaccess. For
information on creating a monitoring role, go to To create an IAM role for
Amazon RDS Enhanced Monitoring
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html#USER_Monitoring.OS.IAMRole]
.

If MonitoringInterval is set to a value other than 0, then you must supply a 
MonitoringRoleArn value. **/
      MonitoringRoleArn?: String;
      /** Specify the name of the IAM role to be used when making API calls to the
Directory Service. **/
      DomainIAMRoleName?: String;
      /** A value that specifies the order in which an Aurora Replica is promoted to the
primary instance after a failure of the existing primary instance. For more
information, see Fault Tolerance for an Aurora DB Cluster
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Managing.html#Aurora.Managing.FaultTolerance]
. 

Default: 1

Valid Values: 0 - 15 **/
      PromotionTier?: IntegerOptional;
    }
    export interface CreateDBInstanceReadReplicaMessage {
      /** The DB instance identifier of the Read Replica. This identifier is the unique
key that identifies a DB instance. This parameter is stored as a lowercase
string. **/
      DBInstanceIdentifier: String;
      /** The identifier of the DB instance that will act as the source for the Read
Replica. Each DB instance can have up to five Read Replicas.

Constraints:

&amp;#42;  Must be the identifier of an existing MySQL, MariaDB, or PostgreSQL DB
 instance.
 
 
&amp;#42;  Can specify a DB instance that is a MySQL Read Replica only if the source is
 running MySQL 5.6.
 
 
&amp;#42;  Can specify a DB instance that is a PostgreSQL Read Replica only if the
 source is running PostgreSQL 9.3.5.
 
 
&amp;#42;  The specified DB instance must have automatic backups enabled, its backup
 retention period must be greater than 0.
 
 
&amp;#42;  If the source DB instance is in the same region as the Read Replica, specify
 a valid DB instance identifier.
 
 
&amp;#42;  If the source DB instance is in a different region than the Read Replica,
 specify a valid DB instance ARN. For more information, go to Constructing a
 Amazon RDS Amazon Resource Name (ARN)
 [http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing]
 . **/
      SourceDBInstanceIdentifier: String;
      /** The compute and memory capacity of the Read Replica.

Valid Values: db.m1.small | db.m1.medium | db.m1.large | db.m1.xlarge |
db.m2.xlarge |db.m2.2xlarge | db.m2.4xlarge | db.m3.medium | db.m3.large |
db.m3.xlarge | db.m3.2xlarge | db.m4.large | db.m4.xlarge | db.m4.2xlarge |
db.m4.4xlarge | db.m4.10xlarge | db.r3.large | db.r3.xlarge | db.r3.2xlarge |
db.r3.4xlarge | db.r3.8xlarge | db.t2.micro | db.t2.small | db.t2.medium |
db.t2.large 

Default: Inherits from the source DB instance. **/
      DBInstanceClass?: String;
      /** The Amazon EC2 Availability Zone that the Read Replica will be created in.

Default: A random, system-chosen Availability Zone in the endpoint&#x27;s region.

Example: us-east-1d **/
      AvailabilityZone?: String;
      /** The port number that the DB instance uses for connections.

Default: Inherits from the source DB instance

Valid Values: 1150-65535 **/
      Port?: IntegerOptional;
      /** Indicates that minor engine upgrades will be applied automatically to the Read
Replica during the maintenance window.

Default: Inherits from the source DB instance **/
      AutoMinorVersionUpgrade?: BooleanOptional;
      /** The amount of Provisioned IOPS (input/output operations per second) to be
initially allocated for the DB instance. **/
      Iops?: IntegerOptional;
      /** The option group the DB instance will be associated with. If omitted, the
default option group for the engine specified will be used. **/
      OptionGroupName?: String;
      /** Specifies the accessibility options for the DB instance. A value of true
specifies an Internet-facing instance with a publicly resolvable DNS name, which
resolves to a public IP address. A value of false specifies an internal instance
with a DNS name that resolves to a private IP address.

Default: The default behavior varies depending on whether a VPC has been
requested or not. The following list shows the default behavior in each case.

&amp;#42;   Default VPC:true
 
 
&amp;#42;   VPC:false
 
 

If no DB subnet group has been specified as part of the request and the
PubliclyAccessible value has not been set, the DB instance will be publicly
accessible. If a specific DB subnet group has been specified as part of the
request and the PubliclyAccessible value has not been set, the DB instance will
be private. **/
      PubliclyAccessible?: BooleanOptional;
      Tags?: TagList;
      /** Specifies a DB subnet group for the DB instance. The new DB instance will be
created in the VPC associated with the DB subnet group. If no DB subnet group is
specified, then the new DB instance is not created in a VPC.

Constraints:

&amp;#42;  Can only be specified if the source DB instance identifier specifies a DB
 instance in another region.
 
 
&amp;#42;  The specified DB subnet group must be in the same region in which the
 operation is running.
 
 
&amp;#42;  All Read Replicas in one region that are created from the same source DB
 instance must either:&gt;
 
  &amp;#42;  Specify DB subnet groups from the same VPC. All these Read Replicas will
    be created in the same VPC.
    
    
  &amp;#42;  Not specify a DB subnet group. All these Read Replicas will be created
    outside of any VPC.
    
    
 
 

Constraints: Must contain no more than 255 alphanumeric characters, periods,
underscores, spaces, or hyphens. Must not be default.

Example: mySubnetgroup **/
      DBSubnetGroupName?: String;
      /** Specifies the storage type to be associated with the Read Replica.

Valid values: standard | gp2 | io1 

If you specify io1, you must also include a value for the Iops parameter. 

Default: io1 if the Iops parameter is specified; otherwise standard **/
      StorageType?: String;
      /** True to copy all tags from the Read Replica to snapshots of the Read Replica;
otherwise false. The default is false. **/
      CopyTagsToSnapshot?: BooleanOptional;
      /** The interval, in seconds, between points when Enhanced Monitoring metrics are
collected for the Read Replica. To disable collecting Enhanced Monitoring
metrics, specify 0. The default is 0.

If MonitoringRoleArn is specified, then you must also set MonitoringInterval to
a value other than 0.

Valid Values: 0, 1, 5, 10, 15, 30, 60 **/
      MonitoringInterval?: IntegerOptional;
      /** The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to
CloudWatch Logs. For example, arn:aws:iam:123456789012:role/emaccess. For
information on creating a monitoring role, go to To create an IAM role for
Amazon RDS Enhanced Monitoring
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html#USER_Monitoring.OS.IAMRole]
.

If MonitoringInterval is set to a value other than 0, then you must supply a 
MonitoringRoleArn value. **/
      MonitoringRoleArn?: String;
    }
    export interface CreateDBInstanceReadReplicaResult {
      DBInstance?: DBInstance;
    }
    export interface CreateDBInstanceResult {
      DBInstance?: DBInstance;
    }
    export interface CreateDBParameterGroupMessage {
      /** The name of the DB parameter group.

Constraints:

&amp;#42;  Must be 1 to 255 alphanumeric characters
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens
 
 

This value is stored as a lowercase string. **/
      DBParameterGroupName: String;
      /** The DB parameter group family name. A DB parameter group can be associated with
one and only one DB parameter group family, and can be applied only to a DB
instance running a database engine and engine version compatible with that DB
parameter group family. **/
      DBParameterGroupFamily: String;
      /** The description for the DB parameter group. **/
      Description: String;
      Tags?: TagList;
    }
    export interface CreateDBParameterGroupResult {
      DBParameterGroup?: DBParameterGroup;
    }
    export interface CreateDBSecurityGroupMessage {
      /** The name for the DB security group. This value is stored as a lowercase string.

Constraints:

&amp;#42;  Must be 1 to 255 alphanumeric characters
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens
 
 
&amp;#42;  Must not be &quot;Default&quot;
 
 

Example: mysecuritygroup **/
      DBSecurityGroupName: String;
      /** The description for the DB security group. **/
      DBSecurityGroupDescription: String;
      Tags?: TagList;
    }
    export interface CreateDBSecurityGroupResult {
      DBSecurityGroup?: DBSecurityGroup;
    }
    export interface CreateDBSnapshotMessage {
      /** The identifier for the DB snapshot.

Constraints:

&amp;#42;  Cannot be null, empty, or blank
 
 
&amp;#42;  Must contain from 1 to 255 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens
 
 

Example: my-snapshot-id **/
      DBSnapshotIdentifier: String;
      /** The DB instance identifier. This is the unique key that identifies a DB
instance.

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      DBInstanceIdentifier: String;
      Tags?: TagList;
    }
    export interface CreateDBSnapshotResult {
      DBSnapshot?: DBSnapshot;
    }
    export interface CreateDBSubnetGroupMessage {
      /** The name for the DB subnet group. This value is stored as a lowercase string.

Constraints: Must contain no more than 255 alphanumeric characters, periods,
underscores, spaces, or hyphens. Must not be default.

Example: mySubnetgroup **/
      DBSubnetGroupName: String;
      /** The description for the DB subnet group. **/
      DBSubnetGroupDescription: String;
      /** The EC2 Subnet IDs for the DB subnet group. **/
      SubnetIds: SubnetIdentifierList;
      Tags?: TagList;
    }
    export interface CreateDBSubnetGroupResult {
      DBSubnetGroup?: DBSubnetGroup;
    }
    export interface CreateEventSubscriptionMessage {
      /** The name of the subscription.

Constraints: The name must be less than 255 characters. **/
      SubscriptionName: String;
      /** The Amazon Resource Name (ARN) of the SNS topic created for event notification.
The ARN is created by Amazon SNS when you create a topic and subscribe to it. **/
      SnsTopicArn: String;
      /** The type of source that will be generating the events. For example, if you want
to be notified of events generated by a DB instance, you would set this
parameter to db-instance. if this value is not specified, all events are
returned.

Valid values: db-instance | db-cluster | db-parameter-group | db-security-group 
| db-snapshot | db-cluster-snapshot **/
      SourceType?: String;
      /** A list of event categories for a SourceType that you want to subscribe to. You
can see a list of the categories for a given SourceType in the Events
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html] topic
in the Amazon RDS User Guide or by using the DescribeEventCategories action. **/
      EventCategories?: EventCategoriesList;
      /** The list of identifiers of the event sources for which events will be returned.
If not specified, then all sources are included in the response. An identifier
must begin with a letter and must contain only ASCII letters, digits, and
hyphens; it cannot end with a hyphen or contain two consecutive hyphens.

Constraints:

&amp;#42;  If SourceIds are supplied, SourceType must also be provided.
 
 
&amp;#42;  If the source type is a DB instance, then a DBInstanceIdentifier must be
 supplied.
 
 
&amp;#42;  If the source type is a DB security group, a DBSecurityGroupName must be
 supplied.
 
 
&amp;#42;  If the source type is a DB parameter group, a DBParameterGroupName must be
 supplied.
 
 
&amp;#42;  If the source type is a DB snapshot, a DBSnapshotIdentifier must be supplied. **/
      SourceIds?: SourceIdsList;
      /** A Boolean value; set to true to activate the subscription, set to false to
create the subscription but not active it. **/
      Enabled?: BooleanOptional;
      Tags?: TagList;
    }
    export interface CreateEventSubscriptionResult {
      EventSubscription?: EventSubscription;
    }
    export interface CreateOptionGroupMessage {
      /** Specifies the name of the option group to be created.

Constraints:

&amp;#42;  Must be 1 to 255 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens
 
 

Example: myoptiongroup **/
      OptionGroupName: String;
      /** Specifies the name of the engine that this option group should be associated
with. **/
      EngineName: String;
      /** Specifies the major version of the engine that this option group should be
associated with. **/
      MajorEngineVersion: String;
      /** The description of the option group. **/
      OptionGroupDescription: String;
      Tags?: TagList;
    }
    export interface CreateOptionGroupResult {
      OptionGroup?: OptionGroup;
    }
    export interface DBCluster {
      /** Specifies the allocated storage size in gigabytes (GB). **/
      AllocatedStorage?: IntegerOptional;
      /** Provides the list of EC2 Availability Zones that instances in the DB cluster can
be created in. **/
      AvailabilityZones?: AvailabilityZones;
      /** Specifies the number of days for which automatic DB snapshots are retained. **/
      BackupRetentionPeriod?: IntegerOptional;
      /** If present, specifies the name of the character set that this cluster is
associated with. **/
      CharacterSetName?: String;
      /** Contains the name of the initial database of this DB cluster that was provided
at create time, if one was specified when the DB cluster was created. This same
name is returned for the life of the DB cluster. **/
      DatabaseName?: String;
      /** Contains a user-supplied DB cluster identifier. This identifier is the unique
key that identifies a DB cluster. **/
      DBClusterIdentifier?: String;
      /** Specifies the name of the DB cluster parameter group for the DB cluster. **/
      DBClusterParameterGroup?: String;
      /** Specifies information on the subnet group associated with the DB cluster,
including the name, description, and subnets in the subnet group. **/
      DBSubnetGroup?: String;
      /** Specifies the current state of this DB cluster. **/
      Status?: String;
      /** Specifies the progress of the operation as a percentage. **/
      PercentProgress?: String;
      /** Specifies the earliest time to which a database can be restored with
point-in-time restore. **/
      EarliestRestorableTime?: TStamp;
      /** Specifies the connection endpoint for the primary instance of the DB cluster. **/
      Endpoint?: String;
      /** Provides the name of the database engine to be used for this DB cluster. **/
      Engine?: String;
      /** Indicates the database engine version. **/
      EngineVersion?: String;
      /** Specifies the latest time to which a database can be restored with point-in-time
restore. **/
      LatestRestorableTime?: TStamp;
      /** Specifies the port that the database engine is listening on. **/
      Port?: IntegerOptional;
      /** Contains the master username for the DB cluster. **/
      MasterUsername?: String;
      /** Provides the list of option group memberships for this DB cluster. **/
      DBClusterOptionGroupMemberships?: DBClusterOptionGroupMemberships;
      /** Specifies the daily time range during which automated backups are created if
automated backups are enabled, as determined by the BackupRetentionPeriod. **/
      PreferredBackupWindow?: String;
      /** Specifies the weekly time range during which system maintenance can occur, in
Universal Coordinated Time (UTC). **/
      PreferredMaintenanceWindow?: String;
      /** Contains the identifier of the source DB cluster if this DB cluster is a Read
Replica. **/
      ReplicationSourceIdentifier?: String;
      /** Contains one or more identifiers of the Read Replicas associated with this DB
cluster. **/
      ReadReplicaIdentifiers?: ReadReplicaIdentifierList;
      /** Provides the list of instances that make up the DB cluster. **/
      DBClusterMembers?: DBClusterMemberList;
      /** Provides a list of VPC security groups that the DB cluster belongs to. **/
      VpcSecurityGroups?: VpcSecurityGroupMembershipList;
      /** Specifies the ID that Amazon Route 53 assigns when you create a hosted zone. **/
      HostedZoneId?: String;
      /** Specifies whether the DB cluster is encrypted. **/
      StorageEncrypted?: Boolean;
      /** If StorageEncrypted is true, the KMS key identifier for the encrypted DB
cluster. **/
      KmsKeyId?: String;
      /** The region-unique, immutable identifier for the DB cluster. This identifier is
found in AWS CloudTrail log entries whenever the KMS key for the DB cluster is
accessed. **/
      DbClusterResourceId?: String;
      /** The Amazon Resource Name (ARN) for the DB cluster. **/
      DBClusterArn?: String;
    }
    export interface DBClusterAlreadyExistsFault {
    }
    export interface DBClusterMember {
      /** Specifies the instance identifier for this member of the DB cluster. **/
      DBInstanceIdentifier?: String;
      /** Value that is true if the cluster member is the primary instance for the DB
cluster and false otherwise. **/
      IsClusterWriter?: Boolean;
      /** Specifies the status of the DB cluster parameter group for this member of the DB
cluster. **/
      DBClusterParameterGroupStatus?: String;
      /** A value that specifies the order in which an Aurora Replica is promoted to the
primary instance after a failure of the existing primary instance. For more
information, see Fault Tolerance for an Aurora DB Cluster
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Managing.html#Aurora.Managing.FaultTolerance]
. **/
      PromotionTier?: IntegerOptional;
    }
    export interface DBClusterMessage {
      /** A pagination token that can be used in a subsequent DescribeDBClusters request. **/
      Marker?: String;
      /** Contains a list of DB clusters for the user. **/
      DBClusters?: DBClusterList;
    }
    export interface DBClusterNotFoundFault {
    }
    export interface DBClusterOptionGroupStatus {
      /** Specifies the name of the DB cluster option group. **/
      DBClusterOptionGroupName?: String;
      /** Specifies the status of the DB cluster option group. **/
      Status?: String;
    }
    export interface DBClusterParameterGroup {
      /** Provides the name of the DB cluster parameter group. **/
      DBClusterParameterGroupName?: String;
      /** Provides the name of the DB parameter group family that this DB cluster
parameter group is compatible with. **/
      DBParameterGroupFamily?: String;
      /** Provides the customer-specified description for this DB cluster parameter group. **/
      Description?: String;
      /** The Amazon Resource Name (ARN) for the DB cluster parameter group. **/
      DBClusterParameterGroupArn?: String;
    }
    export interface DBClusterParameterGroupDetails {
      /** Provides a list of parameters for the DB cluster parameter group. **/
      Parameters?: ParametersList;
      /** An optional pagination token provided by a previous DescribeDBClusterParameters
request. If this parameter is specified, the response includes only records
beyond the marker, up to the value specified by MaxRecords . **/
      Marker?: String;
    }
    export interface DBClusterParameterGroupNameMessage {
      /** The name of the DB cluster parameter group.

Constraints:

&amp;#42;  Must be 1 to 255 alphanumeric characters
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens
 
 

This value is stored as a lowercase string. **/
      DBClusterParameterGroupName?: String;
    }
    export interface DBClusterParameterGroupNotFoundFault {
    }
    export interface DBClusterParameterGroupsMessage {
      /** An optional pagination token provided by a previous 
DescribeDBClusterParameterGroups request. If this parameter is specified, the
response includes only records beyond the marker, up to the value specified by 
MaxRecords. **/
      Marker?: String;
      /** A list of DB cluster parameter groups. **/
      DBClusterParameterGroups?: DBClusterParameterGroupList;
    }
    export interface DBClusterQuotaExceededFault {
    }
    export interface DBClusterSnapshot {
      /** Provides the list of EC2 Availability Zones that instances in the DB cluster
snapshot can be restored in. **/
      AvailabilityZones?: AvailabilityZones;
      /** Specifies the identifier for the DB cluster snapshot. **/
      DBClusterSnapshotIdentifier?: String;
      /** Specifies the DB cluster identifier of the DB cluster that this DB cluster
snapshot was created from. **/
      DBClusterIdentifier?: String;
      /** Provides the time when the snapshot was taken, in Universal Coordinated Time
(UTC). **/
      SnapshotCreateTime?: TStamp;
      /** Specifies the name of the database engine. **/
      Engine?: String;
      /** Specifies the allocated storage size in gigabytes (GB). **/
      AllocatedStorage?: Integer;
      /** Specifies the status of this DB cluster snapshot. **/
      Status?: String;
      /** Specifies the port that the DB cluster was listening on at the time of the
snapshot. **/
      Port?: Integer;
      /** Provides the VPC ID associated with the DB cluster snapshot. **/
      VpcId?: String;
      /** Specifies the time when the DB cluster was created, in Universal Coordinated
Time (UTC). **/
      ClusterCreateTime?: TStamp;
      /** Provides the master username for the DB cluster snapshot. **/
      MasterUsername?: String;
      /** Provides the version of the database engine for this DB cluster snapshot. **/
      EngineVersion?: String;
      /** Provides the license model information for this DB cluster snapshot. **/
      LicenseModel?: String;
      /** Provides the type of the DB cluster snapshot. **/
      SnapshotType?: String;
      /** Specifies the percentage of the estimated data that has been transferred. **/
      PercentProgress?: Integer;
      /** Specifies whether the DB cluster snapshot is encrypted. **/
      StorageEncrypted?: Boolean;
      /** If StorageEncrypted is true, the KMS key identifier for the encrypted DB cluster
snapshot. **/
      KmsKeyId?: String;
      /** The Amazon Resource Name (ARN) for the DB cluster snapshot. **/
      DBClusterSnapshotArn?: String;
    }
    export interface DBClusterSnapshotAlreadyExistsFault {
    }
    export interface DBClusterSnapshotAttribute {
      /** The name of the manual DB cluster snapshot attribute.

The attribute named restore refers to the list of AWS accounts that have
permission to copy or restore the manual DB cluster snapshot. For more
information, see the ModifyDBClusterSnapshotAttribute API action. **/
      AttributeName?: String;
      /** The value(s) for the manual DB cluster snapshot attribute.

If the AttributeName field is set to restore, then this element returns a list
of IDs of the AWS accounts that are authorized to copy or restore the manual DB
cluster snapshot. If a value of all is in the list, then the manual DB cluster
snapshot is public and available for any AWS account to copy or restore. **/
      AttributeValues?: AttributeValueList;
    }
    export interface DBClusterSnapshotAttributesResult {
      /** The identifier of the manual DB cluster snapshot that the attributes apply to. **/
      DBClusterSnapshotIdentifier?: String;
      /** The list of attributes and values for the manual DB cluster snapshot. **/
      DBClusterSnapshotAttributes?: DBClusterSnapshotAttributeList;
    }
    export interface DBClusterSnapshotMessage {
      /** An optional pagination token provided by a previous DescribeDBClusterSnapshots 
request. If this parameter is specified, the response includes only records
beyond the marker, up to the value specified by MaxRecords. **/
      Marker?: String;
      /** Provides a list of DB cluster snapshots for the user. **/
      DBClusterSnapshots?: DBClusterSnapshotList;
    }
    export interface DBClusterSnapshotNotFoundFault {
    }
    export interface DBEngineVersion {
      /** The name of the database engine. **/
      Engine?: String;
      /** The version number of the database engine. **/
      EngineVersion?: String;
      /** The name of the DB parameter group family for the database engine. **/
      DBParameterGroupFamily?: String;
      /** The description of the database engine. **/
      DBEngineDescription?: String;
      /** The description of the database engine version. **/
      DBEngineVersionDescription?: String;
      /** The default character set for new instances of this engine version, if the 
CharacterSetName parameter of the CreateDBInstance API is not specified. **/
      DefaultCharacterSet?: CharacterSet;
      /** A list of the character sets supported by this engine for the CharacterSetName 
parameter of the CreateDBInstance API. **/
      SupportedCharacterSets?: SupportedCharacterSetsList;
      /** A list of engine versions that this database engine version can be upgraded to. **/
      ValidUpgradeTarget?: ValidUpgradeTargetList;
    }
    export interface DBEngineVersionMessage {
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
      /** A list of DBEngineVersion elements. **/
      DBEngineVersions?: DBEngineVersionList;
    }
    export interface DBInstance {
      /** Contains a user-supplied database identifier. This identifier is the unique key
that identifies a DB instance. **/
      DBInstanceIdentifier?: String;
      /** Contains the name of the compute and memory capacity class of the DB instance. **/
      DBInstanceClass?: String;
      /** Provides the name of the database engine to be used for this DB instance. **/
      Engine?: String;
      /** Specifies the current state of this database. **/
      DBInstanceStatus?: String;
      /** Contains the master username for the DB instance. **/
      MasterUsername?: String;
      /** The meaning of this parameter differs according to the database engine you use.
For example, this value returns MySQL, MariaDB, or PostgreSQL information when
returning values from CreateDBInstanceReadReplica since Read Replicas are only
supported for these engines.

MySQL, MariaDB, SQL Server, PostgreSQL, Amazon Aurora 

Contains the name of the initial database of this instance that was provided at
create time, if one was specified when the DB instance was created. This same
name is returned for the life of the DB instance.

Type: String

Oracle 

Contains the Oracle System ID (SID) of the created DB instance. Not shown when
the returned parameters do not apply to an Oracle DB instance. **/
      DBName?: String;
      /** Specifies the connection endpoint. **/
      Endpoint?: Endpoint;
      /** Specifies the allocated storage size specified in gigabytes. **/
      AllocatedStorage?: Integer;
      /** Provides the date and time the DB instance was created. **/
      InstanceCreateTime?: TStamp;
      /** Specifies the daily time range during which automated backups are created if
automated backups are enabled, as determined by the BackupRetentionPeriod. **/
      PreferredBackupWindow?: String;
      /** Specifies the number of days for which automatic DB snapshots are retained. **/
      BackupRetentionPeriod?: Integer;
      /** Provides List of DB security group elements containing only 
DBSecurityGroup.Name and DBSecurityGroup.Status subelements. **/
      DBSecurityGroups?: DBSecurityGroupMembershipList;
      /** Provides List of VPC security group elements that the DB instance belongs to. **/
      VpcSecurityGroups?: VpcSecurityGroupMembershipList;
      /** Provides the list of DB parameter groups applied to this DB instance. **/
      DBParameterGroups?: DBParameterGroupStatusList;
      /** Specifies the name of the Availability Zone the DB instance is located in. **/
      AvailabilityZone?: String;
      /** Specifies information on the subnet group associated with the DB instance,
including the name, description, and subnets in the subnet group. **/
      DBSubnetGroup?: DBSubnetGroup;
      /** Specifies the weekly time range during which system maintenance can occur, in
Universal Coordinated Time (UTC). **/
      PreferredMaintenanceWindow?: String;
      /** Specifies that changes to the DB instance are pending. This element is only
included when changes are pending. Specific changes are identified by
subelements. **/
      PendingModifiedValues?: PendingModifiedValues;
      /** Specifies the latest time to which a database can be restored with point-in-time
restore. **/
      LatestRestorableTime?: TStamp;
      /** Specifies if the DB instance is a Multi-AZ deployment. **/
      MultiAZ?: Boolean;
      /** Indicates the database engine version. **/
      EngineVersion?: String;
      /** Indicates that minor version patches are applied automatically. **/
      AutoMinorVersionUpgrade?: Boolean;
      /** Contains the identifier of the source DB instance if this DB instance is a Read
Replica. **/
      ReadReplicaSourceDBInstanceIdentifier?: String;
      /** Contains one or more identifiers of the Read Replicas associated with this DB
instance. **/
      ReadReplicaDBInstanceIdentifiers?: ReadReplicaDBInstanceIdentifierList;
      /** License model information for this DB instance. **/
      LicenseModel?: String;
      /** Specifies the Provisioned IOPS (I/O operations per second) value. **/
      Iops?: IntegerOptional;
      /** Provides the list of option group memberships for this DB instance. **/
      OptionGroupMemberships?: OptionGroupMembershipList;
      /** If present, specifies the name of the character set that this instance is
associated with. **/
      CharacterSetName?: String;
      /** If present, specifies the name of the secondary Availability Zone for a DB
instance with multi-AZ support. **/
      SecondaryAvailabilityZone?: String;
      /** Specifies the accessibility options for the DB instance. A value of true
specifies an Internet-facing instance with a publicly resolvable DNS name, which
resolves to a public IP address. A value of false specifies an internal instance
with a DNS name that resolves to a private IP address.

Default: The default behavior varies depending on whether a VPC has been
requested or not. The following list shows the default behavior in each case.

&amp;#42;   Default VPC:true
 
 
&amp;#42;   VPC:false
 
 

If no DB subnet group has been specified as part of the request and the
PubliclyAccessible value has not been set, the DB instance will be publicly
accessible. If a specific DB subnet group has been specified as part of the
request and the PubliclyAccessible value has not been set, the DB instance will
be private. **/
      PubliclyAccessible?: Boolean;
      /** The status of a Read Replica. If the instance is not a Read Replica, this will
be blank. **/
      StatusInfos?: DBInstanceStatusInfoList;
      /** Specifies the storage type associated with DB instance. **/
      StorageType?: String;
      /** The ARN from the Key Store with which the instance is associated for TDE
encryption. **/
      TdeCredentialArn?: String;
      /** Specifies the port that the DB instance listens on. If the DB instance is part
of a DB cluster, this can be a different port than the DB cluster port. **/
      DbInstancePort?: Integer;
      /** If the DB instance is a member of a DB cluster, contains the name of the DB
cluster that the DB instance is a member of. **/
      DBClusterIdentifier?: String;
      /** Specifies whether the DB instance is encrypted. **/
      StorageEncrypted?: Boolean;
      /** If StorageEncrypted is true, the KMS key identifier for the encrypted DB
instance. **/
      KmsKeyId?: String;
      /** The region-unique, immutable identifier for the DB instance. This identifier is
found in AWS CloudTrail log entries whenever the KMS key for the DB instance is
accessed. **/
      DbiResourceId?: String;
      /** The identifier of the CA certificate for this DB instance. **/
      CACertificateIdentifier?: String;
      /** The Active Directory Domain membership records associated with the DB instance. **/
      DomainMemberships?: DomainMembershipList;
      /** Specifies whether tags are copied from the DB instance to snapshots of the DB
instance. **/
      CopyTagsToSnapshot?: Boolean;
      /** The interval, in seconds, between points when Enhanced Monitoring metrics are
collected for the DB instance. **/
      MonitoringInterval?: IntegerOptional;
      /** The Amazon Resource Name (ARN) of the Amazon CloudWatch Logs log stream that
receives the Enhanced Monitoring metrics data for the DB instance. **/
      EnhancedMonitoringResourceArn?: String;
      /** The ARN for the IAM role that permits RDS to send Enhanced Monitoring metrics to
CloudWatch Logs. **/
      MonitoringRoleArn?: String;
      /** A value that specifies the order in which an Aurora Replica is promoted to the
primary instance after a failure of the existing primary instance. For more
information, see Fault Tolerance for an Aurora DB Cluster
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Managing.html#Aurora.Managing.FaultTolerance]
. **/
      PromotionTier?: IntegerOptional;
      /** The Amazon Resource Name (ARN) for the DB instance. **/
      DBInstanceArn?: String;
    }
    export interface DBInstanceAlreadyExistsFault {
    }
    export interface DBInstanceMessage {
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords . **/
      Marker?: String;
      /** A list of DBInstance instances. **/
      DBInstances?: DBInstanceList;
    }
    export interface DBInstanceNotFoundFault {
    }
    export interface DBInstanceStatusInfo {
      /** This value is currently &quot;read replication.&quot; **/
      StatusType?: String;
      /** Boolean value that is true if the instance is operating normally, or false if
the instance is in an error state. **/
      Normal?: Boolean;
      /** Status of the DB instance. For a StatusType of read replica, the values can be
replicating, error, stopped, or terminated. **/
      Status?: String;
      /** Details of the error if there is an error for the instance. If the instance is
not in an error state, this value is blank. **/
      Message?: String;
    }
    export interface DBLogFileNotFoundFault {
    }
    export interface DBParameterGroup {
      /** Provides the name of the DB parameter group. **/
      DBParameterGroupName?: String;
      /** Provides the name of the DB parameter group family that this DB parameter group
is compatible with. **/
      DBParameterGroupFamily?: String;
      /** Provides the customer-specified description for this DB parameter group. **/
      Description?: String;
      /** The Amazon Resource Name (ARN) for the DB parameter group. **/
      DBParameterGroupArn?: String;
    }
    export interface DBParameterGroupAlreadyExistsFault {
    }
    export interface DBParameterGroupDetails {
      /** A list of Parameter values. **/
      Parameters?: ParametersList;
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
    }
    export interface DBParameterGroupNameMessage {
      /** Provides the name of the DB parameter group. **/
      DBParameterGroupName?: String;
    }
    export interface DBParameterGroupNotFoundFault {
    }
    export interface DBParameterGroupQuotaExceededFault {
    }
    export interface DBParameterGroupStatus {
      /** The name of the DP parameter group. **/
      DBParameterGroupName?: String;
      /** The status of parameter updates. **/
      ParameterApplyStatus?: String;
    }
    export interface DBParameterGroupsMessage {
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
      /** A list of DBParameterGroup instances. **/
      DBParameterGroups?: DBParameterGroupList;
    }
    export interface DBSecurityGroup {
      /** Provides the AWS ID of the owner of a specific DB security group. **/
      OwnerId?: String;
      /** Specifies the name of the DB security group. **/
      DBSecurityGroupName?: String;
      /** Provides the description of the DB security group. **/
      DBSecurityGroupDescription?: String;
      /** Provides the VpcId of the DB security group. **/
      VpcId?: String;
      /** Contains a list of EC2SecurityGroup elements. **/
      EC2SecurityGroups?: EC2SecurityGroupList;
      /** Contains a list of IPRange elements. **/
      IPRanges?: IPRangeList;
      /** The Amazon Resource Name (ARN) for the DB security group. **/
      DBSecurityGroupArn?: String;
    }
    export interface DBSecurityGroupAlreadyExistsFault {
    }
    export interface DBSecurityGroupMembership {
      /** The name of the DB security group. **/
      DBSecurityGroupName?: String;
      /** The status of the DB security group. **/
      Status?: String;
    }
    export interface DBSecurityGroupMessage {
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
      /** A list of DBSecurityGroup instances. **/
      DBSecurityGroups?: DBSecurityGroups;
    }
    export interface DBSecurityGroupNotFoundFault {
    }
    export interface DBSecurityGroupNotSupportedFault {
    }
    export interface DBSecurityGroupQuotaExceededFault {
    }
    export interface DBSnapshot {
      /** Specifies the identifier for the DB snapshot. **/
      DBSnapshotIdentifier?: String;
      /** Specifies the DB instance identifier of the DB instance this DB snapshot was
created from. **/
      DBInstanceIdentifier?: String;
      /** Provides the time when the snapshot was taken, in Universal Coordinated Time
(UTC). **/
      SnapshotCreateTime?: TStamp;
      /** Specifies the name of the database engine. **/
      Engine?: String;
      /** Specifies the allocated storage size in gigabytes (GB). **/
      AllocatedStorage?: Integer;
      /** Specifies the status of this DB snapshot. **/
      Status?: String;
      /** Specifies the port that the database engine was listening on at the time of the
snapshot. **/
      Port?: Integer;
      /** Specifies the name of the Availability Zone the DB instance was located in at
the time of the DB snapshot. **/
      AvailabilityZone?: String;
      /** Provides the VPC ID associated with the DB snapshot. **/
      VpcId?: String;
      /** Specifies the time when the snapshot was taken, in Universal Coordinated Time
(UTC). **/
      InstanceCreateTime?: TStamp;
      /** Provides the master username for the DB snapshot. **/
      MasterUsername?: String;
      /** Specifies the version of the database engine. **/
      EngineVersion?: String;
      /** License model information for the restored DB instance. **/
      LicenseModel?: String;
      /** Provides the type of the DB snapshot. **/
      SnapshotType?: String;
      /** Specifies the Provisioned IOPS (I/O operations per second) value of the DB
instance at the time of the snapshot. **/
      Iops?: IntegerOptional;
      /** Provides the option group name for the DB snapshot. **/
      OptionGroupName?: String;
      /** The percentage of the estimated data that has been transferred. **/
      PercentProgress?: Integer;
      /** The region that the DB snapshot was created in or copied from. **/
      SourceRegion?: String;
      /** The DB snapshot Arn that the DB snapshot was copied from. It only has value in
case of cross customer or cross region copy. **/
      SourceDBSnapshotIdentifier?: String;
      /** Specifies the storage type associated with DB Snapshot. **/
      StorageType?: String;
      /** The ARN from the Key Store with which to associate the instance for TDE
encryption. **/
      TdeCredentialArn?: String;
      /** Specifies whether the DB snapshot is encrypted. **/
      Encrypted?: Boolean;
      /** If Encrypted is true, the KMS key identifier for the encrypted DB snapshot. **/
      KmsKeyId?: String;
      /** The Amazon Resource Name (ARN) for the DB snapshot. **/
      DBSnapshotArn?: String;
    }
    export interface DBSnapshotAlreadyExistsFault {
    }
    export interface DBSnapshotAttribute {
      /** The name of the manual DB snapshot attribute.

The attribute named restore refers to the list of AWS accounts that have
permission to copy or restore the manual DB cluster snapshot. For more
information, see the ModifyDBSnapshotAttribute API action. **/
      AttributeName?: String;
      /** The value or values for the manual DB snapshot attribute.

If the AttributeName field is set to restore, then this element returns a list
of IDs of the AWS accounts that are authorized to copy or restore the manual DB
snapshot. If a value of all is in the list, then the manual DB snapshot is
public and available for any AWS account to copy or restore. **/
      AttributeValues?: AttributeValueList;
    }
    export interface DBSnapshotAttributesResult {
      /** The identifier of the manual DB snapshot that the attributes apply to. **/
      DBSnapshotIdentifier?: String;
      /** The list of attributes and values for the manual DB snapshot. **/
      DBSnapshotAttributes?: DBSnapshotAttributeList;
    }
    export interface DBSnapshotMessage {
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
      /** A list of DBSnapshot instances. **/
      DBSnapshots?: DBSnapshotList;
    }
    export interface DBSnapshotNotFoundFault {
    }
    export interface DBSubnetGroup {
      /** The name of the DB subnet group. **/
      DBSubnetGroupName?: String;
      /** Provides the description of the DB subnet group. **/
      DBSubnetGroupDescription?: String;
      /** Provides the VpcId of the DB subnet group. **/
      VpcId?: String;
      /** Provides the status of the DB subnet group. **/
      SubnetGroupStatus?: String;
      /** Contains a list of Subnet elements. **/
      Subnets?: SubnetList;
      /** The Amazon Resource Name (ARN) for the DB subnet group. **/
      DBSubnetGroupArn?: String;
    }
    export interface DBSubnetGroupAlreadyExistsFault {
    }
    export interface DBSubnetGroupDoesNotCoverEnoughAZs {
    }
    export interface DBSubnetGroupMessage {
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
      /** A list of DBSubnetGroup instances. **/
      DBSubnetGroups?: DBSubnetGroups;
    }
    export interface DBSubnetGroupNotAllowedFault {
    }
    export interface DBSubnetGroupNotFoundFault {
    }
    export interface DBSubnetGroupQuotaExceededFault {
    }
    export interface DBSubnetQuotaExceededFault {
    }
    export interface DBUpgradeDependencyFailureFault {
    }
    export interface DeleteDBClusterMessage {
      /** The DB cluster identifier for the DB cluster to be deleted. This parameter isn&#x27;t
case-sensitive.

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      DBClusterIdentifier: String;
      /** Determines whether a final DB cluster snapshot is created before the DB cluster
is deleted. If true is specified, no DB cluster snapshot is created. If false is
specified, a DB cluster snapshot is created before the DB cluster is deleted. 

You must specify a FinalDBSnapshotIdentifier parameter if SkipFinalSnapshot is 
false.

Default: false **/
      SkipFinalSnapshot?: Boolean;
      /** The DB cluster snapshot identifier of the new DB cluster snapshot created when 
SkipFinalSnapshot is set to false. 

Specifying this parameter and also setting the SkipFinalShapshot parameter to
true results in an error. 

Constraints:

&amp;#42;  Must be 1 to 255 alphanumeric characters
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      FinalDBSnapshotIdentifier?: String;
    }
    export interface DeleteDBClusterParameterGroupMessage {
      /** The name of the DB cluster parameter group.

Constraints:

&amp;#42;  Must be the name of an existing DB cluster parameter group.
 
 
&amp;#42;  You cannot delete a default DB cluster parameter group.
 
 
&amp;#42;  Cannot be associated with any DB clusters. **/
      DBClusterParameterGroupName: String;
    }
    export interface DeleteDBClusterResult {
      DBCluster?: DBCluster;
    }
    export interface DeleteDBClusterSnapshotMessage {
      /** The identifier of the DB cluster snapshot to delete.

Constraints: Must be the name of an existing DB cluster snapshot in the 
available state. **/
      DBClusterSnapshotIdentifier: String;
    }
    export interface DeleteDBClusterSnapshotResult {
      DBClusterSnapshot?: DBClusterSnapshot;
    }
    export interface DeleteDBInstanceMessage {
      /** The DB instance identifier for the DB instance to be deleted. This parameter
isn&#x27;t case-sensitive.

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      DBInstanceIdentifier: String;
      /** Determines whether a final DB snapshot is created before the DB instance is
deleted. If true is specified, no DBSnapshot is created. If false is specified,
a DB snapshot is created before the DB instance is deleted. 

Note that when a DB instance is in a failure state and has a status of &#x27;failed&#x27;,
&#x27;incompatible-restore&#x27;, or &#x27;incompatible-network&#x27;, it can only be deleted when
the SkipFinalSnapshot parameter is set to &quot;true&quot;.

Specify true when deleting a Read Replica.

The FinalDBSnapshotIdentifier parameter must be specified if SkipFinalSnapshot
is false.

Default: false **/
      SkipFinalSnapshot?: Boolean;
      /** The DBSnapshotIdentifier of the new DBSnapshot created when SkipFinalSnapshot
is set to false. 

Specifying this parameter and also setting the SkipFinalShapshot parameter to
true results in an error.

Constraints:

&amp;#42;  Must be 1 to 255 alphanumeric characters
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens
 
 
&amp;#42;  Cannot be specified when deleting a Read Replica. **/
      FinalDBSnapshotIdentifier?: String;
    }
    export interface DeleteDBInstanceResult {
      DBInstance?: DBInstance;
    }
    export interface DeleteDBParameterGroupMessage {
      /** The name of the DB parameter group.

Constraints:

&amp;#42;  Must be the name of an existing DB parameter group
 
 
&amp;#42;  You cannot delete a default DB parameter group
 
 
&amp;#42;  Cannot be associated with any DB instances **/
      DBParameterGroupName: String;
    }
    export interface DeleteDBSecurityGroupMessage {
      /** The name of the DB security group to delete.

You cannot delete the default DB security group.

Constraints:

&amp;#42;  Must be 1 to 255 alphanumeric characters
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens
 
 
&amp;#42;  Must not be &quot;Default&quot; **/
      DBSecurityGroupName: String;
    }
    export interface DeleteDBSnapshotMessage {
      /** The DBSnapshot identifier.

Constraints: Must be the name of an existing DB snapshot in the available state. **/
      DBSnapshotIdentifier: String;
    }
    export interface DeleteDBSnapshotResult {
      DBSnapshot?: DBSnapshot;
    }
    export interface DeleteDBSubnetGroupMessage {
      /** The name of the database subnet group to delete.

You cannot delete the default subnet group.

Constraints:

Constraints: Must contain no more than 255 alphanumeric characters, periods,
underscores, spaces, or hyphens. Must not be default.

Example: mySubnetgroup **/
      DBSubnetGroupName: String;
    }
    export interface DeleteEventSubscriptionMessage {
      /** The name of the RDS event notification subscription you want to delete. **/
      SubscriptionName: String;
    }
    export interface DeleteEventSubscriptionResult {
      EventSubscription?: EventSubscription;
    }
    export interface DeleteOptionGroupMessage {
      /** The name of the option group to be deleted.

You cannot delete default option groups. **/
      OptionGroupName: String;
    }
    export interface DescribeAccountAttributesMessage {
    }
    export interface DescribeCertificatesMessage {
      /** The user-supplied certificate identifier. If this parameter is specified,
information for only the identified certificate is returned. This parameter
isn&#x27;t case-sensitive.

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      CertificateIdentifier?: String;
      /** This parameter is not currently supported. **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous DescribeCertificates 
request. If this parameter is specified, the response includes only records
beyond the marker, up to the value specified by MaxRecords. **/
      Marker?: String;
    }
    export interface DescribeDBClusterParameterGroupsMessage {
      /** The name of a specific DB cluster parameter group to return details for.

Constraints:

&amp;#42;  Must be 1 to 255 alphanumeric characters
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      DBClusterParameterGroupName?: String;
      /** This parameter is not currently supported. **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous 
DescribeDBClusterParameterGroups request. If this parameter is specified, the
response includes only records beyond the marker, up to the value specified by 
MaxRecords. **/
      Marker?: String;
    }
    export interface DescribeDBClusterParametersMessage {
      /** The name of a specific DB cluster parameter group to return parameter details
for.

Constraints:

&amp;#42;  Must be 1 to 255 alphanumeric characters
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      DBClusterParameterGroupName: String;
      /** A value that indicates to return only parameters for a specific source.
Parameter sources can be engine, service, or customer. **/
      Source?: String;
      /** This parameter is not currently supported. **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous DescribeDBClusterParameters 
request. If this parameter is specified, the response includes only records
beyond the marker, up to the value specified by MaxRecords. **/
      Marker?: String;
    }
    export interface DescribeDBClusterSnapshotAttributesMessage {
      /** The identifier for the DB cluster snapshot to describe the attributes for. **/
      DBClusterSnapshotIdentifier: String;
    }
    export interface DescribeDBClusterSnapshotAttributesResult {
      DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
    }
    export interface DescribeDBClusterSnapshotsMessage {
      /** The ID of the DB cluster to retrieve the list of DB cluster snapshots for. This
parameter cannot be used in conjunction with the DBClusterSnapshotIdentifier 
parameter. This parameter is not case-sensitive. 

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      DBClusterIdentifier?: String;
      /** A specific DB cluster snapshot identifier to describe. This parameter cannot be
used in conjunction with the DBClusterIdentifier parameter. This value is stored
as a lowercase string. 

Constraints:

&amp;#42;  Must be 1 to 255 alphanumeric characters
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens
 
 
&amp;#42;  If this identifier is for an automated snapshot, the SnapshotType parameter
 must also be specified. **/
      DBClusterSnapshotIdentifier?: String;
      /** The type of DB cluster snapshots to be returned. You can specify one of the
following values:

&amp;#42;   automated - Return all DB cluster snapshots that have been automatically
 taken by Amazon RDS for my AWS account.
 
 
&amp;#42;   manual - Return all DB cluster snapshots that have been taken by my AWS
 account.
 
 
&amp;#42;   shared - Return all manual DB cluster snapshots that have been shared to my
 AWS account.
 
 
&amp;#42;   public - Return all DB cluster snapshots that have been marked as public.
 
 

If you don&#x27;t specify a SnapshotType value, then both automated and manual DB
cluster snapshots are returned. You can include shared DB cluster snapshots with
these results by setting the IncludeShared parameter to true. You can include
public DB cluster snapshots with these results by setting the IncludePublic 
parameter to true.

The IncludeShared and IncludePublic parameters don&#x27;t apply for SnapshotType 
values of manual or automated. The IncludePublic parameter doesn&#x27;t apply when 
SnapshotType is set to shared. The IncludeShared parameter doesn&#x27;t apply when 
SnapshotType is set to public. **/
      SnapshotType?: String;
      /** This parameter is not currently supported. **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous DescribeDBClusterSnapshots 
request. If this parameter is specified, the response includes only records
beyond the marker, up to the value specified by MaxRecords. **/
      Marker?: String;
      /** Set this value to true to include shared manual DB cluster snapshots from other
AWS accounts that this AWS account has been given permission to copy or restore,
otherwise set this value to false. The default is false.

You can give an AWS account permission to restore a manual DB cluster snapshot
from another AWS account by the ModifyDBClusterSnapshotAttribute API action. **/
      IncludeShared?: Boolean;
      /** Set this value to true to include manual DB cluster snapshots that are public
and can be copied or restored by any AWS account, otherwise set this value to 
false. The default is false. The default is false.

You can share a manual DB cluster snapshot as public by using the 
ModifyDBClusterSnapshotAttribute API action. **/
      IncludePublic?: Boolean;
    }
    export interface DescribeDBClustersMessage {
      /** The user-supplied DB cluster identifier. If this parameter is specified,
information from only the specific DB cluster is returned. This parameter isn&#x27;t
case-sensitive.

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      DBClusterIdentifier?: String;
      /** This parameter is not currently supported. **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous DescribeDBClusters request.
If this parameter is specified, the response includes only records beyond the
marker, up to the value specified by MaxRecords. **/
      Marker?: String;
    }
    export interface DescribeDBEngineVersionsMessage {
      /** The database engine to return. **/
      Engine?: String;
      /** The database engine version to return.

Example: 5.1.49 **/
      EngineVersion?: String;
      /** The name of a specific DB parameter group family to return details for.

Constraints:

&amp;#42;  Must be 1 to 255 alphanumeric characters
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      DBParameterGroupFamily?: String;
      /** Not currently supported. **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more than the 
MaxRecords value is available, a pagination token called a marker is included in
the response so that the following results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
      /** Indicates that only the default version of the specified engine or engine and
major version combination is returned. **/
      DefaultOnly?: Boolean;
      /** If this parameter is specified, and if the requested engine supports the
CharacterSetName parameter for CreateDBInstance, the response includes a list of
supported character sets for each engine version. **/
      ListSupportedCharacterSets?: BooleanOptional;
    }
    export interface DescribeDBInstancesMessage {
      /** The user-supplied instance identifier. If this parameter is specified,
information from only the specific DB instance is returned. This parameter isn&#x27;t
case-sensitive.

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      DBInstanceIdentifier?: String;
      /** This parameter is not currently supported. **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous DescribeDBInstances 
request. If this parameter is specified, the response includes only records
beyond the marker, up to the value specified by MaxRecords. **/
      Marker?: String;
    }
    export interface DescribeDBLogFilesDetails {
      /** The name of the log file for the specified DB instance. **/
      LogFileName?: String;
      /** A POSIX timestamp when the last log entry was written. **/
      LastWritten?: Long;
      /** The size, in bytes, of the log file for the specified DB instance. **/
      Size?: Long;
    }
    export interface DescribeDBLogFilesMessage {
      /** The customer-assigned name of the DB instance that contains the log files you
want to list.

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      DBInstanceIdentifier: String;
      /** Filters the available log files for log file names that contain the specified
string. **/
      FilenameContains?: String;
      /** Filters the available log files for files written since the specified date, in
POSIX timestamp format with milliseconds. **/
      FileLastWritten?: Long;
      /** Filters the available log files for files larger than the specified size. **/
      FileSize?: Long;
      /** This parameter is not currently supported. **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. **/
      MaxRecords?: IntegerOptional;
      /** The pagination token provided in the previous request. If this parameter is
specified the response includes only records beyond the marker, up to
MaxRecords. **/
      Marker?: String;
    }
    export interface DescribeDBLogFilesResponse {
      /** The DB log files returned. **/
      DescribeDBLogFiles?: DescribeDBLogFilesList;
      /** A pagination token that can be used in a subsequent DescribeDBLogFiles request. **/
      Marker?: String;
    }
    export interface DescribeDBParameterGroupsMessage {
      /** The name of a specific DB parameter group to return details for.

Constraints:

&amp;#42;  Must be 1 to 255 alphanumeric characters
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      DBParameterGroupName?: String;
      /** This parameter is not currently supported. **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous DescribeDBParameterGroups 
request. If this parameter is specified, the response includes only records
beyond the marker, up to the value specified by MaxRecords. **/
      Marker?: String;
    }
    export interface DescribeDBParametersMessage {
      /** The name of a specific DB parameter group to return details for.

Constraints:

&amp;#42;  Must be 1 to 255 alphanumeric characters
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      DBParameterGroupName: String;
      /** The parameter types to return.

Default: All parameter types returned

Valid Values: user | system | engine-default **/
      Source?: String;
      /** This parameter is not currently supported. **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous DescribeDBParameters 
request. If this parameter is specified, the response includes only records
beyond the marker, up to the value specified by MaxRecords. **/
      Marker?: String;
    }
    export interface DescribeDBSecurityGroupsMessage {
      /** The name of the DB security group to return details for. **/
      DBSecurityGroupName?: String;
      /** This parameter is not currently supported. **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous DescribeDBSecurityGroups 
request. If this parameter is specified, the response includes only records
beyond the marker, up to the value specified by MaxRecords. **/
      Marker?: String;
    }
    export interface DescribeDBSnapshotAttributesMessage {
      /** The identifier for the DB snapshot to describe the attributes for. **/
      DBSnapshotIdentifier: String;
    }
    export interface DescribeDBSnapshotAttributesResult {
      DBSnapshotAttributesResult?: DBSnapshotAttributesResult;
    }
    export interface DescribeDBSnapshotsMessage {
      /** The ID of the DB instance to retrieve the list of DB snapshots for. This
parameter cannot be used in conjunction with DBSnapshotIdentifier. This
parameter is not case-sensitive. 

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      DBInstanceIdentifier?: String;
      /** A specific DB snapshot identifier to describe. This parameter cannot be used in
conjunction with DBInstanceIdentifier. This value is stored as a lowercase
string. 

Constraints:

&amp;#42;  Must be 1 to 255 alphanumeric characters.
 
 
&amp;#42;  First character must be a letter.
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens.
 
 
&amp;#42;  If this identifier is for an automated snapshot, the SnapshotType parameter
 must also be specified. **/
      DBSnapshotIdentifier?: String;
      /** The type of snapshots to be returned. You can specify one of the following
values:

&amp;#42;   automated - Return all DB snapshots that have been automatically taken by
 Amazon RDS for my AWS account.
 
 
&amp;#42;   manual - Return all DB snapshots that have been taken by my AWS account.
 
 
&amp;#42;   shared - Return all manual DB snapshots that have been shared to my AWS
 account.
 
 
&amp;#42;   public - Return all DB snapshots that have been marked as public.
 
 

If you don&#x27;t specify a SnapshotType value, then both automated and manual
snapshots are returned. Shared and public DB snapshots are not included in the
returned results by default. You can include shared snapshots with these results
by setting the IncludeShared parameter to true. You can include public snapshots
with these results by setting the IncludePublic parameter to true.

The IncludeShared and IncludePublic parameters don&#x27;t apply for SnapshotType 
values of manual or automated. The IncludePublic parameter doesn&#x27;t apply when 
SnapshotType is set to shared. The IncludeShared parameter doesn&#x27;t apply when 
SnapshotType is set to public. **/
      SnapshotType?: String;
      /** This parameter is not currently supported. **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous DescribeDBSnapshots 
request. If this parameter is specified, the response includes only records
beyond the marker, up to the value specified by MaxRecords. **/
      Marker?: String;
      /** Set this value to true to include shared manual DB snapshots from other AWS
accounts that this AWS account has been given permission to copy or restore,
otherwise set this value to false. The default is false.

You can give an AWS account permission to restore a manual DB snapshot from
another AWS account by using the ModifyDBSnapshotAttribute API action. **/
      IncludeShared?: Boolean;
      /** Set this value to true to include manual DB snapshots that are public and can be
copied or restored by any AWS account, otherwise set this value to false. The
default is false.

You can share a manual DB snapshot as public by using the 
ModifyDBSnapshotAttribute API. **/
      IncludePublic?: Boolean;
    }
    export interface DescribeDBSubnetGroupsMessage {
      /** The name of the DB subnet group to return details for. **/
      DBSubnetGroupName?: String;
      /** This parameter is not currently supported. **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous DescribeDBSubnetGroups
request. If this parameter is specified, the response includes only records
beyond the marker, up to the value specified by MaxRecords. **/
      Marker?: String;
    }
    export interface DescribeEngineDefaultClusterParametersMessage {
      /** The name of the DB cluster parameter group family to return engine parameter
information for. **/
      DBParameterGroupFamily: String;
      /** This parameter is not currently supported. **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous 
DescribeEngineDefaultClusterParameters request. If this parameter is specified,
the response includes only records beyond the marker, up to the value specified
by MaxRecords. **/
      Marker?: String;
    }
    export interface DescribeEngineDefaultClusterParametersResult {
      EngineDefaults?: EngineDefaults;
    }
    export interface DescribeEngineDefaultParametersMessage {
      /** The name of the DB parameter group family. **/
      DBParameterGroupFamily: String;
      /** Not currently supported. **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous 
DescribeEngineDefaultParameters request. If this parameter is specified, the
response includes only records beyond the marker, up to the value specified by 
MaxRecords. **/
      Marker?: String;
    }
    export interface DescribeEngineDefaultParametersResult {
      EngineDefaults?: EngineDefaults;
    }
    export interface DescribeEventCategoriesMessage {
      /** The type of source that will be generating the events.

Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot **/
      SourceType?: String;
      /** This parameter is not currently supported. **/
      Filters?: FilterList;
    }
    export interface DescribeEventSubscriptionsMessage {
      /** The name of the RDS event notification subscription you want to describe. **/
      SubscriptionName?: String;
      /** This parameter is not currently supported. **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous
DescribeOrderableDBInstanceOptions request. If this parameter is specified, the
response includes only records beyond the marker, up to the value specified by 
MaxRecords . **/
      Marker?: String;
    }
    export interface DescribeEventsMessage {
      /** The identifier of the event source for which events will be returned. If not
specified, then all sources are included in the response.

Constraints:

&amp;#42;  If SourceIdentifier is supplied, SourceType must also be provided.
 
 
&amp;#42;  If the source type is DBInstance, then a DBInstanceIdentifier must be
 supplied.
 
 
&amp;#42;  If the source type is DBSecurityGroup, a DBSecurityGroupName must be
 supplied.
 
 
&amp;#42;  If the source type is DBParameterGroup, a DBParameterGroupName must be
 supplied.
 
 
&amp;#42;  If the source type is DBSnapshot, a DBSnapshotIdentifier must be supplied.
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens. **/
      SourceIdentifier?: String;
      /** The event source to retrieve events for. If no value is specified, all events
are returned. **/
      SourceType?: SourceType;
      /** The beginning of the time interval to retrieve events for, specified in ISO
8601 format. For more information about ISO 8601, go to the ISO8601 Wikipedia
page. [http://en.wikipedia.org/wiki/ISO_8601] 

Example: 2009-07-08T18:00Z **/
      StartTime?: TStamp;
      /** The end of the time interval for which to retrieve events, specified in ISO
8601 format. For more information about ISO 8601, go to the ISO8601 Wikipedia
page. [http://en.wikipedia.org/wiki/ISO_8601] 

Example: 2009-07-08T18:00Z **/
      EndTime?: TStamp;
      /** The number of minutes to retrieve events for.

Default: 60 **/
      Duration?: IntegerOptional;
      /** A list of event categories that trigger notifications for a event notification
subscription. **/
      EventCategories?: EventCategoriesList;
      /** This parameter is not currently supported. **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous DescribeEvents request. If
this parameter is specified, the response includes only records beyond the
marker, up to the value specified by MaxRecords. **/
      Marker?: String;
    }
    export interface DescribeOptionGroupOptionsMessage {
      /** A required parameter. Options available for the given engine name will be
described. **/
      EngineName: String;
      /** If specified, filters the results to include only options for the specified
major engine version. **/
      MajorEngineVersion?: String;
      /** This parameter is not currently supported. **/
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
    export interface DescribeOptionGroupsMessage {
      /** The name of the option group to describe. Cannot be supplied together with
EngineName or MajorEngineVersion. **/
      OptionGroupName?: String;
      /** This parameter is not currently supported. **/
      Filters?: FilterList;
      /** An optional pagination token provided by a previous DescribeOptionGroups
request. If this parameter is specified, the response includes only records
beyond the marker, up to the value specified by MaxRecords. **/
      Marker?: String;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** Filters the list of option groups to only include groups associated with a
specific database engine. **/
      EngineName?: String;
      /** Filters the list of option groups to only include groups associated with a
specific database engine version. If specified, then EngineName must also be
specified. **/
      MajorEngineVersion?: String;
    }
    export interface DescribeOrderableDBInstanceOptionsMessage {
      /** The name of the engine to retrieve DB instance options for. **/
      Engine: String;
      /** The engine version filter value. Specify this parameter to show only the
available offerings matching the specified engine version. **/
      EngineVersion?: String;
      /** The DB instance class filter value. Specify this parameter to show only the
available offerings matching the specified DB instance class. **/
      DBInstanceClass?: String;
      /** The license model filter value. Specify this parameter to show only the
available offerings matching the specified license model. **/
      LicenseModel?: String;
      /** The VPC filter value. Specify this parameter to show only the available VPC or
non-VPC offerings. **/
      Vpc?: BooleanOptional;
      /** This parameter is not currently supported. **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous
DescribeOrderableDBInstanceOptions request. If this parameter is specified, the
response includes only records beyond the marker, up to the value specified by 
MaxRecords . **/
      Marker?: String;
    }
    export interface DescribePendingMaintenanceActionsMessage {
      /** The ARN of a resource to return pending maintenance actions for. **/
      ResourceIdentifier?: String;
      /** A filter that specifies one or more resources to return pending maintenance
actions for.

Supported filters:

&amp;#42;   db-instance-id - Accepts DB instance identifiers and DB instance Amazon
 Resource Names (ARNs). The results list will only include pending maintenance
 actions for the DB instances identified by these ARNs. **/
      Filters?: FilterList;
      /** An optional pagination token provided by a previous 
DescribePendingMaintenanceActions request. If this parameter is specified, the
response includes only records beyond the marker, up to a number of records
specified by MaxRecords. **/
      Marker?: String;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
    }
    export interface DescribeReservedDBInstancesMessage {
      /** The reserved DB instance identifier filter value. Specify this parameter to show
only the reservation that matches the specified reservation ID. **/
      ReservedDBInstanceId?: String;
      /** The offering identifier filter value. Specify this parameter to show only
purchased reservations matching the specified offering identifier. **/
      ReservedDBInstancesOfferingId?: String;
      /** The DB instance class filter value. Specify this parameter to show only those
reservations matching the specified DB instances class. **/
      DBInstanceClass?: String;
      /** The duration filter value, specified in years or seconds. Specify this parameter
to show only reservations for this duration.

Valid Values: 1 | 3 | 31536000 | 94608000 **/
      Duration?: String;
      /** The product description filter value. Specify this parameter to show only those
reservations matching the specified product description. **/
      ProductDescription?: String;
      /** The offering type filter value. Specify this parameter to show only the
available offerings matching the specified offering type.

Valid Values: &quot;Partial Upfront&quot; | &quot;All Upfront&quot; | &quot;No Upfront&quot; **/
      OfferingType?: String;
      /** The Multi-AZ filter value. Specify this parameter to show only those
reservations matching the specified Multi-AZ parameter. **/
      MultiAZ?: BooleanOptional;
      /** This parameter is not currently supported. **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more than the 
MaxRecords value is available, a pagination token called a marker is included in
the response so that the following results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
    }
    export interface DescribeReservedDBInstancesOfferingsMessage {
      /** The offering identifier filter value. Specify this parameter to show only the
available offering that matches the specified reservation identifier.

Example: 438012d3-4052-4cc7-b2e3-8d3372e0e706 **/
      ReservedDBInstancesOfferingId?: String;
      /** The DB instance class filter value. Specify this parameter to show only the
available offerings matching the specified DB instance class. **/
      DBInstanceClass?: String;
      /** Duration filter value, specified in years or seconds. Specify this parameter to
show only reservations for this duration.

Valid Values: 1 | 3 | 31536000 | 94608000 **/
      Duration?: String;
      /** Product description filter value. Specify this parameter to show only the
available offerings matching the specified product description. **/
      ProductDescription?: String;
      /** The offering type filter value. Specify this parameter to show only the
available offerings matching the specified offering type.

Valid Values: &quot;Partial Upfront&quot; | &quot;All Upfront&quot; | &quot;No Upfront&quot; **/
      OfferingType?: String;
      /** The Multi-AZ filter value. Specify this parameter to show only the available
offerings matching the specified Multi-AZ parameter. **/
      MultiAZ?: BooleanOptional;
      /** This parameter is not currently supported. **/
      Filters?: FilterList;
      /** The maximum number of records to include in the response. If more than the 
MaxRecords value is available, a pagination token called a marker is included in
the response so that the following results can be retrieved. 

Default: 100

Constraints: Minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
    }
    export interface DomainMembership {
      /** The identifier of the Active Directory Domain. **/
      Domain?: String;
      /** The status of the DB instance&#x27;s Active Directory Domain membership, such as
joined, pending-join, failed etc). **/
      Status?: String;
      /** The fully qualified domain name of the Active Directory Domain. **/
      FQDN?: String;
      /** The name of the IAM role to be used when making API calls to the Directory
Service. **/
      IAMRoleName?: String;
    }
    export interface DomainNotFoundFault {
    }
    export interface DownloadDBLogFilePortionDetails {
      /** Entries from the specified log file. **/
      LogFileData?: String;
      /** A pagination token that can be used in a subsequent DownloadDBLogFilePortion
request. **/
      Marker?: String;
      /** Boolean value that if true, indicates there is more data to be downloaded. **/
      AdditionalDataPending?: Boolean;
    }
    export interface DownloadDBLogFilePortionMessage {
      /** The customer-assigned name of the DB instance that contains the log files you
want to list.

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      DBInstanceIdentifier: String;
      /** The name of the log file to be downloaded. **/
      LogFileName: String;
      /** The pagination token provided in the previous request or &quot;0&quot;. If the Marker
parameter is specified the response includes only records beyond the marker
until the end of the file or up to NumberOfLines. **/
      Marker?: String;
      /** The number of lines to download. If the number of lines specified results in a
file over 1 MB in size, the file will be truncated at 1 MB in size.

If the NumberOfLines parameter is specified, then the block of lines returned
can be from the beginning or the end of the log file, depending on the value of
the Marker parameter.

&amp;#42;  If neither Marker or NumberOfLines are specified, the entire log file is
 returned up to a maximum of 10000 lines, starting with the most recent log
 entries first.
 
 
&amp;#42;  If NumberOfLines is specified and Marker is not specified, then the most
 recent lines from the end of the log file are returned.
 
 
&amp;#42;  If Marker is specified as &quot;0&quot;, then the specified number of lines from the
 beginning of the log file are returned.
 
 
&amp;#42;  You can download the log file in blocks of lines by specifying the size of
 the block using the NumberOfLines parameter, and by specifying a value of &quot;0&quot;
 for the Marker parameter in your first request. Include the Marker value
 returned in the response as the Marker value for the next request, continuing
 until the AdditionalDataPending response element returns false. **/
      NumberOfLines?: Integer;
    }
    export interface EC2SecurityGroup {
      /** Provides the status of the EC2 security group. Status can be &quot;authorizing&quot;,
&quot;authorized&quot;, &quot;revoking&quot;, and &quot;revoked&quot;. **/
      Status?: String;
      /** Specifies the name of the EC2 security group. **/
      EC2SecurityGroupName?: String;
      /** Specifies the id of the EC2 security group. **/
      EC2SecurityGroupId?: String;
      /** Specifies the AWS ID of the owner of the EC2 security group specified in the 
EC2SecurityGroupName field. **/
      EC2SecurityGroupOwnerId?: String;
    }
    export interface Endpoint {
      /** Specifies the DNS address of the DB instance. **/
      Address?: String;
      /** Specifies the port that the database engine is listening on. **/
      Port?: Integer;
      /** Specifies the ID that Amazon Route 53 assigns when you create a hosted zone. **/
      HostedZoneId?: String;
    }
    export interface EngineDefaults {
      /** Specifies the name of the DB parameter group family that the engine default
parameters apply to. **/
      DBParameterGroupFamily?: String;
      /** An optional pagination token provided by a previous EngineDefaults request. If
this parameter is specified, the response includes only records beyond the
marker, up to the value specified by MaxRecords . **/
      Marker?: String;
      /** Contains a list of engine default parameters. **/
      Parameters?: ParametersList;
    }
    export interface Event {
      /** Provides the identifier for the source of the event. **/
      SourceIdentifier?: String;
      /** Specifies the source type for this event. **/
      SourceType?: SourceType;
      /** Provides the text of this event. **/
      Message?: String;
      /** Specifies the category for the event. **/
      EventCategories?: EventCategoriesList;
      /** Specifies the date and time of the event. **/
      Date?: TStamp;
      /** The Amazon Resource Name (ARN) for the event. **/
      SourceArn?: String;
    }
    export interface EventCategoriesMap {
      /** The source type that the returned categories belong to **/
      SourceType?: String;
      /** The event categories for the specified source type **/
      EventCategories?: EventCategoriesList;
    }
    export interface EventCategoriesMessage {
      /** A list of EventCategoriesMap data types. **/
      EventCategoriesMapList?: EventCategoriesMapList;
    }
    export interface EventSubscription {
      /** The AWS customer account associated with the RDS event notification
subscription. **/
      CustomerAwsId?: String;
      /** The RDS event notification subscription Id. **/
      CustSubscriptionId?: String;
      /** The topic ARN of the RDS event notification subscription. **/
      SnsTopicArn?: String;
      /** The status of the RDS event notification subscription.

Constraints:

Can be one of the following: creating | modifying | deleting | active |
no-permission | topic-not-exist

The status &quot;no-permission&quot; indicates that RDS no longer has permission to post
to the SNS topic. The status &quot;topic-not-exist&quot; indicates that the topic was
deleted after the subscription was created. **/
      Status?: String;
      /** The time the RDS event notification subscription was created. **/
      SubscriptionCreationTime?: String;
      /** The source type for the RDS event notification subscription. **/
      SourceType?: String;
      /** A list of source IDs for the RDS event notification subscription. **/
      SourceIdsList?: SourceIdsList;
      /** A list of event categories for the RDS event notification subscription. **/
      EventCategoriesList?: EventCategoriesList;
      /** A Boolean value indicating if the subscription is enabled. True indicates the
subscription is enabled. **/
      Enabled?: Boolean;
      /** The Amazon Resource Name (ARN) for the event subscription. **/
      EventSubscriptionArn?: String;
    }
    export interface EventSubscriptionQuotaExceededFault {
    }
    export interface EventSubscriptionsMessage {
      /** An optional pagination token provided by a previous
DescribeOrderableDBInstanceOptions request. If this parameter is specified, the
response includes only records beyond the marker, up to the value specified by 
MaxRecords. **/
      Marker?: String;
      /** A list of EventSubscriptions data types. **/
      EventSubscriptionsList?: EventSubscriptionsList;
    }
    export interface EventsMessage {
      /** An optional pagination token provided by a previous Events request. If this
parameter is specified, the response includes only records beyond the marker, up
to the value specified by MaxRecords . **/
      Marker?: String;
      /** A list of Event instances. **/
      Events?: EventList;
    }
    export interface FailoverDBClusterMessage {
      /** A DB cluster identifier to force a failover for. This parameter is not
case-sensitive.

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      DBClusterIdentifier?: String;
      /** The name of the instance to promote to the primary instance.

You must specify the instance identifier for an Aurora Replica in the DB
cluster. For example, mydbcluster-replica1. **/
      TargetDBInstanceIdentifier?: String;
    }
    export interface FailoverDBClusterResult {
      DBCluster?: DBCluster;
    }
    export interface Filter {
      /** This parameter is not currently supported. **/
      Name: String;
      /** This parameter is not currently supported. **/
      Values: FilterValueList;
    }
    export interface IPRange {
      /** Specifies the status of the IP range. Status can be &quot;authorizing&quot;, &quot;authorized&quot;,
&quot;revoking&quot;, and &quot;revoked&quot;. **/
      Status?: String;
      /** Specifies the IP range. **/
      CIDRIP?: String;
    }
    export interface InstanceQuotaExceededFault {
    }
    export interface InsufficientDBClusterCapacityFault {
    }
    export interface InsufficientDBInstanceCapacityFault {
    }
    export interface InsufficientStorageClusterCapacityFault {
    }
    export interface InvalidDBClusterSnapshotStateFault {
    }
    export interface InvalidDBClusterStateFault {
    }
    export interface InvalidDBInstanceStateFault {
    }
    export interface InvalidDBParameterGroupStateFault {
    }
    export interface InvalidDBSecurityGroupStateFault {
    }
    export interface InvalidDBSnapshotStateFault {
    }
    export interface InvalidDBSubnetGroupFault {
    }
    export interface InvalidDBSubnetGroupStateFault {
    }
    export interface InvalidDBSubnetStateFault {
    }
    export interface InvalidEventSubscriptionStateFault {
    }
    export interface InvalidOptionGroupStateFault {
    }
    export interface InvalidRestoreFault {
    }
    export interface InvalidS3BucketFault {
    }
    export interface InvalidSubnet {
    }
    export interface InvalidVPCNetworkStateFault {
    }
    export interface KMSKeyNotAccessibleFault {
    }
    export interface ListTagsForResourceMessage {
      /** The Amazon RDS resource with tags to be listed. This value is an Amazon Resource
Name (ARN). For information about creating an ARN, see Constructing an RDS
Amazon Resource Name (ARN)
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing]
. **/
      ResourceName: String;
      /** This parameter is not currently supported. **/
      Filters?: FilterList;
    }
    export interface ModifyDBClusterMessage {
      /** The DB cluster identifier for the cluster being modified. This parameter is not
case-sensitive.

Constraints:

&amp;#42;  Must be the identifier for an existing DB cluster.
 
 
&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens.
 
 
&amp;#42;  First character must be a letter.
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens. **/
      DBClusterIdentifier: String;
      /** The new DB cluster identifier for the DB cluster when renaming a DB cluster.
This value is stored as a lowercase string.

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens
 
 

Example: my-cluster2 **/
      NewDBClusterIdentifier?: String;
      /** A value that specifies whether the modifications in this request and any pending
modifications are asynchronously applied as soon as possible, regardless of the 
PreferredMaintenanceWindow setting for the DB cluster. If this parameter is set
to false, changes to the DB cluster are applied during the next maintenance
window.

The ApplyImmediately parameter only affects the NewDBClusterIdentifier and 
MasterUserPassword values. If you set the ApplyImmediately parameter value to
false, then changes to the NewDBClusterIdentifier and MasterUserPassword values
are applied during the next maintenance window. All other changes are applied
immediately, regardless of the value of the ApplyImmediately parameter.

Default: false **/
      ApplyImmediately?: Boolean;
      /** The number of days for which automated backups are retained. You must specify a
minimum value of 1.

Default: 1

Constraints:

&amp;#42;  Must be a value from 1 to 35 **/
      BackupRetentionPeriod?: IntegerOptional;
      /** The name of the DB cluster parameter group to use for the DB cluster. **/
      DBClusterParameterGroupName?: String;
      /** A lst of VPC security groups that the DB cluster will belong to. **/
      VpcSecurityGroupIds?: VpcSecurityGroupIdList;
      /** The port number on which the DB cluster accepts connections.

Constraints: Value must be 1150-65535 

Default: The same port as the original DB cluster. **/
      Port?: IntegerOptional;
      /** The new password for the master database user. This password can contain any
printable ASCII character except &quot;/&quot;, &quot;&quot;&quot;, or &quot;@&quot;.

Constraints: Must contain from 8 to 41 characters. **/
      MasterUserPassword?: String;
      /** A value that indicates that the DB cluster should be associated with the
specified option group. Changing this parameter does not result in an outage
except in the following case, and the change is applied during the next
maintenance window unless the ApplyImmediately parameter is set to true for this
request. If the parameter change results in an option group that enables OEM,
this change can cause a brief (sub-second) period during which new connections
are rejected but existing connections are not interrupted. 

Permanent options cannot be removed from an option group. The option group
cannot be removed from a DB cluster once it is associated with a DB cluster. **/
      OptionGroupName?: String;
      /** The daily time range during which automated backups are created if automated
backups are enabled, using the BackupRetentionPeriod parameter. 

Default: A 30-minute window selected at random from an 8-hour block of time per
region. To see the time blocks available, see Adjusting the Preferred
Maintenance Window
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html] 
in the Amazon RDS User Guide. 

Constraints:

&amp;#42;  Must be in the format hh24:mi-hh24:mi.
 
 
&amp;#42;  Times should be in Universal Coordinated Time (UTC).
 
 
&amp;#42;  Must not conflict with the preferred maintenance window.
 
 
&amp;#42;  Must be at least 30 minutes. **/
      PreferredBackupWindow?: String;
      /** The weekly time range during which system maintenance can occur, in Universal
Coordinated Time (UTC).

Format: ddd:hh24:mi-ddd:hh24:mi 

Default: A 30-minute window selected at random from an 8-hour block of time per
region, occurring on a random day of the week. To see the time blocks available,
see Adjusting the Preferred Maintenance Window
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html] 
in the Amazon RDS User Guide. 

Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun

Constraints: Minimum 30-minute window. **/
      PreferredMaintenanceWindow?: String;
    }
    export interface ModifyDBClusterParameterGroupMessage {
      /** The name of the DB cluster parameter group to modify. **/
      DBClusterParameterGroupName: String;
      /** A list of parameters in the DB cluster parameter group to modify. **/
      Parameters: ParametersList;
    }
    export interface ModifyDBClusterResult {
      DBCluster?: DBCluster;
    }
    export interface ModifyDBClusterSnapshotAttributeMessage {
      /** The identifier for the DB cluster snapshot to modify the attributes for. **/
      DBClusterSnapshotIdentifier: String;
      /** The name of the DB cluster snapshot attribute to modify.

To manage authorization for other AWS accounts to copy or restore a manual DB
cluster snapshot, set this value to restore. **/
      AttributeName: String;
      /** A list of DB cluster snapshot attributes to add to the attribute specified by 
AttributeName.

To authorize other AWS accounts to copy or restore a manual DB cluster snapshot,
set this list to include one or more AWS account IDs, or all to make the manual
DB cluster snapshot restorable by any AWS account. Do not add the all value for
any manual DB cluster snapshots that contain private information that you don&#x27;t
want available to all AWS accounts. **/
      ValuesToAdd?: AttributeValueList;
      /** A list of DB cluster snapshot attributes to remove from the attribute specified
by AttributeName.

To remove authorization for other AWS accounts to copy or restore a manual DB
cluster snapshot, set this list to include one or more AWS account identifiers,
or all to remove authorization for any AWS account to copy or restore the DB
cluster snapshot. If you specify all, an AWS account whose account ID is
explicitly added to the restore attribute can still copy or restore a manual DB
cluster snapshot. **/
      ValuesToRemove?: AttributeValueList;
    }
    export interface ModifyDBClusterSnapshotAttributeResult {
      DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
    }
    export interface ModifyDBInstanceMessage {
      /** The DB instance identifier. This value is stored as a lowercase string.

Constraints:

&amp;#42;  Must be the identifier for an existing DB instance
 
 
&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      DBInstanceIdentifier: String;
      /** The new storage capacity of the RDS instance. Changing this setting does not
result in an outage and the change is applied during the next maintenance window
unless ApplyImmediately is set to true for this request. 

MySQL 

Default: Uses existing setting

Valid Values: 5-6144

Constraints: Value supplied must be at least 10% greater than the current value.
Values that are not at least 10% greater than the existing value are rounded up
so that they are 10% greater than the current value.

Type: Integer

MariaDB 

Default: Uses existing setting

Valid Values: 5-6144

Constraints: Value supplied must be at least 10% greater than the current value.
Values that are not at least 10% greater than the existing value are rounded up
so that they are 10% greater than the current value.

Type: Integer

PostgreSQL 

Default: Uses existing setting

Valid Values: 5-6144

Constraints: Value supplied must be at least 10% greater than the current value.
Values that are not at least 10% greater than the existing value are rounded up
so that they are 10% greater than the current value.

Type: Integer

Oracle 

Default: Uses existing setting

Valid Values: 10-6144

Constraints: Value supplied must be at least 10% greater than the current value.
Values that are not at least 10% greater than the existing value are rounded up
so that they are 10% greater than the current value.

SQL Server 

Cannot be modified.

If you choose to migrate your DB instance from using standard storage to using
Provisioned IOPS, or from using Provisioned IOPS to using standard storage, the
process can take time. The duration of the migration depends on several factors
such as database load, storage size, storage type (standard or Provisioned
IOPS), amount of IOPS provisioned (if any), and the number of prior scale
storage operations. Typical migration times are under 24 hours, but the process
can take up to several days in some cases. During the migration, the DB instance
will be available for use, but might experience performance degradation. While
the migration takes place, nightly backups for the instance will be suspended.
No other Amazon RDS operations can take place for the instance, including
modifying the instance, rebooting the instance, deleting the instance, creating
a Read Replica for the instance, and creating a DB snapshot of the instance. **/
      AllocatedStorage?: IntegerOptional;
      /** The new compute and memory capacity of the DB instance. To determine the
instance classes that are available for a particular DB engine, use the 
DescribeOrderableDBInstanceOptions action. 

Passing a value for this setting causes an outage during the change and is
applied during the next maintenance window, unless ApplyImmediately is specified
as true for this request. 

Default: Uses existing setting

Valid Values: db.t1.micro | db.m1.small | db.m1.medium | db.m1.large |
db.m1.xlarge | db.m2.xlarge | db.m2.2xlarge | db.m2.4xlarge | db.m3.medium |
db.m3.large | db.m3.xlarge | db.m3.2xlarge | db.m4.large | db.m4.xlarge |
db.m4.2xlarge | db.m4.4xlarge | db.m4.10xlarge | db.r3.large | db.r3.xlarge |
db.r3.2xlarge | db.r3.4xlarge | db.r3.8xlarge | db.t2.micro | db.t2.small |
db.t2.medium | db.t2.large **/
      DBInstanceClass?: String;
      /** The new DB subnet group for the DB instance. You can use this parameter to move
your DB instance to a different VPC, or to a different subnet group in the same
VPC. If your DB instance is not in a VPC, you can also use this parameter to
move your DB instance into a VPC. For more information, see Updating the VPC for
a DB Instance
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html#USER_VPC.Non-VPC2VPC]
. 

Changing the subnet group causes an outage during the change. The change is
applied during the next maintenance window, unless you specify true for the 
ApplyImmediately parameter. 

Constraints: Must contain no more than 255 alphanumeric characters, periods,
underscores, spaces, or hyphens.

Example: mySubnetGroup **/
      DBSubnetGroupName?: String;
      /** A list of DB security groups to authorize on this DB instance. Changing this
setting does not result in an outage and the change is asynchronously applied as
soon as possible.

Constraints:

&amp;#42;  Must be 1 to 255 alphanumeric characters
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      DBSecurityGroups?: DBSecurityGroupNameList;
      /** A list of EC2 VPC security groups to authorize on this DB instance. This change
is asynchronously applied as soon as possible.

Constraints:

&amp;#42;  Must be 1 to 255 alphanumeric characters
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      VpcSecurityGroupIds?: VpcSecurityGroupIdList;
      /** Specifies whether the modifications in this request and any pending
modifications are asynchronously applied as soon as possible, regardless of the 
PreferredMaintenanceWindow setting for the DB instance. 

If this parameter is set to false, changes to the DB instance are applied
during the next maintenance window. Some parameter changes can cause an outage
and will be applied on the next call to RebootDBInstance, or the next failure
reboot. Review the table of parameters in Modifying a DB Instance and Using the
Apply Immediately Parameter
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html] 
to see the impact that setting ApplyImmediately to true or false has for each
modified parameter and to determine when the changes will be applied. 

Default: false **/
      ApplyImmediately?: Boolean;
      /** The new password for the DB instance master user. Can be any printable ASCII
character except &quot;/&quot;, &quot;&quot;&quot;, or &quot;@&quot;.

Changing this parameter does not result in an outage and the change is
asynchronously applied as soon as possible. Between the time of the request and
the completion of the request, the MasterUserPassword element exists in the 
PendingModifiedValues element of the operation response. 

Default: Uses existing setting

Constraints: Must be 8 to 41 alphanumeric characters (MySQL, MariaDB, and Amazon
Aurora), 8 to 30 alphanumeric characters (Oracle), or 8 to 128 alphanumeric
characters (SQL Server).

Amazon RDS API actions never return the password, so this action provides a way
to regain access to a primary instance user if the password is lost. This
includes restoring privileges that might have been accidentally revoked. **/
      MasterUserPassword?: String;
      /** The name of the DB parameter group to apply to the DB instance. Changing this
setting does not result in an outage. The parameter group name itself is changed
immediately, but the actual parameter changes are not applied until you reboot
the instance without failover. The db instance will NOT be rebooted
automatically and the parameter changes will NOT be applied during the next
maintenance window.

Default: Uses existing setting

Constraints: The DB parameter group must be in the same DB parameter group
family as this DB instance. **/
      DBParameterGroupName?: String;
      /** The number of days to retain automated backups. Setting this parameter to a
positive number enables backups. Setting this parameter to 0 disables automated
backups.

Changing this parameter can result in an outage if you change from 0 to a
non-zero value or from a non-zero value to 0. These changes are applied during
the next maintenance window unless the ApplyImmediately parameter is set to true 
for this request. If you change the parameter from one non-zero value to another
non-zero value, the change is asynchronously applied as soon as possible.

Default: Uses existing setting

Constraints:

&amp;#42;  Must be a value from 0 to 35
 
 
&amp;#42;  Can be specified for a MySQL Read Replica only if the source is running
 MySQL 5.6
 
 
&amp;#42;  Can be specified for a PostgreSQL Read Replica only if the source is running
 PostgreSQL 9.3.5
 
 
&amp;#42;  Cannot be set to 0 if the DB instance is a source to Read Replicas **/
      BackupRetentionPeriod?: IntegerOptional;
      /** The daily time range during which automated backups are created if automated
backups are enabled, as determined by the BackupRetentionPeriod parameter.
Changing this parameter does not result in an outage and the change is
asynchronously applied as soon as possible. 

Constraints:

&amp;#42;  Must be in the format hh24:mi-hh24:mi
 
 
&amp;#42;  Times should be in Universal Time Coordinated (UTC)
 
 
&amp;#42;  Must not conflict with the preferred maintenance window
 
 
&amp;#42;  Must be at least 30 minutes **/
      PreferredBackupWindow?: String;
      /** The weekly time range (in UTC) during which system maintenance can occur, which
might result in an outage. Changing this parameter does not result in an outage,
except in the following situation, and the change is asynchronously applied as
soon as possible. If there are pending actions that cause a reboot, and the
maintenance window is changed to include the current time, then changing this
parameter will cause a reboot of the DB instance. If moving this window to the
current time, there must be at least 30 minutes between the current time and end
of the window to ensure pending changes are applied.

Default: Uses existing setting

Format: ddd:hh24:mi-ddd:hh24:mi

Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun

Constraints: Must be at least 30 minutes **/
      PreferredMaintenanceWindow?: String;
      /** Specifies if the DB instance is a Multi-AZ deployment. Changing this parameter
does not result in an outage and the change is applied during the next
maintenance window unless the ApplyImmediately parameter is set to true for this
request. 

Constraints: Cannot be specified if the DB instance is a Read Replica. **/
      MultiAZ?: BooleanOptional;
      /** The version number of the database engine to upgrade to. Changing this
parameter results in an outage and the change is applied during the next
maintenance window unless the ApplyImmediately parameter is set to true for this
request. 

For major version upgrades, if a non-default DB parameter group is currently in
use, a new DB parameter group in the DB parameter group family for the new
engine version must be specified. The new DB parameter group can be the default
for that DB parameter group family.

For a list of valid engine versions, see CreateDBInstance. **/
      EngineVersion?: String;
      /** Indicates that major version upgrades are allowed. Changing this parameter does
not result in an outage and the change is asynchronously applied as soon as
possible.

Constraints: This parameter must be set to true when specifying a value for the
EngineVersion parameter that is a different major version than the DB instance&#x27;s
current version. **/
      AllowMajorVersionUpgrade?: Boolean;
      /** Indicates that minor version upgrades will be applied automatically to the DB
instance during the maintenance window. Changing this parameter does not result
in an outage except in the following case and the change is asynchronously
applied as soon as possible. An outage will result if this parameter is set to 
true during the maintenance window, and a newer minor version is available, and
RDS has enabled auto patching for that engine version. **/
      AutoMinorVersionUpgrade?: BooleanOptional;
      /** The license model for the DB instance.

Valid values: license-included | bring-your-own-license | general-public-license **/
      LicenseModel?: String;
      /** The new Provisioned IOPS (I/O operations per second) value for the RDS
instance. Changing this setting does not result in an outage and the change is
applied during the next maintenance window unless the ApplyImmediately parameter
is set to true for this request. 

Default: Uses existing setting

Constraints: Value supplied must be at least 10% greater than the current value.
Values that are not at least 10% greater than the existing value are rounded up
so that they are 10% greater than the current value. If you are migrating from
Provisioned IOPS to standard storage, set this value to 0. The DB instance will
require a reboot for the change in storage type to take effect.

SQL Server 

Setting the IOPS value for the SQL Server database engine is not supported.

Type: Integer

If you choose to migrate your DB instance from using standard storage to using
Provisioned IOPS, or from using Provisioned IOPS to using standard storage, the
process can take time. The duration of the migration depends on several factors
such as database load, storage size, storage type (standard or Provisioned
IOPS), amount of IOPS provisioned (if any), and the number of prior scale
storage operations. Typical migration times are under 24 hours, but the process
can take up to several days in some cases. During the migration, the DB instance
will be available for use, but might experience performance degradation. While
the migration takes place, nightly backups for the instance will be suspended.
No other Amazon RDS operations can take place for the instance, including
modifying the instance, rebooting the instance, deleting the instance, creating
a Read Replica for the instance, and creating a DB snapshot of the instance. **/
      Iops?: IntegerOptional;
      /** Indicates that the DB instance should be associated with the specified option
group. Changing this parameter does not result in an outage except in the
following case and the change is applied during the next maintenance window
unless the ApplyImmediately parameter is set to true for this request. If the
parameter change results in an option group that enables OEM, this change can
cause a brief (sub-second) period during which new connections are rejected but
existing connections are not interrupted. 

Permanent options, such as the TDE option for Oracle Advanced Security TDE,
cannot be removed from an option group, and that option group cannot be removed
from a DB instance once it is associated with a DB instance **/
      OptionGroupName?: String;
      /** The new DB instance identifier for the DB instance when renaming a DB instance.
When you change the DB instance identifier, an instance reboot will occur
immediately if you set Apply Immediately to true, or will occur during the next
maintenance window if Apply Immediately to false. This value is stored as a
lowercase string. 

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      NewDBInstanceIdentifier?: String;
      /** Specifies the storage type to be associated with the DB instance.

Valid values: standard | gp2 | io1 

If you specify io1, you must also include a value for the Iops parameter. 

Default: io1 if the Iops parameter is specified; otherwise standard **/
      StorageType?: String;
      /** The ARN from the Key Store with which to associate the instance for TDE
encryption. **/
      TdeCredentialArn?: String;
      /** The password for the given ARN from the Key Store in order to access the device. **/
      TdeCredentialPassword?: String;
      /** Indicates the certificate that needs to be associated with the instance. **/
      CACertificateIdentifier?: String;
      /** Specify the Active Directory Domain to move the instance to.

The specified Active Directory Domain must be created prior to this operation.
Currently only a SQL Server instance can be created in a Active Directory
Domain. **/
      Domain?: String;
      /** True to copy all tags from the DB instance to snapshots of the DB instance;
otherwise false. The default is false. **/
      CopyTagsToSnapshot?: BooleanOptional;
      /** The interval, in seconds, between points when Enhanced Monitoring metrics are
collected for the DB instance. To disable collecting Enhanced Monitoring
metrics, specify 0. The default is 0.

If MonitoringRoleArn is specified, then you must also set MonitoringInterval to
a value other than 0.

Valid Values: 0, 1, 5, 10, 15, 30, 60 **/
      MonitoringInterval?: IntegerOptional;
      /** The port number on which the database accepts connections.

The value of the DBPortNumber parameter must not match any of the port values
specified for options in the option group for the DB instance.

Your database will restart when you change the DBPortNumber value regardless of
the value of the ApplyImmediately parameter.

MySQL 

Default: 3306 

Valid Values: 1150-65535 

MariaDB 

Default: 3306 

Valid Values: 1150-65535 

PostgreSQL 

Default: 5432 

Valid Values: 1150-65535 

Type: Integer

Oracle 

Default: 1521 

Valid Values: 1150-65535 

SQL Server 

Default: 1433 

Valid Values: 1150-65535 except for 1434, 3389, 47001, 49152, and 49152 through 
49156. 

Amazon Aurora 

Default: 3306 

Valid Values: 1150-65535 **/
      DBPortNumber?: IntegerOptional;
      /** Boolean value that indicates if the DB instance has a publicly resolvable DNS
name. Set to True to make the DB instance Internet-facing with a publicly
resolvable DNS name, which resolves to a public IP address. Set to False to make
the DB instance internal with a DNS name that resolves to a private IP address. 

PubliclyAccessible only applies to DB instances in a VPC. The DB instance must
be part of a public subnet and PubliclyAccessible must be true in order for it
to be publicly accessible. 

Changes to the PubliclyAccessible parameter are applied immediately regardless
of the value of the ApplyImmediately parameter.

Default: false **/
      PubliclyAccessible?: BooleanOptional;
      /** The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to
CloudWatch Logs. For example, arn:aws:iam:123456789012:role/emaccess. For
information on creating a monitoring role, go to To create an IAM role for
Amazon RDS Enhanced Monitoring
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html#USER_Monitoring.OS.IAMRole]
.

If MonitoringInterval is set to a value other than 0, then you must supply a 
MonitoringRoleArn value. **/
      MonitoringRoleArn?: String;
      /** Specify the name of the IAM role to be used when making API calls to the
Directory Service. **/
      DomainIAMRoleName?: String;
      /** A value that specifies the order in which an Aurora Replica is promoted to the
primary instance after a failure of the existing primary instance. For more
information, see Fault Tolerance for an Aurora DB Cluster
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Managing.html#Aurora.Managing.FaultTolerance]
. 

Default: 1

Valid Values: 0 - 15 **/
      PromotionTier?: IntegerOptional;
    }
    export interface ModifyDBInstanceResult {
      DBInstance?: DBInstance;
    }
    export interface ModifyDBParameterGroupMessage {
      /** The name of the DB parameter group.

Constraints:

&amp;#42;  Must be the name of an existing DB parameter group
 
 
&amp;#42;  Must be 1 to 255 alphanumeric characters
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      DBParameterGroupName: String;
      /** An array of parameter names, values, and the apply method for the parameter
update. At least one parameter name, value, and apply method must be supplied;
subsequent arguments are optional. A maximum of 20 parameters can be modified in
a single request.

Valid Values (for the application method): immediate | pending-reboot 

You can use the immediate value with dynamic parameters only. You can use the
pending-reboot value for both dynamic and static parameters, and changes are
applied when you reboot the DB instance without failover. **/
      Parameters: ParametersList;
    }
    export interface ModifyDBSnapshotAttributeMessage {
      /** The identifier for the DB snapshot to modify the attributes for. **/
      DBSnapshotIdentifier: String;
      /** The name of the DB snapshot attribute to modify.

To manage authorization for other AWS accounts to copy or restore a manual DB
snapshot, set this value to restore. **/
      AttributeName: String;
      /** A list of DB snapshot attributes to add to the attribute specified by 
AttributeName.

To authorize other AWS accounts to copy or restore a manual snapshot, set this
list to include one or more AWS account IDs, or all to make the manual DB
snapshot restorable by any AWS account. Do not add the all value for any manual
DB snapshots that contain private information that you don&#x27;t want available to
all AWS accounts. **/
      ValuesToAdd?: AttributeValueList;
      /** A list of DB snapshot attributes to remove from the attribute specified by 
AttributeName.

To remove authorization for other AWS accounts to copy or restore a manual
snapshot, set this list to include one or more AWS account identifiers, or all 
to remove authorization for any AWS account to copy or restore the DB snapshot.
If you specify all, an AWS account whose account ID is explicitly added to the 
restore attribute can still copy or restore the manual DB snapshot. **/
      ValuesToRemove?: AttributeValueList;
    }
    export interface ModifyDBSnapshotAttributeResult {
      DBSnapshotAttributesResult?: DBSnapshotAttributesResult;
    }
    export interface ModifyDBSubnetGroupMessage {
      /** The name for the DB subnet group. This value is stored as a lowercase string.

Constraints: Must contain no more than 255 alphanumeric characters, periods,
underscores, spaces, or hyphens. Must not be default.

Example: mySubnetgroup **/
      DBSubnetGroupName: String;
      /** The description for the DB subnet group. **/
      DBSubnetGroupDescription?: String;
      /** The EC2 subnet IDs for the DB subnet group. **/
      SubnetIds: SubnetIdentifierList;
    }
    export interface ModifyDBSubnetGroupResult {
      DBSubnetGroup?: DBSubnetGroup;
    }
    export interface ModifyEventSubscriptionMessage {
      /** The name of the RDS event notification subscription. **/
      SubscriptionName: String;
      /** The Amazon Resource Name (ARN) of the SNS topic created for event notification.
The ARN is created by Amazon SNS when you create a topic and subscribe to it. **/
      SnsTopicArn?: String;
      /** The type of source that will be generating the events. For example, if you want
to be notified of events generated by a DB instance, you would set this
parameter to db-instance. if this value is not specified, all events are
returned.

Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot **/
      SourceType?: String;
      /** A list of event categories for a SourceType that you want to subscribe to. You
can see a list of the categories for a given SourceType in the Events
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html] topic
in the Amazon RDS User Guide or by using the DescribeEventCategories action. **/
      EventCategories?: EventCategoriesList;
      /** A Boolean value; set to true to activate the subscription. **/
      Enabled?: BooleanOptional;
    }
    export interface ModifyEventSubscriptionResult {
      EventSubscription?: EventSubscription;
    }
    export interface ModifyOptionGroupMessage {
      /** The name of the option group to be modified.

Permanent options, such as the TDE option for Oracle Advanced Security TDE,
cannot be removed from an option group, and that option group cannot be removed
from a DB instance once it is associated with a DB instance **/
      OptionGroupName: String;
      /** Options in this list are added to the option group or, if already present, the
specified configuration is used to update the existing configuration. **/
      OptionsToInclude?: OptionConfigurationList;
      /** Options in this list are removed from the option group. **/
      OptionsToRemove?: OptionNamesList;
      /** Indicates whether the changes should be applied immediately, or during the next
maintenance window for each instance associated with the option group. **/
      ApplyImmediately?: Boolean;
    }
    export interface ModifyOptionGroupResult {
      OptionGroup?: OptionGroup;
    }
    export interface Option {
      /** The name of the option. **/
      OptionName?: String;
      /** The description of the option. **/
      OptionDescription?: String;
      /** Indicate if this option is persistent. **/
      Persistent?: Boolean;
      /** Indicate if this option is permanent. **/
      Permanent?: Boolean;
      /** If required, the port configured for this option to use. **/
      Port?: IntegerOptional;
      /** The version of the option. **/
      OptionVersion?: String;
      /** The option settings for this option. **/
      OptionSettings?: OptionSettingConfigurationList;
      /** If the option requires access to a port, then this DB security group allows
access to the port. **/
      DBSecurityGroupMemberships?: DBSecurityGroupMembershipList;
      /** If the option requires access to a port, then this VPC security group allows
access to the port. **/
      VpcSecurityGroupMemberships?: VpcSecurityGroupMembershipList;
    }
    export interface OptionConfiguration {
      /** The configuration of options to include in a group. **/
      OptionName: String;
      /** The optional port for the option. **/
      Port?: IntegerOptional;
      /** The version for the option. **/
      OptionVersion?: String;
      /** A list of DBSecurityGroupMemebrship name strings used for this option. **/
      DBSecurityGroupMemberships?: DBSecurityGroupNameList;
      /** A list of VpcSecurityGroupMemebrship name strings used for this option. **/
      VpcSecurityGroupMemberships?: VpcSecurityGroupIdList;
      /** The option settings to include in an option group. **/
      OptionSettings?: OptionSettingsList;
    }
    export interface OptionGroup {
      /** Specifies the name of the option group. **/
      OptionGroupName?: String;
      /** Provides a description of the option group. **/
      OptionGroupDescription?: String;
      /** Indicates the name of the engine that this option group can be applied to. **/
      EngineName?: String;
      /** Indicates the major engine version associated with this option group. **/
      MajorEngineVersion?: String;
      /** Indicates what options are available in the option group. **/
      Options?: OptionsList;
      /** Indicates whether this option group can be applied to both VPC and non-VPC
instances. The value true indicates the option group can be applied to both VPC
and non-VPC instances. **/
      AllowsVpcAndNonVpcInstanceMemberships?: Boolean;
      /** If AllowsVpcAndNonVpcInstanceMemberships is false, this field is blank. If 
AllowsVpcAndNonVpcInstanceMemberships is true and this field is blank, then this
option group can be applied to both VPC and non-VPC instances. If this field
contains a value, then this option group can only be applied to instances that
are in the VPC indicated by this field. **/
      VpcId?: String;
      /** The Amazon Resource Name (ARN) for the option group. **/
      OptionGroupArn?: String;
    }
    export interface OptionGroupAlreadyExistsFault {
    }
    export interface OptionGroupMembership {
      /** The name of the option group that the instance belongs to. **/
      OptionGroupName?: String;
      /** The status of the DB instance&#x27;s option group membership. Valid values are: 
in-sync, pending-apply, pending-removal, pending-maintenance-apply, 
pending-maintenance-removal, applying, removing, and failed. **/
      Status?: String;
    }
    export interface OptionGroupNotFoundFault {
    }
    export interface OptionGroupOption {
      /** The name of the option. **/
      Name?: String;
      /** The description of the option. **/
      Description?: String;
      /** The name of the engine that this option can be applied to. **/
      EngineName?: String;
      /** Indicates the major engine version that the option is available for. **/
      MajorEngineVersion?: String;
      /** The minimum required engine version for the option to be applied. **/
      MinimumRequiredMinorEngineVersion?: String;
      /** Specifies whether the option requires a port. **/
      PortRequired?: Boolean;
      /** If the option requires a port, specifies the default port for the option. **/
      DefaultPort?: IntegerOptional;
      /** The options that are prerequisites for this option. **/
      OptionsDependedOn?: OptionsDependedOn;
      /** The options that conflict with this option. **/
      OptionsConflictsWith?: OptionsConflictsWith;
      /** Persistent options can&#x27;t be removed from an option group while DB instances are
associated with the option group. If you disassociate all DB instances from the
option group, your can remove the persistent option from the option group. **/
      Persistent?: Boolean;
      /** Permanent options can never be removed from an option group. An option group
containing a permanent option can&#x27;t be removed from a DB instance. **/
      Permanent?: Boolean;
      /** The option settings that are available (and the default value) for each option
in an option group. **/
      OptionGroupOptionSettings?: OptionGroupOptionSettingsList;
      /** The versions that are available for the option. **/
      OptionGroupOptionVersions?: OptionGroupOptionVersionsList;
    }
    export interface OptionGroupOptionSetting {
      /** The name of the option group option. **/
      SettingName?: String;
      /** The description of the option group option. **/
      SettingDescription?: String;
      /** The default value for the option group option. **/
      DefaultValue?: String;
      /** The DB engine specific parameter type for the option group option. **/
      ApplyType?: String;
      /** Indicates the acceptable values for the option group option. **/
      AllowedValues?: String;
      /** Boolean value where true indicates that this option group option can be changed
from the default value. **/
      IsModifiable?: Boolean;
    }
    export interface OptionGroupOptionsMessage {
      OptionGroupOptions?: OptionGroupOptionsList;
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
    }
    export interface OptionGroupQuotaExceededFault {
    }
    export interface OptionGroups {
      /** List of option groups. **/
      OptionGroupsList?: OptionGroupsList;
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
    }
    export interface OptionSetting {
      /** The name of the option that has settings that you can set. **/
      Name?: String;
      /** The current value of the option setting. **/
      Value?: String;
      /** The default value of the option setting. **/
      DefaultValue?: String;
      /** The description of the option setting. **/
      Description?: String;
      /** The DB engine specific parameter type. **/
      ApplyType?: String;
      /** The data type of the option setting. **/
      DataType?: String;
      /** The allowed values of the option setting. **/
      AllowedValues?: String;
      /** A Boolean value that, when true, indicates the option setting can be modified
from the default. **/
      IsModifiable?: Boolean;
      /** Indicates if the option setting is part of a collection. **/
      IsCollection?: Boolean;
    }
    export interface OptionVersion {
      /** The version of the option. **/
      Version?: String;
      /** True if the version is the default version of the option; otherwise, false. **/
      IsDefault?: Boolean;
    }
    export interface OrderableDBInstanceOption {
      /** The engine type of the orderable DB instance. **/
      Engine?: String;
      /** The engine version of the orderable DB instance. **/
      EngineVersion?: String;
      /** The DB instance class for the orderable DB instance. **/
      DBInstanceClass?: String;
      /** The license model for the orderable DB instance. **/
      LicenseModel?: String;
      /** A list of Availability Zones for the orderable DB instance. **/
      AvailabilityZones?: AvailabilityZoneList;
      /** Indicates whether this orderable DB instance is multi-AZ capable. **/
      MultiAZCapable?: Boolean;
      /** Indicates whether this orderable DB instance can have a Read Replica. **/
      ReadReplicaCapable?: Boolean;
      /** Indicates whether this is a VPC orderable DB instance. **/
      Vpc?: Boolean;
      /** Indicates whether this orderable DB instance supports encrypted storage. **/
      SupportsStorageEncryption?: Boolean;
      /** Indicates the storage type for this orderable DB instance. **/
      StorageType?: String;
      /** Indicates whether this orderable DB instance supports provisioned IOPS. **/
      SupportsIops?: Boolean;
      /** Indicates whether the DB instance supports enhanced monitoring at intervals from
1 to 60 seconds. **/
      SupportsEnhancedMonitoring?: Boolean;
    }
    export interface OrderableDBInstanceOptionsMessage {
      /** An OrderableDBInstanceOption structure containing information about orderable
options for the DB instance. **/
      OrderableDBInstanceOptions?: OrderableDBInstanceOptionsList;
      /** An optional pagination token provided by a previous OrderableDBInstanceOptions
request. If this parameter is specified, the response includes only records
beyond the marker, up to the value specified by MaxRecords . **/
      Marker?: String;
    }
    export interface Parameter {
      /** Specifies the name of the parameter. **/
      ParameterName?: String;
      /** Specifies the value of the parameter. **/
      ParameterValue?: String;
      /** Provides a description of the parameter. **/
      Description?: String;
      /** Indicates the source of the parameter value. **/
      Source?: String;
      /** Specifies the engine specific parameters type. **/
      ApplyType?: String;
      /** Specifies the valid data type for the parameter. **/
      DataType?: String;
      /** Specifies the valid range of values for the parameter. **/
      AllowedValues?: String;
      /** Indicates whether (true) or not (false) the parameter can be modified. Some
parameters have security or operational implications that prevent them from
being changed. **/
      IsModifiable?: Boolean;
      /** The earliest engine version to which the parameter can apply. **/
      MinimumEngineVersion?: String;
      /** Indicates when to apply parameter updates. **/
      ApplyMethod?: ApplyMethod;
    }
    export interface PendingMaintenanceAction {
      /** The type of pending maintenance action that is available for the resource. **/
      Action?: String;
      /** The date of the maintenance window when the action will be applied. The
maintenance action will be applied to the resource during its first maintenance
window after this date. If this date is specified, any next-maintenance opt-in
requests are ignored. **/
      AutoAppliedAfterDate?: TStamp;
      /** The date when the maintenance action will be automatically applied. The
maintenance action will be applied to the resource on this date regardless of
the maintenance window for the resource. If this date is specified, any 
immediate opt-in requests are ignored. **/
      ForcedApplyDate?: TStamp;
      /** Indicates the type of opt-in request that has been received for the resource. **/
      OptInStatus?: String;
      /** The effective date when the pending maintenance action will be applied to the
resource. This date takes into account opt-in requests received from the 
ApplyPendingMaintenanceAction API, the AutoAppliedAfterDate, and the 
ForcedApplyDate. This value is blank if an opt-in request has not been received
and nothing has been specified as AutoAppliedAfterDate or ForcedApplyDate. **/
      CurrentApplyDate?: TStamp;
      /** A description providing more detail about the maintenance action. **/
      Description?: String;
    }
    export interface PendingMaintenanceActionsMessage {
      /** A list of the pending maintenance actions for the resource. **/
      PendingMaintenanceActions?: PendingMaintenanceActions;
      /** An optional pagination token provided by a previous 
DescribePendingMaintenanceActions request. If this parameter is specified, the
response includes only records beyond the marker, up to a number of records
specified by MaxRecords. **/
      Marker?: String;
    }
    export interface PendingModifiedValues {
      /** Contains the new DBInstanceClass for the DB instance that will be applied or is
in progress. **/
      DBInstanceClass?: String;
      /** Contains the new AllocatedStorage size for the DB instance that will be applied
or is in progress. **/
      AllocatedStorage?: IntegerOptional;
      /** Contains the pending or in-progress change of the master credentials for the DB
instance. **/
      MasterUserPassword?: String;
      /** Specifies the pending port for the DB instance. **/
      Port?: IntegerOptional;
      /** Specifies the pending number of days for which automated backups are retained. **/
      BackupRetentionPeriod?: IntegerOptional;
      /** Indicates that the Single-AZ DB instance is to change to a Multi-AZ deployment. **/
      MultiAZ?: BooleanOptional;
      /** Indicates the database engine version. **/
      EngineVersion?: String;
      /** The license model for the DB instance.

Valid values: license-included | bring-your-own-license | general-public-license **/
      LicenseModel?: String;
      /** Specifies the new Provisioned IOPS value for the DB instance that will be
applied or is being applied. **/
      Iops?: IntegerOptional;
      /** Contains the new DBInstanceIdentifier for the DB instance that will be applied
or is in progress. **/
      DBInstanceIdentifier?: String;
      /** Specifies the storage type to be associated with the DB instance. **/
      StorageType?: String;
      /** Specifies the identifier of the CA certificate for the DB instance. **/
      CACertificateIdentifier?: String;
      /** The new DB subnet group for the DB instance. **/
      DBSubnetGroupName?: String;
    }
    export interface PointInTimeRestoreNotEnabledFault {
    }
    export interface PromoteReadReplicaDBClusterMessage {
      /** The identifier of the DB cluster Read Replica to promote. This parameter is not
case-sensitive. 

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens.
 
 
&amp;#42;  First character must be a letter.
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens.
 
 

Example: my-cluster-replica1 **/
      DBClusterIdentifier: String;
    }
    export interface PromoteReadReplicaDBClusterResult {
      DBCluster?: DBCluster;
    }
    export interface PromoteReadReplicaMessage {
      /** The DB instance identifier. This value is stored as a lowercase string.

Constraints:

&amp;#42;  Must be the identifier for an existing Read Replica DB instance
 
 
&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens
 
 

Example: mydbinstance **/
      DBInstanceIdentifier: String;
      /** The number of days to retain automated backups. Setting this parameter to a
positive number enables backups. Setting this parameter to 0 disables automated
backups.

Default: 1

Constraints:

&amp;#42;  Must be a value from 0 to 8 **/
      BackupRetentionPeriod?: IntegerOptional;
      /** The daily time range during which automated backups are created if automated
backups are enabled, using the BackupRetentionPeriod parameter. 

Default: A 30-minute window selected at random from an 8-hour block of time per
region. To see the time blocks available, see Adjusting the Preferred
Maintenance Window
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html] 
in the Amazon RDS User Guide. 

Constraints:

&amp;#42;  Must be in the format hh24:mi-hh24:mi.
 
 
&amp;#42;  Times should be in Universal Coordinated Time (UTC).
 
 
&amp;#42;  Must not conflict with the preferred maintenance window.
 
 
&amp;#42;  Must be at least 30 minutes. **/
      PreferredBackupWindow?: String;
    }
    export interface PromoteReadReplicaResult {
      DBInstance?: DBInstance;
    }
    export interface ProvisionedIopsNotAvailableInAZFault {
    }
    export interface PurchaseReservedDBInstancesOfferingMessage {
      /** The ID of the Reserved DB instance offering to purchase.

Example: 438012d3-4052-4cc7-b2e3-8d3372e0e706 **/
      ReservedDBInstancesOfferingId: String;
      /** Customer-specified identifier to track this reservation.

Example: myreservationID **/
      ReservedDBInstanceId?: String;
      /** The number of instances to reserve.

Default: 1 **/
      DBInstanceCount?: IntegerOptional;
      Tags?: TagList;
    }
    export interface PurchaseReservedDBInstancesOfferingResult {
      ReservedDBInstance?: ReservedDBInstance;
    }
    export interface RebootDBInstanceMessage {
      /** The DB instance identifier. This parameter is stored as a lowercase string.

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      DBInstanceIdentifier: String;
      /** When true, the reboot will be conducted through a MultiAZ failover. 

Constraint: You cannot specify true if the instance is not configured for
MultiAZ. **/
      ForceFailover?: BooleanOptional;
    }
    export interface RebootDBInstanceResult {
      DBInstance?: DBInstance;
    }
    export interface RecurringCharge {
      /** The amount of the recurring charge. **/
      RecurringChargeAmount?: Double;
      /** The frequency of the recurring charge. **/
      RecurringChargeFrequency?: String;
    }
    export interface RemoveSourceIdentifierFromSubscriptionMessage {
      /** The name of the RDS event notification subscription you want to remove a source
identifier from. **/
      SubscriptionName: String;
      /** The source identifier to be removed from the subscription, such as the DB
instance identifier for a DB instance or the name of a security group. **/
      SourceIdentifier: String;
    }
    export interface RemoveSourceIdentifierFromSubscriptionResult {
      EventSubscription?: EventSubscription;
    }
    export interface RemoveTagsFromResourceMessage {
      /** The Amazon RDS resource the tags will be removed from. This value is an Amazon
Resource Name (ARN). For information about creating an ARN, see Constructing an
RDS Amazon Resource Name (ARN)
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing]
. **/
      ResourceName: String;
      /** The tag key (name) of the tag to be removed. **/
      TagKeys: KeyList;
    }
    export interface ReservedDBInstance {
      /** The unique identifier for the reservation. **/
      ReservedDBInstanceId?: String;
      /** The offering identifier. **/
      ReservedDBInstancesOfferingId?: String;
      /** The DB instance class for the reserved DB instance. **/
      DBInstanceClass?: String;
      /** The time the reservation started. **/
      StartTime?: TStamp;
      /** The duration of the reservation in seconds. **/
      Duration?: Integer;
      /** The fixed price charged for this reserved DB instance. **/
      FixedPrice?: Double;
      /** The hourly price charged for this reserved DB instance. **/
      UsagePrice?: Double;
      /** The currency code for the reserved DB instance. **/
      CurrencyCode?: String;
      /** The number of reserved DB instances. **/
      DBInstanceCount?: Integer;
      /** The description of the reserved DB instance. **/
      ProductDescription?: String;
      /** The offering type of this reserved DB instance. **/
      OfferingType?: String;
      /** Indicates if the reservation applies to Multi-AZ deployments. **/
      MultiAZ?: Boolean;
      /** The state of the reserved DB instance. **/
      State?: String;
      /** The recurring price charged to run this reserved DB instance. **/
      RecurringCharges?: RecurringChargeList;
      /** The Amazon Resource Name (ARN) for the reserved DB instance. **/
      ReservedDBInstanceArn?: String;
    }
    export interface ReservedDBInstanceAlreadyExistsFault {
    }
    export interface ReservedDBInstanceMessage {
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
      /** A list of reserved DB instances. **/
      ReservedDBInstances?: ReservedDBInstanceList;
    }
    export interface ReservedDBInstanceNotFoundFault {
    }
    export interface ReservedDBInstanceQuotaExceededFault {
    }
    export interface ReservedDBInstancesOffering {
      /** The offering identifier. **/
      ReservedDBInstancesOfferingId?: String;
      /** The DB instance class for the reserved DB instance. **/
      DBInstanceClass?: String;
      /** The duration of the offering in seconds. **/
      Duration?: Integer;
      /** The fixed price charged for this offering. **/
      FixedPrice?: Double;
      /** The hourly price charged for this offering. **/
      UsagePrice?: Double;
      /** The currency code for the reserved DB instance offering. **/
      CurrencyCode?: String;
      /** The database engine used by the offering. **/
      ProductDescription?: String;
      /** The offering type. **/
      OfferingType?: String;
      /** Indicates if the offering applies to Multi-AZ deployments. **/
      MultiAZ?: Boolean;
      /** The recurring price charged to run this reserved DB instance. **/
      RecurringCharges?: RecurringChargeList;
    }
    export interface ReservedDBInstancesOfferingMessage {
      /** An optional pagination token provided by a previous request. If this parameter
is specified, the response includes only records beyond the marker, up to the
value specified by MaxRecords. **/
      Marker?: String;
      /** A list of reserved DB instance offerings. **/
      ReservedDBInstancesOfferings?: ReservedDBInstancesOfferingList;
    }
    export interface ReservedDBInstancesOfferingNotFoundFault {
    }
    export interface ResetDBClusterParameterGroupMessage {
      /** The name of the DB cluster parameter group to reset. **/
      DBClusterParameterGroupName: String;
      /** A value that is set to true to reset all parameters in the DB cluster parameter
group to their default values, and false otherwise. You cannot use this
parameter if there is a list of parameter names specified for the Parameters 
parameter. **/
      ResetAllParameters?: Boolean;
      /** A list of parameter names in the DB cluster parameter group to reset to the
default values. You cannot use this parameter if the ResetAllParameters 
parameter is set to true. **/
      Parameters?: ParametersList;
    }
    export interface ResetDBParameterGroupMessage {
      /** The name of the DB parameter group.

Constraints:

&amp;#42;  Must be 1 to 255 alphanumeric characters
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      DBParameterGroupName: String;
      /** Specifies whether (true) or not (false) to reset all parameters in the DB
parameter group to default values. 

Default: true **/
      ResetAllParameters?: Boolean;
      /** An array of parameter names, values, and the apply method for the parameter
update. At least one parameter name, value, and apply method must be supplied;
subsequent arguments are optional. A maximum of 20 parameters can be modified in
a single request.

MySQL 

Valid Values (for Apply method): immediate | pending-reboot 

You can use the immediate value with dynamic parameters only. You can use the 
pending-reboot value for both dynamic and static parameters, and changes are
applied when DB instance reboots.

MariaDB 

Valid Values (for Apply method): immediate | pending-reboot 

You can use the immediate value with dynamic parameters only. You can use the 
pending-reboot value for both dynamic and static parameters, and changes are
applied when DB instance reboots.

Oracle 

Valid Values (for Apply method): pending-reboot **/
      Parameters?: ParametersList;
    }
    export interface ResourceNotFoundFault {
    }
    export interface ResourcePendingMaintenanceActions {
      /** The ARN of the resource that has pending maintenance actions. **/
      ResourceIdentifier?: String;
      /** A list that provides details about the pending maintenance actions for the
resource. **/
      PendingMaintenanceActionDetails?: PendingMaintenanceActionDetails;
    }
    export interface RestoreDBClusterFromS3Message {
      /** A list of EC2 Availability Zones that instances in the restored DB cluster can
be created in. **/
      AvailabilityZones?: AvailabilityZones;
      /** The number of days for which automated backups of the restored DB cluster are
retained. You must specify a minimum value of 1.

Default: 1

Constraints:

&amp;#42;  Must be a value from 1 to 35 **/
      BackupRetentionPeriod?: IntegerOptional;
      /** A value that indicates that the restored DB cluster should be associated with
the specified CharacterSet. **/
      CharacterSetName?: String;
      /** The database name for the restored DB cluster. **/
      DatabaseName?: String;
      /** The name of the DB cluster to create from the source data in the S3 bucket. This
parameter is isn&#x27;t case-sensitive.

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens.
 
 
&amp;#42;  First character must be a letter.
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens.
 
 

Example: my-cluster1 **/
      DBClusterIdentifier: String;
      /** The name of the DB cluster parameter group to associate with the restored DB
cluster. If this argument is omitted, default.aurora5.6 will be used. 

Constraints:

&amp;#42;  Must be 1 to 255 alphanumeric characters
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      DBClusterParameterGroupName?: String;
      /** A list of EC2 VPC security groups to associate with the restored DB cluster. **/
      VpcSecurityGroupIds?: VpcSecurityGroupIdList;
      /** A DB subnet group to associate with the restored DB cluster.

Constraints: Must contain no more than 255 alphanumeric characters, periods,
underscores, spaces, or hyphens. Must not be default.

Example: mySubnetgroup **/
      DBSubnetGroupName?: String;
      /** The name of the database engine to be used for the restored DB cluster.

Valid Values: aurora **/
      Engine: String;
      /** The version number of the database engine to use.

Aurora 

Example: 5.6.10a **/
      EngineVersion?: String;
      /** The port number on which the instances in the restored DB cluster accept
connections.

Default: 3306 **/
      Port?: IntegerOptional;
      /** The name of the master user for the restored DB cluster.

Constraints:

&amp;#42;  Must be 1 to 16 alphanumeric characters.
 
 
&amp;#42;  First character must be a letter.
 
 
&amp;#42;  Cannot be a reserved word for the chosen database engine. **/
      MasterUsername: String;
      /** The password for the master database user. This password can contain any
printable ASCII character except &quot;/&quot;, &quot;&quot;&quot;, or &quot;@&quot;.

Constraints: Must contain from 8 to 41 characters. **/
      MasterUserPassword: String;
      /** A value that indicates that the restored DB cluster should be associated with
the specified option group.

Permanent options cannot be removed from an option group. An option group cannot
be removed from a DB cluster once it is associated with a DB cluster. **/
      OptionGroupName?: String;
      /** The daily time range during which automated backups are created if automated
backups are enabled using the BackupRetentionPeriod parameter. 

Default: A 30-minute window selected at random from an 8-hour block of time per
region. To see the time blocks available, see Adjusting the Preferred
Maintenance Window
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html] 
in the Amazon RDS User Guide. 

Constraints:

&amp;#42;  Must be in the format hh24:mi-hh24:mi.
 
 
&amp;#42;  Times should be in Universal Coordinated Time (UTC).
 
 
&amp;#42;  Must not conflict with the preferred maintenance window.
 
 
&amp;#42;  Must be at least 30 minutes. **/
      PreferredBackupWindow?: String;
      /** The weekly time range during which system maintenance can occur, in Universal
Coordinated Time (UTC).

Format: ddd:hh24:mi-ddd:hh24:mi 

Default: A 30-minute window selected at random from an 8-hour block of time per
region, occurring on a random day of the week. To see the time blocks available,
see Adjusting the Preferred Maintenance Window
[http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html] 
in the Amazon RDS User Guide. 

Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun

Constraints: Minimum 30-minute window. **/
      PreferredMaintenanceWindow?: String;
      Tags?: TagList;
      /** Specifies whether the restored DB cluster is encrypted. **/
      StorageEncrypted?: BooleanOptional;
      /** The KMS key identifier for an encrypted DB cluster.

The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption
key. If you are creating a DB cluster with the same AWS account that owns the
KMS encryption key used to encrypt the new DB cluster, then you can use the KMS
key alias instead of the ARN for the KM encryption key.

If the StorageEncrypted parameter is true, and you do not specify a value for
the KmsKeyId parameter, then Amazon RDS will use your default encryption key.
AWS KMS creates the default encryption key for your AWS account. Your AWS
account has a different default encryption key for each AWS region. **/
      KmsKeyId?: String;
      /** The identifier for the database engine that was backed up to create the files
stored in the Amazon S3 bucket. 

Valid values: mysql **/
      SourceEngine: String;
      /** The version of the database that the backup files were created from.

MySQL version 5.5 and 5.6 are supported. 

Example: 5.6.22 **/
      SourceEngineVersion: String;
      /** The name of the Amazon S3 bucket that contains the data used to create the
Amazon Aurora DB cluster. **/
      S3BucketName: String;
      /** The prefix for all of the file names that contain the data used to create the
Amazon Aurora DB cluster. If you do not specify a SourceS3Prefix value, then the
Amazon Aurora DB cluster is created by using all of the files in the Amazon S3
bucket. **/
      S3Prefix?: String;
      /** The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM)
role that authorizes Amazon RDS to access the Amazon S3 bucket on your behalf. **/
      S3IngestionRoleArn: String;
    }
    export interface RestoreDBClusterFromS3Result {
      DBCluster?: DBCluster;
    }
    export interface RestoreDBClusterFromSnapshotMessage {
      /** Provides the list of EC2 Availability Zones that instances in the restored DB
cluster can be created in. **/
      AvailabilityZones?: AvailabilityZones;
      /** The name of the DB cluster to create from the DB cluster snapshot. This
parameter isn&#x27;t case-sensitive.

Constraints:

&amp;#42;  Must contain from 1 to 255 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens
 
 

Example: my-snapshot-id **/
      DBClusterIdentifier: String;
      /** The identifier for the DB cluster snapshot to restore from.

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      SnapshotIdentifier: String;
      /** The database engine to use for the new DB cluster.

Default: The same as source

Constraint: Must be compatible with the engine of the source **/
      Engine: String;
      /** The version of the database engine to use for the new DB cluster. **/
      EngineVersion?: String;
      /** The port number on which the new DB cluster accepts connections.

Constraints: Value must be 1150-65535 

Default: The same port as the original DB cluster. **/
      Port?: IntegerOptional;
      /** The name of the DB subnet group to use for the new DB cluster.

Constraints: Must contain no more than 255 alphanumeric characters, periods,
underscores, spaces, or hyphens. Must not be default.

Example: mySubnetgroup **/
      DBSubnetGroupName?: String;
      /** The database name for the restored DB cluster. **/
      DatabaseName?: String;
      /** The name of the option group to use for the restored DB cluster. **/
      OptionGroupName?: String;
      /** A list of VPC security groups that the new DB cluster will belong to. **/
      VpcSecurityGroupIds?: VpcSecurityGroupIdList;
      /** The tags to be assigned to the restored DB cluster. **/
      Tags?: TagList;
      /** The KMS key identifier to use when restoring an encrypted DB cluster from a DB
cluster snapshot.

The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption
key. If you are restoring a DB cluster with the same AWS account that owns the
KMS encryption key used to encrypt the new DB cluster, then you can use the KMS
key alias instead of the ARN for the KMS encryption key.

If you do not specify a value for the KmsKeyId parameter, then the following
will occur:

&amp;#42;  If the DB cluster snapshot is encrypted, then the restored DB cluster is
 encrypted using the KMS key that was used to encrypt the DB cluster snapshot.
 
 
&amp;#42;  If the DB cluster snapshot is not encrypted, then the restored DB cluster is
 encrypted using the specified encryption key. **/
      KmsKeyId?: String;
    }
    export interface RestoreDBClusterFromSnapshotResult {
      DBCluster?: DBCluster;
    }
    export interface RestoreDBClusterToPointInTimeMessage {
      /** The name of the new DB cluster to be created.

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      DBClusterIdentifier: String;
      /** The identifier of the source DB cluster from which to restore.

Constraints:

&amp;#42;  Must be the identifier of an existing database instance
 
 
&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      SourceDBClusterIdentifier: String;
      /** The date and time to restore the DB cluster to.

Valid Values: Value must be a time in Universal Coordinated Time (UTC) format

Constraints:

&amp;#42;  Must be before the latest restorable time for the DB instance
 
 
&amp;#42;  Cannot be specified if UseLatestRestorableTime parameter is true
 
 

Example: 2015-03-07T23:45:00Z **/
      RestoreToTime?: TStamp;
      /** A value that is set to true to restore the DB cluster to the latest restorable
backup time, and false otherwise. 

Default: false 

Constraints: Cannot be specified if RestoreToTime parameter is provided. **/
      UseLatestRestorableTime?: Boolean;
      /** The port number on which the new DB cluster accepts connections.

Constraints: Value must be 1150-65535 

Default: The same port as the original DB cluster. **/
      Port?: IntegerOptional;
      /** The DB subnet group name to use for the new DB cluster.

Constraints: Must contain no more than 255 alphanumeric characters, periods,
underscores, spaces, or hyphens. Must not be default.

Example: mySubnetgroup **/
      DBSubnetGroupName?: String;
      /** The name of the option group for the new DB cluster. **/
      OptionGroupName?: String;
      /** A lst of VPC security groups that the new DB cluster belongs to. **/
      VpcSecurityGroupIds?: VpcSecurityGroupIdList;
      Tags?: TagList;
      /** The KMS key identifier to use when restoring an encrypted DB cluster from an
encrypted DB cluster.

The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption
key. If you are restoring a DB cluster with the same AWS account that owns the
KMS encryption key used to encrypt the new DB cluster, then you can use the KMS
key alias instead of the ARN for the KMS encryption key.

You can restore to a new DB cluster and encrypt the new DB cluster with a KMS
key that is different than the KMS key used to encrypt the source DB cluster.
The new DB cluster will be encrypted with the KMS key identified by the KmsKeyId 
parameter.

If you do not specify a value for the KmsKeyId parameter, then the following
will occur:

&amp;#42;  If the DB cluster is encrypted, then the restored DB cluster is encrypted
 using the KMS key that was used to encrypt the source DB cluster.
 
 
&amp;#42;  If the DB cluster is not encrypted, then the restored DB cluster is not
 encrypted.
 
 

If DBClusterIdentifier refers to a DB cluster that is note encrypted, then the
restore request is rejected. **/
      KmsKeyId?: String;
    }
    export interface RestoreDBClusterToPointInTimeResult {
      DBCluster?: DBCluster;
    }
    export interface RestoreDBInstanceFromDBSnapshotMessage {
      /** Name of the DB instance to create from the DB snapshot. This parameter isn&#x27;t
case-sensitive.

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens (1 to 15 for
 SQL Server)
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens
 
 

Example: my-snapshot-id **/
      DBInstanceIdentifier: String;
      /** The identifier for the DB snapshot to restore from.

Constraints:

&amp;#42;  Must contain from 1 to 255 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens
 
 

If you are restoring from a shared manual DB snapshot, the DBSnapshotIdentifier 
must be the ARN of the shared DB snapshot. **/
      DBSnapshotIdentifier: String;
      /** The compute and memory capacity of the Amazon RDS DB instance.

Valid Values: db.t1.micro | db.m1.small | db.m1.medium | db.m1.large |
db.m1.xlarge | db.m2.2xlarge | db.m2.4xlarge | db.m3.medium | db.m3.large |
db.m3.xlarge | db.m3.2xlarge | db.m4.large | db.m4.xlarge | db.m4.2xlarge |
db.m4.4xlarge | db.m4.10xlarge | db.r3.large | db.r3.xlarge | db.r3.2xlarge |
db.r3.4xlarge | db.r3.8xlarge | db.t2.micro | db.t2.small | db.t2.medium |
db.t2.large **/
      DBInstanceClass?: String;
      /** The port number on which the database accepts connections.

Default: The same port as the original DB instance

Constraints: Value must be 1150-65535 **/
      Port?: IntegerOptional;
      /** The EC2 Availability Zone that the database instance will be created in.

Default: A random, system-chosen Availability Zone.

Constraint: You cannot specify the AvailabilityZone parameter if the MultiAZ
parameter is set to true.

Example: us-east-1a **/
      AvailabilityZone?: String;
      /** The DB subnet group name to use for the new instance.

Constraints: Must contain no more than 255 alphanumeric characters, periods,
underscores, spaces, or hyphens. Must not be default.

Example: mySubnetgroup **/
      DBSubnetGroupName?: String;
      /** Specifies if the DB instance is a Multi-AZ deployment.

Constraint: You cannot specify the AvailabilityZone parameter if the MultiAZ
parameter is set to true. **/
      MultiAZ?: BooleanOptional;
      /** Specifies the accessibility options for the DB instance. A value of true
specifies an Internet-facing instance with a publicly resolvable DNS name, which
resolves to a public IP address. A value of false specifies an internal instance
with a DNS name that resolves to a private IP address.

Default: The default behavior varies depending on whether a VPC has been
requested or not. The following list shows the default behavior in each case.

&amp;#42;   Default VPC: true
 
 
&amp;#42;   VPC: false
 
 

If no DB subnet group has been specified as part of the request and the
PubliclyAccessible value has not been set, the DB instance will be publicly
accessible. If a specific DB subnet group has been specified as part of the
request and the PubliclyAccessible value has not been set, the DB instance will
be private. **/
      PubliclyAccessible?: BooleanOptional;
      /** Indicates that minor version upgrades will be applied automatically to the DB
instance during the maintenance window. **/
      AutoMinorVersionUpgrade?: BooleanOptional;
      /** License model information for the restored DB instance.

Default: Same as source.

Valid values: license-included | bring-your-own-license | 
general-public-license **/
      LicenseModel?: String;
      /** The database name for the restored DB instance.

This parameter doesn&#x27;t apply to the MySQL, PostgreSQL, or MariaDB engines. **/
      DBName?: String;
      /** The database engine to use for the new instance.

Default: The same as source

Constraint: Must be compatible with the engine of the source

Valid Values: MySQL | mariadb | oracle-se1 | oracle-se | oracle-ee | 
sqlserver-ee | sqlserver-se | sqlserver-ex | sqlserver-web | postgres | aurora **/
      Engine?: String;
      /** Specifies the amount of provisioned IOPS for the DB instance, expressed in I/O
operations per second. If this parameter is not specified, the IOPS value will
be taken from the backup. If this parameter is set to 0, the new instance will
be converted to a non-PIOPS instance, which will take additional time, though
your DB instance will be available for connections before the conversion starts.

Constraints: Must be an integer greater than 1000.

SQL Server 

Setting the IOPS value for the SQL Server database engine is not supported. **/
      Iops?: IntegerOptional;
      /** The name of the option group to be used for the restored DB instance.

Permanent options, such as the TDE option for Oracle Advanced Security TDE,
cannot be removed from an option group, and that option group cannot be removed
from a DB instance once it is associated with a DB instance **/
      OptionGroupName?: String;
      Tags?: TagList;
      /** Specifies the storage type to be associated with the DB instance.

Valid values: standard | gp2 | io1 

If you specify io1, you must also include a value for the Iops parameter. 

Default: io1 if the Iops parameter is specified; otherwise standard **/
      StorageType?: String;
      /** The ARN from the Key Store with which to associate the instance for TDE
encryption. **/
      TdeCredentialArn?: String;
      /** The password for the given ARN from the Key Store in order to access the device. **/
      TdeCredentialPassword?: String;
      /** Specify the Active Directory Domain to restore the instance in. **/
      Domain?: String;
      /** True to copy all tags from the restored DB instance to snapshots of the DB
instance; otherwise false. The default is false. **/
      CopyTagsToSnapshot?: BooleanOptional;
      /** Specify the name of the IAM role to be used when making API calls to the
Directory Service. **/
      DomainIAMRoleName?: String;
    }
    export interface RestoreDBInstanceFromDBSnapshotResult {
      DBInstance?: DBInstance;
    }
    export interface RestoreDBInstanceToPointInTimeMessage {
      /** The identifier of the source DB instance from which to restore.

Constraints:

&amp;#42;  Must be the identifier of an existing database instance
 
 
&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      SourceDBInstanceIdentifier: String;
      /** The name of the new database instance to be created.

Constraints:

&amp;#42;  Must contain from 1 to 63 alphanumeric characters or hyphens
 
 
&amp;#42;  First character must be a letter
 
 
&amp;#42;  Cannot end with a hyphen or contain two consecutive hyphens **/
      TargetDBInstanceIdentifier: String;
      /** The date and time to restore from.

Valid Values: Value must be a time in Universal Coordinated Time (UTC) format

Constraints:

&amp;#42;  Must be before the latest restorable time for the DB instance
 
 
&amp;#42;  Cannot be specified if UseLatestRestorableTime parameter is true
 
 

Example: 2009-09-07T23:45:00Z **/
      RestoreTime?: TStamp;
      /** Specifies whether (true) or not (false) the DB instance is restored from the
latest backup time. 

Default: false 

Constraints: Cannot be specified if RestoreTime parameter is provided. **/
      UseLatestRestorableTime?: Boolean;
      /** The compute and memory capacity of the Amazon RDS DB instance.

Valid Values: db.t1.micro | db.m1.small | db.m1.medium | db.m1.large |
db.m1.xlarge | db.m2.2xlarge | db.m2.4xlarge | db.m3.medium | db.m3.large |
db.m3.xlarge | db.m3.2xlarge | db.m4.large | db.m4.xlarge | db.m4.2xlarge |
db.m4.4xlarge | db.m4.10xlarge | db.r3.large | db.r3.xlarge | db.r3.2xlarge |
db.r3.4xlarge | db.r3.8xlarge | db.t2.micro | db.t2.small | db.t2.medium |
db.t2.large 

Default: The same DBInstanceClass as the original DB instance. **/
      DBInstanceClass?: String;
      /** The port number on which the database accepts connections.

Constraints: Value must be 1150-65535 

Default: The same port as the original DB instance. **/
      Port?: IntegerOptional;
      /** The EC2 Availability Zone that the database instance will be created in.

Default: A random, system-chosen Availability Zone.

Constraint: You cannot specify the AvailabilityZone parameter if the MultiAZ
parameter is set to true.

Example: us-east-1a **/
      AvailabilityZone?: String;
      /** The DB subnet group name to use for the new instance.

Constraints: Must contain no more than 255 alphanumeric characters, periods,
underscores, spaces, or hyphens. Must not be default.

Example: mySubnetgroup **/
      DBSubnetGroupName?: String;
      /** Specifies if the DB instance is a Multi-AZ deployment.

Constraint: You cannot specify the AvailabilityZone parameter if the MultiAZ
parameter is set to true. **/
      MultiAZ?: BooleanOptional;
      /** Specifies the accessibility options for the DB instance. A value of true
specifies an Internet-facing instance with a publicly resolvable DNS name, which
resolves to a public IP address. A value of false specifies an internal instance
with a DNS name that resolves to a private IP address.

Default: The default behavior varies depending on whether a VPC has been
requested or not. The following list shows the default behavior in each case.

&amp;#42;   Default VPC:true
 
 
&amp;#42;   VPC:false
 
 

If no DB subnet group has been specified as part of the request and the
PubliclyAccessible value has not been set, the DB instance will be publicly
accessible. If a specific DB subnet group has been specified as part of the
request and the PubliclyAccessible value has not been set, the DB instance will
be private. **/
      PubliclyAccessible?: BooleanOptional;
      /** Indicates that minor version upgrades will be applied automatically to the DB
instance during the maintenance window. **/
      AutoMinorVersionUpgrade?: BooleanOptional;
      /** License model information for the restored DB instance.

Default: Same as source.

Valid values: license-included | bring-your-own-license | 
general-public-license **/
      LicenseModel?: String;
      /** The database name for the restored DB instance.

This parameter is not used for the MySQL or MariaDB engines. **/
      DBName?: String;
      /** The database engine to use for the new instance.

Default: The same as source

Constraint: Must be compatible with the engine of the source

Valid Values: MySQL | mariadb | oracle-se1 | oracle-se | oracle-ee | 
sqlserver-ee | sqlserver-se | sqlserver-ex | sqlserver-web | postgres | aurora **/
      Engine?: String;
      /** The amount of Provisioned IOPS (input/output operations per second) to be
initially allocated for the DB instance.

Constraints: Must be an integer greater than 1000.

SQL Server 

Setting the IOPS value for the SQL Server database engine is not supported. **/
      Iops?: IntegerOptional;
      /** The name of the option group to be used for the restored DB instance.

Permanent options, such as the TDE option for Oracle Advanced Security TDE,
cannot be removed from an option group, and that option group cannot be removed
from a DB instance once it is associated with a DB instance **/
      OptionGroupName?: String;
      /** True to copy all tags from the restored DB instance to snapshots of the DB
instance; otherwise false. The default is false. **/
      CopyTagsToSnapshot?: BooleanOptional;
      Tags?: TagList;
      /** Specifies the storage type to be associated with the DB instance.

Valid values: standard | gp2 | io1 

If you specify io1, you must also include a value for the Iops parameter. 

Default: io1 if the Iops parameter is specified; otherwise standard **/
      StorageType?: String;
      /** The ARN from the Key Store with which to associate the instance for TDE
encryption. **/
      TdeCredentialArn?: String;
      /** The password for the given ARN from the Key Store in order to access the device. **/
      TdeCredentialPassword?: String;
      /** Specify the Active Directory Domain to restore the instance in. **/
      Domain?: String;
      /** Specify the name of the IAM role to be used when making API calls to the
Directory Service. **/
      DomainIAMRoleName?: String;
    }
    export interface RestoreDBInstanceToPointInTimeResult {
      DBInstance?: DBInstance;
    }
    export interface RevokeDBSecurityGroupIngressMessage {
      /** The name of the DB security group to revoke ingress from. **/
      DBSecurityGroupName: String;
      /** The IP range to revoke access from. Must be a valid CIDR range. If CIDRIP is
specified, EC2SecurityGroupName, EC2SecurityGroupId and EC2SecurityGroupOwnerId 
cannot be provided. **/
      CIDRIP?: String;
      /** The name of the EC2 security group to revoke access from. For VPC DB security
groups, EC2SecurityGroupId must be provided. Otherwise, EC2SecurityGroupOwnerId
and either EC2SecurityGroupName or EC2SecurityGroupId must be provided. **/
      EC2SecurityGroupName?: String;
      /** The id of the EC2 security group to revoke access from. For VPC DB security
groups, EC2SecurityGroupId must be provided. Otherwise, EC2SecurityGroupOwnerId
and either EC2SecurityGroupName or EC2SecurityGroupId must be provided. **/
      EC2SecurityGroupId?: String;
      /** The AWS Account Number of the owner of the EC2 security group specified in the 
EC2SecurityGroupName parameter. The AWS Access Key ID is not an acceptable
value. For VPC DB security groups, EC2SecurityGroupId must be provided.
Otherwise, EC2SecurityGroupOwnerId and either EC2SecurityGroupName or 
EC2SecurityGroupId must be provided. **/
      EC2SecurityGroupOwnerId?: String;
    }
    export interface RevokeDBSecurityGroupIngressResult {
      DBSecurityGroup?: DBSecurityGroup;
    }
    export interface SNSInvalidTopicFault {
    }
    export interface SNSNoAuthorizationFault {
    }
    export interface SNSTopicArnNotFoundFault {
    }
    export interface SharedSnapshotQuotaExceededFault {
    }
    export interface SnapshotQuotaExceededFault {
    }
    export interface SourceNotFoundFault {
    }
    export interface StorageQuotaExceededFault {
    }
    export interface StorageTypeNotSupportedFault {
    }
    export interface Subnet {
      /** Specifies the identifier of the subnet. **/
      SubnetIdentifier?: String;
      SubnetAvailabilityZone?: AvailabilityZone;
      /** Specifies the status of the subnet. **/
      SubnetStatus?: String;
    }
    export interface SubnetAlreadyInUse {
    }
    export interface SubscriptionAlreadyExistFault {
    }
    export interface SubscriptionCategoryNotFoundFault {
    }
    export interface SubscriptionNotFoundFault {
    }
    export interface Tag {
      /** A key is the required name of the tag. The string value can be from 1 to 128
Unicode characters in length and cannot be prefixed with &quot;aws:&quot; or &quot;rds:&quot;. The
string can only contain only the set of Unicode letters, digits, white-space,
&#x27;_&#x27;, &#x27;.&#x27;, &#x27;/&#x27;, &#x27;=&#x27;, &#x27;+&#x27;, &#x27;-&#x27; (Java regex: &quot;^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]&amp;#42;)$&quot;). **/
      Key?: String;
      /** A value is the optional value of the tag. The string value can be from 1 to 256
Unicode characters in length and cannot be prefixed with &quot;aws:&quot; or &quot;rds:&quot;. The
string can only contain only the set of Unicode letters, digits, white-space,
&#x27;_&#x27;, &#x27;.&#x27;, &#x27;/&#x27;, &#x27;=&#x27;, &#x27;+&#x27;, &#x27;-&#x27; (Java regex: &quot;^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]&amp;#42;)$&quot;). **/
      Value?: String;
    }
    export interface TagListMessage {
      /** List of tags returned by the ListTagsForResource operation. **/
      TagList?: TagList;
    }
    export interface UpgradeTarget {
      /** The name of the upgrade target database engine. **/
      Engine?: String;
      /** The version number of the upgrade target database engine. **/
      EngineVersion?: String;
      /** The version of the database engine that a DB instance can be upgraded to. **/
      Description?: String;
      /** A value that indicates whether the target version will be applied to any source
DB instances that have AutoMinorVersionUpgrade set to true. **/
      AutoUpgrade?: Boolean;
      /** A value that indicates whether a database engine will be upgraded to a major
version. **/
      IsMajorVersionUpgrade?: Boolean;
    }
    export interface VpcSecurityGroupMembership {
      /** The name of the VPC security group. **/
      VpcSecurityGroupId?: String;
      /** The status of the VPC security group. **/
      Status?: String;
    }
  }
}
