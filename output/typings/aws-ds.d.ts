// Type definitions for aws-sdk - AWS Directory Service
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2015-04-16
    * endpointPrefix: ds
    * serviceAbbreviation: Directory Service
    * signatureVersion: v4
    * protocol: json
    *
    * AWS Directory Service This is the AWS Directory Service API Reference. This guide provides detailed
 information about AWS Directory Service operations, data types, parameters, and
 errors.
    *
    */
  export class DirectoryService extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * If the DNS server for your on-premises domain uses a publicly addressable IP
address, you must add a CIDR address block to correctly route traffic to and
from your Microsoft AD on Amazon Web Services. AddIpRoutes adds this address
block. You can also use AddIpRoutes to facilitate routing traffic that uses
public IP ranges from your Microsoft AD on AWS to a peer VPC.
     *
     * @error EntityDoesNotExistException   
     * @error EntityAlreadyExistsException   
     * @error InvalidParameterException   
     * @error DirectoryUnavailableException   
     * @error IpRouteLimitExceededException   
     * @error ClientException   
     * @error ServiceException   
     */
    addIpRoutes(params: DirectoryService.AddIpRoutesRequest, callback?: (err: DirectoryService.EntityDoesNotExistException | DirectoryService.EntityAlreadyExistsException | DirectoryService.InvalidParameterException | DirectoryService.DirectoryUnavailableException | DirectoryService.IpRouteLimitExceededException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.AddIpRoutesResult | any) => void): Request<DirectoryService.AddIpRoutesResult | any, DirectoryService.EntityDoesNotExistException | DirectoryService.EntityAlreadyExistsException | DirectoryService.InvalidParameterException | DirectoryService.DirectoryUnavailableException | DirectoryService.IpRouteLimitExceededException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Adds or overwrites one or more tags for the specified Amazon Directory Services
directory. Each directory can have a maximum of 10 tags. Each tag consists of a
key and optional value. Tag keys must be unique to each resource.
     *
     * @error EntityDoesNotExistException   
     * @error InvalidParameterException   
     * @error TagLimitExceededException   
     * @error ClientException   
     * @error ServiceException   
     */
    addTagsToResource(params: DirectoryService.AddTagsToResourceRequest, callback?: (err: DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.TagLimitExceededException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.AddTagsToResourceResult | any) => void): Request<DirectoryService.AddTagsToResourceResult | any, DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.TagLimitExceededException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Creates an AD Connector to connect to an on-premises directory.
     *
     * @error DirectoryLimitExceededException   
     * @error InvalidParameterException   
     * @error ClientException   
     * @error ServiceException   
     */
    connectDirectory(params: DirectoryService.ConnectDirectoryRequest, callback?: (err: DirectoryService.DirectoryLimitExceededException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.ConnectDirectoryResult | any) => void): Request<DirectoryService.ConnectDirectoryResult | any, DirectoryService.DirectoryLimitExceededException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Creates an alias for a directory and assigns the alias to the directory. The
alias is used to construct the access URL for the directory, such as 
http://&lt;alias&gt;.awsapps.com.

After an alias has been created, it cannot be deleted or reused, so this
operation should only be used when absolutely necessary.
     *
     * @error EntityAlreadyExistsException   
     * @error EntityDoesNotExistException   
     * @error InvalidParameterException   
     * @error ClientException   
     * @error ServiceException   
     */
    createAlias(params: DirectoryService.CreateAliasRequest, callback?: (err: DirectoryService.EntityAlreadyExistsException | DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.CreateAliasResult | any) => void): Request<DirectoryService.CreateAliasResult | any, DirectoryService.EntityAlreadyExistsException | DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Creates a computer account in the specified directory, and joins the computer to
the directory.
     *
     * @error AuthenticationFailedException   
     * @error DirectoryUnavailableException   
     * @error EntityAlreadyExistsException   
     * @error EntityDoesNotExistException   
     * @error InvalidParameterException   
     * @error UnsupportedOperationException   
     * @error ClientException   
     * @error ServiceException   
     */
    createComputer(params: DirectoryService.CreateComputerRequest, callback?: (err: DirectoryService.AuthenticationFailedException | DirectoryService.DirectoryUnavailableException | DirectoryService.EntityAlreadyExistsException | DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.UnsupportedOperationException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.CreateComputerResult | any) => void): Request<DirectoryService.CreateComputerResult | any, DirectoryService.AuthenticationFailedException | DirectoryService.DirectoryUnavailableException | DirectoryService.EntityAlreadyExistsException | DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.UnsupportedOperationException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Creates a conditional forwarder associated with your AWS directory. Conditional
forwarders are required in order to set up a trust relationship with another
domain. The conditional forwarder points to the trusted domain.
     *
     * @error EntityAlreadyExistsException   
     * @error EntityDoesNotExistException   
     * @error DirectoryUnavailableException   
     * @error InvalidParameterException   
     * @error UnsupportedOperationException   
     * @error ClientException   
     * @error ServiceException   
     */
    createConditionalForwarder(params: DirectoryService.CreateConditionalForwarderRequest, callback?: (err: DirectoryService.EntityAlreadyExistsException | DirectoryService.EntityDoesNotExistException | DirectoryService.DirectoryUnavailableException | DirectoryService.InvalidParameterException | DirectoryService.UnsupportedOperationException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.CreateConditionalForwarderResult | any) => void): Request<DirectoryService.CreateConditionalForwarderResult | any, DirectoryService.EntityAlreadyExistsException | DirectoryService.EntityDoesNotExistException | DirectoryService.DirectoryUnavailableException | DirectoryService.InvalidParameterException | DirectoryService.UnsupportedOperationException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Creates a Simple AD directory.
     *
     * @error DirectoryLimitExceededException   
     * @error InvalidParameterException   
     * @error ClientException   
     * @error ServiceException   
     */
    createDirectory(params: DirectoryService.CreateDirectoryRequest, callback?: (err: DirectoryService.DirectoryLimitExceededException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.CreateDirectoryResult | any) => void): Request<DirectoryService.CreateDirectoryResult | any, DirectoryService.DirectoryLimitExceededException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Creates a Microsoft AD in the AWS cloud.
     *
     * @error DirectoryLimitExceededException   
     * @error InvalidParameterException   
     * @error ClientException   
     * @error ServiceException   
     * @error UnsupportedOperationException   
     */
    createMicrosoftAD(params: DirectoryService.CreateMicrosoftADRequest, callback?: (err: DirectoryService.DirectoryLimitExceededException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | DirectoryService.UnsupportedOperationException | any, data: DirectoryService.CreateMicrosoftADResult | any) => void): Request<DirectoryService.CreateMicrosoftADResult | any, DirectoryService.DirectoryLimitExceededException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | DirectoryService.UnsupportedOperationException | any>;
    /**
     * Creates a snapshot of a Simple AD or Microsoft AD directory in the AWS cloud.

You cannot take snapshots of AD Connector directories.
     *
     * @error EntityDoesNotExistException   
     * @error InvalidParameterException   
     * @error SnapshotLimitExceededException   
     * @error ClientException   
     * @error ServiceException   
     */
    createSnapshot(params: DirectoryService.CreateSnapshotRequest, callback?: (err: DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.SnapshotLimitExceededException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.CreateSnapshotResult | any) => void): Request<DirectoryService.CreateSnapshotResult | any, DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.SnapshotLimitExceededException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * AWS Directory Service for Microsoft Active Directory allows you to configure
trust relationships. For example, you can establish a trust between your
Microsoft AD in the AWS cloud, and your existing on-premises Microsoft Active
Directory. This would allow you to provide users and groups access to resources
in either domain, with a single set of credentials.

This action initiates the creation of the AWS side of a trust relationship
between a Microsoft AD in the AWS cloud and an external domain.
     *
     * @error EntityAlreadyExistsException   
     * @error EntityDoesNotExistException   
     * @error InvalidParameterException   
     * @error ClientException   
     * @error ServiceException   
     * @error UnsupportedOperationException   
     */
    createTrust(params: DirectoryService.CreateTrustRequest, callback?: (err: DirectoryService.EntityAlreadyExistsException | DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | DirectoryService.UnsupportedOperationException | any, data: DirectoryService.CreateTrustResult | any) => void): Request<DirectoryService.CreateTrustResult | any, DirectoryService.EntityAlreadyExistsException | DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | DirectoryService.UnsupportedOperationException | any>;
    /**
     * Deletes a conditional forwarder that has been set up for your AWS directory.
     *
     * @error EntityDoesNotExistException   
     * @error DirectoryUnavailableException   
     * @error InvalidParameterException   
     * @error UnsupportedOperationException   
     * @error ClientException   
     * @error ServiceException   
     */
    deleteConditionalForwarder(params: DirectoryService.DeleteConditionalForwarderRequest, callback?: (err: DirectoryService.EntityDoesNotExistException | DirectoryService.DirectoryUnavailableException | DirectoryService.InvalidParameterException | DirectoryService.UnsupportedOperationException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.DeleteConditionalForwarderResult | any) => void): Request<DirectoryService.DeleteConditionalForwarderResult | any, DirectoryService.EntityDoesNotExistException | DirectoryService.DirectoryUnavailableException | DirectoryService.InvalidParameterException | DirectoryService.UnsupportedOperationException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Deletes an AWS Directory Service directory.
     *
     * @error EntityDoesNotExistException   
     * @error ClientException   
     * @error ServiceException   
     */
    deleteDirectory(params: DirectoryService.DeleteDirectoryRequest, callback?: (err: DirectoryService.EntityDoesNotExistException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.DeleteDirectoryResult | any) => void): Request<DirectoryService.DeleteDirectoryResult | any, DirectoryService.EntityDoesNotExistException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Deletes a directory snapshot.
     *
     * @error EntityDoesNotExistException   
     * @error InvalidParameterException   
     * @error ClientException   
     * @error ServiceException   
     */
    deleteSnapshot(params: DirectoryService.DeleteSnapshotRequest, callback?: (err: DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.DeleteSnapshotResult | any) => void): Request<DirectoryService.DeleteSnapshotResult | any, DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Deletes an existing trust relationship between your Microsoft AD in the AWS
cloud and an external domain.
     *
     * @error EntityDoesNotExistException   
     * @error InvalidParameterException   
     * @error ClientException   
     * @error ServiceException   
     * @error UnsupportedOperationException   
     */
    deleteTrust(params: DirectoryService.DeleteTrustRequest, callback?: (err: DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | DirectoryService.UnsupportedOperationException | any, data: DirectoryService.DeleteTrustResult | any) => void): Request<DirectoryService.DeleteTrustResult | any, DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | DirectoryService.UnsupportedOperationException | any>;
    /**
     * Removes the specified directory as a publisher to the specified SNS topic.
     *
     * @error EntityDoesNotExistException   
     * @error InvalidParameterException   
     * @error ClientException   
     * @error ServiceException   
     */
    deregisterEventTopic(params: DirectoryService.DeregisterEventTopicRequest, callback?: (err: DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.DeregisterEventTopicResult | any) => void): Request<DirectoryService.DeregisterEventTopicResult | any, DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Obtains information about the conditional forwarders for this account.

If no input parameters are provided for RemoteDomainNames, this request
describes all conditional forwarders for the specified directory ID.
     *
     * @error EntityDoesNotExistException   
     * @error DirectoryUnavailableException   
     * @error InvalidParameterException   
     * @error UnsupportedOperationException   
     * @error ClientException   
     * @error ServiceException   
     */
    describeConditionalForwarders(params: DirectoryService.DescribeConditionalForwardersRequest, callback?: (err: DirectoryService.EntityDoesNotExistException | DirectoryService.DirectoryUnavailableException | DirectoryService.InvalidParameterException | DirectoryService.UnsupportedOperationException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.DescribeConditionalForwardersResult | any) => void): Request<DirectoryService.DescribeConditionalForwardersResult | any, DirectoryService.EntityDoesNotExistException | DirectoryService.DirectoryUnavailableException | DirectoryService.InvalidParameterException | DirectoryService.UnsupportedOperationException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Obtains information about the directories that belong to this account.

You can retrieve information about specific directories by passing the directory
identifiers in the DirectoryIds parameter. Otherwise, all directories that
belong to the current account are returned.

This operation supports pagination with the use of the NextToken request and
response parameters. If more results are available, the 
DescribeDirectoriesResult.NextToken member contains a token that you pass in the
next call to DescribeDirectories to retrieve the next set of items.

You can also specify a maximum number of return results with the Limit 
parameter.
     *
     * @error EntityDoesNotExistException   
     * @error InvalidParameterException   
     * @error InvalidNextTokenException   
     * @error ClientException   
     * @error ServiceException   
     */
    describeDirectories(params: DirectoryService.DescribeDirectoriesRequest, callback?: (err: DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.InvalidNextTokenException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.DescribeDirectoriesResult | any) => void): Request<DirectoryService.DescribeDirectoriesResult | any, DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.InvalidNextTokenException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Obtains information about which SNS topics receive status messages from the
specified directory.

If no input parameters are provided, such as DirectoryId or TopicName, this
request describes all of the associations in the account.
     *
     * @error EntityDoesNotExistException   
     * @error InvalidParameterException   
     * @error ClientException   
     * @error ServiceException   
     */
    describeEventTopics(params: DirectoryService.DescribeEventTopicsRequest, callback?: (err: DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.DescribeEventTopicsResult | any) => void): Request<DirectoryService.DescribeEventTopicsResult | any, DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Obtains information about the directory snapshots that belong to this account.

This operation supports pagination with the use of the NextToken request and
response parameters. If more results are available, the 
DescribeSnapshots.NextToken member contains a token that you pass in the next
call to DescribeSnapshots to retrieve the next set of items.

You can also specify a maximum number of return results with the Limit 
parameter.
     *
     * @error EntityDoesNotExistException   
     * @error InvalidParameterException   
     * @error InvalidNextTokenException   
     * @error ClientException   
     * @error ServiceException   
     */
    describeSnapshots(params: DirectoryService.DescribeSnapshotsRequest, callback?: (err: DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.InvalidNextTokenException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.DescribeSnapshotsResult | any) => void): Request<DirectoryService.DescribeSnapshotsResult | any, DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.InvalidNextTokenException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Obtains information about the trust relationships for this account.

If no input parameters are provided, such as DirectoryId or TrustIds, this
request describes all the trust relationships belonging to the account.
     *
     * @error EntityDoesNotExistException   
     * @error InvalidNextTokenException   
     * @error InvalidParameterException   
     * @error ClientException   
     * @error ServiceException   
     * @error UnsupportedOperationException   
     */
    describeTrusts(params: DirectoryService.DescribeTrustsRequest, callback?: (err: DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidNextTokenException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | DirectoryService.UnsupportedOperationException | any, data: DirectoryService.DescribeTrustsResult | any) => void): Request<DirectoryService.DescribeTrustsResult | any, DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidNextTokenException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | DirectoryService.UnsupportedOperationException | any>;
    /**
     * Disables multi-factor authentication (MFA) with the Remote Authentication Dial
In User Service (RADIUS) server for an AD Connector directory.
     *
     * @error EntityDoesNotExistException   
     * @error ClientException   
     * @error ServiceException   
     */
    disableRadius(params: DirectoryService.DisableRadiusRequest, callback?: (err: DirectoryService.EntityDoesNotExistException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.DisableRadiusResult | any) => void): Request<DirectoryService.DisableRadiusResult | any, DirectoryService.EntityDoesNotExistException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Disables single-sign on for a directory.
     *
     * @error EntityDoesNotExistException   
     * @error InsufficientPermissionsException   
     * @error AuthenticationFailedException   
     * @error ClientException   
     * @error ServiceException   
     */
    disableSso(params: DirectoryService.DisableSsoRequest, callback?: (err: DirectoryService.EntityDoesNotExistException | DirectoryService.InsufficientPermissionsException | DirectoryService.AuthenticationFailedException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.DisableSsoResult | any) => void): Request<DirectoryService.DisableSsoResult | any, DirectoryService.EntityDoesNotExistException | DirectoryService.InsufficientPermissionsException | DirectoryService.AuthenticationFailedException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Enables multi-factor authentication (MFA) with the Remote Authentication Dial In
User Service (RADIUS) server for an AD Connector directory.
     *
     * @error InvalidParameterException   
     * @error EntityAlreadyExistsException   
     * @error EntityDoesNotExistException   
     * @error ClientException   
     * @error ServiceException   
     */
    enableRadius(params: DirectoryService.EnableRadiusRequest, callback?: (err: DirectoryService.InvalidParameterException | DirectoryService.EntityAlreadyExistsException | DirectoryService.EntityDoesNotExistException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.EnableRadiusResult | any) => void): Request<DirectoryService.EnableRadiusResult | any, DirectoryService.InvalidParameterException | DirectoryService.EntityAlreadyExistsException | DirectoryService.EntityDoesNotExistException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Enables single-sign on for a directory.
     *
     * @error EntityDoesNotExistException   
     * @error InsufficientPermissionsException   
     * @error AuthenticationFailedException   
     * @error ClientException   
     * @error ServiceException   
     */
    enableSso(params: DirectoryService.EnableSsoRequest, callback?: (err: DirectoryService.EntityDoesNotExistException | DirectoryService.InsufficientPermissionsException | DirectoryService.AuthenticationFailedException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.EnableSsoResult | any) => void): Request<DirectoryService.EnableSsoResult | any, DirectoryService.EntityDoesNotExistException | DirectoryService.InsufficientPermissionsException | DirectoryService.AuthenticationFailedException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Obtains directory limit information for the current region.
     *
     * @error EntityDoesNotExistException   
     * @error ClientException   
     * @error ServiceException   
     */
    getDirectoryLimits(params: DirectoryService.GetDirectoryLimitsRequest, callback?: (err: DirectoryService.EntityDoesNotExistException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.GetDirectoryLimitsResult | any) => void): Request<DirectoryService.GetDirectoryLimitsResult | any, DirectoryService.EntityDoesNotExistException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Obtains the manual snapshot limits for a directory.
     *
     * @error EntityDoesNotExistException   
     * @error ClientException   
     * @error ServiceException   
     */
    getSnapshotLimits(params: DirectoryService.GetSnapshotLimitsRequest, callback?: (err: DirectoryService.EntityDoesNotExistException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.GetSnapshotLimitsResult | any) => void): Request<DirectoryService.GetSnapshotLimitsResult | any, DirectoryService.EntityDoesNotExistException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Lists the address blocks that you have added to a directory.
     *
     * @error EntityDoesNotExistException   
     * @error InvalidNextTokenException   
     * @error InvalidParameterException   
     * @error ClientException   
     * @error ServiceException   
     */
    listIpRoutes(params: DirectoryService.ListIpRoutesRequest, callback?: (err: DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidNextTokenException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.ListIpRoutesResult | any) => void): Request<DirectoryService.ListIpRoutesResult | any, DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidNextTokenException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Lists all tags on an Amazon Directory Services directory.
     *
     * @error EntityDoesNotExistException   
     * @error InvalidNextTokenException   
     * @error InvalidParameterException   
     * @error ClientException   
     * @error ServiceException   
     */
    listTagsForResource(params: DirectoryService.ListTagsForResourceRequest, callback?: (err: DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidNextTokenException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.ListTagsForResourceResult | any) => void): Request<DirectoryService.ListTagsForResourceResult | any, DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidNextTokenException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Associates a directory with an SNS topic. This establishes the directory as a
publisher to the specified SNS topic. You can then receive email or text (SMS)
messages when the status of your directory changes. You get notified if your
directory goes from an Active status to an Impaired or Inoperable status. You
also receive a notification when the directory returns to an Active status.
     *
     * @error EntityDoesNotExistException   
     * @error InvalidParameterException   
     * @error ClientException   
     * @error ServiceException   
     */
    registerEventTopic(params: DirectoryService.RegisterEventTopicRequest, callback?: (err: DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.RegisterEventTopicResult | any) => void): Request<DirectoryService.RegisterEventTopicResult | any, DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Removes IP address blocks from a directory.
     *
     * @error EntityDoesNotExistException   
     * @error InvalidParameterException   
     * @error DirectoryUnavailableException   
     * @error ClientException   
     * @error ServiceException   
     */
    removeIpRoutes(params: DirectoryService.RemoveIpRoutesRequest, callback?: (err: DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.DirectoryUnavailableException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.RemoveIpRoutesResult | any) => void): Request<DirectoryService.RemoveIpRoutesResult | any, DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.DirectoryUnavailableException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Removes tags from an Amazon Directory Services directory.
     *
     * @error EntityDoesNotExistException   
     * @error InvalidParameterException   
     * @error ClientException   
     * @error ServiceException   
     */
    removeTagsFromResource(params: DirectoryService.RemoveTagsFromResourceRequest, callback?: (err: DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.RemoveTagsFromResourceResult | any) => void): Request<DirectoryService.RemoveTagsFromResourceResult | any, DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Restores a directory using an existing directory snapshot.

When you restore a directory from a snapshot, any changes made to the directory
after the snapshot date are overwritten.

This action returns as soon as the restore operation is initiated. You can
monitor the progress of the restore operation by calling the DescribeDirectories 
operation with the directory identifier. When the DirectoryDescription.Stage 
value changes to Active, the restore operation is complete.
     *
     * @error EntityDoesNotExistException   
     * @error InvalidParameterException   
     * @error ClientException   
     * @error ServiceException   
     */
    restoreFromSnapshot(params: DirectoryService.RestoreFromSnapshotRequest, callback?: (err: DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.RestoreFromSnapshotResult | any) => void): Request<DirectoryService.RestoreFromSnapshotResult | any, DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Updates a conditional forwarder that has been set up for your AWS directory.
     *
     * @error EntityDoesNotExistException   
     * @error DirectoryUnavailableException   
     * @error InvalidParameterException   
     * @error UnsupportedOperationException   
     * @error ClientException   
     * @error ServiceException   
     */
    updateConditionalForwarder(params: DirectoryService.UpdateConditionalForwarderRequest, callback?: (err: DirectoryService.EntityDoesNotExistException | DirectoryService.DirectoryUnavailableException | DirectoryService.InvalidParameterException | DirectoryService.UnsupportedOperationException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.UpdateConditionalForwarderResult | any) => void): Request<DirectoryService.UpdateConditionalForwarderResult | any, DirectoryService.EntityDoesNotExistException | DirectoryService.DirectoryUnavailableException | DirectoryService.InvalidParameterException | DirectoryService.UnsupportedOperationException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * Updates the Remote Authentication Dial In User Service (RADIUS) server
information for an AD Connector directory.
     *
     * @error InvalidParameterException   
     * @error EntityDoesNotExistException   
     * @error ClientException   
     * @error ServiceException   
     */
    updateRadius(params: DirectoryService.UpdateRadiusRequest, callback?: (err: DirectoryService.InvalidParameterException | DirectoryService.EntityDoesNotExistException | DirectoryService.ClientException | DirectoryService.ServiceException | any, data: DirectoryService.UpdateRadiusResult | any) => void): Request<DirectoryService.UpdateRadiusResult | any, DirectoryService.InvalidParameterException | DirectoryService.EntityDoesNotExistException | DirectoryService.ClientException | DirectoryService.ServiceException | any>;
    /**
     * AWS Directory Service for Microsoft Active Directory allows you to configure and
verify trust relationships.

This action verifies a trust relationship between your Microsoft AD in the AWS
cloud and an external domain.
     *
     * @error EntityDoesNotExistException   
     * @error InvalidParameterException   
     * @error ClientException   
     * @error ServiceException   
     * @error UnsupportedOperationException   
     */
    verifyTrust(params: DirectoryService.VerifyTrustRequest, callback?: (err: DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | DirectoryService.UnsupportedOperationException | any, data: DirectoryService.VerifyTrustResult | any) => void): Request<DirectoryService.VerifyTrustResult | any, DirectoryService.EntityDoesNotExistException | DirectoryService.InvalidParameterException | DirectoryService.ClientException | DirectoryService.ServiceException | DirectoryService.UnsupportedOperationException | any>;

  }

  export module DirectoryService {

    export type AccessUrl = string;

    export type AddedDateTime = number;

    export type AliasName = string;

    export type AttributeName = string;

    export type AttributeValue = string;

    export type Attributes = Attribute[];

    export type AvailabilityZone = string;

    export type AvailabilityZones = AvailabilityZone[];

    export type CidrIp = string;

    export type CidrIps = CidrIp[];

    export type CloudOnlyDirectoriesLimitReached = boolean;

    export type ComputerName = string;

    export type ComputerPassword = string;

    export type ConditionalForwarders = ConditionalForwarder[];

    export type ConnectPassword = string;

    export type ConnectedDirectoriesLimitReached = boolean;

    export type CreatedDateTime = number;

    export type DeleteAssociatedConditionalForwarder = boolean;

    export type Description = string;

    export type DirectoryDescriptions = DirectoryDescription[];

    export type DirectoryId = string;

    export type DirectoryIds = DirectoryId[];

    export type DirectoryName = string;

    export type DirectoryShortName = string;

    export type DirectorySize = string;

    export type DirectoryStage = string;

    export type DirectoryType = string;

    export type DnsIpAddrs = IpAddr[];

    export type EventTopics = EventTopic[];

    export type ExceptionMessage = string;

    export type IpAddr = string;

    export type IpAddrs = IpAddr[];

    export type IpRouteStatusMsg = string;

    export type IpRouteStatusReason = string;

    export type IpRoutes = IpRoute[];

    export type IpRoutesInfo = IpRouteInfo[];

    export type LastUpdatedDateTime = number;

    export type LaunchTime = number;

    export type Limit = number;

    export type ManualSnapshotsLimitReached = boolean;

    export type NextToken = string;

    export type OrganizationalUnitDN = string;

    export type Password = string;

    export type PortNumber = number;

    export type RadiusAuthenticationProtocol = string;

    export type RadiusDisplayLabel = string;

    export type RadiusRetries = number;

    export type RadiusSharedSecret = string;

    export type RadiusStatus = string;

    export type RadiusTimeout = number;

    export type RemoteDomainName = string;

    export type RemoteDomainNames = RemoteDomainName[];

    export type ReplicationScope = string;

    export type RequestId = string;

    export type ResourceId = string;

    export type SID = string;

    export type SecurityGroupId = string;

    export type Server = string;

    export type Servers = Server[];

    export type SnapshotId = string;

    export type SnapshotIds = SnapshotId[];

    export type SnapshotName = string;

    export type SnapshotStatus = string;

    export type SnapshotType = string;

    export type Snapshots = Snapshot[];

    export type SsoEnabled = boolean;

    export type StageReason = string;

    export type StartTime = number;

    export type StateLastUpdatedDateTime = number;

    export type SubnetId = string;

    export type SubnetIds = SubnetId[];

    export type TagKey = string;

    export type TagKeys = TagKey[];

    export type TagValue = string;

    export type Tags = Tag[];

    export type TopicArn = string;

    export type TopicName = string;

    export type TopicNames = TopicName[];

    export type TopicStatus = string;

    export type TrustDirection = string;

    export type TrustId = string;

    export type TrustIds = TrustId[];

    export type TrustPassword = string;

    export type TrustState = string;

    export type TrustStateReason = string;

    export type TrustType = string;

    export type Trusts = Trust[];

    export type UpdateSecurityGroupForDirectoryControllers = boolean;

    export type UseSameUsername = boolean;

    export type UserName = string;

    export type VpcId = string;

    export interface AddIpRoutesRequest {
      /** Identifier (ID) of the directory to which to add the address block. **/
      DirectoryId: DirectoryId;
      /** IP address blocks, using CIDR format, of the traffic to route. This is often the
IP address block of the DNS server used for your on-premises domain. **/
      IpRoutes: IpRoutes;
      /** If set to true, updates the inbound and outbound rules of the security group
that has the description: &quot;AWS created security group for directory ID directory
controllers.&quot; Following are the new rules: 

Inbound:

&amp;#42;  Type: Custom UDP Rule, Protocol: UDP, Range: 88, Source: 0.0.0.0/0
 
 
*  Type: Custom UDP Rule, Protocol: UDP, Range: 123, Source: 0.0.0.0/0
 
 
*  Type: Custom UDP Rule, Protocol: UDP, Range: 138, Source: 0.0.0.0/0
 
 
*  Type: Custom UDP Rule, Protocol: UDP, Range: 389, Source: 0.0.0.0/0
 
 
*  Type: Custom UDP Rule, Protocol: UDP, Range: 464, Source: 0.0.0.0/0
 
 
*  Type: Custom UDP Rule, Protocol: UDP, Range: 445, Source: 0.0.0.0/0
 
 
*  Type: Custom TCP Rule, Protocol: TCP, Range: 88, Source: 0.0.0.0/0
 
 
*  Type: Custom TCP Rule, Protocol: TCP, Range: 135, Source: 0.0.0.0/0
 
 
*  Type: Custom TCP Rule, Protocol: TCP, Range: 445, Source: 0.0.0.0/0
 
 
*  Type: Custom TCP Rule, Protocol: TCP, Range: 464, Source: 0.0.0.0/0
 
 
*  Type: Custom TCP Rule, Protocol: TCP, Range: 636, Source: 0.0.0.0/0
 
 
*  Type: Custom TCP Rule, Protocol: TCP, Range: 1024-65535, Source: 0.0.0.0/0
 
 
*  Type: Custom TCP Rule, Protocol: TCP, Range: 3268-33269, Source: 0.0.0.0/0
 
 
*  Type: DNS (UDP), Protocol: UDP, Range: 53, Source: 0.0.0.0/0
 
 
*  Type: DNS (TCP), Protocol: TCP, Range: 53, Source: 0.0.0.0/0
 
 
*  Type: LDAP, Protocol: TCP, Range: 389, Source: 0.0.0.0/0
 
 
*  Type: All ICMP, Protocol: All, Range: N/A, Source: 0.0.0.0/0
 
 



Outbound:

*  Type: All traffic, Protocol: All, Range: All, Destination: 0.0.0.0/0
 
 

These security rules impact an internal network interface that is not exposed
publicly. **/
      UpdateSecurityGroupForDirectoryControllers?: UpdateSecurityGroupForDirectoryControllers;
    }
    export interface AddIpRoutesResult {
    }
    export interface AddTagsToResourceRequest {
      /** Identifier (ID) for the directory to which to add the tag. **/
      ResourceId: ResourceId;
      /** The tags to be assigned to the Amazon Directory Services directory. **/
      Tags: Tags;
    }
    export interface AddTagsToResourceResult {
    }
    export interface Attribute {
      /** The name of the attribute. **/
      Name?: AttributeName;
      /** The value of the attribute. **/
      Value?: AttributeValue;
    }
    export interface AuthenticationFailedException {
      /** The textual message for the exception. **/
      Message?: ExceptionMessage;
      /** The identifier of the request that caused the exception. **/
      RequestId?: RequestId;
    }
    export interface ClientException {
      Message?: ExceptionMessage;
      RequestId?: RequestId;
    }
    export interface Computer {
      /** The identifier of the computer. **/
      ComputerId?: SID;
      /** The computer name. **/
      ComputerName?: ComputerName;
      /** An array of Attribute objects containing the LDAP attributes that belong to the
computer account. **/
      ComputerAttributes?: Attributes;
    }
    export interface ConditionalForwarder {
      /** The fully qualified domain name (FQDN) of the remote domains pointed to by the
conditional forwarder. **/
      RemoteDomainName?: RemoteDomainName;
      /** The IP addresses of the remote DNS server associated with RemoteDomainName. This
is the IP address of the DNS server that your conditional forwarder points to. **/
      DnsIpAddrs?: DnsIpAddrs;
      /** The replication scope of the conditional forwarder. The only allowed value is 
Domain, which will replicate the conditional forwarder to all of the domain
controllers for your AWS directory. **/
      ReplicationScope?: ReplicationScope;
    }
    export interface ConnectDirectoryRequest {
      /** The fully-qualified name of the on-premises directory, such as corp.example.com. **/
      Name: DirectoryName;
      /** The NetBIOS name of the on-premises directory, such as CORP. **/
      ShortName?: DirectoryShortName;
      /** The password for the on-premises user account. **/
      Password: ConnectPassword;
      /** A textual description for the directory. **/
      Description?: Description;
      /** The size of the directory. **/
      Size: DirectorySize;
      /** A DirectoryConnectSettings object that contains additional information for the
operation. **/
      ConnectSettings: DirectoryConnectSettings;
    }
    export interface ConnectDirectoryResult {
      /** The identifier of the new directory. **/
      DirectoryId?: DirectoryId;
    }
    export interface CreateAliasRequest {
      /** The identifier of the directory for which to create the alias. **/
      DirectoryId: DirectoryId;
      /** The requested alias.

The alias must be unique amongst all aliases in AWS. This operation throws an 
EntityAlreadyExistsException error if the alias already exists. **/
      Alias: AliasName;
    }
    export interface CreateAliasResult {
      /** The identifier of the directory. **/
      DirectoryId?: DirectoryId;
      /** The alias for the directory. **/
      Alias?: AliasName;
    }
    export interface CreateComputerRequest {
      /** The identifier of the directory in which to create the computer account. **/
      DirectoryId: DirectoryId;
      /** The name of the computer account. **/
      ComputerName: ComputerName;
      /** A one-time password that is used to join the computer to the directory. You
should generate a random, strong password to use for this parameter. **/
      Password: ComputerPassword;
      /** The fully-qualified distinguished name of the organizational unit to place the
computer account in. **/
      OrganizationalUnitDistinguishedName?: OrganizationalUnitDN;
      /** An array of Attribute objects that contain any LDAP attributes to apply to the
computer account. **/
      ComputerAttributes?: Attributes;
    }
    export interface CreateComputerResult {
      /** A Computer object that represents the computer account. **/
      Computer?: Computer;
    }
    export interface CreateConditionalForwarderRequest {
      /** The directory ID of the AWS directory for which you are creating the conditional
forwarder. **/
      DirectoryId: DirectoryId;
      /** The fully qualified domain name (FQDN) of the remote domain with which you will
set up a trust relationship. **/
      RemoteDomainName: RemoteDomainName;
      /** The IP addresses of the remote DNS server associated with RemoteDomainName. **/
      DnsIpAddrs: DnsIpAddrs;
    }
    export interface CreateConditionalForwarderResult {
    }
    export interface CreateDirectoryRequest {
      /** The fully qualified name for the directory, such as corp.example.com. **/
      Name: DirectoryName;
      /** The short name of the directory, such as CORP. **/
      ShortName?: DirectoryShortName;
      /** The password for the directory administrator. The directory creation process
creates a directory administrator account with the username Administrator and
this password. **/
      Password: Password;
      /** A textual description for the directory. **/
      Description?: Description;
      /** The size of the directory. **/
      Size: DirectorySize;
      /** A DirectoryVpcSettings object that contains additional information for the
operation. **/
      VpcSettings?: DirectoryVpcSettings;
    }
    export interface CreateDirectoryResult {
      /** The identifier of the directory that was created. **/
      DirectoryId?: DirectoryId;
    }
    export interface CreateMicrosoftADRequest {
      /** The fully qualified domain name for the directory, such as corp.example.com.
This name will resolve inside your VPC only. It does not need to be publicly
resolvable. **/
      Name: DirectoryName;
      /** The NetBIOS name for your domain. A short identifier for your domain, such as 
CORP. If you don&#x27;t specify a NetBIOS name, it will default to the first part of
your directory DNS. For example, CORP for the directory DNS corp.example.com. **/
      ShortName?: DirectoryShortName;
      /** The password for the default administrative user named Admin. **/
      Password: Password;
      /** A textual description for the directory. This label will appear on the AWS
console Directory Details page after the directory is created. **/
      Description?: Description;
      VpcSettings: DirectoryVpcSettings;
    }
    export interface CreateMicrosoftADResult {
      /** The identifier of the directory that was created. **/
      DirectoryId?: DirectoryId;
    }
    export interface CreateSnapshotRequest {
      /** The identifier of the directory of which to take a snapshot. **/
      DirectoryId: DirectoryId;
      /** The descriptive name to apply to the snapshot. **/
      Name?: SnapshotName;
    }
    export interface CreateSnapshotResult {
      /** The identifier of the snapshot that was created. **/
      SnapshotId?: SnapshotId;
    }
    export interface CreateTrustRequest {
      /** The Directory ID of the Microsoft AD in the AWS cloud for which to establish the
trust relationship. **/
      DirectoryId: DirectoryId;
      /** The Fully Qualified Domain Name (FQDN) of the external domain for which to
create the trust relationship. **/
      RemoteDomainName: RemoteDomainName;
      /** The trust password. The must be the same password that was used when creating
the trust relationship on the external domain. **/
      TrustPassword: TrustPassword;
      /** The direction of the trust relationship. **/
      TrustDirection: TrustDirection;
      /** The trust relationship type. **/
      TrustType?: TrustType;
      /** The IP addresses of the remote DNS server associated with RemoteDomainName. **/
      ConditionalForwarderIpAddrs?: DnsIpAddrs;
    }
    export interface CreateTrustResult {
      /** A unique identifier for the trust relationship that was created. **/
      TrustId?: TrustId;
    }
    export interface DeleteConditionalForwarderRequest {
      /** The directory ID for which you are deleting the conditional forwarder. **/
      DirectoryId: DirectoryId;
      /** The fully qualified domain name (FQDN) of the remote domain with which you are
deleting the conditional forwarder. **/
      RemoteDomainName: RemoteDomainName;
    }
    export interface DeleteConditionalForwarderResult {
    }
    export interface DeleteDirectoryRequest {
      /** The identifier of the directory to delete. **/
      DirectoryId: DirectoryId;
    }
    export interface DeleteDirectoryResult {
      /** The directory identifier. **/
      DirectoryId?: DirectoryId;
    }
    export interface DeleteSnapshotRequest {
      /** The identifier of the directory snapshot to be deleted. **/
      SnapshotId: SnapshotId;
    }
    export interface DeleteSnapshotResult {
      /** The identifier of the directory snapshot that was deleted. **/
      SnapshotId?: SnapshotId;
    }
    export interface DeleteTrustRequest {
      /** The Trust ID of the trust relationship to be deleted. **/
      TrustId: TrustId;
      /** Delete a conditional forwarder as part of a DeleteTrustRequest. **/
      DeleteAssociatedConditionalForwarder?: DeleteAssociatedConditionalForwarder;
    }
    export interface DeleteTrustResult {
      /** The Trust ID of the trust relationship that was deleted. **/
      TrustId?: TrustId;
    }
    export interface DeregisterEventTopicRequest {
      /** The Directory ID to remove as a publisher. This directory will no longer send
messages to the specified SNS topic. **/
      DirectoryId: DirectoryId;
      /** The name of the SNS topic from which to remove the directory as a publisher. **/
      TopicName: TopicName;
    }
    export interface DeregisterEventTopicResult {
    }
    export interface DescribeConditionalForwardersRequest {
      /** The directory ID for which to get the list of associated conditional forwarders. **/
      DirectoryId: DirectoryId;
      /** The fully qualified domain names (FQDN) of the remote domains for which to get
the list of associated conditional forwarders. If this member is null, all
conditional forwarders are returned. **/
      RemoteDomainNames?: RemoteDomainNames;
    }
    export interface DescribeConditionalForwardersResult {
      /** The list of conditional forwarders that have been created. **/
      ConditionalForwarders?: ConditionalForwarders;
    }
    export interface DescribeDirectoriesRequest {
      /** A list of identifiers of the directories for which to obtain the information. If
this member is null, all directories that belong to the current account are
returned.

An empty list results in an InvalidParameterException being thrown. **/
      DirectoryIds?: DirectoryIds;
      /** The DescribeDirectoriesResult.NextToken value from a previous call to 
DescribeDirectories. Pass null if this is the first call. **/
      NextToken?: NextToken;
      /** The maximum number of items to return. If this value is zero, the maximum number
of items is specified by the limitations of the operation. **/
      Limit?: Limit;
    }
    export interface DescribeDirectoriesResult {
      /** The list of DirectoryDescription objects that were retrieved.

It is possible that this list contains less than the number of items specified
in the Limit member of the request. This occurs if there are less than the
requested number of items left to retrieve, or if the limitations of the
operation have been exceeded. **/
      DirectoryDescriptions?: DirectoryDescriptions;
      /** If not null, more results are available. Pass this value for the NextToken 
parameter in a subsequent call to DescribeDirectories to retrieve the next set
of items. **/
      NextToken?: NextToken;
    }
    export interface DescribeEventTopicsRequest {
      /** The Directory ID for which to get the list of associated SNS topics. If this
member is null, associations for all Directory IDs are returned. **/
      DirectoryId?: DirectoryId;
      /** A list of SNS topic names for which to obtain the information. If this member is
null, all associations for the specified Directory ID are returned.

An empty list results in an InvalidParameterException being thrown. **/
      TopicNames?: TopicNames;
    }
    export interface DescribeEventTopicsResult {
      /** A list of SNS topic names that receive status messages from the specified
Directory ID. **/
      EventTopics?: EventTopics;
    }
    export interface DescribeSnapshotsRequest {
      /** The identifier of the directory for which to retrieve snapshot information. **/
      DirectoryId?: DirectoryId;
      /** A list of identifiers of the snapshots to obtain the information for. If this
member is null or empty, all snapshots are returned using the Limit and 
NextToken members. **/
      SnapshotIds?: SnapshotIds;
      /** The DescribeSnapshotsResult.NextToken value from a previous call to 
DescribeSnapshots. Pass null if this is the first call. **/
      NextToken?: NextToken;
      /** The maximum number of objects to return. **/
      Limit?: Limit;
    }
    export interface DescribeSnapshotsResult {
      /** The list of Snapshot objects that were retrieved.

It is possible that this list contains less than the number of items specified
in the Limit member of the request. This occurs if there are less than the
requested number of items left to retrieve, or if the limitations of the
operation have been exceeded. **/
      Snapshots?: Snapshots;
      /** If not null, more results are available. Pass this value in the NextToken member
of a subsequent call to DescribeSnapshots. **/
      NextToken?: NextToken;
    }
    export interface DescribeTrustsRequest {
      /** The Directory ID of the AWS directory that is a part of the requested trust
relationship. **/
      DirectoryId?: DirectoryId;
      /** A list of identifiers of the trust relationships for which to obtain the
information. If this member is null, all trust relationships that belong to the
current account are returned.

An empty list results in an InvalidParameterException being thrown. **/
      TrustIds?: TrustIds;
      /** The DescribeTrustsResult.NextToken value from a previous call to DescribeTrusts.
Pass null if this is the first call. **/
      NextToken?: NextToken;
      /** The maximum number of objects to return. **/
      Limit?: Limit;
    }
    export interface DescribeTrustsResult {
      /** The list of Trust objects that were retrieved.

It is possible that this list contains less than the number of items specified
in the Limit member of the request. This occurs if there are less than the
requested number of items left to retrieve, or if the limitations of the
operation have been exceeded. **/
      Trusts?: Trusts;
      /** If not null, more results are available. Pass this value for the NextToken 
parameter in a subsequent call to DescribeTrusts to retrieve the next set of
items. **/
      NextToken?: NextToken;
    }
    export interface DirectoryConnectSettings {
      /** The identifier of the VPC in which the AD Connector is created. **/
      VpcId: VpcId;
      /** A list of subnet identifiers in the VPC in which the AD Connector is created. **/
      SubnetIds: SubnetIds;
      /** A list of one or more IP addresses of DNS servers or domain controllers in the
on-premises directory. **/
      CustomerDnsIps: DnsIpAddrs;
      /** The username of an account in the on-premises directory that is used to connect
to the directory. This account must have the following privileges:

&amp;#42;  Read users and groups
 
 
*  Create computer objects
 
 
*  Join computers to the domain **/
      CustomerUserName: UserName;
    }
    export interface DirectoryConnectSettingsDescription {
      /** The identifier of the VPC that the AD Connector is in. **/
      VpcId?: VpcId;
      /** A list of subnet identifiers in the VPC that the AD connector is in. **/
      SubnetIds?: SubnetIds;
      /** The username of the service account in the on-premises directory. **/
      CustomerUserName?: UserName;
      /** The security group identifier for the AD Connector directory. **/
      SecurityGroupId?: SecurityGroupId;
      /** A list of the Availability Zones that the directory is in. **/
      AvailabilityZones?: AvailabilityZones;
      /** The IP addresses of the AD Connector servers. **/
      ConnectIps?: IpAddrs;
    }
    export interface DirectoryDescription {
      /** The directory identifier. **/
      DirectoryId?: DirectoryId;
      /** The fully-qualified name of the directory. **/
      Name?: DirectoryName;
      /** The short name of the directory. **/
      ShortName?: DirectoryShortName;
      /** The directory size. **/
      Size?: DirectorySize;
      /** The alias for the directory. If no alias has been created for the directory, the
alias is the directory identifier, such as d-XXXXXXXXXX. **/
      Alias?: AliasName;
      /** The access URL for the directory, such as http://&lt;alias&gt;.awsapps.com. If no
alias has been created for the directory, &lt;alias&gt; is the directory identifier,
such as d-XXXXXXXXXX. **/
      AccessUrl?: AccessUrl;
      /** The textual description for the directory. **/
      Description?: Description;
      /** The IP addresses of the DNS servers for the directory. For a Simple AD or
Microsoft AD directory, these are the IP addresses of the Simple AD or Microsoft
AD directory servers. For an AD Connector directory, these are the IP addresses
of the DNS servers or domain controllers in the on-premises directory to which
the AD Connector is connected. **/
      DnsIpAddrs?: DnsIpAddrs;
      /** The current stage of the directory. **/
      Stage?: DirectoryStage;
      /** Specifies when the directory was created. **/
      LaunchTime?: LaunchTime;
      /** The date and time that the stage was last updated. **/
      StageLastUpdatedDateTime?: LastUpdatedDateTime;
      /** The directory size. **/
      Type?: DirectoryType;
      /** A DirectoryVpcSettingsDescription object that contains additional information
about a directory. This member is only present if the directory is a Simple AD
or Managed AD directory. **/
      VpcSettings?: DirectoryVpcSettingsDescription;
      /** A DirectoryConnectSettingsDescription object that contains additional
information about an AD Connector directory. This member is only present if the
directory is an AD Connector directory. **/
      ConnectSettings?: DirectoryConnectSettingsDescription;
      /** A RadiusSettings object that contains information about the RADIUS server
configured for this directory. **/
      RadiusSettings?: RadiusSettings;
      /** The status of the RADIUS MFA server connection. **/
      RadiusStatus?: RadiusStatus;
      /** Additional information about the directory stage. **/
      StageReason?: StageReason;
      /** Indicates if single-sign on is enabled for the directory. For more information,
see EnableSso and DisableSso. **/
      SsoEnabled?: SsoEnabled;
    }
    export interface DirectoryLimitExceededException {
      Message?: ExceptionMessage;
      RequestId?: RequestId;
    }
    export interface DirectoryLimits {
      /** The maximum number of cloud directories allowed in the region. **/
      CloudOnlyDirectoriesLimit?: Limit;
      /** The current number of cloud directories in the region. **/
      CloudOnlyDirectoriesCurrentCount?: Limit;
      /** Indicates if the cloud directory limit has been reached. **/
      CloudOnlyDirectoriesLimitReached?: CloudOnlyDirectoriesLimitReached;
      /** The maximum number of Microsoft AD directories allowed in the region. **/
      CloudOnlyMicrosoftADLimit?: Limit;
      /** The current number of Microsoft AD directories in the region. **/
      CloudOnlyMicrosoftADCurrentCount?: Limit;
      /** Indicates if the Microsoft AD directory limit has been reached. **/
      CloudOnlyMicrosoftADLimitReached?: CloudOnlyDirectoriesLimitReached;
      /** The maximum number of connected directories allowed in the region. **/
      ConnectedDirectoriesLimit?: Limit;
      /** The current number of connected directories in the region. **/
      ConnectedDirectoriesCurrentCount?: Limit;
      /** Indicates if the connected directory limit has been reached. **/
      ConnectedDirectoriesLimitReached?: ConnectedDirectoriesLimitReached;
    }
    export interface DirectoryUnavailableException {
      Message?: ExceptionMessage;
      RequestId?: RequestId;
    }
    export interface DirectoryVpcSettings {
      /** The identifier of the VPC in which to create the directory. **/
      VpcId: VpcId;
      /** The identifiers of the subnets for the directory servers. The two subnets must
be in different Availability Zones. AWS Directory Service creates a directory
server and a DNS server in each of these subnets. **/
      SubnetIds: SubnetIds;
    }
    export interface DirectoryVpcSettingsDescription {
      /** The identifier of the VPC that the directory is in. **/
      VpcId?: VpcId;
      /** The identifiers of the subnets for the directory servers. **/
      SubnetIds?: SubnetIds;
      /** The security group identifier for the directory. If the directory was created
before 8/1/2014, this is the identifier of the directory members security group
that was created when the directory was created. If the directory was created
after this date, this value is null. **/
      SecurityGroupId?: SecurityGroupId;
      /** The list of Availability Zones that the directory is in. **/
      AvailabilityZones?: AvailabilityZones;
    }
    export interface DisableRadiusRequest {
      /** The identifier of the directory for which to disable MFA. **/
      DirectoryId: DirectoryId;
    }
    export interface DisableRadiusResult {
    }
    export interface DisableSsoRequest {
      /** The identifier of the directory for which to disable single-sign on. **/
      DirectoryId: DirectoryId;
      /** The username of an alternate account to use to disable single-sign on. This is
only used for AD Connector directories. This account must have privileges to
remove a service principal name.

If the AD Connector service account does not have privileges to remove a service
principal name, you can specify an alternate account with the UserName and 
Password parameters. These credentials are only used to disable single sign-on
and are not stored by the service. The AD Connector service account is not
changed. **/
      UserName?: UserName;
      /** The password of an alternate account to use to disable single-sign on. This is
only used for AD Connector directories. For more information, see the UserName 
parameter. **/
      Password?: ConnectPassword;
    }
    export interface DisableSsoResult {
    }
    export interface EnableRadiusRequest {
      /** The identifier of the directory for which to enable MFA. **/
      DirectoryId: DirectoryId;
      /** A RadiusSettings object that contains information about the RADIUS server. **/
      RadiusSettings: RadiusSettings;
    }
    export interface EnableRadiusResult {
    }
    export interface EnableSsoRequest {
      /** The identifier of the directory for which to enable single-sign on. **/
      DirectoryId: DirectoryId;
      /** The username of an alternate account to use to enable single-sign on. This is
only used for AD Connector directories. This account must have privileges to add
a service principal name.

If the AD Connector service account does not have privileges to add a service
principal name, you can specify an alternate account with the UserName and 
Password parameters. These credentials are only used to enable single sign-on
and are not stored by the service. The AD Connector service account is not
changed. **/
      UserName?: UserName;
      /** The password of an alternate account to use to enable single-sign on. This is
only used for AD Connector directories. For more information, see the UserName 
parameter. **/
      Password?: ConnectPassword;
    }
    export interface EnableSsoResult {
    }
    export interface EntityAlreadyExistsException {
      Message?: ExceptionMessage;
      RequestId?: RequestId;
    }
    export interface EntityDoesNotExistException {
      Message?: ExceptionMessage;
      RequestId?: RequestId;
    }
    export interface EventTopic {
      /** The Directory ID of an AWS Directory Service directory that will publish status
messages to an SNS topic. **/
      DirectoryId?: DirectoryId;
      /** The name of an AWS SNS topic the receives status messages from the directory. **/
      TopicName?: TopicName;
      /** The SNS topic ARN (Amazon Resource Name). **/
      TopicArn?: TopicArn;
      /** The date and time of when you associated your directory with the SNS topic. **/
      CreatedDateTime?: CreatedDateTime;
      /** The topic registration status. **/
      Status?: TopicStatus;
    }
    export interface GetDirectoryLimitsRequest {
    }
    export interface GetDirectoryLimitsResult {
      /** A DirectoryLimits object that contains the directory limits for the current
region. **/
      DirectoryLimits?: DirectoryLimits;
    }
    export interface GetSnapshotLimitsRequest {
      /** Contains the identifier of the directory to obtain the limits for. **/
      DirectoryId: DirectoryId;
    }
    export interface GetSnapshotLimitsResult {
      /** A SnapshotLimits object that contains the manual snapshot limits for the
specified directory. **/
      SnapshotLimits?: SnapshotLimits;
    }
    export interface InsufficientPermissionsException {
      Message?: ExceptionMessage;
      RequestId?: RequestId;
    }
    export interface InvalidNextTokenException {
      Message?: ExceptionMessage;
      RequestId?: RequestId;
    }
    export interface InvalidParameterException {
      Message?: ExceptionMessage;
      RequestId?: RequestId;
    }
    export interface IpRoute {
      /** IP address block using CIDR format, for example 10.0.0.0/24. This is often the
address block of the DNS server used for your on-premises domain. For a single
IP address use a CIDR address block with /32. For example 10.0.0.0/32. **/
      CidrIp?: CidrIp;
      /** Description of the address block. **/
      Description?: Description;
    }
    export interface IpRouteInfo {
      /** Identifier (ID) of the directory associated with the IP addresses. **/
      DirectoryId?: DirectoryId;
      /** IP address block in the IpRoute. **/
      CidrIp?: CidrIp;
      /** The status of the IP address block. **/
      IpRouteStatusMsg?: IpRouteStatusMsg;
      /** The date and time the address block was added to the directory. **/
      AddedDateTime?: AddedDateTime;
      /** The reason for the IpRouteStatusMsg. **/
      IpRouteStatusReason?: IpRouteStatusReason;
      /** Description of the IpRouteInfo. **/
      Description?: Description;
    }
    export interface IpRouteLimitExceededException {
      Message?: ExceptionMessage;
      RequestId?: RequestId;
    }
    export interface ListIpRoutesRequest {
      /** Identifier (ID) of the directory for which you want to retrieve the IP
addresses. **/
      DirectoryId: DirectoryId;
      /** The ListIpRoutes.NextToken value from a previous call to ListIpRoutes. Pass null
if this is the first call. **/
      NextToken?: NextToken;
      /** Maximum number of items to return. If this value is zero, the maximum number of
items is specified by the limitations of the operation. **/
      Limit?: Limit;
    }
    export interface ListIpRoutesResult {
      /** A list of IpRoutes. **/
      IpRoutesInfo?: IpRoutesInfo;
      /** If not null, more results are available. Pass this value for the NextToken 
parameter in a subsequent call to ListIpRoutes to retrieve the next set of
items. **/
      NextToken?: NextToken;
    }
    export interface ListTagsForResourceRequest {
      /** Identifier (ID) of the directory for which you want to retrieve tags. **/
      ResourceId: ResourceId;
      /** Reserved for future use. **/
      NextToken?: NextToken;
      /** Reserved for future use. **/
      Limit?: Limit;
    }
    export interface ListTagsForResourceResult {
      /** List of tags returned by the ListTagsForResource operation. **/
      Tags?: Tags;
      /** Reserved for future use. **/
      NextToken?: NextToken;
    }
    export interface RadiusSettings {
      /** An array of strings that contains the IP addresses of the RADIUS server
endpoints, or the IP addresses of your RADIUS server load balancer. **/
      RadiusServers?: Servers;
      /** The port that your RADIUS server is using for communications. Your on-premises
network must allow inbound traffic over this port from the AWS Directory Service
servers. **/
      RadiusPort?: PortNumber;
      /** The amount of time, in seconds, to wait for the RADIUS server to respond. **/
      RadiusTimeout?: RadiusTimeout;
      /** The maximum number of times that communication with the RADIUS server is
attempted. **/
      RadiusRetries?: RadiusRetries;
      /** Not currently used. **/
      SharedSecret?: RadiusSharedSecret;
      /** The protocol specified for your RADIUS endpoints. **/
      AuthenticationProtocol?: RadiusAuthenticationProtocol;
      /** Not currently used. **/
      DisplayLabel?: RadiusDisplayLabel;
      /** Not currently used. **/
      UseSameUsername?: UseSameUsername;
    }
    export interface RegisterEventTopicRequest {
      /** The Directory ID that will publish status messages to the SNS topic. **/
      DirectoryId: DirectoryId;
      /** The SNS topic name to which the directory will publish status messages. This SNS
topic must be in the same region as the specified Directory ID. **/
      TopicName: TopicName;
    }
    export interface RegisterEventTopicResult {
    }
    export interface RemoveIpRoutesRequest {
      /** Identifier (ID) of the directory from which you want to remove the IP addresses. **/
      DirectoryId: DirectoryId;
      /** IP address blocks that you want to remove. **/
      CidrIps: CidrIps;
    }
    export interface RemoveIpRoutesResult {
    }
    export interface RemoveTagsFromResourceRequest {
      /** Identifier (ID) of the directory from which to remove the tag. **/
      ResourceId: ResourceId;
      /** The tag key (name) of the tag to be removed. **/
      TagKeys: TagKeys;
    }
    export interface RemoveTagsFromResourceResult {
    }
    export interface RestoreFromSnapshotRequest {
      /** The identifier of the snapshot to restore from. **/
      SnapshotId: SnapshotId;
    }
    export interface RestoreFromSnapshotResult {
    }
    export interface ServiceException {
      Message?: ExceptionMessage;
      RequestId?: RequestId;
    }
    export interface Snapshot {
      /** The directory identifier. **/
      DirectoryId?: DirectoryId;
      /** The snapshot identifier. **/
      SnapshotId?: SnapshotId;
      /** The snapshot type. **/
      Type?: SnapshotType;
      /** The descriptive name of the snapshot. **/
      Name?: SnapshotName;
      /** The snapshot status. **/
      Status?: SnapshotStatus;
      /** The date and time that the snapshot was taken. **/
      StartTime?: StartTime;
    }
    export interface SnapshotLimitExceededException {
      Message?: ExceptionMessage;
      RequestId?: RequestId;
    }
    export interface SnapshotLimits {
      /** The maximum number of manual snapshots allowed. **/
      ManualSnapshotsLimit?: Limit;
      /** The current number of manual snapshots of the directory. **/
      ManualSnapshotsCurrentCount?: Limit;
      /** Indicates if the manual snapshot limit has been reached. **/
      ManualSnapshotsLimitReached?: ManualSnapshotsLimitReached;
    }
    export interface Tag {
      /** Required name of the tag. The string value can be Unicode characters and cannot
be prefixed with &quot;aws:&quot;. The string can contain only the set of Unicode letters,
digits, white-space, &#x27;_&#x27;, &#x27;.&#x27;, &#x27;/&#x27;, &#x27;=&#x27;, &#x27;+&#x27;, &#x27;-&#x27; (Java regex:
&quot;^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]&amp;#42;)$&quot;). **/
      Key: TagKey;
      /** The optional value of the tag. The string value can be Unicode characters. The
string can contain only the set of Unicode letters, digits, white-space, &#x27;_&#x27;,
&#x27;.&#x27;, &#x27;/&#x27;, &#x27;=&#x27;, &#x27;+&#x27;, &#x27;-&#x27; (Java regex: &quot;^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]&amp;#42;)$&quot;). **/
      Value: TagValue;
    }
    export interface TagLimitExceededException {
      Message?: ExceptionMessage;
      RequestId?: RequestId;
    }
    export interface Trust {
      /** The Directory ID of the AWS directory involved in the trust relationship. **/
      DirectoryId?: DirectoryId;
      /** The unique ID of the trust relationship. **/
      TrustId?: TrustId;
      /** The Fully Qualified Domain Name (FQDN) of the external domain involved in the
trust relationship. **/
      RemoteDomainName?: RemoteDomainName;
      /** The trust relationship type. **/
      TrustType?: TrustType;
      /** The trust relationship direction. **/
      TrustDirection?: TrustDirection;
      /** The trust relationship state. **/
      TrustState?: TrustState;
      /** The date and time that the trust relationship was created. **/
      CreatedDateTime?: CreatedDateTime;
      /** The date and time that the trust relationship was last updated. **/
      LastUpdatedDateTime?: LastUpdatedDateTime;
      /** The date and time that the TrustState was last updated. **/
      StateLastUpdatedDateTime?: StateLastUpdatedDateTime;
      /** The reason for the TrustState. **/
      TrustStateReason?: TrustStateReason;
    }
    export interface UnsupportedOperationException {
      Message?: ExceptionMessage;
      RequestId?: RequestId;
    }
    export interface UpdateConditionalForwarderRequest {
      /** The directory ID of the AWS directory for which to update the conditional
forwarder. **/
      DirectoryId: DirectoryId;
      /** The fully qualified domain name (FQDN) of the remote domain with which you will
set up a trust relationship. **/
      RemoteDomainName: RemoteDomainName;
      /** The updated IP addresses of the remote DNS server associated with the
conditional forwarder. **/
      DnsIpAddrs: DnsIpAddrs;
    }
    export interface UpdateConditionalForwarderResult {
    }
    export interface UpdateRadiusRequest {
      /** The identifier of the directory for which to update the RADIUS server
information. **/
      DirectoryId: DirectoryId;
      /** A RadiusSettings object that contains information about the RADIUS server. **/
      RadiusSettings: RadiusSettings;
    }
    export interface UpdateRadiusResult {
    }
    export interface VerifyTrustRequest {
      /** The unique Trust ID of the trust relationship to verify. **/
      TrustId: TrustId;
    }
    export interface VerifyTrustResult {
      /** The unique Trust ID of the trust relationship that was verified. **/
      TrustId?: TrustId;
    }
  }
}
