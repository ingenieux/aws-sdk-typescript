// Type definitions for aws-sdk - Amazon CloudHSM
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2014-05-30
    * endpointPrefix: cloudhsm
    * serviceAbbreviation: CloudHSM
    * signatureVersion: v4
    * protocol: json
    *
    * AWS CloudHSM Service
    *
    */
  export class CloudHSM extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Adds or overwrites one or more tags for the specified AWS CloudHSM resource.

Each tag consists of a key and a value. Tag keys must be unique to each
resource.
     *
     * @error CloudHsmServiceException   
     * @error CloudHsmInternalException   
     * @error InvalidRequestException   
     */
    addTagsToResource(params: CloudHSM.AddTagsToResourceRequest, callback?: (err: CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any, data: CloudHSM.AddTagsToResourceResponse | any) => void): Request<CloudHSM.AddTagsToResourceResponse | any, CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any>;
    /**
     * Creates a high-availability partition group. A high-availability partition group
is a group of partitions that spans multiple physical HSMs.
     *
     * @error CloudHsmServiceException   
     * @error CloudHsmInternalException   
     * @error InvalidRequestException   
     */
    createHapg(params: CloudHSM.CreateHapgRequest, callback?: (err: CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any, data: CloudHSM.CreateHapgResponse | any) => void): Request<CloudHSM.CreateHapgResponse | any, CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any>;
    /**
     * Creates an uninitialized HSM instance.

There is an upfront fee charged for each HSM instance that you create with the 
CreateHsm operation. If you accidentally provision an HSM and want to request a
refund, delete the instance using the DeleteHsm operation, go to the AWS Support
Center [https://console.aws.amazon.com/support/home#/], create a new case, and
select Account and Billing Support.

It can take up to 20 minutes to create and provision an HSM. You can monitor the
status of the HSM with the DescribeHsm operation. The HSM is ready to be
initialized when the status changes to RUNNING.
     *
     * @error CloudHsmServiceException   
     * @error CloudHsmInternalException   
     * @error InvalidRequestException   
     */
    createHsm(params: CloudHSM.CreateHsmRequest, callback?: (err: CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any, data: CloudHSM.CreateHsmResponse | any) => void): Request<CloudHSM.CreateHsmResponse | any, CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any>;
    /**
     * Creates an HSM client.
     *
     * @error CloudHsmServiceException   
     * @error CloudHsmInternalException   
     * @error InvalidRequestException   
     */
    createLunaClient(params: CloudHSM.CreateLunaClientRequest, callback?: (err: CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any, data: CloudHSM.CreateLunaClientResponse | any) => void): Request<CloudHSM.CreateLunaClientResponse | any, CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any>;
    /**
     * Deletes a high-availability partition group.
     *
     * @error CloudHsmServiceException   
     * @error CloudHsmInternalException   
     * @error InvalidRequestException   
     */
    deleteHapg(params: CloudHSM.DeleteHapgRequest, callback?: (err: CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any, data: CloudHSM.DeleteHapgResponse | any) => void): Request<CloudHSM.DeleteHapgResponse | any, CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any>;
    /**
     * Deletes an HSM. After completion, this operation cannot be undone and your key
material cannot be recovered.
     *
     * @error CloudHsmServiceException   
     * @error CloudHsmInternalException   
     * @error InvalidRequestException   
     */
    deleteHsm(params: CloudHSM.DeleteHsmRequest, callback?: (err: CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any, data: CloudHSM.DeleteHsmResponse | any) => void): Request<CloudHSM.DeleteHsmResponse | any, CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any>;
    /**
     * Deletes a client.
     *
     * @error CloudHsmServiceException   
     * @error CloudHsmInternalException   
     * @error InvalidRequestException   
     */
    deleteLunaClient(params: CloudHSM.DeleteLunaClientRequest, callback?: (err: CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any, data: CloudHSM.DeleteLunaClientResponse | any) => void): Request<CloudHSM.DeleteLunaClientResponse | any, CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any>;
    /**
     * Retrieves information about a high-availability partition group.
     *
     * @error CloudHsmServiceException   
     * @error CloudHsmInternalException   
     * @error InvalidRequestException   
     */
    describeHapg(params: CloudHSM.DescribeHapgRequest, callback?: (err: CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any, data: CloudHSM.DescribeHapgResponse | any) => void): Request<CloudHSM.DescribeHapgResponse | any, CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any>;
    /**
     * Retrieves information about an HSM. You can identify the HSM by its ARN or its
serial number.
     *
     * @error CloudHsmServiceException   
     * @error CloudHsmInternalException   
     * @error InvalidRequestException   
     */
    describeHsm(params: CloudHSM.DescribeHsmRequest, callback?: (err: CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any, data: CloudHSM.DescribeHsmResponse | any) => void): Request<CloudHSM.DescribeHsmResponse | any, CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any>;
    /**
     * Retrieves information about an HSM client.
     *
     * @error CloudHsmServiceException   
     * @error CloudHsmInternalException   
     * @error InvalidRequestException   
     */
    describeLunaClient(params: CloudHSM.DescribeLunaClientRequest, callback?: (err: CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any, data: CloudHSM.DescribeLunaClientResponse | any) => void): Request<CloudHSM.DescribeLunaClientResponse | any, CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any>;
    /**
     * Gets the configuration files necessary to connect to all high availability
partition groups the client is associated with.
     *
     * @error CloudHsmServiceException   
     * @error CloudHsmInternalException   
     * @error InvalidRequestException   
     */
    getConfig(params: CloudHSM.GetConfigRequest, callback?: (err: CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any, data: CloudHSM.GetConfigResponse | any) => void): Request<CloudHSM.GetConfigResponse | any, CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any>;
    /**
     * Lists the Availability Zones that have available AWS CloudHSM capacity.
     *
     * @error CloudHsmServiceException   
     * @error CloudHsmInternalException   
     * @error InvalidRequestException   
     */
    listAvailableZones(params: CloudHSM.ListAvailableZonesRequest, callback?: (err: CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any, data: CloudHSM.ListAvailableZonesResponse | any) => void): Request<CloudHSM.ListAvailableZonesResponse | any, CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any>;
    /**
     * Lists the high-availability partition groups for the account.

This operation supports pagination with the use of the NextToken member. If more
results are available, the NextToken member of the response contains a token
that you pass in the next call to ListHapgs to retrieve the next set of items.
     *
     * @error CloudHsmServiceException   
     * @error CloudHsmInternalException   
     * @error InvalidRequestException   
     */
    listHapgs(params: CloudHSM.ListHapgsRequest, callback?: (err: CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any, data: CloudHSM.ListHapgsResponse | any) => void): Request<CloudHSM.ListHapgsResponse | any, CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any>;
    /**
     * Retrieves the identifiers of all of the HSMs provisioned for the current
customer.

This operation supports pagination with the use of the NextToken member. If more
results are available, the NextToken member of the response contains a token
that you pass in the next call to ListHsms to retrieve the next set of items.
     *
     * @error CloudHsmServiceException   
     * @error CloudHsmInternalException   
     * @error InvalidRequestException   
     */
    listHsms(params: CloudHSM.ListHsmsRequest, callback?: (err: CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any, data: CloudHSM.ListHsmsResponse | any) => void): Request<CloudHSM.ListHsmsResponse | any, CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any>;
    /**
     * Lists all of the clients.

This operation supports pagination with the use of the NextToken member. If more
results are available, the NextToken member of the response contains a token
that you pass in the next call to ListLunaClients to retrieve the next set of
items.
     *
     * @error CloudHsmServiceException   
     * @error CloudHsmInternalException   
     * @error InvalidRequestException   
     */
    listLunaClients(params: CloudHSM.ListLunaClientsRequest, callback?: (err: CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any, data: CloudHSM.ListLunaClientsResponse | any) => void): Request<CloudHSM.ListLunaClientsResponse | any, CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any>;
    /**
     * Returns a list of all tags for the specified AWS CloudHSM resource.
     *
     * @error CloudHsmServiceException   
     * @error CloudHsmInternalException   
     * @error InvalidRequestException   
     */
    listTagsForResource(params: CloudHSM.ListTagsForResourceRequest, callback?: (err: CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any, data: CloudHSM.ListTagsForResourceResponse | any) => void): Request<CloudHSM.ListTagsForResourceResponse | any, CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any>;
    /**
     * Modifies an existing high-availability partition group.
     *
     * @error CloudHsmServiceException   
     * @error CloudHsmInternalException   
     * @error InvalidRequestException   
     */
    modifyHapg(params: CloudHSM.ModifyHapgRequest, callback?: (err: CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any, data: CloudHSM.ModifyHapgResponse | any) => void): Request<CloudHSM.ModifyHapgResponse | any, CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any>;
    /**
     * Modifies an HSM.

This operation can result in the HSM being offline for up to 15 minutes while
the AWS CloudHSM service is reconfigured. If you are modifying a production HSM,
you should ensure that your AWS CloudHSM service is configured for high
availability, and consider executing this operation during a maintenance window.
     *
     * @error CloudHsmServiceException   
     * @error CloudHsmInternalException   
     * @error InvalidRequestException   
     */
    modifyHsm(params: CloudHSM.ModifyHsmRequest, callback?: (err: CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any, data: CloudHSM.ModifyHsmResponse | any) => void): Request<CloudHSM.ModifyHsmResponse | any, CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any>;
    /**
     * Modifies the certificate used by the client.

This action can potentially start a workflow to install the new certificate on
the client&#x27;s HSMs.
     *
     * @error CloudHsmServiceException   
     */
    modifyLunaClient(params: CloudHSM.ModifyLunaClientRequest, callback?: (err: CloudHSM.CloudHsmServiceException | any, data: CloudHSM.ModifyLunaClientResponse | any) => void): Request<CloudHSM.ModifyLunaClientResponse | any, CloudHSM.CloudHsmServiceException | any>;
    /**
     * Removes one or more tags from the specified AWS CloudHSM resource.

To remove a tag, specify only the tag key to remove (not the value). To
overwrite the value for an existing tag, use AddTagsToResource.
     *
     * @error CloudHsmServiceException   
     * @error CloudHsmInternalException   
     * @error InvalidRequestException   
     */
    removeTagsFromResource(params: CloudHSM.RemoveTagsFromResourceRequest, callback?: (err: CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any, data: CloudHSM.RemoveTagsFromResourceResponse | any) => void): Request<CloudHSM.RemoveTagsFromResourceResponse | any, CloudHSM.CloudHsmServiceException | CloudHSM.CloudHsmInternalException | CloudHSM.InvalidRequestException | any>;

  }

  export module CloudHSM {

    export type AZ = string;

    export type AZList = AZ[];

    export type Boolean = boolean;

    export type Certificate = string;

    export type CertificateFingerprint = string;

    export type ClientArn = string;

    export type ClientLabel = string;

    export type ClientList = ClientArn[];

    export type ClientToken = string;

    export type ClientVersion = string;

    export type CloudHsmObjectState = string;

    export type EniId = string;

    export type ExternalId = string;

    export type HapgArn = string;

    export type HapgList = HapgArn[];

    export type HsmArn = string;

    export type HsmList = HsmArn[];

    export type HsmSerialNumber = string;

    export type HsmStatus = string;

    export type IamRoleArn = string;

    export type IpAddress = string;

    export type Label = string;

    export type PaginationToken = string;

    export type PartitionArn = string;

    export type PartitionList = PartitionArn[];

    export type PartitionSerial = string;

    export type PartitionSerialList = PartitionSerial[];

    export type SshKey = string;

    export type String = string;

    export type SubnetId = string;

    export type SubscriptionType = string;

    export type TagKey = string;

    export type TagKeyList = TagKey[];

    export type TagList = Tag[];

    export type TagValue = string;

    export type Timestamp = string;

    export type VpcId = string;

    export interface AddTagsToResourceRequest {
      /** The Amazon Resource Name (ARN) of the AWS CloudHSM resource to tag. **/
      ResourceArn: String;
      /** One or more tags. **/
      TagList: TagList;
    }
    export interface AddTagsToResourceResponse {
      /** The status of the operation. **/
      Status: String;
    }
    export interface CloudHsmInternalException {
    }
    export interface CloudHsmServiceException {
      /** Additional information about the error. **/
      message?: String;
      /** Indicates if the action can be retried. **/
      retryable?: Boolean;
    }
    export interface CreateHapgRequest {
      /** The label of the new high-availability partition group. **/
      Label: Label;
    }
    export interface CreateHapgResponse {
      /** The ARN of the high-availability partition group. **/
      HapgArn?: HapgArn;
    }
    export interface CreateHsmRequest {
      /** The identifier of the subnet in your VPC in which to place the HSM. **/
      SubnetId: SubnetId;
      /** The SSH public key to install on the HSM. **/
      SshKey: SshKey;
      /** The IP address to assign to the HSM&#x27;s ENI.

If an IP address is not specified, an IP address will be randomly chosen from
the CIDR range of the subnet. **/
      EniIp?: IpAddress;
      /** The ARN of an IAM role to enable the AWS CloudHSM service to allocate an ENI on
your behalf. **/
      IamRoleArn: IamRoleArn;
      /** The external ID from IamRoleArn, if present. **/
      ExternalId?: ExternalId;
      SubscriptionType: SubscriptionType;
      /** A user-defined token to ensure idempotence. Subsequent calls to this operation
with the same token will be ignored. **/
      ClientToken?: ClientToken;
      /** The IP address for the syslog monitoring server. The AWS CloudHSM service only
supports one syslog monitoring server. **/
      SyslogIp?: IpAddress;
    }
    export interface CreateHsmResponse {
      /** The ARN of the HSM. **/
      HsmArn?: HsmArn;
    }
    export interface CreateLunaClientRequest {
      /** The label for the client. **/
      Label?: ClientLabel;
      /** The contents of a Base64-Encoded X.509 v3 certificate to be installed on the
HSMs used by this client. **/
      Certificate: Certificate;
    }
    export interface CreateLunaClientResponse {
      /** The ARN of the client. **/
      ClientArn?: ClientArn;
    }
    export interface DeleteHapgRequest {
      /** The ARN of the high-availability partition group to delete. **/
      HapgArn: HapgArn;
    }
    export interface DeleteHapgResponse {
      /** The status of the action. **/
      Status: String;
    }
    export interface DeleteHsmRequest {
      /** The ARN of the HSM to delete. **/
      HsmArn: HsmArn;
    }
    export interface DeleteHsmResponse {
      /** The status of the operation. **/
      Status: String;
    }
    export interface DeleteLunaClientRequest {
      /** The ARN of the client to delete. **/
      ClientArn: ClientArn;
    }
    export interface DeleteLunaClientResponse {
      /** The status of the action. **/
      Status: String;
    }
    export interface DescribeHapgRequest {
      /** The ARN of the high-availability partition group to describe. **/
      HapgArn: HapgArn;
    }
    export interface DescribeHapgResponse {
      /** The ARN of the high-availability partition group. **/
      HapgArn?: HapgArn;
      /** The serial number of the high-availability partition group. **/
      HapgSerial?: String;
      HsmsLastActionFailed?: HsmList;
      HsmsPendingDeletion?: HsmList;
      HsmsPendingRegistration?: HsmList;
      /** The label for the high-availability partition group. **/
      Label?: Label;
      /** The date and time the high-availability partition group was last modified. **/
      LastModifiedTimestamp?: Timestamp;
      /** The list of partition serial numbers that belong to the high-availability
partition group. **/
      PartitionSerialList?: PartitionSerialList;
      /** The state of the high-availability partition group. **/
      State?: CloudHsmObjectState;
    }
    export interface DescribeHsmRequest {
      /** The ARN of the HSM. Either the HsmArn or the SerialNumber parameter must be
specified. **/
      HsmArn?: HsmArn;
      /** The serial number of the HSM. Either the HsmArn or the HsmSerialNumber parameter
must be specified. **/
      HsmSerialNumber?: HsmSerialNumber;
    }
    export interface DescribeHsmResponse {
      /** The ARN of the HSM. **/
      HsmArn?: HsmArn;
      /** The status of the HSM. **/
      Status?: HsmStatus;
      /** Contains additional information about the status of the HSM. **/
      StatusDetails?: String;
      /** The Availability Zone that the HSM is in. **/
      AvailabilityZone?: AZ;
      /** The identifier of the elastic network interface (ENI) attached to the HSM. **/
      EniId?: EniId;
      /** The IP address assigned to the HSM&#x27;s ENI. **/
      EniIp?: IpAddress;
      SubscriptionType?: SubscriptionType;
      /** The subscription start date. **/
      SubscriptionStartDate?: Timestamp;
      /** The subscription end date. **/
      SubscriptionEndDate?: Timestamp;
      /** The identifier of the VPC that the HSM is in. **/
      VpcId?: VpcId;
      /** The identifier of the subnet that the HSM is in. **/
      SubnetId?: SubnetId;
      /** The ARN of the IAM role assigned to the HSM. **/
      IamRoleArn?: IamRoleArn;
      /** The serial number of the HSM. **/
      SerialNumber?: HsmSerialNumber;
      /** The name of the HSM vendor. **/
      VendorName?: String;
      /** The HSM model type. **/
      HsmType?: String;
      /** The HSM software version. **/
      SoftwareVersion?: String;
      /** The public SSH key. **/
      SshPublicKey?: SshKey;
      /** The date and time that the SSH key was last updated. **/
      SshKeyLastUpdated?: Timestamp;
      /** The URI of the certificate server. **/
      ServerCertUri?: String;
      /** The date and time that the server certificate was last updated. **/
      ServerCertLastUpdated?: Timestamp;
      /** The list of partitions on the HSM. **/
      Partitions?: PartitionList;
    }
    export interface DescribeLunaClientRequest {
      /** The ARN of the client. **/
      ClientArn?: ClientArn;
      /** The certificate fingerprint. **/
      CertificateFingerprint?: CertificateFingerprint;
    }
    export interface DescribeLunaClientResponse {
      /** The ARN of the client. **/
      ClientArn?: ClientArn;
      /** The certificate installed on the HSMs used by this client. **/
      Certificate?: Certificate;
      /** The certificate fingerprint. **/
      CertificateFingerprint?: CertificateFingerprint;
      /** The date and time the client was last modified. **/
      LastModifiedTimestamp?: Timestamp;
      /** The label of the client. **/
      Label?: Label;
    }
    export interface GetConfigRequest {
      /** The ARN of the client. **/
      ClientArn: ClientArn;
      /** The client version. **/
      ClientVersion: ClientVersion;
      /** A list of ARNs that identify the high-availability partition groups that are
associated with the client. **/
      HapgList: HapgList;
    }
    export interface GetConfigResponse {
      /** The type of credentials. **/
      ConfigType?: String;
      /** The chrystoki.conf configuration file. **/
      ConfigFile?: String;
      /** The certificate file containing the server.pem files of the HSMs. **/
      ConfigCred?: String;
    }
    export interface InvalidRequestException {
    }
    export interface ListAvailableZonesRequest {
    }
    export interface ListAvailableZonesResponse {
      /** The list of Availability Zones that have available AWS CloudHSM capacity. **/
      AZList?: AZList;
    }
    export interface ListHapgsRequest {
      /** The NextToken value from a previous call to ListHapgs. Pass null if this is the
first call. **/
      NextToken?: PaginationToken;
    }
    export interface ListHapgsResponse {
      /** The list of high-availability partition groups. **/
      HapgList: HapgList;
      /** If not null, more results are available. Pass this value to ListHapgs to
retrieve the next set of items. **/
      NextToken?: PaginationToken;
    }
    export interface ListHsmsRequest {
      /** The NextToken value from a previous call to ListHsms. Pass null if this is the
first call. **/
      NextToken?: PaginationToken;
    }
    export interface ListHsmsResponse {
      /** The list of ARNs that identify the HSMs. **/
      HsmList?: HsmList;
      /** If not null, more results are available. Pass this value to ListHsms to retrieve
the next set of items. **/
      NextToken?: PaginationToken;
    }
    export interface ListLunaClientsRequest {
      /** The NextToken value from a previous call to ListLunaClients. Pass null if this
is the first call. **/
      NextToken?: PaginationToken;
    }
    export interface ListLunaClientsResponse {
      /** The list of clients. **/
      ClientList: ClientList;
      /** If not null, more results are available. Pass this to ListLunaClients to
retrieve the next set of items. **/
      NextToken?: PaginationToken;
    }
    export interface ListTagsForResourceRequest {
      /** The Amazon Resource Name (ARN) of the AWS CloudHSM resource. **/
      ResourceArn: String;
    }
    export interface ListTagsForResourceResponse {
      /** One or more tags. **/
      TagList: TagList;
    }
    export interface ModifyHapgRequest {
      /** The ARN of the high-availability partition group to modify. **/
      HapgArn: HapgArn;
      /** The new label for the high-availability partition group. **/
      Label?: Label;
      /** The list of partition serial numbers to make members of the high-availability
partition group. **/
      PartitionSerialList?: PartitionSerialList;
    }
    export interface ModifyHapgResponse {
      /** The ARN of the high-availability partition group. **/
      HapgArn?: HapgArn;
    }
    export interface ModifyHsmRequest {
      /** The ARN of the HSM to modify. **/
      HsmArn: HsmArn;
      /** The new identifier of the subnet that the HSM is in. The new subnet must be in
the same Availability Zone as the current subnet. **/
      SubnetId?: SubnetId;
      /** The new IP address for the elastic network interface (ENI) attached to the HSM.

If the HSM is moved to a different subnet, and an IP address is not specified,
an IP address will be randomly chosen from the CIDR range of the new subnet. **/
      EniIp?: IpAddress;
      /** The new IAM role ARN. **/
      IamRoleArn?: IamRoleArn;
      /** The new external ID. **/
      ExternalId?: ExternalId;
      /** The new IP address for the syslog monitoring server. The AWS CloudHSM service
only supports one syslog monitoring server. **/
      SyslogIp?: IpAddress;
    }
    export interface ModifyHsmResponse {
      /** The ARN of the HSM. **/
      HsmArn?: HsmArn;
    }
    export interface ModifyLunaClientRequest {
      /** The ARN of the client. **/
      ClientArn: ClientArn;
      /** The new certificate for the client. **/
      Certificate: Certificate;
    }
    export interface ModifyLunaClientResponse {
      /** The ARN of the client. **/
      ClientArn?: ClientArn;
    }
    export interface RemoveTagsFromResourceRequest {
      /** The Amazon Resource Name (ARN) of the AWS CloudHSM resource. **/
      ResourceArn: String;
      /** The tag key or keys to remove.

Specify only the tag key to remove (not the value). To overwrite the value for
an existing tag, use AddTagsToResource. **/
      TagKeyList: TagKeyList;
    }
    export interface RemoveTagsFromResourceResponse {
      /** The status of the operation. **/
      Status: String;
    }
    export interface Tag {
      /** The key of the tag. **/
      Key: TagKey;
      /** The value of the tag. **/
      Value: TagValue;
    }
  }
}
