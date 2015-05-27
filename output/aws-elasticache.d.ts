// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class ElastiCache {
      constructor(options?: any);
      addTagsToResource(params: AddTagsToResourceMessage, callback: (err: CacheClusterNotFoundFault|SnapshotNotFoundFault|TagQuotaPerResourceExceeded|InvalidARNFault|any, data: TagListMessage|any) => void): void;
      authorizeCacheSecurityGroupIngress(params: AuthorizeCacheSecurityGroupIngressMessage, callback: (err: CacheSecurityGroupNotFoundFault|InvalidCacheSecurityGroupStateFault|AuthorizationAlreadyExistsFault|InvalidParameterValueException|InvalidParameterCombinationException|any, data: AuthorizeCacheSecurityGroupIngressResult|any) => void): void;
      copySnapshot(params: CopySnapshotMessage, callback: (err: SnapshotAlreadyExistsFault|SnapshotNotFoundFault|SnapshotQuotaExceededFault|InvalidSnapshotStateFault|InvalidParameterValueException|InvalidParameterCombinationException|any, data: CopySnapshotResult|any) => void): void;
      createCacheCluster(params: CreateCacheClusterMessage, callback: (err: ReplicationGroupNotFoundFault|InvalidReplicationGroupStateFault|CacheClusterAlreadyExistsFault|InsufficientCacheClusterCapacityFault|CacheSecurityGroupNotFoundFault|CacheSubnetGroupNotFoundFault|ClusterQuotaForCustomerExceededFault|NodeQuotaForClusterExceededFault|NodeQuotaForCustomerExceededFault|CacheParameterGroupNotFoundFault|InvalidVPCNetworkStateFault|TagQuotaPerResourceExceeded|InvalidParameterValueException|InvalidParameterCombinationException|any, data: CreateCacheClusterResult|any) => void): void;
      createCacheParameterGroup(params: CreateCacheParameterGroupMessage, callback: (err: CacheParameterGroupQuotaExceededFault|CacheParameterGroupAlreadyExistsFault|InvalidCacheParameterGroupStateFault|InvalidParameterValueException|InvalidParameterCombinationException|any, data: CreateCacheParameterGroupResult|any) => void): void;
      createCacheSecurityGroup(params: CreateCacheSecurityGroupMessage, callback: (err: CacheSecurityGroupAlreadyExistsFault|CacheSecurityGroupQuotaExceededFault|InvalidParameterValueException|InvalidParameterCombinationException|any, data: CreateCacheSecurityGroupResult|any) => void): void;
      createCacheSubnetGroup(params: CreateCacheSubnetGroupMessage, callback: (err: CacheSubnetGroupAlreadyExistsFault|CacheSubnetGroupQuotaExceededFault|CacheSubnetQuotaExceededFault|InvalidSubnet|any, data: CreateCacheSubnetGroupResult|any) => void): void;
      createReplicationGroup(params: CreateReplicationGroupMessage, callback: (err: CacheClusterNotFoundFault|InvalidCacheClusterStateFault|ReplicationGroupAlreadyExistsFault|InsufficientCacheClusterCapacityFault|CacheSecurityGroupNotFoundFault|CacheSubnetGroupNotFoundFault|ClusterQuotaForCustomerExceededFault|NodeQuotaForClusterExceededFault|NodeQuotaForCustomerExceededFault|CacheParameterGroupNotFoundFault|InvalidVPCNetworkStateFault|TagQuotaPerResourceExceeded|InvalidParameterValueException|InvalidParameterCombinationException|any, data: CreateReplicationGroupResult|any) => void): void;
      createSnapshot(params: CreateSnapshotMessage, callback: (err: SnapshotAlreadyExistsFault|CacheClusterNotFoundFault|InvalidCacheClusterStateFault|SnapshotQuotaExceededFault|SnapshotFeatureNotSupportedFault|InvalidParameterCombinationException|InvalidParameterValueException|any, data: CreateSnapshotResult|any) => void): void;
      deleteCacheCluster(params: DeleteCacheClusterMessage, callback: (err: CacheClusterNotFoundFault|InvalidCacheClusterStateFault|SnapshotAlreadyExistsFault|SnapshotFeatureNotSupportedFault|SnapshotQuotaExceededFault|InvalidParameterValueException|InvalidParameterCombinationException|any, data: DeleteCacheClusterResult|any) => void): void;
      deleteCacheParameterGroup(params: DeleteCacheParameterGroupMessage, callback: (err: InvalidCacheParameterGroupStateFault|CacheParameterGroupNotFoundFault|InvalidParameterValueException|InvalidParameterCombinationException|any, data: any) => void): void;
      deleteCacheSecurityGroup(params: DeleteCacheSecurityGroupMessage, callback: (err: InvalidCacheSecurityGroupStateFault|CacheSecurityGroupNotFoundFault|InvalidParameterValueException|InvalidParameterCombinationException|any, data: any) => void): void;
      deleteCacheSubnetGroup(params: DeleteCacheSubnetGroupMessage, callback: (err: CacheSubnetGroupInUse|CacheSubnetGroupNotFoundFault|any, data: any) => void): void;
      deleteReplicationGroup(params: DeleteReplicationGroupMessage, callback: (err: ReplicationGroupNotFoundFault|InvalidReplicationGroupStateFault|SnapshotAlreadyExistsFault|SnapshotFeatureNotSupportedFault|SnapshotQuotaExceededFault|InvalidParameterValueException|InvalidParameterCombinationException|any, data: DeleteReplicationGroupResult|any) => void): void;
      deleteSnapshot(params: DeleteSnapshotMessage, callback: (err: SnapshotNotFoundFault|InvalidSnapshotStateFault|InvalidParameterValueException|InvalidParameterCombinationException|any, data: DeleteSnapshotResult|any) => void): void;
      describeCacheClusters(params: DescribeCacheClustersMessage, callback: (err: CacheClusterNotFoundFault|InvalidParameterValueException|InvalidParameterCombinationException|any, data: CacheClusterMessage|any) => void): void;
      describeCacheEngineVersions(params: DescribeCacheEngineVersionsMessage, callback: (err: any, data: CacheEngineVersionMessage|any) => void): void;
      describeCacheParameterGroups(params: DescribeCacheParameterGroupsMessage, callback: (err: CacheParameterGroupNotFoundFault|InvalidParameterValueException|InvalidParameterCombinationException|any, data: CacheParameterGroupsMessage|any) => void): void;
      describeCacheParameters(params: DescribeCacheParametersMessage, callback: (err: CacheParameterGroupNotFoundFault|InvalidParameterValueException|InvalidParameterCombinationException|any, data: CacheParameterGroupDetails|any) => void): void;
      describeCacheSecurityGroups(params: DescribeCacheSecurityGroupsMessage, callback: (err: CacheSecurityGroupNotFoundFault|InvalidParameterValueException|InvalidParameterCombinationException|any, data: CacheSecurityGroupMessage|any) => void): void;
      describeCacheSubnetGroups(params: DescribeCacheSubnetGroupsMessage, callback: (err: CacheSubnetGroupNotFoundFault|any, data: CacheSubnetGroupMessage|any) => void): void;
      describeEngineDefaultParameters(params: DescribeEngineDefaultParametersMessage, callback: (err: InvalidParameterValueException|InvalidParameterCombinationException|any, data: DescribeEngineDefaultParametersResult|any) => void): void;
      describeEvents(params: DescribeEventsMessage, callback: (err: InvalidParameterValueException|InvalidParameterCombinationException|any, data: EventsMessage|any) => void): void;
      describeReplicationGroups(params: DescribeReplicationGroupsMessage, callback: (err: ReplicationGroupNotFoundFault|InvalidParameterValueException|InvalidParameterCombinationException|any, data: ReplicationGroupMessage|any) => void): void;
      describeReservedCacheNodes(params: DescribeReservedCacheNodesMessage, callback: (err: ReservedCacheNodeNotFoundFault|InvalidParameterValueException|InvalidParameterCombinationException|any, data: ReservedCacheNodeMessage|any) => void): void;
      describeReservedCacheNodesOfferings(params: DescribeReservedCacheNodesOfferingsMessage, callback: (err: ReservedCacheNodesOfferingNotFoundFault|InvalidParameterValueException|InvalidParameterCombinationException|any, data: ReservedCacheNodesOfferingMessage|any) => void): void;
      describeSnapshots(params: DescribeSnapshotsMessage, callback: (err: CacheClusterNotFoundFault|SnapshotNotFoundFault|InvalidParameterValueException|InvalidParameterCombinationException|any, data: DescribeSnapshotsListMessage|any) => void): void;
      listTagsForResource(params: ListTagsForResourceMessage, callback: (err: CacheClusterNotFoundFault|SnapshotNotFoundFault|InvalidARNFault|any, data: TagListMessage|any) => void): void;
      modifyCacheCluster(params: ModifyCacheClusterMessage, callback: (err: InvalidCacheClusterStateFault|InvalidCacheSecurityGroupStateFault|InsufficientCacheClusterCapacityFault|CacheClusterNotFoundFault|NodeQuotaForClusterExceededFault|NodeQuotaForCustomerExceededFault|CacheSecurityGroupNotFoundFault|CacheParameterGroupNotFoundFault|InvalidVPCNetworkStateFault|InvalidParameterValueException|InvalidParameterCombinationException|any, data: ModifyCacheClusterResult|any) => void): void;
      modifyCacheParameterGroup(params: ModifyCacheParameterGroupMessage, callback: (err: CacheParameterGroupNotFoundFault|InvalidCacheParameterGroupStateFault|InvalidParameterValueException|InvalidParameterCombinationException|any, data: CacheParameterGroupNameMessage|any) => void): void;
      modifyCacheSubnetGroup(params: ModifyCacheSubnetGroupMessage, callback: (err: CacheSubnetGroupNotFoundFault|CacheSubnetQuotaExceededFault|SubnetInUse|InvalidSubnet|any, data: ModifyCacheSubnetGroupResult|any) => void): void;
      modifyReplicationGroup(params: ModifyReplicationGroupMessage, callback: (err: ReplicationGroupNotFoundFault|InvalidReplicationGroupStateFault|InvalidCacheClusterStateFault|InvalidCacheSecurityGroupStateFault|InsufficientCacheClusterCapacityFault|CacheClusterNotFoundFault|NodeQuotaForClusterExceededFault|NodeQuotaForCustomerExceededFault|CacheSecurityGroupNotFoundFault|CacheParameterGroupNotFoundFault|InvalidVPCNetworkStateFault|InvalidParameterValueException|InvalidParameterCombinationException|any, data: ModifyReplicationGroupResult|any) => void): void;
      purchaseReservedCacheNodesOffering(params: PurchaseReservedCacheNodesOfferingMessage, callback: (err: ReservedCacheNodesOfferingNotFoundFault|ReservedCacheNodeAlreadyExistsFault|ReservedCacheNodeQuotaExceededFault|InvalidParameterValueException|InvalidParameterCombinationException|any, data: PurchaseReservedCacheNodesOfferingResult|any) => void): void;
      rebootCacheCluster(params: RebootCacheClusterMessage, callback: (err: InvalidCacheClusterStateFault|CacheClusterNotFoundFault|any, data: RebootCacheClusterResult|any) => void): void;
      removeTagsFromResource(params: RemoveTagsFromResourceMessage, callback: (err: CacheClusterNotFoundFault|SnapshotNotFoundFault|InvalidARNFault|TagNotFoundFault|any, data: TagListMessage|any) => void): void;
      resetCacheParameterGroup(params: ResetCacheParameterGroupMessage, callback: (err: InvalidCacheParameterGroupStateFault|CacheParameterGroupNotFoundFault|InvalidParameterValueException|InvalidParameterCombinationException|any, data: CacheParameterGroupNameMessage|any) => void): void;
      revokeCacheSecurityGroupIngress(params: RevokeCacheSecurityGroupIngressMessage, callback: (err: CacheSecurityGroupNotFoundFault|AuthorizationNotFoundFault|InvalidCacheSecurityGroupStateFault|InvalidParameterValueException|InvalidParameterCombinationException|any, data: RevokeCacheSecurityGroupIngressResult|any) => void): void;
    }

    export type AZMode = string;

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


    export type AutomaticFailoverStatus = string;

    export interface AvailabilityZone {
      Name?: String;
    }


    export type AvailabilityZonesList = Array<String>;

    export type AwsQueryErrorMessage = string;

    export type Boolean = boolean;

    export type BooleanOptional = boolean;

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


    export type CacheClusterList = Array<CacheCluster>;

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


    export type CacheEngineVersionList = Array<CacheEngineVersion>;

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


    export type CacheNodeIdsList = Array<String>;

    export type CacheNodeList = Array<CacheNode>;

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


    export type CacheNodeTypeSpecificParametersList = Array<CacheNodeTypeSpecificParameter>;

    export interface CacheNodeTypeSpecificValue {
      CacheNodeType?: String;
      Value?: String;
    }


    export type CacheNodeTypeSpecificValueList = Array<CacheNodeTypeSpecificValue>;

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


    export type CacheParameterGroupList = Array<CacheParameterGroup>;

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


    export type CacheSecurityGroupMembershipList = Array<CacheSecurityGroupMembership>;

    export interface CacheSecurityGroupMessage {
      Marker?: String;
      CacheSecurityGroups?: CacheSecurityGroups;
    }


    export type CacheSecurityGroupNameList = Array<String>;

    export interface CacheSecurityGroupNotFoundFault {
    }


    export interface CacheSecurityGroupQuotaExceededFault {
    }


    export type CacheSecurityGroups = Array<CacheSecurityGroup>;

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


    export type CacheSubnetGroups = Array<CacheSubnetGroup>;

    export interface CacheSubnetQuotaExceededFault {
    }


    export type ClusterIdList = Array<String>;

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


    export type Double = number;

    export interface EC2SecurityGroup {
      Status?: String;
      EC2SecurityGroupName?: String;
      EC2SecurityGroupOwnerId?: String;
    }


    export type EC2SecurityGroupList = Array<EC2SecurityGroup>;

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


    export type EventList = Array<Event>;

    export interface EventsMessage {
      Marker?: String;
      Events?: EventList;
    }


    export interface InsufficientCacheClusterCapacityFault {
    }


    export type Integer = number;

    export type IntegerOptional = number;

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


    export type KeyList = Array<String>;

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


    export type NodeGroupList = Array<NodeGroup>;

    export interface NodeGroupMember {
      CacheClusterId?: String;
      CacheNodeId?: String;
      ReadEndpoint?: Endpoint;
      PreferredAvailabilityZone?: String;
      CurrentRole?: String;
    }


    export type NodeGroupMemberList = Array<NodeGroupMember>;

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


    export type NodeSnapshotList = Array<NodeSnapshot>;

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


    export type ParameterNameValueList = Array<ParameterNameValue>;

    export type ParametersList = Array<Parameter>;

    export type PendingAutomaticFailoverStatus = string;

    export interface PendingModifiedValues {
      NumCacheNodes?: IntegerOptional;
      CacheNodeIdsToRemove?: CacheNodeIdsList;
      EngineVersion?: String;
    }


    export type PreferredAvailabilityZoneList = Array<String>;

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


    export type RecurringChargeList = Array<RecurringCharge>;

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


    export type ReplicationGroupList = Array<ReplicationGroup>;

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


    export type ReservedCacheNodeList = Array<ReservedCacheNode>;

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


    export type ReservedCacheNodesOfferingList = Array<ReservedCacheNodesOffering>;

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


    export type SecurityGroupIdsList = Array<String>;

    export interface SecurityGroupMembership {
      SecurityGroupId?: String;
      Status?: String;
    }


    export type SecurityGroupMembershipList = Array<SecurityGroupMembership>;

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


    export type SnapshotArnsList = Array<String>;

    export interface SnapshotFeatureNotSupportedFault {
    }


    export type SnapshotList = Array<Snapshot>;

    export interface SnapshotNotFoundFault {
    }


    export interface SnapshotQuotaExceededFault {
    }


    export type SourceType = string;

    export type String = string;

    export interface Subnet {
      SubnetIdentifier?: String;
      SubnetAvailabilityZone?: AvailabilityZone;
    }


    export type SubnetIdentifierList = Array<String>;

    export interface SubnetInUse {
    }


    export type SubnetList = Array<Subnet>;

    export type TStamp = number;

    export interface Tag {
      Key?: String;
      Value?: String;
    }


    export type TagList = Array<Tag>;

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
