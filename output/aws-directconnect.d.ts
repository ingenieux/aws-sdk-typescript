// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {

    export class DirectConnect extends Service {
      constructor(options?: any);
      allocateConnectionOnInterconnect(params: DirectConnectAllocateConnectionOnInterconnectRequest, callback?: (err: DirectConnectDirectConnectServerException|DirectConnectDirectConnectClientException|any, data: DirectConnectConnection|any) => void): Request;
      allocatePrivateVirtualInterface(params: DirectConnectAllocatePrivateVirtualInterfaceRequest, callback?: (err: DirectConnectDirectConnectServerException|DirectConnectDirectConnectClientException|any, data: DirectConnectVirtualInterface|any) => void): Request;
      allocatePublicVirtualInterface(params: DirectConnectAllocatePublicVirtualInterfaceRequest, callback?: (err: DirectConnectDirectConnectServerException|DirectConnectDirectConnectClientException|any, data: DirectConnectVirtualInterface|any) => void): Request;
      confirmConnection(params: DirectConnectConfirmConnectionRequest, callback?: (err: DirectConnectDirectConnectServerException|DirectConnectDirectConnectClientException|any, data: DirectConnectConfirmConnectionResponse|any) => void): Request;
      confirmPrivateVirtualInterface(params: DirectConnectConfirmPrivateVirtualInterfaceRequest, callback?: (err: DirectConnectDirectConnectServerException|DirectConnectDirectConnectClientException|any, data: DirectConnectConfirmPrivateVirtualInterfaceResponse|any) => void): Request;
      confirmPublicVirtualInterface(params: DirectConnectConfirmPublicVirtualInterfaceRequest, callback?: (err: DirectConnectDirectConnectServerException|DirectConnectDirectConnectClientException|any, data: DirectConnectConfirmPublicVirtualInterfaceResponse|any) => void): Request;
      createConnection(params: DirectConnectCreateConnectionRequest, callback?: (err: DirectConnectDirectConnectServerException|DirectConnectDirectConnectClientException|any, data: DirectConnectConnection|any) => void): Request;
      createInterconnect(params: DirectConnectCreateInterconnectRequest, callback?: (err: DirectConnectDirectConnectServerException|DirectConnectDirectConnectClientException|any, data: DirectConnectInterconnect|any) => void): Request;
      createPrivateVirtualInterface(params: DirectConnectCreatePrivateVirtualInterfaceRequest, callback?: (err: DirectConnectDirectConnectServerException|DirectConnectDirectConnectClientException|any, data: DirectConnectVirtualInterface|any) => void): Request;
      createPublicVirtualInterface(params: DirectConnectCreatePublicVirtualInterfaceRequest, callback?: (err: DirectConnectDirectConnectServerException|DirectConnectDirectConnectClientException|any, data: DirectConnectVirtualInterface|any) => void): Request;
      deleteConnection(params: DirectConnectDeleteConnectionRequest, callback?: (err: DirectConnectDirectConnectServerException|DirectConnectDirectConnectClientException|any, data: DirectConnectConnection|any) => void): Request;
      deleteInterconnect(params: DirectConnectDeleteInterconnectRequest, callback?: (err: DirectConnectDirectConnectServerException|DirectConnectDirectConnectClientException|any, data: DirectConnectDeleteInterconnectResponse|any) => void): Request;
      deleteVirtualInterface(params: DirectConnectDeleteVirtualInterfaceRequest, callback?: (err: DirectConnectDirectConnectServerException|DirectConnectDirectConnectClientException|any, data: DirectConnectDeleteVirtualInterfaceResponse|any) => void): Request;
      describeConnections(params: DirectConnectDescribeConnectionsRequest, callback?: (err: DirectConnectDirectConnectServerException|DirectConnectDirectConnectClientException|any, data: DirectConnectConnections|any) => void): Request;
      describeConnectionsOnInterconnect(params: DirectConnectDescribeConnectionsOnInterconnectRequest, callback?: (err: DirectConnectDirectConnectServerException|DirectConnectDirectConnectClientException|any, data: DirectConnectConnections|any) => void): Request;
      describeInterconnects(params: DirectConnectDescribeInterconnectsRequest, callback?: (err: DirectConnectDirectConnectServerException|DirectConnectDirectConnectClientException|any, data: DirectConnectInterconnects|any) => void): Request;
      describeLocations(callback?: (err: DirectConnectDirectConnectServerException|DirectConnectDirectConnectClientException|any, data: DirectConnectLocations|any) => void): Request;
      describeVirtualGateways(callback?: (err: DirectConnectDirectConnectServerException|DirectConnectDirectConnectClientException|any, data: DirectConnectVirtualGateways|any) => void): Request;
      describeVirtualInterfaces(params: DirectConnectDescribeVirtualInterfacesRequest, callback?: (err: DirectConnectDirectConnectServerException|DirectConnectDirectConnectClientException|any, data: DirectConnectVirtualInterfaces|any) => void): Request;
    }

    export type DirectConnectASN = number;
    export interface DirectConnectAllocateConnectionOnInterconnectRequest {
        bandwidth: DirectConnectBandwidth;
        connectionName: DirectConnectConnectionName;
        ownerAccount: DirectConnectOwnerAccount;
        interconnectId: DirectConnectInterconnectId;
        vlan: DirectConnectVLAN;
    }

    export interface DirectConnectAllocatePrivateVirtualInterfaceRequest {
        connectionId: DirectConnectConnectionId;
        ownerAccount: DirectConnectOwnerAccount;
        newPrivateVirtualInterfaceAllocation: DirectConnectNewPrivateVirtualInterfaceAllocation;
    }

    export interface DirectConnectAllocatePublicVirtualInterfaceRequest {
        connectionId: DirectConnectConnectionId;
        ownerAccount: DirectConnectOwnerAccount;
        newPublicVirtualInterfaceAllocation: DirectConnectNewPublicVirtualInterfaceAllocation;
    }

    export type DirectConnectAmazonAddress = string;
    export type DirectConnectBGPAuthKey = string;
    export type DirectConnectBandwidth = string;
    export type DirectConnectCIDR = string;
    export interface DirectConnectConfirmConnectionRequest {
        connectionId: DirectConnectConnectionId;
    }

    export interface DirectConnectConfirmConnectionResponse {
        connectionState?: DirectConnectConnectionState;
    }

    export interface DirectConnectConfirmPrivateVirtualInterfaceRequest {
        virtualInterfaceId: DirectConnectVirtualInterfaceId;
        virtualGatewayId: DirectConnectVirtualGatewayId;
    }

    export interface DirectConnectConfirmPrivateVirtualInterfaceResponse {
        virtualInterfaceState?: DirectConnectVirtualInterfaceState;
    }

    export interface DirectConnectConfirmPublicVirtualInterfaceRequest {
        virtualInterfaceId: DirectConnectVirtualInterfaceId;
    }

    export interface DirectConnectConfirmPublicVirtualInterfaceResponse {
        virtualInterfaceState?: DirectConnectVirtualInterfaceState;
    }

    export interface DirectConnectConnection {
        ownerAccount?: DirectConnectOwnerAccount;
        connectionId?: DirectConnectConnectionId;
        connectionName?: DirectConnectConnectionName;
        connectionState?: DirectConnectConnectionState;
        region?: DirectConnectRegion;
        location?: DirectConnectLocationCode;
        bandwidth?: DirectConnectBandwidth;
        vlan?: DirectConnectVLAN;
        partnerName?: DirectConnectPartnerName;
    }

    export type DirectConnectConnectionId = string;
    export type DirectConnectConnectionList = Array<DirectConnectConnection>;
    export type DirectConnectConnectionName = string;
    export type DirectConnectConnectionState = string;
    export interface DirectConnectConnections {
        connections?: DirectConnectConnectionList;
    }

    export interface DirectConnectCreateConnectionRequest {
        location: DirectConnectLocationCode;
        bandwidth: DirectConnectBandwidth;
        connectionName: DirectConnectConnectionName;
    }

    export interface DirectConnectCreateInterconnectRequest {
        interconnectName: DirectConnectInterconnectName;
        bandwidth: DirectConnectBandwidth;
        location: DirectConnectLocationCode;
    }

    export interface DirectConnectCreatePrivateVirtualInterfaceRequest {
        connectionId: DirectConnectConnectionId;
        newPrivateVirtualInterface: DirectConnectNewPrivateVirtualInterface;
    }

    export interface DirectConnectCreatePublicVirtualInterfaceRequest {
        connectionId: DirectConnectConnectionId;
        newPublicVirtualInterface: DirectConnectNewPublicVirtualInterface;
    }

    export type DirectConnectCustomerAddress = string;
    export interface DirectConnectDeleteConnectionRequest {
        connectionId: DirectConnectConnectionId;
    }

    export interface DirectConnectDeleteInterconnectRequest {
        interconnectId: DirectConnectInterconnectId;
    }

    export interface DirectConnectDeleteInterconnectResponse {
        interconnectState?: DirectConnectInterconnectState;
    }

    export interface DirectConnectDeleteVirtualInterfaceRequest {
        virtualInterfaceId: DirectConnectVirtualInterfaceId;
    }

    export interface DirectConnectDeleteVirtualInterfaceResponse {
        virtualInterfaceState?: DirectConnectVirtualInterfaceState;
    }

    export interface DirectConnectDescribeConnectionsOnInterconnectRequest {
        interconnectId: DirectConnectInterconnectId;
    }

    export interface DirectConnectDescribeConnectionsRequest {
        connectionId?: DirectConnectConnectionId;
    }

    export interface DirectConnectDescribeInterconnectsRequest {
        interconnectId?: DirectConnectInterconnectId;
    }

    export interface DirectConnectDescribeVirtualInterfacesRequest {
        connectionId?: DirectConnectConnectionId;
        virtualInterfaceId?: DirectConnectVirtualInterfaceId;
    }

    export interface DirectConnectDirectConnectClientException {
        message?: DirectConnectErrorMessage;
    }

    export interface DirectConnectDirectConnectServerException {
        message?: DirectConnectErrorMessage;
    }

    export type DirectConnectErrorMessage = string;
    export interface DirectConnectInterconnect {
        interconnectId?: DirectConnectInterconnectId;
        interconnectName?: DirectConnectInterconnectName;
        interconnectState?: DirectConnectInterconnectState;
        region?: DirectConnectRegion;
        location?: DirectConnectLocationCode;
        bandwidth?: DirectConnectBandwidth;
    }

    export type DirectConnectInterconnectId = string;
    export type DirectConnectInterconnectList = Array<DirectConnectInterconnect>;
    export type DirectConnectInterconnectName = string;
    export type DirectConnectInterconnectState = string;
    export interface DirectConnectInterconnects {
        interconnects?: DirectConnectInterconnectList;
    }

    export interface DirectConnectLocation {
        locationCode?: DirectConnectLocationCode;
        locationName?: DirectConnectLocationName;
    }

    export type DirectConnectLocationCode = string;
    export type DirectConnectLocationList = Array<DirectConnectLocation>;
    export type DirectConnectLocationName = string;
    export interface DirectConnectLocations {
        locations?: DirectConnectLocationList;
    }

    export interface DirectConnectNewPrivateVirtualInterface {
        virtualInterfaceName: DirectConnectVirtualInterfaceName;
        vlan: DirectConnectVLAN;
        asn: DirectConnectASN;
        authKey?: DirectConnectBGPAuthKey;
        amazonAddress?: DirectConnectAmazonAddress;
        customerAddress?: DirectConnectCustomerAddress;
        virtualGatewayId: DirectConnectVirtualGatewayId;
    }

    export interface DirectConnectNewPrivateVirtualInterfaceAllocation {
        virtualInterfaceName: DirectConnectVirtualInterfaceName;
        vlan: DirectConnectVLAN;
        asn: DirectConnectASN;
        authKey?: DirectConnectBGPAuthKey;
        amazonAddress?: DirectConnectAmazonAddress;
        customerAddress?: DirectConnectCustomerAddress;
    }

    export interface DirectConnectNewPublicVirtualInterface {
        virtualInterfaceName: DirectConnectVirtualInterfaceName;
        vlan: DirectConnectVLAN;
        asn: DirectConnectASN;
        authKey?: DirectConnectBGPAuthKey;
        amazonAddress: DirectConnectAmazonAddress;
        customerAddress: DirectConnectCustomerAddress;
        routeFilterPrefixes: DirectConnectRouteFilterPrefixList;
    }

    export interface DirectConnectNewPublicVirtualInterfaceAllocation {
        virtualInterfaceName: DirectConnectVirtualInterfaceName;
        vlan: DirectConnectVLAN;
        asn: DirectConnectASN;
        authKey?: DirectConnectBGPAuthKey;
        amazonAddress: DirectConnectAmazonAddress;
        customerAddress: DirectConnectCustomerAddress;
        routeFilterPrefixes: DirectConnectRouteFilterPrefixList;
    }

    export type DirectConnectOwnerAccount = string;
    export type DirectConnectPartnerName = string;
    export type DirectConnectRegion = string;
    export interface DirectConnectRouteFilterPrefix {
        cidr?: DirectConnectCIDR;
    }

    export type DirectConnectRouteFilterPrefixList = Array<DirectConnectRouteFilterPrefix>;
    export type DirectConnectRouterConfig = string;
    export type DirectConnectVLAN = number;
    export interface DirectConnectVirtualGateway {
        virtualGatewayId?: DirectConnectVirtualGatewayId;
        virtualGatewayState?: DirectConnectVirtualGatewayState;
    }

    export type DirectConnectVirtualGatewayId = string;
    export type DirectConnectVirtualGatewayList = Array<DirectConnectVirtualGateway>;
    export type DirectConnectVirtualGatewayState = string;
    export interface DirectConnectVirtualGateways {
        virtualGateways?: DirectConnectVirtualGatewayList;
    }

    export interface DirectConnectVirtualInterface {
        ownerAccount?: DirectConnectOwnerAccount;
        virtualInterfaceId?: DirectConnectVirtualInterfaceId;
        location?: DirectConnectLocationCode;
        connectionId?: DirectConnectConnectionId;
        virtualInterfaceType?: DirectConnectVirtualInterfaceType;
        virtualInterfaceName?: DirectConnectVirtualInterfaceName;
        vlan?: DirectConnectVLAN;
        asn?: DirectConnectASN;
        authKey?: DirectConnectBGPAuthKey;
        amazonAddress?: DirectConnectAmazonAddress;
        customerAddress?: DirectConnectCustomerAddress;
        virtualInterfaceState?: DirectConnectVirtualInterfaceState;
        customerRouterConfig?: DirectConnectRouterConfig;
        virtualGatewayId?: DirectConnectVirtualGatewayId;
        routeFilterPrefixes?: DirectConnectRouteFilterPrefixList;
    }

    export type DirectConnectVirtualInterfaceId = string;
    export type DirectConnectVirtualInterfaceList = Array<DirectConnectVirtualInterface>;
    export type DirectConnectVirtualInterfaceName = string;
    export type DirectConnectVirtualInterfaceState = string;
    export type DirectConnectVirtualInterfaceType = string;
    export interface DirectConnectVirtualInterfaces {
        virtualInterfaces?: DirectConnectVirtualInterfaceList;
    }

}
