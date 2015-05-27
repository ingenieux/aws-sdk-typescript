// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class RDS {
      constructor(options?: any);
      addSourceIdentifierToSubscription(params: AddSourceIdentifierToSubscriptionMessage, callback: (err: SubscriptionNotFoundFault|SourceNotFoundFault|any, data: AddSourceIdentifierToSubscriptionResult|any) => void): void;
      addTagsToResource(params: AddTagsToResourceMessage, callback: (err: DBInstanceNotFoundFault|DBSnapshotNotFoundFault|any, data: any) => void): void;
      authorizeDBSecurityGroupIngress(params: AuthorizeDBSecurityGroupIngressMessage, callback: (err: DBSecurityGroupNotFoundFault|InvalidDBSecurityGroupStateFault|AuthorizationAlreadyExistsFault|AuthorizationQuotaExceededFault|any, data: AuthorizeDBSecurityGroupIngressResult|any) => void): void;
      copyDBSnapshot(params: CopyDBSnapshotMessage, callback: (err: DBSnapshotAlreadyExistsFault|DBSnapshotNotFoundFault|InvalidDBSnapshotStateFault|SnapshotQuotaExceededFault|any, data: CopyDBSnapshotResult|any) => void): void;
      createDBInstance(params: CreateDBInstanceMessage, callback: (err: DBInstanceAlreadyExistsFault|InsufficientDBInstanceCapacityFault|DBParameterGroupNotFoundFault|DBSecurityGroupNotFoundFault|InstanceQuotaExceededFault|StorageQuotaExceededFault|DBSubnetGroupNotFoundFault|DBSubnetGroupDoesNotCoverEnoughAZs|InvalidSubnet|InvalidVPCNetworkStateFault|ProvisionedIopsNotAvailableInAZFault|OptionGroupNotFoundFault|any, data: CreateDBInstanceResult|any) => void): void;
      createDBInstanceReadReplica(params: CreateDBInstanceReadReplicaMessage, callback: (err: DBInstanceAlreadyExistsFault|InsufficientDBInstanceCapacityFault|DBParameterGroupNotFoundFault|DBSecurityGroupNotFoundFault|InstanceQuotaExceededFault|StorageQuotaExceededFault|DBInstanceNotFoundFault|InvalidDBInstanceStateFault|DBSubnetGroupNotFoundFault|DBSubnetGroupDoesNotCoverEnoughAZs|InvalidSubnet|InvalidVPCNetworkStateFault|ProvisionedIopsNotAvailableInAZFault|OptionGroupNotFoundFault|any, data: CreateDBInstanceReadReplicaResult|any) => void): void;
      createDBParameterGroup(params: CreateDBParameterGroupMessage, callback: (err: DBParameterGroupQuotaExceededFault|DBParameterGroupAlreadyExistsFault|any, data: CreateDBParameterGroupResult|any) => void): void;
      createDBSecurityGroup(params: CreateDBSecurityGroupMessage, callback: (err: DBSecurityGroupAlreadyExistsFault|DBSecurityGroupQuotaExceededFault|DBSecurityGroupNotSupportedFault|any, data: CreateDBSecurityGroupResult|any) => void): void;
      createDBSnapshot(params: CreateDBSnapshotMessage, callback: (err: DBSnapshotAlreadyExistsFault|InvalidDBInstanceStateFault|DBInstanceNotFoundFault|SnapshotQuotaExceededFault|any, data: CreateDBSnapshotResult|any) => void): void;
      createDBSubnetGroup(params: CreateDBSubnetGroupMessage, callback: (err: DBSubnetGroupAlreadyExistsFault|DBSubnetGroupQuotaExceededFault|DBSubnetQuotaExceededFault|DBSubnetGroupDoesNotCoverEnoughAZs|InvalidSubnet|any, data: CreateDBSubnetGroupResult|any) => void): void;
      createEventSubscription(params: CreateEventSubscriptionMessage, callback: (err: EventSubscriptionQuotaExceededFault|SubscriptionAlreadyExistFault|SNSInvalidTopicFault|SNSNoAuthorizationFault|SNSTopicArnNotFoundFault|SubscriptionCategoryNotFoundFault|SourceNotFoundFault|any, data: CreateEventSubscriptionResult|any) => void): void;
      createOptionGroup(params: CreateOptionGroupMessage, callback: (err: OptionGroupAlreadyExistsFault|OptionGroupQuotaExceededFault|any, data: CreateOptionGroupResult|any) => void): void;
      deleteDBInstance(params: DeleteDBInstanceMessage, callback: (err: DBInstanceNotFoundFault|InvalidDBInstanceStateFault|DBSnapshotAlreadyExistsFault|SnapshotQuotaExceededFault|any, data: DeleteDBInstanceResult|any) => void): void;
      deleteDBParameterGroup(params: DeleteDBParameterGroupMessage, callback: (err: InvalidDBParameterGroupStateFault|DBParameterGroupNotFoundFault|any, data: any) => void): void;
      deleteDBSecurityGroup(params: DeleteDBSecurityGroupMessage, callback: (err: InvalidDBSecurityGroupStateFault|DBSecurityGroupNotFoundFault|any, data: any) => void): void;
      deleteDBSnapshot(params: DeleteDBSnapshotMessage, callback: (err: InvalidDBSnapshotStateFault|DBSnapshotNotFoundFault|any, data: DeleteDBSnapshotResult|any) => void): void;
      deleteDBSubnetGroup(params: DeleteDBSubnetGroupMessage, callback: (err: InvalidDBSubnetGroupStateFault|InvalidDBSubnetStateFault|DBSubnetGroupNotFoundFault|any, data: any) => void): void;
      deleteEventSubscription(params: DeleteEventSubscriptionMessage, callback: (err: SubscriptionNotFoundFault|InvalidEventSubscriptionStateFault|any, data: DeleteEventSubscriptionResult|any) => void): void;
      deleteOptionGroup(params: DeleteOptionGroupMessage, callback: (err: OptionGroupNotFoundFault|InvalidOptionGroupStateFault|any, data: any) => void): void;
      describeDBEngineVersions(params: DescribeDBEngineVersionsMessage, callback: (err: any, data: DBEngineVersionMessage|any) => void): void;
      describeDBInstances(params: DescribeDBInstancesMessage, callback: (err: DBInstanceNotFoundFault|any, data: DBInstanceMessage|any) => void): void;
      describeDBParameterGroups(params: DescribeDBParameterGroupsMessage, callback: (err: DBParameterGroupNotFoundFault|any, data: DBParameterGroupsMessage|any) => void): void;
      describeDBParameters(params: DescribeDBParametersMessage, callback: (err: DBParameterGroupNotFoundFault|any, data: DBParameterGroupDetails|any) => void): void;
      describeDBSecurityGroups(params: DescribeDBSecurityGroupsMessage, callback: (err: DBSecurityGroupNotFoundFault|any, data: DBSecurityGroupMessage|any) => void): void;
      describeDBSnapshots(params: DescribeDBSnapshotsMessage, callback: (err: DBSnapshotNotFoundFault|any, data: DBSnapshotMessage|any) => void): void;
      describeDBSubnetGroups(params: DescribeDBSubnetGroupsMessage, callback: (err: DBSubnetGroupNotFoundFault|any, data: DBSubnetGroupMessage|any) => void): void;
      describeEngineDefaultParameters(params: DescribeEngineDefaultParametersMessage, callback: (err: any, data: DescribeEngineDefaultParametersResult|any) => void): void;
      describeEventCategories(params: DescribeEventCategoriesMessage, callback: (err: any, data: EventCategoriesMessage|any) => void): void;
      describeEventSubscriptions(params: DescribeEventSubscriptionsMessage, callback: (err: SubscriptionNotFoundFault|any, data: EventSubscriptionsMessage|any) => void): void;
      describeEvents(params: DescribeEventsMessage, callback: (err: any, data: EventsMessage|any) => void): void;
      describeOptionGroupOptions(params: DescribeOptionGroupOptionsMessage, callback: (err: any, data: OptionGroupOptionsMessage|any) => void): void;
      describeOptionGroups(params: DescribeOptionGroupsMessage, callback: (err: OptionGroupNotFoundFault|any, data: OptionGroups|any) => void): void;
      describeOrderableDBInstanceOptions(params: DescribeOrderableDBInstanceOptionsMessage, callback: (err: any, data: OrderableDBInstanceOptionsMessage|any) => void): void;
      describeReservedDBInstances(params: DescribeReservedDBInstancesMessage, callback: (err: ReservedDBInstanceNotFoundFault|any, data: ReservedDBInstanceMessage|any) => void): void;
      describeReservedDBInstancesOfferings(params: DescribeReservedDBInstancesOfferingsMessage, callback: (err: ReservedDBInstancesOfferingNotFoundFault|any, data: ReservedDBInstancesOfferingMessage|any) => void): void;
      listTagsForResource(params: ListTagsForResourceMessage, callback: (err: DBInstanceNotFoundFault|DBSnapshotNotFoundFault|any, data: TagListMessage|any) => void): void;
      modifyDBInstance(params: ModifyDBInstanceMessage, callback: (err: InvalidDBInstanceStateFault|InvalidDBSecurityGroupStateFault|DBInstanceAlreadyExistsFault|DBInstanceNotFoundFault|DBSecurityGroupNotFoundFault|DBParameterGroupNotFoundFault|InsufficientDBInstanceCapacityFault|StorageQuotaExceededFault|InvalidVPCNetworkStateFault|ProvisionedIopsNotAvailableInAZFault|OptionGroupNotFoundFault|DBUpgradeDependencyFailureFault|any, data: ModifyDBInstanceResult|any) => void): void;
      modifyDBParameterGroup(params: ModifyDBParameterGroupMessage, callback: (err: DBParameterGroupNotFoundFault|InvalidDBParameterGroupStateFault|any, data: DBParameterGroupNameMessage|any) => void): void;
      modifyDBSubnetGroup(params: ModifyDBSubnetGroupMessage, callback: (err: DBSubnetGroupNotFoundFault|DBSubnetQuotaExceededFault|SubnetAlreadyInUse|DBSubnetGroupDoesNotCoverEnoughAZs|InvalidSubnet|any, data: ModifyDBSubnetGroupResult|any) => void): void;
      modifyEventSubscription(params: ModifyEventSubscriptionMessage, callback: (err: EventSubscriptionQuotaExceededFault|SubscriptionNotFoundFault|SNSInvalidTopicFault|SNSNoAuthorizationFault|SNSTopicArnNotFoundFault|SubscriptionCategoryNotFoundFault|any, data: ModifyEventSubscriptionResult|any) => void): void;
      modifyOptionGroup(params: ModifyOptionGroupMessage, callback: (err: InvalidOptionGroupStateFault|OptionGroupNotFoundFault|any, data: ModifyOptionGroupResult|any) => void): void;
      promoteReadReplica(params: PromoteReadReplicaMessage, callback: (err: InvalidDBInstanceStateFault|DBInstanceNotFoundFault|any, data: PromoteReadReplicaResult|any) => void): void;
      purchaseReservedDBInstancesOffering(params: PurchaseReservedDBInstancesOfferingMessage, callback: (err: ReservedDBInstancesOfferingNotFoundFault|ReservedDBInstanceAlreadyExistsFault|ReservedDBInstanceQuotaExceededFault|any, data: PurchaseReservedDBInstancesOfferingResult|any) => void): void;
      rebootDBInstance(params: RebootDBInstanceMessage, callback: (err: InvalidDBInstanceStateFault|DBInstanceNotFoundFault|any, data: RebootDBInstanceResult|any) => void): void;
      removeSourceIdentifierFromSubscription(params: RemoveSourceIdentifierFromSubscriptionMessage, callback: (err: SubscriptionNotFoundFault|SourceNotFoundFault|any, data: RemoveSourceIdentifierFromSubscriptionResult|any) => void): void;
      removeTagsFromResource(params: RemoveTagsFromResourceMessage, callback: (err: DBInstanceNotFoundFault|DBSnapshotNotFoundFault|any, data: any) => void): void;
      resetDBParameterGroup(params: ResetDBParameterGroupMessage, callback: (err: InvalidDBParameterGroupStateFault|DBParameterGroupNotFoundFault|any, data: DBParameterGroupNameMessage|any) => void): void;
      restoreDBInstanceFromDBSnapshot(params: RestoreDBInstanceFromDBSnapshotMessage, callback: (err: DBInstanceAlreadyExistsFault|DBSnapshotNotFoundFault|InstanceQuotaExceededFault|InsufficientDBInstanceCapacityFault|InvalidDBSnapshotStateFault|StorageQuotaExceededFault|InvalidVPCNetworkStateFault|InvalidRestoreFault|DBSubnetGroupNotFoundFault|DBSubnetGroupDoesNotCoverEnoughAZs|InvalidSubnet|ProvisionedIopsNotAvailableInAZFault|OptionGroupNotFoundFault|any, data: RestoreDBInstanceFromDBSnapshotResult|any) => void): void;
      restoreDBInstanceToPointInTime(params: RestoreDBInstanceToPointInTimeMessage, callback: (err: DBInstanceAlreadyExistsFault|DBInstanceNotFoundFault|InstanceQuotaExceededFault|InsufficientDBInstanceCapacityFault|InvalidDBInstanceStateFault|PointInTimeRestoreNotEnabledFault|StorageQuotaExceededFault|InvalidVPCNetworkStateFault|InvalidRestoreFault|DBSubnetGroupNotFoundFault|DBSubnetGroupDoesNotCoverEnoughAZs|InvalidSubnet|ProvisionedIopsNotAvailableInAZFault|OptionGroupNotFoundFault|any, data: RestoreDBInstanceToPointInTimeResult|any) => void): void;
      revokeDBSecurityGroupIngress(params: RevokeDBSecurityGroupIngressMessage, callback: (err: DBSecurityGroupNotFoundFault|AuthorizationNotFoundFault|InvalidDBSecurityGroupStateFault|any, data: RevokeDBSecurityGroupIngressResult|any) => void): void;
    }

    export interface AddSourceIdentifierToSubscriptionMessage {
      SubscriptionName: String;
      SourceIdentifier: String;
    }


    export interface AddTagsToResourceMessage {
      ResourceName: String;
      Tags: TagList;
    }


    export type ApplyMethod = string;

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


    export interface AvailabilityZone {
      Name?: String;
      ProvisionedIopsCapable?: Boolean;
    }


    export type AvailabilityZoneList = Array<AvailabilityZone>;

    export type Boolean = boolean;

    export type BooleanOptional = boolean;

    export interface CharacterSet {
      CharacterSetName?: String;
      CharacterSetDescription?: String;
    }


    export interface CopyDBSnapshotMessage {
      SourceDBSnapshotIdentifier: String;
      TargetDBSnapshotIdentifier: String;
    }


    export interface CreateDBInstanceMessage {
      DBName?: String;
      DBInstanceIdentifier: String;
      AllocatedStorage: IntegerOptional;
      DBInstanceClass: String;
      Engine: String;
      MasterUsername: String;
      MasterUserPassword: String;
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
    }


    export interface CreateDBParameterGroupMessage {
      DBParameterGroupName: String;
      DBParameterGroupFamily: String;
      Description: String;
    }


    export interface CreateDBSecurityGroupMessage {
      DBSecurityGroupName: String;
      DBSecurityGroupDescription: String;
    }


    export interface CreateDBSnapshotMessage {
      DBSnapshotIdentifier: String;
      DBInstanceIdentifier: String;
    }


    export interface CreateDBSubnetGroupMessage {
      DBSubnetGroupName: String;
      DBSubnetGroupDescription: String;
      SubnetIds: SubnetIdentifierList;
    }


    export interface CreateEventSubscriptionMessage {
      SubscriptionName: String;
      SnsTopicArn: String;
      SourceType?: String;
      EventCategories?: EventCategoriesList;
      SourceIds?: SourceIdsList;
      Enabled?: BooleanOptional;
    }


    export interface CreateOptionGroupMessage {
      OptionGroupName: String;
      EngineName: String;
      MajorEngineVersion: String;
      OptionGroupDescription: String;
    }


    export interface DBEngineVersion {
      Engine?: String;
      EngineVersion?: String;
      DBParameterGroupFamily?: String;
      DBEngineDescription?: String;
      DBEngineVersionDescription?: String;
      DefaultCharacterSet?: CharacterSet;
      SupportedCharacterSets?: SupportedCharacterSetsList;
    }


    export type DBEngineVersionList = Array<DBEngineVersion>;

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
      OptionGroupMembership?: OptionGroupMembership;
      CharacterSetName?: String;
      SecondaryAvailabilityZone?: String;
      PubliclyAccessible?: Boolean;
    }


    export interface DBInstanceAlreadyExistsFault {
    }


    export type DBInstanceList = Array<DBInstance>;

    export interface DBInstanceMessage {
      Marker?: String;
      DBInstances?: DBInstanceList;
    }


    export interface DBInstanceNotFoundFault {
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


    export type DBParameterGroupList = Array<DBParameterGroup>;

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


    export type DBParameterGroupStatusList = Array<DBParameterGroupStatus>;

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


    export type DBSecurityGroupMembershipList = Array<DBSecurityGroupMembership>;

    export interface DBSecurityGroupMessage {
      Marker?: String;
      DBSecurityGroups?: DBSecurityGroups;
    }


    export type DBSecurityGroupNameList = Array<String>;

    export interface DBSecurityGroupNotFoundFault {
    }


    export interface DBSecurityGroupNotSupportedFault {
    }


    export interface DBSecurityGroupQuotaExceededFault {
    }


    export type DBSecurityGroups = Array<DBSecurityGroup>;

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
    }


    export interface DBSnapshotAlreadyExistsFault {
    }


    export type DBSnapshotList = Array<DBSnapshot>;

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


    export interface DBSubnetGroupNotFoundFault {
    }


    export interface DBSubnetGroupQuotaExceededFault {
    }


    export type DBSubnetGroups = Array<DBSubnetGroup>;

    export interface DBSubnetQuotaExceededFault {
    }


    export interface DBUpgradeDependencyFailureFault {
    }


    export interface DeleteDBInstanceMessage {
      DBInstanceIdentifier: String;
      SkipFinalSnapshot?: Boolean;
      FinalDBSnapshotIdentifier?: String;
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


    export interface DeleteDBSubnetGroupMessage {
      DBSubnetGroupName: String;
    }


    export interface DeleteEventSubscriptionMessage {
      SubscriptionName: String;
    }


    export interface DeleteOptionGroupMessage {
      OptionGroupName: String;
    }


    export interface DescribeDBEngineVersionsMessage {
      Engine?: String;
      EngineVersion?: String;
      DBParameterGroupFamily?: String;
      MaxRecords?: IntegerOptional;
      Marker?: String;
      DefaultOnly?: Boolean;
      ListSupportedCharacterSets?: BooleanOptional;
    }


    export interface DescribeDBInstancesMessage {
      DBInstanceIdentifier?: String;
      MaxRecords?: IntegerOptional;
      Marker?: String;
    }


    export interface DescribeDBParameterGroupsMessage {
      DBParameterGroupName?: String;
      MaxRecords?: IntegerOptional;
      Marker?: String;
    }


    export interface DescribeDBParametersMessage {
      DBParameterGroupName: String;
      Source?: String;
      MaxRecords?: IntegerOptional;
      Marker?: String;
    }


    export interface DescribeDBSecurityGroupsMessage {
      DBSecurityGroupName?: String;
      MaxRecords?: IntegerOptional;
      Marker?: String;
    }


    export interface DescribeDBSnapshotsMessage {
      DBInstanceIdentifier?: String;
      DBSnapshotIdentifier?: String;
      SnapshotType?: String;
      MaxRecords?: IntegerOptional;
      Marker?: String;
    }


    export interface DescribeDBSubnetGroupsMessage {
      DBSubnetGroupName?: String;
      MaxRecords?: IntegerOptional;
      Marker?: String;
    }


    export interface DescribeEngineDefaultParametersMessage {
      DBParameterGroupFamily: String;
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
      EventCategories?: EventCategoriesList;
      MaxRecords?: IntegerOptional;
      Marker?: String;
    }


    export interface DescribeOptionGroupOptionsMessage {
      EngineName: String;
      MajorEngineVersion?: String;
      MaxRecords?: IntegerOptional;
      Marker?: String;
    }


    export interface DescribeOptionGroupsMessage {
      OptionGroupName?: String;
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
      MaxRecords?: IntegerOptional;
      Marker?: String;
    }


    export interface DescribeReservedDBInstancesMessage {
      ReservedDBInstanceId?: String;
      ReservedDBInstancesOfferingId?: String;
      DBInstanceClass?: String;
      Duration?: String;
      ProductDescription?: String;
      OfferingType?: String;
      MultiAZ?: BooleanOptional;
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
      MaxRecords?: IntegerOptional;
      Marker?: String;
    }


    export type Double = number;

    export interface EC2SecurityGroup {
      Status?: String;
      EC2SecurityGroupName?: String;
      EC2SecurityGroupId?: String;
      EC2SecurityGroupOwnerId?: String;
    }


    export type EC2SecurityGroupList = Array<EC2SecurityGroup>;

    export interface Endpoint {
      Address?: String;
      Port?: Integer;
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


    export type EventCategoriesList = Array<String>;

    export interface EventCategoriesMap {
      SourceType?: String;
      EventCategories?: EventCategoriesList;
    }


    export type EventCategoriesMapList = Array<EventCategoriesMap>;

    export interface EventCategoriesMessage {
      EventCategoriesMapList?: EventCategoriesMapList;
    }


    export type EventList = Array<Event>;

    export interface EventSubscription {
      Id?: String;
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


    export type EventSubscriptionsList = Array<EventSubscription>;

    export interface EventSubscriptionsMessage {
      Marker?: String;
      EventSubscriptionsList?: EventSubscriptionsList;
    }


    export interface EventsMessage {
      Marker?: String;
      Events?: EventList;
    }


    export interface IPRange {
      Status?: String;
      CIDRIP?: String;
    }


    export type IPRangeList = Array<IPRange>;

    export interface InstanceQuotaExceededFault {
    }


    export interface InsufficientDBInstanceCapacityFault {
    }


    export type Integer = number;

    export type IntegerOptional = number;

    export interface InvalidDBInstanceStateFault {
    }


    export interface InvalidDBParameterGroupStateFault {
    }


    export interface InvalidDBSecurityGroupStateFault {
    }


    export interface InvalidDBSnapshotStateFault {
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


    export type KeyList = Array<String>;

    export interface ListTagsForResourceMessage {
      ResourceName: String;
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
    }


    export interface ModifyDBParameterGroupMessage {
      DBParameterGroupName: String;
      Parameters: ParametersList;
    }


    export interface ModifyDBSubnetGroupMessage {
      DBSubnetGroupName: String;
      DBSubnetGroupDescription?: String;
      SubnetIds: SubnetIdentifierList;
    }


    export interface ModifyEventSubscriptionMessage {
      SubscriptionName: String;
      SnsTopicArn?: String;
      SourceType?: String;
      EventCategories?: EventCategoriesList;
      Enabled?: BooleanOptional;
    }


    export interface ModifyOptionGroupMessage {
      OptionGroupName: String;
      OptionsToInclude?: OptionConfigurationList;
      OptionsToRemove?: OptionNamesList;
      ApplyImmediately?: Boolean;
    }


    export interface Option {
      OptionName?: String;
      OptionDescription?: String;
      Port?: IntegerOptional;
      DBSecurityGroupMemberships?: DBSecurityGroupMembershipList;
      VpcSecurityGroupMemberships?: VpcSecurityGroupMembershipList;
    }


    export interface OptionConfiguration {
      OptionName: String;
      Port?: IntegerOptional;
      DBSecurityGroupMemberships?: DBSecurityGroupNameList;
      VpcSecurityGroupMemberships?: VpcSecurityGroupIdList;
    }


    export type OptionConfigurationList = Array<OptionConfiguration>;

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
    }


    export type OptionGroupOptionsList = Array<OptionGroupOption>;

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


    export type OptionGroupsList = Array<OptionGroup>;

    export type OptionNamesList = Array<String>;

    export type OptionsDependedOn = Array<String>;

    export type OptionsList = Array<Option>;

    export interface OrderableDBInstanceOption {
      Engine?: String;
      EngineVersion?: String;
      DBInstanceClass?: String;
      LicenseModel?: String;
      AvailabilityZones?: AvailabilityZoneList;
      MultiAZCapable?: Boolean;
      ReadReplicaCapable?: Boolean;
      Vpc?: Boolean;
    }


    export type OrderableDBInstanceOptionsList = Array<OrderableDBInstanceOption>;

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


    export type ParametersList = Array<Parameter>;

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
    }


    export interface PointInTimeRestoreNotEnabledFault {
    }


    export interface PromoteReadReplicaMessage {
      DBInstanceIdentifier: String;
      BackupRetentionPeriod?: IntegerOptional;
      PreferredBackupWindow?: String;
    }


    export interface ProvisionedIopsNotAvailableInAZFault {
    }


    export interface PurchaseReservedDBInstancesOfferingMessage {
      ReservedDBInstancesOfferingId: String;
      ReservedDBInstanceId?: String;
      DBInstanceCount?: IntegerOptional;
    }


    export type ReadReplicaDBInstanceIdentifierList = Array<String>;

    export interface RebootDBInstanceMessage {
      DBInstanceIdentifier: String;
      ForceFailover?: BooleanOptional;
    }


    export interface RecurringCharge {
      RecurringChargeAmount?: Double;
      RecurringChargeFrequency?: String;
    }


    export type RecurringChargeList = Array<RecurringCharge>;

    export interface RemoveSourceIdentifierFromSubscriptionMessage {
      SubscriptionName: String;
      SourceIdentifier: String;
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


    export type ReservedDBInstanceList = Array<ReservedDBInstance>;

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


    export type ReservedDBInstancesOfferingList = Array<ReservedDBInstancesOffering>;

    export interface ReservedDBInstancesOfferingMessage {
      Marker?: String;
      ReservedDBInstancesOfferings?: ReservedDBInstancesOfferingList;
    }


    export interface ReservedDBInstancesOfferingNotFoundFault {
    }


    export interface ResetDBParameterGroupMessage {
      DBParameterGroupName: String;
      ResetAllParameters?: Boolean;
      Parameters?: ParametersList;
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
    }


    export interface RevokeDBSecurityGroupIngressMessage {
      DBSecurityGroupName: String;
      CIDRIP?: String;
      EC2SecurityGroupName?: String;
      EC2SecurityGroupId?: String;
      EC2SecurityGroupOwnerId?: String;
    }


    export interface SNSInvalidTopicFault {
    }


    export interface SNSNoAuthorizationFault {
    }


    export interface SNSTopicArnNotFoundFault {
    }


    export interface SnapshotQuotaExceededFault {
    }


    export type SourceIdsList = Array<String>;

    export interface SourceNotFoundFault {
    }


    export type SourceType = string;

    export interface StorageQuotaExceededFault {
    }


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


    export interface SubscriptionNotFoundFault {
    }


    export type SupportedCharacterSetsList = Array<CharacterSet>;

    export type TStamp = number;

    export interface Tag {
      Key?: String;
      Value?: String;
    }


    export type TagList = Array<Tag>;

    export interface TagListMessage {
      TagList?: TagList;
    }


    export type VpcSecurityGroupIdList = Array<String>;

    export interface VpcSecurityGroupMembership {
      VpcSecurityGroupId?: String;
      Status?: String;
    }


    export type VpcSecurityGroupMembershipList = Array<VpcSecurityGroupMembership>;

    export interface AddSourceIdentifierToSubscriptionResult {
      EventSubscription?: EventSubscription;
    }


    export interface AuthorizeDBSecurityGroupIngressResult {
      DBSecurityGroup?: DBSecurityGroup;
    }


    export interface CopyDBSnapshotResult {
      DBSnapshot?: DBSnapshot;
    }


    export interface CreateDBInstanceResult {
      DBInstance?: DBInstance;
    }


    export interface CreateDBInstanceReadReplicaResult {
      DBInstance?: DBInstance;
    }


    export interface CreateDBParameterGroupResult {
      DBParameterGroup?: DBParameterGroup;
    }


    export interface CreateDBSecurityGroupResult {
      DBSecurityGroup?: DBSecurityGroup;
    }


    export interface CreateDBSnapshotResult {
      DBSnapshot?: DBSnapshot;
    }


    export interface CreateDBSubnetGroupResult {
      DBSubnetGroup?: DBSubnetGroup;
    }


    export interface CreateEventSubscriptionResult {
      EventSubscription?: EventSubscription;
    }


    export interface CreateOptionGroupResult {
      OptionGroup?: OptionGroup;
    }


    export interface DeleteDBInstanceResult {
      DBInstance?: DBInstance;
    }


    export interface DeleteDBSnapshotResult {
      DBSnapshot?: DBSnapshot;
    }


    export interface DeleteEventSubscriptionResult {
      EventSubscription?: EventSubscription;
    }


    export interface DescribeEngineDefaultParametersResult {
      EngineDefaults?: EngineDefaults;
    }


    export interface ModifyDBInstanceResult {
      DBInstance?: DBInstance;
    }


    export interface ModifyDBSubnetGroupResult {
      DBSubnetGroup?: DBSubnetGroup;
    }


    export interface ModifyEventSubscriptionResult {
      EventSubscription?: EventSubscription;
    }


    export interface ModifyOptionGroupResult {
      OptionGroup?: OptionGroup;
    }


    export interface PromoteReadReplicaResult {
      DBInstance?: DBInstance;
    }


    export interface PurchaseReservedDBInstancesOfferingResult {
      ReservedDBInstance?: ReservedDBInstance;
    }


    export interface RebootDBInstanceResult {
      DBInstance?: DBInstance;
    }


    export interface RemoveSourceIdentifierFromSubscriptionResult {
      EventSubscription?: EventSubscription;
    }


    export interface RestoreDBInstanceFromDBSnapshotResult {
      DBInstance?: DBInstance;
    }


    export interface RestoreDBInstanceToPointInTimeResult {
      DBInstance?: DBInstance;
    }


    export interface RevokeDBSecurityGroupIngressResult {
      DBSecurityGroup?: DBSecurityGroup;
    }


}
