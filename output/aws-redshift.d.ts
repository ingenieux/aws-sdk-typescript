// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class Redshift {
      constructor(options?: any);
      authorizeClusterSecurityGroupIngress(params: RedshiftAuthorizeClusterSecurityGroupIngressMessage, callback: (err: RedshiftClusterSecurityGroupNotFoundFault|RedshiftInvalidClusterSecurityGroupStateFault|RedshiftAuthorizationAlreadyExistsFault|RedshiftAuthorizationQuotaExceededFault|any, data: RedshiftAuthorizeClusterSecurityGroupIngressResult|any) => void): void;
      authorizeSnapshotAccess(params: RedshiftAuthorizeSnapshotAccessMessage, callback: (err: RedshiftClusterSnapshotNotFoundFault|RedshiftAuthorizationAlreadyExistsFault|RedshiftAuthorizationQuotaExceededFault|any, data: RedshiftAuthorizeSnapshotAccessResult|any) => void): void;
      copyClusterSnapshot(params: RedshiftCopyClusterSnapshotMessage, callback: (err: RedshiftClusterSnapshotAlreadyExistsFault|RedshiftClusterSnapshotNotFoundFault|RedshiftInvalidClusterSnapshotStateFault|RedshiftClusterSnapshotQuotaExceededFault|any, data: RedshiftCopyClusterSnapshotResult|any) => void): void;
      createCluster(params: RedshiftCreateClusterMessage, callback: (err: RedshiftClusterAlreadyExistsFault|RedshiftInsufficientClusterCapacityFault|RedshiftClusterParameterGroupNotFoundFault|RedshiftClusterSecurityGroupNotFoundFault|RedshiftClusterQuotaExceededFault|RedshiftNumberOfNodesQuotaExceededFault|RedshiftNumberOfNodesPerClusterLimitExceededFault|RedshiftClusterSubnetGroupNotFoundFault|RedshiftInvalidVPCNetworkStateFault|RedshiftInvalidClusterSubnetGroupStateFault|RedshiftInvalidSubnet|RedshiftUnauthorizedOperation|RedshiftHsmClientCertificateNotFoundFault|RedshiftHsmConfigurationNotFoundFault|RedshiftInvalidElasticIpFault|RedshiftTagLimitExceededFault|RedshiftInvalidTagFault|any, data: RedshiftCreateClusterResult|any) => void): void;
      createClusterParameterGroup(params: RedshiftCreateClusterParameterGroupMessage, callback: (err: RedshiftClusterParameterGroupQuotaExceededFault|RedshiftClusterParameterGroupAlreadyExistsFault|RedshiftTagLimitExceededFault|RedshiftInvalidTagFault|any, data: RedshiftCreateClusterParameterGroupResult|any) => void): void;
      createClusterSecurityGroup(params: RedshiftCreateClusterSecurityGroupMessage, callback: (err: RedshiftClusterSecurityGroupAlreadyExistsFault|RedshiftClusterSecurityGroupQuotaExceededFault|RedshiftTagLimitExceededFault|RedshiftInvalidTagFault|any, data: RedshiftCreateClusterSecurityGroupResult|any) => void): void;
      createClusterSnapshot(params: RedshiftCreateClusterSnapshotMessage, callback: (err: RedshiftClusterSnapshotAlreadyExistsFault|RedshiftInvalidClusterStateFault|RedshiftClusterNotFoundFault|RedshiftClusterSnapshotQuotaExceededFault|RedshiftTagLimitExceededFault|RedshiftInvalidTagFault|any, data: RedshiftCreateClusterSnapshotResult|any) => void): void;
      createClusterSubnetGroup(params: RedshiftCreateClusterSubnetGroupMessage, callback: (err: RedshiftClusterSubnetGroupAlreadyExistsFault|RedshiftClusterSubnetGroupQuotaExceededFault|RedshiftClusterSubnetQuotaExceededFault|RedshiftInvalidSubnet|RedshiftUnauthorizedOperation|RedshiftTagLimitExceededFault|RedshiftInvalidTagFault|any, data: RedshiftCreateClusterSubnetGroupResult|any) => void): void;
      createEventSubscription(params: RedshiftCreateEventSubscriptionMessage, callback: (err: RedshiftEventSubscriptionQuotaExceededFault|RedshiftSubscriptionAlreadyExistFault|RedshiftSNSInvalidTopicFault|RedshiftSNSNoAuthorizationFault|RedshiftSNSTopicArnNotFoundFault|RedshiftSubscriptionEventIdNotFoundFault|RedshiftSubscriptionCategoryNotFoundFault|RedshiftSubscriptionSeverityNotFoundFault|RedshiftSourceNotFoundFault|RedshiftTagLimitExceededFault|RedshiftInvalidTagFault|any, data: RedshiftCreateEventSubscriptionResult|any) => void): void;
      createHsmClientCertificate(params: RedshiftCreateHsmClientCertificateMessage, callback: (err: RedshiftHsmClientCertificateAlreadyExistsFault|RedshiftHsmClientCertificateQuotaExceededFault|RedshiftTagLimitExceededFault|RedshiftInvalidTagFault|any, data: RedshiftCreateHsmClientCertificateResult|any) => void): void;
      createHsmConfiguration(params: RedshiftCreateHsmConfigurationMessage, callback: (err: RedshiftHsmConfigurationAlreadyExistsFault|RedshiftHsmConfigurationQuotaExceededFault|RedshiftTagLimitExceededFault|RedshiftInvalidTagFault|any, data: RedshiftCreateHsmConfigurationResult|any) => void): void;
      createTags(params: RedshiftCreateTagsMessage, callback: (err: RedshiftTagLimitExceededFault|RedshiftResourceNotFoundFault|RedshiftInvalidTagFault|any, data: any) => void): void;
      deleteCluster(params: RedshiftDeleteClusterMessage, callback: (err: RedshiftClusterNotFoundFault|RedshiftInvalidClusterStateFault|RedshiftClusterSnapshotAlreadyExistsFault|RedshiftClusterSnapshotQuotaExceededFault|any, data: RedshiftDeleteClusterResult|any) => void): void;
      deleteClusterParameterGroup(params: RedshiftDeleteClusterParameterGroupMessage, callback: (err: RedshiftInvalidClusterParameterGroupStateFault|RedshiftClusterParameterGroupNotFoundFault|any, data: any) => void): void;
      deleteClusterSecurityGroup(params: RedshiftDeleteClusterSecurityGroupMessage, callback: (err: RedshiftInvalidClusterSecurityGroupStateFault|RedshiftClusterSecurityGroupNotFoundFault|any, data: any) => void): void;
      deleteClusterSnapshot(params: RedshiftDeleteClusterSnapshotMessage, callback: (err: RedshiftInvalidClusterSnapshotStateFault|RedshiftClusterSnapshotNotFoundFault|any, data: RedshiftDeleteClusterSnapshotResult|any) => void): void;
      deleteClusterSubnetGroup(params: RedshiftDeleteClusterSubnetGroupMessage, callback: (err: RedshiftInvalidClusterSubnetGroupStateFault|RedshiftInvalidClusterSubnetStateFault|RedshiftClusterSubnetGroupNotFoundFault|any, data: any) => void): void;
      deleteEventSubscription(params: RedshiftDeleteEventSubscriptionMessage, callback: (err: RedshiftSubscriptionNotFoundFault|RedshiftInvalidSubscriptionStateFault|any, data: any) => void): void;
      deleteHsmClientCertificate(params: RedshiftDeleteHsmClientCertificateMessage, callback: (err: RedshiftInvalidHsmClientCertificateStateFault|RedshiftHsmClientCertificateNotFoundFault|any, data: any) => void): void;
      deleteHsmConfiguration(params: RedshiftDeleteHsmConfigurationMessage, callback: (err: RedshiftInvalidHsmConfigurationStateFault|RedshiftHsmConfigurationNotFoundFault|any, data: any) => void): void;
      deleteTags(params: RedshiftDeleteTagsMessage, callback: (err: RedshiftResourceNotFoundFault|any, data: any) => void): void;
      describeClusterParameterGroups(params: RedshiftDescribeClusterParameterGroupsMessage, callback: (err: RedshiftClusterParameterGroupNotFoundFault|any, data: RedshiftClusterParameterGroupsMessage|any) => void): void;
      describeClusterParameters(params: RedshiftDescribeClusterParametersMessage, callback: (err: RedshiftClusterParameterGroupNotFoundFault|any, data: RedshiftClusterParameterGroupDetails|any) => void): void;
      describeClusterSecurityGroups(params: RedshiftDescribeClusterSecurityGroupsMessage, callback: (err: RedshiftClusterSecurityGroupNotFoundFault|any, data: RedshiftClusterSecurityGroupMessage|any) => void): void;
      describeClusterSnapshots(params: RedshiftDescribeClusterSnapshotsMessage, callback: (err: RedshiftClusterSnapshotNotFoundFault|any, data: RedshiftSnapshotMessage|any) => void): void;
      describeClusterSubnetGroups(params: RedshiftDescribeClusterSubnetGroupsMessage, callback: (err: RedshiftClusterSubnetGroupNotFoundFault|any, data: RedshiftClusterSubnetGroupMessage|any) => void): void;
      describeClusterVersions(params: RedshiftDescribeClusterVersionsMessage, callback: (err: any, data: RedshiftClusterVersionsMessage|any) => void): void;
      describeClusters(params: RedshiftDescribeClustersMessage, callback: (err: RedshiftClusterNotFoundFault|any, data: RedshiftClustersMessage|any) => void): void;
      describeDefaultClusterParameters(params: RedshiftDescribeDefaultClusterParametersMessage, callback: (err: any, data: RedshiftDescribeDefaultClusterParametersResult|any) => void): void;
      describeEventCategories(params: RedshiftDescribeEventCategoriesMessage, callback: (err: any, data: RedshiftEventCategoriesMessage|any) => void): void;
      describeEventSubscriptions(params: RedshiftDescribeEventSubscriptionsMessage, callback: (err: RedshiftSubscriptionNotFoundFault|any, data: RedshiftEventSubscriptionsMessage|any) => void): void;
      describeEvents(params: RedshiftDescribeEventsMessage, callback: (err: any, data: RedshiftEventsMessage|any) => void): void;
      describeHsmClientCertificates(params: RedshiftDescribeHsmClientCertificatesMessage, callback: (err: RedshiftHsmClientCertificateNotFoundFault|any, data: RedshiftHsmClientCertificateMessage|any) => void): void;
      describeHsmConfigurations(params: RedshiftDescribeHsmConfigurationsMessage, callback: (err: RedshiftHsmConfigurationNotFoundFault|any, data: RedshiftHsmConfigurationMessage|any) => void): void;
      describeLoggingStatus(params: RedshiftDescribeLoggingStatusMessage, callback: (err: RedshiftClusterNotFoundFault|any, data: RedshiftLoggingStatus|any) => void): void;
      describeOrderableClusterOptions(params: RedshiftDescribeOrderableClusterOptionsMessage, callback: (err: any, data: RedshiftOrderableClusterOptionsMessage|any) => void): void;
      describeReservedNodeOfferings(params: RedshiftDescribeReservedNodeOfferingsMessage, callback: (err: RedshiftReservedNodeOfferingNotFoundFault|any, data: RedshiftReservedNodeOfferingsMessage|any) => void): void;
      describeReservedNodes(params: RedshiftDescribeReservedNodesMessage, callback: (err: RedshiftReservedNodeNotFoundFault|any, data: RedshiftReservedNodesMessage|any) => void): void;
      describeResize(params: RedshiftDescribeResizeMessage, callback: (err: RedshiftClusterNotFoundFault|RedshiftResizeNotFoundFault|any, data: RedshiftResizeProgressMessage|any) => void): void;
      describeTags(params: RedshiftDescribeTagsMessage, callback: (err: RedshiftResourceNotFoundFault|any, data: RedshiftTaggedResourceListMessage|any) => void): void;
      disableLogging(params: RedshiftDisableLoggingMessage, callback: (err: RedshiftClusterNotFoundFault|any, data: RedshiftLoggingStatus|any) => void): void;
      disableSnapshotCopy(params: RedshiftDisableSnapshotCopyMessage, callback: (err: RedshiftClusterNotFoundFault|RedshiftSnapshotCopyAlreadyDisabledFault|RedshiftInvalidClusterStateFault|RedshiftUnauthorizedOperation|any, data: RedshiftDisableSnapshotCopyResult|any) => void): void;
      enableLogging(params: RedshiftEnableLoggingMessage, callback: (err: RedshiftClusterNotFoundFault|RedshiftBucketNotFoundFault|RedshiftInsufficientS3BucketPolicyFault|RedshiftInvalidS3KeyPrefixFault|RedshiftInvalidS3BucketNameFault|any, data: RedshiftLoggingStatus|any) => void): void;
      enableSnapshotCopy(params: RedshiftEnableSnapshotCopyMessage, callback: (err: RedshiftIncompatibleOrderableOptions|RedshiftInvalidClusterStateFault|RedshiftClusterNotFoundFault|RedshiftCopyToRegionDisabledFault|RedshiftSnapshotCopyAlreadyEnabledFault|RedshiftUnknownSnapshotCopyRegionFault|RedshiftUnauthorizedOperation|any, data: RedshiftEnableSnapshotCopyResult|any) => void): void;
      modifyCluster(params: RedshiftModifyClusterMessage, callback: (err: RedshiftInvalidClusterStateFault|RedshiftInvalidClusterSecurityGroupStateFault|RedshiftClusterNotFoundFault|RedshiftNumberOfNodesQuotaExceededFault|RedshiftClusterSecurityGroupNotFoundFault|RedshiftClusterParameterGroupNotFoundFault|RedshiftInsufficientClusterCapacityFault|RedshiftUnsupportedOptionFault|RedshiftUnauthorizedOperation|RedshiftHsmClientCertificateNotFoundFault|RedshiftHsmConfigurationNotFoundFault|RedshiftClusterAlreadyExistsFault|any, data: RedshiftModifyClusterResult|any) => void): void;
      modifyClusterParameterGroup(params: RedshiftModifyClusterParameterGroupMessage, callback: (err: RedshiftClusterParameterGroupNotFoundFault|RedshiftInvalidClusterParameterGroupStateFault|any, data: RedshiftClusterParameterGroupNameMessage|any) => void): void;
      modifyClusterSubnetGroup(params: RedshiftModifyClusterSubnetGroupMessage, callback: (err: RedshiftClusterSubnetGroupNotFoundFault|RedshiftClusterSubnetQuotaExceededFault|RedshiftSubnetAlreadyInUse|RedshiftInvalidSubnet|RedshiftUnauthorizedOperation|any, data: RedshiftModifyClusterSubnetGroupResult|any) => void): void;
      modifyEventSubscription(params: RedshiftModifyEventSubscriptionMessage, callback: (err: RedshiftSubscriptionNotFoundFault|RedshiftSNSInvalidTopicFault|RedshiftSNSNoAuthorizationFault|RedshiftSNSTopicArnNotFoundFault|RedshiftSubscriptionEventIdNotFoundFault|RedshiftSubscriptionCategoryNotFoundFault|RedshiftSubscriptionSeverityNotFoundFault|RedshiftSourceNotFoundFault|RedshiftInvalidSubscriptionStateFault|any, data: RedshiftModifyEventSubscriptionResult|any) => void): void;
      modifySnapshotCopyRetentionPeriod(params: RedshiftModifySnapshotCopyRetentionPeriodMessage, callback: (err: RedshiftClusterNotFoundFault|RedshiftSnapshotCopyDisabledFault|RedshiftUnauthorizedOperation|RedshiftInvalidClusterStateFault|any, data: RedshiftModifySnapshotCopyRetentionPeriodResult|any) => void): void;
      purchaseReservedNodeOffering(params: RedshiftPurchaseReservedNodeOfferingMessage, callback: (err: RedshiftReservedNodeOfferingNotFoundFault|RedshiftReservedNodeAlreadyExistsFault|RedshiftReservedNodeQuotaExceededFault|any, data: RedshiftPurchaseReservedNodeOfferingResult|any) => void): void;
      rebootCluster(params: RedshiftRebootClusterMessage, callback: (err: RedshiftInvalidClusterStateFault|RedshiftClusterNotFoundFault|any, data: RedshiftRebootClusterResult|any) => void): void;
      resetClusterParameterGroup(params: RedshiftResetClusterParameterGroupMessage, callback: (err: RedshiftInvalidClusterParameterGroupStateFault|RedshiftClusterParameterGroupNotFoundFault|any, data: RedshiftClusterParameterGroupNameMessage|any) => void): void;
      restoreFromClusterSnapshot(params: RedshiftRestoreFromClusterSnapshotMessage, callback: (err: RedshiftAccessToSnapshotDeniedFault|RedshiftClusterAlreadyExistsFault|RedshiftClusterSnapshotNotFoundFault|RedshiftClusterQuotaExceededFault|RedshiftInsufficientClusterCapacityFault|RedshiftInvalidClusterSnapshotStateFault|RedshiftInvalidRestoreFault|RedshiftNumberOfNodesQuotaExceededFault|RedshiftNumberOfNodesPerClusterLimitExceededFault|RedshiftInvalidVPCNetworkStateFault|RedshiftInvalidClusterSubnetGroupStateFault|RedshiftInvalidSubnet|RedshiftClusterSubnetGroupNotFoundFault|RedshiftUnauthorizedOperation|RedshiftHsmClientCertificateNotFoundFault|RedshiftHsmConfigurationNotFoundFault|RedshiftInvalidElasticIpFault|RedshiftClusterParameterGroupNotFoundFault|RedshiftClusterSecurityGroupNotFoundFault|any, data: RedshiftRestoreFromClusterSnapshotResult|any) => void): void;
      revokeClusterSecurityGroupIngress(params: RedshiftRevokeClusterSecurityGroupIngressMessage, callback: (err: RedshiftClusterSecurityGroupNotFoundFault|RedshiftAuthorizationNotFoundFault|RedshiftInvalidClusterSecurityGroupStateFault|any, data: RedshiftRevokeClusterSecurityGroupIngressResult|any) => void): void;
      revokeSnapshotAccess(params: RedshiftRevokeSnapshotAccessMessage, callback: (err: RedshiftAccessToSnapshotDeniedFault|RedshiftAuthorizationNotFoundFault|RedshiftClusterSnapshotNotFoundFault|any, data: RedshiftRevokeSnapshotAccessResult|any) => void): void;
      rotateEncryptionKey(params: RedshiftRotateEncryptionKeyMessage, callback: (err: RedshiftClusterNotFoundFault|RedshiftInvalidClusterStateFault|any, data: RedshiftRotateEncryptionKeyResult|any) => void): void;
    }

    export interface RedshiftAccessToSnapshotDeniedFault {
    }

    export interface RedshiftAccountWithRestoreAccess {
        AccountId?: RedshiftString;
    }

    export type RedshiftAccountsWithRestoreAccessList = Array<RedshiftAccountWithRestoreAccess>;
    export interface RedshiftAuthorizationAlreadyExistsFault {
    }

    export interface RedshiftAuthorizationNotFoundFault {
    }

    export interface RedshiftAuthorizationQuotaExceededFault {
    }

    export interface RedshiftAuthorizeClusterSecurityGroupIngressMessage {
        ClusterSecurityGroupName: RedshiftString;
        CIDRIP?: RedshiftString;
        EC2SecurityGroupName?: RedshiftString;
        EC2SecurityGroupOwnerId?: RedshiftString;
    }

    export interface RedshiftAuthorizeSnapshotAccessMessage {
        SnapshotIdentifier: RedshiftString;
        SnapshotClusterIdentifier?: RedshiftString;
        AccountWithRestoreAccess: RedshiftString;
    }

    export interface RedshiftAvailabilityZone {
        Name?: RedshiftString;
    }

    export type RedshiftAvailabilityZoneList = Array<RedshiftAvailabilityZone>;
    export type RedshiftBoolean = boolean;
    export type RedshiftBooleanOptional = boolean;
    export interface RedshiftBucketNotFoundFault {
    }

    export interface RedshiftCluster {
        ClusterIdentifier?: RedshiftString;
        NodeType?: RedshiftString;
        ClusterStatus?: RedshiftString;
        ModifyStatus?: RedshiftString;
        MasterUsername?: RedshiftString;
        DBName?: RedshiftString;
        Endpoint?: RedshiftEndpoint;
        ClusterCreateTime?: RedshiftTStamp;
        AutomatedSnapshotRetentionPeriod?: RedshiftInteger;
        ClusterSecurityGroups?: RedshiftClusterSecurityGroupMembershipList;
        VpcSecurityGroups?: RedshiftVpcSecurityGroupMembershipList;
        ClusterParameterGroups?: RedshiftClusterParameterGroupStatusList;
        ClusterSubnetGroupName?: RedshiftString;
        VpcId?: RedshiftString;
        AvailabilityZone?: RedshiftString;
        PreferredMaintenanceWindow?: RedshiftString;
        PendingModifiedValues?: RedshiftPendingModifiedValues;
        ClusterVersion?: RedshiftString;
        AllowVersionUpgrade?: RedshiftBoolean;
        NumberOfNodes?: RedshiftInteger;
        PubliclyAccessible?: RedshiftBoolean;
        Encrypted?: RedshiftBoolean;
        RestoreStatus?: RedshiftRestoreStatus;
        HsmStatus?: RedshiftHsmStatus;
        ClusterSnapshotCopyStatus?: RedshiftClusterSnapshotCopyStatus;
        ClusterPublicKey?: RedshiftString;
        ClusterNodes?: RedshiftClusterNodesList;
        ElasticIpStatus?: RedshiftElasticIpStatus;
        ClusterRevisionNumber?: RedshiftString;
        Tags?: RedshiftTagList;
        KmsKeyId?: RedshiftString;
    }

    export interface RedshiftClusterAlreadyExistsFault {
    }

    export type RedshiftClusterList = Array<RedshiftCluster>;
    export interface RedshiftClusterNode {
        NodeRole?: RedshiftString;
        PrivateIPAddress?: RedshiftString;
        PublicIPAddress?: RedshiftString;
    }

    export type RedshiftClusterNodesList = Array<RedshiftClusterNode>;
    export interface RedshiftClusterNotFoundFault {
    }

    export interface RedshiftClusterParameterGroup {
        ParameterGroupName?: RedshiftString;
        ParameterGroupFamily?: RedshiftString;
        Description?: RedshiftString;
        Tags?: RedshiftTagList;
    }

    export interface RedshiftClusterParameterGroupAlreadyExistsFault {
    }

    export interface RedshiftClusterParameterGroupDetails {
        Parameters?: RedshiftParametersList;
        Marker?: RedshiftString;
    }

    export interface RedshiftClusterParameterGroupNameMessage {
        ParameterGroupName?: RedshiftString;
        ParameterGroupStatus?: RedshiftString;
    }

    export interface RedshiftClusterParameterGroupNotFoundFault {
    }

    export interface RedshiftClusterParameterGroupQuotaExceededFault {
    }

    export interface RedshiftClusterParameterGroupStatus {
        ParameterGroupName?: RedshiftString;
        ParameterApplyStatus?: RedshiftString;
    }

    export type RedshiftClusterParameterGroupStatusList = Array<RedshiftClusterParameterGroupStatus>;
    export interface RedshiftClusterParameterGroupsMessage {
        Marker?: RedshiftString;
        ParameterGroups?: RedshiftParameterGroupList;
    }

    export interface RedshiftClusterQuotaExceededFault {
    }

    export interface RedshiftClusterSecurityGroup {
        ClusterSecurityGroupName?: RedshiftString;
        Description?: RedshiftString;
        EC2SecurityGroups?: RedshiftEC2SecurityGroupList;
        IPRanges?: RedshiftIPRangeList;
        Tags?: RedshiftTagList;
    }

    export interface RedshiftClusterSecurityGroupAlreadyExistsFault {
    }

    export interface RedshiftClusterSecurityGroupMembership {
        ClusterSecurityGroupName?: RedshiftString;
        Status?: RedshiftString;
    }

    export type RedshiftClusterSecurityGroupMembershipList = Array<RedshiftClusterSecurityGroupMembership>;
    export interface RedshiftClusterSecurityGroupMessage {
        Marker?: RedshiftString;
        ClusterSecurityGroups?: RedshiftClusterSecurityGroups;
    }

    export type RedshiftClusterSecurityGroupNameList = Array<RedshiftString>;
    export interface RedshiftClusterSecurityGroupNotFoundFault {
    }

    export interface RedshiftClusterSecurityGroupQuotaExceededFault {
    }

    export type RedshiftClusterSecurityGroups = Array<RedshiftClusterSecurityGroup>;
    export interface RedshiftClusterSnapshotAlreadyExistsFault {
    }

    export interface RedshiftClusterSnapshotCopyStatus {
        DestinationRegion?: RedshiftString;
        RetentionPeriod?: RedshiftLong;
    }

    export interface RedshiftClusterSnapshotNotFoundFault {
    }

    export interface RedshiftClusterSnapshotQuotaExceededFault {
    }

    export interface RedshiftClusterSubnetGroup {
        ClusterSubnetGroupName?: RedshiftString;
        Description?: RedshiftString;
        VpcId?: RedshiftString;
        SubnetGroupStatus?: RedshiftString;
        Subnets?: RedshiftSubnetList;
        Tags?: RedshiftTagList;
    }

    export interface RedshiftClusterSubnetGroupAlreadyExistsFault {
    }

    export interface RedshiftClusterSubnetGroupMessage {
        Marker?: RedshiftString;
        ClusterSubnetGroups?: RedshiftClusterSubnetGroups;
    }

    export interface RedshiftClusterSubnetGroupNotFoundFault {
    }

    export interface RedshiftClusterSubnetGroupQuotaExceededFault {
    }

    export type RedshiftClusterSubnetGroups = Array<RedshiftClusterSubnetGroup>;
    export interface RedshiftClusterSubnetQuotaExceededFault {
    }

    export interface RedshiftClusterVersion {
        ClusterVersion?: RedshiftString;
        ClusterParameterGroupFamily?: RedshiftString;
        Description?: RedshiftString;
    }

    export type RedshiftClusterVersionList = Array<RedshiftClusterVersion>;
    export interface RedshiftClusterVersionsMessage {
        Marker?: RedshiftString;
        ClusterVersions?: RedshiftClusterVersionList;
    }

    export interface RedshiftClustersMessage {
        Marker?: RedshiftString;
        Clusters?: RedshiftClusterList;
    }

    export interface RedshiftCopyClusterSnapshotMessage {
        SourceSnapshotIdentifier: RedshiftString;
        SourceSnapshotClusterIdentifier?: RedshiftString;
        TargetSnapshotIdentifier: RedshiftString;
    }

    export interface RedshiftCopyToRegionDisabledFault {
    }

    export interface RedshiftCreateClusterMessage {
        DBName?: RedshiftString;
        ClusterIdentifier: RedshiftString;
        ClusterType?: RedshiftString;
        NodeType: RedshiftString;
        MasterUsername: RedshiftString;
        MasterUserPassword: RedshiftString;
        ClusterSecurityGroups?: RedshiftClusterSecurityGroupNameList;
        VpcSecurityGroupIds?: RedshiftVpcSecurityGroupIdList;
        ClusterSubnetGroupName?: RedshiftString;
        AvailabilityZone?: RedshiftString;
        PreferredMaintenanceWindow?: RedshiftString;
        ClusterParameterGroupName?: RedshiftString;
        AutomatedSnapshotRetentionPeriod?: RedshiftIntegerOptional;
        Port?: RedshiftIntegerOptional;
        ClusterVersion?: RedshiftString;
        AllowVersionUpgrade?: RedshiftBooleanOptional;
        NumberOfNodes?: RedshiftIntegerOptional;
        PubliclyAccessible?: RedshiftBooleanOptional;
        Encrypted?: RedshiftBooleanOptional;
        HsmClientCertificateIdentifier?: RedshiftString;
        HsmConfigurationIdentifier?: RedshiftString;
        ElasticIp?: RedshiftString;
        Tags?: RedshiftTagList;
        KmsKeyId?: RedshiftString;
    }

    export interface RedshiftCreateClusterParameterGroupMessage {
        ParameterGroupName: RedshiftString;
        ParameterGroupFamily: RedshiftString;
        Description: RedshiftString;
        Tags?: RedshiftTagList;
    }

    export interface RedshiftCreateClusterSecurityGroupMessage {
        ClusterSecurityGroupName: RedshiftString;
        Description: RedshiftString;
        Tags?: RedshiftTagList;
    }

    export interface RedshiftCreateClusterSnapshotMessage {
        SnapshotIdentifier: RedshiftString;
        ClusterIdentifier: RedshiftString;
        Tags?: RedshiftTagList;
    }

    export interface RedshiftCreateClusterSubnetGroupMessage {
        ClusterSubnetGroupName: RedshiftString;
        Description: RedshiftString;
        SubnetIds: RedshiftSubnetIdentifierList;
        Tags?: RedshiftTagList;
    }

    export interface RedshiftCreateEventSubscriptionMessage {
        SubscriptionName: RedshiftString;
        SnsTopicArn: RedshiftString;
        SourceType?: RedshiftString;
        SourceIds?: RedshiftSourceIdsList;
        EventCategories?: RedshiftEventCategoriesList;
        Severity?: RedshiftString;
        Enabled?: RedshiftBooleanOptional;
        Tags?: RedshiftTagList;
    }

    export interface RedshiftCreateHsmClientCertificateMessage {
        HsmClientCertificateIdentifier: RedshiftString;
        Tags?: RedshiftTagList;
    }

    export interface RedshiftCreateHsmConfigurationMessage {
        HsmConfigurationIdentifier: RedshiftString;
        Description: RedshiftString;
        HsmIpAddress: RedshiftString;
        HsmPartitionName: RedshiftString;
        HsmPartitionPassword: RedshiftString;
        HsmServerPublicCertificate: RedshiftString;
        Tags?: RedshiftTagList;
    }

    export interface RedshiftCreateTagsMessage {
        ResourceName: RedshiftString;
        Tags: RedshiftTagList;
    }

    export interface RedshiftDefaultClusterParameters {
        ParameterGroupFamily?: RedshiftString;
        Marker?: RedshiftString;
        Parameters?: RedshiftParametersList;
    }

    export interface RedshiftDeleteClusterMessage {
        ClusterIdentifier: RedshiftString;
        SkipFinalClusterSnapshot?: RedshiftBoolean;
        FinalClusterSnapshotIdentifier?: RedshiftString;
    }

    export interface RedshiftDeleteClusterParameterGroupMessage {
        ParameterGroupName: RedshiftString;
    }

    export interface RedshiftDeleteClusterSecurityGroupMessage {
        ClusterSecurityGroupName: RedshiftString;
    }

    export interface RedshiftDeleteClusterSnapshotMessage {
        SnapshotIdentifier: RedshiftString;
        SnapshotClusterIdentifier?: RedshiftString;
    }

    export interface RedshiftDeleteClusterSubnetGroupMessage {
        ClusterSubnetGroupName: RedshiftString;
    }

    export interface RedshiftDeleteEventSubscriptionMessage {
        SubscriptionName: RedshiftString;
    }

    export interface RedshiftDeleteHsmClientCertificateMessage {
        HsmClientCertificateIdentifier: RedshiftString;
    }

    export interface RedshiftDeleteHsmConfigurationMessage {
        HsmConfigurationIdentifier: RedshiftString;
    }

    export interface RedshiftDeleteTagsMessage {
        ResourceName: RedshiftString;
        TagKeys: RedshiftTagKeyList;
    }

    export interface RedshiftDescribeClusterParameterGroupsMessage {
        ParameterGroupName?: RedshiftString;
        MaxRecords?: RedshiftIntegerOptional;
        Marker?: RedshiftString;
        TagKeys?: RedshiftTagKeyList;
        TagValues?: RedshiftTagValueList;
    }

    export interface RedshiftDescribeClusterParametersMessage {
        ParameterGroupName: RedshiftString;
        Source?: RedshiftString;
        MaxRecords?: RedshiftIntegerOptional;
        Marker?: RedshiftString;
    }

    export interface RedshiftDescribeClusterSecurityGroupsMessage {
        ClusterSecurityGroupName?: RedshiftString;
        MaxRecords?: RedshiftIntegerOptional;
        Marker?: RedshiftString;
        TagKeys?: RedshiftTagKeyList;
        TagValues?: RedshiftTagValueList;
    }

    export interface RedshiftDescribeClusterSnapshotsMessage {
        ClusterIdentifier?: RedshiftString;
        SnapshotIdentifier?: RedshiftString;
        SnapshotType?: RedshiftString;
        StartTime?: RedshiftTStamp;
        EndTime?: RedshiftTStamp;
        MaxRecords?: RedshiftIntegerOptional;
        Marker?: RedshiftString;
        OwnerAccount?: RedshiftString;
        TagKeys?: RedshiftTagKeyList;
        TagValues?: RedshiftTagValueList;
    }

    export interface RedshiftDescribeClusterSubnetGroupsMessage {
        ClusterSubnetGroupName?: RedshiftString;
        MaxRecords?: RedshiftIntegerOptional;
        Marker?: RedshiftString;
        TagKeys?: RedshiftTagKeyList;
        TagValues?: RedshiftTagValueList;
    }

    export interface RedshiftDescribeClusterVersionsMessage {
        ClusterVersion?: RedshiftString;
        ClusterParameterGroupFamily?: RedshiftString;
        MaxRecords?: RedshiftIntegerOptional;
        Marker?: RedshiftString;
    }

    export interface RedshiftDescribeClustersMessage {
        ClusterIdentifier?: RedshiftString;
        MaxRecords?: RedshiftIntegerOptional;
        Marker?: RedshiftString;
        TagKeys?: RedshiftTagKeyList;
        TagValues?: RedshiftTagValueList;
    }

    export interface RedshiftDescribeDefaultClusterParametersMessage {
        ParameterGroupFamily: RedshiftString;
        MaxRecords?: RedshiftIntegerOptional;
        Marker?: RedshiftString;
    }

    export interface RedshiftDescribeEventCategoriesMessage {
        SourceType?: RedshiftString;
    }

    export interface RedshiftDescribeEventSubscriptionsMessage {
        SubscriptionName?: RedshiftString;
        MaxRecords?: RedshiftIntegerOptional;
        Marker?: RedshiftString;
    }

    export interface RedshiftDescribeEventsMessage {
        SourceIdentifier?: RedshiftString;
        SourceType?: RedshiftSourceType;
        StartTime?: RedshiftTStamp;
        EndTime?: RedshiftTStamp;
        Duration?: RedshiftIntegerOptional;
        MaxRecords?: RedshiftIntegerOptional;
        Marker?: RedshiftString;
    }

    export interface RedshiftDescribeHsmClientCertificatesMessage {
        HsmClientCertificateIdentifier?: RedshiftString;
        MaxRecords?: RedshiftIntegerOptional;
        Marker?: RedshiftString;
        TagKeys?: RedshiftTagKeyList;
        TagValues?: RedshiftTagValueList;
    }

    export interface RedshiftDescribeHsmConfigurationsMessage {
        HsmConfigurationIdentifier?: RedshiftString;
        MaxRecords?: RedshiftIntegerOptional;
        Marker?: RedshiftString;
        TagKeys?: RedshiftTagKeyList;
        TagValues?: RedshiftTagValueList;
    }

    export interface RedshiftDescribeLoggingStatusMessage {
        ClusterIdentifier: RedshiftString;
    }

    export interface RedshiftDescribeOrderableClusterOptionsMessage {
        ClusterVersion?: RedshiftString;
        NodeType?: RedshiftString;
        MaxRecords?: RedshiftIntegerOptional;
        Marker?: RedshiftString;
    }

    export interface RedshiftDescribeReservedNodeOfferingsMessage {
        ReservedNodeOfferingId?: RedshiftString;
        MaxRecords?: RedshiftIntegerOptional;
        Marker?: RedshiftString;
    }

    export interface RedshiftDescribeReservedNodesMessage {
        ReservedNodeId?: RedshiftString;
        MaxRecords?: RedshiftIntegerOptional;
        Marker?: RedshiftString;
    }

    export interface RedshiftDescribeResizeMessage {
        ClusterIdentifier: RedshiftString;
    }

    export interface RedshiftDescribeTagsMessage {
        ResourceName?: RedshiftString;
        ResourceType?: RedshiftString;
        MaxRecords?: RedshiftIntegerOptional;
        Marker?: RedshiftString;
        TagKeys?: RedshiftTagKeyList;
        TagValues?: RedshiftTagValueList;
    }

    export interface RedshiftDisableLoggingMessage {
        ClusterIdentifier: RedshiftString;
    }

    export interface RedshiftDisableSnapshotCopyMessage {
        ClusterIdentifier: RedshiftString;
    }

    export type RedshiftDouble = number;
    export type RedshiftDoubleOptional = number;
    export interface RedshiftEC2SecurityGroup {
        Status?: RedshiftString;
        EC2SecurityGroupName?: RedshiftString;
        EC2SecurityGroupOwnerId?: RedshiftString;
        Tags?: RedshiftTagList;
    }

    export type RedshiftEC2SecurityGroupList = Array<RedshiftEC2SecurityGroup>;
    export interface RedshiftElasticIpStatus {
        ElasticIp?: RedshiftString;
        Status?: RedshiftString;
    }

    export interface RedshiftEnableLoggingMessage {
        ClusterIdentifier: RedshiftString;
        BucketName: RedshiftString;
        S3KeyPrefix?: RedshiftString;
    }

    export interface RedshiftEnableSnapshotCopyMessage {
        ClusterIdentifier: RedshiftString;
        DestinationRegion: RedshiftString;
        RetentionPeriod?: RedshiftIntegerOptional;
    }

    export interface RedshiftEndpoint {
        Address?: RedshiftString;
        Port?: RedshiftInteger;
    }

    export interface RedshiftEvent {
        SourceIdentifier?: RedshiftString;
        SourceType?: RedshiftSourceType;
        Message?: RedshiftString;
        EventCategories?: RedshiftEventCategoriesList;
        Severity?: RedshiftString;
        Date?: RedshiftTStamp;
        EventId?: RedshiftString;
    }

    export type RedshiftEventCategoriesList = Array<RedshiftString>;
    export interface RedshiftEventCategoriesMap {
        SourceType?: RedshiftString;
        Events?: RedshiftEventInfoMapList;
    }

    export type RedshiftEventCategoriesMapList = Array<RedshiftEventCategoriesMap>;
    export interface RedshiftEventCategoriesMessage {
        EventCategoriesMapList?: RedshiftEventCategoriesMapList;
    }

    export interface RedshiftEventInfoMap {
        EventId?: RedshiftString;
        EventCategories?: RedshiftEventCategoriesList;
        EventDescription?: RedshiftString;
        Severity?: RedshiftString;
    }

    export type RedshiftEventInfoMapList = Array<RedshiftEventInfoMap>;
    export type RedshiftEventList = Array<RedshiftEvent>;
    export interface RedshiftEventSubscription {
        CustomerAwsId?: RedshiftString;
        CustSubscriptionId?: RedshiftString;
        SnsTopicArn?: RedshiftString;
        Status?: RedshiftString;
        SubscriptionCreationTime?: RedshiftTStamp;
        SourceType?: RedshiftString;
        SourceIdsList?: RedshiftSourceIdsList;
        EventCategoriesList?: RedshiftEventCategoriesList;
        Severity?: RedshiftString;
        Enabled?: RedshiftBoolean;
        Tags?: RedshiftTagList;
    }

    export interface RedshiftEventSubscriptionQuotaExceededFault {
    }

    export type RedshiftEventSubscriptionsList = Array<RedshiftEventSubscription>;
    export interface RedshiftEventSubscriptionsMessage {
        Marker?: RedshiftString;
        EventSubscriptionsList?: RedshiftEventSubscriptionsList;
    }

    export interface RedshiftEventsMessage {
        Marker?: RedshiftString;
        Events?: RedshiftEventList;
    }

    export interface RedshiftHsmClientCertificate {
        HsmClientCertificateIdentifier?: RedshiftString;
        HsmClientCertificatePublicKey?: RedshiftString;
        Tags?: RedshiftTagList;
    }

    export interface RedshiftHsmClientCertificateAlreadyExistsFault {
    }

    export type RedshiftHsmClientCertificateList = Array<RedshiftHsmClientCertificate>;
    export interface RedshiftHsmClientCertificateMessage {
        Marker?: RedshiftString;
        HsmClientCertificates?: RedshiftHsmClientCertificateList;
    }

    export interface RedshiftHsmClientCertificateNotFoundFault {
    }

    export interface RedshiftHsmClientCertificateQuotaExceededFault {
    }

    export interface RedshiftHsmConfiguration {
        HsmConfigurationIdentifier?: RedshiftString;
        Description?: RedshiftString;
        HsmIpAddress?: RedshiftString;
        HsmPartitionName?: RedshiftString;
        Tags?: RedshiftTagList;
    }

    export interface RedshiftHsmConfigurationAlreadyExistsFault {
    }

    export type RedshiftHsmConfigurationList = Array<RedshiftHsmConfiguration>;
    export interface RedshiftHsmConfigurationMessage {
        Marker?: RedshiftString;
        HsmConfigurations?: RedshiftHsmConfigurationList;
    }

    export interface RedshiftHsmConfigurationNotFoundFault {
    }

    export interface RedshiftHsmConfigurationQuotaExceededFault {
    }

    export interface RedshiftHsmStatus {
        HsmClientCertificateIdentifier?: RedshiftString;
        HsmConfigurationIdentifier?: RedshiftString;
        Status?: RedshiftString;
    }

    export interface RedshiftIPRange {
        Status?: RedshiftString;
        CIDRIP?: RedshiftString;
        Tags?: RedshiftTagList;
    }

    export type RedshiftIPRangeList = Array<RedshiftIPRange>;
    export type RedshiftImportTablesCompleted = Array<RedshiftString>;
    export type RedshiftImportTablesInProgress = Array<RedshiftString>;
    export type RedshiftImportTablesNotStarted = Array<RedshiftString>;
    export interface RedshiftIncompatibleOrderableOptions {
    }

    export interface RedshiftInsufficientClusterCapacityFault {
    }

    export interface RedshiftInsufficientS3BucketPolicyFault {
    }

    export type RedshiftInteger = number;
    export type RedshiftIntegerOptional = number;
    export interface RedshiftInvalidClusterParameterGroupStateFault {
    }

    export interface RedshiftInvalidClusterSecurityGroupStateFault {
    }

    export interface RedshiftInvalidClusterSnapshotStateFault {
    }

    export interface RedshiftInvalidClusterStateFault {
    }

    export interface RedshiftInvalidClusterSubnetGroupStateFault {
    }

    export interface RedshiftInvalidClusterSubnetStateFault {
    }

    export interface RedshiftInvalidElasticIpFault {
    }

    export interface RedshiftInvalidHsmClientCertificateStateFault {
    }

    export interface RedshiftInvalidHsmConfigurationStateFault {
    }

    export interface RedshiftInvalidRestoreFault {
    }

    export interface RedshiftInvalidS3BucketNameFault {
    }

    export interface RedshiftInvalidS3KeyPrefixFault {
    }

    export interface RedshiftInvalidSubnet {
    }

    export interface RedshiftInvalidSubscriptionStateFault {
    }

    export interface RedshiftInvalidTagFault {
    }

    export interface RedshiftInvalidVPCNetworkStateFault {
    }

    export interface RedshiftLoggingStatus {
        LoggingEnabled?: RedshiftBoolean;
        BucketName?: RedshiftString;
        S3KeyPrefix?: RedshiftString;
        LastSuccessfulDeliveryTime?: RedshiftTStamp;
        LastFailureTime?: RedshiftTStamp;
        LastFailureMessage?: RedshiftString;
    }

    export type RedshiftLong = number;
    export type RedshiftLongOptional = number;
    export interface RedshiftModifyClusterMessage {
        ClusterIdentifier: RedshiftString;
        ClusterType?: RedshiftString;
        NodeType?: RedshiftString;
        NumberOfNodes?: RedshiftIntegerOptional;
        ClusterSecurityGroups?: RedshiftClusterSecurityGroupNameList;
        VpcSecurityGroupIds?: RedshiftVpcSecurityGroupIdList;
        MasterUserPassword?: RedshiftString;
        ClusterParameterGroupName?: RedshiftString;
        AutomatedSnapshotRetentionPeriod?: RedshiftIntegerOptional;
        PreferredMaintenanceWindow?: RedshiftString;
        ClusterVersion?: RedshiftString;
        AllowVersionUpgrade?: RedshiftBooleanOptional;
        HsmClientCertificateIdentifier?: RedshiftString;
        HsmConfigurationIdentifier?: RedshiftString;
        NewClusterIdentifier?: RedshiftString;
    }

    export interface RedshiftModifyClusterParameterGroupMessage {
        ParameterGroupName: RedshiftString;
        Parameters: RedshiftParametersList;
    }

    export interface RedshiftModifyClusterSubnetGroupMessage {
        ClusterSubnetGroupName: RedshiftString;
        Description?: RedshiftString;
        SubnetIds: RedshiftSubnetIdentifierList;
    }

    export interface RedshiftModifyEventSubscriptionMessage {
        SubscriptionName: RedshiftString;
        SnsTopicArn?: RedshiftString;
        SourceType?: RedshiftString;
        SourceIds?: RedshiftSourceIdsList;
        EventCategories?: RedshiftEventCategoriesList;
        Severity?: RedshiftString;
        Enabled?: RedshiftBooleanOptional;
    }

    export interface RedshiftModifySnapshotCopyRetentionPeriodMessage {
        ClusterIdentifier: RedshiftString;
        RetentionPeriod: RedshiftInteger;
    }

    export interface RedshiftNumberOfNodesPerClusterLimitExceededFault {
    }

    export interface RedshiftNumberOfNodesQuotaExceededFault {
    }

    export interface RedshiftOrderableClusterOption {
        ClusterVersion?: RedshiftString;
        ClusterType?: RedshiftString;
        NodeType?: RedshiftString;
        AvailabilityZones?: RedshiftAvailabilityZoneList;
    }

    export type RedshiftOrderableClusterOptionsList = Array<RedshiftOrderableClusterOption>;
    export interface RedshiftOrderableClusterOptionsMessage {
        OrderableClusterOptions?: RedshiftOrderableClusterOptionsList;
        Marker?: RedshiftString;
    }

    export interface RedshiftParameter {
        ParameterName?: RedshiftString;
        ParameterValue?: RedshiftString;
        Description?: RedshiftString;
        Source?: RedshiftString;
        DataType?: RedshiftString;
        AllowedValues?: RedshiftString;
        IsModifiable?: RedshiftBoolean;
        MinimumEngineVersion?: RedshiftString;
    }

    export type RedshiftParameterGroupList = Array<RedshiftClusterParameterGroup>;
    export type RedshiftParametersList = Array<RedshiftParameter>;
    export interface RedshiftPendingModifiedValues {
        MasterUserPassword?: RedshiftString;
        NodeType?: RedshiftString;
        NumberOfNodes?: RedshiftIntegerOptional;
        ClusterType?: RedshiftString;
        ClusterVersion?: RedshiftString;
        AutomatedSnapshotRetentionPeriod?: RedshiftIntegerOptional;
        ClusterIdentifier?: RedshiftString;
    }

    export interface RedshiftPurchaseReservedNodeOfferingMessage {
        ReservedNodeOfferingId: RedshiftString;
        NodeCount?: RedshiftIntegerOptional;
    }

    export interface RedshiftRebootClusterMessage {
        ClusterIdentifier: RedshiftString;
    }

    export interface RedshiftRecurringCharge {
        RecurringChargeAmount?: RedshiftDouble;
        RecurringChargeFrequency?: RedshiftString;
    }

    export type RedshiftRecurringChargeList = Array<RedshiftRecurringCharge>;
    export interface RedshiftReservedNode {
        ReservedNodeId?: RedshiftString;
        ReservedNodeOfferingId?: RedshiftString;
        NodeType?: RedshiftString;
        StartTime?: RedshiftTStamp;
        Duration?: RedshiftInteger;
        FixedPrice?: RedshiftDouble;
        UsagePrice?: RedshiftDouble;
        CurrencyCode?: RedshiftString;
        NodeCount?: RedshiftInteger;
        State?: RedshiftString;
        OfferingType?: RedshiftString;
        RecurringCharges?: RedshiftRecurringChargeList;
    }

    export interface RedshiftReservedNodeAlreadyExistsFault {
    }

    export type RedshiftReservedNodeList = Array<RedshiftReservedNode>;
    export interface RedshiftReservedNodeNotFoundFault {
    }

    export interface RedshiftReservedNodeOffering {
        ReservedNodeOfferingId?: RedshiftString;
        NodeType?: RedshiftString;
        Duration?: RedshiftInteger;
        FixedPrice?: RedshiftDouble;
        UsagePrice?: RedshiftDouble;
        CurrencyCode?: RedshiftString;
        OfferingType?: RedshiftString;
        RecurringCharges?: RedshiftRecurringChargeList;
    }

    export type RedshiftReservedNodeOfferingList = Array<RedshiftReservedNodeOffering>;
    export interface RedshiftReservedNodeOfferingNotFoundFault {
    }

    export interface RedshiftReservedNodeOfferingsMessage {
        Marker?: RedshiftString;
        ReservedNodeOfferings?: RedshiftReservedNodeOfferingList;
    }

    export interface RedshiftReservedNodeQuotaExceededFault {
    }

    export interface RedshiftReservedNodesMessage {
        Marker?: RedshiftString;
        ReservedNodes?: RedshiftReservedNodeList;
    }

    export interface RedshiftResetClusterParameterGroupMessage {
        ParameterGroupName: RedshiftString;
        ResetAllParameters?: RedshiftBoolean;
        Parameters?: RedshiftParametersList;
    }

    export interface RedshiftResizeNotFoundFault {
    }

    export interface RedshiftResizeProgressMessage {
        TargetNodeType?: RedshiftString;
        TargetNumberOfNodes?: RedshiftIntegerOptional;
        TargetClusterType?: RedshiftString;
        Status?: RedshiftString;
        ImportTablesCompleted?: RedshiftImportTablesCompleted;
        ImportTablesInProgress?: RedshiftImportTablesInProgress;
        ImportTablesNotStarted?: RedshiftImportTablesNotStarted;
        AvgResizeRateInMegaBytesPerSecond?: RedshiftDoubleOptional;
        TotalResizeDataInMegaBytes?: RedshiftLongOptional;
        ProgressInMegaBytes?: RedshiftLongOptional;
        ElapsedTimeInSeconds?: RedshiftLongOptional;
        EstimatedTimeToCompletionInSeconds?: RedshiftLongOptional;
    }

    export interface RedshiftResourceNotFoundFault {
    }

    export interface RedshiftRestoreFromClusterSnapshotMessage {
        ClusterIdentifier: RedshiftString;
        SnapshotIdentifier: RedshiftString;
        SnapshotClusterIdentifier?: RedshiftString;
        Port?: RedshiftIntegerOptional;
        AvailabilityZone?: RedshiftString;
        AllowVersionUpgrade?: RedshiftBooleanOptional;
        ClusterSubnetGroupName?: RedshiftString;
        PubliclyAccessible?: RedshiftBooleanOptional;
        OwnerAccount?: RedshiftString;
        HsmClientCertificateIdentifier?: RedshiftString;
        HsmConfigurationIdentifier?: RedshiftString;
        ElasticIp?: RedshiftString;
        ClusterParameterGroupName?: RedshiftString;
        ClusterSecurityGroups?: RedshiftClusterSecurityGroupNameList;
        VpcSecurityGroupIds?: RedshiftVpcSecurityGroupIdList;
        PreferredMaintenanceWindow?: RedshiftString;
        AutomatedSnapshotRetentionPeriod?: RedshiftIntegerOptional;
        KmsKeyId?: RedshiftString;
    }

    export interface RedshiftRestoreStatus {
        Status?: RedshiftString;
        CurrentRestoreRateInMegaBytesPerSecond?: RedshiftDouble;
        SnapshotSizeInMegaBytes?: RedshiftLong;
        ProgressInMegaBytes?: RedshiftLong;
        ElapsedTimeInSeconds?: RedshiftLong;
        EstimatedTimeToCompletionInSeconds?: RedshiftLong;
    }

    export interface RedshiftRevokeClusterSecurityGroupIngressMessage {
        ClusterSecurityGroupName: RedshiftString;
        CIDRIP?: RedshiftString;
        EC2SecurityGroupName?: RedshiftString;
        EC2SecurityGroupOwnerId?: RedshiftString;
    }

    export interface RedshiftRevokeSnapshotAccessMessage {
        SnapshotIdentifier: RedshiftString;
        SnapshotClusterIdentifier?: RedshiftString;
        AccountWithRestoreAccess: RedshiftString;
    }

    export interface RedshiftRotateEncryptionKeyMessage {
        ClusterIdentifier: RedshiftString;
    }

    export interface RedshiftSNSInvalidTopicFault {
    }

    export interface RedshiftSNSNoAuthorizationFault {
    }

    export interface RedshiftSNSTopicArnNotFoundFault {
    }

    export interface RedshiftSnapshot {
        SnapshotIdentifier?: RedshiftString;
        ClusterIdentifier?: RedshiftString;
        SnapshotCreateTime?: RedshiftTStamp;
        Status?: RedshiftString;
        Port?: RedshiftInteger;
        AvailabilityZone?: RedshiftString;
        ClusterCreateTime?: RedshiftTStamp;
        MasterUsername?: RedshiftString;
        ClusterVersion?: RedshiftString;
        SnapshotType?: RedshiftString;
        NodeType?: RedshiftString;
        NumberOfNodes?: RedshiftInteger;
        DBName?: RedshiftString;
        VpcId?: RedshiftString;
        Encrypted?: RedshiftBoolean;
        KmsKeyId?: RedshiftString;
        EncryptedWithHSM?: RedshiftBoolean;
        AccountsWithRestoreAccess?: RedshiftAccountsWithRestoreAccessList;
        OwnerAccount?: RedshiftString;
        TotalBackupSizeInMegaBytes?: RedshiftDouble;
        ActualIncrementalBackupSizeInMegaBytes?: RedshiftDouble;
        BackupProgressInMegaBytes?: RedshiftDouble;
        CurrentBackupRateInMegaBytesPerSecond?: RedshiftDouble;
        EstimatedSecondsToCompletion?: RedshiftLong;
        ElapsedTimeInSeconds?: RedshiftLong;
        SourceRegion?: RedshiftString;
        Tags?: RedshiftTagList;
    }

    export interface RedshiftSnapshotCopyAlreadyDisabledFault {
    }

    export interface RedshiftSnapshotCopyAlreadyEnabledFault {
    }

    export interface RedshiftSnapshotCopyDisabledFault {
    }

    export type RedshiftSnapshotList = Array<RedshiftSnapshot>;
    export interface RedshiftSnapshotMessage {
        Marker?: RedshiftString;
        Snapshots?: RedshiftSnapshotList;
    }

    export type RedshiftSourceIdsList = Array<RedshiftString>;
    export interface RedshiftSourceNotFoundFault {
    }

    export type RedshiftSourceType = string;
    export type RedshiftString = string;
    export interface RedshiftSubnet {
        SubnetIdentifier?: RedshiftString;
        SubnetAvailabilityZone?: RedshiftAvailabilityZone;
        SubnetStatus?: RedshiftString;
    }

    export interface RedshiftSubnetAlreadyInUse {
    }

    export type RedshiftSubnetIdentifierList = Array<RedshiftString>;
    export type RedshiftSubnetList = Array<RedshiftSubnet>;
    export interface RedshiftSubscriptionAlreadyExistFault {
    }

    export interface RedshiftSubscriptionCategoryNotFoundFault {
    }

    export interface RedshiftSubscriptionEventIdNotFoundFault {
    }

    export interface RedshiftSubscriptionNotFoundFault {
    }

    export interface RedshiftSubscriptionSeverityNotFoundFault {
    }

    export type RedshiftTStamp = number;
    export interface RedshiftTag {
        Key?: RedshiftString;
        Value?: RedshiftString;
    }

    export type RedshiftTagKeyList = Array<RedshiftString>;
    export interface RedshiftTagLimitExceededFault {
    }

    export type RedshiftTagList = Array<RedshiftTag>;
    export type RedshiftTagValueList = Array<RedshiftString>;
    export interface RedshiftTaggedResource {
        Tag?: RedshiftTag;
        ResourceName?: RedshiftString;
        ResourceType?: RedshiftString;
    }

    export type RedshiftTaggedResourceList = Array<RedshiftTaggedResource>;
    export interface RedshiftTaggedResourceListMessage {
        TaggedResources?: RedshiftTaggedResourceList;
        Marker?: RedshiftString;
    }

    export interface RedshiftUnauthorizedOperation {
    }

    export interface RedshiftUnknownSnapshotCopyRegionFault {
    }

    export interface RedshiftUnsupportedOptionFault {
    }

    export type RedshiftVpcSecurityGroupIdList = Array<RedshiftString>;
    export interface RedshiftVpcSecurityGroupMembership {
        VpcSecurityGroupId?: RedshiftString;
        Status?: RedshiftString;
    }

    export type RedshiftVpcSecurityGroupMembershipList = Array<RedshiftVpcSecurityGroupMembership>;
    export interface RedshiftAuthorizeClusterSecurityGroupIngressResult {
        ClusterSecurityGroup?: RedshiftClusterSecurityGroup;
    }

    export interface RedshiftAuthorizeSnapshotAccessResult {
        Snapshot?: RedshiftSnapshot;
    }

    export interface RedshiftCopyClusterSnapshotResult {
        Snapshot?: RedshiftSnapshot;
    }

    export interface RedshiftCreateClusterResult {
        Cluster?: RedshiftCluster;
    }

    export interface RedshiftCreateClusterParameterGroupResult {
        ClusterParameterGroup?: RedshiftClusterParameterGroup;
    }

    export interface RedshiftCreateClusterSecurityGroupResult {
        ClusterSecurityGroup?: RedshiftClusterSecurityGroup;
    }

    export interface RedshiftCreateClusterSnapshotResult {
        Snapshot?: RedshiftSnapshot;
    }

    export interface RedshiftCreateClusterSubnetGroupResult {
        ClusterSubnetGroup?: RedshiftClusterSubnetGroup;
    }

    export interface RedshiftCreateEventSubscriptionResult {
        EventSubscription?: RedshiftEventSubscription;
    }

    export interface RedshiftCreateHsmClientCertificateResult {
        HsmClientCertificate?: RedshiftHsmClientCertificate;
    }

    export interface RedshiftCreateHsmConfigurationResult {
        HsmConfiguration?: RedshiftHsmConfiguration;
    }

    export interface RedshiftDeleteClusterResult {
        Cluster?: RedshiftCluster;
    }

    export interface RedshiftDeleteClusterSnapshotResult {
        Snapshot?: RedshiftSnapshot;
    }

    export interface RedshiftDescribeDefaultClusterParametersResult {
        DefaultClusterParameters?: RedshiftDefaultClusterParameters;
    }

    export interface RedshiftDisableSnapshotCopyResult {
        Cluster?: RedshiftCluster;
    }

    export interface RedshiftEnableSnapshotCopyResult {
        Cluster?: RedshiftCluster;
    }

    export interface RedshiftModifyClusterResult {
        Cluster?: RedshiftCluster;
    }

    export interface RedshiftModifyClusterSubnetGroupResult {
        ClusterSubnetGroup?: RedshiftClusterSubnetGroup;
    }

    export interface RedshiftModifyEventSubscriptionResult {
        EventSubscription?: RedshiftEventSubscription;
    }

    export interface RedshiftModifySnapshotCopyRetentionPeriodResult {
        Cluster?: RedshiftCluster;
    }

    export interface RedshiftPurchaseReservedNodeOfferingResult {
        ReservedNode?: RedshiftReservedNode;
    }

    export interface RedshiftRebootClusterResult {
        Cluster?: RedshiftCluster;
    }

    export interface RedshiftRestoreFromClusterSnapshotResult {
        Cluster?: RedshiftCluster;
    }

    export interface RedshiftRevokeClusterSecurityGroupIngressResult {
        ClusterSecurityGroup?: RedshiftClusterSecurityGroup;
    }

    export interface RedshiftRevokeSnapshotAccessResult {
        Snapshot?: RedshiftSnapshot;
    }

    export interface RedshiftRotateEncryptionKeyResult {
        Cluster?: RedshiftCluster;
    }

}
