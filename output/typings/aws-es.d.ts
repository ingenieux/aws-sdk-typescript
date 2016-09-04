// Type definitions for aws-sdk - Amazon Elasticsearch Service
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2015-01-01
    * endpointPrefix: es
    * serviceAbbreviation: 
    * signatureVersion: v4
    * protocol: rest-json
    *
    * Amazon Elasticsearch Configuration Service Use the Amazon Elasticsearch
 configuration API to create, configure, and manage Elasticsearch domains.
 
 The endpoint for configuration service requests is region-specific: es.region
 .amazonaws.com. For example, es.us-east-1.amazonaws.com. For a current list of
 supported regions and endpoints, see Regions and Endpoints
 [http://docs.aws.amazon.com/general/latest/gr/rande.html#elasticsearch-service-regions]
 .
    *
    */
  export class ES extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Attaches tags to an existing Elasticsearch domain. Tags are a set of
case-sensitive key value pairs. An Elasticsearch domain may have up to 10 tags.
See Tagging Amazon Elasticsearch Service Domains for more information.
[http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-awsresorcetagging]
     *
     * @error BaseException   
     * @error LimitExceededException   
     * @error ValidationException   
     * @error InternalException   
     */
    addTags(params: ES.AddTagsRequest, callback?: (err: ES.BaseException | ES.LimitExceededException | ES.ValidationException | ES.InternalException | any, data: any) => void): Request<any, ES.BaseException | ES.LimitExceededException | ES.ValidationException | ES.InternalException | any>;
    /**
     * Creates a new Elasticsearch domain. For more information, see Creating
Elasticsearch Domains
[http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains] 
in the Amazon Elasticsearch Service Developer Guide.
     *
     * @error BaseException   
     * @error DisabledOperationException   
     * @error InternalException   
     * @error InvalidTypeException   
     * @error LimitExceededException   
     * @error ResourceAlreadyExistsException   
     * @error ValidationException   
     */
    createElasticsearchDomain(params: ES.CreateElasticsearchDomainRequest, callback?: (err: ES.BaseException | ES.DisabledOperationException | ES.InternalException | ES.InvalidTypeException | ES.LimitExceededException | ES.ResourceAlreadyExistsException | ES.ValidationException | any, data: ES.CreateElasticsearchDomainResponse | any) => void): Request<ES.CreateElasticsearchDomainResponse | any, ES.BaseException | ES.DisabledOperationException | ES.InternalException | ES.InvalidTypeException | ES.LimitExceededException | ES.ResourceAlreadyExistsException | ES.ValidationException | any>;
    /**
     * Permanently deletes the specified Elasticsearch domain and all of its data. Once
a domain is deleted, it cannot be recovered.
     *
     * @error BaseException   
     * @error InternalException   
     * @error ResourceNotFoundException   
     * @error ValidationException   
     */
    deleteElasticsearchDomain(params: ES.DeleteElasticsearchDomainRequest, callback?: (err: ES.BaseException | ES.InternalException | ES.ResourceNotFoundException | ES.ValidationException | any, data: ES.DeleteElasticsearchDomainResponse | any) => void): Request<ES.DeleteElasticsearchDomainResponse | any, ES.BaseException | ES.InternalException | ES.ResourceNotFoundException | ES.ValidationException | any>;
    /**
     * Returns domain configuration information about the specified Elasticsearch
domain, including the domain ID, domain endpoint, and domain ARN.
     *
     * @error BaseException   
     * @error InternalException   
     * @error ResourceNotFoundException   
     * @error ValidationException   
     */
    describeElasticsearchDomain(params: ES.DescribeElasticsearchDomainRequest, callback?: (err: ES.BaseException | ES.InternalException | ES.ResourceNotFoundException | ES.ValidationException | any, data: ES.DescribeElasticsearchDomainResponse | any) => void): Request<ES.DescribeElasticsearchDomainResponse | any, ES.BaseException | ES.InternalException | ES.ResourceNotFoundException | ES.ValidationException | any>;
    /**
     * Provides cluster configuration information about the specified Elasticsearch
domain, such as the state, creation date, update version, and update date for
cluster options.
     *
     * @error BaseException   
     * @error InternalException   
     * @error ResourceNotFoundException   
     * @error ValidationException   
     */
    describeElasticsearchDomainConfig(params: ES.DescribeElasticsearchDomainConfigRequest, callback?: (err: ES.BaseException | ES.InternalException | ES.ResourceNotFoundException | ES.ValidationException | any, data: ES.DescribeElasticsearchDomainConfigResponse | any) => void): Request<ES.DescribeElasticsearchDomainConfigResponse | any, ES.BaseException | ES.InternalException | ES.ResourceNotFoundException | ES.ValidationException | any>;
    /**
     * Returns domain configuration information about the specified Elasticsearch
domains, including the domain ID, domain endpoint, and domain ARN.
     *
     * @error BaseException   
     * @error InternalException   
     * @error ValidationException   
     */
    describeElasticsearchDomains(params: ES.DescribeElasticsearchDomainsRequest, callback?: (err: ES.BaseException | ES.InternalException | ES.ValidationException | any, data: ES.DescribeElasticsearchDomainsResponse | any) => void): Request<ES.DescribeElasticsearchDomainsResponse | any, ES.BaseException | ES.InternalException | ES.ValidationException | any>;
    /**
     * Returns the name of all Elasticsearch domains owned by the current user&#x27;s
account.
     *
     * @error BaseException   
     * @error ValidationException   
     */
    listDomainNames(callback?: (err: ES.BaseException | ES.ValidationException | any, data: ES.ListDomainNamesResponse | any) => void): Request<ES.ListDomainNamesResponse | any, ES.BaseException | ES.ValidationException | any>;
    /**
     * Returns all tags for the given Elasticsearch domain.
     *
     * @error BaseException   
     * @error ResourceNotFoundException   
     * @error ValidationException   
     * @error InternalException   
     */
    listTags(params: ES.ListTagsRequest, callback?: (err: ES.BaseException | ES.ResourceNotFoundException | ES.ValidationException | ES.InternalException | any, data: ES.ListTagsResponse | any) => void): Request<ES.ListTagsResponse | any, ES.BaseException | ES.ResourceNotFoundException | ES.ValidationException | ES.InternalException | any>;
    /**
     * Removes the specified set of tags from the specified Elasticsearch domain.
     *
     * @error BaseException   
     * @error ValidationException   
     * @error InternalException   
     */
    removeTags(params: ES.RemoveTagsRequest, callback?: (err: ES.BaseException | ES.ValidationException | ES.InternalException | any, data: any) => void): Request<any, ES.BaseException | ES.ValidationException | ES.InternalException | any>;
    /**
     * Modifies the cluster configuration of the specified Elasticsearch domain,
setting as setting the instance type and the number of instances.
     *
     * @error BaseException   
     * @error InternalException   
     * @error InvalidTypeException   
     * @error LimitExceededException   
     * @error ResourceNotFoundException   
     * @error ValidationException   
     */
    updateElasticsearchDomainConfig(params: ES.UpdateElasticsearchDomainConfigRequest, callback?: (err: ES.BaseException | ES.InternalException | ES.InvalidTypeException | ES.LimitExceededException | ES.ResourceNotFoundException | ES.ValidationException | any, data: ES.UpdateElasticsearchDomainConfigResponse | any) => void): Request<ES.UpdateElasticsearchDomainConfigResponse | any, ES.BaseException | ES.InternalException | ES.InvalidTypeException | ES.LimitExceededException | ES.ResourceNotFoundException | ES.ValidationException | any>;

  }

  export module ES {

    export type ARN = string;

    export type AdvancedOptions = { [key: string]: String };

    export type Boolean = boolean;

    export type DomainId = string;

    export type DomainInfoList = DomainInfo[];

    export type DomainName = string;

    export type DomainNameList = DomainName[];

    export type ESPartitionInstanceType = string;

    export type ElasticsearchDomainStatusList = ElasticsearchDomainStatus[];

    export type ElasticsearchVersionString = string;

    export type ErrorMessage = string;

    export type IntegerClass = number;

    export type OptionState = string;

    export type PolicyDocument = string;

    export type ServiceUrl = string;

    export type String = string;

    export type StringList = String[];

    export type TagKey = string;

    export type TagList = Tag[];

    export type TagValue = string;

    export type UIntValue = number;

    export type UpdateTimestamp = number;

    export type VolumeType = string;

    export interface AccessPoliciesStatus {
      /** The access policy configured for the Elasticsearch domain. Access policies may
be resource-based, IP-based, or IAM-based. See Configuring Access Policies
[http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies]
for more information. **/
      Options: PolicyDocument;
      /** The status of the access policy for the Elasticsearch domain. See OptionStatus 
for the status information that&#x27;s included. **/
      Status: OptionStatus;
    }
    export interface AddTagsRequest {
      /** Specify the ARN for which you want to add the tags. **/
      ARN: ARN;
      /** List of Tag that need to be added for the Elasticsearch domain. **/
      TagList: TagList;
    }
    export interface AdvancedOptionsStatus {
      /** Specifies the status of advanced options for the specified Elasticsearch
domain. **/
      Options: AdvancedOptions;
      /** Specifies the status of OptionStatus for advanced options for the specified
Elasticsearch domain. **/
      Status: OptionStatus;
    }
    export interface BaseException {
      /** A description of the error. **/
      message?: ErrorMessage;
    }
    export interface CreateElasticsearchDomainRequest {
      /** The name of the Elasticsearch domain that you are creating. Domain names are
unique across the domains owned by an account within an AWS region. Domain names
must start with a letter or number and can contain the following characters: a-z
(lowercase), 0-9, and - (hyphen). **/
      DomainName: DomainName;
      /** String of format X.Y to specify version for the Elasticsearch domain eg. &quot;1.5&quot;
or &quot;2.3&quot;. For more information, see Creating Elasticsearch Domains
[http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains] 
in the Amazon Elasticsearch Service Developer Guide. **/
      ElasticsearchVersion?: ElasticsearchVersionString;
      /** Configuration options for an Elasticsearch domain. Specifies the instance type
and number of instances in the domain cluster. **/
      ElasticsearchClusterConfig?: ElasticsearchClusterConfig;
      /** Options to enable, disable and specify the type and size of EBS storage volumes. **/
      EBSOptions?: EBSOptions;
      /** IAM access policy as a JSON-formatted string. **/
      AccessPolicies?: PolicyDocument;
      /** Option to set time, in UTC format, of the daily automated snapshot. Default
value is 0 hours. **/
      SnapshotOptions?: SnapshotOptions;
      /** Option to allow references to indices in an HTTP request body. Must be false 
when configuring access to individual sub-resources. By default, the value is 
true. See Configuration Advanced Options
[http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options] 
for more information. **/
      AdvancedOptions?: AdvancedOptions;
    }
    export interface CreateElasticsearchDomainResponse {
      /** The status of the newly created Elasticsearch domain. **/
      DomainStatus?: ElasticsearchDomainStatus;
    }
    export interface DeleteElasticsearchDomainRequest {
      /** The name of the Elasticsearch domain that you want to permanently delete. **/
      DomainName: DomainName;
    }
    export interface DeleteElasticsearchDomainResponse {
      /** The status of the Elasticsearch domain being deleted. **/
      DomainStatus?: ElasticsearchDomainStatus;
    }
    export interface DescribeElasticsearchDomainConfigRequest {
      /** The Elasticsearch domain that you want to get information about. **/
      DomainName: DomainName;
    }
    export interface DescribeElasticsearchDomainConfigResponse {
      /** The configuration information of the domain requested in the 
DescribeElasticsearchDomainConfig request. **/
      DomainConfig: ElasticsearchDomainConfig;
    }
    export interface DescribeElasticsearchDomainRequest {
      /** The name of the Elasticsearch domain for which you want information. **/
      DomainName: DomainName;
    }
    export interface DescribeElasticsearchDomainResponse {
      /** The current status of the Elasticsearch domain. **/
      DomainStatus: ElasticsearchDomainStatus;
    }
    export interface DescribeElasticsearchDomainsRequest {
      /** The Elasticsearch domains for which you want information. **/
      DomainNames: DomainNameList;
    }
    export interface DescribeElasticsearchDomainsResponse {
      /** The status of the domains requested in the DescribeElasticsearchDomains request. **/
      DomainStatusList: ElasticsearchDomainStatusList;
    }
    export interface DisabledOperationException {
    }
    export interface DomainInfo {
      /** Specifies the DomainName. **/
      DomainName?: DomainName;
    }
    export interface EBSOptions {
      /** Specifies whether EBS-based storage is enabled. **/
      EBSEnabled?: Boolean;
      /** Specifies the volume type for EBS-based storage. **/
      VolumeType?: VolumeType;
      /** Integer to specify the size of an EBS volume. **/
      VolumeSize?: IntegerClass;
      /** Specifies the IOPD for a Provisioned IOPS EBS volume (SSD). **/
      Iops?: IntegerClass;
    }
    export interface EBSOptionsStatus {
      /** Specifies the EBS options for the specified Elasticsearch domain. **/
      Options: EBSOptions;
      /** Specifies the status of the EBS options for the specified Elasticsearch domain. **/
      Status: OptionStatus;
    }
    export interface ElasticsearchClusterConfig {
      /** The instance type for an Elasticsearch cluster. **/
      InstanceType?: ESPartitionInstanceType;
      /** The number of instances in the specified domain cluster. **/
      InstanceCount?: IntegerClass;
      /** A boolean value to indicate whether a dedicated master node is enabled. See 
About Dedicated Master Nodes
[http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-dedicatedmasternodes] 
for more information. **/
      DedicatedMasterEnabled?: Boolean;
      /** A boolean value to indicate whether zone awareness is enabled. See About Zone
Awareness
[http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-zoneawareness] 
for more information. **/
      ZoneAwarenessEnabled?: Boolean;
      /** The instance type for a dedicated master node. **/
      DedicatedMasterType?: ESPartitionInstanceType;
      /** Total number of dedicated master nodes, active and on standby, for the cluster. **/
      DedicatedMasterCount?: IntegerClass;
    }
    export interface ElasticsearchClusterConfigStatus {
      /** Specifies the cluster configuration for the specified Elasticsearch domain. **/
      Options: ElasticsearchClusterConfig;
      /** Specifies the status of the configuration for the specified Elasticsearch
domain. **/
      Status: OptionStatus;
    }
    export interface ElasticsearchDomainConfig {
      /** String of format X.Y to specify version for the Elasticsearch domain. **/
      ElasticsearchVersion?: ElasticsearchVersionStatus;
      /** Specifies the ElasticsearchClusterConfig for the Elasticsearch domain. **/
      ElasticsearchClusterConfig?: ElasticsearchClusterConfigStatus;
      /** Specifies the EBSOptions for the Elasticsearch domain. **/
      EBSOptions?: EBSOptionsStatus;
      /** IAM access policy as a JSON-formatted string. **/
      AccessPolicies?: AccessPoliciesStatus;
      /** Specifies the SnapshotOptions for the Elasticsearch domain. **/
      SnapshotOptions?: SnapshotOptionsStatus;
      /** Specifies the AdvancedOptions for the domain. See Configuring Advanced Options
[http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options] 
for more information. **/
      AdvancedOptions?: AdvancedOptionsStatus;
    }
    export interface ElasticsearchDomainStatus {
      /** The unique identifier for the specified Elasticsearch domain. **/
      DomainId: DomainId;
      /** The name of an Elasticsearch domain. Domain names are unique across the domains
owned by an account within an AWS region. Domain names start with a letter or
number and can contain the following characters: a-z (lowercase), 0-9, and -
(hyphen). **/
      DomainName: DomainName;
      /** The Amazon resource name (ARN) of an Elasticsearch domain. See Identifiers for
IAM Entities
[http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html] 
in Using AWS Identity and Access Management for more information. **/
      ARN: ARN;
      /** The domain creation status. True if the creation of an Elasticsearch domain is
complete. False if domain creation is still in progress. **/
      Created?: Boolean;
      /** The domain deletion status. True if a delete request has been received for the
domain but resource cleanup is still in progress. False if the domain has not
been deleted. Once domain deletion is complete, the status of the domain is no
longer returned. **/
      Deleted?: Boolean;
      /** The Elasticsearch domain endpoint that you use to submit index and search
requests. **/
      Endpoint?: ServiceUrl;
      /** The status of the Elasticsearch domain configuration. True if Amazon
Elasticsearch Service is processing configuration changes. False if the
configuration is active. **/
      Processing?: Boolean;
      ElasticsearchVersion?: ElasticsearchVersionString;
      /** The type and number of instances in the domain cluster. **/
      ElasticsearchClusterConfig: ElasticsearchClusterConfig;
      /** The EBSOptions for the specified domain. See Configuring EBS-based Storage
[http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs] 
for more information. **/
      EBSOptions?: EBSOptions;
      /** IAM access policy as a JSON-formatted string. **/
      AccessPolicies?: PolicyDocument;
      /** Specifies the status of the SnapshotOptions **/
      SnapshotOptions?: SnapshotOptions;
      /** Specifies the status of the AdvancedOptions **/
      AdvancedOptions?: AdvancedOptions;
    }
    export interface ElasticsearchVersionStatus {
      /** Specifies the Elasticsearch version for the specified Elasticsearch domain. **/
      Options: ElasticsearchVersionString;
      /** Specifies the status of the Elasticsearch version options for the specified
Elasticsearch domain. **/
      Status: OptionStatus;
    }
    export interface InternalException {
    }
    export interface InvalidTypeException {
    }
    export interface LimitExceededException {
    }
    export interface ListDomainNamesResponse {
      /** List of Elasticsearch domain names. **/
      DomainNames?: DomainInfoList;
    }
    export interface ListTagsRequest {
      /** Specify the ARN for the Elasticsearch domain to which the tags are attached
that you want to view. **/
      ARN: ARN;
    }
    export interface ListTagsResponse {
      /** List of Tag for the requested Elasticsearch domain. **/
      TagList?: TagList;
    }
    export interface OptionStatus {
      /** Timestamp which tells the creation date for the entity. **/
      CreationDate: UpdateTimestamp;
      /** Timestamp which tells the last updated time for the entity. **/
      UpdateDate: UpdateTimestamp;
      /** Specifies the latest version for the entity. **/
      UpdateVersion?: UIntValue;
      /** Provides the OptionState for the Elasticsearch domain. **/
      State: OptionState;
      /** Indicates whether the Elasticsearch domain is being deleted. **/
      PendingDeletion?: Boolean;
    }
    export interface RemoveTagsRequest {
      /** Specifies the ARN for the Elasticsearch domain from which you want to delete the
specified tags. **/
      ARN: ARN;
      /** Specifies the TagKey list which you want to remove from the Elasticsearch
domain. **/
      TagKeys: StringList;
    }
    export interface ResourceAlreadyExistsException {
    }
    export interface ResourceNotFoundException {
    }
    export interface SnapshotOptions {
      /** Specifies the time, in UTC format, when the service takes a daily automated
snapshot of the specified Elasticsearch domain. Default value is 0 hours. **/
      AutomatedSnapshotStartHour?: IntegerClass;
    }
    export interface SnapshotOptionsStatus {
      /** Specifies the daily snapshot options specified for the Elasticsearch domain. **/
      Options: SnapshotOptions;
      /** Specifies the status of a daily automated snapshot. **/
      Status: OptionStatus;
    }
    export interface Tag {
      /** Specifies the TagKey, the name of the tag. Tag keys must be unique for the
Elasticsearch domain to which they are attached. **/
      Key: TagKey;
      /** Specifies the TagValue, the value assigned to the corresponding tag key. Tag
values can be null and do not have to be unique in a tag set. For example, you
can have a key value pair in a tag set of project : Trinity and cost-center :
Trinity **/
      Value: TagValue;
    }
    export interface UpdateElasticsearchDomainConfigRequest {
      /** The name of the Elasticsearch domain that you are updating. **/
      DomainName: DomainName;
      /** The type and number of instances to instantiate for the domain cluster. **/
      ElasticsearchClusterConfig?: ElasticsearchClusterConfig;
      /** Specify the type and size of the EBS volume that you want to use. **/
      EBSOptions?: EBSOptions;
      /** Option to set the time, in UTC format, for the daily automated snapshot. Default
value is 0 hours. **/
      SnapshotOptions?: SnapshotOptions;
      /** Modifies the advanced option to allow references to indices in an HTTP request
body. Must be false when configuring access to individual sub-resources. By
default, the value is true. See Configuration Advanced Options
[http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options] 
for more information. **/
      AdvancedOptions?: AdvancedOptions;
      /** IAM access policy as a JSON-formatted string. **/
      AccessPolicies?: PolicyDocument;
    }
    export interface UpdateElasticsearchDomainConfigResponse {
      /** The status of the updated Elasticsearch domain. **/
      DomainConfig: ElasticsearchDomainConfig;
    }
    export interface ValidationException {
    }
  }
}
