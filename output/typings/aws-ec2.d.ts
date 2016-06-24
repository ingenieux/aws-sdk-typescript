// Type definitions for aws-sdk - Amazon Elastic Compute Cloud
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2016-04-01
   * endpointPrefix: ec2
   * serviceAbbreviation: Amazon EC2
   * signatureVersion: v4
   * protocol: ec2
   *
   * Amazon Elastic Compute CloudAmazon Elastic Compute Cloud (Amazon EC2) provides
resizable computing capacity in the Amazon Web Services (AWS) cloud. Using
Amazon EC2 eliminates your need to invest in hardware up front, so you can
develop and deploy applications faster.
   *
   */
  export class EC2 extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Accept a VPC peering connection request. To accept a request, the VPC peering
connection must be in the pending-acceptance state, and you must be the owner of
the peer VPC. Use the DescribeVpcPeeringConnections request to view your
outstanding VPC peering connection requests.
     *
     */
    acceptVpcPeeringConnection(params: EC2.AcceptVpcPeeringConnectionRequest, callback?: (err: any, data: EC2.AcceptVpcPeeringConnectionResult|any) => void): Request<EC2.AcceptVpcPeeringConnectionResult|any,any>;
    /**
     * Acquires an Elastic IP address.

An Elastic IP address is for use either in the EC2-Classic platform or in a VPC.
For more information, see Elastic IP Addresses
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html] 
in the Amazon Elastic Compute Cloud User Guide .
     *
     */
    allocateAddress(params: EC2.AllocateAddressRequest, callback?: (err: any, data: EC2.AllocateAddressResult|any) => void): Request<EC2.AllocateAddressResult|any,any>;
    /**
     * Allocates a Dedicated host to your account. At minimum you need to specify the
instance size type, Availability Zone, and quantity of hosts you want to
allocate.
     *
     */
    allocateHosts(params: EC2.AllocateHostsRequest, callback?: (err: any, data: EC2.AllocateHostsResult|any) => void): Request<EC2.AllocateHostsResult|any,any>;
    /**
     * Assigns one or more secondary private IP addresses to the specified network
interface. You can specify one or more specific secondary IP addresses, or you
can specify the number of secondary IP addresses to be automatically assigned
within the subnet&#x27;s CIDR block range. The number of secondary IP addresses that
you can assign to an instance varies by instance type. For information about
instance types, see Instance Types
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html] in the 
Amazon Elastic Compute Cloud User Guide . For more information about Elastic IP
addresses, see Elastic IP Addresses
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html] 
in the Amazon Elastic Compute Cloud User Guide .

AssignPrivateIpAddresses is available only in EC2-VPC.
     *
     */
    assignPrivateIpAddresses(params: EC2.AssignPrivateIpAddressesRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Associates an Elastic IP address with an instance or a network interface.

An Elastic IP address is for use in either the EC2-Classic platform or in a VPC.
For more information, see Elastic IP Addresses
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html] 
in the Amazon Elastic Compute Cloud User Guide .

[EC2-Classic, VPC in an EC2-VPC-only account] If the Elastic IP address is
already associated with a different instance, it is disassociated from that
instance and associated with the specified instance.

[VPC in an EC2-Classic account] If you don&#x27;t specify a private IP address, the
Elastic IP address is associated with the primary IP address. If the Elastic IP
address is already associated with a different instance or a network interface,
you get an error unless you allow reassociation.

This is an idempotent operation. If you perform the operation more than once,
Amazon EC2 doesn&#x27;t return an error.
     *
     */
    associateAddress(params: EC2.AssociateAddressRequest, callback?: (err: any, data: EC2.AssociateAddressResult|any) => void): Request<EC2.AssociateAddressResult|any,any>;
    /**
     * Associates a set of DHCP options (that you&#x27;ve previously created) with the
specified VPC, or associates no DHCP options with the VPC.

After you associate the options with the VPC, any existing instances and all new
instances that you launch in that VPC use the options. You don&#x27;t need to restart
or relaunch the instances. They automatically pick up the changes within a few
hours, depending on how frequently the instance renews its DHCP lease. You can
explicitly renew the lease using the operating system on the instance.

For more information, see DHCP Options Sets
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_DHCP_Options.html] in
the Amazon Virtual Private Cloud User Guide .
     *
     */
    associateDhcpOptions(params: EC2.AssociateDhcpOptionsRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Associates a subnet with a route table. The subnet and route table must be in
the same VPC. This association causes traffic originating from the subnet to be
routed according to the routes in the route table. The action returns an
association ID, which you need in order to disassociate the route table from the
subnet later. A route table can be associated with multiple subnets.

For more information about route tables, see Route Tables
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Route_Tables.html] in
the Amazon Virtual Private Cloud User Guide .
     *
     */
    associateRouteTable(params: EC2.AssociateRouteTableRequest, callback?: (err: any, data: EC2.AssociateRouteTableResult|any) => void): Request<EC2.AssociateRouteTableResult|any,any>;
    /**
     * Links an EC2-Classic instance to a ClassicLink-enabled VPC through one or more
of the VPC&#x27;s security groups. You cannot link an EC2-Classic instance to more
than one VPC at a time. You can only link an instance that&#x27;s in the running 
state. An instance is automatically unlinked from a VPC when it&#x27;s stopped - you
can link it to the VPC again when you restart it.

After you&#x27;ve linked an instance, you cannot change the VPC security groups that
are associated with it. To change the security groups, you must first unlink the
instance, and then link it again.

Linking your instance to a VPC is sometimes referred to as attaching your
instance.
     *
     */
    attachClassicLinkVpc(params: EC2.AttachClassicLinkVpcRequest, callback?: (err: any, data: EC2.AttachClassicLinkVpcResult|any) => void): Request<EC2.AttachClassicLinkVpcResult|any,any>;
    /**
     * Attaches an Internet gateway to a VPC, enabling connectivity between the
Internet and the VPC. For more information about your VPC and Internet gateway,
see the Amazon Virtual Private Cloud User Guide
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/] .
     *
     */
    attachInternetGateway(params: EC2.AttachInternetGatewayRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Attaches a network interface to an instance.
     *
     */
    attachNetworkInterface(params: EC2.AttachNetworkInterfaceRequest, callback?: (err: any, data: EC2.AttachNetworkInterfaceResult|any) => void): Request<EC2.AttachNetworkInterfaceResult|any,any>;
    /**
     * Attaches an EBS volume to a running or stopped instance and exposes it to the
instance with the specified device name.

Encrypted EBS volumes may only be attached to instances that support Amazon EBS
encryption. For more information, see Amazon EBS Encryption
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html] in the 
Amazon Elastic Compute Cloud User Guide .

For a list of supported device names, see Attaching an EBS Volume to an Instance
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-attaching-volume.html] .
Any device names that aren&#x27;t reserved for instance store volumes can be used for
EBS volumes. For more information, see Amazon EC2 Instance Store
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html] in the 
Amazon Elastic Compute Cloud User Guide .

If a volume has an AWS Marketplace product code:

 &amp;#42; The volume can be attached only to a stopped instance.
   
   
 * AWS Marketplace product codes are copied from the volume to the instance.
   
   
 * You must be subscribed to the product.
   
   
 * The instance type and operating system of the instance must support the
   product. For example, you can&#x27;t detach a volume from a Windows instance and
   attach it to a Linux instance.
   
   

For an overview of the AWS Marketplace, see Introducing AWS Marketplace
[https://aws.amazon.com/marketplace/help/200900000] .

For more information about EBS volumes, see Attaching Amazon EBS Volumes
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-attaching-volume.html] 
in the Amazon Elastic Compute Cloud User Guide .
     *
     */
    attachVolume(params: EC2.AttachVolumeRequest, callback?: (err: any, data: EC2.VolumeAttachment|any) => void): Request<EC2.VolumeAttachment|any,any>;
    /**
     * Attaches a virtual private gateway to a VPC. For more information, see Adding a
Hardware Virtual Private Gateway to Your VPC
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_VPN.html] in the 
Amazon Virtual Private Cloud User Guide .
     *
     */
    attachVpnGateway(params: EC2.AttachVpnGatewayRequest, callback?: (err: any, data: EC2.AttachVpnGatewayResult|any) => void): Request<EC2.AttachVpnGatewayResult|any,any>;
    /**
     * [EC2-VPC only] Adds one or more egress rules to a security group for use with a
VPC. Specifically, this action permits instances to send traffic to one or more
destination CIDR IP address ranges, or to one or more destination security
groups for the same VPC. This action doesn&#x27;t apply to security groups for use in
EC2-Classic. For more information, see Security Groups for Your VPC
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html] 
in the Amazon Virtual Private Cloud User Guide .

You can have up to 50 rules per security group (covering both ingress and egress
rules).

Each rule consists of the protocol (for example, TCP), plus either a CIDR range
or a source group. For the TCP and UDP protocols, you must also specify the
destination port or port range. For the ICMP protocol, you must also specify the
ICMP type and code. You can use -1 for the type or code to mean all types or all
codes.

Rule changes are propagated to affected instances as quickly as possible.
However, a small delay might occur.
     *
     */
    authorizeSecurityGroupEgress(params: EC2.AuthorizeSecurityGroupEgressRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Adds one or more ingress rules to a security group.

EC2-Classic: You can have up to 100 rules per group.

EC2-VPC: You can have up to 50 rules per group (covering both ingress and egress
rules).

Rule changes are propagated to instances within the security group as quickly as
possible. However, a small delay might occur.

[EC2-Classic] This action gives one or more CIDR IP address ranges permission to
access a security group in your account, or gives one or more security groups
(called the source groups ) permission to access a security group for your
account. A source group can be for your own AWS account, or another.

[EC2-VPC] This action gives one or more CIDR IP address ranges permission to
access a security group in your VPC, or gives one or more other security groups
(called the source groups ) permission to access a security group for your VPC.
The security groups must all be for the same VPC.
     *
     */
    authorizeSecurityGroupIngress(params: EC2.AuthorizeSecurityGroupIngressRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Bundles an Amazon instance store-backed Windows instance.

During bundling, only the root device volume (C:\) is bundled. Data on other
instance store volumes is not preserved.

This action is not applicable for Linux/Unix instances or Windows instances that
are backed by Amazon EBS.

For more information, see Creating an Instance Store-Backed Windows AMI
[http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/Creating_InstanceStoreBacked_WinAMI.html] 
.
     *
     */
    bundleInstance(params: EC2.BundleInstanceRequest, callback?: (err: any, data: EC2.BundleInstanceResult|any) => void): Request<EC2.BundleInstanceResult|any,any>;
    /**
     * Cancels a bundling operation for an instance store-backed Windows instance.
     *
     */
    cancelBundleTask(params: EC2.CancelBundleTaskRequest, callback?: (err: any, data: EC2.CancelBundleTaskResult|any) => void): Request<EC2.CancelBundleTaskResult|any,any>;
    /**
     * Cancels an active conversion task. The task can be the import of an instance or
volume. The action removes all artifacts of the conversion, including a
partially uploaded volume or instance. If the conversion is complete or is in
the process of transferring the final disk image, the command fails and returns
an exception.

For more information, see Using the Command Line Tools to Import Your Virtual
Machine to Amazon EC2
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UploadingYourInstancesandVolumes.html] 
in the Amazon Elastic Compute Cloud User Guide .
     *
     */
    cancelConversionTask(params: EC2.CancelConversionRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Cancels an active export task. The request removes all artifacts of the export,
including any partially-created Amazon S3 objects. If the export task is
complete or is in the process of transferring the final disk image, the command
fails and returns an error.
     *
     */
    cancelExportTask(params: EC2.CancelExportTaskRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Cancels an in-process import virtual machine or import snapshot task.
     *
     */
    cancelImportTask(params: EC2.CancelImportTaskRequest, callback?: (err: any, data: EC2.CancelImportTaskResult|any) => void): Request<EC2.CancelImportTaskResult|any,any>;
    /**
     * Cancels the specified Reserved Instance listing in the Reserved Instance
Marketplace.

For more information, see Reserved Instance Marketplace
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html] in
the Amazon Elastic Compute Cloud User Guide .
     *
     */
    cancelReservedInstancesListing(params: EC2.CancelReservedInstancesListingRequest, callback?: (err: any, data: EC2.CancelReservedInstancesListingResult|any) => void): Request<EC2.CancelReservedInstancesListingResult|any,any>;
    /**
     * Cancels the specified Spot fleet requests.

After you cancel a Spot fleet request, the Spot fleet launches no new Spot
instances. You must specify whether the Spot fleet should also terminate its
Spot instances. If you terminate the instances, the Spot fleet request enters
the cancelled_terminating state. Otherwise, the Spot fleet request enters the 
cancelled_running state and the instances continue to run until they are
interrupted or you terminate them manually.
     *
     */
    cancelSpotFleetRequests(params: EC2.CancelSpotFleetRequestsRequest, callback?: (err: any, data: EC2.CancelSpotFleetRequestsResponse|any) => void): Request<EC2.CancelSpotFleetRequestsResponse|any,any>;
    /**
     * Cancels one or more Spot instance requests. Spot instances are instances that
Amazon EC2 starts on your behalf when the bid price that you specify exceeds the
current Spot price. Amazon EC2 periodically sets the Spot price based on
available Spot instance capacity and current Spot instance requests. For more
information, see Spot Instance Requests
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-requests.html] in the 
Amazon Elastic Compute Cloud User Guide .

Canceling a Spot instance request does not terminate running Spot instances
associated with the request.
     *
     */
    cancelSpotInstanceRequests(params: EC2.CancelSpotInstanceRequestsRequest, callback?: (err: any, data: EC2.CancelSpotInstanceRequestsResult|any) => void): Request<EC2.CancelSpotInstanceRequestsResult|any,any>;
    /**
     * Determines whether a product code is associated with an instance. This action
can only be used by the owner of the product code. It is useful when a product
code owner needs to verify whether another user&#x27;s instance is eligible for
support.
     *
     */
    confirmProductInstance(params: EC2.ConfirmProductInstanceRequest, callback?: (err: any, data: EC2.ConfirmProductInstanceResult|any) => void): Request<EC2.ConfirmProductInstanceResult|any,any>;
    /**
     * Initiates the copy of an AMI from the specified source region to the current
region. You specify the destination region by using its endpoint when making the
request.

For more information, see Copying AMIs
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/CopyingAMIs.html] in the 
Amazon Elastic Compute Cloud User Guide .
     *
     */
    copyImage(params: EC2.CopyImageRequest, callback?: (err: any, data: EC2.CopyImageResult|any) => void): Request<EC2.CopyImageResult|any,any>;
    /**
     * Copies a point-in-time snapshot of an EBS volume and stores it in Amazon S3. You
can copy the snapshot within the same region or from one region to another. You
can use the snapshot to create EBS volumes or Amazon Machine Images (AMIs). The
snapshot is copied to the regional endpoint that you send the HTTP request to.

Copies of encrypted EBS snapshots remain encrypted. Copies of unencrypted
snapshots remain unencrypted, unless the Encrypted flag is specified during the
snapshot copy operation. By default, encrypted snapshot copies use the default
AWS Key Management Service (AWS KMS) customer master key (CMK); however, you can
specify a non-default CMK with the KmsKeyId parameter.

To copy an encrypted snapshot that has been shared from another account, you
must have permissions for the CMK used to encrypt the snapshot.

For more information, see Copying an Amazon EBS Snapshot
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-copy-snapshot.html] in
the Amazon Elastic Compute Cloud User Guide .
     *
     */
    copySnapshot(params: EC2.CopySnapshotRequest, callback?: (err: any, data: EC2.CopySnapshotResult|any) => void): Request<EC2.CopySnapshotResult|any,any>;
    /**
     * Provides information to AWS about your VPN customer gateway device. The customer
gateway is the appliance at your end of the VPN connection. (The device on the
AWS side of the VPN connection is the virtual private gateway.) You must provide
the Internet-routable IP address of the customer gateway&#x27;s external interface.
The IP address must be static and may be behind a device performing network
address translation (NAT).

For devices that use Border Gateway Protocol (BGP), you can also provide the
device&#x27;s BGP Autonomous System Number (ASN). You can use an existing ASN
assigned to your network. If you don&#x27;t have an ASN already, you can use a
private ASN (in the 64512 - 65534 range).

Amazon EC2 supports all 2-byte ASN numbers in the range of 1 - 65534, with the
exception of 7224, which is reserved in the us-east-1 region, and 9059, which is
reserved in the eu-west-1 region.

For more information about VPN customer gateways, see Adding a Hardware Virtual
Private Gateway to Your VPC
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_VPN.html] in the 
Amazon Virtual Private Cloud User Guide .

You cannot create more than one customer gateway with the same VPN type, IP
address, and BGP ASN parameter values. If you run an identical request more than
one time, the first request creates the customer gateway, and subsequent
requests return information about the existing customer gateway. The subsequent
requests do not create new customer gateway resources.
     *
     */
    createCustomerGateway(params: EC2.CreateCustomerGatewayRequest, callback?: (err: any, data: EC2.CreateCustomerGatewayResult|any) => void): Request<EC2.CreateCustomerGatewayResult|any,any>;
    /**
     * Creates a set of DHCP options for your VPC. After creating the set, you must
associate it with the VPC, causing all existing and new instances that you
launch in the VPC to use this set of DHCP options. The following are the
individual DHCP options you can specify. For more information about the options,
see RFC 2132 [http://www.ietf.org/rfc/rfc2132.txt] .

 &amp;#42; domain-name-servers - The IP addresses of up to four domain name servers, or
   AmazonProvidedDNS. The default DHCP option set specifies AmazonProvidedDNS.
   If specifying more than one domain name server, specify the IP addresses in a
   single parameter, separated by commas.
   
   
 * domain-name - If you&#x27;re using AmazonProvidedDNS in &quot;us-east-1&quot;, specify
   &quot;ec2.internal&quot;. If you&#x27;re using AmazonProvidedDNS in another region, specify
   &quot;region.compute.internal&quot; (for example, &quot;ap-northeast-1.compute.internal&quot;).
   Otherwise, specify a domain name (for example, &quot;MyCompany.com&quot;). Important :
   Some Linux operating systems accept multiple domain names separated by
   spaces. However, Windows and other Linux operating systems treat the value as
   a single domain, which results in unexpected behavior. If your DHCP options
   set is associated with a VPC that has instances with multiple operating
   systems, specify only one domain name.
   
   
 * ntp-servers - The IP addresses of up to four Network Time Protocol (NTP)
   servers.
   
   
 * netbios-name-servers - The IP addresses of up to four NetBIOS name servers.
   
   
 * netbios-node-type - The NetBIOS node type (1, 2, 4, or 8). We recommend that
   you specify 2 (broadcast and multicast are not currently supported). For more
   information about these node types, see RFC 2132
   [http://www.ietf.org/rfc/rfc2132.txt] .
   
   

Your VPC automatically starts out with a set of DHCP options that includes only
a DNS server that we provide (AmazonProvidedDNS). If you create a set of
options, and if your VPC has an Internet gateway, make sure to set the 
domain-name-servers option either to AmazonProvidedDNS or to a domain name
server of your choice. For more information about DHCP options, see DHCP Options
Sets
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_DHCP_Options.html] in
the Amazon Virtual Private Cloud User Guide .
     *
     */
    createDhcpOptions(params: EC2.CreateDhcpOptionsRequest, callback?: (err: any, data: EC2.CreateDhcpOptionsResult|any) => void): Request<EC2.CreateDhcpOptionsResult|any,any>;
    /**
     * Creates one or more flow logs to capture IP traffic for a specific network
interface, subnet, or VPC. Flow logs are delivered to a specified log group in
Amazon CloudWatch Logs. If you specify a VPC or subnet in the request, a log
stream is created in CloudWatch Logs for each network interface in the subnet or
VPC. Log streams can include information about accepted and rejected traffic to
a network interface. You can view the data in your log streams using Amazon
CloudWatch Logs.

In your request, you must also specify an IAM role that has permission to
publish logs to CloudWatch Logs.
     *
     */
    createFlowLogs(params: EC2.CreateFlowLogsRequest, callback?: (err: any, data: EC2.CreateFlowLogsResult|any) => void): Request<EC2.CreateFlowLogsResult|any,any>;
    /**
     * Creates an Amazon EBS-backed AMI from an Amazon EBS-backed instance that is
either running or stopped.

If you customized your instance with instance store volumes or EBS volumes in
addition to the root device volume, the new AMI contains block device mapping
information for those volumes. When you launch an instance from this new AMI,
the instance automatically launches with those additional volumes.

For more information, see Creating Amazon EBS-Backed Linux AMIs
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html] in
the Amazon Elastic Compute Cloud User Guide .
     *
     */
    createImage(params: EC2.CreateImageRequest, callback?: (err: any, data: EC2.CreateImageResult|any) => void): Request<EC2.CreateImageResult|any,any>;
    /**
     * Exports a running or stopped instance to an S3 bucket.

For information about the supported operating systems, image formats, and known
limitations for the types of instances you can export, see Exporting EC2
Instances
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ExportingEC2Instances.html] 
in the Amazon Elastic Compute Cloud User Guide .
     *
     */
    createInstanceExportTask(params: EC2.CreateInstanceExportTaskRequest, callback?: (err: any, data: EC2.CreateInstanceExportTaskResult|any) => void): Request<EC2.CreateInstanceExportTaskResult|any,any>;
    /**
     * Creates an Internet gateway for use with a VPC. After creating the Internet
gateway, you attach it to a VPC using AttachInternetGateway .

For more information about your VPC and Internet gateway, see the Amazon Virtual
Private Cloud User Guide
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/] .
     *
     */
    createInternetGateway(params: EC2.CreateInternetGatewayRequest, callback?: (err: any, data: EC2.CreateInternetGatewayResult|any) => void): Request<EC2.CreateInternetGatewayResult|any,any>;
    /**
     * Creates a 2048-bit RSA key pair with the specified name. Amazon EC2 stores the
public key and displays the private key for you to save to a file. The private
key is returned as an unencrypted PEM encoded PKCS#8 private key. If a key with
the specified name already exists, Amazon EC2 returns an error.

You can have up to five thousand key pairs per region.

The key pair returned to you is available only in the region in which you create
it. To create a key pair that is available in all regions, use ImportKeyPair .

For more information about key pairs, see Key Pairs
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html] in the 
Amazon Elastic Compute Cloud User Guide .
     *
     */
    createKeyPair(params: EC2.CreateKeyPairRequest, callback?: (err: any, data: EC2.KeyPair|any) => void): Request<EC2.KeyPair|any,any>;
    /**
     * Creates a NAT gateway in the specified subnet. A NAT gateway can be used to
enable instances in a private subnet to connect to the Internet. This action
creates a network interface in the specified subnet with a private IP address
from the IP address range of the subnet. For more information, see NAT Gateways
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpc-nat-gateway.html] in
the Amazon Virtual Private Cloud User Guide .
     *
     */
    createNatGateway(params: EC2.CreateNatGatewayRequest, callback?: (err: any, data: EC2.CreateNatGatewayResult|any) => void): Request<EC2.CreateNatGatewayResult|any,any>;
    /**
     * Creates a network ACL in a VPC. Network ACLs provide an optional layer of
security (in addition to security groups) for the instances in your VPC.

For more information about network ACLs, see Network ACLs
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_ACLs.html] in the 
Amazon Virtual Private Cloud User Guide .
     *
     */
    createNetworkAcl(params: EC2.CreateNetworkAclRequest, callback?: (err: any, data: EC2.CreateNetworkAclResult|any) => void): Request<EC2.CreateNetworkAclResult|any,any>;
    /**
     * Creates an entry (a rule) in a network ACL with the specified rule number. Each
network ACL has a set of numbered ingress rules and a separate set of numbered
egress rules. When determining whether a packet should be allowed in or out of a
subnet associated with the ACL, we process the entries in the ACL according to
the rule numbers, in ascending order. Each network ACL has a set of ingress
rules and a separate set of egress rules.

We recommend that you leave room between the rule numbers (for example, 100,
110, 120, ...), and not number them one right after the other (for example, 101,
102, 103, ...). This makes it easier to add a rule between existing ones without
having to renumber the rules.

After you add an entry, you can&#x27;t modify it; you must either replace it, or
create an entry and delete the old one.

For more information about network ACLs, see Network ACLs
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_ACLs.html] in the 
Amazon Virtual Private Cloud User Guide .
     *
     */
    createNetworkAclEntry(params: EC2.CreateNetworkAclEntryRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Creates a network interface in the specified subnet.

For more information about network interfaces, see Elastic Network Interfaces
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html] in the 
Amazon Elastic Compute Cloud User Guide .
     *
     */
    createNetworkInterface(params: EC2.CreateNetworkInterfaceRequest, callback?: (err: any, data: EC2.CreateNetworkInterfaceResult|any) => void): Request<EC2.CreateNetworkInterfaceResult|any,any>;
    /**
     * Creates a placement group that you launch cluster instances into. You must give
the group a name that&#x27;s unique within the scope of your account.

For more information about placement groups and cluster instances, see Cluster
Instances
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using_cluster_computing.html] 
in the Amazon Elastic Compute Cloud User Guide .
     *
     */
    createPlacementGroup(params: EC2.CreatePlacementGroupRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Creates a listing for Amazon EC2 Reserved Instances to be sold in the Reserved
Instance Marketplace. You can submit one Reserved Instance listing at a time. To
get a list of your Reserved Instances, you can use the DescribeReservedInstances 
operation.

The Reserved Instance Marketplace matches sellers who want to resell Reserved
Instance capacity that they no longer need with buyers who want to purchase
additional capacity. Reserved Instances bought and sold through the Reserved
Instance Marketplace work like any other Reserved Instances.

To sell your Reserved Instances, you must first register as a seller in the
Reserved Instance Marketplace. After completing the registration process, you
can create a Reserved Instance Marketplace listing of some or all of your
Reserved Instances, and specify the upfront price to receive for them. Your
Reserved Instance listings then become available for purchase. To view the
details of your Reserved Instance listing, you can use the 
DescribeReservedInstancesListings operation.

For more information, see Reserved Instance Marketplace
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html] in
the Amazon Elastic Compute Cloud User Guide .
     *
     */
    createReservedInstancesListing(params: EC2.CreateReservedInstancesListingRequest, callback?: (err: any, data: EC2.CreateReservedInstancesListingResult|any) => void): Request<EC2.CreateReservedInstancesListingResult|any,any>;
    /**
     * Creates a route in a route table within a VPC.

You must specify one of the following targets: Internet gateway or virtual
private gateway, NAT instance, NAT gateway, VPC peering connection, or network
interface.

When determining how to route traffic, we use the route with the most specific
match. For example, let&#x27;s say the traffic is destined for 192.0.2.3 , and the
route table includes the following two routes:

 &amp;#42; 192.0.2.0/24 (goes to some target A)
   
   
 * 192.0.2.0/28 (goes to some target B)
   
   

Both routes apply to the traffic destined for 192.0.2.3 . However, the second
route in the list covers a smaller number of IP addresses and is therefore more
specific, so we use that route to determine where to target the traffic.

For more information about route tables, see Route Tables
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Route_Tables.html] in
the Amazon Virtual Private Cloud User Guide .
     *
     */
    createRoute(params: EC2.CreateRouteRequest, callback?: (err: any, data: EC2.CreateRouteResult|any) => void): Request<EC2.CreateRouteResult|any,any>;
    /**
     * Creates a route table for the specified VPC. After you create a route table, you
can add routes and associate the table with a subnet.

For more information about route tables, see Route Tables
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Route_Tables.html] in
the Amazon Virtual Private Cloud User Guide .
     *
     */
    createRouteTable(params: EC2.CreateRouteTableRequest, callback?: (err: any, data: EC2.CreateRouteTableResult|any) => void): Request<EC2.CreateRouteTableResult|any,any>;
    /**
     * Creates a security group.

A security group is for use with instances either in the EC2-Classic platform or
in a specific VPC. For more information, see Amazon EC2 Security Groups
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html] 
in the Amazon Elastic Compute Cloud User Guide and Security Groups for Your VPC
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html] 
in the Amazon Virtual Private Cloud User Guide .

EC2-Classic: You can have up to 500 security groups.

EC2-VPC: You can create up to 500 security groups per VPC.

When you create a security group, you specify a friendly name of your choice.
You can have a security group for use in EC2-Classic with the same name as a
security group for use in a VPC. However, you can&#x27;t have two security groups for
use in EC2-Classic with the same name or two security groups for use in a VPC
with the same name.

You have a default security group for use in EC2-Classic and a default security
group for use in your VPC. If you don&#x27;t specify a security group when you launch
an instance, the instance is launched into the appropriate default security
group. A default security group includes a default rule that grants instances
unrestricted network access to each other.

You can add or remove rules from your security groups using 
AuthorizeSecurityGroupIngress , AuthorizeSecurityGroupEgress , 
RevokeSecurityGroupIngress , and RevokeSecurityGroupEgress .
     *
     */
    createSecurityGroup(params: EC2.CreateSecurityGroupRequest, callback?: (err: any, data: EC2.CreateSecurityGroupResult|any) => void): Request<EC2.CreateSecurityGroupResult|any,any>;
    /**
     * Creates a snapshot of an EBS volume and stores it in Amazon S3. You can use
snapshots for backups, to make copies of EBS volumes, and to save data before
shutting down an instance.

When a snapshot is created, any AWS Marketplace product codes that are
associated with the source volume are propagated to the snapshot.

You can take a snapshot of an attached volume that is in use. However, snapshots
only capture data that has been written to your EBS volume at the time the
snapshot command is issued; this may exclude any data that has been cached by
any applications or the operating system. If you can pause any file systems on
the volume long enough to take a snapshot, your snapshot should be complete.
However, if you cannot pause all file writes to the volume, you should unmount
the volume from within the instance, issue the snapshot command, and then
remount the volume to ensure a consistent and complete snapshot. You may remount
and use your volume while the snapshot status is pending .

To create a snapshot for EBS volumes that serve as root devices, you should stop
the instance before taking the snapshot.

Snapshots that are taken from encrypted volumes are automatically encrypted.
Volumes that are created from encrypted snapshots are also automatically
encrypted. Your encrypted volumes and any associated snapshots always remain
protected.

For more information, see Amazon Elastic Block Store
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html] and Amazon
EBS Encryption
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html] in the 
Amazon Elastic Compute Cloud User Guide .
     *
     */
    createSnapshot(params: EC2.CreateSnapshotRequest, callback?: (err: any, data: EC2.Snapshot|any) => void): Request<EC2.Snapshot|any,any>;
    /**
     * Creates a data feed for Spot instances, enabling you to view Spot instance usage
logs. You can create one data feed per AWS account. For more information, see 
Spot Instance Data Feed
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-data-feeds.html] in the 
Amazon Elastic Compute Cloud User Guide .
     *
     */
    createSpotDatafeedSubscription(params: EC2.CreateSpotDatafeedSubscriptionRequest, callback?: (err: any, data: EC2.CreateSpotDatafeedSubscriptionResult|any) => void): Request<EC2.CreateSpotDatafeedSubscriptionResult|any,any>;
    /**
     * Creates a subnet in an existing VPC.

When you create each subnet, you provide the VPC ID and the CIDR block you want
for the subnet. After you create a subnet, you can&#x27;t change its CIDR block. The
subnet&#x27;s CIDR block can be the same as the VPC&#x27;s CIDR block (assuming you want
only a single subnet in the VPC), or a subset of the VPC&#x27;s CIDR block. If you
create more than one subnet in a VPC, the subnets&#x27; CIDR blocks must not overlap.
The smallest subnet (and VPC) you can create uses a /28 netmask (16 IP
addresses), and the largest uses a /16 netmask (65,536 IP addresses).

AWS reserves both the first four and the last IP address in each subnet&#x27;s CIDR
block. They&#x27;re not available for use.

If you add more than one subnet to a VPC, they&#x27;re set up in a star topology with
a logical router in the middle.

If you launch an instance in a VPC using an Amazon EBS-backed AMI, the IP
address doesn&#x27;t change if you stop and restart the instance (unlike a similar
instance launched outside a VPC, which gets a new IP address when restarted).
It&#x27;s therefore possible to have a subnet with no running instances (they&#x27;re all
stopped), but no remaining IP addresses available.

For more information about subnets, see Your VPC and Subnets
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html] in the 
Amazon Virtual Private Cloud User Guide .
     *
     */
    createSubnet(params: EC2.CreateSubnetRequest, callback?: (err: any, data: EC2.CreateSubnetResult|any) => void): Request<EC2.CreateSubnetResult|any,any>;
    /**
     * Adds or overwrites one or more tags for the specified Amazon EC2 resource or
resources. Each resource can have a maximum of 10 tags. Each tag consists of a
key and optional value. Tag keys must be unique per resource.

For more information about tags, see Tagging Your Resources
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html] in the 
Amazon Elastic Compute Cloud User Guide . For more information about creating
IAM policies that control users&#x27; access to resources based on tags, see 
Supported Resource-Level Permissions for Amazon EC2 API Actions
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-iam-actions-resources.html] 
in the Amazon Elastic Compute Cloud User Guide .
     *
     */
    createTags(params: EC2.CreateTagsRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Creates an EBS volume that can be attached to an instance in the same
Availability Zone. The volume is created in the regional endpoint that you send
the HTTP request to. For more information see Regions and Endpoints
[http://docs.aws.amazon.com/general/latest/gr/rande.html] .

You can create a new empty volume or restore a volume from an EBS snapshot. Any
AWS Marketplace product codes from the snapshot are propagated to the volume.

You can create encrypted volumes with the Encrypted parameter. Encrypted volumes
may only be attached to instances that support Amazon EBS encryption. Volumes
that are created from encrypted snapshots are also automatically encrypted. For
more information, see Amazon EBS Encryption
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html] in the 
Amazon Elastic Compute Cloud User Guide .

For more information, see Creating or Restoring an Amazon EBS Volume
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-volume.html] in
the Amazon Elastic Compute Cloud User Guide .
     *
     */
    createVolume(params: EC2.CreateVolumeRequest, callback?: (err: any, data: EC2.Volume|any) => void): Request<EC2.Volume|any,any>;
    /**
     * Creates a VPC with the specified CIDR block.

The smallest VPC you can create uses a /28 netmask (16 IP addresses), and the
largest uses a /16 netmask (65,536 IP addresses). To help you decide how big to
make your VPC, see Your VPC and Subnets
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html] in the 
Amazon Virtual Private Cloud User Guide .

By default, each instance you launch in the VPC has the default DHCP options,
which includes only a default DNS server that we provide (AmazonProvidedDNS).
For more information about DHCP options, see DHCP Options Sets
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_DHCP_Options.html] in
the Amazon Virtual Private Cloud User Guide .

You can specify the instance tenancy value for the VPC when you create it. You
can&#x27;t change this value for the VPC after you create it. For more information,
see Dedicated Instances
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/dedicated-instance.html.html] 
in the Amazon Virtual Private Cloud User Guide .
     *
     */
    createVpc(params: EC2.CreateVpcRequest, callback?: (err: any, data: EC2.CreateVpcResult|any) => void): Request<EC2.CreateVpcResult|any,any>;
    /**
     * Creates a VPC endpoint for a specified AWS service. An endpoint enables you to
create a private connection between your VPC and another AWS service in your
account. You can specify an endpoint policy to attach to the endpoint that will
control access to the service from your VPC. You can also specify the VPC route
tables that use the endpoint.

Currently, only endpoints to Amazon S3 are supported.
     *
     */
    createVpcEndpoint(params: EC2.CreateVpcEndpointRequest, callback?: (err: any, data: EC2.CreateVpcEndpointResult|any) => void): Request<EC2.CreateVpcEndpointResult|any,any>;
    /**
     * Requests a VPC peering connection between two VPCs: a requester VPC that you own
and a peer VPC with which to create the connection. The peer VPC can belong to
another AWS account. The requester VPC and peer VPC cannot have overlapping CIDR
blocks.

The owner of the peer VPC must accept the peering request to activate the
peering connection. The VPC peering connection request expires after 7 days,
after which it cannot be accepted or rejected.

A CreateVpcPeeringConnection request between VPCs with overlapping CIDR blocks
results in the VPC peering connection having a status of failed .
     *
     */
    createVpcPeeringConnection(params: EC2.CreateVpcPeeringConnectionRequest, callback?: (err: any, data: EC2.CreateVpcPeeringConnectionResult|any) => void): Request<EC2.CreateVpcPeeringConnectionResult|any,any>;
    /**
     * Creates a VPN connection between an existing virtual private gateway and a VPN
customer gateway. The only supported connection type is ipsec.1 .

The response includes information that you need to give to your network
administrator to configure your customer gateway.

We strongly recommend that you use HTTPS when calling this operation because the
response contains sensitive cryptographic information for configuring your
customer gateway.

If you decide to shut down your VPN connection for any reason and later create a
new VPN connection, you must reconfigure your customer gateway with the new
information returned from this call.

This is an idempotent operation. If you perform the operation more than once,
Amazon EC2 doesn&#x27;t return an error.

For more information about VPN connections, see Adding a Hardware Virtual
Private Gateway to Your VPC
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_VPN.html] in the 
Amazon Virtual Private Cloud User Guide .
     *
     */
    createVpnConnection(params: EC2.CreateVpnConnectionRequest, callback?: (err: any, data: EC2.CreateVpnConnectionResult|any) => void): Request<EC2.CreateVpnConnectionResult|any,any>;
    /**
     * Creates a static route associated with a VPN connection between an existing
virtual private gateway and a VPN customer gateway. The static route allows
traffic to be routed from the virtual private gateway to the VPN customer
gateway.

For more information about VPN connections, see Adding a Hardware Virtual
Private Gateway to Your VPC
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_VPN.html] in the 
Amazon Virtual Private Cloud User Guide .
     *
     */
    createVpnConnectionRoute(params: EC2.CreateVpnConnectionRouteRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Creates a virtual private gateway. A virtual private gateway is the endpoint on
the VPC side of your VPN connection. You can create a virtual private gateway
before creating the VPC itself.

For more information about virtual private gateways, see Adding a Hardware
Virtual Private Gateway to Your VPC
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_VPN.html] in the 
Amazon Virtual Private Cloud User Guide .
     *
     */
    createVpnGateway(params: EC2.CreateVpnGatewayRequest, callback?: (err: any, data: EC2.CreateVpnGatewayResult|any) => void): Request<EC2.CreateVpnGatewayResult|any,any>;
    /**
     * Deletes the specified customer gateway. You must delete the VPN connection
before you can delete the customer gateway.
     *
     */
    deleteCustomerGateway(params: EC2.DeleteCustomerGatewayRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Deletes the specified set of DHCP options. You must disassociate the set of DHCP
options before you can delete it. You can disassociate the set of DHCP options
by associating either a new set of options or the default set of options with
the VPC.
     *
     */
    deleteDhcpOptions(params: EC2.DeleteDhcpOptionsRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Deletes one or more flow logs.
     *
     */
    deleteFlowLogs(params: EC2.DeleteFlowLogsRequest, callback?: (err: any, data: EC2.DeleteFlowLogsResult|any) => void): Request<EC2.DeleteFlowLogsResult|any,any>;
    /**
     * Deletes the specified Internet gateway. You must detach the Internet gateway
from the VPC before you can delete it.
     *
     */
    deleteInternetGateway(params: EC2.DeleteInternetGatewayRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Deletes the specified key pair, by removing the public key from Amazon EC2.
     *
     */
    deleteKeyPair(params: EC2.DeleteKeyPairRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Deletes the specified NAT gateway. Deleting a NAT gateway disassociates its
Elastic IP address, but does not release the address from your account. Deleting
a NAT gateway does not delete any NAT gateway routes in your route tables.
     *
     */
    deleteNatGateway(params: EC2.DeleteNatGatewayRequest, callback?: (err: any, data: EC2.DeleteNatGatewayResult|any) => void): Request<EC2.DeleteNatGatewayResult|any,any>;
    /**
     * Deletes the specified network ACL. You can&#x27;t delete the ACL if it&#x27;s associated
with any subnets. You can&#x27;t delete the default network ACL.
     *
     */
    deleteNetworkAcl(params: EC2.DeleteNetworkAclRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Deletes the specified ingress or egress entry (rule) from the specified network
ACL.
     *
     */
    deleteNetworkAclEntry(params: EC2.DeleteNetworkAclEntryRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Deletes the specified network interface. You must detach the network interface
before you can delete it.
     *
     */
    deleteNetworkInterface(params: EC2.DeleteNetworkInterfaceRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Deletes the specified placement group. You must terminate all instances in the
placement group before you can delete the placement group. For more information
about placement groups and cluster instances, see Cluster Instances
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using_cluster_computing.html] 
in the Amazon Elastic Compute Cloud User Guide .
     *
     */
    deletePlacementGroup(params: EC2.DeletePlacementGroupRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Deletes the specified route from the specified route table.
     *
     */
    deleteRoute(params: EC2.DeleteRouteRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Deletes the specified route table. You must disassociate the route table from
any subnets before you can delete it. You can&#x27;t delete the main route table.
     *
     */
    deleteRouteTable(params: EC2.DeleteRouteTableRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Deletes a security group.

If you attempt to delete a security group that is associated with an instance,
or is referenced by another security group, the operation fails with 
InvalidGroup.InUse in EC2-Classic or DependencyViolation in EC2-VPC.
     *
     */
    deleteSecurityGroup(params: EC2.DeleteSecurityGroupRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Deletes the specified snapshot.

When you make periodic snapshots of a volume, the snapshots are incremental, and
only the blocks on the device that have changed since your last snapshot are
saved in the new snapshot. When you delete a snapshot, only the data not needed
for any other snapshot is removed. So regardless of which prior snapshots have
been deleted, all active snapshots will have access to all the information
needed to restore the volume.

You cannot delete a snapshot of the root device of an EBS volume used by a
registered AMI. You must first de-register the AMI before you can delete the
snapshot.

For more information, see Deleting an Amazon EBS Snapshot
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-deleting-snapshot.html] 
in the Amazon Elastic Compute Cloud User Guide .
     *
     */
    deleteSnapshot(params: EC2.DeleteSnapshotRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Deletes the data feed for Spot instances.
     *
     */
    deleteSpotDatafeedSubscription(params: EC2.DeleteSpotDatafeedSubscriptionRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Deletes the specified subnet. You must terminate all running instances in the
subnet before you can delete the subnet.
     *
     */
    deleteSubnet(params: EC2.DeleteSubnetRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Deletes the specified set of tags from the specified set of resources. This call
is designed to follow a DescribeTags request.

For more information about tags, see Tagging Your Resources
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html] in the 
Amazon Elastic Compute Cloud User Guide .
     *
     */
    deleteTags(params: EC2.DeleteTagsRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Deletes the specified EBS volume. The volume must be in the available state (not
attached to an instance).

The volume may remain in the deleting state for several minutes.

For more information, see Deleting an Amazon EBS Volume
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-deleting-volume.html] in
the Amazon Elastic Compute Cloud User Guide .
     *
     */
    deleteVolume(params: EC2.DeleteVolumeRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Deletes the specified VPC. You must detach or delete all gateways and resources
that are associated with the VPC before you can delete it. For example, you must
terminate all instances running in the VPC, delete all security groups
associated with the VPC (except the default one), delete all route tables
associated with the VPC (except the default one), and so on.
     *
     */
    deleteVpc(params: EC2.DeleteVpcRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Deletes one or more specified VPC endpoints. Deleting the endpoint also deletes
the endpoint routes in the route tables that were associated with the endpoint.
     *
     */
    deleteVpcEndpoints(params: EC2.DeleteVpcEndpointsRequest, callback?: (err: any, data: EC2.DeleteVpcEndpointsResult|any) => void): Request<EC2.DeleteVpcEndpointsResult|any,any>;
    /**
     * Deletes a VPC peering connection. Either the owner of the requester VPC or the
owner of the peer VPC can delete the VPC peering connection if it&#x27;s in the 
active state. The owner of the requester VPC can delete a VPC peering connection
in the pending-acceptance state.
     *
     */
    deleteVpcPeeringConnection(params: EC2.DeleteVpcPeeringConnectionRequest, callback?: (err: any, data: EC2.DeleteVpcPeeringConnectionResult|any) => void): Request<EC2.DeleteVpcPeeringConnectionResult|any,any>;
    /**
     * Deletes the specified VPN connection.

If you&#x27;re deleting the VPC and its associated components, we recommend that you
detach the virtual private gateway from the VPC and delete the VPC before
deleting the VPN connection. If you believe that the tunnel credentials for your
VPN connection have been compromised, you can delete the VPN connection and
create a new one that has new keys, without needing to delete the VPC or virtual
private gateway. If you create a new VPN connection, you must reconfigure the
customer gateway using the new configuration information returned with the new
VPN connection ID.
     *
     */
    deleteVpnConnection(params: EC2.DeleteVpnConnectionRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Deletes the specified static route associated with a VPN connection between an
existing virtual private gateway and a VPN customer gateway. The static route
allows traffic to be routed from the virtual private gateway to the VPN customer
gateway.
     *
     */
    deleteVpnConnectionRoute(params: EC2.DeleteVpnConnectionRouteRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Deletes the specified virtual private gateway. We recommend that before you
delete a virtual private gateway, you detach it from the VPC and delete the VPN
connection. Note that you don&#x27;t need to delete the virtual private gateway if
you plan to delete and recreate the VPN connection between your VPC and your
network.
     *
     */
    deleteVpnGateway(params: EC2.DeleteVpnGatewayRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Deregisters the specified AMI. After you deregister an AMI, it can&#x27;t be used to
launch new instances.

This command does not delete the AMI.
     *
     */
    deregisterImage(params: EC2.DeregisterImageRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Describes attributes of your AWS account. The following are the supported
account attributes:

 &amp;#42; supported-platforms : Indicates whether your account can launch instances
   into EC2-Classic and EC2-VPC, or only into EC2-VPC.
   
   
 * default-vpc : The ID of the default VPC for your account, or none .
   
   
 * max-instances : The maximum number of On-Demand instances that you can run.
   
   
 * vpc-max-security-groups-per-interface : The maximum number of security groups
   that you can assign to a network interface.
   
   
 * max-elastic-ips : The maximum number of Elastic IP addresses that you can
   allocate for use with EC2-Classic.
   
   
 * vpc-max-elastic-ips : The maximum number of Elastic IP addresses that you can
   allocate for use with EC2-VPC.
     *
     */
    describeAccountAttributes(params: EC2.DescribeAccountAttributesRequest, callback?: (err: any, data: EC2.DescribeAccountAttributesResult|any) => void): Request<EC2.DescribeAccountAttributesResult|any,any>;
    /**
     * Describes one or more of your Elastic IP addresses.

An Elastic IP address is for use in either the EC2-Classic platform or in a VPC.
For more information, see Elastic IP Addresses
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html] 
in the Amazon Elastic Compute Cloud User Guide .
     *
     */
    describeAddresses(params: EC2.DescribeAddressesRequest, callback?: (err: any, data: EC2.DescribeAddressesResult|any) => void): Request<EC2.DescribeAddressesResult|any,any>;
    /**
     * Describes one or more of the Availability Zones that are available to you. The
results include zones only for the region you&#x27;re currently using. If there is an
event impacting an Availability Zone, you can use this request to view the state
and any provided message for that Availability Zone.

For more information, see Regions and Availability Zones
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html] 
in the Amazon Elastic Compute Cloud User Guide .
     *
     */
    describeAvailabilityZones(params: EC2.DescribeAvailabilityZonesRequest, callback?: (err: any, data: EC2.DescribeAvailabilityZonesResult|any) => void): Request<EC2.DescribeAvailabilityZonesResult|any,any>;
    /**
     * Describes one or more of your bundling tasks.

Completed bundle tasks are listed for only a limited time. If your bundle task
is no longer in the list, you can still register an AMI from it. Just use 
RegisterImage with the Amazon S3 bucket name and image manifest name you
provided to the bundle task.
     *
     */
    describeBundleTasks(params: EC2.DescribeBundleTasksRequest, callback?: (err: any, data: EC2.DescribeBundleTasksResult|any) => void): Request<EC2.DescribeBundleTasksResult|any,any>;
    /**
     * Describes one or more of your linked EC2-Classic instances. This request only
returns information about EC2-Classic instances linked to a VPC through
ClassicLink; you cannot use this request to return information about other
instances.
     *
     */
    describeClassicLinkInstances(params: EC2.DescribeClassicLinkInstancesRequest, callback?: (err: any, data: EC2.DescribeClassicLinkInstancesResult|any) => void): Request<EC2.DescribeClassicLinkInstancesResult|any,any>;
    /**
     * Describes one or more of your conversion tasks. For more information, see Using
the Command Line Tools to Import Your Virtual Machine to Amazon EC2
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UploadingYourInstancesandVolumes.html] 
in the Amazon Elastic Compute Cloud User Guide .

For information about the import manifest referenced by this API action, see VM
Import Manifest
[http://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html] .
     *
     */
    describeConversionTasks(params: EC2.DescribeConversionTasksRequest, callback?: (err: any, data: EC2.DescribeConversionTasksResult|any) => void): Request<EC2.DescribeConversionTasksResult|any,any>;
    /**
     * Describes one or more of your VPN customer gateways.

For more information about VPN customer gateways, see Adding a Hardware Virtual
Private Gateway to Your VPC
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_VPN.html] in the 
Amazon Virtual Private Cloud User Guide .
     *
     */
    describeCustomerGateways(params: EC2.DescribeCustomerGatewaysRequest, callback?: (err: any, data: EC2.DescribeCustomerGatewaysResult|any) => void): Request<EC2.DescribeCustomerGatewaysResult|any,any>;
    /**
     * Describes one or more of your DHCP options sets.

For more information about DHCP options sets, see DHCP Options Sets
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_DHCP_Options.html] in
the Amazon Virtual Private Cloud User Guide .
     *
     */
    describeDhcpOptions(params: EC2.DescribeDhcpOptionsRequest, callback?: (err: any, data: EC2.DescribeDhcpOptionsResult|any) => void): Request<EC2.DescribeDhcpOptionsResult|any,any>;
    /**
     * Describes one or more of your export tasks.
     *
     */
    describeExportTasks(params: EC2.DescribeExportTasksRequest, callback?: (err: any, data: EC2.DescribeExportTasksResult|any) => void): Request<EC2.DescribeExportTasksResult|any,any>;
    /**
     * Describes one or more flow logs. To view the information in your flow logs (the
log streams for the network interfaces), you must use the CloudWatch Logs
console or the CloudWatch Logs API.
     *
     */
    describeFlowLogs(params: EC2.DescribeFlowLogsRequest, callback?: (err: any, data: EC2.DescribeFlowLogsResult|any) => void): Request<EC2.DescribeFlowLogsResult|any,any>;
    /**
     * Describes one or more of your Dedicated hosts.

The results describe only the Dedicated hosts in the region you&#x27;re currently
using. All listed instances consume capacity on your Dedicated host. Dedicated
hosts that have recently been released will be listed with the state released .
     *
     */
    describeHosts(params: EC2.DescribeHostsRequest, callback?: (err: any, data: EC2.DescribeHostsResult|any) => void): Request<EC2.DescribeHostsResult|any,any>;
    /**
     * Describes the ID format settings for your resources on a per-region basis, for
example, to view which resource types are enabled for longer IDs. This request
only returns information about resource types whose ID formats can be modified;
it does not return information about other resource types.

The following resource types support longer IDs: instance | reservation | 
snapshot | volume .

These settings apply to the IAM user who makes the request; they do not apply to
the entire AWS account. By default, an IAM user defaults to the same settings as
the root user, unless they explicitly override the settings by running the 
ModifyIdFormat command. Resources created with longer IDs are visible to all IAM
users, regardless of these settings and provided that they have permission to
use the relevant Describe command for the resource type.
     *
     */
    describeIdFormat(params: EC2.DescribeIdFormatRequest, callback?: (err: any, data: EC2.DescribeIdFormatResult|any) => void): Request<EC2.DescribeIdFormatResult|any,any>;
    /**
     * Describes the ID format settings for resources for the specified IAM user, IAM
role, or root user. For example, you can view the resource types that are
enabled for longer IDs. This request only returns information about resource
types whose ID formats can be modified; it does not return information about
other resource types. For more information, see Resource IDs
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html] in the 
Amazon Elastic Compute Cloud User Guide .

The following resource types support longer IDs: instance | reservation | 
snapshot | volume .

These settings apply to the principal specified in the request. They do not
apply to the principal that makes the request.
     *
     */
    describeIdentityIdFormat(params: EC2.DescribeIdentityIdFormatRequest, callback?: (err: any, data: EC2.DescribeIdentityIdFormatResult|any) => void): Request<EC2.DescribeIdentityIdFormatResult|any,any>;
    /**
     * Describes the specified attribute of the specified AMI. You can specify only one
attribute at a time.
     *
     */
    describeImageAttribute(params: EC2.DescribeImageAttributeRequest, callback?: (err: any, data: EC2.ImageAttribute|any) => void): Request<EC2.ImageAttribute|any,any>;
    /**
     * Describes one or more of the images (AMIs, AKIs, and ARIs) available to you.
Images available to you include public images, private images that you own, and
private images owned by other AWS accounts but for which you have explicit
launch permissions.

Deregistered images are included in the returned results for an unspecified
interval after deregistration.
     *
     */
    describeImages(params: EC2.DescribeImagesRequest, callback?: (err: any, data: EC2.DescribeImagesResult|any) => void): Request<EC2.DescribeImagesResult|any,any>;
    /**
     * Displays details about an import virtual machine or import snapshot tasks that
are already created.
     *
     */
    describeImportImageTasks(params: EC2.DescribeImportImageTasksRequest, callback?: (err: any, data: EC2.DescribeImportImageTasksResult|any) => void): Request<EC2.DescribeImportImageTasksResult|any,any>;
    /**
     * Describes your import snapshot tasks.
     *
     */
    describeImportSnapshotTasks(params: EC2.DescribeImportSnapshotTasksRequest, callback?: (err: any, data: EC2.DescribeImportSnapshotTasksResult|any) => void): Request<EC2.DescribeImportSnapshotTasksResult|any,any>;
    /**
     * Describes the specified attribute of the specified instance. You can specify
only one attribute at a time. Valid attribute values are: instanceType | kernel 
| ramdisk | userData | disableApiTermination | instanceInitiatedShutdownBehavior 
| rootDeviceName | blockDeviceMapping | productCodes | sourceDestCheck | 
groupSet | ebsOptimized | sriovNetSupport
     *
     */
    describeInstanceAttribute(params: EC2.DescribeInstanceAttributeRequest, callback?: (err: any, data: EC2.InstanceAttribute|any) => void): Request<EC2.InstanceAttribute|any,any>;
    /**
     * Describes the status of one or more instances. By default, only running
instances are described, unless specified otherwise.

Instance status includes the following components:

 &amp;#42; Status checks - Amazon EC2 performs status checks on running EC2 instances to
   identify hardware and software issues. For more information, see Status
   Checks for Your Instances
   [http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-system-instance-status-check.html] 
   and Troubleshooting Instances with Failed Status Checks
   [http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstances.html] 
   in the Amazon Elastic Compute Cloud User Guide .
   
   
 * Scheduled events - Amazon EC2 can schedule events (such as reboot, stop, or
   terminate) for your instances related to hardware issues, software updates,
   or system maintenance. For more information, see Scheduled Events for Your
   Instances
   [http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-instances-status-check_sched.html] 
   in the Amazon Elastic Compute Cloud User Guide .
   
   
 * Instance state - You can manage your instances from the moment you launch
   them through their termination. For more information, see Instance Lifecycle
   [http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html] 
   in the Amazon Elastic Compute Cloud User Guide .
     *
     */
    describeInstanceStatus(params: EC2.DescribeInstanceStatusRequest, callback?: (err: any, data: EC2.DescribeInstanceStatusResult|any) => void): Request<EC2.DescribeInstanceStatusResult|any,any>;
    /**
     * Describes one or more of your instances.

If you specify one or more instance IDs, Amazon EC2 returns information for
those instances. If you do not specify instance IDs, Amazon EC2 returns
information for all relevant instances. If you specify an instance ID that is
not valid, an error is returned. If you specify an instance that you do not own,
it is not included in the returned results.

Recently terminated instances might appear in the returned results. This
interval is usually less than one hour.
     *
     */
    describeInstances(params: EC2.DescribeInstancesRequest, callback?: (err: any, data: EC2.DescribeInstancesResult|any) => void): Request<EC2.DescribeInstancesResult|any,any>;
    /**
     * Describes one or more of your Internet gateways.
     *
     */
    describeInternetGateways(params: EC2.DescribeInternetGatewaysRequest, callback?: (err: any, data: EC2.DescribeInternetGatewaysResult|any) => void): Request<EC2.DescribeInternetGatewaysResult|any,any>;
    /**
     * Describes one or more of your key pairs.

For more information about key pairs, see Key Pairs
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html] in the 
Amazon Elastic Compute Cloud User Guide .
     *
     */
    describeKeyPairs(params: EC2.DescribeKeyPairsRequest, callback?: (err: any, data: EC2.DescribeKeyPairsResult|any) => void): Request<EC2.DescribeKeyPairsResult|any,any>;
    /**
     * Describes your Elastic IP addresses that are being moved to the EC2-VPC
platform, or that are being restored to the EC2-Classic platform. This request
does not return information about any other Elastic IP addresses in your
account.
     *
     */
    describeMovingAddresses(params: EC2.DescribeMovingAddressesRequest, callback?: (err: any, data: EC2.DescribeMovingAddressesResult|any) => void): Request<EC2.DescribeMovingAddressesResult|any,any>;
    /**
     * Describes one or more of the your NAT gateways.
     *
     */
    describeNatGateways(params: EC2.DescribeNatGatewaysRequest, callback?: (err: any, data: EC2.DescribeNatGatewaysResult|any) => void): Request<EC2.DescribeNatGatewaysResult|any,any>;
    /**
     * Describes one or more of your network ACLs.

For more information about network ACLs, see Network ACLs
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_ACLs.html] in the 
Amazon Virtual Private Cloud User Guide .
     *
     */
    describeNetworkAcls(params: EC2.DescribeNetworkAclsRequest, callback?: (err: any, data: EC2.DescribeNetworkAclsResult|any) => void): Request<EC2.DescribeNetworkAclsResult|any,any>;
    /**
     * Describes a network interface attribute. You can specify only one attribute at a
time.
     *
     */
    describeNetworkInterfaceAttribute(params: EC2.DescribeNetworkInterfaceAttributeRequest, callback?: (err: any, data: EC2.DescribeNetworkInterfaceAttributeResult|any) => void): Request<EC2.DescribeNetworkInterfaceAttributeResult|any,any>;
    /**
     * Describes one or more of your network interfaces.
     *
     */
    describeNetworkInterfaces(params: EC2.DescribeNetworkInterfacesRequest, callback?: (err: any, data: EC2.DescribeNetworkInterfacesResult|any) => void): Request<EC2.DescribeNetworkInterfacesResult|any,any>;
    /**
     * Describes one or more of your placement groups. For more information about
placement groups and cluster instances, see Cluster Instances
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using_cluster_computing.html] 
in the Amazon Elastic Compute Cloud User Guide .
     *
     */
    describePlacementGroups(params: EC2.DescribePlacementGroupsRequest, callback?: (err: any, data: EC2.DescribePlacementGroupsResult|any) => void): Request<EC2.DescribePlacementGroupsResult|any,any>;
    /**
     * Describes available AWS services in a prefix list format, which includes the
prefix list name and prefix list ID of the service and the IP address range for
the service. A prefix list ID is required for creating an outbound security
group rule that allows traffic from a VPC to access an AWS service through a VPC
endpoint.
     *
     */
    describePrefixLists(params: EC2.DescribePrefixListsRequest, callback?: (err: any, data: EC2.DescribePrefixListsResult|any) => void): Request<EC2.DescribePrefixListsResult|any,any>;
    /**
     * Describes one or more regions that are currently available to you.

For a list of the regions supported by Amazon EC2, see Regions and Endpoints
[http://docs.aws.amazon.com/general/latest/gr/rande.html#ec2_region] .
     *
     */
    describeRegions(params: EC2.DescribeRegionsRequest, callback?: (err: any, data: EC2.DescribeRegionsResult|any) => void): Request<EC2.DescribeRegionsResult|any,any>;
    /**
     * Describes one or more of the Reserved Instances that you purchased.

For more information about Reserved Instances, see Reserved Instances
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts-on-demand-reserved-instances.html] 
in the Amazon Elastic Compute Cloud User Guide .
     *
     */
    describeReservedInstances(params: EC2.DescribeReservedInstancesRequest, callback?: (err: any, data: EC2.DescribeReservedInstancesResult|any) => void): Request<EC2.DescribeReservedInstancesResult|any,any>;
    /**
     * Describes your account&#x27;s Reserved Instance listings in the Reserved Instance
Marketplace.

The Reserved Instance Marketplace matches sellers who want to resell Reserved
Instance capacity that they no longer need with buyers who want to purchase
additional capacity. Reserved Instances bought and sold through the Reserved
Instance Marketplace work like any other Reserved Instances.

As a seller, you choose to list some or all of your Reserved Instances, and you
specify the upfront price to receive for them. Your Reserved Instances are then
listed in the Reserved Instance Marketplace and are available for purchase.

As a buyer, you specify the configuration of the Reserved Instance to purchase,
and the Marketplace matches what you&#x27;re searching for with what&#x27;s available. The
Marketplace first sells the lowest priced Reserved Instances to you, and
continues to sell available Reserved Instance listings to you until your demand
is met. You are charged based on the total price of all of the listings that you
purchase.

For more information, see Reserved Instance Marketplace
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html] in
the Amazon Elastic Compute Cloud User Guide .
     *
     */
    describeReservedInstancesListings(params: EC2.DescribeReservedInstancesListingsRequest, callback?: (err: any, data: EC2.DescribeReservedInstancesListingsResult|any) => void): Request<EC2.DescribeReservedInstancesListingsResult|any,any>;
    /**
     * Describes the modifications made to your Reserved Instances. If no parameter is
specified, information about all your Reserved Instances modification requests
is returned. If a modification ID is specified, only information about the
specific modification is returned.

For more information, see Modifying Reserved Instances
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html] in the
Amazon Elastic Compute Cloud User Guide.
     *
     */
    describeReservedInstancesModifications(params: EC2.DescribeReservedInstancesModificationsRequest, callback?: (err: any, data: EC2.DescribeReservedInstancesModificationsResult|any) => void): Request<EC2.DescribeReservedInstancesModificationsResult|any,any>;
    /**
     * Describes Reserved Instance offerings that are available for purchase. With
Reserved Instances, you purchase the right to launch instances for a period of
time. During that time period, you do not receive insufficient capacity errors,
and you pay a lower usage rate than the rate charged for On-Demand instances for
the actual time used.

If you have listed your own Reserved Instances for sale in the Reserved Instance
Marketplace, they will be excluded from these results. This is to ensure that
you do not purchase your own Reserved Instances.

For more information, see Reserved Instance Marketplace
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html] in
the Amazon Elastic Compute Cloud User Guide .
     *
     */
    describeReservedInstancesOfferings(params: EC2.DescribeReservedInstancesOfferingsRequest, callback?: (err: any, data: EC2.DescribeReservedInstancesOfferingsResult|any) => void): Request<EC2.DescribeReservedInstancesOfferingsResult|any,any>;
    /**
     * Describes one or more of your route tables.

Each subnet in your VPC must be associated with a route table. If a subnet is
not explicitly associated with any route table, it is implicitly associated with
the main route table. This command does not return the subnet ID for implicit
associations.

For more information about route tables, see Route Tables
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Route_Tables.html] in
the Amazon Virtual Private Cloud User Guide .
     *
     */
    describeRouteTables(params: EC2.DescribeRouteTablesRequest, callback?: (err: any, data: EC2.DescribeRouteTablesResult|any) => void): Request<EC2.DescribeRouteTablesResult|any,any>;
    /**
     * Finds available schedules that meet the specified criteria.

You can search for an available schedule no more than 3 months in advance. You
must meet the minimum required duration of 1,200 hours per year. For example,
the minimum daily schedule is 4 hours, the minimum weekly schedule is 24 hours,
and the minimum monthly schedule is 100 hours.

After you find a schedule that meets your needs, call PurchaseScheduledInstances 
to purchase Scheduled Instances with that schedule.
     *
     */
    describeScheduledInstanceAvailability(params: EC2.DescribeScheduledInstanceAvailabilityRequest, callback?: (err: any, data: EC2.DescribeScheduledInstanceAvailabilityResult|any) => void): Request<EC2.DescribeScheduledInstanceAvailabilityResult|any,any>;
    /**
     * Describes one or more of your Scheduled Instances.
     *
     */
    describeScheduledInstances(params: EC2.DescribeScheduledInstancesRequest, callback?: (err: any, data: EC2.DescribeScheduledInstancesResult|any) => void): Request<EC2.DescribeScheduledInstancesResult|any,any>;
    /**
     * [EC2-VPC only] Describes the VPCs on the other side of a VPC peering connection
that are referencing the security groups you&#x27;ve specified in this request.
     *
     */
    describeSecurityGroupReferences(params: EC2.DescribeSecurityGroupReferencesRequest, callback?: (err: any, data: EC2.DescribeSecurityGroupReferencesResult|any) => void): Request<EC2.DescribeSecurityGroupReferencesResult|any,any>;
    /**
     * Describes one or more of your security groups.

A security group is for use with instances either in the EC2-Classic platform or
in a specific VPC. For more information, see Amazon EC2 Security Groups
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html] 
in the Amazon Elastic Compute Cloud User Guide and Security Groups for Your VPC
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html] 
in the Amazon Virtual Private Cloud User Guide .
     *
     */
    describeSecurityGroups(params: EC2.DescribeSecurityGroupsRequest, callback?: (err: any, data: EC2.DescribeSecurityGroupsResult|any) => void): Request<EC2.DescribeSecurityGroupsResult|any,any>;
    /**
     * Describes the specified attribute of the specified snapshot. You can specify
only one attribute at a time.

For more information about EBS snapshots, see Amazon EBS Snapshots
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html] in the 
Amazon Elastic Compute Cloud User Guide .
     *
     */
    describeSnapshotAttribute(params: EC2.DescribeSnapshotAttributeRequest, callback?: (err: any, data: EC2.DescribeSnapshotAttributeResult|any) => void): Request<EC2.DescribeSnapshotAttributeResult|any,any>;
    /**
     * Describes one or more of the EBS snapshots available to you. Available snapshots
include public snapshots available for any AWS account to launch, private
snapshots that you own, and private snapshots owned by another AWS account but
for which you&#x27;ve been given explicit create volume permissions.

The create volume permissions fall into the following categories:

 &amp;#42; public : The owner of the snapshot granted create volume permissions for the
   snapshot to the all group. All AWS accounts have create volume permissions
   for these snapshots.
   
   
 * explicit : The owner of the snapshot granted create volume permissions to a
   specific AWS account.
   
   
 * implicit : An AWS account has implicit create volume permissions for all
   snapshots it owns.
   
   

The list of snapshots returned can be modified by specifying snapshot IDs,
snapshot owners, or AWS accounts with create volume permissions. If no options
are specified, Amazon EC2 returns all snapshots for which you have create volume
permissions.

If you specify one or more snapshot IDs, only snapshots that have the specified
IDs are returned. If you specify an invalid snapshot ID, an error is returned.
If you specify a snapshot ID for which you do not have access, it is not
included in the returned results.

If you specify one or more snapshot owners using the OwnerIds option, only
snapshots from the specified owners and for which you have access are returned.
The results can include the AWS account IDs of the specified owners, amazon for
snapshots owned by Amazon, or self for snapshots that you own.

If you specify a list of restorable users, only snapshots with create snapshot
permissions for those users are returned. You can specify AWS account IDs (if
you own the snapshots), self for snapshots for which you own or have explicit
permissions, or all for public snapshots.

If you are describing a long list of snapshots, you can paginate the output to
make the list more manageable. The MaxResults parameter sets the maximum number
of results returned in a single page. If the list of results exceeds your 
MaxResults value, then that number of results is returned along with a NextToken 
value that can be passed to a subsequent DescribeSnapshots request to retrieve
the remaining results.

For more information about EBS snapshots, see Amazon EBS Snapshots
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html] in the 
Amazon Elastic Compute Cloud User Guide .
     *
     */
    describeSnapshots(params: EC2.DescribeSnapshotsRequest, callback?: (err: any, data: EC2.DescribeSnapshotsResult|any) => void): Request<EC2.DescribeSnapshotsResult|any,any>;
    /**
     * Describes the data feed for Spot instances. For more information, see Spot
Instance Data Feed
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-data-feeds.html] in the 
Amazon Elastic Compute Cloud User Guide .
     *
     */
    describeSpotDatafeedSubscription(params: EC2.DescribeSpotDatafeedSubscriptionRequest, callback?: (err: any, data: EC2.DescribeSpotDatafeedSubscriptionResult|any) => void): Request<EC2.DescribeSpotDatafeedSubscriptionResult|any,any>;
    /**
     * Describes the running instances for the specified Spot fleet.
     *
     */
    describeSpotFleetInstances(params: EC2.DescribeSpotFleetInstancesRequest, callback?: (err: any, data: EC2.DescribeSpotFleetInstancesResponse|any) => void): Request<EC2.DescribeSpotFleetInstancesResponse|any,any>;
    /**
     * Describes the events for the specified Spot fleet request during the specified
time.

Spot fleet events are delayed by up to 30 seconds before they can be described.
This ensures that you can query by the last evaluated time and not miss a
recorded event.
     *
     */
    describeSpotFleetRequestHistory(params: EC2.DescribeSpotFleetRequestHistoryRequest, callback?: (err: any, data: EC2.DescribeSpotFleetRequestHistoryResponse|any) => void): Request<EC2.DescribeSpotFleetRequestHistoryResponse|any,any>;
    /**
     * Describes your Spot fleet requests.
     *
     */
    describeSpotFleetRequests(params: EC2.DescribeSpotFleetRequestsRequest, callback?: (err: any, data: EC2.DescribeSpotFleetRequestsResponse|any) => void): Request<EC2.DescribeSpotFleetRequestsResponse|any,any>;
    /**
     * Describes the Spot instance requests that belong to your account. Spot instances
are instances that Amazon EC2 launches when the bid price that you specify
exceeds the current Spot price. Amazon EC2 periodically sets the Spot price
based on available Spot instance capacity and current Spot instance requests.
For more information, see Spot Instance Requests
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-requests.html] in the 
Amazon Elastic Compute Cloud User Guide .

You can use DescribeSpotInstanceRequests to find a running Spot instance by
examining the response. If the status of the Spot instance is fulfilled , the
instance ID appears in the response and contains the identifier of the instance.
Alternatively, you can use DescribeInstances with a filter to look for instances
where the instance lifecycle is spot .
     *
     */
    describeSpotInstanceRequests(params: EC2.DescribeSpotInstanceRequestsRequest, callback?: (err: any, data: EC2.DescribeSpotInstanceRequestsResult|any) => void): Request<EC2.DescribeSpotInstanceRequestsResult|any,any>;
    /**
     * Describes the Spot price history. The prices returned are listed in
chronological order, from the oldest to the most recent, for up to the past 90
days. For more information, see Spot Instance Pricing History
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances-history.html] 
in the Amazon Elastic Compute Cloud User Guide .

When you specify a start and end time, this operation returns the prices of the
instance types within the time range that you specified and the time when the
price changed. The price is valid within the time period that you specified; the
response merely indicates the last time that the price changed.
     *
     */
    describeSpotPriceHistory(params: EC2.DescribeSpotPriceHistoryRequest, callback?: (err: any, data: EC2.DescribeSpotPriceHistoryResult|any) => void): Request<EC2.DescribeSpotPriceHistoryResult|any,any>;
    /**
     * [EC2-VPC only] Describes the stale security group rules for security groups in a
specified VPC. Rules are stale when they reference a deleted security group in a
peer VPC, or a security group in a peer VPC for which the VPC peering connection
has been deleted.
     *
     */
    describeStaleSecurityGroups(params: EC2.DescribeStaleSecurityGroupsRequest, callback?: (err: any, data: EC2.DescribeStaleSecurityGroupsResult|any) => void): Request<EC2.DescribeStaleSecurityGroupsResult|any,any>;
    /**
     * Describes one or more of your subnets.

For more information about subnets, see Your VPC and Subnets
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html] in the 
Amazon Virtual Private Cloud User Guide .
     *
     */
    describeSubnets(params: EC2.DescribeSubnetsRequest, callback?: (err: any, data: EC2.DescribeSubnetsResult|any) => void): Request<EC2.DescribeSubnetsResult|any,any>;
    /**
     * Describes one or more of the tags for your EC2 resources.

For more information about tags, see Tagging Your Resources
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html] in the 
Amazon Elastic Compute Cloud User Guide .
     *
     */
    describeTags(params: EC2.DescribeTagsRequest, callback?: (err: any, data: EC2.DescribeTagsResult|any) => void): Request<EC2.DescribeTagsResult|any,any>;
    /**
     * Describes the specified attribute of the specified volume. You can specify only
one attribute at a time.

For more information about EBS volumes, see Amazon EBS Volumes
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumes.html] in the 
Amazon Elastic Compute Cloud User Guide .
     *
     */
    describeVolumeAttribute(params: EC2.DescribeVolumeAttributeRequest, callback?: (err: any, data: EC2.DescribeVolumeAttributeResult|any) => void): Request<EC2.DescribeVolumeAttributeResult|any,any>;
    /**
     * Describes the status of the specified volumes. Volume status provides the result
of the checks performed on your volumes to determine events that can impair the
performance of your volumes. The performance of a volume can be affected if an
issue occurs on the volume&#x27;s underlying host. If the volume&#x27;s underlying host
experiences a power outage or system issue, after the system is restored, there
could be data inconsistencies on the volume. Volume events notify you if this
occurs. Volume actions notify you if any action needs to be taken in response to
the event.

The DescribeVolumeStatus operation provides the following information about the
specified volumes:

Status : Reflects the current status of the volume. The possible values are ok , 
impaired , warning , or insufficient-data . If all checks pass, the overall
status of the volume is ok . If the check fails, the overall status is impaired 
. If the status is insufficient-data , then the checks may still be taking place
on your volume at the time. We recommend that you retry the request. For more
information on volume status, see Monitoring the Status of Your Volumes
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-volume-status.html] 
.

Events : Reflect the cause of a volume status and may require you to take
action. For example, if your volume returns an impaired status, then the volume
event might be potential-data-inconsistency . This means that your volume has
been affected by an issue with the underlying host, has all I/O operations
disabled, and may have inconsistent data.

Actions : Reflect the actions you may have to take in response to an event. For
example, if the status of the volume is impaired and the volume event shows 
potential-data-inconsistency , then the action shows enable-volume-io . This
means that you may want to enable the I/O operations for the volume by calling
the EnableVolumeIO action and then check the volume for data consistency.

Volume status is based on the volume status checks, and does not reflect the
volume state. Therefore, volume status does not indicate volumes in the error 
state (for example, when a volume is incapable of accepting I/O.)
     *
     */
    describeVolumeStatus(params: EC2.DescribeVolumeStatusRequest, callback?: (err: any, data: EC2.DescribeVolumeStatusResult|any) => void): Request<EC2.DescribeVolumeStatusResult|any,any>;
    /**
     * Describes the specified EBS volumes.

If you are describing a long list of volumes, you can paginate the output to
make the list more manageable. The MaxResults parameter sets the maximum number
of results returned in a single page. If the list of results exceeds your 
MaxResults value, then that number of results is returned along with a NextToken 
value that can be passed to a subsequent DescribeVolumes request to retrieve the
remaining results.

For more information about EBS volumes, see Amazon EBS Volumes
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumes.html] in the 
Amazon Elastic Compute Cloud User Guide .
     *
     */
    describeVolumes(params: EC2.DescribeVolumesRequest, callback?: (err: any, data: EC2.DescribeVolumesResult|any) => void): Request<EC2.DescribeVolumesResult|any,any>;
    /**
     * Describes the specified attribute of the specified VPC. You can specify only one
attribute at a time.
     *
     */
    describeVpcAttribute(params: EC2.DescribeVpcAttributeRequest, callback?: (err: any, data: EC2.DescribeVpcAttributeResult|any) => void): Request<EC2.DescribeVpcAttributeResult|any,any>;
    /**
     * Describes the ClassicLink status of one or more VPCs.
     *
     */
    describeVpcClassicLink(params: EC2.DescribeVpcClassicLinkRequest, callback?: (err: any, data: EC2.DescribeVpcClassicLinkResult|any) => void): Request<EC2.DescribeVpcClassicLinkResult|any,any>;
    /**
     * Describes the ClassicLink DNS support status of one or more VPCs. If enabled,
the DNS hostname of a linked EC2-Classic instance resolves to its private IP
address when addressed from an instance in the VPC to which it&#x27;s linked.
Similarly, the DNS hostname of an instance in a VPC resolves to its private IP
address when addressed from a linked EC2-Classic instance. For more information
about ClassicLink, see ClassicLink
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html] in the
Amazon Elastic Compute Cloud User Guide.
     *
     */
    describeVpcClassicLinkDnsSupport(params: EC2.DescribeVpcClassicLinkDnsSupportRequest, callback?: (err: any, data: EC2.DescribeVpcClassicLinkDnsSupportResult|any) => void): Request<EC2.DescribeVpcClassicLinkDnsSupportResult|any,any>;
    /**
     * Describes all supported AWS services that can be specified when creating a VPC
endpoint.
     *
     */
    describeVpcEndpointServices(params: EC2.DescribeVpcEndpointServicesRequest, callback?: (err: any, data: EC2.DescribeVpcEndpointServicesResult|any) => void): Request<EC2.DescribeVpcEndpointServicesResult|any,any>;
    /**
     * Describes one or more of your VPC endpoints.
     *
     */
    describeVpcEndpoints(params: EC2.DescribeVpcEndpointsRequest, callback?: (err: any, data: EC2.DescribeVpcEndpointsResult|any) => void): Request<EC2.DescribeVpcEndpointsResult|any,any>;
    /**
     * Describes one or more of your VPC peering connections.
     *
     */
    describeVpcPeeringConnections(params: EC2.DescribeVpcPeeringConnectionsRequest, callback?: (err: any, data: EC2.DescribeVpcPeeringConnectionsResult|any) => void): Request<EC2.DescribeVpcPeeringConnectionsResult|any,any>;
    /**
     * Describes one or more of your VPCs.
     *
     */
    describeVpcs(params: EC2.DescribeVpcsRequest, callback?: (err: any, data: EC2.DescribeVpcsResult|any) => void): Request<EC2.DescribeVpcsResult|any,any>;
    /**
     * Describes one or more of your VPN connections.

For more information about VPN connections, see Adding a Hardware Virtual
Private Gateway to Your VPC
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_VPN.html] in the 
Amazon Virtual Private Cloud User Guide .
     *
     */
    describeVpnConnections(params: EC2.DescribeVpnConnectionsRequest, callback?: (err: any, data: EC2.DescribeVpnConnectionsResult|any) => void): Request<EC2.DescribeVpnConnectionsResult|any,any>;
    /**
     * Describes one or more of your virtual private gateways.

For more information about virtual private gateways, see Adding an IPsec
Hardware VPN to Your VPC
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_VPN.html] in the 
Amazon Virtual Private Cloud User Guide .
     *
     */
    describeVpnGateways(params: EC2.DescribeVpnGatewaysRequest, callback?: (err: any, data: EC2.DescribeVpnGatewaysResult|any) => void): Request<EC2.DescribeVpnGatewaysResult|any,any>;
    /**
     * Unlinks (detaches) a linked EC2-Classic instance from a VPC. After the instance
has been unlinked, the VPC security groups are no longer associated with it. An
instance is automatically unlinked from a VPC when it&#x27;s stopped.
     *
     */
    detachClassicLinkVpc(params: EC2.DetachClassicLinkVpcRequest, callback?: (err: any, data: EC2.DetachClassicLinkVpcResult|any) => void): Request<EC2.DetachClassicLinkVpcResult|any,any>;
    /**
     * Detaches an Internet gateway from a VPC, disabling connectivity between the
Internet and the VPC. The VPC must not contain any running instances with
Elastic IP addresses.
     *
     */
    detachInternetGateway(params: EC2.DetachInternetGatewayRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Detaches a network interface from an instance.
     *
     */
    detachNetworkInterface(params: EC2.DetachNetworkInterfaceRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Detaches an EBS volume from an instance. Make sure to unmount any file systems
on the device within your operating system before detaching the volume. Failure
to do so results in the volume being stuck in a busy state while detaching.

If an Amazon EBS volume is the root device of an instance, it can&#x27;t be detached
while the instance is running. To detach the root volume, stop the instance
first.

When a volume with an AWS Marketplace product code is detached from an instance,
the product code is no longer associated with the instance.

For more information, see Detaching an Amazon EBS Volume
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-detaching-volume.html] 
in the Amazon Elastic Compute Cloud User Guide .
     *
     */
    detachVolume(params: EC2.DetachVolumeRequest, callback?: (err: any, data: EC2.VolumeAttachment|any) => void): Request<EC2.VolumeAttachment|any,any>;
    /**
     * Detaches a virtual private gateway from a VPC. You do this if you&#x27;re planning to
turn off the VPC and not use it anymore. You can confirm a virtual private
gateway has been completely detached from a VPC by describing the virtual
private gateway (any attachments to the virtual private gateway are also
described).

You must wait for the attachment&#x27;s state to switch to detached before you can
delete the VPC or attach a different VPC to the virtual private gateway.
     *
     */
    detachVpnGateway(params: EC2.DetachVpnGatewayRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Disables a virtual private gateway (VGW) from propagating routes to a specified
route table of a VPC.
     *
     */
    disableVgwRoutePropagation(params: EC2.DisableVgwRoutePropagationRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Disables ClassicLink for a VPC. You cannot disable ClassicLink for a VPC that
has EC2-Classic instances linked to it.
     *
     */
    disableVpcClassicLink(params: EC2.DisableVpcClassicLinkRequest, callback?: (err: any, data: EC2.DisableVpcClassicLinkResult|any) => void): Request<EC2.DisableVpcClassicLinkResult|any,any>;
    /**
     * Disables ClassicLink DNS support for a VPC. If disabled, DNS hostnames resolve
to public IP addresses when addressed between a linked EC2-Classic instance and
instances in the VPC to which it&#x27;s linked. For more information about
ClassicLink, see ClassicLink
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html] in the
Amazon Elastic Compute Cloud User Guide.
     *
     */
    disableVpcClassicLinkDnsSupport(params: EC2.DisableVpcClassicLinkDnsSupportRequest, callback?: (err: any, data: EC2.DisableVpcClassicLinkDnsSupportResult|any) => void): Request<EC2.DisableVpcClassicLinkDnsSupportResult|any,any>;
    /**
     * Disassociates an Elastic IP address from the instance or network interface it&#x27;s
associated with.

An Elastic IP address is for use in either the EC2-Classic platform or in a VPC.
For more information, see Elastic IP Addresses
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html] 
in the Amazon Elastic Compute Cloud User Guide .

This is an idempotent operation. If you perform the operation more than once,
Amazon EC2 doesn&#x27;t return an error.
     *
     */
    disassociateAddress(params: EC2.DisassociateAddressRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Disassociates a subnet from a route table.

After you perform this action, the subnet no longer uses the routes in the route
table. Instead, it uses the routes in the VPC&#x27;s main route table. For more
information about route tables, see Route Tables
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Route_Tables.html] in
the Amazon Virtual Private Cloud User Guide .
     *
     */
    disassociateRouteTable(params: EC2.DisassociateRouteTableRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Enables a virtual private gateway (VGW) to propagate routes to the specified
route table of a VPC.
     *
     */
    enableVgwRoutePropagation(params: EC2.EnableVgwRoutePropagationRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Enables I/O operations for a volume that had I/O operations disabled because the
data on the volume was potentially inconsistent.
     *
     */
    enableVolumeIO(params: EC2.EnableVolumeIORequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Enables a VPC for ClassicLink. You can then link EC2-Classic instances to your
ClassicLink-enabled VPC to allow communication over private IP addresses. You
cannot enable your VPC for ClassicLink if any of your VPC&#x27;s route tables have
existing routes for address ranges within the 10.0.0.0/8 IP address range,
excluding local routes for VPCs in the 10.0.0.0/16 and 10.1.0.0/16 IP address
ranges. For more information, see ClassicLink
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html] in the
Amazon Elastic Compute Cloud User Guide.
     *
     */
    enableVpcClassicLink(params: EC2.EnableVpcClassicLinkRequest, callback?: (err: any, data: EC2.EnableVpcClassicLinkResult|any) => void): Request<EC2.EnableVpcClassicLinkResult|any,any>;
    /**
     * Enables a VPC to support DNS hostname resolution for ClassicLink. If enabled,
the DNS hostname of a linked EC2-Classic instance resolves to its private IP
address when addressed from an instance in the VPC to which it&#x27;s linked.
Similarly, the DNS hostname of an instance in a VPC resolves to its private IP
address when addressed from a linked EC2-Classic instance. For more information
about ClassicLink, see ClassicLink
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html] in the
Amazon Elastic Compute Cloud User Guide.
     *
     */
    enableVpcClassicLinkDnsSupport(params: EC2.EnableVpcClassicLinkDnsSupportRequest, callback?: (err: any, data: EC2.EnableVpcClassicLinkDnsSupportResult|any) => void): Request<EC2.EnableVpcClassicLinkDnsSupportResult|any,any>;
    /**
     * Gets the console output for the specified instance.

Instances do not have a physical monitor through which you can view their
console output. They also lack physical controls that allow you to power up,
reboot, or shut them down. To allow these actions, we provide them through the
Amazon EC2 API and command line interface.

Instance console output is buffered and posted shortly after instance boot,
reboot, and termination. Amazon EC2 preserves the most recent 64 KB output which
is available for at least one hour after the most recent post.

For Linux instances, the instance console output displays the exact console
output that would normally be displayed on a physical monitor attached to a
computer. This output is buffered because the instance produces it and then
posts it to a store where the instance&#x27;s owner can retrieve it.

For Windows instances, the instance console output includes output from the
EC2Config service.
     *
     */
    getConsoleOutput(params: EC2.GetConsoleOutputRequest, callback?: (err: any, data: EC2.GetConsoleOutputResult|any) => void): Request<EC2.GetConsoleOutputResult|any,any>;
    /**
     * Retrieve a JPG-format screenshot of a running instance to help with
troubleshooting.

The returned content is Base64-encoded.
     *
     */
    getConsoleScreenshot(params: EC2.GetConsoleScreenshotRequest, callback?: (err: any, data: EC2.GetConsoleScreenshotResult|any) => void): Request<EC2.GetConsoleScreenshotResult|any,any>;
    /**
     * Retrieves the encrypted administrator password for an instance running Windows.

The Windows password is generated at boot if the EC2Config service plugin, 
Ec2SetPassword , is enabled. This usually only happens the first time an AMI is
launched, and then Ec2SetPassword is automatically disabled. The password is not
generated for rebundled AMIs unless Ec2SetPassword is enabled before bundling.

The password is encrypted using the key pair that you specified when you
launched the instance. You must provide the corresponding key pair file.

Password generation and encryption takes a few moments. We recommend that you
wait up to 15 minutes after launching an instance before trying to retrieve the
generated password.
     *
     */
    getPasswordData(params: EC2.GetPasswordDataRequest, callback?: (err: any, data: EC2.GetPasswordDataResult|any) => void): Request<EC2.GetPasswordDataResult|any,any>;
    /**
     * Import single or multi-volume disk images or EBS snapshots into an Amazon
Machine Image (AMI).
     *
     */
    importImage(params: EC2.ImportImageRequest, callback?: (err: any, data: EC2.ImportImageResult|any) => void): Request<EC2.ImportImageResult|any,any>;
    /**
     * Creates an import instance task using metadata from the specified disk image. 
ImportInstance only supports single-volume VMs. To import multi-volume VMs, use 
ImportImage . After importing the image, you then upload it using the 
ec2-import-volume command in the EC2 command line tools. For more information,
see Using the Command Line Tools to Import Your Virtual Machine to Amazon EC2
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UploadingYourInstancesandVolumes.html] 
in the Amazon Elastic Compute Cloud User Guide .

For information about the import manifest referenced by this API action, see VM
Import Manifest
[http://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html] .
     *
     */
    importInstance(params: EC2.ImportInstanceRequest, callback?: (err: any, data: EC2.ImportInstanceResult|any) => void): Request<EC2.ImportInstanceResult|any,any>;
    /**
     * Imports the public key from an RSA key pair that you created with a third-party
tool. Compare this with CreateKeyPair , in which AWS creates the key pair and
gives the keys to you (AWS keeps a copy of the public key). With ImportKeyPair,
you create the key pair and give AWS just the public key. The private key is
never transferred between you and AWS.

For more information about key pairs, see Key Pairs
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html] in the 
Amazon Elastic Compute Cloud User Guide .
     *
     */
    importKeyPair(params: EC2.ImportKeyPairRequest, callback?: (err: any, data: EC2.ImportKeyPairResult|any) => void): Request<EC2.ImportKeyPairResult|any,any>;
    /**
     * Imports a disk into an EBS snapshot.
     *
     */
    importSnapshot(params: EC2.ImportSnapshotRequest, callback?: (err: any, data: EC2.ImportSnapshotResult|any) => void): Request<EC2.ImportSnapshotResult|any,any>;
    /**
     * Creates an import volume task using metadata from the specified disk image.
After importing the image, you then upload it using the ec2-import-volume 
command in the Amazon EC2 command-line interface (CLI) tools. For more
information, see Using the Command Line Tools to Import Your Virtual Machine to
Amazon EC2
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UploadingYourInstancesandVolumes.html] 
in the Amazon Elastic Compute Cloud User Guide .

For information about the import manifest referenced by this API action, see VM
Import Manifest
[http://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html] .
     *
     */
    importVolume(params: EC2.ImportVolumeRequest, callback?: (err: any, data: EC2.ImportVolumeResult|any) => void): Request<EC2.ImportVolumeResult|any,any>;
    /**
     * Modify the auto-placement setting of a Dedicated host. When auto-placement is
enabled, AWS will place instances that you launch with a tenancy of host , but
without targeting a specific host ID, onto any available Dedicated host in your
account which has auto-placement enabled. When auto-placement is disabled, you
need to provide a host ID if you want the instance to launch onto a specific
host. If no host ID is provided, the instance will be launched onto a suitable
host which has auto-placement enabled.
     *
     */
    modifyHosts(params: EC2.ModifyHostsRequest, callback?: (err: any, data: EC2.ModifyHostsResult|any) => void): Request<EC2.ModifyHostsResult|any,any>;
    /**
     * Modifies the ID format for the specified resource on a per-region basis. You can
specify that resources should receive longer IDs (17-character IDs) when they
are created. The following resource types support longer IDs: instance | 
reservation | snapshot | volume .

This setting applies to the IAM user who makes the request; it does not apply to
the entire AWS account. By default, an IAM user defaults to the same settings as
the root user. If you&#x27;re using this action as the root user, then these settings
apply to the entire account, unless an IAM user explicitly overrides these
settings for themselves. For more information, see Resource IDs
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html] in the 
Amazon Elastic Compute Cloud User Guide .

Resources created with longer IDs are visible to all IAM roles and users,
regardless of these settings and provided that they have permission to use the
relevant Describe command for the resource type.
     *
     */
    modifyIdFormat(params: EC2.ModifyIdFormatRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Modifies the ID format of a resource for the specified IAM user, IAM role, or
root user. You can specify that resources should receive longer IDs
(17-character IDs) when they are created. The following resource types support
longer IDs: instance | reservation | snapshot | volume . For more information,
see Resource IDs
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html] in the 
Amazon Elastic Compute Cloud User Guide .

This setting applies to the principal specified in the request; it does not
apply to the principal that makes the request.

Resources created with longer IDs are visible to all IAM roles and users,
regardless of these settings and provided that they have permission to use the
relevant Describe command for the resource type.
     *
     */
    modifyIdentityIdFormat(params: EC2.ModifyIdentityIdFormatRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Modifies the specified attribute of the specified AMI. You can specify only one
attribute at a time.

AWS Marketplace product codes cannot be modified. Images with an AWS Marketplace
product code cannot be made public.
     *
     */
    modifyImageAttribute(params: EC2.ModifyImageAttributeRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Modifies the specified attribute of the specified instance. You can specify only
one attribute at a time.

To modify some attributes, the instance must be stopped. For more information,
see Modifying Attributes of a Stopped Instance
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_ChangingAttributesWhileInstanceStopped.html] 
in the Amazon Elastic Compute Cloud User Guide .
     *
     */
    modifyInstanceAttribute(params: EC2.ModifyInstanceAttributeRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Set the instance affinity value for a specific stopped instance and modify the
instance tenancy setting.

Instance affinity is disabled by default. When instance affinity is host and it
is not associated with a specific Dedicated host, the next time it is launched
it will automatically be associated with the host it lands on. This relationship
will persist if the instance is stopped/started, or rebooted.

You can modify the host ID associated with a stopped instance. If a stopped
instance has a new host ID association, the instance will target that host when
restarted.

You can modify the tenancy of a stopped instance with a tenancy of host or 
dedicated .

Affinity, hostID, and tenancy are not required parameters, but at least one of
them must be specified in the request. Affinity and tenancy can be modified in
the same request, but tenancy can only be modified on instances that are
stopped.
     *
     */
    modifyInstancePlacement(params: EC2.ModifyInstancePlacementRequest, callback?: (err: any, data: EC2.ModifyInstancePlacementResult|any) => void): Request<EC2.ModifyInstancePlacementResult|any,any>;
    /**
     * Modifies the specified network interface attribute. You can specify only one
attribute at a time.
     *
     */
    modifyNetworkInterfaceAttribute(params: EC2.ModifyNetworkInterfaceAttributeRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Modifies the Availability Zone, instance count, instance type, or network
platform (EC2-Classic or EC2-VPC) of your Reserved Instances. The Reserved
Instances to be modified must be identical, except for Availability Zone,
network platform, and instance type.

For more information, see Modifying Reserved Instances
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html] in the
Amazon Elastic Compute Cloud User Guide.
     *
     */
    modifyReservedInstances(params: EC2.ModifyReservedInstancesRequest, callback?: (err: any, data: EC2.ModifyReservedInstancesResult|any) => void): Request<EC2.ModifyReservedInstancesResult|any,any>;
    /**
     * Adds or removes permission settings for the specified snapshot. You may add or
remove specified AWS account IDs from a snapshot&#x27;s list of create volume
permissions, but you cannot do both in a single API call. If you need to both
add and remove account IDs for a snapshot, you must use multiple API calls.

Encrypted snapshots and snapshots with AWS Marketplace product codes cannot be
made public. Snapshots encrypted with your default CMK cannot be shared with
other accounts.

For more information on modifying snapshot permissions, see Sharing Snapshots
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html] 
in the Amazon Elastic Compute Cloud User Guide .
     *
     */
    modifySnapshotAttribute(params: EC2.ModifySnapshotAttributeRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Modifies the specified Spot fleet request.

While the Spot fleet request is being modified, it is in the modifying state.

To scale up your Spot fleet, increase its target capacity. The Spot fleet
launches the additional Spot instances according to the allocation strategy for
the Spot fleet request. If the allocation strategy is lowestPrice , the Spot
fleet launches instances using the Spot pool with the lowest price. If the
allocation strategy is diversified , the Spot fleet distributes the instances
across the Spot pools.

To scale down your Spot fleet, decrease its target capacity. First, the Spot
fleet cancels any open bids that exceed the new target capacity. You can request
that the Spot fleet terminate Spot instances until the size of the fleet no
longer exceeds the new target capacity. If the allocation strategy is 
lowestPrice , the Spot fleet terminates the instances with the highest price per
unit. If the allocation strategy is diversified , the Spot fleet terminates
instances across the Spot pools. Alternatively, you can request that the Spot
fleet keep the fleet at its current size, but not replace any Spot instances
that are interrupted or that you terminate manually.
     *
     */
    modifySpotFleetRequest(params: EC2.ModifySpotFleetRequestRequest, callback?: (err: any, data: EC2.ModifySpotFleetRequestResponse|any) => void): Request<EC2.ModifySpotFleetRequestResponse|any,any>;
    /**
     * Modifies a subnet attribute.
     *
     */
    modifySubnetAttribute(params: EC2.ModifySubnetAttributeRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Modifies a volume attribute.

By default, all I/O operations for the volume are suspended when the data on the
volume is determined to be potentially inconsistent, to prevent undetectable,
latent data corruption. The I/O access to the volume can be resumed by first
enabling I/O access and then checking the data consistency on your volume.

You can change the default behavior to resume I/O operations. We recommend that
you change this only for boot volumes or for volumes that are stateless or
disposable.
     *
     */
    modifyVolumeAttribute(params: EC2.ModifyVolumeAttributeRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Modifies the specified attribute of the specified VPC.
     *
     */
    modifyVpcAttribute(params: EC2.ModifyVpcAttributeRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Modifies attributes of a specified VPC endpoint. You can modify the policy
associated with the endpoint, and you can add and remove route tables associated
with the endpoint.
     *
     */
    modifyVpcEndpoint(params: EC2.ModifyVpcEndpointRequest, callback?: (err: any, data: EC2.ModifyVpcEndpointResult|any) => void): Request<EC2.ModifyVpcEndpointResult|any,any>;
    /**
     * Modifies the VPC peering connection options on one side of a VPC peering
connection. You can do the following:

 &amp;#42; Enable/disable communication over the peering connection between an
   EC2-Classic instance that&#x27;s linked to your VPC (using ClassicLink) and
   instances in the peer VPC.
   
   
 * Enable/disable communication over the peering connection between instances in
   your VPC and an EC2-Classic instance that&#x27;s linked to the peer VPC.
   
   

If the peered VPCs are in different accounts, each owner must initiate a
separate request to enable or disable communication in either direction,
depending on whether their VPC was the requester or accepter for the VPC peering
connection. If the peered VPCs are in the same account, you can modify the
requester and accepter options in the same request. To confirm which VPC is the
accepter and requester for a VPC peering connection, use the 
DescribeVpcPeeringConnections command.
     *
     */
    modifyVpcPeeringConnectionOptions(params: EC2.ModifyVpcPeeringConnectionOptionsRequest, callback?: (err: any, data: EC2.ModifyVpcPeeringConnectionOptionsResult|any) => void): Request<EC2.ModifyVpcPeeringConnectionOptionsResult|any,any>;
    /**
     * Enables monitoring for a running instance. For more information about monitoring
instances, see Monitoring Your Instances and Volumes
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch.html] in
the Amazon Elastic Compute Cloud User Guide .
     *
     */
    monitorInstances(params: EC2.MonitorInstancesRequest, callback?: (err: any, data: EC2.MonitorInstancesResult|any) => void): Request<EC2.MonitorInstancesResult|any,any>;
    /**
     * Moves an Elastic IP address from the EC2-Classic platform to the EC2-VPC
platform. The Elastic IP address must be allocated to your account for more than
24 hours, and it must not be associated with an instance. After the Elastic IP
address is moved, it is no longer available for use in the EC2-Classic platform,
unless you move it back using the RestoreAddressToClassic request. You cannot
move an Elastic IP address that was originally allocated for use in the EC2-VPC
platform to the EC2-Classic platform.
     *
     */
    moveAddressToVpc(params: EC2.MoveAddressToVpcRequest, callback?: (err: any, data: EC2.MoveAddressToVpcResult|any) => void): Request<EC2.MoveAddressToVpcResult|any,any>;
    /**
     * Purchases a Reserved Instance for use with your account. With Reserved
Instances, you obtain a capacity reservation for a certain instance
configuration over a specified period of time and pay a lower hourly rate
compared to On-Demand instance pricing.

Use DescribeReservedInstancesOfferings to get a list of Reserved Instance
offerings that match your specifications. After you&#x27;ve purchased a Reserved
Instance, you can check for your new Reserved Instance with 
DescribeReservedInstances .

For more information, see Reserved Instances
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts-on-demand-reserved-instances.html] 
and Reserved Instance Marketplace
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html] in
the Amazon Elastic Compute Cloud User Guide .
     *
     */
    purchaseReservedInstancesOffering(params: EC2.PurchaseReservedInstancesOfferingRequest, callback?: (err: any, data: EC2.PurchaseReservedInstancesOfferingResult|any) => void): Request<EC2.PurchaseReservedInstancesOfferingResult|any,any>;
    /**
     * Purchases one or more Scheduled Instances with the specified schedule.

Scheduled Instances enable you to purchase Amazon EC2 compute capacity by the
hour for a one-year term. Before you can purchase a Scheduled Instance, you must
call DescribeScheduledInstanceAvailability to check for available schedules and
obtain a purchase token. After you purchase a Scheduled Instance, you must call 
RunScheduledInstances during each scheduled time period.

After you purchase a Scheduled Instance, you can&#x27;t cancel, modify, or resell
your purchase.
     *
     */
    purchaseScheduledInstances(params: EC2.PurchaseScheduledInstancesRequest, callback?: (err: any, data: EC2.PurchaseScheduledInstancesResult|any) => void): Request<EC2.PurchaseScheduledInstancesResult|any,any>;
    /**
     * Requests a reboot of one or more instances. This operation is asynchronous; it
only queues a request to reboot the specified instances. The operation succeeds
if the instances are valid and belong to you. Requests to reboot terminated
instances are ignored.

If an instance does not cleanly shut down within four minutes, Amazon EC2
performs a hard reboot.

For more information about troubleshooting, see Getting Console Output and
Rebooting Instances
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-console.html] in
the Amazon Elastic Compute Cloud User Guide .
     *
     */
    rebootInstances(params: EC2.RebootInstancesRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Registers an AMI. When you&#x27;re creating an AMI, this is the final step you must
complete before you can launch an instance from the AMI. For more information
about creating AMIs, see Creating Your Own AMIs
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami.html] in the 
Amazon Elastic Compute Cloud User Guide .

For Amazon EBS-backed instances, CreateImage creates and registers the AMI in a
single request, so you don&#x27;t have to register the AMI yourself.

You can also use RegisterImage to create an Amazon EBS-backed Linux AMI from a
snapshot of a root device volume. For more information, see Launching an
Instance from a Snapshot
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_LaunchingInstanceFromSnapshot.html] 
in the Amazon Elastic Compute Cloud User Guide .

Some Linux distributions, such as Red Hat Enterprise Linux (RHEL) and SUSE Linux
Enterprise Server (SLES), use the EC2 billingProduct code associated with an AMI
to verify subscription status for package updates. Creating an AMI from an EBS
snapshot does not maintain this billing code, and subsequent instances launched
from such an AMI will not be able to connect to package update infrastructure.

Similarly, although you can create a Windows AMI from a snapshot, you can&#x27;t
successfully launch an instance from the AMI.

To create Windows AMIs or to create AMIs for Linux operating systems that must
retain AMI billing codes to work properly, see CreateImage .

If needed, you can deregister an AMI at any time. Any modifications you make to
an AMI backed by an instance store volume invalidates its registration. If you
make changes to an image, deregister the previous image and register the new
image.

You can&#x27;t register an image where a secondary (non-root) snapshot has AWS
Marketplace product codes.
     *
     */
    registerImage(params: EC2.RegisterImageRequest, callback?: (err: any, data: EC2.RegisterImageResult|any) => void): Request<EC2.RegisterImageResult|any,any>;
    /**
     * Rejects a VPC peering connection request. The VPC peering connection must be in
the pending-acceptance state. Use the DescribeVpcPeeringConnections request to
view your outstanding VPC peering connection requests. To delete an active VPC
peering connection, or to delete a VPC peering connection request that you
initiated, use DeleteVpcPeeringConnection .
     *
     */
    rejectVpcPeeringConnection(params: EC2.RejectVpcPeeringConnectionRequest, callback?: (err: any, data: EC2.RejectVpcPeeringConnectionResult|any) => void): Request<EC2.RejectVpcPeeringConnectionResult|any,any>;
    /**
     * Releases the specified Elastic IP address.

After releasing an Elastic IP address, it is released to the IP address pool and
might be unavailable to you. Be sure to update your DNS records and any servers
or devices that communicate with the address. If you attempt to release an
Elastic IP address that you already released, you&#x27;ll get an AuthFailure error if
the address is already allocated to another AWS account.

[EC2-Classic, default VPC] Releasing an Elastic IP address automatically
disassociates it from any instance that it&#x27;s associated with. To disassociate an
Elastic IP address without releasing it, use DisassociateAddress .

[Nondefault VPC] You must use DisassociateAddress to disassociate the Elastic IP
address before you try to release it. Otherwise, Amazon EC2 returns an error ( 
InvalidIPAddress.InUse ).
     *
     */
    releaseAddress(params: EC2.ReleaseAddressRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * When you no longer want to use a Dedicated host it can be released. On-Demand
billing is stopped and the host goes into released state. The host ID of
Dedicated hosts that have been released can no longer be specified in another
request, e.g., ModifyHosts. You must stop or terminate all instances on a host
before it can be released.

When Dedicated hosts are released, it make take some time for them to stop
counting toward your limit and you may receive capacity errors when trying to
allocate new Dedicated hosts. Try waiting a few minutes, and then try again.

Released hosts will still appear in a DescribeHosts response.
     *
     */
    releaseHosts(params: EC2.ReleaseHostsRequest, callback?: (err: any, data: EC2.ReleaseHostsResult|any) => void): Request<EC2.ReleaseHostsResult|any,any>;
    /**
     * Changes which network ACL a subnet is associated with. By default when you
create a subnet, it&#x27;s automatically associated with the default network ACL. For
more information about network ACLs, see Network ACLs
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_ACLs.html] in the 
Amazon Virtual Private Cloud User Guide .
     *
     */
    replaceNetworkAclAssociation(params: EC2.ReplaceNetworkAclAssociationRequest, callback?: (err: any, data: EC2.ReplaceNetworkAclAssociationResult|any) => void): Request<EC2.ReplaceNetworkAclAssociationResult|any,any>;
    /**
     * Replaces an entry (rule) in a network ACL. For more information about network
ACLs, see Network ACLs
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_ACLs.html] in the 
Amazon Virtual Private Cloud User Guide .
     *
     */
    replaceNetworkAclEntry(params: EC2.ReplaceNetworkAclEntryRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Replaces an existing route within a route table in a VPC. You must provide only
one of the following: Internet gateway or virtual private gateway, NAT instance,
NAT gateway, VPC peering connection, or network interface.

For more information about route tables, see Route Tables
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Route_Tables.html] in
the Amazon Virtual Private Cloud User Guide .
     *
     */
    replaceRoute(params: EC2.ReplaceRouteRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Changes the route table associated with a given subnet in a VPC. After the
operation completes, the subnet uses the routes in the new route table it&#x27;s
associated with. For more information about route tables, see Route Tables
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Route_Tables.html] in
the Amazon Virtual Private Cloud User Guide .

You can also use ReplaceRouteTableAssociation to change which table is the main
route table in the VPC. You just specify the main route table&#x27;s association ID
and the route table to be the new main route table.
     *
     */
    replaceRouteTableAssociation(params: EC2.ReplaceRouteTableAssociationRequest, callback?: (err: any, data: EC2.ReplaceRouteTableAssociationResult|any) => void): Request<EC2.ReplaceRouteTableAssociationResult|any,any>;
    /**
     * Submits feedback about the status of an instance. The instance must be in the 
running state. If your experience with the instance differs from the instance
status returned by DescribeInstanceStatus , use ReportInstanceStatus to report
your experience with the instance. Amazon EC2 collects this information to
improve the accuracy of status checks.

Use of this action does not change the value returned by DescribeInstanceStatus 
.
     *
     */
    reportInstanceStatus(params: EC2.ReportInstanceStatusRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Creates a Spot fleet request.

You can submit a single request that includes multiple launch specifications
that vary by instance type, AMI, Availability Zone, or subnet.

By default, the Spot fleet requests Spot instances in the Spot pool where the
price per unit is the lowest. Each launch specification can include its own
instance weighting that reflects the value of the instance type to your
application workload.

Alternatively, you can specify that the Spot fleet distribute the target
capacity across the Spot pools included in its launch specifications. By
ensuring that the Spot instances in your Spot fleet are in different Spot pools,
you can improve the availability of your fleet.

For more information, see Spot Fleet Requests
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-requests.html] in
the Amazon Elastic Compute Cloud User Guide .
     *
     */
    requestSpotFleet(params: EC2.RequestSpotFleetRequest, callback?: (err: any, data: EC2.RequestSpotFleetResponse|any) => void): Request<EC2.RequestSpotFleetResponse|any,any>;
    /**
     * Creates a Spot instance request. Spot instances are instances that Amazon EC2
launches when the bid price that you specify exceeds the current Spot price.
Amazon EC2 periodically sets the Spot price based on available Spot Instance
capacity and current Spot instance requests. For more information, see Spot
Instance Requests
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-requests.html] in the 
Amazon Elastic Compute Cloud User Guide .
     *
     */
    requestSpotInstances(params: EC2.RequestSpotInstancesRequest, callback?: (err: any, data: EC2.RequestSpotInstancesResult|any) => void): Request<EC2.RequestSpotInstancesResult|any,any>;
    /**
     * Resets an attribute of an AMI to its default value.

The productCodes attribute can&#x27;t be reset.
     *
     */
    resetImageAttribute(params: EC2.ResetImageAttributeRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Resets an attribute of an instance to its default value. To reset the kernel or 
ramdisk , the instance must be in a stopped state. To reset the sourceDestCheck 
, the instance can be either running or stopped.

The sourceDestCheck attribute controls whether source/destination checking is
enabled. The default value is true , which means checking is enabled. This value
must be false for a NAT instance to perform NAT. For more information, see NAT
Instances
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_NAT_Instance.html] in
the Amazon Virtual Private Cloud User Guide .
     *
     */
    resetInstanceAttribute(params: EC2.ResetInstanceAttributeRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Resets a network interface attribute. You can specify only one attribute at a
time.
     *
     */
    resetNetworkInterfaceAttribute(params: EC2.ResetNetworkInterfaceAttributeRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Resets permission settings for the specified snapshot.

For more information on modifying snapshot permissions, see Sharing Snapshots
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html] 
in the Amazon Elastic Compute Cloud User Guide .
     *
     */
    resetSnapshotAttribute(params: EC2.ResetSnapshotAttributeRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Restores an Elastic IP address that was previously moved to the EC2-VPC platform
back to the EC2-Classic platform. You cannot move an Elastic IP address that was
originally allocated for use in EC2-VPC. The Elastic IP address must not be
associated with an instance or network interface.
     *
     */
    restoreAddressToClassic(params: EC2.RestoreAddressToClassicRequest, callback?: (err: any, data: EC2.RestoreAddressToClassicResult|any) => void): Request<EC2.RestoreAddressToClassicResult|any,any>;
    /**
     * [EC2-VPC only] Removes one or more egress rules from a security group for
EC2-VPC. This action doesn&#x27;t apply to security groups for use in EC2-Classic.
The values that you specify in the revoke request (for example, ports) must
match the existing rule&#x27;s values for the rule to be revoked.

Each rule consists of the protocol and the CIDR range or source security group.
For the TCP and UDP protocols, you must also specify the destination port or
range of ports. For the ICMP protocol, you must also specify the ICMP type and
code.

Rule changes are propagated to instances within the security group as quickly as
possible. However, a small delay might occur.
     *
     */
    revokeSecurityGroupEgress(params: EC2.RevokeSecurityGroupEgressRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Removes one or more ingress rules from a security group. The values that you
specify in the revoke request (for example, ports) must match the existing
rule&#x27;s values for the rule to be removed.

Each rule consists of the protocol and the CIDR range or source security group.
For the TCP and UDP protocols, you must also specify the destination port or
range of ports. For the ICMP protocol, you must also specify the ICMP type and
code.

Rule changes are propagated to instances within the security group as quickly as
possible. However, a small delay might occur.
     *
     */
    revokeSecurityGroupIngress(params: EC2.RevokeSecurityGroupIngressRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Launches the specified number of instances using an AMI for which you have
permissions.

When you launch an instance, it enters the pending state. After the instance is
ready for you, it enters the running state. To check the state of your instance,
call DescribeInstances .

To ensure faster instance launches, break up large requests into smaller
batches. For example, create five separate launch requests for 100 instances
each instead of one launch request for 500 instances.

To tag your instance, ensure that it is running as CreateTags requires a
resource ID. For more information about tagging, see Tagging Your Amazon EC2
Resources [http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html] .

If you don&#x27;t specify a security group when launching an instance, Amazon EC2
uses the default security group. For more information, see Security Groups
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html] 
in the Amazon Elastic Compute Cloud User Guide .

[EC2-VPC only accounts] If you don&#x27;t specify a subnet in the request, we choose
a default subnet from your default VPC for you.

[EC2-Classic accounts] If you&#x27;re launching into EC2-Classic and you don&#x27;t
specify an Availability Zone, we choose one for you.

Linux instances have access to the public key of the key pair at boot. You can
use this key to provide secure access to the instance. Amazon EC2 public images
use this feature to provide secure access without passwords. For more
information, see Key Pairs
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html] in the 
Amazon Elastic Compute Cloud User Guide .

You can provide optional user data when launching an instance. For more
information, see Instance Metadata
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html] 
in the Amazon Elastic Compute Cloud User Guide .

If any of the AMIs have a product code attached for which the user has not
subscribed, RunInstances fails.

Some instance types can only be launched into a VPC. If you do not have a
default VPC, or if you do not specify a subnet ID in the request, RunInstances 
fails. For more information, see Instance Types Available Only in a VPC
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-vpc.html#vpc-only-instance-types] 
.

For more information about troubleshooting, see What To Do If An Instance
Immediately Terminates
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_InstanceStraightToTerminated.html] 
, and Troubleshooting Connecting to Your Instance
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesConnecting.html] 
in the Amazon Elastic Compute Cloud User Guide .
     *
     */
    runInstances(params: EC2.RunInstancesRequest, callback?: (err: any, data: EC2.Reservation|any) => void): Request<EC2.Reservation|any,any>;
    /**
     * Launches the specified Scheduled Instances.

Before you can launch a Scheduled Instance, you must purchase it and obtain an
identifier using PurchaseScheduledInstances .

You must launch a Scheduled Instance during its scheduled time period. You can&#x27;t
stop or reboot a Scheduled Instance, but you can terminate it as needed. If you
terminate a Scheduled Instance before the current scheduled time period ends,
you can launch it again after a few minutes. For more information, see Scheduled
Instances
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-scheduled-instances.html] 
in the Amazon Elastic Compute Cloud User Guide .
     *
     */
    runScheduledInstances(params: EC2.RunScheduledInstancesRequest, callback?: (err: any, data: EC2.RunScheduledInstancesResult|any) => void): Request<EC2.RunScheduledInstancesResult|any,any>;
    /**
     * Starts an Amazon EBS-backed AMI that you&#x27;ve previously stopped.

Instances that use Amazon EBS volumes as their root devices can be quickly
stopped and started. When an instance is stopped, the compute resources are
released and you are not billed for hourly instance usage. However, your root
partition Amazon EBS volume remains, continues to persist your data, and you are
charged for Amazon EBS volume usage. You can restart your instance at any time.
Each time you transition an instance from stopped to started, Amazon EC2 charges
a full instance hour, even if transitions happen multiple times within a single
hour.

Before stopping an instance, make sure it is in a state from which it can be
restarted. Stopping an instance does not preserve data stored in RAM.

Performing this operation on an instance that uses an instance store as its root
device returns an error.

For more information, see Stopping Instances
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html] in the 
Amazon Elastic Compute Cloud User Guide .
     *
     */
    startInstances(params: EC2.StartInstancesRequest, callback?: (err: any, data: EC2.StartInstancesResult|any) => void): Request<EC2.StartInstancesResult|any,any>;
    /**
     * Stops an Amazon EBS-backed instance.

We don&#x27;t charge hourly usage for a stopped instance, or data transfer fees;
however, your root partition Amazon EBS volume remains, continues to persist
your data, and you are charged for Amazon EBS volume usage. Each time you
transition an instance from stopped to started, Amazon EC2 charges a full
instance hour, even if transitions happen multiple times within a single hour.

You can&#x27;t start or stop Spot instances, and you can&#x27;t stop instance store-backed
instances.

When you stop an instance, we shut it down. You can restart your instance at any
time. Before stopping an instance, make sure it is in a state from which it can
be restarted. Stopping an instance does not preserve data stored in RAM.

Stopping an instance is different to rebooting or terminating it. For example,
when you stop an instance, the root device and any other devices attached to the
instance persist. When you terminate an instance, the root device and any other
devices attached during the instance launch are automatically deleted. For more
information about the differences between rebooting, stopping, and terminating
instances, see Instance Lifecycle
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html] 
in the Amazon Elastic Compute Cloud User Guide .

When you stop an instance, we attempt to shut it down forcibly after a short
while. If your instance appears stuck in the stopping state after a period of
time, there may be an issue with the underlying host computer. For more
information, see Troubleshooting Stopping Your Instance
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesStopping.html] 
in the Amazon Elastic Compute Cloud User Guide .
     *
     */
    stopInstances(params: EC2.StopInstancesRequest, callback?: (err: any, data: EC2.StopInstancesResult|any) => void): Request<EC2.StopInstancesResult|any,any>;
    /**
     * Shuts down one or more instances. This operation is idempotent; if you terminate
an instance more than once, each call succeeds.

Terminated instances remain visible after termination (for approximately one
hour).

By default, Amazon EC2 deletes all EBS volumes that were attached when the
instance launched. Volumes attached after instance launch continue running.

You can stop, start, and terminate EBS-backed instances. You can only terminate
instance store-backed instances. What happens to an instance differs if you stop
it or terminate it. For example, when you stop an instance, the root device and
any other devices attached to the instance persist. When you terminate an
instance, any attached EBS volumes with the DeleteOnTermination block device
mapping parameter set to true are automatically deleted. For more information
about the differences between stopping and terminating instances, see Instance
Lifecycle
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html] 
in the Amazon Elastic Compute Cloud User Guide .

For more information about troubleshooting, see Troubleshooting Terminating Your
Instance
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesShuttingDown.html] 
in the Amazon Elastic Compute Cloud User Guide .
     *
     */
    terminateInstances(params: EC2.TerminateInstancesRequest, callback?: (err: any, data: EC2.TerminateInstancesResult|any) => void): Request<EC2.TerminateInstancesResult|any,any>;
    /**
     * Unassigns one or more secondary private IP addresses from a network interface.
     *
     */
    unassignPrivateIpAddresses(params: EC2.UnassignPrivateIpAddressesRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Disables monitoring for a running instance. For more information about
monitoring instances, see Monitoring Your Instances and Volumes
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch.html] in
the Amazon Elastic Compute Cloud User Guide .
     *
     */
    unmonitorInstances(params: EC2.UnmonitorInstancesRequest, callback?: (err: any, data: EC2.UnmonitorInstancesResult|any) => void): Request<EC2.UnmonitorInstancesResult|any,any>;

  }

  export module EC2 {
    
    export type AccountAttributeList = AccountAttribute[];
    
    export type AccountAttributeName = string;
    
    export type AccountAttributeNameStringList = AccountAttributeName[];
    
    export type AccountAttributeValueList = AccountAttributeValue[];
    
    export type ActiveInstanceSet = ActiveInstance[];
    
    export type AddressList = Address[];
    
    export type Affinity = string;
    
    export type AllocationIdList = String[];
    
    export type AllocationState = string;
    
    export type AllocationStrategy = string;
    
    export type ArchitectureValues = string;
    
    export type AttachmentStatus = string;
    
    export type AutoPlacement = string;
    
    export type AvailabilityZoneList = AvailabilityZone[];
    
    export type AvailabilityZoneMessageList = AvailabilityZoneMessage[];
    
    export type AvailabilityZoneState = string;
    
    export type AvailableInstanceCapacityList = InstanceCapacity[];
    
    export type BatchState = string;
    
    export type Blob = any;
    
    export type BlockDeviceMappingList = BlockDeviceMapping[];
    
    export type BlockDeviceMappingRequestList = BlockDeviceMapping[];
    
    export type Boolean = boolean;
    
    export type BundleIdStringList = String[];
    
    export type BundleTaskList = BundleTask[];
    
    export type BundleTaskState = string;
    
    export type CancelBatchErrorCode = string;
    
    export type CancelSpotFleetRequestsErrorSet = CancelSpotFleetRequestsErrorItem[];
    
    export type CancelSpotFleetRequestsSuccessSet = CancelSpotFleetRequestsSuccessItem[];
    
    export type CancelSpotInstanceRequestState = string;
    
    export type CancelledSpotInstanceRequestList = CancelledSpotInstanceRequest[];
    
    export type ClassicLinkDnsSupportList = ClassicLinkDnsSupport[];
    
    export type ClassicLinkInstanceList = ClassicLinkInstance[];
    
    export type ContainerFormat = string;
    
    export type ConversionIdStringList = String[];
    
    export type ConversionTaskState = string;
    
    export type CreateVolumePermissionList = CreateVolumePermission[];
    
    export type CurrencyCodeValues = string;
    
    export type CustomerGatewayIdStringList = String[];
    
    export type CustomerGatewayList = CustomerGateway[];
    
    export type DatafeedSubscriptionState = string;
    
    export type DateTime = number;
    
    export type DescribeConversionTaskList = ConversionTask[];
    
    export type DeviceType = string;
    
    export type DhcpConfigurationList = DhcpConfiguration[];
    
    export type DhcpConfigurationValueList = AttributeValue[];
    
    export type DhcpOptionsIdStringList = String[];
    
    export type DhcpOptionsList = DhcpOptions[];
    
    export type DiskImageFormat = string;
    
    export type DiskImageList = DiskImage[];
    
    export type DomainType = string;
    
    export type Double = number;
    
    export type EventCode = string;
    
    export type EventType = string;
    
    export type ExcessCapacityTerminationPolicy = string;
    
    export type ExecutableByStringList = String[];
    
    export type ExportEnvironment = string;
    
    export type ExportTaskIdStringList = String[];
    
    export type ExportTaskList = ExportTask[];
    
    export type ExportTaskState = string;
    
    export type FilterList = Filter[];
    
    export type FleetType = string;
    
    export type Float = number;
    
    export type FlowLogSet = FlowLog[];
    
    export type FlowLogsResourceType = string;
    
    export type GatewayType = string;
    
    export type GroupIdStringList = String[];
    
    export type GroupIdentifierList = GroupIdentifier[];
    
    export type GroupIds = String[];
    
    export type GroupNameStringList = String[];
    
    export type HistoryRecords = HistoryRecord[];
    
    export type HostInstanceList = HostInstance[];
    
    export type HostList = Host[];
    
    export type HostTenancy = string;
    
    export type HypervisorType = string;
    
    export type IdFormatList = IdFormat[];
    
    export type ImageAttributeName = string;
    
    export type ImageDiskContainerList = ImageDiskContainer[];
    
    export type ImageIdStringList = String[];
    
    export type ImageList = Image[];
    
    export type ImageState = string;
    
    export type ImageTypeValues = string;
    
    export type ImportImageTaskList = ImportImageTask[];
    
    export type ImportInstanceVolumeDetailSet = ImportInstanceVolumeDetailItem[];
    
    export type ImportSnapshotTaskList = ImportSnapshotTask[];
    
    export type ImportTaskIdList = String[];
    
    export type InstanceAttributeName = string;
    
    export type InstanceBlockDeviceMappingList = InstanceBlockDeviceMapping[];
    
    export type InstanceBlockDeviceMappingSpecificationList = InstanceBlockDeviceMappingSpecification[];
    
    export type InstanceCountList = InstanceCount[];
    
    export type InstanceIdSet = String[];
    
    export type InstanceIdStringList = String[];
    
    export type InstanceLifecycleType = string;
    
    export type InstanceList = Instance[];
    
    export type InstanceMonitoringList = InstanceMonitoring[];
    
    export type InstanceNetworkInterfaceList = InstanceNetworkInterface[];
    
    export type InstanceNetworkInterfaceSpecificationList = InstanceNetworkInterfaceSpecification[];
    
    export type InstancePrivateIpAddressList = InstancePrivateIpAddress[];
    
    export type InstanceStateChangeList = InstanceStateChange[];
    
    export type InstanceStateName = string;
    
    export type InstanceStatusDetailsList = InstanceStatusDetails[];
    
    export type InstanceStatusEventList = InstanceStatusEvent[];
    
    export type InstanceStatusList = InstanceStatus[];
    
    export type InstanceType = string;
    
    export type InstanceTypeList = InstanceType[];
    
    export type Integer = number;
    
    export type InternetGatewayAttachmentList = InternetGatewayAttachment[];
    
    export type InternetGatewayList = InternetGateway[];
    
    export type IpPermissionList = IpPermission[];
    
    export type IpRangeList = IpRange[];
    
    export type IpRanges = String[];
    
    export type KeyNameStringList = String[];
    
    export type KeyPairList = KeyPairInfo[];
    
    export type LaunchPermissionList = LaunchPermission[];
    
    export type LaunchSpecsList = SpotFleetLaunchSpecification[];
    
    export type ListingState = string;
    
    export type ListingStatus = string;
    
    export type Long = number;
    
    export type MaxResults = number;
    
    export type MonitoringState = string;
    
    export type MoveStatus = string;
    
    export type MovingAddressStatusSet = MovingAddressStatus[];
    
    export type NatGatewayAddressList = NatGatewayAddress[];
    
    export type NatGatewayList = NatGateway[];
    
    export type NatGatewayState = string;
    
    export type NetworkAclAssociationList = NetworkAclAssociation[];
    
    export type NetworkAclEntryList = NetworkAclEntry[];
    
    export type NetworkAclList = NetworkAcl[];
    
    export type NetworkInterfaceAttribute = string;
    
    export type NetworkInterfaceIdList = String[];
    
    export type NetworkInterfaceList = NetworkInterface[];
    
    export type NetworkInterfacePrivateIpAddressList = NetworkInterfacePrivateIpAddress[];
    
    export type NetworkInterfaceStatus = string;
    
    export type NetworkInterfaceType = string;
    
    export type NewDhcpConfigurationList = NewDhcpConfiguration[];
    
    export type NextToken = string;
    
    export type OccurrenceDayRequestSet = Integer[];
    
    export type OccurrenceDaySet = Integer[];
    
    export type OfferingTypeValues = string;
    
    export type OperationType = string;
    
    export type OwnerStringList = String[];
    
    export type PermissionGroup = string;
    
    export type PlacementGroupList = PlacementGroup[];
    
    export type PlacementGroupState = string;
    
    export type PlacementGroupStringList = String[];
    
    export type PlacementStrategy = string;
    
    export type PlatformValues = string;
    
    export type PrefixListIdList = PrefixListId[];
    
    export type PrefixListIdSet = String[];
    
    export type PrefixListSet = PrefixList[];
    
    export type PriceScheduleList = PriceSchedule[];
    
    export type PriceScheduleSpecificationList = PriceScheduleSpecification[];
    
    export type PricingDetailsList = PricingDetail[];
    
    export type PrivateIpAddressConfigSet = ScheduledInstancesPrivateIpAddressConfig[];
    
    export type PrivateIpAddressSpecificationList = PrivateIpAddressSpecification[];
    
    export type PrivateIpAddressStringList = String[];
    
    export type ProductCodeList = ProductCode[];
    
    export type ProductCodeStringList = String[];
    
    export type ProductCodeValues = string;
    
    export type ProductDescriptionList = String[];
    
    export type PropagatingVgwList = PropagatingVgw[];
    
    export type PublicIpStringList = String[];
    
    export type PurchaseRequestSet = PurchaseRequest[];
    
    export type PurchasedScheduledInstanceSet = ScheduledInstance[];
    
    export type RIProductDescription = string;
    
    export type ReasonCodesList = ReportInstanceReasonCodes[];
    
    export type RecurringChargeFrequency = string;
    
    export type RecurringChargesList = RecurringCharge[];
    
    export type RegionList = Region[];
    
    export type RegionNameStringList = String[];
    
    export type ReportInstanceReasonCodes = string;
    
    export type ReportStatusType = string;
    
    export type RequestHostIdList = String[];
    
    export type ReservationList = Reservation[];
    
    export type ReservedInstanceState = string;
    
    export type ReservedInstancesConfigurationList = ReservedInstancesConfiguration[];
    
    export type ReservedInstancesIdStringList = String[];
    
    export type ReservedInstancesList = ReservedInstances[];
    
    export type ReservedInstancesListingList = ReservedInstancesListing[];
    
    export type ReservedInstancesModificationIdStringList = String[];
    
    export type ReservedInstancesModificationList = ReservedInstancesModification[];
    
    export type ReservedInstancesModificationResultList = ReservedInstancesModificationResult[];
    
    export type ReservedInstancesOfferingIdStringList = String[];
    
    export type ReservedInstancesOfferingList = ReservedInstancesOffering[];
    
    export type ReservedIntancesIds = ReservedInstancesId[];
    
    export type ResetImageAttributeName = string;
    
    export type ResourceIdList = String[];
    
    export type ResourceType = string;
    
    export type ResponseHostIdList = String[];
    
    export type RestorableByStringList = String[];
    
    export type RouteList = Route[];
    
    export type RouteOrigin = string;
    
    export type RouteState = string;
    
    export type RouteTableAssociationList = RouteTableAssociation[];
    
    export type RouteTableList = RouteTable[];
    
    export type RuleAction = string;
    
    export type ScheduledInstanceAvailabilitySet = ScheduledInstanceAvailability[];
    
    export type ScheduledInstanceIdRequestSet = String[];
    
    export type ScheduledInstanceSet = ScheduledInstance[];
    
    export type ScheduledInstancesBlockDeviceMappingSet = ScheduledInstancesBlockDeviceMapping[];
    
    export type ScheduledInstancesNetworkInterfaceSet = ScheduledInstancesNetworkInterface[];
    
    export type ScheduledInstancesSecurityGroupIdSet = String[];
    
    export type SecurityGroupIdStringList = String[];
    
    export type SecurityGroupList = SecurityGroup[];
    
    export type SecurityGroupReferences = SecurityGroupReference[];
    
    export type SecurityGroupStringList = String[];
    
    export type ShutdownBehavior = string;
    
    export type SnapshotAttributeName = string;
    
    export type SnapshotDetailList = SnapshotDetail[];
    
    export type SnapshotIdStringList = String[];
    
    export type SnapshotList = Snapshot[];
    
    export type SnapshotState = string;
    
    export type SpotFleetRequestConfigSet = SpotFleetRequestConfig[];
    
    export type SpotInstanceRequestIdList = String[];
    
    export type SpotInstanceRequestList = SpotInstanceRequest[];
    
    export type SpotInstanceState = string;
    
    export type SpotInstanceType = string;
    
    export type SpotPriceHistoryList = SpotPrice[];
    
    export type StaleIpPermissionSet = StaleIpPermission[];
    
    export type StaleSecurityGroupSet = StaleSecurityGroup[];
    
    export type State = string;
    
    export type Status = string;
    
    export type StatusName = string;
    
    export type StatusType = string;
    
    export type String = string;
    
    export type SubnetIdStringList = String[];
    
    export type SubnetList = Subnet[];
    
    export type SubnetState = string;
    
    export type SummaryStatus = string;
    
    export type TagDescriptionList = TagDescription[];
    
    export type TagList = Tag[];
    
    export type TelemetryStatus = string;
    
    export type Tenancy = string;
    
    export type TrafficType = string;
    
    export type UnsuccessfulItemList = UnsuccessfulItem[];
    
    export type UnsuccessfulItemSet = UnsuccessfulItem[];
    
    export type UserGroupStringList = String[];
    
    export type UserIdGroupPairList = UserIdGroupPair[];
    
    export type UserIdGroupPairSet = UserIdGroupPair[];
    
    export type UserIdStringList = String[];
    
    export type ValueStringList = String[];
    
    export type VgwTelemetryList = VgwTelemetry[];
    
    export type VirtualizationType = string;
    
    export type VolumeAttachmentList = VolumeAttachment[];
    
    export type VolumeAttachmentState = string;
    
    export type VolumeAttributeName = string;
    
    export type VolumeIdStringList = String[];
    
    export type VolumeList = Volume[];
    
    export type VolumeState = string;
    
    export type VolumeStatusActionsList = VolumeStatusAction[];
    
    export type VolumeStatusDetailsList = VolumeStatusDetails[];
    
    export type VolumeStatusEventsList = VolumeStatusEvent[];
    
    export type VolumeStatusInfoStatus = string;
    
    export type VolumeStatusList = VolumeStatusItem[];
    
    export type VolumeStatusName = string;
    
    export type VolumeType = string;
    
    export type VpcAttachmentList = VpcAttachment[];
    
    export type VpcAttributeName = string;
    
    export type VpcClassicLinkIdList = String[];
    
    export type VpcClassicLinkList = VpcClassicLink[];
    
    export type VpcEndpointSet = VpcEndpoint[];
    
    export type VpcIdStringList = String[];
    
    export type VpcList = Vpc[];
    
    export type VpcPeeringConnectionList = VpcPeeringConnection[];
    
    export type VpcPeeringConnectionStateReasonCode = string;
    
    export type VpcState = string;
    
    export type VpnConnectionIdStringList = String[];
    
    export type VpnConnectionList = VpnConnection[];
    
    export type VpnGatewayIdStringList = String[];
    
    export type VpnGatewayList = VpnGateway[];
    
    export type VpnState = string;
    
    export type VpnStaticRouteList = VpnStaticRoute[];
    
    export type VpnStaticRouteSource = string;
    
    export type ZoneNameStringList = String[];

    export interface AcceptVpcPeeringConnectionRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the VPC peering connection. **/
        VpcPeeringConnectionId?: String;
    }
    export interface AcceptVpcPeeringConnectionResult {
        /** Information about the VPC peering connection. **/
        VpcPeeringConnection?: VpcPeeringConnection;
    }
    export interface AccountAttribute {
        /** The name of the account attribute. **/
        AttributeName?: String;
        /** One or more values for the account attribute. **/
        AttributeValues?: AccountAttributeValueList;
    }
    export interface AccountAttributeValue {
        /** The value of the attribute. **/
        AttributeValue?: String;
    }
    export interface ActiveInstance {
        /** The instance type. **/
        InstanceType?: String;
        /** The ID of the instance. **/
        InstanceId?: String;
        /** The ID of the Spot instance request. **/
        SpotInstanceRequestId?: String;
    }
    export interface Address {
        /** The ID of the instance that the address is associated with (if any). **/
        InstanceId?: String;
        /** The Elastic IP address. **/
        PublicIp?: String;
        /** The ID representing the allocation of the address for use with EC2-VPC. **/
        AllocationId?: String;
        /** The ID representing the association of the address with an instance in a VPC. **/
        AssociationId?: String;
        /** Indicates whether this Elastic IP address is for use with instances in
EC2-Classic ( standard ) or instances in a VPC ( vpc ). **/
        Domain?: DomainType;
        /** The ID of the network interface. **/
        NetworkInterfaceId?: String;
        /** The ID of the AWS account that owns the network interface. **/
        NetworkInterfaceOwnerId?: String;
        /** The private IP address associated with the Elastic IP address. **/
        PrivateIpAddress?: String;
    }
    export interface AllocateAddressRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** Set to vpc to allocate the address for use with instances in a VPC.

Default: The address is for use with instances in EC2-Classic. **/
        Domain?: DomainType;
    }
    export interface AllocateAddressResult {
        /** The Elastic IP address. **/
        PublicIp?: String;
        /** Indicates whether this Elastic IP address is for use with instances in
EC2-Classic ( standard ) or instances in a VPC ( vpc ). **/
        Domain?: DomainType;
        /** [EC2-VPC] The ID that AWS assigns to represent the allocation of the Elastic IP
address for use with instances in a VPC. **/
        AllocationId?: String;
    }
    export interface AllocateHostsRequest {
        /** This is enabled by default. This property allows instances to be automatically
placed onto available Dedicated hosts, when you are launching instances without
specifying a host ID.

Default: Enabled **/
        AutoPlacement?: AutoPlacement;
        /** Unique, case-sensitive identifier you provide to ensure idempotency of the
request. For more information, see How to Ensure Idempotency
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html] 
in the Amazon Elastic Compute Cloud User Guide . **/
        ClientToken?: String;
        /** Specify the instance type that you want your Dedicated hosts to be configured
for. When you specify the instance type, that is the only instance type that you
can launch onto that host. **/
        InstanceType: String;
        /** The number of Dedicated hosts you want to allocate to your account with these
parameters. **/
        Quantity: Integer;
        /** The Availability Zone for the Dedicated hosts. **/
        AvailabilityZone: String;
    }
    export interface AllocateHostsResult {
        /** The ID of the allocated Dedicated host. This is used when you want to launch an
instance onto a specific host. **/
        HostIds?: ResponseHostIdList;
    }
    export interface AssignPrivateIpAddressesRequest {
        /** The ID of the network interface. **/
        NetworkInterfaceId: String;
        /** One or more IP addresses to be assigned as a secondary private IP address to the
network interface. You can&#x27;t specify this parameter when also specifying a
number of secondary IP addresses.

If you don&#x27;t specify an IP address, Amazon EC2 automatically selects an IP
address within the subnet range. **/
        PrivateIpAddresses?: PrivateIpAddressStringList;
        /** The number of secondary IP addresses to assign to the network interface. You
can&#x27;t specify this parameter when also specifying private IP addresses. **/
        SecondaryPrivateIpAddressCount?: Integer;
        /** Indicates whether to allow an IP address that is already assigned to another
network interface or instance to be reassigned to the specified network
interface. **/
        AllowReassignment?: Boolean;
    }
    export interface AssociateAddressRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the instance. This is required for EC2-Classic. For EC2-VPC, you can
specify either the instance ID or the network interface ID, but not both. The
operation fails if you specify an instance ID unless exactly one network
interface is attached. **/
        InstanceId?: String;
        /** The Elastic IP address. This is required for EC2-Classic. **/
        PublicIp?: String;
        /** [EC2-VPC] The allocation ID. This is required for EC2-VPC. **/
        AllocationId?: String;
        /** [EC2-VPC] The ID of the network interface. If the instance has more than one
network interface, you must specify a network interface ID. **/
        NetworkInterfaceId?: String;
        /** [EC2-VPC] The primary or secondary private IP address to associate with the
Elastic IP address. If no private IP address is specified, the Elastic IP
address is associated with the primary private IP address. **/
        PrivateIpAddress?: String;
        /** [EC2-VPC] For a VPC in an EC2-Classic account, specify true to allow an Elastic
IP address that is already associated with an instance or network interface to
be reassociated with the specified instance or network interface. Otherwise, the
operation fails. In a VPC in an EC2-VPC-only account, reassociation is
automatic, therefore you can specify false to ensure the operation fails if the
Elastic IP address is already associated with another resource. **/
        AllowReassociation?: Boolean;
    }
    export interface AssociateAddressResult {
        /** [EC2-VPC] The ID that represents the association of the Elastic IP address with
an instance. **/
        AssociationId?: String;
    }
    export interface AssociateDhcpOptionsRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the DHCP options set, or default to associate no DHCP options with the
VPC. **/
        DhcpOptionsId: String;
        /** The ID of the VPC. **/
        VpcId: String;
    }
    export interface AssociateRouteTableRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the subnet. **/
        SubnetId: String;
        /** The ID of the route table. **/
        RouteTableId: String;
    }
    export interface AssociateRouteTableResult {
        /** The route table association ID (needed to disassociate the route table). **/
        AssociationId?: String;
    }
    export interface AttachClassicLinkVpcRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of an EC2-Classic instance to link to the ClassicLink-enabled VPC. **/
        InstanceId: String;
        /** The ID of a ClassicLink-enabled VPC. **/
        VpcId: String;
        /** The ID of one or more of the VPC&#x27;s security groups. You cannot specify security
groups from a different VPC. **/
        Groups: GroupIdStringList;
    }
    export interface AttachClassicLinkVpcResult {
        /** Returns true if the request succeeds; otherwise, it returns an error. **/
        Return?: Boolean;
    }
    export interface AttachInternetGatewayRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the Internet gateway. **/
        InternetGatewayId: String;
        /** The ID of the VPC. **/
        VpcId: String;
    }
    export interface AttachNetworkInterfaceRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the network interface. **/
        NetworkInterfaceId: String;
        /** The ID of the instance. **/
        InstanceId: String;
        /** The index of the device for the network interface attachment. **/
        DeviceIndex: Integer;
    }
    export interface AttachNetworkInterfaceResult {
        /** The ID of the network interface attachment. **/
        AttachmentId?: String;
    }
    export interface AttachVolumeRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the EBS volume. The volume and instance must be within the same
Availability Zone. **/
        VolumeId: String;
        /** The ID of the instance. **/
        InstanceId: String;
        /** The device name to expose to the instance (for example, /dev/sdh or xvdh ). **/
        Device: String;
    }
    export interface AttachVpnGatewayRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the virtual private gateway. **/
        VpnGatewayId: String;
        /** The ID of the VPC. **/
        VpcId: String;
    }
    export interface AttachVpnGatewayResult {
        /** Information about the attachment. **/
        VpcAttachment?: VpcAttachment;
    }
    export interface AttributeBooleanValue {
        /** The attribute value. The valid values are true or false . **/
        Value?: Boolean;
    }
    export interface AttributeValue {
        /** The attribute value. Note that the value is case-sensitive. **/
        Value?: String;
    }
    export interface AuthorizeSecurityGroupEgressRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the security group. **/
        GroupId: String;
        /** The name of a destination security group. To authorize outbound access to a
destination security group, we recommend that you use a set of IP permissions
instead. **/
        SourceSecurityGroupName?: String;
        /** The AWS account number for a destination security group. To authorize outbound
access to a destination security group, we recommend that you use a set of IP
permissions instead. **/
        SourceSecurityGroupOwnerId?: String;
        /** The IP protocol name or number. We recommend that you specify the protocol in a
set of IP permissions instead. **/
        IpProtocol?: String;
        /** The start of port range for the TCP and UDP protocols, or an ICMP type number.
We recommend that you specify the port range in a set of IP permissions instead. **/
        FromPort?: Integer;
        /** The end of port range for the TCP and UDP protocols, or an ICMP type number. We
recommend that you specify the port range in a set of IP permissions instead. **/
        ToPort?: Integer;
        /** The CIDR IP address range. We recommend that you specify the CIDR range in a set
of IP permissions instead. **/
        CidrIp?: String;
        /** A set of IP permissions. You can&#x27;t specify a destination security group and a
CIDR IP address range. **/
        IpPermissions?: IpPermissionList;
    }
    export interface AuthorizeSecurityGroupIngressRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** [EC2-Classic, default VPC] The name of the security group. **/
        GroupName?: String;
        /** The ID of the security group. Required for a nondefault VPC. **/
        GroupId?: String;
        /** [EC2-Classic, default VPC] The name of the source security group. You can&#x27;t
specify this parameter in combination with the following parameters: the CIDR IP
address range, the start of the port range, the IP protocol, and the end of the
port range. Creates rules that grant full ICMP, UDP, and TCP access. To create a
rule with a specific IP protocol and port range, use a set of IP permissions
instead. For EC2-VPC, the source security group must be in the same VPC. **/
        SourceSecurityGroupName?: String;
        /** [EC2-Classic] The AWS account number for the source security group, if the
source security group is in a different account. You can&#x27;t specify this
parameter in combination with the following parameters: the CIDR IP address
range, the IP protocol, the start of the port range, and the end of the port
range. Creates rules that grant full ICMP, UDP, and TCP access. To create a rule
with a specific IP protocol and port range, use a set of IP permissions instead. **/
        SourceSecurityGroupOwnerId?: String;
        /** The IP protocol name ( tcp , udp , icmp ) or number (see Protocol Numbers
[http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml] ).
(VPC only) Use -1 to specify all. **/
        IpProtocol?: String;
        /** The start of port range for the TCP and UDP protocols, or an ICMP type number.
For the ICMP type number, use -1 to specify all ICMP types. **/
        FromPort?: Integer;
        /** The end of port range for the TCP and UDP protocols, or an ICMP code number. For
the ICMP code number, use -1 to specify all ICMP codes for the ICMP type. **/
        ToPort?: Integer;
        /** The CIDR IP address range. You can&#x27;t specify this parameter when specifying a
source security group. **/
        CidrIp?: String;
        /** A set of IP permissions. Can be used to specify multiple rules in a single
command. **/
        IpPermissions?: IpPermissionList;
    }
    export interface AvailabilityZone {
        /** The name of the Availability Zone. **/
        ZoneName?: String;
        /** The state of the Availability Zone. **/
        State?: AvailabilityZoneState;
        /** The name of the region. **/
        RegionName?: String;
        /** Any messages about the Availability Zone. **/
        Messages?: AvailabilityZoneMessageList;
    }
    export interface AvailabilityZoneMessage {
        /** The message about the Availability Zone. **/
        Message?: String;
    }
    export interface AvailableCapacity {
        /** The total number of instances that the Dedicated host supports. **/
        AvailableInstanceCapacity?: AvailableInstanceCapacityList;
        /** The number of vCPUs available on the Dedicated host. **/
        AvailableVCpus?: Integer;
    }
    export interface BlobAttributeValue {
        Value?: Blob;
    }
    export interface BlockDeviceMapping {
        /** The virtual device name ( ephemeral N). Instance store volumes are numbered
starting from 0. An instance type with 2 available instance store volumes can
specify mappings for ephemeral0 and ephemeral1 .The number of available instance
store volumes depends on the instance type. After you connect to the instance,
you must mount the volume.

Constraints: For M3 instances, you must specify instance store volumes in the
block device mapping for the instance. When you launch an M3 instance, we ignore
any instance store volumes specified in the block device mapping for the AMI. **/
        VirtualName?: String;
        /** The device name exposed to the instance (for example, /dev/sdh or xvdh ). **/
        DeviceName?: String;
        /** Parameters used to automatically set up EBS volumes when the instance is
launched. **/
        Ebs?: EbsBlockDevice;
        /** Suppresses the specified device included in the block device mapping of the AMI. **/
        NoDevice?: String;
    }
    export interface BundleInstanceRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the instance to bundle.

Type: String

Default: None

Required: Yes **/
        InstanceId: String;
        /** The bucket in which to store the AMI. You can specify a bucket that you already
own or a new bucket that Amazon EC2 creates on your behalf. If you specify a
bucket that belongs to someone else, Amazon EC2 returns an error. **/
        Storage: Storage;
    }
    export interface BundleInstanceResult {
        /** Information about the bundle task. **/
        BundleTask?: BundleTask;
    }
    export interface BundleTask {
        /** The ID of the instance associated with this bundle task. **/
        InstanceId?: String;
        /** The ID of the bundle task. **/
        BundleId?: String;
        /** The state of the task. **/
        State?: BundleTaskState;
        /** The time this task started. **/
        StartTime?: DateTime;
        /** The time of the most recent update for the task. **/
        UpdateTime?: DateTime;
        /** The Amazon S3 storage locations. **/
        Storage?: Storage;
        /** The level of task completion, as a percent (for example, 20%). **/
        Progress?: String;
        /** If the task fails, a description of the error. **/
        BundleTaskError?: BundleTaskError;
    }
    export interface BundleTaskError {
        /** The error code. **/
        Code?: String;
        /** The error message. **/
        Message?: String;
    }
    export interface CancelBundleTaskRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the bundle task. **/
        BundleId: String;
    }
    export interface CancelBundleTaskResult {
        /** Information about the bundle task. **/
        BundleTask?: BundleTask;
    }
    export interface CancelConversionRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the conversion task. **/
        ConversionTaskId: String;
        /** The reason for canceling the conversion task. **/
        ReasonMessage?: String;
    }
    export interface CancelExportTaskRequest {
        /** The ID of the export task. This is the ID returned by CreateInstanceExportTask . **/
        ExportTaskId: String;
    }
    export interface CancelImportTaskRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the import image or import snapshot task to be canceled. **/
        ImportTaskId?: String;
        /** The reason for canceling the task. **/
        CancelReason?: String;
    }
    export interface CancelImportTaskResult {
        /** The ID of the task being canceled. **/
        ImportTaskId?: String;
        /** The current state of the task being canceled. **/
        State?: String;
        /** The current state of the task being canceled. **/
        PreviousState?: String;
    }
    export interface CancelReservedInstancesListingRequest {
        /** The ID of the Reserved Instance listing. **/
        ReservedInstancesListingId: String;
    }
    export interface CancelReservedInstancesListingResult {
        /** The Reserved Instance listing. **/
        ReservedInstancesListings?: ReservedInstancesListingList;
    }
    export interface CancelSpotFleetRequestsError {
        /** The error code. **/
        Code: CancelBatchErrorCode;
        /** The description for the error code. **/
        Message: String;
    }
    export interface CancelSpotFleetRequestsErrorItem {
        /** The ID of the Spot fleet request. **/
        SpotFleetRequestId: String;
        /** The error. **/
        Error: CancelSpotFleetRequestsError;
    }
    export interface CancelSpotFleetRequestsRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The IDs of the Spot fleet requests. **/
        SpotFleetRequestIds: ValueStringList;
        /** Indicates whether to terminate instances for a Spot fleet request if it is
canceled successfully. **/
        TerminateInstances: Boolean;
    }
    export interface CancelSpotFleetRequestsResponse {
        /** Information about the Spot fleet requests that are not successfully canceled. **/
        UnsuccessfulFleetRequests?: CancelSpotFleetRequestsErrorSet;
        /** Information about the Spot fleet requests that are successfully canceled. **/
        SuccessfulFleetRequests?: CancelSpotFleetRequestsSuccessSet;
    }
    export interface CancelSpotFleetRequestsSuccessItem {
        /** The ID of the Spot fleet request. **/
        SpotFleetRequestId: String;
        /** The current state of the Spot fleet request. **/
        CurrentSpotFleetRequestState: BatchState;
        /** The previous state of the Spot fleet request. **/
        PreviousSpotFleetRequestState: BatchState;
    }
    export interface CancelSpotInstanceRequestsRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more Spot instance request IDs. **/
        SpotInstanceRequestIds: SpotInstanceRequestIdList;
    }
    export interface CancelSpotInstanceRequestsResult {
        /** One or more Spot instance requests. **/
        CancelledSpotInstanceRequests?: CancelledSpotInstanceRequestList;
    }
    export interface CancelledSpotInstanceRequest {
        /** The ID of the Spot instance request. **/
        SpotInstanceRequestId?: String;
        /** The state of the Spot instance request. **/
        State?: CancelSpotInstanceRequestState;
    }
    export interface ClassicLinkDnsSupport {
        /** The ID of the VPC. **/
        VpcId?: String;
        /** Indicates whether ClassicLink DNS support is enabled for the VPC. **/
        ClassicLinkDnsSupported?: Boolean;
    }
    export interface ClassicLinkInstance {
        /** The ID of the instance. **/
        InstanceId?: String;
        /** The ID of the VPC. **/
        VpcId?: String;
        /** A list of security groups. **/
        Groups?: GroupIdentifierList;
        /** Any tags assigned to the instance. **/
        Tags?: TagList;
    }
    export interface ClientData {
        /** The time that the disk upload starts. **/
        UploadStart?: DateTime;
        /** The time that the disk upload ends. **/
        UploadEnd?: DateTime;
        /** The size of the uploaded disk image, in GiB. **/
        UploadSize?: Double;
        /** A user-defined comment about the disk upload. **/
        Comment?: String;
    }
    export interface ConfirmProductInstanceRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The product code. This must be a product code that you own. **/
        ProductCode: String;
        /** The ID of the instance. **/
        InstanceId: String;
    }
    export interface ConfirmProductInstanceResult {
        /** The AWS account ID of the instance owner. This is only present if the product
code is attached to the instance. **/
        OwnerId?: String;
        /** The return value of the request. Returns true if the specified product code is
owned by the requester and associated with the specified instance. **/
        Return?: Boolean;
    }
    export interface ConversionTask {
        /** The ID of the conversion task. **/
        ConversionTaskId: String;
        /** The time when the task expires. If the upload isn&#x27;t complete before the
expiration time, we automatically cancel the task. **/
        ExpirationTime?: String;
        /** If the task is for importing an instance, this contains information about the
import instance task. **/
        ImportInstance?: ImportInstanceTaskDetails;
        /** If the task is for importing a volume, this contains information about the
import volume task. **/
        ImportVolume?: ImportVolumeTaskDetails;
        /** The state of the conversion task. **/
        State: ConversionTaskState;
        /** The status message related to the conversion task. **/
        StatusMessage?: String;
        /** Any tags assigned to the task. **/
        Tags?: TagList;
    }
    export interface CopyImageRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The name of the region that contains the AMI to copy. **/
        SourceRegion: String;
        /** The ID of the AMI to copy. **/
        SourceImageId: String;
        /** The name of the new AMI in the destination region. **/
        Name: String;
        /** A description for the new AMI in the destination region. **/
        Description?: String;
        /** Unique, case-sensitive identifier you provide to ensure idempotency of the
request. For more information, see How to Ensure Idempotency
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html] 
in the Amazon Elastic Compute Cloud User Guide . **/
        ClientToken?: String;
        /** Specifies whether the destination snapshots of the copied image should be
encrypted. The default CMK for EBS is used unless a non-default AWS Key
Management Service (AWS KMS) CMK is specified with KmsKeyId . For more
information, see Amazon EBS Encryption
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html] in the 
Amazon Elastic Compute Cloud User Guide . **/
        Encrypted?: Boolean;
        /** The full ARN of the AWS Key Management Service (AWS KMS) CMK to use when
encrypting the snapshots of an image during a copy operation. This parameter is
only required if you want to use a non-default CMK; if this parameter is not
specified, the default CMK for EBS is used. The ARN contains the arn:aws:kms 
namespace, followed by the region of the CMK, the AWS account ID of the CMK
owner, the key namespace, and then the CMK ID. For example, arn:aws:kms: 
us-east-1 : 012345678910 :key/ abcd1234-a123-456a-a12b-a123b4cd56ef . The
specified CMK must exist in the region that the snapshot is being copied to. If
a KmsKeyId is specified, the Encrypted flag must also be set. **/
        KmsKeyId?: String;
    }
    export interface CopyImageResult {
        /** The ID of the new AMI. **/
        ImageId?: String;
    }
    export interface CopySnapshotRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the region that contains the snapshot to be copied. **/
        SourceRegion: String;
        /** The ID of the EBS snapshot to copy. **/
        SourceSnapshotId: String;
        /** A description for the EBS snapshot. **/
        Description?: String;
        /** The destination region to use in the PresignedUrl parameter of a snapshot copy
operation. This parameter is only valid for specifying the destination region in
a PresignedUrl parameter, where it is required.

CopySnapshot sends the snapshot copy to the regional endpoint that you send the
HTTP request to, such as ec2.us-east-1.amazonaws.com (in the AWS CLI, this is
specified with the --region parameter or the default region in your AWS
configuration file). **/
        DestinationRegion?: String;
        /** The pre-signed URL that facilitates copying an encrypted snapshot. This
parameter is only required when copying an encrypted snapshot with the Amazon
EC2 Query API; it is available as an optional parameter in all other cases. The 
PresignedUrl should use the snapshot source endpoint, the CopySnapshot action,
and include the SourceRegion , SourceSnapshotId , and DestinationRegion 
parameters. The PresignedUrl must be signed using AWS Signature Version 4.
Because EBS snapshots are stored in Amazon S3, the signing algorithm for this
parameter uses the same logic that is described in Authenticating Requests by
Using Query Parameters (AWS Signature Version 4)
[http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html] in
the Amazon Simple Storage Service API Reference . An invalid or improperly
signed PresignedUrl will cause the copy operation to fail asynchronously, and
the snapshot will move to an error state. **/
        PresignedUrl?: String;
        /** Specifies whether the destination snapshot should be encrypted. You can encrypt
a copy of an unencrypted snapshot using this flag, but you cannot use it to
create an unencrypted copy from an encrypted snapshot. Your default CMK for EBS
is used unless a non-default AWS Key Management Service (AWS KMS) CMK is
specified with KmsKeyId . For more information, see Amazon EBS Encryption
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html] in the 
Amazon Elastic Compute Cloud User Guide . **/
        Encrypted?: Boolean;
        /** The full ARN of the AWS Key Management Service (AWS KMS) CMK to use when
creating the snapshot copy. This parameter is only required if you want to use a
non-default CMK; if this parameter is not specified, the default CMK for EBS is
used. The ARN contains the arn:aws:kms namespace, followed by the region of the
CMK, the AWS account ID of the CMK owner, the key namespace, and then the CMK
ID. For example, arn:aws:kms: us-east-1 : 012345678910 :key/ 
abcd1234-a123-456a-a12b-a123b4cd56ef . The specified CMK must exist in the
region that the snapshot is being copied to. If a KmsKeyId is specified, the 
Encrypted flag must also be set. **/
        KmsKeyId?: String;
    }
    export interface CopySnapshotResult {
        /** The ID of the new snapshot. **/
        SnapshotId?: String;
    }
    export interface CreateCustomerGatewayRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The type of VPN connection that this customer gateway supports ( ipsec.1 ). **/
        Type: GatewayType;
        /** The Internet-routable IP address for the customer gateway&#x27;s outside interface.
The address must be static. **/
        PublicIp: String;
        /** For devices that support BGP, the customer gateway&#x27;s BGP ASN.

Default: 65000 **/
        BgpAsn: Integer;
    }
    export interface CreateCustomerGatewayResult {
        /** Information about the customer gateway. **/
        CustomerGateway?: CustomerGateway;
    }
    export interface CreateDhcpOptionsRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** A DHCP configuration option. **/
        DhcpConfigurations: NewDhcpConfigurationList;
    }
    export interface CreateDhcpOptionsResult {
        /** A set of DHCP options. **/
        DhcpOptions?: DhcpOptions;
    }
    export interface CreateFlowLogsRequest {
        /** One or more subnet, network interface, or VPC IDs.

Constraints: Maximum of 1000 resources **/
        ResourceIds: ValueStringList;
        /** The type of resource on which to create the flow log. **/
        ResourceType: FlowLogsResourceType;
        /** The type of traffic to log. **/
        TrafficType: TrafficType;
        /** The name of the CloudWatch log group. **/
        LogGroupName: String;
        /** The ARN for the IAM role that&#x27;s used to post flow logs to a CloudWatch Logs log
group. **/
        DeliverLogsPermissionArn: String;
        /** Unique, case-sensitive identifier you provide to ensure the idempotency of the
request. For more information, see How to Ensure Idempotency
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html] 
. **/
        ClientToken?: String;
    }
    export interface CreateFlowLogsResult {
        /** The IDs of the flow logs. **/
        FlowLogIds?: ValueStringList;
        /** Unique, case-sensitive identifier you provide to ensure the idempotency of the
request. **/
        ClientToken?: String;
        /** Information about the flow logs that could not be created successfully. **/
        Unsuccessful?: UnsuccessfulItemSet;
    }
    export interface CreateImageRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the instance. **/
        InstanceId: String;
        /** A name for the new image.

Constraints: 3-128 alphanumeric characters, parentheses (()), square brackets
([]), spaces ( ), periods (.), slashes (/), dashes (-), single quotes (&#x27;),
at-signs (@), or underscores(_) **/
        Name: String;
        /** A description for the new image. **/
        Description?: String;
        /** By default, Amazon EC2 attempts to shut down and reboot the instance before
creating the image. If the &#x27;No Reboot&#x27; option is set, Amazon EC2 doesn&#x27;t shut
down the instance before creating the image. When this option is used, file
system integrity on the created image can&#x27;t be guaranteed. **/
        NoReboot?: Boolean;
        /** Information about one or more block device mappings. **/
        BlockDeviceMappings?: BlockDeviceMappingRequestList;
    }
    export interface CreateImageResult {
        /** The ID of the new AMI. **/
        ImageId?: String;
    }
    export interface CreateInstanceExportTaskRequest {
        /** A description for the conversion task or the resource being exported. The
maximum length is 255 bytes. **/
        Description?: String;
        /** The ID of the instance. **/
        InstanceId: String;
        /** The target virtualization environment. **/
        TargetEnvironment?: ExportEnvironment;
        /** The format and location for an instance export task. **/
        ExportToS3Task?: ExportToS3TaskSpecification;
    }
    export interface CreateInstanceExportTaskResult {
        /** Information about the instance export task. **/
        ExportTask?: ExportTask;
    }
    export interface CreateInternetGatewayRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
    }
    export interface CreateInternetGatewayResult {
        /** Information about the Internet gateway. **/
        InternetGateway?: InternetGateway;
    }
    export interface CreateKeyPairRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** A unique name for the key pair.

Constraints: Up to 255 ASCII characters **/
        KeyName: String;
    }
    export interface CreateNatGatewayRequest {
        /** The subnet in which to create the NAT gateway. **/
        SubnetId: String;
        /** The allocation ID of an Elastic IP address to associate with the NAT gateway. If
the Elastic IP address is associated with another resource, you must first
disassociate it. **/
        AllocationId: String;
        /** Unique, case-sensitive identifier you provide to ensure the idempotency of the
request. For more information, see How to Ensure Idempotency
[http://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html] 
.

Constraint: Maximum 64 ASCII characters. **/
        ClientToken?: String;
    }
    export interface CreateNatGatewayResult {
        /** Information about the NAT gateway. **/
        NatGateway?: NatGateway;
        /** Unique, case-sensitive identifier to ensure the idempotency of the request. Only
returned if a client token was provided in the request. **/
        ClientToken?: String;
    }
    export interface CreateNetworkAclEntryRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the network ACL. **/
        NetworkAclId: String;
        /** The rule number for the entry (for example, 100). ACL entries are processed in
ascending order by rule number.

Constraints: Positive integer from 1 to 32766. The range 32767 to 65535 is
reserved for internal use. **/
        RuleNumber: Integer;
        /** The protocol. A value of -1 means all protocols. **/
        Protocol: String;
        /** Indicates whether to allow or deny the traffic that matches the rule. **/
        RuleAction: RuleAction;
        /** Indicates whether this is an egress rule (rule is applied to traffic leaving the
subnet). **/
        Egress: Boolean;
        /** The network range to allow or deny, in CIDR notation (for example 172.16.0.0/24 
). **/
        CidrBlock: String;
        /** ICMP protocol: The ICMP type and code. Required if specifying ICMP for the
protocol. **/
        IcmpTypeCode?: IcmpTypeCode;
        /** TCP or UDP protocols: The range of ports the rule applies to. **/
        PortRange?: PortRange;
    }
    export interface CreateNetworkAclRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the VPC. **/
        VpcId: String;
    }
    export interface CreateNetworkAclResult {
        /** Information about the network ACL. **/
        NetworkAcl?: NetworkAcl;
    }
    export interface CreateNetworkInterfaceRequest {
        /** The ID of the subnet to associate with the network interface. **/
        SubnetId: String;
        /** A description for the network interface. **/
        Description?: String;
        /** The primary private IP address of the network interface. If you don&#x27;t specify an
IP address, Amazon EC2 selects one for you from the subnet range. If you specify
an IP address, you cannot indicate any IP addresses specified in 
privateIpAddresses as primary (only one IP address can be designated as
primary). **/
        PrivateIpAddress?: String;
        /** The IDs of one or more security groups. **/
        Groups?: SecurityGroupIdStringList;
        /** One or more private IP addresses. **/
        PrivateIpAddresses?: PrivateIpAddressSpecificationList;
        /** The number of secondary private IP addresses to assign to a network interface.
When you specify a number of secondary IP addresses, Amazon EC2 selects these IP
addresses within the subnet range. You can&#x27;t specify this option and specify
more than one private IP address using privateIpAddresses .

The number of IP addresses you can assign to a network interface varies by
instance type. For more information, see Private IP Addresses Per ENI Per
Instance Type
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI] 
in the Amazon Elastic Compute Cloud User Guide . **/
        SecondaryPrivateIpAddressCount?: Integer;
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
    }
    export interface CreateNetworkInterfaceResult {
        /** Information about the network interface. **/
        NetworkInterface?: NetworkInterface;
    }
    export interface CreatePlacementGroupRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** A name for the placement group.

Constraints: Up to 255 ASCII characters **/
        GroupName: String;
        /** The placement strategy. **/
        Strategy: PlacementStrategy;
    }
    export interface CreateReservedInstancesListingRequest {
        /** The ID of the active Reserved Instance. **/
        ReservedInstancesId: String;
        /** The number of instances that are a part of a Reserved Instance account to be
listed in the Reserved Instance Marketplace. This number should be less than or
equal to the instance count associated with the Reserved Instance ID specified
in this call. **/
        InstanceCount: Integer;
        /** A list specifying the price of the Reserved Instance for each month remaining in
the Reserved Instance term. **/
        PriceSchedules: PriceScheduleSpecificationList;
        /** Unique, case-sensitive identifier you provide to ensure idempotency of your
listings. This helps avoid duplicate listings. For more information, see 
Ensuring Idempotency
[http://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html] 
. **/
        ClientToken: String;
    }
    export interface CreateReservedInstancesListingResult {
        /** Information about the Reserved Instance listing. **/
        ReservedInstancesListings?: ReservedInstancesListingList;
    }
    export interface CreateRouteRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the route table for the route. **/
        RouteTableId: String;
        /** The CIDR address block used for the destination match. Routing decisions are
based on the most specific match. **/
        DestinationCidrBlock: String;
        /** The ID of an Internet gateway or virtual private gateway attached to your VPC. **/
        GatewayId?: String;
        /** The ID of a NAT instance in your VPC. The operation fails if you specify an
instance ID unless exactly one network interface is attached. **/
        InstanceId?: String;
        /** The ID of a network interface. **/
        NetworkInterfaceId?: String;
        /** The ID of a VPC peering connection. **/
        VpcPeeringConnectionId?: String;
        /** The ID of a NAT gateway. **/
        NatGatewayId?: String;
    }
    export interface CreateRouteResult {
        /** Returns true if the request succeeds; otherwise, it returns an error. **/
        Return?: Boolean;
    }
    export interface CreateRouteTableRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the VPC. **/
        VpcId: String;
    }
    export interface CreateRouteTableResult {
        /** Information about the route table. **/
        RouteTable?: RouteTable;
    }
    export interface CreateSecurityGroupRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The name of the security group.

Constraints: Up to 255 characters in length

Constraints for EC2-Classic: ASCII characters

Constraints for EC2-VPC: a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=&amp;;{}!$&amp;#42; **/
        GroupName: String;
        /** A description for the security group. This is informational only.

Constraints: Up to 255 characters in length

Constraints for EC2-Classic: ASCII characters

Constraints for EC2-VPC: a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=&amp;;{}!$&amp;#42; **/
        Description: String;
        /** [EC2-VPC] The ID of the VPC. Required for EC2-VPC. **/
        VpcId?: String;
    }
    export interface CreateSecurityGroupResult {
        /** The ID of the security group. **/
        GroupId?: String;
    }
    export interface CreateSnapshotRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the EBS volume. **/
        VolumeId: String;
        /** A description for the snapshot. **/
        Description?: String;
    }
    export interface CreateSpotDatafeedSubscriptionRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The Amazon S3 bucket in which to store the Spot instance data feed. **/
        Bucket: String;
        /** A prefix for the data feed file names. **/
        Prefix?: String;
    }
    export interface CreateSpotDatafeedSubscriptionResult {
        /** The Spot instance data feed subscription. **/
        SpotDatafeedSubscription?: SpotDatafeedSubscription;
    }
    export interface CreateSubnetRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the VPC. **/
        VpcId: String;
        /** The network range for the subnet, in CIDR notation. For example, 10.0.0.0/24 . **/
        CidrBlock: String;
        /** The Availability Zone for the subnet.

Default: AWS selects one for you. If you create more than one subnet in your
VPC, we may not necessarily select a different zone for each subnet. **/
        AvailabilityZone?: String;
    }
    export interface CreateSubnetResult {
        /** Information about the subnet. **/
        Subnet?: Subnet;
    }
    export interface CreateTagsRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The IDs of one or more resources to tag. For example, ami-1a2b3c4d. **/
        Resources: ResourceIdList;
        /** One or more tags. The value parameter is required, but if you don&#x27;t want the tag
to have a value, specify the parameter with no value, and we set the value to an
empty string. **/
        Tags: TagList;
    }
    export interface CreateVolumePermission {
        /** The specific AWS account ID that is to be added or removed from a volume&#x27;s list
of create volume permissions. **/
        UserId?: String;
        /** The specific group that is to be added or removed from a volume&#x27;s list of create
volume permissions. **/
        Group?: PermissionGroup;
    }
    export interface CreateVolumePermissionModifications {
        /** Adds a specific AWS account ID or group to a volume&#x27;s list of create volume
permissions. **/
        Add?: CreateVolumePermissionList;
        /** Removes a specific AWS account ID or group from a volume&#x27;s list of create volume
permissions. **/
        Remove?: CreateVolumePermissionList;
    }
    export interface CreateVolumeRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The size of the volume, in GiBs.

Constraints: 1-16384 for gp2 , 4-16384 for io1 , 500-16384 for st1 , 500-16384
for sc1 , and 1-1024 for standard . If you specify a snapshot, the volume size
must be equal to or larger than the snapshot size.

Default: If you&#x27;re creating the volume from a snapshot and don&#x27;t specify a
volume size, the default is the snapshot size. **/
        Size?: Integer;
        /** The snapshot from which to create the volume. **/
        SnapshotId?: String;
        /** The Availability Zone in which to create the volume. Use 
DescribeAvailabilityZones to list the Availability Zones that are currently
available to you. **/
        AvailabilityZone: String;
        /** The volume type. This can be gp2 for General Purpose SSD, io1 for Provisioned
IOPS SSD, st1 for Throughput Optimized HDD, sc1 for Cold HDD, or standard for
Magnetic volumes.

Default: standard **/
        VolumeType?: VolumeType;
        /** Only valid for Provisioned IOPS SSD volumes. The number of I/O operations per
second (IOPS) to provision for the volume, with a maximum ratio of 30 IOPS/GiB.

Constraint: Range is 100 to 20000 for Provisioned IOPS SSD volumes **/
        Iops?: Integer;
        /** Specifies whether the volume should be encrypted. Encrypted Amazon EBS volumes
may only be attached to instances that support Amazon EBS encryption. Volumes
that are created from encrypted snapshots are automatically encrypted. There is
no way to create an encrypted volume from an unencrypted snapshot or vice versa.
If your AMI uses encrypted volumes, you can only launch it on supported instance
types. For more information, see Amazon EBS Encryption
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html] in the 
Amazon Elastic Compute Cloud User Guide . **/
        Encrypted?: Boolean;
        /** The full ARN of the AWS Key Management Service (AWS KMS) customer master key
(CMK) to use when creating the encrypted volume. This parameter is only required
if you want to use a non-default CMK; if this parameter is not specified, the
default CMK for EBS is used. The ARN contains the arn:aws:kms namespace,
followed by the region of the CMK, the AWS account ID of the CMK owner, the key 
namespace, and then the CMK ID. For example, arn:aws:kms: us-east-1 : 
012345678910 :key/ abcd1234-a123-456a-a12b-a123b4cd56ef . If a KmsKeyId is
specified, the Encrypted flag must also be set. **/
        KmsKeyId?: String;
    }
    export interface CreateVpcEndpointRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the VPC in which the endpoint will be used. **/
        VpcId: String;
        /** The AWS service name, in the form com.amazonaws. region . service . To get a
list of available services, use the DescribeVpcEndpointServices request. **/
        ServiceName: String;
        /** A policy to attach to the endpoint that controls access to the service. The
policy must be in valid JSON format. If this parameter is not specified, we
attach a default policy that allows full access to the service. **/
        PolicyDocument?: String;
        /** One or more route table IDs. **/
        RouteTableIds?: ValueStringList;
        /** Unique, case-sensitive identifier you provide to ensure the idempotency of the
request. For more information, see How to Ensure Idempotency
[http://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html] 
. **/
        ClientToken?: String;
    }
    export interface CreateVpcEndpointResult {
        /** Information about the endpoint. **/
        VpcEndpoint?: VpcEndpoint;
        /** Unique, case-sensitive identifier you provide to ensure the idempotency of the
request. **/
        ClientToken?: String;
    }
    export interface CreateVpcPeeringConnectionRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the requester VPC. **/
        VpcId?: String;
        /** The ID of the VPC with which you are creating the VPC peering connection. **/
        PeerVpcId?: String;
        /** The AWS account ID of the owner of the peer VPC.

Default: Your AWS account ID **/
        PeerOwnerId?: String;
    }
    export interface CreateVpcPeeringConnectionResult {
        /** Information about the VPC peering connection. **/
        VpcPeeringConnection?: VpcPeeringConnection;
    }
    export interface CreateVpcRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The network range for the VPC, in CIDR notation. For example, 10.0.0.0/16 . **/
        CidrBlock: String;
        /** The tenancy options for instances launched into the VPC. For default , instances
are launched with shared tenancy by default. You can launch instances with any
tenancy into a shared tenancy VPC. For dedicated , instances are launched as
dedicated tenancy instances by default. You can only launch instances with a
tenancy of dedicated or host into a dedicated tenancy VPC.

Important: The host value cannot be used with this parameter. Use the default or 
dedicated values only.

Default: default **/
        InstanceTenancy?: Tenancy;
    }
    export interface CreateVpcResult {
        /** Information about the VPC. **/
        Vpc?: Vpc;
    }
    export interface CreateVpnConnectionRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The type of VPN connection ( ipsec.1 ). **/
        Type: String;
        /** The ID of the customer gateway. **/
        CustomerGatewayId: String;
        /** The ID of the virtual private gateway. **/
        VpnGatewayId: String;
        /** Indicates whether the VPN connection requires static routes. If you are creating
a VPN connection for a device that does not support BGP, you must specify true .

Default: false **/
        Options?: VpnConnectionOptionsSpecification;
    }
    export interface CreateVpnConnectionResult {
        /** Information about the VPN connection. **/
        VpnConnection?: VpnConnection;
    }
    export interface CreateVpnConnectionRouteRequest {
        /** The ID of the VPN connection. **/
        VpnConnectionId: String;
        /** The CIDR block associated with the local subnet of the customer network. **/
        DestinationCidrBlock: String;
    }
    export interface CreateVpnGatewayRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The type of VPN connection this virtual private gateway supports. **/
        Type: GatewayType;
        /** The Availability Zone for the virtual private gateway. **/
        AvailabilityZone?: String;
    }
    export interface CreateVpnGatewayResult {
        /** Information about the virtual private gateway. **/
        VpnGateway?: VpnGateway;
    }
    export interface CustomerGateway {
        /** The ID of the customer gateway. **/
        CustomerGatewayId?: String;
        /** The current state of the customer gateway ( pending | available | deleting |
deleted ). **/
        State?: String;
        /** The type of VPN connection the customer gateway supports ( ipsec.1 ). **/
        Type?: String;
        /** The Internet-routable IP address of the customer gateway&#x27;s outside interface. **/
        IpAddress?: String;
        /** The customer gateway&#x27;s Border Gateway Protocol (BGP) Autonomous System Number
(ASN). **/
        BgpAsn?: String;
        /** Any tags assigned to the customer gateway. **/
        Tags?: TagList;
    }
    export interface DeleteCustomerGatewayRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the customer gateway. **/
        CustomerGatewayId: String;
    }
    export interface DeleteDhcpOptionsRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the DHCP options set. **/
        DhcpOptionsId: String;
    }
    export interface DeleteFlowLogsRequest {
        /** One or more flow log IDs. **/
        FlowLogIds: ValueStringList;
    }
    export interface DeleteFlowLogsResult {
        /** Information about the flow logs that could not be deleted successfully. **/
        Unsuccessful?: UnsuccessfulItemSet;
    }
    export interface DeleteInternetGatewayRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the Internet gateway. **/
        InternetGatewayId: String;
    }
    export interface DeleteKeyPairRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The name of the key pair. **/
        KeyName: String;
    }
    export interface DeleteNatGatewayRequest {
        /** The ID of the NAT gateway. **/
        NatGatewayId: String;
    }
    export interface DeleteNatGatewayResult {
        /** The ID of the NAT gateway. **/
        NatGatewayId?: String;
    }
    export interface DeleteNetworkAclEntryRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the network ACL. **/
        NetworkAclId: String;
        /** The rule number of the entry to delete. **/
        RuleNumber: Integer;
        /** Indicates whether the rule is an egress rule. **/
        Egress: Boolean;
    }
    export interface DeleteNetworkAclRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the network ACL. **/
        NetworkAclId: String;
    }
    export interface DeleteNetworkInterfaceRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the network interface. **/
        NetworkInterfaceId: String;
    }
    export interface DeletePlacementGroupRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The name of the placement group. **/
        GroupName: String;
    }
    export interface DeleteRouteRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the route table. **/
        RouteTableId: String;
        /** The CIDR range for the route. The value you specify must match the CIDR for the
route exactly. **/
        DestinationCidrBlock: String;
    }
    export interface DeleteRouteTableRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the route table. **/
        RouteTableId: String;
    }
    export interface DeleteSecurityGroupRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** [EC2-Classic, default VPC] The name of the security group. You can specify
either the security group name or the security group ID. **/
        GroupName?: String;
        /** The ID of the security group. Required for a nondefault VPC. **/
        GroupId?: String;
    }
    export interface DeleteSnapshotRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the EBS snapshot. **/
        SnapshotId: String;
    }
    export interface DeleteSpotDatafeedSubscriptionRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
    }
    export interface DeleteSubnetRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the subnet. **/
        SubnetId: String;
    }
    export interface DeleteTagsRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the resource. For example, ami-1a2b3c4d. You can specify more than one
resource ID. **/
        Resources: ResourceIdList;
        /** One or more tags to delete. If you omit the value parameter, we delete the tag
regardless of its value. If you specify this parameter with an empty string as
the value, we delete the key only if its value is an empty string. **/
        Tags?: TagList;
    }
    export interface DeleteVolumeRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the volume. **/
        VolumeId: String;
    }
    export interface DeleteVpcEndpointsRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more endpoint IDs. **/
        VpcEndpointIds: ValueStringList;
    }
    export interface DeleteVpcEndpointsResult {
        /** Information about the endpoints that were not successfully deleted. **/
        Unsuccessful?: UnsuccessfulItemSet;
    }
    export interface DeleteVpcPeeringConnectionRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the VPC peering connection. **/
        VpcPeeringConnectionId: String;
    }
    export interface DeleteVpcPeeringConnectionResult {
        /** Returns true if the request succeeds; otherwise, it returns an error. **/
        Return?: Boolean;
    }
    export interface DeleteVpcRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the VPC. **/
        VpcId: String;
    }
    export interface DeleteVpnConnectionRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the VPN connection. **/
        VpnConnectionId: String;
    }
    export interface DeleteVpnConnectionRouteRequest {
        /** The ID of the VPN connection. **/
        VpnConnectionId: String;
        /** The CIDR block associated with the local subnet of the customer network. **/
        DestinationCidrBlock: String;
    }
    export interface DeleteVpnGatewayRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the virtual private gateway. **/
        VpnGatewayId: String;
    }
    export interface DeregisterImageRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the AMI. **/
        ImageId: String;
    }
    export interface DescribeAccountAttributesRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more account attribute names. **/
        AttributeNames?: AccountAttributeNameStringList;
    }
    export interface DescribeAccountAttributesResult {
        /** Information about one or more account attributes. **/
        AccountAttributes?: AccountAttributeList;
    }
    export interface DescribeAddressesRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** [EC2-Classic] One or more Elastic IP addresses.

Default: Describes all your Elastic IP addresses. **/
        PublicIps?: PublicIpStringList;
        /** One or more filters. Filter names and values are case-sensitive.

 &amp;#42; allocation-id - [EC2-VPC] The allocation ID for the address.
   
   
 * association-id - [EC2-VPC] The association ID for the address.
   
   
 * domain - Indicates whether the address is for use in EC2-Classic ( standard )
   or in a VPC ( vpc ).
   
   
 * instance-id - The ID of the instance the address is associated with, if any.
   
   
 * network-interface-id - [EC2-VPC] The ID of the network interface that the
   address is associated with, if any.
   
   
 * network-interface-owner-id - The AWS account ID of the owner.
   
   
 * private-ip-address - [EC2-VPC] The private IP address associated with the
   Elastic IP address.
   
   
 * public-ip - The Elastic IP address. **/
        Filters?: FilterList;
        /** [EC2-VPC] One or more allocation IDs.

Default: Describes all your Elastic IP addresses. **/
        AllocationIds?: AllocationIdList;
    }
    export interface DescribeAddressesResult {
        /** Information about one or more Elastic IP addresses. **/
        Addresses?: AddressList;
    }
    export interface DescribeAvailabilityZonesRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The names of one or more Availability Zones. **/
        ZoneNames?: ZoneNameStringList;
        /** One or more filters.

 &amp;#42; message - Information about the Availability Zone.
   
   
 * region-name - The name of the region for the Availability Zone (for example, 
   us-east-1 ).
   
   
 * state - The state of the Availability Zone ( available | information | 
   impaired | unavailable ).
   
   
 * zone-name - The name of the Availability Zone (for example, us-east-1a ). **/
        Filters?: FilterList;
    }
    export interface DescribeAvailabilityZonesResult {
        /** Information about one or more Availability Zones. **/
        AvailabilityZones?: AvailabilityZoneList;
    }
    export interface DescribeBundleTasksRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more bundle task IDs.

Default: Describes all your bundle tasks. **/
        BundleIds?: BundleIdStringList;
        /** One or more filters.

 &amp;#42; bundle-id - The ID of the bundle task.
   
   
 * error-code - If the task failed, the error code returned.
   
   
 * error-message - If the task failed, the error message returned.
   
   
 * instance-id - The ID of the instance.
   
   
 * progress - The level of task completion, as a percentage (for example, 20%).
   
   
 * s3-bucket - The Amazon S3 bucket to store the AMI.
   
   
 * s3-prefix - The beginning of the AMI name.
   
   
 * start-time - The time the task started (for example,
   2013-09-15T17:15:20.000Z).
   
   
 * state - The state of the task ( pending | waiting-for-shutdown | bundling | 
   storing | cancelling | complete | failed ).
   
   
 * update-time - The time of the most recent update for the task. **/
        Filters?: FilterList;
    }
    export interface DescribeBundleTasksResult {
        /** Information about one or more bundle tasks. **/
        BundleTasks?: BundleTaskList;
    }
    export interface DescribeClassicLinkInstancesRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more instance IDs. Must be instances linked to a VPC through ClassicLink. **/
        InstanceIds?: InstanceIdStringList;
        /** One or more filters.

 &amp;#42; group-id - The ID of a VPC security group that&#x27;s associated with the
   instance.
   
   
 * instance-id - The ID of the instance.
   
   
 * tag : key = value - The key/value combination of a tag assigned to the
   resource.
   
   
 * tag-key - The key of a tag assigned to the resource. This filter is
   independent of the tag-value filter. For example, if you use both the filter
   &quot;tag-key=Purpose&quot; and the filter &quot;tag-value=X&quot;, you get any resources
   assigned both the tag key Purpose (regardless of what the tag&#x27;s value is),
   and the tag value X (regardless of what the tag&#x27;s key is). If you want to
   list only resources where Purpose is X, see the tag : key = value filter.
   
   
 * tag-value - The value of a tag assigned to the resource. This filter is
   independent of the tag-key filter.
   
   
 * vpc-id - The ID of the VPC that the instance is linked to. **/
        Filters?: FilterList;
        /** The token to retrieve the next page of results. **/
        NextToken?: String;
        /** The maximum number of results to return for the request in a single page. The
remaining results of the initial request can be seen by sending another request
with the returned NextToken value. This value can be between 5 and 1000; if 
MaxResults is given a value larger than 1000, only 1000 results are returned.
You cannot specify this parameter and the instance IDs parameter in the same
request.

Constraint: If the value is greater than 1000, we return only 1000 items. **/
        MaxResults?: Integer;
    }
    export interface DescribeClassicLinkInstancesResult {
        /** Information about one or more linked EC2-Classic instances. **/
        Instances?: ClassicLinkInstanceList;
        /** The token to use to retrieve the next page of results. This value is null when
there are no more results to return. **/
        NextToken?: String;
    }
    export interface DescribeConversionTasksRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more filters. **/
        Filters?: FilterList;
        /** One or more conversion task IDs. **/
        ConversionTaskIds?: ConversionIdStringList;
    }
    export interface DescribeConversionTasksResult {
        /** Information about the conversion tasks. **/
        ConversionTasks?: DescribeConversionTaskList;
    }
    export interface DescribeCustomerGatewaysRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more customer gateway IDs.

Default: Describes all your customer gateways. **/
        CustomerGatewayIds?: CustomerGatewayIdStringList;
        /** One or more filters.

 &amp;#42; bgp-asn - The customer gateway&#x27;s Border Gateway Protocol (BGP) Autonomous
   System Number (ASN).
   
   
 * customer-gateway-id - The ID of the customer gateway.
   
   
 * ip-address - The IP address of the customer gateway&#x27;s Internet-routable
   external interface.
   
   
 * state - The state of the customer gateway ( pending | available | deleting | 
   deleted ).
   
   
 * type - The type of customer gateway. Currently, the only supported type is 
   ipsec.1 .
   
   
 * tag : key = value - The key/value combination of a tag assigned to the
   resource.
   
   
 * tag-key - The key of a tag assigned to the resource. This filter is
   independent of the tag-value filter. For example, if you use both the filter
   &quot;tag-key=Purpose&quot; and the filter &quot;tag-value=X&quot;, you get any resources
   assigned both the tag key Purpose (regardless of what the tag&#x27;s value is),
   and the tag value X (regardless of what the tag&#x27;s key is). If you want to
   list only resources where Purpose is X, see the tag : key = value filter.
   
   
 * tag-value - The value of a tag assigned to the resource. This filter is
   independent of the tag-key filter. **/
        Filters?: FilterList;
    }
    export interface DescribeCustomerGatewaysResult {
        /** Information about one or more customer gateways. **/
        CustomerGateways?: CustomerGatewayList;
    }
    export interface DescribeDhcpOptionsRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The IDs of one or more DHCP options sets.

Default: Describes all your DHCP options sets. **/
        DhcpOptionsIds?: DhcpOptionsIdStringList;
        /** One or more filters.

 &amp;#42; dhcp-options-id - The ID of a set of DHCP options.
   
   
 * key - The key for one of the options (for example, domain-name ).
   
   
 * value - The value for one of the options.
   
   
 * tag : key = value - The key/value combination of a tag assigned to the
   resource.
   
   
 * tag-key - The key of a tag assigned to the resource. This filter is
   independent of the tag-value filter. For example, if you use both the filter
   &quot;tag-key=Purpose&quot; and the filter &quot;tag-value=X&quot;, you get any resources
   assigned both the tag key Purpose (regardless of what the tag&#x27;s value is),
   and the tag value X (regardless of what the tag&#x27;s key is). If you want to
   list only resources where Purpose is X, see the tag : key = value filter.
   
   
 * tag-value - The value of a tag assigned to the resource. This filter is
   independent of the tag-key filter. **/
        Filters?: FilterList;
    }
    export interface DescribeDhcpOptionsResult {
        /** Information about one or more DHCP options sets. **/
        DhcpOptions?: DhcpOptionsList;
    }
    export interface DescribeExportTasksRequest {
        /** One or more export task IDs. **/
        ExportTaskIds?: ExportTaskIdStringList;
    }
    export interface DescribeExportTasksResult {
        /** Information about the export tasks. **/
        ExportTasks?: ExportTaskList;
    }
    export interface DescribeFlowLogsRequest {
        /** One or more flow log IDs. **/
        FlowLogIds?: ValueStringList;
        /** One or more filters.

 &amp;#42; deliver-log-status - The status of the logs delivery ( SUCCESS | FAILED ).
   
   
 * flow-log-id - The ID of the flow log.
   
   
 * log-group-name - The name of the log group.
   
   
 * resource-id - The ID of the VPC, subnet, or network interface.
   
   
 * traffic-type - The type of traffic ( ACCEPT | REJECT | ALL ) **/
        Filter?: FilterList;
        /** The token to retrieve the next page of results. **/
        NextToken?: String;
        /** The maximum number of results to return for the request in a single page. The
remaining results can be seen by sending another request with the returned 
NextToken value. This value can be between 5 and 1000; if MaxResults is given a
value larger than 1000, only 1000 results are returned. You cannot specify this
parameter and the flow log IDs parameter in the same request. **/
        MaxResults?: Integer;
    }
    export interface DescribeFlowLogsResult {
        /** Information about the flow logs. **/
        FlowLogs?: FlowLogSet;
        /** The token to use to retrieve the next page of results. This value is null when
there are no more results to return. **/
        NextToken?: String;
    }
    export interface DescribeHostsRequest {
        /** The IDs of the Dedicated hosts. The IDs are used for targeted instance launches. **/
        HostIds?: RequestHostIdList;
        /** The token to retrieve the next page of results. **/
        NextToken?: String;
        /** The maximum number of results to return for the request in a single page. The
remaining results can be seen by sending another request with the returned 
nextToken value. This value can be between 5 and 500; if maxResults is given a
larger value than 500, you will receive an error. You cannot specify this
parameter and the host IDs parameter in the same request. **/
        MaxResults?: Integer;
        /** One or more filters.

 &amp;#42; instance-type - The instance type size that the Dedicated host is configured
   to support.
   
   
 * auto-placement - Whether auto-placement is enabled or disabled ( on | off ).
   
   
 * host-reservation-id - The ID of the reservation associated with this host.
   
   
 * client-token - The idempotency token you provided when you launched the
   instance
   
   
 * state - The allocation state of the Dedicated host ( available | 
   under-assessment | permanent-failure | released | released-permanent-failure 
   ).
   
   
 * availability-zone - The Availability Zone of the host. **/
        Filter?: FilterList;
    }
    export interface DescribeHostsResult {
        /** Information about the Dedicated hosts. **/
        Hosts?: HostList;
        /** The token to use to retrieve the next page of results. This value is null when
there are no more results to return. **/
        NextToken?: String;
    }
    export interface DescribeIdFormatRequest {
        /** The type of resource. **/
        Resource?: String;
    }
    export interface DescribeIdFormatResult {
        /** Information about the ID format for the resource. **/
        Statuses?: IdFormatList;
    }
    export interface DescribeIdentityIdFormatRequest {
        /** The type of resource. **/
        Resource?: String;
        /** The ARN of the principal, which can be an IAM role, IAM user, or the root user. **/
        PrincipalArn: String;
    }
    export interface DescribeIdentityIdFormatResult {
        /** Information about the ID format for the resources. **/
        Statuses?: IdFormatList;
    }
    export interface DescribeImageAttributeRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the AMI. **/
        ImageId: String;
        /** The AMI attribute.

Note : Depending on your account privileges, the blockDeviceMapping attribute
may return a Client.AuthFailure error. If this happens, use DescribeImages to
get information about the block device mapping for the AMI. **/
        Attribute: ImageAttributeName;
    }
    export interface DescribeImagesRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more image IDs.

Default: Describes all images available to you. **/
        ImageIds?: ImageIdStringList;
        /** Filters the images by the owner. Specify an AWS account ID, amazon (owner is
Amazon), aws-marketplace (owner is AWS Marketplace), self (owner is the sender
of the request). Omitting this option returns all images for which you have
launch permissions, regardless of ownership. **/
        Owners?: OwnerStringList;
        /** Scopes the images by users with explicit launch permissions. Specify an AWS
account ID, self (the sender of the request), or all (public AMIs). **/
        ExecutableUsers?: ExecutableByStringList;
        /** One or more filters.

 &amp;#42; architecture - The image architecture ( i386 | x86_64 ).
   
   
 * block-device-mapping.delete-on-termination - A Boolean value that indicates
   whether the Amazon EBS volume is deleted on instance termination.
   
   
 * block-device-mapping.device-name - The device name for the EBS volume (for
   example, /dev/sdh ).
   
   
 * block-device-mapping.snapshot-id - The ID of the snapshot used for the EBS
   volume.
   
   
 * block-device-mapping.volume-size - The volume size of the EBS volume, in GiB.
   
   
 * block-device-mapping.volume-type - The volume type of the EBS volume ( gp2 | 
   io1 | st1 | sc1 | standard ).
   
   
 * description - The description of the image (provided during image creation).
   
   
 * hypervisor - The hypervisor type ( ovm | xen ).
   
   
 * image-id - The ID of the image.
   
   
 * image-type - The image type ( machine | kernel | ramdisk ).
   
   
 * is-public - A Boolean that indicates whether the image is public.
   
   
 * kernel-id - The kernel ID.
   
   
 * manifest-location - The location of the image manifest.
   
   
 * name - The name of the AMI (provided during image creation).
   
   
 * owner-alias - The AWS account alias (for example, amazon ).
   
   
 * owner-id - The AWS account ID of the image owner.
   
   
 * platform - The platform. To only list Windows-based AMIs, use windows .
   
   
 * product-code - The product code.
   
   
 * product-code.type - The type of the product code ( devpay | marketplace ).
   
   
 * ramdisk-id - The RAM disk ID.
   
   
 * root-device-name - The name of the root device volume (for example, /dev/sda1 
   ).
   
   
 * root-device-type - The type of the root device volume ( ebs | instance-store 
   ).
   
   
 * state - The state of the image ( available | pending | failed ).
   
   
 * state-reason-code - The reason code for the state change.
   
   
 * state-reason-message - The message for the state change.
   
   
 * tag : key = value - The key/value combination of a tag assigned to the
   resource.
   
   
 * tag-key - The key of a tag assigned to the resource. This filter is
   independent of the tag-value filter. For example, if you use both the filter
   &quot;tag-key=Purpose&quot; and the filter &quot;tag-value=X&quot;, you get any resources
   assigned both the tag key Purpose (regardless of what the tag&#x27;s value is),
   and the tag value X (regardless of what the tag&#x27;s key is). If you want to
   list only resources where Purpose is X, see the tag : key = value filter.
   
   
 * tag-value - The value of a tag assigned to the resource. This filter is
   independent of the tag-key filter.
   
   
 * virtualization-type - The virtualization type ( paravirtual | hvm ). **/
        Filters?: FilterList;
    }
    export interface DescribeImagesResult {
        /** Information about one or more images. **/
        Images?: ImageList;
    }
    export interface DescribeImportImageTasksRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** A list of import image task IDs. **/
        ImportTaskIds?: ImportTaskIdList;
        /** A token that indicates the next page of results. **/
        NextToken?: String;
        /** The maximum number of results to return in a single call. To retrieve the
remaining results, make another call with the returned NextToken value. **/
        MaxResults?: Integer;
        /** Filter tasks using the task-state filter and one of the following values:
active, completed, deleting, deleted. **/
        Filters?: FilterList;
    }
    export interface DescribeImportImageTasksResult {
        /** A list of zero or more import image tasks that are currently active or were
completed or canceled in the previous 7 days. **/
        ImportImageTasks?: ImportImageTaskList;
        /** The token to use to get the next page of results. This value is null when there
are no more results to return. **/
        NextToken?: String;
    }
    export interface DescribeImportSnapshotTasksRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** A list of import snapshot task IDs. **/
        ImportTaskIds?: ImportTaskIdList;
        /** A token that indicates the next page of results. **/
        NextToken?: String;
        /** The maximum number of results to return in a single call. To retrieve the
remaining results, make another call with the returned NextToken value. **/
        MaxResults?: Integer;
        /** One or more filters. **/
        Filters?: FilterList;
    }
    export interface DescribeImportSnapshotTasksResult {
        /** A list of zero or more import snapshot tasks that are currently active or were
completed or canceled in the previous 7 days. **/
        ImportSnapshotTasks?: ImportSnapshotTaskList;
        /** The token to use to get the next page of results. This value is null when there
are no more results to return. **/
        NextToken?: String;
    }
    export interface DescribeInstanceAttributeRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the instance. **/
        InstanceId: String;
        /** The instance attribute. **/
        Attribute: InstanceAttributeName;
    }
    export interface DescribeInstanceStatusRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more instance IDs.

Default: Describes all your instances.

Constraints: Maximum 100 explicitly specified instance IDs. **/
        InstanceIds?: InstanceIdStringList;
        /** One or more filters.

 &amp;#42; availability-zone - The Availability Zone of the instance.
   
   
 * event.code - The code for the scheduled event ( instance-reboot | 
   system-reboot | system-maintenance | instance-retirement | instance-stop ).
   
   
 * event.description - A description of the event.
   
   
 * event.not-after - The latest end time for the scheduled event (for example, 
   2014-09-15T17:15:20.000Z ).
   
   
 * event.not-before - The earliest start time for the scheduled event (for
   example, 2014-09-15T17:15:20.000Z ).
   
   
 * instance-state-code - The code for the instance state, as a 16-bit unsigned
   integer. The high byte is an opaque internal value and should be ignored. The
   low byte is set based on the state represented. The valid values are 0
   (pending), 16 (running), 32 (shutting-down), 48 (terminated), 64 (stopping),
   and 80 (stopped).
   
   
 * instance-state-name - The state of the instance ( pending | running | 
   shutting-down | terminated | stopping | stopped ).
   
   
 * instance-status.reachability - Filters on instance status where the name is 
   reachability ( passed | failed | initializing | insufficient-data ).
   
   
 * instance-status.status - The status of the instance ( ok | impaired | 
   initializing | insufficient-data | not-applicable ).
   
   
 * system-status.reachability - Filters on system status where the name is 
   reachability ( passed | failed | initializing | insufficient-data ).
   
   
 * system-status.status - The system status of the instance ( ok | impaired | 
   initializing | insufficient-data | not-applicable ). **/
        Filters?: FilterList;
        /** The token to retrieve the next page of results. **/
        NextToken?: String;
        /** The maximum number of results to return in a single call. To retrieve the
remaining results, make another call with the returned NextToken value. This
value can be between 5 and 1000. You cannot specify this parameter and the
instance IDs parameter in the same call. **/
        MaxResults?: Integer;
        /** When true , includes the health status for all instances. When false , includes
the health status for running instances only.

Default: false **/
        IncludeAllInstances?: Boolean;
    }
    export interface DescribeInstanceStatusResult {
        /** One or more instance status descriptions. **/
        InstanceStatuses?: InstanceStatusList;
        /** The token to use to retrieve the next page of results. This value is null when
there are no more results to return. **/
        NextToken?: String;
    }
    export interface DescribeInstancesRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more instance IDs.

Default: Describes all your instances. **/
        InstanceIds?: InstanceIdStringList;
        /** One or more filters.

 &amp;#42; affinity - The affinity setting for an instance running on a Dedicated host ( 
   default | host ).
   
   
 * architecture - The instance architecture ( i386 | x86_64 ).
   
   
 * availability-zone - The Availability Zone of the instance.
   
   
 * block-device-mapping.attach-time - The attach time for an EBS volume mapped
   to the instance, for example, 2010-09-15T17:15:20.000Z .
   
   
 * block-device-mapping.delete-on-termination - A Boolean that indicates whether
   the EBS volume is deleted on instance termination.
   
   
 * block-device-mapping.device-name - The device name for the EBS volume (for
   example, /dev/sdh or xvdh ).
   
   
 * block-device-mapping.status - The status for the EBS volume ( attaching | 
   attached | detaching | detached ).
   
   
 * block-device-mapping.volume-id - The volume ID of the EBS volume.
   
   
 * client-token - The idempotency token you provided when you launched the
   instance.
   
   
 * dns-name - The public DNS name of the instance.
   
   
 * group-id - The ID of the security group for the instance. EC2-Classic only.
   
   
 * group-name - The name of the security group for the instance. EC2-Classic
   only.
   
   
 * host-Id - The ID of the Dedicated host on which the instance is running, if
   applicable.
   
   
 * hypervisor - The hypervisor type of the instance ( ovm | xen ).
   
   
 * iam-instance-profile.arn - The instance profile associated with the instance.
   Specified as an ARN.
   
   
 * image-id - The ID of the image used to launch the instance.
   
   
 * instance-id - The ID of the instance.
   
   
 * instance-lifecycle - Indicates whether this is a Spot Instance or a Scheduled
   Instance ( spot | scheduled ).
   
   
 * instance-state-code - The state of the instance, as a 16-bit unsigned
   integer. The high byte is an opaque internal value and should be ignored. The
   low byte is set based on the state represented. The valid values are: 0
   (pending), 16 (running), 32 (shutting-down), 48 (terminated), 64 (stopping),
   and 80 (stopped).
   
   
 * instance-state-name - The state of the instance ( pending | running | 
   shutting-down | terminated | stopping | stopped ).
   
   
 * instance-type - The type of instance (for example, t2.micro ).
   
   
 * instance.group-id - The ID of the security group for the instance.
   
   
 * instance.group-name - The name of the security group for the instance.
   
   
 * ip-address - The public IP address of the instance.
   
   
 * kernel-id - The kernel ID.
   
   
 * key-name - The name of the key pair used when the instance was launched.
   
   
 * launch-index - When launching multiple instances, this is the index for the
   instance in the launch group (for example, 0, 1, 2, and so on).
   
   
 * launch-time - The time when the instance was launched.
   
   
 * monitoring-state - Indicates whether monitoring is enabled for the instance ( 
   disabled | enabled ).
   
   
 * owner-id - The AWS account ID of the instance owner.
   
   
 * placement-group-name - The name of the placement group for the instance.
   
   
 * platform - The platform. Use windows if you have Windows instances;
   otherwise, leave blank.
   
   
 * private-dns-name - The private DNS name of the instance.
   
   
 * private-ip-address - The private IP address of the instance.
   
   
 * product-code - The product code associated with the AMI used to launch the
   instance.
   
   
 * product-code.type - The type of product code ( devpay | marketplace ).
   
   
 * ramdisk-id - The RAM disk ID.
   
   
 * reason - The reason for the current state of the instance (for example, shows
   &quot;User Initiated [date]&quot; when you stop or terminate the instance). Similar to
   the state-reason-code filter.
   
   
 * requester-id - The ID of the entity that launched the instance on your behalf
   (for example, AWS Management Console, Auto Scaling, and so on).
   
   
 * reservation-id - The ID of the instance&#x27;s reservation. A reservation ID is
   created any time you launch an instance. A reservation ID has a one-to-one
   relationship with an instance launch request, but can be associated with more
   than one instance if you launch multiple instances using the same launch
   request. For example, if you launch one instance, you&#x27;ll get one reservation
   ID. If you launch ten instances using the same launch request, you&#x27;ll also
   get one reservation ID.
   
   
 * root-device-name - The name of the root device for the instance (for example, 
   /dev/sda1 or /dev/xvda ).
   
   
 * root-device-type - The type of root device that the instance uses ( ebs | 
   instance-store ).
   
   
 * source-dest-check - Indicates whether the instance performs
   source/destination checking. A value of true means that checking is enabled,
   and false means checking is disabled. The value must be false for the
   instance to perform network address translation (NAT) in your VPC.
   
   
 * spot-instance-request-id - The ID of the Spot instance request.
   
   
 * state-reason-code - The reason code for the state change.
   
   
 * state-reason-message - A message that describes the state change.
   
   
 * subnet-id - The ID of the subnet for the instance.
   
   
 * tag : key = value - The key/value combination of a tag assigned to the
   resource, where tag : key is the tag&#x27;s key.
   
   
 * tag-key - The key of a tag assigned to the resource. This filter is
   independent of the tag-value filter. For example, if you use both the filter
   &quot;tag-key=Purpose&quot; and the filter &quot;tag-value=X&quot;, you get any resources
   assigned both the tag key Purpose (regardless of what the tag&#x27;s value is),
   and the tag value X (regardless of what the tag&#x27;s key is). If you want to
   list only resources where Purpose is X, see the tag : key = value filter.
   
   
 * tag-value - The value of a tag assigned to the resource. This filter is
   independent of the tag-key filter.
   
   
 * tenancy - The tenancy of an instance ( dedicated | default | host ).
   
   
 * virtualization-type - The virtualization type of the instance ( paravirtual | 
   hvm ).
   
   
 * vpc-id - The ID of the VPC that the instance is running in.
   
   
 * network-interface.description - The description of the network interface.
   
   
 * network-interface.subnet-id - The ID of the subnet for the network interface.
   
   
 * network-interface.vpc-id - The ID of the VPC for the network interface.
   
   
 * network-interface.network-interface-id - The ID of the network interface.
   
   
 * network-interface.owner-id - The ID of the owner of the network interface.
   
   
 * network-interface.availability-zone - The Availability Zone for the network
   interface.
   
   
 * network-interface.requester-id - The requester ID for the network interface.
   
   
 * network-interface.requester-managed - Indicates whether the network interface
   is being managed by AWS.
   
   
 * network-interface.status - The status of the network interface ( available )
   | in-use ).
   
   
 * network-interface.mac-address - The MAC address of the network interface.
   
   
 * network-interface.private-dns-name - The private DNS name of the network
   interface.
   
   
 * network-interface.source-dest-check - Whether the network interface performs
   source/destination checking. A value of true means checking is enabled, and 
   false means checking is disabled. The value must be false for the network
   interface to perform network address translation (NAT) in your VPC.
   
   
 * network-interface.group-id - The ID of a security group associated with the
   network interface.
   
   
 * network-interface.group-name - The name of a security group associated with
   the network interface.
   
   
 * network-interface.attachment.attachment-id - The ID of the interface
   attachment.
   
   
 * network-interface.attachment.instance-id - The ID of the instance to which
   the network interface is attached.
   
   
 * network-interface.attachment.instance-owner-id - The owner ID of the instance
   to which the network interface is attached.
   
   
 * network-interface.addresses.private-ip-address - The private IP address
   associated with the network interface.
   
   
 * network-interface.attachment.device-index - The device index to which the
   network interface is attached.
   
   
 * network-interface.attachment.status - The status of the attachment ( 
   attaching | attached | detaching | detached ).
   
   
 * network-interface.attachment.attach-time - The time that the network
   interface was attached to an instance.
   
   
 * network-interface.attachment.delete-on-termination - Specifies whether the
   attachment is deleted when an instance is terminated.
   
   
 * network-interface.addresses.primary - Specifies whether the IP address of the
   network interface is the primary private IP address.
   
   
 * network-interface.addresses.association.public-ip - The ID of the association
   of an Elastic IP address with a network interface.
   
   
 * network-interface.addresses.association.ip-owner-id - The owner ID of the
   private IP address associated with the network interface.
   
   
 * association.public-ip - The address of the Elastic IP address bound to the
   network interface.
   
   
 * association.ip-owner-id - The owner of the Elastic IP address associated with
   the network interface.
   
   
 * association.allocation-id - The allocation ID returned when you allocated the
   Elastic IP address for your network interface.
   
   
 * association.association-id - The association ID returned when the network
   interface was associated with an IP address. **/
        Filters?: FilterList;
        /** The token to request the next page of results. **/
        NextToken?: String;
        /** The maximum number of results to return in a single call. To retrieve the
remaining results, make another call with the returned NextToken value. This
value can be between 5 and 1000. You cannot specify this parameter and the
instance IDs parameter or tag filters in the same call. **/
        MaxResults?: Integer;
    }
    export interface DescribeInstancesResult {
        /** Zero or more reservations. **/
        Reservations?: ReservationList;
        /** The token to use to retrieve the next page of results. This value is null when
there are no more results to return. **/
        NextToken?: String;
    }
    export interface DescribeInternetGatewaysRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more Internet gateway IDs.

Default: Describes all your Internet gateways. **/
        InternetGatewayIds?: ValueStringList;
        /** One or more filters.

 &amp;#42; attachment.state - The current state of the attachment between the gateway
   and the VPC ( available ). Present only if a VPC is attached.
   
   
 * attachment.vpc-id - The ID of an attached VPC.
   
   
 * internet-gateway-id - The ID of the Internet gateway.
   
   
 * tag : key = value - The key/value combination of a tag assigned to the
   resource.
   
   
 * tag-key - The key of a tag assigned to the resource. This filter is
   independent of the tag-value filter. For example, if you use both the filter
   &quot;tag-key=Purpose&quot; and the filter &quot;tag-value=X&quot;, you get any resources
   assigned both the tag key Purpose (regardless of what the tag&#x27;s value is),
   and the tag value X (regardless of what the tag&#x27;s key is). If you want to
   list only resources where Purpose is X, see the tag : key = value filter.
   
   
 * tag-value - The value of a tag assigned to the resource. This filter is
   independent of the tag-key filter. **/
        Filters?: FilterList;
    }
    export interface DescribeInternetGatewaysResult {
        /** Information about one or more Internet gateways. **/
        InternetGateways?: InternetGatewayList;
    }
    export interface DescribeKeyPairsRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more key pair names.

Default: Describes all your key pairs. **/
        KeyNames?: KeyNameStringList;
        /** One or more filters.

 &amp;#42; fingerprint - The fingerprint of the key pair.
   
   
 * key-name - The name of the key pair. **/
        Filters?: FilterList;
    }
    export interface DescribeKeyPairsResult {
        /** Information about one or more key pairs. **/
        KeyPairs?: KeyPairList;
    }
    export interface DescribeMovingAddressesRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more Elastic IP addresses. **/
        PublicIps?: ValueStringList;
        /** The token to use to retrieve the next page of results. **/
        NextToken?: String;
        /** One or more filters.

 &amp;#42; moving-status - The status of the Elastic IP address ( MovingToVpc | 
   RestoringToClassic ). **/
        Filters?: FilterList;
        /** The maximum number of results to return for the request in a single page. The
remaining results of the initial request can be seen by sending another request
with the returned NextToken value. This value can be between 5 and 1000; if 
MaxResults is given a value outside of this range, an error is returned.

Default: If no value is provided, the default is 1000. **/
        MaxResults?: Integer;
    }
    export interface DescribeMovingAddressesResult {
        /** The status for each Elastic IP address. **/
        MovingAddressStatuses?: MovingAddressStatusSet;
        /** The token to use to retrieve the next page of results. This value is null when
there are no more results to return. **/
        NextToken?: String;
    }
    export interface DescribeNatGatewaysRequest {
        /** One or more NAT gateway IDs. **/
        NatGatewayIds?: ValueStringList;
        /** One or more filters.

 &amp;#42; nat-gateway-id - The ID of the NAT gateway.
   
   
 * state - The state of the NAT gateway ( pending | failed | available | 
   deleting | deleted ).
   
   
 * subnet-id - The ID of the subnet in which the NAT gateway resides.
   
   
 * vpc-id - The ID of the VPC in which the NAT gateway resides. **/
        Filter?: FilterList;
        /** The maximum number of items to return for this request. The request returns a
token that you can specify in a subsequent call to get the next set of results.

Constraint: If the value specified is greater than 1000, we return only 1000
items. **/
        MaxResults?: Integer;
        /** The token to retrieve the next page of results. **/
        NextToken?: String;
    }
    export interface DescribeNatGatewaysResult {
        /** Information about the NAT gateways. **/
        NatGateways?: NatGatewayList;
        /** The token to use to retrieve the next page of results. This value is null when
there are no more results to return. **/
        NextToken?: String;
    }
    export interface DescribeNetworkAclsRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more network ACL IDs.

Default: Describes all your network ACLs. **/
        NetworkAclIds?: ValueStringList;
        /** One or more filters.

 &amp;#42; association.association-id - The ID of an association ID for the ACL.
   
   
 * association.network-acl-id - The ID of the network ACL involved in the
   association.
   
   
 * association.subnet-id - The ID of the subnet involved in the association.
   
   
 * default - Indicates whether the ACL is the default network ACL for the VPC.
   
   
 * entry.cidr - The CIDR range specified in the entry.
   
   
 * entry.egress - Indicates whether the entry applies to egress traffic.
   
   
 * entry.icmp.code - The ICMP code specified in the entry, if any.
   
   
 * entry.icmp.type - The ICMP type specified in the entry, if any.
   
   
 * entry.port-range.from - The start of the port range specified in the entry.
   
   
 * entry.port-range.to - The end of the port range specified in the entry.
   
   
 * entry.protocol - The protocol specified in the entry ( tcp | udp | icmp or a
   protocol number).
   
   
 * entry.rule-action - Allows or denies the matching traffic ( allow | deny ).
   
   
 * entry.rule-number - The number of an entry (in other words, rule) in the
   ACL&#x27;s set of entries.
   
   
 * network-acl-id - The ID of the network ACL.
   
   
 * tag : key = value - The key/value combination of a tag assigned to the
   resource.
   
   
 * tag-key - The key of a tag assigned to the resource. This filter is
   independent of the tag-value filter. For example, if you use both the filter
   &quot;tag-key=Purpose&quot; and the filter &quot;tag-value=X&quot;, you get any resources
   assigned both the tag key Purpose (regardless of what the tag&#x27;s value is),
   and the tag value X (regardless of what the tag&#x27;s key is). If you want to
   list only resources where Purpose is X, see the tag : key = value filter.
   
   
 * tag-value - The value of a tag assigned to the resource. This filter is
   independent of the tag-key filter.
   
   
 * vpc-id - The ID of the VPC for the network ACL. **/
        Filters?: FilterList;
    }
    export interface DescribeNetworkAclsResult {
        /** Information about one or more network ACLs. **/
        NetworkAcls?: NetworkAclList;
    }
    export interface DescribeNetworkInterfaceAttributeRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the network interface. **/
        NetworkInterfaceId: String;
        /** The attribute of the network interface. **/
        Attribute?: NetworkInterfaceAttribute;
    }
    export interface DescribeNetworkInterfaceAttributeResult {
        /** The ID of the network interface. **/
        NetworkInterfaceId?: String;
        /** The description of the network interface. **/
        Description?: AttributeValue;
        /** Indicates whether source/destination checking is enabled. **/
        SourceDestCheck?: AttributeBooleanValue;
        /** The security groups associated with the network interface. **/
        Groups?: GroupIdentifierList;
        /** The attachment (if any) of the network interface. **/
        Attachment?: NetworkInterfaceAttachment;
    }
    export interface DescribeNetworkInterfacesRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more network interface IDs.

Default: Describes all your network interfaces. **/
        NetworkInterfaceIds?: NetworkInterfaceIdList;
        /** One or more filters.

 &amp;#42; addresses.private-ip-address - The private IP addresses associated with the
   network interface.
   
   
 * addresses.primary - Whether the private IP address is the primary IP address
   associated with the network interface.
   
   
 * addresses.association.public-ip - The association ID returned when the
   network interface was associated with the Elastic IP address.
   
   
 * addresses.association.owner-id - The owner ID of the addresses associated
   with the network interface.
   
   
 * association.association-id - The association ID returned when the network
   interface was associated with an IP address.
   
   
 * association.allocation-id - The allocation ID returned when you allocated the
   Elastic IP address for your network interface.
   
   
 * association.ip-owner-id - The owner of the Elastic IP address associated with
   the network interface.
   
   
 * association.public-ip - The address of the Elastic IP address bound to the
   network interface.
   
   
 * association.public-dns-name - The public DNS name for the network interface.
   
   
 * attachment.attachment-id - The ID of the interface attachment.
   
   
 * attachment.attach.time - The time that the network interface was attached to
   an instance.
   
   
 * attachment.delete-on-termination - Indicates whether the attachment is
   deleted when an instance is terminated.
   
   
 * attachment.device-index - The device index to which the network interface is
   attached.
   
   
 * attachment.instance-id - The ID of the instance to which the network
   interface is attached.
   
   
 * attachment.instance-owner-id - The owner ID of the instance to which the
   network interface is attached.
   
   
 * attachment.nat-gateway-id - The ID of the NAT gateway to which the network
   interface is attached.
   
   
 * attachment.status - The status of the attachment ( attaching | attached | 
   detaching | detached ).
   
   
 * availability-zone - The Availability Zone of the network interface.
   
   
 * description - The description of the network interface.
   
   
 * group-id - The ID of a security group associated with the network interface.
   
   
 * group-name - The name of a security group associated with the network
   interface.
   
   
 * mac-address - The MAC address of the network interface.
   
   
 * network-interface-id - The ID of the network interface.
   
   
 * owner-id - The AWS account ID of the network interface owner.
   
   
 * private-ip-address - The private IP address or addresses of the network
   interface.
   
   
 * private-dns-name - The private DNS name of the network interface.
   
   
 * requester-id - The ID of the entity that launched the instance on your behalf
   (for example, AWS Management Console, Auto Scaling, and so on).
   
   
 * requester-managed - Indicates whether the network interface is being managed
   by an AWS service (for example, AWS Management Console, Auto Scaling, and so
   on).
   
   
 * source-desk-check - Indicates whether the network interface performs
   source/destination checking. A value of true means checking is enabled, and 
   false means checking is disabled. The value must be false for the network
   interface to perform network address translation (NAT) in your VPC.
   
   
 * status - The status of the network interface. If the network interface is not
   attached to an instance, the status is available ; if a network interface is
   attached to an instance the status is in-use .
   
   
 * subnet-id - The ID of the subnet for the network interface.
   
   
 * tag : key = value - The key/value combination of a tag assigned to the
   resource.
   
   
 * tag-key - The key of a tag assigned to the resource. This filter is
   independent of the tag-value filter. For example, if you use both the filter
   &quot;tag-key=Purpose&quot; and the filter &quot;tag-value=X&quot;, you get any resources
   assigned both the tag key Purpose (regardless of what the tag&#x27;s value is),
   and the tag value X (regardless of what the tag&#x27;s key is). If you want to
   list only resources where Purpose is X, see the tag : key = value filter.
   
   
 * tag-value - The value of a tag assigned to the resource. This filter is
   independent of the tag-key filter.
   
   
 * vpc-id - The ID of the VPC for the network interface. **/
        Filters?: FilterList;
    }
    export interface DescribeNetworkInterfacesResult {
        /** Information about one or more network interfaces. **/
        NetworkInterfaces?: NetworkInterfaceList;
    }
    export interface DescribePlacementGroupsRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more placement group names.

Default: Describes all your placement groups, or only those otherwise specified. **/
        GroupNames?: PlacementGroupStringList;
        /** One or more filters.

 &amp;#42; group-name - The name of the placement group.
   
   
 * state - The state of the placement group ( pending | available | deleting | 
   deleted ).
   
   
 * strategy - The strategy of the placement group ( cluster ). **/
        Filters?: FilterList;
    }
    export interface DescribePlacementGroupsResult {
        /** One or more placement groups. **/
        PlacementGroups?: PlacementGroupList;
    }
    export interface DescribePrefixListsRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more prefix list IDs. **/
        PrefixListIds?: ValueStringList;
        /** One or more filters.

 &amp;#42; prefix-list-id : The ID of a prefix list.
   
   
 * prefix-list-name : The name of a prefix list. **/
        Filters?: FilterList;
        /** The maximum number of items to return for this request. The request returns a
token that you can specify in a subsequent call to get the next set of results.

Constraint: If the value specified is greater than 1000, we return only 1000
items. **/
        MaxResults?: Integer;
        /** The token for the next set of items to return. (You received this token from a
prior call.) **/
        NextToken?: String;
    }
    export interface DescribePrefixListsResult {
        /** All available prefix lists. **/
        PrefixLists?: PrefixListSet;
        /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
        NextToken?: String;
    }
    export interface DescribeRegionsRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The names of one or more regions. **/
        RegionNames?: RegionNameStringList;
        /** One or more filters.

 &amp;#42; endpoint - The endpoint of the region (for example, 
   ec2.us-east-1.amazonaws.com ).
   
   
 * region-name - The name of the region (for example, us-east-1 ). **/
        Filters?: FilterList;
    }
    export interface DescribeRegionsResult {
        /** Information about one or more regions. **/
        Regions?: RegionList;
    }
    export interface DescribeReservedInstancesListingsRequest {
        /** One or more Reserved Instance IDs. **/
        ReservedInstancesId?: String;
        /** One or more Reserved Instance listing IDs. **/
        ReservedInstancesListingId?: String;
        /** One or more filters.

 &amp;#42; reserved-instances-id - The ID of the Reserved Instances.
   
   
 * reserved-instances-listing-id - The ID of the Reserved Instances listing.
   
   
 * status - The status of the Reserved Instance listing ( pending | active | 
   cancelled | closed ).
   
   
 * status-message - The reason for the status. **/
        Filters?: FilterList;
    }
    export interface DescribeReservedInstancesListingsResult {
        /** Information about the Reserved Instance listing. **/
        ReservedInstancesListings?: ReservedInstancesListingList;
    }
    export interface DescribeReservedInstancesModificationsRequest {
        /** IDs for the submitted modification request. **/
        ReservedInstancesModificationIds?: ReservedInstancesModificationIdStringList;
        /** The token to retrieve the next page of results. **/
        NextToken?: String;
        /** One or more filters.

 &amp;#42; client-token - The idempotency token for the modification request.
   
   
 * create-date - The time when the modification request was created.
   
   
 * effective-date - The time when the modification becomes effective.
   
   
 * modification-result.reserved-instances-id - The ID for the Reserved Instances
   created as part of the modification request. This ID is only available when
   the status of the modification is fulfilled .
   
   
 * modification-result.target-configuration.availability-zone - The Availability
   Zone for the new Reserved Instances.
   
   
 * modification-result.target-configuration.instance-count - The number of new
   Reserved Instances.
   
   
 * modification-result.target-configuration.instance-type - The instance type of
   the new Reserved Instances.
   
   
 * modification-result.target-configuration.platform - The network platform of
   the new Reserved Instances ( EC2-Classic | EC2-VPC ).
   
   
 * reserved-instances-id - The ID of the Reserved Instances modified.
   
   
 * reserved-instances-modification-id - The ID of the modification request.
   
   
 * status - The status of the Reserved Instances modification request ( 
   processing | fulfilled | failed ).
   
   
 * status-message - The reason for the status.
   
   
 * update-date - The time when the modification request was last updated. **/
        Filters?: FilterList;
    }
    export interface DescribeReservedInstancesModificationsResult {
        /** The Reserved Instance modification information. **/
        ReservedInstancesModifications?: ReservedInstancesModificationList;
        /** The token to use to retrieve the next page of results. This value is null when
there are no more results to return. **/
        NextToken?: String;
    }
    export interface DescribeReservedInstancesOfferingsRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more Reserved Instances offering IDs. **/
        ReservedInstancesOfferingIds?: ReservedInstancesOfferingIdStringList;
        /** The instance type that the reservation will cover (for example, m1.small ). For
more information, see Instance Types
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html] in the 
Amazon Elastic Compute Cloud User Guide . **/
        InstanceType?: InstanceType;
        /** The Availability Zone in which the Reserved Instance can be used. **/
        AvailabilityZone?: String;
        /** The Reserved Instance product platform description. Instances that include 
(Amazon VPC) in the description are for use with Amazon VPC. **/
        ProductDescription?: RIProductDescription;
        /** One or more filters.

 &amp;#42; availability-zone - The Availability Zone where the Reserved Instance can be
   used.
   
   
 * duration - The duration of the Reserved Instance (for example, one year or
   three years), in seconds ( 31536000 | 94608000 ).
   
   
 * fixed-price - The purchase price of the Reserved Instance (for example,
   9800.0).
   
   
 * instance-type - The instance type that is covered by the reservation.
   
   
 * marketplace - Set to true to show only Reserved Instance Marketplace
   offerings. When this filter is not used, which is the default behavior, all
   offerings from both AWS and the Reserved Instance Marketplace are listed.
   
   
 * product-description - The Reserved Instance product platform description.
   Instances that include (Amazon VPC) in the product platform description will
   only be displayed to EC2-Classic account holders and are for use with Amazon
   VPC. ( Linux/UNIX | Linux/UNIX (Amazon VPC) | SUSE Linux | SUSE Linux (Amazon
   VPC) | Red Hat Enterprise Linux | Red Hat Enterprise Linux (Amazon VPC) | 
   Windows | Windows (Amazon VPC) | Windows with SQL Server Standard | Windows
   with SQL Server Standard (Amazon VPC) | Windows with SQL Server Web | Windows
   with SQL Server Web (Amazon VPC) | Windows with SQL Server Enterprise | 
   Windows with SQL Server Enterprise (Amazon VPC) )
   
   
 * reserved-instances-offering-id - The Reserved Instances offering ID.
   
   
 * usage-price - The usage price of the Reserved Instance, per hour (for
   example, 0.84). **/
        Filters?: FilterList;
        /** The tenancy of the instances covered by the reservation. A Reserved Instance
with a tenancy of dedicated is applied to instances that run in a VPC on
single-tenant hardware (i.e., Dedicated Instances).

Default: default **/
        InstanceTenancy?: Tenancy;
        /** The Reserved Instance offering type. If you are using tools that predate the
2011-11-01 API version, you only have access to the Medium Utilization Reserved
Instance offering type. **/
        OfferingType?: OfferingTypeValues;
        /** The token to retrieve the next page of results. **/
        NextToken?: String;
        /** The maximum number of results to return for the request in a single page. The
remaining results of the initial request can be seen by sending another request
with the returned NextToken value. The maximum is 100.

Default: 100 **/
        MaxResults?: Integer;
        /** Include Reserved Instance Marketplace offerings in the response. **/
        IncludeMarketplace?: Boolean;
        /** The minimum duration (in seconds) to filter when searching for offerings.

Default: 2592000 (1 month) **/
        MinDuration?: Long;
        /** The maximum duration (in seconds) to filter when searching for offerings.

Default: 94608000 (3 years) **/
        MaxDuration?: Long;
        /** The maximum number of instances to filter when searching for offerings.

Default: 20 **/
        MaxInstanceCount?: Integer;
    }
    export interface DescribeReservedInstancesOfferingsResult {
        /** A list of Reserved Instances offerings. **/
        ReservedInstancesOfferings?: ReservedInstancesOfferingList;
        /** The token to use to retrieve the next page of results. This value is null when
there are no more results to return. **/
        NextToken?: String;
    }
    export interface DescribeReservedInstancesRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more Reserved Instance IDs.

Default: Describes all your Reserved Instances, or only those otherwise
specified. **/
        ReservedInstancesIds?: ReservedInstancesIdStringList;
        /** One or more filters.

 &amp;#42; availability-zone - The Availability Zone where the Reserved Instance can be
   used.
   
   
 * duration - The duration of the Reserved Instance (one year or three years),
   in seconds ( 31536000 | 94608000 ).
   
   
 * end - The time when the Reserved Instance expires (for example,
   2015-08-07T11:54:42.000Z).
   
   
 * fixed-price - The purchase price of the Reserved Instance (for example,
   9800.0).
   
   
 * instance-type - The instance type that is covered by the reservation.
   
   
 * product-description - The Reserved Instance product platform description.
   Instances that include (Amazon VPC) in the product platform description will
   only be displayed to EC2-Classic account holders and are for use with Amazon
   VPC ( Linux/UNIX | Linux/UNIX (Amazon VPC) | SUSE Linux | SUSE Linux (Amazon
   VPC) | Red Hat Enterprise Linux | Red Hat Enterprise Linux (Amazon VPC) | 
   Windows | Windows (Amazon VPC) | Windows with SQL Server Standard | Windows
   with SQL Server Standard (Amazon VPC) | Windows with SQL Server Web | Windows
   with SQL Server Web (Amazon VPC) | Windows with SQL Server Enterprise | 
   Windows with SQL Server Enterprise (Amazon VPC) ).
   
   
 * reserved-instances-id - The ID of the Reserved Instance.
   
   
 * start - The time at which the Reserved Instance purchase request was placed
   (for example, 2014-08-07T11:54:42.000Z).
   
   
 * state - The state of the Reserved Instance ( payment-pending | active | 
   payment-failed | retired ).
   
   
 * tag : key = value - The key/value combination of a tag assigned to the
   resource.
   
   
 * tag-key - The key of a tag assigned to the resource. This filter is
   independent of the tag-value filter. For example, if you use both the filter
   &quot;tag-key=Purpose&quot; and the filter &quot;tag-value=X&quot;, you get any resources
   assigned both the tag key Purpose (regardless of what the tag&#x27;s value is),
   and the tag value X (regardless of what the tag&#x27;s key is). If you want to
   list only resources where Purpose is X, see the tag : key = value filter.
   
   
 * tag-value - The value of a tag assigned to the resource. This filter is
   independent of the tag-key filter.
   
   
 * usage-price - The usage price of the Reserved Instance, per hour (for
   example, 0.84). **/
        Filters?: FilterList;
        /** The Reserved Instance offering type. If you are using tools that predate the
2011-11-01 API version, you only have access to the Medium Utilization Reserved
Instance offering type. **/
        OfferingType?: OfferingTypeValues;
    }
    export interface DescribeReservedInstancesResult {
        /** A list of Reserved Instances. **/
        ReservedInstances?: ReservedInstancesList;
    }
    export interface DescribeRouteTablesRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more route table IDs.

Default: Describes all your route tables. **/
        RouteTableIds?: ValueStringList;
        /** One or more filters.

 &amp;#42; association.route-table-association-id - The ID of an association ID for the
   route table.
   
   
 * association.route-table-id - The ID of the route table involved in the
   association.
   
   
 * association.subnet-id - The ID of the subnet involved in the association.
   
   
 * association.main - Indicates whether the route table is the main route table
   for the VPC ( true | false ).
   
   
 * route-table-id - The ID of the route table.
   
   
 * route.destination-cidr-block - The CIDR range specified in a route in the
   table.
   
   
 * route.destination-prefix-list-id - The ID (prefix) of the AWS service
   specified in a route in the table.
   
   
 * route.gateway-id - The ID of a gateway specified in a route in the table.
   
   
 * route.instance-id - The ID of an instance specified in a route in the table.
   
   
 * route.nat-gateway-id - The ID of a NAT gateway.
   
   
 * route.origin - Describes how the route was created. CreateRouteTable 
   indicates that the route was automatically created when the route table was
   created; CreateRoute indicates that the route was manually added to the route
   table; EnableVgwRoutePropagation indicates that the route was propagated by
   route propagation.
   
   
 * route.state - The state of a route in the route table ( active | blackhole ).
   The blackhole state indicates that the route&#x27;s target isn&#x27;t available (for
   example, the specified gateway isn&#x27;t attached to the VPC, the specified NAT
   instance has been terminated, and so on).
   
   
 * route.vpc-peering-connection-id - The ID of a VPC peering connection
   specified in a route in the table.
   
   
 * tag : key = value - The key/value combination of a tag assigned to the
   resource.
   
   
 * tag-key - The key of a tag assigned to the resource. This filter is
   independent of the tag-value filter. For example, if you use both the filter
   &quot;tag-key=Purpose&quot; and the filter &quot;tag-value=X&quot;, you get any resources
   assigned both the tag key Purpose (regardless of what the tag&#x27;s value is),
   and the tag value X (regardless of what the tag&#x27;s key is). If you want to
   list only resources where Purpose is X, see the tag : key = value filter.
   
   
 * tag-value - The value of a tag assigned to the resource. This filter is
   independent of the tag-key filter.
   
   
 * vpc-id - The ID of the VPC for the route table. **/
        Filters?: FilterList;
    }
    export interface DescribeRouteTablesResult {
        /** Information about one or more route tables. **/
        RouteTables?: RouteTableList;
    }
    export interface DescribeScheduledInstanceAvailabilityRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The schedule recurrence. **/
        Recurrence: ScheduledInstanceRecurrenceRequest;
        /** The time period for the first schedule to start. **/
        FirstSlotStartTimeRange: SlotDateTimeRangeRequest;
        /** The minimum available duration, in hours. The minimum required duration is 1,200
hours per year. For example, the minimum daily schedule is 4 hours, the minimum
weekly schedule is 24 hours, and the minimum monthly schedule is 100 hours. **/
        MinSlotDurationInHours?: Integer;
        /** The maximum available duration, in hours. This value must be greater than 
MinSlotDurationInHours and less than 1,720. **/
        MaxSlotDurationInHours?: Integer;
        /** The token for the next set of results. **/
        NextToken?: String;
        /** The maximum number of results to return in a single call. This value can be
between 5 and 300. The default value is 300. To retrieve the remaining results,
make another call with the returned NextToken value. **/
        MaxResults?: Integer;
        /** One or more filters.

 &amp;#42; availability-zone - The Availability Zone (for example, us-west-2a ).
   
   
 * instance-type - The instance type (for example, c4.large ).
   
   
 * network-platform - The network platform ( EC2-Classic or EC2-VPC ).
   
   
 * platform - The platform ( Linux/UNIX or Windows ). **/
        Filters?: FilterList;
    }
    export interface DescribeScheduledInstanceAvailabilityResult {
        /** The token required to retrieve the next set of results. This value is null when
there are no more results to return. **/
        NextToken?: String;
        /** Information about the available Scheduled Instances. **/
        ScheduledInstanceAvailabilitySet?: ScheduledInstanceAvailabilitySet;
    }
    export interface DescribeScheduledInstancesRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more Scheduled Instance IDs. **/
        ScheduledInstanceIds?: ScheduledInstanceIdRequestSet;
        /** The time period for the first schedule to start. **/
        SlotStartTimeRange?: SlotStartTimeRangeRequest;
        /** The token for the next set of results. **/
        NextToken?: String;
        /** The maximum number of results to return in a single call. This value can be
between 5 and 300. The default value is 100. To retrieve the remaining results,
make another call with the returned NextToken value. **/
        MaxResults?: Integer;
        /** One or more filters.

 &amp;#42; availability-zone - The Availability Zone (for example, us-west-2a ).
   
   
 * instance-type - The instance type (for example, c4.large ).
   
   
 * network-platform - The network platform ( EC2-Classic or EC2-VPC ).
   
   
 * platform - The platform ( Linux/UNIX or Windows ). **/
        Filters?: FilterList;
    }
    export interface DescribeScheduledInstancesResult {
        /** The token required to retrieve the next set of results. This value is null when
there are no more results to return. **/
        NextToken?: String;
        /** Information about the Scheduled Instances. **/
        ScheduledInstanceSet?: ScheduledInstanceSet;
    }
    export interface DescribeSecurityGroupReferencesRequest {
        /** Checks whether you have the required permissions for the operation, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation. Otherwise, it is
UnauthorizedOperation. **/
        DryRun?: Boolean;
        /** One or more security group IDs in your account. **/
        GroupId: GroupIds;
    }
    export interface DescribeSecurityGroupReferencesResult {
        /** Information about the VPCs with the referencing security groups. **/
        SecurityGroupReferenceSet?: SecurityGroupReferences;
    }
    export interface DescribeSecurityGroupsRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** [EC2-Classic and default VPC only] One or more security group names. You can
specify either the security group name or the security group ID. For security
groups in a nondefault VPC, use the group-name filter to describe security
groups by name.

Default: Describes all your security groups. **/
        GroupNames?: GroupNameStringList;
        /** One or more security group IDs. Required for security groups in a nondefault
VPC.

Default: Describes all your security groups. **/
        GroupIds?: GroupIdStringList;
        /** One or more filters. If using multiple filters for rules, the results include
security groups for which any combination of rules - not necessarily a single
rule - match all filters.

 &amp;#42; description - The description of the security group.
   
   
 * egress.ip-permission.prefix-list-id - The ID (prefix) of the AWS service to
   which the security group allows access.
   
   
 * group-id - The ID of the security group.
   
   
 * group-name - The name of the security group.
   
   
 * ip-permission.cidr - A CIDR range that has been granted permission.
   
   
 * ip-permission.from-port - The start of port range for the TCP and UDP
   protocols, or an ICMP type number.
   
   
 * ip-permission.group-id - The ID of a security group that has been granted
   permission.
   
   
 * ip-permission.group-name - The name of a security group that has been granted
   permission.
   
   
 * ip-permission.protocol - The IP protocol for the permission ( tcp | udp | 
   icmp or a protocol number).
   
   
 * ip-permission.to-port - The end of port range for the TCP and UDP protocols,
   or an ICMP code.
   
   
 * ip-permission.user-id - The ID of an AWS account that has been granted
   permission.
   
   
 * owner-id - The AWS account ID of the owner of the security group.
   
   
 * tag-key - The key of a tag assigned to the security group.
   
   
 * tag-value - The value of a tag assigned to the security group.
   
   
 * vpc-id - The ID of the VPC specified when the security group was created. **/
        Filters?: FilterList;
    }
    export interface DescribeSecurityGroupsResult {
        /** Information about one or more security groups. **/
        SecurityGroups?: SecurityGroupList;
    }
    export interface DescribeSnapshotAttributeRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the EBS snapshot. **/
        SnapshotId: String;
        /** The snapshot attribute you would like to view. **/
        Attribute: SnapshotAttributeName;
    }
    export interface DescribeSnapshotAttributeResult {
        /** The ID of the EBS snapshot. **/
        SnapshotId?: String;
        /** A list of permissions for creating volumes from the snapshot. **/
        CreateVolumePermissions?: CreateVolumePermissionList;
        /** A list of product codes. **/
        ProductCodes?: ProductCodeList;
    }
    export interface DescribeSnapshotsRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more snapshot IDs.

Default: Describes snapshots for which you have launch permissions. **/
        SnapshotIds?: SnapshotIdStringList;
        /** Returns the snapshots owned by the specified owner. Multiple owners can be
specified. **/
        OwnerIds?: OwnerStringList;
        /** One or more AWS accounts IDs that can create volumes from the snapshot. **/
        RestorableByUserIds?: RestorableByStringList;
        /** One or more filters.

 &amp;#42; description - A description of the snapshot.
   
   
 * owner-alias - The AWS account alias (for example, amazon ) that owns the
   snapshot.
   
   
 * owner-id - The ID of the AWS account that owns the snapshot.
   
   
 * progress - The progress of the snapshot, as a percentage (for example, 80%).
   
   
 * snapshot-id - The snapshot ID.
   
   
 * start-time - The time stamp when the snapshot was initiated.
   
   
 * status - The status of the snapshot ( pending | completed | error ).
   
   
 * tag : key = value - The key/value combination of a tag assigned to the
   resource.
   
   
 * tag-key - The key of a tag assigned to the resource. This filter is
   independent of the tag-value filter. For example, if you use both the filter
   &quot;tag-key=Purpose&quot; and the filter &quot;tag-value=X&quot;, you get any resources
   assigned both the tag key Purpose (regardless of what the tag&#x27;s value is),
   and the tag value X (regardless of what the tag&#x27;s key is). If you want to
   list only resources where Purpose is X, see the tag : key = value filter.
   
   
 * tag-value - The value of a tag assigned to the resource. This filter is
   independent of the tag-key filter.
   
   
 * volume-id - The ID of the volume the snapshot is for.
   
   
 * volume-size - The size of the volume, in GiB. **/
        Filters?: FilterList;
        /** The NextToken value returned from a previous paginated DescribeSnapshots request
where MaxResults was used and the results exceeded the value of that parameter.
Pagination continues from the end of the previous results that returned the 
NextToken value. This value is null when there are no more results to return. **/
        NextToken?: String;
        /** The maximum number of snapshot results returned by DescribeSnapshots in
paginated output. When this parameter is used, DescribeSnapshots only returns 
MaxResults results in a single page along with a NextToken response element. The
remaining results of the initial request can be seen by sending another 
DescribeSnapshots request with the returned NextToken value. This value can be
between 5 and 1000; if MaxResults is given a value larger than 1000, only 1000
results are returned. If this parameter is not used, then DescribeSnapshots 
returns all results. You cannot specify this parameter and the snapshot IDs
parameter in the same request. **/
        MaxResults?: Integer;
    }
    export interface DescribeSnapshotsResult {
        /** Information about the snapshots. **/
        Snapshots?: SnapshotList;
        /** The NextToken value to include in a future DescribeSnapshots request. When the
results of a DescribeSnapshots request exceed MaxResults , this value can be
used to retrieve the next page of results. This value is null when there are no
more results to return. **/
        NextToken?: String;
    }
    export interface DescribeSpotDatafeedSubscriptionRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
    }
    export interface DescribeSpotDatafeedSubscriptionResult {
        /** The Spot instance data feed subscription. **/
        SpotDatafeedSubscription?: SpotDatafeedSubscription;
    }
    export interface DescribeSpotFleetInstancesRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the Spot fleet request. **/
        SpotFleetRequestId: String;
        /** The token for the next set of results. **/
        NextToken?: String;
        /** The maximum number of results to return in a single call. Specify a value
between 1 and 1000. The default value is 1000. To retrieve the remaining
results, make another call with the returned NextToken value. **/
        MaxResults?: Integer;
    }
    export interface DescribeSpotFleetInstancesResponse {
        /** The ID of the Spot fleet request. **/
        SpotFleetRequestId: String;
        /** The running instances. Note that this list is refreshed periodically and might
be out of date. **/
        ActiveInstances: ActiveInstanceSet;
        /** The token required to retrieve the next set of results. This value is null when
there are no more results to return. **/
        NextToken?: String;
    }
    export interface DescribeSpotFleetRequestHistoryRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the Spot fleet request. **/
        SpotFleetRequestId: String;
        /** The type of events to describe. By default, all events are described. **/
        EventType?: EventType;
        /** The starting date and time for the events, in UTC format (for example, YYYY - MM 
- DD T HH : MM : SS Z). **/
        StartTime: DateTime;
        /** The token for the next set of results. **/
        NextToken?: String;
        /** The maximum number of results to return in a single call. Specify a value
between 1 and 1000. The default value is 1000. To retrieve the remaining
results, make another call with the returned NextToken value. **/
        MaxResults?: Integer;
    }
    export interface DescribeSpotFleetRequestHistoryResponse {
        /** The ID of the Spot fleet request. **/
        SpotFleetRequestId: String;
        /** The starting date and time for the events, in UTC format (for example, YYYY - MM 
- DD T HH : MM : SS Z). **/
        StartTime: DateTime;
        /** The last date and time for the events, in UTC format (for example, YYYY - MM - 
DD T HH : MM : SS Z). All records up to this time were retrieved.

If nextToken indicates that there are more results, this value is not present. **/
        LastEvaluatedTime: DateTime;
        /** Information about the events in the history of the Spot fleet request. **/
        HistoryRecords: HistoryRecords;
        /** The token required to retrieve the next set of results. This value is null when
there are no more results to return. **/
        NextToken?: String;
    }
    export interface DescribeSpotFleetRequestsRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The IDs of the Spot fleet requests. **/
        SpotFleetRequestIds?: ValueStringList;
        /** The token for the next set of results. **/
        NextToken?: String;
        /** The maximum number of results to return in a single call. Specify a value
between 1 and 1000. The default value is 1000. To retrieve the remaining
results, make another call with the returned NextToken value. **/
        MaxResults?: Integer;
    }
    export interface DescribeSpotFleetRequestsResponse {
        /** Information about the configuration of your Spot fleet. **/
        SpotFleetRequestConfigs: SpotFleetRequestConfigSet;
        /** The token required to retrieve the next set of results. This value is null when
there are no more results to return. **/
        NextToken?: String;
    }
    export interface DescribeSpotInstanceRequestsRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more Spot instance request IDs. **/
        SpotInstanceRequestIds?: SpotInstanceRequestIdList;
        /** One or more filters.

 &amp;#42; availability-zone-group - The Availability Zone group.
   
   
 * create-time - The time stamp when the Spot instance request was created.
   
   
 * fault-code - The fault code related to the request.
   
   
 * fault-message - The fault message related to the request.
   
   
 * instance-id - The ID of the instance that fulfilled the request.
   
   
 * launch-group - The Spot instance launch group.
   
   
 * launch.block-device-mapping.delete-on-termination - Indicates whether the
   Amazon EBS volume is deleted on instance termination.
   
   
 * launch.block-device-mapping.device-name - The device name for the Amazon EBS
   volume (for example, /dev/sdh ).
   
   
 * launch.block-device-mapping.snapshot-id - The ID of the snapshot used for the
   Amazon EBS volume.
   
   
 * launch.block-device-mapping.volume-size - The size of the Amazon EBS volume,
   in GiB.
   
   
 * launch.block-device-mapping.volume-type - The type of the Amazon EBS volume: 
   gp2 for General Purpose SSD, io1 for Provisioned IOPS SSD, st1 for Throughput
   Optimized HDD, sc1 for Cold HDD, or standard for Magnetic.
   
   
 * launch.group-id - The security group for the instance.
   
   
 * launch.image-id - The ID of the AMI.
   
   
 * launch.instance-type - The type of instance (for example, m3.medium ).
   
   
 * launch.kernel-id - The kernel ID.
   
   
 * launch.key-name - The name of the key pair the instance launched with.
   
   
 * launch.monitoring-enabled - Whether monitoring is enabled for the Spot
   instance.
   
   
 * launch.ramdisk-id - The RAM disk ID.
   
   
 * network-interface.network-interface-id - The ID of the network interface.
   
   
 * network-interface.device-index - The index of the device for the network
   interface attachment on the instance.
   
   
 * network-interface.subnet-id - The ID of the subnet for the instance.
   
   
 * network-interface.description - A description of the network interface.
   
   
 * network-interface.private-ip-address - The primary private IP address of the
   network interface.
   
   
 * network-interface.delete-on-termination - Indicates whether the network
   interface is deleted when the instance is terminated.
   
   
 * network-interface.group-id - The ID of the security group associated with the
   network interface.
   
   
 * network-interface.group-name - The name of the security group associated with
   the network interface.
   
   
 * network-interface.addresses.primary - Indicates whether the IP address is the
   primary private IP address.
   
   
 * product-description - The product description associated with the instance ( 
   Linux/UNIX | Windows ).
   
   
 * spot-instance-request-id - The Spot instance request ID.
   
   
 * spot-price - The maximum hourly price for any Spot instance launched to
   fulfill the request.
   
   
 * state - The state of the Spot instance request ( open | active | closed | 
   cancelled | failed ). Spot bid status information can help you track your
   Amazon EC2 Spot instance requests. For more information, see Spot Bid Status
   [http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-bid-status.html] in
   the Amazon Elastic Compute Cloud User Guide.
   
   
 * status-code - The short code describing the most recent evaluation of your
   Spot instance request.
   
   
 * status-message - The message explaining the status of the Spot instance
   request.
   
   
 * tag : key = value - The key/value combination of a tag assigned to the
   resource.
   
   
 * tag-key - The key of a tag assigned to the resource. This filter is
   independent of the tag-value filter. For example, if you use both the filter
   &quot;tag-key=Purpose&quot; and the filter &quot;tag-value=X&quot;, you get any resources
   assigned both the tag key Purpose (regardless of what the tag&#x27;s value is),
   and the tag value X (regardless of what the tag&#x27;s key is). If you want to
   list only resources where Purpose is X, see the tag : key = value filter.
   
   
 * tag-value - The value of a tag assigned to the resource. This filter is
   independent of the tag-key filter.
   
   
 * type - The type of Spot instance request ( one-time | persistent ).
   
   
 * launched-availability-zone - The Availability Zone in which the bid is
   launched.
   
   
 * valid-from - The start date of the request.
   
   
 * valid-until - The end date of the request. **/
        Filters?: FilterList;
    }
    export interface DescribeSpotInstanceRequestsResult {
        /** One or more Spot instance requests. **/
        SpotInstanceRequests?: SpotInstanceRequestList;
    }
    export interface DescribeSpotPriceHistoryRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The date and time, up to the past 90 days, from which to start retrieving the
price history data, in UTC format (for example, YYYY - MM - DD T HH : MM : SS 
Z). **/
        StartTime?: DateTime;
        /** The date and time, up to the current date, from which to stop retrieving the
price history data, in UTC format (for example, YYYY - MM - DD T HH : MM : SS 
Z). **/
        EndTime?: DateTime;
        /** Filters the results by the specified instance types. **/
        InstanceTypes?: InstanceTypeList;
        /** Filters the results by the specified basic product descriptions. **/
        ProductDescriptions?: ProductDescriptionList;
        /** One or more filters.

 &amp;#42; availability-zone - The Availability Zone for which prices should be
   returned.
   
   
 * instance-type - The type of instance (for example, m3.medium ).
   
   
 * product-description - The product description for the Spot price ( Linux/UNIX 
   | SUSE Linux | Windows | Linux/UNIX (Amazon VPC) | SUSE Linux (Amazon VPC) | 
   Windows (Amazon VPC) ).
   
   
 * spot-price - The Spot price. The value must match exactly (or use wildcards;
   greater than or less than comparison is not supported).
   
   
 * timestamp - The timestamp of the Spot price history, in UTC format (for
   example, YYYY - MM - DD T HH : MM : SS Z). You can use wildcards (* and ?).
   Greater than or less than comparison is not supported. **/
        Filters?: FilterList;
        /** Filters the results by the specified Availability Zone. **/
        AvailabilityZone?: String;
        /** The maximum number of results to return in a single call. Specify a value
between 1 and 1000. The default value is 1000. To retrieve the remaining
results, make another call with the returned NextToken value. **/
        MaxResults?: Integer;
        /** The token for the next set of results. **/
        NextToken?: String;
    }
    export interface DescribeSpotPriceHistoryResult {
        /** The historical Spot prices. **/
        SpotPriceHistory?: SpotPriceHistoryList;
        /** The token required to retrieve the next set of results. This value is null when
there are no more results to return. **/
        NextToken?: String;
    }
    export interface DescribeStaleSecurityGroupsRequest {
        /** Checks whether you have the required permissions for the operation, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation. Otherwise, it is
UnauthorizedOperation. **/
        DryRun?: Boolean;
        /** The ID of the VPC. **/
        VpcId: String;
        /** The maximum number of items to return for this request. The request returns a
token that you can specify in a subsequent call to get the next set of results. **/
        MaxResults?: MaxResults;
        /** The token for the next set of items to return. (You received this token from a
prior call.) **/
        NextToken?: NextToken;
    }
    export interface DescribeStaleSecurityGroupsResult {
        /** Information about the stale security groups. **/
        StaleSecurityGroupSet?: StaleSecurityGroupSet;
        /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
        NextToken?: String;
    }
    export interface DescribeSubnetsRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more subnet IDs.

Default: Describes all your subnets. **/
        SubnetIds?: SubnetIdStringList;
        /** One or more filters.

 &amp;#42; availabilityZone - The Availability Zone for the subnet. You can also use 
   availability-zone as the filter name.
   
   
 * available-ip-address-count - The number of IP addresses in the subnet that
   are available.
   
   
 * cidrBlock - The CIDR block of the subnet. The CIDR block you specify must
   exactly match the subnet&#x27;s CIDR block for information to be returned for the
   subnet. You can also use cidr or cidr-block as the filter names.
   
   
 * defaultForAz - Indicates whether this is the default subnet for the
   Availability Zone. You can also use default-for-az as the filter name.
   
   
 * state - The state of the subnet ( pending | available ).
   
   
 * subnet-id - The ID of the subnet.
   
   
 * tag : key = value - The key/value combination of a tag assigned to the
   resource.
   
   
 * tag-key - The key of a tag assigned to the resource. This filter is
   independent of the tag-value filter. For example, if you use both the filter
   &quot;tag-key=Purpose&quot; and the filter &quot;tag-value=X&quot;, you get any resources
   assigned both the tag key Purpose (regardless of what the tag&#x27;s value is),
   and the tag value X (regardless of what the tag&#x27;s key is). If you want to
   list only resources where Purpose is X, see the tag : key = value filter.
   
   
 * tag-value - The value of a tag assigned to the resource. This filter is
   independent of the tag-key filter.
   
   
 * vpc-id - The ID of the VPC for the subnet. **/
        Filters?: FilterList;
    }
    export interface DescribeSubnetsResult {
        /** Information about one or more subnets. **/
        Subnets?: SubnetList;
    }
    export interface DescribeTagsRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more filters.

 &amp;#42; key - The tag key.
   
   
 * resource-id - The resource ID.
   
   
 * resource-type - The resource type ( customer-gateway | dhcp-options | image | 
   instance | internet-gateway | network-acl | network-interface | 
   reserved-instances | route-table | security-group | snapshot | 
   spot-instances-request | subnet | volume | vpc | vpn-connection | vpn-gateway 
   ).
   
   
 * value - The tag value. **/
        Filters?: FilterList;
        /** The maximum number of results to return in a single call. This value can be
between 5 and 1000. To retrieve the remaining results, make another call with
the returned NextToken value. **/
        MaxResults?: Integer;
        /** The token to retrieve the next page of results. **/
        NextToken?: String;
    }
    export interface DescribeTagsResult {
        /** A list of tags. **/
        Tags?: TagDescriptionList;
        /** The token to use to retrieve the next page of results. This value is null when
there are no more results to return.. **/
        NextToken?: String;
    }
    export interface DescribeVolumeAttributeRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the volume. **/
        VolumeId: String;
        /** The instance attribute. **/
        Attribute?: VolumeAttributeName;
    }
    export interface DescribeVolumeAttributeResult {
        /** The ID of the volume. **/
        VolumeId?: String;
        /** The state of autoEnableIO attribute. **/
        AutoEnableIO?: AttributeBooleanValue;
        /** A list of product codes. **/
        ProductCodes?: ProductCodeList;
    }
    export interface DescribeVolumeStatusRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more volume IDs.

Default: Describes all your volumes. **/
        VolumeIds?: VolumeIdStringList;
        /** One or more filters.

 &amp;#42; action.code - The action code for the event (for example, enable-volume-io ).
   
   
 * action.description - A description of the action.
   
   
 * action.event-id - The event ID associated with the action.
   
   
 * availability-zone - The Availability Zone of the instance.
   
   
 * event.description - A description of the event.
   
   
 * event.event-id - The event ID.
   
   
 * event.event-type - The event type (for io-enabled : passed | failed ; for 
   io-performance : io-performance:degraded | io-performance:severely-degraded | 
   io-performance:stalled ).
   
   
 * event.not-after - The latest end time for the event.
   
   
 * event.not-before - The earliest start time for the event.
   
   
 * volume-status.details-name - The cause for volume-status.status ( io-enabled 
   | io-performance ).
   
   
 * volume-status.details-status - The status of volume-status.details-name (for 
   io-enabled : passed | failed ; for io-performance : normal | degraded | 
   severely-degraded | stalled ).
   
   
 * volume-status.status - The status of the volume ( ok | impaired | warning | 
   insufficient-data ). **/
        Filters?: FilterList;
        /** The NextToken value to include in a future DescribeVolumeStatus request. When
the results of the request exceed MaxResults , this value can be used to
retrieve the next page of results. This value is null when there are no more
results to return. **/
        NextToken?: String;
        /** The maximum number of volume results returned by DescribeVolumeStatus in
paginated output. When this parameter is used, the request only returns 
MaxResults results in a single page along with a NextToken response element. The
remaining results of the initial request can be seen by sending another request
with the returned NextToken value. This value can be between 5 and 1000; if 
MaxResults is given a value larger than 1000, only 1000 results are returned. If
this parameter is not used, then DescribeVolumeStatus returns all results. You
cannot specify this parameter and the volume IDs parameter in the same request. **/
        MaxResults?: Integer;
    }
    export interface DescribeVolumeStatusResult {
        /** A list of volumes. **/
        VolumeStatuses?: VolumeStatusList;
        /** The token to use to retrieve the next page of results. This value is null when
there are no more results to return. **/
        NextToken?: String;
    }
    export interface DescribeVolumesRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more volume IDs. **/
        VolumeIds?: VolumeIdStringList;
        /** One or more filters.

 &amp;#42; attachment.attach-time - The time stamp when the attachment initiated.
   
   
 * attachment.delete-on-termination - Whether the volume is deleted on instance
   termination.
   
   
 * attachment.device - The device name that is exposed to the instance (for
   example, /dev/sda1 ).
   
   
 * attachment.instance-id - The ID of the instance the volume is attached to.
   
   
 * attachment.status - The attachment state ( attaching | attached | detaching | 
   detached ).
   
   
 * availability-zone - The Availability Zone in which the volume was created.
   
   
 * create-time - The time stamp when the volume was created.
   
   
 * encrypted - The encryption status of the volume.
   
   
 * size - The size of the volume, in GiB.
   
   
 * snapshot-id - The snapshot from which the volume was created.
   
   
 * status - The status of the volume ( creating | available | in-use | deleting 
   | deleted | error ).
   
   
 * tag : key = value - The key/value combination of a tag assigned to the
   resource.
   
   
 * tag-key - The key of a tag assigned to the resource. This filter is
   independent of the tag-value filter. For example, if you use both the filter
   &quot;tag-key=Purpose&quot; and the filter &quot;tag-value=X&quot;, you get any resources
   assigned both the tag key Purpose (regardless of what the tag&#x27;s value is),
   and the tag value X (regardless of what the tag&#x27;s key is). If you want to
   list only resources where Purpose is X, see the tag : key = value filter.
   
   
 * tag-value - The value of a tag assigned to the resource. This filter is
   independent of the tag-key filter.
   
   
 * volume-id - The volume ID.
   
   
 * volume-type - The Amazon EBS volume type. This can be gp2 for General Purpose
   SSD, io1 for Provisioned IOPS SSD, st1 for Throughput Optimized HDD, sc1 for
   Cold HDD, or standard for Magnetic volumes. **/
        Filters?: FilterList;
        /** The NextToken value returned from a previous paginated DescribeVolumes request
where MaxResults was used and the results exceeded the value of that parameter.
Pagination continues from the end of the previous results that returned the 
NextToken value. This value is null when there are no more results to return. **/
        NextToken?: String;
        /** The maximum number of volume results returned by DescribeVolumes in paginated
output. When this parameter is used, DescribeVolumes only returns MaxResults 
results in a single page along with a NextToken response element. The remaining
results of the initial request can be seen by sending another DescribeVolumes 
request with the returned NextToken value. This value can be between 5 and 1000;
if MaxResults is given a value larger than 1000, only 1000 results are returned.
If this parameter is not used, then DescribeVolumes returns all results. You
cannot specify this parameter and the volume IDs parameter in the same request. **/
        MaxResults?: Integer;
    }
    export interface DescribeVolumesResult {
        /** Information about the volumes. **/
        Volumes?: VolumeList;
        /** The NextToken value to include in a future DescribeVolumes request. When the
results of a DescribeVolumes request exceed MaxResults , this value can be used
to retrieve the next page of results. This value is null when there are no more
results to return. **/
        NextToken?: String;
    }
    export interface DescribeVpcAttributeRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the VPC. **/
        VpcId: String;
        /** The VPC attribute. **/
        Attribute: VpcAttributeName;
    }
    export interface DescribeVpcAttributeResult {
        /** The ID of the VPC. **/
        VpcId?: String;
        /** Indicates whether DNS resolution is enabled for the VPC. If this attribute is 
true , the Amazon DNS server resolves DNS hostnames for your instances to their
corresponding IP addresses; otherwise, it does not. **/
        EnableDnsSupport?: AttributeBooleanValue;
        /** Indicates whether the instances launched in the VPC get DNS hostnames. If this
attribute is true , instances in the VPC get DNS hostnames; otherwise, they do
not. **/
        EnableDnsHostnames?: AttributeBooleanValue;
    }
    export interface DescribeVpcClassicLinkDnsSupportRequest {
        /** One or more VPC IDs. **/
        VpcIds?: VpcClassicLinkIdList;
        /** The maximum number of items to return for this request. The request returns a
token that you can specify in a subsequent call to get the next set of results. **/
        MaxResults?: MaxResults;
        /** The token for the next set of items to return. (You received this token from a
prior call.) **/
        NextToken?: NextToken;
    }
    export interface DescribeVpcClassicLinkDnsSupportResult {
        /** Information about the ClassicLink DNS support status of the VPCs. **/
        Vpcs?: ClassicLinkDnsSupportList;
        /** The token to use when requesting the next set of items. **/
        NextToken?: NextToken;
    }
    export interface DescribeVpcClassicLinkRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more VPCs for which you want to describe the ClassicLink status. **/
        VpcIds?: VpcClassicLinkIdList;
        /** One or more filters.

 &amp;#42; is-classic-link-enabled - Whether the VPC is enabled for ClassicLink ( true | 
   false ).
   
   
 * tag : key = value - The key/value combination of a tag assigned to the
   resource.
   
   
 * tag-key - The key of a tag assigned to the resource. This filter is
   independent of the tag-value filter. For example, if you use both the filter
   &quot;tag-key=Purpose&quot; and the filter &quot;tag-value=X&quot;, you get any resources
   assigned both the tag key Purpose (regardless of what the tag&#x27;s value is),
   and the tag value X (regardless of what the tag&#x27;s key is). If you want to
   list only resources where Purpose is X, see the tag : key = value filter.
   
   
 * tag-value - The value of a tag assigned to the resource. This filter is
   independent of the tag-key filter. **/
        Filters?: FilterList;
    }
    export interface DescribeVpcClassicLinkResult {
        /** The ClassicLink status of one or more VPCs. **/
        Vpcs?: VpcClassicLinkList;
    }
    export interface DescribeVpcEndpointServicesRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The maximum number of items to return for this request. The request returns a
token that you can specify in a subsequent call to get the next set of results.

Constraint: If the value is greater than 1000, we return only 1000 items. **/
        MaxResults?: Integer;
        /** The token for the next set of items to return. (You received this token from a
prior call.) **/
        NextToken?: String;
    }
    export interface DescribeVpcEndpointServicesResult {
        /** A list of supported AWS services. **/
        ServiceNames?: ValueStringList;
        /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
        NextToken?: String;
    }
    export interface DescribeVpcEndpointsRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more endpoint IDs. **/
        VpcEndpointIds?: ValueStringList;
        /** One or more filters.

 &amp;#42; service-name : The name of the AWS service.
   
   
 * vpc-id : The ID of the VPC in which the endpoint resides.
   
   
 * vpc-endpoint-id : The ID of the endpoint.
   
   
 * vpc-endpoint-state : The state of the endpoint. ( pending | available | 
   deleting | deleted ) **/
        Filters?: FilterList;
        /** The maximum number of items to return for this request. The request returns a
token that you can specify in a subsequent call to get the next set of results.

Constraint: If the value is greater than 1000, we return only 1000 items. **/
        MaxResults?: Integer;
        /** The token for the next set of items to return. (You received this token from a
prior call.) **/
        NextToken?: String;
    }
    export interface DescribeVpcEndpointsResult {
        /** Information about the endpoints. **/
        VpcEndpoints?: VpcEndpointSet;
        /** The token to use when requesting the next set of items. If there are no
additional items to return, the string is empty. **/
        NextToken?: String;
    }
    export interface DescribeVpcPeeringConnectionsRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more VPC peering connection IDs.

Default: Describes all your VPC peering connections. **/
        VpcPeeringConnectionIds?: ValueStringList;
        /** One or more filters.

 &amp;#42; accepter-vpc-info.cidr-block - The CIDR block of the peer VPC.
   
   
 * accepter-vpc-info.owner-id - The AWS account ID of the owner of the peer VPC.
   
   
 * accepter-vpc-info.vpc-id - The ID of the peer VPC.
   
   
 * expiration-time - The expiration date and time for the VPC peering
   connection.
   
   
 * requester-vpc-info.cidr-block - The CIDR block of the requester&#x27;s VPC.
   
   
 * requester-vpc-info.owner-id - The AWS account ID of the owner of the
   requester VPC.
   
   
 * requester-vpc-info.vpc-id - The ID of the requester VPC.
   
   
 * status-code - The status of the VPC peering connection ( pending-acceptance | 
   failed | expired | provisioning | active | deleted | rejected ).
   
   
 * status-message - A message that provides more information about the status of
   the VPC peering connection, if applicable.
   
   
 * tag : key = value - The key/value combination of a tag assigned to the
   resource.
   
   
 * tag-key - The key of a tag assigned to the resource. This filter is
   independent of the tag-value filter. For example, if you use both the filter
   &quot;tag-key=Purpose&quot; and the filter &quot;tag-value=X&quot;, you get any resources
   assigned both the tag key Purpose (regardless of what the tag&#x27;s value is),
   and the tag value X (regardless of what the tag&#x27;s key is). If you want to
   list only resources where Purpose is X, see the tag : key = value filter.
   
   
 * tag-value - The value of a tag assigned to the resource. This filter is
   independent of the tag-key filter.
   
   
 * vpc-peering-connection-id - The ID of the VPC peering connection. **/
        Filters?: FilterList;
    }
    export interface DescribeVpcPeeringConnectionsResult {
        /** Information about the VPC peering connections. **/
        VpcPeeringConnections?: VpcPeeringConnectionList;
    }
    export interface DescribeVpcsRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more VPC IDs.

Default: Describes all your VPCs. **/
        VpcIds?: VpcIdStringList;
        /** One or more filters.

 &amp;#42; cidr - The CIDR block of the VPC. The CIDR block you specify must exactly
   match the VPC&#x27;s CIDR block for information to be returned for the VPC. Must
   contain the slash followed by one or two digits (for example, /28 ).
   
   
 * dhcp-options-id - The ID of a set of DHCP options.
   
   
 * isDefault - Indicates whether the VPC is the default VPC.
   
   
 * state - The state of the VPC ( pending | available ).
   
   
 * tag : key = value - The key/value combination of a tag assigned to the
   resource.
   
   
 * tag-key - The key of a tag assigned to the resource. This filter is
   independent of the tag-value filter. For example, if you use both the filter
   &quot;tag-key=Purpose&quot; and the filter &quot;tag-value=X&quot;, you get any resources
   assigned both the tag key Purpose (regardless of what the tag&#x27;s value is),
   and the tag value X (regardless of what the tag&#x27;s key is). If you want to
   list only resources where Purpose is X, see the tag : key = value filter.
   
   
 * tag-value - The value of a tag assigned to the resource. This filter is
   independent of the tag-key filter.
   
   
 * vpc-id - The ID of the VPC. **/
        Filters?: FilterList;
    }
    export interface DescribeVpcsResult {
        /** Information about one or more VPCs. **/
        Vpcs?: VpcList;
    }
    export interface DescribeVpnConnectionsRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more VPN connection IDs.

Default: Describes your VPN connections. **/
        VpnConnectionIds?: VpnConnectionIdStringList;
        /** One or more filters.

 &amp;#42; customer-gateway-configuration - The configuration information for the
   customer gateway.
   
   
 * customer-gateway-id - The ID of a customer gateway associated with the VPN
   connection.
   
   
 * state - The state of the VPN connection ( pending | available | deleting | 
   deleted ).
   
   
 * option.static-routes-only - Indicates whether the connection has static
   routes only. Used for devices that do not support Border Gateway Protocol
   (BGP).
   
   
 * route.destination-cidr-block - The destination CIDR block. This corresponds
   to the subnet used in a customer data center.
   
   
 * bgp-asn - The BGP Autonomous System Number (ASN) associated with a BGP
   device.
   
   
 * tag : key = value - The key/value combination of a tag assigned to the
   resource.
   
   
 * tag-key - The key of a tag assigned to the resource. This filter is
   independent of the tag-value filter. For example, if you use both the filter
   &quot;tag-key=Purpose&quot; and the filter &quot;tag-value=X&quot;, you get any resources
   assigned both the tag key Purpose (regardless of what the tag&#x27;s value is),
   and the tag value X (regardless of what the tag&#x27;s key is). If you want to
   list only resources where Purpose is X, see the tag : key = value filter.
   
   
 * tag-value - The value of a tag assigned to the resource. This filter is
   independent of the tag-key filter.
   
   
 * type - The type of VPN connection. Currently the only supported type is 
   ipsec.1 .
   
   
 * vpn-connection-id - The ID of the VPN connection.
   
   
 * vpn-gateway-id - The ID of a virtual private gateway associated with the VPN
   connection. **/
        Filters?: FilterList;
    }
    export interface DescribeVpnConnectionsResult {
        /** Information about one or more VPN connections. **/
        VpnConnections?: VpnConnectionList;
    }
    export interface DescribeVpnGatewaysRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more virtual private gateway IDs.

Default: Describes all your virtual private gateways. **/
        VpnGatewayIds?: VpnGatewayIdStringList;
        /** One or more filters.

 &amp;#42; attachment.state - The current state of the attachment between the gateway
   and the VPC ( attaching | attached | detaching | detached ).
   
   
 * attachment.vpc-id - The ID of an attached VPC.
   
   
 * availability-zone - The Availability Zone for the virtual private gateway (if
   applicable).
   
   
 * state - The state of the virtual private gateway ( pending | available | 
   deleting | deleted ).
   
   
 * tag : key = value - The key/value combination of a tag assigned to the
   resource.
   
   
 * tag-key - The key of a tag assigned to the resource. This filter is
   independent of the tag-value filter. For example, if you use both the filter
   &quot;tag-key=Purpose&quot; and the filter &quot;tag-value=X&quot;, you get any resources
   assigned both the tag key Purpose (regardless of what the tag&#x27;s value is),
   and the tag value X (regardless of what the tag&#x27;s key is). If you want to
   list only resources where Purpose is X, see the tag : key = value filter.
   
   
 * tag-value - The value of a tag assigned to the resource. This filter is
   independent of the tag-key filter.
   
   
 * type - The type of virtual private gateway. Currently the only supported type
   is ipsec.1 .
   
   
 * vpn-gateway-id - The ID of the virtual private gateway. **/
        Filters?: FilterList;
    }
    export interface DescribeVpnGatewaysResult {
        /** Information about one or more virtual private gateways. **/
        VpnGateways?: VpnGatewayList;
    }
    export interface DetachClassicLinkVpcRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the instance to unlink from the VPC. **/
        InstanceId: String;
        /** The ID of the VPC to which the instance is linked. **/
        VpcId: String;
    }
    export interface DetachClassicLinkVpcResult {
        /** Returns true if the request succeeds; otherwise, it returns an error. **/
        Return?: Boolean;
    }
    export interface DetachInternetGatewayRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the Internet gateway. **/
        InternetGatewayId: String;
        /** The ID of the VPC. **/
        VpcId: String;
    }
    export interface DetachNetworkInterfaceRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the attachment. **/
        AttachmentId: String;
        /** Specifies whether to force a detachment. **/
        Force?: Boolean;
    }
    export interface DetachVolumeRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the volume. **/
        VolumeId: String;
        /** The ID of the instance. **/
        InstanceId?: String;
        /** The device name. **/
        Device?: String;
        /** Forces detachment if the previous detachment attempt did not occur cleanly (for
example, logging into an instance, unmounting the volume, and detaching
normally). This option can lead to data loss or a corrupted file system. Use
this option only as a last resort to detach a volume from a failed instance. The
instance won&#x27;t have an opportunity to flush file system caches or file system
metadata. If you use this option, you must perform file system check and repair
procedures. **/
        Force?: Boolean;
    }
    export interface DetachVpnGatewayRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the virtual private gateway. **/
        VpnGatewayId: String;
        /** The ID of the VPC. **/
        VpcId: String;
    }
    export interface DhcpConfiguration {
        /** The name of a DHCP option. **/
        Key?: String;
        /** One or more values for the DHCP option. **/
        Values?: DhcpConfigurationValueList;
    }
    export interface DhcpOptions {
        /** The ID of the set of DHCP options. **/
        DhcpOptionsId?: String;
        /** One or more DHCP options in the set. **/
        DhcpConfigurations?: DhcpConfigurationList;
        /** Any tags assigned to the DHCP options set. **/
        Tags?: TagList;
    }
    export interface DisableVgwRoutePropagationRequest {
        /** The ID of the route table. **/
        RouteTableId: String;
        /** The ID of the virtual private gateway. **/
        GatewayId: String;
    }
    export interface DisableVpcClassicLinkDnsSupportRequest {
        /** The ID of the VPC. **/
        VpcId?: String;
    }
    export interface DisableVpcClassicLinkDnsSupportResult {
        /** Returns true if the request succeeds; otherwise, it returns an error. **/
        Return?: Boolean;
    }
    export interface DisableVpcClassicLinkRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the VPC. **/
        VpcId: String;
    }
    export interface DisableVpcClassicLinkResult {
        /** Returns true if the request succeeds; otherwise, it returns an error. **/
        Return?: Boolean;
    }
    export interface DisassociateAddressRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** [EC2-Classic] The Elastic IP address. Required for EC2-Classic. **/
        PublicIp?: String;
        /** [EC2-VPC] The association ID. Required for EC2-VPC. **/
        AssociationId?: String;
    }
    export interface DisassociateRouteTableRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The association ID representing the current association between the route table
and subnet. **/
        AssociationId: String;
    }
    export interface DiskImage {
        /** Information about the disk image. **/
        Image?: DiskImageDetail;
        /** A description of the disk image. **/
        Description?: String;
        /** Information about the volume. **/
        Volume?: VolumeDetail;
    }
    export interface DiskImageDescription {
        /** The disk image format. **/
        Format: DiskImageFormat;
        /** The size of the disk image, in GiB. **/
        Size: Long;
        /** A presigned URL for the import manifest stored in Amazon S3. For information
about creating a presigned URL for an Amazon S3 object, read the &quot;Query String
Request Authentication Alternative&quot; section of the Authenticating REST Requests
[http://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html] topic
in the Amazon Simple Storage Service Developer Guide .

For information about the import manifest referenced by this API action, see VM
Import Manifest
[http://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html] . **/
        ImportManifestUrl: String;
        /** The checksum computed for the disk image. **/
        Checksum?: String;
    }
    export interface DiskImageDetail {
        /** The disk image format. **/
        Format: DiskImageFormat;
        /** The size of the disk image, in GiB. **/
        Bytes: Long;
        /** A presigned URL for the import manifest stored in Amazon S3 and presented here
as an Amazon S3 presigned URL. For information about creating a presigned URL
for an Amazon S3 object, read the &quot;Query String Request Authentication
Alternative&quot; section of the Authenticating REST Requests
[http://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html] topic
in the Amazon Simple Storage Service Developer Guide .

For information about the import manifest referenced by this API action, see VM
Import Manifest
[http://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html] . **/
        ImportManifestUrl: String;
    }
    export interface DiskImageVolumeDescription {
        /** The size of the volume, in GiB. **/
        Size?: Long;
        /** The volume identifier. **/
        Id: String;
    }
    export interface EbsBlockDevice {
        /** The ID of the snapshot. **/
        SnapshotId?: String;
        /** The size of the volume, in GiB.

Constraints: 1-16384 for General Purpose SSD ( gp2 ), 4-16384 for Provisioned
IOPS SSD ( io1 ), 500-16384 for Throughput Optimized HDD ( st1 ), 500-16384 for
Cold HDD ( sc1 ), and 1-1024 for Magnetic ( standard ) volumes. If you specify a
snapshot, the volume size must be equal to or larger than the snapshot size.

Default: If you&#x27;re creating the volume from a snapshot and don&#x27;t specify a
volume size, the default is the snapshot size. **/
        VolumeSize?: Integer;
        /** Indicates whether the EBS volume is deleted on instance termination. **/
        DeleteOnTermination?: Boolean;
        /** The volume type: gp2 , io1 , st1 , sc1 , or standard .

Default: standard **/
        VolumeType?: VolumeType;
        /** The number of I/O operations per second (IOPS) that the volume supports. For io1 
, this represents the number of IOPS that are provisioned for the volume. For 
gp2 , this represents the baseline performance of the volume and the rate at
which the volume accumulates I/O credits for bursting. For more information
about General Purpose SSD baseline performance, I/O credits, and bursting, see 
Amazon EBS Volume Types
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html] in the 
Amazon Elastic Compute Cloud User Guide .

Constraint: Range is 100-20000 IOPS for io1 volumes and 100-10000 IOPS for gp2 
volumes.

Condition: This parameter is required for requests to create io1 volumes; it is
not used in requests to create gp2 , st1 , sc1 , or standard volumes. **/
        Iops?: Integer;
        /** Indicates whether the EBS volume is encrypted. Encrypted Amazon EBS volumes may
only be attached to instances that support Amazon EBS encryption. **/
        Encrypted?: Boolean;
    }
    export interface EbsInstanceBlockDevice {
        /** The ID of the EBS volume. **/
        VolumeId?: String;
        /** The attachment state. **/
        Status?: AttachmentStatus;
        /** The time stamp when the attachment initiated. **/
        AttachTime?: DateTime;
        /** Indicates whether the volume is deleted on instance termination. **/
        DeleteOnTermination?: Boolean;
    }
    export interface EbsInstanceBlockDeviceSpecification {
        /** The ID of the EBS volume. **/
        VolumeId?: String;
        /** Indicates whether the volume is deleted on instance termination. **/
        DeleteOnTermination?: Boolean;
    }
    export interface EnableVgwRoutePropagationRequest {
        /** The ID of the route table. **/
        RouteTableId: String;
        /** The ID of the virtual private gateway. **/
        GatewayId: String;
    }
    export interface EnableVolumeIORequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the volume. **/
        VolumeId: String;
    }
    export interface EnableVpcClassicLinkDnsSupportRequest {
        /** The ID of the VPC. **/
        VpcId?: String;
    }
    export interface EnableVpcClassicLinkDnsSupportResult {
        /** Returns true if the request succeeds; otherwise, it returns an error. **/
        Return?: Boolean;
    }
    export interface EnableVpcClassicLinkRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the VPC. **/
        VpcId: String;
    }
    export interface EnableVpcClassicLinkResult {
        /** Returns true if the request succeeds; otherwise, it returns an error. **/
        Return?: Boolean;
    }
    export interface EventInformation {
        /** The ID of the instance. This information is available only for instanceChange 
events. **/
        InstanceId?: String;
        /** The event.

The following are the error events.

 &amp;#42; iamFleetRoleInvalid - The Spot fleet did not have the required permissions
   either to launch or terminate an instance.
   
   
 * launchSpecTemporarilyBlacklisted - The configuration is not valid and several
   attempts to launch instances have failed. For more information, see the
   description of the event.
   
   
 * spotFleetRequestConfigurationInvalid - The configuration is not valid. For
   more information, see the description of the event.
   
   
 * spotInstanceCountLimitExceeded - You&#x27;ve reached the limit on the number of
   Spot instances that you can launch.
   
   

The following are the fleetRequestChange events.

 * active - The Spot fleet has been validated and Amazon EC2 is attempting to
   maintain the target number of running Spot instances.
   
   
 * cancelled - The Spot fleet is canceled and has no running Spot instances. The
   Spot fleet will be deleted two days after its instances were terminated.
   
   
 * cancelled_running - The Spot fleet is canceled and will not launch additional
   Spot instances, but its existing Spot instances continue to run until they
   are interrupted or terminated.
   
   
 * cancelled_terminating - The Spot fleet is canceled and its Spot instances are
   terminating.
   
   
 * expired - The Spot fleet request has expired. A subsequent event indicates
   that the instances were terminated, if the request was created with 
   TerminateInstancesWithExpiration set.
   
   
 * modify_in_progress - A request to modify the Spot fleet request was accepted
   and is in progress.
   
   
 * modify_successful - The Spot fleet request was modified.
   
   
 * price_update - The bid price for a launch configuration was adjusted because
   it was too high. This change is permanent.
   
   
 * submitted - The Spot fleet request is being evaluated and Amazon EC2 is
   preparing to launch the target number of Spot instances.
   
   

The following are the instanceChange events.

 * launched - A bid was fulfilled and a new instance was launched.
   
   
 * terminated - An instance was terminated by the user. **/
        EventSubType?: String;
        /** The description of the event. **/
        EventDescription?: String;
    }
    export interface ExportTask {
        /** The ID of the export task. **/
        ExportTaskId?: String;
        /** A description of the resource being exported. **/
        Description?: String;
        /** The state of the export task. **/
        State?: ExportTaskState;
        /** The status message related to the export task. **/
        StatusMessage?: String;
        /** Information about the instance to export. **/
        InstanceExportDetails?: InstanceExportDetails;
        /** Information about the export task. **/
        ExportToS3Task?: ExportToS3Task;
    }
    export interface ExportToS3Task {
        /** The format for the exported image. **/
        DiskImageFormat?: DiskImageFormat;
        /** The container format used to combine disk images with metadata (such as OVF). If
absent, only the disk image is exported. **/
        ContainerFormat?: ContainerFormat;
        /** The S3 bucket for the destination image. The destination bucket must exist and
grant WRITE and READ_ACP permissions to the AWS account 
vm-import-export@amazon.com . **/
        S3Bucket?: String;
        /** The encryption key for your S3 bucket. **/
        S3Key?: String;
    }
    export interface ExportToS3TaskSpecification {
        /** The format for the exported image. **/
        DiskImageFormat?: DiskImageFormat;
        /** The container format used to combine disk images with metadata (such as OVF). If
absent, only the disk image is exported. **/
        ContainerFormat?: ContainerFormat;
        /** The S3 bucket for the destination image. The destination bucket must exist and
grant WRITE and READ_ACP permissions to the AWS account 
vm-import-export@amazon.com . **/
        S3Bucket?: String;
        /** The image is written to a single object in the S3 bucket at the S3 key s3prefix
+ exportTaskId + &#x27;.&#x27; + diskImageFormat. **/
        S3Prefix?: String;
    }
    export interface Filter {
        /** The name of the filter. Filter names are case-sensitive. **/
        Name?: String;
        /** One or more filter values. Filter values are case-sensitive. **/
        Values?: ValueStringList;
    }
    export interface FlowLog {
        /** The date and time the flow log was created. **/
        CreationTime?: DateTime;
        /** The flow log ID. **/
        FlowLogId?: String;
        /** The status of the flow log ( ACTIVE ). **/
        FlowLogStatus?: String;
        /** The ID of the resource on which the flow log was created. **/
        ResourceId?: String;
        /** The type of traffic captured for the flow log. **/
        TrafficType?: TrafficType;
        /** The name of the flow log group. **/
        LogGroupName?: String;
        /** The status of the logs delivery ( SUCCESS | FAILED ). **/
        DeliverLogsStatus?: String;
        /** Information about the error that occurred. Rate limited indicates that
CloudWatch logs throttling has been applied for one or more network interfaces,
or that you&#x27;ve reached the limit on the number of CloudWatch Logs log groups
that you can create. Access error indicates that the IAM role associated with
the flow log does not have sufficient permissions to publish to CloudWatch Logs. 
Unknown error indicates an internal error. **/
        DeliverLogsErrorMessage?: String;
        /** The ARN of the IAM role that posts logs to CloudWatch Logs. **/
        DeliverLogsPermissionArn?: String;
    }
    export interface GetConsoleOutputRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the instance. **/
        InstanceId: String;
    }
    export interface GetConsoleOutputResult {
        /** The ID of the instance. **/
        InstanceId?: String;
        /** The time the output was last updated. **/
        Timestamp?: DateTime;
        /** The console output, Base64-encoded. If using a command line tool, the tool
decodes the output for you. **/
        Output?: String;
    }
    export interface GetConsoleScreenshotRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the instance. **/
        InstanceId: String;
        /** When set to true , acts as keystroke input and wakes up an instance that&#x27;s in
standby or &quot;sleep&quot; mode. **/
        WakeUp?: Boolean;
    }
    export interface GetConsoleScreenshotResult {
        /** The ID of the instance. **/
        InstanceId?: String;
        /** The data that comprises the image. **/
        ImageData?: String;
    }
    export interface GetPasswordDataRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the Windows instance. **/
        InstanceId: String;
    }
    export interface GetPasswordDataResult {
        /** The ID of the Windows instance. **/
        InstanceId?: String;
        /** The time the data was last updated. **/
        Timestamp?: DateTime;
        /** The password of the instance. **/
        PasswordData?: String;
    }
    export interface GroupIdentifier {
        /** The name of the security group. **/
        GroupName?: String;
        /** The ID of the security group. **/
        GroupId?: String;
    }
    export interface HistoryRecord {
        /** The date and time of the event, in UTC format (for example, YYYY - MM - DD T HH 
: MM : SS Z). **/
        Timestamp: DateTime;
        /** The event type.

 &amp;#42; error - Indicates an error with the Spot fleet request.
   
   
 * fleetRequestChange - Indicates a change in the status or configuration of the
   Spot fleet request.
   
   
 * instanceChange - Indicates that an instance was launched or terminated. **/
        EventType: EventType;
        /** Information about the event. **/
        EventInformation: EventInformation;
    }
    export interface Host {
        /** The ID of the Dedicated host. **/
        HostId?: String;
        /** Whether auto-placement is on or off. **/
        AutoPlacement?: AutoPlacement;
        /** The reservation ID of the Dedicated host. This returns a null response if the
Dedicated host doesn&#x27;t have an associated reservation. **/
        HostReservationId?: String;
        /** Unique, case-sensitive identifier you provide to ensure idempotency of the
request. For more information, see How to Ensure Idempotency
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html] 
in the Amazon Elastic Compute Cloud User Guide . **/
        ClientToken?: String;
        /** The hardware specifications of the Dedicated host. **/
        HostProperties?: HostProperties;
        /** The Dedicated host&#x27;s state. **/
        State?: AllocationState;
        /** The Availability Zone of the Dedicated host. **/
        AvailabilityZone?: String;
        /** The IDs and instance type that are currently running on the Dedicated host. **/
        Instances?: HostInstanceList;
        /** The number of new instances that can be launched onto the Dedicated host. **/
        AvailableCapacity?: AvailableCapacity;
    }
    export interface HostInstance {
        /** the IDs of instances that are running on the Dedicated host. **/
        InstanceId?: String;
        /** The instance type size (for example, m3.medium) of the running instance. **/
        InstanceType?: String;
    }
    export interface HostProperties {
        /** The number of sockets on the Dedicated host. **/
        Sockets?: Integer;
        /** The number of cores on the Dedicated host. **/
        Cores?: Integer;
        /** The number of vCPUs on the Dedicated host. **/
        TotalVCpus?: Integer;
        /** The instance type size that the Dedicated host supports (for example,
m3.medium). **/
        InstanceType?: String;
    }
    export interface IamInstanceProfile {
        /** The Amazon Resource Name (ARN) of the instance profile. **/
        Arn?: String;
        /** The ID of the instance profile. **/
        Id?: String;
    }
    export interface IamInstanceProfileSpecification {
        /** The Amazon Resource Name (ARN) of the instance profile. **/
        Arn?: String;
        /** The name of the instance profile. **/
        Name?: String;
    }
    export interface IcmpTypeCode {
        /** The ICMP code. A value of -1 means all codes for the specified ICMP type. **/
        Type?: Integer;
        /** The ICMP type. A value of -1 means all types. **/
        Code?: Integer;
    }
    export interface IdFormat {
        /** The type of resource. **/
        Resource?: String;
        /** Indicates whether longer IDs (17-character IDs) are enabled for the resource. **/
        UseLongIds?: Boolean;
        /** The date in UTC at which you are permanently switched over to using longer IDs.
If a deadline is not yet available for this resource type, this field is not
returned. **/
        Deadline?: DateTime;
    }
    export interface Image {
        /** The ID of the AMI. **/
        ImageId?: String;
        /** The location of the AMI. **/
        ImageLocation?: String;
        /** The current state of the AMI. If the state is available , the image is
successfully registered and can be used to launch an instance. **/
        State?: ImageState;
        /** The AWS account ID of the image owner. **/
        OwnerId?: String;
        /** The date and time the image was created. **/
        CreationDate?: String;
        /** Indicates whether the image has public launch permissions. The value is true if
this image has public launch permissions or false if it has only implicit and
explicit launch permissions. **/
        Public?: Boolean;
        /** Any product codes associated with the AMI. **/
        ProductCodes?: ProductCodeList;
        /** The architecture of the image. **/
        Architecture?: ArchitectureValues;
        /** The type of image. **/
        ImageType?: ImageTypeValues;
        /** The kernel associated with the image, if any. Only applicable for machine
images. **/
        KernelId?: String;
        /** The RAM disk associated with the image, if any. Only applicable for machine
images. **/
        RamdiskId?: String;
        /** The value is Windows for Windows AMIs; otherwise blank. **/
        Platform?: PlatformValues;
        /** Specifies whether enhanced networking is enabled. **/
        SriovNetSupport?: String;
        /** The reason for the state change. **/
        StateReason?: StateReason;
        /** The AWS account alias (for example, amazon , self ) or the AWS account ID of the
AMI owner. **/
        ImageOwnerAlias?: String;
        /** The name of the AMI that was provided during image creation. **/
        Name?: String;
        /** The description of the AMI that was provided during image creation. **/
        Description?: String;
        /** The type of root device used by the AMI. The AMI can use an EBS volume or an
instance store volume. **/
        RootDeviceType?: DeviceType;
        /** The device name of the root device (for example, /dev/sda1 or /dev/xvda ). **/
        RootDeviceName?: String;
        /** Any block device mapping entries. **/
        BlockDeviceMappings?: BlockDeviceMappingList;
        /** The type of virtualization of the AMI. **/
        VirtualizationType?: VirtualizationType;
        /** Any tags assigned to the image. **/
        Tags?: TagList;
        /** The hypervisor type of the image. **/
        Hypervisor?: HypervisorType;
    }
    export interface ImageAttribute {
        /** The ID of the AMI. **/
        ImageId?: String;
        /** One or more launch permissions. **/
        LaunchPermissions?: LaunchPermissionList;
        /** One or more product codes. **/
        ProductCodes?: ProductCodeList;
        /** The kernel ID. **/
        KernelId?: AttributeValue;
        /** The RAM disk ID. **/
        RamdiskId?: AttributeValue;
        /** A description for the AMI. **/
        Description?: AttributeValue;
        SriovNetSupport?: AttributeValue;
        /** One or more block device mapping entries. **/
        BlockDeviceMappings?: BlockDeviceMappingList;
    }
    export interface ImageDiskContainer {
        /** The description of the disk image. **/
        Description?: String;
        /** The format of the disk image being imported.

Valid values: RAW | VHD | VMDK | OVA **/
        Format?: String;
        /** The URL to the Amazon S3-based disk image being imported. The URL can either be
a https URL (https://..) or an Amazon S3 URL (s3://..) **/
        Url?: String;
        /** The S3 bucket for the disk image. **/
        UserBucket?: UserBucket;
        /** The block device mapping for the disk. **/
        DeviceName?: String;
        /** The ID of the EBS snapshot to be used for importing the snapshot. **/
        SnapshotId?: String;
    }
    export interface ImportImageRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** A description string for the import image task. **/
        Description?: String;
        /** Information about the disk containers. **/
        DiskContainers?: ImageDiskContainerList;
        /** The license type to be used for the Amazon Machine Image (AMI) after importing.

Note: You may only use BYOL if you have existing licenses with rights to use
these licenses in a third party cloud like AWS. For more information, see VM
Import/Export Prerequisites
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/VMImportPrerequisites.html] 
in the Amazon Elastic Compute Cloud User Guide .

Valid values: AWS | BYOL **/
        LicenseType?: String;
        /** The target hypervisor platform.

Valid values: xen **/
        Hypervisor?: String;
        /** The architecture of the virtual machine.

Valid values: i386 | x86_64 **/
        Architecture?: String;
        /** The operating system of the virtual machine.

Valid values: Windows | Linux **/
        Platform?: String;
        /** The client-specific data. **/
        ClientData?: ClientData;
        /** The token to enable idempotency for VM import requests. **/
        ClientToken?: String;
        /** The name of the role to use when not using the default role, &#x27;vmimport&#x27;. **/
        RoleName?: String;
    }
    export interface ImportImageResult {
        /** The task ID of the import image task. **/
        ImportTaskId?: String;
        /** The architecture of the virtual machine. **/
        Architecture?: String;
        /** The license type of the virtual machine. **/
        LicenseType?: String;
        /** The operating system of the virtual machine. **/
        Platform?: String;
        /** The target hypervisor of the import task. **/
        Hypervisor?: String;
        /** A description of the import task. **/
        Description?: String;
        /** Information about the snapshots. **/
        SnapshotDetails?: SnapshotDetailList;
        /** The ID of the Amazon Machine Image (AMI) created by the import task. **/
        ImageId?: String;
        /** The progress of the task. **/
        Progress?: String;
        /** A detailed status message of the import task. **/
        StatusMessage?: String;
        /** A brief status of the task. **/
        Status?: String;
    }
    export interface ImportImageTask {
        /** The ID of the import image task. **/
        ImportTaskId?: String;
        /** The architecture of the virtual machine.

Valid values: i386 | x86_64 **/
        Architecture?: String;
        /** The license type of the virtual machine. **/
        LicenseType?: String;
        /** The description string for the import image task. **/
        Platform?: String;
        /** The target hypervisor for the import task.

Valid values: xen **/
        Hypervisor?: String;
        /** A description of the import task. **/
        Description?: String;
        /** Information about the snapshots. **/
        SnapshotDetails?: SnapshotDetailList;
        /** The ID of the Amazon Machine Image (AMI) of the imported virtual machine. **/
        ImageId?: String;
        /** The percentage of progress of the import image task. **/
        Progress?: String;
        /** A descriptive status message for the import image task. **/
        StatusMessage?: String;
        /** A brief status for the import image task. **/
        Status?: String;
    }
    export interface ImportInstanceLaunchSpecification {
        /** The architecture of the instance. **/
        Architecture?: ArchitectureValues;
        /** One or more security group names. **/
        GroupNames?: SecurityGroupStringList;
        /** One or more security group IDs. **/
        GroupIds?: SecurityGroupIdStringList;
        /** Reserved. **/
        AdditionalInfo?: String;
        /** The user data to make available to the instance. If you are using an AWS SDK or
command line tool, Base64-encoding is performed for you, and you can load the
text from a file. Otherwise, you must provide Base64-encoded text. **/
        UserData?: UserData;
        /** The instance type. For more information about the instance types that you can
import, see Before You Get Started
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/VMImportPrerequisites.html] 
in the Amazon Elastic Compute Cloud User Guide. **/
        InstanceType?: InstanceType;
        /** The placement information for the instance. **/
        Placement?: Placement;
        /** Indicates whether monitoring is enabled. **/
        Monitoring?: Boolean;
        /** [EC2-VPC] The ID of the subnet in which to launch the instance. **/
        SubnetId?: String;
        /** Indicates whether an instance stops or terminates when you initiate shutdown
from the instance (using the operating system command for system shutdown). **/
        InstanceInitiatedShutdownBehavior?: ShutdownBehavior;
        /** [EC2-VPC] An available IP address from the IP address range of the subnet. **/
        PrivateIpAddress?: String;
    }
    export interface ImportInstanceRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** A description for the instance being imported. **/
        Description?: String;
        /** The launch specification. **/
        LaunchSpecification?: ImportInstanceLaunchSpecification;
        /** The disk image. **/
        DiskImages?: DiskImageList;
        /** The instance operating system. **/
        Platform: PlatformValues;
    }
    export interface ImportInstanceResult {
        /** Information about the conversion task. **/
        ConversionTask?: ConversionTask;
    }
    export interface ImportInstanceTaskDetails {
        /** One or more volumes. **/
        Volumes: ImportInstanceVolumeDetailSet;
        /** The ID of the instance. **/
        InstanceId?: String;
        /** The instance operating system. **/
        Platform?: PlatformValues;
        /** A description of the task. **/
        Description?: String;
    }
    export interface ImportInstanceVolumeDetailItem {
        /** The number of bytes converted so far. **/
        BytesConverted: Long;
        /** The Availability Zone where the resulting instance will reside. **/
        AvailabilityZone: String;
        /** The image. **/
        Image: DiskImageDescription;
        /** The volume. **/
        Volume: DiskImageVolumeDescription;
        /** The status of the import of this particular disk image. **/
        Status: String;
        /** The status information or errors related to the disk image. **/
        StatusMessage?: String;
        /** A description of the task. **/
        Description?: String;
    }
    export interface ImportKeyPairRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** A unique name for the key pair. **/
        KeyName: String;
        /** The public key. For API calls, the text must be base64-encoded. For command line
tools, base64 encoding is performed for you. **/
        PublicKeyMaterial: Blob;
    }
    export interface ImportKeyPairResult {
        /** The key pair name you provided. **/
        KeyName?: String;
        /** The MD5 public key fingerprint as specified in section 4 of RFC 4716. **/
        KeyFingerprint?: String;
    }
    export interface ImportSnapshotRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The description string for the import snapshot task. **/
        Description?: String;
        /** Information about the disk container. **/
        DiskContainer?: SnapshotDiskContainer;
        /** The client-specific data. **/
        ClientData?: ClientData;
        /** Token to enable idempotency for VM import requests. **/
        ClientToken?: String;
        /** The name of the role to use when not using the default role, &#x27;vmimport&#x27;. **/
        RoleName?: String;
    }
    export interface ImportSnapshotResult {
        /** The ID of the import snapshot task. **/
        ImportTaskId?: String;
        /** Information about the import snapshot task. **/
        SnapshotTaskDetail?: SnapshotTaskDetail;
        /** A description of the import snapshot task. **/
        Description?: String;
    }
    export interface ImportSnapshotTask {
        /** The ID of the import snapshot task. **/
        ImportTaskId?: String;
        /** Describes an import snapshot task. **/
        SnapshotTaskDetail?: SnapshotTaskDetail;
        /** A description of the import snapshot task. **/
        Description?: String;
    }
    export interface ImportVolumeRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The Availability Zone for the resulting EBS volume. **/
        AvailabilityZone: String;
        /** The disk image. **/
        Image: DiskImageDetail;
        /** A description of the volume. **/
        Description?: String;
        /** The volume size. **/
        Volume: VolumeDetail;
    }
    export interface ImportVolumeResult {
        /** Information about the conversion task. **/
        ConversionTask?: ConversionTask;
    }
    export interface ImportVolumeTaskDetails {
        /** The number of bytes converted so far. **/
        BytesConverted: Long;
        /** The Availability Zone where the resulting volume will reside. **/
        AvailabilityZone: String;
        /** The description you provided when starting the import volume task. **/
        Description?: String;
        /** The image. **/
        Image: DiskImageDescription;
        /** The volume. **/
        Volume: DiskImageVolumeDescription;
    }
    export interface Instance {
        /** The ID of the instance. **/
        InstanceId?: String;
        /** The ID of the AMI used to launch the instance. **/
        ImageId?: String;
        /** The current state of the instance. **/
        State?: InstanceState;
        /** The private DNS name assigned to the instance. This DNS name can only be used
inside the Amazon EC2 network. This name is not available until the instance
enters the running state. For EC2-VPC, this name is only available if you&#x27;ve
enabled DNS hostnames for your VPC. **/
        PrivateDnsName?: String;
        /** The public DNS name assigned to the instance. This name is not available until
the instance enters the running state. For EC2-VPC, this name is only available
if you&#x27;ve enabled DNS hostnames for your VPC. **/
        PublicDnsName?: String;
        /** The reason for the most recent state transition. This might be an empty string. **/
        StateTransitionReason?: String;
        /** The name of the key pair, if this instance was launched with an associated key
pair. **/
        KeyName?: String;
        /** The AMI launch index, which can be used to find this instance in the launch
group. **/
        AmiLaunchIndex?: Integer;
        /** The product codes attached to this instance, if applicable. **/
        ProductCodes?: ProductCodeList;
        /** The instance type. **/
        InstanceType?: InstanceType;
        /** The time the instance was launched. **/
        LaunchTime?: DateTime;
        /** The location where the instance launched, if applicable. **/
        Placement?: Placement;
        /** The kernel associated with this instance, if applicable. **/
        KernelId?: String;
        /** The RAM disk associated with this instance, if applicable. **/
        RamdiskId?: String;
        /** The value is Windows for Windows instances; otherwise blank. **/
        Platform?: PlatformValues;
        /** The monitoring information for the instance. **/
        Monitoring?: Monitoring;
        /** [EC2-VPC] The ID of the subnet in which the instance is running. **/
        SubnetId?: String;
        /** [EC2-VPC] The ID of the VPC in which the instance is running. **/
        VpcId?: String;
        /** The private IP address assigned to the instance. **/
        PrivateIpAddress?: String;
        /** The public IP address assigned to the instance, if applicable. **/
        PublicIpAddress?: String;
        /** The reason for the most recent state transition. **/
        StateReason?: StateReason;
        /** The architecture of the image. **/
        Architecture?: ArchitectureValues;
        /** The root device type used by the AMI. The AMI can use an EBS volume or an
instance store volume. **/
        RootDeviceType?: DeviceType;
        /** The root device name (for example, /dev/sda1 or /dev/xvda ). **/
        RootDeviceName?: String;
        /** Any block device mapping entries for the instance. **/
        BlockDeviceMappings?: InstanceBlockDeviceMappingList;
        /** The virtualization type of the instance. **/
        VirtualizationType?: VirtualizationType;
        /** Indicates whether this is a Spot instance or a Scheduled Instance. **/
        InstanceLifecycle?: InstanceLifecycleType;
        /** If the request is a Spot instance request, the ID of the request. **/
        SpotInstanceRequestId?: String;
        /** The idempotency token you provided when you launched the instance, if
applicable. **/
        ClientToken?: String;
        /** Any tags assigned to the instance. **/
        Tags?: TagList;
        /** One or more security groups for the instance. **/
        SecurityGroups?: GroupIdentifierList;
        /** Specifies whether to enable an instance launched in a VPC to perform NAT. This
controls whether source/destination checking is enabled on the instance. A value
of true means checking is enabled, and false means checking is disabled. The
value must be false for the instance to perform NAT. For more information, see 
NAT Instances
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_NAT_Instance.html] in
the Amazon Virtual Private Cloud User Guide . **/
        SourceDestCheck?: Boolean;
        /** The hypervisor type of the instance. **/
        Hypervisor?: HypervisorType;
        /** [EC2-VPC] One or more network interfaces for the instance. **/
        NetworkInterfaces?: InstanceNetworkInterfaceList;
        /** The IAM instance profile associated with the instance, if applicable. **/
        IamInstanceProfile?: IamInstanceProfile;
        /** Indicates whether the instance is optimized for EBS I/O. This optimization
provides dedicated throughput to Amazon EBS and an optimized configuration stack
to provide optimal I/O performance. This optimization isn&#x27;t available with all
instance types. Additional usage charges apply when using an EBS Optimized
instance. **/
        EbsOptimized?: Boolean;
        /** Specifies whether enhanced networking is enabled. **/
        SriovNetSupport?: String;
    }
    export interface InstanceAttribute {
        /** The ID of the instance. **/
        InstanceId?: String;
        /** The instance type. **/
        InstanceType?: AttributeValue;
        /** The kernel ID. **/
        KernelId?: AttributeValue;
        /** The RAM disk ID. **/
        RamdiskId?: AttributeValue;
        /** The user data. **/
        UserData?: AttributeValue;
        /** If the value is true , you can&#x27;t terminate the instance through the Amazon EC2
console, CLI, or API; otherwise, you can. **/
        DisableApiTermination?: AttributeBooleanValue;
        /** Indicates whether an instance stops or terminates when you initiate shutdown
from the instance (using the operating system command for system shutdown). **/
        InstanceInitiatedShutdownBehavior?: AttributeValue;
        /** The name of the root device (for example, /dev/sda1 or /dev/xvda ). **/
        RootDeviceName?: AttributeValue;
        /** The block device mapping of the instance. **/
        BlockDeviceMappings?: InstanceBlockDeviceMappingList;
        /** A list of product codes. **/
        ProductCodes?: ProductCodeList;
        /** Indicates whether the instance is optimized for EBS I/O. **/
        EbsOptimized?: AttributeBooleanValue;
        SriovNetSupport?: AttributeValue;
        /** Indicates whether source/destination checking is enabled. A value of true means
checking is enabled, and false means checking is disabled. This value must be 
false for a NAT instance to perform NAT. **/
        SourceDestCheck?: AttributeBooleanValue;
        /** The security groups associated with the instance. **/
        Groups?: GroupIdentifierList;
    }
    export interface InstanceBlockDeviceMapping {
        /** The device name exposed to the instance (for example, /dev/sdh or xvdh ). **/
        DeviceName?: String;
        /** Parameters used to automatically set up EBS volumes when the instance is
launched. **/
        Ebs?: EbsInstanceBlockDevice;
    }
    export interface InstanceBlockDeviceMappingSpecification {
        /** The device name exposed to the instance (for example, /dev/sdh or xvdh ). **/
        DeviceName?: String;
        /** Parameters used to automatically set up EBS volumes when the instance is
launched. **/
        Ebs?: EbsInstanceBlockDeviceSpecification;
        /** The virtual device name. **/
        VirtualName?: String;
        /** suppress the specified device included in the block device mapping. **/
        NoDevice?: String;
    }
    export interface InstanceCapacity {
        /** The instance type size supported by the Dedicated host. **/
        InstanceType?: String;
        /** The number of instances that can still be launched onto the Dedicated host. **/
        AvailableCapacity?: Integer;
        /** The total number of instances that can be launched onto the Dedicated host. **/
        TotalCapacity?: Integer;
    }
    export interface InstanceCount {
        /** The states of the listed Reserved Instances. **/
        State?: ListingState;
        /** The number of listed Reserved Instances in the state specified by the state . **/
        InstanceCount?: Integer;
    }
    export interface InstanceExportDetails {
        /** The ID of the resource being exported. **/
        InstanceId?: String;
        /** The target virtualization environment. **/
        TargetEnvironment?: ExportEnvironment;
    }
    export interface InstanceMonitoring {
        /** The ID of the instance. **/
        InstanceId?: String;
        /** The monitoring information. **/
        Monitoring?: Monitoring;
    }
    export interface InstanceNetworkInterface {
        /** The ID of the network interface. **/
        NetworkInterfaceId?: String;
        /** The ID of the subnet. **/
        SubnetId?: String;
        /** The ID of the VPC. **/
        VpcId?: String;
        /** The description. **/
        Description?: String;
        /** The ID of the AWS account that created the network interface. **/
        OwnerId?: String;
        /** The status of the network interface. **/
        Status?: NetworkInterfaceStatus;
        /** The MAC address. **/
        MacAddress?: String;
        /** The IP address of the network interface within the subnet. **/
        PrivateIpAddress?: String;
        /** The private DNS name. **/
        PrivateDnsName?: String;
        /** Indicates whether to validate network traffic to or from this network interface. **/
        SourceDestCheck?: Boolean;
        /** One or more security groups. **/
        Groups?: GroupIdentifierList;
        /** The network interface attachment. **/
        Attachment?: InstanceNetworkInterfaceAttachment;
        /** The association information for an Elastic IP associated with the network
interface. **/
        Association?: InstanceNetworkInterfaceAssociation;
        /** The private IP addresses associated with the network interface. **/
        PrivateIpAddresses?: InstancePrivateIpAddressList;
    }
    export interface InstanceNetworkInterfaceAssociation {
        /** The public IP address or Elastic IP address bound to the network interface. **/
        PublicIp?: String;
        /** The public DNS name. **/
        PublicDnsName?: String;
        /** The ID of the owner of the Elastic IP address. **/
        IpOwnerId?: String;
    }
    export interface InstanceNetworkInterfaceAttachment {
        /** The ID of the network interface attachment. **/
        AttachmentId?: String;
        /** The index of the device on the instance for the network interface attachment. **/
        DeviceIndex?: Integer;
        /** The attachment state. **/
        Status?: AttachmentStatus;
        /** The time stamp when the attachment initiated. **/
        AttachTime?: DateTime;
        /** Indicates whether the network interface is deleted when the instance is
terminated. **/
        DeleteOnTermination?: Boolean;
    }
    export interface InstanceNetworkInterfaceSpecification {
        /** The ID of the network interface. **/
        NetworkInterfaceId?: String;
        /** The index of the device on the instance for the network interface attachment. If
you are specifying a network interface in a RunInstances request, you must
provide the device index. **/
        DeviceIndex?: Integer;
        /** The ID of the subnet associated with the network string. Applies only if
creating a network interface when launching an instance. **/
        SubnetId?: String;
        /** The description of the network interface. Applies only if creating a network
interface when launching an instance. **/
        Description?: String;
        /** The private IP address of the network interface. Applies only if creating a
network interface when launching an instance. **/
        PrivateIpAddress?: String;
        /** The IDs of the security groups for the network interface. Applies only if
creating a network interface when launching an instance. **/
        Groups?: SecurityGroupIdStringList;
        /** If set to true , the interface is deleted when the instance is terminated. You
can specify true only if creating a new network interface when launching an
instance. **/
        DeleteOnTermination?: Boolean;
        /** One or more private IP addresses to assign to the network interface. Only one
private IP address can be designated as primary. **/
        PrivateIpAddresses?: PrivateIpAddressSpecificationList;
        /** The number of secondary private IP addresses. You can&#x27;t specify this option and
specify more than one private IP address using the private IP addresses option. **/
        SecondaryPrivateIpAddressCount?: Integer;
        /** Indicates whether to assign a public IP address to an instance you launch in a
VPC. The public IP address can only be assigned to a network interface for eth0,
and can only be assigned to a new network interface, not an existing one. You
cannot specify more than one network interface in the request. If launching into
a default subnet, the default value is true . **/
        AssociatePublicIpAddress?: Boolean;
    }
    export interface InstancePrivateIpAddress {
        /** The private IP address of the network interface. **/
        PrivateIpAddress?: String;
        /** The private DNS name. **/
        PrivateDnsName?: String;
        /** Indicates whether this IP address is the primary private IP address of the
network interface. **/
        Primary?: Boolean;
        /** The association information for an Elastic IP address for the network interface. **/
        Association?: InstanceNetworkInterfaceAssociation;
    }
    export interface InstanceState {
        /** The low byte represents the state. The high byte is an opaque internal value and
should be ignored.

 &amp;#42; 0 : pending
   
   
 * 16 : running
   
   
 * 32 : shutting-down
   
   
 * 48 : terminated
   
   
 * 64 : stopping
   
   
 * 80 : stopped **/
        Code?: Integer;
        /** The current state of the instance. **/
        Name?: InstanceStateName;
    }
    export interface InstanceStateChange {
        /** The ID of the instance. **/
        InstanceId?: String;
        /** The current state of the instance. **/
        CurrentState?: InstanceState;
        /** The previous state of the instance. **/
        PreviousState?: InstanceState;
    }
    export interface InstanceStatus {
        /** The ID of the instance. **/
        InstanceId?: String;
        /** The Availability Zone of the instance. **/
        AvailabilityZone?: String;
        /** Any scheduled events associated with the instance. **/
        Events?: InstanceStatusEventList;
        /** The intended state of the instance. DescribeInstanceStatus requires that an
instance be in the running state. **/
        InstanceState?: InstanceState;
        /** Reports impaired functionality that stems from issues related to the systems
that support an instance, such as hardware failures and network connectivity
problems. **/
        SystemStatus?: InstanceStatusSummary;
        /** Reports impaired functionality that stems from issues internal to the instance,
such as impaired reachability. **/
        InstanceStatus?: InstanceStatusSummary;
    }
    export interface InstanceStatusDetails {
        /** The type of instance status. **/
        Name?: StatusName;
        /** The status. **/
        Status?: StatusType;
        /** The time when a status check failed. For an instance that was launched and
impaired, this is the time when the instance was launched. **/
        ImpairedSince?: DateTime;
    }
    export interface InstanceStatusEvent {
        /** The event code. **/
        Code?: EventCode;
        /** A description of the event.

After a scheduled event is completed, it can still be described for up to a
week. If the event has been completed, this description starts with the
following text: [Completed]. **/
        Description?: String;
        /** The earliest scheduled start time for the event. **/
        NotBefore?: DateTime;
        /** The latest scheduled end time for the event. **/
        NotAfter?: DateTime;
    }
    export interface InstanceStatusSummary {
        /** The status. **/
        Status?: SummaryStatus;
        /** The system instance health or application instance health. **/
        Details?: InstanceStatusDetailsList;
    }
    export interface InternetGateway {
        /** The ID of the Internet gateway. **/
        InternetGatewayId?: String;
        /** Any VPCs attached to the Internet gateway. **/
        Attachments?: InternetGatewayAttachmentList;
        /** Any tags assigned to the Internet gateway. **/
        Tags?: TagList;
    }
    export interface InternetGatewayAttachment {
        /** The ID of the VPC. **/
        VpcId?: String;
        /** The current state of the attachment. **/
        State?: AttachmentStatus;
    }
    export interface IpPermission {
        /** The IP protocol name (for tcp , udp , and icmp ) or number (see Protocol Numbers
[http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml] ).

[EC2-VPC only] When you authorize or revoke security group rules, you can use -1 
to specify all. **/
        IpProtocol?: String;
        /** The start of port range for the TCP and UDP protocols, or an ICMP type number. A
value of -1 indicates all ICMP types. **/
        FromPort?: Integer;
        /** The end of port range for the TCP and UDP protocols, or an ICMP code. A value of 
-1 indicates all ICMP codes for the specified ICMP type. **/
        ToPort?: Integer;
        /** One or more security group and AWS account ID pairs. **/
        UserIdGroupPairs?: UserIdGroupPairList;
        /** One or more IP ranges. **/
        IpRanges?: IpRangeList;
        /** (Valid for AuthorizeSecurityGroupEgress , RevokeSecurityGroupEgress and 
DescribeSecurityGroups only) One or more prefix list IDs for an AWS service. In
an AuthorizeSecurityGroupEgress request, this is the AWS service that you want
to access through a VPC endpoint from instances associated with the security
group. **/
        PrefixListIds?: PrefixListIdList;
    }
    export interface IpRange {
        /** The CIDR range. You can either specify a CIDR range or a source security group,
not both. **/
        CidrIp?: String;
    }
    export interface KeyPair {
        /** The name of the key pair. **/
        KeyName?: String;
        /** The SHA-1 digest of the DER encoded private key. **/
        KeyFingerprint?: String;
        /** An unencrypted PEM encoded RSA private key. **/
        KeyMaterial?: String;
    }
    export interface KeyPairInfo {
        /** The name of the key pair. **/
        KeyName?: String;
        /** If you used CreateKeyPair to create the key pair, this is the SHA-1 digest of
the DER encoded private key. If you used ImportKeyPair to provide AWS the public
key, this is the MD5 public key fingerprint as specified in section 4 of
RFC4716. **/
        KeyFingerprint?: String;
    }
    export interface LaunchPermission {
        /** The AWS account ID. **/
        UserId?: String;
        /** The name of the group. **/
        Group?: PermissionGroup;
    }
    export interface LaunchPermissionModifications {
        /** The AWS account ID to add to the list of launch permissions for the AMI. **/
        Add?: LaunchPermissionList;
        /** The AWS account ID to remove from the list of launch permissions for the AMI. **/
        Remove?: LaunchPermissionList;
    }
    export interface LaunchSpecification {
        /** The ID of the AMI. **/
        ImageId?: String;
        /** The name of the key pair. **/
        KeyName?: String;
        /** One or more security groups. When requesting instances in a VPC, you must
specify the IDs of the security groups. When requesting instances in
EC2-Classic, you can specify the names or the IDs of the security groups. **/
        SecurityGroups?: GroupIdentifierList;
        /** The user data to make available to the instances. If you are using an AWS SDK or
command line tool, Base64-encoding is performed for you, and you can load the
text from a file. Otherwise, you must provide Base64-encoded text. **/
        UserData?: String;
        /** Deprecated. **/
        AddressingType?: String;
        /** The instance type. **/
        InstanceType?: InstanceType;
        /** The placement information for the instance. **/
        Placement?: SpotPlacement;
        /** The ID of the kernel. **/
        KernelId?: String;
        /** The ID of the RAM disk. **/
        RamdiskId?: String;
        /** One or more block device mapping entries.

Although you can specify encrypted EBS volumes in this block device mapping for
your Spot Instances, these volumes are not encrypted. **/
        BlockDeviceMappings?: BlockDeviceMappingList;
        /** The ID of the subnet in which to launch the instance. **/
        SubnetId?: String;
        /** One or more network interfaces. **/
        NetworkInterfaces?: InstanceNetworkInterfaceSpecificationList;
        /** The IAM instance profile. **/
        IamInstanceProfile?: IamInstanceProfileSpecification;
        /** Indicates whether the instance is optimized for EBS I/O. This optimization
provides dedicated throughput to Amazon EBS and an optimized configuration stack
to provide optimal EBS I/O performance. This optimization isn&#x27;t available with
all instance types. Additional usage charges apply when using an EBS Optimized
instance.

Default: false **/
        EbsOptimized?: Boolean;
        Monitoring?: RunInstancesMonitoringEnabled;
    }
    export interface ModifyHostsRequest {
        /** The host IDs of the Dedicated hosts you want to modify. **/
        HostIds: RequestHostIdList;
        /** Specify whether to enable or disable auto-placement. **/
        AutoPlacement: AutoPlacement;
    }
    export interface ModifyHostsResult {
        /** The IDs of the Dedicated hosts that were successfully modified. **/
        Successful?: ResponseHostIdList;
        /** The IDs of the Dedicated hosts that could not be modified. Check whether the
setting you requested can be used. **/
        Unsuccessful?: UnsuccessfulItemList;
    }
    export interface ModifyIdFormatRequest {
        /** The type of resource. **/
        Resource: String;
        /** Indicate whether the resource should use longer IDs (17-character IDs). **/
        UseLongIds: Boolean;
    }
    export interface ModifyIdentityIdFormatRequest {
        /** The type of resource. **/
        Resource: String;
        /** Indicates whether the resource should use longer IDs (17-character IDs) **/
        UseLongIds: Boolean;
        /** The ARN of the principal, which can be an IAM user, IAM role, or the root user. **/
        PrincipalArn: String;
    }
    export interface ModifyImageAttributeRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the AMI. **/
        ImageId: String;
        /** The name of the attribute to modify. **/
        Attribute?: String;
        /** The operation type. **/
        OperationType?: OperationType;
        /** One or more AWS account IDs. This is only valid when modifying the 
launchPermission attribute. **/
        UserIds?: UserIdStringList;
        /** One or more user groups. This is only valid when modifying the launchPermission 
attribute. **/
        UserGroups?: UserGroupStringList;
        /** One or more product codes. After you add a product code to an AMI, it can&#x27;t be
removed. This is only valid when modifying the productCodes attribute. **/
        ProductCodes?: ProductCodeStringList;
        /** The value of the attribute being modified. This is only valid when modifying the 
description attribute. **/
        Value?: String;
        /** A launch permission modification. **/
        LaunchPermission?: LaunchPermissionModifications;
        /** A description for the AMI. **/
        Description?: AttributeValue;
    }
    export interface ModifyInstanceAttributeRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the instance. **/
        InstanceId: String;
        /** The name of the attribute. **/
        Attribute?: InstanceAttributeName;
        /** A new value for the attribute. Use only with the kernel , ramdisk , userData , 
disableApiTermination , or instanceInitiatedShutdownBehavior attribute. **/
        Value?: String;
        /** Modifies the DeleteOnTermination attribute for volumes that are currently
attached. The volume must be owned by the caller. If no value is specified for 
DeleteOnTermination , the default is true and the volume is deleted when the
instance is terminated.

To add instance store volumes to an Amazon EBS-backed instance, you must add
them when you launch the instance. For more information, see Updating the Block
Device Mapping when Launching an Instance
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html#Using_OverridingAMIBDM] 
in the Amazon Elastic Compute Cloud User Guide . **/
        BlockDeviceMappings?: InstanceBlockDeviceMappingSpecificationList;
        /** Specifies whether source/destination checking is enabled. A value of true means
that checking is enabled, and false means checking is disabled. This value must
be false for a NAT instance to perform NAT. **/
        SourceDestCheck?: AttributeBooleanValue;
        /** If the value is true , you can&#x27;t terminate the instance using the Amazon EC2
console, CLI, or API; otherwise, you can. You cannot use this paramater for Spot
Instances. **/
        DisableApiTermination?: AttributeBooleanValue;
        /** Changes the instance type to the specified value. For more information, see 
Instance Types
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html] . If
the instance type is not valid, the error returned is 
InvalidInstanceAttributeValue . **/
        InstanceType?: AttributeValue;
        /** Changes the instance&#x27;s kernel to the specified value. We recommend that you use
PV-GRUB instead of kernels and RAM disks. For more information, see PV-GRUB
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html] . **/
        Kernel?: AttributeValue;
        /** Changes the instance&#x27;s RAM disk to the specified value. We recommend that you
use PV-GRUB instead of kernels and RAM disks. For more information, see PV-GRUB
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html] . **/
        Ramdisk?: AttributeValue;
        /** Changes the instance&#x27;s user data to the specified value. If you are using an AWS
SDK or command line tool, Base64-encoding is performed for you, and you can load
the text from a file. Otherwise, you must provide Base64-encoded text. **/
        UserData?: BlobAttributeValue;
        /** Specifies whether an instance stops or terminates when you initiate shutdown
from the instance (using the operating system command for system shutdown). **/
        InstanceInitiatedShutdownBehavior?: AttributeValue;
        /** [EC2-VPC] Changes the security groups of the instance. You must specify at least
one security group, even if it&#x27;s just the default security group for the VPC.
You must specify the security group ID, not the security group name. **/
        Groups?: GroupIdStringList;
        /** Specifies whether the instance is optimized for EBS I/O. This optimization
provides dedicated throughput to Amazon EBS and an optimized configuration stack
to provide optimal EBS I/O performance. This optimization isn&#x27;t available with
all instance types. Additional usage charges apply when using an EBS Optimized
instance. **/
        EbsOptimized?: AttributeBooleanValue;
        /** Set to simple to enable enhanced networking for the instance.

There is no way to disable enhanced networking at this time.

This option is supported only for HVM instances. Specifying this option with a
PV instance can make it unreachable. **/
        SriovNetSupport?: AttributeValue;
    }
    export interface ModifyInstancePlacementRequest {
        /** The ID of the instance that you are modifying. **/
        InstanceId: String;
        /** The tenancy of the instance that you are modifying. **/
        Tenancy?: HostTenancy;
        /** The new affinity setting for the instance. **/
        Affinity?: Affinity;
        /** The ID of the Dedicated host that the instance will have affinity with. **/
        HostId?: String;
    }
    export interface ModifyInstancePlacementResult {
        /** Is true if the request succeeds, and an error otherwise. **/
        Return?: Boolean;
    }
    export interface ModifyNetworkInterfaceAttributeRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the network interface. **/
        NetworkInterfaceId: String;
        /** A description for the network interface. **/
        Description?: AttributeValue;
        /** Indicates whether source/destination checking is enabled. A value of true means
checking is enabled, and false means checking is disabled. This value must be 
false for a NAT instance to perform NAT. For more information, see NAT Instances
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_NAT_Instance.html] in
the Amazon Virtual Private Cloud User Guide . **/
        SourceDestCheck?: AttributeBooleanValue;
        /** Changes the security groups for the network interface. The new set of groups you
specify replaces the current set. You must specify at least one group, even if
it&#x27;s just the default security group in the VPC. You must specify the ID of the
security group, not the name. **/
        Groups?: SecurityGroupIdStringList;
        /** Information about the interface attachment. If modifying the &#x27;delete on
termination&#x27; attribute, you must specify the ID of the interface attachment. **/
        Attachment?: NetworkInterfaceAttachmentChanges;
    }
    export interface ModifyReservedInstancesRequest {
        /** A unique, case-sensitive token you provide to ensure idempotency of your
modification request. For more information, see Ensuring Idempotency
[http://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html] 
. **/
        ClientToken?: String;
        /** The IDs of the Reserved Instances to modify. **/
        ReservedInstancesIds: ReservedInstancesIdStringList;
        /** The configuration settings for the Reserved Instances to modify. **/
        TargetConfigurations: ReservedInstancesConfigurationList;
    }
    export interface ModifyReservedInstancesResult {
        /** The ID for the modification. **/
        ReservedInstancesModificationId?: String;
    }
    export interface ModifySnapshotAttributeRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the snapshot. **/
        SnapshotId: String;
        /** The snapshot attribute to modify.

Only volume creation permissions may be modified at the customer level. **/
        Attribute?: SnapshotAttributeName;
        /** The type of operation to perform to the attribute. **/
        OperationType?: OperationType;
        /** The account ID to modify for the snapshot. **/
        UserIds?: UserIdStringList;
        /** The group to modify for the snapshot. **/
        GroupNames?: GroupNameStringList;
        /** A JSON representation of the snapshot attribute modification. **/
        CreateVolumePermission?: CreateVolumePermissionModifications;
    }
    export interface ModifySpotFleetRequestRequest {
        /** The ID of the Spot fleet request. **/
        SpotFleetRequestId: String;
        /** The size of the fleet. **/
        TargetCapacity?: Integer;
        /** Indicates whether running Spot instances should be terminated if the target
capacity of the Spot fleet request is decreased below the current size of the
Spot fleet. **/
        ExcessCapacityTerminationPolicy?: ExcessCapacityTerminationPolicy;
    }
    export interface ModifySpotFleetRequestResponse {
        /** Is true if the request succeeds, and an error otherwise. **/
        Return?: Boolean;
    }
    export interface ModifySubnetAttributeRequest {
        /** The ID of the subnet. **/
        SubnetId: String;
        /** Specify true to indicate that instances launched into the specified subnet
should be assigned public IP address. **/
        MapPublicIpOnLaunch?: AttributeBooleanValue;
    }
    export interface ModifyVolumeAttributeRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the volume. **/
        VolumeId: String;
        /** Indicates whether the volume should be auto-enabled for I/O operations. **/
        AutoEnableIO?: AttributeBooleanValue;
    }
    export interface ModifyVpcAttributeRequest {
        /** The ID of the VPC. **/
        VpcId: String;
        /** Indicates whether the DNS resolution is supported for the VPC. If enabled,
queries to the Amazon provided DNS server at the 169.254.169.253 IP address, or
the reserved IP address at the base of the VPC network range &quot;plus two&quot; will
succeed. If disabled, the Amazon provided DNS service in the VPC that resolves
public DNS hostnames to IP addresses is not enabled.

You cannot modify the DNS resolution and DNS hostnames attributes in the same
request. Use separate requests for each attribute. **/
        EnableDnsSupport?: AttributeBooleanValue;
        /** Indicates whether the instances launched in the VPC get DNS hostnames. If
enabled, instances in the VPC get DNS hostnames; otherwise, they do not.

You cannot modify the DNS resolution and DNS hostnames attributes in the same
request. Use separate requests for each attribute. You can only enable DNS
hostnames if you&#x27;ve enabled DNS support. **/
        EnableDnsHostnames?: AttributeBooleanValue;
    }
    export interface ModifyVpcEndpointRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the endpoint. **/
        VpcEndpointId: String;
        /** Specify true to reset the policy document to the default policy. The default
policy allows access to the service. **/
        ResetPolicy?: Boolean;
        /** A policy document to attach to the endpoint. The policy must be in valid JSON
format. **/
        PolicyDocument?: String;
        /** One or more route tables IDs to associate with the endpoint. **/
        AddRouteTableIds?: ValueStringList;
        /** One or more route table IDs to disassociate from the endpoint. **/
        RemoveRouteTableIds?: ValueStringList;
    }
    export interface ModifyVpcEndpointResult {
        /** Returns true if the request succeeds; otherwise, it returns an error. **/
        Return?: Boolean;
    }
    export interface ModifyVpcPeeringConnectionOptionsRequest {
        /** Checks whether you have the required permissions for the operation, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the VPC peering connection. **/
        VpcPeeringConnectionId: String;
        /** The VPC peering connection options for the requester VPC. **/
        RequesterPeeringConnectionOptions?: PeeringConnectionOptionsRequest;
        /** The VPC peering connection options for the accepter VPC. **/
        AccepterPeeringConnectionOptions?: PeeringConnectionOptionsRequest;
    }
    export interface ModifyVpcPeeringConnectionOptionsResult {
        /** Information about the VPC peering connection options for the requester VPC. **/
        RequesterPeeringConnectionOptions?: PeeringConnectionOptions;
        /** Information about the VPC peering connection options for the accepter VPC. **/
        AccepterPeeringConnectionOptions?: PeeringConnectionOptions;
    }
    export interface MonitorInstancesRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more instance IDs. **/
        InstanceIds: InstanceIdStringList;
    }
    export interface MonitorInstancesResult {
        /** Monitoring information for one or more instances. **/
        InstanceMonitorings?: InstanceMonitoringList;
    }
    export interface Monitoring {
        /** Indicates whether monitoring is enabled for the instance. **/
        State?: MonitoringState;
    }
    export interface MoveAddressToVpcRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The Elastic IP address. **/
        PublicIp: String;
    }
    export interface MoveAddressToVpcResult {
        /** The allocation ID for the Elastic IP address. **/
        AllocationId?: String;
        /** The status of the move of the IP address. **/
        Status?: Status;
    }
    export interface MovingAddressStatus {
        /** The Elastic IP address. **/
        PublicIp?: String;
        /** The status of the Elastic IP address that&#x27;s being moved to the EC2-VPC platform,
or restored to the EC2-Classic platform. **/
        MoveStatus?: MoveStatus;
    }
    export interface NatGateway {
        /** The ID of the VPC in which the NAT gateway is located. **/
        VpcId?: String;
        /** The ID of the subnet in which the NAT gateway is located. **/
        SubnetId?: String;
        /** The ID of the NAT gateway. **/
        NatGatewayId?: String;
        /** The date and time the NAT gateway was created. **/
        CreateTime?: DateTime;
        /** The date and time the NAT gateway was deleted, if applicable. **/
        DeleteTime?: DateTime;
        /** Information about the IP addresses and network interface associated with the NAT
gateway. **/
        NatGatewayAddresses?: NatGatewayAddressList;
        /** The state of the NAT gateway.

 &amp;#42; pending : The NAT gateway is being created and is not ready to process
   traffic.
   
   
 * failed : The NAT gateway could not be created. Check the failureCode and 
   failureMessage fields for the reason.
   
   
 * available : The NAT gateway is able to process traffic. This status remains
   until you delete the NAT gateway, and does not indicate the health of the NAT
   gateway.
   
   
 * deleting : The NAT gateway is in the process of being terminated and may
   still be processing traffic.
   
   
 * deleted : The NAT gateway has been terminated and is no longer processing
   traffic. **/
        State?: NatGatewayState;
        /** If the NAT gateway could not be created, specifies the error code for the
failure. ( InsufficientFreeAddressesInSubnet | Gateway.NotAttached | 
InvalidAllocationID.NotFound | Resource.AlreadyAssociated | InternalError | 
InvalidSubnetID.NotFound ) **/
        FailureCode?: String;
        /** If the NAT gateway could not be created, specifies the error message for the
failure, that corresponds to the error code.

 &amp;#42; For InsufficientFreeAddressesInSubnet: &quot;Subnet has insufficient free
   addresses to create this NAT gateway&quot;
   
   
 * For Gateway.NotAttached: &quot;Network vpc-xxxxxxxx has no Internet gateway
   attached&quot;
   
   
 * For InvalidAllocationID.NotFound: &quot;Elastic IP address eipalloc-xxxxxxxx could
   not be associated with this NAT gateway&quot;
   
   
 * For Resource.AlreadyAssociated: &quot;Elastic IP address eipalloc-xxxxxxxx is
   already associated&quot;
   
   
 * For InternalError: &quot;Network interface eni-xxxxxxxx, created and used
   internally by this NAT gateway is in an invalid state. Please try again.&quot;
   
   
 * For InvalidSubnetID.NotFound: &quot;The specified subnet subnet-xxxxxxxx does not
   exist or could not be found.&quot; **/
        FailureMessage?: String;
        /** Reserved. If you need to sustain traffic greater than the documented limits
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpc-nat-gateway.html] ,
contact us through the Support Center
[https://console.aws.amazon.com/support/home?] . **/
        ProvisionedBandwidth?: ProvisionedBandwidth;
    }
    export interface NatGatewayAddress {
        /** The Elastic IP address associated with the NAT gateway. **/
        PublicIp?: String;
        /** The allocation ID of the Elastic IP address that&#x27;s associated with the NAT
gateway. **/
        AllocationId?: String;
        /** The private IP address associated with the Elastic IP address. **/
        PrivateIp?: String;
        /** The ID of the network interface associated with the NAT gateway. **/
        NetworkInterfaceId?: String;
    }
    export interface NetworkAcl {
        /** The ID of the network ACL. **/
        NetworkAclId?: String;
        /** The ID of the VPC for the network ACL. **/
        VpcId?: String;
        /** Indicates whether this is the default network ACL for the VPC. **/
        IsDefault?: Boolean;
        /** One or more entries (rules) in the network ACL. **/
        Entries?: NetworkAclEntryList;
        /** Any associations between the network ACL and one or more subnets **/
        Associations?: NetworkAclAssociationList;
        /** Any tags assigned to the network ACL. **/
        Tags?: TagList;
    }
    export interface NetworkAclAssociation {
        /** The ID of the association between a network ACL and a subnet. **/
        NetworkAclAssociationId?: String;
        /** The ID of the network ACL. **/
        NetworkAclId?: String;
        /** The ID of the subnet. **/
        SubnetId?: String;
    }
    export interface NetworkAclEntry {
        /** The rule number for the entry. ACL entries are processed in ascending order by
rule number. **/
        RuleNumber?: Integer;
        /** The protocol. A value of -1 means all protocols. **/
        Protocol?: String;
        /** Indicates whether to allow or deny the traffic that matches the rule. **/
        RuleAction?: RuleAction;
        /** Indicates whether the rule is an egress rule (applied to traffic leaving the
subnet). **/
        Egress?: Boolean;
        /** The network range to allow or deny, in CIDR notation. **/
        CidrBlock?: String;
        /** ICMP protocol: The ICMP type and code. **/
        IcmpTypeCode?: IcmpTypeCode;
        /** TCP or UDP protocols: The range of ports the rule applies to. **/
        PortRange?: PortRange;
    }
    export interface NetworkInterface {
        /** The ID of the network interface. **/
        NetworkInterfaceId?: String;
        /** The ID of the subnet. **/
        SubnetId?: String;
        /** The ID of the VPC. **/
        VpcId?: String;
        /** The Availability Zone. **/
        AvailabilityZone?: String;
        /** A description. **/
        Description?: String;
        /** The AWS account ID of the owner of the network interface. **/
        OwnerId?: String;
        /** The ID of the entity that launched the instance on your behalf (for example, AWS
Management Console or Auto Scaling). **/
        RequesterId?: String;
        /** Indicates whether the network interface is being managed by AWS. **/
        RequesterManaged?: Boolean;
        /** The status of the network interface. **/
        Status?: NetworkInterfaceStatus;
        /** The MAC address. **/
        MacAddress?: String;
        /** The IP address of the network interface within the subnet. **/
        PrivateIpAddress?: String;
        /** The private DNS name. **/
        PrivateDnsName?: String;
        /** Indicates whether traffic to or from the instance is validated. **/
        SourceDestCheck?: Boolean;
        /** Any security groups for the network interface. **/
        Groups?: GroupIdentifierList;
        /** The network interface attachment. **/
        Attachment?: NetworkInterfaceAttachment;
        /** The association information for an Elastic IP associated with the network
interface. **/
        Association?: NetworkInterfaceAssociation;
        /** Any tags assigned to the network interface. **/
        TagSet?: TagList;
        /** The private IP addresses associated with the network interface. **/
        PrivateIpAddresses?: NetworkInterfacePrivateIpAddressList;
        /** The type of interface. **/
        InterfaceType?: NetworkInterfaceType;
    }
    export interface NetworkInterfaceAssociation {
        /** The address of the Elastic IP address bound to the network interface. **/
        PublicIp?: String;
        /** The public DNS name. **/
        PublicDnsName?: String;
        /** The ID of the Elastic IP address owner. **/
        IpOwnerId?: String;
        /** The allocation ID. **/
        AllocationId?: String;
        /** The association ID. **/
        AssociationId?: String;
    }
    export interface NetworkInterfaceAttachment {
        /** The ID of the network interface attachment. **/
        AttachmentId?: String;
        /** The ID of the instance. **/
        InstanceId?: String;
        /** The AWS account ID of the owner of the instance. **/
        InstanceOwnerId?: String;
        /** The device index of the network interface attachment on the instance. **/
        DeviceIndex?: Integer;
        /** The attachment state. **/
        Status?: AttachmentStatus;
        /** The timestamp indicating when the attachment initiated. **/
        AttachTime?: DateTime;
        /** Indicates whether the network interface is deleted when the instance is
terminated. **/
        DeleteOnTermination?: Boolean;
    }
    export interface NetworkInterfaceAttachmentChanges {
        /** The ID of the network interface attachment. **/
        AttachmentId?: String;
        /** Indicates whether the network interface is deleted when the instance is
terminated. **/
        DeleteOnTermination?: Boolean;
    }
    export interface NetworkInterfacePrivateIpAddress {
        /** The private IP address. **/
        PrivateIpAddress?: String;
        /** The private DNS name. **/
        PrivateDnsName?: String;
        /** Indicates whether this IP address is the primary private IP address of the
network interface. **/
        Primary?: Boolean;
        /** The association information for an Elastic IP address associated with the
network interface. **/
        Association?: NetworkInterfaceAssociation;
    }
    export interface NewDhcpConfiguration {
        Key?: String;
        Values?: ValueStringList;
    }
    export interface PeeringConnectionOptions {
        /** If true, enables outbound communication from an EC2-Classic instance that&#x27;s
linked to a local VPC via ClassicLink to instances in a peer VPC. **/
        AllowEgressFromLocalClassicLinkToRemoteVpc?: Boolean;
        /** If true, enables outbound communication from instances in a local VPC to an
EC2-Classic instance that&#x27;s linked to a peer VPC via ClassicLink. **/
        AllowEgressFromLocalVpcToRemoteClassicLink?: Boolean;
    }
    export interface PeeringConnectionOptionsRequest {
        /** If true, enables outbound communication from an EC2-Classic instance that&#x27;s
linked to a local VPC via ClassicLink to instances in a peer VPC. **/
        AllowEgressFromLocalClassicLinkToRemoteVpc: Boolean;
        /** If true, enables outbound communication from instances in a local VPC to an
EC2-Classic instance that&#x27;s linked to a peer VPC via ClassicLink. **/
        AllowEgressFromLocalVpcToRemoteClassicLink: Boolean;
    }
    export interface Placement {
        /** The Availability Zone of the instance. **/
        AvailabilityZone?: String;
        /** The name of the placement group the instance is in (for cluster compute
instances). **/
        GroupName?: String;
        /** The tenancy of the instance (if the instance is running in a VPC). An instance
with a tenancy of dedicated runs on single-tenant hardware. The host tenancy is
not supported for the ImportInstance command. **/
        Tenancy?: Tenancy;
        /** The ID of the Dedicted host on which the instance resides. This parameter is not
support for the ImportInstance command. **/
        HostId?: String;
        /** The affinity setting for the instance on the Dedicated host. This parameter is
not supported for the ImportInstance command. **/
        Affinity?: String;
    }
    export interface PlacementGroup {
        /** The name of the placement group. **/
        GroupName?: String;
        /** The placement strategy. **/
        Strategy?: PlacementStrategy;
        /** The state of the placement group. **/
        State?: PlacementGroupState;
    }
    export interface PortRange {
        /** The first port in the range. **/
        From?: Integer;
        /** The last port in the range. **/
        To?: Integer;
    }
    export interface PrefixList {
        /** The ID of the prefix. **/
        PrefixListId?: String;
        /** The name of the prefix. **/
        PrefixListName?: String;
        /** The IP address range of the AWS service. **/
        Cidrs?: ValueStringList;
    }
    export interface PrefixListId {
        /** The ID of the prefix. **/
        PrefixListId?: String;
    }
    export interface PriceSchedule {
        /** The number of months remaining in the reservation. For example, 2 is the second
to the last month before the capacity reservation expires. **/
        Term?: Long;
        /** The fixed price for the term. **/
        Price?: Double;
        /** The currency for transacting the Reserved Instance resale. At this time, the
only supported currency is USD . **/
        CurrencyCode?: CurrencyCodeValues;
        /** The current price schedule, as determined by the term remaining for the Reserved
Instance in the listing.

A specific price schedule is always in effect, but only one price schedule can
be active at any time. Take, for example, a Reserved Instance listing that has
five months remaining in its term. When you specify price schedules for five
months and two months, this means that schedule 1, covering the first three
months of the remaining term, will be active during months 5, 4, and 3. Then
schedule 2, covering the last two months of the term, will be active for months
2 and 1. **/
        Active?: Boolean;
    }
    export interface PriceScheduleSpecification {
        /** The number of months remaining in the reservation. For example, 2 is the second
to the last month before the capacity reservation expires. **/
        Term?: Long;
        /** The fixed price for the term. **/
        Price?: Double;
        /** The currency for transacting the Reserved Instance resale. At this time, the
only supported currency is USD . **/
        CurrencyCode?: CurrencyCodeValues;
    }
    export interface PricingDetail {
        /** The price per instance. **/
        Price?: Double;
        /** The number of reservations available for the price. **/
        Count?: Integer;
    }
    export interface PrivateIpAddressSpecification {
        /** The private IP addresses. **/
        PrivateIpAddress: String;
        /** Indicates whether the private IP address is the primary private IP address. Only
one IP address can be designated as primary. **/
        Primary?: Boolean;
    }
    export interface ProductCode {
        /** The product code. **/
        ProductCodeId?: String;
        /** The type of product code. **/
        ProductCodeType?: ProductCodeValues;
    }
    export interface PropagatingVgw {
        /** The ID of the virtual private gateway (VGW). **/
        GatewayId?: String;
    }
    export interface ProvisionedBandwidth {
        /** Reserved. If you need to sustain traffic greater than the documented limits
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpc-nat-gateway.html] ,
contact us through the Support Center
[https://console.aws.amazon.com/support/home?] . **/
        Provisioned?: String;
        /** Reserved. If you need to sustain traffic greater than the documented limits
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpc-nat-gateway.html] ,
contact us through the Support Center
[https://console.aws.amazon.com/support/home?] . **/
        Requested?: String;
        /** Reserved. If you need to sustain traffic greater than the documented limits
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpc-nat-gateway.html] ,
contact us through the Support Center
[https://console.aws.amazon.com/support/home?] . **/
        RequestTime?: DateTime;
        /** Reserved. If you need to sustain traffic greater than the documented limits
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpc-nat-gateway.html] ,
contact us through the Support Center
[https://console.aws.amazon.com/support/home?] . **/
        ProvisionTime?: DateTime;
        /** Reserved. If you need to sustain traffic greater than the documented limits
[http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpc-nat-gateway.html] ,
contact us through the Support Center
[https://console.aws.amazon.com/support/home?] . **/
        Status?: String;
    }
    export interface PurchaseRequest {
        /** The purchase token. **/
        PurchaseToken: String;
        /** The number of instances. **/
        InstanceCount: Integer;
    }
    export interface PurchaseReservedInstancesOfferingRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the Reserved Instance offering to purchase. **/
        ReservedInstancesOfferingId: String;
        /** The number of Reserved Instances to purchase. **/
        InstanceCount: Integer;
        /** Specified for Reserved Instance Marketplace offerings to limit the total order
and ensure that the Reserved Instances are not purchased at unexpected prices. **/
        LimitPrice?: ReservedInstanceLimitPrice;
    }
    export interface PurchaseReservedInstancesOfferingResult {
        /** The IDs of the purchased Reserved Instances. **/
        ReservedInstancesId?: String;
    }
    export interface PurchaseScheduledInstancesRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** Unique, case-sensitive identifier that ensures the idempotency of the request.
For more information, see Ensuring Idempotency
[http://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html] 
. **/
        ClientToken?: String;
        /** One or more purchase requests. **/
        PurchaseRequests: PurchaseRequestSet;
    }
    export interface PurchaseScheduledInstancesResult {
        /** Information about the Scheduled Instances. **/
        ScheduledInstanceSet?: PurchasedScheduledInstanceSet;
    }
    export interface RebootInstancesRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more instance IDs. **/
        InstanceIds: InstanceIdStringList;
    }
    export interface RecurringCharge {
        /** The frequency of the recurring charge. **/
        Frequency?: RecurringChargeFrequency;
        /** The amount of the recurring charge. **/
        Amount?: Double;
    }
    export interface Region {
        /** The name of the region. **/
        RegionName?: String;
        /** The region service endpoint. **/
        Endpoint?: String;
    }
    export interface RegisterImageRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The full path to your AMI manifest in Amazon S3 storage. **/
        ImageLocation?: String;
        /** A name for your AMI.

Constraints: 3-128 alphanumeric characters, parentheses (()), square brackets
([]), spaces ( ), periods (.), slashes (/), dashes (-), single quotes (&#x27;),
at-signs (@), or underscores(_) **/
        Name: String;
        /** A description for your AMI. **/
        Description?: String;
        /** The architecture of the AMI.

Default: For Amazon EBS-backed AMIs, i386 . For instance store-backed AMIs, the
architecture specified in the manifest file. **/
        Architecture?: ArchitectureValues;
        /** The ID of the kernel. **/
        KernelId?: String;
        /** The ID of the RAM disk. **/
        RamdiskId?: String;
        /** The name of the root device (for example, /dev/sda1 , or /dev/xvda ). **/
        RootDeviceName?: String;
        /** One or more block device mapping entries. **/
        BlockDeviceMappings?: BlockDeviceMappingRequestList;
        /** The type of virtualization.

Default: paravirtual **/
        VirtualizationType?: String;
        /** Set to simple to enable enhanced networking for the AMI and any instances that
you launch from the AMI.

There is no way to disable sriovNetSupport at this time.

This option is supported only for HVM AMIs. Specifying this option with a PV AMI
can make instances launched from the AMI unreachable. **/
        SriovNetSupport?: String;
    }
    export interface RegisterImageResult {
        /** The ID of the newly registered AMI. **/
        ImageId?: String;
    }
    export interface RejectVpcPeeringConnectionRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the VPC peering connection. **/
        VpcPeeringConnectionId: String;
    }
    export interface RejectVpcPeeringConnectionResult {
        /** Returns true if the request succeeds; otherwise, it returns an error. **/
        Return?: Boolean;
    }
    export interface ReleaseAddressRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** [EC2-Classic] The Elastic IP address. Required for EC2-Classic. **/
        PublicIp?: String;
        /** [EC2-VPC] The allocation ID. Required for EC2-VPC. **/
        AllocationId?: String;
    }
    export interface ReleaseHostsRequest {
        /** The IDs of the Dedicated hosts you want to release. **/
        HostIds: RequestHostIdList;
    }
    export interface ReleaseHostsResult {
        /** The IDs of the Dedicated hosts that were successfully released. **/
        Successful?: ResponseHostIdList;
        /** The IDs of the Dedicated hosts that could not be released, including an error
message. **/
        Unsuccessful?: UnsuccessfulItemList;
    }
    export interface ReplaceNetworkAclAssociationRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the current association between the original network ACL and the
subnet. **/
        AssociationId: String;
        /** The ID of the new network ACL to associate with the subnet. **/
        NetworkAclId: String;
    }
    export interface ReplaceNetworkAclAssociationResult {
        /** The ID of the new association. **/
        NewAssociationId?: String;
    }
    export interface ReplaceNetworkAclEntryRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the ACL. **/
        NetworkAclId: String;
        /** The rule number of the entry to replace. **/
        RuleNumber: Integer;
        /** The IP protocol. You can specify all or -1 to mean all protocols. **/
        Protocol: String;
        /** Indicates whether to allow or deny the traffic that matches the rule. **/
        RuleAction: RuleAction;
        /** Indicates whether to replace the egress rule.

Default: If no value is specified, we replace the ingress rule. **/
        Egress: Boolean;
        /** The network range to allow or deny, in CIDR notation. **/
        CidrBlock: String;
        /** ICMP protocol: The ICMP type and code. Required if specifying 1 (ICMP) for the
protocol. **/
        IcmpTypeCode?: IcmpTypeCode;
        /** TCP or UDP protocols: The range of ports the rule applies to. Required if
specifying 6 (TCP) or 17 (UDP) for the protocol. **/
        PortRange?: PortRange;
    }
    export interface ReplaceRouteRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the route table. **/
        RouteTableId: String;
        /** The CIDR address block used for the destination match. The value you provide
must match the CIDR of an existing route in the table. **/
        DestinationCidrBlock: String;
        /** The ID of an Internet gateway or virtual private gateway. **/
        GatewayId?: String;
        /** The ID of a NAT instance in your VPC. **/
        InstanceId?: String;
        /** The ID of a network interface. **/
        NetworkInterfaceId?: String;
        /** The ID of a VPC peering connection. **/
        VpcPeeringConnectionId?: String;
        /** The ID of a NAT gateway. **/
        NatGatewayId?: String;
    }
    export interface ReplaceRouteTableAssociationRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The association ID. **/
        AssociationId: String;
        /** The ID of the new route table to associate with the subnet. **/
        RouteTableId: String;
    }
    export interface ReplaceRouteTableAssociationResult {
        /** The ID of the new association. **/
        NewAssociationId?: String;
    }
    export interface ReportInstanceStatusRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more instances. **/
        Instances: InstanceIdStringList;
        /** The status of all instances listed. **/
        Status: ReportStatusType;
        /** The time at which the reported instance health state began. **/
        StartTime?: DateTime;
        /** The time at which the reported instance health state ended. **/
        EndTime?: DateTime;
        /** One or more reason codes that describes the health state of your instance.

 &amp;#42; instance-stuck-in-state : My instance is stuck in a state.
   
   
 * unresponsive : My instance is unresponsive.
   
   
 * not-accepting-credentials : My instance is not accepting my credentials.
   
   
 * password-not-available : A password is not available for my instance.
   
   
 * performance-network : My instance is experiencing performance problems which
   I believe are network related.
   
   
 * performance-instance-store : My instance is experiencing performance problems
   which I believe are related to the instance stores.
   
   
 * performance-ebs-volume : My instance is experiencing performance problems
   which I believe are related to an EBS volume.
   
   
 * performance-other : My instance is experiencing performance problems.
   
   
 * other : [explain using the description parameter] **/
        ReasonCodes: ReasonCodesList;
        /** Descriptive text about the health state of your instance. **/
        Description?: String;
    }
    export interface RequestSpotFleetRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The configuration for the Spot fleet request. **/
        SpotFleetRequestConfig: SpotFleetRequestConfigData;
    }
    export interface RequestSpotFleetResponse {
        /** The ID of the Spot fleet request. **/
        SpotFleetRequestId: String;
    }
    export interface RequestSpotInstancesRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The maximum hourly price (bid) for any Spot instance launched to fulfill the
request. **/
        SpotPrice: String;
        /** Unique, case-sensitive identifier that you provide to ensure the idempotency of
the request. For more information, see How to Ensure Idempotency
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html] 
in the Amazon Elastic Compute Cloud User Guide . **/
        ClientToken?: String;
        /** The maximum number of Spot instances to launch.

Default: 1 **/
        InstanceCount?: Integer;
        /** The Spot instance request type.

Default: one-time **/
        Type?: SpotInstanceType;
        /** The start date of the request. If this is a one-time request, the request
becomes active at this date and time and remains active until all instances
launch, the request expires, or the request is canceled. If the request is
persistent, the request becomes active at this date and time and remains active
until it expires or is canceled.

Default: The request is effective indefinitely. **/
        ValidFrom?: DateTime;
        /** The end date of the request. If this is a one-time request, the request remains
active until all instances launch, the request is canceled, or this date is
reached. If the request is persistent, it remains active until it is canceled or
this date and time is reached.

Default: The request is effective indefinitely. **/
        ValidUntil?: DateTime;
        /** The instance launch group. Launch groups are Spot instances that launch together
and terminate together.

Default: Instances are launched and terminated individually **/
        LaunchGroup?: String;
        /** The user-specified name for a logical grouping of bids.

When you specify an Availability Zone group in a Spot Instance request, all Spot
instances in the request are launched in the same Availability Zone. Instance
proximity is maintained with this parameter, but the choice of Availability Zone
is not. The group applies only to bids for Spot Instances of the same instance
type. Any additional Spot instance requests that are specified with the same
Availability Zone group name are launched in that same Availability Zone, as
long as at least one instance from the group is still active.

If there is no active instance running in the Availability Zone group that you
specify for a new Spot instance request (all instances are terminated, the bid
is expired, or the bid falls below current market), then Amazon EC2 launches the
instance in any Availability Zone where the constraint can be met. Consequently,
the subsequent set of Spot instances could be placed in a different zone from
the original request, even if you specified the same Availability Zone group.

Default: Instances are launched in any available Availability Zone. **/
        AvailabilityZoneGroup?: String;
        /** The required duration for the Spot instances (also known as Spot blocks), in
minutes. This value must be a multiple of 60 (60, 120, 180, 240, 300, or 360).

The duration period starts as soon as your Spot instance receives its instance
ID. At the end of the duration period, Amazon EC2 marks the Spot instance for
termination and provides a Spot instance termination notice, which gives the
instance a two-minute warning before it terminates.

Note that you can&#x27;t specify an Availability Zone group or a launch group if you
specify a duration. **/
        BlockDurationMinutes?: Integer;
        LaunchSpecification?: RequestSpotLaunchSpecification;
    }
    export interface RequestSpotInstancesResult {
        /** One or more Spot instance requests. **/
        SpotInstanceRequests?: SpotInstanceRequestList;
    }
    export interface RequestSpotLaunchSpecification {
        /** The ID of the AMI. **/
        ImageId?: String;
        /** The name of the key pair. **/
        KeyName?: String;
        SecurityGroups?: ValueStringList;
        /** The user data to make available to the instances. If you are using an AWS SDK or
command line tool, Base64-encoding is performed for you, and you can load the
text from a file. Otherwise, you must provide Base64-encoded text. **/
        UserData?: String;
        /** Deprecated. **/
        AddressingType?: String;
        /** The instance type. **/
        InstanceType?: InstanceType;
        /** The placement information for the instance. **/
        Placement?: SpotPlacement;
        /** The ID of the kernel. **/
        KernelId?: String;
        /** The ID of the RAM disk. **/
        RamdiskId?: String;
        /** One or more block device mapping entries.

Although you can specify encrypted EBS volumes in this block device mapping for
your Spot Instances, these volumes are not encrypted. **/
        BlockDeviceMappings?: BlockDeviceMappingList;
        /** The ID of the subnet in which to launch the instance. **/
        SubnetId?: String;
        /** One or more network interfaces. **/
        NetworkInterfaces?: InstanceNetworkInterfaceSpecificationList;
        /** The IAM instance profile. **/
        IamInstanceProfile?: IamInstanceProfileSpecification;
        /** Indicates whether the instance is optimized for EBS I/O. This optimization
provides dedicated throughput to Amazon EBS and an optimized configuration stack
to provide optimal EBS I/O performance. This optimization isn&#x27;t available with
all instance types. Additional usage charges apply when using an EBS Optimized
instance.

Default: false **/
        EbsOptimized?: Boolean;
        Monitoring?: RunInstancesMonitoringEnabled;
        SecurityGroupIds?: ValueStringList;
    }
    export interface Reservation {
        /** The ID of the reservation. **/
        ReservationId?: String;
        /** The ID of the AWS account that owns the reservation. **/
        OwnerId?: String;
        /** The ID of the requester that launched the instances on your behalf (for example,
AWS Management Console or Auto Scaling). **/
        RequesterId?: String;
        /** [EC2-Classic only] One or more security groups. **/
        Groups?: GroupIdentifierList;
        /** One or more instances. **/
        Instances?: InstanceList;
    }
    export interface ReservedInstanceLimitPrice {
        /** Used for Reserved Instance Marketplace offerings. Specifies the limit price on
the total order (instanceCount &amp;#42; price). **/
        Amount?: Double;
        /** The currency in which the limitPrice amount is specified. At this time, the only
supported currency is USD . **/
        CurrencyCode?: CurrencyCodeValues;
    }
    export interface ReservedInstances {
        /** The ID of the Reserved Instance. **/
        ReservedInstancesId?: String;
        /** The instance type on which the Reserved Instance can be used. **/
        InstanceType?: InstanceType;
        /** The Availability Zone in which the Reserved Instance can be used. **/
        AvailabilityZone?: String;
        /** The date and time the Reserved Instance started. **/
        Start?: DateTime;
        /** The time when the Reserved Instance expires. **/
        End?: DateTime;
        /** The duration of the Reserved Instance, in seconds. **/
        Duration?: Long;
        /** The usage price of the Reserved Instance, per hour. **/
        UsagePrice?: Float;
        /** The purchase price of the Reserved Instance. **/
        FixedPrice?: Float;
        /** The number of reservations purchased. **/
        InstanceCount?: Integer;
        /** The Reserved Instance product platform description. **/
        ProductDescription?: RIProductDescription;
        /** The state of the Reserved Instance purchase. **/
        State?: ReservedInstanceState;
        /** Any tags assigned to the resource. **/
        Tags?: TagList;
        /** The tenancy of the instance. **/
        InstanceTenancy?: Tenancy;
        /** The currency of the Reserved Instance. It&#x27;s specified using ISO 4217 standard
currency codes. At this time, the only supported currency is USD . **/
        CurrencyCode?: CurrencyCodeValues;
        /** The Reserved Instance offering type. **/
        OfferingType?: OfferingTypeValues;
        /** The recurring charge tag assigned to the resource. **/
        RecurringCharges?: RecurringChargesList;
    }
    export interface ReservedInstancesConfiguration {
        /** The Availability Zone for the modified Reserved Instances. **/
        AvailabilityZone?: String;
        /** The network platform of the modified Reserved Instances, which is either
EC2-Classic or EC2-VPC. **/
        Platform?: String;
        /** The number of modified Reserved Instances. **/
        InstanceCount?: Integer;
        /** The instance type for the modified Reserved Instances. **/
        InstanceType?: InstanceType;
    }
    export interface ReservedInstancesId {
        /** The ID of the Reserved Instance. **/
        ReservedInstancesId?: String;
    }
    export interface ReservedInstancesListing {
        /** The ID of the Reserved Instance listing. **/
        ReservedInstancesListingId?: String;
        /** The ID of the Reserved Instance. **/
        ReservedInstancesId?: String;
        /** The time the listing was created. **/
        CreateDate?: DateTime;
        /** The last modified timestamp of the listing. **/
        UpdateDate?: DateTime;
        /** The status of the Reserved Instance listing. **/
        Status?: ListingStatus;
        /** The reason for the current status of the Reserved Instance listing. The response
can be blank. **/
        StatusMessage?: String;
        /** The number of instances in this state. **/
        InstanceCounts?: InstanceCountList;
        /** The price of the Reserved Instance listing. **/
        PriceSchedules?: PriceScheduleList;
        /** Any tags assigned to the resource. **/
        Tags?: TagList;
        /** A unique, case-sensitive key supplied by the client to ensure that the request
is idempotent. For more information, see Ensuring Idempotency
[http://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html] 
. **/
        ClientToken?: String;
    }
    export interface ReservedInstancesModification {
        /** A unique ID for the Reserved Instance modification. **/
        ReservedInstancesModificationId?: String;
        /** The IDs of one or more Reserved Instances. **/
        ReservedInstancesIds?: ReservedIntancesIds;
        /** Contains target configurations along with their corresponding new Reserved
Instance IDs. **/
        ModificationResults?: ReservedInstancesModificationResultList;
        /** The time when the modification request was created. **/
        CreateDate?: DateTime;
        /** The time when the modification request was last updated. **/
        UpdateDate?: DateTime;
        /** The time for the modification to become effective. **/
        EffectiveDate?: DateTime;
        /** The status of the Reserved Instances modification request. **/
        Status?: String;
        /** The reason for the status. **/
        StatusMessage?: String;
        /** A unique, case-sensitive key supplied by the client to ensure that the request
is idempotent. For more information, see Ensuring Idempotency
[http://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html] 
. **/
        ClientToken?: String;
    }
    export interface ReservedInstancesModificationResult {
        /** The ID for the Reserved Instances that were created as part of the modification
request. This field is only available when the modification is fulfilled. **/
        ReservedInstancesId?: String;
        /** The target Reserved Instances configurations supplied as part of the
modification request. **/
        TargetConfiguration?: ReservedInstancesConfiguration;
    }
    export interface ReservedInstancesOffering {
        /** The ID of the Reserved Instance offering. **/
        ReservedInstancesOfferingId?: String;
        /** The instance type on which the Reserved Instance can be used. **/
        InstanceType?: InstanceType;
        /** The Availability Zone in which the Reserved Instance can be used. **/
        AvailabilityZone?: String;
        /** The duration of the Reserved Instance, in seconds. **/
        Duration?: Long;
        /** The usage price of the Reserved Instance, per hour. **/
        UsagePrice?: Float;
        /** The purchase price of the Reserved Instance. **/
        FixedPrice?: Float;
        /** The Reserved Instance product platform description. **/
        ProductDescription?: RIProductDescription;
        /** The tenancy of the instance. **/
        InstanceTenancy?: Tenancy;
        /** The currency of the Reserved Instance offering you are purchasing. It&#x27;s
specified using ISO 4217 standard currency codes. At this time, the only
supported currency is USD . **/
        CurrencyCode?: CurrencyCodeValues;
        /** The Reserved Instance offering type. **/
        OfferingType?: OfferingTypeValues;
        /** The recurring charge tag assigned to the resource. **/
        RecurringCharges?: RecurringChargesList;
        /** Indicates whether the offering is available through the Reserved Instance
Marketplace (resale) or AWS. If it&#x27;s a Reserved Instance Marketplace offering,
this is true . **/
        Marketplace?: Boolean;
        /** The pricing details of the Reserved Instance offering. **/
        PricingDetails?: PricingDetailsList;
    }
    export interface ResetImageAttributeRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the AMI. **/
        ImageId: String;
        /** The attribute to reset (currently you can only reset the launch permission
attribute). **/
        Attribute: ResetImageAttributeName;
    }
    export interface ResetInstanceAttributeRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the instance. **/
        InstanceId: String;
        /** The attribute to reset.

You can only reset the following attributes: kernel | ramdisk | sourceDestCheck 
. To change an instance attribute, use ModifyInstanceAttribute . **/
        Attribute: InstanceAttributeName;
    }
    export interface ResetNetworkInterfaceAttributeRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the network interface. **/
        NetworkInterfaceId: String;
        /** The source/destination checking attribute. Resets the value to true . **/
        SourceDestCheck?: String;
    }
    export interface ResetSnapshotAttributeRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the snapshot. **/
        SnapshotId: String;
        /** The attribute to reset. Currently, only the attribute for permission to create
volumes can be reset. **/
        Attribute: SnapshotAttributeName;
    }
    export interface RestoreAddressToClassicRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The Elastic IP address. **/
        PublicIp: String;
    }
    export interface RestoreAddressToClassicResult {
        /** The move status for the IP address. **/
        Status?: Status;
        /** The Elastic IP address. **/
        PublicIp?: String;
    }
    export interface RevokeSecurityGroupEgressRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the security group. **/
        GroupId: String;
        /** The name of a destination security group. To revoke outbound access to a
destination security group, we recommend that you use a set of IP permissions
instead. **/
        SourceSecurityGroupName?: String;
        /** The AWS account number for a destination security group. To revoke outbound
access to a destination security group, we recommend that you use a set of IP
permissions instead. **/
        SourceSecurityGroupOwnerId?: String;
        /** The IP protocol name or number. We recommend that you specify the protocol in a
set of IP permissions instead. **/
        IpProtocol?: String;
        /** The start of port range for the TCP and UDP protocols, or an ICMP type number.
We recommend that you specify the port range in a set of IP permissions instead. **/
        FromPort?: Integer;
        /** The end of port range for the TCP and UDP protocols, or an ICMP type number. We
recommend that you specify the port range in a set of IP permissions instead. **/
        ToPort?: Integer;
        /** The CIDR IP address range. We recommend that you specify the CIDR range in a set
of IP permissions instead. **/
        CidrIp?: String;
        /** A set of IP permissions. You can&#x27;t specify a destination security group and a
CIDR IP address range. **/
        IpPermissions?: IpPermissionList;
    }
    export interface RevokeSecurityGroupIngressRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** [EC2-Classic, default VPC] The name of the security group. **/
        GroupName?: String;
        /** The ID of the security group. Required for a security group in a nondefault VPC. **/
        GroupId?: String;
        /** [EC2-Classic, default VPC] The name of the source security group. You can&#x27;t
specify this parameter in combination with the following parameters: the CIDR IP
address range, the start of the port range, the IP protocol, and the end of the
port range. For EC2-VPC, the source security group must be in the same VPC. To
revoke a specific rule for an IP protocol and port range, use a set of IP
permissions instead. **/
        SourceSecurityGroupName?: String;
        /** [EC2-Classic] The AWS account ID of the source security group, if the source
security group is in a different account. You can&#x27;t specify this parameter in
combination with the following parameters: the CIDR IP address range, the IP
protocol, the start of the port range, and the end of the port range. To revoke
a specific rule for an IP protocol and port range, use a set of IP permissions
instead. **/
        SourceSecurityGroupOwnerId?: String;
        /** The IP protocol name ( tcp , udp , icmp ) or number (see Protocol Numbers
[http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml] ). Use 
-1 to specify all. **/
        IpProtocol?: String;
        /** The start of port range for the TCP and UDP protocols, or an ICMP type number.
For the ICMP type number, use -1 to specify all ICMP types. **/
        FromPort?: Integer;
        /** The end of port range for the TCP and UDP protocols, or an ICMP code number. For
the ICMP code number, use -1 to specify all ICMP codes for the ICMP type. **/
        ToPort?: Integer;
        /** The CIDR IP address range. You can&#x27;t specify this parameter when specifying a
source security group. **/
        CidrIp?: String;
        /** A set of IP permissions. You can&#x27;t specify a source security group and a CIDR IP
address range. **/
        IpPermissions?: IpPermissionList;
    }
    export interface Route {
        /** The CIDR block used for the destination match. **/
        DestinationCidrBlock?: String;
        /** The prefix of the AWS service. **/
        DestinationPrefixListId?: String;
        /** The ID of a gateway attached to your VPC. **/
        GatewayId?: String;
        /** The ID of a NAT instance in your VPC. **/
        InstanceId?: String;
        /** The AWS account ID of the owner of the instance. **/
        InstanceOwnerId?: String;
        /** The ID of the network interface. **/
        NetworkInterfaceId?: String;
        /** The ID of the VPC peering connection. **/
        VpcPeeringConnectionId?: String;
        /** The ID of a NAT gateway. **/
        NatGatewayId?: String;
        /** The state of the route. The blackhole state indicates that the route&#x27;s target
isn&#x27;t available (for example, the specified gateway isn&#x27;t attached to the VPC,
or the specified NAT instance has been terminated). **/
        State?: RouteState;
        /** Describes how the route was created.

 &amp;#42; CreateRouteTable - The route was automatically created when the route table
   was created.
   
   
 * CreateRoute - The route was manually added to the route table.
   
   
 * EnableVgwRoutePropagation - The route was propagated by route propagation. **/
        Origin?: RouteOrigin;
    }
    export interface RouteTable {
        /** The ID of the route table. **/
        RouteTableId?: String;
        /** The ID of the VPC. **/
        VpcId?: String;
        /** The routes in the route table. **/
        Routes?: RouteList;
        /** The associations between the route table and one or more subnets. **/
        Associations?: RouteTableAssociationList;
        /** Any tags assigned to the route table. **/
        Tags?: TagList;
        /** Any virtual private gateway (VGW) propagating routes. **/
        PropagatingVgws?: PropagatingVgwList;
    }
    export interface RouteTableAssociation {
        /** The ID of the association between a route table and a subnet. **/
        RouteTableAssociationId?: String;
        /** The ID of the route table. **/
        RouteTableId?: String;
        /** The ID of the subnet. A subnet ID is not returned for an implicit association. **/
        SubnetId?: String;
        /** Indicates whether this is the main route table. **/
        Main?: Boolean;
    }
    export interface RunInstancesMonitoringEnabled {
        /** Indicates whether monitoring is enabled for the instance. **/
        Enabled: Boolean;
    }
    export interface RunInstancesRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** The ID of the AMI, which you can get by calling DescribeImages . **/
        ImageId: String;
        /** The minimum number of instances to launch. If you specify a minimum that is more
instances than Amazon EC2 can launch in the target Availability Zone, Amazon EC2
launches no instances.

Constraints: Between 1 and the maximum number you&#x27;re allowed for the specified
instance type. For more information about the default limits, and how to request
an increase, see How many instances can I run in Amazon EC2
[http://aws.amazon.com/ec2/faqs/#How_many_instances_can_I_run_in_Amazon_EC2] in
the Amazon EC2 General FAQ. **/
        MinCount: Integer;
        /** The maximum number of instances to launch. If you specify more instances than
Amazon EC2 can launch in the target Availability Zone, Amazon EC2 launches the
largest possible number of instances above MinCount .

Constraints: Between 1 and the maximum number you&#x27;re allowed for the specified
instance type. For more information about the default limits, and how to request
an increase, see How many instances can I run in Amazon EC2
[http://aws.amazon.com/ec2/faqs/#How_many_instances_can_I_run_in_Amazon_EC2] in
the Amazon EC2 FAQ. **/
        MaxCount: Integer;
        /** The name of the key pair. You can create a key pair using CreateKeyPair or 
ImportKeyPair .

If you do not specify a key pair, you can&#x27;t connect to the instance unless you
choose an AMI that is configured to allow users another way to log in. **/
        KeyName?: String;
        /** [EC2-Classic, default VPC] One or more security group names. For a nondefault
VPC, you must use security group IDs instead.

Default: Amazon EC2 uses the default security group. **/
        SecurityGroups?: SecurityGroupStringList;
        /** One or more security group IDs. You can create a security group using 
CreateSecurityGroup .

Default: Amazon EC2 uses the default security group. **/
        SecurityGroupIds?: SecurityGroupIdStringList;
        /** The user data to make available to the instance. For more information, see 
Running Commands on Your Linux Instance at Launch
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html] (Linux) and 
Adding User Data
[http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-instance-metadata.html#instancedata-add-user-data] 
(Windows). If you are using an AWS SDK or command line tool, Base64-encoding is
performed for you, and you can load the text from a file. Otherwise, you must
provide Base64-encoded text. **/
        UserData?: String;
        /** The instance type. For more information, see Instance Types
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html] in the 
Amazon Elastic Compute Cloud User Guide .

Default: m1.small **/
        InstanceType?: InstanceType;
        /** The placement for the instance. **/
        Placement?: Placement;
        /** The ID of the kernel.

We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
information, see PV-GRUB
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html] in
the Amazon Elastic Compute Cloud User Guide . **/
        KernelId?: String;
        /** The ID of the RAM disk.

We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
information, see PV-GRUB
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html] in
the Amazon Elastic Compute Cloud User Guide . **/
        RamdiskId?: String;
        /** The block device mapping. **/
        BlockDeviceMappings?: BlockDeviceMappingRequestList;
        /** The monitoring for the instance. **/
        Monitoring?: RunInstancesMonitoringEnabled;
        /** [EC2-VPC] The ID of the subnet to launch the instance into. **/
        SubnetId?: String;
        /** If you set this parameter to true , you can&#x27;t terminate the instance using the
Amazon EC2 console, CLI, or API; otherwise, you can. If you set this parameter
to true and then later want to be able to terminate the instance, you must first
change the value of the disableApiTermination attribute to false using 
ModifyInstanceAttribute . Alternatively, if you set 
InstanceInitiatedShutdownBehavior to terminate , you can terminate the instance
by running the shutdown command from the instance.

Default: false **/
        DisableApiTermination?: Boolean;
        /** Indicates whether an instance stops or terminates when you initiate shutdown
from the instance (using the operating system command for system shutdown).

Default: stop **/
        InstanceInitiatedShutdownBehavior?: ShutdownBehavior;
        /** [EC2-VPC] The primary IP address. You must specify a value from the IP address
range of the subnet.

Only one private IP address can be designated as primary. Therefore, you can&#x27;t
specify this parameter if PrivateIpAddresses.n.Primary is set to true and 
PrivateIpAddresses.n.PrivateIpAddress is set to an IP address.

Default: We select an IP address from the IP address range of the subnet. **/
        PrivateIpAddress?: String;
        /** Unique, case-sensitive identifier you provide to ensure the idempotency of the
request. For more information, see Ensuring Idempotency
[http://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html] 
.

Constraints: Maximum 64 ASCII characters **/
        ClientToken?: String;
        /** Reserved. **/
        AdditionalInfo?: String;
        /** One or more network interfaces. **/
        NetworkInterfaces?: InstanceNetworkInterfaceSpecificationList;
        /** The IAM instance profile. **/
        IamInstanceProfile?: IamInstanceProfileSpecification;
        /** Indicates whether the instance is optimized for EBS I/O. This optimization
provides dedicated throughput to Amazon EBS and an optimized configuration stack
to provide optimal EBS I/O performance. This optimization isn&#x27;t available with
all instance types. Additional usage charges apply when using an EBS-optimized
instance.

Default: false **/
        EbsOptimized?: Boolean;
    }
    export interface RunScheduledInstancesRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** Unique, case-sensitive identifier that ensures the idempotency of the request.
For more information, see Ensuring Idempotency
[http://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html] 
. **/
        ClientToken?: String;
        /** The number of instances.

Default: 1 **/
        InstanceCount?: Integer;
        /** The Scheduled Instance ID. **/
        ScheduledInstanceId: String;
        /** The launch specification. **/
        LaunchSpecification: ScheduledInstancesLaunchSpecification;
    }
    export interface RunScheduledInstancesResult {
        /** The IDs of the newly launched instances. **/
        InstanceIdSet?: InstanceIdSet;
    }
    export interface S3Storage {
        /** The bucket in which to store the AMI. You can specify a bucket that you already
own or a new bucket that Amazon EC2 creates on your behalf. If you specify a
bucket that belongs to someone else, Amazon EC2 returns an error. **/
        Bucket?: String;
        /** The beginning of the file name of the AMI. **/
        Prefix?: String;
        /** The access key ID of the owner of the bucket. Before you specify a value for
your access key ID, review and follow the guidance in Best Practices for
Managing AWS Access Keys
[http://docs.aws.amazon.com/general/latest/gr/aws-access-keys-best-practices.html] 
. **/
        AWSAccessKeyId?: String;
        /** An Amazon S3 upload policy that gives Amazon EC2 permission to upload items into
Amazon S3 on your behalf. **/
        UploadPolicy?: Blob;
        /** The signature of the JSON document. **/
        UploadPolicySignature?: String;
    }
    export interface ScheduledInstance {
        /** The Scheduled Instance ID. **/
        ScheduledInstanceId?: String;
        /** The instance type. **/
        InstanceType?: String;
        /** The platform ( Linux/UNIX or Windows ). **/
        Platform?: String;
        /** The network platform ( EC2-Classic or EC2-VPC ). **/
        NetworkPlatform?: String;
        /** The Availability Zone. **/
        AvailabilityZone?: String;
        /** The number of hours in the schedule. **/
        SlotDurationInHours?: Integer;
        /** The schedule recurrence. **/
        Recurrence?: ScheduledInstanceRecurrence;
        /** The time that the previous schedule ended or will end. **/
        PreviousSlotEndTime?: DateTime;
        /** The time for the next schedule to start. **/
        NextSlotStartTime?: DateTime;
        /** The hourly price for a single instance. **/
        HourlyPrice?: String;
        /** The total number of hours for a single instance for the entire term. **/
        TotalScheduledInstanceHours?: Integer;
        /** The number of instances. **/
        InstanceCount?: Integer;
        /** The start date for the Scheduled Instance. **/
        TermStartDate?: DateTime;
        /** The end date for the Scheduled Instance. **/
        TermEndDate?: DateTime;
        /** The date when the Scheduled Instance was purchased. **/
        CreateDate?: DateTime;
    }
    export interface ScheduledInstanceAvailability {
        /** The instance type. You can specify one of the C3, C4, M4, or R3 instance types. **/
        InstanceType?: String;
        /** The platform ( Linux/UNIX or Windows ). **/
        Platform?: String;
        /** The network platform ( EC2-Classic or EC2-VPC ). **/
        NetworkPlatform?: String;
        /** The Availability Zone. **/
        AvailabilityZone?: String;
        /** The purchase token. This token expires in two hours. **/
        PurchaseToken?: String;
        /** The number of hours in the schedule. **/
        SlotDurationInHours?: Integer;
        /** The schedule recurrence. **/
        Recurrence?: ScheduledInstanceRecurrence;
        /** The time period for the first schedule to start. **/
        FirstSlotStartTime?: DateTime;
        /** The hourly price for a single instance. **/
        HourlyPrice?: String;
        /** The total number of hours for a single instance for the entire term. **/
        TotalScheduledInstanceHours?: Integer;
        /** The number of available instances. **/
        AvailableInstanceCount?: Integer;
        /** The minimum term. The only possible value is 365 days. **/
        MinTermDurationInDays?: Integer;
        /** The maximum term. The only possible value is 365 days. **/
        MaxTermDurationInDays?: Integer;
    }
    export interface ScheduledInstanceRecurrence {
        /** The frequency ( Daily , Weekly , or Monthly ). **/
        Frequency?: String;
        /** The interval quantity. The interval unit depends on the value of frequency . For
example, every 2 weeks or every 2 months. **/
        Interval?: Integer;
        /** The days. For a monthly schedule, this is one or more days of the month (1-31).
For a weekly schedule, this is one or more days of the week (1-7, where 1 is
Sunday). **/
        OccurrenceDaySet?: OccurrenceDaySet;
        /** Indicates whether the occurrence is relative to the end of the specified week or
month. **/
        OccurrenceRelativeToEnd?: Boolean;
        /** The unit for occurrenceDaySet ( DayOfWeek or DayOfMonth ). **/
        OccurrenceUnit?: String;
    }
    export interface ScheduledInstanceRecurrenceRequest {
        /** The frequency ( Daily , Weekly , or Monthly ). **/
        Frequency?: String;
        /** The interval quantity. The interval unit depends on the value of Frequency . For
example, every 2 weeks or every 2 months. **/
        Interval?: Integer;
        /** The days. For a monthly schedule, this is one or more days of the month (1-31).
For a weekly schedule, this is one or more days of the week (1-7, where 1 is
Sunday). You can&#x27;t specify this value with a daily schedule. If the occurrence
is relative to the end of the month, you can specify only a single day. **/
        OccurrenceDays?: OccurrenceDayRequestSet;
        /** Indicates whether the occurrence is relative to the end of the specified week or
month. You can&#x27;t specify this value with a daily schedule. **/
        OccurrenceRelativeToEnd?: Boolean;
        /** The unit for OccurrenceDays ( DayOfWeek or DayOfMonth ). This value is required
for a monthly schedule. You can&#x27;t specify DayOfWeek with a weekly schedule. You
can&#x27;t specify this value with a daily schedule. **/
        OccurrenceUnit?: String;
    }
    export interface ScheduledInstancesBlockDeviceMapping {
        /** The device name exposed to the instance (for example, /dev/sdh or xvdh ). **/
        DeviceName?: String;
        /** Suppresses the specified device included in the block device mapping of the AMI. **/
        NoDevice?: String;
        /** The virtual device name ( ephemeral N). Instance store volumes are numbered
starting from 0. An instance type with two available instance store volumes can
specify mappings for ephemeral0 and ephemeral1 .The number of available instance
store volumes depends on the instance type. After you connect to the instance,
you must mount the volume.

Constraints: For M3 instances, you must specify instance store volumes in the
block device mapping for the instance. When you launch an M3 instance, we ignore
any instance store volumes specified in the block device mapping for the AMI. **/
        VirtualName?: String;
        /** Parameters used to set up EBS volumes automatically when the instance is
launched. **/
        Ebs?: ScheduledInstancesEbs;
    }
    export interface ScheduledInstancesEbs {
        /** The ID of the snapshot. **/
        SnapshotId?: String;
        /** The size of the volume, in GiB.

Default: If you&#x27;re creating the volume from a snapshot and don&#x27;t specify a
volume size, the default is the snapshot size. **/
        VolumeSize?: Integer;
        /** Indicates whether the volume is deleted on instance termination. **/
        DeleteOnTermination?: Boolean;
        /** The volume type. gp2 for General Purpose SSD, io1 for Provisioned IOPS SSD,
Throughput Optimized HDD for st1 , Cold HDD for sc1 , or standard for Magnetic.

Default: standard **/
        VolumeType?: String;
        /** The number of I/O operations per second (IOPS) that the volume supports. For io1
volumes, this represents the number of IOPS that are provisioned for the volume.
For gp2 volumes, this represents the baseline performance of the volume and the
rate at which the volume accumulates I/O credits for bursting. For more
information about gp2 baseline performance, I/O credits, and bursting, see 
Amazon EBS Volume Types
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html] in the 
Amazon Elastic Compute Cloud User Guide .

Constraint: Range is 100-20000 IOPS for io1 volumes and 100-10000 IOPS for gp2 
volumes.

Condition: This parameter is required for requests to create io1 volumes; it is
not used in requests to create gp2 , st1 , sc1 , or standard volumes. **/
        Iops?: Integer;
        /** Indicates whether the volume is encrypted. You can attached encrypted volumes
only to instances that support them. **/
        Encrypted?: Boolean;
    }
    export interface ScheduledInstancesIamInstanceProfile {
        /** The Amazon Resource Name (ARN). **/
        Arn?: String;
        /** The name. **/
        Name?: String;
    }
    export interface ScheduledInstancesLaunchSpecification {
        /** The ID of the Amazon Machine Image (AMI). **/
        ImageId: String;
        /** The name of the key pair. **/
        KeyName?: String;
        /** The IDs of one or more security groups. **/
        SecurityGroupIds?: ScheduledInstancesSecurityGroupIdSet;
        /** The base64-encoded MIME user data. **/
        UserData?: String;
        /** The placement information. **/
        Placement?: ScheduledInstancesPlacement;
        /** The ID of the kernel. **/
        KernelId?: String;
        /** The instance type. **/
        InstanceType?: String;
        /** The ID of the RAM disk. **/
        RamdiskId?: String;
        /** One or more block device mapping entries. **/
        BlockDeviceMappings?: ScheduledInstancesBlockDeviceMappingSet;
        /** Enable or disable monitoring for the instances. **/
        Monitoring?: ScheduledInstancesMonitoring;
        /** The ID of the subnet in which to launch the instances. **/
        SubnetId?: String;
        /** One or more network interfaces. **/
        NetworkInterfaces?: ScheduledInstancesNetworkInterfaceSet;
        /** The IAM instance profile. **/
        IamInstanceProfile?: ScheduledInstancesIamInstanceProfile;
        /** Indicates whether the instances are optimized for EBS I/O. This optimization
provides dedicated throughput to Amazon EBS and an optimized configuration stack
to provide optimal EBS I/O performance. This optimization isn&#x27;t available with
all instance types. Additional usage charges apply when using an EBS-optimized
instance.

Default: false **/
        EbsOptimized?: Boolean;
    }
    export interface ScheduledInstancesMonitoring {
        /** Indicates whether monitoring is enabled. **/
        Enabled?: Boolean;
    }
    export interface ScheduledInstancesNetworkInterface {
        /** The ID of the network interface. **/
        NetworkInterfaceId?: String;
        /** The index of the device for the network interface attachment. **/
        DeviceIndex?: Integer;
        /** The ID of the subnet. **/
        SubnetId?: String;
        /** The description. **/
        Description?: String;
        /** The IP address of the network interface within the subnet. **/
        PrivateIpAddress?: String;
        /** The private IP addresses. **/
        PrivateIpAddressConfigs?: PrivateIpAddressConfigSet;
        /** The number of secondary private IP addresses. **/
        SecondaryPrivateIpAddressCount?: Integer;
        /** Indicates whether to assign a public IP address to instances launched in a VPC.
The public IP address can only be assigned to a network interface for eth0, and
can only be assigned to a new network interface, not an existing one. You cannot
specify more than one network interface in the request. If launching into a
default subnet, the default value is true . **/
        AssociatePublicIpAddress?: Boolean;
        /** The IDs of one or more security groups. **/
        Groups?: ScheduledInstancesSecurityGroupIdSet;
        /** Indicates whether to delete the interface when the instance is terminated. **/
        DeleteOnTermination?: Boolean;
    }
    export interface ScheduledInstancesPlacement {
        /** The Availability Zone. **/
        AvailabilityZone?: String;
        /** The name of the placement group. **/
        GroupName?: String;
    }
    export interface ScheduledInstancesPrivateIpAddressConfig {
        /** The IP address. **/
        PrivateIpAddress?: String;
        /** Indicates whether this is a primary IP address. Otherwise, this is a secondary
IP address. **/
        Primary?: Boolean;
    }
    export interface SecurityGroup {
        /** The AWS account ID of the owner of the security group. **/
        OwnerId?: String;
        /** The name of the security group. **/
        GroupName?: String;
        /** The ID of the security group. **/
        GroupId?: String;
        /** A description of the security group. **/
        Description?: String;
        /** One or more inbound rules associated with the security group. **/
        IpPermissions?: IpPermissionList;
        /** [EC2-VPC] One or more outbound rules associated with the security group. **/
        IpPermissionsEgress?: IpPermissionList;
        /** [EC2-VPC] The ID of the VPC for the security group. **/
        VpcId?: String;
        /** Any tags assigned to the security group. **/
        Tags?: TagList;
    }
    export interface SecurityGroupReference {
        /** The ID of your security group. **/
        GroupId: String;
        /** The ID of the VPC with the referencing security group. **/
        ReferencingVpcId: String;
        /** The ID of the VPC peering connection. **/
        VpcPeeringConnectionId?: String;
    }
    export interface SlotDateTimeRangeRequest {
        /** The earliest date and time, in UTC, for the Scheduled Instance to start. **/
        EarliestTime: DateTime;
        /** The latest date and time, in UTC, for the Scheduled Instance to start. This
value must be later than or equal to the earliest date and at most three months
in the future. **/
        LatestTime: DateTime;
    }
    export interface SlotStartTimeRangeRequest {
        /** The earliest date and time, in UTC, for the Scheduled Instance to start. **/
        EarliestTime?: DateTime;
        /** The latest date and time, in UTC, for the Scheduled Instance to start. **/
        LatestTime?: DateTime;
    }
    export interface Snapshot {
        /** The ID of the snapshot. Each snapshot receives a unique identifier when it is
created. **/
        SnapshotId?: String;
        /** The ID of the volume that was used to create the snapshot. **/
        VolumeId?: String;
        /** The snapshot state. **/
        State?: SnapshotState;
        /** Encrypted Amazon EBS snapshots are copied asynchronously. If a snapshot copy
operation fails (for example, if the proper AWS Key Management Service (AWS KMS)
permissions are not obtained) this field displays error state details to help
you diagnose why the error occurred. This parameter is only returned by the 
DescribeSnapshots API operation. **/
        StateMessage?: String;
        /** The time stamp when the snapshot was initiated. **/
        StartTime?: DateTime;
        /** The progress of the snapshot, as a percentage. **/
        Progress?: String;
        /** The AWS account ID of the EBS snapshot owner. **/
        OwnerId?: String;
        /** The description for the snapshot. **/
        Description?: String;
        /** The size of the volume, in GiB. **/
        VolumeSize?: Integer;
        /** The AWS account alias (for example, amazon , self ) or AWS account ID that owns
the snapshot. **/
        OwnerAlias?: String;
        /** Any tags assigned to the snapshot. **/
        Tags?: TagList;
        /** Indicates whether the snapshot is encrypted. **/
        Encrypted?: Boolean;
        /** The full ARN of the AWS Key Management Service (AWS KMS) customer master key
(CMK) that was used to protect the volume encryption key for the parent volume. **/
        KmsKeyId?: String;
        /** The data encryption key identifier for the snapshot. This value is a unique
identifier that corresponds to the data encryption key that was used to encrypt
the original volume or snapshot copy. Because data encryption keys are inherited
by volumes created from snapshots, and vice versa, if snapshots share the same
data encryption key identifier, then they belong to the same volume/snapshot
lineage. This parameter is only returned by the DescribeSnapshots API operation. **/
        DataEncryptionKeyId?: String;
    }
    export interface SnapshotDetail {
        /** The size of the disk in the snapshot, in GiB. **/
        DiskImageSize?: Double;
        /** A description for the snapshot. **/
        Description?: String;
        /** The format of the disk image from which the snapshot is created. **/
        Format?: String;
        /** The URL used to access the disk image. **/
        Url?: String;
        /** The S3 bucket for the disk image. **/
        UserBucket?: UserBucketDetails;
        /** The block device mapping for the snapshot. **/
        DeviceName?: String;
        /** The snapshot ID of the disk being imported. **/
        SnapshotId?: String;
        /** The percentage of progress for the task. **/
        Progress?: String;
        /** A detailed status message for the snapshot creation. **/
        StatusMessage?: String;
        /** A brief status of the snapshot creation. **/
        Status?: String;
    }
    export interface SnapshotDiskContainer {
        /** The description of the disk image being imported. **/
        Description?: String;
        /** The format of the disk image being imported.

Valid values: RAW | VHD | VMDK | OVA **/
        Format?: String;
        /** The URL to the Amazon S3-based disk image being imported. It can either be a
https URL (https://..) or an Amazon S3 URL (s3://..). **/
        Url?: String;
        /** The S3 bucket for the disk image. **/
        UserBucket?: UserBucket;
    }
    export interface SnapshotTaskDetail {
        /** The size of the disk in the snapshot, in GiB. **/
        DiskImageSize?: Double;
        /** The description of the snapshot. **/
        Description?: String;
        /** The format of the disk image from which the snapshot is created. **/
        Format?: String;
        /** The URL of the disk image from which the snapshot is created. **/
        Url?: String;
        /** The S3 bucket for the disk image. **/
        UserBucket?: UserBucketDetails;
        /** The snapshot ID of the disk being imported. **/
        SnapshotId?: String;
        /** The percentage of completion for the import snapshot task. **/
        Progress?: String;
        /** A detailed status message for the import snapshot task. **/
        StatusMessage?: String;
        /** A brief status for the import snapshot task. **/
        Status?: String;
    }
    export interface SpotDatafeedSubscription {
        /** The AWS account ID of the account. **/
        OwnerId?: String;
        /** The Amazon S3 bucket where the Spot instance data feed is located. **/
        Bucket?: String;
        /** The prefix that is prepended to data feed files. **/
        Prefix?: String;
        /** The state of the Spot instance data feed subscription. **/
        State?: DatafeedSubscriptionState;
        /** The fault codes for the Spot instance request, if any. **/
        Fault?: SpotInstanceStateFault;
    }
    export interface SpotFleetLaunchSpecification {
        /** The ID of the AMI. **/
        ImageId?: String;
        /** The name of the key pair. **/
        KeyName?: String;
        /** One or more security groups. When requesting instances in a VPC, you must
specify the IDs of the security groups. When requesting instances in
EC2-Classic, you can specify the names or the IDs of the security groups. **/
        SecurityGroups?: GroupIdentifierList;
        /** The user data to make available to the instances. If you are using an AWS SDK or
command line tool, Base64-encoding is performed for you, and you can load the
text from a file. Otherwise, you must provide Base64-encoded text. **/
        UserData?: String;
        /** Deprecated. **/
        AddressingType?: String;
        /** The instance type. **/
        InstanceType?: InstanceType;
        /** The placement information. **/
        Placement?: SpotPlacement;
        /** The ID of the kernel. **/
        KernelId?: String;
        /** The ID of the RAM disk. **/
        RamdiskId?: String;
        /** One or more block device mapping entries. **/
        BlockDeviceMappings?: BlockDeviceMappingList;
        /** Enable or disable monitoring for the instances. **/
        Monitoring?: SpotFleetMonitoring;
        /** The ID of the subnet in which to launch the instances. To specify multiple
subnets, separate them using commas; for example, &quot;subnet-a61dafcf,
subnet-65ea5f08&quot;. **/
        SubnetId?: String;
        /** One or more network interfaces. **/
        NetworkInterfaces?: InstanceNetworkInterfaceSpecificationList;
        /** The IAM instance profile. **/
        IamInstanceProfile?: IamInstanceProfileSpecification;
        /** Indicates whether the instances are optimized for EBS I/O. This optimization
provides dedicated throughput to Amazon EBS and an optimized configuration stack
to provide optimal EBS I/O performance. This optimization isn&#x27;t available with
all instance types. Additional usage charges apply when using an EBS Optimized
instance.

Default: false **/
        EbsOptimized?: Boolean;
        /** The number of units provided by the specified instance type. These are the same
units that you chose to set the target capacity in terms (instances or a
performance characteristic such as vCPUs, memory, or I/O).

If the target capacity divided by this value is not a whole number, we round the
number of instances to the next whole number. If this value is not specified,
the default is 1. **/
        WeightedCapacity?: Double;
        /** The bid price per unit hour for the specified instance type. If this value is
not specified, the default is the Spot bid price specified for the fleet. To
determine the bid price per unit hour, divide the Spot bid price by the value of 
WeightedCapacity . **/
        SpotPrice?: String;
    }
    export interface SpotFleetMonitoring {
        /** Enables monitoring for the instance.

Default: false **/
        Enabled?: Boolean;
    }
    export interface SpotFleetRequestConfig {
        /** The ID of the Spot fleet request. **/
        SpotFleetRequestId: String;
        /** The state of the Spot fleet request. **/
        SpotFleetRequestState: BatchState;
        /** Information about the configuration of the Spot fleet request. **/
        SpotFleetRequestConfig: SpotFleetRequestConfigData;
        /** The creation date and time of the request. **/
        CreateTime: DateTime;
    }
    export interface SpotFleetRequestConfigData {
        /** A unique, case-sensitive identifier you provide to ensure idempotency of your
listings. This helps avoid duplicate listings. For more information, see 
Ensuring Idempotency
[http://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html] 
. **/
        ClientToken?: String;
        /** The bid price per unit hour. **/
        SpotPrice: String;
        /** The number of units to request. You can choose to set the target capacity in
terms of instances or a performance characteristic that is important to your
application workload, such as vCPUs, memory, or I/O. **/
        TargetCapacity: Integer;
        /** The start date and time of the request, in UTC format (for example, YYYY - MM - 
DD T HH : MM : SS Z). The default is to start fulfilling the request
immediately. **/
        ValidFrom?: DateTime;
        /** The end date and time of the request, in UTC format (for example, YYYY - MM - DD 
T HH : MM : SS Z). At this point, no new Spot instance requests are placed or
enabled to fulfill the request. **/
        ValidUntil?: DateTime;
        /** Indicates whether running Spot instances should be terminated when the Spot
fleet request expires. **/
        TerminateInstancesWithExpiration?: Boolean;
        /** Grants the Spot fleet permission to terminate Spot instances on your behalf when
you cancel its Spot fleet request using CancelSpotFleetRequests or when the Spot
fleet request expires, if you set terminateInstancesWithExpiration . **/
        IamFleetRole: String;
        /** Information about the launch specifications for the Spot fleet request. **/
        LaunchSpecifications: LaunchSpecsList;
        /** Indicates whether running Spot instances should be terminated if the target
capacity of the Spot fleet request is decreased below the current size of the
Spot fleet. **/
        ExcessCapacityTerminationPolicy?: ExcessCapacityTerminationPolicy;
        /** Indicates how to allocate the target capacity across the Spot pools specified by
the Spot fleet request. The default is lowestPrice . **/
        AllocationStrategy?: AllocationStrategy;
        /** The number of units fulfilled by this request compared to the set target
capacity. **/
        FulfilledCapacity?: Double;
        /** The type of request. Indicates whether the fleet will only request the target
capacity or also attempt to maintain it. When you request a certain target
capacity, the fleet will only place the required bids. It will not attempt to
replenish Spot instances if capacity is diminished, nor will it submit bids in
alternative Spot pools if capacity is not available. When you want to maintain a
certain target capacity, fleet will place the required bids to meet this target
capacity. It will also automatically replenish any interrupted instances.
Default: maintain . **/
        Type?: FleetType;
    }
    export interface SpotInstanceRequest {
        /** The ID of the Spot instance request. **/
        SpotInstanceRequestId?: String;
        /** The maximum hourly price (bid) for the Spot instance launched to fulfill the
request. **/
        SpotPrice?: String;
        /** The Spot instance request type. **/
        Type?: SpotInstanceType;
        /** The state of the Spot instance request. Spot bid status information can help you
track your Spot instance requests. For more information, see Spot Bid Status
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-bid-status.html] in the 
Amazon Elastic Compute Cloud User Guide . **/
        State?: SpotInstanceState;
        /** The fault codes for the Spot instance request, if any. **/
        Fault?: SpotInstanceStateFault;
        /** The status code and status message describing the Spot instance request. **/
        Status?: SpotInstanceStatus;
        /** The start date of the request, in UTC format (for example, YYYY - MM - DD T HH : 
MM : SS Z). The request becomes active at this date and time. **/
        ValidFrom?: DateTime;
        /** The end date of the request, in UTC format (for example, YYYY - MM - DD T HH : 
MM : SS Z). If this is a one-time request, it remains active until all instances
launch, the request is canceled, or this date is reached. If the request is
persistent, it remains active until it is canceled or this date is reached. **/
        ValidUntil?: DateTime;
        /** The instance launch group. Launch groups are Spot instances that launch together
and terminate together. **/
        LaunchGroup?: String;
        /** The Availability Zone group. If you specify the same Availability Zone group for
all Spot instance requests, all Spot instances are launched in the same
Availability Zone. **/
        AvailabilityZoneGroup?: String;
        /** Additional information for launching instances. **/
        LaunchSpecification?: LaunchSpecification;
        /** The instance ID, if an instance has been launched to fulfill the Spot instance
request. **/
        InstanceId?: String;
        /** The date and time when the Spot instance request was created, in UTC format (for
example, YYYY - MM - DD T HH : MM : SS Z). **/
        CreateTime?: DateTime;
        /** The product description associated with the Spot instance. **/
        ProductDescription?: RIProductDescription;
        /** The duration for the Spot instance, in minutes. **/
        BlockDurationMinutes?: Integer;
        /** If you specified a duration and your Spot instance request was fulfilled, this
is the fixed hourly price in effect for the Spot instance while it runs. **/
        ActualBlockHourlyPrice?: String;
        /** Any tags assigned to the resource. **/
        Tags?: TagList;
        /** The Availability Zone in which the bid is launched. **/
        LaunchedAvailabilityZone?: String;
    }
    export interface SpotInstanceStateFault {
        /** The reason code for the Spot instance state change. **/
        Code?: String;
        /** The message for the Spot instance state change. **/
        Message?: String;
    }
    export interface SpotInstanceStatus {
        /** The status code. For a list of status codes, see Spot Bid Status Codes
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-bid-status.html#spot-instance-bid-status-understand] 
in the Amazon Elastic Compute Cloud User Guide . **/
        Code?: String;
        /** The date and time of the most recent status update, in UTC format (for example, 
YYYY - MM - DD T HH : MM : SS Z). **/
        UpdateTime?: DateTime;
        /** The description for the status code. **/
        Message?: String;
    }
    export interface SpotPlacement {
        /** The Availability Zone.

[Spot fleet only] To specify multiple Availability Zones, separate them using
commas; for example, &quot;us-west-2a, us-west-2b&quot;. **/
        AvailabilityZone?: String;
        /** The name of the placement group (for cluster instances). **/
        GroupName?: String;
    }
    export interface SpotPrice {
        /** The instance type. **/
        InstanceType?: InstanceType;
        /** A general description of the AMI. **/
        ProductDescription?: RIProductDescription;
        /** The maximum price (bid) that you are willing to pay for a Spot instance. **/
        SpotPrice?: String;
        /** The date and time the request was created, in UTC format (for example, YYYY - MM 
- DD T HH : MM : SS Z). **/
        Timestamp?: DateTime;
        /** The Availability Zone. **/
        AvailabilityZone?: String;
    }
    export interface StaleIpPermission {
        /** The start of the port range for the TCP and UDP protocols, or an ICMP type
number. A value of -1 indicates all ICMP types. **/
        FromPort?: Integer;
        /** The IP protocol name (for tcp , udp , and icmp ) or number (see Protocol
Numbers)
[http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml] . **/
        IpProtocol?: String;
        /** One or more IP ranges. Not applicable for stale security group rules. **/
        IpRanges?: IpRanges;
        /** One or more prefix list IDs for an AWS service. Not applicable for stale
security group rules. **/
        PrefixListIds?: PrefixListIdSet;
        /** The end of the port range for the TCP and UDP protocols, or an ICMP type number.
A value of -1 indicates all ICMP types. **/
        ToPort?: Integer;
        /** One or more security group pairs. Returns the ID of the referenced security
group and VPC, and the ID and status of the VPC peering connection. **/
        UserIdGroupPairs?: UserIdGroupPairSet;
    }
    export interface StaleSecurityGroup {
        /** The ID of the security group. **/
        GroupId: String;
        /** The name of the security group. **/
        GroupName?: String;
        /** The description of the security group. **/
        Description?: String;
        /** The ID of the VPC for the security group. **/
        VpcId?: String;
        /** Information about the stale inbound rules in the security group. **/
        StaleIpPermissions?: StaleIpPermissionSet;
        /** Information about the stale outbound rules in the security group. **/
        StaleIpPermissionsEgress?: StaleIpPermissionSet;
    }
    export interface StartInstancesRequest {
        /** One or more instance IDs. **/
        InstanceIds: InstanceIdStringList;
        /** Reserved. **/
        AdditionalInfo?: String;
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
    }
    export interface StartInstancesResult {
        /** Information about one or more started instances. **/
        StartingInstances?: InstanceStateChangeList;
    }
    export interface StateReason {
        /** The reason code for the state change. **/
        Code?: String;
        /** The message for the state change.

 &amp;#42; Server.SpotInstanceTermination : A Spot instance was terminated due to an
   increase in the market price.
   
   
 * Server.InternalError : An internal error occurred during instance launch,
   resulting in termination.
   
   
 * Server.InsufficientInstanceCapacity : There was insufficient instance
   capacity to satisfy the launch request.
   
   
 * Client.InternalError : A client error caused the instance to terminate on
   launch.
   
   
 * Client.InstanceInitiatedShutdown : The instance was shut down using the 
   shutdown -h command from the instance.
   
   
 * Client.UserInitiatedShutdown : The instance was shut down using the Amazon
   EC2 API.
   
   
 * Client.VolumeLimitExceeded : The limit on the number of EBS volumes or total
   storage was exceeded. Decrease usage or request an increase in your limits.
   
   
 * Client.InvalidSnapshot.NotFound : The specified snapshot was not found. **/
        Message?: String;
    }
    export interface StopInstancesRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more instance IDs. **/
        InstanceIds: InstanceIdStringList;
        /** Forces the instances to stop. The instances do not have an opportunity to flush
file system caches or file system metadata. If you use this option, you must
perform file system check and repair procedures. This option is not recommended
for Windows instances.

Default: false **/
        Force?: Boolean;
    }
    export interface StopInstancesResult {
        /** Information about one or more stopped instances. **/
        StoppingInstances?: InstanceStateChangeList;
    }
    export interface Storage {
        /** An Amazon S3 storage location. **/
        S3?: S3Storage;
    }
    export interface Subnet {
        /** The ID of the subnet. **/
        SubnetId?: String;
        /** The current state of the subnet. **/
        State?: SubnetState;
        /** The ID of the VPC the subnet is in. **/
        VpcId?: String;
        /** The CIDR block assigned to the subnet. **/
        CidrBlock?: String;
        /** The number of unused IP addresses in the subnet. Note that the IP addresses for
any stopped instances are considered unavailable. **/
        AvailableIpAddressCount?: Integer;
        /** The Availability Zone of the subnet. **/
        AvailabilityZone?: String;
        /** Indicates whether this is the default subnet for the Availability Zone. **/
        DefaultForAz?: Boolean;
        /** Indicates whether instances launched in this subnet receive a public IP address. **/
        MapPublicIpOnLaunch?: Boolean;
        /** Any tags assigned to the subnet. **/
        Tags?: TagList;
    }
    export interface Tag {
        /** The key of the tag.

Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode
characters. May not begin with aws: **/
        Key?: String;
        /** The value of the tag.

Constraints: Tag values are case-sensitive and accept a maximum of 255 Unicode
characters. **/
        Value?: String;
    }
    export interface TagDescription {
        /** The ID of the resource. For example, ami-1a2b3c4d . **/
        ResourceId?: String;
        /** The resource type. **/
        ResourceType?: ResourceType;
        /** The tag key. **/
        Key?: String;
        /** The tag value. **/
        Value?: String;
    }
    export interface TerminateInstancesRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more instance IDs. **/
        InstanceIds: InstanceIdStringList;
    }
    export interface TerminateInstancesResult {
        /** Information about one or more terminated instances. **/
        TerminatingInstances?: InstanceStateChangeList;
    }
    export interface UnassignPrivateIpAddressesRequest {
        /** The ID of the network interface. **/
        NetworkInterfaceId: String;
        /** The secondary private IP addresses to unassign from the network interface. You
can specify this option multiple times to unassign more than one IP address. **/
        PrivateIpAddresses: PrivateIpAddressStringList;
    }
    export interface UnmonitorInstancesRequest {
        /** Checks whether you have the required permissions for the action, without
actually making the request, and provides an error response. If you have the
required permissions, the error response is DryRunOperation . Otherwise, it is 
UnauthorizedOperation . **/
        DryRun?: Boolean;
        /** One or more instance IDs. **/
        InstanceIds: InstanceIdStringList;
    }
    export interface UnmonitorInstancesResult {
        /** Monitoring information for one or more instances. **/
        InstanceMonitorings?: InstanceMonitoringList;
    }
    export interface UnsuccessfulItem {
        /** The ID of the resource. **/
        ResourceId?: String;
        /** Information about the error. **/
        Error: UnsuccessfulItemError;
    }
    export interface UnsuccessfulItemError {
        /** The error code. **/
        Code: String;
        /** The error message accompanying the error code. **/
        Message: String;
    }
    export interface UserBucket {
        /** The name of the S3 bucket where the disk image is located. **/
        S3Bucket?: String;
        /** The file name of the disk image. **/
        S3Key?: String;
    }
    export interface UserBucketDetails {
        /** The S3 bucket from which the disk image was created. **/
        S3Bucket?: String;
        /** The file name of the disk image. **/
        S3Key?: String;
    }
    export interface UserData {
        /** The user data. If you are using an AWS SDK or command line tool, Base64-encoding
is performed for you, and you can load the text from a file. Otherwise, you must
provide Base64-encoded text. **/
        Data?: String;
    }
    export interface UserIdGroupPair {
        /** The ID of an AWS account. For a referenced security group in another VPC, the
account ID of the referenced security group is returned.

[EC2-Classic] Required when adding or removing rules that reference a security
group in another AWS account. **/
        UserId?: String;
        /** The name of the security group. In a request, use this parameter for a security
group in EC2-Classic or a default VPC only. For a security group in a nondefault
VPC, use the security group ID. **/
        GroupName?: String;
        /** The ID of the security group. **/
        GroupId?: String;
        /** The ID of the VPC for the referenced security group, if applicable. **/
        VpcId?: String;
        /** The ID of the VPC peering connection, if applicable. **/
        VpcPeeringConnectionId?: String;
        /** The status of a VPC peering connection, if applicable. **/
        PeeringStatus?: String;
    }
    export interface VgwTelemetry {
        /** The Internet-routable IP address of the virtual private gateway&#x27;s outside
interface. **/
        OutsideIpAddress?: String;
        /** The status of the VPN tunnel. **/
        Status?: TelemetryStatus;
        /** The date and time of the last change in status. **/
        LastStatusChange?: DateTime;
        /** If an error occurs, a description of the error. **/
        StatusMessage?: String;
        /** The number of accepted routes. **/
        AcceptedRouteCount?: Integer;
    }
    export interface Volume {
        /** The ID of the volume. **/
        VolumeId?: String;
        /** The size of the volume, in GiBs. **/
        Size?: Integer;
        /** The snapshot from which the volume was created, if applicable. **/
        SnapshotId?: String;
        /** The Availability Zone for the volume. **/
        AvailabilityZone?: String;
        /** The volume state. **/
        State?: VolumeState;
        /** The time stamp when volume creation was initiated. **/
        CreateTime?: DateTime;
        /** Information about the volume attachments. **/
        Attachments?: VolumeAttachmentList;
        /** Any tags assigned to the volume. **/
        Tags?: TagList;
        /** The volume type. This can be gp2 for General Purpose SSD, io1 for Provisioned
IOPS SSD, st1 for Throughput Optimized HDD, sc1 for Cold HDD, or standard for
Magnetic volumes. **/
        VolumeType?: VolumeType;
        /** The number of I/O operations per second (IOPS) that the volume supports. For
Provisioned IOPS SSD volumes, this represents the number of IOPS that are
provisioned for the volume. For General Purpose SSD volumes, this represents the
baseline performance of the volume and the rate at which the volume accumulates
I/O credits for bursting. For more information on General Purpose SSD baseline
performance, I/O credits, and bursting, see Amazon EBS Volume Types
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html] in the 
Amazon Elastic Compute Cloud User Guide .

Constraint: Range is 100-20000 IOPS for io1 volumes and 100-10000 IOPS for gp2 
volumes.

Condition: This parameter is required for requests to create io1 volumes; it is
not used in requests to create gp2 , st1 , sc1 , or standard volumes. **/
        Iops?: Integer;
        /** Indicates whether the volume will be encrypted. **/
        Encrypted?: Boolean;
        /** The full ARN of the AWS Key Management Service (AWS KMS) customer master key
(CMK) that was used to protect the volume encryption key for the volume. **/
        KmsKeyId?: String;
    }
    export interface VolumeAttachment {
        /** The ID of the volume. **/
        VolumeId?: String;
        /** The ID of the instance. **/
        InstanceId?: String;
        /** The device name. **/
        Device?: String;
        /** The attachment state of the volume. **/
        State?: VolumeAttachmentState;
        /** The time stamp when the attachment initiated. **/
        AttachTime?: DateTime;
        /** Indicates whether the EBS volume is deleted on instance termination. **/
        DeleteOnTermination?: Boolean;
    }
    export interface VolumeDetail {
        /** The size of the volume, in GiB. **/
        Size: Long;
    }
    export interface VolumeStatusAction {
        /** The code identifying the operation, for example, enable-volume-io . **/
        Code?: String;
        /** A description of the operation. **/
        Description?: String;
        /** The event type associated with this operation. **/
        EventType?: String;
        /** The ID of the event associated with this operation. **/
        EventId?: String;
    }
    export interface VolumeStatusDetails {
        /** The name of the volume status. **/
        Name?: VolumeStatusName;
        /** The intended status of the volume status. **/
        Status?: String;
    }
    export interface VolumeStatusEvent {
        /** The type of this event. **/
        EventType?: String;
        /** A description of the event. **/
        Description?: String;
        /** The earliest start time of the event. **/
        NotBefore?: DateTime;
        /** The latest end time of the event. **/
        NotAfter?: DateTime;
        /** The ID of this event. **/
        EventId?: String;
    }
    export interface VolumeStatusInfo {
        /** The status of the volume. **/
        Status?: VolumeStatusInfoStatus;
        /** The details of the volume status. **/
        Details?: VolumeStatusDetailsList;
    }
    export interface VolumeStatusItem {
        /** The volume ID. **/
        VolumeId?: String;
        /** The Availability Zone of the volume. **/
        AvailabilityZone?: String;
        /** The volume status. **/
        VolumeStatus?: VolumeStatusInfo;
        /** A list of events associated with the volume. **/
        Events?: VolumeStatusEventsList;
        /** The details of the operation. **/
        Actions?: VolumeStatusActionsList;
    }
    export interface Vpc {
        /** The ID of the VPC. **/
        VpcId?: String;
        /** The current state of the VPC. **/
        State?: VpcState;
        /** The CIDR block for the VPC. **/
        CidrBlock?: String;
        /** The ID of the set of DHCP options you&#x27;ve associated with the VPC (or default if
the default options are associated with the VPC). **/
        DhcpOptionsId?: String;
        /** Any tags assigned to the VPC. **/
        Tags?: TagList;
        /** The allowed tenancy of instances launched into the VPC. **/
        InstanceTenancy?: Tenancy;
        /** Indicates whether the VPC is the default VPC. **/
        IsDefault?: Boolean;
    }
    export interface VpcAttachment {
        /** The ID of the VPC. **/
        VpcId?: String;
        /** The current state of the attachment. **/
        State?: AttachmentStatus;
    }
    export interface VpcClassicLink {
        /** The ID of the VPC. **/
        VpcId?: String;
        /** Indicates whether the VPC is enabled for ClassicLink. **/
        ClassicLinkEnabled?: Boolean;
        /** Any tags assigned to the VPC. **/
        Tags?: TagList;
    }
    export interface VpcEndpoint {
        /** The ID of the VPC endpoint. **/
        VpcEndpointId?: String;
        /** The ID of the VPC to which the endpoint is associated. **/
        VpcId?: String;
        /** The name of the AWS service to which the endpoint is associated. **/
        ServiceName?: String;
        /** The state of the VPC endpoint. **/
        State?: State;
        /** The policy document associated with the endpoint. **/
        PolicyDocument?: String;
        /** One or more route tables associated with the endpoint. **/
        RouteTableIds?: ValueStringList;
        /** The date and time the VPC endpoint was created. **/
        CreationTimestamp?: DateTime;
    }
    export interface VpcPeeringConnection {
        /** Information about the accepter VPC. CIDR block information is not returned when
creating a VPC peering connection, or when describing a VPC peering connection
that&#x27;s in the initiating-request or pending-acceptance state. **/
        AccepterVpcInfo?: VpcPeeringConnectionVpcInfo;
        /** The time that an unaccepted VPC peering connection will expire. **/
        ExpirationTime?: DateTime;
        /** Information about the requester VPC. **/
        RequesterVpcInfo?: VpcPeeringConnectionVpcInfo;
        /** The status of the VPC peering connection. **/
        Status?: VpcPeeringConnectionStateReason;
        /** Any tags assigned to the resource. **/
        Tags?: TagList;
        /** The ID of the VPC peering connection. **/
        VpcPeeringConnectionId?: String;
    }
    export interface VpcPeeringConnectionOptionsDescription {
        /** Indicates whether a local ClassicLink connection can communicate with the peer
VPC over the VPC peering connection. **/
        AllowEgressFromLocalClassicLinkToRemoteVpc?: Boolean;
        /** Indicates whether a local VPC can communicate with a ClassicLink connection in
the peer VPC over the VPC peering connection. **/
        AllowEgressFromLocalVpcToRemoteClassicLink?: Boolean;
    }
    export interface VpcPeeringConnectionStateReason {
        /** The status of the VPC peering connection. **/
        Code?: VpcPeeringConnectionStateReasonCode;
        /** A message that provides more information about the status, if applicable. **/
        Message?: String;
    }
    export interface VpcPeeringConnectionVpcInfo {
        /** The CIDR block for the VPC. **/
        CidrBlock?: String;
        /** The AWS account ID of the VPC owner. **/
        OwnerId?: String;
        /** The ID of the VPC. **/
        VpcId?: String;
        /** Information about the VPC peering connection options for the accepter or
requester VPC. **/
        PeeringOptions?: VpcPeeringConnectionOptionsDescription;
    }
    export interface VpnConnection {
        /** The ID of the VPN connection. **/
        VpnConnectionId?: String;
        /** The current state of the VPN connection. **/
        State?: VpnState;
        /** The configuration information for the VPN connection&#x27;s customer gateway (in the
native XML format). This element is always present in the CreateVpnConnection 
response; however, it&#x27;s present in the DescribeVpnConnections response only if
the VPN connection is in the pending or available state. **/
        CustomerGatewayConfiguration?: String;
        /** The type of VPN connection. **/
        Type?: GatewayType;
        /** The ID of the customer gateway at your end of the VPN connection. **/
        CustomerGatewayId?: String;
        /** The ID of the virtual private gateway at the AWS side of the VPN connection. **/
        VpnGatewayId?: String;
        /** Any tags assigned to the VPN connection. **/
        Tags?: TagList;
        /** Information about the VPN tunnel. **/
        VgwTelemetry?: VgwTelemetryList;
        /** The VPN connection options. **/
        Options?: VpnConnectionOptions;
        /** The static routes associated with the VPN connection. **/
        Routes?: VpnStaticRouteList;
    }
    export interface VpnConnectionOptions {
        /** Indicates whether the VPN connection uses static routes only. Static routes must
be used for devices that don&#x27;t support BGP. **/
        StaticRoutesOnly?: Boolean;
    }
    export interface VpnConnectionOptionsSpecification {
        /** Indicates whether the VPN connection uses static routes only. Static routes must
be used for devices that don&#x27;t support BGP. **/
        StaticRoutesOnly?: Boolean;
    }
    export interface VpnGateway {
        /** The ID of the virtual private gateway. **/
        VpnGatewayId?: String;
        /** The current state of the virtual private gateway. **/
        State?: VpnState;
        /** The type of VPN connection the virtual private gateway supports. **/
        Type?: GatewayType;
        /** The Availability Zone where the virtual private gateway was created, if
applicable. This field may be empty or not returned. **/
        AvailabilityZone?: String;
        /** Any VPCs attached to the virtual private gateway. **/
        VpcAttachments?: VpcAttachmentList;
        /** Any tags assigned to the virtual private gateway. **/
        Tags?: TagList;
    }
    export interface VpnStaticRoute {
        /** The CIDR block associated with the local subnet of the customer data center. **/
        DestinationCidrBlock?: String;
        /** Indicates how the routes were provided. **/
        Source?: VpnStaticRouteSource;
        /** The current state of the static route. **/
        State?: VpnState;
    }
  }
}
