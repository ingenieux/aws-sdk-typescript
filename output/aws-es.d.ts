// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {

    export class ES extends Service {
      constructor(options?: any);
      addTags(params: ESAddTagsRequest, callback?: (err: ESBaseException|ESLimitExceededException|ESValidationException|ESInternalException|any, data: any) => void): Request;
      createElasticsearchDomain(params: ESCreateElasticsearchDomainRequest, callback?: (err: ESBaseException|ESDisabledOperationException|ESInternalException|ESInvalidTypeException|ESLimitExceededException|ESResourceAlreadyExistsException|ESValidationException|any, data: ESCreateElasticsearchDomainResponse|any) => void): Request;
      deleteElasticsearchDomain(params: ESDeleteElasticsearchDomainRequest, callback?: (err: ESBaseException|ESInternalException|ESResourceNotFoundException|ESValidationException|any, data: ESDeleteElasticsearchDomainResponse|any) => void): Request;
      describeElasticsearchDomain(params: ESDescribeElasticsearchDomainRequest, callback?: (err: ESBaseException|ESInternalException|ESResourceNotFoundException|ESValidationException|any, data: ESDescribeElasticsearchDomainResponse|any) => void): Request;
      describeElasticsearchDomainConfig(params: ESDescribeElasticsearchDomainConfigRequest, callback?: (err: ESBaseException|ESInternalException|ESResourceNotFoundException|ESValidationException|any, data: ESDescribeElasticsearchDomainConfigResponse|any) => void): Request;
      describeElasticsearchDomains(params: ESDescribeElasticsearchDomainsRequest, callback?: (err: ESBaseException|ESInternalException|ESValidationException|any, data: ESDescribeElasticsearchDomainsResponse|any) => void): Request;
      listDomainNames(callback?: (err: ESBaseException|ESValidationException|any, data: ESListDomainNamesResponse|any) => void): Request;
      listTags(params: ESListTagsRequest, callback?: (err: ESBaseException|ESResourceNotFoundException|ESValidationException|ESInternalException|any, data: ESListTagsResponse|any) => void): Request;
      removeTags(params: ESRemoveTagsRequest, callback?: (err: ESBaseException|ESValidationException|ESInternalException|any, data: any) => void): Request;
      updateElasticsearchDomainConfig(params: ESUpdateElasticsearchDomainConfigRequest, callback?: (err: ESBaseException|ESInternalException|ESInvalidTypeException|ESLimitExceededException|ESResourceNotFoundException|ESValidationException|any, data: ESUpdateElasticsearchDomainConfigResponse|any) => void): Request;
    }

    export type ESARN = string;
    export interface ESAccessPoliciesStatus {
        Options: ESPolicyDocument;
        Status: ESOptionStatus;
    }

    export interface ESAddTagsRequest {
        ARN: ESARN;
        TagList: ESTagList;
    }

    export type ESAdvancedOptions = any; // not really - it was 'map' instead - must fix this one
    export interface ESAdvancedOptionsStatus {
        Options: ESAdvancedOptions;
        Status: ESOptionStatus;
    }

    export interface ESBaseException {
        message?: ESErrorMessage;
    }

    export type ESBoolean = boolean;
    export interface ESCreateElasticsearchDomainRequest {
        DomainName: ESDomainName;
        ElasticsearchClusterConfig?: ESElasticsearchClusterConfig;
        EBSOptions?: ESEBSOptions;
        AccessPolicies?: ESPolicyDocument;
        SnapshotOptions?: ESSnapshotOptions;
        AdvancedOptions?: ESAdvancedOptions;
    }

    export interface ESCreateElasticsearchDomainResponse {
        DomainStatus?: ESElasticsearchDomainStatus;
    }

    export interface ESDeleteElasticsearchDomainRequest {
        DomainName: ESDomainName;
    }

    export interface ESDeleteElasticsearchDomainResponse {
        DomainStatus?: ESElasticsearchDomainStatus;
    }

    export interface ESDescribeElasticsearchDomainConfigRequest {
        DomainName: ESDomainName;
    }

    export interface ESDescribeElasticsearchDomainConfigResponse {
        DomainConfig: ESElasticsearchDomainConfig;
    }

    export interface ESDescribeElasticsearchDomainRequest {
        DomainName: ESDomainName;
    }

    export interface ESDescribeElasticsearchDomainResponse {
        DomainStatus: ESElasticsearchDomainStatus;
    }

    export interface ESDescribeElasticsearchDomainsRequest {
        DomainNames: ESDomainNameList;
    }

    export interface ESDescribeElasticsearchDomainsResponse {
        DomainStatusList: ESElasticsearchDomainStatusList;
    }

    export interface ESDisabledOperationException {
    }

    export type ESDomainId = string;
    export interface ESDomainInfo {
        DomainName?: ESDomainName;
    }

    export type ESDomainInfoList = Array<ESDomainInfo>;
    export type ESDomainName = string; // pattern: "[a-z][a-z0-9\-]+"
    export type ESDomainNameList = Array<ESDomainName>;
    export interface ESEBSOptions {
        EBSEnabled?: ESBoolean;
        VolumeType?: ESVolumeType;
        VolumeSize?: ESIntegerClass;
        Iops?: ESIntegerClass;
    }

    export interface ESEBSOptionsStatus {
        Options: ESEBSOptions;
        Status: ESOptionStatus;
    }

    export type ESESPartitionInstanceType = string;
    export interface ESElasticsearchClusterConfig {
        InstanceType?: ESESPartitionInstanceType;
        InstanceCount?: ESIntegerClass;
        DedicatedMasterEnabled?: ESBoolean;
        ZoneAwarenessEnabled?: ESBoolean;
        DedicatedMasterType?: ESESPartitionInstanceType;
        DedicatedMasterCount?: ESIntegerClass;
    }

    export interface ESElasticsearchClusterConfigStatus {
        Options: ESElasticsearchClusterConfig;
        Status: ESOptionStatus;
    }

    export interface ESElasticsearchDomainConfig {
        ElasticsearchClusterConfig?: ESElasticsearchClusterConfigStatus;
        EBSOptions?: ESEBSOptionsStatus;
        AccessPolicies?: ESAccessPoliciesStatus;
        SnapshotOptions?: ESSnapshotOptionsStatus;
        AdvancedOptions?: ESAdvancedOptionsStatus;
    }

    export interface ESElasticsearchDomainStatus {
        DomainId: ESDomainId;
        DomainName: ESDomainName;
        ARN: ESARN;
        Created?: ESBoolean;
        Deleted?: ESBoolean;
        Endpoint?: ESServiceUrl;
        Processing?: ESBoolean;
        ElasticsearchClusterConfig: ESElasticsearchClusterConfig;
        EBSOptions?: ESEBSOptions;
        AccessPolicies?: ESPolicyDocument;
        SnapshotOptions?: ESSnapshotOptions;
        AdvancedOptions?: ESAdvancedOptions;
    }

    export type ESElasticsearchDomainStatusList = Array<ESElasticsearchDomainStatus>;
    export type ESErrorMessage = string;
    export type ESIntegerClass = number;
    export interface ESInternalException {
    }

    export interface ESInvalidTypeException {
    }

    export interface ESLimitExceededException {
    }

    export interface ESListDomainNamesResponse {
        DomainNames?: ESDomainInfoList;
    }

    export interface ESListTagsRequest {
        ARN: ESARN;
    }

    export interface ESListTagsResponse {
        TagList?: ESTagList;
    }

    export type ESOptionState = string;
    export interface ESOptionStatus {
        CreationDate: ESUpdateTimestamp;
        UpdateDate: ESUpdateTimestamp;
        UpdateVersion?: ESUIntValue;
        State: ESOptionState;
        PendingDeletion?: ESBoolean;
    }

    export type ESPolicyDocument = string;
    export interface ESRemoveTagsRequest {
        ARN: ESARN;
        TagKeys: ESStringList;
    }

    export interface ESResourceAlreadyExistsException {
    }

    export interface ESResourceNotFoundException {
    }

    export type ESServiceUrl = string;
    export interface ESSnapshotOptions {
        AutomatedSnapshotStartHour?: ESIntegerClass;
    }

    export interface ESSnapshotOptionsStatus {
        Options: ESSnapshotOptions;
        Status: ESOptionStatus;
    }

    export type ESString = string;
    export type ESStringList = Array<ESString>;
    export interface ESTag {
        Key: ESTagKey;
        Value: ESTagValue;
    }

    export type ESTagKey = string;
    export type ESTagList = Array<ESTag>;
    export type ESTagValue = string;
    export type ESUIntValue = number;
    export interface ESUpdateElasticsearchDomainConfigRequest {
        DomainName: ESDomainName;
        ElasticsearchClusterConfig?: ESElasticsearchClusterConfig;
        EBSOptions?: ESEBSOptions;
        SnapshotOptions?: ESSnapshotOptions;
        AdvancedOptions?: ESAdvancedOptions;
        AccessPolicies?: ESPolicyDocument;
    }

    export interface ESUpdateElasticsearchDomainConfigResponse {
        DomainConfig: ESElasticsearchDomainConfig;
    }

    export type ESUpdateTimestamp = number;
    export interface ESValidationException {
    }

    export type ESVolumeType = string;
}
