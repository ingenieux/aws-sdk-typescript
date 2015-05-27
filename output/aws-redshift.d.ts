// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class Redshift {
      constructor(options?: any);
      authorizeClusterSecurityGroupIngress(params: AuthorizeClusterSecurityGroupIngressMessage, callback: (err: ClusterSecurityGroupNotFoundFault|InvalidClusterSecurityGroupStateFault|AuthorizationAlreadyExistsFault|AuthorizationQuotaExceededFault|any, data: AuthorizeClusterSecurityGroupIngressResult|any) => void): void;
      authorizeSnapshotAccess(params: AuthorizeSnapshotAccessMessage, callback: (err: ClusterSnapshotNotFoundFault|AuthorizationAlreadyExistsFault|AuthorizationQuotaExceededFault|any, data: AuthorizeSnapshotAccessResult|any) => void): void;
      copyClusterSnapshot(params: CopyClusterSnapshotMessage, callback: (err: ClusterSnapshotAlreadyExistsFault|ClusterSnapshotNotFoundFault|InvalidClusterSnapshotStateFault|ClusterSnapshotQuotaExceededFault|any, data: CopyClusterSnapshotResult|any) => void): void;
      createCluster(params: CreateClusterMessage, callback: (err: ClusterAlreadyExistsFault|InsufficientClusterCapacityFault|ClusterParameterGroupNotFoundFault|ClusterSecurityGroupNotFoundFault|ClusterQuotaExceededFault|NumberOfNodesQuotaExceededFault|NumberOfNodesPerClusterLimitExceededFault|ClusterSubnetGroupNotFoundFault|InvalidVPCNetworkStateFault|InvalidClusterSubnetGroupStateFault|InvalidSubnet|UnauthorizedOperation|HsmClientCertificateNotFoundFault|HsmConfigurationNotFoundFault|InvalidElasticIpFault|TagLimitExceededFault|InvalidTagFault|any, data: CreateClusterResult|any) => void): void;
      createClusterParameterGroup(params: CreateClusterParameterGroupMessage, callback: (err: ClusterParameterGroupQuotaExceededFault|ClusterParameterGroupAlreadyExistsFault|TagLimitExceededFault|InvalidTagFault|any, data: CreateClusterParameterGroupResult|any) => void): void;
      createClusterSecurityGroup(params: CreateClusterSecurityGroupMessage, callback: (err: ClusterSecurityGroupAlreadyExistsFault|ClusterSecurityGroupQuotaExceededFault|TagLimitExceededFault|InvalidTagFault|any, data: CreateClusterSecurityGroupResult|any) => void): void;
      createClusterSnapshot(params: CreateClusterSnapshotMessage, callback: (err: ClusterSnapshotAlreadyExistsFault|InvalidClusterStateFault|ClusterNotFoundFault|ClusterSnapshotQuotaExceededFault|TagLimitExceededFault|InvalidTagFault|any, data: CreateClusterSnapshotResult|any) => void): void;
      createClusterSubnetGroup(params: CreateClusterSubnetGroupMessage, callback: (err: ClusterSubnetGroupAlreadyExistsFault|ClusterSubnetGroupQuotaExceededFault|ClusterSubnetQuotaExceededFault|InvalidSubnet|UnauthorizedOperation|TagLimitExceededFault|InvalidTagFault|any, data: CreateClusterSubnetGroupResult|any) => void): void;
      createEventSubscription(params: CreateEventSubscriptionMessage, callback: (err: EventSubscriptionQuotaExceededFault|SubscriptionAlreadyExistFault|SNSInvalidTopicFault|SNSNoAuthorizationFault|SNSTopicArnNotFoundFault|SubscriptionEventIdNotFoundFault|SubscriptionCategoryNotFoundFault|SubscriptionSeverityNotFoundFault|SourceNotFoundFault|TagLimitExceededFault|InvalidTagFault|any, data: CreateEventSubscriptionResult|any) => void): void;
      createHsmClientCertificate(params: CreateHsmClientCertificateMessage, callback: (err: HsmClientCertificateAlreadyExistsFault|HsmClientCertificateQuotaExceededFault|TagLimitExceededFault|InvalidTagFault|any, data: CreateHsmClientCertificateResult|any) => void): void;
      createHsmConfiguration(params: CreateHsmConfigurationMessage, callback: (err: HsmConfigurationAlreadyExistsFault|HsmConfigurationQuotaExceededFault|TagLimitExceededFault|InvalidTagFault|any, data: CreateHsmConfigurationResult|any) => void): void;
      createTags(params: CreateTagsMessage, callback: (err: TagLimitExceededFault|ResourceNotFoundFault|InvalidTagFault|any, data: any) => void): void;
      deleteCluster(params: DeleteClusterMessage, callback: (err: ClusterNotFoundFault|InvalidClusterStateFault|ClusterSnapshotAlreadyExistsFault|ClusterSnapshotQuotaExceededFault|any, data: DeleteClusterResult|any) => void): void;
      deleteClusterParameterGroup(params: DeleteClusterParameterGroupMessage, callback: (err: InvalidClusterParameterGroupStateFault|ClusterParameterGroupNotFoundFault|any, data: any) => void): void;
      deleteClusterSecurityGroup(params: DeleteClusterSecurityGroupMessage, callback: (err: InvalidClusterSecurityGroupStateFault|ClusterSecurityGroupNotFoundFault|any, data: any) => void): void;
      deleteClusterSnapshot(params: DeleteClusterSnapshotMessage, callback: (err: InvalidClusterSnapshotStateFault|ClusterSnapshotNotFoundFault|any, data: DeleteClusterSnapshotResult|any) => void): void;
      deleteClusterSubnetGroup(params: DeleteClusterSubnetGroupMessage, callback: (err: InvalidClusterSubnetGroupStateFault|InvalidClusterSubnetStateFault|ClusterSubnetGroupNotFoundFault|any, data: any) => void): void;
      deleteEventSubscription(params: DeleteEventSubscriptionMessage, callback: (err: SubscriptionNotFoundFault|InvalidSubscriptionStateFault|any, data: any) => void): void;
      deleteHsmClientCertificate(params: DeleteHsmClientCertificateMessage, callback: (err: InvalidHsmClientCertificateStateFault|HsmClientCertificateNotFoundFault|any, data: any) => void): void;
      deleteHsmConfiguration(params: DeleteHsmConfigurationMessage, callback: (err: InvalidHsmConfigurationStateFault|HsmConfigurationNotFoundFault|any, data: any) => void): void;
      deleteTags(params: DeleteTagsMessage, callback: (err: ResourceNotFoundFault|any, data: any) => void): void;
      describeClusterParameterGroups(params: DescribeClusterParameterGroupsMessage, callback: (err: ClusterParameterGroupNotFoundFault|any, data: ClusterParameterGroupsMessage|any) => void): void;
      describeClusterParameters(params: DescribeClusterParametersMessage, callback: (err: ClusterParameterGroupNotFoundFault|any, data: ClusterParameterGroupDetails|any) => void): void;
      describeClusterSecurityGroups(params: DescribeClusterSecurityGroupsMessage, callback: (err: ClusterSecurityGroupNotFoundFault|any, data: ClusterSecurityGroupMessage|any) => void): void;
      describeClusterSnapshots(params: DescribeClusterSnapshotsMessage, callback: (err: ClusterSnapshotNotFoundFault|any, data: SnapshotMessage|any) => void): void;
      describeClusterSubnetGroups(params: DescribeClusterSubnetGroupsMessage, callback: (err: ClusterSubnetGroupNotFoundFault|any, data: ClusterSubnetGroupMessage|any) => void): void;
      describeClusterVersions(params: DescribeClusterVersionsMessage, callback: (err: any, data: ClusterVersionsMessage|any) => void): void;
      describeClusters(params: DescribeClustersMessage, callback: (err: ClusterNotFoundFault|any, data: ClustersMessage|any) => void): void;
      describeDefaultClusterParameters(params: DescribeDefaultClusterParametersMessage, callback: (err: any, data: DescribeDefaultClusterParametersResult|any) => void): void;
      describeEventCategories(params: DescribeEventCategoriesMessage, callback: (err: any, data: EventCategoriesMessage|any) => void): void;
      describeEventSubscriptions(params: DescribeEventSubscriptionsMessage, callback: (err: SubscriptionNotFoundFault|any, data: EventSubscriptionsMessage|any) => void): void;
      describeEvents(params: DescribeEventsMessage, callback: (err: any, data: EventsMessage|any) => void): void;
      describeHsmClientCertificates(params: DescribeHsmClientCertificatesMessage, callback: (err: HsmClientCertificateNotFoundFault|any, data: HsmClientCertificateMessage|any) => void): void;
      describeHsmConfigurations(params: DescribeHsmConfigurationsMessage, callback: (err: HsmConfigurationNotFoundFault|any, data: HsmConfigurationMessage|any) => void): void;
      describeLoggingStatus(params: DescribeLoggingStatusMessage, callback: (err: ClusterNotFoundFault|any, data: LoggingStatus|any) => void): void;
      describeOrderableClusterOptions(params: DescribeOrderableClusterOptionsMessage, callback: (err: any, data: OrderableClusterOptionsMessage|any) => void): void;
      describeReservedNodeOfferings(params: DescribeReservedNodeOfferingsMessage, callback: (err: ReservedNodeOfferingNotFoundFault|any, data: ReservedNodeOfferingsMessage|any) => void): void;
      describeReservedNodes(params: DescribeReservedNodesMessage, callback: (err: ReservedNodeNotFoundFault|any, data: ReservedNodesMessage|any) => void): void;
      describeResize(params: DescribeResizeMessage, callback: (err: ClusterNotFoundFault|ResizeNotFoundFault|any, data: ResizeProgressMessage|any) => void): void;
      describeTags(params: DescribeTagsMessage, callback: (err: ResourceNotFoundFault|any, data: TaggedResourceListMessage|any) => void): void;
      disableLogging(params: DisableLoggingMessage, callback: (err: ClusterNotFoundFault|any, data: LoggingStatus|any) => void): void;
      disableSnapshotCopy(params: DisableSnapshotCopyMessage, callback: (err: ClusterNotFoundFault|SnapshotCopyAlreadyDisabledFault|InvalidClusterStateFault|UnauthorizedOperation|any, data: DisableSnapshotCopyResult|any) => void): void;
      enableLogging(params: EnableLoggingMessage, callback: (err: ClusterNotFoundFault|BucketNotFoundFault|InsufficientS3BucketPolicyFault|InvalidS3KeyPrefixFault|InvalidS3BucketNameFault|any, data: LoggingStatus|any) => void): void;
      enableSnapshotCopy(params: EnableSnapshotCopyMessage, callback: (err: IncompatibleOrderableOptions|InvalidClusterStateFault|ClusterNotFoundFault|CopyToRegionDisabledFault|SnapshotCopyAlreadyEnabledFault|UnknownSnapshotCopyRegionFault|UnauthorizedOperation|any, data: EnableSnapshotCopyResult|any) => void): void;
      modifyCluster(params: ModifyClusterMessage, callback: (err: InvalidClusterStateFault|InvalidClusterSecurityGroupStateFault|ClusterNotFoundFault|NumberOfNodesQuotaExceededFault|ClusterSecurityGroupNotFoundFault|ClusterParameterGroupNotFoundFault|InsufficientClusterCapacityFault|UnsupportedOptionFault|UnauthorizedOperation|HsmClientCertificateNotFoundFault|HsmConfigurationNotFoundFault|ClusterAlreadyExistsFault|any, data: ModifyClusterResult|any) => void): void;
      modifyClusterParameterGroup(params: ModifyClusterParameterGroupMessage, callback: (err: ClusterParameterGroupNotFoundFault|InvalidClusterParameterGroupStateFault|any, data: ClusterParameterGroupNameMessage|any) => void): void;
      modifyClusterSubnetGroup(params: ModifyClusterSubnetGroupMessage, callback: (err: ClusterSubnetGroupNotFoundFault|ClusterSubnetQuotaExceededFault|SubnetAlreadyInUse|InvalidSubnet|UnauthorizedOperation|any, data: ModifyClusterSubnetGroupResult|any) => void): void;
      modifyEventSubscription(params: ModifyEventSubscriptionMessage, callback: (err: SubscriptionNotFoundFault|SNSInvalidTopicFault|SNSNoAuthorizationFault|SNSTopicArnNotFoundFault|SubscriptionEventIdNotFoundFault|SubscriptionCategoryNotFoundFault|SubscriptionSeverityNotFoundFault|SourceNotFoundFault|InvalidSubscriptionStateFault|any, data: ModifyEventSubscriptionResult|any) => void): void;
      modifySnapshotCopyRetentionPeriod(params: ModifySnapshotCopyRetentionPeriodMessage, callback: (err: ClusterNotFoundFault|SnapshotCopyDisabledFault|UnauthorizedOperation|InvalidClusterStateFault|any, data: ModifySnapshotCopyRetentionPeriodResult|any) => void): void;
      purchaseReservedNodeOffering(params: PurchaseReservedNodeOfferingMessage, callback: (err: ReservedNodeOfferingNotFoundFault|ReservedNodeAlreadyExistsFault|ReservedNodeQuotaExceededFault|any, data: PurchaseReservedNodeOfferingResult|any) => void): void;
      rebootCluster(params: RebootClusterMessage, callback: (err: InvalidClusterStateFault|ClusterNotFoundFault|any, data: RebootClusterResult|any) => void): void;
      resetClusterParameterGroup(params: ResetClusterParameterGroupMessage, callback: (err: InvalidClusterParameterGroupStateFault|ClusterParameterGroupNotFoundFault|any, data: ClusterParameterGroupNameMessage|any) => void): void;
      restoreFromClusterSnapshot(params: RestoreFromClusterSnapshotMessage, callback: (err: AccessToSnapshotDeniedFault|ClusterAlreadyExistsFault|ClusterSnapshotNotFoundFault|ClusterQuotaExceededFault|InsufficientClusterCapacityFault|InvalidClusterSnapshotStateFault|InvalidRestoreFault|NumberOfNodesQuotaExceededFault|NumberOfNodesPerClusterLimitExceededFault|InvalidVPCNetworkStateFault|InvalidClusterSubnetGroupStateFault|InvalidSubnet|ClusterSubnetGroupNotFoundFault|UnauthorizedOperation|HsmClientCertificateNotFoundFault|HsmConfigurationNotFoundFault|InvalidElasticIpFault|ClusterParameterGroupNotFoundFault|ClusterSecurityGroupNotFoundFault|any, data: RestoreFromClusterSnapshotResult|any) => void): void;
      revokeClusterSecurityGroupIngress(params: RevokeClusterSecurityGroupIngressMessage, callback: (err: ClusterSecurityGroupNotFoundFault|AuthorizationNotFoundFault|InvalidClusterSecurityGroupStateFault|any, data: RevokeClusterSecurityGroupIngressResult|any) => void): void;
      revokeSnapshotAccess(params: RevokeSnapshotAccessMessage, callback: (err: AccessToSnapshotDeniedFault|AuthorizationNotFoundFault|ClusterSnapshotNotFoundFault|any, data: RevokeSnapshotAccessResult|any) => void): void;
      rotateEncryptionKey(params: RotateEncryptionKeyMessage, callback: (err: ClusterNotFoundFault|InvalidClusterStateFault|any, data: RotateEncryptionKeyResult|any) => void): void;
    }

    export interface AccessToSnapshotDeniedFault {
    }


    export interface AccountWithRestoreAccess {
      AccountId?: String;
    }


    export type AccountsWithRestoreAccessList = Array<AccountWithRestoreAccess>;

    export interface AuthorizationAlreadyExistsFault {
    }


    export interface AuthorizationNotFoundFault {
    }


    export interface AuthorizationQuotaExceededFault {
    }


    export interface AuthorizeClusterSecurityGroupIngressMessage {
      ClusterSecurityGroupName: String;
      CIDRIP?: String;
      EC2SecurityGroupName?: String;
      EC2SecurityGroupOwnerId?: String;
    }


    export interface AuthorizeSnapshotAccessMessage {
      SnapshotIdentifier: String;
      SnapshotClusterIdentifier?: String;
      AccountWithRestoreAccess: String;
    }


    export interface AvailabilityZone {
      Name?: String;
    }


    export type AvailabilityZoneList = Array<AvailabilityZone>;

    export type Boolean = boolean;

    export type BooleanOptional = boolean;

    export interface BucketNotFoundFault {
    }


    export interface Cluster {
      ClusterIdentifier?: String;
      NodeType?: String;
      ClusterStatus?: String;
      ModifyStatus?: String;
      MasterUsername?: String;
      DBName?: String;
      Endpoint?: Endpoint;
      ClusterCreateTime?: TStamp;
      AutomatedSnapshotRetentionPeriod?: Integer;
      ClusterSecurityGroups?: ClusterSecurityGroupMembershipList;
      VpcSecurityGroups?: VpcSecurityGroupMembershipList;
      ClusterParameterGroups?: ClusterParameterGroupStatusList;
      ClusterSubnetGroupName?: String;
      VpcId?: String;
      AvailabilityZone?: String;
      PreferredMaintenanceWindow?: String;
      PendingModifiedValues?: PendingModifiedValues;
      ClusterVersion?: String;
      AllowVersionUpgrade?: Boolean;
      NumberOfNodes?: Integer;
      PubliclyAccessible?: Boolean;
      Encrypted?: Boolean;
      RestoreStatus?: RestoreStatus;
      HsmStatus?: HsmStatus;
      ClusterSnapshotCopyStatus?: ClusterSnapshotCopyStatus;
      ClusterPublicKey?: String;
      ClusterNodes?: ClusterNodesList;
      ElasticIpStatus?: ElasticIpStatus;
      ClusterRevisionNumber?: String;
      Tags?: TagList;
      KmsKeyId?: String;
    }


    export interface ClusterAlreadyExistsFault {
    }


    export type ClusterList = Array<Cluster>;

    export interface ClusterNode {
      NodeRole?: String;
      PrivateIPAddress?: String;
      PublicIPAddress?: String;
    }


    export type ClusterNodesList = Array<ClusterNode>;

    export interface ClusterNotFoundFault {
    }


    export interface ClusterParameterGroup {
      ParameterGroupName?: String;
      ParameterGroupFamily?: String;
      Description?: String;
      Tags?: TagList;
    }


    export interface ClusterParameterGroupAlreadyExistsFault {
    }


    export interface ClusterParameterGroupDetails {
      Parameters?: ParametersList;
      Marker?: String;
    }


    export interface ClusterParameterGroupNameMessage {
      ParameterGroupName?: String;
      ParameterGroupStatus?: String;
    }


    export interface ClusterParameterGroupNotFoundFault {
    }


    export interface ClusterParameterGroupQuotaExceededFault {
    }


    export interface ClusterParameterGroupStatus {
      ParameterGroupName?: String;
      ParameterApplyStatus?: String;
    }


    export type ClusterParameterGroupStatusList = Array<ClusterParameterGroupStatus>;

    export interface ClusterParameterGroupsMessage {
      Marker?: String;
      ParameterGroups?: ParameterGroupList;
    }


    export interface ClusterQuotaExceededFault {
    }


    export interface ClusterSecurityGroup {
      ClusterSecurityGroupName?: String;
      Description?: String;
      EC2SecurityGroups?: EC2SecurityGroupList;
      IPRanges?: IPRangeList;
      Tags?: TagList;
    }


    export interface ClusterSecurityGroupAlreadyExistsFault {
    }


    export interface ClusterSecurityGroupMembership {
      ClusterSecurityGroupName?: String;
      Status?: String;
    }


    export type ClusterSecurityGroupMembershipList = Array<ClusterSecurityGroupMembership>;

    export interface ClusterSecurityGroupMessage {
      Marker?: String;
      ClusterSecurityGroups?: ClusterSecurityGroups;
    }


    export type ClusterSecurityGroupNameList = Array<String>;

    export interface ClusterSecurityGroupNotFoundFault {
    }


    export interface ClusterSecurityGroupQuotaExceededFault {
    }


    export type ClusterSecurityGroups = Array<ClusterSecurityGroup>;

    export interface ClusterSnapshotAlreadyExistsFault {
    }


    export interface ClusterSnapshotCopyStatus {
      DestinationRegion?: String;
      RetentionPeriod?: Long;
    }


    export interface ClusterSnapshotNotFoundFault {
    }


    export interface ClusterSnapshotQuotaExceededFault {
    }


    export interface ClusterSubnetGroup {
      ClusterSubnetGroupName?: String;
      Description?: String;
      VpcId?: String;
      SubnetGroupStatus?: String;
      Subnets?: SubnetList;
      Tags?: TagList;
    }


    export interface ClusterSubnetGroupAlreadyExistsFault {
    }


    export interface ClusterSubnetGroupMessage {
      Marker?: String;
      ClusterSubnetGroups?: ClusterSubnetGroups;
    }


    export interface ClusterSubnetGroupNotFoundFault {
    }


    export interface ClusterSubnetGroupQuotaExceededFault {
    }


    export type ClusterSubnetGroups = Array<ClusterSubnetGroup>;

    export interface ClusterSubnetQuotaExceededFault {
    }


    export interface ClusterVersion {
      ClusterVersion?: String;
      ClusterParameterGroupFamily?: String;
      Description?: String;
    }


    export type ClusterVersionList = Array<ClusterVersion>;

    export interface ClusterVersionsMessage {
      Marker?: String;
      ClusterVersions?: ClusterVersionList;
    }


    export interface ClustersMessage {
      Marker?: String;
      Clusters?: ClusterList;
    }


    export interface CopyClusterSnapshotMessage {
      SourceSnapshotIdentifier: String;
      SourceSnapshotClusterIdentifier?: String;
      TargetSnapshotIdentifier: String;
    }


    export interface CopyToRegionDisabledFault {
    }


    export interface CreateClusterMessage {
      DBName?: String;
      ClusterIdentifier: String;
      ClusterType?: String;
      NodeType: String;
      MasterUsername: String;
      MasterUserPassword: String;
      ClusterSecurityGroups?: ClusterSecurityGroupNameList;
      VpcSecurityGroupIds?: VpcSecurityGroupIdList;
      ClusterSubnetGroupName?: String;
      AvailabilityZone?: String;
      PreferredMaintenanceWindow?: String;
      ClusterParameterGroupName?: String;
      AutomatedSnapshotRetentionPeriod?: IntegerOptional;
      Port?: IntegerOptional;
      ClusterVersion?: String;
      AllowVersionUpgrade?: BooleanOptional;
      NumberOfNodes?: IntegerOptional;
      PubliclyAccessible?: BooleanOptional;
      Encrypted?: BooleanOptional;
      HsmClientCertificateIdentifier?: String;
      HsmConfigurationIdentifier?: String;
      ElasticIp?: String;
      Tags?: TagList;
      KmsKeyId?: String;
    }


    export interface CreateClusterParameterGroupMessage {
      ParameterGroupName: String;
      ParameterGroupFamily: String;
      Description: String;
      Tags?: TagList;
    }


    export interface CreateClusterSecurityGroupMessage {
      ClusterSecurityGroupName: String;
      Description: String;
      Tags?: TagList;
    }


    export interface CreateClusterSnapshotMessage {
      SnapshotIdentifier: String;
      ClusterIdentifier: String;
      Tags?: TagList;
    }


    export interface CreateClusterSubnetGroupMessage {
      ClusterSubnetGroupName: String;
      Description: String;
      SubnetIds: SubnetIdentifierList;
      Tags?: TagList;
    }


    export interface CreateEventSubscriptionMessage {
      SubscriptionName: String;
      SnsTopicArn: String;
      SourceType?: String;
      SourceIds?: SourceIdsList;
      EventCategories?: EventCategoriesList;
      Severity?: String;
      Enabled?: BooleanOptional;
      Tags?: TagList;
    }


    export interface CreateHsmClientCertificateMessage {
      HsmClientCertificateIdentifier: String;
      Tags?: TagList;
    }


    export interface CreateHsmConfigurationMessage {
      HsmConfigurationIdentifier: String;
      Description: String;
      HsmIpAddress: String;
      HsmPartitionName: String;
      HsmPartitionPassword: String;
      HsmServerPublicCertificate: String;
      Tags?: TagList;
    }


    export interface CreateTagsMessage {
      ResourceName: String;
      Tags: TagList;
    }


    export interface DefaultClusterParameters {
      ParameterGroupFamily?: String;
      Marker?: String;
      Parameters?: ParametersList;
    }


    export interface DeleteClusterMessage {
      ClusterIdentifier: String;
      SkipFinalClusterSnapshot?: Boolean;
      FinalClusterSnapshotIdentifier?: String;
    }


    export interface DeleteClusterParameterGroupMessage {
      ParameterGroupName: String;
    }


    export interface DeleteClusterSecurityGroupMessage {
      ClusterSecurityGroupName: String;
    }


    export interface DeleteClusterSnapshotMessage {
      SnapshotIdentifier: String;
      SnapshotClusterIdentifier?: String;
    }


    export interface DeleteClusterSubnetGroupMessage {
      ClusterSubnetGroupName: String;
    }


    export interface DeleteEventSubscriptionMessage {
      SubscriptionName: String;
    }


    export interface DeleteHsmClientCertificateMessage {
      HsmClientCertificateIdentifier: String;
    }


    export interface DeleteHsmConfigurationMessage {
      HsmConfigurationIdentifier: String;
    }


    export interface DeleteTagsMessage {
      ResourceName: String;
      TagKeys: TagKeyList;
    }


    export interface DescribeClusterParameterGroupsMessage {
      ParameterGroupName?: String;
      MaxRecords?: IntegerOptional;
      Marker?: String;
      TagKeys?: TagKeyList;
      TagValues?: TagValueList;
    }


    export interface DescribeClusterParametersMessage {
      ParameterGroupName: String;
      Source?: String;
      MaxRecords?: IntegerOptional;
      Marker?: String;
    }


    export interface DescribeClusterSecurityGroupsMessage {
      ClusterSecurityGroupName?: String;
      MaxRecords?: IntegerOptional;
      Marker?: String;
      TagKeys?: TagKeyList;
      TagValues?: TagValueList;
    }


    export interface DescribeClusterSnapshotsMessage {
      ClusterIdentifier?: String;
      SnapshotIdentifier?: String;
      SnapshotType?: String;
      StartTime?: TStamp;
      EndTime?: TStamp;
      MaxRecords?: IntegerOptional;
      Marker?: String;
      OwnerAccount?: String;
      TagKeys?: TagKeyList;
      TagValues?: TagValueList;
    }


    export interface DescribeClusterSubnetGroupsMessage {
      ClusterSubnetGroupName?: String;
      MaxRecords?: IntegerOptional;
      Marker?: String;
      TagKeys?: TagKeyList;
      TagValues?: TagValueList;
    }


    export interface DescribeClusterVersionsMessage {
      ClusterVersion?: String;
      ClusterParameterGroupFamily?: String;
      MaxRecords?: IntegerOptional;
      Marker?: String;
    }


    export interface DescribeClustersMessage {
      ClusterIdentifier?: String;
      MaxRecords?: IntegerOptional;
      Marker?: String;
      TagKeys?: TagKeyList;
      TagValues?: TagValueList;
    }


    export interface DescribeDefaultClusterParametersMessage {
      ParameterGroupFamily: String;
      MaxRecords?: IntegerOptional;
      Marker?: String;
    }


    export interface DescribeEventCategoriesMessage {
      SourceType?: String;
    }


    export interface DescribeEventSubscriptionsMessage {
      SubscriptionName?: String;
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


    export interface DescribeHsmClientCertificatesMessage {
      HsmClientCertificateIdentifier?: String;
      MaxRecords?: IntegerOptional;
      Marker?: String;
      TagKeys?: TagKeyList;
      TagValues?: TagValueList;
    }


    export interface DescribeHsmConfigurationsMessage {
      HsmConfigurationIdentifier?: String;
      MaxRecords?: IntegerOptional;
      Marker?: String;
      TagKeys?: TagKeyList;
      TagValues?: TagValueList;
    }


    export interface DescribeLoggingStatusMessage {
      ClusterIdentifier: String;
    }


    export interface DescribeOrderableClusterOptionsMessage {
      ClusterVersion?: String;
      NodeType?: String;
      MaxRecords?: IntegerOptional;
      Marker?: String;
    }


    export interface DescribeReservedNodeOfferingsMessage {
      ReservedNodeOfferingId?: String;
      MaxRecords?: IntegerOptional;
      Marker?: String;
    }


    export interface DescribeReservedNodesMessage {
      ReservedNodeId?: String;
      MaxRecords?: IntegerOptional;
      Marker?: String;
    }


    export interface DescribeResizeMessage {
      ClusterIdentifier: String;
    }


    export interface DescribeTagsMessage {
      ResourceName?: String;
      ResourceType?: String;
      MaxRecords?: IntegerOptional;
      Marker?: String;
      TagKeys?: TagKeyList;
      TagValues?: TagValueList;
    }


    export interface DisableLoggingMessage {
      ClusterIdentifier: String;
    }


    export interface DisableSnapshotCopyMessage {
      ClusterIdentifier: String;
    }


    export type Double = number;

    export type DoubleOptional = number;

    export interface EC2SecurityGroup {
      Status?: String;
      EC2SecurityGroupName?: String;
      EC2SecurityGroupOwnerId?: String;
      Tags?: TagList;
    }


    export type EC2SecurityGroupList = Array<EC2SecurityGroup>;

    export interface ElasticIpStatus {
      ElasticIp?: String;
      Status?: String;
    }


    export interface EnableLoggingMessage {
      ClusterIdentifier: String;
      BucketName: String;
      S3KeyPrefix?: String;
    }


    export interface EnableSnapshotCopyMessage {
      ClusterIdentifier: String;
      DestinationRegion: String;
      RetentionPeriod?: IntegerOptional;
    }


    export interface Endpoint {
      Address?: String;
      Port?: Integer;
    }


    export interface Event {
      SourceIdentifier?: String;
      SourceType?: SourceType;
      Message?: String;
      EventCategories?: EventCategoriesList;
      Severity?: String;
      Date?: TStamp;
      EventId?: String;
    }


    export type EventCategoriesList = Array<String>;

    export interface EventCategoriesMap {
      SourceType?: String;
      Events?: EventInfoMapList;
    }


    export type EventCategoriesMapList = Array<EventCategoriesMap>;

    export interface EventCategoriesMessage {
      EventCategoriesMapList?: EventCategoriesMapList;
    }


    export interface EventInfoMap {
      EventId?: String;
      EventCategories?: EventCategoriesList;
      EventDescription?: String;
      Severity?: String;
    }


    export type EventInfoMapList = Array<EventInfoMap>;

    export type EventList = Array<Event>;

    export interface EventSubscription {
      CustomerAwsId?: String;
      CustSubscriptionId?: String;
      SnsTopicArn?: String;
      Status?: String;
      SubscriptionCreationTime?: TStamp;
      SourceType?: String;
      SourceIdsList?: SourceIdsList;
      EventCategoriesList?: EventCategoriesList;
      Severity?: String;
      Enabled?: Boolean;
      Tags?: TagList;
    }


    export interface EventSubscriptionQuotaExceededFault {
    }


    export type EventSubscriptionsList = Array<EventSubscription>;

    export interface EventSubscriptionsMessage {
      Marker?: String;
      EventSubscriptionsList?: EventSubscriptionsList;
    }


    export interface EventsMessage {
      Marker?: String;
      Events?: EventList;
    }


    export interface HsmClientCertificate {
      HsmClientCertificateIdentifier?: String;
      HsmClientCertificatePublicKey?: String;
      Tags?: TagList;
    }


    export interface HsmClientCertificateAlreadyExistsFault {
    }


    export type HsmClientCertificateList = Array<HsmClientCertificate>;

    export interface HsmClientCertificateMessage {
      Marker?: String;
      HsmClientCertificates?: HsmClientCertificateList;
    }


    export interface HsmClientCertificateNotFoundFault {
    }


    export interface HsmClientCertificateQuotaExceededFault {
    }


    export interface HsmConfiguration {
      HsmConfigurationIdentifier?: String;
      Description?: String;
      HsmIpAddress?: String;
      HsmPartitionName?: String;
      Tags?: TagList;
    }


    export interface HsmConfigurationAlreadyExistsFault {
    }


    export type HsmConfigurationList = Array<HsmConfiguration>;

    export interface HsmConfigurationMessage {
      Marker?: String;
      HsmConfigurations?: HsmConfigurationList;
    }


    export interface HsmConfigurationNotFoundFault {
    }


    export interface HsmConfigurationQuotaExceededFault {
    }


    export interface HsmStatus {
      HsmClientCertificateIdentifier?: String;
      HsmConfigurationIdentifier?: String;
      Status?: String;
    }


    export interface IPRange {
      Status?: String;
      CIDRIP?: String;
      Tags?: TagList;
    }


    export type IPRangeList = Array<IPRange>;

    export type ImportTablesCompleted = Array<String>;

    export type ImportTablesInProgress = Array<String>;

    export type ImportTablesNotStarted = Array<String>;

    export interface IncompatibleOrderableOptions {
    }


    export interface InsufficientClusterCapacityFault {
    }


    export interface InsufficientS3BucketPolicyFault {
    }


    export type Integer = number;

    export type IntegerOptional = number;

    export interface InvalidClusterParameterGroupStateFault {
    }


    export interface InvalidClusterSecurityGroupStateFault {
    }


    export interface InvalidClusterSnapshotStateFault {
    }


    export interface InvalidClusterStateFault {
    }


    export interface InvalidClusterSubnetGroupStateFault {
    }


    export interface InvalidClusterSubnetStateFault {
    }


    export interface InvalidElasticIpFault {
    }


    export interface InvalidHsmClientCertificateStateFault {
    }


    export interface InvalidHsmConfigurationStateFault {
    }


    export interface InvalidRestoreFault {
    }


    export interface InvalidS3BucketNameFault {
    }


    export interface InvalidS3KeyPrefixFault {
    }


    export interface InvalidSubnet {
    }


    export interface InvalidSubscriptionStateFault {
    }


    export interface InvalidTagFault {
    }


    export interface InvalidVPCNetworkStateFault {
    }


    export interface LoggingStatus {
      LoggingEnabled?: Boolean;
      BucketName?: String;
      S3KeyPrefix?: String;
      LastSuccessfulDeliveryTime?: TStamp;
      LastFailureTime?: TStamp;
      LastFailureMessage?: String;
    }


    export type Long = number;

    export type LongOptional = number;

    export interface ModifyClusterMessage {
      ClusterIdentifier: String;
      ClusterType?: String;
      NodeType?: String;
      NumberOfNodes?: IntegerOptional;
      ClusterSecurityGroups?: ClusterSecurityGroupNameList;
      VpcSecurityGroupIds?: VpcSecurityGroupIdList;
      MasterUserPassword?: String;
      ClusterParameterGroupName?: String;
      AutomatedSnapshotRetentionPeriod?: IntegerOptional;
      PreferredMaintenanceWindow?: String;
      ClusterVersion?: String;
      AllowVersionUpgrade?: BooleanOptional;
      HsmClientCertificateIdentifier?: String;
      HsmConfigurationIdentifier?: String;
      NewClusterIdentifier?: String;
    }


    export interface ModifyClusterParameterGroupMessage {
      ParameterGroupName: String;
      Parameters: ParametersList;
    }


    export interface ModifyClusterSubnetGroupMessage {
      ClusterSubnetGroupName: String;
      Description?: String;
      SubnetIds: SubnetIdentifierList;
    }


    export interface ModifyEventSubscriptionMessage {
      SubscriptionName: String;
      SnsTopicArn?: String;
      SourceType?: String;
      SourceIds?: SourceIdsList;
      EventCategories?: EventCategoriesList;
      Severity?: String;
      Enabled?: BooleanOptional;
    }


    export interface ModifySnapshotCopyRetentionPeriodMessage {
      ClusterIdentifier: String;
      RetentionPeriod: Integer;
    }


    export interface NumberOfNodesPerClusterLimitExceededFault {
    }


    export interface NumberOfNodesQuotaExceededFault {
    }


    export interface OrderableClusterOption {
      ClusterVersion?: String;
      ClusterType?: String;
      NodeType?: String;
      AvailabilityZones?: AvailabilityZoneList;
    }


    export type OrderableClusterOptionsList = Array<OrderableClusterOption>;

    export interface OrderableClusterOptionsMessage {
      OrderableClusterOptions?: OrderableClusterOptionsList;
      Marker?: String;
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


    export type ParameterGroupList = Array<ClusterParameterGroup>;

    export type ParametersList = Array<Parameter>;

    export interface PendingModifiedValues {
      MasterUserPassword?: String;
      NodeType?: String;
      NumberOfNodes?: IntegerOptional;
      ClusterType?: String;
      ClusterVersion?: String;
      AutomatedSnapshotRetentionPeriod?: IntegerOptional;
      ClusterIdentifier?: String;
    }


    export interface PurchaseReservedNodeOfferingMessage {
      ReservedNodeOfferingId: String;
      NodeCount?: IntegerOptional;
    }


    export interface RebootClusterMessage {
      ClusterIdentifier: String;
    }


    export interface RecurringCharge {
      RecurringChargeAmount?: Double;
      RecurringChargeFrequency?: String;
    }


    export type RecurringChargeList = Array<RecurringCharge>;

    export interface ReservedNode {
      ReservedNodeId?: String;
      ReservedNodeOfferingId?: String;
      NodeType?: String;
      StartTime?: TStamp;
      Duration?: Integer;
      FixedPrice?: Double;
      UsagePrice?: Double;
      CurrencyCode?: String;
      NodeCount?: Integer;
      State?: String;
      OfferingType?: String;
      RecurringCharges?: RecurringChargeList;
    }


    export interface ReservedNodeAlreadyExistsFault {
    }


    export type ReservedNodeList = Array<ReservedNode>;

    export interface ReservedNodeNotFoundFault {
    }


    export interface ReservedNodeOffering {
      ReservedNodeOfferingId?: String;
      NodeType?: String;
      Duration?: Integer;
      FixedPrice?: Double;
      UsagePrice?: Double;
      CurrencyCode?: String;
      OfferingType?: String;
      RecurringCharges?: RecurringChargeList;
    }


    export type ReservedNodeOfferingList = Array<ReservedNodeOffering>;

    export interface ReservedNodeOfferingNotFoundFault {
    }


    export interface ReservedNodeOfferingsMessage {
      Marker?: String;
      ReservedNodeOfferings?: ReservedNodeOfferingList;
    }


    export interface ReservedNodeQuotaExceededFault {
    }


    export interface ReservedNodesMessage {
      Marker?: String;
      ReservedNodes?: ReservedNodeList;
    }


    export interface ResetClusterParameterGroupMessage {
      ParameterGroupName: String;
      ResetAllParameters?: Boolean;
      Parameters?: ParametersList;
    }


    export interface ResizeNotFoundFault {
    }


    export interface ResizeProgressMessage {
      TargetNodeType?: String;
      TargetNumberOfNodes?: IntegerOptional;
      TargetClusterType?: String;
      Status?: String;
      ImportTablesCompleted?: ImportTablesCompleted;
      ImportTablesInProgress?: ImportTablesInProgress;
      ImportTablesNotStarted?: ImportTablesNotStarted;
      AvgResizeRateInMegaBytesPerSecond?: DoubleOptional;
      TotalResizeDataInMegaBytes?: LongOptional;
      ProgressInMegaBytes?: LongOptional;
      ElapsedTimeInSeconds?: LongOptional;
      EstimatedTimeToCompletionInSeconds?: LongOptional;
    }


    export interface ResourceNotFoundFault {
    }


    export interface RestoreFromClusterSnapshotMessage {
      ClusterIdentifier: String;
      SnapshotIdentifier: String;
      SnapshotClusterIdentifier?: String;
      Port?: IntegerOptional;
      AvailabilityZone?: String;
      AllowVersionUpgrade?: BooleanOptional;
      ClusterSubnetGroupName?: String;
      PubliclyAccessible?: BooleanOptional;
      OwnerAccount?: String;
      HsmClientCertificateIdentifier?: String;
      HsmConfigurationIdentifier?: String;
      ElasticIp?: String;
      ClusterParameterGroupName?: String;
      ClusterSecurityGroups?: ClusterSecurityGroupNameList;
      VpcSecurityGroupIds?: VpcSecurityGroupIdList;
      PreferredMaintenanceWindow?: String;
      AutomatedSnapshotRetentionPeriod?: IntegerOptional;
      KmsKeyId?: String;
    }


    export interface RestoreStatus {
      Status?: String;
      CurrentRestoreRateInMegaBytesPerSecond?: Double;
      SnapshotSizeInMegaBytes?: Long;
      ProgressInMegaBytes?: Long;
      ElapsedTimeInSeconds?: Long;
      EstimatedTimeToCompletionInSeconds?: Long;
    }


    export interface RevokeClusterSecurityGroupIngressMessage {
      ClusterSecurityGroupName: String;
      CIDRIP?: String;
      EC2SecurityGroupName?: String;
      EC2SecurityGroupOwnerId?: String;
    }


    export interface RevokeSnapshotAccessMessage {
      SnapshotIdentifier: String;
      SnapshotClusterIdentifier?: String;
      AccountWithRestoreAccess: String;
    }


    export interface RotateEncryptionKeyMessage {
      ClusterIdentifier: String;
    }


    export interface SNSInvalidTopicFault {
    }


    export interface SNSNoAuthorizationFault {
    }


    export interface SNSTopicArnNotFoundFault {
    }


    export interface Snapshot {
      SnapshotIdentifier?: String;
      ClusterIdentifier?: String;
      SnapshotCreateTime?: TStamp;
      Status?: String;
      Port?: Integer;
      AvailabilityZone?: String;
      ClusterCreateTime?: TStamp;
      MasterUsername?: String;
      ClusterVersion?: String;
      SnapshotType?: String;
      NodeType?: String;
      NumberOfNodes?: Integer;
      DBName?: String;
      VpcId?: String;
      Encrypted?: Boolean;
      KmsKeyId?: String;
      EncryptedWithHSM?: Boolean;
      AccountsWithRestoreAccess?: AccountsWithRestoreAccessList;
      OwnerAccount?: String;
      TotalBackupSizeInMegaBytes?: Double;
      ActualIncrementalBackupSizeInMegaBytes?: Double;
      BackupProgressInMegaBytes?: Double;
      CurrentBackupRateInMegaBytesPerSecond?: Double;
      EstimatedSecondsToCompletion?: Long;
      ElapsedTimeInSeconds?: Long;
      SourceRegion?: String;
      Tags?: TagList;
    }


    export interface SnapshotCopyAlreadyDisabledFault {
    }


    export interface SnapshotCopyAlreadyEnabledFault {
    }


    export interface SnapshotCopyDisabledFault {
    }


    export type SnapshotList = Array<Snapshot>;

    export interface SnapshotMessage {
      Marker?: String;
      Snapshots?: SnapshotList;
    }


    export type SourceIdsList = Array<String>;

    export interface SourceNotFoundFault {
    }


    export type SourceType = string;

    export type String = string;

    export interface Subnet {
      SubnetIdentifier?: String;
      SubnetAvailabilityZone?: AvailabilityZone;
      SubnetStatus?: String;
    }


    export interface SubnetAlreadyInUse {
    }


    export type SubnetIdentifierList = Array<String>;

    export type SubnetList = Array<Subnet>;

    export interface SubscriptionAlreadyExistFault {
    }


    export interface SubscriptionCategoryNotFoundFault {
    }


    export interface SubscriptionEventIdNotFoundFault {
    }


    export interface SubscriptionNotFoundFault {
    }


    export interface SubscriptionSeverityNotFoundFault {
    }


    export type TStamp = number;

    export interface Tag {
      Key?: String;
      Value?: String;
    }


    export type TagKeyList = Array<String>;

    export interface TagLimitExceededFault {
    }


    export type TagList = Array<Tag>;

    export type TagValueList = Array<String>;

    export interface TaggedResource {
      Tag?: Tag;
      ResourceName?: String;
      ResourceType?: String;
    }


    export type TaggedResourceList = Array<TaggedResource>;

    export interface TaggedResourceListMessage {
      TaggedResources?: TaggedResourceList;
      Marker?: String;
    }


    export interface UnauthorizedOperation {
    }


    export interface UnknownSnapshotCopyRegionFault {
    }


    export interface UnsupportedOptionFault {
    }


    export type VpcSecurityGroupIdList = Array<String>;

    export interface VpcSecurityGroupMembership {
      VpcSecurityGroupId?: String;
      Status?: String;
    }


    export type VpcSecurityGroupMembershipList = Array<VpcSecurityGroupMembership>;

    export interface AuthorizeClusterSecurityGroupIngressResult {
      ClusterSecurityGroup?: ClusterSecurityGroup;
    }


    export interface AuthorizeSnapshotAccessResult {
      Snapshot?: Snapshot;
    }


    export interface CopyClusterSnapshotResult {
      Snapshot?: Snapshot;
    }


    export interface CreateClusterResult {
      Cluster?: Cluster;
    }


    export interface CreateClusterParameterGroupResult {
      ClusterParameterGroup?: ClusterParameterGroup;
    }


    export interface CreateClusterSecurityGroupResult {
      ClusterSecurityGroup?: ClusterSecurityGroup;
    }


    export interface CreateClusterSnapshotResult {
      Snapshot?: Snapshot;
    }


    export interface CreateClusterSubnetGroupResult {
      ClusterSubnetGroup?: ClusterSubnetGroup;
    }


    export interface CreateEventSubscriptionResult {
      EventSubscription?: EventSubscription;
    }


    export interface CreateHsmClientCertificateResult {
      HsmClientCertificate?: HsmClientCertificate;
    }


    export interface CreateHsmConfigurationResult {
      HsmConfiguration?: HsmConfiguration;
    }


    export interface DeleteClusterResult {
      Cluster?: Cluster;
    }


    export interface DeleteClusterSnapshotResult {
      Snapshot?: Snapshot;
    }


    export interface DescribeDefaultClusterParametersResult {
      DefaultClusterParameters?: DefaultClusterParameters;
    }


    export interface DisableSnapshotCopyResult {
      Cluster?: Cluster;
    }


    export interface EnableSnapshotCopyResult {
      Cluster?: Cluster;
    }


    export interface ModifyClusterResult {
      Cluster?: Cluster;
    }


    export interface ModifyClusterSubnetGroupResult {
      ClusterSubnetGroup?: ClusterSubnetGroup;
    }


    export interface ModifyEventSubscriptionResult {
      EventSubscription?: EventSubscription;
    }


    export interface ModifySnapshotCopyRetentionPeriodResult {
      Cluster?: Cluster;
    }


    export interface PurchaseReservedNodeOfferingResult {
      ReservedNode?: ReservedNode;
    }


    export interface RebootClusterResult {
      Cluster?: Cluster;
    }


    export interface RestoreFromClusterSnapshotResult {
      Cluster?: Cluster;
    }


    export interface RevokeClusterSecurityGroupIngressResult {
      ClusterSecurityGroup?: ClusterSecurityGroup;
    }


    export interface RevokeSnapshotAccessResult {
      Snapshot?: Snapshot;
    }


    export interface RotateEncryptionKeyResult {
      Cluster?: Cluster;
    }


}
