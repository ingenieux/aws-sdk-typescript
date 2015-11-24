// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {
    export class ElastiCache {
      constructor(options?: any);
      addTagsToResource(params: ElastiCacheAddTagsToResourceMessage, callback: (err: ElastiCacheCacheClusterNotFoundFault|ElastiCacheSnapshotNotFoundFault|ElastiCacheTagQuotaPerResourceExceeded|ElastiCacheInvalidARNFault|any, data: ElastiCacheTagListMessage|any) => void): void;
      authorizeCacheSecurityGroupIngress(params: ElastiCacheAuthorizeCacheSecurityGroupIngressMessage, callback: (err: ElastiCacheCacheSecurityGroupNotFoundFault|ElastiCacheInvalidCacheSecurityGroupStateFault|ElastiCacheAuthorizationAlreadyExistsFault|ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: ElastiCacheAuthorizeCacheSecurityGroupIngressResult|any) => void): void;
      copySnapshot(params: ElastiCacheCopySnapshotMessage, callback: (err: ElastiCacheSnapshotAlreadyExistsFault|ElastiCacheSnapshotNotFoundFault|ElastiCacheSnapshotQuotaExceededFault|ElastiCacheInvalidSnapshotStateFault|ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: ElastiCacheCopySnapshotResult|any) => void): void;
      createCacheCluster(params: ElastiCacheCreateCacheClusterMessage, callback: (err: ElastiCacheReplicationGroupNotFoundFault|ElastiCacheInvalidReplicationGroupStateFault|ElastiCacheCacheClusterAlreadyExistsFault|ElastiCacheInsufficientCacheClusterCapacityFault|ElastiCacheCacheSecurityGroupNotFoundFault|ElastiCacheCacheSubnetGroupNotFoundFault|ElastiCacheClusterQuotaForCustomerExceededFault|ElastiCacheNodeQuotaForClusterExceededFault|ElastiCacheNodeQuotaForCustomerExceededFault|ElastiCacheCacheParameterGroupNotFoundFault|ElastiCacheInvalidVPCNetworkStateFault|ElastiCacheTagQuotaPerResourceExceeded|ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: ElastiCacheCreateCacheClusterResult|any) => void): void;
      createCacheParameterGroup(params: ElastiCacheCreateCacheParameterGroupMessage, callback: (err: ElastiCacheCacheParameterGroupQuotaExceededFault|ElastiCacheCacheParameterGroupAlreadyExistsFault|ElastiCacheInvalidCacheParameterGroupStateFault|ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: ElastiCacheCreateCacheParameterGroupResult|any) => void): void;
      createCacheSecurityGroup(params: ElastiCacheCreateCacheSecurityGroupMessage, callback: (err: ElastiCacheCacheSecurityGroupAlreadyExistsFault|ElastiCacheCacheSecurityGroupQuotaExceededFault|ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: ElastiCacheCreateCacheSecurityGroupResult|any) => void): void;
      createCacheSubnetGroup(params: ElastiCacheCreateCacheSubnetGroupMessage, callback: (err: ElastiCacheCacheSubnetGroupAlreadyExistsFault|ElastiCacheCacheSubnetGroupQuotaExceededFault|ElastiCacheCacheSubnetQuotaExceededFault|ElastiCacheInvalidSubnet|any, data: ElastiCacheCreateCacheSubnetGroupResult|any) => void): void;
      createReplicationGroup(params: ElastiCacheCreateReplicationGroupMessage, callback: (err: ElastiCacheCacheClusterNotFoundFault|ElastiCacheInvalidCacheClusterStateFault|ElastiCacheReplicationGroupAlreadyExistsFault|ElastiCacheInsufficientCacheClusterCapacityFault|ElastiCacheCacheSecurityGroupNotFoundFault|ElastiCacheCacheSubnetGroupNotFoundFault|ElastiCacheClusterQuotaForCustomerExceededFault|ElastiCacheNodeQuotaForClusterExceededFault|ElastiCacheNodeQuotaForCustomerExceededFault|ElastiCacheCacheParameterGroupNotFoundFault|ElastiCacheInvalidVPCNetworkStateFault|ElastiCacheTagQuotaPerResourceExceeded|ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: ElastiCacheCreateReplicationGroupResult|any) => void): void;
      createSnapshot(params: ElastiCacheCreateSnapshotMessage, callback: (err: ElastiCacheSnapshotAlreadyExistsFault|ElastiCacheCacheClusterNotFoundFault|ElastiCacheInvalidCacheClusterStateFault|ElastiCacheSnapshotQuotaExceededFault|ElastiCacheSnapshotFeatureNotSupportedFault|ElastiCacheInvalidParameterCombinationException|ElastiCacheInvalidParameterValueException|any, data: ElastiCacheCreateSnapshotResult|any) => void): void;
      deleteCacheCluster(params: ElastiCacheDeleteCacheClusterMessage, callback: (err: ElastiCacheCacheClusterNotFoundFault|ElastiCacheInvalidCacheClusterStateFault|ElastiCacheSnapshotAlreadyExistsFault|ElastiCacheSnapshotFeatureNotSupportedFault|ElastiCacheSnapshotQuotaExceededFault|ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: ElastiCacheDeleteCacheClusterResult|any) => void): void;
      deleteCacheParameterGroup(params: ElastiCacheDeleteCacheParameterGroupMessage, callback: (err: ElastiCacheInvalidCacheParameterGroupStateFault|ElastiCacheCacheParameterGroupNotFoundFault|ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: any) => void): void;
      deleteCacheSecurityGroup(params: ElastiCacheDeleteCacheSecurityGroupMessage, callback: (err: ElastiCacheInvalidCacheSecurityGroupStateFault|ElastiCacheCacheSecurityGroupNotFoundFault|ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: any) => void): void;
      deleteCacheSubnetGroup(params: ElastiCacheDeleteCacheSubnetGroupMessage, callback: (err: ElastiCacheCacheSubnetGroupInUse|ElastiCacheCacheSubnetGroupNotFoundFault|any, data: any) => void): void;
      deleteReplicationGroup(params: ElastiCacheDeleteReplicationGroupMessage, callback: (err: ElastiCacheReplicationGroupNotFoundFault|ElastiCacheInvalidReplicationGroupStateFault|ElastiCacheSnapshotAlreadyExistsFault|ElastiCacheSnapshotFeatureNotSupportedFault|ElastiCacheSnapshotQuotaExceededFault|ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: ElastiCacheDeleteReplicationGroupResult|any) => void): void;
      deleteSnapshot(params: ElastiCacheDeleteSnapshotMessage, callback: (err: ElastiCacheSnapshotNotFoundFault|ElastiCacheInvalidSnapshotStateFault|ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: ElastiCacheDeleteSnapshotResult|any) => void): void;
      describeCacheClusters(params: ElastiCacheDescribeCacheClustersMessage, callback: (err: ElastiCacheCacheClusterNotFoundFault|ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: ElastiCacheCacheClusterMessage|any) => void): void;
      describeCacheEngineVersions(params: ElastiCacheDescribeCacheEngineVersionsMessage, callback: (err: any, data: ElastiCacheCacheEngineVersionMessage|any) => void): void;
      describeCacheParameterGroups(params: ElastiCacheDescribeCacheParameterGroupsMessage, callback: (err: ElastiCacheCacheParameterGroupNotFoundFault|ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: ElastiCacheCacheParameterGroupsMessage|any) => void): void;
      describeCacheParameters(params: ElastiCacheDescribeCacheParametersMessage, callback: (err: ElastiCacheCacheParameterGroupNotFoundFault|ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: ElastiCacheCacheParameterGroupDetails|any) => void): void;
      describeCacheSecurityGroups(params: ElastiCacheDescribeCacheSecurityGroupsMessage, callback: (err: ElastiCacheCacheSecurityGroupNotFoundFault|ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: ElastiCacheCacheSecurityGroupMessage|any) => void): void;
      describeCacheSubnetGroups(params: ElastiCacheDescribeCacheSubnetGroupsMessage, callback: (err: ElastiCacheCacheSubnetGroupNotFoundFault|any, data: ElastiCacheCacheSubnetGroupMessage|any) => void): void;
      describeEngineDefaultParameters(params: ElastiCacheDescribeEngineDefaultParametersMessage, callback: (err: ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: ElastiCacheDescribeEngineDefaultParametersResult|any) => void): void;
      describeEvents(params: ElastiCacheDescribeEventsMessage, callback: (err: ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: ElastiCacheEventsMessage|any) => void): void;
      describeReplicationGroups(params: ElastiCacheDescribeReplicationGroupsMessage, callback: (err: ElastiCacheReplicationGroupNotFoundFault|ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: ElastiCacheReplicationGroupMessage|any) => void): void;
      describeReservedCacheNodes(params: ElastiCacheDescribeReservedCacheNodesMessage, callback: (err: ElastiCacheReservedCacheNodeNotFoundFault|ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: ElastiCacheReservedCacheNodeMessage|any) => void): void;
      describeReservedCacheNodesOfferings(params: ElastiCacheDescribeReservedCacheNodesOfferingsMessage, callback: (err: ElastiCacheReservedCacheNodesOfferingNotFoundFault|ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: ElastiCacheReservedCacheNodesOfferingMessage|any) => void): void;
      describeSnapshots(params: ElastiCacheDescribeSnapshotsMessage, callback: (err: ElastiCacheCacheClusterNotFoundFault|ElastiCacheSnapshotNotFoundFault|ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: ElastiCacheDescribeSnapshotsListMessage|any) => void): void;
      listTagsForResource(params: ElastiCacheListTagsForResourceMessage, callback: (err: ElastiCacheCacheClusterNotFoundFault|ElastiCacheSnapshotNotFoundFault|ElastiCacheInvalidARNFault|any, data: ElastiCacheTagListMessage|any) => void): void;
      modifyCacheCluster(params: ElastiCacheModifyCacheClusterMessage, callback: (err: ElastiCacheInvalidCacheClusterStateFault|ElastiCacheInvalidCacheSecurityGroupStateFault|ElastiCacheInsufficientCacheClusterCapacityFault|ElastiCacheCacheClusterNotFoundFault|ElastiCacheNodeQuotaForClusterExceededFault|ElastiCacheNodeQuotaForCustomerExceededFault|ElastiCacheCacheSecurityGroupNotFoundFault|ElastiCacheCacheParameterGroupNotFoundFault|ElastiCacheInvalidVPCNetworkStateFault|ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: ElastiCacheModifyCacheClusterResult|any) => void): void;
      modifyCacheParameterGroup(params: ElastiCacheModifyCacheParameterGroupMessage, callback: (err: ElastiCacheCacheParameterGroupNotFoundFault|ElastiCacheInvalidCacheParameterGroupStateFault|ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: ElastiCacheCacheParameterGroupNameMessage|any) => void): void;
      modifyCacheSubnetGroup(params: ElastiCacheModifyCacheSubnetGroupMessage, callback: (err: ElastiCacheCacheSubnetGroupNotFoundFault|ElastiCacheCacheSubnetQuotaExceededFault|ElastiCacheSubnetInUse|ElastiCacheInvalidSubnet|any, data: ElastiCacheModifyCacheSubnetGroupResult|any) => void): void;
      modifyReplicationGroup(params: ElastiCacheModifyReplicationGroupMessage, callback: (err: ElastiCacheReplicationGroupNotFoundFault|ElastiCacheInvalidReplicationGroupStateFault|ElastiCacheInvalidCacheClusterStateFault|ElastiCacheInvalidCacheSecurityGroupStateFault|ElastiCacheInsufficientCacheClusterCapacityFault|ElastiCacheCacheClusterNotFoundFault|ElastiCacheNodeQuotaForClusterExceededFault|ElastiCacheNodeQuotaForCustomerExceededFault|ElastiCacheCacheSecurityGroupNotFoundFault|ElastiCacheCacheParameterGroupNotFoundFault|ElastiCacheInvalidVPCNetworkStateFault|ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: ElastiCacheModifyReplicationGroupResult|any) => void): void;
      purchaseReservedCacheNodesOffering(params: ElastiCachePurchaseReservedCacheNodesOfferingMessage, callback: (err: ElastiCacheReservedCacheNodesOfferingNotFoundFault|ElastiCacheReservedCacheNodeAlreadyExistsFault|ElastiCacheReservedCacheNodeQuotaExceededFault|ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: ElastiCachePurchaseReservedCacheNodesOfferingResult|any) => void): void;
      rebootCacheCluster(params: ElastiCacheRebootCacheClusterMessage, callback: (err: ElastiCacheInvalidCacheClusterStateFault|ElastiCacheCacheClusterNotFoundFault|any, data: ElastiCacheRebootCacheClusterResult|any) => void): void;
      removeTagsFromResource(params: ElastiCacheRemoveTagsFromResourceMessage, callback: (err: ElastiCacheCacheClusterNotFoundFault|ElastiCacheSnapshotNotFoundFault|ElastiCacheInvalidARNFault|ElastiCacheTagNotFoundFault|any, data: ElastiCacheTagListMessage|any) => void): void;
      resetCacheParameterGroup(params: ElastiCacheResetCacheParameterGroupMessage, callback: (err: ElastiCacheInvalidCacheParameterGroupStateFault|ElastiCacheCacheParameterGroupNotFoundFault|ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: ElastiCacheCacheParameterGroupNameMessage|any) => void): void;
      revokeCacheSecurityGroupIngress(params: ElastiCacheRevokeCacheSecurityGroupIngressMessage, callback: (err: ElastiCacheCacheSecurityGroupNotFoundFault|ElastiCacheAuthorizationNotFoundFault|ElastiCacheInvalidCacheSecurityGroupStateFault|ElastiCacheInvalidParameterValueException|ElastiCacheInvalidParameterCombinationException|any, data: ElastiCacheRevokeCacheSecurityGroupIngressResult|any) => void): void;
    }

    export type ElastiCacheAZMode = string;
    export interface ElastiCacheAddTagsToResourceMessage {
        ResourceName: ElastiCacheString;
        Tags: ElastiCacheTagList;
    }

    export interface ElastiCacheAuthorizationAlreadyExistsFault {
    }

    export interface ElastiCacheAuthorizationNotFoundFault {
    }

    export interface ElastiCacheAuthorizeCacheSecurityGroupIngressMessage {
        CacheSecurityGroupName: ElastiCacheString;
        EC2SecurityGroupName: ElastiCacheString;
        EC2SecurityGroupOwnerId: ElastiCacheString;
    }

    export type ElastiCacheAutomaticFailoverStatus = string;
    export interface ElastiCacheAvailabilityZone {
        Name?: ElastiCacheString;
    }

    export type ElastiCacheAvailabilityZonesList = Array<ElastiCacheString>;
    export type ElastiCacheAwsQueryErrorMessage = string;
    export type ElastiCacheBoolean = boolean;
    export type ElastiCacheBooleanOptional = boolean;
    export interface ElastiCacheCacheCluster {
        CacheClusterId?: ElastiCacheString;
        ConfigurationEndpoint?: ElastiCacheEndpoint;
        ClientDownloadLandingPage?: ElastiCacheString;
        CacheNodeType?: ElastiCacheString;
        Engine?: ElastiCacheString;
        EngineVersion?: ElastiCacheString;
        CacheClusterStatus?: ElastiCacheString;
        NumCacheNodes?: ElastiCacheIntegerOptional;
        PreferredAvailabilityZone?: ElastiCacheString;
        CacheClusterCreateTime?: ElastiCacheTStamp;
        PreferredMaintenanceWindow?: ElastiCacheString;
        PendingModifiedValues?: ElastiCachePendingModifiedValues;
        NotificationConfiguration?: ElastiCacheNotificationConfiguration;
        CacheSecurityGroups?: ElastiCacheCacheSecurityGroupMembershipList;
        CacheParameterGroup?: ElastiCacheCacheParameterGroupStatus;
        CacheSubnetGroupName?: ElastiCacheString;
        CacheNodes?: ElastiCacheCacheNodeList;
        AutoMinorVersionUpgrade?: ElastiCacheBoolean;
        SecurityGroups?: ElastiCacheSecurityGroupMembershipList;
        ReplicationGroupId?: ElastiCacheString;
        SnapshotRetentionLimit?: ElastiCacheIntegerOptional;
        SnapshotWindow?: ElastiCacheString;
    }

    export interface ElastiCacheCacheClusterAlreadyExistsFault {
    }

    export type ElastiCacheCacheClusterList = Array<ElastiCacheCacheCluster>;
    export interface ElastiCacheCacheClusterMessage {
        Marker?: ElastiCacheString;
        CacheClusters?: ElastiCacheCacheClusterList;
    }

    export interface ElastiCacheCacheClusterNotFoundFault {
    }

    export interface ElastiCacheCacheEngineVersion {
        Engine?: ElastiCacheString;
        EngineVersion?: ElastiCacheString;
        CacheParameterGroupFamily?: ElastiCacheString;
        CacheEngineDescription?: ElastiCacheString;
        CacheEngineVersionDescription?: ElastiCacheString;
    }

    export type ElastiCacheCacheEngineVersionList = Array<ElastiCacheCacheEngineVersion>;
    export interface ElastiCacheCacheEngineVersionMessage {
        Marker?: ElastiCacheString;
        CacheEngineVersions?: ElastiCacheCacheEngineVersionList;
    }

    export interface ElastiCacheCacheNode {
        CacheNodeId?: ElastiCacheString;
        CacheNodeStatus?: ElastiCacheString;
        CacheNodeCreateTime?: ElastiCacheTStamp;
        Endpoint?: ElastiCacheEndpoint;
        ParameterGroupStatus?: ElastiCacheString;
        SourceCacheNodeId?: ElastiCacheString;
        CustomerAvailabilityZone?: ElastiCacheString;
    }

    export type ElastiCacheCacheNodeIdsList = Array<ElastiCacheString>;
    export type ElastiCacheCacheNodeList = Array<ElastiCacheCacheNode>;
    export interface ElastiCacheCacheNodeTypeSpecificParameter {
        ParameterName?: ElastiCacheString;
        Description?: ElastiCacheString;
        Source?: ElastiCacheString;
        DataType?: ElastiCacheString;
        AllowedValues?: ElastiCacheString;
        IsModifiable?: ElastiCacheBoolean;
        MinimumEngineVersion?: ElastiCacheString;
        CacheNodeTypeSpecificValues?: ElastiCacheCacheNodeTypeSpecificValueList;
    }

    export type ElastiCacheCacheNodeTypeSpecificParametersList = Array<ElastiCacheCacheNodeTypeSpecificParameter>;
    export interface ElastiCacheCacheNodeTypeSpecificValue {
        CacheNodeType?: ElastiCacheString;
        Value?: ElastiCacheString;
    }

    export type ElastiCacheCacheNodeTypeSpecificValueList = Array<ElastiCacheCacheNodeTypeSpecificValue>;
    export interface ElastiCacheCacheParameterGroup {
        CacheParameterGroupName?: ElastiCacheString;
        CacheParameterGroupFamily?: ElastiCacheString;
        Description?: ElastiCacheString;
    }

    export interface ElastiCacheCacheParameterGroupAlreadyExistsFault {
    }

    export interface ElastiCacheCacheParameterGroupDetails {
        Marker?: ElastiCacheString;
        Parameters?: ElastiCacheParametersList;
        CacheNodeTypeSpecificParameters?: ElastiCacheCacheNodeTypeSpecificParametersList;
    }

    export type ElastiCacheCacheParameterGroupList = Array<ElastiCacheCacheParameterGroup>;
    export interface ElastiCacheCacheParameterGroupNameMessage {
        CacheParameterGroupName?: ElastiCacheString;
    }

    export interface ElastiCacheCacheParameterGroupNotFoundFault {
    }

    export interface ElastiCacheCacheParameterGroupQuotaExceededFault {
    }

    export interface ElastiCacheCacheParameterGroupStatus {
        CacheParameterGroupName?: ElastiCacheString;
        ParameterApplyStatus?: ElastiCacheString;
        CacheNodeIdsToReboot?: ElastiCacheCacheNodeIdsList;
    }

    export interface ElastiCacheCacheParameterGroupsMessage {
        Marker?: ElastiCacheString;
        CacheParameterGroups?: ElastiCacheCacheParameterGroupList;
    }

    export interface ElastiCacheCacheSecurityGroup {
        OwnerId?: ElastiCacheString;
        CacheSecurityGroupName?: ElastiCacheString;
        Description?: ElastiCacheString;
        EC2SecurityGroups?: ElastiCacheEC2SecurityGroupList;
    }

    export interface ElastiCacheCacheSecurityGroupAlreadyExistsFault {
    }

    export interface ElastiCacheCacheSecurityGroupMembership {
        CacheSecurityGroupName?: ElastiCacheString;
        Status?: ElastiCacheString;
    }

    export type ElastiCacheCacheSecurityGroupMembershipList = Array<ElastiCacheCacheSecurityGroupMembership>;
    export interface ElastiCacheCacheSecurityGroupMessage {
        Marker?: ElastiCacheString;
        CacheSecurityGroups?: ElastiCacheCacheSecurityGroups;
    }

    export type ElastiCacheCacheSecurityGroupNameList = Array<ElastiCacheString>;
    export interface ElastiCacheCacheSecurityGroupNotFoundFault {
    }

    export interface ElastiCacheCacheSecurityGroupQuotaExceededFault {
    }

    export type ElastiCacheCacheSecurityGroups = Array<ElastiCacheCacheSecurityGroup>;
    export interface ElastiCacheCacheSubnetGroup {
        CacheSubnetGroupName?: ElastiCacheString;
        CacheSubnetGroupDescription?: ElastiCacheString;
        VpcId?: ElastiCacheString;
        Subnets?: ElastiCacheSubnetList;
    }

    export interface ElastiCacheCacheSubnetGroupAlreadyExistsFault {
    }

    export interface ElastiCacheCacheSubnetGroupInUse {
    }

    export interface ElastiCacheCacheSubnetGroupMessage {
        Marker?: ElastiCacheString;
        CacheSubnetGroups?: ElastiCacheCacheSubnetGroups;
    }

    export interface ElastiCacheCacheSubnetGroupNotFoundFault {
    }

    export interface ElastiCacheCacheSubnetGroupQuotaExceededFault {
    }

    export type ElastiCacheCacheSubnetGroups = Array<ElastiCacheCacheSubnetGroup>;
    export interface ElastiCacheCacheSubnetQuotaExceededFault {
    }

    export type ElastiCacheClusterIdList = Array<ElastiCacheString>;
    export interface ElastiCacheClusterQuotaForCustomerExceededFault {
    }

    export interface ElastiCacheCopySnapshotMessage {
        SourceSnapshotName: ElastiCacheString;
        TargetSnapshotName: ElastiCacheString;
    }

    export interface ElastiCacheCreateCacheClusterMessage {
        CacheClusterId: ElastiCacheString;
        ReplicationGroupId?: ElastiCacheString;
        AZMode?: ElastiCacheAZMode;
        PreferredAvailabilityZone?: ElastiCacheString;
        PreferredAvailabilityZones?: ElastiCachePreferredAvailabilityZoneList;
        NumCacheNodes?: ElastiCacheIntegerOptional;
        CacheNodeType?: ElastiCacheString;
        Engine?: ElastiCacheString;
        EngineVersion?: ElastiCacheString;
        CacheParameterGroupName?: ElastiCacheString;
        CacheSubnetGroupName?: ElastiCacheString;
        CacheSecurityGroupNames?: ElastiCacheCacheSecurityGroupNameList;
        SecurityGroupIds?: ElastiCacheSecurityGroupIdsList;
        Tags?: ElastiCacheTagList;
        SnapshotArns?: ElastiCacheSnapshotArnsList;
        SnapshotName?: ElastiCacheString;
        PreferredMaintenanceWindow?: ElastiCacheString;
        Port?: ElastiCacheIntegerOptional;
        NotificationTopicArn?: ElastiCacheString;
        AutoMinorVersionUpgrade?: ElastiCacheBooleanOptional;
        SnapshotRetentionLimit?: ElastiCacheIntegerOptional;
        SnapshotWindow?: ElastiCacheString;
    }

    export interface ElastiCacheCreateCacheParameterGroupMessage {
        CacheParameterGroupName: ElastiCacheString;
        CacheParameterGroupFamily: ElastiCacheString;
        Description: ElastiCacheString;
    }

    export interface ElastiCacheCreateCacheSecurityGroupMessage {
        CacheSecurityGroupName: ElastiCacheString;
        Description: ElastiCacheString;
    }

    export interface ElastiCacheCreateCacheSubnetGroupMessage {
        CacheSubnetGroupName: ElastiCacheString;
        CacheSubnetGroupDescription: ElastiCacheString;
        SubnetIds: ElastiCacheSubnetIdentifierList;
    }

    export interface ElastiCacheCreateReplicationGroupMessage {
        ReplicationGroupId: ElastiCacheString;
        ReplicationGroupDescription: ElastiCacheString;
        PrimaryClusterId?: ElastiCacheString;
        AutomaticFailoverEnabled?: ElastiCacheBooleanOptional;
        NumCacheClusters?: ElastiCacheIntegerOptional;
        PreferredCacheClusterAZs?: ElastiCacheAvailabilityZonesList;
        CacheNodeType?: ElastiCacheString;
        Engine?: ElastiCacheString;
        EngineVersion?: ElastiCacheString;
        CacheParameterGroupName?: ElastiCacheString;
        CacheSubnetGroupName?: ElastiCacheString;
        CacheSecurityGroupNames?: ElastiCacheCacheSecurityGroupNameList;
        SecurityGroupIds?: ElastiCacheSecurityGroupIdsList;
        Tags?: ElastiCacheTagList;
        SnapshotArns?: ElastiCacheSnapshotArnsList;
        SnapshotName?: ElastiCacheString;
        PreferredMaintenanceWindow?: ElastiCacheString;
        Port?: ElastiCacheIntegerOptional;
        NotificationTopicArn?: ElastiCacheString;
        AutoMinorVersionUpgrade?: ElastiCacheBooleanOptional;
        SnapshotRetentionLimit?: ElastiCacheIntegerOptional;
        SnapshotWindow?: ElastiCacheString;
    }

    export interface ElastiCacheCreateSnapshotMessage {
        CacheClusterId: ElastiCacheString;
        SnapshotName: ElastiCacheString;
    }

    export interface ElastiCacheDeleteCacheClusterMessage {
        CacheClusterId: ElastiCacheString;
        FinalSnapshotIdentifier?: ElastiCacheString;
    }

    export interface ElastiCacheDeleteCacheParameterGroupMessage {
        CacheParameterGroupName: ElastiCacheString;
    }

    export interface ElastiCacheDeleteCacheSecurityGroupMessage {
        CacheSecurityGroupName: ElastiCacheString;
    }

    export interface ElastiCacheDeleteCacheSubnetGroupMessage {
        CacheSubnetGroupName: ElastiCacheString;
    }

    export interface ElastiCacheDeleteReplicationGroupMessage {
        ReplicationGroupId: ElastiCacheString;
        RetainPrimaryCluster?: ElastiCacheBooleanOptional;
        FinalSnapshotIdentifier?: ElastiCacheString;
    }

    export interface ElastiCacheDeleteSnapshotMessage {
        SnapshotName: ElastiCacheString;
    }

    export interface ElastiCacheDescribeCacheClustersMessage {
        CacheClusterId?: ElastiCacheString;
        MaxRecords?: ElastiCacheIntegerOptional;
        Marker?: ElastiCacheString;
        ShowCacheNodeInfo?: ElastiCacheBooleanOptional;
    }

    export interface ElastiCacheDescribeCacheEngineVersionsMessage {
        Engine?: ElastiCacheString;
        EngineVersion?: ElastiCacheString;
        CacheParameterGroupFamily?: ElastiCacheString;
        MaxRecords?: ElastiCacheIntegerOptional;
        Marker?: ElastiCacheString;
        DefaultOnly?: ElastiCacheBoolean;
    }

    export interface ElastiCacheDescribeCacheParameterGroupsMessage {
        CacheParameterGroupName?: ElastiCacheString;
        MaxRecords?: ElastiCacheIntegerOptional;
        Marker?: ElastiCacheString;
    }

    export interface ElastiCacheDescribeCacheParametersMessage {
        CacheParameterGroupName: ElastiCacheString;
        Source?: ElastiCacheString;
        MaxRecords?: ElastiCacheIntegerOptional;
        Marker?: ElastiCacheString;
    }

    export interface ElastiCacheDescribeCacheSecurityGroupsMessage {
        CacheSecurityGroupName?: ElastiCacheString;
        MaxRecords?: ElastiCacheIntegerOptional;
        Marker?: ElastiCacheString;
    }

    export interface ElastiCacheDescribeCacheSubnetGroupsMessage {
        CacheSubnetGroupName?: ElastiCacheString;
        MaxRecords?: ElastiCacheIntegerOptional;
        Marker?: ElastiCacheString;
    }

    export interface ElastiCacheDescribeEngineDefaultParametersMessage {
        CacheParameterGroupFamily: ElastiCacheString;
        MaxRecords?: ElastiCacheIntegerOptional;
        Marker?: ElastiCacheString;
    }

    export interface ElastiCacheDescribeEventsMessage {
        SourceIdentifier?: ElastiCacheString;
        SourceType?: ElastiCacheSourceType;
        StartTime?: ElastiCacheTStamp;
        EndTime?: ElastiCacheTStamp;
        Duration?: ElastiCacheIntegerOptional;
        MaxRecords?: ElastiCacheIntegerOptional;
        Marker?: ElastiCacheString;
    }

    export interface ElastiCacheDescribeReplicationGroupsMessage {
        ReplicationGroupId?: ElastiCacheString;
        MaxRecords?: ElastiCacheIntegerOptional;
        Marker?: ElastiCacheString;
    }

    export interface ElastiCacheDescribeReservedCacheNodesMessage {
        ReservedCacheNodeId?: ElastiCacheString;
        ReservedCacheNodesOfferingId?: ElastiCacheString;
        CacheNodeType?: ElastiCacheString;
        Duration?: ElastiCacheString;
        ProductDescription?: ElastiCacheString;
        OfferingType?: ElastiCacheString;
        MaxRecords?: ElastiCacheIntegerOptional;
        Marker?: ElastiCacheString;
    }

    export interface ElastiCacheDescribeReservedCacheNodesOfferingsMessage {
        ReservedCacheNodesOfferingId?: ElastiCacheString;
        CacheNodeType?: ElastiCacheString;
        Duration?: ElastiCacheString;
        ProductDescription?: ElastiCacheString;
        OfferingType?: ElastiCacheString;
        MaxRecords?: ElastiCacheIntegerOptional;
        Marker?: ElastiCacheString;
    }

    export interface ElastiCacheDescribeSnapshotsListMessage {
        Marker?: ElastiCacheString;
        Snapshots?: ElastiCacheSnapshotList;
    }

    export interface ElastiCacheDescribeSnapshotsMessage {
        CacheClusterId?: ElastiCacheString;
        SnapshotName?: ElastiCacheString;
        SnapshotSource?: ElastiCacheString;
        Marker?: ElastiCacheString;
        MaxRecords?: ElastiCacheIntegerOptional;
    }

    export type ElastiCacheDouble = number;
    export interface ElastiCacheEC2SecurityGroup {
        Status?: ElastiCacheString;
        EC2SecurityGroupName?: ElastiCacheString;
        EC2SecurityGroupOwnerId?: ElastiCacheString;
    }

    export type ElastiCacheEC2SecurityGroupList = Array<ElastiCacheEC2SecurityGroup>;
    export interface ElastiCacheEndpoint {
        Address?: ElastiCacheString;
        Port?: ElastiCacheInteger;
    }

    export interface ElastiCacheEngineDefaults {
        CacheParameterGroupFamily?: ElastiCacheString;
        Marker?: ElastiCacheString;
        Parameters?: ElastiCacheParametersList;
        CacheNodeTypeSpecificParameters?: ElastiCacheCacheNodeTypeSpecificParametersList;
    }

    export interface ElastiCacheEvent {
        SourceIdentifier?: ElastiCacheString;
        SourceType?: ElastiCacheSourceType;
        Message?: ElastiCacheString;
        Date?: ElastiCacheTStamp;
    }

    export type ElastiCacheEventList = Array<ElastiCacheEvent>;
    export interface ElastiCacheEventsMessage {
        Marker?: ElastiCacheString;
        Events?: ElastiCacheEventList;
    }

    export interface ElastiCacheInsufficientCacheClusterCapacityFault {
    }

    export type ElastiCacheInteger = number;
    export type ElastiCacheIntegerOptional = number;
    export interface ElastiCacheInvalidARNFault {
    }

    export interface ElastiCacheInvalidCacheClusterStateFault {
    }

    export interface ElastiCacheInvalidCacheParameterGroupStateFault {
    }

    export interface ElastiCacheInvalidCacheSecurityGroupStateFault {
    }

    export interface ElastiCacheInvalidParameterCombinationException {
        message?: ElastiCacheAwsQueryErrorMessage;
    }

    export interface ElastiCacheInvalidParameterValueException {
        message?: ElastiCacheAwsQueryErrorMessage;
    }

    export interface ElastiCacheInvalidReplicationGroupStateFault {
    }

    export interface ElastiCacheInvalidSnapshotStateFault {
    }

    export interface ElastiCacheInvalidSubnet {
    }

    export interface ElastiCacheInvalidVPCNetworkStateFault {
    }

    export type ElastiCacheKeyList = Array<ElastiCacheString>;
    export interface ElastiCacheListTagsForResourceMessage {
        ResourceName: ElastiCacheString;
    }

    export interface ElastiCacheModifyCacheClusterMessage {
        CacheClusterId: ElastiCacheString;
        NumCacheNodes?: ElastiCacheIntegerOptional;
        CacheNodeIdsToRemove?: ElastiCacheCacheNodeIdsList;
        AZMode?: ElastiCacheAZMode;
        NewAvailabilityZones?: ElastiCachePreferredAvailabilityZoneList;
        CacheSecurityGroupNames?: ElastiCacheCacheSecurityGroupNameList;
        SecurityGroupIds?: ElastiCacheSecurityGroupIdsList;
        PreferredMaintenanceWindow?: ElastiCacheString;
        NotificationTopicArn?: ElastiCacheString;
        CacheParameterGroupName?: ElastiCacheString;
        NotificationTopicStatus?: ElastiCacheString;
        ApplyImmediately?: ElastiCacheBoolean;
        EngineVersion?: ElastiCacheString;
        AutoMinorVersionUpgrade?: ElastiCacheBooleanOptional;
        SnapshotRetentionLimit?: ElastiCacheIntegerOptional;
        SnapshotWindow?: ElastiCacheString;
    }

    export interface ElastiCacheModifyCacheParameterGroupMessage {
        CacheParameterGroupName: ElastiCacheString;
        ParameterNameValues: ElastiCacheParameterNameValueList;
    }

    export interface ElastiCacheModifyCacheSubnetGroupMessage {
        CacheSubnetGroupName: ElastiCacheString;
        CacheSubnetGroupDescription?: ElastiCacheString;
        SubnetIds?: ElastiCacheSubnetIdentifierList;
    }

    export interface ElastiCacheModifyReplicationGroupMessage {
        ReplicationGroupId: ElastiCacheString;
        ReplicationGroupDescription?: ElastiCacheString;
        PrimaryClusterId?: ElastiCacheString;
        SnapshottingClusterId?: ElastiCacheString;
        AutomaticFailoverEnabled?: ElastiCacheBooleanOptional;
        CacheSecurityGroupNames?: ElastiCacheCacheSecurityGroupNameList;
        SecurityGroupIds?: ElastiCacheSecurityGroupIdsList;
        PreferredMaintenanceWindow?: ElastiCacheString;
        NotificationTopicArn?: ElastiCacheString;
        CacheParameterGroupName?: ElastiCacheString;
        NotificationTopicStatus?: ElastiCacheString;
        ApplyImmediately?: ElastiCacheBoolean;
        EngineVersion?: ElastiCacheString;
        AutoMinorVersionUpgrade?: ElastiCacheBooleanOptional;
        SnapshotRetentionLimit?: ElastiCacheIntegerOptional;
        SnapshotWindow?: ElastiCacheString;
    }

    export interface ElastiCacheNodeGroup {
        NodeGroupId?: ElastiCacheString;
        Status?: ElastiCacheString;
        PrimaryEndpoint?: ElastiCacheEndpoint;
        NodeGroupMembers?: ElastiCacheNodeGroupMemberList;
    }

    export type ElastiCacheNodeGroupList = Array<ElastiCacheNodeGroup>;
    export interface ElastiCacheNodeGroupMember {
        CacheClusterId?: ElastiCacheString;
        CacheNodeId?: ElastiCacheString;
        ReadEndpoint?: ElastiCacheEndpoint;
        PreferredAvailabilityZone?: ElastiCacheString;
        CurrentRole?: ElastiCacheString;
    }

    export type ElastiCacheNodeGroupMemberList = Array<ElastiCacheNodeGroupMember>;
    export interface ElastiCacheNodeQuotaForClusterExceededFault {
    }

    export interface ElastiCacheNodeQuotaForCustomerExceededFault {
    }

    export interface ElastiCacheNodeSnapshot {
        CacheNodeId?: ElastiCacheString;
        CacheSize?: ElastiCacheString;
        CacheNodeCreateTime?: ElastiCacheTStamp;
        SnapshotCreateTime?: ElastiCacheTStamp;
    }

    export type ElastiCacheNodeSnapshotList = Array<ElastiCacheNodeSnapshot>;
    export interface ElastiCacheNotificationConfiguration {
        TopicArn?: ElastiCacheString;
        TopicStatus?: ElastiCacheString;
    }

    export interface ElastiCacheParameter {
        ParameterName?: ElastiCacheString;
        ParameterValue?: ElastiCacheString;
        Description?: ElastiCacheString;
        Source?: ElastiCacheString;
        DataType?: ElastiCacheString;
        AllowedValues?: ElastiCacheString;
        IsModifiable?: ElastiCacheBoolean;
        MinimumEngineVersion?: ElastiCacheString;
    }

    export interface ElastiCacheParameterNameValue {
        ParameterName?: ElastiCacheString;
        ParameterValue?: ElastiCacheString;
    }

    export type ElastiCacheParameterNameValueList = Array<ElastiCacheParameterNameValue>;
    export type ElastiCacheParametersList = Array<ElastiCacheParameter>;
    export type ElastiCachePendingAutomaticFailoverStatus = string;
    export interface ElastiCachePendingModifiedValues {
        NumCacheNodes?: ElastiCacheIntegerOptional;
        CacheNodeIdsToRemove?: ElastiCacheCacheNodeIdsList;
        EngineVersion?: ElastiCacheString;
    }

    export type ElastiCachePreferredAvailabilityZoneList = Array<ElastiCacheString>;
    export interface ElastiCachePurchaseReservedCacheNodesOfferingMessage {
        ReservedCacheNodesOfferingId: ElastiCacheString;
        ReservedCacheNodeId?: ElastiCacheString;
        CacheNodeCount?: ElastiCacheIntegerOptional;
    }

    export interface ElastiCacheRebootCacheClusterMessage {
        CacheClusterId: ElastiCacheString;
        CacheNodeIdsToReboot: ElastiCacheCacheNodeIdsList;
    }

    export interface ElastiCacheRecurringCharge {
        RecurringChargeAmount?: ElastiCacheDouble;
        RecurringChargeFrequency?: ElastiCacheString;
    }

    export type ElastiCacheRecurringChargeList = Array<ElastiCacheRecurringCharge>;
    export interface ElastiCacheRemoveTagsFromResourceMessage {
        ResourceName: ElastiCacheString;
        TagKeys: ElastiCacheKeyList;
    }

    export interface ElastiCacheReplicationGroup {
        ReplicationGroupId?: ElastiCacheString;
        Description?: ElastiCacheString;
        Status?: ElastiCacheString;
        PendingModifiedValues?: ElastiCacheReplicationGroupPendingModifiedValues;
        MemberClusters?: ElastiCacheClusterIdList;
        NodeGroups?: ElastiCacheNodeGroupList;
        SnapshottingClusterId?: ElastiCacheString;
        AutomaticFailover?: ElastiCacheAutomaticFailoverStatus;
    }

    export interface ElastiCacheReplicationGroupAlreadyExistsFault {
    }

    export type ElastiCacheReplicationGroupList = Array<ElastiCacheReplicationGroup>;
    export interface ElastiCacheReplicationGroupMessage {
        Marker?: ElastiCacheString;
        ReplicationGroups?: ElastiCacheReplicationGroupList;
    }

    export interface ElastiCacheReplicationGroupNotFoundFault {
    }

    export interface ElastiCacheReplicationGroupPendingModifiedValues {
        PrimaryClusterId?: ElastiCacheString;
        AutomaticFailoverStatus?: ElastiCachePendingAutomaticFailoverStatus;
    }

    export interface ElastiCacheReservedCacheNode {
        ReservedCacheNodeId?: ElastiCacheString;
        ReservedCacheNodesOfferingId?: ElastiCacheString;
        CacheNodeType?: ElastiCacheString;
        StartTime?: ElastiCacheTStamp;
        Duration?: ElastiCacheInteger;
        FixedPrice?: ElastiCacheDouble;
        UsagePrice?: ElastiCacheDouble;
        CacheNodeCount?: ElastiCacheInteger;
        ProductDescription?: ElastiCacheString;
        OfferingType?: ElastiCacheString;
        State?: ElastiCacheString;
        RecurringCharges?: ElastiCacheRecurringChargeList;
    }

    export interface ElastiCacheReservedCacheNodeAlreadyExistsFault {
    }

    export type ElastiCacheReservedCacheNodeList = Array<ElastiCacheReservedCacheNode>;
    export interface ElastiCacheReservedCacheNodeMessage {
        Marker?: ElastiCacheString;
        ReservedCacheNodes?: ElastiCacheReservedCacheNodeList;
    }

    export interface ElastiCacheReservedCacheNodeNotFoundFault {
    }

    export interface ElastiCacheReservedCacheNodeQuotaExceededFault {
    }

    export interface ElastiCacheReservedCacheNodesOffering {
        ReservedCacheNodesOfferingId?: ElastiCacheString;
        CacheNodeType?: ElastiCacheString;
        Duration?: ElastiCacheInteger;
        FixedPrice?: ElastiCacheDouble;
        UsagePrice?: ElastiCacheDouble;
        ProductDescription?: ElastiCacheString;
        OfferingType?: ElastiCacheString;
        RecurringCharges?: ElastiCacheRecurringChargeList;
    }

    export type ElastiCacheReservedCacheNodesOfferingList = Array<ElastiCacheReservedCacheNodesOffering>;
    export interface ElastiCacheReservedCacheNodesOfferingMessage {
        Marker?: ElastiCacheString;
        ReservedCacheNodesOfferings?: ElastiCacheReservedCacheNodesOfferingList;
    }

    export interface ElastiCacheReservedCacheNodesOfferingNotFoundFault {
    }

    export interface ElastiCacheResetCacheParameterGroupMessage {
        CacheParameterGroupName: ElastiCacheString;
        ResetAllParameters?: ElastiCacheBoolean;
        ParameterNameValues: ElastiCacheParameterNameValueList;
    }

    export interface ElastiCacheRevokeCacheSecurityGroupIngressMessage {
        CacheSecurityGroupName: ElastiCacheString;
        EC2SecurityGroupName: ElastiCacheString;
        EC2SecurityGroupOwnerId: ElastiCacheString;
    }

    export type ElastiCacheSecurityGroupIdsList = Array<ElastiCacheString>;
    export interface ElastiCacheSecurityGroupMembership {
        SecurityGroupId?: ElastiCacheString;
        Status?: ElastiCacheString;
    }

    export type ElastiCacheSecurityGroupMembershipList = Array<ElastiCacheSecurityGroupMembership>;
    export interface ElastiCacheSnapshot {
        SnapshotName?: ElastiCacheString;
        CacheClusterId?: ElastiCacheString;
        SnapshotStatus?: ElastiCacheString;
        SnapshotSource?: ElastiCacheString;
        CacheNodeType?: ElastiCacheString;
        Engine?: ElastiCacheString;
        EngineVersion?: ElastiCacheString;
        NumCacheNodes?: ElastiCacheIntegerOptional;
        PreferredAvailabilityZone?: ElastiCacheString;
        CacheClusterCreateTime?: ElastiCacheTStamp;
        PreferredMaintenanceWindow?: ElastiCacheString;
        TopicArn?: ElastiCacheString;
        Port?: ElastiCacheIntegerOptional;
        CacheParameterGroupName?: ElastiCacheString;
        CacheSubnetGroupName?: ElastiCacheString;
        VpcId?: ElastiCacheString;
        AutoMinorVersionUpgrade?: ElastiCacheBoolean;
        SnapshotRetentionLimit?: ElastiCacheIntegerOptional;
        SnapshotWindow?: ElastiCacheString;
        NodeSnapshots?: ElastiCacheNodeSnapshotList;
    }

    export interface ElastiCacheSnapshotAlreadyExistsFault {
    }

    export type ElastiCacheSnapshotArnsList = Array<ElastiCacheString>;
    export interface ElastiCacheSnapshotFeatureNotSupportedFault {
    }

    export type ElastiCacheSnapshotList = Array<ElastiCacheSnapshot>;
    export interface ElastiCacheSnapshotNotFoundFault {
    }

    export interface ElastiCacheSnapshotQuotaExceededFault {
    }

    export type ElastiCacheSourceType = string;
    export type ElastiCacheString = string;
    export interface ElastiCacheSubnet {
        SubnetIdentifier?: ElastiCacheString;
        SubnetAvailabilityZone?: ElastiCacheAvailabilityZone;
    }

    export type ElastiCacheSubnetIdentifierList = Array<ElastiCacheString>;
    export interface ElastiCacheSubnetInUse {
    }

    export type ElastiCacheSubnetList = Array<ElastiCacheSubnet>;
    export type ElastiCacheTStamp = number;
    export interface ElastiCacheTag {
        Key?: ElastiCacheString;
        Value?: ElastiCacheString;
    }

    export type ElastiCacheTagList = Array<ElastiCacheTag>;
    export interface ElastiCacheTagListMessage {
        TagList?: ElastiCacheTagList;
    }

    export interface ElastiCacheTagNotFoundFault {
    }

    export interface ElastiCacheTagQuotaPerResourceExceeded {
    }

    export interface ElastiCacheAuthorizeCacheSecurityGroupIngressResult {
        CacheSecurityGroup?: ElastiCacheCacheSecurityGroup;
    }

    export interface ElastiCacheCopySnapshotResult {
        Snapshot?: ElastiCacheSnapshot;
    }

    export interface ElastiCacheCreateCacheClusterResult {
        CacheCluster?: ElastiCacheCacheCluster;
    }

    export interface ElastiCacheCreateCacheParameterGroupResult {
        CacheParameterGroup?: ElastiCacheCacheParameterGroup;
    }

    export interface ElastiCacheCreateCacheSecurityGroupResult {
        CacheSecurityGroup?: ElastiCacheCacheSecurityGroup;
    }

    export interface ElastiCacheCreateCacheSubnetGroupResult {
        CacheSubnetGroup?: ElastiCacheCacheSubnetGroup;
    }

    export interface ElastiCacheCreateReplicationGroupResult {
        ReplicationGroup?: ElastiCacheReplicationGroup;
    }

    export interface ElastiCacheCreateSnapshotResult {
        Snapshot?: ElastiCacheSnapshot;
    }

    export interface ElastiCacheDeleteCacheClusterResult {
        CacheCluster?: ElastiCacheCacheCluster;
    }

    export interface ElastiCacheDeleteReplicationGroupResult {
        ReplicationGroup?: ElastiCacheReplicationGroup;
    }

    export interface ElastiCacheDeleteSnapshotResult {
        Snapshot?: ElastiCacheSnapshot;
    }

    export interface ElastiCacheDescribeEngineDefaultParametersResult {
        EngineDefaults?: ElastiCacheEngineDefaults;
    }

    export interface ElastiCacheModifyCacheClusterResult {
        CacheCluster?: ElastiCacheCacheCluster;
    }

    export interface ElastiCacheModifyCacheSubnetGroupResult {
        CacheSubnetGroup?: ElastiCacheCacheSubnetGroup;
    }

    export interface ElastiCacheModifyReplicationGroupResult {
        ReplicationGroup?: ElastiCacheReplicationGroup;
    }

    export interface ElastiCachePurchaseReservedCacheNodesOfferingResult {
        ReservedCacheNode?: ElastiCacheReservedCacheNode;
    }

    export interface ElastiCacheRebootCacheClusterResult {
        CacheCluster?: ElastiCacheCacheCluster;
    }

    export interface ElastiCacheRevokeCacheSecurityGroupIngressResult {
        CacheSecurityGroup?: ElastiCacheCacheSecurityGroup;
    }

}
