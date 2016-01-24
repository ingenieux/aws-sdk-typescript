// Type definitions for aws-sdk - AWS Directory Service
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2015-04-16
     * endpointPrefix: ds
     * serviceAbbreviation: Directory Service
     * signatureVersion: v4
     * protocol: json
     */
    export class DirectoryService extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      connectDirectory(params: DirectoryService.ConnectDirectoryRequest, callback?: (err: DirectoryService.DirectoryLimitExceededException|DirectoryService.InvalidParameterException|DirectoryService.ClientException|DirectoryService.ServiceException|any, data: DirectoryService.ConnectDirectoryResult|any) => void): Request;
      createAlias(params: DirectoryService.CreateAliasRequest, callback?: (err: DirectoryService.EntityAlreadyExistsException|DirectoryService.EntityDoesNotExistException|DirectoryService.InvalidParameterException|DirectoryService.ClientException|DirectoryService.ServiceException|any, data: DirectoryService.CreateAliasResult|any) => void): Request;
      createComputer(params: DirectoryService.CreateComputerRequest, callback?: (err: DirectoryService.AuthenticationFailedException|DirectoryService.DirectoryUnavailableException|DirectoryService.EntityAlreadyExistsException|DirectoryService.EntityDoesNotExistException|DirectoryService.InvalidParameterException|DirectoryService.UnsupportedOperationException|DirectoryService.ClientException|DirectoryService.ServiceException|any, data: DirectoryService.CreateComputerResult|any) => void): Request;
      createDirectory(params: DirectoryService.CreateDirectoryRequest, callback?: (err: DirectoryService.DirectoryLimitExceededException|DirectoryService.InvalidParameterException|DirectoryService.ClientException|DirectoryService.ServiceException|any, data: DirectoryService.CreateDirectoryResult|any) => void): Request;
      createMicrosoftAD(params: DirectoryService.CreateMicrosoftADRequest, callback?: (err: DirectoryService.DirectoryLimitExceededException|DirectoryService.InvalidParameterException|DirectoryService.ClientException|DirectoryService.ServiceException|DirectoryService.UnsupportedOperationException|any, data: DirectoryService.CreateMicrosoftADResult|any) => void): Request;
      createSnapshot(params: DirectoryService.CreateSnapshotRequest, callback?: (err: DirectoryService.EntityDoesNotExistException|DirectoryService.InvalidParameterException|DirectoryService.SnapshotLimitExceededException|DirectoryService.ClientException|DirectoryService.ServiceException|any, data: DirectoryService.CreateSnapshotResult|any) => void): Request;
      createTrust(params: DirectoryService.CreateTrustRequest, callback?: (err: DirectoryService.EntityAlreadyExistsException|DirectoryService.EntityDoesNotExistException|DirectoryService.InvalidParameterException|DirectoryService.ClientException|DirectoryService.ServiceException|DirectoryService.UnsupportedOperationException|any, data: DirectoryService.CreateTrustResult|any) => void): Request;
      deleteDirectory(params: DirectoryService.DeleteDirectoryRequest, callback?: (err: DirectoryService.EntityDoesNotExistException|DirectoryService.ClientException|DirectoryService.ServiceException|any, data: DirectoryService.DeleteDirectoryResult|any) => void): Request;
      deleteSnapshot(params: DirectoryService.DeleteSnapshotRequest, callback?: (err: DirectoryService.EntityDoesNotExistException|DirectoryService.InvalidParameterException|DirectoryService.ClientException|DirectoryService.ServiceException|any, data: DirectoryService.DeleteSnapshotResult|any) => void): Request;
      deleteTrust(params: DirectoryService.DeleteTrustRequest, callback?: (err: DirectoryService.EntityDoesNotExistException|DirectoryService.InvalidParameterException|DirectoryService.ClientException|DirectoryService.ServiceException|DirectoryService.UnsupportedOperationException|any, data: DirectoryService.DeleteTrustResult|any) => void): Request;
      describeDirectories(params: DirectoryService.DescribeDirectoriesRequest, callback?: (err: DirectoryService.EntityDoesNotExistException|DirectoryService.InvalidParameterException|DirectoryService.InvalidNextTokenException|DirectoryService.ClientException|DirectoryService.ServiceException|any, data: DirectoryService.DescribeDirectoriesResult|any) => void): Request;
      describeSnapshots(params: DirectoryService.DescribeSnapshotsRequest, callback?: (err: DirectoryService.EntityDoesNotExistException|DirectoryService.InvalidParameterException|DirectoryService.InvalidNextTokenException|DirectoryService.ClientException|DirectoryService.ServiceException|any, data: DirectoryService.DescribeSnapshotsResult|any) => void): Request;
      describeTrusts(params: DirectoryService.DescribeTrustsRequest, callback?: (err: DirectoryService.EntityDoesNotExistException|DirectoryService.InvalidNextTokenException|DirectoryService.InvalidParameterException|DirectoryService.ClientException|DirectoryService.ServiceException|DirectoryService.UnsupportedOperationException|any, data: DirectoryService.DescribeTrustsResult|any) => void): Request;
      disableRadius(params: DirectoryService.DisableRadiusRequest, callback?: (err: DirectoryService.EntityDoesNotExistException|DirectoryService.ClientException|DirectoryService.ServiceException|any, data: DirectoryService.DisableRadiusResult|any) => void): Request;
      disableSso(params: DirectoryService.DisableSsoRequest, callback?: (err: DirectoryService.EntityDoesNotExistException|DirectoryService.InsufficientPermissionsException|DirectoryService.AuthenticationFailedException|DirectoryService.ClientException|DirectoryService.ServiceException|any, data: DirectoryService.DisableSsoResult|any) => void): Request;
      enableRadius(params: DirectoryService.EnableRadiusRequest, callback?: (err: DirectoryService.InvalidParameterException|DirectoryService.EntityAlreadyExistsException|DirectoryService.EntityDoesNotExistException|DirectoryService.ClientException|DirectoryService.ServiceException|any, data: DirectoryService.EnableRadiusResult|any) => void): Request;
      enableSso(params: DirectoryService.EnableSsoRequest, callback?: (err: DirectoryService.EntityDoesNotExistException|DirectoryService.InsufficientPermissionsException|DirectoryService.AuthenticationFailedException|DirectoryService.ClientException|DirectoryService.ServiceException|any, data: DirectoryService.EnableSsoResult|any) => void): Request;
      getDirectoryLimits(params: DirectoryService.GetDirectoryLimitsRequest, callback?: (err: DirectoryService.EntityDoesNotExistException|DirectoryService.ClientException|DirectoryService.ServiceException|any, data: DirectoryService.GetDirectoryLimitsResult|any) => void): Request;
      getSnapshotLimits(params: DirectoryService.GetSnapshotLimitsRequest, callback?: (err: DirectoryService.EntityDoesNotExistException|DirectoryService.ClientException|DirectoryService.ServiceException|any, data: DirectoryService.GetSnapshotLimitsResult|any) => void): Request;
      restoreFromSnapshot(params: DirectoryService.RestoreFromSnapshotRequest, callback?: (err: DirectoryService.EntityDoesNotExistException|DirectoryService.InvalidParameterException|DirectoryService.ClientException|DirectoryService.ServiceException|any, data: DirectoryService.RestoreFromSnapshotResult|any) => void): Request;
      updateRadius(params: DirectoryService.UpdateRadiusRequest, callback?: (err: DirectoryService.InvalidParameterException|DirectoryService.EntityDoesNotExistException|DirectoryService.ClientException|DirectoryService.ServiceException|any, data: DirectoryService.UpdateRadiusResult|any) => void): Request;
      verifyTrust(params: DirectoryService.VerifyTrustRequest, callback?: (err: DirectoryService.EntityDoesNotExistException|DirectoryService.InvalidParameterException|DirectoryService.ClientException|DirectoryService.ServiceException|DirectoryService.UnsupportedOperationException|any, data: DirectoryService.VerifyTrustResult|any) => void): Request;

    }

    export module DirectoryService {
        export type AccessUrl = string;    // max: 128, min: 1
        export type AliasName = string;    // pattern: &quot;^(?!d-)([\da-zA-Z]+)([-]*[\da-zA-Z])*&quot;, max: 62, min: 1
        export type AttributeName = string;    // min: 1
        export type AttributeValue = string;
        export type Attributes = Attribute[];
        export type AvailabilityZone = string;
        export type AvailabilityZones = AvailabilityZone[];
        export type CloudOnlyDirectoriesLimitReached = boolean;
        export type ComputerName = string;    // max: 15, min: 1
        export type ComputerPassword = string;    // pattern: &quot;[\u0020-\u00FF]+&quot;, max: 64, min: 8
        export type ConnectPassword = string;    // max: 128, min: 1
        export type ConnectedDirectoriesLimitReached = boolean;
        export type CreatedDateTime = number;
        export type Description = string;    // pattern: &quot;^([a-zA-Z0-9_])[\\a-zA-Z0-9_@#%*+=:?./!\s-]*$&quot;, max: 128
        export type DirectoryDescriptions = DirectoryDescription[];
        export type DirectoryId = string;    // pattern: &quot;^d-[0-9a-f]{10}$&quot;
        export type DirectoryIds = DirectoryId[];
        export type DirectoryName = string;    // pattern: &quot;^([a-zA-Z0-9]+[\\.-])+([a-zA-Z0-9])+$&quot;
        export type DirectoryShortName = string;    // pattern: &quot;^[^\\/:*?\&quot;\&lt;\&gt;|.]+[^\\/:*?\&quot;&lt;&gt;|]*$&quot;
        export type DirectorySize = string;
        export type DirectoryStage = string;
        export type DirectoryType = string;
        export type DnsIpAddrs = IpAddr[];
        export type ExceptionMessage = string;
        export type IpAddr = string;    // pattern: &quot;^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$&quot;
        export type IpAddrs = IpAddr[];
        export type LastUpdatedDateTime = number;
        export type LaunchTime = number;
        export type Limit = number;
        export type ManualSnapshotsLimitReached = boolean;
        export type NextToken = string;
        export type OrganizationalUnitDN = string;    // max: 2000, min: 1
        export type Password = string;    // pattern: &quot;(?=^.{8,64}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9\s])(?=.*[a-z])|(?=.*[^A-Za-z0-9\s])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9\s]))^.*&quot;
        export type PortNumber = number;    // max: 65535, min: 1025
        export type RadiusAuthenticationProtocol = string;
        export type RadiusDisplayLabel = string;    // max: 64, min: 1
        export type RadiusRetries = number;    // max: 10
        export type RadiusSharedSecret = string;    // max: 512, min: 8
        export type RadiusStatus = string;
        export type RadiusTimeout = number;    // max: 20, min: 1
        export type RemoteDomainName = string;    // pattern: &quot;^([a-zA-Z0-9]+[\\.-])+([a-zA-Z0-9])+[.]?$&quot;
        export type RequestId = string;    // pattern: &quot;^([A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12})$&quot;
        export type SID = string;    // pattern: &quot;[&amp;\w+-.@]+&quot;, max: 256, min: 1
        export type SecurityGroupId = string;    // pattern: &quot;^(sg-[0-9a-f]{8})$&quot;
        export type Server = string;    // max: 256, min: 1
        export type Servers = Server[];
        export type SnapshotId = string;    // pattern: &quot;^s-[0-9a-f]{10}$&quot;
        export type SnapshotIds = SnapshotId[];
        export type SnapshotName = string;    // pattern: &quot;^([a-zA-Z0-9_])[\\a-zA-Z0-9_@#%*+=:?./!\s-]*$&quot;, max: 128
        export type SnapshotStatus = string;
        export type SnapshotType = string;
        export type Snapshots = Snapshot[];
        export type SsoEnabled = boolean;
        export type StageReason = string;
        export type StartTime = number;
        export type StateLastUpdatedDateTime = number;
        export type SubnetId = string;    // pattern: &quot;^(subnet-[0-9a-f]{8})$&quot;
        export type SubnetIds = SubnetId[];
        export type TrustDirection = string;
        export type TrustId = string;    // pattern: &quot;^t-[0-9a-f]{10}$&quot;
        export type TrustIds = TrustId[];
        export type TrustPassword = string;    // max: 128, min: 1
        export type TrustState = string;
        export type TrustType = string;
        export type Trusts = Trust[];
        export type UseSameUsername = boolean;
        export type UserName = string;    // pattern: &quot;[a-zA-Z0-9._-]+&quot;, min: 1
        export type VpcId = string;    // pattern: &quot;^(vpc-[0-9a-f]{8})$&quot;

        export interface Attribute {
            Name?: AttributeName;
            Value?: AttributeValue;
        }
        export interface AuthenticationFailedException {
            Message?: ExceptionMessage;
            RequestId?: RequestId;
        }
        export interface ClientException {
            Message?: ExceptionMessage;
            RequestId?: RequestId;
        }
        export interface Computer {
            ComputerId?: SID;
            ComputerName?: ComputerName;
            ComputerAttributes?: Attributes;
        }
        export interface ConnectDirectoryRequest {
            Name: DirectoryName;
            ShortName?: DirectoryShortName;
            Password: ConnectPassword;
            Description?: Description;
            Size: DirectorySize;
            ConnectSettings: DirectoryConnectSettings;
        }
        export interface ConnectDirectoryResult {
            DirectoryId?: DirectoryId;
        }
        export interface CreateAliasRequest {
            DirectoryId: DirectoryId;
            Alias: AliasName;
        }
        export interface CreateAliasResult {
            DirectoryId?: DirectoryId;
            Alias?: AliasName;
        }
        export interface CreateComputerRequest {
            DirectoryId: DirectoryId;
            ComputerName: ComputerName;
            Password: ComputerPassword;
            OrganizationalUnitDistinguishedName?: OrganizationalUnitDN;
            ComputerAttributes?: Attributes;
        }
        export interface CreateComputerResult {
            Computer?: Computer;
        }
        export interface CreateDirectoryRequest {
            Name: DirectoryName;
            ShortName?: DirectoryShortName;
            Password: Password;
            Description?: Description;
            Size: DirectorySize;
            VpcSettings?: DirectoryVpcSettings;
        }
        export interface CreateDirectoryResult {
            DirectoryId?: DirectoryId;
        }
        export interface CreateMicrosoftADRequest {
            Name: DirectoryName;
            ShortName?: DirectoryShortName;
            Password: Password;
            Description?: Description;
            VpcSettings: DirectoryVpcSettings;
        }
        export interface CreateMicrosoftADResult {
            DirectoryId?: DirectoryId;
        }
        export interface CreateSnapshotRequest {
            DirectoryId: DirectoryId;
            Name?: SnapshotName;
        }
        export interface CreateSnapshotResult {
            SnapshotId?: SnapshotId;
        }
        export interface CreateTrustRequest {
            DirectoryId: DirectoryId;
            RemoteDomainName: RemoteDomainName;
            TrustPassword: TrustPassword;
            TrustDirection: TrustDirection;
            TrustType?: TrustType;
        }
        export interface CreateTrustResult {
            TrustId?: TrustId;
        }
        export interface DeleteDirectoryRequest {
            DirectoryId: DirectoryId;
        }
        export interface DeleteDirectoryResult {
            DirectoryId?: DirectoryId;
        }
        export interface DeleteSnapshotRequest {
            SnapshotId: SnapshotId;
        }
        export interface DeleteSnapshotResult {
            SnapshotId?: SnapshotId;
        }
        export interface DeleteTrustRequest {
            TrustId: TrustId;
        }
        export interface DeleteTrustResult {
            TrustId?: TrustId;
        }
        export interface DescribeDirectoriesRequest {
            DirectoryIds?: DirectoryIds;
            NextToken?: NextToken;
            Limit?: Limit;
        }
        export interface DescribeDirectoriesResult {
            DirectoryDescriptions?: DirectoryDescriptions;
            NextToken?: NextToken;
        }
        export interface DescribeSnapshotsRequest {
            DirectoryId?: DirectoryId;
            SnapshotIds?: SnapshotIds;
            NextToken?: NextToken;
            Limit?: Limit;
        }
        export interface DescribeSnapshotsResult {
            Snapshots?: Snapshots;
            NextToken?: NextToken;
        }
        export interface DescribeTrustsRequest {
            DirectoryId?: DirectoryId;
            TrustIds?: TrustIds;
            NextToken?: NextToken;
            Limit?: Limit;
        }
        export interface DescribeTrustsResult {
            Trusts?: Trusts;
            NextToken?: NextToken;
        }
        export interface DirectoryConnectSettings {
            VpcId: VpcId;
            SubnetIds: SubnetIds;
            CustomerDnsIps: DnsIpAddrs;
            CustomerUserName: UserName;
        }
        export interface DirectoryConnectSettingsDescription {
            VpcId?: VpcId;
            SubnetIds?: SubnetIds;
            CustomerUserName?: UserName;
            SecurityGroupId?: SecurityGroupId;
            AvailabilityZones?: AvailabilityZones;
            ConnectIps?: IpAddrs;
        }
        export interface DirectoryDescription {
            DirectoryId?: DirectoryId;
            Name?: DirectoryName;
            ShortName?: DirectoryShortName;
            Size?: DirectorySize;
            Alias?: AliasName;
            AccessUrl?: AccessUrl;
            Description?: Description;
            DnsIpAddrs?: DnsIpAddrs;
            Stage?: DirectoryStage;
            LaunchTime?: LaunchTime;
            StageLastUpdatedDateTime?: LastUpdatedDateTime;
            Type?: DirectoryType;
            VpcSettings?: DirectoryVpcSettingsDescription;
            ConnectSettings?: DirectoryConnectSettingsDescription;
            RadiusSettings?: RadiusSettings;
            RadiusStatus?: RadiusStatus;
            StageReason?: StageReason;
            SsoEnabled?: SsoEnabled;
        }
        export interface DirectoryLimitExceededException {
            Message?: ExceptionMessage;
            RequestId?: RequestId;
        }
        export interface DirectoryLimits {
            CloudOnlyDirectoriesLimit?: Limit;
            CloudOnlyDirectoriesCurrentCount?: Limit;
            CloudOnlyDirectoriesLimitReached?: CloudOnlyDirectoriesLimitReached;
            CloudOnlyMicrosoftADLimit?: Limit;
            CloudOnlyMicrosoftADCurrentCount?: Limit;
            CloudOnlyMicrosoftADLimitReached?: CloudOnlyDirectoriesLimitReached;
            ConnectedDirectoriesLimit?: Limit;
            ConnectedDirectoriesCurrentCount?: Limit;
            ConnectedDirectoriesLimitReached?: ConnectedDirectoriesLimitReached;
        }
        export interface DirectoryUnavailableException {
            Message?: ExceptionMessage;
            RequestId?: RequestId;
        }
        export interface DirectoryVpcSettings {
            VpcId: VpcId;
            SubnetIds: SubnetIds;
        }
        export interface DirectoryVpcSettingsDescription {
            VpcId?: VpcId;
            SubnetIds?: SubnetIds;
            SecurityGroupId?: SecurityGroupId;
            AvailabilityZones?: AvailabilityZones;
        }
        export interface DisableRadiusRequest {
            DirectoryId: DirectoryId;
        }
        export interface DisableRadiusResult {
        }
        export interface DisableSsoRequest {
            DirectoryId: DirectoryId;
            UserName?: UserName;
            Password?: ConnectPassword;
        }
        export interface DisableSsoResult {
        }
        export interface EnableRadiusRequest {
            DirectoryId: DirectoryId;
            RadiusSettings: RadiusSettings;
        }
        export interface EnableRadiusResult {
        }
        export interface EnableSsoRequest {
            DirectoryId: DirectoryId;
            UserName?: UserName;
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
        export interface GetDirectoryLimitsRequest {
        }
        export interface GetDirectoryLimitsResult {
            DirectoryLimits?: DirectoryLimits;
        }
        export interface GetSnapshotLimitsRequest {
            DirectoryId: DirectoryId;
        }
        export interface GetSnapshotLimitsResult {
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
        export interface RadiusSettings {
            RadiusServers?: Servers;
            RadiusPort?: PortNumber;
            RadiusTimeout?: RadiusTimeout;
            RadiusRetries?: RadiusRetries;
            SharedSecret?: RadiusSharedSecret;
            AuthenticationProtocol?: RadiusAuthenticationProtocol;
            DisplayLabel?: RadiusDisplayLabel;
            UseSameUsername?: UseSameUsername;
        }
        export interface RestoreFromSnapshotRequest {
            SnapshotId: SnapshotId;
        }
        export interface RestoreFromSnapshotResult {
        }
        export interface ServiceException {
            Message?: ExceptionMessage;
            RequestId?: RequestId;
        }
        export interface Snapshot {
            DirectoryId?: DirectoryId;
            SnapshotId?: SnapshotId;
            Type?: SnapshotType;
            Name?: SnapshotName;
            Status?: SnapshotStatus;
            StartTime?: StartTime;
        }
        export interface SnapshotLimitExceededException {
            Message?: ExceptionMessage;
            RequestId?: RequestId;
        }
        export interface SnapshotLimits {
            ManualSnapshotsLimit?: Limit;
            ManualSnapshotsCurrentCount?: Limit;
            ManualSnapshotsLimitReached?: ManualSnapshotsLimitReached;
        }
        export interface Trust {
            DirectoryId?: DirectoryId;
            TrustId?: TrustId;
            RemoteDomainName?: RemoteDomainName;
            TrustType?: TrustType;
            TrustDirection?: TrustDirection;
            TrustState?: TrustState;
            CreatedDateTime?: CreatedDateTime;
            LastUpdatedDateTime?: LastUpdatedDateTime;
            StateLastUpdatedDateTime?: StateLastUpdatedDateTime;
        }
        export interface UnsupportedOperationException {
            Message?: ExceptionMessage;
            RequestId?: RequestId;
        }
        export interface UpdateRadiusRequest {
            DirectoryId: DirectoryId;
            RadiusSettings: RadiusSettings;
        }
        export interface UpdateRadiusResult {
        }
        export interface VerifyTrustRequest {
            TrustId: TrustId;
        }
        export interface VerifyTrustResult {
            TrustId?: TrustId;
        }

    }
}
