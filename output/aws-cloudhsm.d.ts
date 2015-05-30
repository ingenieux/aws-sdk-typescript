// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class CloudHSM {
      constructor(options?: any);
      createHapg(params: CloudHSMCreateHapgRequest, callback: (err: CloudHSMCloudHsmServiceException|CloudHSMCloudHsmInternalException|CloudHSMInvalidRequestException|any, data: CloudHSMCreateHapgResponse|any) => void): void;
      createHsm(params: CloudHSMCreateHsmRequest, callback: (err: CloudHSMCloudHsmServiceException|CloudHSMCloudHsmInternalException|CloudHSMInvalidRequestException|any, data: CloudHSMCreateHsmResponse|any) => void): void;
      createLunaClient(params: CloudHSMCreateLunaClientRequest, callback: (err: CloudHSMCloudHsmServiceException|CloudHSMCloudHsmInternalException|CloudHSMInvalidRequestException|any, data: CloudHSMCreateLunaClientResponse|any) => void): void;
      deleteHapg(params: CloudHSMDeleteHapgRequest, callback: (err: CloudHSMCloudHsmServiceException|CloudHSMCloudHsmInternalException|CloudHSMInvalidRequestException|any, data: CloudHSMDeleteHapgResponse|any) => void): void;
      deleteHsm(params: CloudHSMDeleteHsmRequest, callback: (err: CloudHSMCloudHsmServiceException|CloudHSMCloudHsmInternalException|CloudHSMInvalidRequestException|any, data: CloudHSMDeleteHsmResponse|any) => void): void;
      deleteLunaClient(params: CloudHSMDeleteLunaClientRequest, callback: (err: CloudHSMCloudHsmServiceException|CloudHSMCloudHsmInternalException|CloudHSMInvalidRequestException|any, data: CloudHSMDeleteLunaClientResponse|any) => void): void;
      describeHapg(params: CloudHSMDescribeHapgRequest, callback: (err: CloudHSMCloudHsmServiceException|CloudHSMCloudHsmInternalException|CloudHSMInvalidRequestException|any, data: CloudHSMDescribeHapgResponse|any) => void): void;
      describeHsm(params: CloudHSMDescribeHsmRequest, callback: (err: CloudHSMCloudHsmServiceException|CloudHSMCloudHsmInternalException|CloudHSMInvalidRequestException|any, data: CloudHSMDescribeHsmResponse|any) => void): void;
      describeLunaClient(params: CloudHSMDescribeLunaClientRequest, callback: (err: CloudHSMCloudHsmServiceException|CloudHSMCloudHsmInternalException|CloudHSMInvalidRequestException|any, data: CloudHSMDescribeLunaClientResponse|any) => void): void;
      getConfig(params: CloudHSMGetConfigRequest, callback: (err: CloudHSMCloudHsmServiceException|CloudHSMCloudHsmInternalException|CloudHSMInvalidRequestException|any, data: CloudHSMGetConfigResponse|any) => void): void;
      listAvailableZones(params: CloudHSMListAvailableZonesRequest, callback: (err: CloudHSMCloudHsmServiceException|CloudHSMCloudHsmInternalException|CloudHSMInvalidRequestException|any, data: CloudHSMListAvailableZonesResponse|any) => void): void;
      listHapgs(params: CloudHSMListHapgsRequest, callback: (err: CloudHSMCloudHsmServiceException|CloudHSMCloudHsmInternalException|CloudHSMInvalidRequestException|any, data: CloudHSMListHapgsResponse|any) => void): void;
      listHsms(params: CloudHSMListHsmsRequest, callback: (err: CloudHSMCloudHsmServiceException|CloudHSMCloudHsmInternalException|CloudHSMInvalidRequestException|any, data: CloudHSMListHsmsResponse|any) => void): void;
      listLunaClients(params: CloudHSMListLunaClientsRequest, callback: (err: CloudHSMCloudHsmServiceException|CloudHSMCloudHsmInternalException|CloudHSMInvalidRequestException|any, data: CloudHSMListLunaClientsResponse|any) => void): void;
      modifyHapg(params: CloudHSMModifyHapgRequest, callback: (err: CloudHSMCloudHsmServiceException|CloudHSMCloudHsmInternalException|CloudHSMInvalidRequestException|any, data: CloudHSMModifyHapgResponse|any) => void): void;
      modifyHsm(params: CloudHSMModifyHsmRequest, callback: (err: CloudHSMCloudHsmServiceException|CloudHSMCloudHsmInternalException|CloudHSMInvalidRequestException|any, data: CloudHSMModifyHsmResponse|any) => void): void;
      modifyLunaClient(params: CloudHSMModifyLunaClientRequest, callback: (err: CloudHSMCloudHsmServiceException|any, data: CloudHSMModifyLunaClientResponse|any) => void): void;
    }

    export type CloudHSMAZ = string; // pattern: "[a-zA-Z0-9\-]*"
    export type CloudHSMAZList = Array<CloudHSMAZ>;
    export type CloudHSMBoolean = boolean;
    export type CloudHSMCertificate = string; // pattern: "[\w :+=./\n-]*"
    export type CloudHSMCertificateFingerprint = string; // pattern: "([0-9a-fA-F][0-9a-fA-F]:){15}[0-9a-fA-F][0-9a-fA-F]"
    export type CloudHSMClientArn = string; // pattern: "arn:aws(-iso)?:cloudhsm:[a-zA-Z0-9\-]*:[0-9]{12}:client-[0-9a-f]{8}"
    export type CloudHSMClientLabel = string; // pattern: "[a-zA-Z0-9_.-]{2,64}"
    export type CloudHSMClientList = Array<CloudHSMClientArn>;
    export type CloudHSMClientToken = string; // pattern: "[a-zA-Z0-9]{1,64}"
    export type CloudHSMClientVersion = string;
    export interface CloudHSMCloudHsmInternalException {
    }

    export type CloudHSMCloudHsmObjectState = string;
    export interface CloudHSMCloudHsmServiceException {
        message?: CloudHSMString;
        retryable?: CloudHSMBoolean;
    }

    export interface CloudHSMCreateHapgRequest {
        Label: CloudHSMLabel;
    }

    export interface CloudHSMCreateHapgResponse {
        HapgArn?: CloudHSMHapgArn;
    }

    export interface CloudHSMCreateHsmRequest {
        SubnetId: CloudHSMSubnetId;
        SshKey: CloudHSMSshKey;
        EniIp?: CloudHSMIpAddress;
        IamRoleArn: CloudHSMIamRoleArn;
        ExternalId?: CloudHSMExternalId;
        SubscriptionType: CloudHSMSubscriptionType;
        ClientToken?: CloudHSMClientToken;
        SyslogIp?: CloudHSMIpAddress;
    }

    export interface CloudHSMCreateHsmResponse {
        HsmArn?: CloudHSMHsmArn;
    }

    export interface CloudHSMCreateLunaClientRequest {
        Label?: CloudHSMClientLabel;
        Certificate: CloudHSMCertificate;
    }

    export interface CloudHSMCreateLunaClientResponse {
        ClientArn?: CloudHSMClientArn;
    }

    export interface CloudHSMDeleteHapgRequest {
        HapgArn: CloudHSMHapgArn;
    }

    export interface CloudHSMDeleteHapgResponse {
        Status: CloudHSMString;
    }

    export interface CloudHSMDeleteHsmRequest {
        HsmArn: CloudHSMHsmArn;
    }

    export interface CloudHSMDeleteHsmResponse {
        Status: CloudHSMString;
    }

    export interface CloudHSMDeleteLunaClientRequest {
        ClientArn: CloudHSMClientArn;
    }

    export interface CloudHSMDeleteLunaClientResponse {
        Status: CloudHSMString;
    }

    export interface CloudHSMDescribeHapgRequest {
        HapgArn: CloudHSMHapgArn;
    }

    export interface CloudHSMDescribeHapgResponse {
        HapgArn?: CloudHSMHapgArn;
        HapgSerial?: CloudHSMString;
        HsmsLastActionFailed?: CloudHSMHsmList;
        HsmsPendingDeletion?: CloudHSMHsmList;
        HsmsPendingRegistration?: CloudHSMHsmList;
        Label?: CloudHSMLabel;
        LastModifiedTimestamp?: CloudHSMTimestamp;
        PartitionSerialList?: CloudHSMPartitionSerialList;
        State?: CloudHSMCloudHsmObjectState;
    }

    export interface CloudHSMDescribeHsmRequest {
        HsmArn?: CloudHSMHsmArn;
        HsmSerialNumber?: CloudHSMHsmSerialNumber;
    }

    export interface CloudHSMDescribeHsmResponse {
        HsmArn?: CloudHSMHsmArn;
        Status?: CloudHSMHsmStatus;
        StatusDetails?: CloudHSMString;
        AvailabilityZone?: CloudHSMAZ;
        EniId?: CloudHSMEniId;
        EniIp?: CloudHSMIpAddress;
        SubscriptionType?: CloudHSMSubscriptionType;
        SubscriptionStartDate?: CloudHSMTimestamp;
        SubscriptionEndDate?: CloudHSMTimestamp;
        VpcId?: CloudHSMVpcId;
        SubnetId?: CloudHSMSubnetId;
        IamRoleArn?: CloudHSMIamRoleArn;
        SerialNumber?: CloudHSMHsmSerialNumber;
        VendorName?: CloudHSMString;
        HsmType?: CloudHSMString;
        SoftwareVersion?: CloudHSMString;
        SshPublicKey?: CloudHSMSshKey;
        SshKeyLastUpdated?: CloudHSMTimestamp;
        ServerCertUri?: CloudHSMString;
        ServerCertLastUpdated?: CloudHSMTimestamp;
        Partitions?: CloudHSMPartitionList;
    }

    export interface CloudHSMDescribeLunaClientRequest {
        ClientArn?: CloudHSMClientArn;
        CertificateFingerprint?: CloudHSMCertificateFingerprint;
    }

    export interface CloudHSMDescribeLunaClientResponse {
        ClientArn?: CloudHSMClientArn;
        Certificate?: CloudHSMCertificate;
        CertificateFingerprint?: CloudHSMCertificateFingerprint;
        LastModifiedTimestamp?: CloudHSMTimestamp;
        Label?: CloudHSMLabel;
    }

    export type CloudHSMEniId = string; // pattern: "eni-[0-9a-f]{8}"
    export type CloudHSMExternalId = string; // pattern: "[\w :+=./-]*"
    export interface CloudHSMGetConfigRequest {
        ClientArn: CloudHSMClientArn;
        ClientVersion: CloudHSMClientVersion;
        HapgList: CloudHSMHapgList;
    }

    export interface CloudHSMGetConfigResponse {
        ConfigType?: CloudHSMString;
        ConfigFile?: CloudHSMString;
        ConfigCred?: CloudHSMString;
    }

    export type CloudHSMHapgArn = string; // pattern: "arn:aws(-iso)?:cloudhsm:[a-zA-Z0-9\-]*:[0-9]{12}:hapg-[0-9a-f]{8}"
    export type CloudHSMHapgList = Array<CloudHSMHapgArn>;
    export type CloudHSMHsmArn = string; // pattern: "arn:aws(-iso)?:cloudhsm:[a-zA-Z0-9\-]*:[0-9]{12}:hsm-[0-9a-f]{8}"
    export type CloudHSMHsmList = Array<CloudHSMHsmArn>;
    export type CloudHSMHsmSerialNumber = string; // pattern: "\d{1,16}"
    export type CloudHSMHsmStatus = string;
    export type CloudHSMIamRoleArn = string; // pattern: "arn:aws(-iso)?:iam::[0-9]{12}:role/[a-zA-Z0-9_\+=,\.\-@]{1,64}"
    export interface CloudHSMInvalidRequestException {
    }

    export type CloudHSMIpAddress = string; // pattern: "\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}"
    export type CloudHSMLabel = string; // pattern: "[a-zA-Z0-9_.-]{1,64}"
    export interface CloudHSMListAvailableZonesRequest {
    }

    export interface CloudHSMListAvailableZonesResponse {
        AZList?: CloudHSMAZList;
    }

    export interface CloudHSMListHapgsRequest {
        NextToken?: CloudHSMPaginationToken;
    }

    export interface CloudHSMListHapgsResponse {
        HapgList: CloudHSMHapgList;
        NextToken?: CloudHSMPaginationToken;
    }

    export interface CloudHSMListHsmsRequest {
        NextToken?: CloudHSMPaginationToken;
    }

    export interface CloudHSMListHsmsResponse {
        HsmList?: CloudHSMHsmList;
        NextToken?: CloudHSMPaginationToken;
    }

    export interface CloudHSMListLunaClientsRequest {
        NextToken?: CloudHSMPaginationToken;
    }

    export interface CloudHSMListLunaClientsResponse {
        ClientList: CloudHSMClientList;
        NextToken?: CloudHSMPaginationToken;
    }

    export interface CloudHSMModifyHapgRequest {
        HapgArn: CloudHSMHapgArn;
        Label?: CloudHSMLabel;
        PartitionSerialList?: CloudHSMPartitionSerialList;
    }

    export interface CloudHSMModifyHapgResponse {
        HapgArn?: CloudHSMHapgArn;
    }

    export interface CloudHSMModifyHsmRequest {
        HsmArn: CloudHSMHsmArn;
        SubnetId?: CloudHSMSubnetId;
        EniIp?: CloudHSMIpAddress;
        IamRoleArn?: CloudHSMIamRoleArn;
        ExternalId?: CloudHSMExternalId;
        SyslogIp?: CloudHSMIpAddress;
    }

    export interface CloudHSMModifyHsmResponse {
        HsmArn?: CloudHSMHsmArn;
    }

    export interface CloudHSMModifyLunaClientRequest {
        ClientArn: CloudHSMClientArn;
        Certificate: CloudHSMCertificate;
    }

    export interface CloudHSMModifyLunaClientResponse {
        ClientArn?: CloudHSMClientArn;
    }

    export type CloudHSMPaginationToken = string; // pattern: "[a-zA-Z0-9+/]*"
    export type CloudHSMPartitionArn = string; // pattern: "arn:aws(-iso)?:cloudhsm:[a-zA-Z0-9\-]*:[0-9]{12}:hsm-[0-9a-f]{8}/partition-[0-9]{6,12}"
    export type CloudHSMPartitionList = Array<CloudHSMPartitionArn>;
    export type CloudHSMPartitionSerial = string; // pattern: "\d{9}"
    export type CloudHSMPartitionSerialList = Array<CloudHSMPartitionSerial>;
    export type CloudHSMSshKey = string; // pattern: "[a-zA-Z0-9+/= ._:\\@-]*"
    export type CloudHSMString = string; // pattern: "[\w :+=./\\-]*"
    export type CloudHSMSubnetId = string; // pattern: "subnet-[0-9a-f]{8}"
    export type CloudHSMSubscriptionType = string;
    export type CloudHSMTimestamp = string; // pattern: "\d*"
    export type CloudHSMVpcId = string; // pattern: "vpc-[0-9a-f]{8}"
}
