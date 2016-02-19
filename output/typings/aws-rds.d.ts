// Type definitions for aws-sdk - Amazon Relational Database Service
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2014-10-31
     * endpointPrefix: rds
     * serviceAbbreviation: Amazon RDS
     * signatureVersion: v4
     * protocol: query
     */
    export class RDS extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      addSourceIdentifierToSubscription(params: RDS.AddSourceIdentifierToSubscriptionMessage, callback?: (err: RDS.SubscriptionNotFoundFault|RDS.SourceNotFoundFault|any, data: RDS.AddSourceIdentifierToSubscriptionResult|any) => void): Request;
      addTagsToResource(params: RDS.AddTagsToResourceMessage, callback?: (err: RDS.DBInstanceNotFoundFault|RDS.DBSnapshotNotFoundFault|any, data: any) => void): Request;
      applyPendingMaintenanceAction(params: RDS.ApplyPendingMaintenanceActionMessage, callback?: (err: RDS.ResourceNotFoundFault|any, data: RDS.ApplyPendingMaintenanceActionResult|any) => void): Request;
      authorizeDBSecurityGroupIngress(params: RDS.AuthorizeDBSecurityGroupIngressMessage, callback?: (err: RDS.DBSecurityGroupNotFoundFault|RDS.InvalidDBSecurityGroupStateFault|RDS.AuthorizationAlreadyExistsFault|RDS.AuthorizationQuotaExceededFault|any, data: RDS.AuthorizeDBSecurityGroupIngressResult|any) => void): Request;
      copyDBClusterSnapshot(params: RDS.CopyDBClusterSnapshotMessage, callback?: (err: RDS.DBClusterSnapshotAlreadyExistsFault|RDS.DBClusterSnapshotNotFoundFault|RDS.InvalidDBClusterStateFault|any, data: RDS.CopyDBClusterSnapshotResult|any) => void): Request;
      copyDBParameterGroup(params: RDS.CopyDBParameterGroupMessage, callback?: (err: RDS.DBParameterGroupNotFoundFault|RDS.DBParameterGroupAlreadyExistsFault|RDS.DBParameterGroupQuotaExceededFault|any, data: RDS.CopyDBParameterGroupResult|any) => void): Request;
      copyDBSnapshot(params: RDS.CopyDBSnapshotMessage, callback?: (err: RDS.DBSnapshotAlreadyExistsFault|RDS.DBSnapshotNotFoundFault|RDS.InvalidDBSnapshotStateFault|RDS.SnapshotQuotaExceededFault|any, data: RDS.CopyDBSnapshotResult|any) => void): Request;
      copyOptionGroup(params: RDS.CopyOptionGroupMessage, callback?: (err: RDS.OptionGroupAlreadyExistsFault|RDS.OptionGroupNotFoundFault|RDS.OptionGroupQuotaExceededFault|any, data: RDS.CopyOptionGroupResult|any) => void): Request;
      createDBCluster(params: RDS.CreateDBClusterMessage, callback?: (err: RDS.DBClusterAlreadyExistsFault|RDS.InsufficientStorageClusterCapacityFault|RDS.DBClusterQuotaExceededFault|RDS.StorageQuotaExceededFault|RDS.DBSubnetGroupNotFoundFault|RDS.InvalidVPCNetworkStateFault|RDS.InvalidDBClusterStateFault|RDS.InvalidDBSubnetGroupStateFault|RDS.InvalidSubnet|RDS.DBClusterParameterGroupNotFoundFault|RDS.KMSKeyNotAccessibleFault|any, data: RDS.CreateDBClusterResult|any) => void): Request;
      createDBClusterParameterGroup(params: RDS.CreateDBClusterParameterGroupMessage, callback?: (err: RDS.DBParameterGroupQuotaExceededFault|RDS.DBParameterGroupAlreadyExistsFault|any, data: RDS.CreateDBClusterParameterGroupResult|any) => void): Request;
      createDBClusterSnapshot(params: RDS.CreateDBClusterSnapshotMessage, callback?: (err: RDS.DBClusterSnapshotAlreadyExistsFault|RDS.InvalidDBClusterStateFault|RDS.DBClusterNotFoundFault|RDS.SnapshotQuotaExceededFault|any, data: RDS.CreateDBClusterSnapshotResult|any) => void): Request;
      createDBInstance(params: RDS.CreateDBInstanceMessage, callback?: (err: RDS.DBInstanceAlreadyExistsFault|RDS.InsufficientDBInstanceCapacityFault|RDS.DBParameterGroupNotFoundFault|RDS.DBSecurityGroupNotFoundFault|RDS.InstanceQuotaExceededFault|RDS.StorageQuotaExceededFault|RDS.DBSubnetGroupNotFoundFault|RDS.DBSubnetGroupDoesNotCoverEnoughAZs|RDS.InvalidDBClusterStateFault|RDS.InvalidSubnet|RDS.InvalidVPCNetworkStateFault|RDS.ProvisionedIopsNotAvailableInAZFault|RDS.OptionGroupNotFoundFault|RDS.DBClusterNotFoundFault|RDS.StorageTypeNotSupportedFault|RDS.AuthorizationNotFoundFault|RDS.KMSKeyNotAccessibleFault|any, data: RDS.CreateDBInstanceResult|any) => void): Request;
      createDBInstanceReadReplica(params: RDS.CreateDBInstanceReadReplicaMessage, callback?: (err: RDS.DBInstanceAlreadyExistsFault|RDS.InsufficientDBInstanceCapacityFault|RDS.DBParameterGroupNotFoundFault|RDS.DBSecurityGroupNotFoundFault|RDS.InstanceQuotaExceededFault|RDS.StorageQuotaExceededFault|RDS.DBInstanceNotFoundFault|RDS.InvalidDBInstanceStateFault|RDS.DBSubnetGroupNotFoundFault|RDS.DBSubnetGroupDoesNotCoverEnoughAZs|RDS.InvalidSubnet|RDS.InvalidVPCNetworkStateFault|RDS.ProvisionedIopsNotAvailableInAZFault|RDS.OptionGroupNotFoundFault|RDS.DBSubnetGroupNotAllowedFault|RDS.InvalidDBSubnetGroupFault|RDS.StorageTypeNotSupportedFault|RDS.KMSKeyNotAccessibleFault|any, data: RDS.CreateDBInstanceReadReplicaResult|any) => void): Request;
      createDBParameterGroup(params: RDS.CreateDBParameterGroupMessage, callback?: (err: RDS.DBParameterGroupQuotaExceededFault|RDS.DBParameterGroupAlreadyExistsFault|any, data: RDS.CreateDBParameterGroupResult|any) => void): Request;
      createDBSecurityGroup(params: RDS.CreateDBSecurityGroupMessage, callback?: (err: RDS.DBSecurityGroupAlreadyExistsFault|RDS.DBSecurityGroupQuotaExceededFault|RDS.DBSecurityGroupNotSupportedFault|any, data: RDS.CreateDBSecurityGroupResult|any) => void): Request;
      createDBSnapshot(params: RDS.CreateDBSnapshotMessage, callback?: (err: RDS.DBSnapshotAlreadyExistsFault|RDS.InvalidDBInstanceStateFault|RDS.DBInstanceNotFoundFault|RDS.SnapshotQuotaExceededFault|any, data: RDS.CreateDBSnapshotResult|any) => void): Request;
      createDBSubnetGroup(params: RDS.CreateDBSubnetGroupMessage, callback?: (err: RDS.DBSubnetGroupAlreadyExistsFault|RDS.DBSubnetGroupQuotaExceededFault|RDS.DBSubnetQuotaExceededFault|RDS.DBSubnetGroupDoesNotCoverEnoughAZs|RDS.InvalidSubnet|any, data: RDS.CreateDBSubnetGroupResult|any) => void): Request;
      createEventSubscription(params: RDS.CreateEventSubscriptionMessage, callback?: (err: RDS.EventSubscriptionQuotaExceededFault|RDS.SubscriptionAlreadyExistFault|RDS.SNSInvalidTopicFault|RDS.SNSNoAuthorizationFault|RDS.SNSTopicArnNotFoundFault|RDS.SubscriptionCategoryNotFoundFault|RDS.SourceNotFoundFault|any, data: RDS.CreateEventSubscriptionResult|any) => void): Request;
      createOptionGroup(params: RDS.CreateOptionGroupMessage, callback?: (err: RDS.OptionGroupAlreadyExistsFault|RDS.OptionGroupQuotaExceededFault|any, data: RDS.CreateOptionGroupResult|any) => void): Request;
      deleteDBCluster(params: RDS.DeleteDBClusterMessage, callback?: (err: RDS.DBClusterNotFoundFault|RDS.InvalidDBClusterStateFault|any, data: RDS.DeleteDBClusterResult|any) => void): Request;
      deleteDBClusterParameterGroup(params: RDS.DeleteDBClusterParameterGroupMessage, callback?: (err: RDS.InvalidDBParameterGroupStateFault|RDS.DBParameterGroupNotFoundFault|any, data: any) => void): Request;
      deleteDBClusterSnapshot(params: RDS.DeleteDBClusterSnapshotMessage, callback?: (err: RDS.InvalidDBClusterSnapshotStateFault|RDS.DBClusterSnapshotNotFoundFault|any, data: RDS.DeleteDBClusterSnapshotResult|any) => void): Request;
      deleteDBInstance(params: RDS.DeleteDBInstanceMessage, callback?: (err: RDS.DBInstanceNotFoundFault|RDS.InvalidDBInstanceStateFault|RDS.DBSnapshotAlreadyExistsFault|RDS.SnapshotQuotaExceededFault|any, data: RDS.DeleteDBInstanceResult|any) => void): Request;
      deleteDBParameterGroup(params: RDS.DeleteDBParameterGroupMessage, callback?: (err: RDS.InvalidDBParameterGroupStateFault|RDS.DBParameterGroupNotFoundFault|any, data: any) => void): Request;
      deleteDBSecurityGroup(params: RDS.DeleteDBSecurityGroupMessage, callback?: (err: RDS.InvalidDBSecurityGroupStateFault|RDS.DBSecurityGroupNotFoundFault|any, data: any) => void): Request;
      deleteDBSnapshot(params: RDS.DeleteDBSnapshotMessage, callback?: (err: RDS.InvalidDBSnapshotStateFault|RDS.DBSnapshotNotFoundFault|any, data: RDS.DeleteDBSnapshotResult|any) => void): Request;
      deleteDBSubnetGroup(params: RDS.DeleteDBSubnetGroupMessage, callback?: (err: RDS.InvalidDBSubnetGroupStateFault|RDS.InvalidDBSubnetStateFault|RDS.DBSubnetGroupNotFoundFault|any, data: any) => void): Request;
      deleteEventSubscription(params: RDS.DeleteEventSubscriptionMessage, callback?: (err: RDS.SubscriptionNotFoundFault|RDS.InvalidEventSubscriptionStateFault|any, data: RDS.DeleteEventSubscriptionResult|any) => void): Request;
      deleteOptionGroup(params: RDS.DeleteOptionGroupMessage, callback?: (err: RDS.OptionGroupNotFoundFault|RDS.InvalidOptionGroupStateFault|any, data: any) => void): Request;
      describeAccountAttributes(params: RDS.DescribeAccountAttributesMessage, callback?: (err: any, data: RDS.AccountAttributesMessage|any) => void): Request;
      describeCertificates(params: RDS.DescribeCertificatesMessage, callback?: (err: RDS.CertificateNotFoundFault|any, data: RDS.CertificateMessage|any) => void): Request;
      describeDBClusterParameterGroups(params: RDS.DescribeDBClusterParameterGroupsMessage, callback?: (err: RDS.DBParameterGroupNotFoundFault|any, data: RDS.DBClusterParameterGroupsMessage|any) => void): Request;
      describeDBClusterParameters(params: RDS.DescribeDBClusterParametersMessage, callback?: (err: RDS.DBParameterGroupNotFoundFault|any, data: RDS.DBClusterParameterGroupDetails|any) => void): Request;
      describeDBClusterSnapshots(params: RDS.DescribeDBClusterSnapshotsMessage, callback?: (err: RDS.DBClusterSnapshotNotFoundFault|any, data: RDS.DBClusterSnapshotMessage|any) => void): Request;
      describeDBClusters(params: RDS.DescribeDBClustersMessage, callback?: (err: RDS.DBClusterNotFoundFault|any, data: RDS.DBClusterMessage|any) => void): Request;
      describeDBEngineVersions(params: RDS.DescribeDBEngineVersionsMessage, callback?: (err: any, data: RDS.DBEngineVersionMessage|any) => void): Request;
      describeDBInstances(params: RDS.DescribeDBInstancesMessage, callback?: (err: RDS.DBInstanceNotFoundFault|any, data: RDS.DBInstanceMessage|any) => void): Request;
      describeDBLogFiles(params: RDS.DescribeDBLogFilesMessage, callback?: (err: RDS.DBInstanceNotFoundFault|any, data: RDS.DescribeDBLogFilesResponse|any) => void): Request;
      describeDBParameterGroups(params: RDS.DescribeDBParameterGroupsMessage, callback?: (err: RDS.DBParameterGroupNotFoundFault|any, data: RDS.DBParameterGroupsMessage|any) => void): Request;
      describeDBParameters(params: RDS.DescribeDBParametersMessage, callback?: (err: RDS.DBParameterGroupNotFoundFault|any, data: RDS.DBParameterGroupDetails|any) => void): Request;
      describeDBSecurityGroups(params: RDS.DescribeDBSecurityGroupsMessage, callback?: (err: RDS.DBSecurityGroupNotFoundFault|any, data: RDS.DBSecurityGroupMessage|any) => void): Request;
      describeDBSnapshotAttributes(params: RDS.DescribeDBSnapshotAttributesMessage, callback?: (err: RDS.DBSnapshotNotFoundFault|any, data: RDS.DescribeDBSnapshotAttributesResult|any) => void): Request;
      describeDBSnapshots(params: RDS.DescribeDBSnapshotsMessage, callback?: (err: RDS.DBSnapshotNotFoundFault|any, data: RDS.DBSnapshotMessage|any) => void): Request;
      describeDBSubnetGroups(params: RDS.DescribeDBSubnetGroupsMessage, callback?: (err: RDS.DBSubnetGroupNotFoundFault|any, data: RDS.DBSubnetGroupMessage|any) => void): Request;
      describeEngineDefaultClusterParameters(params: RDS.DescribeEngineDefaultClusterParametersMessage, callback?: (err: any, data: RDS.DescribeEngineDefaultClusterParametersResult|any) => void): Request;
      describeEngineDefaultParameters(params: RDS.DescribeEngineDefaultParametersMessage, callback?: (err: any, data: RDS.DescribeEngineDefaultParametersResult|any) => void): Request;
      describeEventCategories(params: RDS.DescribeEventCategoriesMessage, callback?: (err: any, data: RDS.EventCategoriesMessage|any) => void): Request;
      describeEventSubscriptions(params: RDS.DescribeEventSubscriptionsMessage, callback?: (err: RDS.SubscriptionNotFoundFault|any, data: RDS.EventSubscriptionsMessage|any) => void): Request;
      describeEvents(params: RDS.DescribeEventsMessage, callback?: (err: any, data: RDS.EventsMessage|any) => void): Request;
      describeOptionGroupOptions(params: RDS.DescribeOptionGroupOptionsMessage, callback?: (err: any, data: RDS.OptionGroupOptionsMessage|any) => void): Request;
      describeOptionGroups(params: RDS.DescribeOptionGroupsMessage, callback?: (err: RDS.OptionGroupNotFoundFault|any, data: RDS.OptionGroups|any) => void): Request;
      describeOrderableDBInstanceOptions(params: RDS.DescribeOrderableDBInstanceOptionsMessage, callback?: (err: any, data: RDS.OrderableDBInstanceOptionsMessage|any) => void): Request;
      describePendingMaintenanceActions(params: RDS.DescribePendingMaintenanceActionsMessage, callback?: (err: RDS.ResourceNotFoundFault|any, data: RDS.PendingMaintenanceActionsMessage|any) => void): Request;
      describeReservedDBInstances(params: RDS.DescribeReservedDBInstancesMessage, callback?: (err: RDS.ReservedDBInstanceNotFoundFault|any, data: RDS.ReservedDBInstanceMessage|any) => void): Request;
      describeReservedDBInstancesOfferings(params: RDS.DescribeReservedDBInstancesOfferingsMessage, callback?: (err: RDS.ReservedDBInstancesOfferingNotFoundFault|any, data: RDS.ReservedDBInstancesOfferingMessage|any) => void): Request;
      downloadDBLogFilePortion(params: RDS.DownloadDBLogFilePortionMessage, callback?: (err: RDS.DBInstanceNotFoundFault|RDS.DBLogFileNotFoundFault|any, data: RDS.DownloadDBLogFilePortionDetails|any) => void): Request;
      failoverDBCluster(params: RDS.FailoverDBClusterMessage, callback?: (err: RDS.DBClusterNotFoundFault|RDS.InvalidDBClusterStateFault|any, data: RDS.FailoverDBClusterResult|any) => void): Request;
      listTagsForResource(params: RDS.ListTagsForResourceMessage, callback?: (err: RDS.DBInstanceNotFoundFault|RDS.DBSnapshotNotFoundFault|any, data: RDS.TagListMessage|any) => void): Request;
      modifyDBCluster(params: RDS.ModifyDBClusterMessage, callback?: (err: RDS.DBClusterNotFoundFault|RDS.InvalidDBClusterStateFault|RDS.StorageQuotaExceededFault|RDS.DBSubnetGroupNotFoundFault|RDS.InvalidVPCNetworkStateFault|RDS.InvalidDBSubnetGroupStateFault|RDS.InvalidSubnet|RDS.DBClusterParameterGroupNotFoundFault|RDS.InvalidDBSecurityGroupStateFault|RDS.InvalidDBInstanceStateFault|RDS.DBClusterAlreadyExistsFault|any, data: RDS.ModifyDBClusterResult|any) => void): Request;
      modifyDBClusterParameterGroup(params: RDS.ModifyDBClusterParameterGroupMessage, callback?: (err: RDS.DBParameterGroupNotFoundFault|RDS.InvalidDBParameterGroupStateFault|any, data: RDS.DBClusterParameterGroupNameMessage|any) => void): Request;
      modifyDBInstance(params: RDS.ModifyDBInstanceMessage, callback?: (err: RDS.InvalidDBInstanceStateFault|RDS.InvalidDBSecurityGroupStateFault|RDS.DBInstanceAlreadyExistsFault|RDS.DBInstanceNotFoundFault|RDS.DBSecurityGroupNotFoundFault|RDS.DBParameterGroupNotFoundFault|RDS.InsufficientDBInstanceCapacityFault|RDS.StorageQuotaExceededFault|RDS.InvalidVPCNetworkStateFault|RDS.ProvisionedIopsNotAvailableInAZFault|RDS.OptionGroupNotFoundFault|RDS.DBUpgradeDependencyFailureFault|RDS.StorageTypeNotSupportedFault|RDS.AuthorizationNotFoundFault|RDS.CertificateNotFoundFault|any, data: RDS.ModifyDBInstanceResult|any) => void): Request;
      modifyDBParameterGroup(params: RDS.ModifyDBParameterGroupMessage, callback?: (err: RDS.DBParameterGroupNotFoundFault|RDS.InvalidDBParameterGroupStateFault|any, data: RDS.DBParameterGroupNameMessage|any) => void): Request;
      modifyDBSnapshotAttribute(params: RDS.ModifyDBSnapshotAttributeMessage, callback?: (err: RDS.DBSnapshotNotFoundFault|RDS.InvalidDBSnapshotStateFault|RDS.SharedSnapshotQuotaExceededFault|any, data: RDS.ModifyDBSnapshotAttributeResult|any) => void): Request;
      modifyDBSubnetGroup(params: RDS.ModifyDBSubnetGroupMessage, callback?: (err: RDS.DBSubnetGroupNotFoundFault|RDS.DBSubnetQuotaExceededFault|RDS.SubnetAlreadyInUse|RDS.DBSubnetGroupDoesNotCoverEnoughAZs|RDS.InvalidSubnet|any, data: RDS.ModifyDBSubnetGroupResult|any) => void): Request;
      modifyEventSubscription(params: RDS.ModifyEventSubscriptionMessage, callback?: (err: RDS.EventSubscriptionQuotaExceededFault|RDS.SubscriptionNotFoundFault|RDS.SNSInvalidTopicFault|RDS.SNSNoAuthorizationFault|RDS.SNSTopicArnNotFoundFault|RDS.SubscriptionCategoryNotFoundFault|any, data: RDS.ModifyEventSubscriptionResult|any) => void): Request;
      modifyOptionGroup(params: RDS.ModifyOptionGroupMessage, callback?: (err: RDS.InvalidOptionGroupStateFault|RDS.OptionGroupNotFoundFault|any, data: RDS.ModifyOptionGroupResult|any) => void): Request;
      promoteReadReplica(params: RDS.PromoteReadReplicaMessage, callback?: (err: RDS.InvalidDBInstanceStateFault|RDS.DBInstanceNotFoundFault|any, data: RDS.PromoteReadReplicaResult|any) => void): Request;
      purchaseReservedDBInstancesOffering(params: RDS.PurchaseReservedDBInstancesOfferingMessage, callback?: (err: RDS.ReservedDBInstancesOfferingNotFoundFault|RDS.ReservedDBInstanceAlreadyExistsFault|RDS.ReservedDBInstanceQuotaExceededFault|any, data: RDS.PurchaseReservedDBInstancesOfferingResult|any) => void): Request;
      rebootDBInstance(params: RDS.RebootDBInstanceMessage, callback?: (err: RDS.InvalidDBInstanceStateFault|RDS.DBInstanceNotFoundFault|any, data: RDS.RebootDBInstanceResult|any) => void): Request;
      removeSourceIdentifierFromSubscription(params: RDS.RemoveSourceIdentifierFromSubscriptionMessage, callback?: (err: RDS.SubscriptionNotFoundFault|RDS.SourceNotFoundFault|any, data: RDS.RemoveSourceIdentifierFromSubscriptionResult|any) => void): Request;
      removeTagsFromResource(params: RDS.RemoveTagsFromResourceMessage, callback?: (err: RDS.DBInstanceNotFoundFault|RDS.DBSnapshotNotFoundFault|any, data: any) => void): Request;
      resetDBClusterParameterGroup(params: RDS.ResetDBClusterParameterGroupMessage, callback?: (err: RDS.InvalidDBParameterGroupStateFault|RDS.DBParameterGroupNotFoundFault|any, data: RDS.DBClusterParameterGroupNameMessage|any) => void): Request;
      resetDBParameterGroup(params: RDS.ResetDBParameterGroupMessage, callback?: (err: RDS.InvalidDBParameterGroupStateFault|RDS.DBParameterGroupNotFoundFault|any, data: RDS.DBParameterGroupNameMessage|any) => void): Request;
      restoreDBClusterFromSnapshot(params: RDS.RestoreDBClusterFromSnapshotMessage, callback?: (err: RDS.DBClusterAlreadyExistsFault|RDS.DBClusterQuotaExceededFault|RDS.StorageQuotaExceededFault|RDS.DBSubnetGroupNotFoundFault|RDS.DBSnapshotNotFoundFault|RDS.DBClusterSnapshotNotFoundFault|RDS.InsufficientDBClusterCapacityFault|RDS.InsufficientStorageClusterCapacityFault|RDS.InvalidDBSnapshotStateFault|RDS.InvalidDBClusterSnapshotStateFault|RDS.StorageQuotaExceededFault|RDS.InvalidVPCNetworkStateFault|RDS.InvalidRestoreFault|RDS.DBSubnetGroupNotFoundFault|RDS.InvalidSubnet|RDS.OptionGroupNotFoundFault|RDS.KMSKeyNotAccessibleFault|any, data: RDS.RestoreDBClusterFromSnapshotResult|any) => void): Request;
      restoreDBClusterToPointInTime(params: RDS.RestoreDBClusterToPointInTimeMessage, callback?: (err: RDS.DBClusterAlreadyExistsFault|RDS.DBClusterQuotaExceededFault|RDS.StorageQuotaExceededFault|RDS.DBSubnetGroupNotFoundFault|RDS.DBClusterNotFoundFault|RDS.DBClusterSnapshotNotFoundFault|RDS.InsufficientDBClusterCapacityFault|RDS.InvalidDBSnapshotStateFault|RDS.InvalidDBClusterSnapshotStateFault|RDS.StorageQuotaExceededFault|RDS.InvalidVPCNetworkStateFault|RDS.InvalidRestoreFault|RDS.DBSubnetGroupNotFoundFault|RDS.InvalidSubnet|RDS.OptionGroupNotFoundFault|RDS.KMSKeyNotAccessibleFault|any, data: RDS.RestoreDBClusterToPointInTimeResult|any) => void): Request;
      restoreDBInstanceFromDBSnapshot(params: RDS.RestoreDBInstanceFromDBSnapshotMessage, callback?: (err: RDS.DBInstanceAlreadyExistsFault|RDS.DBSnapshotNotFoundFault|RDS.InstanceQuotaExceededFault|RDS.InsufficientDBInstanceCapacityFault|RDS.InvalidDBSnapshotStateFault|RDS.StorageQuotaExceededFault|RDS.InvalidVPCNetworkStateFault|RDS.InvalidRestoreFault|RDS.DBSubnetGroupNotFoundFault|RDS.DBSubnetGroupDoesNotCoverEnoughAZs|RDS.InvalidSubnet|RDS.ProvisionedIopsNotAvailableInAZFault|RDS.OptionGroupNotFoundFault|RDS.StorageTypeNotSupportedFault|RDS.AuthorizationNotFoundFault|RDS.KMSKeyNotAccessibleFault|RDS.DBSecurityGroupNotFoundFault|any, data: RDS.RestoreDBInstanceFromDBSnapshotResult|any) => void): Request;
      restoreDBInstanceToPointInTime(params: RDS.RestoreDBInstanceToPointInTimeMessage, callback?: (err: RDS.DBInstanceAlreadyExistsFault|RDS.DBInstanceNotFoundFault|RDS.InstanceQuotaExceededFault|RDS.InsufficientDBInstanceCapacityFault|RDS.InvalidDBInstanceStateFault|RDS.PointInTimeRestoreNotEnabledFault|RDS.StorageQuotaExceededFault|RDS.InvalidVPCNetworkStateFault|RDS.InvalidRestoreFault|RDS.DBSubnetGroupNotFoundFault|RDS.DBSubnetGroupDoesNotCoverEnoughAZs|RDS.InvalidSubnet|RDS.ProvisionedIopsNotAvailableInAZFault|RDS.OptionGroupNotFoundFault|RDS.StorageTypeNotSupportedFault|RDS.AuthorizationNotFoundFault|RDS.KMSKeyNotAccessibleFault|RDS.DBSecurityGroupNotFoundFault|any, data: RDS.RestoreDBInstanceToPointInTimeResult|any) => void): Request;
      revokeDBSecurityGroupIngress(params: RDS.RevokeDBSecurityGroupIngressMessage, callback?: (err: RDS.DBSecurityGroupNotFoundFault|RDS.AuthorizationNotFoundFault|RDS.InvalidDBSecurityGroupStateFault|any, data: RDS.RevokeDBSecurityGroupIngressResult|any) => void): Request;

    }

    export module RDS {
        export type AccountQuotaList = AccountQuota[];
        export type ApplyMethod = string;
        export type AttributeValueList = String[];
        export type AvailabilityZoneList = AvailabilityZone[];
        export type AvailabilityZones = String[];
        export type Boolean = boolean;
        export type BooleanOptional = boolean;
        export type CertificateList = Certificate[];
        export type DBClusterList = DBCluster[];
        export type DBClusterMemberList = DBClusterMember[];
        export type DBClusterOptionGroupMemberships = DBClusterOptionGroupStatus[];
        export type DBClusterParameterGroupList = DBClusterParameterGroup[];
        export type DBClusterSnapshotList = DBClusterSnapshot[];
        export type DBEngineVersionList = DBEngineVersion[];
        export type DBInstanceList = DBInstance[];
        export type DBInstanceStatusInfoList = DBInstanceStatusInfo[];
        export type DBParameterGroupList = DBParameterGroup[];
        export type DBParameterGroupStatusList = DBParameterGroupStatus[];
        export type DBSecurityGroupMembershipList = DBSecurityGroupMembership[];
        export type DBSecurityGroupNameList = String[];
        export type DBSecurityGroups = DBSecurityGroup[];
        export type DBSnapshotAttributeList = DBSnapshotAttribute[];
        export type DBSnapshotList = DBSnapshot[];
        export type DBSubnetGroups = DBSubnetGroup[];
        export type DescribeDBLogFilesList = DescribeDBLogFilesDetails[];
        export type Double = number;
        export type EC2SecurityGroupList = EC2SecurityGroup[];
        export type EventCategoriesList = String[];
        export type EventCategoriesMapList = EventCategoriesMap[];
        export type EventList = Event[];
        export type EventSubscriptionsList = EventSubscription[];
        export type FilterList = Filter[];
        export type FilterValueList = String[];
        export type IPRangeList = IPRange[];
        export type Integer = number;
        export type IntegerOptional = number;
        export type KeyList = String[];
        export type Long = number;
        export type OptionConfigurationList = OptionConfiguration[];
        export type OptionGroupMembershipList = OptionGroupMembership[];
        export type OptionGroupOptionSettingsList = OptionGroupOptionSetting[];
        export type OptionGroupOptionsList = OptionGroupOption[];
        export type OptionGroupsList = OptionGroup[];
        export type OptionNamesList = String[];
        export type OptionSettingConfigurationList = OptionSetting[];
        export type OptionSettingsList = OptionSetting[];
        export type OptionsDependedOn = String[];
        export type OptionsList = Option[];
        export type OrderableDBInstanceOptionsList = OrderableDBInstanceOption[];
        export type ParametersList = Parameter[];
        export type PendingMaintenanceActionDetails = PendingMaintenanceAction[];
        export type PendingMaintenanceActions = ResourcePendingMaintenanceActions[];
        export type ReadReplicaDBInstanceIdentifierList = String[];
        export type RecurringChargeList = RecurringCharge[];
        export type ReservedDBInstanceList = ReservedDBInstance[];
        export type ReservedDBInstancesOfferingList = ReservedDBInstancesOffering[];
        export type SourceIdsList = String[];
        export type SourceType = string;
        export type String = string;
        export type SubnetIdentifierList = String[];
        export type SubnetList = Subnet[];
        export type SupportedCharacterSetsList = CharacterSet[];
        export type TStamp = number;
        export type TagList = Tag[];
        export type ValidUpgradeTargetList = UpgradeTarget[];
        export type VpcSecurityGroupIdList = String[];
        export type VpcSecurityGroupMembershipList = VpcSecurityGroupMembership[];

        export interface AccountAttributesMessage {
            AccountQuotas?: AccountQuotaList;
        }
        export interface AccountQuota {
            AccountQuotaName?: String;
            Used?: Long;
            Max?: Long;
        }
        export interface AddSourceIdentifierToSubscriptionMessage {
            SubscriptionName: String;
            SourceIdentifier: String;
        }
        export interface AddSourceIdentifierToSubscriptionResult {
            EventSubscription?: EventSubscription;
        }
        export interface AddTagsToResourceMessage {
            ResourceName: String;
            Tags: TagList;
        }
        export interface ApplyPendingMaintenanceActionMessage {
            ResourceIdentifier: String;
            ApplyAction: String;
            OptInType: String;
        }
        export interface ApplyPendingMaintenanceActionResult {
            ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
        }
        export interface AuthorizationAlreadyExistsFault {
        }
        export interface AuthorizationNotFoundFault {
        }
        export interface AuthorizationQuotaExceededFault {
        }
        export interface AuthorizeDBSecurityGroupIngressMessage {
            DBSecurityGroupName: String;
            CIDRIP?: String;
            EC2SecurityGroupName?: String;
            EC2SecurityGroupId?: String;
            EC2SecurityGroupOwnerId?: String;
        }
        export interface AuthorizeDBSecurityGroupIngressResult {
            DBSecurityGroup?: DBSecurityGroup;
        }
        export interface AvailabilityZone {
            Name?: String;
        }
        export interface Certificate {
            CertificateIdentifier?: String;
            CertificateType?: String;
            Thumbprint?: String;
            ValidFrom?: TStamp;
            ValidTill?: TStamp;
        }
        export interface CertificateMessage {
            Certificates?: CertificateList;
            Marker?: String;
        }
        export interface CertificateNotFoundFault {
        }
        export interface CharacterSet {
            CharacterSetName?: String;
            CharacterSetDescription?: String;
        }
        export interface CopyDBClusterSnapshotMessage {
            SourceDBClusterSnapshotIdentifier: String;
            TargetDBClusterSnapshotIdentifier: String;
            Tags?: TagList;
        }
        export interface CopyDBClusterSnapshotResult {
            DBClusterSnapshot?: DBClusterSnapshot;
        }
        export interface CopyDBParameterGroupMessage {
            SourceDBParameterGroupIdentifier: String;
            TargetDBParameterGroupIdentifier: String;
            TargetDBParameterGroupDescription: String;
            Tags?: TagList;
        }
        export interface CopyDBParameterGroupResult {
            DBParameterGroup?: DBParameterGroup;
        }
        export interface CopyDBSnapshotMessage {
            SourceDBSnapshotIdentifier: String;
            TargetDBSnapshotIdentifier: String;
            KmsKeyId?: String;
            Tags?: TagList;
            CopyTags?: BooleanOptional;
        }
        export interface CopyDBSnapshotResult {
            DBSnapshot?: DBSnapshot;
        }
        export interface CopyOptionGroupMessage {
            SourceOptionGroupIdentifier: String;
            TargetOptionGroupIdentifier: String;
            TargetOptionGroupDescription: String;
            Tags?: TagList;
        }
        export interface CopyOptionGroupResult {
            OptionGroup?: OptionGroup;
        }
        export interface CreateDBClusterMessage {
            AvailabilityZones?: AvailabilityZones;
            BackupRetentionPeriod?: IntegerOptional;
            CharacterSetName?: String;
            DatabaseName?: String;
            DBClusterIdentifier: String;
            DBClusterParameterGroupName?: String;
            VpcSecurityGroupIds?: VpcSecurityGroupIdList;
            DBSubnetGroupName?: String;
            Engine: String;
            EngineVersion?: String;
            Port?: IntegerOptional;
            MasterUsername: String;
            MasterUserPassword: String;
            OptionGroupName?: String;
            PreferredBackupWindow?: String;
            PreferredMaintenanceWindow?: String;
            Tags?: TagList;
            StorageEncrypted?: BooleanOptional;
            KmsKeyId?: String;
        }
        export interface CreateDBClusterParameterGroupMessage {
            DBClusterParameterGroupName: String;
            DBParameterGroupFamily: String;
            Description: String;
            Tags?: TagList;
        }
        export interface CreateDBClusterParameterGroupResult {
            DBClusterParameterGroup?: DBClusterParameterGroup;
        }
        export interface CreateDBClusterResult {
            DBCluster?: DBCluster;
        }
        export interface CreateDBClusterSnapshotMessage {
            DBClusterSnapshotIdentifier: String;
            DBClusterIdentifier: String;
            Tags?: TagList;
        }
        export interface CreateDBClusterSnapshotResult {
            DBClusterSnapshot?: DBClusterSnapshot;
        }
        export interface CreateDBInstanceMessage {
            DBName?: String;
            DBInstanceIdentifier: String;
            AllocatedStorage?: IntegerOptional;
            DBInstanceClass: String;
            Engine: String;
            MasterUsername?: String;
            MasterUserPassword?: String;
            DBSecurityGroups?: DBSecurityGroupNameList;
            VpcSecurityGroupIds?: VpcSecurityGroupIdList;
            AvailabilityZone?: String;
            DBSubnetGroupName?: String;
            PreferredMaintenanceWindow?: String;
            DBParameterGroupName?: String;
            BackupRetentionPeriod?: IntegerOptional;
            PreferredBackupWindow?: String;
            Port?: IntegerOptional;
            MultiAZ?: BooleanOptional;
            EngineVersion?: String;
            AutoMinorVersionUpgrade?: BooleanOptional;
            LicenseModel?: String;
            Iops?: IntegerOptional;
            OptionGroupName?: String;
            CharacterSetName?: String;
            PubliclyAccessible?: BooleanOptional;
            Tags?: TagList;
            DBClusterIdentifier?: String;
            StorageType?: String;
            TdeCredentialArn?: String;
            TdeCredentialPassword?: String;
            StorageEncrypted?: BooleanOptional;
            KmsKeyId?: String;
            CopyTagsToSnapshot?: BooleanOptional;
            MonitoringInterval?: IntegerOptional;
            MonitoringRoleArn?: String;
        }
        export interface CreateDBInstanceReadReplicaMessage {
            DBInstanceIdentifier: String;
            SourceDBInstanceIdentifier: String;
            DBInstanceClass?: String;
            AvailabilityZone?: String;
            Port?: IntegerOptional;
            AutoMinorVersionUpgrade?: BooleanOptional;
            Iops?: IntegerOptional;
            OptionGroupName?: String;
            PubliclyAccessible?: BooleanOptional;
            Tags?: TagList;
            DBSubnetGroupName?: String;
            StorageType?: String;
            CopyTagsToSnapshot?: BooleanOptional;
            MonitoringInterval?: IntegerOptional;
            MonitoringRoleArn?: String;
        }
        export interface CreateDBInstanceReadReplicaResult {
            DBInstance?: DBInstance;
        }
        export interface CreateDBInstanceResult {
            DBInstance?: DBInstance;
        }
        export interface CreateDBParameterGroupMessage {
            DBParameterGroupName: String;
            DBParameterGroupFamily: String;
            Description: String;
            Tags?: TagList;
        }
        export interface CreateDBParameterGroupResult {
            DBParameterGroup?: DBParameterGroup;
        }
        export interface CreateDBSecurityGroupMessage {
            DBSecurityGroupName: String;
            DBSecurityGroupDescription: String;
            Tags?: TagList;
        }
        export interface CreateDBSecurityGroupResult {
            DBSecurityGroup?: DBSecurityGroup;
        }
        export interface CreateDBSnapshotMessage {
            DBSnapshotIdentifier: String;
            DBInstanceIdentifier: String;
            Tags?: TagList;
        }
        export interface CreateDBSnapshotResult {
            DBSnapshot?: DBSnapshot;
        }
        export interface CreateDBSubnetGroupMessage {
            DBSubnetGroupName: String;
            DBSubnetGroupDescription: String;
            SubnetIds: SubnetIdentifierList;
            Tags?: TagList;
        }
        export interface CreateDBSubnetGroupResult {
            DBSubnetGroup?: DBSubnetGroup;
        }
        export interface CreateEventSubscriptionMessage {
            SubscriptionName: String;
            SnsTopicArn: String;
            SourceType?: String;
            EventCategories?: EventCategoriesList;
            SourceIds?: SourceIdsList;
            Enabled?: BooleanOptional;
            Tags?: TagList;
        }
        export interface CreateEventSubscriptionResult {
            EventSubscription?: EventSubscription;
        }
        export interface CreateOptionGroupMessage {
            OptionGroupName: String;
            EngineName: String;
            MajorEngineVersion: String;
            OptionGroupDescription: String;
            Tags?: TagList;
        }
        export interface CreateOptionGroupResult {
            OptionGroup?: OptionGroup;
        }
        export interface DBCluster {
            AllocatedStorage?: IntegerOptional;
            AvailabilityZones?: AvailabilityZones;
            BackupRetentionPeriod?: IntegerOptional;
            CharacterSetName?: String;
            DatabaseName?: String;
            DBClusterIdentifier?: String;
            DBClusterParameterGroup?: String;
            DBSubnetGroup?: String;
            Status?: String;
            PercentProgress?: String;
            EarliestRestorableTime?: TStamp;
            Endpoint?: String;
            Engine?: String;
            EngineVersion?: String;
            LatestRestorableTime?: TStamp;
            Port?: IntegerOptional;
            MasterUsername?: String;
            DBClusterOptionGroupMemberships?: DBClusterOptionGroupMemberships;
            PreferredBackupWindow?: String;
            PreferredMaintenanceWindow?: String;
            DBClusterMembers?: DBClusterMemberList;
            VpcSecurityGroups?: VpcSecurityGroupMembershipList;
            HostedZoneId?: String;
            StorageEncrypted?: Boolean;
            KmsKeyId?: String;
            DbClusterResourceId?: String;
        }
        export interface DBClusterAlreadyExistsFault {
        }
        export interface DBClusterMember {
            DBInstanceIdentifier?: String;
            IsClusterWriter?: Boolean;
            DBClusterParameterGroupStatus?: String;
        }
        export interface DBClusterMessage {
            Marker?: String;
            DBClusters?: DBClusterList;
        }
        export interface DBClusterNotFoundFault {
        }
        export interface DBClusterOptionGroupStatus {
            DBClusterOptionGroupName?: String;
            Status?: String;
        }
        export interface DBClusterParameterGroup {
            DBClusterParameterGroupName?: String;
            DBParameterGroupFamily?: String;
            Description?: String;
        }
        export interface DBClusterParameterGroupDetails {
            Parameters?: ParametersList;
            Marker?: String;
        }
        export interface DBClusterParameterGroupNameMessage {
            DBClusterParameterGroupName?: String;
        }
        export interface DBClusterParameterGroupNotFoundFault {
        }
        export interface DBClusterParameterGroupsMessage {
            Marker?: String;
            DBClusterParameterGroups?: DBClusterParameterGroupList;
        }
        export interface DBClusterQuotaExceededFault {
        }
        export interface DBClusterSnapshot {
            AvailabilityZones?: AvailabilityZones;
            DBClusterSnapshotIdentifier?: String;
            DBClusterIdentifier?: String;
            SnapshotCreateTime?: TStamp;
            Engine?: String;
            AllocatedStorage?: Integer;
            Status?: String;
            Port?: Integer;
            VpcId?: String;
            ClusterCreateTime?: TStamp;
            MasterUsername?: String;
            EngineVersion?: String;
            LicenseModel?: String;
            SnapshotType?: String;
            PercentProgress?: Integer;
            StorageEncrypted?: Boolean;
            KmsKeyId?: String;
        }
        export interface DBClusterSnapshotAlreadyExistsFault {
        }
        export interface DBClusterSnapshotMessage {
            Marker?: String;
            DBClusterSnapshots?: DBClusterSnapshotList;
        }
        export interface DBClusterSnapshotNotFoundFault {
        }
        export interface DBEngineVersion {
            Engine?: String;
            EngineVersion?: String;
            DBParameterGroupFamily?: String;
            DBEngineDescription?: String;
            DBEngineVersionDescription?: String;
            DefaultCharacterSet?: CharacterSet;
            SupportedCharacterSets?: SupportedCharacterSetsList;
            ValidUpgradeTarget?: ValidUpgradeTargetList;
        }
        export interface DBEngineVersionMessage {
            Marker?: String;
            DBEngineVersions?: DBEngineVersionList;
        }
        export interface DBInstance {
            DBInstanceIdentifier?: String;
            DBInstanceClass?: String;
            Engine?: String;
            DBInstanceStatus?: String;
            MasterUsername?: String;
            DBName?: String;
            Endpoint?: Endpoint;
            AllocatedStorage?: Integer;
            InstanceCreateTime?: TStamp;
            PreferredBackupWindow?: String;
            BackupRetentionPeriod?: Integer;
            DBSecurityGroups?: DBSecurityGroupMembershipList;
            VpcSecurityGroups?: VpcSecurityGroupMembershipList;
            DBParameterGroups?: DBParameterGroupStatusList;
            AvailabilityZone?: String;
            DBSubnetGroup?: DBSubnetGroup;
            PreferredMaintenanceWindow?: String;
            PendingModifiedValues?: PendingModifiedValues;
            LatestRestorableTime?: TStamp;
            MultiAZ?: Boolean;
            EngineVersion?: String;
            AutoMinorVersionUpgrade?: Boolean;
            ReadReplicaSourceDBInstanceIdentifier?: String;
            ReadReplicaDBInstanceIdentifiers?: ReadReplicaDBInstanceIdentifierList;
            LicenseModel?: String;
            Iops?: IntegerOptional;
            OptionGroupMemberships?: OptionGroupMembershipList;
            CharacterSetName?: String;
            SecondaryAvailabilityZone?: String;
            PubliclyAccessible?: Boolean;
            StatusInfos?: DBInstanceStatusInfoList;
            StorageType?: String;
            TdeCredentialArn?: String;
            DbInstancePort?: Integer;
            DBClusterIdentifier?: String;
            StorageEncrypted?: Boolean;
            KmsKeyId?: String;
            DbiResourceId?: String;
            CACertificateIdentifier?: String;
            CopyTagsToSnapshot?: Boolean;
            MonitoringInterval?: IntegerOptional;
            EnhancedMonitoringResourceArn?: String;
            MonitoringRoleArn?: String;
        }
        export interface DBInstanceAlreadyExistsFault {
        }
        export interface DBInstanceMessage {
            Marker?: String;
            DBInstances?: DBInstanceList;
        }
        export interface DBInstanceNotFoundFault {
        }
        export interface DBInstanceStatusInfo {
            StatusType?: String;
            Normal?: Boolean;
            Status?: String;
            Message?: String;
        }
        export interface DBLogFileNotFoundFault {
        }
        export interface DBParameterGroup {
            DBParameterGroupName?: String;
            DBParameterGroupFamily?: String;
            Description?: String;
        }
        export interface DBParameterGroupAlreadyExistsFault {
        }
        export interface DBParameterGroupDetails {
            Parameters?: ParametersList;
            Marker?: String;
        }
        export interface DBParameterGroupNameMessage {
            DBParameterGroupName?: String;
        }
        export interface DBParameterGroupNotFoundFault {
        }
        export interface DBParameterGroupQuotaExceededFault {
        }
        export interface DBParameterGroupStatus {
            DBParameterGroupName?: String;
            ParameterApplyStatus?: String;
        }
        export interface DBParameterGroupsMessage {
            Marker?: String;
            DBParameterGroups?: DBParameterGroupList;
        }
        export interface DBSecurityGroup {
            OwnerId?: String;
            DBSecurityGroupName?: String;
            DBSecurityGroupDescription?: String;
            VpcId?: String;
            EC2SecurityGroups?: EC2SecurityGroupList;
            IPRanges?: IPRangeList;
        }
        export interface DBSecurityGroupAlreadyExistsFault {
        }
        export interface DBSecurityGroupMembership {
            DBSecurityGroupName?: String;
            Status?: String;
        }
        export interface DBSecurityGroupMessage {
            Marker?: String;
            DBSecurityGroups?: DBSecurityGroups;
        }
        export interface DBSecurityGroupNotFoundFault {
        }
        export interface DBSecurityGroupNotSupportedFault {
        }
        export interface DBSecurityGroupQuotaExceededFault {
        }
        export interface DBSnapshot {
            DBSnapshotIdentifier?: String;
            DBInstanceIdentifier?: String;
            SnapshotCreateTime?: TStamp;
            Engine?: String;
            AllocatedStorage?: Integer;
            Status?: String;
            Port?: Integer;
            AvailabilityZone?: String;
            VpcId?: String;
            InstanceCreateTime?: TStamp;
            MasterUsername?: String;
            EngineVersion?: String;
            LicenseModel?: String;
            SnapshotType?: String;
            Iops?: IntegerOptional;
            OptionGroupName?: String;
            PercentProgress?: Integer;
            SourceRegion?: String;
            SourceDBSnapshotIdentifier?: String;
            StorageType?: String;
            TdeCredentialArn?: String;
            Encrypted?: Boolean;
            KmsKeyId?: String;
        }
        export interface DBSnapshotAlreadyExistsFault {
        }
        export interface DBSnapshotAttribute {
            AttributeName?: String;
            AttributeValues?: AttributeValueList;
        }
        export interface DBSnapshotAttributesResult {
            DBSnapshotIdentifier?: String;
            DBSnapshotAttributes?: DBSnapshotAttributeList;
        }
        export interface DBSnapshotMessage {
            Marker?: String;
            DBSnapshots?: DBSnapshotList;
        }
        export interface DBSnapshotNotFoundFault {
        }
        export interface DBSubnetGroup {
            DBSubnetGroupName?: String;
            DBSubnetGroupDescription?: String;
            VpcId?: String;
            SubnetGroupStatus?: String;
            Subnets?: SubnetList;
        }
        export interface DBSubnetGroupAlreadyExistsFault {
        }
        export interface DBSubnetGroupDoesNotCoverEnoughAZs {
        }
        export interface DBSubnetGroupMessage {
            Marker?: String;
            DBSubnetGroups?: DBSubnetGroups;
        }
        export interface DBSubnetGroupNotAllowedFault {
        }
        export interface DBSubnetGroupNotFoundFault {
        }
        export interface DBSubnetGroupQuotaExceededFault {
        }
        export interface DBSubnetQuotaExceededFault {
        }
        export interface DBUpgradeDependencyFailureFault {
        }
        export interface DeleteDBClusterMessage {
            DBClusterIdentifier: String;
            SkipFinalSnapshot?: Boolean;
            FinalDBSnapshotIdentifier?: String;
        }
        export interface DeleteDBClusterParameterGroupMessage {
            DBClusterParameterGroupName: String;
        }
        export interface DeleteDBClusterResult {
            DBCluster?: DBCluster;
        }
        export interface DeleteDBClusterSnapshotMessage {
            DBClusterSnapshotIdentifier: String;
        }
        export interface DeleteDBClusterSnapshotResult {
            DBClusterSnapshot?: DBClusterSnapshot;
        }
        export interface DeleteDBInstanceMessage {
            DBInstanceIdentifier: String;
            SkipFinalSnapshot?: Boolean;
            FinalDBSnapshotIdentifier?: String;
        }
        export interface DeleteDBInstanceResult {
            DBInstance?: DBInstance;
        }
        export interface DeleteDBParameterGroupMessage {
            DBParameterGroupName: String;
        }
        export interface DeleteDBSecurityGroupMessage {
            DBSecurityGroupName: String;
        }
        export interface DeleteDBSnapshotMessage {
            DBSnapshotIdentifier: String;
        }
        export interface DeleteDBSnapshotResult {
            DBSnapshot?: DBSnapshot;
        }
        export interface DeleteDBSubnetGroupMessage {
            DBSubnetGroupName: String;
        }
        export interface DeleteEventSubscriptionMessage {
            SubscriptionName: String;
        }
        export interface DeleteEventSubscriptionResult {
            EventSubscription?: EventSubscription;
        }
        export interface DeleteOptionGroupMessage {
            OptionGroupName: String;
        }
        export interface DescribeAccountAttributesMessage {
        }
        export interface DescribeCertificatesMessage {
            CertificateIdentifier?: String;
            Filters?: FilterList;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribeDBClusterParameterGroupsMessage {
            DBClusterParameterGroupName?: String;
            Filters?: FilterList;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribeDBClusterParametersMessage {
            DBClusterParameterGroupName: String;
            Source?: String;
            Filters?: FilterList;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribeDBClusterSnapshotsMessage {
            DBClusterIdentifier?: String;
            DBClusterSnapshotIdentifier?: String;
            SnapshotType?: String;
            Filters?: FilterList;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribeDBClustersMessage {
            DBClusterIdentifier?: String;
            Filters?: FilterList;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribeDBEngineVersionsMessage {
            Engine?: String;
            EngineVersion?: String;
            DBParameterGroupFamily?: String;
            Filters?: FilterList;
            MaxRecords?: IntegerOptional;
            Marker?: String;
            DefaultOnly?: Boolean;
            ListSupportedCharacterSets?: BooleanOptional;
        }
        export interface DescribeDBInstancesMessage {
            DBInstanceIdentifier?: String;
            Filters?: FilterList;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribeDBLogFilesDetails {
            LogFileName?: String;
            LastWritten?: Long;
            Size?: Long;
        }
        export interface DescribeDBLogFilesMessage {
            DBInstanceIdentifier: String;
            FilenameContains?: String;
            FileLastWritten?: Long;
            FileSize?: Long;
            Filters?: FilterList;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribeDBLogFilesResponse {
            DescribeDBLogFiles?: DescribeDBLogFilesList;
            Marker?: String;
        }
        export interface DescribeDBParameterGroupsMessage {
            DBParameterGroupName?: String;
            Filters?: FilterList;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribeDBParametersMessage {
            DBParameterGroupName: String;
            Source?: String;
            Filters?: FilterList;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribeDBSecurityGroupsMessage {
            DBSecurityGroupName?: String;
            Filters?: FilterList;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribeDBSnapshotAttributesMessage {
            DBSnapshotIdentifier?: String;
        }
        export interface DescribeDBSnapshotAttributesResult {
            DBSnapshotAttributesResult?: DBSnapshotAttributesResult;
        }
        export interface DescribeDBSnapshotsMessage {
            DBInstanceIdentifier?: String;
            DBSnapshotIdentifier?: String;
            SnapshotType?: String;
            Filters?: FilterList;
            MaxRecords?: IntegerOptional;
            Marker?: String;
            IncludeShared?: Boolean;
            IncludePublic?: Boolean;
        }
        export interface DescribeDBSubnetGroupsMessage {
            DBSubnetGroupName?: String;
            Filters?: FilterList;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribeEngineDefaultClusterParametersMessage {
            DBParameterGroupFamily: String;
            Filters?: FilterList;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribeEngineDefaultClusterParametersResult {
            EngineDefaults?: EngineDefaults;
        }
        export interface DescribeEngineDefaultParametersMessage {
            DBParameterGroupFamily: String;
            Filters?: FilterList;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribeEngineDefaultParametersResult {
            EngineDefaults?: EngineDefaults;
        }
        export interface DescribeEventCategoriesMessage {
            SourceType?: String;
            Filters?: FilterList;
        }
        export interface DescribeEventSubscriptionsMessage {
            SubscriptionName?: String;
            Filters?: FilterList;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribeEventsMessage {
            SourceIdentifier?: String;
            SourceType?: SourceType;
            StartTime?: TStamp;
            EndTime?: TStamp;
            Duration?: IntegerOptional;
            EventCategories?: EventCategoriesList;
            Filters?: FilterList;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribeOptionGroupOptionsMessage {
            EngineName: String;
            MajorEngineVersion?: String;
            Filters?: FilterList;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribeOptionGroupsMessage {
            OptionGroupName?: String;
            Filters?: FilterList;
            Marker?: String;
            MaxRecords?: IntegerOptional;
            EngineName?: String;
            MajorEngineVersion?: String;
        }
        export interface DescribeOrderableDBInstanceOptionsMessage {
            Engine: String;
            EngineVersion?: String;
            DBInstanceClass?: String;
            LicenseModel?: String;
            Vpc?: BooleanOptional;
            Filters?: FilterList;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribePendingMaintenanceActionsMessage {
            ResourceIdentifier?: String;
            Filters?: FilterList;
            Marker?: String;
            MaxRecords?: IntegerOptional;
        }
        export interface DescribeReservedDBInstancesMessage {
            ReservedDBInstanceId?: String;
            ReservedDBInstancesOfferingId?: String;
            DBInstanceClass?: String;
            Duration?: String;
            ProductDescription?: String;
            OfferingType?: String;
            MultiAZ?: BooleanOptional;
            Filters?: FilterList;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DescribeReservedDBInstancesOfferingsMessage {
            ReservedDBInstancesOfferingId?: String;
            DBInstanceClass?: String;
            Duration?: String;
            ProductDescription?: String;
            OfferingType?: String;
            MultiAZ?: BooleanOptional;
            Filters?: FilterList;
            MaxRecords?: IntegerOptional;
            Marker?: String;
        }
        export interface DownloadDBLogFilePortionDetails {
            LogFileData?: String;
            Marker?: String;
            AdditionalDataPending?: Boolean;
        }
        export interface DownloadDBLogFilePortionMessage {
            DBInstanceIdentifier: String;
            LogFileName: String;
            Marker?: String;
            NumberOfLines?: Integer;
        }
        export interface EC2SecurityGroup {
            Status?: String;
            EC2SecurityGroupName?: String;
            EC2SecurityGroupId?: String;
            EC2SecurityGroupOwnerId?: String;
        }
        export interface Endpoint {
            Address?: String;
            Port?: Integer;
            HostedZoneId?: String;
        }
        export interface EngineDefaults {
            DBParameterGroupFamily?: String;
            Marker?: String;
            Parameters?: ParametersList;
        }
        export interface Event {
            SourceIdentifier?: String;
            SourceType?: SourceType;
            Message?: String;
            EventCategories?: EventCategoriesList;
            Date?: TStamp;
        }
        export interface EventCategoriesMap {
            SourceType?: String;
            EventCategories?: EventCategoriesList;
        }
        export interface EventCategoriesMessage {
            EventCategoriesMapList?: EventCategoriesMapList;
        }
        export interface EventSubscription {
            CustomerAwsId?: String;
            CustSubscriptionId?: String;
            SnsTopicArn?: String;
            Status?: String;
            SubscriptionCreationTime?: String;
            SourceType?: String;
            SourceIdsList?: SourceIdsList;
            EventCategoriesList?: EventCategoriesList;
            Enabled?: Boolean;
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
        export interface FailoverDBClusterMessage {
            DBClusterIdentifier?: String;
        }
        export interface FailoverDBClusterResult {
            DBCluster?: DBCluster;
        }
        export interface Filter {
            Name: String;
            Values: FilterValueList;
        }
        export interface IPRange {
            Status?: String;
            CIDRIP?: String;
        }
        export interface InstanceQuotaExceededFault {
        }
        export interface InsufficientDBClusterCapacityFault {
        }
        export interface InsufficientDBInstanceCapacityFault {
        }
        export interface InsufficientStorageClusterCapacityFault {
        }
        export interface InvalidDBClusterSnapshotStateFault {
        }
        export interface InvalidDBClusterStateFault {
        }
        export interface InvalidDBInstanceStateFault {
        }
        export interface InvalidDBParameterGroupStateFault {
        }
        export interface InvalidDBSecurityGroupStateFault {
        }
        export interface InvalidDBSnapshotStateFault {
        }
        export interface InvalidDBSubnetGroupFault {
        }
        export interface InvalidDBSubnetGroupStateFault {
        }
        export interface InvalidDBSubnetStateFault {
        }
        export interface InvalidEventSubscriptionStateFault {
        }
        export interface InvalidOptionGroupStateFault {
        }
        export interface InvalidRestoreFault {
        }
        export interface InvalidSubnet {
        }
        export interface InvalidVPCNetworkStateFault {
        }
        export interface KMSKeyNotAccessibleFault {
        }
        export interface ListTagsForResourceMessage {
            ResourceName: String;
            Filters?: FilterList;
        }
        export interface ModifyDBClusterMessage {
            DBClusterIdentifier: String;
            NewDBClusterIdentifier?: String;
            ApplyImmediately?: Boolean;
            BackupRetentionPeriod?: IntegerOptional;
            DBClusterParameterGroupName?: String;
            VpcSecurityGroupIds?: VpcSecurityGroupIdList;
            Port?: IntegerOptional;
            MasterUserPassword?: String;
            OptionGroupName?: String;
            PreferredBackupWindow?: String;
            PreferredMaintenanceWindow?: String;
        }
        export interface ModifyDBClusterParameterGroupMessage {
            DBClusterParameterGroupName: String;
            Parameters: ParametersList;
        }
        export interface ModifyDBClusterResult {
            DBCluster?: DBCluster;
        }
        export interface ModifyDBInstanceMessage {
            DBInstanceIdentifier: String;
            AllocatedStorage?: IntegerOptional;
            DBInstanceClass?: String;
            DBSecurityGroups?: DBSecurityGroupNameList;
            VpcSecurityGroupIds?: VpcSecurityGroupIdList;
            ApplyImmediately?: Boolean;
            MasterUserPassword?: String;
            DBParameterGroupName?: String;
            BackupRetentionPeriod?: IntegerOptional;
            PreferredBackupWindow?: String;
            PreferredMaintenanceWindow?: String;
            MultiAZ?: BooleanOptional;
            EngineVersion?: String;
            AllowMajorVersionUpgrade?: Boolean;
            AutoMinorVersionUpgrade?: BooleanOptional;
            Iops?: IntegerOptional;
            OptionGroupName?: String;
            NewDBInstanceIdentifier?: String;
            StorageType?: String;
            TdeCredentialArn?: String;
            TdeCredentialPassword?: String;
            CACertificateIdentifier?: String;
            CopyTagsToSnapshot?: BooleanOptional;
            MonitoringInterval?: IntegerOptional;
            DBPortNumber?: IntegerOptional;
            PubliclyAccessible?: BooleanOptional;
            MonitoringRoleArn?: String;
        }
        export interface ModifyDBInstanceResult {
            DBInstance?: DBInstance;
        }
        export interface ModifyDBParameterGroupMessage {
            DBParameterGroupName: String;
            Parameters: ParametersList;
        }
        export interface ModifyDBSnapshotAttributeMessage {
            DBSnapshotIdentifier: String;
            AttributeName?: String;
            ValuesToAdd?: AttributeValueList;
            ValuesToRemove?: AttributeValueList;
        }
        export interface ModifyDBSnapshotAttributeResult {
            DBSnapshotAttributesResult?: DBSnapshotAttributesResult;
        }
        export interface ModifyDBSubnetGroupMessage {
            DBSubnetGroupName: String;
            DBSubnetGroupDescription?: String;
            SubnetIds: SubnetIdentifierList;
        }
        export interface ModifyDBSubnetGroupResult {
            DBSubnetGroup?: DBSubnetGroup;
        }
        export interface ModifyEventSubscriptionMessage {
            SubscriptionName: String;
            SnsTopicArn?: String;
            SourceType?: String;
            EventCategories?: EventCategoriesList;
            Enabled?: BooleanOptional;
        }
        export interface ModifyEventSubscriptionResult {
            EventSubscription?: EventSubscription;
        }
        export interface ModifyOptionGroupMessage {
            OptionGroupName: String;
            OptionsToInclude?: OptionConfigurationList;
            OptionsToRemove?: OptionNamesList;
            ApplyImmediately?: Boolean;
        }
        export interface ModifyOptionGroupResult {
            OptionGroup?: OptionGroup;
        }
        export interface Option {
            OptionName?: String;
            OptionDescription?: String;
            Persistent?: Boolean;
            Permanent?: Boolean;
            Port?: IntegerOptional;
            OptionSettings?: OptionSettingConfigurationList;
            DBSecurityGroupMemberships?: DBSecurityGroupMembershipList;
            VpcSecurityGroupMemberships?: VpcSecurityGroupMembershipList;
        }
        export interface OptionConfiguration {
            OptionName: String;
            Port?: IntegerOptional;
            DBSecurityGroupMemberships?: DBSecurityGroupNameList;
            VpcSecurityGroupMemberships?: VpcSecurityGroupIdList;
            OptionSettings?: OptionSettingsList;
        }
        export interface OptionGroup {
            OptionGroupName?: String;
            OptionGroupDescription?: String;
            EngineName?: String;
            MajorEngineVersion?: String;
            Options?: OptionsList;
            AllowsVpcAndNonVpcInstanceMemberships?: Boolean;
            VpcId?: String;
        }
        export interface OptionGroupAlreadyExistsFault {
        }
        export interface OptionGroupMembership {
            OptionGroupName?: String;
            Status?: String;
        }
        export interface OptionGroupNotFoundFault {
        }
        export interface OptionGroupOption {
            Name?: String;
            Description?: String;
            EngineName?: String;
            MajorEngineVersion?: String;
            MinimumRequiredMinorEngineVersion?: String;
            PortRequired?: Boolean;
            DefaultPort?: IntegerOptional;
            OptionsDependedOn?: OptionsDependedOn;
            Persistent?: Boolean;
            Permanent?: Boolean;
            OptionGroupOptionSettings?: OptionGroupOptionSettingsList;
        }
        export interface OptionGroupOptionSetting {
            SettingName?: String;
            SettingDescription?: String;
            DefaultValue?: String;
            ApplyType?: String;
            AllowedValues?: String;
            IsModifiable?: Boolean;
        }
        export interface OptionGroupOptionsMessage {
            OptionGroupOptions?: OptionGroupOptionsList;
            Marker?: String;
        }
        export interface OptionGroupQuotaExceededFault {
        }
        export interface OptionGroups {
            OptionGroupsList?: OptionGroupsList;
            Marker?: String;
        }
        export interface OptionSetting {
            Name?: String;
            Value?: String;
            DefaultValue?: String;
            Description?: String;
            ApplyType?: String;
            DataType?: String;
            AllowedValues?: String;
            IsModifiable?: Boolean;
            IsCollection?: Boolean;
        }
        export interface OrderableDBInstanceOption {
            Engine?: String;
            EngineVersion?: String;
            DBInstanceClass?: String;
            LicenseModel?: String;
            AvailabilityZones?: AvailabilityZoneList;
            MultiAZCapable?: Boolean;
            ReadReplicaCapable?: Boolean;
            Vpc?: Boolean;
            SupportsStorageEncryption?: Boolean;
            StorageType?: String;
            SupportsIops?: Boolean;
            SupportsEnhancedMonitoring?: Boolean;
        }
        export interface OrderableDBInstanceOptionsMessage {
            OrderableDBInstanceOptions?: OrderableDBInstanceOptionsList;
            Marker?: String;
        }
        export interface Parameter {
            ParameterName?: String;
            ParameterValue?: String;
            Description?: String;
            Source?: String;
            ApplyType?: String;
            DataType?: String;
            AllowedValues?: String;
            IsModifiable?: Boolean;
            MinimumEngineVersion?: String;
            ApplyMethod?: ApplyMethod;
        }
        export interface PendingMaintenanceAction {
            Action?: String;
            AutoAppliedAfterDate?: TStamp;
            ForcedApplyDate?: TStamp;
            OptInStatus?: String;
            CurrentApplyDate?: TStamp;
            Description?: String;
        }
        export interface PendingMaintenanceActionsMessage {
            PendingMaintenanceActions?: PendingMaintenanceActions;
            Marker?: String;
        }
        export interface PendingModifiedValues {
            DBInstanceClass?: String;
            AllocatedStorage?: IntegerOptional;
            MasterUserPassword?: String;
            Port?: IntegerOptional;
            BackupRetentionPeriod?: IntegerOptional;
            MultiAZ?: BooleanOptional;
            EngineVersion?: String;
            Iops?: IntegerOptional;
            DBInstanceIdentifier?: String;
            StorageType?: String;
            CACertificateIdentifier?: String;
        }
        export interface PointInTimeRestoreNotEnabledFault {
        }
        export interface PromoteReadReplicaMessage {
            DBInstanceIdentifier: String;
            BackupRetentionPeriod?: IntegerOptional;
            PreferredBackupWindow?: String;
        }
        export interface PromoteReadReplicaResult {
            DBInstance?: DBInstance;
        }
        export interface ProvisionedIopsNotAvailableInAZFault {
        }
        export interface PurchaseReservedDBInstancesOfferingMessage {
            ReservedDBInstancesOfferingId: String;
            ReservedDBInstanceId?: String;
            DBInstanceCount?: IntegerOptional;
            Tags?: TagList;
        }
        export interface PurchaseReservedDBInstancesOfferingResult {
            ReservedDBInstance?: ReservedDBInstance;
        }
        export interface RebootDBInstanceMessage {
            DBInstanceIdentifier: String;
            ForceFailover?: BooleanOptional;
        }
        export interface RebootDBInstanceResult {
            DBInstance?: DBInstance;
        }
        export interface RecurringCharge {
            RecurringChargeAmount?: Double;
            RecurringChargeFrequency?: String;
        }
        export interface RemoveSourceIdentifierFromSubscriptionMessage {
            SubscriptionName: String;
            SourceIdentifier: String;
        }
        export interface RemoveSourceIdentifierFromSubscriptionResult {
            EventSubscription?: EventSubscription;
        }
        export interface RemoveTagsFromResourceMessage {
            ResourceName: String;
            TagKeys: KeyList;
        }
        export interface ReservedDBInstance {
            ReservedDBInstanceId?: String;
            ReservedDBInstancesOfferingId?: String;
            DBInstanceClass?: String;
            StartTime?: TStamp;
            Duration?: Integer;
            FixedPrice?: Double;
            UsagePrice?: Double;
            CurrencyCode?: String;
            DBInstanceCount?: Integer;
            ProductDescription?: String;
            OfferingType?: String;
            MultiAZ?: Boolean;
            State?: String;
            RecurringCharges?: RecurringChargeList;
        }
        export interface ReservedDBInstanceAlreadyExistsFault {
        }
        export interface ReservedDBInstanceMessage {
            Marker?: String;
            ReservedDBInstances?: ReservedDBInstanceList;
        }
        export interface ReservedDBInstanceNotFoundFault {
        }
        export interface ReservedDBInstanceQuotaExceededFault {
        }
        export interface ReservedDBInstancesOffering {
            ReservedDBInstancesOfferingId?: String;
            DBInstanceClass?: String;
            Duration?: Integer;
            FixedPrice?: Double;
            UsagePrice?: Double;
            CurrencyCode?: String;
            ProductDescription?: String;
            OfferingType?: String;
            MultiAZ?: Boolean;
            RecurringCharges?: RecurringChargeList;
        }
        export interface ReservedDBInstancesOfferingMessage {
            Marker?: String;
            ReservedDBInstancesOfferings?: ReservedDBInstancesOfferingList;
        }
        export interface ReservedDBInstancesOfferingNotFoundFault {
        }
        export interface ResetDBClusterParameterGroupMessage {
            DBClusterParameterGroupName: String;
            ResetAllParameters?: Boolean;
            Parameters?: ParametersList;
        }
        export interface ResetDBParameterGroupMessage {
            DBParameterGroupName: String;
            ResetAllParameters?: Boolean;
            Parameters?: ParametersList;
        }
        export interface ResourceNotFoundFault {
        }
        export interface ResourcePendingMaintenanceActions {
            ResourceIdentifier?: String;
            PendingMaintenanceActionDetails?: PendingMaintenanceActionDetails;
        }
        export interface RestoreDBClusterFromSnapshotMessage {
            AvailabilityZones?: AvailabilityZones;
            DBClusterIdentifier: String;
            SnapshotIdentifier: String;
            Engine: String;
            EngineVersion?: String;
            Port?: IntegerOptional;
            DBSubnetGroupName?: String;
            DatabaseName?: String;
            OptionGroupName?: String;
            VpcSecurityGroupIds?: VpcSecurityGroupIdList;
            Tags?: TagList;
            KmsKeyId?: String;
        }
        export interface RestoreDBClusterFromSnapshotResult {
            DBCluster?: DBCluster;
        }
        export interface RestoreDBClusterToPointInTimeMessage {
            DBClusterIdentifier: String;
            SourceDBClusterIdentifier: String;
            RestoreToTime?: TStamp;
            UseLatestRestorableTime?: Boolean;
            Port?: IntegerOptional;
            DBSubnetGroupName?: String;
            OptionGroupName?: String;
            VpcSecurityGroupIds?: VpcSecurityGroupIdList;
            Tags?: TagList;
            KmsKeyId?: String;
        }
        export interface RestoreDBClusterToPointInTimeResult {
            DBCluster?: DBCluster;
        }
        export interface RestoreDBInstanceFromDBSnapshotMessage {
            DBInstanceIdentifier: String;
            DBSnapshotIdentifier: String;
            DBInstanceClass?: String;
            Port?: IntegerOptional;
            AvailabilityZone?: String;
            DBSubnetGroupName?: String;
            MultiAZ?: BooleanOptional;
            PubliclyAccessible?: BooleanOptional;
            AutoMinorVersionUpgrade?: BooleanOptional;
            LicenseModel?: String;
            DBName?: String;
            Engine?: String;
            Iops?: IntegerOptional;
            OptionGroupName?: String;
            Tags?: TagList;
            StorageType?: String;
            TdeCredentialArn?: String;
            TdeCredentialPassword?: String;
            CopyTagsToSnapshot?: BooleanOptional;
        }
        export interface RestoreDBInstanceFromDBSnapshotResult {
            DBInstance?: DBInstance;
        }
        export interface RestoreDBInstanceToPointInTimeMessage {
            SourceDBInstanceIdentifier: String;
            TargetDBInstanceIdentifier: String;
            RestoreTime?: TStamp;
            UseLatestRestorableTime?: Boolean;
            DBInstanceClass?: String;
            Port?: IntegerOptional;
            AvailabilityZone?: String;
            DBSubnetGroupName?: String;
            MultiAZ?: BooleanOptional;
            PubliclyAccessible?: BooleanOptional;
            AutoMinorVersionUpgrade?: BooleanOptional;
            LicenseModel?: String;
            DBName?: String;
            Engine?: String;
            Iops?: IntegerOptional;
            OptionGroupName?: String;
            CopyTagsToSnapshot?: BooleanOptional;
            Tags?: TagList;
            StorageType?: String;
            TdeCredentialArn?: String;
            TdeCredentialPassword?: String;
        }
        export interface RestoreDBInstanceToPointInTimeResult {
            DBInstance?: DBInstance;
        }
        export interface RevokeDBSecurityGroupIngressMessage {
            DBSecurityGroupName: String;
            CIDRIP?: String;
            EC2SecurityGroupName?: String;
            EC2SecurityGroupId?: String;
            EC2SecurityGroupOwnerId?: String;
        }
        export interface RevokeDBSecurityGroupIngressResult {
            DBSecurityGroup?: DBSecurityGroup;
        }
        export interface SNSInvalidTopicFault {
        }
        export interface SNSNoAuthorizationFault {
        }
        export interface SNSTopicArnNotFoundFault {
        }
        export interface SharedSnapshotQuotaExceededFault {
        }
        export interface SnapshotQuotaExceededFault {
        }
        export interface SourceNotFoundFault {
        }
        export interface StorageQuotaExceededFault {
        }
        export interface StorageTypeNotSupportedFault {
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
        export interface SubscriptionNotFoundFault {
        }
        export interface Tag {
            Key?: String;
            Value?: String;
        }
        export interface TagListMessage {
            TagList?: TagList;
        }
        export interface UpgradeTarget {
            Engine?: String;
            EngineVersion?: String;
            Description?: String;
            AutoUpgrade?: Boolean;
            IsMajorVersionUpgrade?: Boolean;
        }
        export interface VpcSecurityGroupMembership {
            VpcSecurityGroupId?: String;
            Status?: String;
        }

    }
}
