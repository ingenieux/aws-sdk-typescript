// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class CodeDeploy {
      constructor(options?: any);
      addTagsToOnPremisesInstances(params: AddTagsToOnPremisesInstancesInput, callback: (err: InstanceNameRequiredException|TagRequiredException|InvalidTagException|TagLimitExceededException|InstanceLimitExceededException|InstanceNotRegisteredException|any, data: any) => void): void;
      batchGetApplications(params: BatchGetApplicationsInput, callback: (err: ApplicationNameRequiredException|InvalidApplicationNameException|ApplicationDoesNotExistException|any, data: BatchGetApplicationsOutput|any) => void): void;
      batchGetDeployments(params: BatchGetDeploymentsInput, callback: (err: DeploymentIdRequiredException|InvalidDeploymentIdException|any, data: BatchGetDeploymentsOutput|any) => void): void;
      batchGetOnPremisesInstances(params: BatchGetOnPremisesInstancesInput, callback: (err: InstanceNameRequiredException|InvalidInstanceNameException|any, data: BatchGetOnPremisesInstancesOutput|any) => void): void;
      createApplication(params: CreateApplicationInput, callback: (err: ApplicationNameRequiredException|InvalidApplicationNameException|ApplicationAlreadyExistsException|ApplicationLimitExceededException|any, data: CreateApplicationOutput|any) => void): void;
      createDeployment(params: CreateDeploymentInput, callback: (err: ApplicationNameRequiredException|InvalidApplicationNameException|ApplicationDoesNotExistException|DeploymentGroupNameRequiredException|InvalidDeploymentGroupNameException|DeploymentGroupDoesNotExistException|RevisionRequiredException|InvalidRevisionException|InvalidDeploymentConfigNameException|DeploymentConfigDoesNotExistException|DescriptionTooLongException|DeploymentLimitExceededException|any, data: CreateDeploymentOutput|any) => void): void;
      createDeploymentConfig(params: CreateDeploymentConfigInput, callback: (err: InvalidDeploymentConfigNameException|DeploymentConfigNameRequiredException|DeploymentConfigAlreadyExistsException|InvalidMinimumHealthyHostValueException|DeploymentConfigLimitExceededException|any, data: CreateDeploymentConfigOutput|any) => void): void;
      createDeploymentGroup(params: CreateDeploymentGroupInput, callback: (err: ApplicationNameRequiredException|InvalidApplicationNameException|ApplicationDoesNotExistException|DeploymentGroupNameRequiredException|InvalidDeploymentGroupNameException|DeploymentGroupAlreadyExistsException|InvalidEC2TagException|InvalidTagException|InvalidAutoScalingGroupException|InvalidDeploymentConfigNameException|DeploymentConfigDoesNotExistException|RoleRequiredException|InvalidRoleException|DeploymentGroupLimitExceededException|any, data: CreateDeploymentGroupOutput|any) => void): void;
      deleteApplication(params: DeleteApplicationInput, callback: (err: ApplicationNameRequiredException|InvalidApplicationNameException|any, data: any) => void): void;
      deleteDeploymentConfig(params: DeleteDeploymentConfigInput, callback: (err: InvalidDeploymentConfigNameException|DeploymentConfigNameRequiredException|DeploymentConfigInUseException|InvalidOperationException|any, data: any) => void): void;
      deleteDeploymentGroup(params: DeleteDeploymentGroupInput, callback: (err: ApplicationNameRequiredException|InvalidApplicationNameException|DeploymentGroupNameRequiredException|InvalidDeploymentGroupNameException|InvalidRoleException|any, data: DeleteDeploymentGroupOutput|any) => void): void;
      deregisterOnPremisesInstance(params: DeregisterOnPremisesInstanceInput, callback: (err: InstanceNameRequiredException|InvalidInstanceNameException|any, data: any) => void): void;
      getApplication(params: GetApplicationInput, callback: (err: ApplicationNameRequiredException|InvalidApplicationNameException|ApplicationDoesNotExistException|any, data: GetApplicationOutput|any) => void): void;
      getApplicationRevision(params: GetApplicationRevisionInput, callback: (err: ApplicationDoesNotExistException|ApplicationNameRequiredException|InvalidApplicationNameException|RevisionDoesNotExistException|RevisionRequiredException|InvalidRevisionException|any, data: GetApplicationRevisionOutput|any) => void): void;
      getDeployment(params: GetDeploymentInput, callback: (err: DeploymentIdRequiredException|InvalidDeploymentIdException|DeploymentDoesNotExistException|any, data: GetDeploymentOutput|any) => void): void;
      getDeploymentConfig(params: GetDeploymentConfigInput, callback: (err: InvalidDeploymentConfigNameException|DeploymentConfigNameRequiredException|DeploymentConfigDoesNotExistException|any, data: GetDeploymentConfigOutput|any) => void): void;
      getDeploymentGroup(params: GetDeploymentGroupInput, callback: (err: ApplicationNameRequiredException|InvalidApplicationNameException|ApplicationDoesNotExistException|DeploymentGroupNameRequiredException|InvalidDeploymentGroupNameException|DeploymentGroupDoesNotExistException|any, data: GetDeploymentGroupOutput|any) => void): void;
      getDeploymentInstance(params: GetDeploymentInstanceInput, callback: (err: DeploymentIdRequiredException|DeploymentDoesNotExistException|InstanceIdRequiredException|InvalidDeploymentIdException|InstanceDoesNotExistException|any, data: GetDeploymentInstanceOutput|any) => void): void;
      getOnPremisesInstance(params: GetOnPremisesInstanceInput, callback: (err: InstanceNameRequiredException|InstanceNotRegisteredException|InvalidInstanceNameException|any, data: GetOnPremisesInstanceOutput|any) => void): void;
      listApplicationRevisions(params: ListApplicationRevisionsInput, callback: (err: ApplicationDoesNotExistException|ApplicationNameRequiredException|InvalidApplicationNameException|InvalidSortByException|InvalidSortOrderException|InvalidBucketNameFilterException|InvalidKeyPrefixFilterException|BucketNameFilterRequiredException|InvalidDeployedStateFilterException|InvalidNextTokenException|any, data: ListApplicationRevisionsOutput|any) => void): void;
      listApplications(params: ListApplicationsInput, callback: (err: InvalidNextTokenException|any, data: ListApplicationsOutput|any) => void): void;
      listDeploymentConfigs(params: ListDeploymentConfigsInput, callback: (err: InvalidNextTokenException|any, data: ListDeploymentConfigsOutput|any) => void): void;
      listDeploymentGroups(params: ListDeploymentGroupsInput, callback: (err: ApplicationNameRequiredException|InvalidApplicationNameException|ApplicationDoesNotExistException|InvalidNextTokenException|any, data: ListDeploymentGroupsOutput|any) => void): void;
      listDeploymentInstances(params: ListDeploymentInstancesInput, callback: (err: DeploymentIdRequiredException|DeploymentDoesNotExistException|DeploymentNotStartedException|InvalidNextTokenException|InvalidDeploymentIdException|InvalidInstanceStatusException|any, data: ListDeploymentInstancesOutput|any) => void): void;
      listDeployments(params: ListDeploymentsInput, callback: (err: ApplicationNameRequiredException|InvalidApplicationNameException|ApplicationDoesNotExistException|InvalidDeploymentGroupNameException|DeploymentGroupDoesNotExistException|DeploymentGroupNameRequiredException|InvalidTimeRangeException|InvalidDeploymentStatusException|InvalidNextTokenException|any, data: ListDeploymentsOutput|any) => void): void;
      listOnPremisesInstances(params: ListOnPremisesInstancesInput, callback: (err: InvalidRegistrationStatusException|InvalidTagFilterException|InvalidNextTokenException|any, data: ListOnPremisesInstancesOutput|any) => void): void;
      registerApplicationRevision(params: RegisterApplicationRevisionInput, callback: (err: ApplicationDoesNotExistException|ApplicationNameRequiredException|InvalidApplicationNameException|DescriptionTooLongException|RevisionRequiredException|InvalidRevisionException|any, data: any) => void): void;
      registerOnPremisesInstance(params: RegisterOnPremisesInstanceInput, callback: (err: InstanceNameAlreadyRegisteredException|IamUserArnAlreadyRegisteredException|InstanceNameRequiredException|IamUserArnRequiredException|InvalidInstanceNameException|InvalidIamUserArnException|any, data: any) => void): void;
      removeTagsFromOnPremisesInstances(params: RemoveTagsFromOnPremisesInstancesInput, callback: (err: InstanceNameRequiredException|TagRequiredException|InvalidTagException|TagLimitExceededException|InstanceLimitExceededException|InstanceNotRegisteredException|any, data: any) => void): void;
      stopDeployment(params: StopDeploymentInput, callback: (err: DeploymentIdRequiredException|DeploymentDoesNotExistException|DeploymentAlreadyCompletedException|InvalidDeploymentIdException|any, data: StopDeploymentOutput|any) => void): void;
      updateApplication(params: UpdateApplicationInput, callback: (err: ApplicationNameRequiredException|InvalidApplicationNameException|ApplicationAlreadyExistsException|ApplicationDoesNotExistException|any, data: any) => void): void;
      updateDeploymentGroup(params: UpdateDeploymentGroupInput, callback: (err: ApplicationNameRequiredException|InvalidApplicationNameException|ApplicationDoesNotExistException|InvalidDeploymentGroupNameException|DeploymentGroupAlreadyExistsException|DeploymentGroupNameRequiredException|DeploymentGroupDoesNotExistException|InvalidEC2TagException|InvalidTagException|InvalidAutoScalingGroupException|InvalidDeploymentConfigNameException|DeploymentConfigDoesNotExistException|InvalidRoleException|any, data: UpdateDeploymentGroupOutput|any) => void): void;
    }

    export interface AddTagsToOnPremisesInstancesInput {
      tags: TagList;
      instanceNames: InstanceNameList;
    }


    export interface ApplicationAlreadyExistsException {
    }


    export interface ApplicationDoesNotExistException {
    }


    export type ApplicationId = string;

    export interface ApplicationInfo {
      applicationId?: ApplicationId;
      applicationName?: ApplicationName;
      createTime?: Timestamp;
      linkedToGitHub?: Boolean;
    }


    export interface ApplicationLimitExceededException {
    }


    export type ApplicationName = string;

    export interface ApplicationNameRequiredException {
    }


    export type ApplicationRevisionSortBy = string;

    export type ApplicationsInfoList = Array<ApplicationInfo>;

    export type ApplicationsList = Array<ApplicationName>;

    export interface AutoScalingGroup {
      name?: AutoScalingGroupName;
      hook?: AutoScalingGroupHook;
    }


    export type AutoScalingGroupHook = string;

    export type AutoScalingGroupList = Array<AutoScalingGroup>;

    export type AutoScalingGroupName = string;

    export type AutoScalingGroupNameList = Array<AutoScalingGroupName>;

    export interface BatchGetApplicationsInput {
      applicationNames?: ApplicationsList;
    }


    export interface BatchGetApplicationsOutput {
      applicationsInfo?: ApplicationsInfoList;
    }


    export interface BatchGetDeploymentsInput {
      deploymentIds?: DeploymentsList;
    }


    export interface BatchGetDeploymentsOutput {
      deploymentsInfo?: DeploymentsInfoList;
    }


    export interface BatchGetOnPremisesInstancesInput {
      instanceNames?: InstanceNameList;
    }


    export interface BatchGetOnPremisesInstancesOutput {
      instanceInfos?: InstanceInfoList;
    }


    export type Boolean = boolean;

    export interface BucketNameFilterRequiredException {
    }


    export type BundleType = string;

    export type CommitId = string;

    export interface CreateApplicationInput {
      applicationName: ApplicationName;
    }


    export interface CreateApplicationOutput {
      applicationId?: ApplicationId;
    }


    export interface CreateDeploymentConfigInput {
      deploymentConfigName: DeploymentConfigName;
      minimumHealthyHosts?: MinimumHealthyHosts;
    }


    export interface CreateDeploymentConfigOutput {
      deploymentConfigId?: DeploymentConfigId;
    }


    export interface CreateDeploymentGroupInput {
      applicationName: ApplicationName;
      deploymentGroupName: DeploymentGroupName;
      deploymentConfigName?: DeploymentConfigName;
      ec2TagFilters?: EC2TagFilterList;
      onPremisesInstanceTagFilters?: TagFilterList;
      autoScalingGroups?: AutoScalingGroupNameList;
      serviceRoleArn: Role;
    }


    export interface CreateDeploymentGroupOutput {
      deploymentGroupId?: DeploymentGroupId;
    }


    export interface CreateDeploymentInput {
      applicationName: ApplicationName;
      deploymentGroupName?: DeploymentGroupName;
      revision?: RevisionLocation;
      deploymentConfigName?: DeploymentConfigName;
      description?: Description;
      ignoreApplicationStopFailures?: Boolean;
    }


    export interface CreateDeploymentOutput {
      deploymentId?: DeploymentId;
    }


    export interface DeleteApplicationInput {
      applicationName: ApplicationName;
    }


    export interface DeleteDeploymentConfigInput {
      deploymentConfigName: DeploymentConfigName;
    }


    export interface DeleteDeploymentGroupInput {
      applicationName: ApplicationName;
      deploymentGroupName: DeploymentGroupName;
    }


    export interface DeleteDeploymentGroupOutput {
      hooksNotCleanedUp?: AutoScalingGroupList;
    }


    export interface DeploymentAlreadyCompletedException {
    }


    export interface DeploymentConfigAlreadyExistsException {
    }


    export interface DeploymentConfigDoesNotExistException {
    }


    export type DeploymentConfigId = string;

    export interface DeploymentConfigInUseException {
    }


    export interface DeploymentConfigInfo {
      deploymentConfigId?: DeploymentConfigId;
      deploymentConfigName?: DeploymentConfigName;
      minimumHealthyHosts?: MinimumHealthyHosts;
      createTime?: Timestamp;
    }


    export interface DeploymentConfigLimitExceededException {
    }


    export type DeploymentConfigName = string;

    export interface DeploymentConfigNameRequiredException {
    }


    export type DeploymentConfigsList = Array<DeploymentConfigName>;

    export type DeploymentCreator = string;

    export interface DeploymentDoesNotExistException {
    }


    export interface DeploymentGroupAlreadyExistsException {
    }


    export interface DeploymentGroupDoesNotExistException {
    }


    export type DeploymentGroupId = string;

    export interface DeploymentGroupInfo {
      applicationName?: ApplicationName;
      deploymentGroupId?: DeploymentGroupId;
      deploymentGroupName?: DeploymentGroupName;
      deploymentConfigName?: DeploymentConfigName;
      ec2TagFilters?: EC2TagFilterList;
      onPremisesInstanceTagFilters?: TagFilterList;
      autoScalingGroups?: AutoScalingGroupList;
      serviceRoleArn?: Role;
      targetRevision?: RevisionLocation;
    }


    export interface DeploymentGroupLimitExceededException {
    }


    export type DeploymentGroupName = string;

    export interface DeploymentGroupNameRequiredException {
    }


    export type DeploymentGroupsList = Array<DeploymentGroupName>;

    export type DeploymentId = string;

    export interface DeploymentIdRequiredException {
    }


    export interface DeploymentInfo {
      applicationName?: ApplicationName;
      deploymentGroupName?: DeploymentGroupName;
      deploymentConfigName?: DeploymentConfigName;
      deploymentId?: DeploymentId;
      revision?: RevisionLocation;
      status?: DeploymentStatus;
      errorInformation?: ErrorInformation;
      createTime?: Timestamp;
      startTime?: Timestamp;
      completeTime?: Timestamp;
      deploymentOverview?: DeploymentOverview;
      description?: Description;
      creator?: DeploymentCreator;
      ignoreApplicationStopFailures?: Boolean;
    }


    export interface DeploymentLimitExceededException {
    }


    export interface DeploymentNotStartedException {
    }


    export interface DeploymentOverview {
      Pending?: InstanceCount;
      InProgress?: InstanceCount;
      Succeeded?: InstanceCount;
      Failed?: InstanceCount;
      Skipped?: InstanceCount;
    }


    export type DeploymentStatus = string;

    export type DeploymentStatusList = Array<DeploymentStatus>;

    export type DeploymentsInfoList = Array<DeploymentInfo>;

    export type DeploymentsList = Array<DeploymentId>;

    export interface DeregisterOnPremisesInstanceInput {
      instanceName: InstanceName;
    }


    export type Description = string;

    export interface DescriptionTooLongException {
    }


    export interface Diagnostics {
      errorCode?: LifecycleErrorCode;
      scriptName?: ScriptName;
      message?: LifecycleMessage;
      logTail?: LogTail;
    }


    export interface EC2TagFilter {
      Key?: Key;
      Value?: Value;
      Type?: EC2TagFilterType;
    }


    export type EC2TagFilterList = Array<EC2TagFilter>;

    export type EC2TagFilterType = string;

    export type ETag = string;

    export type ErrorCode = string;

    export interface ErrorInformation {
      code?: ErrorCode;
      message?: ErrorMessage;
    }


    export type ErrorMessage = string;

    export interface GenericRevisionInfo {
      description?: Description;
      deploymentGroups?: DeploymentGroupsList;
      firstUsedTime?: Timestamp;
      lastUsedTime?: Timestamp;
      registerTime?: Timestamp;
    }


    export interface GetApplicationInput {
      applicationName: ApplicationName;
    }


    export interface GetApplicationOutput {
      application?: ApplicationInfo;
    }


    export interface GetApplicationRevisionInput {
      applicationName: ApplicationName;
      revision: RevisionLocation;
    }


    export interface GetApplicationRevisionOutput {
      applicationName?: ApplicationName;
      revision?: RevisionLocation;
      revisionInfo?: GenericRevisionInfo;
    }


    export interface GetDeploymentConfigInput {
      deploymentConfigName: DeploymentConfigName;
    }


    export interface GetDeploymentConfigOutput {
      deploymentConfigInfo?: DeploymentConfigInfo;
    }


    export interface GetDeploymentGroupInput {
      applicationName: ApplicationName;
      deploymentGroupName: DeploymentGroupName;
    }


    export interface GetDeploymentGroupOutput {
      deploymentGroupInfo?: DeploymentGroupInfo;
    }


    export interface GetDeploymentInput {
      deploymentId: DeploymentId;
    }


    export interface GetDeploymentInstanceInput {
      deploymentId: DeploymentId;
      instanceId: InstanceId;
    }


    export interface GetDeploymentInstanceOutput {
      instanceSummary?: InstanceSummary;
    }


    export interface GetDeploymentOutput {
      deploymentInfo?: DeploymentInfo;
    }


    export interface GetOnPremisesInstanceInput {
      instanceName: InstanceName;
    }


    export interface GetOnPremisesInstanceOutput {
      instanceInfo?: InstanceInfo;
    }


    export interface GitHubLocation {
      repository?: Repository;
      commitId?: CommitId;
    }


    export type IamUserArn = string;

    export interface IamUserArnAlreadyRegisteredException {
    }


    export interface IamUserArnRequiredException {
    }


    export type InstanceArn = string;

    export type InstanceCount = number;

    export interface InstanceDoesNotExistException {
    }


    export type InstanceId = string;

    export interface InstanceIdRequiredException {
    }


    export interface InstanceInfo {
      instanceName?: InstanceName;
      iamUserArn?: IamUserArn;
      instanceArn?: InstanceArn;
      registerTime?: Timestamp;
      deregisterTime?: Timestamp;
      tags?: TagList;
    }


    export type InstanceInfoList = Array<InstanceInfo>;

    export interface InstanceLimitExceededException {
    }


    export type InstanceName = string;

    export interface InstanceNameAlreadyRegisteredException {
    }


    export type InstanceNameList = Array<InstanceName>;

    export interface InstanceNameRequiredException {
    }


    export interface InstanceNotRegisteredException {
    }


    export type InstanceStatus = string;

    export type InstanceStatusList = Array<InstanceStatus>;

    export interface InstanceSummary {
      deploymentId?: DeploymentId;
      instanceId?: InstanceId;
      status?: InstanceStatus;
      lastUpdatedAt?: Timestamp;
      lifecycleEvents?: LifecycleEventList;
    }


    export type InstancesList = Array<InstanceId>;

    export interface InvalidApplicationNameException {
    }


    export interface InvalidAutoScalingGroupException {
    }


    export interface InvalidBucketNameFilterException {
    }


    export interface InvalidDeployedStateFilterException {
    }


    export interface InvalidDeploymentConfigNameException {
    }


    export interface InvalidDeploymentGroupNameException {
    }


    export interface InvalidDeploymentIdException {
    }


    export interface InvalidDeploymentStatusException {
    }


    export interface InvalidEC2TagException {
    }


    export interface InvalidIamUserArnException {
    }


    export interface InvalidInstanceNameException {
    }


    export interface InvalidInstanceStatusException {
    }


    export interface InvalidKeyPrefixFilterException {
    }


    export interface InvalidMinimumHealthyHostValueException {
    }


    export interface InvalidNextTokenException {
    }


    export interface InvalidOperationException {
    }


    export interface InvalidRegistrationStatusException {
    }


    export interface InvalidRevisionException {
    }


    export interface InvalidRoleException {
    }


    export interface InvalidSortByException {
    }


    export interface InvalidSortOrderException {
    }


    export interface InvalidTagException {
    }


    export interface InvalidTagFilterException {
    }


    export interface InvalidTimeRangeException {
    }


    export type Key = string;

    export type LifecycleErrorCode = string;

    export interface LifecycleEvent {
      lifecycleEventName?: LifecycleEventName;
      diagnostics?: Diagnostics;
      startTime?: Timestamp;
      endTime?: Timestamp;
      status?: LifecycleEventStatus;
    }


    export type LifecycleEventList = Array<LifecycleEvent>;

    export type LifecycleEventName = string;

    export type LifecycleEventStatus = string;

    export type LifecycleMessage = string;

    export interface ListApplicationRevisionsInput {
      applicationName: ApplicationName;
      sortBy?: ApplicationRevisionSortBy;
      sortOrder?: SortOrder;
      s3Bucket?: S3Bucket;
      s3KeyPrefix?: S3Key;
      deployed?: ListStateFilterAction;
      nextToken?: NextToken;
    }


    export interface ListApplicationRevisionsOutput {
      revisions?: RevisionLocationList;
      nextToken?: NextToken;
    }


    export interface ListApplicationsInput {
      nextToken?: NextToken;
    }


    export interface ListApplicationsOutput {
      applications?: ApplicationsList;
      nextToken?: NextToken;
    }


    export interface ListDeploymentConfigsInput {
      nextToken?: NextToken;
    }


    export interface ListDeploymentConfigsOutput {
      deploymentConfigsList?: DeploymentConfigsList;
      nextToken?: NextToken;
    }


    export interface ListDeploymentGroupsInput {
      applicationName: ApplicationName;
      nextToken?: NextToken;
    }


    export interface ListDeploymentGroupsOutput {
      applicationName?: ApplicationName;
      deploymentGroups?: DeploymentGroupsList;
      nextToken?: NextToken;
    }


    export interface ListDeploymentInstancesInput {
      deploymentId: DeploymentId;
      nextToken?: NextToken;
      instanceStatusFilter?: InstanceStatusList;
    }


    export interface ListDeploymentInstancesOutput {
      instancesList?: InstancesList;
      nextToken?: NextToken;
    }


    export interface ListDeploymentsInput {
      applicationName?: ApplicationName;
      deploymentGroupName?: DeploymentGroupName;
      includeOnlyStatuses?: DeploymentStatusList;
      createTimeRange?: TimeRange;
      nextToken?: NextToken;
    }


    export interface ListDeploymentsOutput {
      deployments?: DeploymentsList;
      nextToken?: NextToken;
    }


    export interface ListOnPremisesInstancesInput {
      registrationStatus?: RegistrationStatus;
      tagFilters?: TagFilterList;
      nextToken?: NextToken;
    }


    export interface ListOnPremisesInstancesOutput {
      instanceNames?: InstanceNameList;
      nextToken?: NextToken;
    }


    export type ListStateFilterAction = string;

    export type LogTail = string;

    export type Message = string;

    export interface MinimumHealthyHosts {
      value?: MinimumHealthyHostsValue;
      type?: MinimumHealthyHostsType;
    }


    export type MinimumHealthyHostsType = string;

    export type MinimumHealthyHostsValue = number;

    export type NextToken = string;

    export interface RegisterApplicationRevisionInput {
      applicationName: ApplicationName;
      description?: Description;
      revision: RevisionLocation;
    }


    export interface RegisterOnPremisesInstanceInput {
      instanceName: InstanceName;
      iamUserArn: IamUserArn;
    }


    export type RegistrationStatus = string;

    export interface RemoveTagsFromOnPremisesInstancesInput {
      tags: TagList;
      instanceNames: InstanceNameList;
    }


    export type Repository = string;

    export interface RevisionDoesNotExistException {
    }


    export interface RevisionLocation {
      revisionType?: RevisionLocationType;
      s3Location?: S3Location;
      gitHubLocation?: GitHubLocation;
    }


    export type RevisionLocationList = Array<RevisionLocation>;

    export type RevisionLocationType = string;

    export interface RevisionRequiredException {
    }


    export type Role = string;

    export interface RoleRequiredException {
    }


    export type S3Bucket = string;

    export type S3Key = string;

    export interface S3Location {
      bucket?: S3Bucket;
      key?: S3Key;
      bundleType?: BundleType;
      version?: VersionId;
      eTag?: ETag;
    }


    export type ScriptName = string;

    export type SortOrder = string;

    export interface StopDeploymentInput {
      deploymentId: DeploymentId;
    }


    export interface StopDeploymentOutput {
      status?: StopStatus;
      statusMessage?: Message;
    }


    export type StopStatus = string;

    export interface Tag {
      Key?: Key;
      Value?: Value;
    }


    export interface TagFilter {
      Key?: Key;
      Value?: Value;
      Type?: TagFilterType;
    }


    export type TagFilterList = Array<TagFilter>;

    export type TagFilterType = string;

    export interface TagLimitExceededException {
    }


    export type TagList = Array<Tag>;

    export interface TagRequiredException {
    }


    export interface TimeRange {
      start?: Timestamp;
      end?: Timestamp;
    }


    export type Timestamp = number;

    export interface UpdateApplicationInput {
      applicationName?: ApplicationName;
      newApplicationName?: ApplicationName;
    }


    export interface UpdateDeploymentGroupInput {
      applicationName: ApplicationName;
      currentDeploymentGroupName: DeploymentGroupName;
      newDeploymentGroupName?: DeploymentGroupName;
      deploymentConfigName?: DeploymentConfigName;
      ec2TagFilters?: EC2TagFilterList;
      onPremisesInstanceTagFilters?: TagFilterList;
      autoScalingGroups?: AutoScalingGroupNameList;
      serviceRoleArn?: Role;
    }


    export interface UpdateDeploymentGroupOutput {
      hooksNotCleanedUp?: AutoScalingGroupList;
    }


    export type Value = string;

    export type VersionId = string;

}
