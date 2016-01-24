// Type definitions for aws-sdk - AWS Direct Connect
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2012-10-25
     * endpointPrefix: directconnect
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: json
     */
    export class DirectConnect extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      allocateConnectionOnInterconnect(params: DirectConnect.AllocateConnectionOnInterconnectRequest, callback?: (err: DirectConnect.DirectConnectServerException|DirectConnect.DirectConnectClientException|any, data: DirectConnect.Connection|any) => void): Request;
      allocatePrivateVirtualInterface(params: DirectConnect.AllocatePrivateVirtualInterfaceRequest, callback?: (err: DirectConnect.DirectConnectServerException|DirectConnect.DirectConnectClientException|any, data: DirectConnect.VirtualInterface|any) => void): Request;
      allocatePublicVirtualInterface(params: DirectConnect.AllocatePublicVirtualInterfaceRequest, callback?: (err: DirectConnect.DirectConnectServerException|DirectConnect.DirectConnectClientException|any, data: DirectConnect.VirtualInterface|any) => void): Request;
      confirmConnection(params: DirectConnect.ConfirmConnectionRequest, callback?: (err: DirectConnect.DirectConnectServerException|DirectConnect.DirectConnectClientException|any, data: DirectConnect.ConfirmConnectionResponse|any) => void): Request;
      confirmPrivateVirtualInterface(params: DirectConnect.ConfirmPrivateVirtualInterfaceRequest, callback?: (err: DirectConnect.DirectConnectServerException|DirectConnect.DirectConnectClientException|any, data: DirectConnect.ConfirmPrivateVirtualInterfaceResponse|any) => void): Request;
      confirmPublicVirtualInterface(params: DirectConnect.ConfirmPublicVirtualInterfaceRequest, callback?: (err: DirectConnect.DirectConnectServerException|DirectConnect.DirectConnectClientException|any, data: DirectConnect.ConfirmPublicVirtualInterfaceResponse|any) => void): Request;
      createConnection(params: DirectConnect.CreateConnectionRequest, callback?: (err: DirectConnect.DirectConnectServerException|DirectConnect.DirectConnectClientException|any, data: DirectConnect.Connection|any) => void): Request;
      createInterconnect(params: DirectConnect.CreateInterconnectRequest, callback?: (err: DirectConnect.DirectConnectServerException|DirectConnect.DirectConnectClientException|any, data: DirectConnect.Interconnect|any) => void): Request;
      createPrivateVirtualInterface(params: DirectConnect.CreatePrivateVirtualInterfaceRequest, callback?: (err: DirectConnect.DirectConnectServerException|DirectConnect.DirectConnectClientException|any, data: DirectConnect.VirtualInterface|any) => void): Request;
      createPublicVirtualInterface(params: DirectConnect.CreatePublicVirtualInterfaceRequest, callback?: (err: DirectConnect.DirectConnectServerException|DirectConnect.DirectConnectClientException|any, data: DirectConnect.VirtualInterface|any) => void): Request;
      deleteConnection(params: DirectConnect.DeleteConnectionRequest, callback?: (err: DirectConnect.DirectConnectServerException|DirectConnect.DirectConnectClientException|any, data: DirectConnect.Connection|any) => void): Request;
      deleteInterconnect(params: DirectConnect.DeleteInterconnectRequest, callback?: (err: DirectConnect.DirectConnectServerException|DirectConnect.DirectConnectClientException|any, data: DirectConnect.DeleteInterconnectResponse|any) => void): Request;
      deleteVirtualInterface(params: DirectConnect.DeleteVirtualInterfaceRequest, callback?: (err: DirectConnect.DirectConnectServerException|DirectConnect.DirectConnectClientException|any, data: DirectConnect.DeleteVirtualInterfaceResponse|any) => void): Request;
      describeConnections(params: DirectConnect.DescribeConnectionsRequest, callback?: (err: DirectConnect.DirectConnectServerException|DirectConnect.DirectConnectClientException|any, data: DirectConnect.Connections|any) => void): Request;
      describeConnectionsOnInterconnect(params: DirectConnect.DescribeConnectionsOnInterconnectRequest, callback?: (err: DirectConnect.DirectConnectServerException|DirectConnect.DirectConnectClientException|any, data: DirectConnect.Connections|any) => void): Request;
      describeInterconnects(params: DirectConnect.DescribeInterconnectsRequest, callback?: (err: DirectConnect.DirectConnectServerException|DirectConnect.DirectConnectClientException|any, data: DirectConnect.Interconnects|any) => void): Request;
      describeLocations(callback?: (err: DirectConnect.DirectConnectServerException|DirectConnect.DirectConnectClientException|any, data: DirectConnect.Locations|any) => void): Request;
      describeVirtualGateways(callback?: (err: DirectConnect.DirectConnectServerException|DirectConnect.DirectConnectClientException|any, data: DirectConnect.VirtualGateways|any) => void): Request;
      describeVirtualInterfaces(params: DirectConnect.DescribeVirtualInterfacesRequest, callback?: (err: DirectConnect.DirectConnectServerException|DirectConnect.DirectConnectClientException|any, data: DirectConnect.VirtualInterfaces|any) => void): Request;

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
        export type LocationCode = string;
        export type LocationList = Location[];
        export type LocationName = string;
        export type OwnerAccount = string;
        export type PartnerName = string;
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
        export interface Interconnect {
            interconnectId?: InterconnectId;
            interconnectName?: InterconnectName;
            interconnectState?: InterconnectState;
            region?: Region;
            location?: LocationCode;
            bandwidth?: Bandwidth;
        }
        export interface Interconnects {
            interconnects?: InterconnectList;
        }
        export interface Location {
            locationCode?: LocationCode;
            locationName?: LocationName;
        }
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
        export interface RouteFilterPrefix {
            cidr?: CIDR;
        }
        export interface VirtualGateway {
            virtualGatewayId?: VirtualGatewayId;
            virtualGatewayState?: VirtualGatewayState;
        }
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
        export interface VirtualInterfaces {
            virtualInterfaces?: VirtualInterfaceList;
        }

    }
}
