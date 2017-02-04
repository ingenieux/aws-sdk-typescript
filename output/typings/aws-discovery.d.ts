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
   * AWS Application Discovery Service AWS Application Discovery Service helps you
plan application migration projects by automatically identifying servers,
virtual machines (VMs), software, and software dependencies running in your
on-premises data centers. Application Discovery Service also collects
application performance data, which can help you assess the outcome of your
migration. The data collected by Application Discovery Service is securely
retained in an Amazon-hosted and managed database in the cloud. You can export
the data as a CSV or XML file into your preferred visualization tool or
cloud-migration solution to plan your migration. For more information, see the
Application Discovery Service FAQ
[http://aws.amazon.com/application-discovery/faqs/].

Application Discovery Service offers two modes of operation.

 &amp;#42;   Agentless discovery mode is recommended for environments that use VMware
   vCenter Server. This mode doesn&#x27;t require you to install an agent on each
   host. Agentless discovery gathers server information regardless of the
   operating systems, which minimizes the time required for initial on-premises
   infrastructure assessment. Agentless discovery doesn&#x27;t collect information
   about software and software dependencies. It also doesn&#x27;t work in non-VMware
   environments. We recommend that you use agent-based discovery for non-VMware
   environments and if you want to collect information about software and
   software dependencies. You can also run agent-based and agentless discovery
   simultaneously. Use agentless discovery to quickly complete the initial
   infrastructure assessment and then install agents on select hosts to gather
   information about software and software dependencies.
   
   
 *   Agent-based discovery mode collects a richer set of data than agentless
   discovery by using Amazon software, the AWS Application Discovery Agent,
   which you install on one or more hosts in your data center. The agent
   captures infrastructure and application information, including an inventory
   of installed software applications, system and process performance, resource
   utilization, and network dependencies between workloads. The information
   collected by agents is secured at rest and in transit to the Application
   Discovery Service database in the cloud. 
   
   

Application Discovery Service integrates with application discovery solutions
from AWS Partner Network (APN) partners. Third-party application discovery tools
can query the Application Discovery Service and write to the Application
Discovery Service database using a public API. You can then import the data into
either a visualization tool or cloud-migration solution.

Application Discovery Service doesn&#x27;t gather sensitive information. All data is
handled according to the AWS Privacy Policy [http://aws.amazon.com/privacy/].
You can operate Application Discovery Service using offline mode to inspect
collected data before it is shared with the service.

Your AWS account must be granted access to Application Discovery Service, a
process called whitelisting. This is true for AWS partners and customers alike.
To request access, sign up for the AWS Application Discovery Service here
[http://aws.amazon.com/application-discovery/preview/]. We will send you
information about how to get started.

This API reference provides descriptions, syntax, and usage examples for each of
the actions and data types for the Application Discovery Service. The topic for
each action shows the API request parameters and the response. Alternatively,
you can use one of the AWS SDKs to access an API that is tailored to the
programming language or platform that you&#x27;re using. For more information, see 
AWS SDKs [http://aws.amazon.com/tools/#SDKs].

This guide is intended for use with the AWS Application Discovery Service User
Guide [http://docs.aws.amazon.com/application-discovery/latest/userguide/].
   *
   */
  export class Discovery extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Associates one or more configuration items with an application.
     *
     * @error AuthorizationErrorException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    associateConfigurationItemsToApplication(params: Discovery.AssociateConfigurationItemsToApplicationRequest, callback?: (err: Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any, data: Discovery.AssociateConfigurationItemsToApplicationResponse|any) => void): Request<Discovery.AssociateConfigurationItemsToApplicationResponse|any,Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any>;
    /**
     * Creates an application with the given name and description.
     *
     * @error AuthorizationErrorException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    createApplication(params: Discovery.CreateApplicationRequest, callback?: (err: Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any, data: Discovery.CreateApplicationResponse|any) => void): Request<Discovery.CreateApplicationResponse|any,Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any>;
    /**
     * Creates one or more tags for configuration items. Tags are metadata that help
you categorize IT assets. This API accepts a list of multiple configuration
items.
     *
     * @error AuthorizationErrorException   
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    createTags(params: Discovery.CreateTagsRequest, callback?: (err: Discovery.AuthorizationErrorException|Discovery.ResourceNotFoundException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any, data: Discovery.CreateTagsResponse|any) => void): Request<Discovery.CreateTagsResponse|any,Discovery.AuthorizationErrorException|Discovery.ResourceNotFoundException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any>;
    /**
     * Deletes a list of applications and their associations with configuration items.
     *
     * @error AuthorizationErrorException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    deleteApplications(params: Discovery.DeleteApplicationsRequest, callback?: (err: Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any, data: Discovery.DeleteApplicationsResponse|any) => void): Request<Discovery.DeleteApplicationsResponse|any,Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any>;
    /**
     * Deletes the association between configuration items and one or more tags. This
API accepts a list of multiple configuration items.
     *
     * @error AuthorizationErrorException   
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    deleteTags(params: Discovery.DeleteTagsRequest, callback?: (err: Discovery.AuthorizationErrorException|Discovery.ResourceNotFoundException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any, data: Discovery.DeleteTagsResponse|any) => void): Request<Discovery.DeleteTagsResponse|any,Discovery.AuthorizationErrorException|Discovery.ResourceNotFoundException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any>;
    /**
     * Lists agents or the Connector by ID or lists all agents/Connectors associated
with your user account if you did not specify an ID.
     *
     * @error AuthorizationErrorException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    describeAgents(params: Discovery.DescribeAgentsRequest, callback?: (err: Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any, data: Discovery.DescribeAgentsResponse|any) => void): Request<Discovery.DescribeAgentsResponse|any,Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any>;
    /**
     * Retrieves attributes for a list of configuration item IDs. All of the supplied
IDs must be for the same asset type (server, application, process, or
connection). Output fields are specific to the asset type selected. For example,
the output for a server configuration item includes a list of attributes about
the server, such as host name, operating system, and number of network cards.

For a complete list of outputs for each asset type, see Querying Discovered
Configuration Items
[http://docs.aws.amazon.com/application-discovery/latest/APIReference/querying-configuration-items.html#DescribeConfigurations]
.
     *
     * @error AuthorizationErrorException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    describeConfigurations(params: Discovery.DescribeConfigurationsRequest, callback?: (err: Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any, data: Discovery.DescribeConfigurationsResponse|any) => void): Request<Discovery.DescribeConfigurationsResponse|any,Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any>;
    /**
     * Retrieves the status of a given export process. You can retrieve status from a
maximum of 100 processes.
     *
     * @error AuthorizationErrorException   
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    describeExportConfigurations(params: Discovery.DescribeExportConfigurationsRequest, callback?: (err: Discovery.AuthorizationErrorException|Discovery.ResourceNotFoundException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any, data: Discovery.DescribeExportConfigurationsResponse|any) => void): Request<Discovery.DescribeExportConfigurationsResponse|any,Discovery.AuthorizationErrorException|Discovery.ResourceNotFoundException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any>;
    /**
     * Retrieves a list of configuration items that are tagged with a specific tag. Or
retrieves a list of all tags assigned to a specific configuration item.
     *
     * @error AuthorizationErrorException   
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    describeTags(params: Discovery.DescribeTagsRequest, callback?: (err: Discovery.AuthorizationErrorException|Discovery.ResourceNotFoundException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any, data: Discovery.DescribeTagsResponse|any) => void): Request<Discovery.DescribeTagsResponse|any,Discovery.AuthorizationErrorException|Discovery.ResourceNotFoundException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any>;
    /**
     * Disassociates one or more configuration items from an application.
     *
     * @error AuthorizationErrorException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    disassociateConfigurationItemsFromApplication(params: Discovery.DisassociateConfigurationItemsFromApplicationRequest, callback?: (err: Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any, data: Discovery.DisassociateConfigurationItemsFromApplicationResponse|any) => void): Request<Discovery.DisassociateConfigurationItemsFromApplicationResponse|any,Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any>;
    /**
     * Exports all discovered configuration data to an Amazon S3 bucket or an
application that enables you to view and evaluate the data. Data includes tags
and tag associations, processes, connections, servers, and system performance.
This API returns an export ID which you can query using the 
DescribeExportConfigurations API. The system imposes a limit of two
configuration exports in six hours.
     *
     * @error AuthorizationErrorException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     * @error OperationNotPermittedException   
     */
    exportConfigurations(callback?: (err: Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|Discovery.OperationNotPermittedException|any, data: Discovery.ExportConfigurationsResponse|any) => void): Request<Discovery.ExportConfigurationsResponse|any,Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|Discovery.OperationNotPermittedException|any>;
    /**
     * Retrieves a short summary of discovered assets.
     *
     * @error AuthorizationErrorException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    getDiscoverySummary(params: Discovery.GetDiscoverySummaryRequest, callback?: (err: Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any, data: Discovery.GetDiscoverySummaryResponse|any) => void): Request<Discovery.GetDiscoverySummaryResponse|any,Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any>;
    /**
     * Retrieves a list of configuration items according to criteria you specify in a
filter. The filter criteria identify relationship requirements.
     *
     * @error AuthorizationErrorException   
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    listConfigurations(params: Discovery.ListConfigurationsRequest, callback?: (err: Discovery.AuthorizationErrorException|Discovery.ResourceNotFoundException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any, data: Discovery.ListConfigurationsResponse|any) => void): Request<Discovery.ListConfigurationsResponse|any,Discovery.AuthorizationErrorException|Discovery.ResourceNotFoundException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any>;
    /**
     * Retrieves a list of servers which are one network hop away from a specified
server.
     *
     * @error AuthorizationErrorException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    listServerNeighbors(params: Discovery.ListServerNeighborsRequest, callback?: (err: Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any, data: Discovery.ListServerNeighborsResponse|any) => void): Request<Discovery.ListServerNeighborsResponse|any,Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any>;
    /**
     * Instructs the specified agents or Connectors to start collecting data.
     *
     * @error AuthorizationErrorException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    startDataCollectionByAgentIds(params: Discovery.StartDataCollectionByAgentIdsRequest, callback?: (err: Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any, data: Discovery.StartDataCollectionByAgentIdsResponse|any) => void): Request<Discovery.StartDataCollectionByAgentIdsResponse|any,Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any>;
    /**
     * Instructs the specified agents or Connectors to stop collecting data.
     *
     * @error AuthorizationErrorException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    stopDataCollectionByAgentIds(params: Discovery.StopDataCollectionByAgentIdsRequest, callback?: (err: Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any, data: Discovery.StopDataCollectionByAgentIdsResponse|any) => void): Request<Discovery.StopDataCollectionByAgentIdsResponse|any,Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any>;
    /**
     * Updates metadata about an application.
     *
     * @error AuthorizationErrorException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    updateApplication(params: Discovery.UpdateApplicationRequest, callback?: (err: Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any, data: Discovery.UpdateApplicationResponse|any) => void): Request<Discovery.UpdateApplicationResponse|any,Discovery.AuthorizationErrorException|Discovery.InvalidParameterException|Discovery.InvalidParameterValueException|Discovery.ServerInternalErrorException|any>;

  }

  export module Discovery {
    
    export type AgentConfigurationStatusList = AgentConfigurationStatus[];
    
    export type AgentId = string;
    
    export type AgentIds = AgentId[];
    
    export type AgentNetworkInfoList = AgentNetworkInfo[];
    
    export type AgentStatus = string;
    
    export type AgentsInfo = AgentInfo[];
    
    export type ApplicationId = string;
    
    export type ApplicationIdsList = ApplicationId[];
    
    export type Boolean = boolean;
    
    export type BoxedInteger = number;
    
    export type Condition = string;
    
    export type Configuration = {[key:string]: String};
    
    export type ConfigurationId = string;
    
    export type ConfigurationIdList = ConfigurationId[];
    
    export type ConfigurationItemType = string;
    
    export type ConfigurationTagSet = ConfigurationTag[];
    
    export type Configurations = Configuration[];
    
    export type ConfigurationsDownloadUrl = string;
    
    export type ConfigurationsExportId = string;
    
    export type DescribeConfigurationsAttribute = {[key:string]: String};
    
    export type DescribeConfigurationsAttributes = DescribeConfigurationsAttribute[];
    
    export type ExportIds = ConfigurationsExportId[];
    
    export type ExportRequestTime = number;
    
    export type ExportStatus = string;
    
    export type ExportStatusMessage = string;
    
    export type ExportsInfo = ExportInfo[];
    
    export type FilterName = string;
    
    export type FilterValue = string;
    
    export type FilterValues = FilterValue[];
    
    export type Filters = Filter[];
    
    export type Integer = number;
    
    export type Long = number;
    
    export type Message = string;
    
    export type NeighborDetailsList = NeighborConnectionDetail[];
    
    export type NextToken = string;
    
    export type OrderByList = OrderByElement[];
    
    export type String = string;
    
    export type TagFilters = TagFilter[];
    
    export type TagKey = string;
    
    export type TagSet = Tag[];
    
    export type TagValue = string;
    
    export type TimeStamp = number;
    
    export type orderString = string;

    export interface AgentConfigurationStatus {
        /** The agent/Connector ID. **/
        agentId?: String;
        /** Information about the status of the StartDataCollection and StopDataCollection 
operations. The system has recorded the data collection operation. The
agent/Connector receives this command the next time it polls for a new command. **/
        operationSucceeded?: Boolean;
        /** A description of the operation performed. **/
        description?: String;
    }
    export interface AgentInfo {
        /** The agent or connector ID. **/
        agentId?: AgentId;
        /** The name of the host where the agent or connector resides. The host can be a
server or virtual machine. **/
        hostName?: String;
        /** Network details about the host where the agent or connector resides. **/
        agentNetworkInfoList?: AgentNetworkInfoList;
        /** The ID of the connector. **/
        connectorId?: String;
        /** The agent or connector version. **/
        version?: String;
        /** The health of the agent or connector. **/
        health?: AgentStatus;
        /** Time since agent or connector health was reported. **/
        lastHealthPingTime?: String;
        /** Status of the collection process for an agent or connector. **/
        collectionStatus?: String;
        /** Type of agent. **/
        agentType?: String;
        /** Agent&#x27;s first registration time stamp in UTC. **/
        registeredTime?: String;
    }
    export interface AgentNetworkInfo {
        /** The IP address for the host where the agent/Connector resides. **/
        ipAddress?: String;
        /** The MAC address for the host where the agent/Connector resides. **/
        macAddress?: String;
    }
    export interface AssociateConfigurationItemsToApplicationRequest {
        /** The configuration ID of an application with which items are to be associated. **/
        applicationConfigurationId: ApplicationId;
        /** The ID of each configuration item to be associated with an application. **/
        configurationIds: ConfigurationIdList;
    }
    export interface AssociateConfigurationItemsToApplicationResponse {
    }
    export interface AuthorizationErrorException {
        message?: Message;
    }
    export interface ConfigurationTag {
        /** A type of IT asset that you want to tag. **/
        configurationType?: ConfigurationItemType;
        /** The configuration ID for the item you want to tag. You can specify a list of
keys and values. **/
        configurationId?: ConfigurationId;
        /** A type of tag to filter on. For example, serverType. **/
        key?: TagKey;
        /** A value to filter on. For example key = serverType and value = web server. **/
        value?: TagValue;
        /** The time the configuration tag was created in Coordinated Universal Time (UTC). **/
        timeOfCreation?: TimeStamp;
    }
    export interface CreateApplicationRequest {
        /** Name of the application to be created. **/
        name: String;
        /** Description of the application to be created. **/
        description?: String;
    }
    export interface CreateApplicationResponse {
        /** Configuration ID of an application to be created. **/
        configurationId?: String;
    }
    export interface CreateTagsRequest {
        /** A list of configuration items that you want to tag. **/
        configurationIds: ConfigurationIdList;
        /** Tags that you want to associate with one or more configuration items. Specify
the tags that you want to create in a key-value format. For example:

 {&quot;key&quot;: &quot;serverType&quot;, &quot;value&quot;: &quot;webServer&quot;} **/
        tags: TagSet;
    }
    export interface CreateTagsResponse {
    }
    export interface CustomerAgentInfo {
        /** Number of active discovery agents. **/
        activeAgents: Integer;
        /** Number of healthy discovery agents **/
        healthyAgents: Integer;
        /** Number of blacklisted discovery agents. **/
        blackListedAgents: Integer;
        /** Number of discovery agents with status SHUTDOWN. **/
        shutdownAgents: Integer;
        /** Number of unhealthy discovery agents. **/
        unhealthyAgents: Integer;
        /** Total number of discovery agents. **/
        totalAgents: Integer;
        /** Number of unknown discovery agents. **/
        unknownAgents: Integer;
    }
    export interface CustomerConnectorInfo {
        /** Number of active discovery connectors. **/
        activeConnectors: Integer;
        /** Number of healthy discovery connectors. **/
        healthyConnectors: Integer;
        /** Number of blacklisted discovery connectors. **/
        blackListedConnectors: Integer;
        /** Number of discovery connectors with status SHUTDOWN, **/
        shutdownConnectors: Integer;
        /** Number of unhealthy discovery connectors. **/
        unhealthyConnectors: Integer;
        /** Total number of discovery connectors. **/
        totalConnectors: Integer;
        /** Number of unknown discovery connectors. **/
        unknownConnectors: Integer;
    }
    export interface DeleteApplicationsRequest {
        /** Configuration ID of an application to be deleted. **/
        configurationIds: ApplicationIdsList;
    }
    export interface DeleteApplicationsResponse {
    }
    export interface DeleteTagsRequest {
        /** A list of configuration items with tags that you want to delete. **/
        configurationIds: ConfigurationIdList;
        /** Tags that you want to delete from one or more configuration items. Specify the
tags that you want to delete in a key-value format. For example:

 {&quot;key&quot;: &quot;serverType&quot;, &quot;value&quot;: &quot;webServer&quot;} **/
        tags?: TagSet;
    }
    export interface DeleteTagsResponse {
    }
    export interface DescribeAgentsRequest {
        /** The agent or the Connector IDs for which you want information. If you specify no
IDs, the system returns information about all agents/Connectors associated with
your AWS user account. **/
        agentIds?: AgentIds;
        /** You can filter the request using various logical operators and a key-value 
format. For example: 

 {&quot;key&quot;: &quot;collectionStatus&quot;, &quot;value&quot;: &quot;STARTED&quot;} 

For a complete list of filter options and guidance about using them with this
action, see Managing AWS Application Discovery Service Agents and the AWS
Application Discovery Connector
[http://docs.aws.amazon.com/application-discovery/latest/APIReference/managing-agent.html]
. **/
        filters?: Filters;
        /** The total number of agents/Connectors to return in a single page of output. The
maximum value is 100. **/
        maxResults?: Integer;
        /** Token to retrieve the next set of results. For example, if you previously
specified 100 IDs for DescribeAgentsRequest$agentIds but set 
DescribeAgentsRequest$maxResults to 10, you received a set of 10 results along
with a token. Use that token in this query to get the next set of 10. **/
        nextToken?: NextToken;
    }
    export interface DescribeAgentsResponse {
        /** Lists agents or the Connector by ID or lists all agents/Connectors associated
with your user account if you did not specify an agent/Connector ID. The output
includes agent/Connector IDs, IP addresses, media access control (MAC)
addresses, agent/Connector health, host name where the agent/Connector resides,
and the version number of each agent/Connector. **/
        agentsInfo?: AgentsInfo;
        /** Token to retrieve the next set of results. For example, if you specified 100 IDs
for DescribeAgentsRequest$agentIds but set DescribeAgentsRequest$maxResults to
10, you received a set of 10 results along with this token. Use this token in
the next query to retrieve the next set of 10. **/
        nextToken?: NextToken;
    }
    export interface DescribeConfigurationsRequest {
        /** One or more configuration IDs. **/
        configurationIds: ConfigurationIdList;
    }
    export interface DescribeConfigurationsResponse {
        /** A key in the response map. The value is an array of data. **/
        configurations?: DescribeConfigurationsAttributes;
    }
    export interface DescribeExportConfigurationsRequest {
        /** A unique identifier that you can use to query the export status. **/
        exportIds?: ExportIds;
        /** The maximum number of results that you want to display as a part of the query. **/
        maxResults?: Integer;
        /** A token to get the next set of results. For example, if you specified 100 IDs
for DescribeExportConfigurationsRequest$exportIds but set 
DescribeExportConfigurationsRequest$maxResults to 10, you will get results in a
set of 10. Use the token in the query to get the next set of 10. **/
        nextToken?: NextToken;
    }
    export interface DescribeExportConfigurationsResponse {
        /** Returns export details. When the status is complete, the response includes a URL
for an Amazon S3 bucket where you can view the data in a CSV file. **/
        exportsInfo?: ExportsInfo;
        /** A token to get the next set of results. For example, if you specified 100 IDs
for DescribeExportConfigurationsRequest$exportIds but set 
DescribeExportConfigurationsRequest$maxResults to 10, you will get results in a
set of 10. Use the token in the query to get the next set of 10. **/
        nextToken?: NextToken;
    }
    export interface DescribeTagsRequest {
        /** You can filter the list using a key-value format. You can separate these items
by using logical operators. Allowed filters include tagKey, tagValue, and 
configurationId. 

For a complete list of filter options and guidance about using them with this
action, see Managing AWS Application Discovery Service Agents and the AWS
Application Discovery Connector
[http://docs.aws.amazon.com/application-discovery/latest/APIReference/managing-agents.html]
. **/
        filters?: TagFilters;
        /** The total number of items to return in a single page of output. The maximum
value is 100. **/
        maxResults?: Integer;
        /** A token to start the list. Use this token to get the next set of results. **/
        nextToken?: NextToken;
    }
    export interface DescribeTagsResponse {
        /** Depending on the input, this is a list of configuration items tagged with a
specific tag, or a list of tags for a specific configuration item. **/
        tags?: ConfigurationTagSet;
        /** The call returns a token. Use this token to get the next set of results. **/
        nextToken?: NextToken;
    }
    export interface DisassociateConfigurationItemsFromApplicationRequest {
        /** Configuration ID of an application from which each item will be disassociated. **/
        applicationConfigurationId: ApplicationId;
        /** Configuration ID of each item be be disassociated from an application. **/
        configurationIds: ConfigurationIdList;
    }
    export interface DisassociateConfigurationItemsFromApplicationResponse {
    }
    export interface ExportConfigurationsResponse {
        /** A unique identifier that you can use to query the export status. **/
        exportId?: ConfigurationsExportId;
    }
    export interface ExportInfo {
        /** A unique identifier that you can use to query the export. **/
        exportId: ConfigurationsExportId;
        /** The status of the configuration data export. The status can succeed, fail, or be
in-progress. **/
        exportStatus: ExportStatus;
        /** Helpful status messages for API callers. For example: Too many exports in the
last 6 hours. Export in progress. Export was successful. **/
        statusMessage: ExportStatusMessage;
        /** A URL for an Amazon S3 bucket where you can review the configuration data. The
URL is displayed only if the export succeeded. **/
        configurationsDownloadUrl?: ConfigurationsDownloadUrl;
        /** The time the configuration data export was initiated. **/
        exportRequestTime: ExportRequestTime;
    }
    export interface Filter {
        /** The name of the filter. **/
        name: String;
        /** A string value that you want to filter on. For example, if you choose the 
destinationServer.osVersion filter name, you could specify Ubuntu for the value. **/
        values: FilterValues;
        /** A conditional operator. The following operators are valid: EQUALS, NOT_EQUALS,
CONTAINS, NOT_CONTAINS. If you specify multiple filters, the system utilizes all
filters as though concatenated by AND. If you specify multiple values for a
particular filter, the system differentiates the values using OR. Calling either 
DescribeConfigurations or ListConfigurations returns attributes of matching
configuration items. **/
        condition: Condition;
    }
    export interface GetDiscoverySummaryRequest {
    }
    export interface GetDiscoverySummaryResponse {
        /** Number of servers discovered. **/
        servers?: Long;
        /** Number of applications discovered. **/
        applications?: Long;
        /** Number of servers mapped to applications. **/
        serversMappedToApplications?: Long;
        /** Number of servers mapped to tags. **/
        serversMappedtoTags?: Long;
        /** Details about discovered agents, including agent status and health. **/
        agentSummary?: CustomerAgentInfo;
        /** Details about discovered connectors, including connector status and health. **/
        connectorSummary?: CustomerConnectorInfo;
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
        /** You can filter the request using various logical operators and a key-value 
format. For example: 

 {&quot;key&quot;: &quot;serverType&quot;, &quot;value&quot;: &quot;webServer&quot;} 

For a complete list of filter options and guidance about using them with this
action, see Querying Discovered Configuration Items
[http://docs.aws.amazon.com/application-discovery/latest/APIReference/querying-configuration-items.html#ListConfigurations]
. **/
        filters?: Filters;
        /** The total number of items to return. The maximum value is 100. **/
        maxResults?: Integer;
        /** Token to retrieve the next set of results. For example, if a previous call to
ListConfigurations returned 100 items, but you set 
ListConfigurationsRequest$maxResults to 10, you received a set of 10 results
along with a token. Use that token in this query to get the next set of 10. **/
        nextToken?: NextToken;
        /** Certain filter criteria return output that can be sorted in ascending or
descending order. For a list of output characteristics for each filter, see 
Querying Discovered Configuration Items
[http://docs.aws.amazon.com/application-discovery/latest/APIReference/querying-configuration-items.html#ListConfigurations]
. **/
        orderBy?: OrderByList;
    }
    export interface ListConfigurationsResponse {
        /** Returns configuration details, including the configuration ID, attribute names,
and attribute values. **/
        configurations?: Configurations;
        /** Token to retrieve the next set of results. For example, if your call to
ListConfigurations returned 100 items, but you set 
ListConfigurationsRequest$maxResults to 10, you received a set of 10 results
along with this token. Use this token in the next query to retrieve the next set
of 10. **/
        nextToken?: NextToken;
    }
    export interface ListServerNeighborsRequest {
        /** Configuration ID of the server for which neighbors are being listed. **/
        configurationId: ConfigurationId;
        /** Flag to indicate if port and protocol information is needed as part of the
response. **/
        portInformationNeeded?: Boolean;
        /** List of configuration IDs to test for one-hop-away. **/
        neighborConfigurationIds?: ConfigurationIdList;
        /** Maximum number of results to return in a single page of output. **/
        maxResults?: Integer;
        /** Token to retrieve the next set of results. For example, if you previously
specified 100 IDs for ListServerNeighborsRequest$neighborConfigurationIds but
set ListServerNeighborsRequest$maxResults to 10, you received a set of 10
results along with a token. Use that token in this query to get the next set of
10. **/
        nextToken?: String;
    }
    export interface ListServerNeighborsResponse {
        /** List of distinct servers that are one hop away from the given server. **/
        neighbors: NeighborDetailsList;
        /** Token to retrieve the next set of results. For example, if you specified 100 IDs
for ListServerNeighborsRequest$neighborConfigurationIds but set 
ListServerNeighborsRequest$maxResults to 10, you received a set of 10 results
along with this token. Use this token in the next query to retrieve the next set
of 10. **/
        nextToken?: String;
        /** Count of distinct servers that are one hop away from the given server. **/
        knownDependencyCount?: Long;
    }
    export interface NeighborConnectionDetail {
        /** ID of server that opened the network connection. **/
        sourceServerId: ConfigurationId;
        /** ID of the server that accepted the networker connection. **/
        destinationServerId: ConfigurationId;
        /** Destination network port for the connection. **/
        destinationPort?: BoxedInteger;
        /** Network protocol used for the connection. **/
        transportProtocol?: String;
        /** Number of open network connections with the neighboring server. **/
        connectionsCount: Long;
    }
    export interface OperationNotPermittedException {
        message?: Message;
    }
    export interface OrderByElement {
        /** Field to order on. **/
        fieldName: String;
        /** Ordering direction. **/
        sortOrder?: orderString;
    }
    export interface ResourceNotFoundException {
        message?: Message;
    }
    export interface ServerInternalErrorException {
        message?: Message;
    }
    export interface StartDataCollectionByAgentIdsRequest {
        /** The IDs of the agents or Connectors that you want to start collecting data. If
you send a request to an agent/Connector ID that you do not have permission to
contact, according to your AWS account, the service does not throw an exception.
Instead, it returns the error in the Description field. If you send a request to
multiple agents/Connectors and you do not have permission to contact some of
those agents/Connectors, the system does not throw an exception. Instead, the
system shows Failed in the Description field. **/
        agentIds: AgentIds;
    }
    export interface StartDataCollectionByAgentIdsResponse {
        /** Information about agents or the Connector that were instructed to start
collecting data. Information includes the agent/Connector ID, a description of
the operation performed, and whether or not the agent/Connector configuration
was updated. **/
        agentsConfigurationStatus?: AgentConfigurationStatusList;
    }
    export interface StopDataCollectionByAgentIdsRequest {
        /** The IDs of the agents or Connectors that you want to stop collecting data. **/
        agentIds: AgentIds;
    }
    export interface StopDataCollectionByAgentIdsResponse {
        /** Information about agents or the Connector that were instructed to stop
collecting data. Information includes the agent/Connector ID, a description of
the operation performed, and whether or not the agent/Connector configuration
was updated. **/
        agentsConfigurationStatus?: AgentConfigurationStatusList;
    }
    export interface Tag {
        /** A type of tag to filter on. **/
        key: TagKey;
        /** A value for a tag key to filter on. **/
        value: TagValue;
    }
    export interface TagFilter {
        /** A name of a tag filter. **/
        name: FilterName;
        /** Values of a tag filter. **/
        values: FilterValues;
    }
    export interface UpdateApplicationRequest {
        /** Configuration ID of the application to be updated. **/
        configurationId: ApplicationId;
        /** New name of the application to be updated. **/
        name?: String;
        /** New description of the application to be updated. **/
        description?: String;
    }
    export interface UpdateApplicationResponse {
    }
  }
}
