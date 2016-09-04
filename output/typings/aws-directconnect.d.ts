// Type definitions for aws-sdk - AWS Direct Connect
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2012-10-25
    * endpointPrefix: directconnect
    * serviceAbbreviation: 
    * signatureVersion: v4
    * protocol: json
    *
    * AWS Direct Connect links your internal network to an AWS Direct Connect location
 over a standard 1 gigabit or 10 gigabit Ethernet fiber-optic cable. One end of
 the cable is connected to your router, the other to an AWS Direct Connect
 router. With this connection in place, you can create virtual interfaces
 directly to the AWS cloud (for example, to Amazon Elastic Compute Cloud (Amazon
 EC2) and Amazon Simple Storage Service (Amazon S3)) and to Amazon Virtual
 Private Cloud (Amazon VPC), bypassing Internet service providers in your network
 path. An AWS Direct Connect location provides access to AWS in the region it is
 associated with, as well as access to other US regions. For example, you can
 provision a single connection to any AWS Direct Connect location in the US and
 use it to access public AWS services in all US Regions and AWS GovCloud (US).
    *
    */
  export class DirectConnect extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Creates a hosted connection on an interconnect.

Allocates a VLAN number and a specified amount of bandwidth for use by a hosted
connection on the given interconnect.

This is intended for use by AWS Direct Connect partners only.
     *
     * @error DirectConnectServerException   
     * @error DirectConnectClientException   
     */
    allocateConnectionOnInterconnect(params: DirectConnect.AllocateConnectionOnInterconnectRequest, callback?: (err: DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any, data: DirectConnect.Connection | any) => void): Request<DirectConnect.Connection | any, DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any>;
    /**
     * Provisions a private virtual interface to be owned by a different customer.

The owner of a connection calls this function to provision a private virtual
interface which will be owned by another AWS customer.

Virtual interfaces created using this function must be confirmed by the virtual
interface owner by calling ConfirmPrivateVirtualInterface. Until this step has
been completed, the virtual interface will be in &#x27;Confirming&#x27; state, and will
not be available for handling traffic.
     *
     * @error DirectConnectServerException   
     * @error DirectConnectClientException   
     */
    allocatePrivateVirtualInterface(params: DirectConnect.AllocatePrivateVirtualInterfaceRequest, callback?: (err: DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any, data: DirectConnect.VirtualInterface | any) => void): Request<DirectConnect.VirtualInterface | any, DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any>;
    /**
     * Provisions a public virtual interface to be owned by a different customer.

The owner of a connection calls this function to provision a public virtual
interface which will be owned by another AWS customer.

Virtual interfaces created using this function must be confirmed by the virtual
interface owner by calling ConfirmPublicVirtualInterface. Until this step has
been completed, the virtual interface will be in &#x27;Confirming&#x27; state, and will
not be available for handling traffic.
     *
     * @error DirectConnectServerException   
     * @error DirectConnectClientException   
     */
    allocatePublicVirtualInterface(params: DirectConnect.AllocatePublicVirtualInterfaceRequest, callback?: (err: DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any, data: DirectConnect.VirtualInterface | any) => void): Request<DirectConnect.VirtualInterface | any, DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any>;
    /**
     * Confirm the creation of a hosted connection on an interconnect.

Upon creation, the hosted connection is initially in the &#x27;Ordering&#x27; state, and
will remain in this state until the owner calls ConfirmConnection to confirm
creation of the hosted connection.
     *
     * @error DirectConnectServerException   
     * @error DirectConnectClientException   
     */
    confirmConnection(params: DirectConnect.ConfirmConnectionRequest, callback?: (err: DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any, data: DirectConnect.ConfirmConnectionResponse | any) => void): Request<DirectConnect.ConfirmConnectionResponse | any, DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any>;
    /**
     * Accept ownership of a private virtual interface created by another customer.

After the virtual interface owner calls this function, the virtual interface
will be created and attached to the given virtual private gateway, and will be
available for handling traffic.
     *
     * @error DirectConnectServerException   
     * @error DirectConnectClientException   
     */
    confirmPrivateVirtualInterface(params: DirectConnect.ConfirmPrivateVirtualInterfaceRequest, callback?: (err: DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any, data: DirectConnect.ConfirmPrivateVirtualInterfaceResponse | any) => void): Request<DirectConnect.ConfirmPrivateVirtualInterfaceResponse | any, DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any>;
    /**
     * Accept ownership of a public virtual interface created by another customer.

After the virtual interface owner calls this function, the specified virtual
interface will be created and made available for handling traffic.
     *
     * @error DirectConnectServerException   
     * @error DirectConnectClientException   
     */
    confirmPublicVirtualInterface(params: DirectConnect.ConfirmPublicVirtualInterfaceRequest, callback?: (err: DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any, data: DirectConnect.ConfirmPublicVirtualInterfaceResponse | any) => void): Request<DirectConnect.ConfirmPublicVirtualInterfaceResponse | any, DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any>;
    /**
     * Creates a new connection between the customer network and a specific AWS Direct
Connect location.

A connection links your internal network to an AWS Direct Connect location over
a standard 1 gigabit or 10 gigabit Ethernet fiber-optic cable. One end of the
cable is connected to your router, the other to an AWS Direct Connect router. An
AWS Direct Connect location provides access to Amazon Web Services in the region
it is associated with. You can establish connections with AWS Direct Connect
locations in multiple regions, but a connection in one region does not provide
connectivity to other regions.
     *
     * @error DirectConnectServerException   
     * @error DirectConnectClientException   
     */
    createConnection(params: DirectConnect.CreateConnectionRequest, callback?: (err: DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any, data: DirectConnect.Connection | any) => void): Request<DirectConnect.Connection | any, DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any>;
    /**
     * Creates a new interconnect between a AWS Direct Connect partner&#x27;s network and a
specific AWS Direct Connect location.

An interconnect is a connection which is capable of hosting other connections.
The AWS Direct Connect partner can use an interconnect to provide sub-1Gbps AWS
Direct Connect service to tier 2 customers who do not have their own
connections. Like a standard connection, an interconnect links the AWS Direct
Connect partner&#x27;s network to an AWS Direct Connect location over a standard 1
Gbps or 10 Gbps Ethernet fiber-optic cable. One end is connected to the
partner&#x27;s router, the other to an AWS Direct Connect router.

For each end customer, the AWS Direct Connect partner provisions a connection on
their interconnect by calling AllocateConnectionOnInterconnect. The end customer
can then connect to AWS resources by creating a virtual interface on their
connection, using the VLAN assigned to them by the AWS Direct Connect partner.

This is intended for use by AWS Direct Connect partners only.
     *
     * @error DirectConnectServerException   
     * @error DirectConnectClientException   
     */
    createInterconnect(params: DirectConnect.CreateInterconnectRequest, callback?: (err: DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any, data: DirectConnect.Interconnect | any) => void): Request<DirectConnect.Interconnect | any, DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any>;
    /**
     * Creates a new private virtual interface. A virtual interface is the VLAN that
transports AWS Direct Connect traffic. A private virtual interface supports
sending traffic to a single virtual private cloud (VPC).
     *
     * @error DirectConnectServerException   
     * @error DirectConnectClientException   
     */
    createPrivateVirtualInterface(params: DirectConnect.CreatePrivateVirtualInterfaceRequest, callback?: (err: DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any, data: DirectConnect.VirtualInterface | any) => void): Request<DirectConnect.VirtualInterface | any, DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any>;
    /**
     * Creates a new public virtual interface. A virtual interface is the VLAN that
transports AWS Direct Connect traffic. A public virtual interface supports
sending traffic to public services of AWS such as Amazon Simple Storage Service
(Amazon S3).
     *
     * @error DirectConnectServerException   
     * @error DirectConnectClientException   
     */
    createPublicVirtualInterface(params: DirectConnect.CreatePublicVirtualInterfaceRequest, callback?: (err: DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any, data: DirectConnect.VirtualInterface | any) => void): Request<DirectConnect.VirtualInterface | any, DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any>;
    /**
     * Deletes the connection.

Deleting a connection only stops the AWS Direct Connect port hour and data
transfer charges. You need to cancel separately with the providers any services
or charges for cross-connects or network circuits that connect you to the AWS
Direct Connect location.
     *
     * @error DirectConnectServerException   
     * @error DirectConnectClientException   
     */
    deleteConnection(params: DirectConnect.DeleteConnectionRequest, callback?: (err: DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any, data: DirectConnect.Connection | any) => void): Request<DirectConnect.Connection | any, DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any>;
    /**
     * Deletes the specified interconnect.

This is intended for use by AWS Direct Connect partners only.
     *
     * @error DirectConnectServerException   
     * @error DirectConnectClientException   
     */
    deleteInterconnect(params: DirectConnect.DeleteInterconnectRequest, callback?: (err: DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any, data: DirectConnect.DeleteInterconnectResponse | any) => void): Request<DirectConnect.DeleteInterconnectResponse | any, DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any>;
    /**
     * Deletes a virtual interface.
     *
     * @error DirectConnectServerException   
     * @error DirectConnectClientException   
     */
    deleteVirtualInterface(params: DirectConnect.DeleteVirtualInterfaceRequest, callback?: (err: DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any, data: DirectConnect.DeleteVirtualInterfaceResponse | any) => void): Request<DirectConnect.DeleteVirtualInterfaceResponse | any, DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any>;
    /**
     * Returns the LOA-CFA for a Connection.

The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a
document that your APN partner or service provider uses when establishing your
cross connect to AWS at the colocation facility. For more information, see 
Requesting Cross Connects at AWS Direct Connect Locations
[http://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html] in
the AWS Direct Connect user guide.
     *
     * @error DirectConnectServerException   
     * @error DirectConnectClientException   
     */
    describeConnectionLoa(params: DirectConnect.DescribeConnectionLoaRequest, callback?: (err: DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any, data: DirectConnect.DescribeConnectionLoaResponse | any) => void): Request<DirectConnect.DescribeConnectionLoaResponse | any, DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any>;
    /**
     * Displays all connections in this region.

If a connection ID is provided, the call returns only that particular
connection.
     *
     * @error DirectConnectServerException   
     * @error DirectConnectClientException   
     */
    describeConnections(params: DirectConnect.DescribeConnectionsRequest, callback?: (err: DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any, data: DirectConnect.Connections | any) => void): Request<DirectConnect.Connections | any, DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any>;
    /**
     * Return a list of connections that have been provisioned on the given
interconnect.

This is intended for use by AWS Direct Connect partners only.
     *
     * @error DirectConnectServerException   
     * @error DirectConnectClientException   
     */
    describeConnectionsOnInterconnect(params: DirectConnect.DescribeConnectionsOnInterconnectRequest, callback?: (err: DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any, data: DirectConnect.Connections | any) => void): Request<DirectConnect.Connections | any, DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any>;
    /**
     * Returns the LOA-CFA for an Interconnect.

The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a
document that is used when establishing your cross connect to AWS at the
colocation facility. For more information, see Requesting Cross Connects at AWS
Direct Connect Locations
[http://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html] in
the AWS Direct Connect user guide.
     *
     * @error DirectConnectServerException   
     * @error DirectConnectClientException   
     */
    describeInterconnectLoa(params: DirectConnect.DescribeInterconnectLoaRequest, callback?: (err: DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any, data: DirectConnect.DescribeInterconnectLoaResponse | any) => void): Request<DirectConnect.DescribeInterconnectLoaResponse | any, DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any>;
    /**
     * Returns a list of interconnects owned by the AWS account.

If an interconnect ID is provided, it will only return this particular
interconnect.
     *
     * @error DirectConnectServerException   
     * @error DirectConnectClientException   
     */
    describeInterconnects(params: DirectConnect.DescribeInterconnectsRequest, callback?: (err: DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any, data: DirectConnect.Interconnects | any) => void): Request<DirectConnect.Interconnects | any, DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any>;
    /**
     * Returns the list of AWS Direct Connect locations in the current AWS region.
These are the locations that may be selected when calling CreateConnection or
CreateInterconnect.
     *
     * @error DirectConnectServerException   
     * @error DirectConnectClientException   
     */
    describeLocations(callback?: (err: DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any, data: DirectConnect.Locations | any) => void): Request<DirectConnect.Locations | any, DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any>;
    /**
     * Returns a list of virtual private gateways owned by the AWS account.

You can create one or more AWS Direct Connect private virtual interfaces linking
to a virtual private gateway. A virtual private gateway can be managed via
Amazon Virtual Private Cloud (VPC) console or the EC2 CreateVpnGateway
[http://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-CreateVpnGateway.html] 
action.
     *
     * @error DirectConnectServerException   
     * @error DirectConnectClientException   
     */
    describeVirtualGateways(callback?: (err: DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any, data: DirectConnect.VirtualGateways | any) => void): Request<DirectConnect.VirtualGateways | any, DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any>;
    /**
     * Displays all virtual interfaces for an AWS account. Virtual interfaces deleted
fewer than 15 minutes before DescribeVirtualInterfaces is called are also
returned. If a connection ID is included then only virtual interfaces associated
with this connection will be returned. If a virtual interface ID is included
then only a single virtual interface will be returned.

A virtual interface (VLAN) transmits the traffic between the AWS Direct Connect
location and the customer.

If a connection ID is provided, only virtual interfaces provisioned on the
specified connection will be returned. If a virtual interface ID is provided,
only this particular virtual interface will be returned.
     *
     * @error DirectConnectServerException   
     * @error DirectConnectClientException   
     */
    describeVirtualInterfaces(params: DirectConnect.DescribeVirtualInterfacesRequest, callback?: (err: DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any, data: DirectConnect.VirtualInterfaces | any) => void): Request<DirectConnect.VirtualInterfaces | any, DirectConnect.DirectConnectServerException | DirectConnect.DirectConnectClientException | any>;

  }

  export module DirectConnect {

    export type ASN = number;

    export type AmazonAddress = string;

    export type BGPAuthKey = string;

    export type Bandwidth = string;

    export type CIDR = string;

    export type ConnectionId = string;

    export type ConnectionList = Connection[];

    export type ConnectionName = string;

    export type ConnectionState = string;

    export type CustomerAddress = string;

    export type ErrorMessage = string;

    export type InterconnectId = string;

    export type InterconnectList = Interconnect[];

    export type InterconnectName = string;

    export type InterconnectState = string;

    export type LoaContent = any;

    export type LoaContentType = string;

    export type LoaIssueTime = number;

    export type LocationCode = string;

    export type LocationList = Location[];

    export type LocationName = string;

    export type OwnerAccount = string;

    export type PartnerName = string;

    export type ProviderName = string;

    export type Region = string;

    export type RouteFilterPrefixList = RouteFilterPrefix[];

    export type RouterConfig = string;

    export type VLAN = number;

    export type VirtualGatewayId = string;

    export type VirtualGatewayList = VirtualGateway[];

    export type VirtualGatewayState = string;

    export type VirtualInterfaceId = string;

    export type VirtualInterfaceList = VirtualInterface[];

    export type VirtualInterfaceName = string;

    export type VirtualInterfaceState = string;

    export type VirtualInterfaceType = string;

    export interface AllocateConnectionOnInterconnectRequest {
      /** Bandwidth of the connection.

Example: &quot;500Mbps&quot;

Default: None

Values: 50M, 100M, 200M, 300M, 400M, or 500M **/
      bandwidth: Bandwidth;
      /** Name of the provisioned connection.

Example: &quot;500M Connection to AWS&quot;

Default: None **/
      connectionName: ConnectionName;
      /** Numeric account Id of the customer for whom the connection will be provisioned.

Example: 123443215678

Default: None **/
      ownerAccount: OwnerAccount;
      /** ID of the interconnect on which the connection will be provisioned.

Example: dxcon-456abc78

Default: None **/
      interconnectId: InterconnectId;
      /** The dedicated VLAN provisioned to the connection.

Example: 101

Default: None **/
      vlan: VLAN;
    }
    export interface AllocatePrivateVirtualInterfaceRequest {
      /** The connection ID on which the private virtual interface is provisioned.

Default: None **/
      connectionId: ConnectionId;
      /** The AWS account that will own the new private virtual interface.

Default: None **/
      ownerAccount: OwnerAccount;
      /** Detailed information for the private virtual interface to be provisioned.

Default: None **/
      newPrivateVirtualInterfaceAllocation: NewPrivateVirtualInterfaceAllocation;
    }
    export interface AllocatePublicVirtualInterfaceRequest {
      /** The connection ID on which the public virtual interface is provisioned.

Default: None **/
      connectionId: ConnectionId;
      /** The AWS account that will own the new public virtual interface.

Default: None **/
      ownerAccount: OwnerAccount;
      /** Detailed information for the public virtual interface to be provisioned.

Default: None **/
      newPublicVirtualInterfaceAllocation: NewPublicVirtualInterfaceAllocation;
    }
    export interface ConfirmConnectionRequest {
      connectionId: ConnectionId;
    }
    export interface ConfirmConnectionResponse {
      connectionState?: ConnectionState;
    }
    export interface ConfirmPrivateVirtualInterfaceRequest {
      virtualInterfaceId: VirtualInterfaceId;
      /** ID of the virtual private gateway that will be attached to the virtual
interface.

A virtual private gateway can be managed via the Amazon Virtual Private Cloud
(VPC) console or the EC2 CreateVpnGateway
[http://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-CreateVpnGateway.html] 
action.

Default: None **/
      virtualGatewayId: VirtualGatewayId;
    }
    export interface ConfirmPrivateVirtualInterfaceResponse {
      virtualInterfaceState?: VirtualInterfaceState;
    }
    export interface ConfirmPublicVirtualInterfaceRequest {
      virtualInterfaceId: VirtualInterfaceId;
    }
    export interface ConfirmPublicVirtualInterfaceResponse {
      virtualInterfaceState?: VirtualInterfaceState;
    }
    export interface Connection {
      /** The AWS account that will own the new connection. **/
      ownerAccount?: OwnerAccount;
      connectionId?: ConnectionId;
      connectionName?: ConnectionName;
      connectionState?: ConnectionState;
      region?: Region;
      location?: LocationCode;
      /** Bandwidth of the connection.

Example: 1Gbps (for regular connections), or 500Mbps (for hosted connections)

Default: None **/
      bandwidth?: Bandwidth;
      vlan?: VLAN;
      /** The name of the AWS Direct Connect service provider associated with the
connection. **/
      partnerName?: PartnerName;
      /** The time of the most recent call to DescribeConnectionLoa for this Connection. **/
      loaIssueTime?: LoaIssueTime;
    }
    export interface Connections {
      /** A list of connections. **/
      connections?: ConnectionList;
    }
    export interface CreateConnectionRequest {
      location: LocationCode;
      bandwidth: Bandwidth;
      connectionName: ConnectionName;
    }
    export interface CreateInterconnectRequest {
      /** The name of the interconnect.

Example: &quot;1G Interconnect to AWS&quot;

Default: None **/
      interconnectName: InterconnectName;
      /** The port bandwidth

Example: 1Gbps

Default: None

Available values: 1Gbps,10Gbps **/
      bandwidth: Bandwidth;
      /** Where the interconnect is located

Example: EqSV5

Default: None **/
      location: LocationCode;
    }
    export interface CreatePrivateVirtualInterfaceRequest {
      connectionId: ConnectionId;
      /** Detailed information for the private virtual interface to be created.

Default: None **/
      newPrivateVirtualInterface: NewPrivateVirtualInterface;
    }
    export interface CreatePublicVirtualInterfaceRequest {
      connectionId: ConnectionId;
      /** Detailed information for the public virtual interface to be created.

Default: None **/
      newPublicVirtualInterface: NewPublicVirtualInterface;
    }
    export interface DeleteConnectionRequest {
      connectionId: ConnectionId;
    }
    export interface DeleteInterconnectRequest {
      interconnectId: InterconnectId;
    }
    export interface DeleteInterconnectResponse {
      interconnectState?: InterconnectState;
    }
    export interface DeleteVirtualInterfaceRequest {
      virtualInterfaceId: VirtualInterfaceId;
    }
    export interface DeleteVirtualInterfaceResponse {
      virtualInterfaceState?: VirtualInterfaceState;
    }
    export interface DescribeConnectionLoaRequest {
      connectionId: ConnectionId;
      /** The name of the APN partner or service provider who establishes connectivity on
your behalf. If you supply this parameter, the LOA-CFA lists the provider name
alongside your company name as the requester of the cross connect.

Default: None **/
      providerName?: ProviderName;
      loaContentType?: LoaContentType;
    }
    export interface DescribeConnectionLoaResponse {
      loa?: Loa;
    }
    export interface DescribeConnectionsOnInterconnectRequest {
      /** ID of the interconnect on which a list of connection is provisioned.

Example: dxcon-abc123

Default: None **/
      interconnectId: InterconnectId;
    }
    export interface DescribeConnectionsRequest {
      connectionId?: ConnectionId;
    }
    export interface DescribeInterconnectLoaRequest {
      interconnectId: InterconnectId;
      /** The name of the service provider who establishes connectivity on your behalf. If
you supply this parameter, the LOA-CFA lists the provider name alongside your
company name as the requester of the cross connect.

Default: None **/
      providerName?: ProviderName;
      loaContentType?: LoaContentType;
    }
    export interface DescribeInterconnectLoaResponse {
      loa?: Loa;
    }
    export interface DescribeInterconnectsRequest {
      interconnectId?: InterconnectId;
    }
    export interface DescribeVirtualInterfacesRequest {
      connectionId?: ConnectionId;
      virtualInterfaceId?: VirtualInterfaceId;
    }
    export interface DirectConnectClientException {
      /** This is an exception thrown when there is an issue with the input provided by
the API call. For example, the name provided for a connection contains a pound
sign (#). This can also occur when a valid value is provided, but is otherwise
constrained. For example, the valid VLAN tag range is 1-4096 but each can only
be used once per connection. **/
      message?: ErrorMessage;
    }
    export interface DirectConnectServerException {
      /** This is an exception thrown when there is a backend issue on the server side. **/
      message?: ErrorMessage;
    }
    export interface Interconnect {
      interconnectId?: InterconnectId;
      interconnectName?: InterconnectName;
      interconnectState?: InterconnectState;
      region?: Region;
      location?: LocationCode;
      bandwidth?: Bandwidth;
      /** The time of the most recent call to DescribeInterconnectLoa for this
Interconnect. **/
      loaIssueTime?: LoaIssueTime;
    }
    export interface Interconnects {
      /** A list of interconnects. **/
      interconnects?: InterconnectList;
    }
    export interface Loa {
      loaContent?: LoaContent;
      loaContentType?: LoaContentType;
    }
    export interface Location {
      /** The code used to indicate the AWS Direct Connect location. **/
      locationCode?: LocationCode;
      /** The name of the AWS Direct Connect location. The name includes the colocation
partner name and the physical site of the lit building. **/
      locationName?: LocationName;
    }
    export interface Locations {
      /** A list of colocation hubs where network providers have equipment. Most regions
have multiple locations available. **/
      locations?: LocationList;
    }
    export interface NewPrivateVirtualInterface {
      virtualInterfaceName: VirtualInterfaceName;
      vlan: VLAN;
      asn: ASN;
      authKey?: BGPAuthKey;
      amazonAddress?: AmazonAddress;
      customerAddress?: CustomerAddress;
      virtualGatewayId: VirtualGatewayId;
    }
    export interface NewPrivateVirtualInterfaceAllocation {
      virtualInterfaceName: VirtualInterfaceName;
      vlan: VLAN;
      asn: ASN;
      authKey?: BGPAuthKey;
      amazonAddress?: AmazonAddress;
      customerAddress?: CustomerAddress;
    }
    export interface NewPublicVirtualInterface {
      virtualInterfaceName: VirtualInterfaceName;
      vlan: VLAN;
      asn: ASN;
      authKey?: BGPAuthKey;
      amazonAddress: AmazonAddress;
      customerAddress: CustomerAddress;
      routeFilterPrefixes: RouteFilterPrefixList;
    }
    export interface NewPublicVirtualInterfaceAllocation {
      virtualInterfaceName: VirtualInterfaceName;
      vlan: VLAN;
      asn: ASN;
      authKey?: BGPAuthKey;
      amazonAddress: AmazonAddress;
      customerAddress: CustomerAddress;
      routeFilterPrefixes: RouteFilterPrefixList;
    }
    export interface RouteFilterPrefix {
      /** CIDR notation for the advertised route. Multiple routes are separated by commas.

Example: 10.10.10.0/24,10.10.11.0/24 **/
      cidr?: CIDR;
    }
    export interface VirtualGateway {
      virtualGatewayId?: VirtualGatewayId;
      virtualGatewayState?: VirtualGatewayState;
    }
    export interface VirtualGateways {
      /** A list of virtual private gateways. **/
      virtualGateways?: VirtualGatewayList;
    }
    export interface VirtualInterface {
      /** The AWS account that will own the new virtual interface. **/
      ownerAccount?: OwnerAccount;
      virtualInterfaceId?: VirtualInterfaceId;
      location?: LocationCode;
      connectionId?: ConnectionId;
      virtualInterfaceType?: VirtualInterfaceType;
      virtualInterfaceName?: VirtualInterfaceName;
      vlan?: VLAN;
      asn?: ASN;
      authKey?: BGPAuthKey;
      amazonAddress?: AmazonAddress;
      customerAddress?: CustomerAddress;
      virtualInterfaceState?: VirtualInterfaceState;
      /** Information for generating the customer router configuration. **/
      customerRouterConfig?: RouterConfig;
      virtualGatewayId?: VirtualGatewayId;
      routeFilterPrefixes?: RouteFilterPrefixList;
    }
    export interface VirtualInterfaces {
      /** A list of virtual interfaces. **/
      virtualInterfaces?: VirtualInterfaceList;
    }
  }
}
