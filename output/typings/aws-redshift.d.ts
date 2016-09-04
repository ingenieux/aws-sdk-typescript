// Type definitions for aws-sdk - Amazon Redshift
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2012-12-01
    * endpointPrefix: redshift
    * serviceAbbreviation: 
    * signatureVersion: v4
    * protocol: query
    *
    * Amazon Redshift Overview  This is an interface reference for Amazon Redshift. It
 contains documentation for one of the programming or command line interfaces you
 can use to manage Amazon Redshift clusters. Note that Amazon Redshift is
 asynchronous, which means that some interfaces may require techniques, such as
 polling or asynchronous callback handlers, to determine when a command has been
 applied. In this reference, the parameter descriptions indicate whether a change
 is applied immediately, on the next instance reboot, or during the next
 maintenance window. For a summary of the Amazon Redshift cluster management
 interfaces, go to Using the Amazon Redshift Management Interfaces
 [http://docs.aws.amazon.com/redshift/latest/mgmt/using-aws-sdk.html].
 
  Amazon Redshift manages all the work of setting up, operating, and scaling a
 data warehouse: provisioning capacity, monitoring and backing up the cluster,
 and applying patches and upgrades to the Amazon Redshift engine. You can focus
 on using your data to acquire new insights for your business and customers. 
 
 If you are a first-time user of Amazon Redshift, we recommend that you begin by
 reading the The Amazon Redshift Getting Started Guide
 [http://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html]
 
 If you are a database developer, the Amazon Redshift Database Developer Guide
 [http://docs.aws.amazon.com/redshift/latest/dg/welcome.html] explains how to
 design, build, query, and maintain the databases that make up your data
 warehouse.
    *
    */
  export class Redshift extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending
on whether the application accessing your cluster is running on the Internet or
an Amazon EC2 instance, you can authorize inbound access to either a Classless
Interdomain Routing (CIDR)/Internet Protocol (IP) range or to an Amazon EC2
security group. You can add as many as 20 ingress rules to an Amazon Redshift
security group. 

If you authorize access to an Amazon EC2 security group, specify 
EC2SecurityGroupName and EC2SecurityGroupOwnerId. The Amazon EC2 security group
and Amazon Redshift cluster must be in the same AWS region. 

 If you authorize access to a CIDR/IP address range, specify CIDRIP. For an
overview of CIDR blocks, see the Wikipedia article on Classless Inter-Domain
Routing [http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing]. 

 You must also associate the security group with a cluster so that clients
running on these IP addresses or the EC2 instance are authorized to connect to
the cluster. For information about managing security groups, go to Working with
Security Groups
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html] 
in the Amazon Redshift Cluster Management Guide.
     *
     * @error ClusterSecurityGroupNotFoundFault   
     * @error InvalidClusterSecurityGroupStateFault   
     * @error AuthorizationAlreadyExistsFault   
     * @error AuthorizationQuotaExceededFault   
     */
    authorizeClusterSecurityGroupIngress(params: Redshift.AuthorizeClusterSecurityGroupIngressMessage, callback?: (err: Redshift.ClusterSecurityGroupNotFoundFault | Redshift.InvalidClusterSecurityGroupStateFault | Redshift.AuthorizationAlreadyExistsFault | Redshift.AuthorizationQuotaExceededFault | any, data: Redshift.AuthorizeClusterSecurityGroupIngressResult | any) => void): Request<Redshift.AuthorizeClusterSecurityGroupIngressResult | any, Redshift.ClusterSecurityGroupNotFoundFault | Redshift.InvalidClusterSecurityGroupStateFault | Redshift.AuthorizationAlreadyExistsFault | Redshift.AuthorizationQuotaExceededFault | any>;
    /**
     * Authorizes the specified AWS customer account to restore the specified
snapshot. 

 For more information about working with snapshots, go to Amazon Redshift
Snapshots
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html] in
the Amazon Redshift Cluster Management Guide.
     *
     * @error ClusterSnapshotNotFoundFault   
     * @error AuthorizationAlreadyExistsFault   
     * @error AuthorizationQuotaExceededFault   
     * @error DependentServiceRequestThrottlingFault   
     * @error InvalidClusterSnapshotStateFault   
     * @error LimitExceededFault   
     */
    authorizeSnapshotAccess(params: Redshift.AuthorizeSnapshotAccessMessage, callback?: (err: Redshift.ClusterSnapshotNotFoundFault | Redshift.AuthorizationAlreadyExistsFault | Redshift.AuthorizationQuotaExceededFault | Redshift.DependentServiceRequestThrottlingFault | Redshift.InvalidClusterSnapshotStateFault | Redshift.LimitExceededFault | any, data: Redshift.AuthorizeSnapshotAccessResult | any) => void): Request<Redshift.AuthorizeSnapshotAccessResult | any, Redshift.ClusterSnapshotNotFoundFault | Redshift.AuthorizationAlreadyExistsFault | Redshift.AuthorizationQuotaExceededFault | Redshift.DependentServiceRequestThrottlingFault | Redshift.InvalidClusterSnapshotStateFault | Redshift.LimitExceededFault | any>;
    /**
     * Copies the specified automated cluster snapshot to a new manual cluster
snapshot. The source must be an automated snapshot and it must be in the
available state. 

 When you delete a cluster, Amazon Redshift deletes any automated snapshots of
the cluster. Also, when the retention period of the snapshot expires, Amazon
Redshift automatically deletes it. If you want to keep an automated snapshot for
a longer period, you can make a manual copy of the snapshot. Manual snapshots
are retained until you delete them. 

 For more information about working with snapshots, go to Amazon Redshift
Snapshots
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html] in
the Amazon Redshift Cluster Management Guide.
     *
     * @error ClusterSnapshotAlreadyExistsFault   
     * @error ClusterSnapshotNotFoundFault   
     * @error InvalidClusterSnapshotStateFault   
     * @error ClusterSnapshotQuotaExceededFault   
     */
    copyClusterSnapshot(params: Redshift.CopyClusterSnapshotMessage, callback?: (err: Redshift.ClusterSnapshotAlreadyExistsFault | Redshift.ClusterSnapshotNotFoundFault | Redshift.InvalidClusterSnapshotStateFault | Redshift.ClusterSnapshotQuotaExceededFault | any, data: Redshift.CopyClusterSnapshotResult | any) => void): Request<Redshift.CopyClusterSnapshotResult | any, Redshift.ClusterSnapshotAlreadyExistsFault | Redshift.ClusterSnapshotNotFoundFault | Redshift.InvalidClusterSnapshotStateFault | Redshift.ClusterSnapshotQuotaExceededFault | any>;
    /**
     * Creates a new cluster. To create the cluster in virtual private cloud (VPC),
you must provide cluster subnet group name. If you don&#x27;t provide a cluster
subnet group name or the cluster security group parameter, Amazon Redshift
creates a non-VPC cluster, it associates the default cluster security group with
the cluster. For more information about managing clusters, go to Amazon Redshift
Clusters
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html] in
the Amazon Redshift Cluster Management Guide .
     *
     * @error ClusterAlreadyExistsFault   
     * @error InsufficientClusterCapacityFault   
     * @error ClusterParameterGroupNotFoundFault   
     * @error ClusterSecurityGroupNotFoundFault   
     * @error ClusterQuotaExceededFault   
     * @error NumberOfNodesQuotaExceededFault   
     * @error NumberOfNodesPerClusterLimitExceededFault   
     * @error ClusterSubnetGroupNotFoundFault   
     * @error InvalidVPCNetworkStateFault   
     * @error InvalidClusterSubnetGroupStateFault   
     * @error InvalidSubnet   
     * @error UnauthorizedOperation   
     * @error HsmClientCertificateNotFoundFault   
     * @error HsmConfigurationNotFoundFault   
     * @error InvalidElasticIpFault   
     * @error TagLimitExceededFault   
     * @error InvalidTagFault   
     * @error LimitExceededFault   
     * @error DependentServiceRequestThrottlingFault   
     */
    createCluster(params: Redshift.CreateClusterMessage, callback?: (err: Redshift.ClusterAlreadyExistsFault | Redshift.InsufficientClusterCapacityFault | Redshift.ClusterParameterGroupNotFoundFault | Redshift.ClusterSecurityGroupNotFoundFault | Redshift.ClusterQuotaExceededFault | Redshift.NumberOfNodesQuotaExceededFault | Redshift.NumberOfNodesPerClusterLimitExceededFault | Redshift.ClusterSubnetGroupNotFoundFault | Redshift.InvalidVPCNetworkStateFault | Redshift.InvalidClusterSubnetGroupStateFault | Redshift.InvalidSubnet | Redshift.UnauthorizedOperation | Redshift.HsmClientCertificateNotFoundFault | Redshift.HsmConfigurationNotFoundFault | Redshift.InvalidElasticIpFault | Redshift.TagLimitExceededFault | Redshift.InvalidTagFault | Redshift.LimitExceededFault | Redshift.DependentServiceRequestThrottlingFault | any, data: Redshift.CreateClusterResult | any) => void): Request<Redshift.CreateClusterResult | any, Redshift.ClusterAlreadyExistsFault | Redshift.InsufficientClusterCapacityFault | Redshift.ClusterParameterGroupNotFoundFault | Redshift.ClusterSecurityGroupNotFoundFault | Redshift.ClusterQuotaExceededFault | Redshift.NumberOfNodesQuotaExceededFault | Redshift.NumberOfNodesPerClusterLimitExceededFault | Redshift.ClusterSubnetGroupNotFoundFault | Redshift.InvalidVPCNetworkStateFault | Redshift.InvalidClusterSubnetGroupStateFault | Redshift.InvalidSubnet | Redshift.UnauthorizedOperation | Redshift.HsmClientCertificateNotFoundFault | Redshift.HsmConfigurationNotFoundFault | Redshift.InvalidElasticIpFault | Redshift.TagLimitExceededFault | Redshift.InvalidTagFault | Redshift.LimitExceededFault | Redshift.DependentServiceRequestThrottlingFault | any>;
    /**
     * Creates an Amazon Redshift parameter group. 

Creating parameter groups is independent of creating clusters. You can associate
a cluster with a parameter group when you create the cluster. You can also
associate an existing cluster with a parameter group after the cluster is
created by using ModifyCluster. 

 Parameters in the parameter group define specific behavior that applies to the
databases you create on the cluster. For more information about parameters and
parameter groups, go to Amazon Redshift Parameter Groups
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html] 
in the Amazon Redshift Cluster Management Guide.
     *
     * @error ClusterParameterGroupQuotaExceededFault   
     * @error ClusterParameterGroupAlreadyExistsFault   
     * @error TagLimitExceededFault   
     * @error InvalidTagFault   
     */
    createClusterParameterGroup(params: Redshift.CreateClusterParameterGroupMessage, callback?: (err: Redshift.ClusterParameterGroupQuotaExceededFault | Redshift.ClusterParameterGroupAlreadyExistsFault | Redshift.TagLimitExceededFault | Redshift.InvalidTagFault | any, data: Redshift.CreateClusterParameterGroupResult | any) => void): Request<Redshift.CreateClusterParameterGroupResult | any, Redshift.ClusterParameterGroupQuotaExceededFault | Redshift.ClusterParameterGroupAlreadyExistsFault | Redshift.TagLimitExceededFault | Redshift.InvalidTagFault | any>;
    /**
     * Creates a new Amazon Redshift security group. You use security groups to
control access to non-VPC clusters. 

 For information about managing security groups, go to Amazon Redshift Cluster
Security Groups
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html] 
in the Amazon Redshift Cluster Management Guide.
     *
     * @error ClusterSecurityGroupAlreadyExistsFault   
     * @error ClusterSecurityGroupQuotaExceededFault   
     * @error TagLimitExceededFault   
     * @error InvalidTagFault   
     */
    createClusterSecurityGroup(params: Redshift.CreateClusterSecurityGroupMessage, callback?: (err: Redshift.ClusterSecurityGroupAlreadyExistsFault | Redshift.ClusterSecurityGroupQuotaExceededFault | Redshift.TagLimitExceededFault | Redshift.InvalidTagFault | any, data: Redshift.CreateClusterSecurityGroupResult | any) => void): Request<Redshift.CreateClusterSecurityGroupResult | any, Redshift.ClusterSecurityGroupAlreadyExistsFault | Redshift.ClusterSecurityGroupQuotaExceededFault | Redshift.TagLimitExceededFault | Redshift.InvalidTagFault | any>;
    /**
     * Creates a manual snapshot of the specified cluster. The cluster must be in the 
available state. 

 For more information about working with snapshots, go to Amazon Redshift
Snapshots
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html] in
the Amazon Redshift Cluster Management Guide.
     *
     * @error ClusterSnapshotAlreadyExistsFault   
     * @error InvalidClusterStateFault   
     * @error ClusterNotFoundFault   
     * @error ClusterSnapshotQuotaExceededFault   
     * @error TagLimitExceededFault   
     * @error InvalidTagFault   
     */
    createClusterSnapshot(params: Redshift.CreateClusterSnapshotMessage, callback?: (err: Redshift.ClusterSnapshotAlreadyExistsFault | Redshift.InvalidClusterStateFault | Redshift.ClusterNotFoundFault | Redshift.ClusterSnapshotQuotaExceededFault | Redshift.TagLimitExceededFault | Redshift.InvalidTagFault | any, data: Redshift.CreateClusterSnapshotResult | any) => void): Request<Redshift.CreateClusterSnapshotResult | any, Redshift.ClusterSnapshotAlreadyExistsFault | Redshift.InvalidClusterStateFault | Redshift.ClusterNotFoundFault | Redshift.ClusterSnapshotQuotaExceededFault | Redshift.TagLimitExceededFault | Redshift.InvalidTagFault | any>;
    /**
     * Creates a new Amazon Redshift subnet group. You must provide a list of one or
more subnets in your existing Amazon Virtual Private Cloud (Amazon VPC) when
creating Amazon Redshift subnet group. 

 For information about subnet groups, go to Amazon Redshift Cluster Subnet
Groups
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-cluster-subnet-groups.html] 
in the Amazon Redshift Cluster Management Guide.
     *
     * @error ClusterSubnetGroupAlreadyExistsFault   
     * @error ClusterSubnetGroupQuotaExceededFault   
     * @error ClusterSubnetQuotaExceededFault   
     * @error InvalidSubnet   
     * @error UnauthorizedOperation   
     * @error TagLimitExceededFault   
     * @error InvalidTagFault   
     * @error DependentServiceRequestThrottlingFault   
     */
    createClusterSubnetGroup(params: Redshift.CreateClusterSubnetGroupMessage, callback?: (err: Redshift.ClusterSubnetGroupAlreadyExistsFault | Redshift.ClusterSubnetGroupQuotaExceededFault | Redshift.ClusterSubnetQuotaExceededFault | Redshift.InvalidSubnet | Redshift.UnauthorizedOperation | Redshift.TagLimitExceededFault | Redshift.InvalidTagFault | Redshift.DependentServiceRequestThrottlingFault | any, data: Redshift.CreateClusterSubnetGroupResult | any) => void): Request<Redshift.CreateClusterSubnetGroupResult | any, Redshift.ClusterSubnetGroupAlreadyExistsFault | Redshift.ClusterSubnetGroupQuotaExceededFault | Redshift.ClusterSubnetQuotaExceededFault | Redshift.InvalidSubnet | Redshift.UnauthorizedOperation | Redshift.TagLimitExceededFault | Redshift.InvalidTagFault | Redshift.DependentServiceRequestThrottlingFault | any>;
    /**
     * Creates an Amazon Redshift event notification subscription. This action
requires an ARN (Amazon Resource Name) of an Amazon SNS topic created by either
the Amazon Redshift console, the Amazon SNS console, or the Amazon SNS API. To
obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and
subscribe to the topic. The ARN is displayed in the SNS console. 

 You can specify the source type, and lists of Amazon Redshift source IDs, event
categories, and event severities. Notifications will be sent for all events you
want that match those criteria. For example, you can specify source type =
cluster, source ID = my-cluster-1 and mycluster2, event categories =
Availability, Backup, and severity = ERROR. The subscription will only send
notifications for those ERROR events in the Availability and Backup categories
for the specified clusters. 

 If you specify both the source type and source IDs, such as source type =
cluster and source identifier = my-cluster-1, notifications will be sent for all
the cluster events for my-cluster-1. If you specify a source type but do not
specify a source identifier, you will receive notice of the events for the
objects of that type in your AWS account. If you do not specify either the
SourceType nor the SourceIdentifier, you will be notified of events generated
from all Amazon Redshift sources belonging to your AWS account. You must specify
a source type if you specify a source ID.
     *
     * @error EventSubscriptionQuotaExceededFault   
     * @error SubscriptionAlreadyExistFault   
     * @error SNSInvalidTopicFault   
     * @error SNSNoAuthorizationFault   
     * @error SNSTopicArnNotFoundFault   
     * @error SubscriptionEventIdNotFoundFault   
     * @error SubscriptionCategoryNotFoundFault   
     * @error SubscriptionSeverityNotFoundFault   
     * @error SourceNotFoundFault   
     * @error TagLimitExceededFault   
     * @error InvalidTagFault   
     */
    createEventSubscription(params: Redshift.CreateEventSubscriptionMessage, callback?: (err: Redshift.EventSubscriptionQuotaExceededFault | Redshift.SubscriptionAlreadyExistFault | Redshift.SNSInvalidTopicFault | Redshift.SNSNoAuthorizationFault | Redshift.SNSTopicArnNotFoundFault | Redshift.SubscriptionEventIdNotFoundFault | Redshift.SubscriptionCategoryNotFoundFault | Redshift.SubscriptionSeverityNotFoundFault | Redshift.SourceNotFoundFault | Redshift.TagLimitExceededFault | Redshift.InvalidTagFault | any, data: Redshift.CreateEventSubscriptionResult | any) => void): Request<Redshift.CreateEventSubscriptionResult | any, Redshift.EventSubscriptionQuotaExceededFault | Redshift.SubscriptionAlreadyExistFault | Redshift.SNSInvalidTopicFault | Redshift.SNSNoAuthorizationFault | Redshift.SNSTopicArnNotFoundFault | Redshift.SubscriptionEventIdNotFoundFault | Redshift.SubscriptionCategoryNotFoundFault | Redshift.SubscriptionSeverityNotFoundFault | Redshift.SourceNotFoundFault | Redshift.TagLimitExceededFault | Redshift.InvalidTagFault | any>;
    /**
     * Creates an HSM client certificate that an Amazon Redshift cluster will use to
connect to the client&#x27;s HSM in order to store and retrieve the keys used to
encrypt the cluster databases.

The command returns a public key, which you must store in the HSM. In addition
to creating the HSM certificate, you must create an Amazon Redshift HSM
configuration that provides a cluster the information needed to store and use
encryption keys in the HSM. For more information, go to Hardware Security
Modules [http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-HSM.html] 
in the Amazon Redshift Cluster Management Guide.
     *
     * @error HsmClientCertificateAlreadyExistsFault   
     * @error HsmClientCertificateQuotaExceededFault   
     * @error TagLimitExceededFault   
     * @error InvalidTagFault   
     */
    createHsmClientCertificate(params: Redshift.CreateHsmClientCertificateMessage, callback?: (err: Redshift.HsmClientCertificateAlreadyExistsFault | Redshift.HsmClientCertificateQuotaExceededFault | Redshift.TagLimitExceededFault | Redshift.InvalidTagFault | any, data: Redshift.CreateHsmClientCertificateResult | any) => void): Request<Redshift.CreateHsmClientCertificateResult | any, Redshift.HsmClientCertificateAlreadyExistsFault | Redshift.HsmClientCertificateQuotaExceededFault | Redshift.TagLimitExceededFault | Redshift.InvalidTagFault | any>;
    /**
     * Creates an HSM configuration that contains the information required by an Amazon
Redshift cluster to store and use database encryption keys in a Hardware
Security Module (HSM). After creating the HSM configuration, you can specify it
as a parameter when creating a cluster. The cluster will then store its
encryption keys in the HSM.

In addition to creating an HSM configuration, you must also create an HSM client
certificate. For more information, go to Hardware Security Modules
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-HSM.html] in the
Amazon Redshift Cluster Management Guide.
     *
     * @error HsmConfigurationAlreadyExistsFault   
     * @error HsmConfigurationQuotaExceededFault   
     * @error TagLimitExceededFault   
     * @error InvalidTagFault   
     */
    createHsmConfiguration(params: Redshift.CreateHsmConfigurationMessage, callback?: (err: Redshift.HsmConfigurationAlreadyExistsFault | Redshift.HsmConfigurationQuotaExceededFault | Redshift.TagLimitExceededFault | Redshift.InvalidTagFault | any, data: Redshift.CreateHsmConfigurationResult | any) => void): Request<Redshift.CreateHsmConfigurationResult | any, Redshift.HsmConfigurationAlreadyExistsFault | Redshift.HsmConfigurationQuotaExceededFault | Redshift.TagLimitExceededFault | Redshift.InvalidTagFault | any>;
    /**
     * Creates a snapshot copy grant that permits Amazon Redshift to use a customer
master key (CMK) from AWS Key Management Service (AWS KMS) to encrypt copied
snapshots in a destination region.

 For more information about managing snapshot copy grants, go to Amazon Redshift
Database Encryption
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html] 
in the Amazon Redshift Cluster Management Guide.
     *
     * @error SnapshotCopyGrantAlreadyExistsFault   
     * @error SnapshotCopyGrantQuotaExceededFault   
     * @error LimitExceededFault   
     * @error TagLimitExceededFault   
     * @error InvalidTagFault   
     * @error DependentServiceRequestThrottlingFault   
     */
    createSnapshotCopyGrant(params: Redshift.CreateSnapshotCopyGrantMessage, callback?: (err: Redshift.SnapshotCopyGrantAlreadyExistsFault | Redshift.SnapshotCopyGrantQuotaExceededFault | Redshift.LimitExceededFault | Redshift.TagLimitExceededFault | Redshift.InvalidTagFault | Redshift.DependentServiceRequestThrottlingFault | any, data: Redshift.CreateSnapshotCopyGrantResult | any) => void): Request<Redshift.CreateSnapshotCopyGrantResult | any, Redshift.SnapshotCopyGrantAlreadyExistsFault | Redshift.SnapshotCopyGrantQuotaExceededFault | Redshift.LimitExceededFault | Redshift.TagLimitExceededFault | Redshift.InvalidTagFault | Redshift.DependentServiceRequestThrottlingFault | any>;
    /**
     * Adds one or more tags to a specified resource. 

 A resource can have up to 10 tags. If you try to create more than 10 tags for a
resource, you will receive an error and the attempt will fail. 

 If you specify a key that already exists for the resource, the value for that
key will be updated with the new value.
     *
     * @error TagLimitExceededFault   
     * @error ResourceNotFoundFault   
     * @error InvalidTagFault   
     */
    createTags(params: Redshift.CreateTagsMessage, callback?: (err: Redshift.TagLimitExceededFault | Redshift.ResourceNotFoundFault | Redshift.InvalidTagFault | any, data: any) => void): Request<any, Redshift.TagLimitExceededFault | Redshift.ResourceNotFoundFault | Redshift.InvalidTagFault | any>;
    /**
     * Deletes a previously provisioned cluster. A successful response from the web
service indicates that the request was received correctly. Use DescribeClusters 
to monitor the status of the deletion. The delete operation cannot be canceled
or reverted once submitted. For more information about managing clusters, go to 
Amazon Redshift Clusters
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html] in
the Amazon Redshift Cluster Management Guide . 

 If you want to shut down the cluster and retain it for future use, set 
SkipFinalClusterSnapshot to false and specify a name for 
FinalClusterSnapshotIdentifier. You can later restore this snapshot to resume
using the cluster. If a final cluster snapshot is requested, the status of the
cluster will be &quot;final-snapshot&quot; while the snapshot is being taken, then it&#x27;s
&quot;deleting&quot; once Amazon Redshift begins deleting the cluster. 

 For more information about managing clusters, go to Amazon Redshift Clusters
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html] in
the Amazon Redshift Cluster Management Guide .
     *
     * @error ClusterNotFoundFault   
     * @error InvalidClusterStateFault   
     * @error ClusterSnapshotAlreadyExistsFault   
     * @error ClusterSnapshotQuotaExceededFault   
     */
    deleteCluster(params: Redshift.DeleteClusterMessage, callback?: (err: Redshift.ClusterNotFoundFault | Redshift.InvalidClusterStateFault | Redshift.ClusterSnapshotAlreadyExistsFault | Redshift.ClusterSnapshotQuotaExceededFault | any, data: Redshift.DeleteClusterResult | any) => void): Request<Redshift.DeleteClusterResult | any, Redshift.ClusterNotFoundFault | Redshift.InvalidClusterStateFault | Redshift.ClusterSnapshotAlreadyExistsFault | Redshift.ClusterSnapshotQuotaExceededFault | any>;
    /**
     * Deletes a specified Amazon Redshift parameter group. You cannot delete a
parameter group if it is associated with a cluster.
     *
     * @error InvalidClusterParameterGroupStateFault   
     * @error ClusterParameterGroupNotFoundFault   
     */
    deleteClusterParameterGroup(params: Redshift.DeleteClusterParameterGroupMessage, callback?: (err: Redshift.InvalidClusterParameterGroupStateFault | Redshift.ClusterParameterGroupNotFoundFault | any, data: any) => void): Request<any, Redshift.InvalidClusterParameterGroupStateFault | Redshift.ClusterParameterGroupNotFoundFault | any>;
    /**
     * Deletes an Amazon Redshift security group. 

You cannot delete a security group that is associated with any clusters. You
cannot delete the default security group.  For information about managing
security groups, go to Amazon Redshift Cluster Security Groups
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html] 
in the Amazon Redshift Cluster Management Guide.
     *
     * @error InvalidClusterSecurityGroupStateFault   
     * @error ClusterSecurityGroupNotFoundFault   
     */
    deleteClusterSecurityGroup(params: Redshift.DeleteClusterSecurityGroupMessage, callback?: (err: Redshift.InvalidClusterSecurityGroupStateFault | Redshift.ClusterSecurityGroupNotFoundFault | any, data: any) => void): Request<any, Redshift.InvalidClusterSecurityGroupStateFault | Redshift.ClusterSecurityGroupNotFoundFault | any>;
    /**
     * Deletes the specified manual snapshot. The snapshot must be in the available 
state, with no other users authorized to access the snapshot. 

 Unlike automated snapshots, manual snapshots are retained even after you delete
your cluster. Amazon Redshift does not delete your manual snapshots. You must
delete manual snapshot explicitly to avoid getting charged. If other accounts
are authorized to access the snapshot, you must revoke all of the authorizations
before you can delete the snapshot.
     *
     * @error InvalidClusterSnapshotStateFault   
     * @error ClusterSnapshotNotFoundFault   
     */
    deleteClusterSnapshot(params: Redshift.DeleteClusterSnapshotMessage, callback?: (err: Redshift.InvalidClusterSnapshotStateFault | Redshift.ClusterSnapshotNotFoundFault | any, data: Redshift.DeleteClusterSnapshotResult | any) => void): Request<Redshift.DeleteClusterSnapshotResult | any, Redshift.InvalidClusterSnapshotStateFault | Redshift.ClusterSnapshotNotFoundFault | any>;
    /**
     * Deletes the specified cluster subnet group.
     *
     * @error InvalidClusterSubnetGroupStateFault   
     * @error InvalidClusterSubnetStateFault   
     * @error ClusterSubnetGroupNotFoundFault   
     */
    deleteClusterSubnetGroup(params: Redshift.DeleteClusterSubnetGroupMessage, callback?: (err: Redshift.InvalidClusterSubnetGroupStateFault | Redshift.InvalidClusterSubnetStateFault | Redshift.ClusterSubnetGroupNotFoundFault | any, data: any) => void): Request<any, Redshift.InvalidClusterSubnetGroupStateFault | Redshift.InvalidClusterSubnetStateFault | Redshift.ClusterSubnetGroupNotFoundFault | any>;
    /**
     * Deletes an Amazon Redshift event notification subscription.
     *
     * @error SubscriptionNotFoundFault   
     * @error InvalidSubscriptionStateFault   
     */
    deleteEventSubscription(params: Redshift.DeleteEventSubscriptionMessage, callback?: (err: Redshift.SubscriptionNotFoundFault | Redshift.InvalidSubscriptionStateFault | any, data: any) => void): Request<any, Redshift.SubscriptionNotFoundFault | Redshift.InvalidSubscriptionStateFault | any>;
    /**
     * Deletes the specified HSM client certificate.
     *
     * @error InvalidHsmClientCertificateStateFault   
     * @error HsmClientCertificateNotFoundFault   
     */
    deleteHsmClientCertificate(params: Redshift.DeleteHsmClientCertificateMessage, callback?: (err: Redshift.InvalidHsmClientCertificateStateFault | Redshift.HsmClientCertificateNotFoundFault | any, data: any) => void): Request<any, Redshift.InvalidHsmClientCertificateStateFault | Redshift.HsmClientCertificateNotFoundFault | any>;
    /**
     * Deletes the specified Amazon Redshift HSM configuration.
     *
     * @error InvalidHsmConfigurationStateFault   
     * @error HsmConfigurationNotFoundFault   
     */
    deleteHsmConfiguration(params: Redshift.DeleteHsmConfigurationMessage, callback?: (err: Redshift.InvalidHsmConfigurationStateFault | Redshift.HsmConfigurationNotFoundFault | any, data: any) => void): Request<any, Redshift.InvalidHsmConfigurationStateFault | Redshift.HsmConfigurationNotFoundFault | any>;
    /**
     * Deletes the specified snapshot copy grant.
     *
     * @error InvalidSnapshotCopyGrantStateFault   
     * @error SnapshotCopyGrantNotFoundFault   
     */
    deleteSnapshotCopyGrant(params: Redshift.DeleteSnapshotCopyGrantMessage, callback?: (err: Redshift.InvalidSnapshotCopyGrantStateFault | Redshift.SnapshotCopyGrantNotFoundFault | any, data: any) => void): Request<any, Redshift.InvalidSnapshotCopyGrantStateFault | Redshift.SnapshotCopyGrantNotFoundFault | any>;
    /**
     * Deletes a tag or tags from a resource. You must provide the ARN of the resource
from which you want to delete the tag or tags.
     *
     * @error ResourceNotFoundFault   
     * @error InvalidTagFault   
     */
    deleteTags(params: Redshift.DeleteTagsMessage, callback?: (err: Redshift.ResourceNotFoundFault | Redshift.InvalidTagFault | any, data: any) => void): Request<any, Redshift.ResourceNotFoundFault | Redshift.InvalidTagFault | any>;
    /**
     * Returns a list of Amazon Redshift parameter groups, including parameter groups
you created and the default parameter group. For each parameter group, the
response includes the parameter group name, description, and parameter group
family name. You can optionally specify a name to retrieve the description of a
specific parameter group. 

 For more information about parameters and parameter groups, go to Amazon
Redshift Parameter Groups
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html] 
in the Amazon Redshift Cluster Management Guide. 

If you specify both tag keys and tag values in the same request, Amazon Redshift
returns all parameter groups that match any combination of the specified keys
and values. For example, if you have owner and environment for tag keys, and 
admin and test for tag values, all parameter groups that have any combination of
those values are returned.

If both tag keys and values are omitted from the request, parameter groups are
returned regardless of whether they have tag keys or values associated with
them.
     *
     * @error ClusterParameterGroupNotFoundFault   
     * @error InvalidTagFault   
     */
    describeClusterParameterGroups(params: Redshift.DescribeClusterParameterGroupsMessage, callback?: (err: Redshift.ClusterParameterGroupNotFoundFault | Redshift.InvalidTagFault | any, data: Redshift.ClusterParameterGroupsMessage | any) => void): Request<Redshift.ClusterParameterGroupsMessage | any, Redshift.ClusterParameterGroupNotFoundFault | Redshift.InvalidTagFault | any>;
    /**
     * Returns a detailed list of parameters contained within the specified Amazon
Redshift parameter group. For each parameter the response includes information
such as parameter name, description, data type, value, whether the parameter
value is modifiable, and so on. 

You can specify source filter to retrieve parameters of only specific type. For
example, to retrieve parameters that were modified by a user action such as from 
ModifyClusterParameterGroup, you can specify source equal to user.

 For more information about parameters and parameter groups, go to Amazon
Redshift Parameter Groups
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html] 
in the Amazon Redshift Cluster Management Guide.
     *
     * @error ClusterParameterGroupNotFoundFault   
     */
    describeClusterParameters(params: Redshift.DescribeClusterParametersMessage, callback?: (err: Redshift.ClusterParameterGroupNotFoundFault | any, data: Redshift.ClusterParameterGroupDetails | any) => void): Request<Redshift.ClusterParameterGroupDetails | any, Redshift.ClusterParameterGroupNotFoundFault | any>;
    /**
     * Returns information about Amazon Redshift security groups. If the name of a
security group is specified, the response will contain only information about
only that security group. 

 For information about managing security groups, go to Amazon Redshift Cluster
Security Groups
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html] 
in the Amazon Redshift Cluster Management Guide. 

If you specify both tag keys and tag values in the same request, Amazon Redshift
returns all security groups that match any combination of the specified keys and
values. For example, if you have owner and environment for tag keys, and admin 
and test for tag values, all security groups that have any combination of those
values are returned.

If both tag keys and values are omitted from the request, security groups are
returned regardless of whether they have tag keys or values associated with
them.
     *
     * @error ClusterSecurityGroupNotFoundFault   
     * @error InvalidTagFault   
     */
    describeClusterSecurityGroups(params: Redshift.DescribeClusterSecurityGroupsMessage, callback?: (err: Redshift.ClusterSecurityGroupNotFoundFault | Redshift.InvalidTagFault | any, data: Redshift.ClusterSecurityGroupMessage | any) => void): Request<Redshift.ClusterSecurityGroupMessage | any, Redshift.ClusterSecurityGroupNotFoundFault | Redshift.InvalidTagFault | any>;
    /**
     * Returns one or more snapshot objects, which contain metadata about your cluster
snapshots. By default, this operation returns information about all snapshots of
all clusters that are owned by you AWS customer account. No information is
returned for snapshots owned by inactive AWS customer accounts. 

If you specify both tag keys and tag values in the same request, Amazon Redshift
returns all snapshots that match any combination of the specified keys and
values. For example, if you have owner and environment for tag keys, and admin 
and test for tag values, all snapshots that have any combination of those values
are returned. Only snapshots that you own are returned in the response; shared
snapshots are not returned with the tag key and tag value request parameters.

If both tag keys and values are omitted from the request, snapshots are returned
regardless of whether they have tag keys or values associated with them.
     *
     * @error ClusterSnapshotNotFoundFault   
     * @error InvalidTagFault   
     */
    describeClusterSnapshots(params: Redshift.DescribeClusterSnapshotsMessage, callback?: (err: Redshift.ClusterSnapshotNotFoundFault | Redshift.InvalidTagFault | any, data: Redshift.SnapshotMessage | any) => void): Request<Redshift.SnapshotMessage | any, Redshift.ClusterSnapshotNotFoundFault | Redshift.InvalidTagFault | any>;
    /**
     * Returns one or more cluster subnet group objects, which contain metadata about
your cluster subnet groups. By default, this operation returns information about
all cluster subnet groups that are defined in you AWS account. 

If you specify both tag keys and tag values in the same request, Amazon Redshift
returns all subnet groups that match any combination of the specified keys and
values. For example, if you have owner and environment for tag keys, and admin 
and test for tag values, all subnet groups that have any combination of those
values are returned.

If both tag keys and values are omitted from the request, subnet groups are
returned regardless of whether they have tag keys or values associated with
them.
     *
     * @error ClusterSubnetGroupNotFoundFault   
     * @error InvalidTagFault   
     */
    describeClusterSubnetGroups(params: Redshift.DescribeClusterSubnetGroupsMessage, callback?: (err: Redshift.ClusterSubnetGroupNotFoundFault | Redshift.InvalidTagFault | any, data: Redshift.ClusterSubnetGroupMessage | any) => void): Request<Redshift.ClusterSubnetGroupMessage | any, Redshift.ClusterSubnetGroupNotFoundFault | Redshift.InvalidTagFault | any>;
    /**
     * Returns descriptions of the available Amazon Redshift cluster versions. You can
call this operation even before creating any clusters to learn more about the
Amazon Redshift versions. For more information about managing clusters, go to 
Amazon Redshift Clusters
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html] in
the Amazon Redshift Cluster Management Guide
     *
     */
    describeClusterVersions(params: Redshift.DescribeClusterVersionsMessage, callback?: (err: any, data: Redshift.ClusterVersionsMessage | any) => void): Request<Redshift.ClusterVersionsMessage | any, any>;
    /**
     * Returns properties of provisioned clusters including general cluster
properties, cluster database properties, maintenance and backup properties, and
security and access properties. This operation supports pagination. For more
information about managing clusters, go to Amazon Redshift Clusters
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html] in
the Amazon Redshift Cluster Management Guide . 

If you specify both tag keys and tag values in the same request, Amazon Redshift
returns all clusters that match any combination of the specified keys and
values. For example, if you have owner and environment for tag keys, and admin 
and test for tag values, all clusters that have any combination of those values
are returned.

If both tag keys and values are omitted from the request, clusters are returned
regardless of whether they have tag keys or values associated with them.
     *
     * @error ClusterNotFoundFault   
     * @error InvalidTagFault   
     */
    describeClusters(params: Redshift.DescribeClustersMessage, callback?: (err: Redshift.ClusterNotFoundFault | Redshift.InvalidTagFault | any, data: Redshift.ClustersMessage | any) => void): Request<Redshift.ClustersMessage | any, Redshift.ClusterNotFoundFault | Redshift.InvalidTagFault | any>;
    /**
     * Returns a list of parameter settings for the specified parameter group family. 

 For more information about parameters and parameter groups, go to Amazon
Redshift Parameter Groups
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html] 
in the Amazon Redshift Cluster Management Guide.
     *
     */
    describeDefaultClusterParameters(params: Redshift.DescribeDefaultClusterParametersMessage, callback?: (err: any, data: Redshift.DescribeDefaultClusterParametersResult | any) => void): Request<Redshift.DescribeDefaultClusterParametersResult | any, any>;
    /**
     * Displays a list of event categories for all event source types, or for a
specified source type. For a list of the event categories and source types, go
to Amazon Redshift Event Notifications
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-event-notifications.html]
.
     *
     */
    describeEventCategories(params: Redshift.DescribeEventCategoriesMessage, callback?: (err: any, data: Redshift.EventCategoriesMessage | any) => void): Request<Redshift.EventCategoriesMessage | any, any>;
    /**
     * Lists descriptions of all the Amazon Redshift event notifications subscription
for a customer account. If you specify a subscription name, lists the
description for that subscription.
     *
     * @error SubscriptionNotFoundFault   
     */
    describeEventSubscriptions(params: Redshift.DescribeEventSubscriptionsMessage, callback?: (err: Redshift.SubscriptionNotFoundFault | any, data: Redshift.EventSubscriptionsMessage | any) => void): Request<Redshift.EventSubscriptionsMessage | any, Redshift.SubscriptionNotFoundFault | any>;
    /**
     * Returns events related to clusters, security groups, snapshots, and parameter
groups for the past 14 days. Events specific to a particular cluster, security
group, snapshot or parameter group can be obtained by providing the name as a
parameter. By default, the past hour of events are returned.
     *
     */
    describeEvents(params: Redshift.DescribeEventsMessage, callback?: (err: any, data: Redshift.EventsMessage | any) => void): Request<Redshift.EventsMessage | any, any>;
    /**
     * Returns information about the specified HSM client certificate. If no
certificate ID is specified, returns information about all the HSM certificates
owned by your AWS customer account.

If you specify both tag keys and tag values in the same request, Amazon Redshift
returns all HSM client certificates that match any combination of the specified
keys and values. For example, if you have owner and environment for tag keys,
and admin and test for tag values, all HSM client certificates that have any
combination of those values are returned.

If both tag keys and values are omitted from the request, HSM client
certificates are returned regardless of whether they have tag keys or values
associated with them.
     *
     * @error HsmClientCertificateNotFoundFault   
     * @error InvalidTagFault   
     */
    describeHsmClientCertificates(params: Redshift.DescribeHsmClientCertificatesMessage, callback?: (err: Redshift.HsmClientCertificateNotFoundFault | Redshift.InvalidTagFault | any, data: Redshift.HsmClientCertificateMessage | any) => void): Request<Redshift.HsmClientCertificateMessage | any, Redshift.HsmClientCertificateNotFoundFault | Redshift.InvalidTagFault | any>;
    /**
     * Returns information about the specified Amazon Redshift HSM configuration. If no
configuration ID is specified, returns information about all the HSM
configurations owned by your AWS customer account.

If you specify both tag keys and tag values in the same request, Amazon Redshift
returns all HSM connections that match any combination of the specified keys and
values. For example, if you have owner and environment for tag keys, and admin 
and test for tag values, all HSM connections that have any combination of those
values are returned.

If both tag keys and values are omitted from the request, HSM connections are
returned regardless of whether they have tag keys or values associated with
them.
     *
     * @error HsmConfigurationNotFoundFault   
     * @error InvalidTagFault   
     */
    describeHsmConfigurations(params: Redshift.DescribeHsmConfigurationsMessage, callback?: (err: Redshift.HsmConfigurationNotFoundFault | Redshift.InvalidTagFault | any, data: Redshift.HsmConfigurationMessage | any) => void): Request<Redshift.HsmConfigurationMessage | any, Redshift.HsmConfigurationNotFoundFault | Redshift.InvalidTagFault | any>;
    /**
     * Describes whether information, such as queries and connection attempts, is being
logged for the specified Amazon Redshift cluster.
     *
     * @error ClusterNotFoundFault   
     */
    describeLoggingStatus(params: Redshift.DescribeLoggingStatusMessage, callback?: (err: Redshift.ClusterNotFoundFault | any, data: Redshift.LoggingStatus | any) => void): Request<Redshift.LoggingStatus | any, Redshift.ClusterNotFoundFault | any>;
    /**
     * Returns a list of orderable cluster options. Before you create a new cluster
you can use this operation to find what options are available, such as the EC2
Availability Zones (AZ) in the specific AWS region that you can specify, and the
node types you can request. The node types differ by available storage, memory,
CPU and price. With the cost involved you might want to obtain a list of cluster
options in the specific region and specify values when creating a cluster. For
more information about managing clusters, go to Amazon Redshift Clusters
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html] in
the Amazon Redshift Cluster Management Guide
     *
     */
    describeOrderableClusterOptions(params: Redshift.DescribeOrderableClusterOptionsMessage, callback?: (err: any, data: Redshift.OrderableClusterOptionsMessage | any) => void): Request<Redshift.OrderableClusterOptionsMessage | any, any>;
    /**
     * Returns a list of the available reserved node offerings by Amazon Redshift with
their descriptions including the node type, the fixed and recurring costs of
reserving the node and duration the node will be reserved for you. These
descriptions help you determine which reserve node offering you want to
purchase. You then use the unique offering ID in you call to 
PurchaseReservedNodeOffering to reserve one or more nodes for your Amazon
Redshift cluster. 

 For more information about reserved node offerings, go to Purchasing Reserved
Nodes
[http://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html] 
in the Amazon Redshift Cluster Management Guide.
     *
     * @error ReservedNodeOfferingNotFoundFault   
     * @error UnsupportedOperationFault   
     */
    describeReservedNodeOfferings(params: Redshift.DescribeReservedNodeOfferingsMessage, callback?: (err: Redshift.ReservedNodeOfferingNotFoundFault | Redshift.UnsupportedOperationFault | any, data: Redshift.ReservedNodeOfferingsMessage | any) => void): Request<Redshift.ReservedNodeOfferingsMessage | any, Redshift.ReservedNodeOfferingNotFoundFault | Redshift.UnsupportedOperationFault | any>;
    /**
     * Returns the descriptions of the reserved nodes.
     *
     * @error ReservedNodeNotFoundFault   
     */
    describeReservedNodes(params: Redshift.DescribeReservedNodesMessage, callback?: (err: Redshift.ReservedNodeNotFoundFault | any, data: Redshift.ReservedNodesMessage | any) => void): Request<Redshift.ReservedNodesMessage | any, Redshift.ReservedNodeNotFoundFault | any>;
    /**
     * Returns information about the last resize operation for the specified cluster.
If no resize operation has ever been initiated for the specified cluster, a HTTP
404 error is returned. If a resize operation was initiated and completed, the
status of the resize remains as SUCCEEDED until the next resize. 

 A resize operation can be requested using ModifyCluster and specifying a
different number or type of nodes for the cluster.
     *
     * @error ClusterNotFoundFault   
     * @error ResizeNotFoundFault   
     */
    describeResize(params: Redshift.DescribeResizeMessage, callback?: (err: Redshift.ClusterNotFoundFault | Redshift.ResizeNotFoundFault | any, data: Redshift.ResizeProgressMessage | any) => void): Request<Redshift.ResizeProgressMessage | any, Redshift.ClusterNotFoundFault | Redshift.ResizeNotFoundFault | any>;
    /**
     * Returns a list of snapshot copy grants owned by the AWS account in the
destination region.

 For more information about managing snapshot copy grants, go to Amazon Redshift
Database Encryption
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html] 
in the Amazon Redshift Cluster Management Guide.
     *
     * @error SnapshotCopyGrantNotFoundFault   
     * @error InvalidTagFault   
     */
    describeSnapshotCopyGrants(params: Redshift.DescribeSnapshotCopyGrantsMessage, callback?: (err: Redshift.SnapshotCopyGrantNotFoundFault | Redshift.InvalidTagFault | any, data: Redshift.SnapshotCopyGrantMessage | any) => void): Request<Redshift.SnapshotCopyGrantMessage | any, Redshift.SnapshotCopyGrantNotFoundFault | Redshift.InvalidTagFault | any>;
    /**
     * Lists the status of one or more table restore requests made using the 
RestoreTableFromClusterSnapshot API action. If you don&#x27;t specify a value for the 
TableRestoreRequestId parameter, then DescribeTableRestoreStatus returns the
status of all table restore requests ordered by the date and time of the request
in ascending order. Otherwise DescribeTableRestoreStatus returns the status of
the table specified by TableRestoreRequestId.
     *
     * @error TableRestoreNotFoundFault   
     * @error ClusterNotFoundFault   
     */
    describeTableRestoreStatus(params: Redshift.DescribeTableRestoreStatusMessage, callback?: (err: Redshift.TableRestoreNotFoundFault | Redshift.ClusterNotFoundFault | any, data: Redshift.TableRestoreStatusMessage | any) => void): Request<Redshift.TableRestoreStatusMessage | any, Redshift.TableRestoreNotFoundFault | Redshift.ClusterNotFoundFault | any>;
    /**
     * Returns a list of tags. You can return tags from a specific resource by
specifying an ARN, or you can return all tags for a given type of resource, such
as clusters, snapshots, and so on.

 The following are limitations for DescribeTags:  &amp;#42; You cannot specify an ARN
   and a resource-type value together in the same request.
 * You cannot use the MaxRecords and Marker parameters together with the ARN
   parameter.
 * The MaxRecords parameter can be a range from 10 to 50 results to return in a
   request.



If you specify both tag keys and tag values in the same request, Amazon Redshift
returns all resources that match any combination of the specified keys and
values. For example, if you have owner and environment for tag keys, and admin 
and test for tag values, all resources that have any combination of those values
are returned.

If both tag keys and values are omitted from the request, resources are returned
regardless of whether they have tag keys or values associated with them.
     *
     * @error ResourceNotFoundFault   
     * @error InvalidTagFault   
     */
    describeTags(params: Redshift.DescribeTagsMessage, callback?: (err: Redshift.ResourceNotFoundFault | Redshift.InvalidTagFault | any, data: Redshift.TaggedResourceListMessage | any) => void): Request<Redshift.TaggedResourceListMessage | any, Redshift.ResourceNotFoundFault | Redshift.InvalidTagFault | any>;
    /**
     * Stops logging information, such as queries and connection attempts, for the
specified Amazon Redshift cluster.
     *
     * @error ClusterNotFoundFault   
     */
    disableLogging(params: Redshift.DisableLoggingMessage, callback?: (err: Redshift.ClusterNotFoundFault | any, data: Redshift.LoggingStatus | any) => void): Request<Redshift.LoggingStatus | any, Redshift.ClusterNotFoundFault | any>;
    /**
     * Disables the automatic copying of snapshots from one region to another region
for a specified cluster.

If your cluster and its snapshots are encrypted using a customer master key
(CMK) from AWS KMS, use DeleteSnapshotCopyGrant to delete the grant that grants
Amazon Redshift permission to the CMK in the destination region.
     *
     * @error ClusterNotFoundFault   
     * @error SnapshotCopyAlreadyDisabledFault   
     * @error InvalidClusterStateFault   
     * @error UnauthorizedOperation   
     */
    disableSnapshotCopy(params: Redshift.DisableSnapshotCopyMessage, callback?: (err: Redshift.ClusterNotFoundFault | Redshift.SnapshotCopyAlreadyDisabledFault | Redshift.InvalidClusterStateFault | Redshift.UnauthorizedOperation | any, data: Redshift.DisableSnapshotCopyResult | any) => void): Request<Redshift.DisableSnapshotCopyResult | any, Redshift.ClusterNotFoundFault | Redshift.SnapshotCopyAlreadyDisabledFault | Redshift.InvalidClusterStateFault | Redshift.UnauthorizedOperation | any>;
    /**
     * Starts logging information, such as queries and connection attempts, for the
specified Amazon Redshift cluster.
     *
     * @error ClusterNotFoundFault   
     * @error BucketNotFoundFault   
     * @error InsufficientS3BucketPolicyFault   
     * @error InvalidS3KeyPrefixFault   
     * @error InvalidS3BucketNameFault   
     */
    enableLogging(params: Redshift.EnableLoggingMessage, callback?: (err: Redshift.ClusterNotFoundFault | Redshift.BucketNotFoundFault | Redshift.InsufficientS3BucketPolicyFault | Redshift.InvalidS3KeyPrefixFault | Redshift.InvalidS3BucketNameFault | any, data: Redshift.LoggingStatus | any) => void): Request<Redshift.LoggingStatus | any, Redshift.ClusterNotFoundFault | Redshift.BucketNotFoundFault | Redshift.InsufficientS3BucketPolicyFault | Redshift.InvalidS3KeyPrefixFault | Redshift.InvalidS3BucketNameFault | any>;
    /**
     * Enables the automatic copy of snapshots from one region to another region for a
specified cluster.
     *
     * @error IncompatibleOrderableOptions   
     * @error InvalidClusterStateFault   
     * @error ClusterNotFoundFault   
     * @error CopyToRegionDisabledFault   
     * @error SnapshotCopyAlreadyEnabledFault   
     * @error UnknownSnapshotCopyRegionFault   
     * @error UnauthorizedOperation   
     * @error SnapshotCopyGrantNotFoundFault   
     * @error LimitExceededFault   
     * @error DependentServiceRequestThrottlingFault   
     */
    enableSnapshotCopy(params: Redshift.EnableSnapshotCopyMessage, callback?: (err: Redshift.IncompatibleOrderableOptions | Redshift.InvalidClusterStateFault | Redshift.ClusterNotFoundFault | Redshift.CopyToRegionDisabledFault | Redshift.SnapshotCopyAlreadyEnabledFault | Redshift.UnknownSnapshotCopyRegionFault | Redshift.UnauthorizedOperation | Redshift.SnapshotCopyGrantNotFoundFault | Redshift.LimitExceededFault | Redshift.DependentServiceRequestThrottlingFault | any, data: Redshift.EnableSnapshotCopyResult | any) => void): Request<Redshift.EnableSnapshotCopyResult | any, Redshift.IncompatibleOrderableOptions | Redshift.InvalidClusterStateFault | Redshift.ClusterNotFoundFault | Redshift.CopyToRegionDisabledFault | Redshift.SnapshotCopyAlreadyEnabledFault | Redshift.UnknownSnapshotCopyRegionFault | Redshift.UnauthorizedOperation | Redshift.SnapshotCopyGrantNotFoundFault | Redshift.LimitExceededFault | Redshift.DependentServiceRequestThrottlingFault | any>;
    /**
     * Modifies the settings for a cluster. For example, you can add another security
or parameter group, update the preferred maintenance window, or change the
master user password. Resetting a cluster password or modifying the security
groups associated with a cluster do not need a reboot. However, modifying a
parameter group requires a reboot for parameters to take effect. For more
information about managing clusters, go to Amazon Redshift Clusters
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html] in
the Amazon Redshift Cluster Management Guide . 

You can also change node type and the number of nodes to scale up or down the
cluster. When resizing a cluster, you must specify both the number of nodes and
the node type even if one of the parameters does not change.
     *
     * @error InvalidClusterStateFault   
     * @error InvalidClusterSecurityGroupStateFault   
     * @error ClusterNotFoundFault   
     * @error NumberOfNodesQuotaExceededFault   
     * @error ClusterSecurityGroupNotFoundFault   
     * @error ClusterParameterGroupNotFoundFault   
     * @error InsufficientClusterCapacityFault   
     * @error UnsupportedOptionFault   
     * @error UnauthorizedOperation   
     * @error HsmClientCertificateNotFoundFault   
     * @error HsmConfigurationNotFoundFault   
     * @error ClusterAlreadyExistsFault   
     * @error LimitExceededFault   
     * @error DependentServiceRequestThrottlingFault   
     * @error InvalidElasticIpFault   
     */
    modifyCluster(params: Redshift.ModifyClusterMessage, callback?: (err: Redshift.InvalidClusterStateFault | Redshift.InvalidClusterSecurityGroupStateFault | Redshift.ClusterNotFoundFault | Redshift.NumberOfNodesQuotaExceededFault | Redshift.ClusterSecurityGroupNotFoundFault | Redshift.ClusterParameterGroupNotFoundFault | Redshift.InsufficientClusterCapacityFault | Redshift.UnsupportedOptionFault | Redshift.UnauthorizedOperation | Redshift.HsmClientCertificateNotFoundFault | Redshift.HsmConfigurationNotFoundFault | Redshift.ClusterAlreadyExistsFault | Redshift.LimitExceededFault | Redshift.DependentServiceRequestThrottlingFault | Redshift.InvalidElasticIpFault | any, data: Redshift.ModifyClusterResult | any) => void): Request<Redshift.ModifyClusterResult | any, Redshift.InvalidClusterStateFault | Redshift.InvalidClusterSecurityGroupStateFault | Redshift.ClusterNotFoundFault | Redshift.NumberOfNodesQuotaExceededFault | Redshift.ClusterSecurityGroupNotFoundFault | Redshift.ClusterParameterGroupNotFoundFault | Redshift.InsufficientClusterCapacityFault | Redshift.UnsupportedOptionFault | Redshift.UnauthorizedOperation | Redshift.HsmClientCertificateNotFoundFault | Redshift.HsmConfigurationNotFoundFault | Redshift.ClusterAlreadyExistsFault | Redshift.LimitExceededFault | Redshift.DependentServiceRequestThrottlingFault | Redshift.InvalidElasticIpFault | any>;
    /**
     * Modifies the list of AWS Identity and Access Management (IAM) roles that can be
used by the cluster to access other AWS services. 

A cluster can have up to 10 IAM roles associated at any time.
     *
     * @error InvalidClusterStateFault   
     * @error ClusterNotFoundFault   
     */
    modifyClusterIamRoles(params: Redshift.ModifyClusterIamRolesMessage, callback?: (err: Redshift.InvalidClusterStateFault | Redshift.ClusterNotFoundFault | any, data: Redshift.ModifyClusterIamRolesResult | any) => void): Request<Redshift.ModifyClusterIamRolesResult | any, Redshift.InvalidClusterStateFault | Redshift.ClusterNotFoundFault | any>;
    /**
     * Modifies the parameters of a parameter group. 

 For more information about parameters and parameter groups, go to Amazon
Redshift Parameter Groups
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html] 
in the Amazon Redshift Cluster Management Guide.
     *
     * @error ClusterParameterGroupNotFoundFault   
     * @error InvalidClusterParameterGroupStateFault   
     */
    modifyClusterParameterGroup(params: Redshift.ModifyClusterParameterGroupMessage, callback?: (err: Redshift.ClusterParameterGroupNotFoundFault | Redshift.InvalidClusterParameterGroupStateFault | any, data: Redshift.ClusterParameterGroupNameMessage | any) => void): Request<Redshift.ClusterParameterGroupNameMessage | any, Redshift.ClusterParameterGroupNotFoundFault | Redshift.InvalidClusterParameterGroupStateFault | any>;
    /**
     * Modifies a cluster subnet group to include the specified list of VPC subnets.
The operation replaces the existing list of subnets with the new list of
subnets.
     *
     * @error ClusterSubnetGroupNotFoundFault   
     * @error ClusterSubnetQuotaExceededFault   
     * @error SubnetAlreadyInUse   
     * @error InvalidSubnet   
     * @error UnauthorizedOperation   
     * @error DependentServiceRequestThrottlingFault   
     */
    modifyClusterSubnetGroup(params: Redshift.ModifyClusterSubnetGroupMessage, callback?: (err: Redshift.ClusterSubnetGroupNotFoundFault | Redshift.ClusterSubnetQuotaExceededFault | Redshift.SubnetAlreadyInUse | Redshift.InvalidSubnet | Redshift.UnauthorizedOperation | Redshift.DependentServiceRequestThrottlingFault | any, data: Redshift.ModifyClusterSubnetGroupResult | any) => void): Request<Redshift.ModifyClusterSubnetGroupResult | any, Redshift.ClusterSubnetGroupNotFoundFault | Redshift.ClusterSubnetQuotaExceededFault | Redshift.SubnetAlreadyInUse | Redshift.InvalidSubnet | Redshift.UnauthorizedOperation | Redshift.DependentServiceRequestThrottlingFault | any>;
    /**
     * Modifies an existing Amazon Redshift event notification subscription.
     *
     * @error SubscriptionNotFoundFault   
     * @error SNSInvalidTopicFault   
     * @error SNSNoAuthorizationFault   
     * @error SNSTopicArnNotFoundFault   
     * @error SubscriptionEventIdNotFoundFault   
     * @error SubscriptionCategoryNotFoundFault   
     * @error SubscriptionSeverityNotFoundFault   
     * @error SourceNotFoundFault   
     * @error InvalidSubscriptionStateFault   
     */
    modifyEventSubscription(params: Redshift.ModifyEventSubscriptionMessage, callback?: (err: Redshift.SubscriptionNotFoundFault | Redshift.SNSInvalidTopicFault | Redshift.SNSNoAuthorizationFault | Redshift.SNSTopicArnNotFoundFault | Redshift.SubscriptionEventIdNotFoundFault | Redshift.SubscriptionCategoryNotFoundFault | Redshift.SubscriptionSeverityNotFoundFault | Redshift.SourceNotFoundFault | Redshift.InvalidSubscriptionStateFault | any, data: Redshift.ModifyEventSubscriptionResult | any) => void): Request<Redshift.ModifyEventSubscriptionResult | any, Redshift.SubscriptionNotFoundFault | Redshift.SNSInvalidTopicFault | Redshift.SNSNoAuthorizationFault | Redshift.SNSTopicArnNotFoundFault | Redshift.SubscriptionEventIdNotFoundFault | Redshift.SubscriptionCategoryNotFoundFault | Redshift.SubscriptionSeverityNotFoundFault | Redshift.SourceNotFoundFault | Redshift.InvalidSubscriptionStateFault | any>;
    /**
     * Modifies the number of days to retain automated snapshots in the destination
region after they are copied from the source region.
     *
     * @error ClusterNotFoundFault   
     * @error SnapshotCopyDisabledFault   
     * @error UnauthorizedOperation   
     * @error InvalidClusterStateFault   
     */
    modifySnapshotCopyRetentionPeriod(params: Redshift.ModifySnapshotCopyRetentionPeriodMessage, callback?: (err: Redshift.ClusterNotFoundFault | Redshift.SnapshotCopyDisabledFault | Redshift.UnauthorizedOperation | Redshift.InvalidClusterStateFault | any, data: Redshift.ModifySnapshotCopyRetentionPeriodResult | any) => void): Request<Redshift.ModifySnapshotCopyRetentionPeriodResult | any, Redshift.ClusterNotFoundFault | Redshift.SnapshotCopyDisabledFault | Redshift.UnauthorizedOperation | Redshift.InvalidClusterStateFault | any>;
    /**
     * Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set
of reserved node offerings. You can purchase one or more of the offerings. You
can call the DescribeReservedNodeOfferings API to obtain the available reserved
node offerings. You can call this API by providing a specific reserved node
offering and the number of nodes you want to reserve. 

 For more information about reserved node offerings, go to Purchasing Reserved
Nodes
[http://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html] 
in the Amazon Redshift Cluster Management Guide.
     *
     * @error ReservedNodeOfferingNotFoundFault   
     * @error ReservedNodeAlreadyExistsFault   
     * @error ReservedNodeQuotaExceededFault   
     * @error UnsupportedOperationFault   
     */
    purchaseReservedNodeOffering(params: Redshift.PurchaseReservedNodeOfferingMessage, callback?: (err: Redshift.ReservedNodeOfferingNotFoundFault | Redshift.ReservedNodeAlreadyExistsFault | Redshift.ReservedNodeQuotaExceededFault | Redshift.UnsupportedOperationFault | any, data: Redshift.PurchaseReservedNodeOfferingResult | any) => void): Request<Redshift.PurchaseReservedNodeOfferingResult | any, Redshift.ReservedNodeOfferingNotFoundFault | Redshift.ReservedNodeAlreadyExistsFault | Redshift.ReservedNodeQuotaExceededFault | Redshift.UnsupportedOperationFault | any>;
    /**
     * Reboots a cluster. This action is taken as soon as possible. It results in a
momentary outage to the cluster, during which the cluster status is set to 
rebooting. A cluster event is created when the reboot is completed. Any pending
cluster modifications (see ModifyCluster) are applied at this reboot. For more
information about managing clusters, go to Amazon Redshift Clusters
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html] in
the Amazon Redshift Cluster Management Guide
     *
     * @error InvalidClusterStateFault   
     * @error ClusterNotFoundFault   
     */
    rebootCluster(params: Redshift.RebootClusterMessage, callback?: (err: Redshift.InvalidClusterStateFault | Redshift.ClusterNotFoundFault | any, data: Redshift.RebootClusterResult | any) => void): Request<Redshift.RebootClusterResult | any, Redshift.InvalidClusterStateFault | Redshift.ClusterNotFoundFault | any>;
    /**
     * Sets one or more parameters of the specified parameter group to their default
values and sets the source values of the parameters to &quot;engine-default&quot;. To
reset the entire parameter group specify the ResetAllParameters parameter. For
parameter changes to take effect you must reboot any associated clusters.
     *
     * @error InvalidClusterParameterGroupStateFault   
     * @error ClusterParameterGroupNotFoundFault   
     */
    resetClusterParameterGroup(params: Redshift.ResetClusterParameterGroupMessage, callback?: (err: Redshift.InvalidClusterParameterGroupStateFault | Redshift.ClusterParameterGroupNotFoundFault | any, data: Redshift.ClusterParameterGroupNameMessage | any) => void): Request<Redshift.ClusterParameterGroupNameMessage | any, Redshift.InvalidClusterParameterGroupStateFault | Redshift.ClusterParameterGroupNotFoundFault | any>;
    /**
     * Creates a new cluster from a snapshot. By default, Amazon Redshift creates the
resulting cluster with the same configuration as the original cluster from which
the snapshot was created, except that the new cluster is created with the
default cluster security and parameter groups. After Amazon Redshift creates the
cluster, you can use the ModifyCluster API to associate a different security
group and different parameter group with the restored cluster. If you are using
a DS node type, you can also choose to change to another DS node type of the
same size during restore.

 If you restore a cluster into a VPC, you must provide a cluster subnet group
where you want the cluster restored. 

 For more information about working with snapshots, go to Amazon Redshift
Snapshots
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html] in
the Amazon Redshift Cluster Management Guide.
     *
     * @error AccessToSnapshotDeniedFault   
     * @error ClusterAlreadyExistsFault   
     * @error ClusterSnapshotNotFoundFault   
     * @error ClusterQuotaExceededFault   
     * @error InsufficientClusterCapacityFault   
     * @error InvalidClusterSnapshotStateFault   
     * @error InvalidRestoreFault   
     * @error NumberOfNodesQuotaExceededFault   
     * @error NumberOfNodesPerClusterLimitExceededFault   
     * @error InvalidVPCNetworkStateFault   
     * @error InvalidClusterSubnetGroupStateFault   
     * @error InvalidSubnet   
     * @error ClusterSubnetGroupNotFoundFault   
     * @error UnauthorizedOperation   
     * @error HsmClientCertificateNotFoundFault   
     * @error HsmConfigurationNotFoundFault   
     * @error InvalidElasticIpFault   
     * @error ClusterParameterGroupNotFoundFault   
     * @error ClusterSecurityGroupNotFoundFault   
     * @error LimitExceededFault   
     * @error DependentServiceRequestThrottlingFault   
     */
    restoreFromClusterSnapshot(params: Redshift.RestoreFromClusterSnapshotMessage, callback?: (err: Redshift.AccessToSnapshotDeniedFault | Redshift.ClusterAlreadyExistsFault | Redshift.ClusterSnapshotNotFoundFault | Redshift.ClusterQuotaExceededFault | Redshift.InsufficientClusterCapacityFault | Redshift.InvalidClusterSnapshotStateFault | Redshift.InvalidRestoreFault | Redshift.NumberOfNodesQuotaExceededFault | Redshift.NumberOfNodesPerClusterLimitExceededFault | Redshift.InvalidVPCNetworkStateFault | Redshift.InvalidClusterSubnetGroupStateFault | Redshift.InvalidSubnet | Redshift.ClusterSubnetGroupNotFoundFault | Redshift.UnauthorizedOperation | Redshift.HsmClientCertificateNotFoundFault | Redshift.HsmConfigurationNotFoundFault | Redshift.InvalidElasticIpFault | Redshift.ClusterParameterGroupNotFoundFault | Redshift.ClusterSecurityGroupNotFoundFault | Redshift.LimitExceededFault | Redshift.DependentServiceRequestThrottlingFault | any, data: Redshift.RestoreFromClusterSnapshotResult | any) => void): Request<Redshift.RestoreFromClusterSnapshotResult | any, Redshift.AccessToSnapshotDeniedFault | Redshift.ClusterAlreadyExistsFault | Redshift.ClusterSnapshotNotFoundFault | Redshift.ClusterQuotaExceededFault | Redshift.InsufficientClusterCapacityFault | Redshift.InvalidClusterSnapshotStateFault | Redshift.InvalidRestoreFault | Redshift.NumberOfNodesQuotaExceededFault | Redshift.NumberOfNodesPerClusterLimitExceededFault | Redshift.InvalidVPCNetworkStateFault | Redshift.InvalidClusterSubnetGroupStateFault | Redshift.InvalidSubnet | Redshift.ClusterSubnetGroupNotFoundFault | Redshift.UnauthorizedOperation | Redshift.HsmClientCertificateNotFoundFault | Redshift.HsmConfigurationNotFoundFault | Redshift.InvalidElasticIpFault | Redshift.ClusterParameterGroupNotFoundFault | Redshift.ClusterSecurityGroupNotFoundFault | Redshift.LimitExceededFault | Redshift.DependentServiceRequestThrottlingFault | any>;
    /**
     * Creates a new table from a table in an Amazon Redshift cluster snapshot. You
must create the new table within the Amazon Redshift cluster that the snapshot
was taken from.

You cannot use RestoreTableFromClusterSnapshot to restore a table with the same
name as an existing table in an Amazon Redshift cluster. That is, you cannot
overwrite an existing table in a cluster with a restored table. If you want to
replace your original table with a new, restored table, then rename or drop your
original table before you call RestoreTableFromClusterSnapshot. When you have
renamed your original table, then you can pass the original name of the table as
the NewTableName parameter value in the call to RestoreTableFromClusterSnapshot.
This way, you can replace the original table with the table created from the
snapshot.
     *
     * @error ClusterSnapshotNotFoundFault   
     * @error InProgressTableRestoreQuotaExceededFault   
     * @error InvalidClusterSnapshotStateFault   
     * @error InvalidTableRestoreArgumentFault   
     * @error ClusterNotFoundFault   
     * @error InvalidClusterStateFault   
     * @error UnsupportedOperationFault   
     */
    restoreTableFromClusterSnapshot(params: Redshift.RestoreTableFromClusterSnapshotMessage, callback?: (err: Redshift.ClusterSnapshotNotFoundFault | Redshift.InProgressTableRestoreQuotaExceededFault | Redshift.InvalidClusterSnapshotStateFault | Redshift.InvalidTableRestoreArgumentFault | Redshift.ClusterNotFoundFault | Redshift.InvalidClusterStateFault | Redshift.UnsupportedOperationFault | any, data: Redshift.RestoreTableFromClusterSnapshotResult | any) => void): Request<Redshift.RestoreTableFromClusterSnapshotResult | any, Redshift.ClusterSnapshotNotFoundFault | Redshift.InProgressTableRestoreQuotaExceededFault | Redshift.InvalidClusterSnapshotStateFault | Redshift.InvalidTableRestoreArgumentFault | Redshift.ClusterNotFoundFault | Redshift.InvalidClusterStateFault | Redshift.UnsupportedOperationFault | any>;
    /**
     * Revokes an ingress rule in an Amazon Redshift security group for a previously
authorized IP range or Amazon EC2 security group. To add an ingress rule, see 
AuthorizeClusterSecurityGroupIngress. For information about managing security
groups, go to Amazon Redshift Cluster Security Groups
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html] 
in the Amazon Redshift Cluster Management Guide.
     *
     * @error ClusterSecurityGroupNotFoundFault   
     * @error AuthorizationNotFoundFault   
     * @error InvalidClusterSecurityGroupStateFault   
     */
    revokeClusterSecurityGroupIngress(params: Redshift.RevokeClusterSecurityGroupIngressMessage, callback?: (err: Redshift.ClusterSecurityGroupNotFoundFault | Redshift.AuthorizationNotFoundFault | Redshift.InvalidClusterSecurityGroupStateFault | any, data: Redshift.RevokeClusterSecurityGroupIngressResult | any) => void): Request<Redshift.RevokeClusterSecurityGroupIngressResult | any, Redshift.ClusterSecurityGroupNotFoundFault | Redshift.AuthorizationNotFoundFault | Redshift.InvalidClusterSecurityGroupStateFault | any>;
    /**
     * Removes the ability of the specified AWS customer account to restore the
specified snapshot. If the account is currently restoring the snapshot, the
restore will run to completion. 

 For more information about working with snapshots, go to Amazon Redshift
Snapshots
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html] in
the Amazon Redshift Cluster Management Guide.
     *
     * @error AccessToSnapshotDeniedFault   
     * @error AuthorizationNotFoundFault   
     * @error ClusterSnapshotNotFoundFault   
     */
    revokeSnapshotAccess(params: Redshift.RevokeSnapshotAccessMessage, callback?: (err: Redshift.AccessToSnapshotDeniedFault | Redshift.AuthorizationNotFoundFault | Redshift.ClusterSnapshotNotFoundFault | any, data: Redshift.RevokeSnapshotAccessResult | any) => void): Request<Redshift.RevokeSnapshotAccessResult | any, Redshift.AccessToSnapshotDeniedFault | Redshift.AuthorizationNotFoundFault | Redshift.ClusterSnapshotNotFoundFault | any>;
    /**
     * Rotates the encryption keys for a cluster.
     *
     * @error ClusterNotFoundFault   
     * @error InvalidClusterStateFault   
     * @error DependentServiceRequestThrottlingFault   
     */
    rotateEncryptionKey(params: Redshift.RotateEncryptionKeyMessage, callback?: (err: Redshift.ClusterNotFoundFault | Redshift.InvalidClusterStateFault | Redshift.DependentServiceRequestThrottlingFault | any, data: Redshift.RotateEncryptionKeyResult | any) => void): Request<Redshift.RotateEncryptionKeyResult | any, Redshift.ClusterNotFoundFault | Redshift.InvalidClusterStateFault | Redshift.DependentServiceRequestThrottlingFault | any>;

  }

  export module Redshift {

    export type AccountsWithRestoreAccessList = AccountWithRestoreAccess[];

    export type AvailabilityZoneList = AvailabilityZone[];

    export type Boolean = boolean;

    export type BooleanOptional = boolean;

    export type ClusterIamRoleList = ClusterIamRole[];

    export type ClusterList = Cluster[];

    export type ClusterNodesList = ClusterNode[];

    export type ClusterParameterGroupStatusList = ClusterParameterGroupStatus[];

    export type ClusterParameterStatusList = ClusterParameterStatus[];

    export type ClusterSecurityGroupMembershipList = ClusterSecurityGroupMembership[];

    export type ClusterSecurityGroupNameList = String[];

    export type ClusterSecurityGroups = ClusterSecurityGroup[];

    export type ClusterSubnetGroups = ClusterSubnetGroup[];

    export type ClusterVersionList = ClusterVersion[];

    export type Double = number;

    export type DoubleOptional = number;

    export type EC2SecurityGroupList = EC2SecurityGroup[];

    export type EventCategoriesList = String[];

    export type EventCategoriesMapList = EventCategoriesMap[];

    export type EventInfoMapList = EventInfoMap[];

    export type EventList = Event[];

    export type EventSubscriptionsList = EventSubscription[];

    export type HsmClientCertificateList = HsmClientCertificate[];

    export type HsmConfigurationList = HsmConfiguration[];

    export type IPRangeList = IPRange[];

    export type IamRoleArnList = String[];

    export type ImportTablesCompleted = String[];

    export type ImportTablesInProgress = String[];

    export type ImportTablesNotStarted = String[];

    export type Integer = number;

    export type IntegerOptional = number;

    export type Long = number;

    export type LongOptional = number;

    export type OrderableClusterOptionsList = OrderableClusterOption[];

    export type ParameterApplyType = string;

    export type ParameterGroupList = ClusterParameterGroup[];

    export type ParametersList = Parameter[];

    export type RecurringChargeList = RecurringCharge[];

    export type ReservedNodeList = ReservedNode[];

    export type ReservedNodeOfferingList = ReservedNodeOffering[];

    export type RestorableNodeTypeList = String[];

    export type SnapshotCopyGrantList = SnapshotCopyGrant[];

    export type SnapshotList = Snapshot[];

    export type SourceIdsList = String[];

    export type SourceType = string;

    export type String = string;

    export type SubnetIdentifierList = String[];

    export type SubnetList = Subnet[];

    export type TStamp = number;

    export type TableRestoreStatusList = TableRestoreStatus[];

    export type TableRestoreStatusType = string;

    export type TagKeyList = String[];

    export type TagList = Tag[];

    export type TagValueList = String[];

    export type TaggedResourceList = TaggedResource[];

    export type VpcSecurityGroupIdList = String[];

    export type VpcSecurityGroupMembershipList = VpcSecurityGroupMembership[];

    export interface AccessToSnapshotDeniedFault {
    }
    export interface AccountWithRestoreAccess {
      /** The identifier of an AWS customer account authorized to restore a snapshot. **/
      AccountId?: String;
    }
    export interface AuthorizationAlreadyExistsFault {
    }
    export interface AuthorizationNotFoundFault {
    }
    export interface AuthorizationQuotaExceededFault {
    }
    export interface AuthorizeClusterSecurityGroupIngressMessage {
      /** The name of the security group to which the ingress rule is added. **/
      ClusterSecurityGroupName: String;
      /** The IP range to be added the Amazon Redshift security group. **/
      CIDRIP?: String;
      /** The EC2 security group to be added the Amazon Redshift security group. **/
      EC2SecurityGroupName?: String;
      /** The AWS account number of the owner of the security group specified by the 
EC2SecurityGroupName parameter. The AWS Access Key ID is not an acceptable
value. 

Example: 111122223333 **/
      EC2SecurityGroupOwnerId?: String;
    }
    export interface AuthorizeClusterSecurityGroupIngressResult {
      ClusterSecurityGroup?: ClusterSecurityGroup;
    }
    export interface AuthorizeSnapshotAccessMessage {
      /** The identifier of the snapshot the account is authorized to restore. **/
      SnapshotIdentifier: String;
      /** The identifier of the cluster the snapshot was created from. This parameter is
required if your IAM user has a policy containing a snapshot resource element
that specifies anything other than &amp;#42; for the cluster name. **/
      SnapshotClusterIdentifier?: String;
      /** The identifier of the AWS customer account authorized to restore the specified
snapshot. **/
      AccountWithRestoreAccess: String;
    }
    export interface AuthorizeSnapshotAccessResult {
      Snapshot?: Snapshot;
    }
    export interface AvailabilityZone {
      /** The name of the availability zone. **/
      Name?: String;
    }
    export interface BucketNotFoundFault {
    }
    export interface Cluster {
      /** The unique identifier of the cluster. **/
      ClusterIdentifier?: String;
      /** The node type for the nodes in the cluster. **/
      NodeType?: String;
      /** The current state of the cluster. Possible values are:  &amp;#42; available
* creating
* deleting
* final-snapshot
* hardware-failure
* incompatible-hsm
* incompatible-network
* 
 incompatible-parameters
* incompatible-restore
* modifying
* rebooting
* renaming
* resizing
* rotating-keys
* storage-full
* updating-hsm **/
      ClusterStatus?: String;
      /** The status of a modify operation, if any, initiated for the cluster. **/
      ModifyStatus?: String;
      /** The master user name for the cluster. This name is used to connect to the
database that is specified in DBName. **/
      MasterUsername?: String;
      /** The name of the initial database that was created when the cluster was created.
This same name is returned for the life of the cluster. If an initial database
was not specified, a database named &quot;dev&quot; was created by default. **/
      DBName?: String;
      /** The connection endpoint. **/
      Endpoint?: Endpoint;
      /** The date and time that the cluster was created. **/
      ClusterCreateTime?: TStamp;
      /** The number of days that automatic cluster snapshots are retained. **/
      AutomatedSnapshotRetentionPeriod?: Integer;
      /** A list of cluster security group that are associated with the cluster. Each
security group is represented by an element that contains 
ClusterSecurityGroup.Name and ClusterSecurityGroup.Status subelements. 

Cluster security groups are used when the cluster is not created in a VPC.
Clusters that are created in a VPC use VPC security groups, which are listed by
the VpcSecurityGroups parameter. **/
      ClusterSecurityGroups?: ClusterSecurityGroupMembershipList;
      /** A list of Virtual Private Cloud (VPC) security groups that are associated with
the cluster. This parameter is returned only if the cluster is in a VPC. **/
      VpcSecurityGroups?: VpcSecurityGroupMembershipList;
      /** The list of cluster parameter groups that are associated with this cluster. Each
parameter group in the list is returned with its status. **/
      ClusterParameterGroups?: ClusterParameterGroupStatusList;
      /** The name of the subnet group that is associated with the cluster. This
parameter is valid only when the cluster is in a VPC. **/
      ClusterSubnetGroupName?: String;
      /** The identifier of the VPC the cluster is in, if the cluster is in a VPC. **/
      VpcId?: String;
      /** The name of the Availability Zone in which the cluster is located. **/
      AvailabilityZone?: String;
      /** The weekly time range (in UTC) during which system maintenance can occur. **/
      PreferredMaintenanceWindow?: String;
      /** If present, changes to the cluster are pending. Specific pending changes are
identified by subelements. **/
      PendingModifiedValues?: PendingModifiedValues;
      /** The version ID of the Amazon Redshift engine that is running on the cluster. **/
      ClusterVersion?: String;
      /** If true, major version upgrades will be applied automatically to the cluster
during the maintenance window. **/
      AllowVersionUpgrade?: Boolean;
      /** The number of compute nodes in the cluster. **/
      NumberOfNodes?: Integer;
      /** If true, the cluster can be accessed from a public network. **/
      PubliclyAccessible?: Boolean;
      /** If true, data in the cluster is encrypted at rest. **/
      Encrypted?: Boolean;
      /** Describes the status of a cluster restore action. Returns null if the cluster
was not created by restoring a snapshot. **/
      RestoreStatus?: RestoreStatus;
      /** Reports whether the Amazon Redshift cluster has finished applying any HSM
settings changes specified in a modify cluster command.

Values: active, applying **/
      HsmStatus?: HsmStatus;
      /** Returns the destination region and retention period that are configured for
cross-region snapshot copy. **/
      ClusterSnapshotCopyStatus?: ClusterSnapshotCopyStatus;
      /** The public key for the cluster. **/
      ClusterPublicKey?: String;
      /** The nodes in a cluster. **/
      ClusterNodes?: ClusterNodesList;
      /** The status of the elastic IP (EIP) address. **/
      ElasticIpStatus?: ElasticIpStatus;
      /** The specific revision number of the database in the cluster. **/
      ClusterRevisionNumber?: String;
      /** The list of tags for the cluster. **/
      Tags?: TagList;
      /** The AWS Key Management Service (KMS) key ID of the encryption key used to
encrypt data in the cluster. **/
      KmsKeyId?: String;
      /** A list of AWS Identity and Access Management (IAM) roles that can be used by the
cluster to access other AWS services. **/
      IamRoles?: ClusterIamRoleList;
    }
    export interface ClusterAlreadyExistsFault {
    }
    export interface ClusterIamRole {
      /** The Amazon Resource Name (ARN) of the IAM role. For example, 
arn:aws:iam::123456789012:role/RedshiftCopyUnload. **/
      IamRoleArn?: String;
      /** Describes the status of the IAM role&#x27;s association with an Amazon Redshift
cluster.

The following are possible statuses and descriptions. &amp;#42; in-sync: The role is available for use by the cluster.
* adding: The role is in the process of being associated with the cluster.
* removing: The role is in the process of being disassociated with the cluster. **/
      ApplyStatus?: String;
    }
    export interface ClusterNode {
      /** Whether the node is a leader node or a compute node. **/
      NodeRole?: String;
      /** The private IP address of a node within a cluster. **/
      PrivateIPAddress?: String;
      /** The public IP address of a node within a cluster. **/
      PublicIPAddress?: String;
    }
    export interface ClusterNotFoundFault {
    }
    export interface ClusterParameterGroup {
      /** The name of the cluster parameter group. **/
      ParameterGroupName?: String;
      /** The name of the cluster parameter group family that this cluster parameter
group is compatible with. **/
      ParameterGroupFamily?: String;
      /** The description of the parameter group. **/
      Description?: String;
      /** The list of tags for the cluster parameter group. **/
      Tags?: TagList;
    }
    export interface ClusterParameterGroupAlreadyExistsFault {
    }
    export interface ClusterParameterGroupDetails {
      /** A list of Parameter instances. Each instance lists the parameters of one
cluster parameter group. **/
      Parameters?: ParametersList;
      /** A value that indicates the starting point for the next set of response records
in a subsequent request. If a value is returned in a response, you can retrieve
the next set of records by providing this returned marker value in the Marker 
parameter and retrying the command. If the Marker field is empty, all response
records have been retrieved for the request. **/
      Marker?: String;
    }
    export interface ClusterParameterGroupNameMessage {
      /** The name of the cluster parameter group. **/
      ParameterGroupName?: String;
      /** The status of the parameter group. For example, if you made a change to a
parameter group name-value pair, then the change could be pending a reboot of an
associated cluster. **/
      ParameterGroupStatus?: String;
    }
    export interface ClusterParameterGroupNotFoundFault {
    }
    export interface ClusterParameterGroupQuotaExceededFault {
    }
    export interface ClusterParameterGroupStatus {
      /** The name of the cluster parameter group. **/
      ParameterGroupName?: String;
      /** The status of parameter updates. **/
      ParameterApplyStatus?: String;
      /** The list of parameter statuses.

For more information about parameters and parameter groups, go to Amazon
Redshift Parameter Groups
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html] 
in the Amazon Redshift Cluster Management Guide. **/
      ClusterParameterStatusList?: ClusterParameterStatusList;
    }
    export interface ClusterParameterGroupsMessage {
      /** A value that indicates the starting point for the next set of response records
in a subsequent request. If a value is returned in a response, you can retrieve
the next set of records by providing this returned marker value in the Marker 
parameter and retrying the command. If the Marker field is empty, all response
records have been retrieved for the request. **/
      Marker?: String;
      /** A list of ClusterParameterGroup instances. Each instance describes one cluster
parameter group. **/
      ParameterGroups?: ParameterGroupList;
    }
    export interface ClusterParameterStatus {
      /** The name of the parameter. **/
      ParameterName?: String;
      /** The status of the parameter that indicates whether the parameter is in sync with
the database, waiting for a cluster reboot, or encountered an error when being
applied.

The following are possible statuses and descriptions. &amp;#42; in-sync: The parameter value is in sync with the database.
* pending-reboot: The parameter value will be applied after the cluster
 reboots.
* applying: The parameter value is being applied to the database.
* invalid-parameter: Cannot apply the parameter value because it has an invalid
 value or syntax.
* apply-deferred: The parameter contains static property changes. The changes
 are deferred until the cluster reboots.
* apply-error: Cannot connect to the cluster. The parameter change will be
 applied after the cluster reboots.
* unknown-error: Cannot apply the parameter change right now. The change will
 be applied after the cluster reboots. **/
      ParameterApplyStatus?: String;
      /** The error that prevented the parameter from being applied to the database. **/
      ParameterApplyErrorDescription?: String;
    }
    export interface ClusterQuotaExceededFault {
    }
    export interface ClusterSecurityGroup {
      /** The name of the cluster security group to which the operation was applied. **/
      ClusterSecurityGroupName?: String;
      /** A description of the security group. **/
      Description?: String;
      /** A list of EC2 security groups that are permitted to access clusters associated
with this cluster security group. **/
      EC2SecurityGroups?: EC2SecurityGroupList;
      /** A list of IP ranges (CIDR blocks) that are permitted to access clusters
associated with this cluster security group. **/
      IPRanges?: IPRangeList;
      /** The list of tags for the cluster security group. **/
      Tags?: TagList;
    }
    export interface ClusterSecurityGroupAlreadyExistsFault {
    }
    export interface ClusterSecurityGroupMembership {
      /** The name of the cluster security group. **/
      ClusterSecurityGroupName?: String;
      /** The status of the cluster security group. **/
      Status?: String;
    }
    export interface ClusterSecurityGroupMessage {
      /** A value that indicates the starting point for the next set of response records
in a subsequent request. If a value is returned in a response, you can retrieve
the next set of records by providing this returned marker value in the Marker 
parameter and retrying the command. If the Marker field is empty, all response
records have been retrieved for the request. **/
      Marker?: String;
      /** A list of ClusterSecurityGroup instances. **/
      ClusterSecurityGroups?: ClusterSecurityGroups;
    }
    export interface ClusterSecurityGroupNotFoundFault {
    }
    export interface ClusterSecurityGroupQuotaExceededFault {
    }
    export interface ClusterSnapshotAlreadyExistsFault {
    }
    export interface ClusterSnapshotCopyStatus {
      /** The destination region that snapshots are automatically copied to when
cross-region snapshot copy is enabled. **/
      DestinationRegion?: String;
      /** The number of days that automated snapshots are retained in the destination
region after they are copied from a source region. **/
      RetentionPeriod?: Long;
      /** The name of the snapshot copy grant. **/
      SnapshotCopyGrantName?: String;
    }
    export interface ClusterSnapshotNotFoundFault {
    }
    export interface ClusterSnapshotQuotaExceededFault {
    }
    export interface ClusterSubnetGroup {
      /** The name of the cluster subnet group. **/
      ClusterSubnetGroupName?: String;
      /** The description of the cluster subnet group. **/
      Description?: String;
      /** The VPC ID of the cluster subnet group. **/
      VpcId?: String;
      /** The status of the cluster subnet group. Possible values are Complete, 
Incomplete and Invalid. **/
      SubnetGroupStatus?: String;
      /** A list of the VPC Subnet elements. **/
      Subnets?: SubnetList;
      /** The list of tags for the cluster subnet group. **/
      Tags?: TagList;
    }
    export interface ClusterSubnetGroupAlreadyExistsFault {
    }
    export interface ClusterSubnetGroupMessage {
      /** A value that indicates the starting point for the next set of response records
in a subsequent request. If a value is returned in a response, you can retrieve
the next set of records by providing this returned marker value in the Marker 
parameter and retrying the command. If the Marker field is empty, all response
records have been retrieved for the request. **/
      Marker?: String;
      /** A list of ClusterSubnetGroup instances. **/
      ClusterSubnetGroups?: ClusterSubnetGroups;
    }
    export interface ClusterSubnetGroupNotFoundFault {
    }
    export interface ClusterSubnetGroupQuotaExceededFault {
    }
    export interface ClusterSubnetQuotaExceededFault {
    }
    export interface ClusterVersion {
      /** The version number used by the cluster. **/
      ClusterVersion?: String;
      /** The name of the cluster parameter group family for the cluster. **/
      ClusterParameterGroupFamily?: String;
      /** The description of the cluster version. **/
      Description?: String;
    }
    export interface ClusterVersionsMessage {
      /** A value that indicates the starting point for the next set of response records
in a subsequent request. If a value is returned in a response, you can retrieve
the next set of records by providing this returned marker value in the Marker 
parameter and retrying the command. If the Marker field is empty, all response
records have been retrieved for the request. **/
      Marker?: String;
      /** A list of Version elements. **/
      ClusterVersions?: ClusterVersionList;
    }
    export interface ClustersMessage {
      /** A value that indicates the starting point for the next set of response records
in a subsequent request. If a value is returned in a response, you can retrieve
the next set of records by providing this returned marker value in the Marker 
parameter and retrying the command. If the Marker field is empty, all response
records have been retrieved for the request. **/
      Marker?: String;
      /** A list of Cluster objects, where each object describes one cluster. **/
      Clusters?: ClusterList;
    }
    export interface CopyClusterSnapshotMessage {
      /** The identifier for the source snapshot. 

Constraints:

&amp;#42; Must be the identifier for a valid automated snapshot whose state is 
 available. **/
      SourceSnapshotIdentifier: String;
      /** The identifier of the cluster the source snapshot was created from. This
parameter is required if your IAM user has a policy containing a snapshot
resource element that specifies anything other than &amp;#42; for the cluster name. 

Constraints:

* Must be the identifier for a valid cluster. **/
      SourceSnapshotClusterIdentifier?: String;
      /** The identifier given to the new manual snapshot. 

Constraints:

&amp;#42; Cannot be null, empty, or blank.
* Must contain from 1 to 255 alphanumeric characters or hyphens.
* First character must be a letter.
* Cannot end with a hyphen or contain two consecutive hyphens.
* Must be unique for the AWS account that is making the request. **/
      TargetSnapshotIdentifier: String;
    }
    export interface CopyClusterSnapshotResult {
      Snapshot?: Snapshot;
    }
    export interface CopyToRegionDisabledFault {
    }
    export interface CreateClusterMessage {
      /** The name of the first database to be created when the cluster is created. 

To create additional databases after the cluster is created, connect to the
cluster with a SQL client and use SQL commands to create a database. For more
information, go to Create a Database
[http://docs.aws.amazon.com/redshift/latest/dg/t_creating_database.html] in the
Amazon Redshift Database Developer Guide. 

Default: dev

Constraints:

&amp;#42; Must contain 1 to 64 alphanumeric characters.
* Must contain only lowercase letters.
* Cannot be a word that is reserved by the service. A list of reserved words
 can be found in Reserved Words
 [http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html] in the
 Amazon Redshift Database Developer Guide. **/
      DBName?: String;
      /** A unique identifier for the cluster. You use this identifier to refer to the
cluster for any subsequent cluster operations such as deleting or modifying. The
identifier also appears in the Amazon Redshift console. 

Constraints:

&amp;#42; Must contain from 1 to 63 alphanumeric characters or hyphens.
* Alphabetic characters must be lowercase.
* First character must be a letter.
* Cannot end with a hyphen or contain two consecutive hyphens.
* Must be unique for all clusters within an AWS account.

Example: myexamplecluster **/
      ClusterIdentifier: String;
      /** The type of the cluster. When cluster type is specified as  &amp;#42; single-node, the NumberOfNodes parameter is not required.
* multi-node, the NumberOfNodes parameter is required.



Valid Values: multi-node | single-node 

Default: multi-node **/
      ClusterType?: String;
      /** The node type to be provisioned for the cluster. For information about node
types, go to Working with Clusters
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#how-many-nodes] 
in the Amazon Redshift Cluster Management Guide. 

Valid Values: ds1.xlarge | ds1.8xlarge | ds2.xlarge | ds2.8xlarge | dc1.large | 
dc1.8xlarge. **/
      NodeType: String;
      /** The user name associated with the master user account for the cluster that is
being created. 

Constraints:

&amp;#42; Must be 1 - 128 alphanumeric characters.
* First character must be a letter.
* Cannot be a reserved word. A list of reserved words can be found in Reserved
 Words [http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html] in
 the Amazon Redshift Database Developer Guide. **/
      MasterUsername: String;
      /** The password associated with the master user account for the cluster that is
being created. 

Constraints: 

&amp;#42; Must be between 8 and 64 characters in length.
* Must contain at least one uppercase letter.
* Must contain at least one lowercase letter.
* Must contain one number.
* Can be any printable ASCII character (ASCII code 33 to 126) except &#x27; (single
 quote), &quot; (double quote), \, /, @, or space. **/
      MasterUserPassword: String;
      /** A list of security groups to be associated with this cluster. 

Default: The default cluster security group for Amazon Redshift. **/
      ClusterSecurityGroups?: ClusterSecurityGroupNameList;
      /** A list of Virtual Private Cloud (VPC) security groups to be associated with the
cluster.

Default: The default VPC security group is associated with the cluster. **/
      VpcSecurityGroupIds?: VpcSecurityGroupIdList;
      /** The name of a cluster subnet group to be associated with this cluster. 

If this parameter is not provided the resulting cluster will be deployed
outside virtual private cloud (VPC). **/
      ClusterSubnetGroupName?: String;
      /** The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision
the cluster. For example, if you have several EC2 instances running in a
specific Availability Zone, then you might want the cluster to be provisioned in
the same zone in order to decrease network latency. 

Default: A random, system-chosen Availability Zone in the region that is
specified by the endpoint. 

Example: us-east-1d 

Constraint: The specified Availability Zone must be in the same region as the
current endpoint. **/
      AvailabilityZone?: String;
      /** The weekly time range (in UTC) during which automated cluster maintenance can
occur. 

Format: ddd:hh24:mi-ddd:hh24:mi 

Default: A 30-minute window selected at random from an 8-hour block of time per
region, occurring on a random day of the week. For more information about the
time blocks for each region, see Maintenance Windows
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-maintenance-windows] 
in Amazon Redshift Cluster Management Guide.

Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun

Constraints: Minimum 30-minute window. **/
      PreferredMaintenanceWindow?: String;
      /** The name of the parameter group to be associated with this cluster. 

Default: The default Amazon Redshift cluster parameter group. For information
about the default parameter group, go to Working with Amazon Redshift Parameter
Groups
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html]

Constraints: 

&amp;#42; Must be 1 to 255 alphanumeric characters or hyphens.
* First character must be a letter.
* Cannot end with a hyphen or contain two consecutive hyphens. **/
      ClusterParameterGroupName?: String;
      /** The number of days that automated snapshots are retained. If the value is 0,
automated snapshots are disabled. Even if automated snapshots are disabled, you
can still create manual snapshots when you want with CreateClusterSnapshot. 

Default: 1 

Constraints: Must be a value from 0 to 35. **/
      AutomatedSnapshotRetentionPeriod?: IntegerOptional;
      /** The port number on which the cluster accepts incoming connections. 

The cluster is accessible only via the JDBC and ODBC connection strings. Part of
the connection string requires the port on which the cluster will listen for
incoming connections.

Default: 5439 

Valid Values: 1150-65535 **/
      Port?: IntegerOptional;
      /** The version of the Amazon Redshift engine software that you want to deploy on
the cluster. 

The version selected runs on all the nodes in the cluster. 

Constraints: Only version 1.0 is currently available.

Example: 1.0 **/
      ClusterVersion?: String;
      /** If true, major version upgrades can be applied during the maintenance window to
the Amazon Redshift engine that is running on the cluster.

When a new major version of the Amazon Redshift engine is released, you can
request that the service automatically apply upgrades during the maintenance
window to the Amazon Redshift engine that is running on your cluster. 

Default: true **/
      AllowVersionUpgrade?: BooleanOptional;
      /** The number of compute nodes in the cluster. This parameter is required when the 
ClusterType parameter is specified as multi-node. 

For information about determining how many nodes you need, go to Working with
Clusters
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#how-many-nodes] 
in the Amazon Redshift Cluster Management Guide. 

If you don&#x27;t specify this parameter, you get a single-node cluster. When
requesting a multi-node cluster, you must specify the number of nodes that you
want in the cluster.

Default: 1

Constraints: Value must be at least 1 and no more than 100. **/
      NumberOfNodes?: IntegerOptional;
      /** If true, the cluster can be accessed from a public network. **/
      PubliclyAccessible?: BooleanOptional;
      /** If true, the data in the cluster is encrypted at rest. 

Default: false **/
      Encrypted?: BooleanOptional;
      /** Specifies the name of the HSM client certificate the Amazon Redshift cluster
uses to retrieve the data encryption keys stored in an HSM. **/
      HsmClientCertificateIdentifier?: String;
      /** Specifies the name of the HSM configuration that contains the information the
Amazon Redshift cluster can use to retrieve and store keys in an HSM. **/
      HsmConfigurationIdentifier?: String;
      /** The Elastic IP (EIP) address for the cluster.

Constraints: The cluster must be provisioned in EC2-VPC and publicly-accessible
through an Internet gateway. For more information about provisioning clusters in
EC2-VPC, go to Supported Platforms to Launch Your Cluster
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#cluster-platforms] 
in the Amazon Redshift Cluster Management Guide. **/
      ElasticIp?: String;
      /** A list of tag instances. **/
      Tags?: TagList;
      /** The AWS Key Management Service (KMS) key ID of the encryption key that you want
to use to encrypt data in the cluster. **/
      KmsKeyId?: String;
      /** Reserved. **/
      AdditionalInfo?: String;
      /** A list of AWS Identity and Access Management (IAM) roles that can be used by the
cluster to access other AWS services. You must supply the IAM roles in their
Amazon Resource Name (ARN) format. You can supply up to 10 IAM roles in a single
request.

A cluster can have up to 10 IAM roles associated at any time. **/
      IamRoles?: IamRoleArnList;
    }
    export interface CreateClusterParameterGroupMessage {
      /** The name of the cluster parameter group. 

Constraints: 

&amp;#42; Must be 1 to 255 alphanumeric characters or hyphens
* First character must be a letter.
* Cannot end with a hyphen or contain two consecutive hyphens.
* Must be unique withing your AWS account.

This value is stored as a lower-case string. **/
      ParameterGroupName: String;
      /** The Amazon Redshift engine version to which the cluster parameter group
applies. The cluster engine version determines the set of parameters. 

To get a list of valid parameter group family names, you can call 
DescribeClusterParameterGroups. By default, Amazon Redshift returns a list of
all the parameter groups that are owned by your AWS account, including the
default parameter groups for each Amazon Redshift engine version. The parameter
group family names associated with the default parameter groups provide you the
valid values. For example, a valid family name is &quot;redshift-1.0&quot;. **/
      ParameterGroupFamily: String;
      /** A description of the parameter group. **/
      Description: String;
      /** A list of tag instances. **/
      Tags?: TagList;
    }
    export interface CreateClusterParameterGroupResult {
      ClusterParameterGroup?: ClusterParameterGroup;
    }
    export interface CreateClusterResult {
      Cluster?: Cluster;
    }
    export interface CreateClusterSecurityGroupMessage {
      /** The name for the security group. Amazon Redshift stores the value as a
lowercase string. 

Constraints: 

&amp;#42; Must contain no more than 255 alphanumeric characters or hyphens.
* Must not be &quot;Default&quot;.
* Must be unique for all security groups that are created by your AWS account.

Example: examplesecuritygroup **/
      ClusterSecurityGroupName: String;
      /** A description for the security group. **/
      Description: String;
      /** A list of tag instances. **/
      Tags?: TagList;
    }
    export interface CreateClusterSecurityGroupResult {
      ClusterSecurityGroup?: ClusterSecurityGroup;
    }
    export interface CreateClusterSnapshotMessage {
      /** A unique identifier for the snapshot that you are requesting. This identifier
must be unique for all snapshots within the AWS account. 

Constraints:

&amp;#42; Cannot be null, empty, or blank
* Must contain from 1 to 255 alphanumeric characters or hyphens
* First character must be a letter
* Cannot end with a hyphen or contain two consecutive hyphens

Example: my-snapshot-id **/
      SnapshotIdentifier: String;
      /** The cluster identifier for which you want a snapshot. **/
      ClusterIdentifier: String;
      /** A list of tag instances. **/
      Tags?: TagList;
    }
    export interface CreateClusterSnapshotResult {
      Snapshot?: Snapshot;
    }
    export interface CreateClusterSubnetGroupMessage {
      /** The name for the subnet group. Amazon Redshift stores the value as a lowercase
string. 

Constraints: 

&amp;#42; Must contain no more than 255 alphanumeric characters or hyphens.
* Must not be &quot;Default&quot;.
* Must be unique for all subnet groups that are created by your AWS account.

Example: examplesubnetgroup **/
      ClusterSubnetGroupName: String;
      /** A description for the subnet group. **/
      Description: String;
      /** An array of VPC subnet IDs. A maximum of 20 subnets can be modified in a single
request. **/
      SubnetIds: SubnetIdentifierList;
      /** A list of tag instances. **/
      Tags?: TagList;
    }
    export interface CreateClusterSubnetGroupResult {
      ClusterSubnetGroup?: ClusterSubnetGroup;
    }
    export interface CreateEventSubscriptionMessage {
      /** The name of the event subscription to be created. 

Constraints:

&amp;#42; Cannot be null, empty, or blank.
* Must contain from 1 to 255 alphanumeric characters or hyphens.
* First character must be a letter.
* Cannot end with a hyphen or contain two consecutive hyphens. **/
      SubscriptionName: String;
      /** The Amazon Resource Name (ARN) of the Amazon SNS topic used to transmit the
event notifications. The ARN is created by Amazon SNS when you create a topic
and subscribe to it. **/
      SnsTopicArn: String;
      /** The type of source that will be generating the events. For example, if you want
to be notified of events generated by a cluster, you would set this parameter to
cluster. If this value is not specified, events are returned for all Amazon
Redshift objects in your AWS account. You must specify a source type in order to
specify source IDs. 

Valid values: cluster, cluster-parameter-group, cluster-security-group, and
cluster-snapshot. **/
      SourceType?: String;
      /** A list of one or more identifiers of Amazon Redshift source objects. All of the
objects must be of the same type as was specified in the source type parameter.
The event subscription will return only events generated by the specified
objects. If not specified, then events are returned for all objects within the
source type specified. 

Example: my-cluster-1, my-cluster-2

Example: my-snapshot-20131010 **/
      SourceIds?: SourceIdsList;
      /** Specifies the Amazon Redshift event categories to be published by the event
notification subscription.

Values: Configuration, Management, Monitoring, Security **/
      EventCategories?: EventCategoriesList;
      /** Specifies the Amazon Redshift event severity to be published by the event
notification subscription.

Values: ERROR, INFO **/
      Severity?: String;
      /** A Boolean value; set to true to activate the subscription, set to false to
create the subscription but not active it. **/
      Enabled?: BooleanOptional;
      /** A list of tag instances. **/
      Tags?: TagList;
    }
    export interface CreateEventSubscriptionResult {
      EventSubscription?: EventSubscription;
    }
    export interface CreateHsmClientCertificateMessage {
      /** The identifier to be assigned to the new HSM client certificate that the cluster
will use to connect to the HSM to use the database encryption keys. **/
      HsmClientCertificateIdentifier: String;
      /** A list of tag instances. **/
      Tags?: TagList;
    }
    export interface CreateHsmClientCertificateResult {
      HsmClientCertificate?: HsmClientCertificate;
    }
    export interface CreateHsmConfigurationMessage {
      /** The identifier to be assigned to the new Amazon Redshift HSM configuration. **/
      HsmConfigurationIdentifier: String;
      /** A text description of the HSM configuration to be created. **/
      Description: String;
      /** The IP address that the Amazon Redshift cluster must use to access the HSM. **/
      HsmIpAddress: String;
      /** The name of the partition in the HSM where the Amazon Redshift clusters will
store their database encryption keys. **/
      HsmPartitionName: String;
      /** The password required to access the HSM partition. **/
      HsmPartitionPassword: String;
      /** The HSMs public certificate file. When using Cloud HSM, the file name is
server.pem. **/
      HsmServerPublicCertificate: String;
      /** A list of tag instances. **/
      Tags?: TagList;
    }
    export interface CreateHsmConfigurationResult {
      HsmConfiguration?: HsmConfiguration;
    }
    export interface CreateSnapshotCopyGrantMessage {
      /** The name of the snapshot copy grant. This name must be unique in the region for
the AWS account.

Constraints:

&amp;#42; Must contain from 1 to 63 alphanumeric characters or hyphens.
* Alphabetic characters must be lowercase.
* First character must be a letter.
* Cannot end with a hyphen or contain two consecutive hyphens.
* Must be unique for all clusters within an AWS account. **/
      SnapshotCopyGrantName: String;
      /** The unique identifier of the customer master key (CMK) to which to grant Amazon
Redshift permission. If no key is specified, the default key is used. **/
      KmsKeyId?: String;
      /** A list of tag instances. **/
      Tags?: TagList;
    }
    export interface CreateSnapshotCopyGrantResult {
      SnapshotCopyGrant?: SnapshotCopyGrant;
    }
    export interface CreateTagsMessage {
      /** The Amazon Resource Name (ARN) to which you want to add the tag or tags. For
example, arn:aws:redshift:us-east-1:123456789:cluster:t1. **/
      ResourceName: String;
      /** One or more name/value pairs to add as tags to the specified resource. Each tag
name is passed in with the parameter Key and the corresponding value is passed
in with the parameter Value. The Key and Value parameters are separated by a
comma (,). Separate multiple tags with a space. For example, --tags
&quot;Key&quot;=&quot;owner&quot;,&quot;Value&quot;=&quot;admin&quot; &quot;Key&quot;=&quot;environment&quot;,&quot;Value&quot;=&quot;test&quot;
&quot;Key&quot;=&quot;version&quot;,&quot;Value&quot;=&quot;1.0&quot;. **/
      Tags: TagList;
    }
    export interface DefaultClusterParameters {
      /** The name of the cluster parameter group family to which the engine default
parameters apply. **/
      ParameterGroupFamily?: String;
      /** A value that indicates the starting point for the next set of response records
in a subsequent request. If a value is returned in a response, you can retrieve
the next set of records by providing this returned marker value in the Marker 
parameter and retrying the command. If the Marker field is empty, all response
records have been retrieved for the request. **/
      Marker?: String;
      /** The list of cluster default parameters. **/
      Parameters?: ParametersList;
    }
    export interface DeleteClusterMessage {
      /** The identifier of the cluster to be deleted. 

Constraints:

&amp;#42; Must contain lowercase characters.
* Must contain from 1 to 63 alphanumeric characters or hyphens.
* First character must be a letter.
* Cannot end with a hyphen or contain two consecutive hyphens. **/
      ClusterIdentifier: String;
      /** Determines whether a final snapshot of the cluster is created before Amazon
Redshift deletes the cluster. If true, a final cluster snapshot is not created.
If false, a final cluster snapshot is created before the cluster is deleted. 

The FinalClusterSnapshotIdentifier parameter must be specified if 
SkipFinalClusterSnapshot is false. Default: false **/
      SkipFinalClusterSnapshot?: Boolean;
      /** The identifier of the final snapshot that is to be created immediately before
deleting the cluster. If this parameter is provided, SkipFinalClusterSnapshot 
must be false. 

Constraints:

&amp;#42; Must be 1 to 255 alphanumeric characters.
* First character must be a letter.
* Cannot end with a hyphen or contain two consecutive hyphens. **/
      FinalClusterSnapshotIdentifier?: String;
    }
    export interface DeleteClusterParameterGroupMessage {
      /** The name of the parameter group to be deleted. 

Constraints:

&amp;#42; Must be the name of an existing cluster parameter group.
* Cannot delete a default cluster parameter group. **/
      ParameterGroupName: String;
    }
    export interface DeleteClusterResult {
      Cluster?: Cluster;
    }
    export interface DeleteClusterSecurityGroupMessage {
      /** The name of the cluster security group to be deleted. **/
      ClusterSecurityGroupName: String;
    }
    export interface DeleteClusterSnapshotMessage {
      /** The unique identifier of the manual snapshot to be deleted. 

Constraints: Must be the name of an existing snapshot that is in the available 
state. **/
      SnapshotIdentifier: String;
      /** The unique identifier of the cluster the snapshot was created from. This
parameter is required if your IAM user has a policy containing a snapshot
resource element that specifies anything other than &amp;#42; for the cluster name. 

Constraints: Must be the name of valid cluster. **/
      SnapshotClusterIdentifier?: String;
    }
    export interface DeleteClusterSnapshotResult {
      Snapshot?: Snapshot;
    }
    export interface DeleteClusterSubnetGroupMessage {
      /** The name of the cluster subnet group name to be deleted. **/
      ClusterSubnetGroupName: String;
    }
    export interface DeleteEventSubscriptionMessage {
      /** The name of the Amazon Redshift event notification subscription to be deleted. **/
      SubscriptionName: String;
    }
    export interface DeleteHsmClientCertificateMessage {
      /** The identifier of the HSM client certificate to be deleted. **/
      HsmClientCertificateIdentifier: String;
    }
    export interface DeleteHsmConfigurationMessage {
      /** The identifier of the Amazon Redshift HSM configuration to be deleted. **/
      HsmConfigurationIdentifier: String;
    }
    export interface DeleteSnapshotCopyGrantMessage {
      /** The name of the snapshot copy grant to delete. **/
      SnapshotCopyGrantName: String;
    }
    export interface DeleteTagsMessage {
      /** The Amazon Resource Name (ARN) from which you want to remove the tag or tags.
For example, arn:aws:redshift:us-east-1:123456789:cluster:t1. **/
      ResourceName: String;
      /** The tag key that you want to delete. **/
      TagKeys: TagKeyList;
    }
    export interface DependentServiceRequestThrottlingFault {
    }
    export interface DescribeClusterParameterGroupsMessage {
      /** The name of a specific parameter group for which to return details. By default,
details about all parameter groups and the default parameter group are returned. **/
      ParameterGroupName?: String;
      /** The maximum number of response records to return in each call. If the number of
remaining response records exceeds the specified MaxRecords value, a value is
returned in a marker field of the response. You can retrieve the next set of
records by retrying the command with the returned marker value. 

Default: 100

Constraints: minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional parameter that specifies the starting point to return a set of
response records. When the results of a DescribeClusterParameterGroups request
exceed the value specified in MaxRecords, AWS returns a value in the Marker 
field of the response. You can retrieve the next set of response records by
providing the returned marker value in the Marker parameter and retrying the
request. **/
      Marker?: String;
      /** A tag key or keys for which you want to return all matching cluster parameter
groups that are associated with the specified key or keys. For example, suppose
that you have parameter groups that are tagged with keys called owner and 
environment. If you specify both of these tag keys in the request, Amazon
Redshift returns a response with the parameter groups that have either or both
of these tag keys associated with them. **/
      TagKeys?: TagKeyList;
      /** A tag value or values for which you want to return all matching cluster
parameter groups that are associated with the specified tag value or values. For
example, suppose that you have parameter groups that are tagged with values
called admin and test. If you specify both of these tag values in the request,
Amazon Redshift returns a response with the parameter groups that have either or
both of these tag values associated with them. **/
      TagValues?: TagValueList;
    }
    export interface DescribeClusterParametersMessage {
      /** The name of a cluster parameter group for which to return details. **/
      ParameterGroupName: String;
      /** The parameter types to return. Specify user to show parameters that are
different form the default. Similarly, specify engine-default to show parameters
that are the same as the default parameter group. 

Default: All parameter types returned.

Valid Values: user | engine-default **/
      Source?: String;
      /** The maximum number of response records to return in each call. If the number of
remaining response records exceeds the specified MaxRecords value, a value is
returned in a marker field of the response. You can retrieve the next set of
records by retrying the command with the returned marker value. 

Default: 100

Constraints: minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional parameter that specifies the starting point to return a set of
response records. When the results of a DescribeClusterParameters request exceed
the value specified in MaxRecords, AWS returns a value in the Marker field of
the response. You can retrieve the next set of response records by providing the
returned marker value in the Marker parameter and retrying the request. **/
      Marker?: String;
    }
    export interface DescribeClusterSecurityGroupsMessage {
      /** The name of a cluster security group for which you are requesting details. You
can specify either the Marker parameter or a ClusterSecurityGroupName parameter,
but not both. 

Example: securitygroup1 **/
      ClusterSecurityGroupName?: String;
      /** The maximum number of response records to return in each call. If the number of
remaining response records exceeds the specified MaxRecords value, a value is
returned in a marker field of the response. You can retrieve the next set of
records by retrying the command with the returned marker value. 

Default: 100

Constraints: minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional parameter that specifies the starting point to return a set of
response records. When the results of a DescribeClusterSecurityGroups request
exceed the value specified in MaxRecords, AWS returns a value in the Marker 
field of the response. You can retrieve the next set of response records by
providing the returned marker value in the Marker parameter and retrying the
request. 

Constraints: You can specify either the ClusterSecurityGroupName parameter or
the Marker parameter, but not both. **/
      Marker?: String;
      /** A tag key or keys for which you want to return all matching cluster security
groups that are associated with the specified key or keys. For example, suppose
that you have security groups that are tagged with keys called owner and 
environment. If you specify both of these tag keys in the request, Amazon
Redshift returns a response with the security groups that have either or both of
these tag keys associated with them. **/
      TagKeys?: TagKeyList;
      /** A tag value or values for which you want to return all matching cluster security
groups that are associated with the specified tag value or values. For example,
suppose that you have security groups that are tagged with values called admin 
and test. If you specify both of these tag values in the request, Amazon
Redshift returns a response with the security groups that have either or both of
these tag values associated with them. **/
      TagValues?: TagValueList;
    }
    export interface DescribeClusterSnapshotsMessage {
      /** The identifier of the cluster for which information about snapshots is
requested. **/
      ClusterIdentifier?: String;
      /** The snapshot identifier of the snapshot about which to return information. **/
      SnapshotIdentifier?: String;
      /** The type of snapshots for which you are requesting information. By default,
snapshots of all types are returned. 

Valid Values: automated | manual **/
      SnapshotType?: String;
      /** A value that requests only snapshots created at or after the specified time.
The time value is specified in ISO 8601 format. For more information about ISO
8601, go to the ISO8601 Wikipedia page. [http://en.wikipedia.org/wiki/ISO_8601] 

Example: 2012-07-16T18:00:00Z **/
      StartTime?: TStamp;
      /** A time value that requests only snapshots created at or before the specified
time. The time value is specified in ISO 8601 format. For more information about
ISO 8601, go to the ISO8601 Wikipedia page.
[http://en.wikipedia.org/wiki/ISO_8601] 

Example: 2012-07-16T18:00:00Z **/
      EndTime?: TStamp;
      /** The maximum number of response records to return in each call. If the number of
remaining response records exceeds the specified MaxRecords value, a value is
returned in a marker field of the response. You can retrieve the next set of
records by retrying the command with the returned marker value. 

Default: 100

Constraints: minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional parameter that specifies the starting point to return a set of
response records. When the results of a DescribeClusterSnapshots request exceed
the value specified in MaxRecords, AWS returns a value in the Marker field of
the response. You can retrieve the next set of response records by providing the
returned marker value in the Marker parameter and retrying the request. **/
      Marker?: String;
      /** The AWS customer account used to create or copy the snapshot. Use this field to
filter the results to snapshots owned by a particular account. To describe
snapshots you own, either specify your AWS customer account, or do not specify
the parameter. **/
      OwnerAccount?: String;
      /** A tag key or keys for which you want to return all matching cluster snapshots
that are associated with the specified key or keys. For example, suppose that
you have snapshots that are tagged with keys called owner and environment. If
you specify both of these tag keys in the request, Amazon Redshift returns a
response with the snapshots that have either or both of these tag keys
associated with them. **/
      TagKeys?: TagKeyList;
      /** A tag value or values for which you want to return all matching cluster
snapshots that are associated with the specified tag value or values. For
example, suppose that you have snapshots that are tagged with values called 
admin and test. If you specify both of these tag values in the request, Amazon
Redshift returns a response with the snapshots that have either or both of these
tag values associated with them. **/
      TagValues?: TagValueList;
    }
    export interface DescribeClusterSubnetGroupsMessage {
      /** The name of the cluster subnet group for which information is requested. **/
      ClusterSubnetGroupName?: String;
      /** The maximum number of response records to return in each call. If the number of
remaining response records exceeds the specified MaxRecords value, a value is
returned in a marker field of the response. You can retrieve the next set of
records by retrying the command with the returned marker value. 

Default: 100

Constraints: minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional parameter that specifies the starting point to return a set of
response records. When the results of a DescribeClusterSubnetGroups request
exceed the value specified in MaxRecords, AWS returns a value in the Marker 
field of the response. You can retrieve the next set of response records by
providing the returned marker value in the Marker parameter and retrying the
request. **/
      Marker?: String;
      /** A tag key or keys for which you want to return all matching cluster subnet
groups that are associated with the specified key or keys. For example, suppose
that you have subnet groups that are tagged with keys called owner and 
environment. If you specify both of these tag keys in the request, Amazon
Redshift returns a response with the subnet groups that have either or both of
these tag keys associated with them. **/
      TagKeys?: TagKeyList;
      /** A tag value or values for which you want to return all matching cluster subnet
groups that are associated with the specified tag value or values. For example,
suppose that you have subnet groups that are tagged with values called admin and 
test. If you specify both of these tag values in the request, Amazon Redshift
returns a response with the subnet groups that have either or both of these tag
values associated with them. **/
      TagValues?: TagValueList;
    }
    export interface DescribeClusterVersionsMessage {
      /** The specific cluster version to return. 

Example: 1.0 **/
      ClusterVersion?: String;
      /** The name of a specific cluster parameter group family to return details for. 

Constraints:

&amp;#42; Must be 1 to 255 alphanumeric characters
* First character must be a letter
* Cannot end with a hyphen or contain two consecutive hyphens **/
      ClusterParameterGroupFamily?: String;
      /** The maximum number of response records to return in each call. If the number of
remaining response records exceeds the specified MaxRecords value, a value is
returned in a marker field of the response. You can retrieve the next set of
records by retrying the command with the returned marker value. 

Default: 100

Constraints: minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional parameter that specifies the starting point to return a set of
response records. When the results of a DescribeClusterVersions request exceed
the value specified in MaxRecords, AWS returns a value in the Marker field of
the response. You can retrieve the next set of response records by providing the
returned marker value in the Marker parameter and retrying the request. **/
      Marker?: String;
    }
    export interface DescribeClustersMessage {
      /** The unique identifier of a cluster whose properties you are requesting. This
parameter is case sensitive. 

The default is that all clusters defined for an account are returned. **/
      ClusterIdentifier?: String;
      /** The maximum number of response records to return in each call. If the number of
remaining response records exceeds the specified MaxRecords value, a value is
returned in a marker field of the response. You can retrieve the next set of
records by retrying the command with the returned marker value. 

Default: 100

Constraints: minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional parameter that specifies the starting point to return a set of
response records. When the results of a DescribeClusters request exceed the
value specified in MaxRecords, AWS returns a value in the Marker field of the
response. You can retrieve the next set of response records by providing the
returned marker value in the Marker parameter and retrying the request. 

Constraints: You can specify either the ClusterIdentifier parameter or the 
Marker parameter, but not both. **/
      Marker?: String;
      /** A tag key or keys for which you want to return all matching clusters that are
associated with the specified key or keys. For example, suppose that you have
clusters that are tagged with keys called owner and environment. If you specify
both of these tag keys in the request, Amazon Redshift returns a response with
the clusters that have either or both of these tag keys associated with them. **/
      TagKeys?: TagKeyList;
      /** A tag value or values for which you want to return all matching clusters that
are associated with the specified tag value or values. For example, suppose that
you have clusters that are tagged with values called admin and test. If you
specify both of these tag values in the request, Amazon Redshift returns a
response with the clusters that have either or both of these tag values
associated with them. **/
      TagValues?: TagValueList;
    }
    export interface DescribeDefaultClusterParametersMessage {
      /** The name of the cluster parameter group family. **/
      ParameterGroupFamily: String;
      /** The maximum number of response records to return in each call. If the number of
remaining response records exceeds the specified MaxRecords value, a value is
returned in a marker field of the response. You can retrieve the next set of
records by retrying the command with the returned marker value. 

Default: 100

Constraints: minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional parameter that specifies the starting point to return a set of
response records. When the results of a DescribeDefaultClusterParameters request
exceed the value specified in MaxRecords, AWS returns a value in the Marker 
field of the response. You can retrieve the next set of response records by
providing the returned marker value in the Marker parameter and retrying the
request. **/
      Marker?: String;
    }
    export interface DescribeDefaultClusterParametersResult {
      DefaultClusterParameters?: DefaultClusterParameters;
    }
    export interface DescribeEventCategoriesMessage {
      /** The source type, such as cluster or parameter group, to which the described
event categories apply. 

Valid values: cluster, cluster-snapshot, cluster-parameter-group, and
cluster-security-group. **/
      SourceType?: String;
    }
    export interface DescribeEventSubscriptionsMessage {
      /** The name of the Amazon Redshift event notification subscription to be described. **/
      SubscriptionName?: String;
      /** The maximum number of response records to return in each call. If the number of
remaining response records exceeds the specified MaxRecords value, a value is
returned in a marker field of the response. You can retrieve the next set of
records by retrying the command with the returned marker value. 

Default: 100

Constraints: minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional parameter that specifies the starting point to return a set of
response records. When the results of a DescribeEventSubscriptions request
exceed the value specified in MaxRecords, AWS returns a value in the Marker 
field of the response. You can retrieve the next set of response records by
providing the returned marker value in the Marker parameter and retrying the
request. **/
      Marker?: String;
    }
    export interface DescribeEventsMessage {
      /** The identifier of the event source for which events will be returned. If this
parameter is not specified, then all sources are included in the response. 

Constraints:

If SourceIdentifier is supplied, SourceType must also be provided.

&amp;#42; Specify a cluster identifier when SourceType is cluster.
* Specify a cluster security group name when SourceType is 
 cluster-security-group.
* Specify a cluster parameter group name when SourceType is 
 cluster-parameter-group.
* Specify a cluster snapshot identifier when SourceType is cluster-snapshot. **/
      SourceIdentifier?: String;
      /** The event source to retrieve events for. If no value is specified, all events
are returned. 

Constraints:

If SourceType is supplied, SourceIdentifier must also be provided.

&amp;#42; Specify cluster when SourceIdentifier is a cluster identifier.
* Specify cluster-security-group when SourceIdentifier is a cluster security
 group name.
* Specify cluster-parameter-group when SourceIdentifier is a cluster parameter
 group name.
* Specify cluster-snapshot when SourceIdentifier is a cluster snapshot
 identifier. **/
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
      /** The number of minutes prior to the time of the request for which to retrieve
events. For example, if the request is sent at 18:00 and you specify a duration
of 60, then only events which have occurred after 17:00 will be returned. 

Default: 60 **/
      Duration?: IntegerOptional;
      /** The maximum number of response records to return in each call. If the number of
remaining response records exceeds the specified MaxRecords value, a value is
returned in a marker field of the response. You can retrieve the next set of
records by retrying the command with the returned marker value. 

Default: 100

Constraints: minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional parameter that specifies the starting point to return a set of
response records. When the results of a DescribeEvents request exceed the value
specified in MaxRecords, AWS returns a value in the Marker field of the
response. You can retrieve the next set of response records by providing the
returned marker value in the Marker parameter and retrying the request. **/
      Marker?: String;
    }
    export interface DescribeHsmClientCertificatesMessage {
      /** The identifier of a specific HSM client certificate for which you want
information. If no identifier is specified, information is returned for all HSM
client certificates owned by your AWS customer account. **/
      HsmClientCertificateIdentifier?: String;
      /** The maximum number of response records to return in each call. If the number of
remaining response records exceeds the specified MaxRecords value, a value is
returned in a marker field of the response. You can retrieve the next set of
records by retrying the command with the returned marker value. 

Default: 100

Constraints: minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional parameter that specifies the starting point to return a set of
response records. When the results of a DescribeHsmClientCertificates request
exceed the value specified in MaxRecords, AWS returns a value in the Marker 
field of the response. You can retrieve the next set of response records by
providing the returned marker value in the Marker parameter and retrying the
request. **/
      Marker?: String;
      /** A tag key or keys for which you want to return all matching HSM client
certificates that are associated with the specified key or keys. For example,
suppose that you have HSM client certificates that are tagged with keys called 
owner and environment. If you specify both of these tag keys in the request,
Amazon Redshift returns a response with the HSM client certificates that have
either or both of these tag keys associated with them. **/
      TagKeys?: TagKeyList;
      /** A tag value or values for which you want to return all matching HSM client
certificates that are associated with the specified tag value or values. For
example, suppose that you have HSM client certificates that are tagged with
values called admin and test. If you specify both of these tag values in the
request, Amazon Redshift returns a response with the HSM client certificates
that have either or both of these tag values associated with them. **/
      TagValues?: TagValueList;
    }
    export interface DescribeHsmConfigurationsMessage {
      /** The identifier of a specific Amazon Redshift HSM configuration to be described.
If no identifier is specified, information is returned for all HSM
configurations owned by your AWS customer account. **/
      HsmConfigurationIdentifier?: String;
      /** The maximum number of response records to return in each call. If the number of
remaining response records exceeds the specified MaxRecords value, a value is
returned in a marker field of the response. You can retrieve the next set of
records by retrying the command with the returned marker value. 

Default: 100

Constraints: minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional parameter that specifies the starting point to return a set of
response records. When the results of a DescribeHsmConfigurations request exceed
the value specified in MaxRecords, AWS returns a value in the Marker field of
the response. You can retrieve the next set of response records by providing the
returned marker value in the Marker parameter and retrying the request. **/
      Marker?: String;
      /** A tag key or keys for which you want to return all matching HSM configurations
that are associated with the specified key or keys. For example, suppose that
you have HSM configurations that are tagged with keys called owner and 
environment. If you specify both of these tag keys in the request, Amazon
Redshift returns a response with the HSM configurations that have either or both
of these tag keys associated with them. **/
      TagKeys?: TagKeyList;
      /** A tag value or values for which you want to return all matching HSM
configurations that are associated with the specified tag value or values. For
example, suppose that you have HSM configurations that are tagged with values
called admin and test. If you specify both of these tag values in the request,
Amazon Redshift returns a response with the HSM configurations that have either
or both of these tag values associated with them. **/
      TagValues?: TagValueList;
    }
    export interface DescribeLoggingStatusMessage {
      /** The identifier of the cluster from which to get the logging status. 

Example: examplecluster **/
      ClusterIdentifier: String;
    }
    export interface DescribeOrderableClusterOptionsMessage {
      /** The version filter value. Specify this parameter to show only the available
offerings matching the specified version. 

Default: All versions.

Constraints: Must be one of the version returned from DescribeClusterVersions. **/
      ClusterVersion?: String;
      /** The node type filter value. Specify this parameter to show only the available
offerings matching the specified node type. **/
      NodeType?: String;
      /** The maximum number of response records to return in each call. If the number of
remaining response records exceeds the specified MaxRecords value, a value is
returned in a marker field of the response. You can retrieve the next set of
records by retrying the command with the returned marker value. 

Default: 100

Constraints: minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional parameter that specifies the starting point to return a set of
response records. When the results of a DescribeOrderableClusterOptions request
exceed the value specified in MaxRecords, AWS returns a value in the Marker 
field of the response. You can retrieve the next set of response records by
providing the returned marker value in the Marker parameter and retrying the
request. **/
      Marker?: String;
    }
    export interface DescribeReservedNodeOfferingsMessage {
      /** The unique identifier for the offering. **/
      ReservedNodeOfferingId?: String;
      /** The maximum number of response records to return in each call. If the number of
remaining response records exceeds the specified MaxRecords value, a value is
returned in a marker field of the response. You can retrieve the next set of
records by retrying the command with the returned marker value. 

Default: 100

Constraints: minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional parameter that specifies the starting point to return a set of
response records. When the results of a DescribeReservedNodeOfferings request
exceed the value specified in MaxRecords, AWS returns a value in the Marker 
field of the response. You can retrieve the next set of response records by
providing the returned marker value in the Marker parameter and retrying the
request. **/
      Marker?: String;
    }
    export interface DescribeReservedNodesMessage {
      /** Identifier for the node reservation. **/
      ReservedNodeId?: String;
      /** The maximum number of response records to return in each call. If the number of
remaining response records exceeds the specified MaxRecords value, a value is
returned in a marker field of the response. You can retrieve the next set of
records by retrying the command with the returned marker value. 

Default: 100

Constraints: minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional parameter that specifies the starting point to return a set of
response records. When the results of a DescribeReservedNodes request exceed the
value specified in MaxRecords, AWS returns a value in the Marker field of the
response. You can retrieve the next set of response records by providing the
returned marker value in the Marker parameter and retrying the request. **/
      Marker?: String;
    }
    export interface DescribeResizeMessage {
      /** The unique identifier of a cluster whose resize progress you are requesting.
This parameter is case-sensitive. 

By default, resize operations for all clusters defined for an AWS account are
returned. **/
      ClusterIdentifier: String;
    }
    export interface DescribeSnapshotCopyGrantsMessage {
      /** The name of the snapshot copy grant. **/
      SnapshotCopyGrantName?: String;
      /** The maximum number of response records to return in each call. If the number of
remaining response records exceeds the specified MaxRecords value, a value is
returned in a marker field of the response. You can retrieve the next set of
records by retrying the command with the returned marker value. 

Default: 100

Constraints: minimum 20, maximum 100. **/
      MaxRecords?: IntegerOptional;
      /** An optional parameter that specifies the starting point to return a set of
response records. When the results of a DescribeSnapshotCopyGrant request exceed
the value specified in MaxRecords, AWS returns a value in the Marker field of
the response. You can retrieve the next set of response records by providing the
returned marker value in the Marker parameter and retrying the request. 

Constraints: You can specify either the SnapshotCopyGrantName parameter or the 
Marker parameter, but not both. **/
      Marker?: String;
      /** A tag key or keys for which you want to return all matching resources that are
associated with the specified key or keys. For example, suppose that you have
resources tagged with keys called owner and environment. If you specify both of
these tag keys in the request, Amazon Redshift returns a response with all
resources that have either or both of these tag keys associated with them. **/
      TagKeys?: TagKeyList;
      /** A tag value or values for which you want to return all matching resources that
are associated with the specified value or values. For example, suppose that you
have resources tagged with values called admin and test. If you specify both of
these tag values in the request, Amazon Redshift returns a response with all
resources that have either or both of these tag values associated with them. **/
      TagValues?: TagValueList;
    }
    export interface DescribeTableRestoreStatusMessage {
      /** The Amazon Redshift cluster that the table is being restored to. **/
      ClusterIdentifier?: String;
      /** The identifier of the table restore request to return status for. If you don&#x27;t
specify a TableRestoreRequestId value, then DescribeTableRestoreStatus returns
the status of all in-progress table restore requests. **/
      TableRestoreRequestId?: String;
      /** The maximum number of records to include in the response. If more records exist
than the specified MaxRecords value, a pagination token called a marker is
included in the response so that the remaining results can be retrieved. **/
      MaxRecords?: IntegerOptional;
      /** An optional pagination token provided by a previous DescribeTableRestoreStatus 
request. If this parameter is specified, the response includes only records
beyond the marker, up to the value specified by the MaxRecords parameter. **/
      Marker?: String;
    }
    export interface DescribeTagsMessage {
      /** The Amazon Resource Name (ARN) for which you want to describe the tag or tags.
For example, arn:aws:redshift:us-east-1:123456789:cluster:t1. **/
      ResourceName?: String;
      /** The type of resource with which you want to view tags. Valid resource types
are:  &amp;#42; Cluster
* CIDR/IP
* EC2 security group
* Snapshot
* Cluster security group
* Subnet group
* HSM connection
* HSM certificate
* Parameter group
* Snapshot copy grant



For more information about Amazon Redshift resource types and constructing
ARNs, go to Constructing an Amazon Redshift Amazon Resource Name (ARN)
[http://docs.aws.amazon.com/redshift/latest/mgmt/constructing-redshift-arn.html] 
in the Amazon Redshift Cluster Management Guide. **/
      ResourceType?: String;
      /** The maximum number or response records to return in each call. If the number of
remaining response records exceeds the specified MaxRecords value, a value is
returned in a marker field of the response. You can retrieve the next set of
records by retrying the command with the returned marker value. **/
      MaxRecords?: IntegerOptional;
      /** A value that indicates the starting point for the next set of response records
in a subsequent request. If a value is returned in a response, you can retrieve
the next set of records by providing this returned marker value in the marker 
parameter and retrying the command. If the marker field is empty, all response
records have been retrieved for the request. **/
      Marker?: String;
      /** A tag key or keys for which you want to return all matching resources that are
associated with the specified key or keys. For example, suppose that you have
resources tagged with keys called owner and environment. If you specify both of
these tag keys in the request, Amazon Redshift returns a response with all
resources that have either or both of these tag keys associated with them. **/
      TagKeys?: TagKeyList;
      /** A tag value or values for which you want to return all matching resources that
are associated with the specified value or values. For example, suppose that you
have resources tagged with values called admin and test. If you specify both of
these tag values in the request, Amazon Redshift returns a response with all
resources that have either or both of these tag values associated with them. **/
      TagValues?: TagValueList;
    }
    export interface DisableLoggingMessage {
      /** The identifier of the cluster on which logging is to be stopped. 

Example: examplecluster **/
      ClusterIdentifier: String;
    }
    export interface DisableSnapshotCopyMessage {
      /** The unique identifier of the source cluster that you want to disable copying of
snapshots to a destination region. 

Constraints: Must be the valid name of an existing cluster that has
cross-region snapshot copy enabled. **/
      ClusterIdentifier: String;
    }
    export interface DisableSnapshotCopyResult {
      Cluster?: Cluster;
    }
    export interface EC2SecurityGroup {
      /** The status of the EC2 security group. **/
      Status?: String;
      /** The name of the EC2 Security Group. **/
      EC2SecurityGroupName?: String;
      /** The AWS ID of the owner of the EC2 security group specified in the 
EC2SecurityGroupName field. **/
      EC2SecurityGroupOwnerId?: String;
      /** The list of tags for the EC2 security group. **/
      Tags?: TagList;
    }
    export interface ElasticIpStatus {
      /** The elastic IP (EIP) address for the cluster. **/
      ElasticIp?: String;
      /** The status of the elastic IP (EIP) address. **/
      Status?: String;
    }
    export interface EnableLoggingMessage {
      /** The identifier of the cluster on which logging is to be started. 

Example: examplecluster **/
      ClusterIdentifier: String;
      /** The name of an existing S3 bucket where the log files are to be stored. 

Constraints:

&amp;#42; Must be in the same region as the cluster
* The cluster must have read bucket and put object permissions **/
      BucketName: String;
      /** The prefix applied to the log file names. 

Constraints:

&amp;#42; Cannot exceed 512 characters
* Cannot contain spaces( ), double quotes (&quot;), single quotes (&#x27;), a backslash
 (\), or control characters. The hexadecimal codes for invalid characters are:  * 
    x00 to x20
  * 
    x22
  * 
    x27
  * 
    x5c
  * 
    x7f or larger **/
      S3KeyPrefix?: String;
    }
    export interface EnableSnapshotCopyMessage {
      /** The unique identifier of the source cluster to copy snapshots from. 

Constraints: Must be the valid name of an existing cluster that does not
already have cross-region snapshot copy enabled. **/
      ClusterIdentifier: String;
      /** The destination region that you want to copy snapshots to. 

Constraints: Must be the name of a valid region. For more information, see 
Regions and Endpoints
[http://docs.aws.amazon.com/general/latest/gr/rande.html#redshift_region] in the
Amazon Web Services General Reference. **/
      DestinationRegion: String;
      /** The number of days to retain automated snapshots in the destination region
after they are copied from the source region. 

Default: 7. 

Constraints: Must be at least 1 and no more than 35. **/
      RetentionPeriod?: IntegerOptional;
      /** The name of the snapshot copy grant to use when snapshots of an AWS
KMS-encrypted cluster are copied to the destination region. **/
      SnapshotCopyGrantName?: String;
    }
    export interface EnableSnapshotCopyResult {
      Cluster?: Cluster;
    }
    export interface Endpoint {
      /** The DNS address of the Cluster. **/
      Address?: String;
      /** The port that the database engine is listening on. **/
      Port?: Integer;
    }
    export interface Event {
      /** The identifier for the source of the event. **/
      SourceIdentifier?: String;
      /** The source type for this event. **/
      SourceType?: SourceType;
      /** The text of this event. **/
      Message?: String;
      /** A list of the event categories. 

Values: Configuration, Management, Monitoring, Security **/
      EventCategories?: EventCategoriesList;
      /** The severity of the event.

Values: ERROR, INFO **/
      Severity?: String;
      /** The date and time of the event. **/
      Date?: TStamp;
      /** The identifier of the event. **/
      EventId?: String;
    }
    export interface EventCategoriesMap {
      /** The source type, such as cluster or cluster-snapshot, that the returned
categories belong to. **/
      SourceType?: String;
      /** The events in the event category. **/
      Events?: EventInfoMapList;
    }
    export interface EventCategoriesMessage {
      /** A list of event categories descriptions. **/
      EventCategoriesMapList?: EventCategoriesMapList;
    }
    export interface EventInfoMap {
      /** The identifier of an Amazon Redshift event. **/
      EventId?: String;
      /** The category of an Amazon Redshift event. **/
      EventCategories?: EventCategoriesList;
      /** The description of an Amazon Redshift event. **/
      EventDescription?: String;
      /** The severity of the event.

Values: ERROR, INFO **/
      Severity?: String;
    }
    export interface EventSubscription {
      /** The AWS customer account associated with the Amazon Redshift event notification
subscription. **/
      CustomerAwsId?: String;
      /** The name of the Amazon Redshift event notification subscription. **/
      CustSubscriptionId?: String;
      /** The Amazon Resource Name (ARN) of the Amazon SNS topic used by the event
notification subscription. **/
      SnsTopicArn?: String;
      /** The status of the Amazon Redshift event notification subscription.

Constraints:

&amp;#42; Can be one of the following: active | no-permission | topic-not-exist
* The status &quot;no-permission&quot; indicates that Amazon Redshift no longer has
 permission to post to the Amazon SNS topic. The status &quot;topic-not-exist&quot;
 indicates that the topic was deleted after the subscription was created. **/
      Status?: String;
      /** The date and time the Amazon Redshift event notification subscription was
created. **/
      SubscriptionCreationTime?: TStamp;
      /** The source type of the events returned the Amazon Redshift event notification,
such as cluster, or cluster-snapshot. **/
      SourceType?: String;
      /** A list of the sources that publish events to the Amazon Redshift event
notification subscription. **/
      SourceIdsList?: SourceIdsList;
      /** The list of Amazon Redshift event categories specified in the event notification
subscription.

Values: Configuration, Management, Monitoring, Security **/
      EventCategoriesList?: EventCategoriesList;
      /** The event severity specified in the Amazon Redshift event notification
subscription.

Values: ERROR, INFO **/
      Severity?: String;
      /** A Boolean value indicating whether the subscription is enabled. true indicates
the subscription is enabled. **/
      Enabled?: Boolean;
      /** The list of tags for the event subscription. **/
      Tags?: TagList;
    }
    export interface EventSubscriptionQuotaExceededFault {
    }
    export interface EventSubscriptionsMessage {
      /** A value that indicates the starting point for the next set of response records
in a subsequent request. If a value is returned in a response, you can retrieve
the next set of records by providing this returned marker value in the Marker 
parameter and retrying the command. If the Marker field is empty, all response
records have been retrieved for the request. **/
      Marker?: String;
      /** A list of event subscriptions. **/
      EventSubscriptionsList?: EventSubscriptionsList;
    }
    export interface EventsMessage {
      /** A value that indicates the starting point for the next set of response records
in a subsequent request. If a value is returned in a response, you can retrieve
the next set of records by providing this returned marker value in the Marker 
parameter and retrying the command. If the Marker field is empty, all response
records have been retrieved for the request. **/
      Marker?: String;
      /** A list of Event instances. **/
      Events?: EventList;
    }
    export interface HsmClientCertificate {
      /** The identifier of the HSM client certificate. **/
      HsmClientCertificateIdentifier?: String;
      /** The public key that the Amazon Redshift cluster will use to connect to the HSM.
You must register the public key in the HSM. **/
      HsmClientCertificatePublicKey?: String;
      /** The list of tags for the HSM client certificate. **/
      Tags?: TagList;
    }
    export interface HsmClientCertificateAlreadyExistsFault {
    }
    export interface HsmClientCertificateMessage {
      /** A value that indicates the starting point for the next set of response records
in a subsequent request. If a value is returned in a response, you can retrieve
the next set of records by providing this returned marker value in the Marker 
parameter and retrying the command. If the Marker field is empty, all response
records have been retrieved for the request. **/
      Marker?: String;
      /** A list of the identifiers for one or more HSM client certificates used by Amazon
Redshift clusters to store and retrieve database encryption keys in an HSM. **/
      HsmClientCertificates?: HsmClientCertificateList;
    }
    export interface HsmClientCertificateNotFoundFault {
    }
    export interface HsmClientCertificateQuotaExceededFault {
    }
    export interface HsmConfiguration {
      /** The name of the Amazon Redshift HSM configuration. **/
      HsmConfigurationIdentifier?: String;
      /** A text description of the HSM configuration. **/
      Description?: String;
      /** The IP address that the Amazon Redshift cluster must use to access the HSM. **/
      HsmIpAddress?: String;
      /** The name of the partition in the HSM where the Amazon Redshift clusters will
store their database encryption keys. **/
      HsmPartitionName?: String;
      /** The list of tags for the HSM configuration. **/
      Tags?: TagList;
    }
    export interface HsmConfigurationAlreadyExistsFault {
    }
    export interface HsmConfigurationMessage {
      /** A value that indicates the starting point for the next set of response records
in a subsequent request. If a value is returned in a response, you can retrieve
the next set of records by providing this returned marker value in the Marker 
parameter and retrying the command. If the Marker field is empty, all response
records have been retrieved for the request. **/
      Marker?: String;
      /** A list of HsmConfiguration objects. **/
      HsmConfigurations?: HsmConfigurationList;
    }
    export interface HsmConfigurationNotFoundFault {
    }
    export interface HsmConfigurationQuotaExceededFault {
    }
    export interface HsmStatus {
      /** Specifies the name of the HSM client certificate the Amazon Redshift cluster
uses to retrieve the data encryption keys stored in an HSM. **/
      HsmClientCertificateIdentifier?: String;
      /** Specifies the name of the HSM configuration that contains the information the
Amazon Redshift cluster can use to retrieve and store keys in an HSM. **/
      HsmConfigurationIdentifier?: String;
      /** Reports whether the Amazon Redshift cluster has finished applying any HSM
settings changes specified in a modify cluster command.

Values: active, applying **/
      Status?: String;
    }
    export interface IPRange {
      /** The status of the IP range, for example, &quot;authorized&quot;. **/
      Status?: String;
      /** The IP range in Classless Inter-Domain Routing (CIDR) notation. **/
      CIDRIP?: String;
      /** The list of tags for the IP range. **/
      Tags?: TagList;
    }
    export interface InProgressTableRestoreQuotaExceededFault {
    }
    export interface IncompatibleOrderableOptions {
    }
    export interface InsufficientClusterCapacityFault {
    }
    export interface InsufficientS3BucketPolicyFault {
    }
    export interface InvalidClusterParameterGroupStateFault {
    }
    export interface InvalidClusterSecurityGroupStateFault {
    }
    export interface InvalidClusterSnapshotStateFault {
    }
    export interface InvalidClusterStateFault {
    }
    export interface InvalidClusterSubnetGroupStateFault {
    }
    export interface InvalidClusterSubnetStateFault {
    }
    export interface InvalidElasticIpFault {
    }
    export interface InvalidHsmClientCertificateStateFault {
    }
    export interface InvalidHsmConfigurationStateFault {
    }
    export interface InvalidRestoreFault {
    }
    export interface InvalidS3BucketNameFault {
    }
    export interface InvalidS3KeyPrefixFault {
    }
    export interface InvalidSnapshotCopyGrantStateFault {
    }
    export interface InvalidSubnet {
    }
    export interface InvalidSubscriptionStateFault {
    }
    export interface InvalidTableRestoreArgumentFault {
    }
    export interface InvalidTagFault {
    }
    export interface InvalidVPCNetworkStateFault {
    }
    export interface LimitExceededFault {
    }
    export interface LoggingStatus {
      /** true if logging is on, false if logging is off. **/
      LoggingEnabled?: Boolean;
      /** The name of the S3 bucket where the log files are stored. **/
      BucketName?: String;
      /** The prefix applied to the log file names. **/
      S3KeyPrefix?: String;
      /** The last time that logs were delivered. **/
      LastSuccessfulDeliveryTime?: TStamp;
      /** The last time when logs failed to be delivered. **/
      LastFailureTime?: TStamp;
      /** The message indicating that logs failed to be delivered. **/
      LastFailureMessage?: String;
    }
    export interface ModifyClusterIamRolesMessage {
      /** The unique identifier of the cluster for which you want to associate or
disassociate IAM roles. **/
      ClusterIdentifier: String;
      /** Zero or more IAM roles (in their ARN format) to associate with the cluster. You
can associate up to 10 IAM roles with a single cluster in a single request. **/
      AddIamRoles?: IamRoleArnList;
      /** Zero or more IAM roles (in their ARN format) to disassociate from the cluster.
You can disassociate up to 10 IAM roles from a single cluster in a single
request. **/
      RemoveIamRoles?: IamRoleArnList;
    }
    export interface ModifyClusterIamRolesResult {
      Cluster?: Cluster;
    }
    export interface ModifyClusterMessage {
      /** The unique identifier of the cluster to be modified. 

Example: examplecluster **/
      ClusterIdentifier: String;
      /** The new cluster type. 

When you submit your cluster resize request, your existing cluster goes into a
read-only mode. After Amazon Redshift provisions a new cluster based on your
resize requirements, there will be outage for a period while the old cluster is
deleted and your connection is switched to the new cluster. You can use 
DescribeResize to track the progress of the resize request. 

Valid Values: multi-node | single-node **/
      ClusterType?: String;
      /** The new node type of the cluster. If you specify a new node type, you must also
specify the number of nodes parameter. 

When you submit your request to resize a cluster, Amazon Redshift sets access
permissions for the cluster to read-only. After Amazon Redshift provisions a new
cluster according to your resize requirements, there will be a temporary outage
while the old cluster is deleted and your connection is switched to the new
cluster. When the new connection is complete, the original access permissions
for the cluster are restored. You can use DescribeResize to track the progress
of the resize request. 

Valid Values: ds1.xlarge | ds1.8xlarge | ds2.xlarge | ds2.8xlarge | dc1.large | 
dc1.8xlarge. **/
      NodeType?: String;
      /** The new number of nodes of the cluster. If you specify a new number of nodes,
you must also specify the node type parameter. 

When you submit your request to resize a cluster, Amazon Redshift sets access
permissions for the cluster to read-only. After Amazon Redshift provisions a new
cluster according to your resize requirements, there will be a temporary outage
while the old cluster is deleted and your connection is switched to the new
cluster. When the new connection is complete, the original access permissions
for the cluster are restored. You can use DescribeResize to track the progress
of the resize request. 

Valid Values: Integer greater than 0. **/
      NumberOfNodes?: IntegerOptional;
      /** A list of cluster security groups to be authorized on this cluster. This change
is asynchronously applied as soon as possible. 

Security groups currently associated with the cluster, and not in the list of
groups to apply, will be revoked from the cluster.

Constraints:

&amp;#42; Must be 1 to 255 alphanumeric characters or hyphens
* First character must be a letter
* Cannot end with a hyphen or contain two consecutive hyphens **/
      ClusterSecurityGroups?: ClusterSecurityGroupNameList;
      /** A list of virtual private cloud (VPC) security groups to be associated with the
cluster. **/
      VpcSecurityGroupIds?: VpcSecurityGroupIdList;
      /** The new password for the cluster master user. This change is asynchronously
applied as soon as possible. Between the time of the request and the completion
of the request, the MasterUserPassword element exists in the 
PendingModifiedValues element of the operation response. Operations never return
the password, so this operation provides a way to regain access to the master
user account for a cluster if the password is lost. 

Default: Uses existing setting.

Constraints: 

&amp;#42; Must be between 8 and 64 characters in length.
* Must contain at least one uppercase letter.
* Must contain at least one lowercase letter.
* Must contain one number.
* Can be any printable ASCII character (ASCII code 33 to 126) except &#x27; (single
 quote), &quot; (double quote), \, /, @, or space. **/
      MasterUserPassword?: String;
      /** The name of the cluster parameter group to apply to this cluster. This change
is applied only after the cluster is rebooted. To reboot a cluster use 
RebootCluster. 

Default: Uses existing setting.

Constraints: The cluster parameter group must be in the same parameter group
family that matches the cluster version. **/
      ClusterParameterGroupName?: String;
      /** The number of days that automated snapshots are retained. If the value is 0,
automated snapshots are disabled. Even if automated snapshots are disabled, you
can still create manual snapshots when you want with CreateClusterSnapshot. 

If you decrease the automated snapshot retention period from its current value,
existing automated snapshots that fall outside of the new retention period will
be immediately deleted.

Default: Uses existing setting.

Constraints: Must be a value from 0 to 35. **/
      AutomatedSnapshotRetentionPeriod?: IntegerOptional;
      /** The weekly time range (in UTC) during which system maintenance can occur, if
necessary. If system maintenance is necessary during the window, it may result
in an outage. 

This maintenance window change is made immediately. If the new maintenance
window indicates the current time, there must be at least 120 minutes between
the current time and end of the window in order to ensure that pending changes
are applied. 

Default: Uses existing setting.

Format: ddd:hh24:mi-ddd:hh24:mi, for example wed:07:30-wed:08:00.

Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun

Constraints: Must be at least 30 minutes. **/
      PreferredMaintenanceWindow?: String;
      /** The new version number of the Amazon Redshift engine to upgrade to. 

For major version upgrades, if a non-default cluster parameter group is
currently in use, a new cluster parameter group in the cluster parameter group
family for the new version must be specified. The new cluster parameter group
can be the default for that cluster parameter group family. For more information
about parameters and parameter groups, go to Amazon Redshift Parameter Groups
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html] 
in the Amazon Redshift Cluster Management Guide. 

Example: 1.0 **/
      ClusterVersion?: String;
      /** If true, major version upgrades will be applied automatically to the cluster
during the maintenance window. 

Default: false **/
      AllowVersionUpgrade?: BooleanOptional;
      /** Specifies the name of the HSM client certificate the Amazon Redshift cluster
uses to retrieve the data encryption keys stored in an HSM. **/
      HsmClientCertificateIdentifier?: String;
      /** Specifies the name of the HSM configuration that contains the information the
Amazon Redshift cluster can use to retrieve and store keys in an HSM. **/
      HsmConfigurationIdentifier?: String;
      /** The new identifier for the cluster.

Constraints:

&amp;#42; Must contain from 1 to 63 alphanumeric characters or hyphens.
* Alphabetic characters must be lowercase.
* First character must be a letter.
* Cannot end with a hyphen or contain two consecutive hyphens.
* Must be unique for all clusters within an AWS account.

Example: examplecluster **/
      NewClusterIdentifier?: String;
      /** If true, the cluster can be accessed from a public network. Only clusters in
VPCs can be set to be publicly available. **/
      PubliclyAccessible?: BooleanOptional;
      /** The Elastic IP (EIP) address for the cluster.

Constraints: The cluster must be provisioned in EC2-VPC and publicly-accessible
through an Internet gateway. For more information about provisioning clusters in
EC2-VPC, go to Supported Platforms to Launch Your Cluster
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#cluster-platforms] 
in the Amazon Redshift Cluster Management Guide. **/
      ElasticIp?: String;
    }
    export interface ModifyClusterParameterGroupMessage {
      /** The name of the parameter group to be modified. **/
      ParameterGroupName: String;
      /** An array of parameters to be modified. A maximum of 20 parameters can be
modified in a single request. 

For each parameter to be modified, you must supply at least the parameter name
and parameter value; other name-value pairs of the parameter are optional. 

For the workload management (WLM) configuration, you must supply all the
name-value pairs in the wlm_json_configuration parameter. **/
      Parameters: ParametersList;
    }
    export interface ModifyClusterResult {
      Cluster?: Cluster;
    }
    export interface ModifyClusterSubnetGroupMessage {
      /** The name of the subnet group to be modified. **/
      ClusterSubnetGroupName: String;
      /** A text description of the subnet group to be modified. **/
      Description?: String;
      /** An array of VPC subnet IDs. A maximum of 20 subnets can be modified in a single
request. **/
      SubnetIds: SubnetIdentifierList;
    }
    export interface ModifyClusterSubnetGroupResult {
      ClusterSubnetGroup?: ClusterSubnetGroup;
    }
    export interface ModifyEventSubscriptionMessage {
      /** The name of the modified Amazon Redshift event notification subscription. **/
      SubscriptionName: String;
      /** The Amazon Resource Name (ARN) of the SNS topic to be used by the event
notification subscription. **/
      SnsTopicArn?: String;
      /** The type of source that will be generating the events. For example, if you want
to be notified of events generated by a cluster, you would set this parameter to
cluster. If this value is not specified, events are returned for all Amazon
Redshift objects in your AWS account. You must specify a source type in order to
specify source IDs. 

Valid values: cluster, cluster-parameter-group, cluster-security-group, and
cluster-snapshot. **/
      SourceType?: String;
      /** A list of one or more identifiers of Amazon Redshift source objects. All of the
objects must be of the same type as was specified in the source type parameter.
The event subscription will return only events generated by the specified
objects. If not specified, then events are returned for all objects within the
source type specified. 

Example: my-cluster-1, my-cluster-2

Example: my-snapshot-20131010 **/
      SourceIds?: SourceIdsList;
      /** Specifies the Amazon Redshift event categories to be published by the event
notification subscription.

Values: Configuration, Management, Monitoring, Security **/
      EventCategories?: EventCategoriesList;
      /** Specifies the Amazon Redshift event severity to be published by the event
notification subscription.

Values: ERROR, INFO **/
      Severity?: String;
      /** A Boolean value indicating if the subscription is enabled. true indicates the
subscription is enabled **/
      Enabled?: BooleanOptional;
    }
    export interface ModifyEventSubscriptionResult {
      EventSubscription?: EventSubscription;
    }
    export interface ModifySnapshotCopyRetentionPeriodMessage {
      /** The unique identifier of the cluster for which you want to change the retention
period for automated snapshots that are copied to a destination region. 

Constraints: Must be the valid name of an existing cluster that has
cross-region snapshot copy enabled. **/
      ClusterIdentifier: String;
      /** The number of days to retain automated snapshots in the destination region
after they are copied from the source region. 

If you decrease the retention period for automated snapshots that are copied to
a destination region, Amazon Redshift will delete any existing automated
snapshots that were copied to the destination region and that fall outside of
the new retention period. 

Constraints: Must be at least 1 and no more than 35. **/
      RetentionPeriod: Integer;
    }
    export interface ModifySnapshotCopyRetentionPeriodResult {
      Cluster?: Cluster;
    }
    export interface NumberOfNodesPerClusterLimitExceededFault {
    }
    export interface NumberOfNodesQuotaExceededFault {
    }
    export interface OrderableClusterOption {
      /** The version of the orderable cluster. **/
      ClusterVersion?: String;
      /** The cluster type, for example multi-node. **/
      ClusterType?: String;
      /** The node type for the orderable cluster. **/
      NodeType?: String;
      /** A list of availability zones for the orderable cluster. **/
      AvailabilityZones?: AvailabilityZoneList;
    }
    export interface OrderableClusterOptionsMessage {
      /** An OrderableClusterOption structure containing information about orderable
options for the cluster. **/
      OrderableClusterOptions?: OrderableClusterOptionsList;
      /** A value that indicates the starting point for the next set of response records
in a subsequent request. If a value is returned in a response, you can retrieve
the next set of records by providing this returned marker value in the Marker 
parameter and retrying the command. If the Marker field is empty, all response
records have been retrieved for the request. **/
      Marker?: String;
    }
    export interface Parameter {
      /** The name of the parameter. **/
      ParameterName?: String;
      /** The value of the parameter. **/
      ParameterValue?: String;
      /** A description of the parameter. **/
      Description?: String;
      /** The source of the parameter value, such as &quot;engine-default&quot; or &quot;user&quot;. **/
      Source?: String;
      /** The data type of the parameter. **/
      DataType?: String;
      /** The valid range of values for the parameter. **/
      AllowedValues?: String;
      /** Specifies how to apply the WLM configuration parameter. Some properties can be
applied dynamically, while other properties require that any associated clusters
be rebooted for the configuration changes to be applied. For more information
about parameters and parameter groups, go to Amazon Redshift Parameter Groups
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html] 
in the Amazon Redshift Cluster Management Guide. **/
      ApplyType?: ParameterApplyType;
      /** If true, the parameter can be modified. Some parameters have security or
operational implications that prevent them from being changed. **/
      IsModifiable?: Boolean;
      /** The earliest engine version to which the parameter can apply. **/
      MinimumEngineVersion?: String;
    }
    export interface PendingModifiedValues {
      /** The pending or in-progress change of the master user password for the cluster. **/
      MasterUserPassword?: String;
      /** The pending or in-progress change of the cluster&#x27;s node type. **/
      NodeType?: String;
      /** The pending or in-progress change of the number of nodes in the cluster. **/
      NumberOfNodes?: IntegerOptional;
      /** The pending or in-progress change of the cluster type. **/
      ClusterType?: String;
      /** The pending or in-progress change of the service version. **/
      ClusterVersion?: String;
      /** The pending or in-progress change of the automated snapshot retention period. **/
      AutomatedSnapshotRetentionPeriod?: IntegerOptional;
      /** The pending or in-progress change of the new identifier for the cluster. **/
      ClusterIdentifier?: String;
      /** The pending or in-progress change of the ability to connect to the cluster from
the public network. **/
      PubliclyAccessible?: BooleanOptional;
    }
    export interface PurchaseReservedNodeOfferingMessage {
      /** The unique identifier of the reserved node offering you want to purchase. **/
      ReservedNodeOfferingId: String;
      /** The number of reserved nodes that you want to purchase.

Default: 1 **/
      NodeCount?: IntegerOptional;
    }
    export interface PurchaseReservedNodeOfferingResult {
      ReservedNode?: ReservedNode;
    }
    export interface RebootClusterMessage {
      /** The cluster identifier. **/
      ClusterIdentifier: String;
    }
    export interface RebootClusterResult {
      Cluster?: Cluster;
    }
    export interface RecurringCharge {
      /** The amount charged per the period of time specified by the recurring charge
frequency. **/
      RecurringChargeAmount?: Double;
      /** The frequency at which the recurring charge amount is applied. **/
      RecurringChargeFrequency?: String;
    }
    export interface ReservedNode {
      /** The unique identifier for the reservation. **/
      ReservedNodeId?: String;
      /** The identifier for the reserved node offering. **/
      ReservedNodeOfferingId?: String;
      /** The node type of the reserved node. **/
      NodeType?: String;
      /** The time the reservation started. You purchase a reserved node offering for a
duration. This is the start time of that duration. **/
      StartTime?: TStamp;
      /** The duration of the node reservation in seconds. **/
      Duration?: Integer;
      /** The fixed cost Amazon Redshift charges you for this reserved node. **/
      FixedPrice?: Double;
      /** The hourly rate Amazon Redshift charges you for this reserved node. **/
      UsagePrice?: Double;
      /** The currency code for the reserved cluster. **/
      CurrencyCode?: String;
      /** The number of reserved compute nodes. **/
      NodeCount?: Integer;
      /** The state of the reserved compute node. 

Possible Values:

&amp;#42; pending-payment-This reserved node has recently been purchased, and the sale
 has been approved, but payment has not yet been confirmed.
* active-This reserved node is owned by the caller and is available for use.
* payment-failed-Payment failed for the purchase attempt. **/
      State?: String;
      /** The anticipated utilization of the reserved node, as defined in the reserved
node offering. **/
      OfferingType?: String;
      /** The recurring charges for the reserved node. **/
      RecurringCharges?: RecurringChargeList;
    }
    export interface ReservedNodeAlreadyExistsFault {
    }
    export interface ReservedNodeNotFoundFault {
    }
    export interface ReservedNodeOffering {
      /** The offering identifier. **/
      ReservedNodeOfferingId?: String;
      /** The node type offered by the reserved node offering. **/
      NodeType?: String;
      /** The duration, in seconds, for which the offering will reserve the node. **/
      Duration?: Integer;
      /** The upfront fixed charge you will pay to purchase the specific reserved node
offering. **/
      FixedPrice?: Double;
      /** The rate you are charged for each hour the cluster that is using the offering
is running. **/
      UsagePrice?: Double;
      /** The currency code for the compute nodes offering. **/
      CurrencyCode?: String;
      /** The anticipated utilization of the reserved node, as defined in the reserved
node offering. **/
      OfferingType?: String;
      /** The charge to your account regardless of whether you are creating any clusters
using the node offering. Recurring charges are only in effect for
heavy-utilization reserved nodes. **/
      RecurringCharges?: RecurringChargeList;
    }
    export interface ReservedNodeOfferingNotFoundFault {
    }
    export interface ReservedNodeOfferingsMessage {
      /** A value that indicates the starting point for the next set of response records
in a subsequent request. If a value is returned in a response, you can retrieve
the next set of records by providing this returned marker value in the Marker 
parameter and retrying the command. If the Marker field is empty, all response
records have been retrieved for the request. **/
      Marker?: String;
      /** A list of ReservedNodeOffering objects. **/
      ReservedNodeOfferings?: ReservedNodeOfferingList;
    }
    export interface ReservedNodeQuotaExceededFault {
    }
    export interface ReservedNodesMessage {
      /** A value that indicates the starting point for the next set of response records
in a subsequent request. If a value is returned in a response, you can retrieve
the next set of records by providing this returned marker value in the Marker 
parameter and retrying the command. If the Marker field is empty, all response
records have been retrieved for the request. **/
      Marker?: String;
      /** The list of ReservedNode objects. **/
      ReservedNodes?: ReservedNodeList;
    }
    export interface ResetClusterParameterGroupMessage {
      /** The name of the cluster parameter group to be reset. **/
      ParameterGroupName: String;
      /** If true, all parameters in the specified parameter group will be reset to their
default values. 

Default: true **/
      ResetAllParameters?: Boolean;
      /** An array of names of parameters to be reset. If ResetAllParameters option is
not used, then at least one parameter name must be supplied. 

Constraints: A maximum of 20 parameters can be reset in a single request. **/
      Parameters?: ParametersList;
    }
    export interface ResizeNotFoundFault {
    }
    export interface ResizeProgressMessage {
      /** The node type that the cluster will have after the resize operation is complete. **/
      TargetNodeType?: String;
      /** The number of nodes that the cluster will have after the resize operation is
complete. **/
      TargetNumberOfNodes?: IntegerOptional;
      /** The cluster type after the resize operation is complete.

Valid Values: multi-node | single-node **/
      TargetClusterType?: String;
      /** The status of the resize operation.

Valid Values: NONE | IN_PROGRESS | FAILED | SUCCEEDED **/
      Status?: String;
      /** The names of tables that have been completely imported .

Valid Values: List of table names. **/
      ImportTablesCompleted?: ImportTablesCompleted;
      /** The names of tables that are being currently imported.

Valid Values: List of table names. **/
      ImportTablesInProgress?: ImportTablesInProgress;
      /** The names of tables that have not been yet imported.

Valid Values: List of table names **/
      ImportTablesNotStarted?: ImportTablesNotStarted;
      /** The average rate of the resize operation over the last few minutes, measured in
megabytes per second. After the resize operation completes, this value shows the
average rate of the entire resize operation. **/
      AvgResizeRateInMegaBytesPerSecond?: DoubleOptional;
      /** The estimated total amount of data, in megabytes, on the cluster before the
resize operation began. **/
      TotalResizeDataInMegaBytes?: LongOptional;
      /** While the resize operation is in progress, this value shows the current amount
of data, in megabytes, that has been processed so far. When the resize operation
is complete, this value shows the total amount of data, in megabytes, on the
cluster, which may be more or less than TotalResizeDataInMegaBytes (the
estimated total amount of data before resize). **/
      ProgressInMegaBytes?: LongOptional;
      /** The amount of seconds that have elapsed since the resize operation began. After
the resize operation completes, this value shows the total actual time, in
seconds, for the resize operation. **/
      ElapsedTimeInSeconds?: LongOptional;
      /** The estimated time remaining, in seconds, until the resize operation is
complete. This value is calculated based on the average resize rate and the
estimated amount of data remaining to be processed. Once the resize operation is
complete, this value will be 0. **/
      EstimatedTimeToCompletionInSeconds?: LongOptional;
    }
    export interface ResourceNotFoundFault {
    }
    export interface RestoreFromClusterSnapshotMessage {
      /** The identifier of the cluster that will be created from restoring the snapshot. 

Constraints:

&amp;#42; Must contain from 1 to 63 alphanumeric characters or hyphens.
* Alphabetic characters must be lowercase.
* First character must be a letter.
* Cannot end with a hyphen or contain two consecutive hyphens.
* Must be unique for all clusters within an AWS account. **/
      ClusterIdentifier: String;
      /** The name of the snapshot from which to create the new cluster. This parameter
isn&#x27;t case sensitive. 

Example: my-snapshot-id **/
      SnapshotIdentifier: String;
      /** The name of the cluster the source snapshot was created from. This parameter is
required if your IAM user has a policy containing a snapshot resource element
that specifies anything other than &amp;#42; for the cluster name. **/
      SnapshotClusterIdentifier?: String;
      /** The port number on which the cluster accepts connections. 

Default: The same port as the original cluster.

Constraints: Must be between 1115 and 65535. **/
      Port?: IntegerOptional;
      /** The Amazon EC2 Availability Zone in which to restore the cluster. 

Default: A random, system-chosen Availability Zone.

Example: us-east-1a **/
      AvailabilityZone?: String;
      /** If true, major version upgrades can be applied during the maintenance window to
the Amazon Redshift engine that is running on the cluster. 

Default: true **/
      AllowVersionUpgrade?: BooleanOptional;
      /** The name of the subnet group where you want to cluster restored. 

A snapshot of cluster in VPC can be restored only in VPC. Therefore, you must
provide subnet group name where you want the cluster restored. **/
      ClusterSubnetGroupName?: String;
      /** If true, the cluster can be accessed from a public network. **/
      PubliclyAccessible?: BooleanOptional;
      /** The AWS customer account used to create or copy the snapshot. Required if you
are restoring a snapshot you do not own, optional if you own the snapshot. **/
      OwnerAccount?: String;
      /** Specifies the name of the HSM client certificate the Amazon Redshift cluster
uses to retrieve the data encryption keys stored in an HSM. **/
      HsmClientCertificateIdentifier?: String;
      /** Specifies the name of the HSM configuration that contains the information the
Amazon Redshift cluster can use to retrieve and store keys in an HSM. **/
      HsmConfigurationIdentifier?: String;
      /** The elastic IP (EIP) address for the cluster. **/
      ElasticIp?: String;
      /** The name of the parameter group to be associated with this cluster. 

Default: The default Amazon Redshift cluster parameter group. For information
about the default parameter group, go to Working with Amazon Redshift Parameter
Groups
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html]
.

Constraints: 

&amp;#42; Must be 1 to 255 alphanumeric characters or hyphens.
* First character must be a letter.
* Cannot end with a hyphen or contain two consecutive hyphens. **/
      ClusterParameterGroupName?: String;
      /** A list of security groups to be associated with this cluster. 

Default: The default cluster security group for Amazon Redshift. 

Cluster security groups only apply to clusters outside of VPCs. **/
      ClusterSecurityGroups?: ClusterSecurityGroupNameList;
      /** A list of Virtual Private Cloud (VPC) security groups to be associated with the
cluster. 

Default: The default VPC security group is associated with the cluster. 

VPC security groups only apply to clusters in VPCs. **/
      VpcSecurityGroupIds?: VpcSecurityGroupIdList;
      /** The weekly time range (in UTC) during which automated cluster maintenance can
occur. 

Format: ddd:hh24:mi-ddd:hh24:mi 

Default: The value selected for the cluster from which the snapshot was taken.
For more information about the time blocks for each region, see Maintenance
Windows
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-maintenance-windows] 
in Amazon Redshift Cluster Management Guide. 

Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun

Constraints: Minimum 30-minute window. **/
      PreferredMaintenanceWindow?: String;
      /** The number of days that automated snapshots are retained. If the value is 0,
automated snapshots are disabled. Even if automated snapshots are disabled, you
can still create manual snapshots when you want with CreateClusterSnapshot. 

Default: The value selected for the cluster from which the snapshot was taken. 

Constraints: Must be a value from 0 to 35. **/
      AutomatedSnapshotRetentionPeriod?: IntegerOptional;
      /** The AWS Key Management Service (KMS) key ID of the encryption key that you want
to use to encrypt data in the cluster that you restore from a shared snapshot. **/
      KmsKeyId?: String;
      /** The node type that the restored cluster will be provisioned with.

Default: The node type of the cluster from which the snapshot was taken. You
can modify this if you are using any DS node type. In that case, you can choose
to restore into another DS node type of the same size. For example, you can
restore ds1.8xlarge into ds2.8xlarge, or ds2.xlarge into ds1.xlarge. If you have
a DC instance type, you must restore into that same instance type and size. In
other words, you can only restore a dc1.large instance type into another
dc1.large instance type. For more information about node types, see About
Clusters and Nodes
[http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-about-clusters-and-nodes] 
in the Amazon Redshift Cluster Management Guide **/
      NodeType?: String;
      /** Reserved. **/
      AdditionalInfo?: String;
      /** A list of AWS Identity and Access Management (IAM) roles that can be used by the
cluster to access other AWS services. You must supply the IAM roles in their
Amazon Resource Name (ARN) format. You can supply up to 10 IAM roles in a single
request.

A cluster can have up to 10 IAM roles associated at any time. **/
      IamRoles?: IamRoleArnList;
    }
    export interface RestoreFromClusterSnapshotResult {
      Cluster?: Cluster;
    }
    export interface RestoreStatus {
      /** The status of the restore action. Returns starting, restoring, completed, or
failed. **/
      Status?: String;
      /** The number of megabytes per second being transferred from the backup storage.
Returns the average rate for a completed backup. **/
      CurrentRestoreRateInMegaBytesPerSecond?: Double;
      /** The size of the set of snapshot data used to restore the cluster. **/
      SnapshotSizeInMegaBytes?: Long;
      /** The number of megabytes that have been transferred from snapshot storage. **/
      ProgressInMegaBytes?: Long;
      /** The amount of time an in-progress restore has been running, or the amount of
time it took a completed restore to finish. **/
      ElapsedTimeInSeconds?: Long;
      /** The estimate of the time remaining before the restore will complete. Returns 0
for a completed restore. **/
      EstimatedTimeToCompletionInSeconds?: Long;
    }
    export interface RestoreTableFromClusterSnapshotMessage {
      /** The identifier of the Amazon Redshift cluster to restore the table to. **/
      ClusterIdentifier: String;
      /** The identifier of the snapshot to restore the table from. This snapshot must
have been created from the Amazon Redshift cluster specified by the 
ClusterIdentifier parameter. **/
      SnapshotIdentifier: String;
      /** The name of the source database that contains the table to restore from. **/
      SourceDatabaseName: String;
      /** The name of the source schema that contains the table to restore from. If you do
not specify a SourceSchemaName value, the default is public. **/
      SourceSchemaName?: String;
      /** The name of the source table to restore from. **/
      SourceTableName: String;
      /** The name of the database to restore the table to. **/
      TargetDatabaseName?: String;
      /** The name of the schema to restore the table to. **/
      TargetSchemaName?: String;
      /** The name of the table to create as a result of the current request. **/
      NewTableName: String;
    }
    export interface RestoreTableFromClusterSnapshotResult {
      TableRestoreStatus?: TableRestoreStatus;
    }
    export interface RevokeClusterSecurityGroupIngressMessage {
      /** The name of the security Group from which to revoke the ingress rule. **/
      ClusterSecurityGroupName: String;
      /** The IP range for which to revoke access. This range must be a valid Classless
Inter-Domain Routing (CIDR) block of IP addresses. If CIDRIP is specified, 
EC2SecurityGroupName and EC2SecurityGroupOwnerId cannot be provided. **/
      CIDRIP?: String;
      /** The name of the EC2 Security Group whose access is to be revoked. If 
EC2SecurityGroupName is specified, EC2SecurityGroupOwnerId must also be provided
and CIDRIP cannot be provided. **/
      EC2SecurityGroupName?: String;
      /** The AWS account number of the owner of the security group specified in the 
EC2SecurityGroupName parameter. The AWS access key ID is not an acceptable
value. If EC2SecurityGroupOwnerId is specified, EC2SecurityGroupName must also
be provided. and CIDRIP cannot be provided. 

Example: 111122223333 **/
      EC2SecurityGroupOwnerId?: String;
    }
    export interface RevokeClusterSecurityGroupIngressResult {
      ClusterSecurityGroup?: ClusterSecurityGroup;
    }
    export interface RevokeSnapshotAccessMessage {
      /** The identifier of the snapshot that the account can no longer access. **/
      SnapshotIdentifier: String;
      /** The identifier of the cluster the snapshot was created from. This parameter is
required if your IAM user has a policy containing a snapshot resource element
that specifies anything other than &amp;#42; for the cluster name. **/
      SnapshotClusterIdentifier?: String;
      /** The identifier of the AWS customer account that can no longer restore the
specified snapshot. **/
      AccountWithRestoreAccess: String;
    }
    export interface RevokeSnapshotAccessResult {
      Snapshot?: Snapshot;
    }
    export interface RotateEncryptionKeyMessage {
      /** The unique identifier of the cluster that you want to rotate the encryption
keys for. 

Constraints: Must be the name of valid cluster that has encryption enabled. **/
      ClusterIdentifier: String;
    }
    export interface RotateEncryptionKeyResult {
      Cluster?: Cluster;
    }
    export interface SNSInvalidTopicFault {
    }
    export interface SNSNoAuthorizationFault {
    }
    export interface SNSTopicArnNotFoundFault {
    }
    export interface Snapshot {
      /** The snapshot identifier that is provided in the request. **/
      SnapshotIdentifier?: String;
      /** The identifier of the cluster for which the snapshot was taken. **/
      ClusterIdentifier?: String;
      /** The time (UTC) when Amazon Redshift began the snapshot. A snapshot contains a
copy of the cluster data as of this exact time. **/
      SnapshotCreateTime?: TStamp;
      /** The snapshot status. The value of the status depends on the API operation used.  &amp;#42; 
 CreateClusterSnapshot and CopyClusterSnapshot returns status as &quot;creating&quot;. 
* 
 DescribeClusterSnapshots returns status as &quot;creating&quot;, &quot;available&quot;, &quot;final
 snapshot&quot;, or &quot;failed&quot;.
* 
 DeleteClusterSnapshot returns status as &quot;deleted&quot;. **/
      Status?: String;
      /** The port that the cluster is listening on. **/
      Port?: Integer;
      /** The Availability Zone in which the cluster was created. **/
      AvailabilityZone?: String;
      /** The time (UTC) when the cluster was originally created. **/
      ClusterCreateTime?: TStamp;
      /** The master user name for the cluster. **/
      MasterUsername?: String;
      /** The version ID of the Amazon Redshift engine that is running on the cluster. **/
      ClusterVersion?: String;
      /** The snapshot type. Snapshots created using CreateClusterSnapshot and 
CopyClusterSnapshot will be of type &quot;manual&quot;. **/
      SnapshotType?: String;
      /** The node type of the nodes in the cluster. **/
      NodeType?: String;
      /** The number of nodes in the cluster. **/
      NumberOfNodes?: Integer;
      /** The name of the database that was created when the cluster was created. **/
      DBName?: String;
      /** The VPC identifier of the cluster if the snapshot is from a cluster in a VPC.
Otherwise, this field is not in the output. **/
      VpcId?: String;
      /** If true, the data in the snapshot is encrypted at rest. **/
      Encrypted?: Boolean;
      /** The AWS Key Management Service (KMS) key ID of the encryption key that was used
to encrypt data in the cluster from which the snapshot was taken. **/
      KmsKeyId?: String;
      /** A boolean that indicates whether the snapshot data is encrypted using the HSM
keys of the source cluster. true indicates that the data is encrypted using HSM
keys. **/
      EncryptedWithHSM?: Boolean;
      /** A list of the AWS customer accounts authorized to restore the snapshot. Returns 
null if no accounts are authorized. Visible only to the snapshot owner. **/
      AccountsWithRestoreAccess?: AccountsWithRestoreAccessList;
      /** For manual snapshots, the AWS customer account used to create or copy the
snapshot. For automatic snapshots, the owner of the cluster. The owner can
perform all snapshot actions, such as sharing a manual snapshot. **/
      OwnerAccount?: String;
      /** The size of the complete set of backup data that would be used to restore the
cluster. **/
      TotalBackupSizeInMegaBytes?: Double;
      /** The size of the incremental backup. **/
      ActualIncrementalBackupSizeInMegaBytes?: Double;
      /** The number of megabytes that have been transferred to the snapshot backup. **/
      BackupProgressInMegaBytes?: Double;
      /** The number of megabytes per second being transferred to the snapshot backup.
Returns 0 for a completed backup. **/
      CurrentBackupRateInMegaBytesPerSecond?: Double;
      /** The estimate of the time remaining before the snapshot backup will complete.
Returns 0 for a completed backup. **/
      EstimatedSecondsToCompletion?: Long;
      /** The amount of time an in-progress snapshot backup has been running, or the
amount of time it took a completed backup to finish. **/
      ElapsedTimeInSeconds?: Long;
      /** The source region from which the snapshot was copied. **/
      SourceRegion?: String;
      /** The list of tags for the cluster snapshot. **/
      Tags?: TagList;
      /** The list of node types that this cluster snapshot is able to restore into. **/
      RestorableNodeTypes?: RestorableNodeTypeList;
    }
    export interface SnapshotCopyAlreadyDisabledFault {
    }
    export interface SnapshotCopyAlreadyEnabledFault {
    }
    export interface SnapshotCopyDisabledFault {
    }
    export interface SnapshotCopyGrant {
      /** The name of the snapshot copy grant. **/
      SnapshotCopyGrantName?: String;
      /** The unique identifier of the customer master key (CMK) in AWS KMS to which
Amazon Redshift is granted permission. **/
      KmsKeyId?: String;
      /** A list of tag instances. **/
      Tags?: TagList;
    }
    export interface SnapshotCopyGrantAlreadyExistsFault {
    }
    export interface SnapshotCopyGrantMessage {
      /** An optional parameter that specifies the starting point to return a set of
response records. When the results of a DescribeSnapshotCopyGrant request exceed
the value specified in MaxRecords, AWS returns a value in the Marker field of
the response. You can retrieve the next set of response records by providing the
returned marker value in the Marker parameter and retrying the request. 

Constraints: You can specify either the SnapshotCopyGrantName parameter or the 
Marker parameter, but not both. **/
      Marker?: String;
      /** The list of SnapshotCopyGrant objects. **/
      SnapshotCopyGrants?: SnapshotCopyGrantList;
    }
    export interface SnapshotCopyGrantNotFoundFault {
    }
    export interface SnapshotCopyGrantQuotaExceededFault {
    }
    export interface SnapshotMessage {
      /** A value that indicates the starting point for the next set of response records
in a subsequent request. If a value is returned in a response, you can retrieve
the next set of records by providing this returned marker value in the Marker 
parameter and retrying the command. If the Marker field is empty, all response
records have been retrieved for the request. **/
      Marker?: String;
      /** A list of Snapshot instances. **/
      Snapshots?: SnapshotList;
    }
    export interface SourceNotFoundFault {
    }
    export interface Subnet {
      /** The identifier of the subnet. **/
      SubnetIdentifier?: String;
      SubnetAvailabilityZone?: AvailabilityZone;
      /** The status of the subnet. **/
      SubnetStatus?: String;
    }
    export interface SubnetAlreadyInUse {
    }
    export interface SubscriptionAlreadyExistFault {
    }
    export interface SubscriptionCategoryNotFoundFault {
    }
    export interface SubscriptionEventIdNotFoundFault {
    }
    export interface SubscriptionNotFoundFault {
    }
    export interface SubscriptionSeverityNotFoundFault {
    }
    export interface TableRestoreNotFoundFault {
    }
    export interface TableRestoreStatus {
      /** The unique identifier for the table restore request. **/
      TableRestoreRequestId?: String;
      /** A value that describes the current state of the table restore request.

Valid Values: SUCCEEDED, FAILED, CANCELED, PENDING, IN_PROGRESS **/
      Status?: TableRestoreStatusType;
      /** A description of the status of the table restore request. Status values include 
SUCCEEDED, FAILED, CANCELED, PENDING, IN_PROGRESS. **/
      Message?: String;
      /** The time that the table restore request was made, in Universal Coordinated Time
(UTC). **/
      RequestTime?: TStamp;
      /** The amount of data restored to the new table so far, in megabytes (MB). **/
      ProgressInMegaBytes?: LongOptional;
      /** The total amount of data to restore to the new table, in megabytes (MB). **/
      TotalDataInMegaBytes?: LongOptional;
      /** The identifier of the Amazon Redshift cluster that the table is being restored
to. **/
      ClusterIdentifier?: String;
      /** The identifier of the snapshot that the table is being restored from. **/
      SnapshotIdentifier?: String;
      /** The name of the source database that contains the table being restored. **/
      SourceDatabaseName?: String;
      /** The name of the source schema that contains the table being restored. **/
      SourceSchemaName?: String;
      /** The name of the source table being restored. **/
      SourceTableName?: String;
      /** The name of the database to restore the table to. **/
      TargetDatabaseName?: String;
      /** The name of the schema to restore the table to. **/
      TargetSchemaName?: String;
      /** The name of the table to create as a result of the table restore request. **/
      NewTableName?: String;
    }
    export interface TableRestoreStatusMessage {
      /** A list of status details for one or more table restore requests. **/
      TableRestoreStatusDetails?: TableRestoreStatusList;
      /** A pagination token that can be used in a subsequent DescribeTableRestoreStatus 
request. **/
      Marker?: String;
    }
    export interface Tag {
      /** The key, or name, for the resource tag. **/
      Key?: String;
      /** The value for the resource tag. **/
      Value?: String;
    }
    export interface TagLimitExceededFault {
    }
    export interface TaggedResource {
      /** The tag for the resource. **/
      Tag?: Tag;
      /** The Amazon Resource Name (ARN) with which the tag is associated. For example, 
arn:aws:redshift:us-east-1:123456789:cluster:t1. **/
      ResourceName?: String;
      /** The type of resource with which the tag is associated. Valid resource types
are:  &amp;#42; Cluster
* CIDR/IP
* EC2 security group
* Snapshot
* Cluster security group
* Subnet group
* HSM connection
* HSM certificate
* Parameter group



For more information about Amazon Redshift resource types and constructing
ARNs, go to Constructing an Amazon Redshift Amazon Resource Name (ARN)
[http://docs.aws.amazon.com/redshift/latest/mgmt/constructing-redshift-arn.html] 
in the Amazon Redshift Cluster Management Guide. **/
      ResourceType?: String;
    }
    export interface TaggedResourceListMessage {
      /** A list of tags with their associated resources. **/
      TaggedResources?: TaggedResourceList;
      /** A value that indicates the starting point for the next set of response records
in a subsequent request. If a value is returned in a response, you can retrieve
the next set of records by providing this returned marker value in the Marker 
parameter and retrying the command. If the Marker field is empty, all response
records have been retrieved for the request. **/
      Marker?: String;
    }
    export interface UnauthorizedOperation {
    }
    export interface UnknownSnapshotCopyRegionFault {
    }
    export interface UnsupportedOperationFault {
    }
    export interface UnsupportedOptionFault {
    }
    export interface VpcSecurityGroupMembership {
      /** The identifier of the VPC security group. **/
      VpcSecurityGroupId?: String;
      /** The status of the VPC security group. **/
      Status?: String;
    }
  }
}
