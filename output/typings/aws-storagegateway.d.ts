// Type definitions for aws-sdk - AWS Storage Gateway
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2013-06-30
    * endpointPrefix: storagegateway
    * serviceAbbreviation: 
    * signatureVersion: v4
    * protocol: json
    *
    * AWS Storage Gateway Service AWS Storage Gateway is the service that connects an
 on-premises software appliance with cloud-based storage to provide seamless and
 secure integration between an organization&#x27;s on-premises IT environment and
 AWS&#x27;s storage infrastructure. The service enables you to securely upload data to
 the AWS cloud for cost effective backup and rapid disaster recovery.
 
 Use the following links to get started using the AWS Storage Gateway Service API
 Reference:
 
  &amp;#42;   AWS Storage Gateway Required Request Headers
    [http://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayHTTPRequestsHeaders.html]
    : Describes the required headers that you must send with every POST request
    to AWS Storage Gateway.
    
    
  *   Signing Requests
    [http://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewaySigningRequests.html]
    : AWS Storage Gateway requires that you authenticate every request you send;
    this topic describes how sign such a request.
    
    
  *   Error Responses
    [http://docs.aws.amazon.com/storagegateway/latest/userguide/APIErrorResponses.html]
    : Provides reference information about AWS Storage Gateway errors.
    
    
  *   Operations in AWS Storage Gateway
    [http://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPIOperations.html]
    : Contains detailed descriptions of all AWS Storage Gateway operations, their
    request parameters, response elements, possible errors, and examples of
    requests and responses.
    
    
  *   AWS Storage Gateway Regions and Endpoints
    [http://docs.aws.amazon.com/general/latest/gr/index.html?rande.html]:
    Provides a list of each of the s and endpoints available for use with AWS
    Storage Gateway.
    
    
 
 AWS Storage Gateway resource IDs are in uppercase. When you use these resource
 IDs with the Amazon EC2 API, EC2 expects resource IDs in lowercase. You must
 change your resource ID to lowercase to use it with the EC2 API. For example, in
 Storage Gateway the ID for a volume might be vol-1122AABB. When you use this ID
 with the EC2 API, you must change it to vol-1122aabb. Otherwise, the EC2 API
 might not behave as expected.
 
 IDs for Storage Gateway volumes and Amazon EBS snapshots created from gateway
 volumes are changing to a longer format. Starting in December 2016, all new
 volumes and snapshots will be created with a 17-character string. Starting in
 April 2016, you will be able to use these longer IDs so you can test your
 systems with the new format. For more information, see Longer EC2 and EBS
 Resource IDs [https://aws.amazon.com/ec2/faqs/#longer-ids].
 
  For example, a volume ARN with the longer volume ID format will look like this:
 
  
 arn:aws:storagegateway:us-west-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABBCCDDEEFFG
 .
 
 A snapshot ID with the longer ID format will look like this: 
 snap-78e226633445566ee.
 
 For more information, see Announcement: Heads-up – Longer AWS Storage Gateway
 volume and snapshot IDs coming in 2016
 [https://forums.aws.amazon.com/ann.jspa?annID=3557].
    *
    */
  export class StorageGateway extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Activates the gateway you previously deployed on your host. For more
information, see Activate the AWS Storage Gateway
[http://docs.aws.amazon.com/storagegateway/latest/userguide/GettingStartedActivateGateway-common.html]
. In the activation process, you specify information such as the you want to use
for storing snapshots, the time zone for scheduled snapshots the gateway
snapshot schedule window, an activation key, and a name for your gateway. The
activation process also associates your gateway with your account; for more
information, see UpdateGatewayInformation.

You must turn on the gateway VM before you can activate your gateway.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    activateGateway(params: StorageGateway.ActivateGatewayInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.ActivateGatewayOutput | any) => void): Request<StorageGateway.ActivateGatewayOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Configures one or more gateway local disks as cache for a cached-volume gateway.
This operation is supported only for the gateway-cached volume architecture (see 
Storage Gateway Concepts
[http://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html]
).

In the request, you specify the gateway Amazon Resource Name (ARN) to which you
want to add cache, and one or more disk IDs that you want to configure as cache.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    addCache(params: StorageGateway.AddCacheInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.AddCacheOutput | any) => void): Request<StorageGateway.AddCacheOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Adds one or more tags to the specified resource. You use tags to add metadata to
resources, which you can use to categorize these resources. For example, you can
categorize resources by purpose, owner, environment, or team. Each tag consists
of a key and a value, which you define. You can add tags to the following AWS
Storage Gateway resources:

 &amp;#42;  Storage gateways of all types
   
   

 *  Storage Volumes
   
   

 *  Virtual Tapes
   
   

You can create a maximum of 10 tags for each resource. Virtual tapes and storage
volumes that are recovered to a new gateway maintain their tags.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    addTagsToResource(params: StorageGateway.AddTagsToResourceInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.AddTagsToResourceOutput | any) => void): Request<StorageGateway.AddTagsToResourceOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Configures one or more gateway local disks as upload buffer for a specified
gateway. This operation is supported for both the gateway-stored and
gateway-cached volume architectures.

In the request, you specify the gateway Amazon Resource Name (ARN) to which you
want to add upload buffer, and one or more disk IDs that you want to configure
as upload buffer.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    addUploadBuffer(params: StorageGateway.AddUploadBufferInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.AddUploadBufferOutput | any) => void): Request<StorageGateway.AddUploadBufferOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Configures one or more gateway local disks as working storage for a gateway.
This operation is supported only for the gateway-stored volume architecture.
This operation is deprecated in cached-volumes API version 20120630. Use 
AddUploadBuffer instead.

Working storage is also referred to as upload buffer. You can also use the 
AddUploadBuffer operation to add upload buffer to a stored-volume gateway.

In the request, you specify the gateway Amazon Resource Name (ARN) to which you
want to add working storage, and one or more disk IDs that you want to configure
as working storage.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    addWorkingStorage(params: StorageGateway.AddWorkingStorageInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.AddWorkingStorageOutput | any) => void): Request<StorageGateway.AddWorkingStorageOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the
archiving process is initiated.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    cancelArchival(params: StorageGateway.CancelArchivalInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.CancelArchivalOutput | any) => void): Request<StorageGateway.CancelArchivalOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a
gateway after the retrieval process is initiated. The virtual tape is returned
to the VTS.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    cancelRetrieval(params: StorageGateway.CancelRetrievalInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.CancelRetrievalOutput | any) => void): Request<StorageGateway.CancelRetrievalOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Creates a cached volume on a specified cached gateway. This operation is
supported only for the gateway-cached volume architecture.

Cache storage must be allocated to the gateway before you can create a cached
volume. Use the AddCache operation to add cache storage to a gateway. 

In the request, you must specify the gateway, size of the volume in bytes, the
iSCSI target name, an IP address on which to expose the target, and a unique
client token. In response, AWS Storage Gateway creates the volume and returns
information about it such as the volume Amazon Resource Name (ARN), its size,
and the iSCSI target ARN that initiators can use to connect to the volume
target.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    createCachediSCSIVolume(params: StorageGateway.CreateCachediSCSIVolumeInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.CreateCachediSCSIVolumeOutput | any) => void): Request<StorageGateway.CreateCachediSCSIVolumeOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Initiates a snapshot of a volume.

AWS Storage Gateway provides the ability to back up point-in-time snapshots of
your data to Amazon Simple Storage (S3) for durable off-site recovery, as well
as import the data to an Amazon Elastic Block Store (EBS) volume in Amazon
Elastic Compute Cloud (EC2). You can take snapshots of your gateway volume on a
scheduled or ad-hoc basis. This API enables you to take ad-hoc snapshot. For
more information, see Working With Snapshots in the AWS Storage Gateway Console
[http://docs.aws.amazon.com/storagegateway/latest/userguide/WorkingWithSnapshots.html]
.

In the CreateSnapshot request you identify the volume by providing its Amazon
Resource Name (ARN). You must also provide description for the snapshot. When
AWS Storage Gateway takes the snapshot of specified volume, the snapshot and
description appears in the AWS Storage Gateway Console. In response, AWS Storage
Gateway returns you a snapshot ID. You can use this snapshot ID to check the
snapshot progress or later use it when you want to create a volume from a
snapshot.

To list or delete a snapshot, you must use the Amazon EC2 API. For more
information, see DescribeSnapshots or DeleteSnapshot in the EC2 API reference
[http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Operations.html].

Volume and snapshot IDs are changing to a longer length ID format. For more
information, see the important note on the Welcome
[http://docs.aws.amazon.com/storagegateway/latest/APIReference/Welcome.html] 
page.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    createSnapshot(params: StorageGateway.CreateSnapshotInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.CreateSnapshotOutput | any) => void): Request<StorageGateway.CreateSnapshotOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Initiates a snapshot of a gateway from a volume recovery point. This operation
is supported only for the gateway-cached volume architecture.

A volume recovery point is a point in time at which all data of the volume is
consistent and from which you can create a snapshot. To get a list of volume
recovery point for gateway-cached volumes, use ListVolumeRecoveryPoints.

In the CreateSnapshotFromVolumeRecoveryPoint request, you identify the volume by
providing its Amazon Resource Name (ARN). You must also provide a description
for the snapshot. When AWS Storage Gateway takes a snapshot of the specified
volume, the snapshot and its description appear in the AWS Storage Gateway
console. In response, AWS Storage Gateway returns you a snapshot ID. You can use
this snapshot ID to check the snapshot progress or later use it when you want to
create a volume from a snapshot.

To list or delete a snapshot, you must use the Amazon EC2 API. For more
information, in Amazon Elastic Compute Cloud API Reference.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    createSnapshotFromVolumeRecoveryPoint(params: StorageGateway.CreateSnapshotFromVolumeRecoveryPointInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.CreateSnapshotFromVolumeRecoveryPointOutput | any) => void): Request<StorageGateway.CreateSnapshotFromVolumeRecoveryPointOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Creates a volume on a specified gateway. This operation is supported only for
the gateway-stored volume architecture.

The size of the volume to create is inferred from the disk size. You can choose
to preserve existing data on the disk, create volume from an existing snapshot,
or create an empty volume. If you choose to create an empty gateway volume, then
any existing data on the disk is erased.

In the request you must specify the gateway and the disk information on which
you are creating the volume. In response, AWS Storage Gateway creates the volume
and returns volume information such as the volume Amazon Resource Name (ARN),
its size, and the iSCSI target ARN that initiators can use to connect to the
volume target.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    createStorediSCSIVolume(params: StorageGateway.CreateStorediSCSIVolumeInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.CreateStorediSCSIVolumeOutput | any) => void): Request<StorageGateway.CreateStorediSCSIVolumeOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Creates a virtual tape by using your own barcode. You write data to the virtual
tape and then archive the tape.

Cache storage must be allocated to the gateway before you can create a virtual
tape. Use the AddCache operation to add cache storage to a gateway.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    createTapeWithBarcode(params: StorageGateway.CreateTapeWithBarcodeInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.CreateTapeWithBarcodeOutput | any) => void): Request<StorageGateway.CreateTapeWithBarcodeOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Creates one or more virtual tapes. You write data to the virtual tapes and then
archive the tapes.

Cache storage must be allocated to the gateway before you can create virtual
tapes. Use the AddCache operation to add cache storage to a gateway.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    createTapes(params: StorageGateway.CreateTapesInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.CreateTapesOutput | any) => void): Request<StorageGateway.CreateTapesOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Deletes the bandwidth rate limits of a gateway. You can delete either the upload
and download bandwidth rate limit, or you can delete both. If you delete only
one of the limits, the other limit remains unchanged. To specify which gateway
to work with, use the Amazon Resource Name (ARN) of the gateway in your request.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    deleteBandwidthRateLimit(params: StorageGateway.DeleteBandwidthRateLimitInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.DeleteBandwidthRateLimitOutput | any) => void): Request<StorageGateway.DeleteBandwidthRateLimitOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a
specified iSCSI target and initiator pair.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    deleteChapCredentials(params: StorageGateway.DeleteChapCredentialsInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.DeleteChapCredentialsOutput | any) => void): Request<StorageGateway.DeleteChapCredentialsOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Deletes a gateway. To specify which gateway to delete, use the Amazon Resource
Name (ARN) of the gateway in your request. The operation deletes the gateway;
however, it does not delete the gateway virtual machine (VM) from your host
computer.

After you delete a gateway, you cannot reactivate it. Completed snapshots of the
gateway volumes are not deleted upon deleting the gateway, however, pending
snapshots will not complete. After you delete a gateway, your next step is to
remove it from your environment.

You no longer pay software charges after the gateway is deleted; however, your
existing Amazon EBS snapshots persist and you will continue to be billed for
these snapshots. You can choose to remove all remaining Amazon EBS snapshots by
canceling your Amazon EC2 subscription. If you prefer not to cancel your Amazon
EC2 subscription, you can delete your snapshots using the Amazon EC2 console.
For more information, see the AWS Storage Gateway Detail Page
[http://aws.amazon.com/storagegateway].
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    deleteGateway(params: StorageGateway.DeleteGatewayInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.DeleteGatewayOutput | any) => void): Request<StorageGateway.DeleteGatewayOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Deletes a snapshot of a volume.

You can take snapshots of your gateway volumes on a scheduled or ad hoc basis.
This API action enables you to delete a snapshot schedule for a volume. For more
information, see Working with Snapshots
[http://docs.aws.amazon.com/storagegateway/latest/userguide/WorkingWithSnapshots.html]
. In the DeleteSnapshotSchedule request, you identify the volume by providing
its Amazon Resource Name (ARN). 

To list or delete a snapshot, you must use the Amazon EC2 API. in Amazon Elastic
Compute Cloud API Reference.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    deleteSnapshotSchedule(params: StorageGateway.DeleteSnapshotScheduleInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.DeleteSnapshotScheduleOutput | any) => void): Request<StorageGateway.DeleteSnapshotScheduleOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Deletes the specified virtual tape.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    deleteTape(params: StorageGateway.DeleteTapeInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.DeleteTapeOutput | any) => void): Request<StorageGateway.DeleteTapeOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Deletes the specified virtual tape from the virtual tape shelf (VTS).
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    deleteTapeArchive(params: StorageGateway.DeleteTapeArchiveInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.DeleteTapeArchiveOutput | any) => void): Request<StorageGateway.DeleteTapeArchiveOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Deletes the specified gateway volume that you previously created using the 
CreateCachediSCSIVolume or CreateStorediSCSIVolume API. For gateway-stored
volumes, the local disk that was configured as the storage volume is not
deleted. You can reuse the local disk to create another storage volume. 

Before you delete a gateway volume, make sure there are no iSCSI connections to
the volume you are deleting. You should also make sure there is no snapshot in
progress. You can use the Amazon Elastic Compute Cloud (Amazon EC2) API to query
snapshots on the volume you are deleting and check the snapshot status. For more
information, go to DescribeSnapshots
[http://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html] 
in the Amazon Elastic Compute Cloud API Reference.

In the request, you must provide the Amazon Resource Name (ARN) of the storage
volume you want to delete.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    deleteVolume(params: StorageGateway.DeleteVolumeInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.DeleteVolumeOutput | any) => void): Request<StorageGateway.DeleteVolumeOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Returns the bandwidth rate limits of a gateway. By default, these limits are not
set, which means no bandwidth rate limiting is in effect.

This operation only returns a value for a bandwidth rate limit only if the limit
is set. If no limits are set for the gateway, then this operation returns only
the gateway ARN in the response body. To specify which gateway to describe, use
the Amazon Resource Name (ARN) of the gateway in your request.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    describeBandwidthRateLimit(params: StorageGateway.DescribeBandwidthRateLimitInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.DescribeBandwidthRateLimitOutput | any) => void): Request<StorageGateway.DescribeBandwidthRateLimitOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Returns information about the cache of a gateway. This operation is supported
only for the gateway-cached volume architecture.

The response includes disk IDs that are configured as cache, and it includes the
amount of cache allocated and used.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    describeCache(params: StorageGateway.DescribeCacheInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.DescribeCacheOutput | any) => void): Request<StorageGateway.DescribeCacheOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Returns a description of the gateway volumes specified in the request. This
operation is supported only for the gateway-cached volume architecture.

The list of gateway volumes in the request must be from one gateway. In the
response Amazon Storage Gateway returns volume information sorted by volume
Amazon Resource Name (ARN).
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    describeCachediSCSIVolumes(params: StorageGateway.DescribeCachediSCSIVolumesInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.DescribeCachediSCSIVolumesOutput | any) => void): Request<StorageGateway.DescribeCachediSCSIVolumesOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Returns an array of Challenge-Handshake Authentication Protocol (CHAP)
credentials information for a specified iSCSI target, one for each
target-initiator pair.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    describeChapCredentials(params: StorageGateway.DescribeChapCredentialsInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.DescribeChapCredentialsOutput | any) => void): Request<StorageGateway.DescribeChapCredentialsOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Returns metadata about a gateway such as its name, network interfaces,
configured time zone, and the state (whether the gateway is running or not). To
specify which gateway to describe, use the Amazon Resource Name (ARN) of the
gateway in your request.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    describeGatewayInformation(params: StorageGateway.DescribeGatewayInformationInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.DescribeGatewayInformationOutput | any) => void): Request<StorageGateway.DescribeGatewayInformationOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Returns your gateway&#x27;s weekly maintenance start time including the day and time
of the week. Note that values are in terms of the gateway&#x27;s time zone.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    describeMaintenanceStartTime(params: StorageGateway.DescribeMaintenanceStartTimeInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.DescribeMaintenanceStartTimeOutput | any) => void): Request<StorageGateway.DescribeMaintenanceStartTimeOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Describes the snapshot schedule for the specified gateway volume. The snapshot
schedule information includes intervals at which snapshots are automatically
initiated on the volume.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    describeSnapshotSchedule(params: StorageGateway.DescribeSnapshotScheduleInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.DescribeSnapshotScheduleOutput | any) => void): Request<StorageGateway.DescribeSnapshotScheduleOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Returns the description of the gateway volumes specified in the request. The
list of gateway volumes in the request must be from one gateway. In the response
Amazon Storage Gateway returns volume information sorted by volume ARNs.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    describeStorediSCSIVolumes(params: StorageGateway.DescribeStorediSCSIVolumesInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.DescribeStorediSCSIVolumesOutput | any) => void): Request<StorageGateway.DescribeStorediSCSIVolumesOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Returns a description of specified virtual tapes in the virtual tape shelf
(VTS).

If a specific TapeARN is not specified, AWS Storage Gateway returns a
description of all virtual tapes found in the VTS associated with your account.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    describeTapeArchives(params: StorageGateway.DescribeTapeArchivesInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.DescribeTapeArchivesOutput | any) => void): Request<StorageGateway.DescribeTapeArchivesOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Returns a list of virtual tape recovery points that are available for the
specified gateway-VTL.

A recovery point is a point-in-time view of a virtual tape at which all the data
on the virtual tape is consistent. If your gateway crashes, virtual tapes that
have recovery points can be recovered to a new gateway.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    describeTapeRecoveryPoints(params: StorageGateway.DescribeTapeRecoveryPointsInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.DescribeTapeRecoveryPointsOutput | any) => void): Request<StorageGateway.DescribeTapeRecoveryPointsOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Returns a description of the specified Amazon Resource Name (ARN) of virtual
tapes. If a TapeARN is not specified, returns a description of all virtual tapes
associated with the specified gateway.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    describeTapes(params: StorageGateway.DescribeTapesInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.DescribeTapesOutput | any) => void): Request<StorageGateway.DescribeTapesOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Returns information about the upload buffer of a gateway. This operation is
supported for both the gateway-stored and gateway-cached volume architectures.

The response includes disk IDs that are configured as upload buffer space, and
it includes the amount of upload buffer space allocated and used.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    describeUploadBuffer(params: StorageGateway.DescribeUploadBufferInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.DescribeUploadBufferOutput | any) => void): Request<StorageGateway.DescribeUploadBufferOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Returns a description of virtual tape library (VTL) devices for the specified
gateway. In the response, AWS Storage Gateway returns VTL device information.

The list of VTL devices must be from one gateway.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    describeVTLDevices(params: StorageGateway.DescribeVTLDevicesInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.DescribeVTLDevicesOutput | any) => void): Request<StorageGateway.DescribeVTLDevicesOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Returns information about the working storage of a gateway. This operation is
supported only for the gateway-stored volume architecture. This operation is
deprecated in cached-volumes API version (20120630). Use DescribeUploadBuffer
instead.

Working storage is also referred to as upload buffer. You can also use the
DescribeUploadBuffer operation to add upload buffer to a stored-volume gateway.

The response includes disk IDs that are configured as working storage, and it
includes the amount of working storage allocated and used.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    describeWorkingStorage(params: StorageGateway.DescribeWorkingStorageInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.DescribeWorkingStorageOutput | any) => void): Request<StorageGateway.DescribeWorkingStorageOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Disables a gateway when the gateway is no longer functioning. For example, if
your gateway VM is damaged, you can disable the gateway so you can recover
virtual tapes.

Use this operation for a gateway-VTL that is not reachable or not functioning.

Once a gateway is disabled it cannot be enabled.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    disableGateway(params: StorageGateway.DisableGatewayInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.DisableGatewayOutput | any) => void): Request<StorageGateway.DisableGatewayOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Lists gateways owned by an AWS account in a region specified in the request. The
returned list is ordered by gateway Amazon Resource Name (ARN).

By default, the operation returns a maximum of 100 gateways. This operation
supports pagination that allows you to optionally reduce the number of gateways
returned in a response.

If you have more gateways than are returned in a response (that is, the response
returns only a truncated list of your gateways), the response contains a marker
that you can specify in your next request to fetch the next page of gateways.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    listGateways(params: StorageGateway.ListGatewaysInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.ListGatewaysOutput | any) => void): Request<StorageGateway.ListGatewaysOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Returns a list of the gateway&#x27;s local disks. To specify which gateway to
describe, you use the Amazon Resource Name (ARN) of the gateway in the body of
the request.

The request returns a list of all disks, specifying which are configured as
working storage, cache storage, or stored volume or not configured at all. The
response includes a DiskStatus field. This field can have a value of present
(the disk is available to use), missing (the disk is no longer connected to the
gateway), or mismatch (the disk node is occupied by a disk that has incorrect
metadata or the disk content is corrupted).
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    listLocalDisks(params: StorageGateway.ListLocalDisksInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.ListLocalDisksOutput | any) => void): Request<StorageGateway.ListLocalDisksOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Lists the tags that have been added to the specified resource.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    listTagsForResource(params: StorageGateway.ListTagsForResourceInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.ListTagsForResourceOutput | any) => void): Request<StorageGateway.ListTagsForResourceOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Lists virtual tapes in your virtual tape library (VTL) and your virtual tape
shelf (VTS). You specify the tapes to list by specifying one or more tape Amazon
Resource Names (ARNs). If you don&#x27;t specify a tape ARN, the operation lists all
virtual tapes in both your VTL and VTS.

This operation supports pagination. By default, the operation returns a maximum
of up to 100 tapes. You can optionally specify the Limit parameter in the body
to limit the number of tapes in the response. If the number of tapes returned in
the response is truncated, the response includes a Marker element that you can
use in your subsequent request to retrieve the next set of tapes.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    listTapes(params: StorageGateway.ListTapesInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.ListTapesOutput | any) => void): Request<StorageGateway.ListTapesOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Lists iSCSI initiators that are connected to a volume. You can use this
operation to determine whether a volume is being used or not.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    listVolumeInitiators(params: StorageGateway.ListVolumeInitiatorsInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.ListVolumeInitiatorsOutput | any) => void): Request<StorageGateway.ListVolumeInitiatorsOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Lists the recovery points for a specified gateway. This operation is supported
only for the gateway-cached volume architecture.

Each gateway-cached volume has one recovery point. A volume recovery point is a
point in time at which all data of the volume is consistent and from which you
can create a snapshot. To create a snapshot from a volume recovery point use the 
CreateSnapshotFromVolumeRecoveryPoint operation.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    listVolumeRecoveryPoints(params: StorageGateway.ListVolumeRecoveryPointsInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.ListVolumeRecoveryPointsOutput | any) => void): Request<StorageGateway.ListVolumeRecoveryPointsOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN.
The response includes only the volume ARNs. If you want additional volume
information, use the DescribeStorediSCSIVolumes API.

The operation supports pagination. By default, the operation returns a maximum
of up to 100 volumes. You can optionally specify the Limit field in the body to
limit the number of volumes in the response. If the number of volumes returned
in the response is truncated, the response includes a Marker field. You can use
this Marker value in your subsequent request to retrieve the next set of
volumes.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    listVolumes(params: StorageGateway.ListVolumesInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.ListVolumesOutput | any) => void): Request<StorageGateway.ListVolumesOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Removes one or more tags from the specified resource.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    removeTagsFromResource(params: StorageGateway.RemoveTagsFromResourceInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.RemoveTagsFromResourceOutput | any) => void): Request<StorageGateway.RemoveTagsFromResourceOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Resets all cache disks that have encountered a error and makes the disks
available for reconfiguration as cache storage. If your cache disk encounters a
error, the gateway prevents read and write operations on virtual tapes in the
gateway. For example, an error can occur when a disk is corrupted or removed
from the gateway. When a cache is reset, the gateway loses its cache storage. At
this point you can reconfigure the disks as cache disks.

If the cache disk you are resetting contains data that has not been uploaded to
Amazon S3 yet, that data can be lost. After you reset cache disks, there will be
no configured cache disks left in the gateway, so you must configure at least
one new cache disk for your gateway to function properly.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    resetCache(params: StorageGateway.ResetCacheInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.ResetCacheOutput | any) => void): Request<StorageGateway.ResetCacheOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a
gateway-VTL. Virtual tapes archived in the VTS are not associated with any
gateway. However after a tape is retrieved, it is associated with a gateway,
even though it is also listed in the VTS.

Once a tape is successfully retrieved to a gateway, it cannot be retrieved again
to another gateway. You must archive the tape again before you can retrieve it
to another gateway.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    retrieveTapeArchive(params: StorageGateway.RetrieveTapeArchiveInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.RetrieveTapeArchiveOutput | any) => void): Request<StorageGateway.RetrieveTapeArchiveOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Retrieves the recovery point for the specified virtual tape.

A recovery point is a point in time view of a virtual tape at which all the data
on the tape is consistent. If your gateway crashes, virtual tapes that have
recovery points can be recovered to a new gateway.

The virtual tape can be retrieved to only one gateway. The retrieved tape is
read-only. The virtual tape can be retrieved to only a gateway-VTL. There is no
charge for retrieving recovery points.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    retrieveTapeRecoveryPoint(params: StorageGateway.RetrieveTapeRecoveryPointInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.RetrieveTapeRecoveryPointOutput | any) => void): Request<StorageGateway.RetrieveTapeRecoveryPointOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Sets the password for your VM local console. When you log in to the local
console for the first time, you log in to the VM with the default credentials.
We recommend that you set a new password. You don&#x27;t need to know the default
password to set a new password.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    setLocalConsolePassword(params: StorageGateway.SetLocalConsolePasswordInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.SetLocalConsolePasswordOutput | any) => void): Request<StorageGateway.SetLocalConsolePasswordOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Shuts down a gateway. To specify which gateway to shut down, use the Amazon
Resource Name (ARN) of the gateway in the body of your request.

The operation shuts down the gateway service component running in the storage
gateway&#x27;s virtual machine (VM) and not the VM.

If you want to shut down the VM, it is recommended that you first shut down the
gateway component in the VM to avoid unpredictable conditions.

After the gateway is shutdown, you cannot call any other API except StartGateway
, DescribeGatewayInformation, and ListGateways. For more information, see 
ActivateGateway. Your applications cannot read from or write to the gateway&#x27;s
storage volumes, and there are no snapshots taken.

When you make a shutdown request, you will get a 200 OK success response
immediately. However, it might take some time for the gateway to shut down. You
can call the DescribeGatewayInformation API to check the status. For more
information, see ActivateGateway.

If do not intend to use the gateway again, you must delete the gateway (using 
DeleteGateway) to no longer pay software charges associated with the gateway.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    shutdownGateway(params: StorageGateway.ShutdownGatewayInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.ShutdownGatewayOutput | any) => void): Request<StorageGateway.ShutdownGatewayOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Starts a gateway that you previously shut down (see ShutdownGateway). After the
gateway starts, you can then make other API calls, your applications can read
from or write to the gateway&#x27;s storage volumes and you will be able to take
snapshot backups.

When you make a request, you will get a 200 OK success response immediately.
However, it might take some time for the gateway to be ready. You should call 
DescribeGatewayInformation and check the status before making any additional API
calls. For more information, see ActivateGateway.

To specify which gateway to start, use the Amazon Resource Name (ARN) of the
gateway in your request.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    startGateway(params: StorageGateway.StartGatewayInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.StartGatewayOutput | any) => void): Request<StorageGateway.StartGatewayOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Updates the bandwidth rate limits of a gateway. You can update both the upload
and download bandwidth rate limit or specify only one of the two. If you don&#x27;t
set a bandwidth rate limit, the existing rate limit remains.

By default, a gateway&#x27;s bandwidth rate limits are not set. If you don&#x27;t set any
limit, the gateway does not have any limitations on its bandwidth usage and
could potentially use the maximum available bandwidth.

To specify which gateway to update, use the Amazon Resource Name (ARN) of the
gateway in your request.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    updateBandwidthRateLimit(params: StorageGateway.UpdateBandwidthRateLimitInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.UpdateBandwidthRateLimitOutput | any) => void): Request<StorageGateway.UpdateBandwidthRateLimitOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a
specified iSCSI target. By default, a gateway does not have CHAP enabled;
however, for added security, you might use it.

When you update CHAP credentials, all existing connections on the target are
closed and initiators must reconnect with the new credentials.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    updateChapCredentials(params: StorageGateway.UpdateChapCredentialsInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.UpdateChapCredentialsOutput | any) => void): Request<StorageGateway.UpdateChapCredentialsOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Updates a gateway&#x27;s metadata, which includes the gateway&#x27;s name and time zone.
To specify which gateway to update, use the Amazon Resource Name (ARN) of the
gateway in your request.

For Gateways activated after September 2, 2015, the gateway&#x27;s ARN contains the
gateway ID rather than the gateway name. However, changing the name of the
gateway has no effect on the gateway&#x27;s ARN.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    updateGatewayInformation(params: StorageGateway.UpdateGatewayInformationInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.UpdateGatewayInformationOutput | any) => void): Request<StorageGateway.UpdateGatewayInformationOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Updates the gateway virtual machine (VM) software. The request immediately
triggers the software update.

When you make this request, you get a 200 OK success response immediately.
However, it might take some time for the update to complete. You can call 
DescribeGatewayInformation to verify the gateway is in the STATE_RUNNING state.

A software update forces a system restart of your gateway. You can minimize the
chance of any disruption to your applications by increasing your iSCSI
Initiators&#x27; timeouts. For more information about increasing iSCSI Initiator
timeouts for Windows and Linux, see Customizing Your Windows iSCSI Settings
[http://docs.aws.amazon.com/storagegateway/latest/userguide/ConfiguringiSCSIClientInitiatorWindowsClient.html#CustomizeWindowsiSCSISettings] 
and Customizing Your Linux iSCSI Settings
[http://docs.aws.amazon.com/storagegateway/latest/userguide/ConfiguringiSCSIClientInitiatorRedHatClient.html#CustomizeLinuxiSCSISettings]
, respectively.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    updateGatewaySoftwareNow(params: StorageGateway.UpdateGatewaySoftwareNowInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.UpdateGatewaySoftwareNowOutput | any) => void): Request<StorageGateway.UpdateGatewaySoftwareNowOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Updates a gateway&#x27;s weekly maintenance start time information, including day and
time of the week. The maintenance time is the time in your gateway&#x27;s time zone.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    updateMaintenanceStartTime(params: StorageGateway.UpdateMaintenanceStartTimeInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.UpdateMaintenanceStartTimeOutput | any) => void): Request<StorageGateway.UpdateMaintenanceStartTimeOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Updates a snapshot schedule configured for a gateway volume.

The default snapshot schedule for volume is once every 24 hours, starting at the
creation time of the volume. You can use this API to change the snapshot
schedule configured for the volume.

In the request you must identify the gateway volume whose snapshot schedule you
want to update, and the schedule information, including when you want the
snapshot to begin on a day and the frequency (in hours) of snapshots.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    updateSnapshotSchedule(params: StorageGateway.UpdateSnapshotScheduleInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.UpdateSnapshotScheduleOutput | any) => void): Request<StorageGateway.UpdateSnapshotScheduleOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;
    /**
     * Updates the type of medium changer in a gateway-VTL. When you activate a
gateway-VTL, you select a medium changer type for the gateway-VTL. This
operation enables you to select a different type of medium changer after a
gateway-VTL is activated.
     *
     * @error InvalidGatewayRequestException   
     * @error InternalServerError   
     */
    updateVTLDeviceType(params: StorageGateway.UpdateVTLDeviceTypeInput, callback?: (err: StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any, data: StorageGateway.UpdateVTLDeviceTypeOutput | any) => void): Request<StorageGateway.UpdateVTLDeviceTypeOutput | any, StorageGateway.InvalidGatewayRequestException | StorageGateway.InternalServerError | any>;

  }

  export module StorageGateway {

    export type ActivationKey = string;

    export type BandwidthDownloadRateLimit = number;

    export type BandwidthType = string;

    export type BandwidthUploadRateLimit = number;

    export type CachediSCSIVolumes = CachediSCSIVolume[];

    export type ChapCredentials = ChapInfo[];

    export type ChapSecret = string;

    export type ClientToken = string;

    export type DayOfWeek = number;

    export type Description = string;

    export type DeviceType = string;

    export type DiskAllocationType = string;

    export type DiskId = string;

    export type DiskIds = DiskId[];

    export type Disks = Disk[];

    export type DoubleObject = number;

    export type ErrorCode = string;

    export type GatewayARN = string;

    export type GatewayId = string;

    export type GatewayName = string;

    export type GatewayNetworkInterfaces = NetworkInterface[];

    export type GatewayOperationalState = string;

    export type GatewayState = string;

    export type GatewayTimezone = string;

    export type GatewayType = string;

    export type Gateways = GatewayInfo[];

    export type HourOfDay = number;

    export type Initiator = string;

    export type Initiators = Initiator[];

    export type IqnName = string;

    export type LastSoftwareUpdate = string;

    export type LocalConsolePassword = string;

    export type Marker = string;

    export type MediumChangerType = string;

    export type MinuteOfHour = number;

    export type NetworkInterfaceId = string;

    export type NextUpdateAvailabilityDate = string;

    export type NumTapesToCreate = number;

    export type PositiveIntObject = number;

    export type RecurrenceInHours = number;

    export type RegionId = string;

    export type ResourceARN = string;

    export type SnapshotDescription = string;

    export type SnapshotId = string;

    export type StorediSCSIVolumes = StorediSCSIVolume[];

    export type TagKey = string;

    export type TagKeys = TagKey[];

    export type TagValue = string;

    export type Tags = Tag[];

    export type TapeARN = string;

    export type TapeARNs = TapeARN[];

    export type TapeArchiveStatus = string;

    export type TapeArchives = TapeArchive[];

    export type TapeBarcode = string;

    export type TapeBarcodePrefix = string;

    export type TapeDriveType = string;

    export type TapeInfos = TapeInfo[];

    export type TapeRecoveryPointInfos = TapeRecoveryPointInfo[];

    export type TapeRecoveryPointStatus = string;

    export type TapeSize = number;

    export type TapeStatus = string;

    export type Tapes = Tape[];

    export type TargetARN = string;

    export type TargetName = string;

    export type Time = number;

    export type VTLDeviceARN = string;

    export type VTLDeviceARNs = VTLDeviceARN[];

    export type VTLDeviceProductIdentifier = string;

    export type VTLDeviceType = string;

    export type VTLDeviceVendor = string;

    export type VTLDevices = VTLDevice[];

    export type VolumeARN = string;

    export type VolumeARNs = VolumeARN[];

    export type VolumeId = string;

    export type VolumeInfos = VolumeInfo[];

    export type VolumeRecoveryPointInfos = VolumeRecoveryPointInfo[];

    export type VolumeStatus = string;

    export type VolumeType = string;

    export type double = number;

    export type errorDetails = { [key: string]: string };

    export type integer = number;

    export type long = number;

    export interface ActivateGatewayInput {
      /** Your gateway activation key. You can obtain the activation key by sending an
HTTP GET request with redirects enabled to the gateway IP address (port 80). The
redirect URL returned in the response provides you the activation key for your
gateway in the query string parameter activationKey. It may also include other
activation-related parameters, however, these are merely defaults -- the
arguments you pass to the ActivateGateway API call determine the actual
configuration of your gateway. **/
      ActivationKey: ActivationKey;
      /** The name you configured for your gateway. **/
      GatewayName: GatewayName;
      /** A value that indicates the time zone you want to set for the gateway. The time
zone is used, for example, for scheduling snapshots and your gateway&#x27;s
maintenance schedule. **/
      GatewayTimezone: GatewayTimezone;
      /** A value that indicates the region where you want to store the snapshot backups.
The gateway region specified must be the same region as the region in your Host 
header in the request. For more information about available regions and
endpoints for AWS Storage Gateway, see Regions and Endpoints
[http://docs.aws.amazon.com/general/latest/gr/rande.html#sg_region] in the 
Amazon Web Services Glossary.

Valid Values: &quot;us-east-1&quot;, &quot;us-west-1&quot;, &quot;us-west-2&quot;, &quot;eu-west-1&quot;,
&quot;eu-central-1&quot;, &quot;ap-northeast-1&quot;, &quot;ap-northeast-2&quot;, &quot;ap-southeast-1&quot;,
&quot;ap-southeast-2&quot;, &quot;sa-east-1&quot; **/
      GatewayRegion: RegionId;
      /** A value that defines the type of gateway to activate. The type specified is
critical to all later functions of the gateway and cannot be changed after
activation. The default value is STORED. **/
      GatewayType?: GatewayType;
      /** The value that indicates the type of tape drive to use for gateway-VTL. This
field is optional.

Valid Values: &quot;IBM-ULT3580-TD5&quot; **/
      TapeDriveType?: TapeDriveType;
      /** The value that indicates the type of medium changer to use for gateway-VTL. This
field is optional.

Valid Values: &quot;STK-L700&quot;, &quot;AWS-Gateway-VTL&quot; **/
      MediumChangerType?: MediumChangerType;
    }
    export interface ActivateGatewayOutput {
      GatewayARN?: GatewayARN;
    }
    export interface AddCacheInput {
      GatewayARN: GatewayARN;
      DiskIds: DiskIds;
    }
    export interface AddCacheOutput {
      GatewayARN?: GatewayARN;
    }
    export interface AddTagsToResourceInput {
      /** The Amazon Resource Name (ARN) of the resource you want to add tags to. **/
      ResourceARN: ResourceARN;
      /** The key-value pair that represents the tag you want to add to the resource. The
value can be an empty string.

Valid characters for key and value are letters, spaces, and numbers
representable in UTF-8 format, and the following special characters: + - = . _ :
/ @. **/
      Tags: Tags;
    }
    export interface AddTagsToResourceOutput {
      /** The Amazon Resource Name (ARN) of the resource you want to add tags to. **/
      ResourceARN?: ResourceARN;
    }
    export interface AddUploadBufferInput {
      GatewayARN: GatewayARN;
      DiskIds: DiskIds;
    }
    export interface AddUploadBufferOutput {
      GatewayARN?: GatewayARN;
    }
    export interface AddWorkingStorageInput {
      GatewayARN: GatewayARN;
      /** An array of strings that identify disks that are to be configured as working
storage. Each string have a minimum length of 1 and maximum length of 300. You
can get the disk IDs from the ListLocalDisks API. **/
      DiskIds: DiskIds;
    }
    export interface AddWorkingStorageOutput {
      GatewayARN?: GatewayARN;
    }
    export interface CachediSCSIVolume {
      VolumeARN?: VolumeARN;
      VolumeId?: VolumeId;
      VolumeType?: VolumeType;
      VolumeStatus?: VolumeStatus;
      VolumeSizeInBytes?: long;
      VolumeProgress?: DoubleObject;
      SourceSnapshotId?: SnapshotId;
      VolumeiSCSIAttributes?: VolumeiSCSIAttributes;
    }
    export interface CancelArchivalInput {
      GatewayARN: GatewayARN;
      /** The Amazon Resource Name (ARN) of the virtual tape you want to cancel archiving
for. **/
      TapeARN: TapeARN;
    }
    export interface CancelArchivalOutput {
      /** The Amazon Resource Name (ARN) of the virtual tape for which archiving was
canceled. **/
      TapeARN?: TapeARN;
    }
    export interface CancelRetrievalInput {
      GatewayARN: GatewayARN;
      /** The Amazon Resource Name (ARN) of the virtual tape you want to cancel retrieval
for. **/
      TapeARN: TapeARN;
    }
    export interface CancelRetrievalOutput {
      /** The Amazon Resource Name (ARN) of the virtual tape for which retrieval was
canceled. **/
      TapeARN?: TapeARN;
    }
    export interface ChapInfo {
      /** The Amazon Resource Name (ARN) of the volume.

Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens
(-). **/
      TargetARN?: TargetARN;
      /** The secret key that the initiator (for example, the Windows client) must provide
to participate in mutual CHAP with the target. **/
      SecretToAuthenticateInitiator?: ChapSecret;
      /** The iSCSI initiator that connects to the target. **/
      InitiatorName?: IqnName;
      /** The secret key that the target must provide to participate in mutual CHAP with
the initiator (e.g. Windows client). **/
      SecretToAuthenticateTarget?: ChapSecret;
    }
    export interface CreateCachediSCSIVolumeInput {
      GatewayARN: GatewayARN;
      VolumeSizeInBytes: long;
      SnapshotId?: SnapshotId;
      TargetName: TargetName;
      NetworkInterfaceId: NetworkInterfaceId;
      ClientToken: ClientToken;
    }
    export interface CreateCachediSCSIVolumeOutput {
      VolumeARN?: VolumeARN;
      TargetARN?: TargetARN;
    }
    export interface CreateSnapshotFromVolumeRecoveryPointInput {
      VolumeARN: VolumeARN;
      SnapshotDescription: SnapshotDescription;
    }
    export interface CreateSnapshotFromVolumeRecoveryPointOutput {
      SnapshotId?: SnapshotId;
      VolumeARN?: VolumeARN;
      VolumeRecoveryPointTime?: string;
    }
    export interface CreateSnapshotInput {
      /** The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to
return a list of gateway volumes. **/
      VolumeARN: VolumeARN;
      /** Textual description of the snapshot that appears in the Amazon EC2 console,
Elastic Block Store snapshots panel in the Description field, and in the AWS
Storage Gateway snapshot Details pane, Description field **/
      SnapshotDescription: SnapshotDescription;
    }
    export interface CreateSnapshotOutput {
      /** The Amazon Resource Name (ARN) of the volume of which the snapshot was taken. **/
      VolumeARN?: VolumeARN;
      /** The snapshot ID that is used to refer to the snapshot in future operations such
as describing snapshots (Amazon Elastic Compute Cloud API DescribeSnapshots) or
creating a volume from a snapshot (CreateStorediSCSIVolume). **/
      SnapshotId?: SnapshotId;
    }
    export interface CreateStorediSCSIVolumeInput {
      GatewayARN: GatewayARN;
      /** The unique identifier for the gateway local disk that is configured as a stored
volume. Use ListLocalDisks
[http://docs.aws.amazon.com/storagegateway/latest/userguide/API_ListLocalDisks.html] 
to list disk IDs for a gateway. **/
      DiskId: DiskId;
      /** The snapshot ID (e.g. &quot;snap-1122aabb&quot;) of the snapshot to restore as the new
stored volume. Specify this field if you want to create the iSCSI storage volume
from a snapshot otherwise do not include this field. To list snapshots for your
account use DescribeSnapshots
[http://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html] 
in the Amazon Elastic Compute Cloud API Reference. **/
      SnapshotId?: SnapshotId;
      /** Specify this field as true if you want to preserve the data on the local disk.
Otherwise, specifying this field as false creates an empty volume.

Valid Values: true, false **/
      PreserveExistingData: boolean;
      /** The name of the iSCSI target used by initiators to connect to the target and as
a suffix for the target ARN. For example, specifying TargetName as myvolume 
results in the target ARN of
arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume.
The target name must be unique across all volumes of a gateway. **/
      TargetName: TargetName;
      /** The network interface of the gateway on which to expose the iSCSI target. Only
IPv4 addresses are accepted. Use DescribeGatewayInformation to get a list of the
network interfaces available on a gateway.

Valid Values: A valid IP address. **/
      NetworkInterfaceId: NetworkInterfaceId;
    }
    export interface CreateStorediSCSIVolumeOutput {
      /** The Amazon Resource Name (ARN) of the configured volume. **/
      VolumeARN?: VolumeARN;
      /** The size of the volume in bytes. **/
      VolumeSizeInBytes?: long;
      /** he Amazon Resource Name (ARN) of the volume target that includes the iSCSI name
that initiators can use to connect to the target. **/
      TargetARN?: TargetARN;
    }
    export interface CreateTapeWithBarcodeInput {
      /** The unique Amazon Resource Name (ARN) that represents the gateway to associate
the virtual tape with. Use the ListGateways operation to return a list of
gateways for your account and region. **/
      GatewayARN: GatewayARN;
      /** The size, in bytes, of the virtual tape that you want to create.

The size must be aligned by gigabyte (1024&amp;#42;1024*1024 byte). **/
      TapeSizeInBytes: TapeSize;
      /** The barcode that you want to assign to the tape. **/
      TapeBarcode: TapeBarcode;
    }
    export interface CreateTapeWithBarcodeOutput {
      /** A unique Amazon Resource Name (ARN) that represents the virtual tape that was
created. **/
      TapeARN?: TapeARN;
    }
    export interface CreateTapesInput {
      /** The unique Amazon Resource Name (ARN) that represents the gateway to associate
the virtual tapes with. Use the ListGateways operation to return a list of
gateways for your account and region. **/
      GatewayARN: GatewayARN;
      /** The size, in bytes, of the virtual tapes that you want to create.

The size must be aligned by gigabyte (1024&amp;#42;1024*1024 byte). **/
      TapeSizeInBytes: TapeSize;
      /** A unique identifier that you use to retry a request. If you retry a request, use
the same ClientToken you specified in the initial request.

Using the same ClientToken prevents creating the tape multiple times. **/
      ClientToken: ClientToken;
      /** The number of virtual tapes that you want to create. **/
      NumTapesToCreate: NumTapesToCreate;
      /** A prefix that you append to the barcode of the virtual tape you are creating.
This prefix makes the barcode unique.

The prefix must be 1 to 4 characters in length and must be one of the uppercase
letters from A to Z. **/
      TapeBarcodePrefix: TapeBarcodePrefix;
    }
    export interface CreateTapesOutput {
      /** A list of unique Amazon Resource Names (ARNs) that represents the virtual tapes
that were created. **/
      TapeARNs?: TapeARNs;
    }
    export interface DeleteBandwidthRateLimitInput {
      GatewayARN: GatewayARN;
      BandwidthType: BandwidthType;
    }
    export interface DeleteBandwidthRateLimitOutput {
      GatewayARN?: GatewayARN;
    }
    export interface DeleteChapCredentialsInput {
      /** The Amazon Resource Name (ARN) of the iSCSI volume target. Use the 
DescribeStorediSCSIVolumes operation to return to retrieve the TargetARN for
specified VolumeARN. **/
      TargetARN: TargetARN;
      /** The iSCSI initiator that connects to the target. **/
      InitiatorName: IqnName;
    }
    export interface DeleteChapCredentialsOutput {
      /** The Amazon Resource Name (ARN) of the target. **/
      TargetARN?: TargetARN;
      /** The iSCSI initiator that connects to the target. **/
      InitiatorName?: IqnName;
    }
    export interface DeleteGatewayInput {
      GatewayARN: GatewayARN;
    }
    export interface DeleteGatewayOutput {
      GatewayARN?: GatewayARN;
    }
    export interface DeleteSnapshotScheduleInput {
      VolumeARN: VolumeARN;
    }
    export interface DeleteSnapshotScheduleOutput {
      VolumeARN?: VolumeARN;
    }
    export interface DeleteTapeArchiveInput {
      /** The Amazon Resource Name (ARN) of the virtual tape to delete from the virtual
tape shelf (VTS). **/
      TapeARN: TapeARN;
    }
    export interface DeleteTapeArchiveOutput {
      /** The Amazon Resource Name (ARN) of the virtual tape that was deleted from the
virtual tape shelf (VTS). **/
      TapeARN?: TapeARN;
    }
    export interface DeleteTapeInput {
      /** The unique Amazon Resource Name (ARN) of the gateway that the virtual tape to
delete is associated with. Use the ListGateways operation to return a list of
gateways for your account and region. **/
      GatewayARN: GatewayARN;
      /** The Amazon Resource Name (ARN) of the virtual tape to delete. **/
      TapeARN: TapeARN;
    }
    export interface DeleteTapeOutput {
      /** The Amazon Resource Name (ARN) of the deleted virtual tape. **/
      TapeARN?: TapeARN;
    }
    export interface DeleteVolumeInput {
      /** The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to
return a list of gateway volumes. **/
      VolumeARN: VolumeARN;
    }
    export interface DeleteVolumeOutput {
      /** The Amazon Resource Name (ARN) of the storage volume that was deleted. It is the
same ARN you provided in the request. **/
      VolumeARN?: VolumeARN;
    }
    export interface DescribeBandwidthRateLimitInput {
      GatewayARN: GatewayARN;
    }
    export interface DescribeBandwidthRateLimitOutput {
      GatewayARN?: GatewayARN;
      /** The average upload bandwidth rate limit in bits per second. This field does not
appear in the response if the upload rate limit is not set. **/
      AverageUploadRateLimitInBitsPerSec?: BandwidthUploadRateLimit;
      /** The average download bandwidth rate limit in bits per second. This field does
not appear in the response if the download rate limit is not set. **/
      AverageDownloadRateLimitInBitsPerSec?: BandwidthDownloadRateLimit;
    }
    export interface DescribeCacheInput {
      GatewayARN: GatewayARN;
    }
    export interface DescribeCacheOutput {
      GatewayARN?: GatewayARN;
      DiskIds?: DiskIds;
      CacheAllocatedInBytes?: long;
      CacheUsedPercentage?: double;
      CacheDirtyPercentage?: double;
      CacheHitPercentage?: double;
      CacheMissPercentage?: double;
    }
    export interface DescribeCachediSCSIVolumesInput {
      VolumeARNs: VolumeARNs;
    }
    export interface DescribeCachediSCSIVolumesOutput {
      /** An array of objects where each object contains metadata about one cached volume. **/
      CachediSCSIVolumes?: CachediSCSIVolumes;
    }
    export interface DescribeChapCredentialsInput {
      /** The Amazon Resource Name (ARN) of the iSCSI volume target. Use the 
DescribeStorediSCSIVolumes operation to return to retrieve the TargetARN for
specified VolumeARN. **/
      TargetARN: TargetARN;
    }
    export interface DescribeChapCredentialsOutput {
      /** An array of ChapInfo objects that represent CHAP credentials. Each object in the
array contains CHAP credential information for one target-initiator pair. If no
CHAP credentials are set, an empty array is returned. CHAP credential
information is provided in a JSON object with the following fields:

&amp;#42;   InitiatorName: The iSCSI initiator that connects to the target.
 
 
*   SecretToAuthenticateInitiator: The secret key that the initiator (for
 example, the Windows client) must provide to participate in mutual CHAP with
 the target.
 
 
*   SecretToAuthenticateTarget: The secret key that the target must provide to
 participate in mutual CHAP with the initiator (e.g. Windows client).
 
 
*   TargetARN: The Amazon Resource Name (ARN) of the storage volume. **/
      ChapCredentials?: ChapCredentials;
    }
    export interface DescribeGatewayInformationInput {
      GatewayARN: GatewayARN;
    }
    export interface DescribeGatewayInformationOutput {
      GatewayARN?: GatewayARN;
      /** The unique identifier assigned to your gateway during activation. This ID
becomes part of the gateway Amazon Resource Name (ARN), which you use as input
for other operations. **/
      GatewayId?: GatewayId;
      /** The name you configured for your gateway. **/
      GatewayName?: string;
      /** A value that indicates the time zone configured for the gateway. **/
      GatewayTimezone?: GatewayTimezone;
      /** A value that indicates the operating state of the gateway. **/
      GatewayState?: GatewayState;
      /** A NetworkInterface array that contains descriptions of the gateway network
interfaces. **/
      GatewayNetworkInterfaces?: GatewayNetworkInterfaces;
      /** The type of the gateway. **/
      GatewayType?: GatewayType;
      /** The date on which an update to the gateway is available. This date is in the
time zone of the gateway. If the gateway is not available for an update this
field is not returned in the response. **/
      NextUpdateAvailabilityDate?: NextUpdateAvailabilityDate;
      /** The date on which the last software update was applied to the gateway. If the
gateway has never been updated, this field does not return a value in the
response. **/
      LastSoftwareUpdate?: LastSoftwareUpdate;
    }
    export interface DescribeMaintenanceStartTimeInput {
      GatewayARN: GatewayARN;
    }
    export interface DescribeMaintenanceStartTimeOutput {
      GatewayARN?: GatewayARN;
      HourOfDay?: HourOfDay;
      MinuteOfHour?: MinuteOfHour;
      DayOfWeek?: DayOfWeek;
      Timezone?: GatewayTimezone;
    }
    export interface DescribeSnapshotScheduleInput {
      /** The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to
return a list of gateway volumes. **/
      VolumeARN: VolumeARN;
    }
    export interface DescribeSnapshotScheduleOutput {
      VolumeARN?: VolumeARN;
      StartAt?: HourOfDay;
      RecurrenceInHours?: RecurrenceInHours;
      Description?: Description;
      Timezone?: GatewayTimezone;
    }
    export interface DescribeStorediSCSIVolumesInput {
      /** An array of strings where each string represents the Amazon Resource Name (ARN)
of a stored volume. All of the specified stored volumes must from the same
gateway. Use ListVolumes to get volume ARNs for a gateway. **/
      VolumeARNs: VolumeARNs;
    }
    export interface DescribeStorediSCSIVolumesOutput {
      StorediSCSIVolumes?: StorediSCSIVolumes;
    }
    export interface DescribeTapeArchivesInput {
      /** Specifies one or more unique Amazon Resource Names (ARNs) that represent the
virtual tapes you want to describe. **/
      TapeARNs?: TapeARNs;
      /** An opaque string that indicates the position at which to begin describing
virtual tapes. **/
      Marker?: Marker;
      /** Specifies that the number of virtual tapes descried be limited to the specified
number. **/
      Limit?: PositiveIntObject;
    }
    export interface DescribeTapeArchivesOutput {
      /** An array of virtual tape objects in the virtual tape shelf (VTS). The
description includes of the Amazon Resource Name(ARN) of the virtual tapes. The
information returned includes the Amazon Resource Names (ARNs) of the tapes,
size of the tapes, status of the tapes, progress of the description and tape
barcode. **/
      TapeArchives?: TapeArchives;
      /** An opaque string that indicates the position at which the virtual tapes that
were fetched for description ended. Use this marker in your next request to
fetch the next set of virtual tapes in the virtual tape shelf (VTS). If there
are no more virtual tapes to describe, this field does not appear in the
response. **/
      Marker?: Marker;
    }
    export interface DescribeTapeRecoveryPointsInput {
      GatewayARN: GatewayARN;
      /** An opaque string that indicates the position at which to begin describing the
virtual tape recovery points. **/
      Marker?: Marker;
      /** Specifies that the number of virtual tape recovery points that are described be
limited to the specified number. **/
      Limit?: PositiveIntObject;
    }
    export interface DescribeTapeRecoveryPointsOutput {
      GatewayARN?: GatewayARN;
      /** An array of TapeRecoveryPointInfos that are available for the specified gateway. **/
      TapeRecoveryPointInfos?: TapeRecoveryPointInfos;
      /** An opaque string that indicates the position at which the virtual tape recovery
points that were listed for description ended.

Use this marker in your next request to list the next set of virtual tape
recovery points in the list. If there are no more recovery points to describe,
this field does not appear in the response. **/
      Marker?: Marker;
    }
    export interface DescribeTapesInput {
      GatewayARN: GatewayARN;
      /** Specifies one or more unique Amazon Resource Names (ARNs) that represent the
virtual tapes you want to describe. If this parameter is not specified, AWS
Storage Gateway returns a description of all virtual tapes associated with the
specified gateway. **/
      TapeARNs?: TapeARNs;
      /** A marker value, obtained in a previous call to DescribeTapes. This marker
indicates which page of results to retrieve. 

If not specified, the first page of results is retrieved. **/
      Marker?: Marker;
      /** Specifies that the number of virtual tapes described be limited to the specified
number.

Amazon Web Services may impose its own limit, if this field is not set. **/
      Limit?: PositiveIntObject;
    }
    export interface DescribeTapesOutput {
      /** An array of virtual tape descriptions. **/
      Tapes?: Tapes;
      /** An opaque string which can be used as part of a subsequent DescribeTapes call to
retrieve the next page of results.

If a response does not contain a marker, then there are no more results to be
retrieved. **/
      Marker?: Marker;
    }
    export interface DescribeUploadBufferInput {
      GatewayARN: GatewayARN;
    }
    export interface DescribeUploadBufferOutput {
      GatewayARN?: GatewayARN;
      DiskIds?: DiskIds;
      UploadBufferUsedInBytes?: long;
      UploadBufferAllocatedInBytes?: long;
    }
    export interface DescribeVTLDevicesInput {
      GatewayARN: GatewayARN;
      /** An array of strings, where each string represents the Amazon Resource Name (ARN)
of a VTL device.

All of the specified VTL devices must be from the same gateway. If no VTL
devices are specified, the result will contain all devices on the specified
gateway. **/
      VTLDeviceARNs?: VTLDeviceARNs;
      /** An opaque string that indicates the position at which to begin describing the
VTL devices. **/
      Marker?: Marker;
      /** Specifies that the number of VTL devices described be limited to the specified
number. **/
      Limit?: PositiveIntObject;
    }
    export interface DescribeVTLDevicesOutput {
      GatewayARN?: GatewayARN;
      /** An array of VTL device objects composed of the Amazon Resource Name(ARN) of the
VTL devices. **/
      VTLDevices?: VTLDevices;
      /** An opaque string that indicates the position at which the VTL devices that were
fetched for description ended. Use the marker in your next request to fetch the
next set of VTL devices in the list. If there are no more VTL devices to
describe, this field does not appear in the response. **/
      Marker?: Marker;
    }
    export interface DescribeWorkingStorageInput {
      GatewayARN: GatewayARN;
    }
    export interface DescribeWorkingStorageOutput {
      GatewayARN?: GatewayARN;
      /** An array of the gateway&#x27;s local disk IDs that are configured as working storage.
Each local disk ID is specified as a string (minimum length of 1 and maximum
length of 300). If no local disks are configured as working storage, then the
DiskIds array is empty. **/
      DiskIds?: DiskIds;
      /** The total working storage in bytes in use by the gateway. If no working storage
is configured for the gateway, this field returns 0. **/
      WorkingStorageUsedInBytes?: long;
      /** The total working storage in bytes allocated for the gateway. If no working
storage is configured for the gateway, this field returns 0. **/
      WorkingStorageAllocatedInBytes?: long;
    }
    export interface DeviceiSCSIAttributes {
      /** Specifies the unique Amazon Resource Name(ARN) that encodes the iSCSI qualified
name(iqn) of a tape drive or media changer target. **/
      TargetARN?: TargetARN;
      /** The network interface identifier of the VTL device. **/
      NetworkInterfaceId?: NetworkInterfaceId;
      /** The port used to communicate with iSCSI VTL device targets. **/
      NetworkInterfacePort?: integer;
      /** Indicates whether mutual CHAP is enabled for the iSCSI target. **/
      ChapEnabled?: boolean;
    }
    export interface DisableGatewayInput {
      GatewayARN: GatewayARN;
    }
    export interface DisableGatewayOutput {
      /** The unique Amazon Resource Name of the disabled gateway. **/
      GatewayARN?: GatewayARN;
    }
    export interface Disk {
      DiskId?: DiskId;
      DiskPath?: string;
      DiskNode?: string;
      DiskStatus?: string;
      DiskSizeInBytes?: long;
      DiskAllocationType?: DiskAllocationType;
      DiskAllocationResource?: string;
    }
    export interface GatewayInfo {
      /** The unique identifier assigned to your gateway during activation. This ID
becomes part of the gateway Amazon Resource Name (ARN), which you use as input
for other operations. **/
      GatewayId?: GatewayId;
      /** The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to
return a list of gateways for your account and region. **/
      GatewayARN?: GatewayARN;
      /** The type of the gateway. **/
      GatewayType?: GatewayType;
      /** The state of the gateway.

Valid Values: DISABLED or ACTIVE **/
      GatewayOperationalState?: GatewayOperationalState;
      /** The name of the gateway. **/
      GatewayName?: string;
    }
    export interface InternalServerError {
      /** A human-readable message describing the error that occurred. **/
      message?: string;
      /** A StorageGatewayError that provides more information about the cause of the
error. **/
      error?: StorageGatewayError;
    }
    export interface InvalidGatewayRequestException {
      /** A human-readable message describing the error that occurred. **/
      message?: string;
      /** A StorageGatewayError that provides more detail about the cause of the error. **/
      error?: StorageGatewayError;
    }
    export interface ListGatewaysInput {
      /** An opaque string that indicates the position at which to begin the returned list
of gateways. **/
      Marker?: Marker;
      /** Specifies that the list of gateways returned be limited to the specified number
of items. **/
      Limit?: PositiveIntObject;
    }
    export interface ListGatewaysOutput {
      Gateways?: Gateways;
      Marker?: Marker;
    }
    export interface ListLocalDisksInput {
      GatewayARN: GatewayARN;
    }
    export interface ListLocalDisksOutput {
      GatewayARN?: GatewayARN;
      Disks?: Disks;
    }
    export interface ListTagsForResourceInput {
      /** The Amazon Resource Name (ARN) of the resource for which you want to list tags. **/
      ResourceARN: ResourceARN;
      /** An opaque string that indicates the position at which to begin returning the
list of tags. **/
      Marker?: Marker;
      /** Specifies that the list of tags returned be limited to the specified number of
items. **/
      Limit?: PositiveIntObject;
    }
    export interface ListTagsForResourceOutput {
      /** he Amazon Resource Name (ARN) of the resource for which you want to list tags. **/
      ResourceARN?: ResourceARN;
      /** An opaque string that indicates the position at which to stop returning the list
of tags. **/
      Marker?: Marker;
      /** An array that contains the tags for the specified resource. **/
      Tags?: Tags;
    }
    export interface ListTapesInput {
      TapeARNs?: TapeARNs;
      /** A string that indicates the position at which to begin the returned list of
tapes. **/
      Marker?: Marker;
      /** An optional number limit for the tapes in the list returned by this call. **/
      Limit?: PositiveIntObject;
    }
    export interface ListTapesOutput {
      TapeInfos?: TapeInfos;
      /** A string that indicates the position at which to begin returning the next list
of tapes. Use the marker in your next request to continue pagination of tapes.
If there are no more tapes to list, this element does not appear in the response
body. **/
      Marker?: Marker;
    }
    export interface ListVolumeInitiatorsInput {
      /** The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to
return a list of gateway volumes for the gateway. **/
      VolumeARN: VolumeARN;
    }
    export interface ListVolumeInitiatorsOutput {
      /** The host names and port numbers of all iSCSI initiators that are connected to
the gateway. **/
      Initiators?: Initiators;
    }
    export interface ListVolumeRecoveryPointsInput {
      GatewayARN: GatewayARN;
    }
    export interface ListVolumeRecoveryPointsOutput {
      GatewayARN?: GatewayARN;
      VolumeRecoveryPointInfos?: VolumeRecoveryPointInfos;
    }
    export interface ListVolumesInput {
      GatewayARN?: GatewayARN;
      /** A string that indicates the position at which to begin the returned list of
volumes. Obtain the marker from the response of a previous List iSCSI Volumes
request. **/
      Marker?: Marker;
      /** Specifies that the list of volumes returned be limited to the specified number
of items. **/
      Limit?: PositiveIntObject;
    }
    export interface ListVolumesOutput {
      GatewayARN?: GatewayARN;
      Marker?: Marker;
      VolumeInfos?: VolumeInfos;
    }
    export interface NetworkInterface {
      /** The Internet Protocol version 4 (IPv4) address of the interface. **/
      Ipv4Address?: string;
      /** The Media Access Control (MAC) address of the interface.

This is currently unsupported and will not be returned in output. **/
      MacAddress?: string;
      /** The Internet Protocol version 6 (IPv6) address of the interface. Currently not
supported. **/
      Ipv6Address?: string;
    }
    export interface RemoveTagsFromResourceInput {
      /** The Amazon Resource Name (ARN) of the resource you want to remove the tags from. **/
      ResourceARN: ResourceARN;
      /** The keys of the tags you want to remove from the specified resource. A tag is
composed of a key/value pair. **/
      TagKeys: TagKeys;
    }
    export interface RemoveTagsFromResourceOutput {
      /** The Amazon Resource Name (ARN) of the resource that the tags were removed from. **/
      ResourceARN?: ResourceARN;
    }
    export interface ResetCacheInput {
      GatewayARN: GatewayARN;
    }
    export interface ResetCacheOutput {
      GatewayARN?: GatewayARN;
    }
    export interface RetrieveTapeArchiveInput {
      /** The Amazon Resource Name (ARN) of the virtual tape you want to retrieve from the
virtual tape shelf (VTS). **/
      TapeARN: TapeARN;
      /** The Amazon Resource Name (ARN) of the gateway you want to retrieve the virtual
tape to. Use the ListGateways operation to return a list of gateways for your
account and region.

You retrieve archived virtual tapes to only one gateway and the gateway must be
a gateway-VTL. **/
      GatewayARN: GatewayARN;
    }
    export interface RetrieveTapeArchiveOutput {
      /** The Amazon Resource Name (ARN) of the retrieved virtual tape. **/
      TapeARN?: TapeARN;
    }
    export interface RetrieveTapeRecoveryPointInput {
      /** The Amazon Resource Name (ARN) of the virtual tape for which you want to
retrieve the recovery point. **/
      TapeARN: TapeARN;
      GatewayARN: GatewayARN;
    }
    export interface RetrieveTapeRecoveryPointOutput {
      /** The Amazon Resource Name (ARN) of the virtual tape for which the recovery point
was retrieved. **/
      TapeARN?: TapeARN;
    }
    export interface SetLocalConsolePasswordInput {
      GatewayARN: GatewayARN;
      /** The password you want to set for your VM local console. **/
      LocalConsolePassword: LocalConsolePassword;
    }
    export interface SetLocalConsolePasswordOutput {
      GatewayARN?: GatewayARN;
    }
    export interface ShutdownGatewayInput {
      GatewayARN: GatewayARN;
    }
    export interface ShutdownGatewayOutput {
      GatewayARN?: GatewayARN;
    }
    export interface StartGatewayInput {
      GatewayARN: GatewayARN;
    }
    export interface StartGatewayOutput {
      GatewayARN?: GatewayARN;
    }
    export interface StorageGatewayError {
      /** Additional information about the error. **/
      errorCode?: ErrorCode;
      /** Human-readable text that provides detail about the error that occurred. **/
      errorDetails?: errorDetails;
    }
    export interface StorediSCSIVolume {
      VolumeARN?: VolumeARN;
      VolumeId?: VolumeId;
      VolumeType?: VolumeType;
      VolumeStatus?: VolumeStatus;
      VolumeSizeInBytes?: long;
      VolumeProgress?: DoubleObject;
      VolumeDiskId?: DiskId;
      SourceSnapshotId?: SnapshotId;
      PreservedExistingData?: boolean;
      VolumeiSCSIAttributes?: VolumeiSCSIAttributes;
    }
    export interface Tag {
      Key: TagKey;
      Value: TagValue;
    }
    export interface Tape {
      /** The Amazon Resource Name (ARN) of the virtual tape. **/
      TapeARN?: TapeARN;
      /** The barcode that identifies a specific virtual tape. **/
      TapeBarcode?: TapeBarcode;
      /** The size, in bytes, of the virtual tape. **/
      TapeSizeInBytes?: TapeSize;
      /** The current state of the virtual tape. **/
      TapeStatus?: TapeStatus;
      /** The virtual tape library (VTL) device that the virtual tape is associated with. **/
      VTLDevice?: VTLDeviceARN;
      /** For archiving virtual tapes, indicates how much data remains to be uploaded
before archiving is complete.

Range: 0 (not started) to 100 (complete). **/
      Progress?: DoubleObject;
    }
    export interface TapeArchive {
      /** The Amazon Resource Name (ARN) of an archived virtual tape. **/
      TapeARN?: TapeARN;
      /** The barcode that identifies the archived virtual tape. **/
      TapeBarcode?: TapeBarcode;
      /** The size, in bytes, of the archived virtual tape. **/
      TapeSizeInBytes?: TapeSize;
      /** The time that the archiving of the virtual tape was completed.

The string format of the completion time is in the ISO8601 extended
YYYY-MM-DD&#x27;T&#x27;HH:MM:SS&#x27;Z&#x27; format. **/
      CompletionTime?: Time;
      /** The Amazon Resource Name (ARN) of the gateway-VTL that the virtual tape is being
retrieved to.

The virtual tape is retrieved from the virtual tape shelf (VTS). **/
      RetrievedTo?: GatewayARN;
      /** The current state of the archived virtual tape. **/
      TapeStatus?: TapeArchiveStatus;
    }
    export interface TapeInfo {
      /** The Amazon Resource Name (ARN) of a virtual tape. **/
      TapeARN?: TapeARN;
      /** The barcode that identifies a specific virtual tape. **/
      TapeBarcode?: TapeBarcode;
      /** The size, in bytes, of a virtual tape. **/
      TapeSizeInBytes?: TapeSize;
      /** The status of the tape. **/
      TapeStatus?: TapeStatus;
      /** The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to
return a list of gateways for your account and region. **/
      GatewayARN?: GatewayARN;
    }
    export interface TapeRecoveryPointInfo {
      /** The Amazon Resource Name (ARN) of the virtual tape. **/
      TapeARN?: TapeARN;
      /** The time when the point-in-time view of the virtual tape was replicated for
later recovery.

The string format of the tape recovery point time is in the ISO8601 extended
YYYY-MM-DD&#x27;T&#x27;HH:MM:SS&#x27;Z&#x27; format. **/
      TapeRecoveryPointTime?: Time;
      /** The size, in bytes, of the virtual tapes to recover. **/
      TapeSizeInBytes?: TapeSize;
      TapeStatus?: TapeRecoveryPointStatus;
    }
    export interface UpdateBandwidthRateLimitInput {
      GatewayARN: GatewayARN;
      /** The average upload bandwidth rate limit in bits per second. **/
      AverageUploadRateLimitInBitsPerSec?: BandwidthUploadRateLimit;
      /** The average download bandwidth rate limit in bits per second. **/
      AverageDownloadRateLimitInBitsPerSec?: BandwidthDownloadRateLimit;
    }
    export interface UpdateBandwidthRateLimitOutput {
      GatewayARN?: GatewayARN;
    }
    export interface UpdateChapCredentialsInput {
      /** The Amazon Resource Name (ARN) of the iSCSI volume target. Use the 
DescribeStorediSCSIVolumes operation to return the TargetARN for specified
VolumeARN. **/
      TargetARN: TargetARN;
      /** The secret key that the initiator (for example, the Windows client) must provide
to participate in mutual CHAP with the target.

The secret key must be between 12 and 16 bytes when encoded in UTF-8. **/
      SecretToAuthenticateInitiator: ChapSecret;
      /** The iSCSI initiator that connects to the target. **/
      InitiatorName: IqnName;
      /** The secret key that the target must provide to participate in mutual CHAP with
the initiator (e.g. Windows client).

Byte constraints: Minimum bytes of 12. Maximum bytes of 16.

The secret key must be between 12 and 16 bytes when encoded in UTF-8. **/
      SecretToAuthenticateTarget?: ChapSecret;
    }
    export interface UpdateChapCredentialsOutput {
      /** The Amazon Resource Name (ARN) of the target. This is the same target specified
in the request. **/
      TargetARN?: TargetARN;
      /** The iSCSI initiator that connects to the target. This is the same initiator name
specified in the request. **/
      InitiatorName?: IqnName;
    }
    export interface UpdateGatewayInformationInput {
      GatewayARN: GatewayARN;
      GatewayName?: GatewayName;
      GatewayTimezone?: GatewayTimezone;
    }
    export interface UpdateGatewayInformationOutput {
      GatewayARN?: GatewayARN;
      GatewayName?: string;
    }
    export interface UpdateGatewaySoftwareNowInput {
      GatewayARN: GatewayARN;
    }
    export interface UpdateGatewaySoftwareNowOutput {
      GatewayARN?: GatewayARN;
    }
    export interface UpdateMaintenanceStartTimeInput {
      GatewayARN: GatewayARN;
      /** The hour component of the maintenance start time represented as hh, where hh is
the hour (00 to 23). The hour of the day is in the time zone of the gateway. **/
      HourOfDay: HourOfDay;
      /** The minute component of the maintenance start time represented as mm, where mm 
is the minute (00 to 59). The minute of the hour is in the time zone of the
gateway. **/
      MinuteOfHour: MinuteOfHour;
      /** The maintenance start time day of the week. **/
      DayOfWeek: DayOfWeek;
    }
    export interface UpdateMaintenanceStartTimeOutput {
      GatewayARN?: GatewayARN;
    }
    export interface UpdateSnapshotScheduleInput {
      /** The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to
return a list of gateway volumes. **/
      VolumeARN: VolumeARN;
      /** The hour of the day at which the snapshot schedule begins represented as hh,
where hh is the hour (0 to 23). The hour of the day is in the time zone of the
gateway. **/
      StartAt: HourOfDay;
      /** Frequency of snapshots. Specify the number of hours between snapshots. **/
      RecurrenceInHours: RecurrenceInHours;
      /** Optional description of the snapshot that overwrites the existing description. **/
      Description?: Description;
    }
    export interface UpdateSnapshotScheduleOutput {
      /**  **/
      VolumeARN?: VolumeARN;
    }
    export interface UpdateVTLDeviceTypeInput {
      /** The Amazon Resource Name (ARN) of the medium changer you want to select. **/
      VTLDeviceARN: VTLDeviceARN;
      /** The type of medium changer you want to select.

Valid Values: &quot;STK-L700&quot;, &quot;AWS-Gateway-VTL&quot; **/
      DeviceType: DeviceType;
    }
    export interface UpdateVTLDeviceTypeOutput {
      /** The Amazon Resource Name (ARN) of the medium changer you have selected. **/
      VTLDeviceARN?: VTLDeviceARN;
    }
    export interface VTLDevice {
      /** Specifies the unique Amazon Resource Name (ARN) of the device (tape drive or
media changer). **/
      VTLDeviceARN?: VTLDeviceARN;
      VTLDeviceType?: VTLDeviceType;
      VTLDeviceVendor?: VTLDeviceVendor;
      VTLDeviceProductIdentifier?: VTLDeviceProductIdentifier;
      /** A list of iSCSI information about a VTL device. **/
      DeviceiSCSIAttributes?: DeviceiSCSIAttributes;
    }
    export interface VolumeInfo {
      /** The Amazon Resource Name (ARN) for the storage volume. For example, the
following is a valid ARN:

 
arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB 

Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens
(-). **/
      VolumeARN?: VolumeARN;
      /** The unique identifier assigned to the volume. This ID becomes part of the volume
Amazon Resource Name (ARN), which you use as input for other operations.

Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens
(-). **/
      VolumeId?: VolumeId;
      GatewayARN?: GatewayARN;
      /** The unique identifier assigned to your gateway during activation. This ID
becomes part of the gateway Amazon Resource Name (ARN), which you use as input
for other operations.

Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens
(-). **/
      GatewayId?: GatewayId;
      VolumeType?: VolumeType;
      /** The size, in bytes, of the volume.

Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens
(-). **/
      VolumeSizeInBytes?: long;
    }
    export interface VolumeRecoveryPointInfo {
      VolumeARN?: VolumeARN;
      VolumeSizeInBytes?: long;
      VolumeUsageInBytes?: long;
      VolumeRecoveryPointTime?: string;
    }
    export interface VolumeiSCSIAttributes {
      /** The Amazon Resource Name (ARN) of the volume target. **/
      TargetARN?: TargetARN;
      /** The network interface identifier. **/
      NetworkInterfaceId?: NetworkInterfaceId;
      /** The port used to communicate with iSCSI targets. **/
      NetworkInterfacePort?: integer;
      /** The logical disk number. **/
      LunNumber?: PositiveIntObject;
      /** Indicates whether mutual CHAP is enabled for the iSCSI target. **/
      ChapEnabled?: boolean;
    }
  }
}
