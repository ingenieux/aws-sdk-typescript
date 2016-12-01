// Type definitions for aws-sdk - Amazon Lightsail
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2016-11-28
   * endpointPrefix: lightsail
   * serviceAbbreviation: 
   * signatureVersion: v4
   * protocol: json
   *
   * Amazon Lightsail is the easiest way to get started with AWS for developers who
just need virtual private servers. Lightsail includes everything you need to
launch your project quickly - a virtual machine, SSD-based storage, data
transfer, DNS management, and a static IP - for a low, predictable price. You
manage those Lightsail servers through the Lightsail console or by using the API
or command-line interface (CLI).

For more information about Lightsail concepts and tasks, see the Lightsail Dev
Guide [http://lightsail.aws.amazon.com/ls/docs] .

To use the Lightsail API or the CLI, you will need to use AWS Identity and
Access Management (IAM) to generate access keys. For details about how to set
this up, see the Lightsail Dev Guide
[http://lightsail.aws.amazon.com/ls/docs/how-to/articles/lightsail-how-to-set-up-access-keys-to-use-sdk-api-cli] 
.
   *
   */
  export class Lightsail extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Allocates a static IP address.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    allocateStaticIp(params: Lightsail.AllocateStaticIpRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.AllocateStaticIpResult|any) => void): Request<Lightsail.AllocateStaticIpResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Attaches a static IP address to a specific Amazon Lightsail instance.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    attachStaticIp(params: Lightsail.AttachStaticIpRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.AttachStaticIpResult|any) => void): Request<Lightsail.AttachStaticIpResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Closes the public ports on a specific Amazon Lightsail instance.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    closeInstancePublicPorts(params: Lightsail.CloseInstancePublicPortsRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.CloseInstancePublicPortsResult|any) => void): Request<Lightsail.CloseInstancePublicPortsResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Creates a domain resource for the specified domain (e.g., example.com).
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    createDomain(params: Lightsail.CreateDomainRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.CreateDomainResult|any) => void): Request<Lightsail.CreateDomainResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Creates one of the following entry records associated with the domain: A record,
CNAME record, TXT record, or MX record.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    createDomainEntry(params: Lightsail.CreateDomainEntryRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.CreateDomainEntryResult|any) => void): Request<Lightsail.CreateDomainEntryResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Creates a snapshot of a specific virtual private server, or instance . You can
use a snapshot to create a new instance that is based on that snapshot.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    createInstanceSnapshot(params: Lightsail.CreateInstanceSnapshotRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.CreateInstanceSnapshotResult|any) => void): Request<Lightsail.CreateInstanceSnapshotResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Creates one or more Amazon Lightsail virtual private servers, or instances .
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    createInstances(params: Lightsail.CreateInstancesRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.CreateInstancesResult|any) => void): Request<Lightsail.CreateInstancesResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Uses a specific snapshot as a blueprint for creating one or more new instances
that are based on that identical configuration.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    createInstancesFromSnapshot(params: Lightsail.CreateInstancesFromSnapshotRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.CreateInstancesFromSnapshotResult|any) => void): Request<Lightsail.CreateInstancesFromSnapshotResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Creates sn SSH key pair.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    createKeyPair(params: Lightsail.CreateKeyPairRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.CreateKeyPairResult|any) => void): Request<Lightsail.CreateKeyPairResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Deletes the specified domain recordset and all of its domain records.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    deleteDomain(params: Lightsail.DeleteDomainRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.DeleteDomainResult|any) => void): Request<Lightsail.DeleteDomainResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Deletes a specific domain entry.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    deleteDomainEntry(params: Lightsail.DeleteDomainEntryRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.DeleteDomainEntryResult|any) => void): Request<Lightsail.DeleteDomainEntryResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Deletes a specific Amazon Lightsail virtual private server, or instance .
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    deleteInstance(params: Lightsail.DeleteInstanceRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.DeleteInstanceResult|any) => void): Request<Lightsail.DeleteInstanceResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Deletes a specific snapshot of a virtual private server (or instance ).
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    deleteInstanceSnapshot(params: Lightsail.DeleteInstanceSnapshotRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.DeleteInstanceSnapshotResult|any) => void): Request<Lightsail.DeleteInstanceSnapshotResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Deletes a specific SSH key pair.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    deleteKeyPair(params: Lightsail.DeleteKeyPairRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.DeleteKeyPairResult|any) => void): Request<Lightsail.DeleteKeyPairResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Detaches a static IP from the Amazon Lightsail instance to which it is attached.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    detachStaticIp(params: Lightsail.DetachStaticIpRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.DetachStaticIpResult|any) => void): Request<Lightsail.DetachStaticIpResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Downloads the default SSH key pair from the user&#x27;s account.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    downloadDefaultKeyPair(params: Lightsail.DownloadDefaultKeyPairRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.DownloadDefaultKeyPairResult|any) => void): Request<Lightsail.DownloadDefaultKeyPairResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Returns the names of all active (not deleted) resources.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    getActiveNames(params: Lightsail.GetActiveNamesRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.GetActiveNamesResult|any) => void): Request<Lightsail.GetActiveNamesResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Returns the list of available instance images, or blueprints . You can use a
blueprint to create a new virtual private server already running a specific
operating system, as well as a preinstalled app or development stack. The
software each instance is running depends on the blueprint image you choose.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    getBlueprints(params: Lightsail.GetBlueprintsRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.GetBlueprintsResult|any) => void): Request<Lightsail.GetBlueprintsResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Returns the list of bundles that are available for purchase. A bundle describes
the specs for your virtual private server (or instance ).
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    getBundles(params: Lightsail.GetBundlesRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.GetBundlesResult|any) => void): Request<Lightsail.GetBundlesResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Returns information about a specific domain recordset.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    getDomain(params: Lightsail.GetDomainRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.GetDomainResult|any) => void): Request<Lightsail.GetDomainResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Returns a list of all domains in the user&#x27;s account.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    getDomains(params: Lightsail.GetDomainsRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.GetDomainsResult|any) => void): Request<Lightsail.GetDomainsResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Returns information about a specific Amazon Lightsail instance, which is a
virtual private server.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    getInstance(params: Lightsail.GetInstanceRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.GetInstanceResult|any) => void): Request<Lightsail.GetInstanceResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Returns temporary SSH keys you can use to connect to a specific virtual private
server, or instance .
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    getInstanceAccessDetails(params: Lightsail.GetInstanceAccessDetailsRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.GetInstanceAccessDetailsResult|any) => void): Request<Lightsail.GetInstanceAccessDetailsResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Returns the data points for the specified Amazon Lightsail instance metric,
given an instance name.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    getInstanceMetricData(params: Lightsail.GetInstanceMetricDataRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.GetInstanceMetricDataResult|any) => void): Request<Lightsail.GetInstanceMetricDataResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Returns the port states for a specific virtual private server, or instance .
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    getInstancePortStates(params: Lightsail.GetInstancePortStatesRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.GetInstancePortStatesResult|any) => void): Request<Lightsail.GetInstancePortStatesResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Returns information about a specific instance snapshot.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    getInstanceSnapshot(params: Lightsail.GetInstanceSnapshotRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.GetInstanceSnapshotResult|any) => void): Request<Lightsail.GetInstanceSnapshotResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Returns all instance snapshots for the user&#x27;s account.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    getInstanceSnapshots(params: Lightsail.GetInstanceSnapshotsRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.GetInstanceSnapshotsResult|any) => void): Request<Lightsail.GetInstanceSnapshotsResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Returns the state of a specific instance. Works on one instance at a time.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    getInstanceState(params: Lightsail.GetInstanceStateRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.GetInstanceStateResult|any) => void): Request<Lightsail.GetInstanceStateResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Returns information about all Amazon Lightsail virtual private servers, or 
instances .
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    getInstances(params: Lightsail.GetInstancesRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.GetInstancesResult|any) => void): Request<Lightsail.GetInstancesResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Returns information about a specific key pair.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    getKeyPair(params: Lightsail.GetKeyPairRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.GetKeyPairResult|any) => void): Request<Lightsail.GetKeyPairResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Returns information about all key pairs in the user&#x27;s account.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    getKeyPairs(params: Lightsail.GetKeyPairsRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.GetKeyPairsResult|any) => void): Request<Lightsail.GetKeyPairsResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Returns information about a specific operation. Operations include events such
as when you create an instance, allocate a static IP, attach a static IP, and so
on.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    getOperation(params: Lightsail.GetOperationRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.GetOperationResult|any) => void): Request<Lightsail.GetOperationResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Returns information about all operations.

Results are returned from oldest to newest, up to a maximum of 200. Results can
be paged by making each subsequent call to GetOperations use the maximum (last) 
statusChangedAt value from the previous request.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    getOperations(params: Lightsail.GetOperationsRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.GetOperationsResult|any) => void): Request<Lightsail.GetOperationsResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Gets operations for a specific resource (e.g., an instance or a static IP).
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    getOperationsForResource(params: Lightsail.GetOperationsForResourceRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.GetOperationsForResourceResult|any) => void): Request<Lightsail.GetOperationsForResourceResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Returns a list of all valid regions for Amazon Lightsail.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    getRegions(params: Lightsail.GetRegionsRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.GetRegionsResult|any) => void): Request<Lightsail.GetRegionsResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Returns information about a specific static IP.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    getStaticIp(params: Lightsail.GetStaticIpRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.GetStaticIpResult|any) => void): Request<Lightsail.GetStaticIpResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Returns information about all static IPs in the user&#x27;s account.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    getStaticIps(params: Lightsail.GetStaticIpsRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.GetStaticIpsResult|any) => void): Request<Lightsail.GetStaticIpsResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Imports a public SSH key from a specific key pair.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    importKeyPair(params: Lightsail.ImportKeyPairRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.ImportKeyPairResult|any) => void): Request<Lightsail.ImportKeyPairResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Returns a Boolean value indicating whether your Lightsail VPC is peered.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    isVpcPeered(params: Lightsail.IsVpcPeeredRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.IsVpcPeeredResult|any) => void): Request<Lightsail.IsVpcPeeredResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Adds public ports to an Amazon Lightsail instance.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    openInstancePublicPorts(params: Lightsail.OpenInstancePublicPortsRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.OpenInstancePublicPortsResult|any) => void): Request<Lightsail.OpenInstancePublicPortsResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Tries to peer the Lightsail VPC with the user&#x27;s default VPC.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    peerVpc(params: Lightsail.PeerVpcRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.PeerVpcResult|any) => void): Request<Lightsail.PeerVpcResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Restarts a specific instance. When your Amazon Lightsail instance is finished
rebooting, Lightsail assigns a new public IP address. To use the same IP address
after restarting, create a static IP address and attach it to the instance.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    rebootInstance(params: Lightsail.RebootInstanceRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.RebootInstanceResult|any) => void): Request<Lightsail.RebootInstanceResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Deletes a specific static IP from your account.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    releaseStaticIp(params: Lightsail.ReleaseStaticIpRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.ReleaseStaticIpResult|any) => void): Request<Lightsail.ReleaseStaticIpResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Starts a specific Amazon Lightsail instance from a stopped state. To restart an
instance, use the reboot instance operation.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    startInstance(params: Lightsail.StartInstanceRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.StartInstanceResult|any) => void): Request<Lightsail.StartInstanceResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Stops a specific Amazon Lightsail instance that is currently running.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    stopInstance(params: Lightsail.StopInstanceRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.StopInstanceResult|any) => void): Request<Lightsail.StopInstanceResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Attempts to unpeer the Lightsail VPC from the user&#x27;s default VPC.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    unpeerVpc(params: Lightsail.UnpeerVpcRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.UnpeerVpcResult|any) => void): Request<Lightsail.UnpeerVpcResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;
    /**
     * Updates a domain recordset after it is created.
     *
     * @error ServiceException   
     * @error InvalidInputException   
     * @error NotFoundException   
     * @error OperationFailureException   
     * @error AccessDeniedException   
     * @error AccountSetupInProgressException   
     * @error UnauthenticatedException   
     */
    updateDomainEntry(params: Lightsail.UpdateDomainEntryRequest, callback?: (err: Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any, data: Lightsail.UpdateDomainEntryResult|any) => void): Request<Lightsail.UpdateDomainEntryResult|any,Lightsail.ServiceException|Lightsail.InvalidInputException|Lightsail.NotFoundException|Lightsail.OperationFailureException|Lightsail.AccessDeniedException|Lightsail.AccountSetupInProgressException|Lightsail.UnauthenticatedException|any>;

  }

  export module Lightsail {
    
    export type AccessDirection = string;
    
    export type AvailabilityZoneList = AvailabilityZone[];
    
    export type Base64 = string;
    
    export type BlueprintList = Blueprint[];
    
    export type BlueprintType = string;
    
    export type BundleList = Bundle[];
    
    export type DiskList = Disk[];
    
    export type DomainEntryList = DomainEntry[];
    
    export type DomainEntryOptions = {[key:string]: string};
    
    export type DomainEntryOptionsKeys = string;
    
    export type DomainEntryType = string;
    
    export type DomainList = Domain[];
    
    export type DomainName = string;
    
    export type InstanceAccessProtocol = string;
    
    export type InstanceList = Instance[];
    
    export type InstanceMetricName = string;
    
    export type InstancePortInfoList = InstancePortInfo[];
    
    export type InstanceSnapshotList = InstanceSnapshot[];
    
    export type InstanceSnapshotState = string;
    
    export type IpAddress = string;
    
    export type IpV6Address = string;
    
    export type IsoDate = number;
    
    export type KeyPairList = KeyPair[];
    
    export type MetricDatapointList = MetricDatapoint[];
    
    export type MetricPeriod = number;
    
    export type MetricStatistic = string;
    
    export type MetricStatisticList = MetricStatistic[];
    
    export type MetricUnit = string;
    
    export type NetworkProtocol = string;
    
    export type NonEmptyString = string;
    
    export type OperationList = Operation[];
    
    export type OperationStatus = string;
    
    export type OperationType = string;
    
    export type Port = number;
    
    export type PortAccessType = string;
    
    export type PortState = string;
    
    export type PortStateList = PortState[];
    
    export type RegionList = Region[];
    
    export type RegionName = string;
    
    export type ResourceName = string;
    
    export type ResourceType = string;
    
    export type StaticIpList = StaticIp[];
    
    export type StringList = string[];
    
    export type double = number;
    
    export type float = number;
    
    export type integer = number;
    
    export type timestamp = number;

    export interface AccessDeniedException {
        code?: string;
        docs?: string;
        message?: string;
        tip?: string;
    }
    export interface AccountSetupInProgressException {
        code?: string;
        docs?: string;
        message?: string;
        tip?: string;
    }
    export interface AllocateStaticIpRequest {
        /** The name of the static IP address. **/
        staticIpName: ResourceName;
    }
    export interface AllocateStaticIpResult {
        /** An array of key-value pairs containing information about the static IP address
you allocated. **/
        operations?: OperationList;
    }
    export interface AttachStaticIpRequest {
        /** The name of the static IP. **/
        staticIpName: ResourceName;
        /** The instance name to which you want to attach the static IP address. **/
        instanceName: ResourceName;
    }
    export interface AttachStaticIpResult {
        /** An array of key-value pairs containing information about your API operations. **/
        operations?: OperationList;
    }
    export interface AvailabilityZone {
        /** The name of the Availability Zone. **/
        zoneName?: NonEmptyString;
        /** The state of the Availability Zone. **/
        state?: NonEmptyString;
    }
    export interface Blueprint {
        /** The ID for the virtual private server image (e.g., app_wordpress_4_4 or 
app_lamp_7_0 ). **/
        blueprintId?: NonEmptyString;
        /** The friendly name of the blueprint (e.g., Amazon Linux ). **/
        name?: ResourceName;
        /** The group name of the blueprint (e.g., amazon-linux ). **/
        group?: NonEmptyString;
        /** The type of the blueprint (e.g., os or app ). **/
        type?: BlueprintType;
        /** The description of the blueprint. **/
        description?: string;
        /** A Boolean value indicating whether the blueprint is active. When you update your
blueprints, you will inactivate old blueprints and keep the most recent versions
active. **/
        isActive?: boolean;
        /** The minimum machine size required to run this blueprint. 0 indicates that the
blueprint runs on all instances. **/
        minPower?: integer;
        /** The version number of the operating system, application, or stack (e.g., 
2016.03.0 ). **/
        version?: string;
        /** The version code. **/
        versionCode?: string;
        /** The product URL to learn more about the image or blueprint. **/
        productUrl?: string;
        /** The end-user license agreement URL for the image or blueprint. **/
        licenseUrl?: string;
    }
    export interface Bundle {
        /** The price in US dollars (e.g., 5.0 ). **/
        price?: float;
        /** The number of vCPUs included in the bundle (e.g., 2 ). **/
        cpuCount?: integer;
        /** The size of the SSD (e.g., 30 ). **/
        diskSizeInGb?: integer;
        /** The bundle ID (e.g., micro_1_0 ). **/
        bundleId?: NonEmptyString;
        /** The Amazon EC2 instance type (e.g., t2.micro ). **/
        instanceType?: string;
        /** A Boolean value indicating whether the bundle is active. **/
        isActive?: boolean;
        /** A friendly name for the bundle (e.g., Micro ). **/
        name?: string;
        /** The power of the bundle (e.g., 500 ). **/
        power?: integer;
        /** The amount of RAM in GB (e.g., 2.0 ). **/
        ramSizeInGb?: float;
        /** The data transfer rate per month in GB (e.g., 2000 ). **/
        transferPerMonthInGb?: integer;
    }
    export interface CloseInstancePublicPortsRequest {
        /** Information about the public port you are trying to close. **/
        portInfo: PortInfo;
        /** The name of the instance on which you&#x27;re attempting to close the public ports. **/
        instanceName: ResourceName;
    }
    export interface CloseInstancePublicPortsResult {
        /** An array of key-value pairs that contains information about the operation. **/
        operation?: Operation;
    }
    export interface CreateDomainEntryRequest {
        /** The domain name (e.g., example.com ) for which you want to create the domain
entry. **/
        domainName: DomainName;
        /** An array of key-value pairs containing information about the domain entry
request. **/
        domainEntry: DomainEntry;
    }
    export interface CreateDomainEntryResult {
        /** An array of key-value pairs containing information about the operation. **/
        operation?: Operation;
    }
    export interface CreateDomainRequest {
        /** The domain name to manage (e.g., example.com ).

You cannot register a new domain name using Lightsail. You must register a
domain name using Amazon Route 53 or another domain name registrar. If you have
already registered your domain, you can enter its name in this parameter to
manage the DNS records for that domain. **/
        domainName: DomainName;
    }
    export interface CreateDomainResult {
        /** An array of key-value pairs containing information about the domain resource you
created. **/
        operation?: Operation;
    }
    export interface CreateInstanceSnapshotRequest {
        /** The name for your new snapshot. **/
        instanceSnapshotName: ResourceName;
        /** The Lightsail instance on which to base your snapshot. **/
        instanceName: ResourceName;
    }
    export interface CreateInstanceSnapshotResult {
        /** An array of key-value pairs containing information about the results of your
create instances snapshot request. **/
        operations?: OperationList;
    }
    export interface CreateInstancesFromSnapshotRequest {
        /** The names for your new instances. **/
        instanceNames: StringList;
        /** The Availability Zone where you want to create your instances. Use the following
formatting: us-east-1a (case sensitive). **/
        availabilityZone: string;
        /** The name of the instance snapshot on which you are basing your new instances.
Use the get instance snapshots operation to return information about your
existing snapshots. **/
        instanceSnapshotName: ResourceName;
        /** The bundle of specification information for your virtual private server (or 
instance ), including the pricing plan (e.g., micro_1_0 ). **/
        bundleId: NonEmptyString;
        /** You can create a launch script that configures a server with additional user
data. For example, apt-get –y update .

Depending on the machine image you choose, the command to get software on your
instance varies. Amazon Linux and CentOS use yum , Debian and Ubuntu use apt-get 
, and FreeBSD uses pkg . For a complete list, see the Dev Guide
[http://lightsail.aws.amazon.com/ls/docs/getting-started/articles/pre-installed-apps] 
. **/
        userData?: string;
        /** The name for your key pair. **/
        keyPairName?: ResourceName;
    }
    export interface CreateInstancesFromSnapshotResult {
        /** An array of key-value pairs containing information about the results of your
create instances from snapshot request. **/
        operations?: OperationList;
    }
    export interface CreateInstancesRequest {
        /** The names to use for your new Lightsail instances. Separate multiple values
using quotation marks and commas, for example: 
[&quot;MyFirstInstance&quot;,&quot;MySecondInstance&quot;] **/
        instanceNames: StringList;
        /** The Availability Zone in which to create your instance. Use the following
format: us-east-1a (case sensitive). **/
        availabilityZone: string;
        /** The name for your custom image. **/
        customImageName?: ResourceName;
        /** The ID for a virtual private server image (e.g., app_wordpress_4_4 or 
app_lamp_7_0 ). Use the get blueprints operation to return a list of available
images (or blueprints ). **/
        blueprintId: NonEmptyString;
        /** The bundle of specification information for your virtual private server (or 
instance ), including the pricing plan (e.g., micro_1_0 ). **/
        bundleId: NonEmptyString;
        /** A launch script you can create that configures a server with additional user
data. For example, you might want to run apt-get –y update .

Depending on the machine image you choose, the command to get software on your
instance varies. Amazon Linux and CentOS use yum , Debian and Ubuntu use apt-get 
, and FreeBSD uses pkg . For a complete list, see the Dev Guide
[http://lightsail.aws.amazon.com/ls/docs/getting-started/articles/pre-installed-apps] 
. **/
        userData?: string;
        /** The name of your key pair. **/
        keyPairName?: ResourceName;
    }
    export interface CreateInstancesResult {
        /** An array of key-value pairs containing information about the results of your
create instances request. **/
        operations?: OperationList;
    }
    export interface CreateKeyPairRequest {
        /** The name for your new key pair. **/
        keyPairName: ResourceName;
    }
    export interface CreateKeyPairResult {
        /** An array of key-value pairs containing information about the new key pair you
just created. **/
        keyPair?: KeyPair;
        /** A base64-encoded public key of the ssh-rsa type. **/
        publicKeyBase64?: Base64;
        /** A base64-encoded RSA private key. **/
        privateKeyBase64?: Base64;
        /** An array of key-value pairs containing information about the results of your
create key pair request. **/
        operation?: Operation;
    }
    export interface DeleteDomainEntryRequest {
        /** The name of the domain entry to delete. **/
        domainName: DomainName;
        /** An array of key-value pairs containing information about your domain entries. **/
        domainEntry: DomainEntry;
    }
    export interface DeleteDomainEntryResult {
        /** An array of key-value pairs containing information about the results of your
delete domain entry request. **/
        operation?: Operation;
    }
    export interface DeleteDomainRequest {
        /** The specific domain name to delete. **/
        domainName: DomainName;
    }
    export interface DeleteDomainResult {
        /** An array of key-value pairs containing information about the results of your
delete domain request. **/
        operation?: Operation;
    }
    export interface DeleteInstanceRequest {
        /** The name of the instance to delete. **/
        instanceName: ResourceName;
    }
    export interface DeleteInstanceResult {
        /** An array of key-value pairs containing information about the results of your
delete instance request. **/
        operations?: OperationList;
    }
    export interface DeleteInstanceSnapshotRequest {
        /** The name of the snapshot to delete. **/
        instanceSnapshotName: ResourceName;
    }
    export interface DeleteInstanceSnapshotResult {
        /** An array of key-value pairs containing information about the results of your
delete instance snapshot request. **/
        operations?: OperationList;
    }
    export interface DeleteKeyPairRequest {
        /** The name of the key pair to delete. **/
        keyPairName: ResourceName;
    }
    export interface DeleteKeyPairResult {
        /** An array of key-value pairs containing information about the results of your
delete key pair request. **/
        operation?: Operation;
    }
    export interface DetachStaticIpRequest {
        /** The name of the static IP to detach from the instance. **/
        staticIpName: ResourceName;
    }
    export interface DetachStaticIpResult {
        /** An array of key-value pairs containing information about the results of your
detach static IP request. **/
        operations?: OperationList;
    }
    export interface Disk {
        /** The name of the disk. **/
        name?: ResourceName;
        /** The Amazon Resource Name (ARN) of the disk. **/
        arn?: NonEmptyString;
        /** The support code. Include this code in your email to support when you have
questions about an instance or another resource in Lightsail. This code enables
our support team to look up your Lightsail information more easily. **/
        supportCode?: string;
        /** The date when the disk was created. **/
        createdAt?: IsoDate;
        /** The region and Availability Zone where the disk is located. **/
        location?: ResourceLocation;
        /** The resource type of the disk. **/
        resourceType?: ResourceType;
        /** The size of the disk in GB. **/
        sizeInGb?: integer;
        /** The number of GB in use by the disk. **/
        gbInUse?: integer;
        /** A Boolean value indicating whether this disk is a system disk (has an operating
system loaded on it). **/
        isSystemDisk?: boolean;
        /** The input/output operations per second (IOPS) of the disk. **/
        iops?: integer;
        /** The disk path. **/
        path?: string;
        /** The resources to which the disk is attached. **/
        attachedTo?: string;
        /** A Boolean value indicating whether the disk is attached. **/
        isAttached?: boolean;
        /** The attachment state of the disk. **/
        attachmentState?: string;
    }
    export interface Domain {
        /** The name of the domain. **/
        name?: ResourceName;
        /** The Amazon Resource Name (ARN) of the domain recordset (e.g., 
arn:aws:lightsail:global:123456789101:Domain/824cede0-abc7-4f84-8dbc-12345EXAMPLE 
). **/
        arn?: NonEmptyString;
        /** The support code. Include this code in your email to support when you have
questions about an instance or another resource in Lightsail. This code enables
our support team to look up your Lightsail information more easily. **/
        supportCode?: string;
        /** The date when the domain recordset was created. **/
        createdAt?: IsoDate;
        /** The AWS Region and Availability Zones where the domain recordset was created. **/
        location?: ResourceLocation;
        /** The resource type. **/
        resourceType?: ResourceType;
        /** An array of key-value pairs containing information about the domain entries. **/
        domainEntries?: DomainEntryList;
    }
    export interface DomainEntry {
        /** The ID of the domain recordset entry. **/
        id?: NonEmptyString;
        /** The name of the domain. **/
        name?: DomainName;
        /** The target AWS name server (e.g., ns-111.awsdns-22.com. ). **/
        target?: string;
        /** The type of domain entry (e.g., SOA or NS ). **/
        type?: DomainEntryType;
        /** The options for the domain entry. **/
        options?: DomainEntryOptions;
    }
    export interface DownloadDefaultKeyPairRequest {
    }
    export interface DownloadDefaultKeyPairResult {
        /** A base64-encoded public key of the ssh-rsa type. **/
        publicKeyBase64?: Base64;
        /** A base64-encoded RSA private key. **/
        privateKeyBase64?: Base64;
    }
    export interface GetActiveNamesRequest {
        /** A token used for paginating results from your get active names request. **/
        pageToken?: string;
    }
    export interface GetActiveNamesResult {
        /** The list of active names returned by the get active names request. **/
        activeNames?: StringList;
        /** A token used for advancing to the next page of results from your get active
names request. **/
        nextPageToken?: string;
    }
    export interface GetBlueprintsRequest {
        /** A Boolean value indicating whether to include inactive results in your request. **/
        includeInactive?: boolean;
        /** A token used for advancing to the next page of results from your get blueprints
request. **/
        pageToken?: string;
    }
    export interface GetBlueprintsResult {
        /** An array of key-value pairs that contains information about the available
blueprints. **/
        blueprints?: BlueprintList;
        /** A token used for advancing to the next page of results from your get blueprints
request. **/
        nextPageToken?: string;
    }
    export interface GetBundlesRequest {
        /** A Boolean value that indicates whether to include inactive bundle results in
your request. **/
        includeInactive?: boolean;
        /** A token used for advancing to the next page of results from your get bundles
request. **/
        pageToken?: string;
    }
    export interface GetBundlesResult {
        /** An array of key-value pairs that contains information about the available
bundles. **/
        bundles?: BundleList;
        /** A token used for advancing to the next page of results from your get active
names request. **/
        nextPageToken?: string;
    }
    export interface GetDomainRequest {
        /** The domain name for which your want to return information about. **/
        domainName: DomainName;
    }
    export interface GetDomainResult {
        /** An array of key-value pairs containing information about your get domain
request. **/
        domain?: Domain;
    }
    export interface GetDomainsRequest {
        /** A token used for advancing to the next page of results from your get domains
request. **/
        pageToken?: string;
    }
    export interface GetDomainsResult {
        /** An array of key-value pairs containing information about each of the domain
entries in the user&#x27;s account. **/
        domains?: DomainList;
        /** A token used for advancing to the next page of results from your get active
names request. **/
        nextPageToken?: string;
    }
    export interface GetInstanceAccessDetailsRequest {
        /** The name of the instance to access. **/
        instanceName: ResourceName;
        /** The protocol to use to connect to your instance. Defaults to ssh . **/
        protocol?: InstanceAccessProtocol;
    }
    export interface GetInstanceAccessDetailsResult {
        /** An array of key-value pairs containing information about a get instance access
request. **/
        accessDetails?: InstanceAccessDetails;
    }
    export interface GetInstanceMetricDataRequest {
        /** The name of the instance for which you want to get metrics data. **/
        instanceName: ResourceName;
        /** The metric name to get data about. **/
        metricName: InstanceMetricName;
        /** The time period for which you are requesting data. **/
        period: MetricPeriod;
        /** The start time of the time period. **/
        startTime: timestamp;
        /** The end time of the time period. **/
        endTime: timestamp;
        /** The unit. The list of valid values is below. **/
        unit: MetricUnit;
        /** The instance statistics. **/
        statistics: MetricStatisticList;
    }
    export interface GetInstanceMetricDataResult {
        /** The metric name to return data for. **/
        metricName?: InstanceMetricName;
        /** An array of key-value pairs containing information about the results of your get
instance metric data request. **/
        metricData?: MetricDatapointList;
    }
    export interface GetInstancePortStatesRequest {
        /** The name of the instance. **/
        instanceName: ResourceName;
    }
    export interface GetInstancePortStatesResult {
        /** Information about the port states resulting from your request. **/
        portStates?: PortStateList;
    }
    export interface GetInstanceRequest {
        /** The name of the instance. **/
        instanceName: ResourceName;
    }
    export interface GetInstanceResult {
        /** An array of key-value pairs containing information about the specified instance. **/
        instance?: Instance;
    }
    export interface GetInstanceSnapshotRequest {
        /** The name of the snapshot for which you are requesting information. **/
        instanceSnapshotName: ResourceName;
    }
    export interface GetInstanceSnapshotResult {
        /** An array of key-value pairs containing information about the results of your get
instance snapshot request. **/
        instanceSnapshot?: InstanceSnapshot;
    }
    export interface GetInstanceSnapshotsRequest {
        /** A token used for advancing to the next page of results from your get instance
snapshots request. **/
        pageToken?: string;
    }
    export interface GetInstanceSnapshotsResult {
        /** An array of key-value pairs containing information about the results of your get
instance snapshots request. **/
        instanceSnapshots?: InstanceSnapshotList;
        /** A token used for advancing to the next page of results from your get instance
snapshots request. **/
        nextPageToken?: string;
    }
    export interface GetInstanceStateRequest {
        /** The name of the instance to get state information about. **/
        instanceName: ResourceName;
    }
    export interface GetInstanceStateResult {
        /** The state of the instance. **/
        state?: InstanceState;
    }
    export interface GetInstancesRequest {
        /** A token used for advancing to the next page of results from your get instances
request. **/
        pageToken?: string;
    }
    export interface GetInstancesResult {
        /** An array of key-value pairs containing information about your instances. **/
        instances?: InstanceList;
        /** A token used for advancing to the next page of results from your get instances
request. **/
        nextPageToken?: string;
    }
    export interface GetKeyPairRequest {
        /** The name of the key pair for which you are requesting information. **/
        keyPairName: ResourceName;
    }
    export interface GetKeyPairResult {
        /** An array of key-value pairs containing information about the key pair. **/
        keyPair?: KeyPair;
    }
    export interface GetKeyPairsRequest {
        /** A token used for advancing to the next page of results from your get key pairs
request. **/
        pageToken?: string;
    }
    export interface GetKeyPairsResult {
        /** An array of key-value pairs containing information about the key pairs. **/
        keyPairs?: KeyPairList;
        /** A token used for advancing to the next page of results from your get key pairs
request. **/
        nextPageToken?: string;
    }
    export interface GetOperationRequest {
        /** A GUID used to identify the operation. **/
        operationId: NonEmptyString;
    }
    export interface GetOperationResult {
        /** An array of key-value pairs containing information about the results of your get
operation request. **/
        operation?: Operation;
    }
    export interface GetOperationsForResourceRequest {
        /** The name of the resource for which you are requesting information. **/
        resourceName: ResourceName;
        /** A token used for advancing to the next page of results from your get operations
for resource request. **/
        pageToken?: string;
    }
    export interface GetOperationsForResourceResult {
        /** An array of key-value pairs containing information about the results of your get
operations for resource request. **/
        operations?: OperationList;
        /** Returns the number of pages of results that remain. **/
        nextPageCount?: string;
    }
    export interface GetOperationsRequest {
        /** A token used for advancing to the next page of results from your get operations
request. **/
        pageToken?: string;
    }
    export interface GetOperationsResult {
        /** An array of key-value pairs containing information about the results of your get
operations request. **/
        operations?: OperationList;
        /** A token used for advancing to the next page of results from your get operations
request. **/
        nextPageToken?: string;
    }
    export interface GetRegionsRequest {
        /** A Boolean value indicating whether to also include Availability Zones in your
get regions request. Availability Zones are indicated with a letter: e.g., 
us-east-1a . **/
        includeAvailabilityZones?: boolean;
    }
    export interface GetRegionsResult {
        /** An array of key-value pairs containing information about your get regions
request. **/
        regions?: RegionList;
    }
    export interface GetStaticIpRequest {
        /** The name of the static IP in Lightsail. **/
        staticIpName: ResourceName;
    }
    export interface GetStaticIpResult {
        /** An array of key-value pairs containing information about the requested static
IP. **/
        staticIp?: StaticIp;
    }
    export interface GetStaticIpsRequest {
        /** A token used for advancing to the next page of results from your get static IPs
request. **/
        pageToken?: string;
    }
    export interface GetStaticIpsResult {
        /** An array of key-value pairs containing information about your get static IPs
request. **/
        staticIps?: StaticIpList;
        /** A token used for advancing to the next page of results from your get static IPs
request. **/
        nextPageToken?: string;
    }
    export interface ImportKeyPairRequest {
        /** The name of the key pair for which you want to import the public key. **/
        keyPairName: ResourceName;
        /** A base64-encoded public key of the ssh-rsa type. **/
        publicKeyBase64: Base64;
    }
    export interface ImportKeyPairResult {
        /** An array of key-value pairs containing information about the request operation. **/
        operation?: Operation;
    }
    export interface Instance {
        /** The name the user gave the instance (e.g., Amazon_Linux-1GB-Virginia-1 ). **/
        name?: ResourceName;
        /** The Amazon Resource Name (ARN) of the instance (e.g., 
arn:aws:lightsail:us-east-1:123456789101:Instance/244ad76f-8aad-4741-809f-12345EXAMPLE 
). **/
        arn?: NonEmptyString;
        /** The support code. Include this code in your email to support when you have
questions about an instance or another resource in Lightsail. This code enables
our support team to look up your Lightsail information more easily. **/
        supportCode?: string;
        /** The timestamp when the instance was created (e.g., 1479734909.17 ). **/
        createdAt?: IsoDate;
        /** The region name and availability zone where the instance is located. **/
        location?: ResourceLocation;
        /** The type of resource (usually Instance ). **/
        resourceType?: ResourceType;
        /** The blueprint ID (e.g., os_amlinux_2016_03 ). **/
        blueprintId?: NonEmptyString;
        /** The friendly name of the blueprint (e.g., Amazon Linux ). **/
        blueprintName?: NonEmptyString;
        /** The bundle for the instance (e.g., micro_1_0 ). **/
        bundleId?: NonEmptyString;
        /** A Boolean value indicating whether this instance has a static IP assigned to it. **/
        isStaticIp?: boolean;
        /** The private IP address of the instance. **/
        privateIpAddress?: IpAddress;
        /** The public IP address of the instance. **/
        publicIpAddress?: IpAddress;
        /** The IPv6 address of the instance. **/
        ipv6Address?: IpV6Address;
        /** The size of the vCPU and the amount of RAM for the instance. **/
        hardware?: InstanceHardware;
        /** Information about the public ports and monthly data transfer rates for the
instance. **/
        networking?: InstanceNetworking;
        /** The status code and the state (e.g., running ) for the instance. **/
        state?: InstanceState;
        /** The user name for connecting to the instance (e.g., ec2-user ). **/
        username?: NonEmptyString;
        /** The name of the SSH key being used to connect to the instance (e.g., 
LightsailDefaultKeyPair ). **/
        sshKeyName?: ResourceName;
    }
    export interface InstanceAccessDetails {
        /** For SSH access, the public key to use when accessing your instance For OpenSSH
clients (e.g., command line SSH), you should save this value to tempkey-cert.pub 
. **/
        certKey?: string;
        /** For SSH access, the date on which the temporary keys expire. **/
        expiresAt?: IsoDate;
        /** The public IP address of the Amazon Lightsail instance. **/
        ipAddress?: IpAddress;
        /** For RDP access, the temporary password of the Amazon EC2 instance. **/
        password?: string;
        /** For SSH access, the temporary private key. For OpenSSH clients (e.g., command
line SSH), you should save this value to tempkey ). **/
        privateKey?: string;
        /** The protocol for these Amazon Lightsail instance access details. **/
        protocol?: InstanceAccessProtocol;
        /** The name of this Amazon Lightsail instance. **/
        instanceName?: ResourceName;
        /** The user name to use when logging in to the Amazon Lightsail instance. **/
        username?: string;
    }
    export interface InstanceHardware {
        /** The number of vCPUs the instance has. **/
        cpuCount?: integer;
        /** The disks attached to the instance. **/
        disks?: DiskList;
        /** The amount of RAM in GB on the instance (e.g., 1.0 ). **/
        ramSizeInGb?: float;
    }
    export interface InstanceNetworking {
        /** The amount of data in GB allocated for monthly data transfers. **/
        monthlyTransfer?: MonthlyTransfer;
        /** An array of key-value pairs containing information about the ports on the
instance. **/
        ports?: InstancePortInfoList;
    }
    export interface InstancePortInfo {
        /** The first port in the range. **/
        fromPort?: Port;
        /** The last port in the range. **/
        toPort?: Port;
        /** The protocol. **/
        protocol?: NetworkProtocol;
        /** The location from which access is allowed (e.g., Anywhere (0.0.0.0/0) ). **/
        accessFrom?: string;
        /** The type of access ( Public or Private ). **/
        accessType?: PortAccessType;
        /** The common name. **/
        commonName?: string;
        /** The access direction ( inbound or outbound ). **/
        accessDirection?: AccessDirection;
    }
    export interface InstanceSnapshot {
        /** The name of the snapshot. **/
        name?: ResourceName;
        /** The Amazon Resource Name (ARN) of the snapshot (e.g., 
arn:aws:lightsail:us-east-1:123456789101:InstanceSnapshot/d23b5706-3322-4d83-81e5-12345EXAMPLE 
). **/
        arn?: NonEmptyString;
        /** The support code. Include this code in your email to support when you have
questions about an instance or another resource in Lightsail. This code enables
our support team to look up your Lightsail information more easily. **/
        supportCode?: string;
        /** The timestamp when the snapshot was created (e.g., 1479907467.024 ). **/
        createdAt?: IsoDate;
        /** The region name and availability zone where you created the snapshot. **/
        location?: ResourceLocation;
        /** The type of resource (usually InstanceSnapshot ). **/
        resourceType?: ResourceType;
        /** The state the snapshot is in. **/
        state?: InstanceSnapshotState;
        /** The progress of the snapshot. **/
        progress?: string;
        /** The instance from which the snapshot was created. **/
        fromInstanceName?: ResourceName;
        /** The Amazon Resource Name (ARN) of the instance from which the snapshot was
created (e.g., 
arn:aws:lightsail:us-east-1:123456789101:Instance/64b8404c-ccb1-430b-8daf-12345EXAMPLE 
). **/
        fromInstanceArn?: NonEmptyString;
        /** The blueprint ID from which you created the snapshot (e.g., os_debian_8_3 ). A
blueprint is a virtual private server (or instance ) image used to create
instances quickly. **/
        fromBlueprintId?: string;
        /** The bundle ID from which you created the snapshot (e.g., micro_1_0 ). **/
        fromBundleId?: string;
        /** The size in GB of the SSD. **/
        sizeInGb?: integer;
    }
    export interface InstanceState {
        /** The status code for the instance. **/
        code?: integer;
        /** The state of the instance (e.g., running or pending ). **/
        name?: string;
    }
    export interface InvalidInputException {
        code?: string;
        docs?: string;
        message?: string;
        tip?: string;
    }
    export interface IsVpcPeeredRequest {
    }
    export interface IsVpcPeeredResult {
        /** Returns true if the Lightsail VPC is peered; otherwise, false . **/
        isPeered?: boolean;
    }
    export interface KeyPair {
        /** The friendly name of the SSH key pair. **/
        name?: ResourceName;
        /** The Amazon Resource Name (ARN) of the key pair (e.g., 
arn:aws:lightsail:us-east-1:123456789101:KeyPair/05859e3d-331d-48ba-9034-12345EXAMPLE 
). **/
        arn?: NonEmptyString;
        /** The support code. Include this code in your email to support when you have
questions about an instance or another resource in Lightsail. This code enables
our support team to look up your Lightsail information more easily. **/
        supportCode?: string;
        /** The timestamp when the key pair was created (e.g., 1479816991.349 ). **/
        createdAt?: IsoDate;
        /** The region name and Availability Zone where the key pair was created. **/
        location?: ResourceLocation;
        /** The resource type (usually KeyPair ). **/
        resourceType?: ResourceType;
        /** The RSA fingerprint of the key pair. **/
        fingerprint?: Base64;
    }
    export interface MetricDatapoint {
        /** The average. **/
        average?: double;
        /** The maximum. **/
        maximum?: double;
        /** The minimum. **/
        minimum?: double;
        /** The sample count. **/
        sampleCount?: double;
        /** The sum. **/
        sum?: double;
        /** The timestamp (e.g., 1479816991.349 ). **/
        timestamp?: timestamp;
        /** The unit. **/
        unit?: MetricUnit;
    }
    export interface MonthlyTransfer {
        /** The amount allocated per month (in GB). **/
        gbPerMonthAllocated?: integer;
    }
    export interface NotFoundException {
        code?: string;
        docs?: string;
        message?: string;
        tip?: string;
    }
    export interface OpenInstancePublicPortsRequest {
        /** An array of key-value pairs containing information about the port mappings. **/
        portInfo: PortInfo;
        /** The name of the instance for which you want to open the public ports. **/
        instanceName: ResourceName;
    }
    export interface OpenInstancePublicPortsResult {
        /** An array of key-value pairs containing information about the request operation. **/
        operation?: Operation;
    }
    export interface Operation {
        /** The ID of the operation. **/
        id?: NonEmptyString;
        /** The resource name. **/
        resourceName?: ResourceName;
        /** The resource type. **/
        resourceType?: ResourceType;
        /** The timestamp when the operation was initialized (e.g., 1479816991.349 ). **/
        createdAt?: IsoDate;
        /** The region and Availability Zone. **/
        location?: ResourceLocation;
        /** A Boolean value indicating whether the operation is terminal. **/
        isTerminal?: boolean;
        /** Details about the operation (e.g., Debian-1GB-Virginia-1 ). **/
        operationDetails?: string;
        /** The type of operation. **/
        operationType?: OperationType;
        /** The status of the operation. **/
        status?: OperationStatus;
        /** The timestamp when the status was changed (e.g., 1479816991.349 ). **/
        statusChangedAt?: IsoDate;
        /** The error code. **/
        errorCode?: string;
        /** The error details. **/
        errorDetails?: string;
    }
    export interface OperationFailureException {
        code?: string;
        docs?: string;
        message?: string;
        tip?: string;
    }
    export interface PeerVpcRequest {
    }
    export interface PeerVpcResult {
        /** An array of key-value pairs containing information about the request operation. **/
        operation?: Operation;
    }
    export interface PortInfo {
        /** The first port in the range. **/
        fromPort?: Port;
        /** The last port in the range. **/
        toPort?: Port;
        /** The protocol. **/
        protocol?: NetworkProtocol;
    }
    export interface RebootInstanceRequest {
        /** The name of the instance to reboot. **/
        instanceName: ResourceName;
    }
    export interface RebootInstanceResult {
        /** An array of key-value pairs containing information about the request operation. **/
        operations?: OperationList;
    }
    export interface Region {
        /** The continent code (e.g., NA , meaning North America). **/
        continentCode?: string;
        /** The description of the AWS Region (e.g., This region is recommended to serve
users in the eastern United States and eastern Canada ). **/
        description?: string;
        /** The display name (e.g., Virginia ). **/
        displayName?: string;
        /** The region name (e.g., us-east-1 ). **/
        name?: RegionName;
        /** The Availability Zones. **/
        availabilityZones?: AvailabilityZoneList;
    }
    export interface ReleaseStaticIpRequest {
        /** The name of the static IP to delete. **/
        staticIpName: ResourceName;
    }
    export interface ReleaseStaticIpResult {
        /** An array of key-value pairs containing information about the request operation. **/
        operations?: OperationList;
    }
    export interface ResourceLocation {
        /** The Availability Zone. **/
        availabilityZone?: string;
        /** The AWS Region name. **/
        regionName?: RegionName;
    }
    export interface ServiceException {
        code?: string;
        docs?: string;
        message?: string;
        tip?: string;
    }
    export interface StartInstanceRequest {
        /** The name of the instance (a virtual private server) to start. **/
        instanceName: ResourceName;
    }
    export interface StartInstanceResult {
        /** An array of key-value pairs containing information about the request operation. **/
        operations?: OperationList;
    }
    export interface StaticIp {
        /** The name of the static IP (e.g., StaticIP-Virginia-EXAMPLE ). **/
        name?: ResourceName;
        /** The Amazon Resource Name (ARN) of the static IP (e.g., 
arn:aws:lightsail:us-east-1:123456789101:StaticIp/9cbb4a9e-f8e3-4dfe-b57e-12345EXAMPLE 
). **/
        arn?: NonEmptyString;
        /** The support code. Include this code in your email to support when you have
questions about an instance or another resource in Lightsail. This code enables
our support team to look up your Lightsail information more easily. **/
        supportCode?: string;
        /** The timestamp when the static IP was created (e.g., 1479735304.222 ). **/
        createdAt?: IsoDate;
        /** The region and Availability Zone where the static IP was created. **/
        location?: ResourceLocation;
        /** The resource type (usually StaticIp ). **/
        resourceType?: ResourceType;
        /** The static IP address. **/
        ipAddress?: IpAddress;
        /** The instance where the static IP is attached (e.g., Amazon_Linux-1GB-Virginia-1 
). **/
        attachedTo?: ResourceName;
        /** A Boolean value indicating whether the static IP is attached. **/
        isAttached?: boolean;
    }
    export interface StopInstanceRequest {
        /** The name of the instance (a virtual private server) to stop. **/
        instanceName: ResourceName;
    }
    export interface StopInstanceResult {
        /** An array of key-value pairs containing information about the request operation. **/
        operations?: OperationList;
    }
    export interface UnauthenticatedException {
        code?: string;
        docs?: string;
        message?: string;
        tip?: string;
    }
    export interface UnpeerVpcRequest {
    }
    export interface UnpeerVpcResult {
        /** An array of key-value pairs containing information about the request operation. **/
        operation?: Operation;
    }
    export interface UpdateDomainEntryRequest {
        /** The name of the domain recordset to update. **/
        domainName: DomainName;
        /** An array of key-value pairs containing information about the domain entry. **/
        domainEntry: DomainEntry;
    }
    export interface UpdateDomainEntryResult {
        /** An array of key-value pairs containing information about the request operation. **/
        operations?: OperationList;
    }
  }
}
