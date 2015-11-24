// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {
    export class RDS {
      constructor(options?: any);
      addSourceIdentifierToSubscription(params: RDSAddSourceIdentifierToSubscriptionMessage, callback: (err: RDSSubscriptionNotFoundFault|RDSSourceNotFoundFault|any, data: RDSAddSourceIdentifierToSubscriptionResult|any) => void): void;
      addTagsToResource(params: RDSAddTagsToResourceMessage, callback: (err: RDSDBInstanceNotFoundFault|RDSDBSnapshotNotFoundFault|any, data: any) => void): void;
      authorizeDBSecurityGroupIngress(params: RDSAuthorizeDBSecurityGroupIngressMessage, callback: (err: RDSDBSecurityGroupNotFoundFault|RDSInvalidDBSecurityGroupStateFault|RDSAuthorizationAlreadyExistsFault|RDSAuthorizationQuotaExceededFault|any, data: RDSAuthorizeDBSecurityGroupIngressResult|any) => void): void;
      copyDBSnapshot(params: RDSCopyDBSnapshotMessage, callback: (err: RDSDBSnapshotAlreadyExistsFault|RDSDBSnapshotNotFoundFault|RDSInvalidDBSnapshotStateFault|RDSSnapshotQuotaExceededFault|any, data: RDSCopyDBSnapshotResult|any) => void): void;
      createDBInstance(params: RDSCreateDBInstanceMessage, callback: (err: RDSDBInstanceAlreadyExistsFault|RDSInsufficientDBInstanceCapacityFault|RDSDBParameterGroupNotFoundFault|RDSDBSecurityGroupNotFoundFault|RDSInstanceQuotaExceededFault|RDSStorageQuotaExceededFault|RDSDBSubnetGroupNotFoundFault|RDSDBSubnetGroupDoesNotCoverEnoughAZs|RDSInvalidSubnet|RDSInvalidVPCNetworkStateFault|RDSProvisionedIopsNotAvailableInAZFault|RDSOptionGroupNotFoundFault|any, data: RDSCreateDBInstanceResult|any) => void): void;
      createDBInstanceReadReplica(params: RDSCreateDBInstanceReadReplicaMessage, callback: (err: RDSDBInstanceAlreadyExistsFault|RDSInsufficientDBInstanceCapacityFault|RDSDBParameterGroupNotFoundFault|RDSDBSecurityGroupNotFoundFault|RDSInstanceQuotaExceededFault|RDSStorageQuotaExceededFault|RDSDBInstanceNotFoundFault|RDSInvalidDBInstanceStateFault|RDSDBSubnetGroupNotFoundFault|RDSDBSubnetGroupDoesNotCoverEnoughAZs|RDSInvalidSubnet|RDSInvalidVPCNetworkStateFault|RDSProvisionedIopsNotAvailableInAZFault|RDSOptionGroupNotFoundFault|any, data: RDSCreateDBInstanceReadReplicaResult|any) => void): void;
      createDBParameterGroup(params: RDSCreateDBParameterGroupMessage, callback: (err: RDSDBParameterGroupQuotaExceededFault|RDSDBParameterGroupAlreadyExistsFault|any, data: RDSCreateDBParameterGroupResult|any) => void): void;
      createDBSecurityGroup(params: RDSCreateDBSecurityGroupMessage, callback: (err: RDSDBSecurityGroupAlreadyExistsFault|RDSDBSecurityGroupQuotaExceededFault|RDSDBSecurityGroupNotSupportedFault|any, data: RDSCreateDBSecurityGroupResult|any) => void): void;
      createDBSnapshot(params: RDSCreateDBSnapshotMessage, callback: (err: RDSDBSnapshotAlreadyExistsFault|RDSInvalidDBInstanceStateFault|RDSDBInstanceNotFoundFault|RDSSnapshotQuotaExceededFault|any, data: RDSCreateDBSnapshotResult|any) => void): void;
      createDBSubnetGroup(params: RDSCreateDBSubnetGroupMessage, callback: (err: RDSDBSubnetGroupAlreadyExistsFault|RDSDBSubnetGroupQuotaExceededFault|RDSDBSubnetQuotaExceededFault|RDSDBSubnetGroupDoesNotCoverEnoughAZs|RDSInvalidSubnet|any, data: RDSCreateDBSubnetGroupResult|any) => void): void;
      createEventSubscription(params: RDSCreateEventSubscriptionMessage, callback: (err: RDSEventSubscriptionQuotaExceededFault|RDSSubscriptionAlreadyExistFault|RDSSNSInvalidTopicFault|RDSSNSNoAuthorizationFault|RDSSNSTopicArnNotFoundFault|RDSSubscriptionCategoryNotFoundFault|RDSSourceNotFoundFault|any, data: RDSCreateEventSubscriptionResult|any) => void): void;
      createOptionGroup(params: RDSCreateOptionGroupMessage, callback: (err: RDSOptionGroupAlreadyExistsFault|RDSOptionGroupQuotaExceededFault|any, data: RDSCreateOptionGroupResult|any) => void): void;
      deleteDBInstance(params: RDSDeleteDBInstanceMessage, callback: (err: RDSDBInstanceNotFoundFault|RDSInvalidDBInstanceStateFault|RDSDBSnapshotAlreadyExistsFault|RDSSnapshotQuotaExceededFault|any, data: RDSDeleteDBInstanceResult|any) => void): void;
      deleteDBParameterGroup(params: RDSDeleteDBParameterGroupMessage, callback: (err: RDSInvalidDBParameterGroupStateFault|RDSDBParameterGroupNotFoundFault|any, data: any) => void): void;
      deleteDBSecurityGroup(params: RDSDeleteDBSecurityGroupMessage, callback: (err: RDSInvalidDBSecurityGroupStateFault|RDSDBSecurityGroupNotFoundFault|any, data: any) => void): void;
      deleteDBSnapshot(params: RDSDeleteDBSnapshotMessage, callback: (err: RDSInvalidDBSnapshotStateFault|RDSDBSnapshotNotFoundFault|any, data: RDSDeleteDBSnapshotResult|any) => void): void;
      deleteDBSubnetGroup(params: RDSDeleteDBSubnetGroupMessage, callback: (err: RDSInvalidDBSubnetGroupStateFault|RDSInvalidDBSubnetStateFault|RDSDBSubnetGroupNotFoundFault|any, data: any) => void): void;
      deleteEventSubscription(params: RDSDeleteEventSubscriptionMessage, callback: (err: RDSSubscriptionNotFoundFault|RDSInvalidEventSubscriptionStateFault|any, data: RDSDeleteEventSubscriptionResult|any) => void): void;
      deleteOptionGroup(params: RDSDeleteOptionGroupMessage, callback: (err: RDSOptionGroupNotFoundFault|RDSInvalidOptionGroupStateFault|any, data: any) => void): void;
      describeDBEngineVersions(params: RDSDescribeDBEngineVersionsMessage, callback: (err: any, data: RDSDBEngineVersionMessage|any) => void): void;
      describeDBInstances(params: RDSDescribeDBInstancesMessage, callback: (err: RDSDBInstanceNotFoundFault|any, data: RDSDBInstanceMessage|any) => void): void;
      describeDBParameterGroups(params: RDSDescribeDBParameterGroupsMessage, callback: (err: RDSDBParameterGroupNotFoundFault|any, data: RDSDBParameterGroupsMessage|any) => void): void;
      describeDBParameters(params: RDSDescribeDBParametersMessage, callback: (err: RDSDBParameterGroupNotFoundFault|any, data: RDSDBParameterGroupDetails|any) => void): void;
      describeDBSecurityGroups(params: RDSDescribeDBSecurityGroupsMessage, callback: (err: RDSDBSecurityGroupNotFoundFault|any, data: RDSDBSecurityGroupMessage|any) => void): void;
      describeDBSnapshots(params: RDSDescribeDBSnapshotsMessage, callback: (err: RDSDBSnapshotNotFoundFault|any, data: RDSDBSnapshotMessage|any) => void): void;
      describeDBSubnetGroups(params: RDSDescribeDBSubnetGroupsMessage, callback: (err: RDSDBSubnetGroupNotFoundFault|any, data: RDSDBSubnetGroupMessage|any) => void): void;
      describeEngineDefaultParameters(params: RDSDescribeEngineDefaultParametersMessage, callback: (err: any, data: RDSDescribeEngineDefaultParametersResult|any) => void): void;
      describeEventCategories(params: RDSDescribeEventCategoriesMessage, callback: (err: any, data: RDSEventCategoriesMessage|any) => void): void;
      describeEventSubscriptions(params: RDSDescribeEventSubscriptionsMessage, callback: (err: RDSSubscriptionNotFoundFault|any, data: RDSEventSubscriptionsMessage|any) => void): void;
      describeEvents(params: RDSDescribeEventsMessage, callback: (err: any, data: RDSEventsMessage|any) => void): void;
      describeOptionGroupOptions(params: RDSDescribeOptionGroupOptionsMessage, callback: (err: any, data: RDSOptionGroupOptionsMessage|any) => void): void;
      describeOptionGroups(params: RDSDescribeOptionGroupsMessage, callback: (err: RDSOptionGroupNotFoundFault|any, data: RDSOptionGroups|any) => void): void;
      describeOrderableDBInstanceOptions(params: RDSDescribeOrderableDBInstanceOptionsMessage, callback: (err: any, data: RDSOrderableDBInstanceOptionsMessage|any) => void): void;
      describeReservedDBInstances(params: RDSDescribeReservedDBInstancesMessage, callback: (err: RDSReservedDBInstanceNotFoundFault|any, data: RDSReservedDBInstanceMessage|any) => void): void;
      describeReservedDBInstancesOfferings(params: RDSDescribeReservedDBInstancesOfferingsMessage, callback: (err: RDSReservedDBInstancesOfferingNotFoundFault|any, data: RDSReservedDBInstancesOfferingMessage|any) => void): void;
      listTagsForResource(params: RDSListTagsForResourceMessage, callback: (err: RDSDBInstanceNotFoundFault|RDSDBSnapshotNotFoundFault|any, data: RDSTagListMessage|any) => void): void;
      modifyDBInstance(params: RDSModifyDBInstanceMessage, callback: (err: RDSInvalidDBInstanceStateFault|RDSInvalidDBSecurityGroupStateFault|RDSDBInstanceAlreadyExistsFault|RDSDBInstanceNotFoundFault|RDSDBSecurityGroupNotFoundFault|RDSDBParameterGroupNotFoundFault|RDSInsufficientDBInstanceCapacityFault|RDSStorageQuotaExceededFault|RDSInvalidVPCNetworkStateFault|RDSProvisionedIopsNotAvailableInAZFault|RDSOptionGroupNotFoundFault|RDSDBUpgradeDependencyFailureFault|any, data: RDSModifyDBInstanceResult|any) => void): void;
      modifyDBParameterGroup(params: RDSModifyDBParameterGroupMessage, callback: (err: RDSDBParameterGroupNotFoundFault|RDSInvalidDBParameterGroupStateFault|any, data: RDSDBParameterGroupNameMessage|any) => void): void;
      modifyDBSubnetGroup(params: RDSModifyDBSubnetGroupMessage, callback: (err: RDSDBSubnetGroupNotFoundFault|RDSDBSubnetQuotaExceededFault|RDSSubnetAlreadyInUse|RDSDBSubnetGroupDoesNotCoverEnoughAZs|RDSInvalidSubnet|any, data: RDSModifyDBSubnetGroupResult|any) => void): void;
      modifyEventSubscription(params: RDSModifyEventSubscriptionMessage, callback: (err: RDSEventSubscriptionQuotaExceededFault|RDSSubscriptionNotFoundFault|RDSSNSInvalidTopicFault|RDSSNSNoAuthorizationFault|RDSSNSTopicArnNotFoundFault|RDSSubscriptionCategoryNotFoundFault|any, data: RDSModifyEventSubscriptionResult|any) => void): void;
      modifyOptionGroup(params: RDSModifyOptionGroupMessage, callback: (err: RDSInvalidOptionGroupStateFault|RDSOptionGroupNotFoundFault|any, data: RDSModifyOptionGroupResult|any) => void): void;
      promoteReadReplica(params: RDSPromoteReadReplicaMessage, callback: (err: RDSInvalidDBInstanceStateFault|RDSDBInstanceNotFoundFault|any, data: RDSPromoteReadReplicaResult|any) => void): void;
      purchaseReservedDBInstancesOffering(params: RDSPurchaseReservedDBInstancesOfferingMessage, callback: (err: RDSReservedDBInstancesOfferingNotFoundFault|RDSReservedDBInstanceAlreadyExistsFault|RDSReservedDBInstanceQuotaExceededFault|any, data: RDSPurchaseReservedDBInstancesOfferingResult|any) => void): void;
      rebootDBInstance(params: RDSRebootDBInstanceMessage, callback: (err: RDSInvalidDBInstanceStateFault|RDSDBInstanceNotFoundFault|any, data: RDSRebootDBInstanceResult|any) => void): void;
      removeSourceIdentifierFromSubscription(params: RDSRemoveSourceIdentifierFromSubscriptionMessage, callback: (err: RDSSubscriptionNotFoundFault|RDSSourceNotFoundFault|any, data: RDSRemoveSourceIdentifierFromSubscriptionResult|any) => void): void;
      removeTagsFromResource(params: RDSRemoveTagsFromResourceMessage, callback: (err: RDSDBInstanceNotFoundFault|RDSDBSnapshotNotFoundFault|any, data: any) => void): void;
      resetDBParameterGroup(params: RDSResetDBParameterGroupMessage, callback: (err: RDSInvalidDBParameterGroupStateFault|RDSDBParameterGroupNotFoundFault|any, data: RDSDBParameterGroupNameMessage|any) => void): void;
      restoreDBInstanceFromDBSnapshot(params: RDSRestoreDBInstanceFromDBSnapshotMessage, callback: (err: RDSDBInstanceAlreadyExistsFault|RDSDBSnapshotNotFoundFault|RDSInstanceQuotaExceededFault|RDSInsufficientDBInstanceCapacityFault|RDSInvalidDBSnapshotStateFault|RDSStorageQuotaExceededFault|RDSInvalidVPCNetworkStateFault|RDSInvalidRestoreFault|RDSDBSubnetGroupNotFoundFault|RDSDBSubnetGroupDoesNotCoverEnoughAZs|RDSInvalidSubnet|RDSProvisionedIopsNotAvailableInAZFault|RDSOptionGroupNotFoundFault|any, data: RDSRestoreDBInstanceFromDBSnapshotResult|any) => void): void;
      restoreDBInstanceToPointInTime(params: RDSRestoreDBInstanceToPointInTimeMessage, callback: (err: RDSDBInstanceAlreadyExistsFault|RDSDBInstanceNotFoundFault|RDSInstanceQuotaExceededFault|RDSInsufficientDBInstanceCapacityFault|RDSInvalidDBInstanceStateFault|RDSPointInTimeRestoreNotEnabledFault|RDSStorageQuotaExceededFault|RDSInvalidVPCNetworkStateFault|RDSInvalidRestoreFault|RDSDBSubnetGroupNotFoundFault|RDSDBSubnetGroupDoesNotCoverEnoughAZs|RDSInvalidSubnet|RDSProvisionedIopsNotAvailableInAZFault|RDSOptionGroupNotFoundFault|any, data: RDSRestoreDBInstanceToPointInTimeResult|any) => void): void;
      revokeDBSecurityGroupIngress(params: RDSRevokeDBSecurityGroupIngressMessage, callback: (err: RDSDBSecurityGroupNotFoundFault|RDSAuthorizationNotFoundFault|RDSInvalidDBSecurityGroupStateFault|any, data: RDSRevokeDBSecurityGroupIngressResult|any) => void): void;
    }

    export interface RDSAddSourceIdentifierToSubscriptionMessage {
        SubscriptionName: RDSString;
        SourceIdentifier: RDSString;
    }

    export interface RDSAddTagsToResourceMessage {
        ResourceName: RDSString;
        Tags: RDSTagList;
    }

    export type RDSApplyMethod = string;
    export interface RDSAuthorizationAlreadyExistsFault {
    }

    export interface RDSAuthorizationNotFoundFault {
    }

    export interface RDSAuthorizationQuotaExceededFault {
    }

    export interface RDSAuthorizeDBSecurityGroupIngressMessage {
        DBSecurityGroupName: RDSString;
        CIDRIP?: RDSString;
        EC2SecurityGroupName?: RDSString;
        EC2SecurityGroupId?: RDSString;
        EC2SecurityGroupOwnerId?: RDSString;
    }

    export interface RDSAvailabilityZone {
        Name?: RDSString;
        ProvisionedIopsCapable?: RDSBoolean;
    }

    export type RDSAvailabilityZoneList = Array<RDSAvailabilityZone>;
    export type RDSBoolean = boolean;
    export type RDSBooleanOptional = boolean;
    export interface RDSCharacterSet {
        CharacterSetName?: RDSString;
        CharacterSetDescription?: RDSString;
    }

    export interface RDSCopyDBSnapshotMessage {
        SourceDBSnapshotIdentifier: RDSString;
        TargetDBSnapshotIdentifier: RDSString;
    }

    export interface RDSCreateDBInstanceMessage {
        DBName?: RDSString;
        DBInstanceIdentifier: RDSString;
        AllocatedStorage: RDSIntegerOptional;
        DBInstanceClass: RDSString;
        Engine: RDSString;
        MasterUsername: RDSString;
        MasterUserPassword: RDSString;
        DBSecurityGroups?: RDSDBSecurityGroupNameList;
        VpcSecurityGroupIds?: RDSVpcSecurityGroupIdList;
        AvailabilityZone?: RDSString;
        DBSubnetGroupName?: RDSString;
        PreferredMaintenanceWindow?: RDSString;
        DBParameterGroupName?: RDSString;
        BackupRetentionPeriod?: RDSIntegerOptional;
        PreferredBackupWindow?: RDSString;
        Port?: RDSIntegerOptional;
        MultiAZ?: RDSBooleanOptional;
        EngineVersion?: RDSString;
        AutoMinorVersionUpgrade?: RDSBooleanOptional;
        LicenseModel?: RDSString;
        Iops?: RDSIntegerOptional;
        OptionGroupName?: RDSString;
        CharacterSetName?: RDSString;
        PubliclyAccessible?: RDSBooleanOptional;
    }

    export interface RDSCreateDBInstanceReadReplicaMessage {
        DBInstanceIdentifier: RDSString;
        SourceDBInstanceIdentifier: RDSString;
        DBInstanceClass?: RDSString;
        AvailabilityZone?: RDSString;
        Port?: RDSIntegerOptional;
        AutoMinorVersionUpgrade?: RDSBooleanOptional;
        Iops?: RDSIntegerOptional;
        OptionGroupName?: RDSString;
        PubliclyAccessible?: RDSBooleanOptional;
    }

    export interface RDSCreateDBParameterGroupMessage {
        DBParameterGroupName: RDSString;
        DBParameterGroupFamily: RDSString;
        Description: RDSString;
    }

    export interface RDSCreateDBSecurityGroupMessage {
        DBSecurityGroupName: RDSString;
        DBSecurityGroupDescription: RDSString;
    }

    export interface RDSCreateDBSnapshotMessage {
        DBSnapshotIdentifier: RDSString;
        DBInstanceIdentifier: RDSString;
    }

    export interface RDSCreateDBSubnetGroupMessage {
        DBSubnetGroupName: RDSString;
        DBSubnetGroupDescription: RDSString;
        SubnetIds: RDSSubnetIdentifierList;
    }

    export interface RDSCreateEventSubscriptionMessage {
        SubscriptionName: RDSString;
        SnsTopicArn: RDSString;
        SourceType?: RDSString;
        EventCategories?: RDSEventCategoriesList;
        SourceIds?: RDSSourceIdsList;
        Enabled?: RDSBooleanOptional;
    }

    export interface RDSCreateOptionGroupMessage {
        OptionGroupName: RDSString;
        EngineName: RDSString;
        MajorEngineVersion: RDSString;
        OptionGroupDescription: RDSString;
    }

    export interface RDSDBEngineVersion {
        Engine?: RDSString;
        EngineVersion?: RDSString;
        DBParameterGroupFamily?: RDSString;
        DBEngineDescription?: RDSString;
        DBEngineVersionDescription?: RDSString;
        DefaultCharacterSet?: RDSCharacterSet;
        SupportedCharacterSets?: RDSSupportedCharacterSetsList;
    }

    export type RDSDBEngineVersionList = Array<RDSDBEngineVersion>;
    export interface RDSDBEngineVersionMessage {
        Marker?: RDSString;
        DBEngineVersions?: RDSDBEngineVersionList;
    }

    export interface RDSDBInstance {
        DBInstanceIdentifier?: RDSString;
        DBInstanceClass?: RDSString;
        Engine?: RDSString;
        DBInstanceStatus?: RDSString;
        MasterUsername?: RDSString;
        DBName?: RDSString;
        Endpoint?: RDSEndpoint;
        AllocatedStorage?: RDSInteger;
        InstanceCreateTime?: RDSTStamp;
        PreferredBackupWindow?: RDSString;
        BackupRetentionPeriod?: RDSInteger;
        DBSecurityGroups?: RDSDBSecurityGroupMembershipList;
        VpcSecurityGroups?: RDSVpcSecurityGroupMembershipList;
        DBParameterGroups?: RDSDBParameterGroupStatusList;
        AvailabilityZone?: RDSString;
        DBSubnetGroup?: RDSDBSubnetGroup;
        PreferredMaintenanceWindow?: RDSString;
        PendingModifiedValues?: RDSPendingModifiedValues;
        LatestRestorableTime?: RDSTStamp;
        MultiAZ?: RDSBoolean;
        EngineVersion?: RDSString;
        AutoMinorVersionUpgrade?: RDSBoolean;
        ReadReplicaSourceDBInstanceIdentifier?: RDSString;
        ReadReplicaDBInstanceIdentifiers?: RDSReadReplicaDBInstanceIdentifierList;
        LicenseModel?: RDSString;
        Iops?: RDSIntegerOptional;
        OptionGroupMembership?: RDSOptionGroupMembership;
        CharacterSetName?: RDSString;
        SecondaryAvailabilityZone?: RDSString;
        PubliclyAccessible?: RDSBoolean;
    }

    export interface RDSDBInstanceAlreadyExistsFault {
    }

    export type RDSDBInstanceList = Array<RDSDBInstance>;
    export interface RDSDBInstanceMessage {
        Marker?: RDSString;
        DBInstances?: RDSDBInstanceList;
    }

    export interface RDSDBInstanceNotFoundFault {
    }

    export interface RDSDBParameterGroup {
        DBParameterGroupName?: RDSString;
        DBParameterGroupFamily?: RDSString;
        Description?: RDSString;
    }

    export interface RDSDBParameterGroupAlreadyExistsFault {
    }

    export interface RDSDBParameterGroupDetails {
        Parameters?: RDSParametersList;
        Marker?: RDSString;
    }

    export type RDSDBParameterGroupList = Array<RDSDBParameterGroup>;
    export interface RDSDBParameterGroupNameMessage {
        DBParameterGroupName?: RDSString;
    }

    export interface RDSDBParameterGroupNotFoundFault {
    }

    export interface RDSDBParameterGroupQuotaExceededFault {
    }

    export interface RDSDBParameterGroupStatus {
        DBParameterGroupName?: RDSString;
        ParameterApplyStatus?: RDSString;
    }

    export type RDSDBParameterGroupStatusList = Array<RDSDBParameterGroupStatus>;
    export interface RDSDBParameterGroupsMessage {
        Marker?: RDSString;
        DBParameterGroups?: RDSDBParameterGroupList;
    }

    export interface RDSDBSecurityGroup {
        OwnerId?: RDSString;
        DBSecurityGroupName?: RDSString;
        DBSecurityGroupDescription?: RDSString;
        VpcId?: RDSString;
        EC2SecurityGroups?: RDSEC2SecurityGroupList;
        IPRanges?: RDSIPRangeList;
    }

    export interface RDSDBSecurityGroupAlreadyExistsFault {
    }

    export interface RDSDBSecurityGroupMembership {
        DBSecurityGroupName?: RDSString;
        Status?: RDSString;
    }

    export type RDSDBSecurityGroupMembershipList = Array<RDSDBSecurityGroupMembership>;
    export interface RDSDBSecurityGroupMessage {
        Marker?: RDSString;
        DBSecurityGroups?: RDSDBSecurityGroups;
    }

    export type RDSDBSecurityGroupNameList = Array<RDSString>;
    export interface RDSDBSecurityGroupNotFoundFault {
    }

    export interface RDSDBSecurityGroupNotSupportedFault {
    }

    export interface RDSDBSecurityGroupQuotaExceededFault {
    }

    export type RDSDBSecurityGroups = Array<RDSDBSecurityGroup>;
    export interface RDSDBSnapshot {
        DBSnapshotIdentifier?: RDSString;
        DBInstanceIdentifier?: RDSString;
        SnapshotCreateTime?: RDSTStamp;
        Engine?: RDSString;
        AllocatedStorage?: RDSInteger;
        Status?: RDSString;
        Port?: RDSInteger;
        AvailabilityZone?: RDSString;
        VpcId?: RDSString;
        InstanceCreateTime?: RDSTStamp;
        MasterUsername?: RDSString;
        EngineVersion?: RDSString;
        LicenseModel?: RDSString;
        SnapshotType?: RDSString;
        Iops?: RDSIntegerOptional;
    }

    export interface RDSDBSnapshotAlreadyExistsFault {
    }

    export type RDSDBSnapshotList = Array<RDSDBSnapshot>;
    export interface RDSDBSnapshotMessage {
        Marker?: RDSString;
        DBSnapshots?: RDSDBSnapshotList;
    }

    export interface RDSDBSnapshotNotFoundFault {
    }

    export interface RDSDBSubnetGroup {
        DBSubnetGroupName?: RDSString;
        DBSubnetGroupDescription?: RDSString;
        VpcId?: RDSString;
        SubnetGroupStatus?: RDSString;
        Subnets?: RDSSubnetList;
    }

    export interface RDSDBSubnetGroupAlreadyExistsFault {
    }

    export interface RDSDBSubnetGroupDoesNotCoverEnoughAZs {
    }

    export interface RDSDBSubnetGroupMessage {
        Marker?: RDSString;
        DBSubnetGroups?: RDSDBSubnetGroups;
    }

    export interface RDSDBSubnetGroupNotFoundFault {
    }

    export interface RDSDBSubnetGroupQuotaExceededFault {
    }

    export type RDSDBSubnetGroups = Array<RDSDBSubnetGroup>;
    export interface RDSDBSubnetQuotaExceededFault {
    }

    export interface RDSDBUpgradeDependencyFailureFault {
    }

    export interface RDSDeleteDBInstanceMessage {
        DBInstanceIdentifier: RDSString;
        SkipFinalSnapshot?: RDSBoolean;
        FinalDBSnapshotIdentifier?: RDSString;
    }

    export interface RDSDeleteDBParameterGroupMessage {
        DBParameterGroupName: RDSString;
    }

    export interface RDSDeleteDBSecurityGroupMessage {
        DBSecurityGroupName: RDSString;
    }

    export interface RDSDeleteDBSnapshotMessage {
        DBSnapshotIdentifier: RDSString;
    }

    export interface RDSDeleteDBSubnetGroupMessage {
        DBSubnetGroupName: RDSString;
    }

    export interface RDSDeleteEventSubscriptionMessage {
        SubscriptionName: RDSString;
    }

    export interface RDSDeleteOptionGroupMessage {
        OptionGroupName: RDSString;
    }

    export interface RDSDescribeDBEngineVersionsMessage {
        Engine?: RDSString;
        EngineVersion?: RDSString;
        DBParameterGroupFamily?: RDSString;
        MaxRecords?: RDSIntegerOptional;
        Marker?: RDSString;
        DefaultOnly?: RDSBoolean;
        ListSupportedCharacterSets?: RDSBooleanOptional;
    }

    export interface RDSDescribeDBInstancesMessage {
        DBInstanceIdentifier?: RDSString;
        MaxRecords?: RDSIntegerOptional;
        Marker?: RDSString;
    }

    export interface RDSDescribeDBParameterGroupsMessage {
        DBParameterGroupName?: RDSString;
        MaxRecords?: RDSIntegerOptional;
        Marker?: RDSString;
    }

    export interface RDSDescribeDBParametersMessage {
        DBParameterGroupName: RDSString;
        Source?: RDSString;
        MaxRecords?: RDSIntegerOptional;
        Marker?: RDSString;
    }

    export interface RDSDescribeDBSecurityGroupsMessage {
        DBSecurityGroupName?: RDSString;
        MaxRecords?: RDSIntegerOptional;
        Marker?: RDSString;
    }

    export interface RDSDescribeDBSnapshotsMessage {
        DBInstanceIdentifier?: RDSString;
        DBSnapshotIdentifier?: RDSString;
        SnapshotType?: RDSString;
        MaxRecords?: RDSIntegerOptional;
        Marker?: RDSString;
    }

    export interface RDSDescribeDBSubnetGroupsMessage {
        DBSubnetGroupName?: RDSString;
        MaxRecords?: RDSIntegerOptional;
        Marker?: RDSString;
    }

    export interface RDSDescribeEngineDefaultParametersMessage {
        DBParameterGroupFamily: RDSString;
        MaxRecords?: RDSIntegerOptional;
        Marker?: RDSString;
    }

    export interface RDSDescribeEventCategoriesMessage {
        SourceType?: RDSString;
    }

    export interface RDSDescribeEventSubscriptionsMessage {
        SubscriptionName?: RDSString;
        MaxRecords?: RDSIntegerOptional;
        Marker?: RDSString;
    }

    export interface RDSDescribeEventsMessage {
        SourceIdentifier?: RDSString;
        SourceType?: RDSSourceType;
        StartTime?: RDSTStamp;
        EndTime?: RDSTStamp;
        Duration?: RDSIntegerOptional;
        EventCategories?: RDSEventCategoriesList;
        MaxRecords?: RDSIntegerOptional;
        Marker?: RDSString;
    }

    export interface RDSDescribeOptionGroupOptionsMessage {
        EngineName: RDSString;
        MajorEngineVersion?: RDSString;
        MaxRecords?: RDSIntegerOptional;
        Marker?: RDSString;
    }

    export interface RDSDescribeOptionGroupsMessage {
        OptionGroupName?: RDSString;
        Marker?: RDSString;
        MaxRecords?: RDSIntegerOptional;
        EngineName?: RDSString;
        MajorEngineVersion?: RDSString;
    }

    export interface RDSDescribeOrderableDBInstanceOptionsMessage {
        Engine: RDSString;
        EngineVersion?: RDSString;
        DBInstanceClass?: RDSString;
        LicenseModel?: RDSString;
        Vpc?: RDSBooleanOptional;
        MaxRecords?: RDSIntegerOptional;
        Marker?: RDSString;
    }

    export interface RDSDescribeReservedDBInstancesMessage {
        ReservedDBInstanceId?: RDSString;
        ReservedDBInstancesOfferingId?: RDSString;
        DBInstanceClass?: RDSString;
        Duration?: RDSString;
        ProductDescription?: RDSString;
        OfferingType?: RDSString;
        MultiAZ?: RDSBooleanOptional;
        MaxRecords?: RDSIntegerOptional;
        Marker?: RDSString;
    }

    export interface RDSDescribeReservedDBInstancesOfferingsMessage {
        ReservedDBInstancesOfferingId?: RDSString;
        DBInstanceClass?: RDSString;
        Duration?: RDSString;
        ProductDescription?: RDSString;
        OfferingType?: RDSString;
        MultiAZ?: RDSBooleanOptional;
        MaxRecords?: RDSIntegerOptional;
        Marker?: RDSString;
    }

    export type RDSDouble = number;
    export interface RDSEC2SecurityGroup {
        Status?: RDSString;
        EC2SecurityGroupName?: RDSString;
        EC2SecurityGroupId?: RDSString;
        EC2SecurityGroupOwnerId?: RDSString;
    }

    export type RDSEC2SecurityGroupList = Array<RDSEC2SecurityGroup>;
    export interface RDSEndpoint {
        Address?: RDSString;
        Port?: RDSInteger;
    }

    export interface RDSEngineDefaults {
        DBParameterGroupFamily?: RDSString;
        Marker?: RDSString;
        Parameters?: RDSParametersList;
    }

    export interface RDSEvent {
        SourceIdentifier?: RDSString;
        SourceType?: RDSSourceType;
        Message?: RDSString;
        EventCategories?: RDSEventCategoriesList;
        Date?: RDSTStamp;
    }

    export type RDSEventCategoriesList = Array<RDSString>;
    export interface RDSEventCategoriesMap {
        SourceType?: RDSString;
        EventCategories?: RDSEventCategoriesList;
    }

    export type RDSEventCategoriesMapList = Array<RDSEventCategoriesMap>;
    export interface RDSEventCategoriesMessage {
        EventCategoriesMapList?: RDSEventCategoriesMapList;
    }

    export type RDSEventList = Array<RDSEvent>;
    export interface RDSEventSubscription {
        Id?: RDSString;
        CustomerAwsId?: RDSString;
        CustSubscriptionId?: RDSString;
        SnsTopicArn?: RDSString;
        Status?: RDSString;
        SubscriptionCreationTime?: RDSString;
        SourceType?: RDSString;
        SourceIdsList?: RDSSourceIdsList;
        EventCategoriesList?: RDSEventCategoriesList;
        Enabled?: RDSBoolean;
    }

    export interface RDSEventSubscriptionQuotaExceededFault {
    }

    export type RDSEventSubscriptionsList = Array<RDSEventSubscription>;
    export interface RDSEventSubscriptionsMessage {
        Marker?: RDSString;
        EventSubscriptionsList?: RDSEventSubscriptionsList;
    }

    export interface RDSEventsMessage {
        Marker?: RDSString;
        Events?: RDSEventList;
    }

    export interface RDSIPRange {
        Status?: RDSString;
        CIDRIP?: RDSString;
    }

    export type RDSIPRangeList = Array<RDSIPRange>;
    export interface RDSInstanceQuotaExceededFault {
    }

    export interface RDSInsufficientDBInstanceCapacityFault {
    }

    export type RDSInteger = number;
    export type RDSIntegerOptional = number;
    export interface RDSInvalidDBInstanceStateFault {
    }

    export interface RDSInvalidDBParameterGroupStateFault {
    }

    export interface RDSInvalidDBSecurityGroupStateFault {
    }

    export interface RDSInvalidDBSnapshotStateFault {
    }

    export interface RDSInvalidDBSubnetGroupStateFault {
    }

    export interface RDSInvalidDBSubnetStateFault {
    }

    export interface RDSInvalidEventSubscriptionStateFault {
    }

    export interface RDSInvalidOptionGroupStateFault {
    }

    export interface RDSInvalidRestoreFault {
    }

    export interface RDSInvalidSubnet {
    }

    export interface RDSInvalidVPCNetworkStateFault {
    }

    export type RDSKeyList = Array<RDSString>;
    export interface RDSListTagsForResourceMessage {
        ResourceName: RDSString;
    }

    export interface RDSModifyDBInstanceMessage {
        DBInstanceIdentifier: RDSString;
        AllocatedStorage?: RDSIntegerOptional;
        DBInstanceClass?: RDSString;
        DBSecurityGroups?: RDSDBSecurityGroupNameList;
        VpcSecurityGroupIds?: RDSVpcSecurityGroupIdList;
        ApplyImmediately?: RDSBoolean;
        MasterUserPassword?: RDSString;
        DBParameterGroupName?: RDSString;
        BackupRetentionPeriod?: RDSIntegerOptional;
        PreferredBackupWindow?: RDSString;
        PreferredMaintenanceWindow?: RDSString;
        MultiAZ?: RDSBooleanOptional;
        EngineVersion?: RDSString;
        AllowMajorVersionUpgrade?: RDSBoolean;
        AutoMinorVersionUpgrade?: RDSBooleanOptional;
        Iops?: RDSIntegerOptional;
        OptionGroupName?: RDSString;
        NewDBInstanceIdentifier?: RDSString;
    }

    export interface RDSModifyDBParameterGroupMessage {
        DBParameterGroupName: RDSString;
        Parameters: RDSParametersList;
    }

    export interface RDSModifyDBSubnetGroupMessage {
        DBSubnetGroupName: RDSString;
        DBSubnetGroupDescription?: RDSString;
        SubnetIds: RDSSubnetIdentifierList;
    }

    export interface RDSModifyEventSubscriptionMessage {
        SubscriptionName: RDSString;
        SnsTopicArn?: RDSString;
        SourceType?: RDSString;
        EventCategories?: RDSEventCategoriesList;
        Enabled?: RDSBooleanOptional;
    }

    export interface RDSModifyOptionGroupMessage {
        OptionGroupName: RDSString;
        OptionsToInclude?: RDSOptionConfigurationList;
        OptionsToRemove?: RDSOptionNamesList;
        ApplyImmediately?: RDSBoolean;
    }

    export interface RDSOption {
        OptionName?: RDSString;
        OptionDescription?: RDSString;
        Port?: RDSIntegerOptional;
        DBSecurityGroupMemberships?: RDSDBSecurityGroupMembershipList;
        VpcSecurityGroupMemberships?: RDSVpcSecurityGroupMembershipList;
    }

    export interface RDSOptionConfiguration {
        OptionName: RDSString;
        Port?: RDSIntegerOptional;
        DBSecurityGroupMemberships?: RDSDBSecurityGroupNameList;
        VpcSecurityGroupMemberships?: RDSVpcSecurityGroupIdList;
    }

    export type RDSOptionConfigurationList = Array<RDSOptionConfiguration>;
    export interface RDSOptionGroup {
        OptionGroupName?: RDSString;
        OptionGroupDescription?: RDSString;
        EngineName?: RDSString;
        MajorEngineVersion?: RDSString;
        Options?: RDSOptionsList;
        AllowsVpcAndNonVpcInstanceMemberships?: RDSBoolean;
        VpcId?: RDSString;
    }

    export interface RDSOptionGroupAlreadyExistsFault {
    }

    export interface RDSOptionGroupMembership {
        OptionGroupName?: RDSString;
        Status?: RDSString;
    }

    export interface RDSOptionGroupNotFoundFault {
    }

    export interface RDSOptionGroupOption {
        Name?: RDSString;
        Description?: RDSString;
        EngineName?: RDSString;
        MajorEngineVersion?: RDSString;
        MinimumRequiredMinorEngineVersion?: RDSString;
        PortRequired?: RDSBoolean;
        DefaultPort?: RDSIntegerOptional;
        OptionsDependedOn?: RDSOptionsDependedOn;
    }

    export type RDSOptionGroupOptionsList = Array<RDSOptionGroupOption>;
    export interface RDSOptionGroupOptionsMessage {
        OptionGroupOptions?: RDSOptionGroupOptionsList;
        Marker?: RDSString;
    }

    export interface RDSOptionGroupQuotaExceededFault {
    }

    export interface RDSOptionGroups {
        OptionGroupsList?: RDSOptionGroupsList;
        Marker?: RDSString;
    }

    export type RDSOptionGroupsList = Array<RDSOptionGroup>;
    export type RDSOptionNamesList = Array<RDSString>;
    export type RDSOptionsDependedOn = Array<RDSString>;
    export type RDSOptionsList = Array<RDSOption>;
    export interface RDSOrderableDBInstanceOption {
        Engine?: RDSString;
        EngineVersion?: RDSString;
        DBInstanceClass?: RDSString;
        LicenseModel?: RDSString;
        AvailabilityZones?: RDSAvailabilityZoneList;
        MultiAZCapable?: RDSBoolean;
        ReadReplicaCapable?: RDSBoolean;
        Vpc?: RDSBoolean;
    }

    export type RDSOrderableDBInstanceOptionsList = Array<RDSOrderableDBInstanceOption>;
    export interface RDSOrderableDBInstanceOptionsMessage {
        OrderableDBInstanceOptions?: RDSOrderableDBInstanceOptionsList;
        Marker?: RDSString;
    }

    export interface RDSParameter {
        ParameterName?: RDSString;
        ParameterValue?: RDSString;
        Description?: RDSString;
        Source?: RDSString;
        ApplyType?: RDSString;
        DataType?: RDSString;
        AllowedValues?: RDSString;
        IsModifiable?: RDSBoolean;
        MinimumEngineVersion?: RDSString;
        ApplyMethod?: RDSApplyMethod;
    }

    export type RDSParametersList = Array<RDSParameter>;
    export interface RDSPendingModifiedValues {
        DBInstanceClass?: RDSString;
        AllocatedStorage?: RDSIntegerOptional;
        MasterUserPassword?: RDSString;
        Port?: RDSIntegerOptional;
        BackupRetentionPeriod?: RDSIntegerOptional;
        MultiAZ?: RDSBooleanOptional;
        EngineVersion?: RDSString;
        Iops?: RDSIntegerOptional;
        DBInstanceIdentifier?: RDSString;
    }

    export interface RDSPointInTimeRestoreNotEnabledFault {
    }

    export interface RDSPromoteReadReplicaMessage {
        DBInstanceIdentifier: RDSString;
        BackupRetentionPeriod?: RDSIntegerOptional;
        PreferredBackupWindow?: RDSString;
    }

    export interface RDSProvisionedIopsNotAvailableInAZFault {
    }

    export interface RDSPurchaseReservedDBInstancesOfferingMessage {
        ReservedDBInstancesOfferingId: RDSString;
        ReservedDBInstanceId?: RDSString;
        DBInstanceCount?: RDSIntegerOptional;
    }

    export type RDSReadReplicaDBInstanceIdentifierList = Array<RDSString>;
    export interface RDSRebootDBInstanceMessage {
        DBInstanceIdentifier: RDSString;
        ForceFailover?: RDSBooleanOptional;
    }

    export interface RDSRecurringCharge {
        RecurringChargeAmount?: RDSDouble;
        RecurringChargeFrequency?: RDSString;
    }

    export type RDSRecurringChargeList = Array<RDSRecurringCharge>;
    export interface RDSRemoveSourceIdentifierFromSubscriptionMessage {
        SubscriptionName: RDSString;
        SourceIdentifier: RDSString;
    }

    export interface RDSRemoveTagsFromResourceMessage {
        ResourceName: RDSString;
        TagKeys: RDSKeyList;
    }

    export interface RDSReservedDBInstance {
        ReservedDBInstanceId?: RDSString;
        ReservedDBInstancesOfferingId?: RDSString;
        DBInstanceClass?: RDSString;
        StartTime?: RDSTStamp;
        Duration?: RDSInteger;
        FixedPrice?: RDSDouble;
        UsagePrice?: RDSDouble;
        CurrencyCode?: RDSString;
        DBInstanceCount?: RDSInteger;
        ProductDescription?: RDSString;
        OfferingType?: RDSString;
        MultiAZ?: RDSBoolean;
        State?: RDSString;
        RecurringCharges?: RDSRecurringChargeList;
    }

    export interface RDSReservedDBInstanceAlreadyExistsFault {
    }

    export type RDSReservedDBInstanceList = Array<RDSReservedDBInstance>;
    export interface RDSReservedDBInstanceMessage {
        Marker?: RDSString;
        ReservedDBInstances?: RDSReservedDBInstanceList;
    }

    export interface RDSReservedDBInstanceNotFoundFault {
    }

    export interface RDSReservedDBInstanceQuotaExceededFault {
    }

    export interface RDSReservedDBInstancesOffering {
        ReservedDBInstancesOfferingId?: RDSString;
        DBInstanceClass?: RDSString;
        Duration?: RDSInteger;
        FixedPrice?: RDSDouble;
        UsagePrice?: RDSDouble;
        CurrencyCode?: RDSString;
        ProductDescription?: RDSString;
        OfferingType?: RDSString;
        MultiAZ?: RDSBoolean;
        RecurringCharges?: RDSRecurringChargeList;
    }

    export type RDSReservedDBInstancesOfferingList = Array<RDSReservedDBInstancesOffering>;
    export interface RDSReservedDBInstancesOfferingMessage {
        Marker?: RDSString;
        ReservedDBInstancesOfferings?: RDSReservedDBInstancesOfferingList;
    }

    export interface RDSReservedDBInstancesOfferingNotFoundFault {
    }

    export interface RDSResetDBParameterGroupMessage {
        DBParameterGroupName: RDSString;
        ResetAllParameters?: RDSBoolean;
        Parameters?: RDSParametersList;
    }

    export interface RDSRestoreDBInstanceFromDBSnapshotMessage {
        DBInstanceIdentifier: RDSString;
        DBSnapshotIdentifier: RDSString;
        DBInstanceClass?: RDSString;
        Port?: RDSIntegerOptional;
        AvailabilityZone?: RDSString;
        DBSubnetGroupName?: RDSString;
        MultiAZ?: RDSBooleanOptional;
        PubliclyAccessible?: RDSBooleanOptional;
        AutoMinorVersionUpgrade?: RDSBooleanOptional;
        LicenseModel?: RDSString;
        DBName?: RDSString;
        Engine?: RDSString;
        Iops?: RDSIntegerOptional;
        OptionGroupName?: RDSString;
    }

    export interface RDSRestoreDBInstanceToPointInTimeMessage {
        SourceDBInstanceIdentifier: RDSString;
        TargetDBInstanceIdentifier: RDSString;
        RestoreTime?: RDSTStamp;
        UseLatestRestorableTime?: RDSBoolean;
        DBInstanceClass?: RDSString;
        Port?: RDSIntegerOptional;
        AvailabilityZone?: RDSString;
        DBSubnetGroupName?: RDSString;
        MultiAZ?: RDSBooleanOptional;
        PubliclyAccessible?: RDSBooleanOptional;
        AutoMinorVersionUpgrade?: RDSBooleanOptional;
        LicenseModel?: RDSString;
        DBName?: RDSString;
        Engine?: RDSString;
        Iops?: RDSIntegerOptional;
        OptionGroupName?: RDSString;
    }

    export interface RDSRevokeDBSecurityGroupIngressMessage {
        DBSecurityGroupName: RDSString;
        CIDRIP?: RDSString;
        EC2SecurityGroupName?: RDSString;
        EC2SecurityGroupId?: RDSString;
        EC2SecurityGroupOwnerId?: RDSString;
    }

    export interface RDSSNSInvalidTopicFault {
    }

    export interface RDSSNSNoAuthorizationFault {
    }

    export interface RDSSNSTopicArnNotFoundFault {
    }

    export interface RDSSnapshotQuotaExceededFault {
    }

    export type RDSSourceIdsList = Array<RDSString>;
    export interface RDSSourceNotFoundFault {
    }

    export type RDSSourceType = string;
    export interface RDSStorageQuotaExceededFault {
    }

    export type RDSString = string;
    export interface RDSSubnet {
        SubnetIdentifier?: RDSString;
        SubnetAvailabilityZone?: RDSAvailabilityZone;
        SubnetStatus?: RDSString;
    }

    export interface RDSSubnetAlreadyInUse {
    }

    export type RDSSubnetIdentifierList = Array<RDSString>;
    export type RDSSubnetList = Array<RDSSubnet>;
    export interface RDSSubscriptionAlreadyExistFault {
    }

    export interface RDSSubscriptionCategoryNotFoundFault {
    }

    export interface RDSSubscriptionNotFoundFault {
    }

    export type RDSSupportedCharacterSetsList = Array<RDSCharacterSet>;
    export type RDSTStamp = number;
    export interface RDSTag {
        Key?: RDSString;
        Value?: RDSString;
    }

    export type RDSTagList = Array<RDSTag>;
    export interface RDSTagListMessage {
        TagList?: RDSTagList;
    }

    export type RDSVpcSecurityGroupIdList = Array<RDSString>;
    export interface RDSVpcSecurityGroupMembership {
        VpcSecurityGroupId?: RDSString;
        Status?: RDSString;
    }

    export type RDSVpcSecurityGroupMembershipList = Array<RDSVpcSecurityGroupMembership>;
    export interface RDSAddSourceIdentifierToSubscriptionResult {
        EventSubscription?: RDSEventSubscription;
    }

    export interface RDSAuthorizeDBSecurityGroupIngressResult {
        DBSecurityGroup?: RDSDBSecurityGroup;
    }

    export interface RDSCopyDBSnapshotResult {
        DBSnapshot?: RDSDBSnapshot;
    }

    export interface RDSCreateDBInstanceResult {
        DBInstance?: RDSDBInstance;
    }

    export interface RDSCreateDBInstanceReadReplicaResult {
        DBInstance?: RDSDBInstance;
    }

    export interface RDSCreateDBParameterGroupResult {
        DBParameterGroup?: RDSDBParameterGroup;
    }

    export interface RDSCreateDBSecurityGroupResult {
        DBSecurityGroup?: RDSDBSecurityGroup;
    }

    export interface RDSCreateDBSnapshotResult {
        DBSnapshot?: RDSDBSnapshot;
    }

    export interface RDSCreateDBSubnetGroupResult {
        DBSubnetGroup?: RDSDBSubnetGroup;
    }

    export interface RDSCreateEventSubscriptionResult {
        EventSubscription?: RDSEventSubscription;
    }

    export interface RDSCreateOptionGroupResult {
        OptionGroup?: RDSOptionGroup;
    }

    export interface RDSDeleteDBInstanceResult {
        DBInstance?: RDSDBInstance;
    }

    export interface RDSDeleteDBSnapshotResult {
        DBSnapshot?: RDSDBSnapshot;
    }

    export interface RDSDeleteEventSubscriptionResult {
        EventSubscription?: RDSEventSubscription;
    }

    export interface RDSDescribeEngineDefaultParametersResult {
        EngineDefaults?: RDSEngineDefaults;
    }

    export interface RDSModifyDBInstanceResult {
        DBInstance?: RDSDBInstance;
    }

    export interface RDSModifyDBSubnetGroupResult {
        DBSubnetGroup?: RDSDBSubnetGroup;
    }

    export interface RDSModifyEventSubscriptionResult {
        EventSubscription?: RDSEventSubscription;
    }

    export interface RDSModifyOptionGroupResult {
        OptionGroup?: RDSOptionGroup;
    }

    export interface RDSPromoteReadReplicaResult {
        DBInstance?: RDSDBInstance;
    }

    export interface RDSPurchaseReservedDBInstancesOfferingResult {
        ReservedDBInstance?: RDSReservedDBInstance;
    }

    export interface RDSRebootDBInstanceResult {
        DBInstance?: RDSDBInstance;
    }

    export interface RDSRemoveSourceIdentifierFromSubscriptionResult {
        EventSubscription?: RDSEventSubscription;
    }

    export interface RDSRestoreDBInstanceFromDBSnapshotResult {
        DBInstance?: RDSDBInstance;
    }

    export interface RDSRestoreDBInstanceToPointInTimeResult {
        DBInstance?: RDSDBInstance;
    }

    export interface RDSRevokeDBSecurityGroupIngressResult {
        DBSecurityGroup?: RDSDBSecurityGroup;
    }

}
