// Type definitions for aws-sdk - Amazon CloudHSM
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2014-05-30
     * endpointPrefix: cloudhsm
     * serviceAbbreviation: CloudHSM
     * signatureVersion: v4
     * protocol: json
     */
    export class CloudHSM extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      createHapg(params: CloudHSM.CreateHapgRequest, callback?: (err: CloudHSM.CloudHsmServiceException|CloudHSM.CloudHsmInternalException|CloudHSM.InvalidRequestException|any, data: CloudHSM.CreateHapgResponse|any) => void): Request;
      createHsm(params: CloudHSM.CreateHsmRequest, callback?: (err: CloudHSM.CloudHsmServiceException|CloudHSM.CloudHsmInternalException|CloudHSM.InvalidRequestException|any, data: CloudHSM.CreateHsmResponse|any) => void): Request;
      createLunaClient(params: CloudHSM.CreateLunaClientRequest, callback?: (err: CloudHSM.CloudHsmServiceException|CloudHSM.CloudHsmInternalException|CloudHSM.InvalidRequestException|any, data: CloudHSM.CreateLunaClientResponse|any) => void): Request;
      deleteHapg(params: CloudHSM.DeleteHapgRequest, callback?: (err: CloudHSM.CloudHsmServiceException|CloudHSM.CloudHsmInternalException|CloudHSM.InvalidRequestException|any, data: CloudHSM.DeleteHapgResponse|any) => void): Request;
      deleteHsm(params: CloudHSM.DeleteHsmRequest, callback?: (err: CloudHSM.CloudHsmServiceException|CloudHSM.CloudHsmInternalException|CloudHSM.InvalidRequestException|any, data: CloudHSM.DeleteHsmResponse|any) => void): Request;
      deleteLunaClient(params: CloudHSM.DeleteLunaClientRequest, callback?: (err: CloudHSM.CloudHsmServiceException|CloudHSM.CloudHsmInternalException|CloudHSM.InvalidRequestException|any, data: CloudHSM.DeleteLunaClientResponse|any) => void): Request;
      describeHapg(params: CloudHSM.DescribeHapgRequest, callback?: (err: CloudHSM.CloudHsmServiceException|CloudHSM.CloudHsmInternalException|CloudHSM.InvalidRequestException|any, data: CloudHSM.DescribeHapgResponse|any) => void): Request;
      describeHsm(params: CloudHSM.DescribeHsmRequest, callback?: (err: CloudHSM.CloudHsmServiceException|CloudHSM.CloudHsmInternalException|CloudHSM.InvalidRequestException|any, data: CloudHSM.DescribeHsmResponse|any) => void): Request;
      describeLunaClient(params: CloudHSM.DescribeLunaClientRequest, callback?: (err: CloudHSM.CloudHsmServiceException|CloudHSM.CloudHsmInternalException|CloudHSM.InvalidRequestException|any, data: CloudHSM.DescribeLunaClientResponse|any) => void): Request;
      getConfig(params: CloudHSM.GetConfigRequest, callback?: (err: CloudHSM.CloudHsmServiceException|CloudHSM.CloudHsmInternalException|CloudHSM.InvalidRequestException|any, data: CloudHSM.GetConfigResponse|any) => void): Request;
      listAvailableZones(params: CloudHSM.ListAvailableZonesRequest, callback?: (err: CloudHSM.CloudHsmServiceException|CloudHSM.CloudHsmInternalException|CloudHSM.InvalidRequestException|any, data: CloudHSM.ListAvailableZonesResponse|any) => void): Request;
      listHapgs(params: CloudHSM.ListHapgsRequest, callback?: (err: CloudHSM.CloudHsmServiceException|CloudHSM.CloudHsmInternalException|CloudHSM.InvalidRequestException|any, data: CloudHSM.ListHapgsResponse|any) => void): Request;
      listHsms(params: CloudHSM.ListHsmsRequest, callback?: (err: CloudHSM.CloudHsmServiceException|CloudHSM.CloudHsmInternalException|CloudHSM.InvalidRequestException|any, data: CloudHSM.ListHsmsResponse|any) => void): Request;
      listLunaClients(params: CloudHSM.ListLunaClientsRequest, callback?: (err: CloudHSM.CloudHsmServiceException|CloudHSM.CloudHsmInternalException|CloudHSM.InvalidRequestException|any, data: CloudHSM.ListLunaClientsResponse|any) => void): Request;
      modifyHapg(params: CloudHSM.ModifyHapgRequest, callback?: (err: CloudHSM.CloudHsmServiceException|CloudHSM.CloudHsmInternalException|CloudHSM.InvalidRequestException|any, data: CloudHSM.ModifyHapgResponse|any) => void): Request;
      modifyHsm(params: CloudHSM.ModifyHsmRequest, callback?: (err: CloudHSM.CloudHsmServiceException|CloudHSM.CloudHsmInternalException|CloudHSM.InvalidRequestException|any, data: CloudHSM.ModifyHsmResponse|any) => void): Request;
      modifyLunaClient(params: CloudHSM.ModifyLunaClientRequest, callback?: (err: CloudHSM.CloudHsmServiceException|any, data: CloudHSM.ModifyLunaClientResponse|any) => void): Request;

    }

    export module CloudHSM {
        export type AZ = string;    // pattern: &quot;[a-zA-Z0-9\-]*&quot;
        export type AZList = AZ[];
        export type Boolean = boolean;
        export type Certificate = string;    // pattern: &quot;[\w :+=./\n-]*&quot;, max: 2400, min: 600
        export type CertificateFingerprint = string;    // pattern: &quot;([0-9a-fA-F][0-9a-fA-F]:){15}[0-9a-fA-F][0-9a-fA-F]&quot;
        export type ClientArn = string;    // pattern: &quot;arn:aws(-iso)?:cloudhsm:[a-zA-Z0-9\-]*:[0-9]{12}:client-[0-9a-f]{8}&quot;
        export type ClientLabel = string;    // pattern: &quot;[a-zA-Z0-9_.-]{2,64}&quot;
        export type ClientList = ClientArn[];
        export type ClientToken = string;    // pattern: &quot;[a-zA-Z0-9]{1,64}&quot;
        export type ClientVersion = string;
        export type CloudHsmObjectState = string;
        export type EniId = string;    // pattern: &quot;eni-[0-9a-f]{8}&quot;
        export type ExternalId = string;    // pattern: &quot;[\w :+=./-]*&quot;
        export type HapgArn = string;    // pattern: &quot;arn:aws(-iso)?:cloudhsm:[a-zA-Z0-9\-]*:[0-9]{12}:hapg-[0-9a-f]{8}&quot;
        export type HapgList = HapgArn[];
        export type HsmArn = string;    // pattern: &quot;arn:aws(-iso)?:cloudhsm:[a-zA-Z0-9\-]*:[0-9]{12}:hsm-[0-9a-f]{8}&quot;
        export type HsmList = HsmArn[];
        export type HsmSerialNumber = string;    // pattern: &quot;\d{1,16}&quot;
        export type HsmStatus = string;
        export type IamRoleArn = string;    // pattern: &quot;arn:aws(-iso)?:iam::[0-9]{12}:role/[a-zA-Z0-9_\+=,\.\-@]{1,64}&quot;
        export type IpAddress = string;    // pattern: &quot;\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}&quot;
        export type Label = string;    // pattern: &quot;[a-zA-Z0-9_.-]{1,64}&quot;
        export type PaginationToken = string;    // pattern: &quot;[a-zA-Z0-9+/]*&quot;
        export type PartitionArn = string;    // pattern: &quot;arn:aws(-iso)?:cloudhsm:[a-zA-Z0-9\-]*:[0-9]{12}:hsm-[0-9a-f]{8}/partition-[0-9]{6,12}&quot;
        export type PartitionList = PartitionArn[];
        export type PartitionSerial = string;    // pattern: &quot;\d{9}&quot;
        export type PartitionSerialList = PartitionSerial[];
        export type SshKey = string;    // pattern: &quot;[a-zA-Z0-9+/= ._:\\@-]*&quot;
        export type String = string;    // pattern: &quot;[\w :+=./\\-]*&quot;
        export type SubnetId = string;    // pattern: &quot;subnet-[0-9a-f]{8}&quot;
        export type SubscriptionType = string;
        export type Timestamp = string;    // pattern: &quot;\d*&quot;
        export type VpcId = string;    // pattern: &quot;vpc-[0-9a-f]{8}&quot;

        export interface CloudHsmInternalException {
        }
        export interface CloudHsmServiceException {
            message?: String;
            retryable?: Boolean;
        }
        export interface CreateHapgRequest {
            Label: Label;
        }
        export interface CreateHapgResponse {
            HapgArn?: HapgArn;
        }
        export interface CreateHsmRequest {
            SubnetId: SubnetId;
            SshKey: SshKey;
            EniIp?: IpAddress;
            IamRoleArn: IamRoleArn;
            ExternalId?: ExternalId;
            SubscriptionType: SubscriptionType;
            ClientToken?: ClientToken;
            SyslogIp?: IpAddress;
        }
        export interface CreateHsmResponse {
            HsmArn?: HsmArn;
        }
        export interface CreateLunaClientRequest {
            Label?: ClientLabel;
            Certificate: Certificate;
        }
        export interface CreateLunaClientResponse {
            ClientArn?: ClientArn;
        }
        export interface DeleteHapgRequest {
            HapgArn: HapgArn;
        }
        export interface DeleteHapgResponse {
            Status: String;
        }
        export interface DeleteHsmRequest {
            HsmArn: HsmArn;
        }
        export interface DeleteHsmResponse {
            Status: String;
        }
        export interface DeleteLunaClientRequest {
            ClientArn: ClientArn;
        }
        export interface DeleteLunaClientResponse {
            Status: String;
        }
        export interface DescribeHapgRequest {
            HapgArn: HapgArn;
        }
        export interface DescribeHapgResponse {
            HapgArn?: HapgArn;
            HapgSerial?: String;
            HsmsLastActionFailed?: HsmList;
            HsmsPendingDeletion?: HsmList;
            HsmsPendingRegistration?: HsmList;
            Label?: Label;
            LastModifiedTimestamp?: Timestamp;
            PartitionSerialList?: PartitionSerialList;
            State?: CloudHsmObjectState;
        }
        export interface DescribeHsmRequest {
            HsmArn?: HsmArn;
            HsmSerialNumber?: HsmSerialNumber;
        }
        export interface DescribeHsmResponse {
            HsmArn?: HsmArn;
            Status?: HsmStatus;
            StatusDetails?: String;
            AvailabilityZone?: AZ;
            EniId?: EniId;
            EniIp?: IpAddress;
            SubscriptionType?: SubscriptionType;
            SubscriptionStartDate?: Timestamp;
            SubscriptionEndDate?: Timestamp;
            VpcId?: VpcId;
            SubnetId?: SubnetId;
            IamRoleArn?: IamRoleArn;
            SerialNumber?: HsmSerialNumber;
            VendorName?: String;
            HsmType?: String;
            SoftwareVersion?: String;
            SshPublicKey?: SshKey;
            SshKeyLastUpdated?: Timestamp;
            ServerCertUri?: String;
            ServerCertLastUpdated?: Timestamp;
            Partitions?: PartitionList;
        }
        export interface DescribeLunaClientRequest {
            ClientArn?: ClientArn;
            CertificateFingerprint?: CertificateFingerprint;
        }
        export interface DescribeLunaClientResponse {
            ClientArn?: ClientArn;
            Certificate?: Certificate;
            CertificateFingerprint?: CertificateFingerprint;
            LastModifiedTimestamp?: Timestamp;
            Label?: Label;
        }
        export interface GetConfigRequest {
            ClientArn: ClientArn;
            ClientVersion: ClientVersion;
            HapgList: HapgList;
        }
        export interface GetConfigResponse {
            ConfigType?: String;
            ConfigFile?: String;
            ConfigCred?: String;
        }
        export interface InvalidRequestException {
        }
        export interface ListAvailableZonesRequest {
        }
        export interface ListAvailableZonesResponse {
            AZList?: AZList;
        }
        export interface ListHapgsRequest {
            NextToken?: PaginationToken;
        }
        export interface ListHapgsResponse {
            HapgList: HapgList;
            NextToken?: PaginationToken;
        }
        export interface ListHsmsRequest {
            NextToken?: PaginationToken;
        }
        export interface ListHsmsResponse {
            HsmList?: HsmList;
            NextToken?: PaginationToken;
        }
        export interface ListLunaClientsRequest {
            NextToken?: PaginationToken;
        }
        export interface ListLunaClientsResponse {
            ClientList: ClientList;
            NextToken?: PaginationToken;
        }
        export interface ModifyHapgRequest {
            HapgArn: HapgArn;
            Label?: Label;
            PartitionSerialList?: PartitionSerialList;
        }
        export interface ModifyHapgResponse {
            HapgArn?: HapgArn;
        }
        export interface ModifyHsmRequest {
            HsmArn: HsmArn;
            SubnetId?: SubnetId;
            EniIp?: IpAddress;
            IamRoleArn?: IamRoleArn;
            ExternalId?: ExternalId;
            SyslogIp?: IpAddress;
        }
        export interface ModifyHsmResponse {
            HsmArn?: HsmArn;
        }
        export interface ModifyLunaClientRequest {
            ClientArn: ClientArn;
            Certificate: Certificate;
        }
        export interface ModifyLunaClientResponse {
            ClientArn?: ClientArn;
        }

    }
}
