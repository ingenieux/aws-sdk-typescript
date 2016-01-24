// Type definitions for aws-sdk - Amazon Elastic Compute Cloud
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2015-10-01
     * endpointPrefix: ec2
     * serviceAbbreviation: Amazon EC2
     * signatureVersion: v4
     * protocol: ec2
     */
    export class EC2 extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      acceptVpcPeeringConnection(params: EC2.AcceptVpcPeeringConnectionRequest, callback?: (err: any, data: EC2.AcceptVpcPeeringConnectionResult|any) => void): Request;
      allocateAddress(params: EC2.AllocateAddressRequest, callback?: (err: any, data: EC2.AllocateAddressResult|any) => void): Request;
      allocateHosts(params: EC2.AllocateHostsRequest, callback?: (err: any, data: EC2.AllocateHostsResult|any) => void): Request;
      assignPrivateIpAddresses(params: EC2.AssignPrivateIpAddressesRequest, callback?: (err: any, data: any) => void): Request;
      associateAddress(params: EC2.AssociateAddressRequest, callback?: (err: any, data: EC2.AssociateAddressResult|any) => void): Request;
      associateDhcpOptions(params: EC2.AssociateDhcpOptionsRequest, callback?: (err: any, data: any) => void): Request;
      associateRouteTable(params: EC2.AssociateRouteTableRequest, callback?: (err: any, data: EC2.AssociateRouteTableResult|any) => void): Request;
      attachClassicLinkVpc(params: EC2.AttachClassicLinkVpcRequest, callback?: (err: any, data: EC2.AttachClassicLinkVpcResult|any) => void): Request;
      attachInternetGateway(params: EC2.AttachInternetGatewayRequest, callback?: (err: any, data: any) => void): Request;
      attachNetworkInterface(params: EC2.AttachNetworkInterfaceRequest, callback?: (err: any, data: EC2.AttachNetworkInterfaceResult|any) => void): Request;
      attachVolume(params: EC2.AttachVolumeRequest, callback?: (err: any, data: EC2.VolumeAttachment|any) => void): Request;
      attachVpnGateway(params: EC2.AttachVpnGatewayRequest, callback?: (err: any, data: EC2.AttachVpnGatewayResult|any) => void): Request;
      authorizeSecurityGroupEgress(params: EC2.AuthorizeSecurityGroupEgressRequest, callback?: (err: any, data: any) => void): Request;
      authorizeSecurityGroupIngress(params: EC2.AuthorizeSecurityGroupIngressRequest, callback?: (err: any, data: any) => void): Request;
      bundleInstance(params: EC2.BundleInstanceRequest, callback?: (err: any, data: EC2.BundleInstanceResult|any) => void): Request;
      cancelBundleTask(params: EC2.CancelBundleTaskRequest, callback?: (err: any, data: EC2.CancelBundleTaskResult|any) => void): Request;
      cancelConversionTask(params: EC2.CancelConversionRequest, callback?: (err: any, data: any) => void): Request;
      cancelExportTask(params: EC2.CancelExportTaskRequest, callback?: (err: any, data: any) => void): Request;
      cancelImportTask(params: EC2.CancelImportTaskRequest, callback?: (err: any, data: EC2.CancelImportTaskResult|any) => void): Request;
      cancelReservedInstancesListing(params: EC2.CancelReservedInstancesListingRequest, callback?: (err: any, data: EC2.CancelReservedInstancesListingResult|any) => void): Request;
      cancelSpotFleetRequests(params: EC2.CancelSpotFleetRequestsRequest, callback?: (err: any, data: EC2.CancelSpotFleetRequestsResponse|any) => void): Request;
      cancelSpotInstanceRequests(params: EC2.CancelSpotInstanceRequestsRequest, callback?: (err: any, data: EC2.CancelSpotInstanceRequestsResult|any) => void): Request;
      confirmProductInstance(params: EC2.ConfirmProductInstanceRequest, callback?: (err: any, data: EC2.ConfirmProductInstanceResult|any) => void): Request;
      copyImage(params: EC2.CopyImageRequest, callback?: (err: any, data: EC2.CopyImageResult|any) => void): Request;
      copySnapshot(params: EC2.CopySnapshotRequest, callback?: (err: any, data: EC2.CopySnapshotResult|any) => void): Request;
      createCustomerGateway(params: EC2.CreateCustomerGatewayRequest, callback?: (err: any, data: EC2.CreateCustomerGatewayResult|any) => void): Request;
      createDhcpOptions(params: EC2.CreateDhcpOptionsRequest, callback?: (err: any, data: EC2.CreateDhcpOptionsResult|any) => void): Request;
      createFlowLogs(params: EC2.CreateFlowLogsRequest, callback?: (err: any, data: EC2.CreateFlowLogsResult|any) => void): Request;
      createImage(params: EC2.CreateImageRequest, callback?: (err: any, data: EC2.CreateImageResult|any) => void): Request;
      createInstanceExportTask(params: EC2.CreateInstanceExportTaskRequest, callback?: (err: any, data: EC2.CreateInstanceExportTaskResult|any) => void): Request;
      createInternetGateway(params: EC2.CreateInternetGatewayRequest, callback?: (err: any, data: EC2.CreateInternetGatewayResult|any) => void): Request;
      createKeyPair(params: EC2.CreateKeyPairRequest, callback?: (err: any, data: EC2.KeyPair|any) => void): Request;
      createNatGateway(params: EC2.CreateNatGatewayRequest, callback?: (err: any, data: EC2.CreateNatGatewayResult|any) => void): Request;
      createNetworkAcl(params: EC2.CreateNetworkAclRequest, callback?: (err: any, data: EC2.CreateNetworkAclResult|any) => void): Request;
      createNetworkAclEntry(params: EC2.CreateNetworkAclEntryRequest, callback?: (err: any, data: any) => void): Request;
      createNetworkInterface(params: EC2.CreateNetworkInterfaceRequest, callback?: (err: any, data: EC2.CreateNetworkInterfaceResult|any) => void): Request;
      createPlacementGroup(params: EC2.CreatePlacementGroupRequest, callback?: (err: any, data: any) => void): Request;
      createReservedInstancesListing(params: EC2.CreateReservedInstancesListingRequest, callback?: (err: any, data: EC2.CreateReservedInstancesListingResult|any) => void): Request;
      createRoute(params: EC2.CreateRouteRequest, callback?: (err: any, data: EC2.CreateRouteResult|any) => void): Request;
      createRouteTable(params: EC2.CreateRouteTableRequest, callback?: (err: any, data: EC2.CreateRouteTableResult|any) => void): Request;
      createSecurityGroup(params: EC2.CreateSecurityGroupRequest, callback?: (err: any, data: EC2.CreateSecurityGroupResult|any) => void): Request;
      createSnapshot(params: EC2.CreateSnapshotRequest, callback?: (err: any, data: EC2.Snapshot|any) => void): Request;
      createSpotDatafeedSubscription(params: EC2.CreateSpotDatafeedSubscriptionRequest, callback?: (err: any, data: EC2.CreateSpotDatafeedSubscriptionResult|any) => void): Request;
      createSubnet(params: EC2.CreateSubnetRequest, callback?: (err: any, data: EC2.CreateSubnetResult|any) => void): Request;
      createTags(params: EC2.CreateTagsRequest, callback?: (err: any, data: any) => void): Request;
      createVolume(params: EC2.CreateVolumeRequest, callback?: (err: any, data: EC2.Volume|any) => void): Request;
      createVpc(params: EC2.CreateVpcRequest, callback?: (err: any, data: EC2.CreateVpcResult|any) => void): Request;
      createVpcEndpoint(params: EC2.CreateVpcEndpointRequest, callback?: (err: any, data: EC2.CreateVpcEndpointResult|any) => void): Request;
      createVpcPeeringConnection(params: EC2.CreateVpcPeeringConnectionRequest, callback?: (err: any, data: EC2.CreateVpcPeeringConnectionResult|any) => void): Request;
      createVpnConnection(params: EC2.CreateVpnConnectionRequest, callback?: (err: any, data: EC2.CreateVpnConnectionResult|any) => void): Request;
      createVpnConnectionRoute(params: EC2.CreateVpnConnectionRouteRequest, callback?: (err: any, data: any) => void): Request;
      createVpnGateway(params: EC2.CreateVpnGatewayRequest, callback?: (err: any, data: EC2.CreateVpnGatewayResult|any) => void): Request;
      deleteCustomerGateway(params: EC2.DeleteCustomerGatewayRequest, callback?: (err: any, data: any) => void): Request;
      deleteDhcpOptions(params: EC2.DeleteDhcpOptionsRequest, callback?: (err: any, data: any) => void): Request;
      deleteFlowLogs(params: EC2.DeleteFlowLogsRequest, callback?: (err: any, data: EC2.DeleteFlowLogsResult|any) => void): Request;
      deleteInternetGateway(params: EC2.DeleteInternetGatewayRequest, callback?: (err: any, data: any) => void): Request;
      deleteKeyPair(params: EC2.DeleteKeyPairRequest, callback?: (err: any, data: any) => void): Request;
      deleteNatGateway(params: EC2.DeleteNatGatewayRequest, callback?: (err: any, data: EC2.DeleteNatGatewayResult|any) => void): Request;
      deleteNetworkAcl(params: EC2.DeleteNetworkAclRequest, callback?: (err: any, data: any) => void): Request;
      deleteNetworkAclEntry(params: EC2.DeleteNetworkAclEntryRequest, callback?: (err: any, data: any) => void): Request;
      deleteNetworkInterface(params: EC2.DeleteNetworkInterfaceRequest, callback?: (err: any, data: any) => void): Request;
      deletePlacementGroup(params: EC2.DeletePlacementGroupRequest, callback?: (err: any, data: any) => void): Request;
      deleteRoute(params: EC2.DeleteRouteRequest, callback?: (err: any, data: any) => void): Request;
      deleteRouteTable(params: EC2.DeleteRouteTableRequest, callback?: (err: any, data: any) => void): Request;
      deleteSecurityGroup(params: EC2.DeleteSecurityGroupRequest, callback?: (err: any, data: any) => void): Request;
      deleteSnapshot(params: EC2.DeleteSnapshotRequest, callback?: (err: any, data: any) => void): Request;
      deleteSpotDatafeedSubscription(params: EC2.DeleteSpotDatafeedSubscriptionRequest, callback?: (err: any, data: any) => void): Request;
      deleteSubnet(params: EC2.DeleteSubnetRequest, callback?: (err: any, data: any) => void): Request;
      deleteTags(params: EC2.DeleteTagsRequest, callback?: (err: any, data: any) => void): Request;
      deleteVolume(params: EC2.DeleteVolumeRequest, callback?: (err: any, data: any) => void): Request;
      deleteVpc(params: EC2.DeleteVpcRequest, callback?: (err: any, data: any) => void): Request;
      deleteVpcEndpoints(params: EC2.DeleteVpcEndpointsRequest, callback?: (err: any, data: EC2.DeleteVpcEndpointsResult|any) => void): Request;
      deleteVpcPeeringConnection(params: EC2.DeleteVpcPeeringConnectionRequest, callback?: (err: any, data: EC2.DeleteVpcPeeringConnectionResult|any) => void): Request;
      deleteVpnConnection(params: EC2.DeleteVpnConnectionRequest, callback?: (err: any, data: any) => void): Request;
      deleteVpnConnectionRoute(params: EC2.DeleteVpnConnectionRouteRequest, callback?: (err: any, data: any) => void): Request;
      deleteVpnGateway(params: EC2.DeleteVpnGatewayRequest, callback?: (err: any, data: any) => void): Request;
      deregisterImage(params: EC2.DeregisterImageRequest, callback?: (err: any, data: any) => void): Request;
      describeAccountAttributes(params: EC2.DescribeAccountAttributesRequest, callback?: (err: any, data: EC2.DescribeAccountAttributesResult|any) => void): Request;
      describeAddresses(params: EC2.DescribeAddressesRequest, callback?: (err: any, data: EC2.DescribeAddressesResult|any) => void): Request;
      describeAvailabilityZones(params: EC2.DescribeAvailabilityZonesRequest, callback?: (err: any, data: EC2.DescribeAvailabilityZonesResult|any) => void): Request;
      describeBundleTasks(params: EC2.DescribeBundleTasksRequest, callback?: (err: any, data: EC2.DescribeBundleTasksResult|any) => void): Request;
      describeClassicLinkInstances(params: EC2.DescribeClassicLinkInstancesRequest, callback?: (err: any, data: EC2.DescribeClassicLinkInstancesResult|any) => void): Request;
      describeConversionTasks(params: EC2.DescribeConversionTasksRequest, callback?: (err: any, data: EC2.DescribeConversionTasksResult|any) => void): Request;
      describeCustomerGateways(params: EC2.DescribeCustomerGatewaysRequest, callback?: (err: any, data: EC2.DescribeCustomerGatewaysResult|any) => void): Request;
      describeDhcpOptions(params: EC2.DescribeDhcpOptionsRequest, callback?: (err: any, data: EC2.DescribeDhcpOptionsResult|any) => void): Request;
      describeExportTasks(params: EC2.DescribeExportTasksRequest, callback?: (err: any, data: EC2.DescribeExportTasksResult|any) => void): Request;
      describeFlowLogs(params: EC2.DescribeFlowLogsRequest, callback?: (err: any, data: EC2.DescribeFlowLogsResult|any) => void): Request;
      describeHosts(params: EC2.DescribeHostsRequest, callback?: (err: any, data: EC2.DescribeHostsResult|any) => void): Request;
      describeIdFormat(params: EC2.DescribeIdFormatRequest, callback?: (err: any, data: EC2.DescribeIdFormatResult|any) => void): Request;
      describeImageAttribute(params: EC2.DescribeImageAttributeRequest, callback?: (err: any, data: EC2.ImageAttribute|any) => void): Request;
      describeImages(params: EC2.DescribeImagesRequest, callback?: (err: any, data: EC2.DescribeImagesResult|any) => void): Request;
      describeImportImageTasks(params: EC2.DescribeImportImageTasksRequest, callback?: (err: any, data: EC2.DescribeImportImageTasksResult|any) => void): Request;
      describeImportSnapshotTasks(params: EC2.DescribeImportSnapshotTasksRequest, callback?: (err: any, data: EC2.DescribeImportSnapshotTasksResult|any) => void): Request;
      describeInstanceAttribute(params: EC2.DescribeInstanceAttributeRequest, callback?: (err: any, data: EC2.InstanceAttribute|any) => void): Request;
      describeInstanceStatus(params: EC2.DescribeInstanceStatusRequest, callback?: (err: any, data: EC2.DescribeInstanceStatusResult|any) => void): Request;
      describeInstances(params: EC2.DescribeInstancesRequest, callback?: (err: any, data: EC2.DescribeInstancesResult|any) => void): Request;
      describeInternetGateways(params: EC2.DescribeInternetGatewaysRequest, callback?: (err: any, data: EC2.DescribeInternetGatewaysResult|any) => void): Request;
      describeKeyPairs(params: EC2.DescribeKeyPairsRequest, callback?: (err: any, data: EC2.DescribeKeyPairsResult|any) => void): Request;
      describeMovingAddresses(params: EC2.DescribeMovingAddressesRequest, callback?: (err: any, data: EC2.DescribeMovingAddressesResult|any) => void): Request;
      describeNatGateways(params: EC2.DescribeNatGatewaysRequest, callback?: (err: any, data: EC2.DescribeNatGatewaysResult|any) => void): Request;
      describeNetworkAcls(params: EC2.DescribeNetworkAclsRequest, callback?: (err: any, data: EC2.DescribeNetworkAclsResult|any) => void): Request;
      describeNetworkInterfaceAttribute(params: EC2.DescribeNetworkInterfaceAttributeRequest, callback?: (err: any, data: EC2.DescribeNetworkInterfaceAttributeResult|any) => void): Request;
      describeNetworkInterfaces(params: EC2.DescribeNetworkInterfacesRequest, callback?: (err: any, data: EC2.DescribeNetworkInterfacesResult|any) => void): Request;
      describePlacementGroups(params: EC2.DescribePlacementGroupsRequest, callback?: (err: any, data: EC2.DescribePlacementGroupsResult|any) => void): Request;
      describePrefixLists(params: EC2.DescribePrefixListsRequest, callback?: (err: any, data: EC2.DescribePrefixListsResult|any) => void): Request;
      describeRegions(params: EC2.DescribeRegionsRequest, callback?: (err: any, data: EC2.DescribeRegionsResult|any) => void): Request;
      describeReservedInstances(params: EC2.DescribeReservedInstancesRequest, callback?: (err: any, data: EC2.DescribeReservedInstancesResult|any) => void): Request;
      describeReservedInstancesListings(params: EC2.DescribeReservedInstancesListingsRequest, callback?: (err: any, data: EC2.DescribeReservedInstancesListingsResult|any) => void): Request;
      describeReservedInstancesModifications(params: EC2.DescribeReservedInstancesModificationsRequest, callback?: (err: any, data: EC2.DescribeReservedInstancesModificationsResult|any) => void): Request;
      describeReservedInstancesOfferings(params: EC2.DescribeReservedInstancesOfferingsRequest, callback?: (err: any, data: EC2.DescribeReservedInstancesOfferingsResult|any) => void): Request;
      describeRouteTables(params: EC2.DescribeRouteTablesRequest, callback?: (err: any, data: EC2.DescribeRouteTablesResult|any) => void): Request;
      describeScheduledInstanceAvailability(params: EC2.DescribeScheduledInstanceAvailabilityRequest, callback?: (err: any, data: EC2.DescribeScheduledInstanceAvailabilityResult|any) => void): Request;
      describeScheduledInstances(params: EC2.DescribeScheduledInstancesRequest, callback?: (err: any, data: EC2.DescribeScheduledInstancesResult|any) => void): Request;
      describeSecurityGroups(params: EC2.DescribeSecurityGroupsRequest, callback?: (err: any, data: EC2.DescribeSecurityGroupsResult|any) => void): Request;
      describeSnapshotAttribute(params: EC2.DescribeSnapshotAttributeRequest, callback?: (err: any, data: EC2.DescribeSnapshotAttributeResult|any) => void): Request;
      describeSnapshots(params: EC2.DescribeSnapshotsRequest, callback?: (err: any, data: EC2.DescribeSnapshotsResult|any) => void): Request;
      describeSpotDatafeedSubscription(params: EC2.DescribeSpotDatafeedSubscriptionRequest, callback?: (err: any, data: EC2.DescribeSpotDatafeedSubscriptionResult|any) => void): Request;
      describeSpotFleetInstances(params: EC2.DescribeSpotFleetInstancesRequest, callback?: (err: any, data: EC2.DescribeSpotFleetInstancesResponse|any) => void): Request;
      describeSpotFleetRequestHistory(params: EC2.DescribeSpotFleetRequestHistoryRequest, callback?: (err: any, data: EC2.DescribeSpotFleetRequestHistoryResponse|any) => void): Request;
      describeSpotFleetRequests(params: EC2.DescribeSpotFleetRequestsRequest, callback?: (err: any, data: EC2.DescribeSpotFleetRequestsResponse|any) => void): Request;
      describeSpotInstanceRequests(params: EC2.DescribeSpotInstanceRequestsRequest, callback?: (err: any, data: EC2.DescribeSpotInstanceRequestsResult|any) => void): Request;
      describeSpotPriceHistory(params: EC2.DescribeSpotPriceHistoryRequest, callback?: (err: any, data: EC2.DescribeSpotPriceHistoryResult|any) => void): Request;
      describeSubnets(params: EC2.DescribeSubnetsRequest, callback?: (err: any, data: EC2.DescribeSubnetsResult|any) => void): Request;
      describeTags(params: EC2.DescribeTagsRequest, callback?: (err: any, data: EC2.DescribeTagsResult|any) => void): Request;
      describeVolumeAttribute(params: EC2.DescribeVolumeAttributeRequest, callback?: (err: any, data: EC2.DescribeVolumeAttributeResult|any) => void): Request;
      describeVolumeStatus(params: EC2.DescribeVolumeStatusRequest, callback?: (err: any, data: EC2.DescribeVolumeStatusResult|any) => void): Request;
      describeVolumes(params: EC2.DescribeVolumesRequest, callback?: (err: any, data: EC2.DescribeVolumesResult|any) => void): Request;
      describeVpcAttribute(params: EC2.DescribeVpcAttributeRequest, callback?: (err: any, data: EC2.DescribeVpcAttributeResult|any) => void): Request;
      describeVpcClassicLink(params: EC2.DescribeVpcClassicLinkRequest, callback?: (err: any, data: EC2.DescribeVpcClassicLinkResult|any) => void): Request;
      describeVpcClassicLinkDnsSupport(params: EC2.DescribeVpcClassicLinkDnsSupportRequest, callback?: (err: any, data: EC2.DescribeVpcClassicLinkDnsSupportResult|any) => void): Request;
      describeVpcEndpointServices(params: EC2.DescribeVpcEndpointServicesRequest, callback?: (err: any, data: EC2.DescribeVpcEndpointServicesResult|any) => void): Request;
      describeVpcEndpoints(params: EC2.DescribeVpcEndpointsRequest, callback?: (err: any, data: EC2.DescribeVpcEndpointsResult|any) => void): Request;
      describeVpcPeeringConnections(params: EC2.DescribeVpcPeeringConnectionsRequest, callback?: (err: any, data: EC2.DescribeVpcPeeringConnectionsResult|any) => void): Request;
      describeVpcs(params: EC2.DescribeVpcsRequest, callback?: (err: any, data: EC2.DescribeVpcsResult|any) => void): Request;
      describeVpnConnections(params: EC2.DescribeVpnConnectionsRequest, callback?: (err: any, data: EC2.DescribeVpnConnectionsResult|any) => void): Request;
      describeVpnGateways(params: EC2.DescribeVpnGatewaysRequest, callback?: (err: any, data: EC2.DescribeVpnGatewaysResult|any) => void): Request;
      detachClassicLinkVpc(params: EC2.DetachClassicLinkVpcRequest, callback?: (err: any, data: EC2.DetachClassicLinkVpcResult|any) => void): Request;
      detachInternetGateway(params: EC2.DetachInternetGatewayRequest, callback?: (err: any, data: any) => void): Request;
      detachNetworkInterface(params: EC2.DetachNetworkInterfaceRequest, callback?: (err: any, data: any) => void): Request;
      detachVolume(params: EC2.DetachVolumeRequest, callback?: (err: any, data: EC2.VolumeAttachment|any) => void): Request;
      detachVpnGateway(params: EC2.DetachVpnGatewayRequest, callback?: (err: any, data: any) => void): Request;
      disableVgwRoutePropagation(params: EC2.DisableVgwRoutePropagationRequest, callback?: (err: any, data: any) => void): Request;
      disableVpcClassicLink(params: EC2.DisableVpcClassicLinkRequest, callback?: (err: any, data: EC2.DisableVpcClassicLinkResult|any) => void): Request;
      disableVpcClassicLinkDnsSupport(params: EC2.DisableVpcClassicLinkDnsSupportRequest, callback?: (err: any, data: EC2.DisableVpcClassicLinkDnsSupportResult|any) => void): Request;
      disassociateAddress(params: EC2.DisassociateAddressRequest, callback?: (err: any, data: any) => void): Request;
      disassociateRouteTable(params: EC2.DisassociateRouteTableRequest, callback?: (err: any, data: any) => void): Request;
      enableVgwRoutePropagation(params: EC2.EnableVgwRoutePropagationRequest, callback?: (err: any, data: any) => void): Request;
      enableVolumeIO(params: EC2.EnableVolumeIORequest, callback?: (err: any, data: any) => void): Request;
      enableVpcClassicLink(params: EC2.EnableVpcClassicLinkRequest, callback?: (err: any, data: EC2.EnableVpcClassicLinkResult|any) => void): Request;
      enableVpcClassicLinkDnsSupport(params: EC2.EnableVpcClassicLinkDnsSupportRequest, callback?: (err: any, data: EC2.EnableVpcClassicLinkDnsSupportResult|any) => void): Request;
      getConsoleOutput(params: EC2.GetConsoleOutputRequest, callback?: (err: any, data: EC2.GetConsoleOutputResult|any) => void): Request;
      getPasswordData(params: EC2.GetPasswordDataRequest, callback?: (err: any, data: EC2.GetPasswordDataResult|any) => void): Request;
      importImage(params: EC2.ImportImageRequest, callback?: (err: any, data: EC2.ImportImageResult|any) => void): Request;
      importInstance(params: EC2.ImportInstanceRequest, callback?: (err: any, data: EC2.ImportInstanceResult|any) => void): Request;
      importKeyPair(params: EC2.ImportKeyPairRequest, callback?: (err: any, data: EC2.ImportKeyPairResult|any) => void): Request;
      importSnapshot(params: EC2.ImportSnapshotRequest, callback?: (err: any, data: EC2.ImportSnapshotResult|any) => void): Request;
      importVolume(params: EC2.ImportVolumeRequest, callback?: (err: any, data: EC2.ImportVolumeResult|any) => void): Request;
      modifyHosts(params: EC2.ModifyHostsRequest, callback?: (err: any, data: EC2.ModifyHostsResult|any) => void): Request;
      modifyIdFormat(params: EC2.ModifyIdFormatRequest, callback?: (err: any, data: any) => void): Request;
      modifyImageAttribute(params: EC2.ModifyImageAttributeRequest, callback?: (err: any, data: any) => void): Request;
      modifyInstanceAttribute(params: EC2.ModifyInstanceAttributeRequest, callback?: (err: any, data: any) => void): Request;
      modifyInstancePlacement(params: EC2.ModifyInstancePlacementRequest, callback?: (err: any, data: EC2.ModifyInstancePlacementResult|any) => void): Request;
      modifyNetworkInterfaceAttribute(params: EC2.ModifyNetworkInterfaceAttributeRequest, callback?: (err: any, data: any) => void): Request;
      modifyReservedInstances(params: EC2.ModifyReservedInstancesRequest, callback?: (err: any, data: EC2.ModifyReservedInstancesResult|any) => void): Request;
      modifySnapshotAttribute(params: EC2.ModifySnapshotAttributeRequest, callback?: (err: any, data: any) => void): Request;
      modifySpotFleetRequest(params: EC2.ModifySpotFleetRequestRequest, callback?: (err: any, data: EC2.ModifySpotFleetRequestResponse|any) => void): Request;
      modifySubnetAttribute(params: EC2.ModifySubnetAttributeRequest, callback?: (err: any, data: any) => void): Request;
      modifyVolumeAttribute(params: EC2.ModifyVolumeAttributeRequest, callback?: (err: any, data: any) => void): Request;
      modifyVpcAttribute(params: EC2.ModifyVpcAttributeRequest, callback?: (err: any, data: any) => void): Request;
      modifyVpcEndpoint(params: EC2.ModifyVpcEndpointRequest, callback?: (err: any, data: EC2.ModifyVpcEndpointResult|any) => void): Request;
      monitorInstances(params: EC2.MonitorInstancesRequest, callback?: (err: any, data: EC2.MonitorInstancesResult|any) => void): Request;
      moveAddressToVpc(params: EC2.MoveAddressToVpcRequest, callback?: (err: any, data: EC2.MoveAddressToVpcResult|any) => void): Request;
      purchaseReservedInstancesOffering(params: EC2.PurchaseReservedInstancesOfferingRequest, callback?: (err: any, data: EC2.PurchaseReservedInstancesOfferingResult|any) => void): Request;
      purchaseScheduledInstances(params: EC2.PurchaseScheduledInstancesRequest, callback?: (err: any, data: EC2.PurchaseScheduledInstancesResult|any) => void): Request;
      rebootInstances(params: EC2.RebootInstancesRequest, callback?: (err: any, data: any) => void): Request;
      registerImage(params: EC2.RegisterImageRequest, callback?: (err: any, data: EC2.RegisterImageResult|any) => void): Request;
      rejectVpcPeeringConnection(params: EC2.RejectVpcPeeringConnectionRequest, callback?: (err: any, data: EC2.RejectVpcPeeringConnectionResult|any) => void): Request;
      releaseAddress(params: EC2.ReleaseAddressRequest, callback?: (err: any, data: any) => void): Request;
      releaseHosts(params: EC2.ReleaseHostsRequest, callback?: (err: any, data: EC2.ReleaseHostsResult|any) => void): Request;
      replaceNetworkAclAssociation(params: EC2.ReplaceNetworkAclAssociationRequest, callback?: (err: any, data: EC2.ReplaceNetworkAclAssociationResult|any) => void): Request;
      replaceNetworkAclEntry(params: EC2.ReplaceNetworkAclEntryRequest, callback?: (err: any, data: any) => void): Request;
      replaceRoute(params: EC2.ReplaceRouteRequest, callback?: (err: any, data: any) => void): Request;
      replaceRouteTableAssociation(params: EC2.ReplaceRouteTableAssociationRequest, callback?: (err: any, data: EC2.ReplaceRouteTableAssociationResult|any) => void): Request;
      reportInstanceStatus(params: EC2.ReportInstanceStatusRequest, callback?: (err: any, data: any) => void): Request;
      requestSpotFleet(params: EC2.RequestSpotFleetRequest, callback?: (err: any, data: EC2.RequestSpotFleetResponse|any) => void): Request;
      requestSpotInstances(params: EC2.RequestSpotInstancesRequest, callback?: (err: any, data: EC2.RequestSpotInstancesResult|any) => void): Request;
      resetImageAttribute(params: EC2.ResetImageAttributeRequest, callback?: (err: any, data: any) => void): Request;
      resetInstanceAttribute(params: EC2.ResetInstanceAttributeRequest, callback?: (err: any, data: any) => void): Request;
      resetNetworkInterfaceAttribute(params: EC2.ResetNetworkInterfaceAttributeRequest, callback?: (err: any, data: any) => void): Request;
      resetSnapshotAttribute(params: EC2.ResetSnapshotAttributeRequest, callback?: (err: any, data: any) => void): Request;
      restoreAddressToClassic(params: EC2.RestoreAddressToClassicRequest, callback?: (err: any, data: EC2.RestoreAddressToClassicResult|any) => void): Request;
      revokeSecurityGroupEgress(params: EC2.RevokeSecurityGroupEgressRequest, callback?: (err: any, data: any) => void): Request;
      revokeSecurityGroupIngress(params: EC2.RevokeSecurityGroupIngressRequest, callback?: (err: any, data: any) => void): Request;
      runInstances(params: EC2.RunInstancesRequest, callback?: (err: any, data: EC2.Reservation|any) => void): Request;
      runScheduledInstances(params: EC2.RunScheduledInstancesRequest, callback?: (err: any, data: EC2.RunScheduledInstancesResult|any) => void): Request;
      startInstances(params: EC2.StartInstancesRequest, callback?: (err: any, data: EC2.StartInstancesResult|any) => void): Request;
      stopInstances(params: EC2.StopInstancesRequest, callback?: (err: any, data: EC2.StopInstancesResult|any) => void): Request;
      terminateInstances(params: EC2.TerminateInstancesRequest, callback?: (err: any, data: EC2.TerminateInstancesResult|any) => void): Request;
      unassignPrivateIpAddresses(params: EC2.UnassignPrivateIpAddressesRequest, callback?: (err: any, data: any) => void): Request;
      unmonitorInstances(params: EC2.UnmonitorInstancesRequest, callback?: (err: any, data: EC2.UnmonitorInstancesResult|any) => void): Request;

      // Found on JS Sources - Sorry for the inconvenience :)
      setupRequestListeners(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      buildCopySnapshotPresignedUrl(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      extractError(...args: any[]): any
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
        export type Blob = any;    // type: blob
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
        export type Float = number;
        export type FlowLogSet = FlowLog[];
        export type FlowLogsResourceType = string;
        export type GatewayType = string;
        export type GroupIdStringList = String[];
        export type GroupIdentifierList = GroupIdentifier[];
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
        export type KeyNameStringList = String[];
        export type KeyPairList = KeyPairInfo[];
        export type LaunchPermissionList = LaunchPermission[];
        export type LaunchSpecsList = SpotFleetLaunchSpecification[];    // min: 1
        export type ListingState = string;
        export type ListingStatus = string;
        export type Long = number;
        export type MaxResults = number;    // max: 255, min: 5
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
        export type NextToken = string;    // max: 1024, min: 1
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
        export interface AccountAttributeValue {
            AttributeValue?: String;
        }
        export interface ActiveInstance {
            InstanceType?: String;
            InstanceId?: String;
            SpotInstanceRequestId?: String;
        }
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
        export interface AllocateAddressRequest {
            DryRun?: Boolean;
            Domain?: DomainType;
        }
        export interface AllocateAddressResult {
            PublicIp?: String;
            Domain?: DomainType;
            AllocationId?: String;
        }
        export interface AllocateHostsRequest {
            AutoPlacement?: AutoPlacement;
            ClientToken?: String;
            InstanceType: String;
            Quantity: Integer;
            AvailabilityZone: String;
        }
        export interface AllocateHostsResult {
            HostIds?: ResponseHostIdList;
        }
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
        export interface AvailabilityZoneMessage {
            Message?: String;
        }
        export interface AvailableCapacity {
            AvailableInstanceCapacity?: AvailableInstanceCapacityList;
            AvailableVCpus?: Integer;
        }
        export interface BlobAttributeValue {
            Value?: Blob;
        }
        export interface BlockDeviceMapping {
            VirtualName?: String;
            DeviceName?: String;
            Ebs?: EbsBlockDevice;
            NoDevice?: String;
        }
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
        export interface ClassicLinkDnsSupport {
            VpcId?: String;
            ClassicLinkDnsSupported?: Boolean;
        }
        export interface ClassicLinkInstance {
            InstanceId?: String;
            VpcId?: String;
            Groups?: GroupIdentifierList;
            Tags?: TagList;
        }
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
            Return?: Boolean;
        }
        export interface ConversionTask {
            ConversionTaskId: String;
            ExpirationTime?: String;
            ImportInstance?: ImportInstanceTaskDetails;
            ImportVolume?: ImportVolumeTaskDetails;
            State: ConversionTaskState;
            StatusMessage?: String;
            Tags?: TagList;
        }
        export interface CopyImageRequest {
            DryRun?: Boolean;
            SourceRegion: String;
            SourceImageId: String;
            Name: String;
            Description?: String;
            ClientToken?: String;
            Encrypted?: Boolean;
            KmsKeyId?: String;
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
            Encrypted?: Boolean;
            KmsKeyId?: String;
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
        export interface CreateFlowLogsRequest {
            ResourceIds: ValueStringList;
            ResourceType: FlowLogsResourceType;
            TrafficType: TrafficType;
            LogGroupName: String;
            DeliverLogsPermissionArn: String;
            ClientToken?: String;
        }
        export interface CreateFlowLogsResult {
            FlowLogIds?: ValueStringList;
            ClientToken?: String;
            Unsuccessful?: UnsuccessfulItemSet;
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
        export interface CreateNatGatewayRequest {
            SubnetId: String;
            AllocationId: String;
            ClientToken?: String;
        }
        export interface CreateNatGatewayResult {
            NatGateway?: NatGateway;
            ClientToken?: String;
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
            NatGatewayId?: String;
        }
        export interface CreateRouteResult {
            Return?: Boolean;
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
        export interface CustomerGateway {
            CustomerGatewayId?: String;
            State?: String;
            Type?: String;
            IpAddress?: String;
            BgpAsn?: String;
            Tags?: TagList;
        }
        export interface DeleteCustomerGatewayRequest {
            DryRun?: Boolean;
            CustomerGatewayId: String;
        }
        export interface DeleteDhcpOptionsRequest {
            DryRun?: Boolean;
            DhcpOptionsId: String;
        }
        export interface DeleteFlowLogsRequest {
            FlowLogIds: ValueStringList;
        }
        export interface DeleteFlowLogsResult {
            Unsuccessful?: UnsuccessfulItemSet;
        }
        export interface DeleteInternetGatewayRequest {
            DryRun?: Boolean;
            InternetGatewayId: String;
        }
        export interface DeleteKeyPairRequest {
            DryRun?: Boolean;
            KeyName: String;
        }
        export interface DeleteNatGatewayRequest {
            NatGatewayId: String;
        }
        export interface DeleteNatGatewayResult {
            NatGatewayId?: String;
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
        export interface DescribeFlowLogsRequest {
            FlowLogIds?: ValueStringList;
            Filter?: FilterList;
            NextToken?: String;
            MaxResults?: Integer;
        }
        export interface DescribeFlowLogsResult {
            FlowLogs?: FlowLogSet;
            NextToken?: String;
        }
        export interface DescribeHostsRequest {
            HostIds?: RequestHostIdList;
            NextToken?: String;
            MaxResults?: Integer;
            Filter?: FilterList;
        }
        export interface DescribeHostsResult {
            Hosts?: HostList;
            NextToken?: String;
        }
        export interface DescribeIdFormatRequest {
            Resource?: String;
        }
        export interface DescribeIdFormatResult {
            Statuses?: IdFormatList;
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
        export interface DescribeNatGatewaysRequest {
            NatGatewayIds?: ValueStringList;
            Filter?: FilterList;
            MaxResults?: Integer;
            NextToken?: String;
        }
        export interface DescribeNatGatewaysResult {
            NatGateways?: NatGatewayList;
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
        export interface DescribeScheduledInstanceAvailabilityRequest {
            DryRun?: Boolean;
            Recurrence: ScheduledInstanceRecurrenceRequest;
            FirstSlotStartTimeRange: SlotDateTimeRangeRequest;
            MinSlotDurationInHours?: Integer;
            MaxSlotDurationInHours?: Integer;
            NextToken?: String;
            MaxResults?: Integer;
            Filters?: FilterList;
        }
        export interface DescribeScheduledInstanceAvailabilityResult {
            NextToken?: String;
            ScheduledInstanceAvailabilitySet?: ScheduledInstanceAvailabilitySet;
        }
        export interface DescribeScheduledInstancesRequest {
            DryRun?: Boolean;
            ScheduledInstanceIds?: ScheduledInstanceIdRequestSet;
            SlotStartTimeRange?: SlotStartTimeRangeRequest;
            NextToken?: String;
            MaxResults?: Integer;
            Filters?: FilterList;
        }
        export interface DescribeScheduledInstancesResult {
            NextToken?: String;
            ScheduledInstanceSet?: ScheduledInstanceSet;
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
            Attribute: VpcAttributeName;
        }
        export interface DescribeVpcAttributeResult {
            VpcId?: String;
            EnableDnsSupport?: AttributeBooleanValue;
            EnableDnsHostnames?: AttributeBooleanValue;
        }
        export interface DescribeVpcClassicLinkDnsSupportRequest {
            VpcIds?: VpcClassicLinkIdList;
            MaxResults?: MaxResults;
            NextToken?: NextToken;
        }
        export interface DescribeVpcClassicLinkDnsSupportResult {
            Vpcs?: ClassicLinkDnsSupportList;
            NextToken?: NextToken;
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
        export interface DhcpConfiguration {
            Key?: String;
            Values?: DhcpConfigurationValueList;
        }
        export interface DhcpOptions {
            DhcpOptionsId?: String;
            DhcpConfigurations?: DhcpConfigurationList;
            Tags?: TagList;
        }
        export interface DisableVgwRoutePropagationRequest {
            RouteTableId: String;
            GatewayId: String;
        }
        export interface DisableVpcClassicLinkDnsSupportRequest {
            VpcId?: String;
        }
        export interface DisableVpcClassicLinkDnsSupportResult {
            Return?: Boolean;
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
        export interface DiskImageVolumeDescription {
            Size?: Long;
            Id: String;
        }
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
        export interface EnableVpcClassicLinkDnsSupportRequest {
            VpcId?: String;
        }
        export interface EnableVpcClassicLinkDnsSupportResult {
            Return?: Boolean;
        }
        export interface EnableVpcClassicLinkRequest {
            DryRun?: Boolean;
            VpcId: String;
        }
        export interface EnableVpcClassicLinkResult {
            Return?: Boolean;
        }
        export interface EventInformation {
            InstanceId?: String;
            EventSubType?: String;
            EventDescription?: String;
        }
        export interface ExportTask {
            ExportTaskId?: String;
            Description?: String;
            State?: ExportTaskState;
            StatusMessage?: String;
            InstanceExportDetails?: InstanceExportDetails;
            ExportToS3Task?: ExportToS3Task;
        }
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
        export interface FlowLog {
            CreationTime?: DateTime;
            FlowLogId?: String;
            FlowLogStatus?: String;
            ResourceId?: String;
            TrafficType?: TrafficType;
            LogGroupName?: String;
            DeliverLogsStatus?: String;
            DeliverLogsErrorMessage?: String;
            DeliverLogsPermissionArn?: String;
        }
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
        export interface GroupIdentifier {
            GroupName?: String;
            GroupId?: String;
        }
        export interface HistoryRecord {
            Timestamp: DateTime;
            EventType: EventType;
            EventInformation: EventInformation;
        }
        export interface Host {
            HostId?: String;
            AutoPlacement?: AutoPlacement;
            HostReservationId?: String;
            ClientToken?: String;
            HostProperties?: HostProperties;
            State?: AllocationState;
            AvailabilityZone?: String;
            Instances?: HostInstanceList;
            AvailableCapacity?: AvailableCapacity;
        }
        export interface HostInstance {
            InstanceId?: String;
            InstanceType?: String;
        }
        export interface HostProperties {
            Sockets?: Integer;
            Cores?: Integer;
            TotalVCpus?: Integer;
            InstanceType?: String;
        }
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
        export interface IdFormat {
            Resource?: String;
            UseLongIds?: Boolean;
            Deadline?: DateTime;
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
        export interface ImageDiskContainer {
            Description?: String;
            Format?: String;
            Url?: String;
            UserBucket?: UserBucket;
            DeviceName?: String;
            SnapshotId?: String;
        }
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
        export interface InstanceBlockDeviceMapping {
            DeviceName?: String;
            Ebs?: EbsInstanceBlockDevice;
        }
        export interface InstanceBlockDeviceMappingSpecification {
            DeviceName?: String;
            Ebs?: EbsInstanceBlockDeviceSpecification;
            VirtualName?: String;
            NoDevice?: String;
        }
        export interface InstanceCapacity {
            InstanceType?: String;
            AvailableCapacity?: Integer;
            TotalCapacity?: Integer;
        }
        export interface InstanceCount {
            State?: ListingState;
            InstanceCount?: Integer;
        }
        export interface InstanceExportDetails {
            InstanceId?: String;
            TargetEnvironment?: ExportEnvironment;
        }
        export interface InstanceMonitoring {
            InstanceId?: String;
            Monitoring?: Monitoring;
        }
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
        export interface InstancePrivateIpAddress {
            PrivateIpAddress?: String;
            PrivateDnsName?: String;
            Primary?: Boolean;
            Association?: InstanceNetworkInterfaceAssociation;
        }
        export interface InstanceState {
            Code?: Integer;
            Name?: InstanceStateName;
        }
        export interface InstanceStateChange {
            InstanceId?: String;
            CurrentState?: InstanceState;
            PreviousState?: InstanceState;
        }
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
        export interface InstanceStatusEvent {
            Code?: EventCode;
            Description?: String;
            NotBefore?: DateTime;
            NotAfter?: DateTime;
        }
        export interface InstanceStatusSummary {
            Status?: SummaryStatus;
            Details?: InstanceStatusDetailsList;
        }
        export interface InternetGateway {
            InternetGatewayId?: String;
            Attachments?: InternetGatewayAttachmentList;
            Tags?: TagList;
        }
        export interface InternetGatewayAttachment {
            VpcId?: String;
            State?: AttachmentStatus;
        }
        export interface IpPermission {
            IpProtocol?: String;
            FromPort?: Integer;
            ToPort?: Integer;
            UserIdGroupPairs?: UserIdGroupPairList;
            IpRanges?: IpRangeList;
            PrefixListIds?: PrefixListIdList;
        }
        export interface IpRange {
            CidrIp?: String;
        }
        export interface KeyPair {
            KeyName?: String;
            KeyFingerprint?: String;
            KeyMaterial?: String;
        }
        export interface KeyPairInfo {
            KeyName?: String;
            KeyFingerprint?: String;
        }
        export interface LaunchPermission {
            UserId?: String;
            Group?: PermissionGroup;
        }
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
        export interface ModifyHostsRequest {
            HostIds: RequestHostIdList;
            AutoPlacement: AutoPlacement;
        }
        export interface ModifyHostsResult {
            Successful?: ResponseHostIdList;
            Unsuccessful?: UnsuccessfulItemList;
        }
        export interface ModifyIdFormatRequest {
            Resource: String;
            UseLongIds: Boolean;
        }
        export interface ModifyImageAttributeRequest {
            DryRun?: Boolean;
            ImageId: String;
            Attribute?: String;
            OperationType?: OperationType;
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
        export interface ModifyInstancePlacementRequest {
            InstanceId: String;
            Tenancy?: HostTenancy;
            Affinity?: Affinity;
            HostId?: String;
        }
        export interface ModifyInstancePlacementResult {
            Return?: Boolean;
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
            OperationType?: OperationType;
            UserIds?: UserIdStringList;
            GroupNames?: GroupNameStringList;
            CreateVolumePermission?: CreateVolumePermissionModifications;
        }
        export interface ModifySpotFleetRequestRequest {
            SpotFleetRequestId: String;
            TargetCapacity?: Integer;
            ExcessCapacityTerminationPolicy?: ExcessCapacityTerminationPolicy;
        }
        export interface ModifySpotFleetRequestResponse {
            Return?: Boolean;
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
        export interface MoveAddressToVpcRequest {
            DryRun?: Boolean;
            PublicIp: String;
        }
        export interface MoveAddressToVpcResult {
            AllocationId?: String;
            Status?: Status;
        }
        export interface MovingAddressStatus {
            PublicIp?: String;
            MoveStatus?: MoveStatus;
        }
        export interface NatGateway {
            VpcId?: String;
            SubnetId?: String;
            NatGatewayId?: String;
            CreateTime?: DateTime;
            DeleteTime?: DateTime;
            NatGatewayAddresses?: NatGatewayAddressList;
            State?: NatGatewayState;
            FailureCode?: String;
            FailureMessage?: String;
        }
        export interface NatGatewayAddress {
            PublicIp?: String;
            AllocationId?: String;
            PrivateIp?: String;
            NetworkInterfaceId?: String;
        }
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
        export interface NetworkAclEntry {
            RuleNumber?: Integer;
            Protocol?: String;
            RuleAction?: RuleAction;
            Egress?: Boolean;
            CidrBlock?: String;
            IcmpTypeCode?: IcmpTypeCode;
            PortRange?: PortRange;
        }
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
            InterfaceType?: NetworkInterfaceType;
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
        export interface NetworkInterfacePrivateIpAddress {
            PrivateIpAddress?: String;
            PrivateDnsName?: String;
            Primary?: Boolean;
            Association?: NetworkInterfaceAssociation;
        }
        export interface NewDhcpConfiguration {
            Key?: String;
            Values?: ValueStringList;
        }
        export interface Placement {
            AvailabilityZone?: String;
            GroupName?: String;
            Tenancy?: Tenancy;
            HostId?: String;
            Affinity?: String;
        }
        export interface PlacementGroup {
            GroupName?: String;
            Strategy?: PlacementStrategy;
            State?: PlacementGroupState;
        }
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
        export interface PriceSchedule {
            Term?: Long;
            Price?: Double;
            CurrencyCode?: CurrencyCodeValues;
            Active?: Boolean;
        }
        export interface PriceScheduleSpecification {
            Term?: Long;
            Price?: Double;
            CurrencyCode?: CurrencyCodeValues;
        }
        export interface PricingDetail {
            Price?: Double;
            Count?: Integer;
        }
        export interface PrivateIpAddressSpecification {
            PrivateIpAddress: String;
            Primary?: Boolean;
        }
        export interface ProductCode {
            ProductCodeId?: String;
            ProductCodeType?: ProductCodeValues;
        }
        export interface PropagatingVgw {
            GatewayId?: String;
        }
        export interface PurchaseRequest {
            PurchaseToken?: String;
            InstanceCount?: Integer;
        }
        export interface PurchaseReservedInstancesOfferingRequest {
            DryRun?: Boolean;
            ReservedInstancesOfferingId: String;
            InstanceCount: Integer;
            LimitPrice?: ReservedInstanceLimitPrice;
        }
        export interface PurchaseReservedInstancesOfferingResult {
            ReservedInstancesId?: String;
        }
        export interface PurchaseScheduledInstancesRequest {
            DryRun?: Boolean;
            ClientToken?: String;
            PurchaseRequests: PurchaseRequestSet;
        }
        export interface PurchaseScheduledInstancesResult {
            ScheduledInstanceSet?: PurchasedScheduledInstanceSet;
        }
        export interface RebootInstancesRequest {
            DryRun?: Boolean;
            InstanceIds: InstanceIdStringList;
        }
        export interface RecurringCharge {
            Frequency?: RecurringChargeFrequency;
            Amount?: Double;
        }
        export interface Region {
            RegionName?: String;
            Endpoint?: String;
        }
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
        export interface ReleaseHostsRequest {
            HostIds: RequestHostIdList;
        }
        export interface ReleaseHostsResult {
            Successful?: ResponseHostIdList;
            Unsuccessful?: UnsuccessfulItemList;
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
            NatGatewayId?: String;
        }
        export interface ReplaceRouteTableAssociationRequest {
            DryRun?: Boolean;
            AssociationId: String;
            RouteTableId: String;
        }
        export interface ReplaceRouteTableAssociationResult {
            NewAssociationId?: String;
        }
        export interface ReportInstanceStatusRequest {
            DryRun?: Boolean;
            Instances: InstanceIdStringList;
            Status: ReportStatusType;
            StartTime?: DateTime;
            EndTime?: DateTime;
            ReasonCodes: ReasonCodesList;
            Description?: String;
        }
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
            BlockDurationMinutes?: Integer;
            LaunchSpecification?: RequestSpotLaunchSpecification;
        }
        export interface RequestSpotInstancesResult {
            SpotInstanceRequests?: SpotInstanceRequestList;
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
        export interface Reservation {
            ReservationId?: String;
            OwnerId?: String;
            RequesterId?: String;
            Groups?: GroupIdentifierList;
            Instances?: InstanceList;
        }
        export interface ReservedInstanceLimitPrice {
            Amount?: Double;
            CurrencyCode?: CurrencyCodeValues;
        }
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
        export interface ReservedInstancesId {
            ReservedInstancesId?: String;
        }
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
        export interface ReservedInstancesModificationResult {
            ReservedInstancesId?: String;
            TargetConfiguration?: ReservedInstancesConfiguration;
        }
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
            NatGatewayId?: String;
            State?: RouteState;
            Origin?: RouteOrigin;
        }
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
        export interface RunScheduledInstancesRequest {
            DryRun?: Boolean;
            ClientToken?: String;
            InstanceCount?: Integer;
            ScheduledInstanceId: String;
            LaunchSpecification: ScheduledInstancesLaunchSpecification;
        }
        export interface RunScheduledInstancesResult {
            InstanceIdSet?: InstanceIdSet;
        }
        export interface S3Storage {
            Bucket?: String;
            Prefix?: String;
            AWSAccessKeyId?: String;
            UploadPolicy?: Blob;
            UploadPolicySignature?: String;
        }
        export interface ScheduledInstance {
            ScheduledInstanceId?: String;
            InstanceType?: String;
            Platform?: String;
            NetworkPlatform?: String;
            AvailabilityZone?: String;
            SlotDurationInHours?: Integer;
            Recurrence?: ScheduledInstanceRecurrence;
            PreviousSlotEndTime?: DateTime;
            NextSlotStartTime?: DateTime;
            HourlyPrice?: String;
            TotalScheduledInstanceHours?: Integer;
            InstanceCount?: Integer;
            TermStartDate?: DateTime;
            TermEndDate?: DateTime;
            CreateDate?: DateTime;
        }
        export interface ScheduledInstanceAvailability {
            InstanceType?: String;
            Platform?: String;
            NetworkPlatform?: String;
            AvailabilityZone?: String;
            PurchaseToken?: String;
            SlotDurationInHours?: Integer;
            Recurrence?: ScheduledInstanceRecurrence;
            FirstSlotStartTime?: DateTime;
            HourlyPrice?: String;
            TotalScheduledInstanceHours?: Integer;
            AvailableInstanceCount?: Integer;
            MinTermDurationInDays?: Integer;
            MaxTermDurationInDays?: Integer;
        }
        export interface ScheduledInstanceRecurrence {
            Frequency?: String;
            Interval?: Integer;
            OccurrenceDaySet?: OccurrenceDaySet;
            OccurrenceRelativeToEnd?: Boolean;
            OccurrenceUnit?: String;
        }
        export interface ScheduledInstanceRecurrenceRequest {
            Frequency?: String;
            Interval?: Integer;
            OccurrenceDays?: OccurrenceDayRequestSet;
            OccurrenceRelativeToEnd?: Boolean;
            OccurrenceUnit?: String;
        }
        export interface ScheduledInstancesBlockDeviceMapping {
            DeviceName?: String;
            NoDevice?: String;
            VirtualName?: String;
            Ebs?: ScheduledInstancesEbs;
        }
        export interface ScheduledInstancesEbs {
            SnapshotId?: String;
            VolumeSize?: Integer;
            DeleteOnTermination?: Boolean;
            VolumeType?: String;
            Iops?: Integer;
            Encrypted?: Boolean;
        }
        export interface ScheduledInstancesIamInstanceProfile {
            Arn?: String;
            Name?: String;
        }
        export interface ScheduledInstancesLaunchSpecification {
            ImageId: String;
            KeyName?: String;
            SecurityGroupIds?: ScheduledInstancesSecurityGroupIdSet;
            UserData?: String;
            Placement?: ScheduledInstancesPlacement;
            KernelId?: String;
            InstanceType?: String;
            RamdiskId?: String;
            BlockDeviceMappings?: ScheduledInstancesBlockDeviceMappingSet;
            Monitoring?: ScheduledInstancesMonitoring;
            SubnetId?: String;
            NetworkInterfaces?: ScheduledInstancesNetworkInterfaceSet;
            IamInstanceProfile?: ScheduledInstancesIamInstanceProfile;
            EbsOptimized?: Boolean;
        }
        export interface ScheduledInstancesMonitoring {
            Enabled?: Boolean;
        }
        export interface ScheduledInstancesNetworkInterface {
            NetworkInterfaceId?: String;
            DeviceIndex?: Integer;
            SubnetId?: String;
            Description?: String;
            PrivateIpAddress?: String;
            PrivateIpAddressConfigs?: PrivateIpAddressConfigSet;
            SecondaryPrivateIpAddressCount?: Integer;
            AssociatePublicIpAddress?: Boolean;
            Groups?: ScheduledInstancesSecurityGroupIdSet;
            DeleteOnTermination?: Boolean;
        }
        export interface ScheduledInstancesPlacement {
            AvailabilityZone?: String;
            GroupName?: String;
        }
        export interface ScheduledInstancesPrivateIpAddressConfig {
            PrivateIpAddress?: String;
            Primary?: Boolean;
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
        export interface SlotDateTimeRangeRequest {
            EarliestTime: DateTime;
            LatestTime: DateTime;
        }
        export interface SlotStartTimeRangeRequest {
            EarliestTime?: DateTime;
            LatestTime?: DateTime;
        }
        export interface Snapshot {
            SnapshotId?: String;
            VolumeId?: String;
            State?: SnapshotState;
            StateMessage?: String;
            StartTime?: DateTime;
            Progress?: String;
            OwnerId?: String;
            Description?: String;
            VolumeSize?: Integer;
            OwnerAlias?: String;
            Tags?: TagList;
            Encrypted?: Boolean;
            KmsKeyId?: String;
            DataEncryptionKeyId?: String;
        }
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
        export interface SnapshotDiskContainer {
            Description?: String;
            Format?: String;
            Url?: String;
            UserBucket?: UserBucket;
        }
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
        export interface SpotFleetLaunchSpecification {
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
            Monitoring?: SpotFleetMonitoring;
            SubnetId?: String;
            NetworkInterfaces?: InstanceNetworkInterfaceSpecificationList;
            IamInstanceProfile?: IamInstanceProfileSpecification;
            EbsOptimized?: Boolean;
            WeightedCapacity?: Double;
            SpotPrice?: String;
        }
        export interface SpotFleetMonitoring {
            Enabled?: Boolean;
        }
        export interface SpotFleetRequestConfig {
            SpotFleetRequestId: String;
            SpotFleetRequestState: BatchState;
            SpotFleetRequestConfig: SpotFleetRequestConfigData;
            CreateTime: DateTime;
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
            ExcessCapacityTerminationPolicy?: ExcessCapacityTerminationPolicy;
            AllocationStrategy?: AllocationStrategy;
        }
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
            BlockDurationMinutes?: Integer;
            ActualBlockHourlyPrice?: String;
            Tags?: TagList;
            LaunchedAvailabilityZone?: String;
        }
        export interface SpotInstanceStateFault {
            Code?: String;
            Message?: String;
        }
        export interface SpotInstanceStatus {
            Code?: String;
            UpdateTime?: DateTime;
            Message?: String;
        }
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
        export interface StartInstancesRequest {
            InstanceIds: InstanceIdStringList;
            AdditionalInfo?: String;
            DryRun?: Boolean;
        }
        export interface StartInstancesResult {
            StartingInstances?: InstanceStateChangeList;
        }
        export interface StateReason {
            Code?: String;
            Message?: String;
        }
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
            Error: UnsuccessfulItemError;
            ResourceId?: String;
        }
        export interface UnsuccessfulItemError {
            Code: String;
            Message: String;
        }
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
        export interface UserIdGroupPair {
            UserId?: String;
            GroupName?: String;
            GroupId?: String;
        }
        export interface VgwTelemetry {
            OutsideIpAddress?: String;
            Status?: TelemetryStatus;
            LastStatusChange?: DateTime;
            StatusMessage?: String;
            AcceptedRouteCount?: Integer;
        }
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
        export interface VolumeDetail {
            Size: Long;
        }
        export interface VolumeStatusAction {
            Code?: String;
            Description?: String;
            EventType?: String;
            EventId?: String;
        }
        export interface VolumeStatusDetails {
            Name?: VolumeStatusName;
            Status?: String;
        }
        export interface VolumeStatusEvent {
            EventType?: String;
            Description?: String;
            NotBefore?: DateTime;
            NotAfter?: DateTime;
            EventId?: String;
        }
        export interface VolumeStatusInfo {
            Status?: VolumeStatusInfoStatus;
            Details?: VolumeStatusDetailsList;
        }
        export interface VolumeStatusItem {
            VolumeId?: String;
            AvailabilityZone?: String;
            VolumeStatus?: VolumeStatusInfo;
            Events?: VolumeStatusEventsList;
            Actions?: VolumeStatusActionsList;
        }
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
        export interface VpcClassicLink {
            VpcId?: String;
            ClassicLinkEnabled?: Boolean;
            Tags?: TagList;
        }
        export interface VpcEndpoint {
            VpcEndpointId?: String;
            VpcId?: String;
            ServiceName?: String;
            State?: State;
            PolicyDocument?: String;
            RouteTableIds?: ValueStringList;
            CreationTimestamp?: DateTime;
        }
        export interface VpcPeeringConnection {
            AccepterVpcInfo?: VpcPeeringConnectionVpcInfo;
            ExpirationTime?: DateTime;
            RequesterVpcInfo?: VpcPeeringConnectionVpcInfo;
            Status?: VpcPeeringConnectionStateReason;
            Tags?: TagList;
            VpcPeeringConnectionId?: String;
        }
        export interface VpcPeeringConnectionStateReason {
            Code?: VpcPeeringConnectionStateReasonCode;
            Message?: String;
        }
        export interface VpcPeeringConnectionVpcInfo {
            CidrBlock?: String;
            OwnerId?: String;
            VpcId?: String;
        }
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
        export interface VpnStaticRoute {
            DestinationCidrBlock?: String;
            Source?: VpnStaticRouteSource;
            State?: VpnState;
        }

    }
}
