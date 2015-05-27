// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class CloudHSM {
      constructor(options?: any);
      createHapg(params: CreateHapgRequest, callback: (err: CloudHsmServiceException|CloudHsmInternalException|InvalidRequestException|any, data: CreateHapgResponse|any) => void): void;
      createHsm(params: CreateHsmRequest, callback: (err: CloudHsmServiceException|CloudHsmInternalException|InvalidRequestException|any, data: CreateHsmResponse|any) => void): void;
      createLunaClient(params: CreateLunaClientRequest, callback: (err: CloudHsmServiceException|CloudHsmInternalException|InvalidRequestException|any, data: CreateLunaClientResponse|any) => void): void;
      deleteHapg(params: DeleteHapgRequest, callback: (err: CloudHsmServiceException|CloudHsmInternalException|InvalidRequestException|any, data: DeleteHapgResponse|any) => void): void;
      deleteHsm(params: DeleteHsmRequest, callback: (err: CloudHsmServiceException|CloudHsmInternalException|InvalidRequestException|any, data: DeleteHsmResponse|any) => void): void;
      deleteLunaClient(params: DeleteLunaClientRequest, callback: (err: CloudHsmServiceException|CloudHsmInternalException|InvalidRequestException|any, data: DeleteLunaClientResponse|any) => void): void;
      describeHapg(params: DescribeHapgRequest, callback: (err: CloudHsmServiceException|CloudHsmInternalException|InvalidRequestException|any, data: DescribeHapgResponse|any) => void): void;
      describeHsm(params: DescribeHsmRequest, callback: (err: CloudHsmServiceException|CloudHsmInternalException|InvalidRequestException|any, data: DescribeHsmResponse|any) => void): void;
      describeLunaClient(params: DescribeLunaClientRequest, callback: (err: CloudHsmServiceException|CloudHsmInternalException|InvalidRequestException|any, data: DescribeLunaClientResponse|any) => void): void;
      getConfig(params: GetConfigRequest, callback: (err: CloudHsmServiceException|CloudHsmInternalException|InvalidRequestException|any, data: GetConfigResponse|any) => void): void;
      listAvailableZones(params: ListAvailableZonesRequest, callback: (err: CloudHsmServiceException|CloudHsmInternalException|InvalidRequestException|any, data: ListAvailableZonesResponse|any) => void): void;
      listHapgs(params: ListHapgsRequest, callback: (err: CloudHsmServiceException|CloudHsmInternalException|InvalidRequestException|any, data: ListHapgsResponse|any) => void): void;
      listHsms(params: ListHsmsRequest, callback: (err: CloudHsmServiceException|CloudHsmInternalException|InvalidRequestException|any, data: ListHsmsResponse|any) => void): void;
      listLunaClients(params: ListLunaClientsRequest, callback: (err: CloudHsmServiceException|CloudHsmInternalException|InvalidRequestException|any, data: ListLunaClientsResponse|any) => void): void;
      modifyHapg(params: ModifyHapgRequest, callback: (err: CloudHsmServiceException|CloudHsmInternalException|InvalidRequestException|any, data: ModifyHapgResponse|any) => void): void;
      modifyHsm(params: ModifyHsmRequest, callback: (err: CloudHsmServiceException|CloudHsmInternalException|InvalidRequestException|any, data: ModifyHsmResponse|any) => void): void;
      modifyLunaClient(params: ModifyLunaClientRequest, callback: (err: CloudHsmServiceException|any, data: ModifyLunaClientResponse|any) => void): void;
    }

    export type AZ = string; // pattern: "[a-zA-Z0-9\-]*"

    export type AZList = Array<AZ>;

    export type Boolean = boolean;

    export type Certificate = string; // pattern: "[\w :+=./\n-]*"

    export type CertificateFingerprint = string; // pattern: "([0-9a-fA-F][0-9a-fA-F]:){15}[0-9a-fA-F][0-9a-fA-F]"

    export type ClientArn = string; // pattern: "arn:aws(-iso)?:cloudhsm:[a-zA-Z0-9\-]*:[0-9]{12}:client-[0-9a-f]{8}"

    export type ClientLabel = string; // pattern: "[a-zA-Z0-9_.-]{2,64}"

    export type ClientList = Array<ClientArn>;

    export type ClientToken = string; // pattern: "[a-zA-Z0-9]{1,64}"

    export type ClientVersion = string;

    export interface CloudHsmInternalException {
    }


    export type CloudHsmObjectState = string;

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


    export type EniId = string; // pattern: "eni-[0-9a-f]{8}"

    export type ExternalId = string; // pattern: "[\w :+=./-]*"

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


    export type HapgArn = string; // pattern: "arn:aws(-iso)?:cloudhsm:[a-zA-Z0-9\-]*:[0-9]{12}:hapg-[0-9a-f]{8}"

    export type HapgList = Array<HapgArn>;

    export type HsmArn = string; // pattern: "arn:aws(-iso)?:cloudhsm:[a-zA-Z0-9\-]*:[0-9]{12}:hsm-[0-9a-f]{8}"

    export type HsmList = Array<HsmArn>;

    export type HsmSerialNumber = string; // pattern: "\d{1,16}"

    export type HsmStatus = string;

    export type IamRoleArn = string; // pattern: "arn:aws(-iso)?:iam::[0-9]{12}:role/[a-zA-Z0-9_\+=,\.\-@]{1,64}"

    export interface InvalidRequestException {
    }


    export type IpAddress = string; // pattern: "\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}"

    export type Label = string; // pattern: "[a-zA-Z0-9_.-]{1,64}"

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


    export type PaginationToken = string; // pattern: "[a-zA-Z0-9+/]*"

    export type PartitionArn = string; // pattern: "arn:aws(-iso)?:cloudhsm:[a-zA-Z0-9\-]*:[0-9]{12}:hsm-[0-9a-f]{8}/partition-[0-9]{6,12}"

    export type PartitionList = Array<PartitionArn>;

    export type PartitionSerial = string; // pattern: "\d{9}"

    export type PartitionSerialList = Array<PartitionSerial>;

    export type SshKey = string; // pattern: "[a-zA-Z0-9+/= ._:\\@-]*"

    export type String = string; // pattern: "[\w :+=./\\-]*"

    export type SubnetId = string; // pattern: "subnet-[0-9a-f]{8}"

    export type SubscriptionType = string;

    export type Timestamp = string; // pattern: "\d*"

    export type VpcId = string; // pattern: "vpc-[0-9a-f]{8}"

}
