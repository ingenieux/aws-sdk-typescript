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
    * The AWS Application Discovery Service helps Systems Integrators quickly and
 reliably plan application migration projects by automatically identifying
 applications running in on-premises data centers, their associated dependencies,
 and their performance profile.
 
  Planning data center migrations can involve thousands of workloads that are
 often deeply interdependent. Application discovery and dependency mapping are
 important early first steps in the migration process, but difficult to perform
 at scale due to the lack of automated tools.
 
 The AWS Application Discovery Service automatically collects configuration and
 usage data from servers to develop a list of applications, how they perform, and
 how they are interdependent. This information is securely retained in an AWS
 Application Discovery Service database which you can export as a CSV file into
 your preferred visualization tool or cloud migration solution to help reduce the
 complexity and time in planning your cloud migration.
 
 The Application Discovery Service is currently available for preview. Only
 customers who are engaged with AWS Professional Services
 [https://aws.amazon.com/professional-services/] or a certified AWS partner can
 use the service. To see the list of certified partners and request access to the
 Application Discovery Service, complete the following preview form
 [http://aws.amazon.com/application-discovery/preview/].
 
 This API reference provides descriptions, syntax, and usage examples for each of
 the actions and data types for the Discovery Service. The topic for each action
 shows the API request parameters and the response. Alternatively, you can use
 one of the AWS SDKs to access an API that is tailored to the programming
 language or platform that you&#x27;re using. For more information, see AWS SDKs
 [http://aws.amazon.com/tools/#SDKs].
 
 This guide is intended for use with the AWS Discovery Service User Guide
 [http://docs.aws.amazon.com/application-discovery/latest/userguide/what-is-appdiscovery.html]
 .
 
 The following are short descriptions of each API action, organized by function.
 
  Managing AWS Agents Using the Application Discovery Service 
 
 An AWS agent is software that you install on on-premises servers and virtual
 machines that are targeted for discovery and migration. Agents run on Linux and
 Windows Server and collect server configuration and activity information about
 your applications and infrastructure. Specifically, agents collect the following
 information and send it to the Application Discovery Service using Secure
 Sockets Layer (SSL) encryption:
 
  &amp;#42;  User information (user name, home directory)
    
    
  *  Group information (name)
    
    
  *  List of installed packages
    
    
  *  List of kernel modules
    
    
  *  All create and stop process events
    
    
  *  DNS queries
    
    
  *  NIC information
    
    
  *  TCP/UDP process listening ports
    
    
  *  TCPV4/V6 connections
    
    
  *  Operating system information
    
    
  *  System performance
    
    
  *  Process performance
    
    
 
 The Application Discovery Service API includes the following actions to manage
 AWS agents:
 
  *   StartDataCollectionByAgentIds: Instructs the specified agents to start
    collecting data. The Application Discovery Service takes several minutes to
    receive and process data after you initiate data collection.
    
    
  *   StopDataCollectionByAgentIds: Instructs the specified agents to stop
    collecting data.
    
    
  *   DescribeAgents: Lists AWS agents by ID or lists all agents associated with
    your user account if you did not specify an agent ID. The output includes
    agent IDs, IP addresses, media access control (MAC) addresses, agent health,
    host name where the agent resides, and the version number of each agent.
    
    
 
  Querying Configuration Items 
 
 A configuration item is an IT asset that was discovered in your data center by
 an AWS agent. When you use the Application Discovery Service, you can specify
 filters and query specific configuration items. The service supports Server,
 Process, and Connection configuration items. This means you can specify a value
 for the following keys and query your IT assets:
 
  Server 
 
  *  server.HostName
    
    
  *  server.osName
    
    
  *  server.osVersion
    
    
  *  server.configurationId
    
    
  *  server.agentId
    
    
 
  Process 
 
  *  process.name
    
    
  *  process.CommandLine
    
    
  *  process.configurationId
    
    
  *  server.hostName
    
    
  *  server.osName
    
    
  *  server.osVersion
    
    
  *  server.configurationId
    
    
  *  server.agentId
    
    
 
  Connection 
 
  *  connection.sourceIp
    
    
  *  connection.sourcePort
    
    
  *  connection.destinationIp
    
    
  *  connection.destinationPort
    
    
  *  sourceProcess.configurationId
    
    
  *  sourceProcess.commandLine
    
    
  *  sourceProcess.name
    
    
  *  destinationProcessId.configurationId
    
    
  *  destinationProcess.commandLine
    
    
  *  destinationProcess.name
    
    
  *  sourceServer.configurationId
    
    
  *  sourceServer.hostName
    
    
  *  sourceServer.osName
    
    
  *  sourceServer.osVersion
    
    
  *  destinationServer.configurationId
    
    
  *  destinationServer.hostName
    
    
  *  destinationServer.osName
    
    
  *  destinationServer.osVersion
    
    
 
 The Application Discovery Service includes the following actions for querying
 configuration items. 
 
  *   DescribeConfigurations: Retrieves a list of attributes for a specific
    configuration ID. For example, the output for a server configuration item
    includes a list of attributes about the server, including host name,
    operating system, number of network cards, etc.
    
    
  *   ListConfigurations: Retrieves a list of configuration items according to the
    criteria you specify in a filter. The filter criteria identify relationship
    requirements. For example, you can specify filter criteria of process.name
    with values of nginx and apache.
    
    
 
  Tagging Discovered Configuration Items 
 
 You can tag discovered configuration items. Tags are metadata that help you
 categorize IT assets in your data center. Tags use a key-value format. For
 example, {&quot;key&quot;: &quot;serverType&quot;, &quot;value&quot;: &quot;webServer&quot;}. 
 
  *   CreateTags: Creates one or more tags for a configuration items.
    
    
  *   DescribeTags: Retrieves a list of configuration items that are tagged with a
    specific tag. Or, retrieves a list of all tags assigned to a specific
    configuration item.
    
    
  *   DeleteTags: Deletes the association between a configuration item and one or
    more tags.
    
    
 
  Exporting Data 
 
 You can export data as a CSV file to an Amazon S3 bucket or into your preferred
 visualization tool or cloud migration solution to help reduce the complexity and
 time in planning your cloud migration.
 
  *   ExportConfigurations: Exports all discovered configuration data to an Amazon
    S3 bucket. Data includes tags and tag associations, processes, connections,
    servers, and system performance. This API returns an export ID which you can
    query using the GetExportStatus API.
    
    
  *   DescribeExportConfigurations: Gets the status of the data export. When the
    export is complete, the service returns an Amazon S3 URL where you can
    download CSV files that include the data.
    *
    */
  export class Discovery extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
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
    createTags(params: Discovery.CreateTagsRequest, callback?: (err: Discovery.AuthorizationErrorException | Discovery.ResourceNotFoundException | Discovery.InvalidParameterException | Discovery.InvalidParameterValueException | Discovery.ServerInternalErrorException | any, data: Discovery.CreateTagsResponse | any) => void): Request<Discovery.CreateTagsResponse | any, Discovery.AuthorizationErrorException | Discovery.ResourceNotFoundException | Discovery.InvalidParameterException | Discovery.InvalidParameterValueException | Discovery.ServerInternalErrorException | any>;
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
    deleteTags(params: Discovery.DeleteTagsRequest, callback?: (err: Discovery.AuthorizationErrorException | Discovery.ResourceNotFoundException | Discovery.InvalidParameterException | Discovery.InvalidParameterValueException | Discovery.ServerInternalErrorException | any, data: Discovery.DeleteTagsResponse | any) => void): Request<Discovery.DeleteTagsResponse | any, Discovery.AuthorizationErrorException | Discovery.ResourceNotFoundException | Discovery.InvalidParameterException | Discovery.InvalidParameterValueException | Discovery.ServerInternalErrorException | any>;
    /**
     * Lists AWS agents by ID or lists all agents associated with your user account if
you did not specify an agent ID.
     *
     * @error AuthorizationErrorException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    describeAgents(params: Discovery.DescribeAgentsRequest, callback?: (err: Discovery.AuthorizationErrorException | Discovery.InvalidParameterException | Discovery.InvalidParameterValueException | Discovery.ServerInternalErrorException | any, data: Discovery.DescribeAgentsResponse | any) => void): Request<Discovery.DescribeAgentsResponse | any, Discovery.AuthorizationErrorException | Discovery.InvalidParameterException | Discovery.InvalidParameterValueException | Discovery.ServerInternalErrorException | any>;
    /**
     * Retrieves a list of attributes for a specific configuration ID. For example, the
output for a server configuration item includes a list of attributes about the
server, including host name, operating system, number of network cards, etc.
     *
     * @error AuthorizationErrorException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    describeConfigurations(params: Discovery.DescribeConfigurationsRequest, callback?: (err: Discovery.AuthorizationErrorException | Discovery.InvalidParameterException | Discovery.InvalidParameterValueException | Discovery.ServerInternalErrorException | any, data: Discovery.DescribeConfigurationsResponse | any) => void): Request<Discovery.DescribeConfigurationsResponse | any, Discovery.AuthorizationErrorException | Discovery.InvalidParameterException | Discovery.InvalidParameterValueException | Discovery.ServerInternalErrorException | any>;
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
    describeExportConfigurations(params: Discovery.DescribeExportConfigurationsRequest, callback?: (err: Discovery.AuthorizationErrorException | Discovery.ResourceNotFoundException | Discovery.InvalidParameterException | Discovery.InvalidParameterValueException | Discovery.ServerInternalErrorException | any, data: Discovery.DescribeExportConfigurationsResponse | any) => void): Request<Discovery.DescribeExportConfigurationsResponse | any, Discovery.AuthorizationErrorException | Discovery.ResourceNotFoundException | Discovery.InvalidParameterException | Discovery.InvalidParameterValueException | Discovery.ServerInternalErrorException | any>;
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
    describeTags(params: Discovery.DescribeTagsRequest, callback?: (err: Discovery.AuthorizationErrorException | Discovery.ResourceNotFoundException | Discovery.InvalidParameterException | Discovery.InvalidParameterValueException | Discovery.ServerInternalErrorException | any, data: Discovery.DescribeTagsResponse | any) => void): Request<Discovery.DescribeTagsResponse | any, Discovery.AuthorizationErrorException | Discovery.ResourceNotFoundException | Discovery.InvalidParameterException | Discovery.InvalidParameterValueException | Discovery.ServerInternalErrorException | any>;
    /**
     * Exports all discovered configuration data to an Amazon S3 bucket or an
application that enables you to view and evaluate the data. Data includes tags
and tag associations, processes, connections, servers, and system performance.
This API returns an export ID which you can query using the GetExportStatus API.
The system imposes a limit of two configuration exports in six hours.
     *
     * @error AuthorizationErrorException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     * @error OperationNotPermittedException   
     */
    exportConfigurations(callback?: (err: Discovery.AuthorizationErrorException | Discovery.InvalidParameterException | Discovery.InvalidParameterValueException | Discovery.ServerInternalErrorException | Discovery.OperationNotPermittedException | any, data: Discovery.ExportConfigurationsResponse | any) => void): Request<Discovery.ExportConfigurationsResponse | any, Discovery.AuthorizationErrorException | Discovery.InvalidParameterException | Discovery.InvalidParameterValueException | Discovery.ServerInternalErrorException | Discovery.OperationNotPermittedException | any>;
    /**
     * Retrieves a list of configurations items according to the criteria you specify
in a filter. The filter criteria identify relationship requirements.
     *
     * @error AuthorizationErrorException   
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    listConfigurations(params: Discovery.ListConfigurationsRequest, callback?: (err: Discovery.AuthorizationErrorException | Discovery.ResourceNotFoundException | Discovery.InvalidParameterException | Discovery.InvalidParameterValueException | Discovery.ServerInternalErrorException | any, data: Discovery.ListConfigurationsResponse | any) => void): Request<Discovery.ListConfigurationsResponse | any, Discovery.AuthorizationErrorException | Discovery.ResourceNotFoundException | Discovery.InvalidParameterException | Discovery.InvalidParameterValueException | Discovery.ServerInternalErrorException | any>;
    /**
     * Instructs the specified agents to start collecting data. Agents can reside on
host servers or virtual machines in your data center.
     *
     * @error AuthorizationErrorException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    startDataCollectionByAgentIds(params: Discovery.StartDataCollectionByAgentIdsRequest, callback?: (err: Discovery.AuthorizationErrorException | Discovery.InvalidParameterException | Discovery.InvalidParameterValueException | Discovery.ServerInternalErrorException | any, data: Discovery.StartDataCollectionByAgentIdsResponse | any) => void): Request<Discovery.StartDataCollectionByAgentIdsResponse | any, Discovery.AuthorizationErrorException | Discovery.InvalidParameterException | Discovery.InvalidParameterValueException | Discovery.ServerInternalErrorException | any>;
    /**
     * Instructs the specified agents to stop collecting data.
     *
     * @error AuthorizationErrorException   
     * @error InvalidParameterException   
     * @error InvalidParameterValueException   
     * @error ServerInternalErrorException   
     */
    stopDataCollectionByAgentIds(params: Discovery.StopDataCollectionByAgentIdsRequest, callback?: (err: Discovery.AuthorizationErrorException | Discovery.InvalidParameterException | Discovery.InvalidParameterValueException | Discovery.ServerInternalErrorException | any, data: Discovery.StopDataCollectionByAgentIdsResponse | any) => void): Request<Discovery.StopDataCollectionByAgentIdsResponse | any, Discovery.AuthorizationErrorException | Discovery.InvalidParameterException | Discovery.InvalidParameterValueException | Discovery.ServerInternalErrorException | any>;

  }

  export module Discovery {

    export type AgentConfigurationStatusList = AgentConfigurationStatus[];

    export type AgentId = string;

    export type AgentIds = AgentId[];

    export type AgentNetworkInfoList = AgentNetworkInfo[];

    export type AgentStatus = string;

    export type AgentsInfo = AgentInfo[];

    export type Boolean = boolean;

    export type Condition = string;

    export type Configuration = { [key: string]: String };

    export type ConfigurationId = string;

    export type ConfigurationIdList = ConfigurationId[];

    export type ConfigurationItemType = string;

    export type ConfigurationTagSet = ConfigurationTag[];

    export type Configurations = Configuration[];

    export type ConfigurationsDownloadUrl = string;

    export type ConfigurationsExportId = string;

    export type DescribeConfigurationsAttribute = { [key: string]: String };

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

    export type Message = string;

    export type NextToken = string;

    export type String = string;

    export type TagFilters = TagFilter[];

    export type TagKey = string;

    export type TagSet = Tag[];

    export type TagValue = string;

    export type TimeStamp = number;

    export interface AgentConfigurationStatus {
      /** The agent ID. **/
      agentId?: String;
      /** Information about the status of the StartDataCollection and StopDataCollection 
operations. The system has recorded the data collection operation. The agent
receives this command the next time it polls for a new command. **/
      operationSucceeded?: Boolean;
      /** A description of the operation performed. **/
      description?: String;
    }
    export interface AgentInfo {
      /** The agent ID. **/
      agentId?: AgentId;
      /** The name of the host where the agent resides. The host can be a server or
virtual machine. **/
      hostName?: String;
      /** Network details about the host where the agent resides. **/
      agentNetworkInfoList?: AgentNetworkInfoList;
      /** This data type is currently not valid. **/
      connectorId?: String;
      /** The agent version. **/
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
      /** The agent IDs for which you want information. If you specify no IDs, the system
returns information about all agents associated with your AWS user account. **/
      agentIds?: AgentIds;
      /** The total number of agents to return. The maximum value is 100. **/
      maxResults?: Integer;
      /** A token to start the list. Use this token to get the next set of results. **/
      nextToken?: NextToken;
    }
    export interface DescribeAgentsResponse {
      /** Lists AWS agents by ID or lists all agents associated with your user account if
you did not specify an agent ID. The output includes agent IDs, IP addresses,
media access control (MAC) addresses, agent health, host name where the agent
resides, and the version number of each agent. **/
      agentsInfo?: AgentsInfo;
      /** The call returns a token. Use this token to get the next set of results. **/
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
for DescribeConfigurationsRequest$configurationIds but set 
DescribeExportConfigurationsRequest$maxResults to 10, you will get results in a
set of 10. Use the token in the query to get the next set of 10. **/
      nextToken?: NextToken;
    }
    export interface DescribeExportConfigurationsResponse {
      /** Returns export details. When the status is complete, the response includes a URL
for an Amazon S3 bucket where you can view the data in a CSV file. **/
      exportsInfo?: ExportsInfo;
      /** A token to get the next set of results. For example, if you specified 100 IDs
for DescribeConfigurationsRequest$configurationIds but set 
DescribeExportConfigurationsRequest$maxResults to 10, you will get results in a
set of 10. Use the token in the query to get the next set of 10. **/
      nextToken?: NextToken;
    }
    export interface DescribeTagsRequest {
      /** You can filter the list using a key-value format. You can separate these items
by using logical operators. Allowed filters include tagKey, tagValue, and 
configurationId. **/
      filters?: TagFilters;
      /** The total number of items to return. The maximum value is 100. **/
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
      /** The name of the filter. The following filter names are allowed for SERVER 
configuration items.

Server 

&amp;#42;   server.hostName 
 
 
*   server.osName 
 
 
*   server.osVersion 
 
 
*   server.configurationid 
 
 
*   server.agentid 
 
 

The name of the filter. The following filter names are allowed for PROCESS 
configuration items.

Process 

*   process.configurationid 
 
 
*   process.name 
 
 
*   process.commandLine 
 
 
*   server.configurationid 
 
 
*   server.hostName 
 
 
*   server.osName 
 
 
*   server.osVersion 
 
 
*   server.agentId 
 
 

The name of the filter. The following filter names are allowed for CONNECTION 
configuration items.

Connection 

*   connection.sourceIp 
 
 
*   connection.destinationIp 
 
 
*   connection.destinationPort 
 
 
*   sourceProcess.configurationId 
 
 
*   sourceProcess.name 
 
 
*   sourceProcess.commandLine 
 
 
*   destinationProcess.configurationId 
 
 
*   destinationProcess.name 
 
 
*   destinationProcess.commandLine 
 
 
*   sourceServer.configurationId 
 
 
*   sourceServer.hostName 
 
 
*   sourceServer.osName 
 
 
*   sourceServer.osVersion 
 
 
*   sourceServer.agentId 
 
 
*   destinationServer.configurationId 
 
 
*   destinationServer.hostName 
 
 
*   destinationServer.osName 
 
 
*   destinationServer.osVersion 
 
 
*   destinationServer.agentId **/
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
    export interface InvalidParameterException {
      message?: Message;
    }
    export interface InvalidParameterValueException {
      message?: Message;
    }
    export interface ListConfigurationsRequest {
      /** A valid configuration identified by the Discovery Service. **/
      configurationType: ConfigurationItemType;
      /** You can filter the list using a key-value format. For example: 

{&quot;key&quot;: &quot;serverType&quot;, &quot;value&quot;: &quot;webServer&quot;} 

You can separate these items by using logical operators. **/
      filters?: Filters;
      /** The total number of items to return. The maximum value is 100. **/
      maxResults?: Integer;
      /** A token to start the list. Use this token to get the next set of results. **/
      nextToken?: NextToken;
    }
    export interface ListConfigurationsResponse {
      /** Returns configuration details, including the configuration ID, attribute names,
and attribute values. **/
      configurations?: Configurations;
      /** The call returns a token. Use this token to get the next set of results. **/
      nextToken?: NextToken;
    }
    export interface OperationNotPermittedException {
      message?: Message;
    }
    export interface ResourceNotFoundException {
      message?: Message;
    }
    export interface ServerInternalErrorException {
      message?: Message;
    }
    export interface StartDataCollectionByAgentIdsRequest {
      /** The IDs of the agents that you want to start collecting data. If you send a
request to an AWS agent ID that you do not have permission to contact, according
to your AWS account, the service does not throw an exception. Instead, it
returns the error in the Description field. If you send a request to multiple
agents and you do not have permission to contact some of those agents, the
system does not throw an exception. Instead, the system shows Failed in the 
Description field. **/
      agentIds: AgentIds;
    }
    export interface StartDataCollectionByAgentIdsResponse {
      /** Information about agents that were instructed to start collecting data.
Information includes the agent ID, a description of the operation performed, and
whether or not the agent configuration was updated. **/
      agentsConfigurationStatus?: AgentConfigurationStatusList;
    }
    export interface StopDataCollectionByAgentIdsRequest {
      /** The IDs of the agents that you want to stop collecting data. **/
      agentIds: AgentIds;
    }
    export interface StopDataCollectionByAgentIdsResponse {
      /** Information about agents that were instructed to stop collecting data.
Information includes the agent ID, a description of the operation performed, and
whether or not the agent configuration was updated. **/
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
  }
}
