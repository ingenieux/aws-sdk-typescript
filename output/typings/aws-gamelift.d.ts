// Type definitions for aws-sdk - Amazon GameLift
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2015-10-01
     * endpointPrefix: gamelift
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: json
     */
    export class GameLift extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      createAlias(params: GameLift.CreateAliasInput, callback?: (err: GameLift.UnauthorizedException|GameLift.InvalidRequestException|GameLift.ConflictException|GameLift.InternalServiceException|GameLift.LimitExceededException|any, data: GameLift.CreateAliasOutput|any) => void): Request;
      createBuild(params: GameLift.CreateBuildInput, callback?: (err: GameLift.UnauthorizedException|GameLift.InvalidRequestException|GameLift.ConflictException|GameLift.InternalServiceException|any, data: GameLift.CreateBuildOutput|any) => void): Request;
      createFleet(params: GameLift.CreateFleetInput, callback?: (err: GameLift.InternalServiceException|GameLift.NotFoundException|GameLift.ConflictException|GameLift.LimitExceededException|GameLift.InvalidRequestException|GameLift.UnauthorizedException|any, data: GameLift.CreateFleetOutput|any) => void): Request;
      createGameSession(params: GameLift.CreateGameSessionInput, callback?: (err: GameLift.ConflictException|GameLift.InternalServiceException|GameLift.UnauthorizedException|GameLift.InvalidFleetStatusException|GameLift.TerminalRoutingStrategyException|GameLift.InvalidRequestException|GameLift.NotFoundException|GameLift.FleetCapacityExceededException|any, data: GameLift.CreateGameSessionOutput|any) => void): Request;
      createPlayerSession(params: GameLift.CreatePlayerSessionInput, callback?: (err: GameLift.InternalServiceException|GameLift.UnauthorizedException|GameLift.InvalidGameSessionStatusException|GameLift.GameSessionFullException|GameLift.TerminalRoutingStrategyException|GameLift.InvalidRequestException|GameLift.NotFoundException|any, data: GameLift.CreatePlayerSessionOutput|any) => void): Request;
      createPlayerSessions(params: GameLift.CreatePlayerSessionsInput, callback?: (err: GameLift.InternalServiceException|GameLift.UnauthorizedException|GameLift.InvalidGameSessionStatusException|GameLift.GameSessionFullException|GameLift.TerminalRoutingStrategyException|GameLift.InvalidRequestException|GameLift.NotFoundException|any, data: GameLift.CreatePlayerSessionsOutput|any) => void): Request;
      deleteAlias(params: GameLift.DeleteAliasInput, callback?: (err: GameLift.UnauthorizedException|GameLift.NotFoundException|GameLift.InvalidRequestException|GameLift.InternalServiceException|any, data: any) => void): Request;
      deleteBuild(params: GameLift.DeleteBuildInput, callback?: (err: GameLift.UnauthorizedException|GameLift.NotFoundException|GameLift.InternalServiceException|GameLift.InvalidRequestException|any, data: any) => void): Request;
      deleteFleet(params: GameLift.DeleteFleetInput, callback?: (err: GameLift.NotFoundException|GameLift.InternalServiceException|GameLift.InvalidFleetStatusException|GameLift.UnauthorizedException|GameLift.InvalidRequestException|GameLift.InvalidFleetStatusException|any, data: any) => void): Request;
      describeAlias(params: GameLift.DescribeAliasInput, callback?: (err: GameLift.UnauthorizedException|GameLift.InvalidRequestException|GameLift.NotFoundException|GameLift.InternalServiceException|any, data: GameLift.DescribeAliasOutput|any) => void): Request;
      describeBuild(params: GameLift.DescribeBuildInput, callback?: (err: GameLift.UnauthorizedException|GameLift.InvalidRequestException|GameLift.NotFoundException|GameLift.InternalServiceException|any, data: GameLift.DescribeBuildOutput|any) => void): Request;
      describeEC2InstanceLimits(params: GameLift.DescribeEC2InstanceLimitsInput, callback?: (err: GameLift.InvalidRequestException|GameLift.InternalServiceException|GameLift.UnauthorizedException|any, data: GameLift.DescribeEC2InstanceLimitsOutput|any) => void): Request;
      describeFleetAttributes(params: GameLift.DescribeFleetAttributesInput, callback?: (err: GameLift.InternalServiceException|GameLift.NotFoundException|GameLift.InvalidRequestException|GameLift.UnauthorizedException|any, data: GameLift.DescribeFleetAttributesOutput|any) => void): Request;
      describeFleetCapacity(params: GameLift.DescribeFleetCapacityInput, callback?: (err: GameLift.InternalServiceException|GameLift.NotFoundException|GameLift.InvalidRequestException|GameLift.UnauthorizedException|any, data: GameLift.DescribeFleetCapacityOutput|any) => void): Request;
      describeFleetEvents(params: GameLift.DescribeFleetEventsInput, callback?: (err: GameLift.NotFoundException|GameLift.InternalServiceException|GameLift.UnauthorizedException|GameLift.InvalidRequestException|any, data: GameLift.DescribeFleetEventsOutput|any) => void): Request;
      describeFleetPortSettings(params: GameLift.DescribeFleetPortSettingsInput, callback?: (err: GameLift.InternalServiceException|GameLift.NotFoundException|GameLift.InvalidRequestException|GameLift.UnauthorizedException|any, data: GameLift.DescribeFleetPortSettingsOutput|any) => void): Request;
      describeFleetUtilization(params: GameLift.DescribeFleetUtilizationInput, callback?: (err: GameLift.InternalServiceException|GameLift.NotFoundException|GameLift.InvalidRequestException|GameLift.UnauthorizedException|any, data: GameLift.DescribeFleetUtilizationOutput|any) => void): Request;
      describeGameSessions(params: GameLift.DescribeGameSessionsInput, callback?: (err: GameLift.InternalServiceException|GameLift.NotFoundException|GameLift.InvalidRequestException|GameLift.UnauthorizedException|GameLift.TerminalRoutingStrategyException|any, data: GameLift.DescribeGameSessionsOutput|any) => void): Request;
      describePlayerSessions(params: GameLift.DescribePlayerSessionsInput, callback?: (err: GameLift.InternalServiceException|GameLift.NotFoundException|GameLift.InvalidRequestException|GameLift.UnauthorizedException|any, data: GameLift.DescribePlayerSessionsOutput|any) => void): Request;
      getGameSessionLogUrl(params: GameLift.GetGameSessionLogUrlInput, callback?: (err: GameLift.InternalServiceException|GameLift.NotFoundException|GameLift.UnauthorizedException|GameLift.InvalidRequestException|any, data: GameLift.GetGameSessionLogUrlOutput|any) => void): Request;
      listAliases(params: GameLift.ListAliasesInput, callback?: (err: GameLift.UnauthorizedException|GameLift.InvalidRequestException|GameLift.InternalServiceException|any, data: GameLift.ListAliasesOutput|any) => void): Request;
      listBuilds(params: GameLift.ListBuildsInput, callback?: (err: GameLift.UnauthorizedException|GameLift.InvalidRequestException|GameLift.InternalServiceException|any, data: GameLift.ListBuildsOutput|any) => void): Request;
      listFleets(params: GameLift.ListFleetsInput, callback?: (err: GameLift.InternalServiceException|GameLift.NotFoundException|GameLift.InvalidRequestException|GameLift.UnauthorizedException|any, data: GameLift.ListFleetsOutput|any) => void): Request;
      requestUploadCredentials(params: GameLift.RequestUploadCredentialsInput, callback?: (err: GameLift.UnauthorizedException|GameLift.InvalidRequestException|GameLift.NotFoundException|GameLift.InternalServiceException|any, data: GameLift.RequestUploadCredentialsOutput|any) => void): Request;
      resolveAlias(params: GameLift.ResolveAliasInput, callback?: (err: GameLift.UnauthorizedException|GameLift.InvalidRequestException|GameLift.NotFoundException|GameLift.TerminalRoutingStrategyException|GameLift.InternalServiceException|any, data: GameLift.ResolveAliasOutput|any) => void): Request;
      updateAlias(params: GameLift.UpdateAliasInput, callback?: (err: GameLift.UnauthorizedException|GameLift.InvalidRequestException|GameLift.NotFoundException|GameLift.InternalServiceException|any, data: GameLift.UpdateAliasOutput|any) => void): Request;
      updateBuild(params: GameLift.UpdateBuildInput, callback?: (err: GameLift.UnauthorizedException|GameLift.InvalidRequestException|GameLift.NotFoundException|GameLift.InternalServiceException|any, data: GameLift.UpdateBuildOutput|any) => void): Request;
      updateFleetAttributes(params: GameLift.UpdateFleetAttributesInput, callback?: (err: GameLift.NotFoundException|GameLift.ConflictException|GameLift.InvalidFleetStatusException|GameLift.LimitExceededException|GameLift.InternalServiceException|GameLift.InvalidRequestException|GameLift.UnauthorizedException|any, data: GameLift.UpdateFleetAttributesOutput|any) => void): Request;
      updateFleetCapacity(params: GameLift.UpdateFleetCapacityInput, callback?: (err: GameLift.NotFoundException|GameLift.ConflictException|GameLift.LimitExceededException|GameLift.InvalidFleetStatusException|GameLift.InternalServiceException|GameLift.InvalidRequestException|GameLift.UnauthorizedException|any, data: GameLift.UpdateFleetCapacityOutput|any) => void): Request;
      updateFleetPortSettings(params: GameLift.UpdateFleetPortSettingsInput, callback?: (err: GameLift.NotFoundException|GameLift.ConflictException|GameLift.InvalidFleetStatusException|GameLift.LimitExceededException|GameLift.InternalServiceException|GameLift.InvalidRequestException|GameLift.UnauthorizedException|any, data: GameLift.UpdateFleetPortSettingsOutput|any) => void): Request;
      updateGameSession(params: GameLift.UpdateGameSessionInput, callback?: (err: GameLift.NotFoundException|GameLift.ConflictException|GameLift.InternalServiceException|GameLift.UnauthorizedException|GameLift.InvalidGameSessionStatusException|GameLift.InvalidRequestException|any, data: GameLift.UpdateGameSessionOutput|any) => void): Request;

    }

    export module GameLift {
        export type AliasId = string;    // pattern: &quot;^alias-\S+&quot;
        export type AliasList = Alias[];
        export type BuildId = string;    // pattern: &quot;^build-\S+&quot;
        export type BuildList = Build[];
        export type BuildStatus = string;
        export type EC2InstanceLimitList = EC2InstanceLimit[];
        export type EC2InstanceType = string;
        export type EventCode = string;
        export type EventList = Event[];
        export type FleetAttributesList = FleetAttributes[];
        export type FleetCapacityList = FleetCapacity[];
        export type FleetId = string;    // pattern: &quot;^fleet-\S+&quot;
        export type FleetIdList = FleetId[];    // min: 1
        export type FleetStatus = string;
        export type FleetUtilizationList = FleetUtilization[];
        export type FreeText = string;
        export type GamePropertyKey = string;    // max: 32
        export type GamePropertyList = GameProperty[];    // max: 16
        export type GamePropertyValue = string;    // max: 96
        export type GameSessionId = string;    // pattern: &quot;^(gamei-|gsess-)\S+&quot;
        export type GameSessionList = GameSession[];
        export type GameSessionStatus = string;
        export type IpAddress = string;
        export type IpPermissionsList = IpPermission[];    // max: 50
        export type IpProtocol = string;
        export type NonBlankString = string;    // pattern: &quot;[^\s]+&quot;
        export type NonEmptyString = string;    // min: 1
        export type NonZeroAndMaxString = string;    // max: 1024, min: 1
        export type PlayerIdList = NonZeroAndMaxString[];    // max: 25, min: 1
        export type PlayerSessionCreationPolicy = string;
        export type PlayerSessionId = string;    // pattern: &quot;^psess-\S+&quot;
        export type PlayerSessionList = PlayerSession[];
        export type PlayerSessionStatus = string;
        export type PortNumber = number;    // max: 60000, min: 1025
        export type PositiveInteger = number;    // min: 1
        export type PositiveLong = number;    // min: 1
        export type RoutingStrategyType = string;
        export type StringList = NonZeroAndMaxString[];
        export type Timestamp = number;
        export type WholeNumber = number;

        export interface Alias {
            AliasId?: AliasId;
            Name?: FreeText;
            Description?: FreeText;
            RoutingStrategy?: RoutingStrategy;
            CreationTime?: Timestamp;
            LastUpdatedTime?: Timestamp;
        }
        export interface AwsCredentials {
            AccessKeyId?: NonEmptyString;
            SecretAccessKey?: NonEmptyString;
            SessionToken?: NonEmptyString;
        }
        export interface Build {
            BuildId?: BuildId;
            Name?: FreeText;
            Version?: FreeText;
            Status?: BuildStatus;
            SizeOnDisk?: PositiveLong;
            CreationTime?: Timestamp;
        }
        export interface ConflictException {
            Message?: NonEmptyString;
        }
        export interface CreateAliasInput {
            Name: NonZeroAndMaxString;
            Description?: NonZeroAndMaxString;
            RoutingStrategy?: RoutingStrategy;
        }
        export interface CreateAliasOutput {
            Alias?: Alias;
        }
        export interface CreateBuildInput {
            Name?: NonZeroAndMaxString;
            Version?: NonZeroAndMaxString;
        }
        export interface CreateBuildOutput {
            Build?: Build;
            UploadCredentials?: AwsCredentials;
            StorageLocation?: S3Location;
        }
        export interface CreateFleetInput {
            Name: NonZeroAndMaxString;
            Description?: NonZeroAndMaxString;
            BuildId: BuildId;
            ServerLaunchPath: NonZeroAndMaxString;
            ServerLaunchParameters?: NonZeroAndMaxString;
            LogPaths?: StringList;
            EC2InstanceType: EC2InstanceType;
            EC2InboundPermissions?: IpPermissionsList;
        }
        export interface CreateFleetOutput {
            FleetAttributes?: FleetAttributes;
        }
        export interface CreateGameSessionInput {
            FleetId?: FleetId;
            AliasId?: AliasId;
            MaximumPlayerSessionCount: WholeNumber;
            Name?: NonZeroAndMaxString;
            GameProperties?: GamePropertyList;
        }
        export interface CreateGameSessionOutput {
            GameSession?: GameSession;
        }
        export interface CreatePlayerSessionInput {
            GameSessionId: GameSessionId;
            PlayerId: NonZeroAndMaxString;
        }
        export interface CreatePlayerSessionOutput {
            PlayerSession?: PlayerSession;
        }
        export interface CreatePlayerSessionsInput {
            GameSessionId: GameSessionId;
            PlayerIds: PlayerIdList;
        }
        export interface CreatePlayerSessionsOutput {
            PlayerSessions?: PlayerSessionList;
        }
        export interface DeleteAliasInput {
            AliasId: AliasId;
        }
        export interface DeleteBuildInput {
            BuildId: BuildId;
        }
        export interface DeleteFleetInput {
            FleetId: FleetId;
        }
        export interface DescribeAliasInput {
            AliasId: AliasId;
        }
        export interface DescribeAliasOutput {
            Alias?: Alias;
        }
        export interface DescribeBuildInput {
            BuildId: BuildId;
        }
        export interface DescribeBuildOutput {
            Build?: Build;
        }
        export interface DescribeEC2InstanceLimitsInput {
            EC2InstanceType?: EC2InstanceType;
        }
        export interface DescribeEC2InstanceLimitsOutput {
            EC2InstanceLimits?: EC2InstanceLimitList;
        }
        export interface DescribeFleetAttributesInput {
            FleetIds?: FleetIdList;
            Limit?: PositiveInteger;
            NextToken?: NonZeroAndMaxString;
        }
        export interface DescribeFleetAttributesOutput {
            FleetAttributes?: FleetAttributesList;
            NextToken?: NonZeroAndMaxString;
        }
        export interface DescribeFleetCapacityInput {
            FleetIds?: FleetIdList;
            Limit?: PositiveInteger;
            NextToken?: NonZeroAndMaxString;
        }
        export interface DescribeFleetCapacityOutput {
            FleetCapacity?: FleetCapacityList;
            NextToken?: NonZeroAndMaxString;
        }
        export interface DescribeFleetEventsInput {
            FleetId: FleetId;
            StartTime?: Timestamp;
            EndTime?: Timestamp;
            Limit?: PositiveInteger;
            NextToken?: NonZeroAndMaxString;
        }
        export interface DescribeFleetEventsOutput {
            Events?: EventList;
            NextToken?: NonZeroAndMaxString;
        }
        export interface DescribeFleetPortSettingsInput {
            FleetId: FleetId;
        }
        export interface DescribeFleetPortSettingsOutput {
            InboundPermissions?: IpPermissionsList;
        }
        export interface DescribeFleetUtilizationInput {
            FleetIds?: FleetIdList;
            Limit?: PositiveInteger;
            NextToken?: NonZeroAndMaxString;
        }
        export interface DescribeFleetUtilizationOutput {
            FleetUtilization?: FleetUtilizationList;
            NextToken?: NonZeroAndMaxString;
        }
        export interface DescribeGameSessionsInput {
            FleetId?: FleetId;
            GameSessionId?: GameSessionId;
            AliasId?: AliasId;
            StatusFilter?: NonZeroAndMaxString;
            Limit?: PositiveInteger;
            NextToken?: NonZeroAndMaxString;
        }
        export interface DescribeGameSessionsOutput {
            GameSessions?: GameSessionList;
            NextToken?: NonZeroAndMaxString;
        }
        export interface DescribePlayerSessionsInput {
            GameSessionId?: GameSessionId;
            PlayerId?: NonZeroAndMaxString;
            PlayerSessionId?: PlayerSessionId;
            PlayerSessionStatusFilter?: NonZeroAndMaxString;
            Limit?: PositiveInteger;
            NextToken?: NonZeroAndMaxString;
        }
        export interface DescribePlayerSessionsOutput {
            PlayerSessions?: PlayerSessionList;
            NextToken?: NonZeroAndMaxString;
        }
        export interface EC2InstanceCounts {
            DESIRED?: WholeNumber;
            PENDING?: WholeNumber;
            ACTIVE?: WholeNumber;
            TERMINATING?: WholeNumber;
        }
        export interface EC2InstanceLimit {
            EC2InstanceType?: EC2InstanceType;
            CurrentInstances?: WholeNumber;
            InstanceLimit?: WholeNumber;
        }
        export interface Event {
            EventId?: NonZeroAndMaxString;
            ResourceId?: NonZeroAndMaxString;
            EventCode?: EventCode;
            Message?: NonEmptyString;
            EventTime?: Timestamp;
        }
        export interface FleetAttributes {
            FleetId?: FleetId;
            Description?: NonZeroAndMaxString;
            Name?: NonZeroAndMaxString;
            CreationTime?: Timestamp;
            TerminationTime?: Timestamp;
            Status?: FleetStatus;
            BuildId?: BuildId;
            ServerLaunchPath?: NonZeroAndMaxString;
            ServerLaunchParameters?: NonZeroAndMaxString;
            LogPaths?: StringList;
        }
        export interface FleetCapacity {
            FleetId?: FleetId;
            InstanceType?: EC2InstanceType;
            InstanceCounts?: EC2InstanceCounts;
        }
        export interface FleetCapacityExceededException {
            Message?: NonEmptyString;
        }
        export interface FleetUtilization {
            FleetId?: FleetId;
            ActiveGameSessionCount?: WholeNumber;
            CurrentPlayerSessionCount?: WholeNumber;
            MaximumPlayerSessionCount?: WholeNumber;
        }
        export interface GameProperty {
            Key: GamePropertyKey;
            Value: GamePropertyValue;
        }
        export interface GameSession {
            GameSessionId?: GameSessionId;
            Name?: NonZeroAndMaxString;
            FleetId?: FleetId;
            CreationTime?: Timestamp;
            TerminationTime?: Timestamp;
            CurrentPlayerSessionCount?: WholeNumber;
            MaximumPlayerSessionCount?: WholeNumber;
            Status?: GameSessionStatus;
            GameProperties?: GamePropertyList;
            IpAddress?: IpAddress;
            PlayerSessionCreationPolicy?: PlayerSessionCreationPolicy;
        }
        export interface GameSessionFullException {
            Message?: NonEmptyString;
        }
        export interface GetGameSessionLogUrlInput {
            GameSessionId: GameSessionId;
        }
        export interface GetGameSessionLogUrlOutput {
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
            FromPort: PortNumber;
            ToPort: PortNumber;
            IpRange: NonBlankString;
            Protocol: IpProtocol;
        }
        export interface LimitExceededException {
            Message?: NonEmptyString;
        }
        export interface ListAliasesInput {
            RoutingStrategyType?: RoutingStrategyType;
            Name?: NonEmptyString;
            Limit?: PositiveInteger;
            NextToken?: NonEmptyString;
        }
        export interface ListAliasesOutput {
            Aliases?: AliasList;
            NextToken?: NonEmptyString;
        }
        export interface ListBuildsInput {
            Status?: BuildStatus;
            Limit?: PositiveInteger;
            NextToken?: NonEmptyString;
        }
        export interface ListBuildsOutput {
            Builds?: BuildList;
            NextToken?: NonEmptyString;
        }
        export interface ListFleetsInput {
            BuildId?: BuildId;
            Limit?: PositiveInteger;
            NextToken?: NonZeroAndMaxString;
        }
        export interface ListFleetsOutput {
            FleetIds?: FleetIdList;
            NextToken?: NonZeroAndMaxString;
        }
        export interface NotFoundException {
            Message?: NonEmptyString;
        }
        export interface PlayerSession {
            PlayerSessionId?: PlayerSessionId;
            PlayerId?: NonZeroAndMaxString;
            GameSessionId?: GameSessionId;
            FleetId?: FleetId;
            CreationTime?: Timestamp;
            TerminationTime?: Timestamp;
            Status?: PlayerSessionStatus;
            IpAddress?: IpAddress;
        }
        export interface RequestUploadCredentialsInput {
            BuildId: BuildId;
        }
        export interface RequestUploadCredentialsOutput {
            UploadCredentials?: AwsCredentials;
            StorageLocation?: S3Location;
        }
        export interface ResolveAliasInput {
            AliasId: AliasId;
        }
        export interface ResolveAliasOutput {
            FleetId?: FleetId;
        }
        export interface RoutingStrategy {
            Type?: RoutingStrategyType;
            FleetId?: FleetId;
            Message?: FreeText;
        }
        export interface S3Location {
            Bucket?: NonEmptyString;
            Key?: NonEmptyString;
        }
        export interface TerminalRoutingStrategyException {
            Message?: NonEmptyString;
        }
        export interface UnauthorizedException {
            Message?: NonEmptyString;
        }
        export interface UpdateAliasInput {
            AliasId: AliasId;
            Name?: NonZeroAndMaxString;
            Description?: NonZeroAndMaxString;
            RoutingStrategy?: RoutingStrategy;
        }
        export interface UpdateAliasOutput {
            Alias?: Alias;
        }
        export interface UpdateBuildInput {
            BuildId: BuildId;
            Name?: NonZeroAndMaxString;
            Version?: NonZeroAndMaxString;
        }
        export interface UpdateBuildOutput {
            Build?: Build;
        }
        export interface UpdateFleetAttributesInput {
            FleetId: FleetId;
            Name?: NonZeroAndMaxString;
            Description?: NonZeroAndMaxString;
        }
        export interface UpdateFleetAttributesOutput {
            FleetId?: FleetId;
        }
        export interface UpdateFleetCapacityInput {
            FleetId: FleetId;
            DesiredInstances: WholeNumber;
        }
        export interface UpdateFleetCapacityOutput {
            FleetId?: FleetId;
        }
        export interface UpdateFleetPortSettingsInput {
            FleetId: FleetId;
            InboundPermissionAuthorizations?: IpPermissionsList;
            InboundPermissionRevocations?: IpPermissionsList;
        }
        export interface UpdateFleetPortSettingsOutput {
            FleetId?: FleetId;
        }
        export interface UpdateGameSessionInput {
            GameSessionId: GameSessionId;
            MaximumPlayerSessionCount?: WholeNumber;
            Name?: NonZeroAndMaxString;
            PlayerSessionCreationPolicy?: PlayerSessionCreationPolicy;
        }
        export interface UpdateGameSessionOutput {
            GameSession?: GameSession;
        }

    }
}
