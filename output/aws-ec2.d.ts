// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class EC2 {
      constructor(options?: any);
      acceptVpcPeeringConnection(params: AcceptVpcPeeringConnectionRequest, callback: (err: any, data: AcceptVpcPeeringConnectionResult|any) => void): void;
      allocateAddress(params: AllocateAddressRequest, callback: (err: any, data: AllocateAddressResult|any) => void): void;
      assignPrivateIpAddresses(params: AssignPrivateIpAddressesRequest, callback: (err: any, data: any) => void): void;
      associateAddress(params: AssociateAddressRequest, callback: (err: any, data: AssociateAddressResult|any) => void): void;
      associateDhcpOptions(params: AssociateDhcpOptionsRequest, callback: (err: any, data: any) => void): void;
      associateRouteTable(params: AssociateRouteTableRequest, callback: (err: any, data: AssociateRouteTableResult|any) => void): void;
      attachClassicLinkVpc(params: AttachClassicLinkVpcRequest, callback: (err: any, data: AttachClassicLinkVpcResult|any) => void): void;
      attachInternetGateway(params: AttachInternetGatewayRequest, callback: (err: any, data: any) => void): void;
      attachNetworkInterface(params: AttachNetworkInterfaceRequest, callback: (err: any, data: AttachNetworkInterfaceResult|any) => void): void;
      attachVolume(params: AttachVolumeRequest, callback: (err: any, data: VolumeAttachment|any) => void): void;
      attachVpnGateway(params: AttachVpnGatewayRequest, callback: (err: any, data: AttachVpnGatewayResult|any) => void): void;
      authorizeSecurityGroupEgress(params: AuthorizeSecurityGroupEgressRequest, callback: (err: any, data: any) => void): void;
      authorizeSecurityGroupIngress(params: AuthorizeSecurityGroupIngressRequest, callback: (err: any, data: any) => void): void;
      bundleInstance(params: BundleInstanceRequest, callback: (err: any, data: BundleInstanceResult|any) => void): void;
      cancelBundleTask(params: CancelBundleTaskRequest, callback: (err: any, data: CancelBundleTaskResult|any) => void): void;
      cancelConversionTask(params: CancelConversionRequest, callback: (err: any, data: any) => void): void;
      cancelExportTask(params: CancelExportTaskRequest, callback: (err: any, data: any) => void): void;
      cancelImportTask(params: CancelImportTaskRequest, callback: (err: any, data: CancelImportTaskResult|any) => void): void;
      cancelReservedInstancesListing(params: CancelReservedInstancesListingRequest, callback: (err: any, data: CancelReservedInstancesListingResult|any) => void): void;
      cancelSpotFleetRequests(params: CancelSpotFleetRequestsRequest, callback: (err: any, data: CancelSpotFleetRequestsResponse|any) => void): void;
      cancelSpotInstanceRequests(params: CancelSpotInstanceRequestsRequest, callback: (err: any, data: CancelSpotInstanceRequestsResult|any) => void): void;
      confirmProductInstance(params: ConfirmProductInstanceRequest, callback: (err: any, data: ConfirmProductInstanceResult|any) => void): void;
      copyImage(params: CopyImageRequest, callback: (err: any, data: CopyImageResult|any) => void): void;
      copySnapshot(params: CopySnapshotRequest, callback: (err: any, data: CopySnapshotResult|any) => void): void;
      createCustomerGateway(params: CreateCustomerGatewayRequest, callback: (err: any, data: CreateCustomerGatewayResult|any) => void): void;
      createDhcpOptions(params: CreateDhcpOptionsRequest, callback: (err: any, data: CreateDhcpOptionsResult|any) => void): void;
      createImage(params: CreateImageRequest, callback: (err: any, data: CreateImageResult|any) => void): void;
      createInstanceExportTask(params: CreateInstanceExportTaskRequest, callback: (err: any, data: CreateInstanceExportTaskResult|any) => void): void;
      createInternetGateway(params: CreateInternetGatewayRequest, callback: (err: any, data: CreateInternetGatewayResult|any) => void): void;
      createKeyPair(params: CreateKeyPairRequest, callback: (err: any, data: KeyPair|any) => void): void;
      createNetworkAcl(params: CreateNetworkAclRequest, callback: (err: any, data: CreateNetworkAclResult|any) => void): void;
      createNetworkAclEntry(params: CreateNetworkAclEntryRequest, callback: (err: any, data: any) => void): void;
      createNetworkInterface(params: CreateNetworkInterfaceRequest, callback: (err: any, data: CreateNetworkInterfaceResult|any) => void): void;
      createPlacementGroup(params: CreatePlacementGroupRequest, callback: (err: any, data: any) => void): void;
      createReservedInstancesListing(params: CreateReservedInstancesListingRequest, callback: (err: any, data: CreateReservedInstancesListingResult|any) => void): void;
      createRoute(params: CreateRouteRequest, callback: (err: any, data: CreateRouteResult|any) => void): void;
      createRouteTable(params: CreateRouteTableRequest, callback: (err: any, data: CreateRouteTableResult|any) => void): void;
      createSecurityGroup(params: CreateSecurityGroupRequest, callback: (err: any, data: CreateSecurityGroupResult|any) => void): void;
      createSnapshot(params: CreateSnapshotRequest, callback: (err: any, data: Snapshot|any) => void): void;
      createSpotDatafeedSubscription(params: CreateSpotDatafeedSubscriptionRequest, callback: (err: any, data: CreateSpotDatafeedSubscriptionResult|any) => void): void;
      createSubnet(params: CreateSubnetRequest, callback: (err: any, data: CreateSubnetResult|any) => void): void;
      createTags(params: CreateTagsRequest, callback: (err: any, data: any) => void): void;
      createVolume(params: CreateVolumeRequest, callback: (err: any, data: Volume|any) => void): void;
      createVpc(params: CreateVpcRequest, callback: (err: any, data: CreateVpcResult|any) => void): void;
      createVpcEndpoint(params: CreateVpcEndpointRequest, callback: (err: any, data: CreateVpcEndpointResult|any) => void): void;
      createVpcPeeringConnection(params: CreateVpcPeeringConnectionRequest, callback: (err: any, data: CreateVpcPeeringConnectionResult|any) => void): void;
      createVpnConnection(params: CreateVpnConnectionRequest, callback: (err: any, data: CreateVpnConnectionResult|any) => void): void;
      createVpnConnectionRoute(params: CreateVpnConnectionRouteRequest, callback: (err: any, data: any) => void): void;
      createVpnGateway(params: CreateVpnGatewayRequest, callback: (err: any, data: CreateVpnGatewayResult|any) => void): void;
      deleteCustomerGateway(params: DeleteCustomerGatewayRequest, callback: (err: any, data: any) => void): void;
      deleteDhcpOptions(params: DeleteDhcpOptionsRequest, callback: (err: any, data: any) => void): void;
      deleteInternetGateway(params: DeleteInternetGatewayRequest, callback: (err: any, data: any) => void): void;
      deleteKeyPair(params: DeleteKeyPairRequest, callback: (err: any, data: any) => void): void;
      deleteNetworkAcl(params: DeleteNetworkAclRequest, callback: (err: any, data: any) => void): void;
      deleteNetworkAclEntry(params: DeleteNetworkAclEntryRequest, callback: (err: any, data: any) => void): void;
      deleteNetworkInterface(params: DeleteNetworkInterfaceRequest, callback: (err: any, data: any) => void): void;
      deletePlacementGroup(params: DeletePlacementGroupRequest, callback: (err: any, data: any) => void): void;
      deleteRoute(params: DeleteRouteRequest, callback: (err: any, data: any) => void): void;
      deleteRouteTable(params: DeleteRouteTableRequest, callback: (err: any, data: any) => void): void;
      deleteSecurityGroup(params: DeleteSecurityGroupRequest, callback: (err: any, data: any) => void): void;
      deleteSnapshot(params: DeleteSnapshotRequest, callback: (err: any, data: any) => void): void;
      deleteSpotDatafeedSubscription(params: DeleteSpotDatafeedSubscriptionRequest, callback: (err: any, data: any) => void): void;
      deleteSubnet(params: DeleteSubnetRequest, callback: (err: any, data: any) => void): void;
      deleteTags(params: DeleteTagsRequest, callback: (err: any, data: any) => void): void;
      deleteVolume(params: DeleteVolumeRequest, callback: (err: any, data: any) => void): void;
      deleteVpc(params: DeleteVpcRequest, callback: (err: any, data: any) => void): void;
      deleteVpcEndpoints(params: DeleteVpcEndpointsRequest, callback: (err: any, data: DeleteVpcEndpointsResult|any) => void): void;
      deleteVpcPeeringConnection(params: DeleteVpcPeeringConnectionRequest, callback: (err: any, data: DeleteVpcPeeringConnectionResult|any) => void): void;
      deleteVpnConnection(params: DeleteVpnConnectionRequest, callback: (err: any, data: any) => void): void;
      deleteVpnConnectionRoute(params: DeleteVpnConnectionRouteRequest, callback: (err: any, data: any) => void): void;
      deleteVpnGateway(params: DeleteVpnGatewayRequest, callback: (err: any, data: any) => void): void;
      deregisterImage(params: DeregisterImageRequest, callback: (err: any, data: any) => void): void;
      describeAccountAttributes(params: DescribeAccountAttributesRequest, callback: (err: any, data: DescribeAccountAttributesResult|any) => void): void;
      describeAddresses(params: DescribeAddressesRequest, callback: (err: any, data: DescribeAddressesResult|any) => void): void;
      describeAvailabilityZones(params: DescribeAvailabilityZonesRequest, callback: (err: any, data: DescribeAvailabilityZonesResult|any) => void): void;
      describeBundleTasks(params: DescribeBundleTasksRequest, callback: (err: any, data: DescribeBundleTasksResult|any) => void): void;
      describeClassicLinkInstances(params: DescribeClassicLinkInstancesRequest, callback: (err: any, data: DescribeClassicLinkInstancesResult|any) => void): void;
      describeConversionTasks(params: DescribeConversionTasksRequest, callback: (err: any, data: DescribeConversionTasksResult|any) => void): void;
      describeCustomerGateways(params: DescribeCustomerGatewaysRequest, callback: (err: any, data: DescribeCustomerGatewaysResult|any) => void): void;
      describeDhcpOptions(params: DescribeDhcpOptionsRequest, callback: (err: any, data: DescribeDhcpOptionsResult|any) => void): void;
      describeExportTasks(params: DescribeExportTasksRequest, callback: (err: any, data: DescribeExportTasksResult|any) => void): void;
      describeImageAttribute(params: DescribeImageAttributeRequest, callback: (err: any, data: ImageAttribute|any) => void): void;
      describeImages(params: DescribeImagesRequest, callback: (err: any, data: DescribeImagesResult|any) => void): void;
      describeImportImageTasks(params: DescribeImportImageTasksRequest, callback: (err: any, data: DescribeImportImageTasksResult|any) => void): void;
      describeImportSnapshotTasks(params: DescribeImportSnapshotTasksRequest, callback: (err: any, data: DescribeImportSnapshotTasksResult|any) => void): void;
      describeInstanceAttribute(params: DescribeInstanceAttributeRequest, callback: (err: any, data: InstanceAttribute|any) => void): void;
      describeInstanceStatus(params: DescribeInstanceStatusRequest, callback: (err: any, data: DescribeInstanceStatusResult|any) => void): void;
      describeInstances(params: DescribeInstancesRequest, callback: (err: any, data: DescribeInstancesResult|any) => void): void;
      describeInternetGateways(params: DescribeInternetGatewaysRequest, callback: (err: any, data: DescribeInternetGatewaysResult|any) => void): void;
      describeKeyPairs(params: DescribeKeyPairsRequest, callback: (err: any, data: DescribeKeyPairsResult|any) => void): void;
      describeMovingAddresses(params: DescribeMovingAddressesRequest, callback: (err: any, data: DescribeMovingAddressesResult|any) => void): void;
      describeNetworkAcls(params: DescribeNetworkAclsRequest, callback: (err: any, data: DescribeNetworkAclsResult|any) => void): void;
      describeNetworkInterfaceAttribute(params: DescribeNetworkInterfaceAttributeRequest, callback: (err: any, data: DescribeNetworkInterfaceAttributeResult|any) => void): void;
      describeNetworkInterfaces(params: DescribeNetworkInterfacesRequest, callback: (err: any, data: DescribeNetworkInterfacesResult|any) => void): void;
      describePlacementGroups(params: DescribePlacementGroupsRequest, callback: (err: any, data: DescribePlacementGroupsResult|any) => void): void;
      describePrefixLists(params: DescribePrefixListsRequest, callback: (err: any, data: DescribePrefixListsResult|any) => void): void;
      describeRegions(params: DescribeRegionsRequest, callback: (err: any, data: DescribeRegionsResult|any) => void): void;
      describeReservedInstances(params: DescribeReservedInstancesRequest, callback: (err: any, data: DescribeReservedInstancesResult|any) => void): void;
      describeReservedInstancesListings(params: DescribeReservedInstancesListingsRequest, callback: (err: any, data: DescribeReservedInstancesListingsResult|any) => void): void;
      describeReservedInstancesModifications(params: DescribeReservedInstancesModificationsRequest, callback: (err: any, data: DescribeReservedInstancesModificationsResult|any) => void): void;
      describeReservedInstancesOfferings(params: DescribeReservedInstancesOfferingsRequest, callback: (err: any, data: DescribeReservedInstancesOfferingsResult|any) => void): void;
      describeRouteTables(params: DescribeRouteTablesRequest, callback: (err: any, data: DescribeRouteTablesResult|any) => void): void;
      describeSecurityGroups(params: DescribeSecurityGroupsRequest, callback: (err: any, data: DescribeSecurityGroupsResult|any) => void): void;
      describeSnapshotAttribute(params: DescribeSnapshotAttributeRequest, callback: (err: any, data: DescribeSnapshotAttributeResult|any) => void): void;
      describeSnapshots(params: DescribeSnapshotsRequest, callback: (err: any, data: DescribeSnapshotsResult|any) => void): void;
      describeSpotDatafeedSubscription(params: DescribeSpotDatafeedSubscriptionRequest, callback: (err: any, data: DescribeSpotDatafeedSubscriptionResult|any) => void): void;
      describeSpotFleetInstances(params: DescribeSpotFleetInstancesRequest, callback: (err: any, data: DescribeSpotFleetInstancesResponse|any) => void): void;
      describeSpotFleetRequestHistory(params: DescribeSpotFleetRequestHistoryRequest, callback: (err: any, data: DescribeSpotFleetRequestHistoryResponse|any) => void): void;
      describeSpotFleetRequests(params: DescribeSpotFleetRequestsRequest, callback: (err: any, data: DescribeSpotFleetRequestsResponse|any) => void): void;
      describeSpotInstanceRequests(params: DescribeSpotInstanceRequestsRequest, callback: (err: any, data: DescribeSpotInstanceRequestsResult|any) => void): void;
      describeSpotPriceHistory(params: DescribeSpotPriceHistoryRequest, callback: (err: any, data: DescribeSpotPriceHistoryResult|any) => void): void;
      describeSubnets(params: DescribeSubnetsRequest, callback: (err: any, data: DescribeSubnetsResult|any) => void): void;
      describeTags(params: DescribeTagsRequest, callback: (err: any, data: DescribeTagsResult|any) => void): void;
      describeVolumeAttribute(params: DescribeVolumeAttributeRequest, callback: (err: any, data: DescribeVolumeAttributeResult|any) => void): void;
      describeVolumeStatus(params: DescribeVolumeStatusRequest, callback: (err: any, data: DescribeVolumeStatusResult|any) => void): void;
      describeVolumes(params: DescribeVolumesRequest, callback: (err: any, data: DescribeVolumesResult|any) => void): void;
      describeVpcAttribute(params: DescribeVpcAttributeRequest, callback: (err: any, data: DescribeVpcAttributeResult|any) => void): void;
      describeVpcClassicLink(params: DescribeVpcClassicLinkRequest, callback: (err: any, data: DescribeVpcClassicLinkResult|any) => void): void;
      describeVpcEndpointServices(params: DescribeVpcEndpointServicesRequest, callback: (err: any, data: DescribeVpcEndpointServicesResult|any) => void): void;
      describeVpcEndpoints(params: DescribeVpcEndpointsRequest, callback: (err: any, data: DescribeVpcEndpointsResult|any) => void): void;
      describeVpcPeeringConnections(params: DescribeVpcPeeringConnectionsRequest, callback: (err: any, data: DescribeVpcPeeringConnectionsResult|any) => void): void;
      describeVpcs(params: DescribeVpcsRequest, callback: (err: any, data: DescribeVpcsResult|any) => void): void;
      describeVpnConnections(params: DescribeVpnConnectionsRequest, callback: (err: any, data: DescribeVpnConnectionsResult|any) => void): void;
      describeVpnGateways(params: DescribeVpnGatewaysRequest, callback: (err: any, data: DescribeVpnGatewaysResult|any) => void): void;
      detachClassicLinkVpc(params: DetachClassicLinkVpcRequest, callback: (err: any, data: DetachClassicLinkVpcResult|any) => void): void;
      detachInternetGateway(params: DetachInternetGatewayRequest, callback: (err: any, data: any) => void): void;
      detachNetworkInterface(params: DetachNetworkInterfaceRequest, callback: (err: any, data: any) => void): void;
      detachVolume(params: DetachVolumeRequest, callback: (err: any, data: VolumeAttachment|any) => void): void;
      detachVpnGateway(params: DetachVpnGatewayRequest, callback: (err: any, data: any) => void): void;
      disableVgwRoutePropagation(params: DisableVgwRoutePropagationRequest, callback: (err: any, data: any) => void): void;
      disableVpcClassicLink(params: DisableVpcClassicLinkRequest, callback: (err: any, data: DisableVpcClassicLinkResult|any) => void): void;
      disassociateAddress(params: DisassociateAddressRequest, callback: (err: any, data: any) => void): void;
      disassociateRouteTable(params: DisassociateRouteTableRequest, callback: (err: any, data: any) => void): void;
      enableVgwRoutePropagation(params: EnableVgwRoutePropagationRequest, callback: (err: any, data: any) => void): void;
      enableVolumeIO(params: EnableVolumeIORequest, callback: (err: any, data: any) => void): void;
      enableVpcClassicLink(params: EnableVpcClassicLinkRequest, callback: (err: any, data: EnableVpcClassicLinkResult|any) => void): void;
      getConsoleOutput(params: GetConsoleOutputRequest, callback: (err: any, data: GetConsoleOutputResult|any) => void): void;
      getPasswordData(params: GetPasswordDataRequest, callback: (err: any, data: GetPasswordDataResult|any) => void): void;
      importImage(params: ImportImageRequest, callback: (err: any, data: ImportImageResult|any) => void): void;
      importInstance(params: ImportInstanceRequest, callback: (err: any, data: ImportInstanceResult|any) => void): void;
      importKeyPair(params: ImportKeyPairRequest, callback: (err: any, data: ImportKeyPairResult|any) => void): void;
      importSnapshot(params: ImportSnapshotRequest, callback: (err: any, data: ImportSnapshotResult|any) => void): void;
      importVolume(params: ImportVolumeRequest, callback: (err: any, data: ImportVolumeResult|any) => void): void;
      modifyImageAttribute(params: ModifyImageAttributeRequest, callback: (err: any, data: any) => void): void;
      modifyInstanceAttribute(params: ModifyInstanceAttributeRequest, callback: (err: any, data: any) => void): void;
      modifyNetworkInterfaceAttribute(params: ModifyNetworkInterfaceAttributeRequest, callback: (err: any, data: any) => void): void;
      modifyReservedInstances(params: ModifyReservedInstancesRequest, callback: (err: any, data: ModifyReservedInstancesResult|any) => void): void;
      modifySnapshotAttribute(params: ModifySnapshotAttributeRequest, callback: (err: any, data: any) => void): void;
      modifySubnetAttribute(params: ModifySubnetAttributeRequest, callback: (err: any, data: any) => void): void;
      modifyVolumeAttribute(params: ModifyVolumeAttributeRequest, callback: (err: any, data: any) => void): void;
      modifyVpcAttribute(params: ModifyVpcAttributeRequest, callback: (err: any, data: any) => void): void;
      modifyVpcEndpoint(params: ModifyVpcEndpointRequest, callback: (err: any, data: ModifyVpcEndpointResult|any) => void): void;
      monitorInstances(params: MonitorInstancesRequest, callback: (err: any, data: MonitorInstancesResult|any) => void): void;
      moveAddressToVpc(params: MoveAddressToVpcRequest, callback: (err: any, data: MoveAddressToVpcResult|any) => void): void;
      purchaseReservedInstancesOffering(params: PurchaseReservedInstancesOfferingRequest, callback: (err: any, data: PurchaseReservedInstancesOfferingResult|any) => void): void;
      rebootInstances(params: RebootInstancesRequest, callback: (err: any, data: any) => void): void;
      registerImage(params: RegisterImageRequest, callback: (err: any, data: RegisterImageResult|any) => void): void;
      rejectVpcPeeringConnection(params: RejectVpcPeeringConnectionRequest, callback: (err: any, data: RejectVpcPeeringConnectionResult|any) => void): void;
      releaseAddress(params: ReleaseAddressRequest, callback: (err: any, data: any) => void): void;
      replaceNetworkAclAssociation(params: ReplaceNetworkAclAssociationRequest, callback: (err: any, data: ReplaceNetworkAclAssociationResult|any) => void): void;
      replaceNetworkAclEntry(params: ReplaceNetworkAclEntryRequest, callback: (err: any, data: any) => void): void;
      replaceRoute(params: ReplaceRouteRequest, callback: (err: any, data: any) => void): void;
      replaceRouteTableAssociation(params: ReplaceRouteTableAssociationRequest, callback: (err: any, data: ReplaceRouteTableAssociationResult|any) => void): void;
      reportInstanceStatus(params: ReportInstanceStatusRequest, callback: (err: any, data: any) => void): void;
      requestSpotFleet(params: RequestSpotFleetRequest, callback: (err: any, data: RequestSpotFleetResponse|any) => void): void;
      requestSpotInstances(params: RequestSpotInstancesRequest, callback: (err: any, data: RequestSpotInstancesResult|any) => void): void;
      resetImageAttribute(params: ResetImageAttributeRequest, callback: (err: any, data: any) => void): void;
      resetInstanceAttribute(params: ResetInstanceAttributeRequest, callback: (err: any, data: any) => void): void;
      resetNetworkInterfaceAttribute(params: ResetNetworkInterfaceAttributeRequest, callback: (err: any, data: any) => void): void;
      resetSnapshotAttribute(params: ResetSnapshotAttributeRequest, callback: (err: any, data: any) => void): void;
      restoreAddressToClassic(params: RestoreAddressToClassicRequest, callback: (err: any, data: RestoreAddressToClassicResult|any) => void): void;
      revokeSecurityGroupEgress(params: RevokeSecurityGroupEgressRequest, callback: (err: any, data: any) => void): void;
      revokeSecurityGroupIngress(params: RevokeSecurityGroupIngressRequest, callback: (err: any, data: any) => void): void;
      runInstances(params: RunInstancesRequest, callback: (err: any, data: Reservation|any) => void): void;
      startInstances(params: StartInstancesRequest, callback: (err: any, data: StartInstancesResult|any) => void): void;
      stopInstances(params: StopInstancesRequest, callback: (err: any, data: StopInstancesResult|any) => void): void;
      terminateInstances(params: TerminateInstancesRequest, callback: (err: any, data: TerminateInstancesResult|any) => void): void;
      unassignPrivateIpAddresses(params: UnassignPrivateIpAddressesRequest, callback: (err: any, data: any) => void): void;
      unmonitorInstances(params: UnmonitorInstancesRequest, callback: (err: any, data: UnmonitorInstancesResult|any) => void): void;
    }

    export interface AcceptVpcPeeringConnectionRequest {
      DryRun?: Boolean;
      VpcPeeringConnectionId?: String;
    }


    export interface AcceptVpcPeeringConnectionResult {
      VpcPeeringConnection?: VpcPeeringConnection;
    }


    export interface AccountAttribute {
      AttributeName?: String;
      AttributeValues?: AccountAttributeValueList;
    }


    export type AccountAttributeList = Array<AccountAttribute>;

    export type AccountAttributeName = string;

    export type AccountAttributeNameStringList = Array<AccountAttributeName>;

    export interface AccountAttributeValue {
      AttributeValue?: String;
    }


    export type AccountAttributeValueList = Array<AccountAttributeValue>;

    export interface ActiveInstance {
      InstanceType?: String;
      InstanceId?: String;
      SpotInstanceRequestId?: String;
    }


    export type ActiveInstanceSet = Array<ActiveInstance>;

    export interface Address {
      InstanceId?: String;
      PublicIp?: String;
      AllocationId?: String;
      AssociationId?: String;
      Domain?: DomainType;
      NetworkInterfaceId?: String;
      NetworkInterfaceOwnerId?: String;
      PrivateIpAddress?: String;
    }


    export type AddressList = Array<Address>;

    export interface AllocateAddressRequest {
      DryRun?: Boolean;
      Domain?: DomainType;
    }


    export interface AllocateAddressResult {
      PublicIp?: String;
      Domain?: DomainType;
      AllocationId?: String;
    }


    export type AllocationIdList = Array<String>;

    export type ArchitectureValues = string;

    export interface AssignPrivateIpAddressesRequest {
      NetworkInterfaceId: String;
      PrivateIpAddresses?: PrivateIpAddressStringList;
      SecondaryPrivateIpAddressCount?: Integer;
      AllowReassignment?: Boolean;
    }


    export interface AssociateAddressRequest {
      DryRun?: Boolean;
      InstanceId?: String;
      PublicIp?: String;
      AllocationId?: String;
      NetworkInterfaceId?: String;
      PrivateIpAddress?: String;
      AllowReassociation?: Boolean;
    }


    export interface AssociateAddressResult {
      AssociationId?: String;
    }


    export interface AssociateDhcpOptionsRequest {
      DryRun?: Boolean;
      DhcpOptionsId: String;
      VpcId: String;
    }


    export interface AssociateRouteTableRequest {
      DryRun?: Boolean;
      SubnetId: String;
      RouteTableId: String;
    }


    export interface AssociateRouteTableResult {
      AssociationId?: String;
    }


    export interface AttachClassicLinkVpcRequest {
      DryRun?: Boolean;
      InstanceId: String;
      VpcId: String;
      Groups: GroupIdStringList;
    }


    export interface AttachClassicLinkVpcResult {
      Return?: Boolean;
    }


    export interface AttachInternetGatewayRequest {
      DryRun?: Boolean;
      InternetGatewayId: String;
      VpcId: String;
    }


    export interface AttachNetworkInterfaceRequest {
      DryRun?: Boolean;
      NetworkInterfaceId: String;
      InstanceId: String;
      DeviceIndex: Integer;
    }


    export interface AttachNetworkInterfaceResult {
      AttachmentId?: String;
    }


    export interface AttachVolumeRequest {
      DryRun?: Boolean;
      VolumeId: String;
      InstanceId: String;
      Device: String;
    }


    export interface AttachVpnGatewayRequest {
      DryRun?: Boolean;
      VpnGatewayId: String;
      VpcId: String;
    }


    export interface AttachVpnGatewayResult {
      VpcAttachment?: VpcAttachment;
    }


    export type AttachmentStatus = string;

    export interface AttributeBooleanValue {
      Value?: Boolean;
    }


    export interface AttributeValue {
      Value?: String;
    }


    export interface AuthorizeSecurityGroupEgressRequest {
      DryRun?: Boolean;
      GroupId: String;
      SourceSecurityGroupName?: String;
      SourceSecurityGroupOwnerId?: String;
      IpProtocol?: String;
      FromPort?: Integer;
      ToPort?: Integer;
      CidrIp?: String;
      IpPermissions?: IpPermissionList;
    }


    export interface AuthorizeSecurityGroupIngressRequest {
      DryRun?: Boolean;
      GroupName?: String;
      GroupId?: String;
      SourceSecurityGroupName?: String;
      SourceSecurityGroupOwnerId?: String;
      IpProtocol?: String;
      FromPort?: Integer;
      ToPort?: Integer;
      CidrIp?: String;
      IpPermissions?: IpPermissionList;
    }


    export interface AvailabilityZone {
      ZoneName?: String;
      State?: AvailabilityZoneState;
      RegionName?: String;
      Messages?: AvailabilityZoneMessageList;
    }


    export type AvailabilityZoneList = Array<AvailabilityZone>;

    export interface AvailabilityZoneMessage {
      Message?: String;
    }


    export type AvailabilityZoneMessageList = Array<AvailabilityZoneMessage>;

    export type AvailabilityZoneState = string;

    export type BatchState = string;

    export interface BlockDeviceMapping {
      VirtualName?: String;
      DeviceName?: String;
      Ebs?: EbsBlockDevice;
      NoDevice?: String;
    }


    export type BlockDeviceMappingList = Array<BlockDeviceMapping>;

    export type BlockDeviceMappingRequestList = Array<BlockDeviceMapping>;

    export type Boolean = boolean;

    export type BundleIdStringList = Array<String>;

    export interface BundleInstanceRequest {
      DryRun?: Boolean;
      InstanceId: String;
      Storage: Storage;
    }


    export interface BundleInstanceResult {
      BundleTask?: BundleTask;
    }


    export interface BundleTask {
      InstanceId?: String;
      BundleId?: String;
      State?: BundleTaskState;
      StartTime?: DateTime;
      UpdateTime?: DateTime;
      Storage?: Storage;
      Progress?: String;
      BundleTaskError?: BundleTaskError;
    }


    export interface BundleTaskError {
      Code?: String;
      Message?: String;
    }


    export type BundleTaskList = Array<BundleTask>;

    export type BundleTaskState = string;

    export type CancelBatchErrorCode = string;

    export interface CancelBundleTaskRequest {
      DryRun?: Boolean;
      BundleId: String;
    }


    export interface CancelBundleTaskResult {
      BundleTask?: BundleTask;
    }


    export interface CancelConversionRequest {
      DryRun?: Boolean;
      ConversionTaskId: String;
      ReasonMessage?: String;
    }


    export interface CancelExportTaskRequest {
      ExportTaskId: String;
    }


    export interface CancelImportTaskRequest {
      DryRun?: Boolean;
      ImportTaskId?: String;
      CancelReason?: String;
    }


    export interface CancelImportTaskResult {
      ImportTaskId?: String;
      State?: String;
      PreviousState?: String;
    }


    export interface CancelReservedInstancesListingRequest {
      ReservedInstancesListingId: String;
    }


    export interface CancelReservedInstancesListingResult {
      ReservedInstancesListings?: ReservedInstancesListingList;
    }


    export interface CancelSpotFleetRequestsError {
      Code: CancelBatchErrorCode;
      Message: String;
    }


    export interface CancelSpotFleetRequestsErrorItem {
      SpotFleetRequestId: String;
      Error: CancelSpotFleetRequestsError;
    }


    export type CancelSpotFleetRequestsErrorSet = Array<CancelSpotFleetRequestsErrorItem>;

    export interface CancelSpotFleetRequestsRequest {
      DryRun?: Boolean;
      SpotFleetRequestIds: ValueStringList;
      TerminateInstances: Boolean;
    }


    export interface CancelSpotFleetRequestsResponse {
      UnsuccessfulFleetRequests?: CancelSpotFleetRequestsErrorSet;
      SuccessfulFleetRequests?: CancelSpotFleetRequestsSuccessSet;
    }


    export interface CancelSpotFleetRequestsSuccessItem {
      SpotFleetRequestId: String;
      CurrentSpotFleetRequestState: BatchState;
      PreviousSpotFleetRequestState: BatchState;
    }


    export type CancelSpotFleetRequestsSuccessSet = Array<CancelSpotFleetRequestsSuccessItem>;

    export type CancelSpotInstanceRequestState = string;

    export interface CancelSpotInstanceRequestsRequest {
      DryRun?: Boolean;
      SpotInstanceRequestIds: SpotInstanceRequestIdList;
    }


    export interface CancelSpotInstanceRequestsResult {
      CancelledSpotInstanceRequests?: CancelledSpotInstanceRequestList;
    }


    export interface CancelledSpotInstanceRequest {
      SpotInstanceRequestId?: String;
      State?: CancelSpotInstanceRequestState;
    }


    export type CancelledSpotInstanceRequestList = Array<CancelledSpotInstanceRequest>;

    export interface ClassicLinkInstance {
      InstanceId?: String;
      VpcId?: String;
      Groups?: GroupIdentifierList;
      Tags?: TagList;
    }


    export type ClassicLinkInstanceList = Array<ClassicLinkInstance>;

    export interface ClientData {
      UploadStart?: DateTime;
      UploadEnd?: DateTime;
      UploadSize?: Double;
      Comment?: String;
    }


    export interface ConfirmProductInstanceRequest {
      DryRun?: Boolean;
      ProductCode: String;
      InstanceId: String;
    }


    export interface ConfirmProductInstanceResult {
      OwnerId?: String;
    }


    export type ContainerFormat = string;

    export type ConversionIdStringList = Array<String>;

    export interface ConversionTask {
      ConversionTaskId: String;
      ExpirationTime?: String;
      ImportInstance?: ImportInstanceTaskDetails;
      ImportVolume?: ImportVolumeTaskDetails;
      State: ConversionTaskState;
      StatusMessage?: String;
      Tags?: TagList;
    }


    export type ConversionTaskState = string;

    export interface CopyImageRequest {
      DryRun?: Boolean;
      SourceRegion: String;
      SourceImageId: String;
      Name: String;
      Description?: String;
      ClientToken?: String;
    }


    export interface CopyImageResult {
      ImageId?: String;
    }


    export interface CopySnapshotRequest {
      DryRun?: Boolean;
      SourceRegion: String;
      SourceSnapshotId: String;
      Description?: String;
      DestinationRegion?: String;
      PresignedUrl?: String;
    }


    export interface CopySnapshotResult {
      SnapshotId?: String;
    }


    export interface CreateCustomerGatewayRequest {
      DryRun?: Boolean;
      Type: GatewayType;
      PublicIp: String;
      BgpAsn: Integer;
    }


    export interface CreateCustomerGatewayResult {
      CustomerGateway?: CustomerGateway;
    }


    export interface CreateDhcpOptionsRequest {
      DryRun?: Boolean;
      DhcpConfigurations: NewDhcpConfigurationList;
    }


    export interface CreateDhcpOptionsResult {
      DhcpOptions?: DhcpOptions;
    }


    export interface CreateImageRequest {
      DryRun?: Boolean;
      InstanceId: String;
      Name: String;
      Description?: String;
      NoReboot?: Boolean;
      BlockDeviceMappings?: BlockDeviceMappingRequestList;
    }


    export interface CreateImageResult {
      ImageId?: String;
    }


    export interface CreateInstanceExportTaskRequest {
      Description?: String;
      InstanceId: String;
      TargetEnvironment?: ExportEnvironment;
      ExportToS3Task?: ExportToS3TaskSpecification;
    }


    export interface CreateInstanceExportTaskResult {
      ExportTask?: ExportTask;
    }


    export interface CreateInternetGatewayRequest {
      DryRun?: Boolean;
    }


    export interface CreateInternetGatewayResult {
      InternetGateway?: InternetGateway;
    }


    export interface CreateKeyPairRequest {
      DryRun?: Boolean;
      KeyName: String;
    }


    export interface CreateNetworkAclEntryRequest {
      DryRun?: Boolean;
      NetworkAclId: String;
      RuleNumber: Integer;
      Protocol: String;
      RuleAction: RuleAction;
      Egress: Boolean;
      CidrBlock: String;
      IcmpTypeCode?: IcmpTypeCode;
      PortRange?: PortRange;
    }


    export interface CreateNetworkAclRequest {
      DryRun?: Boolean;
      VpcId: String;
    }


    export interface CreateNetworkAclResult {
      NetworkAcl?: NetworkAcl;
    }


    export interface CreateNetworkInterfaceRequest {
      SubnetId: String;
      Description?: String;
      PrivateIpAddress?: String;
      Groups?: SecurityGroupIdStringList;
      PrivateIpAddresses?: PrivateIpAddressSpecificationList;
      SecondaryPrivateIpAddressCount?: Integer;
      DryRun?: Boolean;
    }


    export interface CreateNetworkInterfaceResult {
      NetworkInterface?: NetworkInterface;
    }


    export interface CreatePlacementGroupRequest {
      DryRun?: Boolean;
      GroupName: String;
      Strategy: PlacementStrategy;
    }


    export interface CreateReservedInstancesListingRequest {
      ReservedInstancesId: String;
      InstanceCount: Integer;
      PriceSchedules: PriceScheduleSpecificationList;
      ClientToken: String;
    }


    export interface CreateReservedInstancesListingResult {
      ReservedInstancesListings?: ReservedInstancesListingList;
    }


    export interface CreateRouteRequest {
      DryRun?: Boolean;
      RouteTableId: String;
      DestinationCidrBlock: String;
      GatewayId?: String;
      InstanceId?: String;
      NetworkInterfaceId?: String;
      VpcPeeringConnectionId?: String;
      ClientToken?: String;
    }


    export interface CreateRouteResult {
      Return?: Boolean;
      ClientToken?: String;
    }


    export interface CreateRouteTableRequest {
      DryRun?: Boolean;
      VpcId: String;
    }


    export interface CreateRouteTableResult {
      RouteTable?: RouteTable;
    }


    export interface CreateSecurityGroupRequest {
      DryRun?: Boolean;
      GroupName: String;
      Description: String;
      VpcId?: String;
    }


    export interface CreateSecurityGroupResult {
      GroupId?: String;
    }


    export interface CreateSnapshotRequest {
      DryRun?: Boolean;
      VolumeId: String;
      Description?: String;
    }


    export interface CreateSpotDatafeedSubscriptionRequest {
      DryRun?: Boolean;
      Bucket: String;
      Prefix?: String;
    }


    export interface CreateSpotDatafeedSubscriptionResult {
      SpotDatafeedSubscription?: SpotDatafeedSubscription;
    }


    export interface CreateSubnetRequest {
      DryRun?: Boolean;
      VpcId: String;
      CidrBlock: String;
      AvailabilityZone?: String;
    }


    export interface CreateSubnetResult {
      Subnet?: Subnet;
    }


    export interface CreateTagsRequest {
      DryRun?: Boolean;
      Resources: ResourceIdList;
      Tags: TagList;
    }


    export interface CreateVolumePermission {
      UserId?: String;
      Group?: PermissionGroup;
    }


    export type CreateVolumePermissionList = Array<CreateVolumePermission>;

    export interface CreateVolumePermissionModifications {
      Add?: CreateVolumePermissionList;
      Remove?: CreateVolumePermissionList;
    }


    export interface CreateVolumeRequest {
      DryRun?: Boolean;
      Size?: Integer;
      SnapshotId?: String;
      AvailabilityZone: String;
      VolumeType?: VolumeType;
      Iops?: Integer;
      Encrypted?: Boolean;
      KmsKeyId?: String;
    }


    export interface CreateVpcEndpointRequest {
      DryRun?: Boolean;
      VpcId: String;
      ServiceName: String;
      PolicyDocument?: String;
      RouteTableIds?: ValueStringList;
      ClientToken?: String;
    }


    export interface CreateVpcEndpointResult {
      VpcEndpoint?: VpcEndpoint;
      ClientToken?: String;
    }


    export interface CreateVpcPeeringConnectionRequest {
      DryRun?: Boolean;
      VpcId?: String;
      PeerVpcId?: String;
      PeerOwnerId?: String;
    }


    export interface CreateVpcPeeringConnectionResult {
      VpcPeeringConnection?: VpcPeeringConnection;
    }


    export interface CreateVpcRequest {
      DryRun?: Boolean;
      CidrBlock: String;
      InstanceTenancy?: Tenancy;
    }


    export interface CreateVpcResult {
      Vpc?: Vpc;
    }


    export interface CreateVpnConnectionRequest {
      DryRun?: Boolean;
      Type: String;
      CustomerGatewayId: String;
      VpnGatewayId: String;
      Options?: VpnConnectionOptionsSpecification;
    }


    export interface CreateVpnConnectionResult {
      VpnConnection?: VpnConnection;
    }


    export interface CreateVpnConnectionRouteRequest {
      VpnConnectionId: String;
      DestinationCidrBlock: String;
    }


    export interface CreateVpnGatewayRequest {
      DryRun?: Boolean;
      Type: GatewayType;
      AvailabilityZone?: String;
    }


    export interface CreateVpnGatewayResult {
      VpnGateway?: VpnGateway;
    }


    export type CurrencyCodeValues = string;

    export interface CustomerGateway {
      CustomerGatewayId?: String;
      State?: String;
      Type?: String;
      IpAddress?: String;
      BgpAsn?: String;
      Tags?: TagList;
    }


    export type CustomerGatewayIdStringList = Array<String>;

    export type CustomerGatewayList = Array<CustomerGateway>;

    export type DatafeedSubscriptionState = string;

    export type DateTime = number;

    export interface DeleteCustomerGatewayRequest {
      DryRun?: Boolean;
      CustomerGatewayId: String;
    }


    export interface DeleteDhcpOptionsRequest {
      DryRun?: Boolean;
      DhcpOptionsId: String;
    }


    export interface DeleteInternetGatewayRequest {
      DryRun?: Boolean;
      InternetGatewayId: String;
    }


    export interface DeleteKeyPairRequest {
      DryRun?: Boolean;
      KeyName: String;
    }


    export interface DeleteNetworkAclEntryRequest {
      DryRun?: Boolean;
      NetworkAclId: String;
      RuleNumber: Integer;
      Egress: Boolean;
    }


    export interface DeleteNetworkAclRequest {
      DryRun?: Boolean;
      NetworkAclId: String;
    }


    export interface DeleteNetworkInterfaceRequest {
      DryRun?: Boolean;
      NetworkInterfaceId: String;
    }


    export interface DeletePlacementGroupRequest {
      DryRun?: Boolean;
      GroupName: String;
    }


    export interface DeleteRouteRequest {
      DryRun?: Boolean;
      RouteTableId: String;
      DestinationCidrBlock: String;
    }


    export interface DeleteRouteTableRequest {
      DryRun?: Boolean;
      RouteTableId: String;
    }


    export interface DeleteSecurityGroupRequest {
      DryRun?: Boolean;
      GroupName?: String;
      GroupId?: String;
    }


    export interface DeleteSnapshotRequest {
      DryRun?: Boolean;
      SnapshotId: String;
    }


    export interface DeleteSpotDatafeedSubscriptionRequest {
      DryRun?: Boolean;
    }


    export interface DeleteSubnetRequest {
      DryRun?: Boolean;
      SubnetId: String;
    }


    export interface DeleteTagsRequest {
      DryRun?: Boolean;
      Resources: ResourceIdList;
      Tags?: TagList;
    }


    export interface DeleteVolumeRequest {
      DryRun?: Boolean;
      VolumeId: String;
    }


    export interface DeleteVpcEndpointsRequest {
      DryRun?: Boolean;
      VpcEndpointIds: ValueStringList;
    }


    export interface DeleteVpcEndpointsResult {
      Unsuccessful?: UnsuccessfulItemSet;
    }


    export interface DeleteVpcPeeringConnectionRequest {
      DryRun?: Boolean;
      VpcPeeringConnectionId: String;
    }


    export interface DeleteVpcPeeringConnectionResult {
      Return?: Boolean;
    }


    export interface DeleteVpcRequest {
      DryRun?: Boolean;
      VpcId: String;
    }


    export interface DeleteVpnConnectionRequest {
      DryRun?: Boolean;
      VpnConnectionId: String;
    }


    export interface DeleteVpnConnectionRouteRequest {
      VpnConnectionId: String;
      DestinationCidrBlock: String;
    }


    export interface DeleteVpnGatewayRequest {
      DryRun?: Boolean;
      VpnGatewayId: String;
    }


    export interface DeregisterImageRequest {
      DryRun?: Boolean;
      ImageId: String;
    }


    export interface DescribeAccountAttributesRequest {
      DryRun?: Boolean;
      AttributeNames?: AccountAttributeNameStringList;
    }


    export interface DescribeAccountAttributesResult {
      AccountAttributes?: AccountAttributeList;
    }


    export interface DescribeAddressesRequest {
      DryRun?: Boolean;
      PublicIps?: PublicIpStringList;
      Filters?: FilterList;
      AllocationIds?: AllocationIdList;
    }


    export interface DescribeAddressesResult {
      Addresses?: AddressList;
    }


    export interface DescribeAvailabilityZonesRequest {
      DryRun?: Boolean;
      ZoneNames?: ZoneNameStringList;
      Filters?: FilterList;
    }


    export interface DescribeAvailabilityZonesResult {
      AvailabilityZones?: AvailabilityZoneList;
    }


    export interface DescribeBundleTasksRequest {
      DryRun?: Boolean;
      BundleIds?: BundleIdStringList;
      Filters?: FilterList;
    }


    export interface DescribeBundleTasksResult {
      BundleTasks?: BundleTaskList;
    }


    export interface DescribeClassicLinkInstancesRequest {
      DryRun?: Boolean;
      InstanceIds?: InstanceIdStringList;
      Filters?: FilterList;
      NextToken?: String;
      MaxResults?: Integer;
    }


    export interface DescribeClassicLinkInstancesResult {
      Instances?: ClassicLinkInstanceList;
      NextToken?: String;
    }


    export type DescribeConversionTaskList = Array<ConversionTask>;

    export interface DescribeConversionTasksRequest {
      DryRun?: Boolean;
      Filters?: FilterList;
      ConversionTaskIds?: ConversionIdStringList;
    }


    export interface DescribeConversionTasksResult {
      ConversionTasks?: DescribeConversionTaskList;
    }


    export interface DescribeCustomerGatewaysRequest {
      DryRun?: Boolean;
      CustomerGatewayIds?: CustomerGatewayIdStringList;
      Filters?: FilterList;
    }


    export interface DescribeCustomerGatewaysResult {
      CustomerGateways?: CustomerGatewayList;
    }


    export interface DescribeDhcpOptionsRequest {
      DryRun?: Boolean;
      DhcpOptionsIds?: DhcpOptionsIdStringList;
      Filters?: FilterList;
    }


    export interface DescribeDhcpOptionsResult {
      DhcpOptions?: DhcpOptionsList;
    }


    export interface DescribeExportTasksRequest {
      ExportTaskIds?: ExportTaskIdStringList;
    }


    export interface DescribeExportTasksResult {
      ExportTasks?: ExportTaskList;
    }


    export interface DescribeImageAttributeRequest {
      DryRun?: Boolean;
      ImageId: String;
      Attribute: ImageAttributeName;
    }


    export interface DescribeImagesRequest {
      DryRun?: Boolean;
      ImageIds?: ImageIdStringList;
      Owners?: OwnerStringList;
      ExecutableUsers?: ExecutableByStringList;
      Filters?: FilterList;
    }


    export interface DescribeImagesResult {
      Images?: ImageList;
    }


    export interface DescribeImportImageTasksRequest {
      DryRun?: Boolean;
      ImportTaskIds?: ImportTaskIdList;
      NextToken?: String;
      MaxResults?: Integer;
      Filters?: FilterList;
    }


    export interface DescribeImportImageTasksResult {
      ImportImageTasks?: ImportImageTaskList;
      NextToken?: String;
    }


    export interface DescribeImportSnapshotTasksRequest {
      DryRun?: Boolean;
      ImportTaskIds?: ImportTaskIdList;
      NextToken?: String;
      MaxResults?: Integer;
      Filters?: FilterList;
    }


    export interface DescribeImportSnapshotTasksResult {
      ImportSnapshotTasks?: ImportSnapshotTaskList;
      NextToken?: String;
    }


    export interface DescribeInstanceAttributeRequest {
      DryRun?: Boolean;
      InstanceId: String;
      Attribute: InstanceAttributeName;
    }


    export interface DescribeInstanceStatusRequest {
      DryRun?: Boolean;
      InstanceIds?: InstanceIdStringList;
      Filters?: FilterList;
      NextToken?: String;
      MaxResults?: Integer;
      IncludeAllInstances?: Boolean;
    }


    export interface DescribeInstanceStatusResult {
      InstanceStatuses?: InstanceStatusList;
      NextToken?: String;
    }


    export interface DescribeInstancesRequest {
      DryRun?: Boolean;
      InstanceIds?: InstanceIdStringList;
      Filters?: FilterList;
      NextToken?: String;
      MaxResults?: Integer;
    }


    export interface DescribeInstancesResult {
      Reservations?: ReservationList;
      NextToken?: String;
    }


    export interface DescribeInternetGatewaysRequest {
      DryRun?: Boolean;
      InternetGatewayIds?: ValueStringList;
      Filters?: FilterList;
    }


    export interface DescribeInternetGatewaysResult {
      InternetGateways?: InternetGatewayList;
    }


    export interface DescribeKeyPairsRequest {
      DryRun?: Boolean;
      KeyNames?: KeyNameStringList;
      Filters?: FilterList;
    }


    export interface DescribeKeyPairsResult {
      KeyPairs?: KeyPairList;
    }


    export interface DescribeMovingAddressesRequest {
      DryRun?: Boolean;
      PublicIps?: ValueStringList;
      NextToken?: String;
      Filters?: FilterList;
      MaxResults?: Integer;
    }


    export interface DescribeMovingAddressesResult {
      MovingAddressStatuses?: MovingAddressStatusSet;
      NextToken?: String;
    }


    export interface DescribeNetworkAclsRequest {
      DryRun?: Boolean;
      NetworkAclIds?: ValueStringList;
      Filters?: FilterList;
    }


    export interface DescribeNetworkAclsResult {
      NetworkAcls?: NetworkAclList;
    }


    export interface DescribeNetworkInterfaceAttributeRequest {
      DryRun?: Boolean;
      NetworkInterfaceId: String;
      Attribute?: NetworkInterfaceAttribute;
    }


    export interface DescribeNetworkInterfaceAttributeResult {
      NetworkInterfaceId?: String;
      Description?: AttributeValue;
      SourceDestCheck?: AttributeBooleanValue;
      Groups?: GroupIdentifierList;
      Attachment?: NetworkInterfaceAttachment;
    }


    export interface DescribeNetworkInterfacesRequest {
      DryRun?: Boolean;
      NetworkInterfaceIds?: NetworkInterfaceIdList;
      Filters?: FilterList;
    }


    export interface DescribeNetworkInterfacesResult {
      NetworkInterfaces?: NetworkInterfaceList;
    }


    export interface DescribePlacementGroupsRequest {
      DryRun?: Boolean;
      GroupNames?: PlacementGroupStringList;
      Filters?: FilterList;
    }


    export interface DescribePlacementGroupsResult {
      PlacementGroups?: PlacementGroupList;
    }


    export interface DescribePrefixListsRequest {
      DryRun?: Boolean;
      PrefixListIds?: ValueStringList;
      Filters?: FilterList;
      MaxResults?: Integer;
      NextToken?: String;
    }


    export interface DescribePrefixListsResult {
      PrefixLists?: PrefixListSet;
      NextToken?: String;
    }


    export interface DescribeRegionsRequest {
      DryRun?: Boolean;
      RegionNames?: RegionNameStringList;
      Filters?: FilterList;
    }


    export interface DescribeRegionsResult {
      Regions?: RegionList;
    }


    export interface DescribeReservedInstancesListingsRequest {
      ReservedInstancesId?: String;
      ReservedInstancesListingId?: String;
      Filters?: FilterList;
    }


    export interface DescribeReservedInstancesListingsResult {
      ReservedInstancesListings?: ReservedInstancesListingList;
    }


    export interface DescribeReservedInstancesModificationsRequest {
      ReservedInstancesModificationIds?: ReservedInstancesModificationIdStringList;
      NextToken?: String;
      Filters?: FilterList;
    }


    export interface DescribeReservedInstancesModificationsResult {
      ReservedInstancesModifications?: ReservedInstancesModificationList;
      NextToken?: String;
    }


    export interface DescribeReservedInstancesOfferingsRequest {
      DryRun?: Boolean;
      ReservedInstancesOfferingIds?: ReservedInstancesOfferingIdStringList;
      InstanceType?: InstanceType;
      AvailabilityZone?: String;
      ProductDescription?: RIProductDescription;
      Filters?: FilterList;
      InstanceTenancy?: Tenancy;
      OfferingType?: OfferingTypeValues;
      NextToken?: String;
      MaxResults?: Integer;
      IncludeMarketplace?: Boolean;
      MinDuration?: Long;
      MaxDuration?: Long;
      MaxInstanceCount?: Integer;
    }


    export interface DescribeReservedInstancesOfferingsResult {
      ReservedInstancesOfferings?: ReservedInstancesOfferingList;
      NextToken?: String;
    }


    export interface DescribeReservedInstancesRequest {
      DryRun?: Boolean;
      ReservedInstancesIds?: ReservedInstancesIdStringList;
      Filters?: FilterList;
      OfferingType?: OfferingTypeValues;
    }


    export interface DescribeReservedInstancesResult {
      ReservedInstances?: ReservedInstancesList;
    }


    export interface DescribeRouteTablesRequest {
      DryRun?: Boolean;
      RouteTableIds?: ValueStringList;
      Filters?: FilterList;
    }


    export interface DescribeRouteTablesResult {
      RouteTables?: RouteTableList;
    }


    export interface DescribeSecurityGroupsRequest {
      DryRun?: Boolean;
      GroupNames?: GroupNameStringList;
      GroupIds?: GroupIdStringList;
      Filters?: FilterList;
    }


    export interface DescribeSecurityGroupsResult {
      SecurityGroups?: SecurityGroupList;
    }


    export interface DescribeSnapshotAttributeRequest {
      DryRun?: Boolean;
      SnapshotId: String;
      Attribute: SnapshotAttributeName;
    }


    export interface DescribeSnapshotAttributeResult {
      SnapshotId?: String;
      CreateVolumePermissions?: CreateVolumePermissionList;
      ProductCodes?: ProductCodeList;
    }


    export interface DescribeSnapshotsRequest {
      DryRun?: Boolean;
      SnapshotIds?: SnapshotIdStringList;
      OwnerIds?: OwnerStringList;
      RestorableByUserIds?: RestorableByStringList;
      Filters?: FilterList;
      NextToken?: String;
      MaxResults?: Integer;
    }


    export interface DescribeSnapshotsResult {
      Snapshots?: SnapshotList;
      NextToken?: String;
    }


    export interface DescribeSpotDatafeedSubscriptionRequest {
      DryRun?: Boolean;
    }


    export interface DescribeSpotDatafeedSubscriptionResult {
      SpotDatafeedSubscription?: SpotDatafeedSubscription;
    }


    export interface DescribeSpotFleetInstancesRequest {
      DryRun?: Boolean;
      SpotFleetRequestId: String;
      NextToken?: String;
      MaxResults?: Integer;
    }


    export interface DescribeSpotFleetInstancesResponse {
      SpotFleetRequestId: String;
      ActiveInstances: ActiveInstanceSet;
      NextToken?: String;
    }


    export interface DescribeSpotFleetRequestHistoryRequest {
      DryRun?: Boolean;
      SpotFleetRequestId: String;
      EventType?: EventType;
      StartTime: DateTime;
      NextToken?: String;
      MaxResults?: Integer;
    }


    export interface DescribeSpotFleetRequestHistoryResponse {
      SpotFleetRequestId: String;
      StartTime: DateTime;
      LastEvaluatedTime: DateTime;
      HistoryRecords: HistoryRecords;
      NextToken?: String;
    }


    export interface DescribeSpotFleetRequestsRequest {
      DryRun?: Boolean;
      SpotFleetRequestIds?: ValueStringList;
      NextToken?: String;
      MaxResults?: Integer;
    }


    export interface DescribeSpotFleetRequestsResponse {
      SpotFleetRequestConfigs: SpotFleetRequestConfigSet;
      NextToken?: String;
    }


    export interface DescribeSpotInstanceRequestsRequest {
      DryRun?: Boolean;
      SpotInstanceRequestIds?: SpotInstanceRequestIdList;
      Filters?: FilterList;
    }


    export interface DescribeSpotInstanceRequestsResult {
      SpotInstanceRequests?: SpotInstanceRequestList;
    }


    export interface DescribeSpotPriceHistoryRequest {
      DryRun?: Boolean;
      StartTime?: DateTime;
      EndTime?: DateTime;
      InstanceTypes?: InstanceTypeList;
      ProductDescriptions?: ProductDescriptionList;
      Filters?: FilterList;
      AvailabilityZone?: String;
      MaxResults?: Integer;
      NextToken?: String;
    }


    export interface DescribeSpotPriceHistoryResult {
      SpotPriceHistory?: SpotPriceHistoryList;
      NextToken?: String;
    }


    export interface DescribeSubnetsRequest {
      DryRun?: Boolean;
      SubnetIds?: SubnetIdStringList;
      Filters?: FilterList;
    }


    export interface DescribeSubnetsResult {
      Subnets?: SubnetList;
    }


    export interface DescribeTagsRequest {
      DryRun?: Boolean;
      Filters?: FilterList;
      MaxResults?: Integer;
      NextToken?: String;
    }


    export interface DescribeTagsResult {
      Tags?: TagDescriptionList;
      NextToken?: String;
    }


    export interface DescribeVolumeAttributeRequest {
      DryRun?: Boolean;
      VolumeId: String;
      Attribute?: VolumeAttributeName;
    }


    export interface DescribeVolumeAttributeResult {
      VolumeId?: String;
      AutoEnableIO?: AttributeBooleanValue;
      ProductCodes?: ProductCodeList;
    }


    export interface DescribeVolumeStatusRequest {
      DryRun?: Boolean;
      VolumeIds?: VolumeIdStringList;
      Filters?: FilterList;
      NextToken?: String;
      MaxResults?: Integer;
    }


    export interface DescribeVolumeStatusResult {
      VolumeStatuses?: VolumeStatusList;
      NextToken?: String;
    }


    export interface DescribeVolumesRequest {
      DryRun?: Boolean;
      VolumeIds?: VolumeIdStringList;
      Filters?: FilterList;
      NextToken?: String;
      MaxResults?: Integer;
    }


    export interface DescribeVolumesResult {
      Volumes?: VolumeList;
      NextToken?: String;
    }


    export interface DescribeVpcAttributeRequest {
      DryRun?: Boolean;
      VpcId: String;
      Attribute?: VpcAttributeName;
    }


    export interface DescribeVpcAttributeResult {
      VpcId?: String;
      EnableDnsSupport?: AttributeBooleanValue;
      EnableDnsHostnames?: AttributeBooleanValue;
    }


    export interface DescribeVpcClassicLinkRequest {
      DryRun?: Boolean;
      VpcIds?: VpcClassicLinkIdList;
      Filters?: FilterList;
    }


    export interface DescribeVpcClassicLinkResult {
      Vpcs?: VpcClassicLinkList;
    }


    export interface DescribeVpcEndpointServicesRequest {
      DryRun?: Boolean;
      MaxResults?: Integer;
      NextToken?: String;
    }


    export interface DescribeVpcEndpointServicesResult {
      ServiceNames?: ValueStringList;
      NextToken?: String;
    }


    export interface DescribeVpcEndpointsRequest {
      DryRun?: Boolean;
      VpcEndpointIds?: ValueStringList;
      Filters?: FilterList;
      MaxResults?: Integer;
      NextToken?: String;
    }


    export interface DescribeVpcEndpointsResult {
      VpcEndpoints?: VpcEndpointSet;
      NextToken?: String;
    }


    export interface DescribeVpcPeeringConnectionsRequest {
      DryRun?: Boolean;
      VpcPeeringConnectionIds?: ValueStringList;
      Filters?: FilterList;
    }


    export interface DescribeVpcPeeringConnectionsResult {
      VpcPeeringConnections?: VpcPeeringConnectionList;
    }


    export interface DescribeVpcsRequest {
      DryRun?: Boolean;
      VpcIds?: VpcIdStringList;
      Filters?: FilterList;
    }


    export interface DescribeVpcsResult {
      Vpcs?: VpcList;
    }


    export interface DescribeVpnConnectionsRequest {
      DryRun?: Boolean;
      VpnConnectionIds?: VpnConnectionIdStringList;
      Filters?: FilterList;
    }


    export interface DescribeVpnConnectionsResult {
      VpnConnections?: VpnConnectionList;
    }


    export interface DescribeVpnGatewaysRequest {
      DryRun?: Boolean;
      VpnGatewayIds?: VpnGatewayIdStringList;
      Filters?: FilterList;
    }


    export interface DescribeVpnGatewaysResult {
      VpnGateways?: VpnGatewayList;
    }


    export interface DetachClassicLinkVpcRequest {
      DryRun?: Boolean;
      InstanceId: String;
      VpcId: String;
    }


    export interface DetachClassicLinkVpcResult {
      Return?: Boolean;
    }


    export interface DetachInternetGatewayRequest {
      DryRun?: Boolean;
      InternetGatewayId: String;
      VpcId: String;
    }


    export interface DetachNetworkInterfaceRequest {
      DryRun?: Boolean;
      AttachmentId: String;
      Force?: Boolean;
    }


    export interface DetachVolumeRequest {
      DryRun?: Boolean;
      VolumeId: String;
      InstanceId?: String;
      Device?: String;
      Force?: Boolean;
    }


    export interface DetachVpnGatewayRequest {
      DryRun?: Boolean;
      VpnGatewayId: String;
      VpcId: String;
    }


    export type DeviceType = string;

    export interface DhcpConfiguration {
      Key?: String;
      Values?: DhcpConfigurationValueList;
    }


    export type DhcpConfigurationList = Array<DhcpConfiguration>;

    export interface DhcpOptions {
      DhcpOptionsId?: String;
      DhcpConfigurations?: DhcpConfigurationList;
      Tags?: TagList;
    }


    export type DhcpOptionsIdStringList = Array<String>;

    export type DhcpOptionsList = Array<DhcpOptions>;

    export interface DisableVgwRoutePropagationRequest {
      RouteTableId: String;
      GatewayId: String;
    }


    export interface DisableVpcClassicLinkRequest {
      DryRun?: Boolean;
      VpcId: String;
    }


    export interface DisableVpcClassicLinkResult {
      Return?: Boolean;
    }


    export interface DisassociateAddressRequest {
      DryRun?: Boolean;
      PublicIp?: String;
      AssociationId?: String;
    }


    export interface DisassociateRouteTableRequest {
      DryRun?: Boolean;
      AssociationId: String;
    }


    export interface DiskImage {
      Image?: DiskImageDetail;
      Description?: String;
      Volume?: VolumeDetail;
    }


    export interface DiskImageDescription {
      Format: DiskImageFormat;
      Size: Long;
      ImportManifestUrl: String;
      Checksum?: String;
    }


    export interface DiskImageDetail {
      Format: DiskImageFormat;
      Bytes: Long;
      ImportManifestUrl: String;
    }


    export type DiskImageFormat = string;

    export type DiskImageList = Array<DiskImage>;

    export interface DiskImageVolumeDescription {
      Size?: Long;
      Id: String;
    }


    export type DomainType = string;

    export type Double = number;

    export interface EbsBlockDevice {
      SnapshotId?: String;
      VolumeSize?: Integer;
      DeleteOnTermination?: Boolean;
      VolumeType?: VolumeType;
      Iops?: Integer;
      Encrypted?: Boolean;
    }


    export interface EbsInstanceBlockDevice {
      VolumeId?: String;
      Status?: AttachmentStatus;
      AttachTime?: DateTime;
      DeleteOnTermination?: Boolean;
    }


    export interface EbsInstanceBlockDeviceSpecification {
      VolumeId?: String;
      DeleteOnTermination?: Boolean;
    }


    export interface EnableVgwRoutePropagationRequest {
      RouteTableId: String;
      GatewayId: String;
    }


    export interface EnableVolumeIORequest {
      DryRun?: Boolean;
      VolumeId: String;
    }


    export interface EnableVpcClassicLinkRequest {
      DryRun?: Boolean;
      VpcId: String;
    }


    export interface EnableVpcClassicLinkResult {
      Return?: Boolean;
    }


    export type EventCode = string;

    export interface EventInformation {
      InstanceId?: String;
      EventSubType?: String;
      EventDescription?: String;
    }


    export type EventType = string;

    export type ExecutableByStringList = Array<String>;

    export type ExportEnvironment = string;

    export interface ExportTask {
      ExportTaskId?: String;
      Description?: String;
      State?: ExportTaskState;
      StatusMessage?: String;
      InstanceExportDetails?: InstanceExportDetails;
      ExportToS3Task?: ExportToS3Task;
    }


    export type ExportTaskIdStringList = Array<String>;

    export type ExportTaskList = Array<ExportTask>;

    export type ExportTaskState = string;

    export interface ExportToS3Task {
      DiskImageFormat?: DiskImageFormat;
      ContainerFormat?: ContainerFormat;
      S3Bucket?: String;
      S3Key?: String;
    }


    export interface ExportToS3TaskSpecification {
      DiskImageFormat?: DiskImageFormat;
      ContainerFormat?: ContainerFormat;
      S3Bucket?: String;
      S3Prefix?: String;
    }


    export interface Filter {
      Name?: String;
      Values?: ValueStringList;
    }


    export type FilterList = Array<Filter>;

    export type Float = number;

    export type GatewayType = string;

    export interface GetConsoleOutputRequest {
      DryRun?: Boolean;
      InstanceId: String;
    }


    export interface GetConsoleOutputResult {
      InstanceId?: String;
      Timestamp?: DateTime;
      Output?: String;
    }


    export interface GetPasswordDataRequest {
      DryRun?: Boolean;
      InstanceId: String;
    }


    export interface GetPasswordDataResult {
      InstanceId?: String;
      Timestamp?: DateTime;
      PasswordData?: String;
    }


    export type GroupIdStringList = Array<String>;

    export interface GroupIdentifier {
      GroupName?: String;
      GroupId?: String;
    }


    export type GroupIdentifierList = Array<GroupIdentifier>;

    export type GroupNameStringList = Array<String>;

    export interface HistoryRecord {
      Timestamp: DateTime;
      EventType: EventType;
      EventInformation: EventInformation;
    }


    export type HistoryRecords = Array<HistoryRecord>;

    export type HypervisorType = string;

    export interface IamInstanceProfile {
      Arn?: String;
      Id?: String;
    }


    export interface IamInstanceProfileSpecification {
      Arn?: String;
      Name?: String;
    }


    export interface IcmpTypeCode {
      Type?: Integer;
      Code?: Integer;
    }


    export interface Image {
      ImageId?: String;
      ImageLocation?: String;
      State?: ImageState;
      OwnerId?: String;
      CreationDate?: String;
      Public?: Boolean;
      ProductCodes?: ProductCodeList;
      Architecture?: ArchitectureValues;
      ImageType?: ImageTypeValues;
      KernelId?: String;
      RamdiskId?: String;
      Platform?: PlatformValues;
      SriovNetSupport?: String;
      StateReason?: StateReason;
      ImageOwnerAlias?: String;
      Name?: String;
      Description?: String;
      RootDeviceType?: DeviceType;
      RootDeviceName?: String;
      BlockDeviceMappings?: BlockDeviceMappingList;
      VirtualizationType?: VirtualizationType;
      Tags?: TagList;
      Hypervisor?: HypervisorType;
    }


    export interface ImageAttribute {
      ImageId?: String;
      LaunchPermissions?: LaunchPermissionList;
      ProductCodes?: ProductCodeList;
      KernelId?: AttributeValue;
      RamdiskId?: AttributeValue;
      Description?: AttributeValue;
      SriovNetSupport?: AttributeValue;
      BlockDeviceMappings?: BlockDeviceMappingList;
    }


    export type ImageAttributeName = string;

    export interface ImageDiskContainer {
      Description?: String;
      Format?: String;
      Url?: String;
      UserBucket?: UserBucket;
      DeviceName?: String;
      SnapshotId?: String;
    }


    export type ImageDiskContainerList = Array<ImageDiskContainer>;

    export type ImageIdStringList = Array<String>;

    export type ImageList = Array<Image>;

    export type ImageState = string;

    export type ImageTypeValues = string;

    export interface ImportImageRequest {
      DryRun?: Boolean;
      Description?: String;
      DiskContainers?: ImageDiskContainerList;
      LicenseType?: String;
      Hypervisor?: String;
      Architecture?: String;
      Platform?: String;
      ClientData?: ClientData;
      ClientToken?: String;
      RoleName?: String;
    }


    export interface ImportImageResult {
      ImportTaskId?: String;
      Architecture?: String;
      LicenseType?: String;
      Platform?: String;
      Hypervisor?: String;
      Description?: String;
      SnapshotDetails?: SnapshotDetailList;
      ImageId?: String;
      Progress?: String;
      StatusMessage?: String;
      Status?: String;
    }


    export interface ImportImageTask {
      ImportTaskId?: String;
      Architecture?: String;
      LicenseType?: String;
      Platform?: String;
      Hypervisor?: String;
      Description?: String;
      SnapshotDetails?: SnapshotDetailList;
      ImageId?: String;
      Progress?: String;
      StatusMessage?: String;
      Status?: String;
    }


    export type ImportImageTaskList = Array<ImportImageTask>;

    export interface ImportInstanceLaunchSpecification {
      Architecture?: ArchitectureValues;
      GroupNames?: SecurityGroupStringList;
      GroupIds?: SecurityGroupIdStringList;
      AdditionalInfo?: String;
      UserData?: UserData;
      InstanceType?: InstanceType;
      Placement?: Placement;
      Monitoring?: Boolean;
      SubnetId?: String;
      InstanceInitiatedShutdownBehavior?: ShutdownBehavior;
      PrivateIpAddress?: String;
    }


    export interface ImportInstanceRequest {
      DryRun?: Boolean;
      Description?: String;
      LaunchSpecification?: ImportInstanceLaunchSpecification;
      DiskImages?: DiskImageList;
      Platform: PlatformValues;
    }


    export interface ImportInstanceResult {
      ConversionTask?: ConversionTask;
    }


    export interface ImportInstanceTaskDetails {
      Volumes: ImportInstanceVolumeDetailSet;
      InstanceId?: String;
      Platform?: PlatformValues;
      Description?: String;
    }


    export interface ImportInstanceVolumeDetailItem {
      BytesConverted: Long;
      AvailabilityZone: String;
      Image: DiskImageDescription;
      Volume: DiskImageVolumeDescription;
      Status: String;
      StatusMessage?: String;
      Description?: String;
    }


    export type ImportInstanceVolumeDetailSet = Array<ImportInstanceVolumeDetailItem>;

    export interface ImportKeyPairRequest {
      DryRun?: Boolean;
      KeyName: String;
      PublicKeyMaterial: Blob;
    }


    export interface ImportKeyPairResult {
      KeyName?: String;
      KeyFingerprint?: String;
    }


    export interface ImportSnapshotRequest {
      DryRun?: Boolean;
      Description?: String;
      DiskContainer?: SnapshotDiskContainer;
      ClientData?: ClientData;
      ClientToken?: String;
      RoleName?: String;
    }


    export interface ImportSnapshotResult {
      ImportTaskId?: String;
      SnapshotTaskDetail?: SnapshotTaskDetail;
      Description?: String;
    }


    export interface ImportSnapshotTask {
      ImportTaskId?: String;
      SnapshotTaskDetail?: SnapshotTaskDetail;
      Description?: String;
    }


    export type ImportSnapshotTaskList = Array<ImportSnapshotTask>;

    export type ImportTaskIdList = Array<String>;

    export interface ImportVolumeRequest {
      DryRun?: Boolean;
      AvailabilityZone: String;
      Image: DiskImageDetail;
      Description?: String;
      Volume: VolumeDetail;
    }


    export interface ImportVolumeResult {
      ConversionTask?: ConversionTask;
    }


    export interface ImportVolumeTaskDetails {
      BytesConverted: Long;
      AvailabilityZone: String;
      Description?: String;
      Image: DiskImageDescription;
      Volume: DiskImageVolumeDescription;
    }


    export interface Instance {
      InstanceId?: String;
      ImageId?: String;
      State?: InstanceState;
      PrivateDnsName?: String;
      PublicDnsName?: String;
      StateTransitionReason?: String;
      KeyName?: String;
      AmiLaunchIndex?: Integer;
      ProductCodes?: ProductCodeList;
      InstanceType?: InstanceType;
      LaunchTime?: DateTime;
      Placement?: Placement;
      KernelId?: String;
      RamdiskId?: String;
      Platform?: PlatformValues;
      Monitoring?: Monitoring;
      SubnetId?: String;
      VpcId?: String;
      PrivateIpAddress?: String;
      PublicIpAddress?: String;
      StateReason?: StateReason;
      Architecture?: ArchitectureValues;
      RootDeviceType?: DeviceType;
      RootDeviceName?: String;
      BlockDeviceMappings?: InstanceBlockDeviceMappingList;
      VirtualizationType?: VirtualizationType;
      InstanceLifecycle?: InstanceLifecycleType;
      SpotInstanceRequestId?: String;
      ClientToken?: String;
      Tags?: TagList;
      SecurityGroups?: GroupIdentifierList;
      SourceDestCheck?: Boolean;
      Hypervisor?: HypervisorType;
      NetworkInterfaces?: InstanceNetworkInterfaceList;
      IamInstanceProfile?: IamInstanceProfile;
      EbsOptimized?: Boolean;
      SriovNetSupport?: String;
    }


    export interface InstanceAttribute {
      InstanceId?: String;
      InstanceType?: AttributeValue;
      KernelId?: AttributeValue;
      RamdiskId?: AttributeValue;
      UserData?: AttributeValue;
      DisableApiTermination?: AttributeBooleanValue;
      InstanceInitiatedShutdownBehavior?: AttributeValue;
      RootDeviceName?: AttributeValue;
      BlockDeviceMappings?: InstanceBlockDeviceMappingList;
      ProductCodes?: ProductCodeList;
      EbsOptimized?: AttributeBooleanValue;
      SriovNetSupport?: AttributeValue;
      SourceDestCheck?: AttributeBooleanValue;
      Groups?: GroupIdentifierList;
    }


    export type InstanceAttributeName = string;

    export interface InstanceBlockDeviceMapping {
      DeviceName?: String;
      Ebs?: EbsInstanceBlockDevice;
    }


    export type InstanceBlockDeviceMappingList = Array<InstanceBlockDeviceMapping>;

    export interface InstanceBlockDeviceMappingSpecification {
      DeviceName?: String;
      Ebs?: EbsInstanceBlockDeviceSpecification;
      VirtualName?: String;
      NoDevice?: String;
    }


    export type InstanceBlockDeviceMappingSpecificationList = Array<InstanceBlockDeviceMappingSpecification>;

    export interface InstanceCount {
      State?: ListingState;
      InstanceCount?: Integer;
    }


    export type InstanceCountList = Array<InstanceCount>;

    export interface InstanceExportDetails {
      InstanceId?: String;
      TargetEnvironment?: ExportEnvironment;
    }


    export type InstanceIdStringList = Array<String>;

    export type InstanceLifecycleType = string;

    export type InstanceList = Array<Instance>;

    export interface InstanceMonitoring {
      InstanceId?: String;
      Monitoring?: Monitoring;
    }


    export type InstanceMonitoringList = Array<InstanceMonitoring>;

    export interface InstanceNetworkInterface {
      NetworkInterfaceId?: String;
      SubnetId?: String;
      VpcId?: String;
      Description?: String;
      OwnerId?: String;
      Status?: NetworkInterfaceStatus;
      MacAddress?: String;
      PrivateIpAddress?: String;
      PrivateDnsName?: String;
      SourceDestCheck?: Boolean;
      Groups?: GroupIdentifierList;
      Attachment?: InstanceNetworkInterfaceAttachment;
      Association?: InstanceNetworkInterfaceAssociation;
      PrivateIpAddresses?: InstancePrivateIpAddressList;
    }


    export interface InstanceNetworkInterfaceAssociation {
      PublicIp?: String;
      PublicDnsName?: String;
      IpOwnerId?: String;
    }


    export interface InstanceNetworkInterfaceAttachment {
      AttachmentId?: String;
      DeviceIndex?: Integer;
      Status?: AttachmentStatus;
      AttachTime?: DateTime;
      DeleteOnTermination?: Boolean;
    }


    export type InstanceNetworkInterfaceList = Array<InstanceNetworkInterface>;

    export interface InstanceNetworkInterfaceSpecification {
      NetworkInterfaceId?: String;
      DeviceIndex?: Integer;
      SubnetId?: String;
      Description?: String;
      PrivateIpAddress?: String;
      Groups?: SecurityGroupIdStringList;
      DeleteOnTermination?: Boolean;
      PrivateIpAddresses?: PrivateIpAddressSpecificationList;
      SecondaryPrivateIpAddressCount?: Integer;
      AssociatePublicIpAddress?: Boolean;
    }


    export type InstanceNetworkInterfaceSpecificationList = Array<InstanceNetworkInterfaceSpecification>;

    export interface InstancePrivateIpAddress {
      PrivateIpAddress?: String;
      PrivateDnsName?: String;
      Primary?: Boolean;
      Association?: InstanceNetworkInterfaceAssociation;
    }


    export type InstancePrivateIpAddressList = Array<InstancePrivateIpAddress>;

    export interface InstanceState {
      Code?: Integer;
      Name?: InstanceStateName;
    }


    export interface InstanceStateChange {
      InstanceId?: String;
      CurrentState?: InstanceState;
      PreviousState?: InstanceState;
    }


    export type InstanceStateChangeList = Array<InstanceStateChange>;

    export type InstanceStateName = string;

    export interface InstanceStatus {
      InstanceId?: String;
      AvailabilityZone?: String;
      Events?: InstanceStatusEventList;
      InstanceState?: InstanceState;
      SystemStatus?: InstanceStatusSummary;
      InstanceStatus?: InstanceStatusSummary;
    }


    export interface InstanceStatusDetails {
      Name?: StatusName;
      Status?: StatusType;
      ImpairedSince?: DateTime;
    }


    export type InstanceStatusDetailsList = Array<InstanceStatusDetails>;

    export interface InstanceStatusEvent {
      Code?: EventCode;
      Description?: String;
      NotBefore?: DateTime;
      NotAfter?: DateTime;
    }


    export type InstanceStatusEventList = Array<InstanceStatusEvent>;

    export type InstanceStatusList = Array<InstanceStatus>;

    export interface InstanceStatusSummary {
      Status?: SummaryStatus;
      Details?: InstanceStatusDetailsList;
    }


    export type InstanceType = string;

    export type InstanceTypeList = Array<InstanceType>;

    export type Integer = number;

    export interface InternetGateway {
      InternetGatewayId?: String;
      Attachments?: InternetGatewayAttachmentList;
      Tags?: TagList;
    }


    export interface InternetGatewayAttachment {
      VpcId?: String;
      State?: AttachmentStatus;
    }


    export type InternetGatewayAttachmentList = Array<InternetGatewayAttachment>;

    export type InternetGatewayList = Array<InternetGateway>;

    export interface IpPermission {
      IpProtocol?: String;
      FromPort?: Integer;
      ToPort?: Integer;
      UserIdGroupPairs?: UserIdGroupPairList;
      IpRanges?: IpRangeList;
      PrefixListIds?: PrefixListIdList;
    }


    export type IpPermissionList = Array<IpPermission>;

    export interface IpRange {
      CidrIp?: String;
    }


    export type IpRangeList = Array<IpRange>;

    export type KeyNameStringList = Array<String>;

    export interface KeyPair {
      KeyName?: String;
      KeyFingerprint?: String;
      KeyMaterial?: String;
    }


    export interface KeyPairInfo {
      KeyName?: String;
      KeyFingerprint?: String;
    }


    export type KeyPairList = Array<KeyPairInfo>;

    export interface LaunchPermission {
      UserId?: String;
      Group?: PermissionGroup;
    }


    export type LaunchPermissionList = Array<LaunchPermission>;

    export interface LaunchPermissionModifications {
      Add?: LaunchPermissionList;
      Remove?: LaunchPermissionList;
    }


    export interface LaunchSpecification {
      ImageId?: String;
      KeyName?: String;
      SecurityGroups?: GroupIdentifierList;
      UserData?: String;
      AddressingType?: String;
      InstanceType?: InstanceType;
      Placement?: SpotPlacement;
      KernelId?: String;
      RamdiskId?: String;
      BlockDeviceMappings?: BlockDeviceMappingList;
      SubnetId?: String;
      NetworkInterfaces?: InstanceNetworkInterfaceSpecificationList;
      IamInstanceProfile?: IamInstanceProfileSpecification;
      EbsOptimized?: Boolean;
      Monitoring?: RunInstancesMonitoringEnabled;
    }


    export type LaunchSpecsList = Array<LaunchSpecification>;

    export type ListingState = string;

    export type ListingStatus = string;

    export type Long = number;

    export interface ModifyImageAttributeRequest {
      DryRun?: Boolean;
      ImageId: String;
      Attribute?: String;
      OperationType?: String;
      UserIds?: UserIdStringList;
      UserGroups?: UserGroupStringList;
      ProductCodes?: ProductCodeStringList;
      Value?: String;
      LaunchPermission?: LaunchPermissionModifications;
      Description?: AttributeValue;
    }


    export interface ModifyInstanceAttributeRequest {
      DryRun?: Boolean;
      InstanceId: String;
      Attribute?: InstanceAttributeName;
      Value?: String;
      BlockDeviceMappings?: InstanceBlockDeviceMappingSpecificationList;
      SourceDestCheck?: AttributeBooleanValue;
      DisableApiTermination?: AttributeBooleanValue;
      InstanceType?: AttributeValue;
      Kernel?: AttributeValue;
      Ramdisk?: AttributeValue;
      UserData?: BlobAttributeValue;
      InstanceInitiatedShutdownBehavior?: AttributeValue;
      Groups?: GroupIdStringList;
      EbsOptimized?: AttributeBooleanValue;
      SriovNetSupport?: AttributeValue;
    }


    export interface ModifyNetworkInterfaceAttributeRequest {
      DryRun?: Boolean;
      NetworkInterfaceId: String;
      Description?: AttributeValue;
      SourceDestCheck?: AttributeBooleanValue;
      Groups?: SecurityGroupIdStringList;
      Attachment?: NetworkInterfaceAttachmentChanges;
    }


    export interface ModifyReservedInstancesRequest {
      ClientToken?: String;
      ReservedInstancesIds: ReservedInstancesIdStringList;
      TargetConfigurations: ReservedInstancesConfigurationList;
    }


    export interface ModifyReservedInstancesResult {
      ReservedInstancesModificationId?: String;
    }


    export interface ModifySnapshotAttributeRequest {
      DryRun?: Boolean;
      SnapshotId: String;
      Attribute?: SnapshotAttributeName;
      OperationType?: String;
      UserIds?: UserIdStringList;
      GroupNames?: GroupNameStringList;
      CreateVolumePermission?: CreateVolumePermissionModifications;
    }


    export interface ModifySubnetAttributeRequest {
      SubnetId: String;
      MapPublicIpOnLaunch?: AttributeBooleanValue;
    }


    export interface ModifyVolumeAttributeRequest {
      DryRun?: Boolean;
      VolumeId: String;
      AutoEnableIO?: AttributeBooleanValue;
    }


    export interface ModifyVpcAttributeRequest {
      VpcId: String;
      EnableDnsSupport?: AttributeBooleanValue;
      EnableDnsHostnames?: AttributeBooleanValue;
    }


    export interface ModifyVpcEndpointRequest {
      DryRun?: Boolean;
      VpcEndpointId: String;
      ResetPolicy?: Boolean;
      PolicyDocument?: String;
      AddRouteTableIds?: ValueStringList;
      RemoveRouteTableIds?: ValueStringList;
    }


    export interface ModifyVpcEndpointResult {
      Return?: Boolean;
    }


    export interface MonitorInstancesRequest {
      DryRun?: Boolean;
      InstanceIds: InstanceIdStringList;
    }


    export interface MonitorInstancesResult {
      InstanceMonitorings?: InstanceMonitoringList;
    }


    export interface Monitoring {
      State?: MonitoringState;
    }


    export type MonitoringState = string;

    export interface MoveAddressToVpcRequest {
      DryRun?: Boolean;
      PublicIp: String;
    }


    export interface MoveAddressToVpcResult {
      AllocationId?: String;
      Status?: Status;
    }


    export type MoveStatus = string;

    export interface MovingAddressStatus {
      PublicIp?: String;
      MoveStatus?: MoveStatus;
    }


    export type MovingAddressStatusSet = Array<MovingAddressStatus>;

    export interface NetworkAcl {
      NetworkAclId?: String;
      VpcId?: String;
      IsDefault?: Boolean;
      Entries?: NetworkAclEntryList;
      Associations?: NetworkAclAssociationList;
      Tags?: TagList;
    }


    export interface NetworkAclAssociation {
      NetworkAclAssociationId?: String;
      NetworkAclId?: String;
      SubnetId?: String;
    }


    export type NetworkAclAssociationList = Array<NetworkAclAssociation>;

    export interface NetworkAclEntry {
      RuleNumber?: Integer;
      Protocol?: String;
      RuleAction?: RuleAction;
      Egress?: Boolean;
      CidrBlock?: String;
      IcmpTypeCode?: IcmpTypeCode;
      PortRange?: PortRange;
    }


    export type NetworkAclEntryList = Array<NetworkAclEntry>;

    export type NetworkAclList = Array<NetworkAcl>;

    export interface NetworkInterface {
      NetworkInterfaceId?: String;
      SubnetId?: String;
      VpcId?: String;
      AvailabilityZone?: String;
      Description?: String;
      OwnerId?: String;
      RequesterId?: String;
      RequesterManaged?: Boolean;
      Status?: NetworkInterfaceStatus;
      MacAddress?: String;
      PrivateIpAddress?: String;
      PrivateDnsName?: String;
      SourceDestCheck?: Boolean;
      Groups?: GroupIdentifierList;
      Attachment?: NetworkInterfaceAttachment;
      Association?: NetworkInterfaceAssociation;
      TagSet?: TagList;
      PrivateIpAddresses?: NetworkInterfacePrivateIpAddressList;
    }


    export interface NetworkInterfaceAssociation {
      PublicIp?: String;
      PublicDnsName?: String;
      IpOwnerId?: String;
      AllocationId?: String;
      AssociationId?: String;
    }


    export interface NetworkInterfaceAttachment {
      AttachmentId?: String;
      InstanceId?: String;
      InstanceOwnerId?: String;
      DeviceIndex?: Integer;
      Status?: AttachmentStatus;
      AttachTime?: DateTime;
      DeleteOnTermination?: Boolean;
    }


    export interface NetworkInterfaceAttachmentChanges {
      AttachmentId?: String;
      DeleteOnTermination?: Boolean;
    }


    export type NetworkInterfaceAttribute = string;

    export type NetworkInterfaceIdList = Array<String>;

    export type NetworkInterfaceList = Array<NetworkInterface>;

    export interface NetworkInterfacePrivateIpAddress {
      PrivateIpAddress?: String;
      PrivateDnsName?: String;
      Primary?: Boolean;
      Association?: NetworkInterfaceAssociation;
    }


    export type NetworkInterfacePrivateIpAddressList = Array<NetworkInterfacePrivateIpAddress>;

    export type NetworkInterfaceStatus = string;

    export type OfferingTypeValues = string;

    export type OwnerStringList = Array<String>;

    export type PermissionGroup = string;

    export interface Placement {
      AvailabilityZone?: String;
      GroupName?: String;
      Tenancy?: Tenancy;
    }


    export interface PlacementGroup {
      GroupName?: String;
      Strategy?: PlacementStrategy;
      State?: PlacementGroupState;
    }


    export type PlacementGroupList = Array<PlacementGroup>;

    export type PlacementGroupState = string;

    export type PlacementGroupStringList = Array<String>;

    export type PlacementStrategy = string;

    export type PlatformValues = string;

    export interface PortRange {
      From?: Integer;
      To?: Integer;
    }


    export interface PrefixList {
      PrefixListId?: String;
      PrefixListName?: String;
      Cidrs?: ValueStringList;
    }


    export interface PrefixListId {
      PrefixListId?: String;
    }


    export type PrefixListIdList = Array<PrefixListId>;

    export type PrefixListSet = Array<PrefixList>;

    export interface PriceSchedule {
      Term?: Long;
      Price?: Double;
      CurrencyCode?: CurrencyCodeValues;
      Active?: Boolean;
    }


    export type PriceScheduleList = Array<PriceSchedule>;

    export interface PriceScheduleSpecification {
      Term?: Long;
      Price?: Double;
      CurrencyCode?: CurrencyCodeValues;
    }


    export type PriceScheduleSpecificationList = Array<PriceScheduleSpecification>;

    export interface PricingDetail {
      Price?: Double;
      Count?: Integer;
    }


    export type PricingDetailsList = Array<PricingDetail>;

    export interface PrivateIpAddressSpecification {
      PrivateIpAddress: String;
      Primary?: Boolean;
    }


    export type PrivateIpAddressSpecificationList = Array<PrivateIpAddressSpecification>;

    export type PrivateIpAddressStringList = Array<String>;

    export interface ProductCode {
      ProductCodeId?: String;
      ProductCodeType?: ProductCodeValues;
    }


    export type ProductCodeList = Array<ProductCode>;

    export type ProductCodeStringList = Array<String>;

    export type ProductCodeValues = string;

    export type ProductDescriptionList = Array<String>;

    export interface PropagatingVgw {
      GatewayId?: String;
    }


    export type PropagatingVgwList = Array<PropagatingVgw>;

    export type PublicIpStringList = Array<String>;

    export interface PurchaseReservedInstancesOfferingRequest {
      DryRun?: Boolean;
      ReservedInstancesOfferingId: String;
      InstanceCount: Integer;
      LimitPrice?: ReservedInstanceLimitPrice;
    }


    export interface PurchaseReservedInstancesOfferingResult {
      ReservedInstancesId?: String;
    }


    export type RIProductDescription = string;

    export type ReasonCodesList = Array<ReportInstanceReasonCodes>;

    export interface RebootInstancesRequest {
      DryRun?: Boolean;
      InstanceIds: InstanceIdStringList;
    }


    export interface RecurringCharge {
      Frequency?: RecurringChargeFrequency;
      Amount?: Double;
    }


    export type RecurringChargeFrequency = string;

    export type RecurringChargesList = Array<RecurringCharge>;

    export interface Region {
      RegionName?: String;
      Endpoint?: String;
    }


    export type RegionList = Array<Region>;

    export type RegionNameStringList = Array<String>;

    export interface RegisterImageRequest {
      DryRun?: Boolean;
      ImageLocation?: String;
      Name: String;
      Description?: String;
      Architecture?: ArchitectureValues;
      KernelId?: String;
      RamdiskId?: String;
      RootDeviceName?: String;
      BlockDeviceMappings?: BlockDeviceMappingRequestList;
      VirtualizationType?: String;
      SriovNetSupport?: String;
    }


    export interface RegisterImageResult {
      ImageId?: String;
    }


    export interface RejectVpcPeeringConnectionRequest {
      DryRun?: Boolean;
      VpcPeeringConnectionId: String;
    }


    export interface RejectVpcPeeringConnectionResult {
      Return?: Boolean;
    }


    export interface ReleaseAddressRequest {
      DryRun?: Boolean;
      PublicIp?: String;
      AllocationId?: String;
    }


    export interface ReplaceNetworkAclAssociationRequest {
      DryRun?: Boolean;
      AssociationId: String;
      NetworkAclId: String;
    }


    export interface ReplaceNetworkAclAssociationResult {
      NewAssociationId?: String;
    }


    export interface ReplaceNetworkAclEntryRequest {
      DryRun?: Boolean;
      NetworkAclId: String;
      RuleNumber: Integer;
      Protocol: String;
      RuleAction: RuleAction;
      Egress: Boolean;
      CidrBlock: String;
      IcmpTypeCode?: IcmpTypeCode;
      PortRange?: PortRange;
    }


    export interface ReplaceRouteRequest {
      DryRun?: Boolean;
      RouteTableId: String;
      DestinationCidrBlock: String;
      GatewayId?: String;
      InstanceId?: String;
      NetworkInterfaceId?: String;
      VpcPeeringConnectionId?: String;
    }


    export interface ReplaceRouteTableAssociationRequest {
      DryRun?: Boolean;
      AssociationId: String;
      RouteTableId: String;
    }


    export interface ReplaceRouteTableAssociationResult {
      NewAssociationId?: String;
    }


    export type ReportInstanceReasonCodes = string;

    export interface ReportInstanceStatusRequest {
      DryRun?: Boolean;
      Instances: InstanceIdStringList;
      Status: ReportStatusType;
      StartTime?: DateTime;
      EndTime?: DateTime;
      ReasonCodes: ReasonCodesList;
      Description?: String;
    }


    export type ReportStatusType = string;

    export interface RequestSpotFleetRequest {
      DryRun?: Boolean;
      SpotFleetRequestConfig: SpotFleetRequestConfigData;
    }


    export interface RequestSpotFleetResponse {
      SpotFleetRequestId: String;
    }


    export interface RequestSpotInstancesRequest {
      DryRun?: Boolean;
      SpotPrice: String;
      ClientToken?: String;
      InstanceCount?: Integer;
      Type?: SpotInstanceType;
      ValidFrom?: DateTime;
      ValidUntil?: DateTime;
      LaunchGroup?: String;
      AvailabilityZoneGroup?: String;
      LaunchSpecification?: RequestSpotLaunchSpecification;
    }


    export interface RequestSpotInstancesResult {
      SpotInstanceRequests?: SpotInstanceRequestList;
    }


    export interface Reservation {
      ReservationId?: String;
      OwnerId?: String;
      RequesterId?: String;
      Groups?: GroupIdentifierList;
      Instances?: InstanceList;
    }


    export type ReservationList = Array<Reservation>;

    export interface ReservedInstanceLimitPrice {
      Amount?: Double;
      CurrencyCode?: CurrencyCodeValues;
    }


    export type ReservedInstanceState = string;

    export interface ReservedInstances {
      ReservedInstancesId?: String;
      InstanceType?: InstanceType;
      AvailabilityZone?: String;
      Start?: DateTime;
      End?: DateTime;
      Duration?: Long;
      UsagePrice?: Float;
      FixedPrice?: Float;
      InstanceCount?: Integer;
      ProductDescription?: RIProductDescription;
      State?: ReservedInstanceState;
      Tags?: TagList;
      InstanceTenancy?: Tenancy;
      CurrencyCode?: CurrencyCodeValues;
      OfferingType?: OfferingTypeValues;
      RecurringCharges?: RecurringChargesList;
    }


    export interface ReservedInstancesConfiguration {
      AvailabilityZone?: String;
      Platform?: String;
      InstanceCount?: Integer;
      InstanceType?: InstanceType;
    }


    export type ReservedInstancesConfigurationList = Array<ReservedInstancesConfiguration>;

    export interface ReservedInstancesId {
      ReservedInstancesId?: String;
    }


    export type ReservedInstancesIdStringList = Array<String>;

    export type ReservedInstancesList = Array<ReservedInstances>;

    export interface ReservedInstancesListing {
      ReservedInstancesListingId?: String;
      ReservedInstancesId?: String;
      CreateDate?: DateTime;
      UpdateDate?: DateTime;
      Status?: ListingStatus;
      StatusMessage?: String;
      InstanceCounts?: InstanceCountList;
      PriceSchedules?: PriceScheduleList;
      Tags?: TagList;
      ClientToken?: String;
    }


    export type ReservedInstancesListingList = Array<ReservedInstancesListing>;

    export interface ReservedInstancesModification {
      ReservedInstancesModificationId?: String;
      ReservedInstancesIds?: ReservedIntancesIds;
      ModificationResults?: ReservedInstancesModificationResultList;
      CreateDate?: DateTime;
      UpdateDate?: DateTime;
      EffectiveDate?: DateTime;
      Status?: String;
      StatusMessage?: String;
      ClientToken?: String;
    }


    export type ReservedInstancesModificationIdStringList = Array<String>;

    export type ReservedInstancesModificationList = Array<ReservedInstancesModification>;

    export interface ReservedInstancesModificationResult {
      ReservedInstancesId?: String;
      TargetConfiguration?: ReservedInstancesConfiguration;
    }


    export type ReservedInstancesModificationResultList = Array<ReservedInstancesModificationResult>;

    export interface ReservedInstancesOffering {
      ReservedInstancesOfferingId?: String;
      InstanceType?: InstanceType;
      AvailabilityZone?: String;
      Duration?: Long;
      UsagePrice?: Float;
      FixedPrice?: Float;
      ProductDescription?: RIProductDescription;
      InstanceTenancy?: Tenancy;
      CurrencyCode?: CurrencyCodeValues;
      OfferingType?: OfferingTypeValues;
      RecurringCharges?: RecurringChargesList;
      Marketplace?: Boolean;
      PricingDetails?: PricingDetailsList;
    }


    export type ReservedInstancesOfferingIdStringList = Array<String>;

    export type ReservedInstancesOfferingList = Array<ReservedInstancesOffering>;

    export type ReservedIntancesIds = Array<ReservedInstancesId>;

    export type ResetImageAttributeName = string;

    export interface ResetImageAttributeRequest {
      DryRun?: Boolean;
      ImageId: String;
      Attribute: ResetImageAttributeName;
    }


    export interface ResetInstanceAttributeRequest {
      DryRun?: Boolean;
      InstanceId: String;
      Attribute: InstanceAttributeName;
    }


    export interface ResetNetworkInterfaceAttributeRequest {
      DryRun?: Boolean;
      NetworkInterfaceId: String;
      SourceDestCheck?: String;
    }


    export interface ResetSnapshotAttributeRequest {
      DryRun?: Boolean;
      SnapshotId: String;
      Attribute: SnapshotAttributeName;
    }


    export type ResourceIdList = Array<String>;

    export type ResourceType = string;

    export type RestorableByStringList = Array<String>;

    export interface RestoreAddressToClassicRequest {
      DryRun?: Boolean;
      PublicIp: String;
    }


    export interface RestoreAddressToClassicResult {
      Status?: Status;
      PublicIp?: String;
    }


    export interface RevokeSecurityGroupEgressRequest {
      DryRun?: Boolean;
      GroupId: String;
      SourceSecurityGroupName?: String;
      SourceSecurityGroupOwnerId?: String;
      IpProtocol?: String;
      FromPort?: Integer;
      ToPort?: Integer;
      CidrIp?: String;
      IpPermissions?: IpPermissionList;
    }


    export interface RevokeSecurityGroupIngressRequest {
      DryRun?: Boolean;
      GroupName?: String;
      GroupId?: String;
      SourceSecurityGroupName?: String;
      SourceSecurityGroupOwnerId?: String;
      IpProtocol?: String;
      FromPort?: Integer;
      ToPort?: Integer;
      CidrIp?: String;
      IpPermissions?: IpPermissionList;
    }


    export interface Route {
      DestinationCidrBlock?: String;
      DestinationPrefixListId?: String;
      GatewayId?: String;
      InstanceId?: String;
      InstanceOwnerId?: String;
      NetworkInterfaceId?: String;
      VpcPeeringConnectionId?: String;
      State?: RouteState;
      Origin?: RouteOrigin;
    }


    export type RouteList = Array<Route>;

    export type RouteOrigin = string;

    export type RouteState = string;

    export interface RouteTable {
      RouteTableId?: String;
      VpcId?: String;
      Routes?: RouteList;
      Associations?: RouteTableAssociationList;
      Tags?: TagList;
      PropagatingVgws?: PropagatingVgwList;
    }


    export interface RouteTableAssociation {
      RouteTableAssociationId?: String;
      RouteTableId?: String;
      SubnetId?: String;
      Main?: Boolean;
    }


    export type RouteTableAssociationList = Array<RouteTableAssociation>;

    export type RouteTableList = Array<RouteTable>;

    export type RuleAction = string;

    export interface RunInstancesMonitoringEnabled {
      Enabled: Boolean;
    }


    export interface RunInstancesRequest {
      DryRun?: Boolean;
      ImageId: String;
      MinCount: Integer;
      MaxCount: Integer;
      KeyName?: String;
      SecurityGroups?: SecurityGroupStringList;
      SecurityGroupIds?: SecurityGroupIdStringList;
      UserData?: String;
      InstanceType?: InstanceType;
      Placement?: Placement;
      KernelId?: String;
      RamdiskId?: String;
      BlockDeviceMappings?: BlockDeviceMappingRequestList;
      Monitoring?: RunInstancesMonitoringEnabled;
      SubnetId?: String;
      DisableApiTermination?: Boolean;
      InstanceInitiatedShutdownBehavior?: ShutdownBehavior;
      PrivateIpAddress?: String;
      ClientToken?: String;
      AdditionalInfo?: String;
      NetworkInterfaces?: InstanceNetworkInterfaceSpecificationList;
      IamInstanceProfile?: IamInstanceProfileSpecification;
      EbsOptimized?: Boolean;
    }


    export interface S3Storage {
      Bucket?: String;
      Prefix?: String;
      AWSAccessKeyId?: String;
      UploadPolicy?: Blob;
      UploadPolicySignature?: String;
    }


    export interface SecurityGroup {
      OwnerId?: String;
      GroupName?: String;
      GroupId?: String;
      Description?: String;
      IpPermissions?: IpPermissionList;
      IpPermissionsEgress?: IpPermissionList;
      VpcId?: String;
      Tags?: TagList;
    }


    export type SecurityGroupIdStringList = Array<String>;

    export type SecurityGroupList = Array<SecurityGroup>;

    export type SecurityGroupStringList = Array<String>;

    export type ShutdownBehavior = string;

    export interface Snapshot {
      SnapshotId?: String;
      VolumeId?: String;
      State?: SnapshotState;
      StartTime?: DateTime;
      Progress?: String;
      OwnerId?: String;
      Description?: String;
      VolumeSize?: Integer;
      OwnerAlias?: String;
      Tags?: TagList;
      Encrypted?: Boolean;
      KmsKeyId?: String;
    }


    export type SnapshotAttributeName = string;

    export interface SnapshotDetail {
      DiskImageSize?: Double;
      Description?: String;
      Format?: String;
      Url?: String;
      UserBucket?: UserBucketDetails;
      DeviceName?: String;
      SnapshotId?: String;
      Progress?: String;
      StatusMessage?: String;
      Status?: String;
    }


    export type SnapshotDetailList = Array<SnapshotDetail>;

    export interface SnapshotDiskContainer {
      Description?: String;
      Format?: String;
      Url?: String;
      UserBucket?: UserBucket;
    }


    export type SnapshotIdStringList = Array<String>;

    export type SnapshotList = Array<Snapshot>;

    export type SnapshotState = string;

    export interface SnapshotTaskDetail {
      DiskImageSize?: Double;
      Description?: String;
      Format?: String;
      Url?: String;
      UserBucket?: UserBucketDetails;
      SnapshotId?: String;
      Progress?: String;
      StatusMessage?: String;
      Status?: String;
    }


    export interface SpotDatafeedSubscription {
      OwnerId?: String;
      Bucket?: String;
      Prefix?: String;
      State?: DatafeedSubscriptionState;
      Fault?: SpotInstanceStateFault;
    }


    export interface SpotFleetRequestConfig {
      SpotFleetRequestId: String;
      SpotFleetRequestState: BatchState;
      SpotFleetRequestConfig: SpotFleetRequestConfigData;
    }


    export interface SpotFleetRequestConfigData {
      ClientToken?: String;
      SpotPrice: String;
      TargetCapacity: Integer;
      ValidFrom?: DateTime;
      ValidUntil?: DateTime;
      TerminateInstancesWithExpiration?: Boolean;
      IamFleetRole: String;
      LaunchSpecifications: LaunchSpecsList;
    }


    export type SpotFleetRequestConfigSet = Array<SpotFleetRequestConfig>;

    export interface SpotInstanceRequest {
      SpotInstanceRequestId?: String;
      SpotPrice?: String;
      Type?: SpotInstanceType;
      State?: SpotInstanceState;
      Fault?: SpotInstanceStateFault;
      Status?: SpotInstanceStatus;
      ValidFrom?: DateTime;
      ValidUntil?: DateTime;
      LaunchGroup?: String;
      AvailabilityZoneGroup?: String;
      LaunchSpecification?: LaunchSpecification;
      InstanceId?: String;
      CreateTime?: DateTime;
      ProductDescription?: RIProductDescription;
      Tags?: TagList;
      LaunchedAvailabilityZone?: String;
    }


    export type SpotInstanceRequestIdList = Array<String>;

    export type SpotInstanceRequestList = Array<SpotInstanceRequest>;

    export type SpotInstanceState = string;

    export interface SpotInstanceStateFault {
      Code?: String;
      Message?: String;
    }


    export interface SpotInstanceStatus {
      Code?: String;
      UpdateTime?: DateTime;
      Message?: String;
    }


    export type SpotInstanceType = string;

    export interface SpotPlacement {
      AvailabilityZone?: String;
      GroupName?: String;
    }


    export interface SpotPrice {
      InstanceType?: InstanceType;
      ProductDescription?: RIProductDescription;
      SpotPrice?: String;
      Timestamp?: DateTime;
      AvailabilityZone?: String;
    }


    export type SpotPriceHistoryList = Array<SpotPrice>;

    export interface StartInstancesRequest {
      InstanceIds: InstanceIdStringList;
      AdditionalInfo?: String;
      DryRun?: Boolean;
    }


    export interface StartInstancesResult {
      StartingInstances?: InstanceStateChangeList;
    }


    export type State = string;

    export interface StateReason {
      Code?: String;
      Message?: String;
    }


    export type Status = string;

    export type StatusName = string;

    export type StatusType = string;

    export interface StopInstancesRequest {
      DryRun?: Boolean;
      InstanceIds: InstanceIdStringList;
      Force?: Boolean;
    }


    export interface StopInstancesResult {
      StoppingInstances?: InstanceStateChangeList;
    }


    export interface Storage {
      S3?: S3Storage;
    }


    export type String = string;

    export interface Subnet {
      SubnetId?: String;
      State?: SubnetState;
      VpcId?: String;
      CidrBlock?: String;
      AvailableIpAddressCount?: Integer;
      AvailabilityZone?: String;
      DefaultForAz?: Boolean;
      MapPublicIpOnLaunch?: Boolean;
      Tags?: TagList;
    }


    export type SubnetIdStringList = Array<String>;

    export type SubnetList = Array<Subnet>;

    export type SubnetState = string;

    export type SummaryStatus = string;

    export interface Tag {
      Key?: String;
      Value?: String;
    }


    export interface TagDescription {
      ResourceId?: String;
      ResourceType?: ResourceType;
      Key?: String;
      Value?: String;
    }


    export type TagDescriptionList = Array<TagDescription>;

    export type TagList = Array<Tag>;

    export type TelemetryStatus = string;

    export type Tenancy = string;

    export interface TerminateInstancesRequest {
      DryRun?: Boolean;
      InstanceIds: InstanceIdStringList;
    }


    export interface TerminateInstancesResult {
      TerminatingInstances?: InstanceStateChangeList;
    }


    export interface UnassignPrivateIpAddressesRequest {
      NetworkInterfaceId: String;
      PrivateIpAddresses: PrivateIpAddressStringList;
    }


    export interface UnmonitorInstancesRequest {
      DryRun?: Boolean;
      InstanceIds: InstanceIdStringList;
    }


    export interface UnmonitorInstancesResult {
      InstanceMonitorings?: InstanceMonitoringList;
    }


    export interface UnsuccessfulItem {
      ResourceId?: String;
      Error: UnsuccessfulItemError;
    }


    export interface UnsuccessfulItemError {
      Code: String;
      Message: String;
    }


    export type UnsuccessfulItemSet = Array<UnsuccessfulItem>;

    export interface UserBucket {
      S3Bucket?: String;
      S3Key?: String;
    }


    export interface UserBucketDetails {
      S3Bucket?: String;
      S3Key?: String;
    }


    export interface UserData {
      Data?: String;
    }


    export type UserGroupStringList = Array<String>;

    export interface UserIdGroupPair {
      UserId?: String;
      GroupName?: String;
      GroupId?: String;
    }


    export type UserIdGroupPairList = Array<UserIdGroupPair>;

    export type UserIdStringList = Array<String>;

    export type ValueStringList = Array<String>;

    export interface VgwTelemetry {
      OutsideIpAddress?: String;
      Status?: TelemetryStatus;
      LastStatusChange?: DateTime;
      StatusMessage?: String;
      AcceptedRouteCount?: Integer;
    }


    export type VgwTelemetryList = Array<VgwTelemetry>;

    export type VirtualizationType = string;

    export interface Volume {
      VolumeId?: String;
      Size?: Integer;
      SnapshotId?: String;
      AvailabilityZone?: String;
      State?: VolumeState;
      CreateTime?: DateTime;
      Attachments?: VolumeAttachmentList;
      Tags?: TagList;
      VolumeType?: VolumeType;
      Iops?: Integer;
      Encrypted?: Boolean;
      KmsKeyId?: String;
    }


    export interface VolumeAttachment {
      VolumeId?: String;
      InstanceId?: String;
      Device?: String;
      State?: VolumeAttachmentState;
      AttachTime?: DateTime;
      DeleteOnTermination?: Boolean;
    }


    export type VolumeAttachmentList = Array<VolumeAttachment>;

    export type VolumeAttachmentState = string;

    export type VolumeAttributeName = string;

    export interface VolumeDetail {
      Size: Long;
    }


    export type VolumeIdStringList = Array<String>;

    export type VolumeList = Array<Volume>;

    export type VolumeState = string;

    export interface VolumeStatusAction {
      Code?: String;
      Description?: String;
      EventType?: String;
      EventId?: String;
    }


    export type VolumeStatusActionsList = Array<VolumeStatusAction>;

    export interface VolumeStatusDetails {
      Name?: VolumeStatusName;
      Status?: String;
    }


    export type VolumeStatusDetailsList = Array<VolumeStatusDetails>;

    export interface VolumeStatusEvent {
      EventType?: String;
      Description?: String;
      NotBefore?: DateTime;
      NotAfter?: DateTime;
      EventId?: String;
    }


    export type VolumeStatusEventsList = Array<VolumeStatusEvent>;

    export interface VolumeStatusInfo {
      Status?: VolumeStatusInfoStatus;
      Details?: VolumeStatusDetailsList;
    }


    export type VolumeStatusInfoStatus = string;

    export interface VolumeStatusItem {
      VolumeId?: String;
      AvailabilityZone?: String;
      VolumeStatus?: VolumeStatusInfo;
      Events?: VolumeStatusEventsList;
      Actions?: VolumeStatusActionsList;
    }


    export type VolumeStatusList = Array<VolumeStatusItem>;

    export type VolumeStatusName = string;

    export type VolumeType = string;

    export interface Vpc {
      VpcId?: String;
      State?: VpcState;
      CidrBlock?: String;
      DhcpOptionsId?: String;
      Tags?: TagList;
      InstanceTenancy?: Tenancy;
      IsDefault?: Boolean;
    }


    export interface VpcAttachment {
      VpcId?: String;
      State?: AttachmentStatus;
    }


    export type VpcAttachmentList = Array<VpcAttachment>;

    export type VpcAttributeName = string;

    export interface VpcClassicLink {
      VpcId?: String;
      ClassicLinkEnabled?: Boolean;
      Tags?: TagList;
    }


    export type VpcClassicLinkIdList = Array<String>;

    export type VpcClassicLinkList = Array<VpcClassicLink>;

    export interface VpcEndpoint {
      VpcEndpointId?: String;
      VpcId?: String;
      ServiceName?: String;
      State?: State;
      PolicyDocument?: String;
      RouteTableIds?: ValueStringList;
      CreationTimestamp?: DateTime;
    }


    export type VpcEndpointSet = Array<VpcEndpoint>;

    export type VpcIdStringList = Array<String>;

    export type VpcList = Array<Vpc>;

    export interface VpcPeeringConnection {
      AccepterVpcInfo?: VpcPeeringConnectionVpcInfo;
      ExpirationTime?: DateTime;
      RequesterVpcInfo?: VpcPeeringConnectionVpcInfo;
      Status?: VpcPeeringConnectionStateReason;
      Tags?: TagList;
      VpcPeeringConnectionId?: String;
    }


    export type VpcPeeringConnectionList = Array<VpcPeeringConnection>;

    export interface VpcPeeringConnectionStateReason {
      Code?: String;
      Message?: String;
    }


    export interface VpcPeeringConnectionVpcInfo {
      CidrBlock?: String;
      OwnerId?: String;
      VpcId?: String;
    }


    export type VpcState = string;

    export interface VpnConnection {
      VpnConnectionId?: String;
      State?: VpnState;
      CustomerGatewayConfiguration?: String;
      Type?: GatewayType;
      CustomerGatewayId?: String;
      VpnGatewayId?: String;
      Tags?: TagList;
      VgwTelemetry?: VgwTelemetryList;
      Options?: VpnConnectionOptions;
      Routes?: VpnStaticRouteList;
    }


    export type VpnConnectionIdStringList = Array<String>;

    export type VpnConnectionList = Array<VpnConnection>;

    export interface VpnConnectionOptions {
      StaticRoutesOnly?: Boolean;
    }


    export interface VpnConnectionOptionsSpecification {
      StaticRoutesOnly?: Boolean;
    }


    export interface VpnGateway {
      VpnGatewayId?: String;
      State?: VpnState;
      Type?: GatewayType;
      AvailabilityZone?: String;
      VpcAttachments?: VpcAttachmentList;
      Tags?: TagList;
    }


    export type VpnGatewayIdStringList = Array<String>;

    export type VpnGatewayList = Array<VpnGateway>;

    export type VpnState = string;

    export interface VpnStaticRoute {
      DestinationCidrBlock?: String;
      Source?: VpnStaticRouteSource;
      State?: VpnState;
    }


    export type VpnStaticRouteList = Array<VpnStaticRoute>;

    export type VpnStaticRouteSource = string;

    export type ZoneNameStringList = Array<String>;

    export type NewDhcpConfigurationList = Array<NewDhcpConfiguration>;

    export interface NewDhcpConfiguration {
      Key?: String;
      Values?: ValueStringList;
    }


    export type DhcpConfigurationValueList = Array<AttributeValue>;

    export type Blob = any; // not really - it was 'blob' instead - must fix this one

    export interface BlobAttributeValue {
      Value?: Blob;
    }


    export interface RequestSpotLaunchSpecification {
      ImageId?: String;
      KeyName?: String;
      SecurityGroups?: ValueStringList;
      UserData?: String;
      AddressingType?: String;
      InstanceType?: InstanceType;
      Placement?: SpotPlacement;
      KernelId?: String;
      RamdiskId?: String;
      BlockDeviceMappings?: BlockDeviceMappingList;
      SubnetId?: String;
      NetworkInterfaces?: InstanceNetworkInterfaceSpecificationList;
      IamInstanceProfile?: IamInstanceProfileSpecification;
      EbsOptimized?: Boolean;
      Monitoring?: RunInstancesMonitoringEnabled;
      SecurityGroupIds?: ValueStringList;
    }


}
