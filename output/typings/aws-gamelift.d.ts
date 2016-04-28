// Type definitions for aws-sdk - Amazon GameLift
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2015-10-01
   * endpointPrefix: gamelift
   * serviceAbbreviation: 
   * signatureVersion: v4
   * protocol: json
   *
   * Amazon GameLift ServiceWelcome to the Amazon GameLift API Reference . Amazon GameLift is a managed
Amazon Web Services (AWS) service for developers who need a scalable,
server-based solution for multiplayer games. Amazon GameLift provides setup and
deployment of game servers, and handles infrastructure scaling and session
management. For more information about the GameLift service, including a feature
overview, getting started guide, and tutorial, see the accompanying Amazon
GameLift Developer Guide
[http://docs.aws.amazon.com/gamelift/latest/developerguide/] .

This reference describes the low-level service API for GameLift. You can call
this API directly or use the AWS SDK [https://aws.amazon.com/tools/] for your
preferred language. The AWS SDK includes a set of high-level GameLift actions
multiplayer game sessions. Alternatively, you can use the AWS command-line
interface [https://aws.amazon.com/cli/] (CLI) tool, which includes commands for
GameLift. For administrative actions, you can use the Amazon GameLift console.

Managing Game and Player Sessions Through GameLift

Call these actions from your game clients and/or services to create and manage
multiplayer game sessions.

 &amp;#42; Game sessions * CreateGameSession
    * DescribeGameSessions
    * DescribeGameSessionDetails
    * UpdateGameSession
   
   
 * Player sessions * CreatePlayerSession
    * CreatePlayerSessions
    * DescribePlayerSessions
   
   
 * Other actions: * GetGameSessionLogUrl
   
   

Setting Up Game Servers

Use these administrative actions to configure GameLift to host your game
servers. When configuring GameLift, you&#x27;ll need to (1) configure a build for
your game and provide build files, and (2) set up one or more fleets to host
game sessions.

 * Build actions: * ListBuilds
    * CreateBuild
    * DescribeBuild
    * UpdateBuild
    * DeleteBuild
    * RequestUploadCredentials
   
   
 * Fleet actions: * ListFleets
    * CreateFleet
    * Describe fleet actions: * DescribeFleetAttributes
       * DescribeFleetCapacity
       * DescribeFleetPortSettings
       * DescribeFleetUtilization
       * DescribeEC2InstanceLimits
       * DescribeFleetEvents
      
      
    * Update fleet actions: * UpdateFleetAttributes
       * UpdateFleetCapacity
       * UpdateFleetPortSettings
      
      
    * DeleteFleet
   
   
 * Alias actions: * ListAliases
    * CreateAlias
    * DescribeAlias
    * UpdateAlias
    * DeleteAlias
    * ResolveAlias
   
   
 * Scaling policy actions: * PutScalingPolicy
    * DescribeScalingPolicies
    * DeleteScalingPolicy
   *
   */
  export class GameLift extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Creates an alias for a fleet. You can use an alias to anonymize your fleet by
referencing an alias instead of a specific fleet when you create game sessions.
Amazon GameLift supports two types of routing strategies for aliases: simple and
terminal. Use a simple alias to point to an active fleet. Use a terminal alias
to display a message to incoming traffic instead of routing players to an active
fleet. This option is useful when a game server is no longer supported but you
want to provide better messaging than a standard 404 error.

To create a fleet alias, specify an alias name, routing strategy, and optional
description. If successful, a new alias record is returned, including an alias
ID, which you can reference when creating a game session. To reassign the alias
to another fleet ID, call UpdateAlias .
     *
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error ConflictException The requested operation would cause a conflict with the current state of a
service resource associated with the request. Please resolve the conflict before
retrying this request.  
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     * @error LimitExceededException The requested operation would cause the resource to exceed the allowed service
limit. Please resolve the issue before retrying.  
     */
    createAlias(params: GameLift.CreateAliasInput, callback?: (err: GameLift.UnauthorizedException|GameLift.InvalidRequestException|GameLift.ConflictException|GameLift.InternalServiceException|GameLift.LimitExceededException|any, data: GameLift.CreateAliasOutput|any) => void): Request;
    /**
     * Initializes a new build record and generates information required to upload a
game build to Amazon GameLift. Once the build record has been created and is in
an INITIALIZED state, you can upload your game build.

To create a build, use the CLI command upload-build , which creates a new build
record and uploads the build files in one step. (See the Amazon GameLift
Developer Guide [http://docs.aws.amazon.com/gamelift/latest/developerguide/] for
more details on the CLI and the upload process.) Call the CreateBuild action
only if you have your own Amazon Simple Storage Service (Amazon S3) client and
need to manually upload your build files.

To create a new build, optionally specify a build name and version. This
metadata is stored with other properties in the build record and is displayed in
the GameLift console (but not visible to players). If successful, this action
returns the newly created build record along with an Amazon S3 storage location
and AWS account credentials. Use the location and credentials to upload your
game build.
     *
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error ConflictException The requested operation would cause a conflict with the current state of a
service resource associated with the request. Please resolve the conflict before
retrying this request.  
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     */
    createBuild(params: GameLift.CreateBuildInput, callback?: (err: GameLift.UnauthorizedException|GameLift.InvalidRequestException|GameLift.ConflictException|GameLift.InternalServiceException|any, data: GameLift.CreateBuildOutput|any) => void): Request;
    /**
     * Creates a new fleet to host game servers. A fleet consists of a set of Amazon
Elastic Compute Cloud (Amazon EC2) instances of a certain type, which defines
the CPU, memory, storage, and networking capacity of each host in the fleet. See 
Amazon EC2 Instance Types [https://aws.amazon.com/ec2/instance-types/] for more
information. Each instance in the fleet hosts a game server created from the
specified game build. Once a fleet is in an ACTIVE state, it can begin hosting
game sessions.

To create a new fleet, provide a name and the EC2 instance type for the new
fleet, and specify the build and server launch path. Builds must be in a READY
state before they can be used to build fleets. When configuring the new fleet,
you can optionally (1) provide a set of launch parameters to be passed to a game
server when activated; (2) limit incoming traffic to a specified range of IP
addresses and port numbers; (3) set game session protection for all instances in
the fleet, and (4) configure Amazon GameLift to store game session logs by
specifying the path to the logs stored in your game server files. If the call is
successful, Amazon GameLift performs the following tasks:

 &amp;#42; Creates a fleet record and sets the state to NEW.
 * Sets the fleet&#x27;s capacity to 1 &quot;desired&quot; and 1 &quot;active&quot; EC2 instance count.
 * Creates an EC2 instance and begins the process of initializing the fleet and
   activating a game server on the instance.
 * Begins writing events to the fleet event log, which can be accessed in the
   GameLift console.

Once a fleet is created, use the following actions to change certain fleet
properties (server launch parameters and log paths cannot be changed):

 * UpdateFleetAttributes -- Update fleet metadata, including name and
   description.
 * UpdateFleetCapacity -- Increase or decrease the number of instances you want
   the fleet to maintain.
 * UpdateFleetPortSettings -- Change the IP addresses and ports that allow
   access to incoming traffic.
     *
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     * @error ConflictException The requested operation would cause a conflict with the current state of a
service resource associated with the request. Please resolve the conflict before
retrying this request.  
     * @error LimitExceededException The requested operation would cause the resource to exceed the allowed service
limit. Please resolve the issue before retrying.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     */
    createFleet(params: GameLift.CreateFleetInput, callback?: (err: GameLift.InternalServiceException|GameLift.NotFoundException|GameLift.ConflictException|GameLift.LimitExceededException|GameLift.InvalidRequestException|GameLift.UnauthorizedException|any, data: GameLift.CreateFleetOutput|any) => void): Request;
    /**
     * Creates a multiplayer game session for players. This action creates a game
session record and assigns the new session to an instance in the specified
fleet, which activates the server initialization process in your game server. A
fleet must be in an ACTIVE state before a game session can be created for it.

To create a game session, specify either a fleet ID or an alias ID and indicate
the maximum number of players the game session allows. You can also provide a
name and a set of properties for your game (optional). If successful, a 
GameSession object is returned containing session properties, including an IP
address. By default, newly created game sessions are set to accept adding any
new players to the game session. Use UpdateGameSession to change the creation
policy.
     *
     * @error ConflictException The requested operation would cause a conflict with the current state of a
service resource associated with the request. Please resolve the conflict before
retrying this request.  
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     * @error InvalidFleetStatusException The requested operation would cause a conflict with the current state of a
resource associated with the request and/or the fleet. Please resolve the
conflict before retrying.  
     * @error TerminalRoutingStrategyException The service is unable to resolve the routing for a particular alias because it
has a terminal RoutingStrategy associated with it. The message returned in this
exception is the message defined in the TerminalRoutingStrategy itself. Such
requests should only be retried if the routing strategy for the specified alias
is modified.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     * @error FleetCapacityExceededException The specified fleet has no available instances to fulfill a request to create a
new game session. Such requests should only be retried once the fleet capacity
has been increased.  
     */
    createGameSession(params: GameLift.CreateGameSessionInput, callback?: (err: GameLift.ConflictException|GameLift.InternalServiceException|GameLift.UnauthorizedException|GameLift.InvalidFleetStatusException|GameLift.TerminalRoutingStrategyException|GameLift.InvalidRequestException|GameLift.NotFoundException|GameLift.FleetCapacityExceededException|any, data: GameLift.CreateGameSessionOutput|any) => void): Request;
    /**
     * Adds a player to a game session and creates a player session record. A game
session must be in an ACTIVE state, have a creation policy of ALLOW_ALL, and
have an open player slot before players can be added to the session.

To create a player session, specify a game session ID and player ID. If
successful, the player is added to the game session and a new PlayerSession 
object is returned.
     *
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     * @error InvalidGameSessionStatusException The requested operation would cause a conflict with the current state of a
resource associated with the request and/or the game instance. Such requests
should not be retried by clients without resolving the conflict.  
     * @error GameSessionFullException The game instance is currently full and cannot allow the requested player(s) to
join. This exception occurs in response to a CreatePlayerSession request.  
     * @error TerminalRoutingStrategyException The service is unable to resolve the routing for a particular alias because it
has a terminal RoutingStrategy associated with it. The message returned in this
exception is the message defined in the TerminalRoutingStrategy itself. Such
requests should only be retried if the routing strategy for the specified alias
is modified.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     */
    createPlayerSession(params: GameLift.CreatePlayerSessionInput, callback?: (err: GameLift.InternalServiceException|GameLift.UnauthorizedException|GameLift.InvalidGameSessionStatusException|GameLift.GameSessionFullException|GameLift.TerminalRoutingStrategyException|GameLift.InvalidRequestException|GameLift.NotFoundException|any, data: GameLift.CreatePlayerSessionOutput|any) => void): Request;
    /**
     * Adds a group of players to a game session. Similar to CreatePlayerSession , this
action allows you to add multiple players in a single call, which is useful for
games that provide party and/or matchmaking features. A game session must be in
an ACTIVE state, have a creation policy of ALLOW_ALL, and have an open player
slot before players can be added to the session.

To create player sessions, specify a game session ID and a list of player IDs.
If successful, the players are added to the game session and a set of new 
PlayerSession objects is returned.
     *
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     * @error InvalidGameSessionStatusException The requested operation would cause a conflict with the current state of a
resource associated with the request and/or the game instance. Such requests
should not be retried by clients without resolving the conflict.  
     * @error GameSessionFullException The game instance is currently full and cannot allow the requested player(s) to
join. This exception occurs in response to a CreatePlayerSession request.  
     * @error TerminalRoutingStrategyException The service is unable to resolve the routing for a particular alias because it
has a terminal RoutingStrategy associated with it. The message returned in this
exception is the message defined in the TerminalRoutingStrategy itself. Such
requests should only be retried if the routing strategy for the specified alias
is modified.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     */
    createPlayerSessions(params: GameLift.CreatePlayerSessionsInput, callback?: (err: GameLift.InternalServiceException|GameLift.UnauthorizedException|GameLift.InvalidGameSessionStatusException|GameLift.GameSessionFullException|GameLift.TerminalRoutingStrategyException|GameLift.InvalidRequestException|GameLift.NotFoundException|any, data: GameLift.CreatePlayerSessionsOutput|any) => void): Request;
    /**
     * Deletes an alias. This action removes all record of the alias; game clients
attempting to access a game server using the deleted alias receive an error. To
delete an alias, specify the alias ID to be deleted.
     *
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     */
    deleteAlias(params: GameLift.DeleteAliasInput, callback?: (err: GameLift.UnauthorizedException|GameLift.NotFoundException|GameLift.InvalidRequestException|GameLift.InternalServiceException|any, data: any) => void): Request;
    /**
     * Deletes a build. This action permanently deletes the build record and any
uploaded build files.

To delete a build, specify its ID. Deleting a build does not affect the status
of any active fleets, but you can no longer create new fleets for the deleted
build.
     *
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     */
    deleteBuild(params: GameLift.DeleteBuildInput, callback?: (err: GameLift.UnauthorizedException|GameLift.NotFoundException|GameLift.InternalServiceException|GameLift.InvalidRequestException|any, data: any) => void): Request;
    /**
     * Deletes everything related to a fleet. Before deleting a fleet, you must set the
fleet&#x27;s desired capacity to zero. See UpdateFleetCapacity .

This action removes the fleet&#x27;s resources and the fleet record. Once a fleet is
deleted, you can no longer use that fleet.
     *
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     * @error InvalidFleetStatusException The requested operation would cause a conflict with the current state of a
resource associated with the request and/or the fleet. Please resolve the
conflict before retrying.  
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error InvalidFleetStatusException The requested operation would cause a conflict with the current state of a
resource associated with the request and/or the fleet. Please resolve the
conflict before retrying.  
     */
    deleteFleet(params: GameLift.DeleteFleetInput, callback?: (err: GameLift.NotFoundException|GameLift.InternalServiceException|GameLift.InvalidFleetStatusException|GameLift.UnauthorizedException|GameLift.InvalidRequestException|GameLift.InvalidFleetStatusException|any, data: any) => void): Request;
    /**
     * Deletes a fleet scaling policy. This action means that the policy is no longer
in force and removes all record of it. To delete a scaling policy, specify both
the scaling policy name and the fleet ID it is associated with.
     *
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     */
    deleteScalingPolicy(params: GameLift.DeleteScalingPolicyInput, callback?: (err: GameLift.InternalServiceException|GameLift.InvalidRequestException|GameLift.UnauthorizedException|GameLift.NotFoundException|any, data: any) => void): Request;
    /**
     * Retrieves properties for a specified alias. To get the alias, specify an alias
ID. If successful, an Alias object is returned.
     *
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     */
    describeAlias(params: GameLift.DescribeAliasInput, callback?: (err: GameLift.UnauthorizedException|GameLift.InvalidRequestException|GameLift.NotFoundException|GameLift.InternalServiceException|any, data: GameLift.DescribeAliasOutput|any) => void): Request;
    /**
     * Retrieves properties for a build. To get a build record, specify a build ID. If
successful, an object containing the build properties is returned.
     *
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     */
    describeBuild(params: GameLift.DescribeBuildInput, callback?: (err: GameLift.UnauthorizedException|GameLift.InvalidRequestException|GameLift.NotFoundException|GameLift.InternalServiceException|any, data: GameLift.DescribeBuildOutput|any) => void): Request;
    /**
     * Retrieves the following information for the specified EC2 instance type:

 &amp;#42; maximum number of instances allowed per AWS account (service limit)
 * current usage level for the AWS account

Service limits vary depending on region. Available regions for GameLift can be
found in the AWS Management Console for GameLift (see the drop-down list in the
upper right corner).
     *
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     */
    describeEC2InstanceLimits(params: GameLift.DescribeEC2InstanceLimitsInput, callback?: (err: GameLift.InvalidRequestException|GameLift.InternalServiceException|GameLift.UnauthorizedException|any, data: GameLift.DescribeEC2InstanceLimitsOutput|any) => void): Request;
    /**
     * Retrieves fleet properties, including metadata, status, and configuration, for
one or more fleets. You can request attributes for all fleets, or specify a list
of one or more fleet IDs. When requesting all fleets, use the pagination
parameters to retrieve results as a set of sequential pages. If successful, a 
FleetAttributes object is returned for each requested fleet ID. When specifying
a list of fleet IDs, attribute objects are returned only for fleets that
currently exist.

Some API actions may limit the number of fleet IDs allowed in one request. If a
request exceeds this limit, the request fails and the error message includes the
maximum allowed.
     *
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     */
    describeFleetAttributes(params: GameLift.DescribeFleetAttributesInput, callback?: (err: GameLift.InternalServiceException|GameLift.NotFoundException|GameLift.InvalidRequestException|GameLift.UnauthorizedException|any, data: GameLift.DescribeFleetAttributesOutput|any) => void): Request;
    /**
     * Retrieves the current status of fleet capacity for one or more fleets. This
information includes the number of instances that have been requested for the
fleet and the number currently active. You can request capacity for all fleets,
or specify a list of one or more fleet IDs. When requesting all fleets, use the
pagination parameters to retrieve results as a set of sequential pages. If
successful, a FleetCapacity object is returned for each requested fleet ID. When
specifying a list of fleet IDs, attribute objects are returned only for fleets
that currently exist.

Some API actions may limit the number of fleet IDs allowed in one request. If a
request exceeds this limit, the request fails and the error message includes the
maximum allowed.
     *
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     */
    describeFleetCapacity(params: GameLift.DescribeFleetCapacityInput, callback?: (err: GameLift.InternalServiceException|GameLift.NotFoundException|GameLift.InvalidRequestException|GameLift.UnauthorizedException|any, data: GameLift.DescribeFleetCapacityOutput|any) => void): Request;
    /**
     * Retrieves entries from the fleet event log. You can specify a time range to
limit the result set. Use the pagination parameters to retrieve results as a set
of sequential pages. If successful, a collection of event log entries matching
the request are returned.
     *
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     */
    describeFleetEvents(params: GameLift.DescribeFleetEventsInput, callback?: (err: GameLift.NotFoundException|GameLift.InternalServiceException|GameLift.UnauthorizedException|GameLift.InvalidRequestException|any, data: GameLift.DescribeFleetEventsOutput|any) => void): Request;
    /**
     * Retrieves the port settings for a fleet. Port settings are used to limit
incoming traffic access to game servers in the fleet. To get a fleet&#x27;s port
settings, specify a fleet ID. If successful, an IpPermission object is returned
for the requested fleet ID. If the requested fleet has been deleted, the result
set will be empty.
     *
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     */
    describeFleetPortSettings(params: GameLift.DescribeFleetPortSettingsInput, callback?: (err: GameLift.InternalServiceException|GameLift.NotFoundException|GameLift.InvalidRequestException|GameLift.UnauthorizedException|any, data: GameLift.DescribeFleetPortSettingsOutput|any) => void): Request;
    /**
     * Retrieves utilization statistics for one or more fleets. You can request
utilization data for all fleets, or specify a list of one or more fleet IDs.
When requesting all fleets, use the pagination parameters to retrieve results as
a set of sequential pages. If successful, a FleetUtilization object is returned
for each requested fleet ID. When specifying a list of fleet IDs, utilization
objects are returned only for fleets that currently exist.

Some API actions may limit the number of fleet IDs allowed in one request. If a
request exceeds this limit, the request fails and the error message includes the
maximum allowed.
     *
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     */
    describeFleetUtilization(params: GameLift.DescribeFleetUtilizationInput, callback?: (err: GameLift.InternalServiceException|GameLift.NotFoundException|GameLift.InvalidRequestException|GameLift.UnauthorizedException|any, data: GameLift.DescribeFleetUtilizationOutput|any) => void): Request;
    /**
     * Retrieves properties, including the protection policy in force, for one or more
game sessions. This action can be used in several ways: (1) provide a 
GameSessionId to request details for a specific game session; (2) provide either
a FleetId or an AliasId to request properties for all game sessions running on a
fleet.

To get game session record(s), specify just one of the following: game session
ID, fleet ID, or alias ID. You can filter this request by game session status.
Use the pagination parameters to retrieve results as a set of sequential pages.
If successful, a GameSessionDetail object is returned for each session matching
the request.
     *
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     * @error TerminalRoutingStrategyException The service is unable to resolve the routing for a particular alias because it
has a terminal RoutingStrategy associated with it. The message returned in this
exception is the message defined in the TerminalRoutingStrategy itself. Such
requests should only be retried if the routing strategy for the specified alias
is modified.  
     */
    describeGameSessionDetails(params: GameLift.DescribeGameSessionDetailsInput, callback?: (err: GameLift.InternalServiceException|GameLift.NotFoundException|GameLift.InvalidRequestException|GameLift.UnauthorizedException|GameLift.TerminalRoutingStrategyException|any, data: GameLift.DescribeGameSessionDetailsOutput|any) => void): Request;
    /**
     * Retrieves properties for one or more game sessions. This action can be used in
several ways: (1) provide a GameSessionId to request properties for a specific
game session; (2) provide a FleetId or an AliasId to request properties for all
game sessions running on a fleet.

To get game session record(s), specify just one of the following: game session
ID, fleet ID, or alias ID. You can filter this request by game session status.
Use the pagination parameters to retrieve results as a set of sequential pages.
If successful, a GameSession object is returned for each session matching the
request.
     *
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     * @error TerminalRoutingStrategyException The service is unable to resolve the routing for a particular alias because it
has a terminal RoutingStrategy associated with it. The message returned in this
exception is the message defined in the TerminalRoutingStrategy itself. Such
requests should only be retried if the routing strategy for the specified alias
is modified.  
     */
    describeGameSessions(params: GameLift.DescribeGameSessionsInput, callback?: (err: GameLift.InternalServiceException|GameLift.NotFoundException|GameLift.InvalidRequestException|GameLift.UnauthorizedException|GameLift.TerminalRoutingStrategyException|any, data: GameLift.DescribeGameSessionsOutput|any) => void): Request;
    /**
     * Retrieves properties for one or more player sessions. This action can be used in
several ways: (1) provide a PlayerSessionId parameter to request properties for
a specific player session; (2) provide a GameSessionId parameter to request
properties for all player sessions in the specified game session; (3) provide a 
PlayerId parameter to request properties for all player sessions of a specified
player.

To get game session record(s), specify only one of the following: a player
session ID, a game session ID, or a player ID. You can filter this request by
player session status. Use the pagination parameters to retrieve results as a
set of sequential pages. If successful, a PlayerSession object is returned for
each session matching the request.
     *
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     */
    describePlayerSessions(params: GameLift.DescribePlayerSessionsInput, callback?: (err: GameLift.InternalServiceException|GameLift.NotFoundException|GameLift.InvalidRequestException|GameLift.UnauthorizedException|any, data: GameLift.DescribePlayerSessionsOutput|any) => void): Request;
    /**
     * Retrieves all scaling policies applied to a fleet.

To get a fleet&#x27;s scaling policies, specify the fleet ID. You can filter this
request by policy status, such as to retrieve only active scaling policies. Use
the pagination parameters to retrieve results as a set of sequential pages. If
successful, set of ScalingPolicy objects is returned for the fleet.
     *
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     */
    describeScalingPolicies(params: GameLift.DescribeScalingPoliciesInput, callback?: (err: GameLift.InternalServiceException|GameLift.InvalidRequestException|GameLift.UnauthorizedException|GameLift.NotFoundException|any, data: GameLift.DescribeScalingPoliciesOutput|any) => void): Request;
    /**
     * Retrieves the location of stored game session logs for a specified game session.
When a game session is terminated, Amazon GameLift automatically stores the logs
in Amazon S3. Use this URL to download the logs.

See the AWS Service Limits
[http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_gamelift] 
page for maximum log file sizes. Log files that exceed this limit are not saved.
     *
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     */
    getGameSessionLogUrl(params: GameLift.GetGameSessionLogUrlInput, callback?: (err: GameLift.InternalServiceException|GameLift.NotFoundException|GameLift.UnauthorizedException|GameLift.InvalidRequestException|any, data: GameLift.GetGameSessionLogUrlOutput|any) => void): Request;
    /**
     * Retrieves a collection of alias records for this AWS account. You can filter the
result set by alias name and/or routing strategy type. Use the pagination
parameters to retrieve results in sequential pages.

Aliases are not listed in any particular order.
     *
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     */
    listAliases(params: GameLift.ListAliasesInput, callback?: (err: GameLift.UnauthorizedException|GameLift.InvalidRequestException|GameLift.InternalServiceException|any, data: GameLift.ListAliasesOutput|any) => void): Request;
    /**
     * Retrieves build records for all builds associated with an AWS account. You can
filter the result set by build status. Use the pagination parameters to retrieve
results in a set of sequential pages.

Build records are not listed in any particular order.
     *
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     */
    listBuilds(params: GameLift.ListBuildsInput, callback?: (err: GameLift.UnauthorizedException|GameLift.InvalidRequestException|GameLift.InternalServiceException|any, data: GameLift.ListBuildsOutput|any) => void): Request;
    /**
     * Retrieves a collection of fleet records for this AWS account. You can filter the
result set by build ID. Use the pagination parameters to retrieve results in
sequential pages.

Fleet records are not listed in any particular order.
     *
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     */
    listFleets(params: GameLift.ListFleetsInput, callback?: (err: GameLift.InternalServiceException|GameLift.NotFoundException|GameLift.InvalidRequestException|GameLift.UnauthorizedException|any, data: GameLift.ListFleetsOutput|any) => void): Request;
    /**
     * Creates or updates a scaling policy for a fleet. An active scaling policy
prompts GameLift to track a certain metric for a fleet and automatically change
the fleet&#x27;s capacity in specific circumstances. Each scaling policy contains one
rule statement. Fleets can have multiple scaling policies in force
simultaneously.

A scaling policy rule statement has the following structure:

If [MetricName] is [ComparisonOperator] [Threshold] for [EvaluationPeriods] 
minutes, then [ScalingAdjustmentType] to/by [ScalingAdjustment] .

For example, this policy: &quot;If the number of idle instances exceeds 20 for more
than 15 minutes, then reduce the fleet capacity by 10 instances&quot; could be
implemented as the following rule statement:

If [IdleInstances] is [GreaterThanOrEqualToThreshold] [20] for [15] minutes,
then [ChangeInCapacity] by [-10].

To create or update a scaling policy, specify a unique combination of name and
fleet ID, and set the rule values. All parameters for this action are required.
If successful, the policy name is returned. Scaling policies cannot be suspended
or made inactive. To stop enforcing a scaling policy, call DeleteScalingPolicy .
     *
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     */
    putScalingPolicy(params: GameLift.PutScalingPolicyInput, callback?: (err: GameLift.InternalServiceException|GameLift.InvalidRequestException|GameLift.UnauthorizedException|GameLift.NotFoundException|any, data: GameLift.PutScalingPolicyOutput|any) => void): Request;
    /**
     * Retrieves a fresh set of upload credentials and the assigned Amazon S3 storage
location for a specific build. Valid credentials are required to upload your
game build files to Amazon S3.

Call this action only if you need credentials for a build created with 
CreateBuild . This is a rare situation; in most cases, builds are created using
the CLI command upload-build , which creates a build record and also uploads
build files.

Upload credentials are returned when you create the build, but they have a
limited lifespan. You can get fresh credentials and use them to re-upload game
files until the state of that build changes to READY. Once this happens, you
must create a brand new build.
     *
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     */
    requestUploadCredentials(params: GameLift.RequestUploadCredentialsInput, callback?: (err: GameLift.UnauthorizedException|GameLift.InvalidRequestException|GameLift.NotFoundException|GameLift.InternalServiceException|any, data: GameLift.RequestUploadCredentialsOutput|any) => void): Request;
    /**
     * Retrieves the fleet ID that a specified alias is currently pointing to.
     *
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     * @error TerminalRoutingStrategyException The service is unable to resolve the routing for a particular alias because it
has a terminal RoutingStrategy associated with it. The message returned in this
exception is the message defined in the TerminalRoutingStrategy itself. Such
requests should only be retried if the routing strategy for the specified alias
is modified.  
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     */
    resolveAlias(params: GameLift.ResolveAliasInput, callback?: (err: GameLift.UnauthorizedException|GameLift.InvalidRequestException|GameLift.NotFoundException|GameLift.TerminalRoutingStrategyException|GameLift.InternalServiceException|any, data: GameLift.ResolveAliasOutput|any) => void): Request;
    /**
     * Updates properties for an alias. To update properties, specify the alias ID to
be updated and provide the information to be changed. To reassign an alias to
another fleet, provide an updated routing strategy. If successful, the updated
alias record is returned.
     *
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     */
    updateAlias(params: GameLift.UpdateAliasInput, callback?: (err: GameLift.UnauthorizedException|GameLift.InvalidRequestException|GameLift.NotFoundException|GameLift.InternalServiceException|any, data: GameLift.UpdateAliasOutput|any) => void): Request;
    /**
     * Updates metadata in a build record, including the build name and version. To
update the metadata, specify the build ID to update and provide the new values.
If successful, a build object containing the updated metadata is returned.
     *
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     */
    updateBuild(params: GameLift.UpdateBuildInput, callback?: (err: GameLift.UnauthorizedException|GameLift.InvalidRequestException|GameLift.NotFoundException|GameLift.InternalServiceException|any, data: GameLift.UpdateBuildOutput|any) => void): Request;
    /**
     * Updates fleet properties, including name and description, for a fleet. To update
metadata, specify the fleet ID and the property values you want to change. If
successful, the fleet ID for the updated fleet is returned.
     *
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     * @error ConflictException The requested operation would cause a conflict with the current state of a
service resource associated with the request. Please resolve the conflict before
retrying this request.  
     * @error InvalidFleetStatusException The requested operation would cause a conflict with the current state of a
resource associated with the request and/or the fleet. Please resolve the
conflict before retrying.  
     * @error LimitExceededException The requested operation would cause the resource to exceed the allowed service
limit. Please resolve the issue before retrying.  
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     */
    updateFleetAttributes(params: GameLift.UpdateFleetAttributesInput, callback?: (err: GameLift.NotFoundException|GameLift.ConflictException|GameLift.InvalidFleetStatusException|GameLift.LimitExceededException|GameLift.InternalServiceException|GameLift.InvalidRequestException|GameLift.UnauthorizedException|any, data: GameLift.UpdateFleetAttributesOutput|any) => void): Request;
    /**
     * Updates capacity settings for a fleet. Use this action to specify the number of
EC2 instances (hosts) you want this fleet to contain. Before calling this
action, you may want to call DescribeEC2InstanceLimits to get the maximum
capacity based on the fleet&#x27;s EC2 instance type.

If you&#x27;re using auto-scaling (see PutScalingPolicy ), you may want to specify a
minimum and/or maximum capacity. If you don&#x27;t provide these boundaries,
auto-scaling can set capacity anywhere between zero and the service limits
[http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_gamelift] 
.

To update fleet capacity, specify the fleet ID and the desired number of
instances. If successful, Amazon GameLift starts or terminates instances so that
the fleet&#x27;s active instance count matches the desired instance count. You can
view a fleet&#x27;s current capacity information by calling DescribeFleetCapacity .
If the desired instance count is higher than the instance type&#x27;s limit, the
&quot;Limit Exceeded&quot; exception will occur.
     *
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     * @error ConflictException The requested operation would cause a conflict with the current state of a
service resource associated with the request. Please resolve the conflict before
retrying this request.  
     * @error LimitExceededException The requested operation would cause the resource to exceed the allowed service
limit. Please resolve the issue before retrying.  
     * @error InvalidFleetStatusException The requested operation would cause a conflict with the current state of a
resource associated with the request and/or the fleet. Please resolve the
conflict before retrying.  
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     */
    updateFleetCapacity(params: GameLift.UpdateFleetCapacityInput, callback?: (err: GameLift.NotFoundException|GameLift.ConflictException|GameLift.LimitExceededException|GameLift.InvalidFleetStatusException|GameLift.InternalServiceException|GameLift.InvalidRequestException|GameLift.UnauthorizedException|any, data: GameLift.UpdateFleetCapacityOutput|any) => void): Request;
    /**
     * Updates port settings for a fleet. To update settings, specify the fleet ID to
be updated and list the permissions you want to update. List the permissions you
want to add in InboundPermissionAuthorizations , and permissions you want to
remove in InboundPermissionRevocations . Permissions to be removed must match
existing fleet permissions. If successful, the fleet ID for the updated fleet is
returned.
     *
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     * @error ConflictException The requested operation would cause a conflict with the current state of a
service resource associated with the request. Please resolve the conflict before
retrying this request.  
     * @error InvalidFleetStatusException The requested operation would cause a conflict with the current state of a
resource associated with the request and/or the fleet. Please resolve the
conflict before retrying.  
     * @error LimitExceededException The requested operation would cause the resource to exceed the allowed service
limit. Please resolve the issue before retrying.  
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     */
    updateFleetPortSettings(params: GameLift.UpdateFleetPortSettingsInput, callback?: (err: GameLift.NotFoundException|GameLift.ConflictException|GameLift.InvalidFleetStatusException|GameLift.LimitExceededException|GameLift.InternalServiceException|GameLift.InvalidRequestException|GameLift.UnauthorizedException|any, data: GameLift.UpdateFleetPortSettingsOutput|any) => void): Request;
    /**
     * Updates game session properties. This includes the session name, maximum player
count, protection policy, which controls whether or not an active game session
can be terminated during a scale-down event, and the player session creation
policy, which controls whether or not new players can join the session. To
update a game session, specify the game session ID and the values you want to
change. If successful, an updated GameSession object is returned.
     *
     * @error NotFoundException A service resource associated with the request could not be found. Such requests
should not be retried by clients.  
     * @error ConflictException The requested operation would cause a conflict with the current state of a
service resource associated with the request. Please resolve the conflict before
retrying this request.  
     * @error InternalServiceException The service encountered an unrecoverable internal failure while processing the
request. Such requests can be retried by clients, either immediately or after a
back-off period.  
     * @error UnauthorizedException The client failed authentication. Such requests should not be retried without
valid authentication credentials.  
     * @error InvalidGameSessionStatusException The requested operation would cause a conflict with the current state of a
resource associated with the request and/or the game instance. Such requests
should not be retried by clients without resolving the conflict.  
     * @error InvalidRequestException One or more parameters specified as part of the request are invalid. Please
correct the invalid parameters before retrying.  
     */
    updateGameSession(params: GameLift.UpdateGameSessionInput, callback?: (err: GameLift.NotFoundException|GameLift.ConflictException|GameLift.InternalServiceException|GameLift.UnauthorizedException|GameLift.InvalidGameSessionStatusException|GameLift.InvalidRequestException|any, data: GameLift.UpdateGameSessionOutput|any) => void): Request;

  }

  export module GameLift {
    
    export type AliasId = string;
    
    export type AliasList = Alias[];
    
    export type BuildId = string;
    
    export type BuildList = Build[];
    
    export type BuildStatus = string;
    
    export type ComparisonOperatorType = string;
    
    export type Double = number;
    
    export type EC2InstanceLimitList = EC2InstanceLimit[];
    
    export type EC2InstanceType = string;
    
    export type EventCode = string;
    
    export type EventList = Event[];
    
    export type FleetAttributesList = FleetAttributes[];
    
    export type FleetCapacityList = FleetCapacity[];
    
    export type FleetId = string;
    
    export type FleetIdList = FleetId[];
    
    export type FleetStatus = string;
    
    export type FleetUtilizationList = FleetUtilization[];
    
    export type FreeText = string;
    
    export type GamePropertyKey = string;
    
    export type GamePropertyList = GameProperty[];
    
    export type GamePropertyValue = string;
    
    export type GameSessionDetailList = GameSessionDetail[];
    
    export type GameSessionId = string;
    
    export type GameSessionList = GameSession[];
    
    export type GameSessionStatus = string;
    
    export type Integer = number;
    
    export type IpAddress = string;
    
    export type IpPermissionsList = IpPermission[];
    
    export type IpProtocol = string;
    
    export type MetricName = string;
    
    export type NonBlankString = string;
    
    export type NonEmptyString = string;
    
    export type NonZeroAndMaxString = string;
    
    export type PlayerIdList = NonZeroAndMaxString[];
    
    export type PlayerSessionCreationPolicy = string;
    
    export type PlayerSessionId = string;
    
    export type PlayerSessionList = PlayerSession[];
    
    export type PlayerSessionStatus = string;
    
    export type PortNumber = number;
    
    export type PositiveInteger = number;
    
    export type PositiveLong = number;
    
    export type ProtectionPolicy = string;
    
    export type RoutingStrategyType = string;
    
    export type ScalingAdjustmentType = string;
    
    export type ScalingPolicyList = ScalingPolicy[];
    
    export type ScalingStatusType = string;
    
    export type StringList = NonZeroAndMaxString[];
    
    export type Timestamp = number;
    
    export type WholeNumber = number;

    export interface Alias {
        /** Unique identifier for a fleet alias. **/
        AliasId?: AliasId;
        /** Descriptive label associated with this alias. Alias names do not need to be
unique. **/
        Name?: FreeText;
        /** Human-readable description of the alias. **/
        Description?: FreeText;
        RoutingStrategy?: RoutingStrategy;
        /** Time stamp indicating when this object was created. Format is an integer
representing the number of seconds since the Unix epoch (Unix time). **/
        CreationTime?: Timestamp;
        /** Time stamp indicating when this object was last modified. Format is an integer
representing the number of seconds since the Unix epoch (Unix time). **/
        LastUpdatedTime?: Timestamp;
    }
    export interface AwsCredentials {
        /** Access key for an AWS account. **/
        AccessKeyId?: NonEmptyString;
        /** Secret key for an AWS account. **/
        SecretAccessKey?: NonEmptyString;
        /** Token specific to a build ID. **/
        SessionToken?: NonEmptyString;
    }
    export interface Build {
        /** Unique identifier for a build. **/
        BuildId?: BuildId;
        /** Descriptive label associated with this build. Build names do not need to be
unique. It can be set using CreateBuild or UpdateBuild . **/
        Name?: FreeText;
        /** Version associated with this build. Version strings do not need to be unique to
a build. This value can be set using CreateBuild or UpdateBuild . **/
        Version?: FreeText;
        /** Current status of the build. Possible build states include: &amp;#42; INITIALIZED: A new
   build has been defined, but no files have been uploaded. You cannot create
   fleets for builds that are in this state. When a build is successfully
   created, the build state is set to this value.
 * READY: The game
   build has been successfully uploaded. You can now create new fleets for this
   build.
 * FAILED: The game
   build upload failed. You cannot create new fleets for this build. **/
        Status?: BuildStatus;
        /** File size of the uploaded game build, expressed in bytes. When the build state
is INITIALIZED, this value is 0. **/
        SizeOnDisk?: PositiveLong;
        /** Time stamp indicating when this object was created. Format is an integer
representing the number of seconds since the Unix epoch (Unix time). **/
        CreationTime?: Timestamp;
    }
    export interface ConflictException {
        Message?: NonEmptyString;
    }
    export interface CreateAliasInput {
        /** Descriptive label associated with this alias. Alias names do not need to be
unique. **/
        Name: NonZeroAndMaxString;
        /** Human-readable description of the alias. **/
        Description?: NonZeroAndMaxString;
        /** Object specifying the fleet and routing type to use for the alias. **/
        RoutingStrategy: RoutingStrategy;
    }
    export interface CreateAliasOutput {
        /** Object containing the newly created alias record. **/
        Alias?: Alias;
    }
    export interface CreateBuildInput {
        /** Descriptive label associated with this build. Build names do not need to be
unique. A build name can be changed later using UpdateBuild . **/
        Name?: NonZeroAndMaxString;
        /** Version associated with this build. Version strings do not need to be unique to
a build. A build version can be changed later using UpdateBuild . **/
        Version?: NonZeroAndMaxString;
        StorageLocation?: S3Location;
    }
    export interface CreateBuildOutput {
        /** Set of properties for the newly created build. **/
        Build?: Build;
        /** AWS credentials required when uploading a game build to the storage location.
These credentials have a limited lifespan and are valid only for the build they
were issued for. If you need to get fresh credentials, call 
RequestUploadCredentials . **/
        UploadCredentials?: AwsCredentials;
        /** Amazon S3 path and key, identifying where the game build files are stored. **/
        StorageLocation?: S3Location;
    }
    export interface CreateFleetInput {
        /** Descriptive label associated with this fleet. Fleet names do not need to be
unique. **/
        Name: NonZeroAndMaxString;
        /** Human-readable description of the fleet. **/
        Description?: NonZeroAndMaxString;
        /** Unique identifier for the build you want the new fleet to use. **/
        BuildId: BuildId;
        /** Path to the launch executable for the game server. A game server is built into a 
C:\game drive. This value must be expressed as C:\game\[launchpath] . Example:
If, when built, your game server files are in a folder called &quot;MyGame&quot;, your log
path should be C:\game\MyGame\server.exe . **/
        ServerLaunchPath: NonZeroAndMaxString;
        /** Parameters required to launch your game server. These parameters should be
expressed as a string of command-line parameters. Example: &quot;+sv_port 33435
+start_lobby&quot;. **/
        ServerLaunchParameters?: NonZeroAndMaxString;
        /** Path to game-session log files generated by your game server. Once a game
session has been terminated, Amazon GameLift captures and stores the logs on
Amazon S3. Use the GameLift console to access the stored logs. **/
        LogPaths?: StringList;
        /** Type of EC2 instances used in the fleet. EC2 instance types define the CPU,
memory, storage, and networking capacity of the fleetaposs hosts. Amazon
GameLift supports the EC2 instance types listed below. See Amazon EC2 Instance
Types [https://aws.amazon.com/ec2/instance-types/] for detailed descriptions of
each. **/
        EC2InstanceType: EC2InstanceType;
        /** Access limits for incoming traffic. Setting these values limits game server
access to incoming traffic using specified IP ranges and port numbers. Some
ports in a range may be restricted. You can provide one or more sets of
permissions for the fleet. **/
        EC2InboundPermissions?: IpPermissionsList;
        /** Game session protection policy to apply to all instances created in this fleet.
If this parameter is not set, new instances in this fleet will default to no
protection. Protection can be set for individual instances using 
UpdateGameSession . &amp;#42; NoProtection: The game session can be terminated during a
   scale-down event.
 * FullProtection: If the game session is in an ACTIVE
   status, it cannot be terminated during a scale-down event. **/
        NewGameSessionProtectionPolicy?: ProtectionPolicy;
    }
    export interface CreateFleetOutput {
        /** Properties for the newly created fleet. **/
        FleetAttributes?: FleetAttributes;
    }
    export interface CreateGameSessionInput {
        /** Unique identifier for a fleet. Each request must reference either a fleet ID or
alias ID, but not both. **/
        FleetId?: FleetId;
        /** Unique identifier for a fleet alias. Each request must reference either a fleet
ID or alias ID, but not both. **/
        AliasId?: AliasId;
        /** Maximum number of players that can be connected simultaneously to the game
session. **/
        MaximumPlayerSessionCount: WholeNumber;
        /** Descriptive label associated with this game session. Session names do not need
to be unique. **/
        Name?: NonZeroAndMaxString;
        /** Set of properties used to administer a game session. These properties are passed
to your game server. **/
        GameProperties?: GamePropertyList;
    }
    export interface CreateGameSessionOutput {
        /** Object containing the newly created game session record. **/
        GameSession?: GameSession;
    }
    export interface CreatePlayerSessionInput {
        /** Unique identifier for a game session. Specify the game session you want to add a
player to. **/
        GameSessionId: GameSessionId;
        /** Unique identifier for the player to be added. **/
        PlayerId: NonZeroAndMaxString;
    }
    export interface CreatePlayerSessionOutput {
        /** Object containing the newly created player session record. **/
        PlayerSession?: PlayerSession;
    }
    export interface CreatePlayerSessionsInput {
        /** Unique identifier for a game session. **/
        GameSessionId: GameSessionId;
        /** List of unique identifiers for the players to be added. **/
        PlayerIds: PlayerIdList;
    }
    export interface CreatePlayerSessionsOutput {
        /** Collection of player session objects created for the added players. **/
        PlayerSessions?: PlayerSessionList;
    }
    export interface DeleteAliasInput {
        /** Unique identifier for a fleet alias. Specify the alias you want to delete. **/
        AliasId: AliasId;
    }
    export interface DeleteBuildInput {
        /** Unique identifier for the build you want to delete. **/
        BuildId: BuildId;
    }
    export interface DeleteFleetInput {
        /** Unique identifier for the fleet you want to delete. **/
        FleetId: FleetId;
    }
    export interface DeleteScalingPolicyInput {
        /** Descriptive label associated with this scaling policy. Policy names do not need
to be unique. **/
        Name: NonZeroAndMaxString;
        /** Unique identifier for a fleet. **/
        FleetId: FleetId;
    }
    export interface DescribeAliasInput {
        /** Unique identifier for a fleet alias. Specify the alias you want to retrieve. **/
        AliasId: AliasId;
    }
    export interface DescribeAliasOutput {
        /** Object containing the requested alias. **/
        Alias?: Alias;
    }
    export interface DescribeBuildInput {
        /** Unique identifier for the build you want to retrieve properties for. **/
        BuildId: BuildId;
    }
    export interface DescribeBuildOutput {
        /** Set of properties describing the requested build. **/
        Build?: Build;
    }
    export interface DescribeEC2InstanceLimitsInput {
        /** Type of EC2 instances used in the fleet. EC2 instance types define the CPU,
memory, storage, and networking capacity of the fleetaposs hosts. Amazon
GameLift supports the EC2 instance types listed below. See Amazon EC2 Instance
Types [https://aws.amazon.com/ec2/instance-types/] for detailed descriptions of
each. Leave this parameter blank to retrieve limits for all types. **/
        EC2InstanceType?: EC2InstanceType;
    }
    export interface DescribeEC2InstanceLimitsOutput {
        /** Object containing the maximum number of instances for the specified instance
type. **/
        EC2InstanceLimits?: EC2InstanceLimitList;
    }
    export interface DescribeFleetAttributesInput {
        /** Unique identifiers for the fleet(s) that you want to retrieve attributes for.
Leave this parameter empty to retrieve attributes for all fleets. **/
        FleetIds?: FleetIdList;
        /** Maximum number of results to return. You can use this parameter with NextToken 
to get results as a set of sequential pages. This parameter is ignored when the
request specifies one or a list of fleet IDs. **/
        Limit?: PositiveInteger;
        /** Token indicating the start of the next sequential page of results. Use the token
that is returned with a previous call to this action. To specify the start of
the result set, do not specify a value. This parameter is ignored when the
request specifies one or a list of fleet IDs. **/
        NextToken?: NonZeroAndMaxString;
    }
    export interface DescribeFleetAttributesOutput {
        /** Collection of objects containing attribute metadata for each requested fleet ID. **/
        FleetAttributes?: FleetAttributesList;
        /** Token indicating where to resume retrieving results on the next call to this
action. If no token is returned, these results represent the end of the list.

If a request has a limit that exactly matches the number of remaining results, a
token is returned even though there are no more results to retrieve. **/
        NextToken?: NonZeroAndMaxString;
    }
    export interface DescribeFleetCapacityInput {
        /** Unique identifier for the fleet(s) you want to retrieve capacity information
for. **/
        FleetIds?: FleetIdList;
        /** Maximum number of results to return. You can use this parameter with NextToken 
to get results as a set of sequential pages. This parameter is ignored when the
request specifies one or a list of fleet IDs. **/
        Limit?: PositiveInteger;
        /** Token indicating the start of the next sequential page of results. Use the token
that is returned with a previous call to this action. To specify the start of
the result set, do not specify a value. This parameter is ignored when the
request specifies one or a list of fleet IDs. **/
        NextToken?: NonZeroAndMaxString;
    }
    export interface DescribeFleetCapacityOutput {
        /** Collection of objects containing capacity information for each requested fleet
ID. Leave this parameter empty to retrieve capacity information for all fleets. **/
        FleetCapacity?: FleetCapacityList;
        /** Token indicating where to resume retrieving results on the next call to this
action. If no token is returned, these results represent the end of the list.

If a request has a limit that exactly matches the number of remaining results, a
token is returned even though there are no more results to retrieve. **/
        NextToken?: NonZeroAndMaxString;
    }
    export interface DescribeFleetEventsInput {
        /** Unique identifier for the fleet to get event logs for. **/
        FleetId: FleetId;
        /** Earliest date to retrieve event logs for. If no start time is specified, this
call returns entries starting from when the fleet was created to the specified
end time. Format is an integer representing the number of seconds since the Unix
epoch (Unix time). **/
        StartTime?: Timestamp;
        /** Most recent date to retrieve event logs for. If no end time is specified, this
call returns entries from the specified start time up to the present. Format is
an integer representing the number of seconds since the Unix epoch (Unix time). **/
        EndTime?: Timestamp;
        /** Maximum number of results to return. You can use this parameter with NextToken 
to get results as a set of sequential pages. **/
        Limit?: PositiveInteger;
        /** Token indicating the start of the next sequential page of results. Use the token
that is returned with a previous call to this action. To specify the start of
the result set, do not specify a value. **/
        NextToken?: NonZeroAndMaxString;
    }
    export interface DescribeFleetEventsOutput {
        /** Collection of objects containing event log entries for the specified fleet. **/
        Events?: EventList;
        /** Token indicating where to resume retrieving results on the next call to this
action. If no token is returned, these results represent the end of the list.

If a request has a limit that exactly matches the number of remaining results, a
token is returned even though there are no more results to retrieve. **/
        NextToken?: NonZeroAndMaxString;
    }
    export interface DescribeFleetPortSettingsInput {
        /** Unique identifier for the fleet you want to retrieve port settings for. **/
        FleetId: FleetId;
    }
    export interface DescribeFleetPortSettingsOutput {
        /** Object containing port settings for the requested fleet ID. **/
        InboundPermissions?: IpPermissionsList;
    }
    export interface DescribeFleetUtilizationInput {
        /** Unique identifier for the fleet(s) you want to retrieve utilization data for.
Leave this parameter empty to retrieve utilization data for all fleets. **/
        FleetIds?: FleetIdList;
        /** Maximum number of results to return. You can use this parameter with NextToken 
to get results as a set of sequential pages. This parameter is ignored when the
request specifies one or a list of fleet IDs. **/
        Limit?: PositiveInteger;
        /** Token indicating the start of the next sequential page of results. Use the token
that is returned with a previous call to this action. To specify the start of
the result set, do not specify a value. This parameter is ignored when the
request specifies one or a list of fleet IDs. **/
        NextToken?: NonZeroAndMaxString;
    }
    export interface DescribeFleetUtilizationOutput {
        /** Collection of objects containing utilization information for each requested
fleet ID. **/
        FleetUtilization?: FleetUtilizationList;
        /** Token indicating where to resume retrieving results on the next call to this
action. If no token is returned, these results represent the end of the list.

If a request has a limit that exactly matches the number of remaining results, a
token is returned even though there are no more results to retrieve. **/
        NextToken?: NonZeroAndMaxString;
    }
    export interface DescribeGameSessionDetailsInput {
        /** Unique identifier for a fleet. Specify a fleet to retrieve information on all
game sessions active on the fleet. **/
        FleetId?: FleetId;
        /** Unique identifier for a game session. Specify the game session to retrieve
information on. **/
        GameSessionId?: GameSessionId;
        /** Unique identifier for a fleet alias. Specify an alias to retrieve information on
all game sessions active on the fleet. **/
        AliasId?: AliasId;
        /** Game session status to filter results on. Possible game session states include
ACTIVE, TERMINATED, ACTIVATING and TERMINATING (the last two are transitory). **/
        StatusFilter?: NonZeroAndMaxString;
        /** Maximum number of results to return. You can use this parameter with NextToken 
to get results as a set of sequential pages. **/
        Limit?: PositiveInteger;
        /** Token indicating the start of the next sequential page of results. Use the token
that is returned with a previous call to this action. To specify the start of
the result set, do not specify a value. **/
        NextToken?: NonZeroAndMaxString;
    }
    export interface DescribeGameSessionDetailsOutput {
        /** Collection of objects containing game session properties and the protection
policy currently in force for each session matching the request. **/
        GameSessionDetails?: GameSessionDetailList;
        /** Token indicating where to resume retrieving results on the next call to this
action. If no token is returned, these results represent the end of the list.

If a request has a limit that exactly matches the number of remaining results, a
token is returned even though there are no more results to retrieve. **/
        NextToken?: NonZeroAndMaxString;
    }
    export interface DescribeGameSessionsInput {
        /** Unique identifier for a fleet. Specify a fleet to retrieve information on all
game sessions active on the fleet. **/
        FleetId?: FleetId;
        /** Unique identifier for a game session. Specify the game session to retrieve
information on. **/
        GameSessionId?: GameSessionId;
        /** Unique identifier for a fleet alias. Specify an alias to retrieve information on
all game sessions active on the fleet. **/
        AliasId?: AliasId;
        /** Game session status to filter results on. Possible game session states include
ACTIVE, TERMINATED, ACTIVATING and TERMINATING (the last two are transitory). **/
        StatusFilter?: NonZeroAndMaxString;
        /** Maximum number of results to return. You can use this parameter with NextToken 
to get results as a set of sequential pages. **/
        Limit?: PositiveInteger;
        /** Token indicating the start of the next sequential page of results. Use the token
that is returned with a previous call to this action. To specify the start of
the result set, do not specify a value. **/
        NextToken?: NonZeroAndMaxString;
    }
    export interface DescribeGameSessionsOutput {
        /** Collection of objects containing game session properties for each session
matching the request. **/
        GameSessions?: GameSessionList;
        /** Token indicating where to resume retrieving results on the next call to this
action. If no token is returned, these results represent the end of the list.

If a request has a limit that exactly matches the number of remaining results, a
token is returned even though there are no more results to retrieve. **/
        NextToken?: NonZeroAndMaxString;
    }
    export interface DescribePlayerSessionsInput {
        /** Unique identifier for a game session. **/
        GameSessionId?: GameSessionId;
        /** Unique identifier for a player. **/
        PlayerId?: NonZeroAndMaxString;
        /** Unique identifier for a player session. **/
        PlayerSessionId?: PlayerSessionId;
        /** Player session status to filter results on. Possible player session states
include: &amp;#42; RESERVED: The player session request has been received, but the
   player has not yet connected to the game server and/or been validated.
 * ACTIVE: The player has been validated by the game server and is
   currently connected.
 * COMPLETED: The player connection has been dropped.
 * TIMEDOUT: A player session request was received, but the player did
   not connect and/or was not validated within the time-out limit (60 seconds). **/
        PlayerSessionStatusFilter?: NonZeroAndMaxString;
        /** Maximum number of results to return. You can use this parameter with NextToken 
to get results as a set of sequential pages. If a player session ID is
specified, this parameter is ignored. **/
        Limit?: PositiveInteger;
        /** Token indicating the start of the next sequential page of results. Use the token
that is returned with a previous call to this action. To specify the start of
the result set, do not specify a value. If a player session ID is specified,
this parameter is ignored. **/
        NextToken?: NonZeroAndMaxString;
    }
    export interface DescribePlayerSessionsOutput {
        /** Collection of objects containing properties for each player session that matches
the request. **/
        PlayerSessions?: PlayerSessionList;
        /** Token indicating where to resume retrieving results on the next call to this
action. If no token is returned, these results represent the end of the list.

If a request has a limit that exactly matches the number of remaining results, a
token is returned even though there are no more results to retrieve. **/
        NextToken?: NonZeroAndMaxString;
    }
    export interface DescribeScalingPoliciesInput {
        /** Unique identifier for a fleet. Specify the fleet to retrieve scaling policies
for. **/
        FleetId: FleetId;
        /** Game session status to filter results on. A scaling policy is only in force when
in an Active state. &amp;#42; ACTIVE: The scaling policy is currently in force.
 * UPDATEREQUESTED: A request to update the scaling policy
   has been received.
 * UPDATING: A change is being made to the scaling policy.
 * DELETEREQUESTED: A request to delete the scaling policy
   has been received.
 * DELETING: The scaling policy is being deleted.
 * DELETED: The scaling policy has been deleted.
 * ERROR: An error occurred in creating the policy. It should
   be removed and recreated. **/
        StatusFilter?: ScalingStatusType;
        /** Maximum number of results to return. You can use this parameter with NextToken 
to get results as a set of sequential pages. **/
        Limit?: PositiveInteger;
        /** Token indicating the start of the next sequential page of results. Use the token
that is returned with a previous call to this action. To specify the start of
the result set, do not specify a value. **/
        NextToken?: NonZeroAndMaxString;
    }
    export interface DescribeScalingPoliciesOutput {
        /** Collection of objects containing the scaling policies matching the request. **/
        ScalingPolicies?: ScalingPolicyList;
        /** Token indicating where to resume retrieving results on the next call to this
action. If no token is returned, these results represent the end of the list.

If a request has a limit that exactly matches the number of remaining results, a
token is returned even though there are no more results to retrieve. **/
        NextToken?: NonZeroAndMaxString;
    }
    export interface EC2InstanceCounts {
        /** Ideal number of active instances in the fleet. **/
        DESIRED?: WholeNumber;
        /** Minimum value allowed for the fleet&#x27;s instance count. **/
        MINIMUM?: WholeNumber;
        /** Maximum value allowed for the fleet&#x27;s instance count. **/
        MAXIMUM?: WholeNumber;
        /** Number of instances in the fleet that are starting but not yet active. **/
        PENDING?: WholeNumber;
        /** Actual number of active instances in the fleet. **/
        ACTIVE?: WholeNumber;
        /** Number of active instances in the fleet that are not currently hosting a game
session. **/
        IDLE?: WholeNumber;
        /** Number of instances in the fleet that are no longer active but haven&#x27;t yet been
terminated. **/
        TERMINATING?: WholeNumber;
    }
    export interface EC2InstanceLimit {
        /** Type of EC2 instances used in the fleet. EC2 instance types define the CPU,
memory, storage, and networking capacity of the fleetaposs hosts. Amazon
GameLift supports the EC2 instance types listed below. See Amazon EC2 Instance
Types [https://aws.amazon.com/ec2/instance-types/] for detailed descriptions of
each. **/
        EC2InstanceType?: EC2InstanceType;
        /** Number of instances of the specified type that are currently in use by this AWS
account. **/
        CurrentInstances?: WholeNumber;
        /** Number of instances allowed. **/
        InstanceLimit?: WholeNumber;
    }
    export interface Event {
        /** Unique identifier for a fleet event. **/
        EventId?: NonZeroAndMaxString;
        /** Unique identifier for the resource, such as a fleet ID. **/
        ResourceId?: NonZeroAndMaxString;
        /** Type of event being logged. **/
        EventCode?: EventCode;
        /** Additional information related to the event. **/
        Message?: NonEmptyString;
        /** Time stamp indicating when this event occurred. Format is an integer
representing the number of seconds since the Unix epoch (Unix time). **/
        EventTime?: Timestamp;
    }
    export interface FleetAttributes {
        /** Unique identifier for a fleet. **/
        FleetId?: FleetId;
        /** Human-readable description of the fleet. **/
        Description?: NonZeroAndMaxString;
        /** Descriptive label associated with this fleet. Fleet names do not need to be
unique. **/
        Name?: NonZeroAndMaxString;
        /** Time stamp indicating when this object was created. Format is an integer
representing the number of seconds since the Unix epoch (Unix time). **/
        CreationTime?: Timestamp;
        /** Time stamp indicating when this fleet was terminated. Format is an integer
representing the number of seconds since the Unix epoch (Unix time). **/
        TerminationTime?: Timestamp;
        /** Current status of the fleet. Possible fleet states include: &amp;#42; NEW: A new fleet
   has been defined and hosts allocated.
 * 
   DOWNLOADING/VALIDATING/BUILDING/ACTIVATING: The new fleet is being set up
   with the game build, and new hosts are being started.
 * ACTIVE: Hosts can
   now accept game sessions.
 * ERROR: An error
   occurred when downloading, validating, building, or activating the fleet.
 * DELETING: Hosts
   are responding to a delete fleet request.
 * TERMINATED: The
   fleet no longer exists. **/
        Status?: FleetStatus;
        /** Unique identifier for a build. **/
        BuildId?: BuildId;
        /** Path to the launch executable for the game server. A game server is built into a 
C:\game drive. This value must be expressed as C:\game\[launchpath] . Example:
If, when built, your game server files are in a folder called &quot;MyGame&quot;, your log
path should be C:\game\MyGame\server.exe . **/
        ServerLaunchPath?: NonZeroAndMaxString;
        /** Parameters required to launch your game server. These parameters should be
expressed as a string of command-line parameters. Example: &quot;+sv_port 33435
+start_lobby&quot;. **/
        ServerLaunchParameters?: NonZeroAndMaxString;
        /** Path to game-session log files generated by your game server. Once a game
session has been terminated, Amazon GameLift captures and stores the logs on
Amazon S3. Use the GameLift console to access the stored logs. **/
        LogPaths?: StringList;
        /** Type of game session protection to set for all new instances started in the
fleet. &amp;#42; NoProtection: The game session can be terminated during a scale-down
   event.
 * FullProtection: If the game session is in an ACTIVE status, it cannot
   be terminated during a scale-down event. **/
        NewGameSessionProtectionPolicy?: ProtectionPolicy;
    }
    export interface FleetCapacity {
        /** Unique identifier for a fleet. **/
        FleetId?: FleetId;
        /** Type of EC2 instances used in the fleet. EC2 instance types define the CPU,
memory, storage, and networking capacity of the fleetaposs hosts. Amazon
GameLift supports the EC2 instance types listed below. See Amazon EC2 Instance
Types [https://aws.amazon.com/ec2/instance-types/] for detailed descriptions of
each. **/
        InstanceType?: EC2InstanceType;
        /** Current status of fleet capacity. **/
        InstanceCounts?: EC2InstanceCounts;
    }
    export interface FleetCapacityExceededException {
        Message?: NonEmptyString;
    }
    export interface FleetUtilization {
        /** Unique identifier for a fleet. **/
        FleetId?: FleetId;
        /** Number of active game sessions currently being hosted on fleet game servers. **/
        ActiveGameSessionCount?: WholeNumber;
        /** Number of active player sessions currently being hosted on fleet game servers. **/
        CurrentPlayerSessionCount?: WholeNumber;
        /** Maximum players allowed across all game sessions currently hosted in the fleet. **/
        MaximumPlayerSessionCount?: WholeNumber;
    }
    export interface GameProperty {
        Key: GamePropertyKey;
        Value: GamePropertyValue;
    }
    export interface GameSession {
        /** Unique identifier for a game session. **/
        GameSessionId?: GameSessionId;
        /** Descriptive label associated with this game session. Session names do not need
to be unique. **/
        Name?: NonZeroAndMaxString;
        /** Unique identifier for a fleet. **/
        FleetId?: FleetId;
        /** Time stamp indicating when this object was created. Format is an integer
representing the number of seconds since the Unix epoch (Unix time). **/
        CreationTime?: Timestamp;
        /** Time stamp indicating when this fleet was terminated. Format is an integer
representing the number of seconds since the Unix epoch (Unix time). **/
        TerminationTime?: Timestamp;
        /** Number of players currently in the game session. **/
        CurrentPlayerSessionCount?: WholeNumber;
        /** Maximum number of players allowed in the game session. **/
        MaximumPlayerSessionCount?: WholeNumber;
        /** Current status of the game session. A game session must be in an ACTIVE state to
have player sessions. **/
        Status?: GameSessionStatus;
        /** Set of custom properties for the game session. **/
        GameProperties?: GamePropertyList;
        /** IP address of the game session. **/
        IpAddress?: IpAddress;
        /** Indicates whether or not the game session is accepting new players. **/
        PlayerSessionCreationPolicy?: PlayerSessionCreationPolicy;
    }
    export interface GameSessionDetail {
        GameSession?: GameSession;
        /** Current status of protection for the game session. &amp;#42; NoProtection: The game
   session can be terminated during a scale-down event.
 * FullProtection: If the game
   session is in an ACTIVE status, it cannot be terminated during a scale-down
   event. **/
        ProtectionPolicy?: ProtectionPolicy;
    }
    export interface GameSessionFullException {
        Message?: NonEmptyString;
    }
    export interface GetGameSessionLogUrlInput {
        /** Unique identifier for a game session. Specify the game session you want to get
logs for. **/
        GameSessionId: GameSessionId;
    }
    export interface GetGameSessionLogUrlOutput {
        /** Location of the requested game session logs, available for download. **/
        PreSignedUrl?: NonZeroAndMaxString;
    }
    export interface InternalServiceException {
        Message?: NonEmptyString;
    }
    export interface InvalidFleetStatusException {
        Message?: NonEmptyString;
    }
    export interface InvalidGameSessionStatusException {
        Message?: NonEmptyString;
    }
    export interface InvalidRequestException {
        Message?: NonEmptyString;
    }
    export interface IpPermission {
        /** Starting value for a range of allowed port numbers. **/
        FromPort: PortNumber;
        /** Ending value for a range of allowed port numbers. Port numbers are
end-inclusive. This value must be higher than FromPort . **/
        ToPort: PortNumber;
        /** Range of allowed IP addresses. This value must be expressed in CIDR notation
[https://tools.ietf.org/id/cidr] . Example: &quot; 000.000.000.000/[subnet mask] &quot; or
optionally the shortened version &quot; 0.0.0.0/[subnet mask] &quot;. **/
        IpRange: NonBlankString;
        /** Network communication protocol used by the fleet. **/
        Protocol: IpProtocol;
    }
    export interface LimitExceededException {
        Message?: NonEmptyString;
    }
    export interface ListAliasesInput {
        /** Type of routing to filter results on. Use this parameter to retrieve only
aliases of a certain type. To retrieve all aliases, leave this parameter empty.
Possible routing types include: &amp;#42; SIMPLE: The alias resolves to one specific
   fleet. Use this type when routing to active fleets.
 * TERMINAL: The alias does not resolve to a
   fleet but instead can be used to display a message to the user. A terminal
   alias throws a TerminalRoutingStrategyException with the RoutingStrategy 
   message embedded. **/
        RoutingStrategyType?: RoutingStrategyType;
        /** Descriptive label associated with this alias. Alias names do not need to be
unique. **/
        Name?: NonEmptyString;
        /** Maximum number of results to return. You can use this parameter with NextToken 
to get results as a set of sequential pages. **/
        Limit?: PositiveInteger;
        /** Token indicating the start of the next sequential page of results. Use the token
that is returned with a previous call to this action. To specify the start of
the result set, do not specify a value. **/
        NextToken?: NonEmptyString;
    }
    export interface ListAliasesOutput {
        /** Collection of alias records that match the list request. **/
        Aliases?: AliasList;
        /** Token indicating where to resume retrieving results on the next call to this
action. If no token is returned, these results represent the end of the list.

If a request has a limit that exactly matches the number of remaining results, a
token is returned even though there are no more results to retrieve. **/
        NextToken?: NonEmptyString;
    }
    export interface ListBuildsInput {
        /** Build state to filter results on. Use this parameter to retrieve builds in a
certain state. To retrieve all builds, leave this parameter empty. Possible
build states include: &amp;#42; INITIALIZED: A new build has been defined, but no files
   have been uploaded. You cannot create fleets for builds that are in this
   state. When a build is successfully created, the build state is set to this
   value.
 * READY: The game build has been successfully uploaded.
   You can now create new fleets for this build.
 * FAILED: The game build upload failed. You cannot create
   new fleets for this build. **/
        Status?: BuildStatus;
        /** Maximum number of results to return. You can use this parameter with NextToken 
to get results as a set of sequential pages. **/
        Limit?: PositiveInteger;
        /** Token indicating the start of the next sequential page of results. Use the token
that is returned with a previous call to this action. To specify the start of
the result set, do not specify a value. **/
        NextToken?: NonEmptyString;
    }
    export interface ListBuildsOutput {
        /** Collection of build records that match the request. **/
        Builds?: BuildList;
        /** Token indicating where to resume retrieving results on the next call to this
action. If no token is returned, these results represent the end of the list.

If a request has a limit that exactly matches the number of remaining results, a
token is returned even though there are no more results to retrieve. **/
        NextToken?: NonEmptyString;
    }
    export interface ListFleetsInput {
        /** Unique identifier of the build to return fleets for. Use this parameter to
return only fleets using the specified build. To retrieve all fleets, leave this
parameter empty. **/
        BuildId?: BuildId;
        /** Maximum number of results to return. You can use this parameter with NextToken 
to get results as a set of sequential pages. **/
        Limit?: PositiveInteger;
        /** Token indicating the start of the next sequential page of results. Use the token
that is returned with a previous call to this action. To specify the start of
the result set, do not specify a value. **/
        NextToken?: NonZeroAndMaxString;
    }
    export interface ListFleetsOutput {
        /** Set of fleet IDs matching the list request. You can retrieve additional
information about all returned fleets by passing this result set to a call to 
DescribeFleetAttributes , DescribeFleetCapacity , and DescribeFleetUtilization . **/
        FleetIds?: FleetIdList;
        /** Token indicating where to resume retrieving results on the next call to this
action. If no token is returned, these results represent the end of the list.

If a request has a limit that exactly matches the number of remaining results, a
token is returned even though there are no more results to retrieve. **/
        NextToken?: NonZeroAndMaxString;
    }
    export interface NotFoundException {
        Message?: NonEmptyString;
    }
    export interface PlayerSession {
        /** Unique identifier for a player session. **/
        PlayerSessionId?: PlayerSessionId;
        /** Unique identifier for a player. **/
        PlayerId?: NonZeroAndMaxString;
        /** Unique identifier for a game session. **/
        GameSessionId?: GameSessionId;
        /** Unique identifier for a fleet. **/
        FleetId?: FleetId;
        /** Time stamp indicating when this object was created. Format is an integer
representing the number of seconds since the Unix epoch (Unix time). **/
        CreationTime?: Timestamp;
        /** Time stamp indicating when this fleet was terminated. Format is an integer
representing the number of seconds since the Unix epoch (Unix time). **/
        TerminationTime?: Timestamp;
        /** Current status of the player session. Possible player session states include: &amp;#42; 
   RESERVED: The player session request has been received, but the player has
   not yet connected to the game server and/or been validated.
 * 
   ACTIVE: The player has been validated by the game server and is currently
   connected.
 * 
   COMPLETED: The player connection has been dropped.
 * 
   TIMEDOUT: A player session request was received, but the player did not
   connect and/or was not validated within the time-out limit (60 seconds). **/
        Status?: PlayerSessionStatus;
        /** Game session IP address. All player sessions reference the game session
location. **/
        IpAddress?: IpAddress;
    }
    export interface PutScalingPolicyInput {
        /** Descriptive label associated with this scaling policy. Policy names do not need
to be unique. A fleet can have only one scaling policy with the same name. **/
        Name: NonZeroAndMaxString;
        /** Unique identity for the fleet to scale with this policy. **/
        FleetId: FleetId;
        /** Amount of adjustment to make, based on the scaling adjustment type. **/
        ScalingAdjustment: Integer;
        /** Type of adjustment to make to a fleet&#x27;s instance count (see FleetCapacity ): &amp;#42; 
   ChangeInCapacity: add (or subtract) the scaling adjustment value from the
   current instance count. Positive values scale up while negative values scale
   down.
 * 
   ExactCapacity: set the instance count to the scaling adjustment value.
 * 
   PercentChangeInCapacity: increase or reduce the current instance count by the
   scaling adjustment, read as a percentage. Positive values scale up while
   negative values scale down; for example, a value of &quot;-10&quot; scales the fleet
   down by 10%. **/
        ScalingAdjustmentType: ScalingAdjustmentType;
        /** Metric value used to trigger a scaling event. **/
        Threshold: Double;
        /** Comparison operator to use when measuring the metric against the threshold
value. **/
        ComparisonOperator: ComparisonOperatorType;
        /** Length of time (in minutes) the metric must be at or beyond the threshold before
a scaling event is triggered. **/
        EvaluationPeriods: PositiveInteger;
        /** Name of the Service-defined metric that is used to trigger an adjustment. &amp;#42; 
   ActivatingGameSessions: number of game sessions in the process of being
   created (game session status = ACTIVATING).
 * 
   ActiveGameSessions: number of game sessions currently running (game session
   status = ACTIVE).
 * 
   CurrentPlayerSessions: number of active or reserved player sessions (player
   session status = ACTIVE or RESERVED).
 * 
   AvailablePlayerSessions: number of player session slots currently available
   in active game sessions across the fleet, calculated by subtracting a game
   session&#x27;s current player session count from its maximum player session count.
   This number includes game sessions that are not currently accepting players
   (game session PlayerSessionCreationPolicy = DENY_ALL).
 * 
   ActiveInstances: number of instances currently running a game session.
 * 
   IdleInstances: number of instances not currently running a game session. **/
        MetricName: MetricName;
    }
    export interface PutScalingPolicyOutput {
        /** Descriptive label associated with this scaling policy. Policy names do not need
to be unique. **/
        Name?: NonZeroAndMaxString;
    }
    export interface RequestUploadCredentialsInput {
        /** Unique identifier for the build you want to get credentials for. **/
        BuildId: BuildId;
    }
    export interface RequestUploadCredentialsOutput {
        /** AWS credentials required when uploading a game build to the storage location.
These credentials have a limited lifespan and are valid only for the build they
were issued for. **/
        UploadCredentials?: AwsCredentials;
        /** Amazon S3 path and key, identifying where the game build files are stored. **/
        StorageLocation?: S3Location;
    }
    export interface ResolveAliasInput {
        /** Unique identifier for the alias you want to resolve. **/
        AliasId: AliasId;
    }
    export interface ResolveAliasOutput {
        /** Fleet ID associated with the requested alias. **/
        FleetId?: FleetId;
    }
    export interface RoutingStrategy {
        /** Type of routing strategy. Possible routing types include: &amp;#42; SIMPLE: The alias
   resolves to one specific fleet. Use this type when routing to active fleets.
 * TERMINAL: The alias
   does not resolve to a fleet but instead can be used to display a message to
   the user. A terminal alias throws a TerminalRoutingStrategyException with the 
   RoutingStrategy message embedded. **/
        Type?: RoutingStrategyType;
        /** Unique identifier for a fleet. **/
        FleetId?: FleetId;
        /** Message text to be used with a terminal routing strategy. **/
        Message?: FreeText;
    }
    export interface S3Location {
        /** Amazon S3 bucket identifier. **/
        Bucket?: NonEmptyString;
        /** Amazon S3 bucket key. **/
        Key?: NonEmptyString;
        RoleArn?: NonEmptyString;
    }
    export interface ScalingPolicy {
        /** Unique identity for the fleet associated with this scaling policy. **/
        FleetId?: FleetId;
        /** Descriptive label associated with this scaling policy. Policy names do not need
to be unique. **/
        Name?: NonZeroAndMaxString;
        /** Current status of the scaling policy. The scaling policy is only in force when
in an Active state. &amp;#42; ACTIVE: The scaling policy is currently in force.
 * UPDATEREQUESTED: A request to update the scaling policy
   has been received.
 * UPDATING: A change is being made to the scaling policy.
 * DELETEREQUESTED: A request to delete the scaling policy
   has been received.
 * DELETING: The scaling policy is being deleted.
 * DELETED: The scaling policy has been deleted.
 * ERROR: An error occurred in creating the policy. It should
   be removed and recreated. **/
        Status?: ScalingStatusType;
        /** Amount of adjustment to make, based on the scaling adjustment type. **/
        ScalingAdjustment?: Integer;
        /** Type of adjustment to make to a fleet&#x27;s instance count (see FleetCapacity ): &amp;#42; 
   ChangeInCapacity: add (or subtract) the scaling adjustment value from the
   current instance count. Positive values scale up while negative values scale
   down.
 * 
   ExactCapacity: set the instance count to the scaling adjustment value.
 * 
   PercentChangeInCapacity: increase or reduce the current instance count by the
   scaling adjustment, read as a percentage. Positive values scale up while
   negative values scale down. **/
        ScalingAdjustmentType?: ScalingAdjustmentType;
        /** Comparison operator to use when measuring a metric against the threshold value. **/
        ComparisonOperator?: ComparisonOperatorType;
        /** Metric value used to trigger a scaling event. **/
        Threshold?: Double;
        /** Length of time (in minutes) the metric must be at or beyond the threshold before
a scaling event is triggered. **/
        EvaluationPeriods?: PositiveInteger;
        /** Name of the GameLift-defined metric that is used to trigger an adjustment. &amp;#42; 
   ActivatingGameSessions: number of game sessions in the process of being
   created (game session status = ACTIVATING).
 * 
   ActiveGameSessions: number of game sessions currently running (game session
   status = ACTIVE).
 * 
   CurrentPlayerSessions: number of active or reserved player sessions (player
   session status = ACTIVE or RESERVED).
 * 
   AvailablePlayerSessions: number of player session slots currently available
   in active game sessions across the fleet, calculated by subtracting a game
   session&#x27;s current player session count from its maximum player session count.
   This number does include game sessions that are not currently accepting
   players (game session PlayerSessionCreationPolicy = DENY_ALL).
 * 
   ActiveInstances: number of instances currently running a game session.
 * 
   IdleInstances: number of instances not currently running a game session. **/
        MetricName?: MetricName;
    }
    export interface TerminalRoutingStrategyException {
        Message?: NonEmptyString;
    }
    export interface UnauthorizedException {
        Message?: NonEmptyString;
    }
    export interface UpdateAliasInput {
        /** Unique identifier for a fleet alias. Specify the alias you want to update. **/
        AliasId: AliasId;
        /** Descriptive label associated with this alias. Alias names do not need to be
unique. **/
        Name?: NonZeroAndMaxString;
        /** Human-readable description of the alias. **/
        Description?: NonZeroAndMaxString;
        /** Object specifying the fleet and routing type to use for the alias. **/
        RoutingStrategy?: RoutingStrategy;
    }
    export interface UpdateAliasOutput {
        /** Object containing the updated alias configuration. **/
        Alias?: Alias;
    }
    export interface UpdateBuildInput {
        /** Unique identifier for the build you want to update. **/
        BuildId: BuildId;
        /** Descriptive label associated with this build. Build names do not need to be
unique. **/
        Name?: NonZeroAndMaxString;
        /** Version associated with this build. Version strings do not need to be unique to
a build. **/
        Version?: NonZeroAndMaxString;
    }
    export interface UpdateBuildOutput {
        /** Object containing the updated build record. **/
        Build?: Build;
    }
    export interface UpdateFleetAttributesInput {
        /** Unique identifier for the fleet you want to update attribute metadata for. **/
        FleetId: FleetId;
        /** Descriptive label associated with this fleet. Fleet names do not need to be
unique. **/
        Name?: NonZeroAndMaxString;
        /** Human-readable description of the fleet. **/
        Description?: NonZeroAndMaxString;
        /** Game session protection policy to apply to all new instances created in this
fleet. Instances that already exist will not be affected. You can set protection
for individual instances using UpdateGameSession . &amp;#42; NoProtection: The game
   session can be terminated during a scale-down event.
 * FullProtection: If the game
   session is in an ACTIVE status, it cannot be terminated during a scale-down
   event. **/
        NewGameSessionProtectionPolicy?: ProtectionPolicy;
    }
    export interface UpdateFleetAttributesOutput {
        /** Unique identifier for the updated fleet. **/
        FleetId?: FleetId;
    }
    export interface UpdateFleetCapacityInput {
        /** Unique identifier for the fleet you want to update capacity for. **/
        FleetId: FleetId;
        /** Number of EC2 instances you want this fleet to host. **/
        DesiredInstances?: WholeNumber;
        /** Minimum value allowed for the fleet&#x27;s instance count. Default if not set is 0. **/
        MinSize?: WholeNumber;
        /** Maximum value allowed for the fleet&#x27;s instance count. Default if not set is 1. **/
        MaxSize?: WholeNumber;
    }
    export interface UpdateFleetCapacityOutput {
        /** Unique identifier for the updated fleet. **/
        FleetId?: FleetId;
    }
    export interface UpdateFleetPortSettingsInput {
        /** Unique identifier for the fleet you want to update port settings for. **/
        FleetId: FleetId;
        /** Collection of port settings to be added to the fleet record. **/
        InboundPermissionAuthorizations?: IpPermissionsList;
        /** Collection of port settings to be removed from the fleet record. **/
        InboundPermissionRevocations?: IpPermissionsList;
    }
    export interface UpdateFleetPortSettingsOutput {
        /** Unique identifier for the updated fleet. **/
        FleetId?: FleetId;
    }
    export interface UpdateGameSessionInput {
        /** Unique identifier for a game session. Specify the game session you want to
update. **/
        GameSessionId: GameSessionId;
        /** Maximum number of players that can be simultaneously connected to the game
session. **/
        MaximumPlayerSessionCount?: WholeNumber;
        /** Descriptive label associated with this game session. Session names do not need
to be unique. **/
        Name?: NonZeroAndMaxString;
        /** Policy determining whether or not the game session accepts new players. **/
        PlayerSessionCreationPolicy?: PlayerSessionCreationPolicy;
        /** Game session protection policy to apply to this game session only. &amp;#42; 
   NoProtection: The game session can be terminated during a scale-down event.
 * 
   FullProtection: If the game session is in an ACTIVE status, it cannot be
   terminated during a scale-down event. **/
        ProtectionPolicy?: ProtectionPolicy;
    }
    export interface UpdateGameSessionOutput {
        /** Object containing the updated game session metadata. **/
        GameSession?: GameSession;
    }
  }
}
