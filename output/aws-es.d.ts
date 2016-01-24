// Type definitions for aws-sdk - Amazon Elasticsearch Service
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2015-01-01
     * endpointPrefix: es
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: rest-json
     */
    export class ES extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      addTags(params: ES.AddTagsRequest, callback?: (err: ES.BaseException|ES.LimitExceededException|ES.ValidationException|ES.InternalException|any, data: any) => void): Request;
      createElasticsearchDomain(params: ES.CreateElasticsearchDomainRequest, callback?: (err: ES.BaseException|ES.DisabledOperationException|ES.InternalException|ES.InvalidTypeException|ES.LimitExceededException|ES.ResourceAlreadyExistsException|ES.ValidationException|any, data: ES.CreateElasticsearchDomainResponse|any) => void): Request;
      deleteElasticsearchDomain(params: ES.DeleteElasticsearchDomainRequest, callback?: (err: ES.BaseException|ES.InternalException|ES.ResourceNotFoundException|ES.ValidationException|any, data: ES.DeleteElasticsearchDomainResponse|any) => void): Request;
      describeElasticsearchDomain(params: ES.DescribeElasticsearchDomainRequest, callback?: (err: ES.BaseException|ES.InternalException|ES.ResourceNotFoundException|ES.ValidationException|any, data: ES.DescribeElasticsearchDomainResponse|any) => void): Request;
      describeElasticsearchDomainConfig(params: ES.DescribeElasticsearchDomainConfigRequest, callback?: (err: ES.BaseException|ES.InternalException|ES.ResourceNotFoundException|ES.ValidationException|any, data: ES.DescribeElasticsearchDomainConfigResponse|any) => void): Request;
      describeElasticsearchDomains(params: ES.DescribeElasticsearchDomainsRequest, callback?: (err: ES.BaseException|ES.InternalException|ES.ValidationException|any, data: ES.DescribeElasticsearchDomainsResponse|any) => void): Request;
      listDomainNames(callback?: (err: ES.BaseException|ES.ValidationException|any, data: ES.ListDomainNamesResponse|any) => void): Request;
      listTags(params: ES.ListTagsRequest, callback?: (err: ES.BaseException|ES.ResourceNotFoundException|ES.ValidationException|ES.InternalException|any, data: ES.ListTagsResponse|any) => void): Request;
      removeTags(params: ES.RemoveTagsRequest, callback?: (err: ES.BaseException|ES.ValidationException|ES.InternalException|any, data: any) => void): Request;
      updateElasticsearchDomainConfig(params: ES.UpdateElasticsearchDomainConfigRequest, callback?: (err: ES.BaseException|ES.InternalException|ES.InvalidTypeException|ES.LimitExceededException|ES.ResourceNotFoundException|ES.ValidationException|any, data: ES.UpdateElasticsearchDomainConfigResponse|any) => void): Request;

    }

    export module ES {
        export type ARN = string;
        export type AdvancedOptions = {[key:string]: String};
        export type Boolean = boolean;
        export type DomainId = string;    // max: 64, min: 1
        export type DomainInfoList = DomainInfo[];
        export type DomainName = string;    // pattern: &quot;[a-z][a-z0-9\-]+&quot;, max: 28, min: 3
        export type DomainNameList = DomainName[];
        export type ESPartitionInstanceType = string;
        export type ElasticsearchDomainStatusList = ElasticsearchDomainStatus[];
        export type ErrorMessage = string;
        export type IntegerClass = number;
        export type OptionState = string;
        export type PolicyDocument = string;
        export type ServiceUrl = string;
        export type String = string;
        export type StringList = String[];
        export type TagKey = string;    // max: 128, min: 1
        export type TagList = Tag[];
        export type TagValue = string;    // max: 256
        export type UIntValue = number;
        export type UpdateTimestamp = number;
        export type VolumeType = string;

        export interface AccessPoliciesStatus {
            Options: PolicyDocument;
            Status: OptionStatus;
        }
        export interface AddTagsRequest {
            ARN: ARN;
            TagList: TagList;
        }
        export interface AdvancedOptionsStatus {
            Options: AdvancedOptions;
            Status: OptionStatus;
        }
        export interface BaseException {
            message?: ErrorMessage;
        }
        export interface CreateElasticsearchDomainRequest {
            DomainName: DomainName;
            ElasticsearchClusterConfig?: ElasticsearchClusterConfig;
            EBSOptions?: EBSOptions;
            AccessPolicies?: PolicyDocument;
            SnapshotOptions?: SnapshotOptions;
            AdvancedOptions?: AdvancedOptions;
        }
        export interface CreateElasticsearchDomainResponse {
            DomainStatus?: ElasticsearchDomainStatus;
        }
        export interface DeleteElasticsearchDomainRequest {
            DomainName: DomainName;
        }
        export interface DeleteElasticsearchDomainResponse {
            DomainStatus?: ElasticsearchDomainStatus;
        }
        export interface DescribeElasticsearchDomainConfigRequest {
            DomainName: DomainName;
        }
        export interface DescribeElasticsearchDomainConfigResponse {
            DomainConfig: ElasticsearchDomainConfig;
        }
        export interface DescribeElasticsearchDomainRequest {
            DomainName: DomainName;
        }
        export interface DescribeElasticsearchDomainResponse {
            DomainStatus: ElasticsearchDomainStatus;
        }
        export interface DescribeElasticsearchDomainsRequest {
            DomainNames: DomainNameList;
        }
        export interface DescribeElasticsearchDomainsResponse {
            DomainStatusList: ElasticsearchDomainStatusList;
        }
        export interface DisabledOperationException {
        }
        export interface DomainInfo {
            DomainName?: DomainName;
        }
        export interface EBSOptions {
            EBSEnabled?: Boolean;
            VolumeType?: VolumeType;
            VolumeSize?: IntegerClass;
            Iops?: IntegerClass;
        }
        export interface EBSOptionsStatus {
            Options: EBSOptions;
            Status: OptionStatus;
        }
        export interface ElasticsearchClusterConfig {
            InstanceType?: ESPartitionInstanceType;
            InstanceCount?: IntegerClass;
            DedicatedMasterEnabled?: Boolean;
            ZoneAwarenessEnabled?: Boolean;
            DedicatedMasterType?: ESPartitionInstanceType;
            DedicatedMasterCount?: IntegerClass;
        }
        export interface ElasticsearchClusterConfigStatus {
            Options: ElasticsearchClusterConfig;
            Status: OptionStatus;
        }
        export interface ElasticsearchDomainConfig {
            ElasticsearchClusterConfig?: ElasticsearchClusterConfigStatus;
            EBSOptions?: EBSOptionsStatus;
            AccessPolicies?: AccessPoliciesStatus;
            SnapshotOptions?: SnapshotOptionsStatus;
            AdvancedOptions?: AdvancedOptionsStatus;
        }
        export interface ElasticsearchDomainStatus {
            DomainId: DomainId;
            DomainName: DomainName;
            ARN: ARN;
            Created?: Boolean;
            Deleted?: Boolean;
            Endpoint?: ServiceUrl;
            Processing?: Boolean;
            ElasticsearchClusterConfig: ElasticsearchClusterConfig;
            EBSOptions?: EBSOptions;
            AccessPolicies?: PolicyDocument;
            SnapshotOptions?: SnapshotOptions;
            AdvancedOptions?: AdvancedOptions;
        }
        export interface InternalException {
        }
        export interface InvalidTypeException {
        }
        export interface LimitExceededException {
        }
        export interface ListDomainNamesResponse {
            DomainNames?: DomainInfoList;
        }
        export interface ListTagsRequest {
            ARN: ARN;
        }
        export interface ListTagsResponse {
            TagList?: TagList;
        }
        export interface OptionStatus {
            CreationDate: UpdateTimestamp;
            UpdateDate: UpdateTimestamp;
            UpdateVersion?: UIntValue;
            State: OptionState;
            PendingDeletion?: Boolean;
        }
        export interface RemoveTagsRequest {
            ARN: ARN;
            TagKeys: StringList;
        }
        export interface ResourceAlreadyExistsException {
        }
        export interface ResourceNotFoundException {
        }
        export interface SnapshotOptions {
            AutomatedSnapshotStartHour?: IntegerClass;
        }
        export interface SnapshotOptionsStatus {
            Options: SnapshotOptions;
            Status: OptionStatus;
        }
        export interface Tag {
            Key: TagKey;
            Value: TagValue;
        }
        export interface UpdateElasticsearchDomainConfigRequest {
            DomainName: DomainName;
            ElasticsearchClusterConfig?: ElasticsearchClusterConfig;
            EBSOptions?: EBSOptions;
            SnapshotOptions?: SnapshotOptions;
            AdvancedOptions?: AdvancedOptions;
            AccessPolicies?: PolicyDocument;
        }
        export interface UpdateElasticsearchDomainConfigResponse {
            DomainConfig: ElasticsearchDomainConfig;
        }
        export interface ValidationException {
        }

    }
}
