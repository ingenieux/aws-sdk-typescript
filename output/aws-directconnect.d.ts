// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class DirectConnect {
      constructor(options?: any);
      allocateConnectionOnInterconnect(params: AllocateConnectionOnInterconnectRequest, callback: (err: DirectConnectServerException|DirectConnectClientException|any, data: Connection|any) => void): void;
      allocatePrivateVirtualInterface(params: AllocatePrivateVirtualInterfaceRequest, callback: (err: DirectConnectServerException|DirectConnectClientException|any, data: VirtualInterface|any) => void): void;
      allocatePublicVirtualInterface(params: AllocatePublicVirtualInterfaceRequest, callback: (err: DirectConnectServerException|DirectConnectClientException|any, data: VirtualInterface|any) => void): void;
      confirmConnection(params: ConfirmConnectionRequest, callback: (err: DirectConnectServerException|DirectConnectClientException|any, data: ConfirmConnectionResponse|any) => void): void;
      confirmPrivateVirtualInterface(params: ConfirmPrivateVirtualInterfaceRequest, callback: (err: DirectConnectServerException|DirectConnectClientException|any, data: ConfirmPrivateVirtualInterfaceResponse|any) => void): void;
      confirmPublicVirtualInterface(params: ConfirmPublicVirtualInterfaceRequest, callback: (err: DirectConnectServerException|DirectConnectClientException|any, data: ConfirmPublicVirtualInterfaceResponse|any) => void): void;
      createConnection(params: CreateConnectionRequest, callback: (err: DirectConnectServerException|DirectConnectClientException|any, data: Connection|any) => void): void;
      createInterconnect(params: CreateInterconnectRequest, callback: (err: DirectConnectServerException|DirectConnectClientException|any, data: Interconnect|any) => void): void;
      createPrivateVirtualInterface(params: CreatePrivateVirtualInterfaceRequest, callback: (err: DirectConnectServerException|DirectConnectClientException|any, data: VirtualInterface|any) => void): void;
      createPublicVirtualInterface(params: CreatePublicVirtualInterfaceRequest, callback: (err: DirectConnectServerException|DirectConnectClientException|any, data: VirtualInterface|any) => void): void;
      deleteConnection(params: DeleteConnectionRequest, callback: (err: DirectConnectServerException|DirectConnectClientException|any, data: Connection|any) => void): void;
      deleteInterconnect(params: DeleteInterconnectRequest, callback: (err: DirectConnectServerException|DirectConnectClientException|any, data: DeleteInterconnectResponse|any) => void): void;
      deleteVirtualInterface(params: DeleteVirtualInterfaceRequest, callback: (err: DirectConnectServerException|DirectConnectClientException|any, data: DeleteVirtualInterfaceResponse|any) => void): void;
      describeConnections(params: DescribeConnectionsRequest, callback: (err: DirectConnectServerException|DirectConnectClientException|any, data: Connections|any) => void): void;
      describeConnectionsOnInterconnect(params: DescribeConnectionsOnInterconnectRequest, callback: (err: DirectConnectServerException|DirectConnectClientException|any, data: Connections|any) => void): void;
      describeInterconnects(params: DescribeInterconnectsRequest, callback: (err: DirectConnectServerException|DirectConnectClientException|any, data: Interconnects|any) => void): void;
      describeLocations(callback: (err: DirectConnectServerException|DirectConnectClientException|any, data: Locations|any) => void): void;
      describeVirtualGateways(callback: (err: DirectConnectServerException|DirectConnectClientException|any, data: VirtualGateways|any) => void): void;
      describeVirtualInterfaces(params: DescribeVirtualInterfacesRequest, callback: (err: DirectConnectServerException|DirectConnectClientException|any, data: VirtualInterfaces|any) => void): void;
    }

    export type ASN = number;

    export interface AllocateConnectionOnInterconnectRequest {
      bandwidth: Bandwidth;
      connectionName: ConnectionName;
      ownerAccount: OwnerAccount;
      interconnectId: InterconnectId;
      vlan: VLAN;
    }


    export interface AllocatePrivateVirtualInterfaceRequest {
      connectionId: ConnectionId;
      ownerAccount: OwnerAccount;
      newPrivateVirtualInterfaceAllocation: NewPrivateVirtualInterfaceAllocation;
    }


    export interface AllocatePublicVirtualInterfaceRequest {
      connectionId: ConnectionId;
      ownerAccount: OwnerAccount;
      newPublicVirtualInterfaceAllocation: NewPublicVirtualInterfaceAllocation;
    }


    export type AmazonAddress = string;

    export type BGPAuthKey = string;

    export type Bandwidth = string;

    export type CIDR = string;

    export interface ConfirmConnectionRequest {
      connectionId: ConnectionId;
    }


    export interface ConfirmConnectionResponse {
      connectionState?: ConnectionState;
    }


    export interface ConfirmPrivateVirtualInterfaceRequest {
      virtualInterfaceId: VirtualInterfaceId;
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
      ownerAccount?: OwnerAccount;
      connectionId?: ConnectionId;
      connectionName?: ConnectionName;
      connectionState?: ConnectionState;
      region?: Region;
      location?: LocationCode;
      bandwidth?: Bandwidth;
      vlan?: VLAN;
      partnerName?: PartnerName;
    }


    export type ConnectionId = string;

    export type ConnectionList = Array<Connection>;

    export type ConnectionName = string;

    export type ConnectionState = string;

    export interface Connections {
      connections?: ConnectionList;
    }


    export interface CreateConnectionRequest {
      location: LocationCode;
      bandwidth: Bandwidth;
      connectionName: ConnectionName;
    }


    export interface CreateInterconnectRequest {
      interconnectName: InterconnectName;
      bandwidth: Bandwidth;
      location: LocationCode;
    }


    export interface CreatePrivateVirtualInterfaceRequest {
      connectionId: ConnectionId;
      newPrivateVirtualInterface: NewPrivateVirtualInterface;
    }


    export interface CreatePublicVirtualInterfaceRequest {
      connectionId: ConnectionId;
      newPublicVirtualInterface: NewPublicVirtualInterface;
    }


    export type CustomerAddress = string;

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


    export interface DescribeConnectionsOnInterconnectRequest {
      interconnectId: InterconnectId;
    }


    export interface DescribeConnectionsRequest {
      connectionId?: ConnectionId;
    }


    export interface DescribeInterconnectsRequest {
      interconnectId?: InterconnectId;
    }


    export interface DescribeVirtualInterfacesRequest {
      connectionId?: ConnectionId;
      virtualInterfaceId?: VirtualInterfaceId;
    }


    export interface DirectConnectClientException {
      message?: ErrorMessage;
    }


    export interface DirectConnectServerException {
      message?: ErrorMessage;
    }


    export type ErrorMessage = string;

    export interface Interconnect {
      interconnectId?: InterconnectId;
      interconnectName?: InterconnectName;
      interconnectState?: InterconnectState;
      region?: Region;
      location?: LocationCode;
      bandwidth?: Bandwidth;
    }


    export type InterconnectId = string;

    export type InterconnectList = Array<Interconnect>;

    export type InterconnectName = string;

    export type InterconnectState = string;

    export interface Interconnects {
      interconnects?: InterconnectList;
    }


    export interface Location {
      locationCode?: LocationCode;
      locationName?: LocationName;
    }


    export type LocationCode = string;

    export type LocationList = Array<Location>;

    export type LocationName = string;

    export interface Locations {
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


    export type OwnerAccount = string;

    export type PartnerName = string;

    export type Region = string;

    export interface RouteFilterPrefix {
      cidr?: CIDR;
    }


    export type RouteFilterPrefixList = Array<RouteFilterPrefix>;

    export type RouterConfig = string;

    export type VLAN = number;

    export interface VirtualGateway {
      virtualGatewayId?: VirtualGatewayId;
      virtualGatewayState?: VirtualGatewayState;
    }


    export type VirtualGatewayId = string;

    export type VirtualGatewayList = Array<VirtualGateway>;

    export type VirtualGatewayState = string;

    export interface VirtualGateways {
      virtualGateways?: VirtualGatewayList;
    }


    export interface VirtualInterface {
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
      customerRouterConfig?: RouterConfig;
      virtualGatewayId?: VirtualGatewayId;
      routeFilterPrefixes?: RouteFilterPrefixList;
    }


    export type VirtualInterfaceId = string;

    export type VirtualInterfaceList = Array<VirtualInterface>;

    export type VirtualInterfaceName = string;

    export type VirtualInterfaceState = string;

    export type VirtualInterfaceType = string;

    export interface VirtualInterfaces {
      virtualInterfaces?: VirtualInterfaceList;
    }


}
