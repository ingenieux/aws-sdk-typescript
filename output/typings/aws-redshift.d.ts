// Type definitions for aws-sdk - Amazon Redshift
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2012-12-01
     * endpointPrefix: redshift
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: query
     */
    export class Redshift extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      authorizeClusterSecurityGroupIngress(params: Redshift.AuthorizeClusterSecurityGroupIngressMessage, callback?: (err: Redshift.ClusterSecurityGroupNotFoundFault|Redshift.InvalidClusterSecurityGroupStateFault|Redshift.AuthorizationAlreadyExistsFault|Redshift.AuthorizationQuotaExceededFault|any, data: Redshift.AuthorizeClusterSecurityGroupIngressResult|any) => void): Request;
      authorizeSnapshotAccess(params: Redshift.AuthorizeSnapshotAccessMessage, callback?: (err: Redshift.ClusterSnapshotNotFoundFault|Redshift.AuthorizationAlreadyExistsFault|Redshift.AuthorizationQuotaExceededFault|any, data: Redshift.AuthorizeSnapshotAccessResult|any) => void): Request;
      copyClusterSnapshot(params: Redshift.CopyClusterSnapshotMessage, callback?: (err: Redshift.ClusterSnapshotAlreadyExistsFault|Redshift.ClusterSnapshotNotFoundFault|Redshift.InvalidClusterSnapshotStateFault|Redshift.ClusterSnapshotQuotaExceededFault|any, data: Redshift.CopyClusterSnapshotResult|any) => void): Request;
      createCluster(params: Redshift.CreateClusterMessage, callback?: (err: Redshift.ClusterAlreadyExistsFault|Redshift.InsufficientClusterCapacityFault|Redshift.ClusterParameterGroupNotFoundFault|Redshift.ClusterSecurityGroupNotFoundFault|Redshift.ClusterQuotaExceededFault|Redshift.NumberOfNodesQuotaExceededFault|Redshift.NumberOfNodesPerClusterLimitExceededFault|Redshift.ClusterSubnetGroupNotFoundFault|Redshift.InvalidVPCNetworkStateFault|Redshift.InvalidClusterSubnetGroupStateFault|Redshift.InvalidSubnet|Redshift.UnauthorizedOperation|Redshift.HsmClientCertificateNotFoundFault|Redshift.HsmConfigurationNotFoundFault|Redshift.InvalidElasticIpFault|Redshift.TagLimitExceededFault|Redshift.InvalidTagFault|Redshift.LimitExceededFault|any, data: Redshift.CreateClusterResult|any) => void): Request;
      createClusterParameterGroup(params: Redshift.CreateClusterParameterGroupMessage, callback?: (err: Redshift.ClusterParameterGroupQuotaExceededFault|Redshift.ClusterParameterGroupAlreadyExistsFault|Redshift.TagLimitExceededFault|Redshift.InvalidTagFault|any, data: Redshift.CreateClusterParameterGroupResult|any) => void): Request;
      createClusterSecurityGroup(params: Redshift.CreateClusterSecurityGroupMessage, callback?: (err: Redshift.ClusterSecurityGroupAlreadyExistsFault|Redshift.ClusterSecurityGroupQuotaExceededFault|Redshift.TagLimitExceededFault|Redshift.InvalidTagFault|any, data: Redshift.CreateClusterSecurityGroupResult|any) => void): Request;
      createClusterSnapshot(params: Redshift.CreateClusterSnapshotMessage, callback?: (err: Redshift.ClusterSnapshotAlreadyExistsFault|Redshift.InvalidClusterStateFault|Redshift.ClusterNotFoundFault|Redshift.ClusterSnapshotQuotaExceededFault|Redshift.TagLimitExceededFault|Redshift.InvalidTagFault|any, data: Redshift.CreateClusterSnapshotResult|any) => void): Request;
      createClusterSubnetGroup(params: Redshift.CreateClusterSubnetGroupMessage, callback?: (err: Redshift.ClusterSubnetGroupAlreadyExistsFault|Redshift.ClusterSubnetGroupQuotaExceededFault|Redshift.ClusterSubnetQuotaExceededFault|Redshift.InvalidSubnet|Redshift.UnauthorizedOperation|Redshift.TagLimitExceededFault|Redshift.InvalidTagFault|any, data: Redshift.CreateClusterSubnetGroupResult|any) => void): Request;
      createEventSubscription(params: Redshift.CreateEventSubscriptionMessage, callback?: (err: Redshift.EventSubscriptionQuotaExceededFault|Redshift.SubscriptionAlreadyExistFault|Redshift.SNSInvalidTopicFault|Redshift.SNSNoAuthorizationFault|Redshift.SNSTopicArnNotFoundFault|Redshift.SubscriptionEventIdNotFoundFault|Redshift.SubscriptionCategoryNotFoundFault|Redshift.SubscriptionSeverityNotFoundFault|Redshift.SourceNotFoundFault|Redshift.TagLimitExceededFault|Redshift.InvalidTagFault|any, data: Redshift.CreateEventSubscriptionResult|any) => void): Request;
      createHsmClientCertificate(params: Redshift.CreateHsmClientCertificateMessage, callback?: (err: Redshift.HsmClientCertificateAlreadyExistsFault|Redshift.HsmClientCertificateQuotaExceededFault|Redshift.TagLimitExceededFault|Redshift.InvalidTagFault|any, data: Redshift.CreateHsmClientCertificateResult|any) => void): Request;
      createHsmConfiguration(params: Redshift.CreateHsmConfigurationMessage, callback?: (err: Redshift.HsmConfigurationAlreadyExistsFault|Redshift.HsmConfigurationQuotaExceededFault|Redshift.TagLimitExceededFault|Redshift.InvalidTagFault|any, data: Redshift.CreateHsmConfigurationResult|any) => void): Request;
      createSnapshotCopyGrant(params: Redshift.CreateSnapshotCopyGrantMessage, callback?: (err: Redshift.SnapshotCopyGrantAlreadyExistsFault|Redshift.SnapshotCopyGrantQuotaExceededFault|Redshift.LimitExceededFault|Redshift.TagLimitExceededFault|Redshift.InvalidTagFault|any, data: Redshift.CreateSnapshotCopyGrantResult|any) => void): Request;
      createTags(params: Redshift.CreateTagsMessage, callback?: (err: Redshift.TagLimitExceededFault|Redshift.ResourceNotFoundFault|Redshift.InvalidTagFault|any, data: any) => void): Request;
      deleteCluster(params: Redshift.DeleteClusterMessage, callback?: (err: Redshift.ClusterNotFoundFault|Redshift.InvalidClusterStateFault|Redshift.ClusterSnapshotAlreadyExistsFault|Redshift.ClusterSnapshotQuotaExceededFault|any, data: Redshift.DeleteClusterResult|any) => void): Request;
      deleteClusterParameterGroup(params: Redshift.DeleteClusterParameterGroupMessage, callback?: (err: Redshift.InvalidClusterParameterGroupStateFault|Redshift.ClusterParameterGroupNotFoundFault|any, data: any) => void): Request;
      deleteClusterSecurityGroup(params: Redshift.DeleteClusterSecurityGroupMessage, callback?: (err: Redshift.InvalidClusterSecurityGroupStateFault|Redshift.ClusterSecurityGroupNotFoundFault|any, data: any) => void): Request;
      deleteClusterSnapshot(params: Redshift.DeleteClusterSnapshotMessage, callback?: (err: Redshift.InvalidClusterSnapshotStateFault|Redshift.ClusterSnapshotNotFoundFault|any, data: Redshift.DeleteClusterSnapshotResult|any) => void): Request;
      deleteClusterSubnetGroup(params: Redshift.DeleteClusterSubnetGroupMessage, callback?: (err: Redshift.InvalidClusterSubnetGroupStateFault|Redshift.InvalidClusterSubnetStateFault|Redshift.ClusterSubnetGroupNotFoundFault|any, data: any) => void): Request;
      deleteEventSubscription(params: Redshift.DeleteEventSubscriptionMessage, callback?: (err: Redshift.SubscriptionNotFoundFault|Redshift.InvalidSubscriptionStateFault|any, data: any) => void): Request;
      deleteHsmClientCertificate(params: Redshift.DeleteHsmClientCertificateMessage, callback?: (err: Redshift.InvalidHsmClientCertificateStateFault|Redshift.HsmClientCertificateNotFoundFault|any, data: any) => void): Request;
      deleteHsmConfiguration(params: Redshift.DeleteHsmConfigurationMessage, callback?: (err: Redshift.InvalidHsmConfigurationStateFault|Redshift.HsmConfigurationNotFoundFault|any, data: any) => void): Request;
      deleteSnapshotCopyGrant(params: Redshift.DeleteSnapshotCopyGrantMessage, callback?: (err: Redshift.InvalidSnapshotCopyGrantStateFault|Redshift.SnapshotCopyGrantNotFoundFault|any, data: any) => void): Request;
      deleteTags(params: Redshift.DeleteTagsMessage, callback?: (err: Redshift.ResourceNotFoundFault|Redshift.InvalidTagFault|any, data: any) => void): Request;
      describeClusterParameterGroups(params: Redshift.DescribeClusterParameterGroupsMessage, callback?: (err: Redshift.ClusterParameterGroupNotFoundFault|Redshift.InvalidTagFault|any, data: Redshift.ClusterParameterGroupsMessage|any) => void): Request;
      describeClusterParameters(params: Redshift.DescribeClusterParametersMessage, callback?: (err: Redshift.ClusterParameterGroupNotFoundFault|any, data: Redshift.ClusterParameterGroupDetails|any) => void): Request;
      describeClusterSecurityGroups(params: Redshift.DescribeClusterSecurityGroupsMessage, callback?: (err: Redshift.ClusterSecurityGroupNotFoundFault|Redshift.InvalidTagFault|any, data: Redshift.ClusterSecurityGroupMessage|any) => void): Request;
      describeClusterSnapshots(params: Redshift.DescribeClusterSnapshotsMessage, callback?: (err: Redshift.ClusterSnapshotNotFoundFault|Redshift.InvalidTagFault|any, data: Redshift.SnapshotMessage|any) => void): Request;
      describeClusterSubnetGroups(params: Redshift.DescribeClusterSubnetGroupsMessage, callback?: (err: Redshift.ClusterSubnetGroupNotFoundFault|Redshift.InvalidTagFault|any, data: Redshift.ClusterSubnetGroupMessage|any) => void): Request;
      describeClusterVersions(params: Redshift.DescribeClusterVersionsMessage, callback?: (err: any, data: Redshift.ClusterVersionsMessage|any) => void): Request;
      describeClusters(params: Redshift.DescribeClustersMessage, callback?: (err: Redshift.ClusterNotFoundFault|Redshift.InvalidTagFault|any, data: Redshift.ClustersMessage|any) => void): Request;
      describeDefaultClusterParameters(params: Redshift.DescribeDefaultClusterParametersMessage, callback?: (err: any, data: Redshift.DescribeDefaultClusterParametersResult|any) => void): Request;
      describeEventCategories(params: Redshift.DescribeEventCategoriesMessage, callback?: (err: any, data: Redshift.EventCategoriesMessage|any) => void): Request;
      describeEventSubscriptions(params: Redshift.DescribeEventSubscriptionsMessage, callback?: (err: Redshift.SubscriptionNotFoundFault|any, data: Redshift.EventSubscriptionsMessage|any) => void): Request;
      describeEvents(params: Redshift.DescribeEventsMessage, callback?: (err: any, data: Redshift.EventsMessage|any) => void): Request;
      describeHsmClientCertificates(params: Redshift.DescribeHsmClientCertificatesMessage, callback?: (err: Redshift.HsmClientCertificateNotFoundFault|Redshift.InvalidTagFault|any, data: Redshift.HsmClientCertificateMessage|any) => void): Request;
      describeHsmConfigurations(params: Redshift.DescribeHsmConfigurationsMessage, callback?: (err: Redshift.HsmConfigurationNotFoundFault|Redshift.InvalidTagFault|any, data: Redshift.HsmConfigurationMessage|any) => void): Request;
      describeLoggingStatus(params: Redshift.DescribeLoggingStatusMessage, callback?: (err: Redshift.ClusterNotFoundFault|any, data: Redshift.LoggingStatus|any) => void): Request;
      describeOrderableClusterOptions(params: Redshift.DescribeOrderableClusterOptionsMessage, callback?: (err: any, data: Redshift.OrderableClusterOptionsMessage|any) => void): Request;
      describeReservedNodeOfferings(params: Redshift.DescribeReservedNodeOfferingsMessage, callback?: (err: Redshift.ReservedNodeOfferingNotFoundFault|Redshift.UnsupportedOperationFault|any, data: Redshift.ReservedNodeOfferingsMessage|any) => void): Request;
      describeReservedNodes(params: Redshift.DescribeReservedNodesMessage, callback?: (err: Redshift.ReservedNodeNotFoundFault|any, data: Redshift.ReservedNodesMessage|any) => void): Request;
      describeResize(params: Redshift.DescribeResizeMessage, callback?: (err: Redshift.ClusterNotFoundFault|Redshift.ResizeNotFoundFault|any, data: Redshift.ResizeProgressMessage|any) => void): Request;
      describeSnapshotCopyGrants(params: Redshift.DescribeSnapshotCopyGrantsMessage, callback?: (err: Redshift.SnapshotCopyGrantNotFoundFault|Redshift.InvalidTagFault|any, data: Redshift.SnapshotCopyGrantMessage|any) => void): Request;
      describeTags(params: Redshift.DescribeTagsMessage, callback?: (err: Redshift.ResourceNotFoundFault|Redshift.InvalidTagFault|any, data: Redshift.TaggedResourceListMessage|any) => void): Request;
      disableLogging(params: Redshift.DisableLoggingMessage, callback?: (err: Redshift.ClusterNotFoundFault|any, data: Redshift.LoggingStatus|any) => void): Request;
      disableSnapshotCopy(params: Redshift.DisableSnapshotCopyMessage, callback?: (err: Redshift.ClusterNotFoundFault|Redshift.SnapshotCopyAlreadyDisabledFault|Redshift.InvalidClusterStateFault|Redshift.UnauthorizedOperation|any, data: Redshift.DisableSnapshotCopyResult|any) => void): Request;
      enableLogging(params: Redshift.EnableLoggingMessage, callback?: (err: Redshift.ClusterNotFoundFault|Redshift.BucketNotFoundFault|Redshift.InsufficientS3BucketPolicyFault|Redshift.InvalidS3KeyPrefixFault|Redshift.InvalidS3BucketNameFault|any, data: Redshift.LoggingStatus|any) => void): Request;
      enableSnapshotCopy(params: Redshift.EnableSnapshotCopyMessage, callback?: (err: Redshift.IncompatibleOrderableOptions|Redshift.InvalidClusterStateFault|Redshift.ClusterNotFoundFault|Redshift.CopyToRegionDisabledFault|Redshift.SnapshotCopyAlreadyEnabledFault|Redshift.UnknownSnapshotCopyRegionFault|Redshift.UnauthorizedOperation|Redshift.SnapshotCopyGrantNotFoundFault|Redshift.LimitExceededFault|any, data: Redshift.EnableSnapshotCopyResult|any) => void): Request;
      modifyCluster(params: Redshift.ModifyClusterMessage, callback?: (err: Redshift.InvalidClusterStateFault|Redshift.InvalidClusterSecurityGroupStateFault|Redshift.ClusterNotFoundFault|Redshift.NumberOfNodesQuotaExceededFault|Redshift.ClusterSecurityGroupNotFoundFault|Redshift.ClusterParameterGroupNotFoundFault|Redshift.InsufficientClusterCapacityFault|Redshift.UnsupportedOptionFault|Redshift.UnauthorizedOperation|Redshift.HsmClientCertificateNotFoundFault|Redshift.HsmConfigurationNotFoundFault|Redshift.ClusterAlreadyExistsFault|Redshift.LimitExceededFault|any, data: Redshift.ModifyClusterResult|any) => void): Request;
      modifyClusterParameterGroup(params: Redshift.ModifyClusterParameterGroupMessage, callback?: (err: Redshift.ClusterParameterGroupNotFoundFault|Redshift.InvalidClusterParameterGroupStateFault|any, data: Redshift.ClusterParameterGroupNameMessage|any) => void): Request;
      modifyClusterSubnetGroup(params: Redshift.ModifyClusterSubnetGroupMessage, callback?: (err: Redshift.ClusterSubnetGroupNotFoundFault|Redshift.ClusterSubnetQuotaExceededFault|Redshift.SubnetAlreadyInUse|Redshift.InvalidSubnet|Redshift.UnauthorizedOperation|any, data: Redshift.ModifyClusterSubnetGroupResult|any) => void): Request;
      modifyEventSubscription(params: Redshift.ModifyEventSubscriptionMessage, callback?: (err: Redshift.SubscriptionNotFoundFault|Redshift.SNSInvalidTopicFault|Redshift.SNSNoAuthorizationFault|Redshift.SNSTopicArnNotFoundFault|Redshift.SubscriptionEventIdNotFoundFault|Redshift.SubscriptionCategoryNotFoundFault|Redshift.SubscriptionSeverityNotFoundFault|Redshift.SourceNotFoundFault|Redshift.InvalidSubscriptionStateFault|any, data: Redshift.ModifyEventSubscriptionResult|any) => void): Request;
      modifySnapshotCopyRetentionPeriod(params: Redshift.ModifySnapshotCopyRetentionPeriodMessage, callback?: (err: Redshift.ClusterNotFoundFault|Redshift.SnapshotCopyDisabledFault|Redshift.UnauthorizedOperation|Redshift.InvalidClusterStateFault|any, data: Redshift.ModifySnapshotCopyRetentionPeriodResult|any) => void): Request;
      purchaseReservedNodeOffering(params: Redshift.PurchaseReservedNodeOfferingMessage, callback?: (err: Redshift.ReservedNodeOfferingNotFoundFault|Redshift.ReservedNodeAlreadyExistsFault|Redshift.ReservedNodeQuotaExceededFault|Redshift.UnsupportedOperationFault|any, data: Redshift.PurchaseReservedNodeOfferingResult|any) => void): Request;
      rebootCluster(params: Redshift.RebootClusterMessage, callback?: (err: Redshift.InvalidClusterStateFault|Redshift.ClusterNotFoundFault|any, data: Redshift.RebootClusterResult|any) => void): Request;
      resetClusterParameterGroup(params: Redshift.ResetClusterParameterGroupMessage, callback?: (err: Redshift.InvalidClusterParameterGroupStateFault|Redshift.ClusterParameterGroupNotFoundFault|any, data: Redshift.ClusterParameterGroupNameMessage|any) => void): Request;
      restoreFromClusterSnapshot(params: Redshift.RestoreFromClusterSnapshotMessage, callback?: (err: Redshift.AccessToSnapshotDeniedFault|Redshift.ClusterAlreadyExistsFault|Redshift.ClusterSnapshotNotFoundFault|Redshift.ClusterQuotaExceededFault|Redshift.InsufficientClusterCapacityFault|Redshift.InvalidClusterSnapshotStateFault|Redshift.InvalidRestoreFault|Redshift.NumberOfNodesQuotaExceededFault|Redshift.NumberOfNodesPerClusterLimitExceededFault|Redshift.InvalidVPCNetworkStateFault|Redshift.InvalidClusterSubnetGroupStateFault|Redshift.InvalidSubnet|Redshift.ClusterSubnetGroupNotFoundFault|Redshift.UnauthorizedOperation|Redshift.HsmClientCertificateNotFoundFault|Redshift.HsmConfigurationNotFoundFault|Redshift.InvalidElasticIpFault|Redshift.ClusterParameterGroupNotFoundFault|Redshift.ClusterSecurityGroupNotFoundFault|Redshift.LimitExceededFault|any, data: Redshift.RestoreFromClusterSnapshotResult|any) => void): Request;
      revokeClusterSecurityGroupIngress(params: Redshift.RevokeClusterSecurityGroupIngressMessage, callback?: (err: Redshift.ClusterSecurityGroupNotFoundFault|Redshift.AuthorizationNotFoundFault|Redshift.InvalidClusterSecurityGroupStateFault|any, data: Redshift.RevokeClusterSecurityGroupIngressResult|any) => void): Request;
      revokeSnapshotAccess(params: Redshift.RevokeSnapshotAccessMessage, callback?: (err: Redshift.AccessToSnapshotDeniedFault|Redshift.AuthorizationNotFoundFault|Redshift.ClusterSnapshotNotFoundFault|any, data: Redshift.RevokeSnapshotAccessResult|any) => void): Request;
      rotateEncryptionKey(params: Redshift.RotateEncryptionKeyMessage, callback?: (err: Redshift.ClusterNotFoundFault|Redshift.InvalidClusterStateFault|any, data: Redshift.RotateEncryptionKeyResult|any) => void): Request;

    }

    export module Redshift {
        export type AccountsWithRestoreAccessList = AccountWithRestoreAccess[];
        export type AvailabilityZoneList = AvailabilityZone[];
        export type Boolean = boolean;
        export type BooleanOptional = boolean;
        export type ClusterList = Cluster[];
        export type ClusterNodesList = ClusterNode[];
        export type ClusterParameterGroupStatusList = ClusterParameterGroupStatus[];
        export type ClusterParameterStatusList = ClusterParameterStatus[];
        export type ClusterSecurityGroupMembershipList = ClusterSecurityGroupMembership[];
        export type ClusterSecurityGroupNameList = String[];
        export type ClusterSecurityGroups = ClusterSecurityGroup[];
        export type ClusterSubnetGroups = ClusterSubnetGroup[];
        export type ClusterVersionList = ClusterVersion[];
        export type Double = number;
        export type DoubleOptional = number;
        export type EC2SecurityGroupList = EC2SecurityGroup[];
        export type EventCategoriesList = String[];
        export type EventCategoriesMapList = EventCategoriesMap[];
        export type EventInfoMapList = EventInfoMap[];
        export type EventList = Event[];
        export type EventSubscriptionsList = EventSubscription[];
        export type HsmClientCertificateList = HsmClientCertificate[];
        export type HsmConfigurationList = HsmConfiguration[];
        export type IPRangeList = IPRange[];
        export type ImportTablesCompleted = String[];
        export type ImportTablesInProgress = String[];
        export type ImportTablesNotStarted = String[];
        export type Integer = number;
        export type IntegerOptional = number;
        export type Long = number;
        export type LongOptional = number;
        export type OrderableClusterOptionsList = OrderableClusterOption[];
        export type ParameterApplyType = string;
        export type ParameterGroupList = ClusterParameterGroup[];
        export type ParametersList = Parameter[];
        export type RecurringChargeList = RecurringCharge[];
        export type ReservedNodeList = ReservedNode[];
        export type ReservedNodeOfferingList = ReservedNodeOffering[];
        export type RestorableNodeTypeList = String[];
        export type SnapshotCopyGrantList = SnapshotCopyGrant[];
        export type SnapshotList = Snapshot[];
        export type SourceIdsList = String[];
        export type SourceType = string;
        export type String = string;
        export type SubnetIdentifierList = String[];
        export type SubnetList = Subnet[];
        export type TStamp = number;
        export type TagKeyList = String[];
        export type TagList = Tag[];
        export type TagValueList = String[];
        export type TaggedResourceList = TaggedResource[];
        export type VpcSecurityGroupIdList = String[];
        export type VpcSecurityGroupMembershipList = VpcSecurityGroupMembership[];

        export interface AccessToSnapshotDeniedFault {
        }
        export interface AccountWithRestoreAccess {
            AccountId?: String;
        }
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
        export interface ClusterNode {
            NodeRole?: String;
            PrivateIPAddress?: String;
            PublicIPAddress?: String;
        }
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
            ClusterParameterStatusList?: ClusterParameterStatusList;
        }
        export interface ClusterParameterGroupsMessage {
            Marker?: String;
            ParameterGroups?: ParameterGroupList;
        }
        export interface ClusterParameterStatus {
            ParameterName?: String;
            ParameterApplyStatus?: String;
            ParameterApplyErrorDescription?: String;
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
        export interface ClusterSecurityGroupMessage {
            Marker?: String;
            ClusterSecurityGroups?: ClusterSecurityGroups;
        }
        export interface ClusterSecurityGroupNotFoundFault {
        }
        export interface ClusterSecurityGroupQuotaExceededFault {
        }
        export interface ClusterSnapshotAlreadyExistsFault {
        }
        export interface ClusterSnapshotCopyStatus {
            DestinationRegion?: String;
            RetentionPeriod?: Long;
            SnapshotCopyGrantName?: String;
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
        export interface ClusterSubnetQuotaExceededFault {
        }
        export interface ClusterVersion {
            ClusterVersion?: String;
            ClusterParameterGroupFamily?: String;
            Description?: String;
        }
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
        export interface CreateSnapshotCopyGrantMessage {
            SnapshotCopyGrantName: String;
            KmsKeyId?: String;
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
        export interface DeleteSnapshotCopyGrantMessage {
            SnapshotCopyGrantName: String;
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
        export interface DescribeSnapshotCopyGrantsMessage {
            SnapshotCopyGrantName?: String;
            MaxRecords?: IntegerOptional;
            Marker?: String;
            TagKeys?: TagKeyList;
            TagValues?: TagValueList;
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
        export interface EC2SecurityGroup {
            Status?: String;
            EC2SecurityGroupName?: String;
            EC2SecurityGroupOwnerId?: String;
            Tags?: TagList;
        }
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
            SnapshotCopyGrantName?: String;
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
        export interface EventCategoriesMap {
            SourceType?: String;
            Events?: EventInfoMapList;
        }
        export interface EventCategoriesMessage {
            EventCategoriesMapList?: EventCategoriesMapList;
        }
        export interface EventInfoMap {
            EventId?: String;
            EventCategories?: EventCategoriesList;
            EventDescription?: String;
            Severity?: String;
        }
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
        export interface IncompatibleOrderableOptions {
        }
        export interface InsufficientClusterCapacityFault {
        }
        export interface InsufficientS3BucketPolicyFault {
        }
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
        export interface InvalidSnapshotCopyGrantStateFault {
        }
        export interface InvalidSubnet {
        }
        export interface InvalidSubscriptionStateFault {
        }
        export interface InvalidTagFault {
        }
        export interface InvalidVPCNetworkStateFault {
        }
        export interface LimitExceededFault {
        }
        export interface LoggingStatus {
            LoggingEnabled?: Boolean;
            BucketName?: String;
            S3KeyPrefix?: String;
            LastSuccessfulDeliveryTime?: TStamp;
            LastFailureTime?: TStamp;
            LastFailureMessage?: String;
        }
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
            ApplyType?: ParameterApplyType;
            IsModifiable?: Boolean;
            MinimumEngineVersion?: String;
        }
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
            NodeType?: String;
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
            RestorableNodeTypes?: RestorableNodeTypeList;
        }
        export interface SnapshotCopyAlreadyDisabledFault {
        }
        export interface SnapshotCopyAlreadyEnabledFault {
        }
        export interface SnapshotCopyDisabledFault {
        }
        export interface SnapshotCopyGrant {
            SnapshotCopyGrantName?: String;
            KmsKeyId?: String;
            Tags?: TagList;
        }
        export interface SnapshotCopyGrantAlreadyExistsFault {
        }
        export interface SnapshotCopyGrantMessage {
            Marker?: String;
            SnapshotCopyGrants?: SnapshotCopyGrantList;
        }
        export interface SnapshotCopyGrantNotFoundFault {
        }
        export interface SnapshotCopyGrantQuotaExceededFault {
        }
        export interface SnapshotMessage {
            Marker?: String;
            Snapshots?: SnapshotList;
        }
        export interface SourceNotFoundFault {
        }
        export interface Subnet {
            SubnetIdentifier?: String;
            SubnetAvailabilityZone?: AvailabilityZone;
            SubnetStatus?: String;
        }
        export interface SubnetAlreadyInUse {
        }
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
        export interface Tag {
            Key?: String;
            Value?: String;
        }
        export interface TagLimitExceededFault {
        }
        export interface TaggedResource {
            Tag?: Tag;
            ResourceName?: String;
            ResourceType?: String;
        }
        export interface TaggedResourceListMessage {
            TaggedResources?: TaggedResourceList;
            Marker?: String;
        }
        export interface UnauthorizedOperation {
        }
        export interface UnknownSnapshotCopyRegionFault {
        }
        export interface UnsupportedOperationFault {
        }
        export interface UnsupportedOptionFault {
        }
        export interface VpcSecurityGroupMembership {
            VpcSecurityGroupId?: String;
            Status?: String;
        }
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
        export interface CreateSnapshotCopyGrantResult {
            SnapshotCopyGrant?: SnapshotCopyGrant;
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
}
