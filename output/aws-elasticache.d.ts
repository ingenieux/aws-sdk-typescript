// Type definitions for aws-sdk - Amazon ElastiCache
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2015-02-02
     * endpointPrefix: elasticache
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: query
     */
    export class ElastiCache extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      addTagsToResource(params: ElastiCache.AddTagsToResourceMessage, callback?: (err: ElastiCache.CacheClusterNotFoundFault|ElastiCache.SnapshotNotFoundFault|ElastiCache.TagQuotaPerResourceExceeded|ElastiCache.InvalidARNFault|any, data: ElastiCache.TagListMessage|any) => void): Request;
      authorizeCacheSecurityGroupIngress(params: ElastiCache.AuthorizeCacheSecurityGroupIngressMessage, callback?: (err: ElastiCache.CacheSecurityGroupNotFoundFault|ElastiCache.InvalidCacheSecurityGroupStateFault|ElastiCache.AuthorizationAlreadyExistsFault|ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: ElastiCache.AuthorizeCacheSecurityGroupIngressResult|any) => void): Request;
      copySnapshot(params: ElastiCache.CopySnapshotMessage, callback?: (err: ElastiCache.SnapshotAlreadyExistsFault|ElastiCache.SnapshotNotFoundFault|ElastiCache.SnapshotQuotaExceededFault|ElastiCache.InvalidSnapshotStateFault|ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: ElastiCache.CopySnapshotResult|any) => void): Request;
      createCacheCluster(params: ElastiCache.CreateCacheClusterMessage, callback?: (err: ElastiCache.ReplicationGroupNotFoundFault|ElastiCache.InvalidReplicationGroupStateFault|ElastiCache.CacheClusterAlreadyExistsFault|ElastiCache.InsufficientCacheClusterCapacityFault|ElastiCache.CacheSecurityGroupNotFoundFault|ElastiCache.CacheSubnetGroupNotFoundFault|ElastiCache.ClusterQuotaForCustomerExceededFault|ElastiCache.NodeQuotaForClusterExceededFault|ElastiCache.NodeQuotaForCustomerExceededFault|ElastiCache.CacheParameterGroupNotFoundFault|ElastiCache.InvalidVPCNetworkStateFault|ElastiCache.TagQuotaPerResourceExceeded|ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: ElastiCache.CreateCacheClusterResult|any) => void): Request;
      createCacheParameterGroup(params: ElastiCache.CreateCacheParameterGroupMessage, callback?: (err: ElastiCache.CacheParameterGroupQuotaExceededFault|ElastiCache.CacheParameterGroupAlreadyExistsFault|ElastiCache.InvalidCacheParameterGroupStateFault|ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: ElastiCache.CreateCacheParameterGroupResult|any) => void): Request;
      createCacheSecurityGroup(params: ElastiCache.CreateCacheSecurityGroupMessage, callback?: (err: ElastiCache.CacheSecurityGroupAlreadyExistsFault|ElastiCache.CacheSecurityGroupQuotaExceededFault|ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: ElastiCache.CreateCacheSecurityGroupResult|any) => void): Request;
      createCacheSubnetGroup(params: ElastiCache.CreateCacheSubnetGroupMessage, callback?: (err: ElastiCache.CacheSubnetGroupAlreadyExistsFault|ElastiCache.CacheSubnetGroupQuotaExceededFault|ElastiCache.CacheSubnetQuotaExceededFault|ElastiCache.InvalidSubnet|any, data: ElastiCache.CreateCacheSubnetGroupResult|any) => void): Request;
      createReplicationGroup(params: ElastiCache.CreateReplicationGroupMessage, callback?: (err: ElastiCache.CacheClusterNotFoundFault|ElastiCache.InvalidCacheClusterStateFault|ElastiCache.ReplicationGroupAlreadyExistsFault|ElastiCache.InsufficientCacheClusterCapacityFault|ElastiCache.CacheSecurityGroupNotFoundFault|ElastiCache.CacheSubnetGroupNotFoundFault|ElastiCache.ClusterQuotaForCustomerExceededFault|ElastiCache.NodeQuotaForClusterExceededFault|ElastiCache.NodeQuotaForCustomerExceededFault|ElastiCache.CacheParameterGroupNotFoundFault|ElastiCache.InvalidVPCNetworkStateFault|ElastiCache.TagQuotaPerResourceExceeded|ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: ElastiCache.CreateReplicationGroupResult|any) => void): Request;
      createSnapshot(params: ElastiCache.CreateSnapshotMessage, callback?: (err: ElastiCache.SnapshotAlreadyExistsFault|ElastiCache.CacheClusterNotFoundFault|ElastiCache.InvalidCacheClusterStateFault|ElastiCache.SnapshotQuotaExceededFault|ElastiCache.SnapshotFeatureNotSupportedFault|ElastiCache.InvalidParameterCombinationException|ElastiCache.InvalidParameterValueException|any, data: ElastiCache.CreateSnapshotResult|any) => void): Request;
      deleteCacheCluster(params: ElastiCache.DeleteCacheClusterMessage, callback?: (err: ElastiCache.CacheClusterNotFoundFault|ElastiCache.InvalidCacheClusterStateFault|ElastiCache.SnapshotAlreadyExistsFault|ElastiCache.SnapshotFeatureNotSupportedFault|ElastiCache.SnapshotQuotaExceededFault|ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: ElastiCache.DeleteCacheClusterResult|any) => void): Request;
      deleteCacheParameterGroup(params: ElastiCache.DeleteCacheParameterGroupMessage, callback?: (err: ElastiCache.InvalidCacheParameterGroupStateFault|ElastiCache.CacheParameterGroupNotFoundFault|ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: any) => void): Request;
      deleteCacheSecurityGroup(params: ElastiCache.DeleteCacheSecurityGroupMessage, callback?: (err: ElastiCache.InvalidCacheSecurityGroupStateFault|ElastiCache.CacheSecurityGroupNotFoundFault|ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: any) => void): Request;
      deleteCacheSubnetGroup(params: ElastiCache.DeleteCacheSubnetGroupMessage, callback?: (err: ElastiCache.CacheSubnetGroupInUse|ElastiCache.CacheSubnetGroupNotFoundFault|any, data: any) => void): Request;
      deleteReplicationGroup(params: ElastiCache.DeleteReplicationGroupMessage, callback?: (err: ElastiCache.ReplicationGroupNotFoundFault|ElastiCache.InvalidReplicationGroupStateFault|ElastiCache.SnapshotAlreadyExistsFault|ElastiCache.SnapshotFeatureNotSupportedFault|ElastiCache.SnapshotQuotaExceededFault|ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: ElastiCache.DeleteReplicationGroupResult|any) => void): Request;
      deleteSnapshot(params: ElastiCache.DeleteSnapshotMessage, callback?: (err: ElastiCache.SnapshotNotFoundFault|ElastiCache.InvalidSnapshotStateFault|ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: ElastiCache.DeleteSnapshotResult|any) => void): Request;
      describeCacheClusters(params: ElastiCache.DescribeCacheClustersMessage, callback?: (err: ElastiCache.CacheClusterNotFoundFault|ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: ElastiCache.CacheClusterMessage|any) => void): Request;
      describeCacheEngineVersions(params: ElastiCache.DescribeCacheEngineVersionsMessage, callback?: (err: any, data: ElastiCache.CacheEngineVersionMessage|any) => void): Request;
      describeCacheParameterGroups(params: ElastiCache.DescribeCacheParameterGroupsMessage, callback?: (err: ElastiCache.CacheParameterGroupNotFoundFault|ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: ElastiCache.CacheParameterGroupsMessage|any) => void): Request;
      describeCacheParameters(params: ElastiCache.DescribeCacheParametersMessage, callback?: (err: ElastiCache.CacheParameterGroupNotFoundFault|ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: ElastiCache.CacheParameterGroupDetails|any) => void): Request;
      describeCacheSecurityGroups(params: ElastiCache.DescribeCacheSecurityGroupsMessage, callback?: (err: ElastiCache.CacheSecurityGroupNotFoundFault|ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: ElastiCache.CacheSecurityGroupMessage|any) => void): Request;
      describeCacheSubnetGroups(params: ElastiCache.DescribeCacheSubnetGroupsMessage, callback?: (err: ElastiCache.CacheSubnetGroupNotFoundFault|any, data: ElastiCache.CacheSubnetGroupMessage|any) => void): Request;
      describeEngineDefaultParameters(params: ElastiCache.DescribeEngineDefaultParametersMessage, callback?: (err: ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: ElastiCache.DescribeEngineDefaultParametersResult|any) => void): Request;
      describeEvents(params: ElastiCache.DescribeEventsMessage, callback?: (err: ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: ElastiCache.EventsMessage|any) => void): Request;
      describeReplicationGroups(params: ElastiCache.DescribeReplicationGroupsMessage, callback?: (err: ElastiCache.ReplicationGroupNotFoundFault|ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: ElastiCache.ReplicationGroupMessage|any) => void): Request;
      describeReservedCacheNodes(params: ElastiCache.DescribeReservedCacheNodesMessage, callback?: (err: ElastiCache.ReservedCacheNodeNotFoundFault|ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: ElastiCache.ReservedCacheNodeMessage|any) => void): Request;
      describeReservedCacheNodesOfferings(params: ElastiCache.DescribeReservedCacheNodesOfferingsMessage, callback?: (err: ElastiCache.ReservedCacheNodesOfferingNotFoundFault|ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: ElastiCache.ReservedCacheNodesOfferingMessage|any) => void): Request;
      describeSnapshots(params: ElastiCache.DescribeSnapshotsMessage, callback?: (err: ElastiCache.CacheClusterNotFoundFault|ElastiCache.SnapshotNotFoundFault|ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: ElastiCache.DescribeSnapshotsListMessage|any) => void): Request;
      listTagsForResource(params: ElastiCache.ListTagsForResourceMessage, callback?: (err: ElastiCache.CacheClusterNotFoundFault|ElastiCache.SnapshotNotFoundFault|ElastiCache.InvalidARNFault|any, data: ElastiCache.TagListMessage|any) => void): Request;
      modifyCacheCluster(params: ElastiCache.ModifyCacheClusterMessage, callback?: (err: ElastiCache.InvalidCacheClusterStateFault|ElastiCache.InvalidCacheSecurityGroupStateFault|ElastiCache.InsufficientCacheClusterCapacityFault|ElastiCache.CacheClusterNotFoundFault|ElastiCache.NodeQuotaForClusterExceededFault|ElastiCache.NodeQuotaForCustomerExceededFault|ElastiCache.CacheSecurityGroupNotFoundFault|ElastiCache.CacheParameterGroupNotFoundFault|ElastiCache.InvalidVPCNetworkStateFault|ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: ElastiCache.ModifyCacheClusterResult|any) => void): Request;
      modifyCacheParameterGroup(params: ElastiCache.ModifyCacheParameterGroupMessage, callback?: (err: ElastiCache.CacheParameterGroupNotFoundFault|ElastiCache.InvalidCacheParameterGroupStateFault|ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: ElastiCache.CacheParameterGroupNameMessage|any) => void): Request;
      modifyCacheSubnetGroup(params: ElastiCache.ModifyCacheSubnetGroupMessage, callback?: (err: ElastiCache.CacheSubnetGroupNotFoundFault|ElastiCache.CacheSubnetQuotaExceededFault|ElastiCache.SubnetInUse|ElastiCache.InvalidSubnet|any, data: ElastiCache.ModifyCacheSubnetGroupResult|any) => void): Request;
      modifyReplicationGroup(params: ElastiCache.ModifyReplicationGroupMessage, callback?: (err: ElastiCache.ReplicationGroupNotFoundFault|ElastiCache.InvalidReplicationGroupStateFault|ElastiCache.InvalidCacheClusterStateFault|ElastiCache.InvalidCacheSecurityGroupStateFault|ElastiCache.InsufficientCacheClusterCapacityFault|ElastiCache.CacheClusterNotFoundFault|ElastiCache.NodeQuotaForClusterExceededFault|ElastiCache.NodeQuotaForCustomerExceededFault|ElastiCache.CacheSecurityGroupNotFoundFault|ElastiCache.CacheParameterGroupNotFoundFault|ElastiCache.InvalidVPCNetworkStateFault|ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: ElastiCache.ModifyReplicationGroupResult|any) => void): Request;
      purchaseReservedCacheNodesOffering(params: ElastiCache.PurchaseReservedCacheNodesOfferingMessage, callback?: (err: ElastiCache.ReservedCacheNodesOfferingNotFoundFault|ElastiCache.ReservedCacheNodeAlreadyExistsFault|ElastiCache.ReservedCacheNodeQuotaExceededFault|ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: ElastiCache.PurchaseReservedCacheNodesOfferingResult|any) => void): Request;
      rebootCacheCluster(params: ElastiCache.RebootCacheClusterMessage, callback?: (err: ElastiCache.InvalidCacheClusterStateFault|ElastiCache.CacheClusterNotFoundFault|any, data: ElastiCache.RebootCacheClusterResult|any) => void): Request;
      removeTagsFromResource(params: ElastiCache.RemoveTagsFromResourceMessage, callback?: (err: ElastiCache.CacheClusterNotFoundFault|ElastiCache.SnapshotNotFoundFault|ElastiCache.InvalidARNFault|ElastiCache.TagNotFoundFault|any, data: ElastiCache.TagListMessage|any) => void): Request;
      resetCacheParameterGroup(params: ElastiCache.ResetCacheParameterGroupMessage, callback?: (err: ElastiCache.InvalidCacheParameterGroupStateFault|ElastiCache.CacheParameterGroupNotFoundFault|ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: ElastiCache.CacheParameterGroupNameMessage|any) => void): Request;
      revokeCacheSecurityGroupIngress(params: ElastiCache.RevokeCacheSecurityGroupIngressMessage, callback?: (err: ElastiCache.CacheSecurityGroupNotFoundFault|ElastiCache.AuthorizationNotFoundFault|ElastiCache.InvalidCacheSecurityGroupStateFault|ElastiCache.InvalidParameterValueException|ElastiCache.InvalidParameterCombinationException|any, data: ElastiCache.RevokeCacheSecurityGroupIngressResult|any) => void): Request;

    }

    export module ElastiCache {
        export type AZMode = string;
        export type AutomaticFailoverStatus = string;
        export type AvailabilityZonesList = String[];
        export type AwsQueryErrorMessage = string;
        export type Boolean = boolean;
        export type BooleanOptional = boolean;
        export type CacheClusterList = CacheCluster[];
        export type CacheEngineVersionList = CacheEngineVersion[];
        export type CacheNodeIdsList = String[];
        export type CacheNodeList = CacheNode[];
        export type CacheNodeTypeSpecificParametersList = CacheNodeTypeSpecificParameter[];
        export type CacheNodeTypeSpecificValueList = CacheNodeTypeSpecificValue[];
        export type CacheParameterGroupList = CacheParameterGroup[];
        export type CacheSecurityGroupMembershipList = CacheSecurityGroupMembership[];
        export type CacheSecurityGroupNameList = String[];
        export type CacheSecurityGroups = CacheSecurityGroup[];
        export type CacheSubnetGroups = CacheSubnetGroup[];
        export type ClusterIdList = String[];
        export type Double = number;
        export type EC2SecurityGroupList = EC2SecurityGroup[];
        export type EventList = Event[];
        export type Integer = number;
        export type IntegerOptional = number;
        export type KeyList = String[];
        export type NodeGroupList = NodeGroup[];
        export type NodeGroupMemberList = NodeGroupMember[];
        export type NodeSnapshotList = NodeSnapshot[];
        export type ParameterNameValueList = ParameterNameValue[];
        export type ParametersList = Parameter[];
        export type PendingAutomaticFailoverStatus = string;
        export type PreferredAvailabilityZoneList = String[];
        export type RecurringChargeList = RecurringCharge[];
        export type ReplicationGroupList = ReplicationGroup[];
        export type ReservedCacheNodeList = ReservedCacheNode[];
        export type ReservedCacheNodesOfferingList = ReservedCacheNodesOffering[];
        export type SecurityGroupIdsList = String[];
        export type SecurityGroupMembershipList = SecurityGroupMembership[];
        export type SnapshotArnsList = String[];
        export type SnapshotList = Snapshot[];
        export type SourceType = string;
        export type String = string;
        export type SubnetIdentifierList = String[];
        export type SubnetList = Subnet[];
        export type TStamp = number;
        export type TagList = Tag[];

        export interface AddTagsToResourceMessage {
            ResourceName: String;
            Tags: TagList;
        }
        export interface AuthorizationAlreadyExistsFault {
        }
        export interface AuthorizationNotFoundFault {
        }
        export interface AuthorizeCacheSecurityGroupIngressMessage {
            CacheSecurityGroupName: String;
            EC2SecurityGroupName: String;
            EC2SecurityGroupOwnerId: String;
        }
        export interface AvailabilityZone {
            Name?: String;
        }
        export interface CacheCluster {
            CacheClusterId?: String;
            ConfigurationEndpoint?: Endpoint;
            ClientDownloadLandingPage?: String;
            CacheNodeType?: String;
            Engine?: String;
            EngineVersion?: String;
            CacheClusterStatus?: String;
            NumCacheNodes?: IntegerOptional;
            PreferredAvailabilityZone?: String;
            CacheClusterCreateTime?: TStamp;
            PreferredMaintenanceWindow?: String;
            PendingModifiedValues?: PendingModifiedValues;
            NotificationConfiguration?: NotificationConfiguration;
            CacheSecurityGroups?: CacheSecurityGroupMembershipList;
            CacheParameterGroup?: CacheParameterGroupStatus;
            CacheSubnetGroupName?: String;
            CacheNodes?: CacheNodeList;
            AutoMinorVersionUpgrade?: Boolean;
            SecurityGroups?: SecurityGroupMembershipList;
            ReplicationGroupId?: String;
            SnapshotRetentionLimit?: IntegerOptional;
            SnapshotWindow?: String;
        }
        export interface CacheClusterAlreadyExistsFault {
        }
        export interface CacheClusterMessage {
            Marker?: String;
            CacheClusters?: CacheClusterList;
        }
        export interface CacheClusterNotFoundFault {
        }
        export interface CacheEngineVersion {
            Engine?: String;
            EngineVersion?: String;
            CacheParameterGroupFamily?: String;
            CacheEngineDescription?: String;
            CacheEngineVersionDescription?: String;
        }
        export interface CacheEngineVersionMessage {
            Marker?: String;
            CacheEngineVersions?: CacheEngineVersionList;
        }
        export interface CacheNode {
            CacheNodeId?: String;
            CacheNodeStatus?: String;
            CacheNodeCreateTime?: TStamp;
            Endpoint?: Endpoint;
            ParameterGroupStatus?: String;
            SourceCacheNodeId?: String;
            CustomerAvailabilityZone?: String;
        }
        export interface CacheNodeTypeSpecificParameter {
            ParameterName?: String;
            Description?: String;
            Source?: String;
            DataType?: String;
            AllowedValues?: String;
            IsModifiable?: Boolean;
            MinimumEngineVersion?: String;
            CacheNodeTypeSpecificValues?: CacheNodeTypeSpecificValueList;
        }
        export interface CacheNodeTypeSpecificValue {
            CacheNodeType?: String;
            Value?: String;
        }
        export interface CacheParameterGroup {
            CacheParameterGroupName?: String;
            CacheParameterGroupFamily?: String;
            Description?: String;
        }
        export interface CacheParameterGroupAlreadyExistsFault {
        }
        export interface CacheParameterGroupDetails {
            Marker?: String;
            Parameters?: ParametersList;
            CacheNodeTypeSpecificParameters?: CacheNodeTypeSpecificParametersList;
        }
        export interface CacheParameterGroupNameMessage {
            CacheParameterGroupName?: String;
        }
        export interface CacheParameterGroupNotFoundFault {
        }
        export interface CacheParameterGroupQuotaExceededFault {
        }
        export interface CacheParameterGroupStatus {
            CacheParameterGroupName?: String;
            ParameterApplyStatus?: String;
            CacheNodeIdsToReboot?: CacheNodeIdsList;
        }
        export interface CacheParameterGroupsMessage {
            Marker?: String;
            CacheParameterGroups?: CacheParameterGroupList;
        }
        export interface CacheSecurityGroup {
            OwnerId?: String;
            CacheSecurityGroupName?: String;
            Description?: String;
            EC2SecurityGroups?: EC2SecurityGroupList;
        }
        export interface CacheSecurityGroupAlreadyExistsFault {
        }
        export interface CacheSecurityGroupMembership {
            CacheSecurityGroupName?: String;
            Status?: String;
        }
        export interface CacheSecurityGroupMessage {
            Marker?: String;
            CacheSecurityGroups?: CacheSecurityGroups;
        }
        export interface CacheSecurityGroupNotFoundFault {
        }
        export interface CacheSecurityGroupQuotaExceededFault {
        }
        export interface CacheSubnetGroup {
            CacheSubnetGroupName?: String;
            CacheSubnetGroupDescription?: String;
            VpcId?: String;
            Subnets?: SubnetList;
        }
        export interface CacheSubnetGroupAlreadyExistsFault {
        }
        export interface CacheSubnetGroupInUse {
        }
        export interface CacheSubnetGroupMessage {
            Marker?: String;
            CacheSubnetGroups?: CacheSubnetGroups;
        }
        export interface CacheSubnetGroupNotFoundFault {
        }
        export interface CacheSubnetGroupQuotaExceededFault {
        }
        export interface CacheSubnetQuotaExceededFault {
        }
        export interface ClusterQuotaForCustomerExceededFault {
        }
        export interface CopySnapshotMessage {
            SourceSnapshotName: String;
            TargetSnapshotName: String;
        }
        export interface CreateCacheClusterMessage {
            CacheClusterId: String;
            ReplicationGroupId?: String;
            AZMode?: AZMode;
            PreferredAvailabilityZone?: String;
            PreferredAvailabilityZones?: PreferredAvailabilityZoneList;
            NumCacheNodes?: IntegerOptional;
            CacheNodeType?: String;
            Engine?: String;
            EngineVersion?: String;
            CacheParameterGroupName?: String;
            CacheSubnetGroupName?: String;
            CacheSecurityGroupNames?: CacheSecurityGroupNameList;
            SecurityGroupIds?: SecurityGroupIdsList;
            Tags?: TagList;
            SnapshotArns?: SnapshotArnsList;
            SnapshotName?: String;
            PreferredMaintenanceWindow?: String;
            Port?: IntegerOptional;
            NotificationTopicArn?: String;
            AutoMinorVersionUpgrade?: BooleanOptional;
            SnapshotRetentionLimit?: IntegerOptional;
            SnapshotWindow?: String;
        }
        export interface CreateCacheParameterGroupMessage {
            CacheParameterGroupName: String;
            CacheParameterGroupFamily: String;
            Description: String;
        }
        export interface CreateCacheSecurityGroupMessage {
            CacheSecurityGroupName: String;
            Description: String;
        }
        export interface CreateCacheSubnetGroupMessage {
            CacheSubnetGroupName: String;
            CacheSubnetGroupDescription: String;
            SubnetIds: SubnetIdentifierList;
        }
        export interface CreateReplicationGroupMessage {
            ReplicationGroupId: String;
            ReplicationGroupDescription: String;
            PrimaryClusterId?: String;
            AutomaticFailoverEnabled?: BooleanOptional;
            NumCacheClusters?: IntegerOptional;
            PreferredCacheClusterAZs?: AvailabilityZonesList;
            CacheNodeType?: String;
            Engine?: String;
            EngineVersion?: String;
            CacheParameterGroupName?: String;
            CacheSubnetGroupName?: String;
            CacheSecurityGroupNames?: CacheSecurityGroupNameList;
            SecurityGroupIds?: SecurityGroupIdsList;
            Tags?: TagList;
            SnapshotArns?: SnapshotArnsList;
            SnapshotName?: String;
            PreferredMaintenanceWindow?: String;
            Port?: IntegerOptional;
            NotificationTopicArn?: String;
            AutoMinorVersionUpgrade?: BooleanOptional;
            SnapshotRetentionLimit?: IntegerOptional;
            SnapshotWindow?: String;
        }
        export interface CreateSnapshotMessage {
            CacheClusterId: String;
            SnapshotName: String;
        }
        export interface DeleteCacheClusterMessage {
            CacheClusterId: String;
            FinalSnapshotIdentifier?: String;
        }
        export interface DeleteCacheParameterGroupMessage {
            CacheParameterGroupName: String;
        }
        export interface DeleteCacheSecurityGroupMessage {
            CacheSecurityGroupName: String;
        }
        export interface DeleteCacheSubnetGroupMessage {
            CacheSubnetGroupName: String;
        }
        export interface DeleteReplicationGroupMessage {
            ReplicationGroupId: String;
            RetainPrimaryCluster?: BooleanOptional;
            FinalSnapshotIdentifier?: String;
        }
        export interface DeleteSnapshotMessage {
            SnapshotName: String;
        }
        export interface DescribeCacheClustersMessage {
            CacheClusterId?: String;
            MaxRecords?: IntegerOptional;
            Marker?: String;
            ShowCacheNodeInfo?: BooleanOptional;
        }
        export interface DescribeCacheEngineVersionsMessage {
            Engine?: String;
            EngineVersion?: String;
            CacheParameterGroupFamily?: String;
            MaxRecords?: IntegerOptional;
            Marker?: String;
            DefaultOnly?: Boolean;
        }
        export interface DescribeCacheParameterGroupsMessage {
            CacheParameterGroupName?: String;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribeCacheParametersMessage {
            CacheParameterGroupName: String;
            Source?: String;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribeCacheSecurityGroupsMessage {
            CacheSecurityGroupName?: String;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribeCacheSubnetGroupsMessage {
            CacheSubnetGroupName?: String;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribeEngineDefaultParametersMessage {
            CacheParameterGroupFamily: String;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribeEventsMessage {
            SourceIdentifier?: String;
            SourceType?: SourceType;
            StartTime?: TStamp;
            EndTime?: TStamp;
            Duration?: IntegerOptional;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribeReplicationGroupsMessage {
            ReplicationGroupId?: String;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribeReservedCacheNodesMessage {
            ReservedCacheNodeId?: String;
            ReservedCacheNodesOfferingId?: String;
            CacheNodeType?: String;
            Duration?: String;
            ProductDescription?: String;
            OfferingType?: String;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribeReservedCacheNodesOfferingsMessage {
            ReservedCacheNodesOfferingId?: String;
            CacheNodeType?: String;
            Duration?: String;
            ProductDescription?: String;
            OfferingType?: String;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribeSnapshotsListMessage {
            Marker?: String;
            Snapshots?: SnapshotList;
        }
        export interface DescribeSnapshotsMessage {
            CacheClusterId?: String;
            SnapshotName?: String;
            SnapshotSource?: String;
            Marker?: String;
            MaxRecords?: IntegerOptional;
        }
        export interface EC2SecurityGroup {
            Status?: String;
            EC2SecurityGroupName?: String;
            EC2SecurityGroupOwnerId?: String;
        }
        export interface Endpoint {
            Address?: String;
            Port?: Integer;
        }
        export interface EngineDefaults {
            CacheParameterGroupFamily?: String;
            Marker?: String;
            Parameters?: ParametersList;
            CacheNodeTypeSpecificParameters?: CacheNodeTypeSpecificParametersList;
        }
        export interface Event {
            SourceIdentifier?: String;
            SourceType?: SourceType;
            Message?: String;
            Date?: TStamp;
        }
        export interface EventsMessage {
            Marker?: String;
            Events?: EventList;
        }
        export interface InsufficientCacheClusterCapacityFault {
        }
        export interface InvalidARNFault {
        }
        export interface InvalidCacheClusterStateFault {
        }
        export interface InvalidCacheParameterGroupStateFault {
        }
        export interface InvalidCacheSecurityGroupStateFault {
        }
        export interface InvalidParameterCombinationException {
            message?: AwsQueryErrorMessage;
        }
        export interface InvalidParameterValueException {
            message?: AwsQueryErrorMessage;
        }
        export interface InvalidReplicationGroupStateFault {
        }
        export interface InvalidSnapshotStateFault {
        }
        export interface InvalidSubnet {
        }
        export interface InvalidVPCNetworkStateFault {
        }
        export interface ListTagsForResourceMessage {
            ResourceName: String;
        }
        export interface ModifyCacheClusterMessage {
            CacheClusterId: String;
            NumCacheNodes?: IntegerOptional;
            CacheNodeIdsToRemove?: CacheNodeIdsList;
            AZMode?: AZMode;
            NewAvailabilityZones?: PreferredAvailabilityZoneList;
            CacheSecurityGroupNames?: CacheSecurityGroupNameList;
            SecurityGroupIds?: SecurityGroupIdsList;
            PreferredMaintenanceWindow?: String;
            NotificationTopicArn?: String;
            CacheParameterGroupName?: String;
            NotificationTopicStatus?: String;
            ApplyImmediately?: Boolean;
            EngineVersion?: String;
            AutoMinorVersionUpgrade?: BooleanOptional;
            SnapshotRetentionLimit?: IntegerOptional;
            SnapshotWindow?: String;
        }
        export interface ModifyCacheParameterGroupMessage {
            CacheParameterGroupName: String;
            ParameterNameValues: ParameterNameValueList;
        }
        export interface ModifyCacheSubnetGroupMessage {
            CacheSubnetGroupName: String;
            CacheSubnetGroupDescription?: String;
            SubnetIds?: SubnetIdentifierList;
        }
        export interface ModifyReplicationGroupMessage {
            ReplicationGroupId: String;
            ReplicationGroupDescription?: String;
            PrimaryClusterId?: String;
            SnapshottingClusterId?: String;
            AutomaticFailoverEnabled?: BooleanOptional;
            CacheSecurityGroupNames?: CacheSecurityGroupNameList;
            SecurityGroupIds?: SecurityGroupIdsList;
            PreferredMaintenanceWindow?: String;
            NotificationTopicArn?: String;
            CacheParameterGroupName?: String;
            NotificationTopicStatus?: String;
            ApplyImmediately?: Boolean;
            EngineVersion?: String;
            AutoMinorVersionUpgrade?: BooleanOptional;
            SnapshotRetentionLimit?: IntegerOptional;
            SnapshotWindow?: String;
        }
        export interface NodeGroup {
            NodeGroupId?: String;
            Status?: String;
            PrimaryEndpoint?: Endpoint;
            NodeGroupMembers?: NodeGroupMemberList;
        }
        export interface NodeGroupMember {
            CacheClusterId?: String;
            CacheNodeId?: String;
            ReadEndpoint?: Endpoint;
            PreferredAvailabilityZone?: String;
            CurrentRole?: String;
        }
        export interface NodeQuotaForClusterExceededFault {
        }
        export interface NodeQuotaForCustomerExceededFault {
        }
        export interface NodeSnapshot {
            CacheNodeId?: String;
            CacheSize?: String;
            CacheNodeCreateTime?: TStamp;
            SnapshotCreateTime?: TStamp;
        }
        export interface NotificationConfiguration {
            TopicArn?: String;
            TopicStatus?: String;
        }
        export interface Parameter {
            ParameterName?: String;
            ParameterValue?: String;
            Description?: String;
            Source?: String;
            DataType?: String;
            AllowedValues?: String;
            IsModifiable?: Boolean;
            MinimumEngineVersion?: String;
        }
        export interface ParameterNameValue {
            ParameterName?: String;
            ParameterValue?: String;
        }
        export interface PendingModifiedValues {
            NumCacheNodes?: IntegerOptional;
            CacheNodeIdsToRemove?: CacheNodeIdsList;
            EngineVersion?: String;
        }
        export interface PurchaseReservedCacheNodesOfferingMessage {
            ReservedCacheNodesOfferingId: String;
            ReservedCacheNodeId?: String;
            CacheNodeCount?: IntegerOptional;
        }
        export interface RebootCacheClusterMessage {
            CacheClusterId: String;
            CacheNodeIdsToReboot: CacheNodeIdsList;
        }
        export interface RecurringCharge {
            RecurringChargeAmount?: Double;
            RecurringChargeFrequency?: String;
        }
        export interface RemoveTagsFromResourceMessage {
            ResourceName: String;
            TagKeys: KeyList;
        }
        export interface ReplicationGroup {
            ReplicationGroupId?: String;
            Description?: String;
            Status?: String;
            PendingModifiedValues?: ReplicationGroupPendingModifiedValues;
            MemberClusters?: ClusterIdList;
            NodeGroups?: NodeGroupList;
            SnapshottingClusterId?: String;
            AutomaticFailover?: AutomaticFailoverStatus;
        }
        export interface ReplicationGroupAlreadyExistsFault {
        }
        export interface ReplicationGroupMessage {
            Marker?: String;
            ReplicationGroups?: ReplicationGroupList;
        }
        export interface ReplicationGroupNotFoundFault {
        }
        export interface ReplicationGroupPendingModifiedValues {
            PrimaryClusterId?: String;
            AutomaticFailoverStatus?: PendingAutomaticFailoverStatus;
        }
        export interface ReservedCacheNode {
            ReservedCacheNodeId?: String;
            ReservedCacheNodesOfferingId?: String;
            CacheNodeType?: String;
            StartTime?: TStamp;
            Duration?: Integer;
            FixedPrice?: Double;
            UsagePrice?: Double;
            CacheNodeCount?: Integer;
            ProductDescription?: String;
            OfferingType?: String;
            State?: String;
            RecurringCharges?: RecurringChargeList;
        }
        export interface ReservedCacheNodeAlreadyExistsFault {
        }
        export interface ReservedCacheNodeMessage {
            Marker?: String;
            ReservedCacheNodes?: ReservedCacheNodeList;
        }
        export interface ReservedCacheNodeNotFoundFault {
        }
        export interface ReservedCacheNodeQuotaExceededFault {
        }
        export interface ReservedCacheNodesOffering {
            ReservedCacheNodesOfferingId?: String;
            CacheNodeType?: String;
            Duration?: Integer;
            FixedPrice?: Double;
            UsagePrice?: Double;
            ProductDescription?: String;
            OfferingType?: String;
            RecurringCharges?: RecurringChargeList;
        }
        export interface ReservedCacheNodesOfferingMessage {
            Marker?: String;
            ReservedCacheNodesOfferings?: ReservedCacheNodesOfferingList;
        }
        export interface ReservedCacheNodesOfferingNotFoundFault {
        }
        export interface ResetCacheParameterGroupMessage {
            CacheParameterGroupName: String;
            ResetAllParameters?: Boolean;
            ParameterNameValues: ParameterNameValueList;
        }
        export interface RevokeCacheSecurityGroupIngressMessage {
            CacheSecurityGroupName: String;
            EC2SecurityGroupName: String;
            EC2SecurityGroupOwnerId: String;
        }
        export interface SecurityGroupMembership {
            SecurityGroupId?: String;
            Status?: String;
        }
        export interface Snapshot {
            SnapshotName?: String;
            CacheClusterId?: String;
            SnapshotStatus?: String;
            SnapshotSource?: String;
            CacheNodeType?: String;
            Engine?: String;
            EngineVersion?: String;
            NumCacheNodes?: IntegerOptional;
            PreferredAvailabilityZone?: String;
            CacheClusterCreateTime?: TStamp;
            PreferredMaintenanceWindow?: String;
            TopicArn?: String;
            Port?: IntegerOptional;
            CacheParameterGroupName?: String;
            CacheSubnetGroupName?: String;
            VpcId?: String;
            AutoMinorVersionUpgrade?: Boolean;
            SnapshotRetentionLimit?: IntegerOptional;
            SnapshotWindow?: String;
            NodeSnapshots?: NodeSnapshotList;
        }
        export interface SnapshotAlreadyExistsFault {
        }
        export interface SnapshotFeatureNotSupportedFault {
        }
        export interface SnapshotNotFoundFault {
        }
        export interface SnapshotQuotaExceededFault {
        }
        export interface Subnet {
            SubnetIdentifier?: String;
            SubnetAvailabilityZone?: AvailabilityZone;
        }
        export interface SubnetInUse {
        }
        export interface Tag {
            Key?: String;
            Value?: String;
        }
        export interface TagListMessage {
            TagList?: TagList;
        }
        export interface TagNotFoundFault {
        }
        export interface TagQuotaPerResourceExceeded {
        }
        export interface AuthorizeCacheSecurityGroupIngressResult {
            CacheSecurityGroup?: CacheSecurityGroup;
        }
        export interface CopySnapshotResult {
            Snapshot?: Snapshot;
        }
        export interface CreateCacheClusterResult {
            CacheCluster?: CacheCluster;
        }
        export interface CreateCacheParameterGroupResult {
            CacheParameterGroup?: CacheParameterGroup;
        }
        export interface CreateCacheSecurityGroupResult {
            CacheSecurityGroup?: CacheSecurityGroup;
        }
        export interface CreateCacheSubnetGroupResult {
            CacheSubnetGroup?: CacheSubnetGroup;
        }
        export interface CreateReplicationGroupResult {
            ReplicationGroup?: ReplicationGroup;
        }
        export interface CreateSnapshotResult {
            Snapshot?: Snapshot;
        }
        export interface DeleteCacheClusterResult {
            CacheCluster?: CacheCluster;
        }
        export interface DeleteReplicationGroupResult {
            ReplicationGroup?: ReplicationGroup;
        }
        export interface DeleteSnapshotResult {
            Snapshot?: Snapshot;
        }
        export interface DescribeEngineDefaultParametersResult {
            EngineDefaults?: EngineDefaults;
        }
        export interface ModifyCacheClusterResult {
            CacheCluster?: CacheCluster;
        }
        export interface ModifyCacheSubnetGroupResult {
            CacheSubnetGroup?: CacheSubnetGroup;
        }
        export interface ModifyReplicationGroupResult {
            ReplicationGroup?: ReplicationGroup;
        }
        export interface PurchaseReservedCacheNodesOfferingResult {
            ReservedCacheNode?: ReservedCacheNode;
        }
        export interface RebootCacheClusterResult {
            CacheCluster?: CacheCluster;
        }
        export interface RevokeCacheSecurityGroupIngressResult {
            CacheSecurityGroup?: CacheSecurityGroup;
        }

    }
}
