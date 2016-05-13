// Type definitions for aws-sdk - AWS Application Discovery Service
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2015-11-01
   * endpointPrefix: discovery
   * serviceAbbreviation: 
   * signatureVersion: v4
   * protocol: json
   *
   * This is the AWS Discovery Service API Reference. The AWS Discovery Service
streamlines the process of migrating to Amazon Web Services by helping you
identify assets in your data center, including servers, virtual machines,
applications, application dependencies, and network infrastructure. You can use
this information to find the workloads that make up an application, analyze
dependencies, and build migration strategies. The service also collects
performance data about your workloads which you can use to assess migration
outcomes.

This API reference provides descriptions, syntax, and usage examples for each of
the actions and data types for the Discovery Service. The topic for each action
shows the API request parameters and the response. Alternatively, you can use
one of the AWS SDKs to access an API that&#x27;s tailored to the programming language
or platform that you&#x27;re using. For more information, see AWS SDKs
[http://aws.amazon.com/tools/#SDKs] .

This guide is intended for use with the AWS Discovery Service user guide
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/remote-commands-prereq.html] 
.

The following are short descriptions of each API action, organized by function.

Managing AWS Agents

The AWS agent is an Amazon application that you install on servers and virtual
machines in your data center or on Amazon EC2 instances. The agent captures
server configuration and activity information (including hardware profile,
network, file system, and process activity) and sends this data to the AWS
Application Discovery Service. The Discovery Service processes this data and
maps the application dependencies for your workloads.

 &amp;#42; StartDataCollectionByAgentIds : Instructs the specified agents to start
   collecting data. Agents can reside on host servers or virtual machines in
   your data center or on AWS EC2 instances.
   
   
 * StopDataCollectionByAgentIds : Instructs the specified agents to stop
   collecting data.
   
   
 * DescribeAgents : Lists AWS agents by ID or lists all agents associated with
   your user account if you did not specify an agent ID. The output includes
   agent IDs, IP addresses, MAC addresses, agent health, host name where the
   agent resides, and the version number of each agent.
   
   

Querying Configuration Items

A configuration item is an IT asset that was discovered in your data center by
an AWS agent. With the Discovery Service, you can specify filters and query
specific configuration items. For example, using this API, you could create a
filter to query for a process configuration item named apache and an operating
system configuration item named Ubuntu.

 * GetConfigurationAttributes : Retrieves a list of attributes for a specific
   configuration ID. For example, the output for a server configuration item
   includes a list of attributes about the server, including host name,
   operating system, number of network cards, etc.
   
   
 * ListConfigurations : Retrieves a list of configurations items according to
   the criteria you specify in a filter. The filter criteria identify
   relationship requirements. For example, the following filter specifies
   criteria of process.name and values of nginx and apache .
   
   ConfigurationType = Process Filters = [WebServerCriteria] WebServerCriteria =
   { ‘key’ : process.name, ‘values’ : [ ‘nginx’, ‘apache’ ], ‘condition’ :
   ‘contains’ }
   
   

Tagging Discovered Configuration Items

You can tag discovered configuration items. Tags are metadata that help you
categorize IT assets in your data center. Tags use a key , value format. For
example, {&quot;key&quot;: &quot;serverType&quot;, &quot;value&quot;: &quot;webServer&quot;} .

 * CreateTags : Creates one or more tags for a configuration item. Tags are
   metadata that help you categorize IT assets.
   
   
 * DescribeTags : Retrieve a list of configuration items that are tagged with a
   specific tag. Or retrieve a list all tags assigned to a specific
   configuration item.
   
   
 * DeleteTags : Deletes one or more tags associated with a configuration item.
   
   

Exporting Data

You can export discovered data to an Amazon S3 bucket in the form of CSV files.

 * ExportConfigurations : Exports all discovered configuration data to an Amazon
   S3 bucket. Data includes processes, connections, servers, and system
   performance.
   
   
 * GetExportStatus : Gets the status of the data export. When the export is
   complete, the service returns an Amazon S3 URL where you can download CSV
   files that include the data.
   *
   */
  export class Discovery extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Creates one or more tags for a configuration item. Tags are metadata that help
you categorize IT assets.
     *
     * @error AuthorizationErrorException   
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    createTags(params: Discovery.CreateTagsRequest, callback?: (err: Discovery.AuthorizationErrorException|Discovery.ResourceNotFoundException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any, data: Discovery.CreateTagsResponse|any) => void): Request<Discovery.CreateTagsResponse|any,Discovery.AuthorizationErrorException|Discovery.ResourceNotFoundException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any>;
    /**
     * Deletes one or more tags associated with a configuration item.
     *
     * @error AuthorizationErrorException   
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    deleteTags(params: Discovery.DeleteTagsRequest, callback?: (err: Discovery.AuthorizationErrorException|Discovery.ResourceNotFoundException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any, data: Discovery.DeleteTagsResponse|any) => void): Request<Discovery.DeleteTagsResponse|any,Discovery.AuthorizationErrorException|Discovery.ResourceNotFoundException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any>;
    /**
     * Lists AWS agents by ID or lists all agents associated with your user account if
you did not specify an agent ID.
     *
     * @error AuthorizationErrorException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    describeAgents(params: Discovery.DescribeAgentsRequest, callback?: (err: Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any, data: Discovery.DescribeAgentsResponse|any) => void): Request<Discovery.DescribeAgentsResponse|any,Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any>;
    /**
     * Retrieve a list of configuration items that are tagged with a specific tag. Or
retrieve a list all tags assigned to a specific configuration item.
     *
     * @error AuthorizationErrorException   
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    describeTags(params: Discovery.DescribeTagsRequest, callback?: (err: Discovery.AuthorizationErrorException|Discovery.ResourceNotFoundException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any, data: Discovery.DescribeTagsResponse|any) => void): Request<Discovery.DescribeTagsResponse|any,Discovery.AuthorizationErrorException|Discovery.ResourceNotFoundException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any>;
    /**
     * Exports the selected configurations to an Amazon S3 bucket.
     *
     * @error AuthorizationErrorException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     * @error OperationNotPermittedException   
     */
    exportConfigurations(callback?: (err: Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|Discovery.OperationNotPermittedException|any, data: Discovery.ExportConfigurationsResponse|any) => void): Request<Discovery.ExportConfigurationsResponse|any,Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|Discovery.OperationNotPermittedException|any>;
    /**
     * Retrieve a list of attributes for a specific configuration ID. For example, the
output for a server configuration item includes a list of attributes about the
server, including host name, operating system, number of network cards, etc.
     *
     * @error AuthorizationErrorException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    getConfigurationAttributes(params: Discovery.GetConfigurationAttributesRequest, callback?: (err: Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any, data: Discovery.GetConfigurationAttributesResponse|any) => void): Request<Discovery.GetConfigurationAttributesResponse|any,Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any>;
    /**
     * Retrieves the status of a given export process.
     *
     * @error AuthorizationErrorException   
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    getExportStatus(params: Discovery.GetExportStatusRequest, callback?: (err: Discovery.AuthorizationErrorException|Discovery.ResourceNotFoundException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any, data: Discovery.GetExportStatusResponse|any) => void): Request<Discovery.GetExportStatusResponse|any,Discovery.AuthorizationErrorException|Discovery.ResourceNotFoundException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any>;
    /**
     * Retrieve a list of configurations items according to the criteria you specify in
a filter. The filter criteria identify relationship requirements.
     *
     * @error AuthorizationErrorException   
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    listConfigurations(params: Discovery.ListConfigurationsRequest, callback?: (err: Discovery.AuthorizationErrorException|Discovery.ResourceNotFoundException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any, data: Discovery.ListConfigurationsResponse|any) => void): Request<Discovery.ListConfigurationsResponse|any,Discovery.AuthorizationErrorException|Discovery.ResourceNotFoundException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any>;
    /**
     * 
     *
     * @error AuthorizationErrorException   
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    removeConfiguration(params: Discovery.RemoveConfigurationRequest, callback?: (err: Discovery.AuthorizationErrorException|Discovery.ResourceNotFoundException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any, data: Discovery.RemoveConfigurationResponse|any) => void): Request<Discovery.RemoveConfigurationResponse|any,Discovery.AuthorizationErrorException|Discovery.ResourceNotFoundException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any>;
    /**
     * Instructs the specified agents to start collecting data. Agents can reside on
host servers or virtual machines in your data center or on AWS EC2 instances.
     *
     * @error AuthorizationErrorException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    startDataCollectionByAgentIds(params: Discovery.StartDataCollectionByAgentIdsRequest, callback?: (err: Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any, data: Discovery.StartDataCollectionByAgentIdsResponse|any) => void): Request<Discovery.StartDataCollectionByAgentIdsResponse|any,Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any>;
    /**
     * Instructs the specified agents to stop collecting data.
     *
     * @error AuthorizationErrorException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    stopDataCollectionByAgentIds(params: Discovery.StopDataCollectionByAgentIdsRequest, callback?: (err: Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any, data: Discovery.StopDataCollectionByAgentIdsResponse|any) => void): Request<Discovery.StopDataCollectionByAgentIdsResponse|any,Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any>;

  }

  export module Discovery {
    
    export type AgentConfigStatusList = AgentConfigStatus[];
    
    export type AgentId = string;
    
    export type AgentIds = AgentId[];
    
    export type AgentNetworkInfoList = AgentNetworkInfo[];
    
    export type AgentStatus = string;
    
    export type AgentsInfo = AgentInfo[];
    
    export type AttributeList = Attribute[];
    
    export type AttributeName = string;
    
    export type AttributeValue = string;
    
    export type Boolean = boolean;
    
    export type Condition = string;
    
    export type ConfigIdAttributesMap = {[key:string]: AttributeList};
    
    export type Configuration = {[key:string]: String};
    
    export type ConfigurationExportId = string;
    
    export type ConfigurationId = string;
    
    export type ConfigurationIdList = ConfigurationId[];
    
    export type ConfigurationItemType = string;
    
    export type ConfigurationTagSet = ConfigurationTag[];
    
    export type Configurations = Configuration[];
    
    export type ExportStatusMap = {[key:string]: String};
    
    export type FilterName = string;
    
    export type FilterValue = string;
    
    export type FilterValues = FilterValue[];
    
    export type Filters = Filter[];
    
    export type Integer = number;
    
    export type Message = string;
    
    export type NextToken = string;
    
    export type String = string;
    
    export type TagFilters = TagFilter[];
    
    export type TagKey = string;
    
    export type TagSet = Tag[];
    
    export type TagValue = string;

    export interface AgentConfigStatus {
        /** The agent ID. **/
        agentId?: String;
        /** Information about whether or not the agent configuration was updated. **/
        configUpdated?: Boolean;
        /** A description of the operation performed. **/
        description?: String;
    }
    export interface AgentInfo {
        /** The agent ID. **/
        agentId?: AgentId;
        /** The name of the host where the agent resides. The host can be a server, virtual
machine, or an AWS EC2 instance. **/
        hostName?: String;
        /** Network details about the host where the agent resides. **/
        agentNetworkInfoList?: AgentNetworkInfoList;
        /**  **/
        connectorId?: String;
        /** The agent version **/
        version?: String;
        /** The health of the agent. **/
        health?: AgentStatus;
    }
    export interface AgentNetworkInfo {
        /** The IP address for the host where the agent resides. **/
        ipAddress?: String;
        /** The MAC address for the host where the agent resides. **/
        macAddress?: String;
    }
    export interface Attribute {
        /** The name of the attribute. **/
        Name?: AttributeName;
        /** A specific attribute type. For example key = serverType and value = web server. **/
        Value?: AttributeValue;
    }
    export interface AuthorizationErrorException {
        message?: Message;
    }
    export interface ConfigurationTag {
        /** A descriptor. For example, serverType . **/
        configurationType?: ConfigurationItemType;
        /** The configuration ID for the item you want to tag. You can specify a list of
keys and values. **/
        configurationId?: ConfigurationId;
        /** A type of tag to filter on. For example serverType . **/
        key?: TagKey;
        /** A value to filter on. For example key = serverType and value = web server . **/
        value?: TagValue;
    }
    export interface CreateTagsRequest {
        /** A list of configuration items that you want to tag. **/
        configurationIds: ConfigurationIdList;
        /** Tags that you want to associate with one or more configuration items. Specify
the tags that you want to create in a key , value format. For example:

{&quot;key&quot;: &quot;serverType&quot;, &quot;value&quot;: &quot;webServer&quot;} **/
        tags: TagSet;
    }
    export interface CreateTagsResponse {
    }
    export interface DeleteTagsRequest {
        /** A list of configuration items with tags that you want to delete. **/
        configurationIds: ConfigurationIdList;
        /** Tags that you want to delete from one or more configuration items. Specify the
tags that you want to delete in a key , value format. For example:

{&quot;key&quot;: &quot;serverType&quot;, &quot;value&quot;: &quot;webServer&quot;} **/
        tags?: TagSet;
    }
    export interface DeleteTagsResponse {
    }
    export interface DescribeAgentsRequest {
        /** The agent IDs for which you want information. If you specify no IDs, the system
returns information about all agents associated with your AWS user account. **/
        agentIds?: AgentIds;
        /** The total number of items to return. The maximum value is 100. **/
        maxResults?: Integer;
        /** A token to start the list. Use this token to get the next set of results. **/
        nextToken?: NextToken;
    }
    export interface DescribeAgentsResponse {
        /** Lists AWS agents by ID or lists all agents associated with your user account if
you did not specify an agent ID. The output includes agent IDs, IP addresses,
MAC addresses, agent health, host name where the agent resides, and the version
number of each agent. **/
        agentsInfo?: AgentsInfo;
        /** The call returns a token. Use this token to get the next set of results. **/
        nextToken?: NextToken;
    }
    export interface DescribeTagsRequest {
        /** You can filter the list using a key, value format. For example:

{&quot;key&quot;: &quot;serverType&quot;, &quot;value&quot;: &quot;webServer&quot;}

You can separate these items by using logical operators. Allowed filters include
tagkey, tagValue, and configid. **/
        filter?: TagFilters;
        /** The total number of items to return. The maximum value is 100. **/
        maxResults?: Integer;
        /** A token to start the list. Use this token to get the next set of results. **/
        nextToken?: NextToken;
    }
    export interface DescribeTagsResponse {
        /** Depending on the input, a list of configuration items tagged with a specific
tag, or a list of tags for a specific configuration item. **/
        tags?: ConfigurationTagSet;
        /** The call returns a token. Use this token to get the next set of results. **/
        nextToken?: NextToken;
    }
    export interface ExportConfigurationsResponse {
        /** A unique identifier which you can use to query the export status. **/
        exportId?: ConfigurationExportId;
    }
    export interface Filter {
        /** The name of the filter you want to use. **/
        name: String;
        /** The value you want to filter on. **/
        values: FilterValues;
        /** A conditional operator for the filter. **/
        condition: Condition;
    }
    export interface GetConfigurationAttributesRequest {
        /** One or more configuration IDs. **/
        configurationIds: ConfigurationIdList;
    }
    export interface GetConfigurationAttributesResponse {
        /** Returns configuration details, including the configuration ID, attribute names,
and attribute values. **/
        configurations?: ConfigIdAttributesMap;
    }
    export interface GetExportStatusRequest {
        /** A unique identifier which you can use to query the export status. **/
        exportId: ConfigurationExportId;
    }
    export interface GetExportStatusResponse {
        /** Returns configuration details, including the configuration ID, attribute names,
and attribute values. **/
        exportId?: ConfigurationExportId;
        /** Returns export details. When the status is complete, the response includes a URL
for an Amazon S3 bucket where you can view the data in a CSV file. **/
        exportStatusMap?: ExportStatusMap;
    }
    export interface InvalidParameterException {
        message?: Message;
    }
    export interface InvalidParameterValueException {
        message?: Message;
    }
    export interface ListConfigurationsRequest {
        /** A valid configuration identified by the Discovery Service. **/
        configurationType: ConfigurationItemType;
        /** You can filter the list using a key, value format. For example:

{&quot;key&quot;: &quot;serverType&quot;, &quot;value&quot;: &quot;webServer&quot;} **/
        filters?: Filters;
        /** The total number of items to return. The maximum value is 100. **/
        maxResults?: Integer;
        /** A token to start the list. Use this token to get the next set of results. **/
        nextToken?: NextToken;
    }
    export interface ListConfigurationsResponse {
        /** Returns a list of configuration item IDs. **/
        configurations?: Configurations;
        /** The call returns a token. Use this token to get the next set of results. **/
        nextToken?: NextToken;
    }
    export interface OperationNotPermittedException {
        message?: Message;
    }
    export interface RemoveConfigurationRequest {
        configurationId: ConfigurationId;
    }
    export interface RemoveConfigurationResponse {
    }
    export interface ResourceNotFoundException {
        message?: Message;
    }
    export interface ServerInternalErrorException {
        message?: Message;
    }
    export interface StartDataCollectionByAgentIdsRequest {
        /** The IDs of the agents that you want to start collecting data. **/
        agentIds: AgentIds;
    }
    export interface StartDataCollectionByAgentIdsResponse {
        /** Information about agents that were instructed to start collecting data.
Information includes the agent ID, a description of the operation performed, and
whether or not the agent configuration was updated. **/
        agentsConfigStatus?: AgentConfigStatusList;
    }
    export interface StopDataCollectionByAgentIdsRequest {
        /** The IDs of the agents that you want to stop collecting data. **/
        agentIds: AgentIds;
    }
    export interface StopDataCollectionByAgentIdsResponse {
        /** Information about agents that were instructed to stop collecting data.
Information includes the agent ID, a description of the operation performed, and
whether or not the agent configuration was updated. **/
        agentsConfigStatus?: AgentConfigStatusList;
    }
    export interface Tag {
        /** A type of tag to filter on. **/
        key: TagKey;
        /** A value for a tag key to filter on. **/
        value: TagValue;
    }
    export interface TagFilter {
        /** A name of a tag filter. **/
        Name: FilterName;
        /** Values of a tag filter. **/
        Values: FilterValues;
    }
  }
}
