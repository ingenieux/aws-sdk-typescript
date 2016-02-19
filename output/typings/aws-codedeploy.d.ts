// Type definitions for aws-sdk - AWS CodeDeploy
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2014-10-06
     * endpointPrefix: codedeploy
     * serviceAbbreviation: CodeDeploy
     * signatureVersion: v4
     * protocol: json
     */
    export class CodeDeploy extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      addTagsToOnPremisesInstances(params: CodeDeploy.AddTagsToOnPremisesInstancesInput, callback?: (err: CodeDeploy.InstanceNameRequiredException|CodeDeploy.TagRequiredException|CodeDeploy.InvalidTagException|CodeDeploy.TagLimitExceededException|CodeDeploy.InstanceLimitExceededException|CodeDeploy.InstanceNotRegisteredException|any, data: any) => void): Request;
      batchGetApplicationRevisions(params: CodeDeploy.BatchGetApplicationRevisionsInput, callback?: (err: CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.RevisionRequiredException|CodeDeploy.InvalidRevisionException|CodeDeploy.BatchLimitExceededException|any, data: CodeDeploy.BatchGetApplicationRevisionsOutput|any) => void): Request;
      batchGetApplications(params: CodeDeploy.BatchGetApplicationsInput, callback?: (err: CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.BatchLimitExceededException|any, data: CodeDeploy.BatchGetApplicationsOutput|any) => void): Request;
      batchGetDeploymentInstances(params: CodeDeploy.BatchGetDeploymentInstancesInput, callback?: (err: CodeDeploy.DeploymentIdRequiredException|CodeDeploy.DeploymentDoesNotExistException|CodeDeploy.InstanceIdRequiredException|CodeDeploy.InvalidDeploymentIdException|CodeDeploy.InvalidInstanceNameException|CodeDeploy.BatchLimitExceededException|any, data: CodeDeploy.BatchGetDeploymentInstancesOutput|any) => void): Request;
      batchGetDeployments(params: CodeDeploy.BatchGetDeploymentsInput, callback?: (err: CodeDeploy.DeploymentIdRequiredException|CodeDeploy.InvalidDeploymentIdException|CodeDeploy.BatchLimitExceededException|any, data: CodeDeploy.BatchGetDeploymentsOutput|any) => void): Request;
      batchGetOnPremisesInstances(params: CodeDeploy.BatchGetOnPremisesInstancesInput, callback?: (err: CodeDeploy.InstanceNameRequiredException|CodeDeploy.InvalidInstanceNameException|CodeDeploy.BatchLimitExceededException|any, data: CodeDeploy.BatchGetOnPremisesInstancesOutput|any) => void): Request;
      createApplication(params: CodeDeploy.CreateApplicationInput, callback?: (err: CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationAlreadyExistsException|CodeDeploy.ApplicationLimitExceededException|any, data: CodeDeploy.CreateApplicationOutput|any) => void): Request;
      createDeployment(params: CodeDeploy.CreateDeploymentInput, callback?: (err: CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.DeploymentGroupNameRequiredException|CodeDeploy.InvalidDeploymentGroupNameException|CodeDeploy.DeploymentGroupDoesNotExistException|CodeDeploy.RevisionRequiredException|CodeDeploy.InvalidRevisionException|CodeDeploy.InvalidDeploymentConfigNameException|CodeDeploy.DeploymentConfigDoesNotExistException|CodeDeploy.DescriptionTooLongException|CodeDeploy.DeploymentLimitExceededException|any, data: CodeDeploy.CreateDeploymentOutput|any) => void): Request;
      createDeploymentConfig(params: CodeDeploy.CreateDeploymentConfigInput, callback?: (err: CodeDeploy.InvalidDeploymentConfigNameException|CodeDeploy.DeploymentConfigNameRequiredException|CodeDeploy.DeploymentConfigAlreadyExistsException|CodeDeploy.InvalidMinimumHealthyHostValueException|CodeDeploy.DeploymentConfigLimitExceededException|any, data: CodeDeploy.CreateDeploymentConfigOutput|any) => void): Request;
      createDeploymentGroup(params: CodeDeploy.CreateDeploymentGroupInput, callback?: (err: CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.DeploymentGroupNameRequiredException|CodeDeploy.InvalidDeploymentGroupNameException|CodeDeploy.DeploymentGroupAlreadyExistsException|CodeDeploy.InvalidEC2TagException|CodeDeploy.InvalidTagException|CodeDeploy.InvalidAutoScalingGroupException|CodeDeploy.InvalidDeploymentConfigNameException|CodeDeploy.DeploymentConfigDoesNotExistException|CodeDeploy.RoleRequiredException|CodeDeploy.InvalidRoleException|CodeDeploy.DeploymentGroupLimitExceededException|CodeDeploy.LifecycleHookLimitExceededException|CodeDeploy.InvalidTriggerConfigException|CodeDeploy.TriggerTargetsLimitExceededException|any, data: CodeDeploy.CreateDeploymentGroupOutput|any) => void): Request;
      deleteApplication(params: CodeDeploy.DeleteApplicationInput, callback?: (err: CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|any, data: any) => void): Request;
      deleteDeploymentConfig(params: CodeDeploy.DeleteDeploymentConfigInput, callback?: (err: CodeDeploy.InvalidDeploymentConfigNameException|CodeDeploy.DeploymentConfigNameRequiredException|CodeDeploy.DeploymentConfigInUseException|CodeDeploy.InvalidOperationException|any, data: any) => void): Request;
      deleteDeploymentGroup(params: CodeDeploy.DeleteDeploymentGroupInput, callback?: (err: CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.DeploymentGroupNameRequiredException|CodeDeploy.InvalidDeploymentGroupNameException|CodeDeploy.InvalidRoleException|any, data: CodeDeploy.DeleteDeploymentGroupOutput|any) => void): Request;
      deregisterOnPremisesInstance(params: CodeDeploy.DeregisterOnPremisesInstanceInput, callback?: (err: CodeDeploy.InstanceNameRequiredException|CodeDeploy.InvalidInstanceNameException|any, data: any) => void): Request;
      getApplication(params: CodeDeploy.GetApplicationInput, callback?: (err: CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationDoesNotExistException|any, data: CodeDeploy.GetApplicationOutput|any) => void): Request;
      getApplicationRevision(params: CodeDeploy.GetApplicationRevisionInput, callback?: (err: CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.RevisionDoesNotExistException|CodeDeploy.RevisionRequiredException|CodeDeploy.InvalidRevisionException|any, data: CodeDeploy.GetApplicationRevisionOutput|any) => void): Request;
      getDeployment(params: CodeDeploy.GetDeploymentInput, callback?: (err: CodeDeploy.DeploymentIdRequiredException|CodeDeploy.InvalidDeploymentIdException|CodeDeploy.DeploymentDoesNotExistException|any, data: CodeDeploy.GetDeploymentOutput|any) => void): Request;
      getDeploymentConfig(params: CodeDeploy.GetDeploymentConfigInput, callback?: (err: CodeDeploy.InvalidDeploymentConfigNameException|CodeDeploy.DeploymentConfigNameRequiredException|CodeDeploy.DeploymentConfigDoesNotExistException|any, data: CodeDeploy.GetDeploymentConfigOutput|any) => void): Request;
      getDeploymentGroup(params: CodeDeploy.GetDeploymentGroupInput, callback?: (err: CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.DeploymentGroupNameRequiredException|CodeDeploy.InvalidDeploymentGroupNameException|CodeDeploy.DeploymentGroupDoesNotExistException|any, data: CodeDeploy.GetDeploymentGroupOutput|any) => void): Request;
      getDeploymentInstance(params: CodeDeploy.GetDeploymentInstanceInput, callback?: (err: CodeDeploy.DeploymentIdRequiredException|CodeDeploy.DeploymentDoesNotExistException|CodeDeploy.InstanceIdRequiredException|CodeDeploy.InvalidDeploymentIdException|CodeDeploy.InstanceDoesNotExistException|CodeDeploy.InvalidInstanceNameException|any, data: CodeDeploy.GetDeploymentInstanceOutput|any) => void): Request;
      getOnPremisesInstance(params: CodeDeploy.GetOnPremisesInstanceInput, callback?: (err: CodeDeploy.InstanceNameRequiredException|CodeDeploy.InstanceNotRegisteredException|CodeDeploy.InvalidInstanceNameException|any, data: CodeDeploy.GetOnPremisesInstanceOutput|any) => void): Request;
      listApplicationRevisions(params: CodeDeploy.ListApplicationRevisionsInput, callback?: (err: CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.InvalidSortByException|CodeDeploy.InvalidSortOrderException|CodeDeploy.InvalidBucketNameFilterException|CodeDeploy.InvalidKeyPrefixFilterException|CodeDeploy.BucketNameFilterRequiredException|CodeDeploy.InvalidDeployedStateFilterException|CodeDeploy.InvalidNextTokenException|any, data: CodeDeploy.ListApplicationRevisionsOutput|any) => void): Request;
      listApplications(params: CodeDeploy.ListApplicationsInput, callback?: (err: CodeDeploy.InvalidNextTokenException|any, data: CodeDeploy.ListApplicationsOutput|any) => void): Request;
      listDeploymentConfigs(params: CodeDeploy.ListDeploymentConfigsInput, callback?: (err: CodeDeploy.InvalidNextTokenException|any, data: CodeDeploy.ListDeploymentConfigsOutput|any) => void): Request;
      listDeploymentGroups(params: CodeDeploy.ListDeploymentGroupsInput, callback?: (err: CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.InvalidNextTokenException|any, data: CodeDeploy.ListDeploymentGroupsOutput|any) => void): Request;
      listDeploymentInstances(params: CodeDeploy.ListDeploymentInstancesInput, callback?: (err: CodeDeploy.DeploymentIdRequiredException|CodeDeploy.DeploymentDoesNotExistException|CodeDeploy.DeploymentNotStartedException|CodeDeploy.InvalidNextTokenException|CodeDeploy.InvalidDeploymentIdException|CodeDeploy.InvalidInstanceStatusException|any, data: CodeDeploy.ListDeploymentInstancesOutput|any) => void): Request;
      listDeployments(params: CodeDeploy.ListDeploymentsInput, callback?: (err: CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.InvalidDeploymentGroupNameException|CodeDeploy.DeploymentGroupDoesNotExistException|CodeDeploy.DeploymentGroupNameRequiredException|CodeDeploy.InvalidTimeRangeException|CodeDeploy.InvalidDeploymentStatusException|CodeDeploy.InvalidNextTokenException|any, data: CodeDeploy.ListDeploymentsOutput|any) => void): Request;
      listOnPremisesInstances(params: CodeDeploy.ListOnPremisesInstancesInput, callback?: (err: CodeDeploy.InvalidRegistrationStatusException|CodeDeploy.InvalidTagFilterException|CodeDeploy.InvalidNextTokenException|any, data: CodeDeploy.ListOnPremisesInstancesOutput|any) => void): Request;
      registerApplicationRevision(params: CodeDeploy.RegisterApplicationRevisionInput, callback?: (err: CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.DescriptionTooLongException|CodeDeploy.RevisionRequiredException|CodeDeploy.InvalidRevisionException|any, data: any) => void): Request;
      registerOnPremisesInstance(params: CodeDeploy.RegisterOnPremisesInstanceInput, callback?: (err: CodeDeploy.InstanceNameAlreadyRegisteredException|CodeDeploy.IamUserArnAlreadyRegisteredException|CodeDeploy.InstanceNameRequiredException|CodeDeploy.IamUserArnRequiredException|CodeDeploy.InvalidInstanceNameException|CodeDeploy.InvalidIamUserArnException|any, data: any) => void): Request;
      removeTagsFromOnPremisesInstances(params: CodeDeploy.RemoveTagsFromOnPremisesInstancesInput, callback?: (err: CodeDeploy.InstanceNameRequiredException|CodeDeploy.TagRequiredException|CodeDeploy.InvalidTagException|CodeDeploy.TagLimitExceededException|CodeDeploy.InstanceLimitExceededException|CodeDeploy.InstanceNotRegisteredException|any, data: any) => void): Request;
      stopDeployment(params: CodeDeploy.StopDeploymentInput, callback?: (err: CodeDeploy.DeploymentIdRequiredException|CodeDeploy.DeploymentDoesNotExistException|CodeDeploy.DeploymentAlreadyCompletedException|CodeDeploy.InvalidDeploymentIdException|any, data: CodeDeploy.StopDeploymentOutput|any) => void): Request;
      updateApplication(params: CodeDeploy.UpdateApplicationInput, callback?: (err: CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationAlreadyExistsException|CodeDeploy.ApplicationDoesNotExistException|any, data: any) => void): Request;
      updateDeploymentGroup(params: CodeDeploy.UpdateDeploymentGroupInput, callback?: (err: CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.InvalidDeploymentGroupNameException|CodeDeploy.DeploymentGroupAlreadyExistsException|CodeDeploy.DeploymentGroupNameRequiredException|CodeDeploy.DeploymentGroupDoesNotExistException|CodeDeploy.InvalidEC2TagException|CodeDeploy.InvalidTagException|CodeDeploy.InvalidAutoScalingGroupException|CodeDeploy.InvalidDeploymentConfigNameException|CodeDeploy.DeploymentConfigDoesNotExistException|CodeDeploy.InvalidRoleException|CodeDeploy.LifecycleHookLimitExceededException|CodeDeploy.InvalidTriggerConfigException|CodeDeploy.TriggerTargetsLimitExceededException|any, data: CodeDeploy.UpdateDeploymentGroupOutput|any) => void): Request;

    }

    export module CodeDeploy {
        export type ApplicationId = string;
        export type ApplicationName = string;    // max: 100, min: 1
        export type ApplicationRevisionSortBy = string;
        export type ApplicationsInfoList = ApplicationInfo[];
        export type ApplicationsList = ApplicationName[];
        export type AutoScalingGroupHook = string;
        export type AutoScalingGroupList = AutoScalingGroup[];
        export type AutoScalingGroupName = string;
        export type AutoScalingGroupNameList = AutoScalingGroupName[];
        export type Boolean = boolean;
        export type BundleType = string;
        export type CommitId = string;
        export type DeploymentConfigId = string;
        export type DeploymentConfigName = string;    // max: 100, min: 1
        export type DeploymentConfigsList = DeploymentConfigName[];
        export type DeploymentCreator = string;
        export type DeploymentGroupId = string;
        export type DeploymentGroupName = string;    // max: 100, min: 1
        export type DeploymentGroupsList = DeploymentGroupName[];
        export type DeploymentId = string;
        export type DeploymentStatus = string;
        export type DeploymentStatusList = DeploymentStatus[];
        export type DeploymentsInfoList = DeploymentInfo[];
        export type DeploymentsList = DeploymentId[];
        export type Description = string;
        export type EC2TagFilterList = EC2TagFilter[];
        export type EC2TagFilterType = string;
        export type ETag = string;
        export type ErrorCode = string;
        export type ErrorMessage = string;
        export type IamUserArn = string;
        export type InstanceArn = string;
        export type InstanceCount = number;
        export type InstanceId = string;
        export type InstanceInfoList = InstanceInfo[];
        export type InstanceName = string;
        export type InstanceNameList = InstanceName[];
        export type InstanceStatus = string;
        export type InstanceStatusList = InstanceStatus[];
        export type InstanceSummaryList = InstanceSummary[];
        export type InstancesList = InstanceId[];
        export type Key = string;
        export type LifecycleErrorCode = string;
        export type LifecycleEventList = LifecycleEvent[];
        export type LifecycleEventName = string;
        export type LifecycleEventStatus = string;
        export type LifecycleMessage = string;
        export type ListStateFilterAction = string;
        export type LogTail = string;
        export type Message = string;
        export type MinimumHealthyHostsType = string;
        export type MinimumHealthyHostsValue = number;
        export type NextToken = string;
        export type RegistrationStatus = string;
        export type Repository = string;
        export type RevisionInfoList = RevisionInfo[];
        export type RevisionLocationList = RevisionLocation[];
        export type RevisionLocationType = string;
        export type Role = string;
        export type S3Bucket = string;
        export type S3Key = string;
        export type ScriptName = string;
        export type SortOrder = string;
        export type StopStatus = string;
        export type TagFilterList = TagFilter[];
        export type TagFilterType = string;
        export type TagList = Tag[];
        export type Timestamp = number;
        export type TriggerConfigList = TriggerConfig[];
        export type TriggerEventType = string;
        export type TriggerEventTypeList = TriggerEventType[];
        export type TriggerName = string;
        export type TriggerTargetArn = string;
        export type Value = string;
        export type VersionId = string;

        export interface AddTagsToOnPremisesInstancesInput {
            tags: TagList;
            instanceNames: InstanceNameList;
        }
        export interface ApplicationAlreadyExistsException {
        }
        export interface ApplicationDoesNotExistException {
        }
        export interface ApplicationInfo {
            applicationId?: ApplicationId;
            applicationName?: ApplicationName;
            createTime?: Timestamp;
            linkedToGitHub?: Boolean;
        }
        export interface ApplicationLimitExceededException {
        }
        export interface ApplicationNameRequiredException {
        }
        export interface AutoScalingGroup {
            name?: AutoScalingGroupName;
            hook?: AutoScalingGroupHook;
        }
        export interface BatchGetApplicationRevisionsInput {
            applicationName: ApplicationName;
            revisions: RevisionLocationList;
        }
        export interface BatchGetApplicationRevisionsOutput {
            applicationName?: ApplicationName;
            errorMessage?: ErrorMessage;
            revisions?: RevisionInfoList;
        }
        export interface BatchGetApplicationsInput {
            applicationNames?: ApplicationsList;
        }
        export interface BatchGetApplicationsOutput {
            applicationsInfo?: ApplicationsInfoList;
        }
        export interface BatchGetDeploymentInstancesInput {
            deploymentId: DeploymentId;
            instanceIds: InstancesList;
        }
        export interface BatchGetDeploymentInstancesOutput {
            instancesSummary?: InstanceSummaryList;
            errorMessage?: ErrorMessage;
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
        export interface BatchLimitExceededException {
        }
        export interface BucketNameFilterRequiredException {
        }
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
            triggerConfigurations?: TriggerConfigList;
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
        export interface DeploymentConfigNameRequiredException {
        }
        export interface DeploymentDoesNotExistException {
        }
        export interface DeploymentGroupAlreadyExistsException {
        }
        export interface DeploymentGroupDoesNotExistException {
        }
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
            triggerConfigurations?: TriggerConfigList;
        }
        export interface DeploymentGroupLimitExceededException {
        }
        export interface DeploymentGroupNameRequiredException {
        }
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
        export interface DeregisterOnPremisesInstanceInput {
            instanceName: InstanceName;
        }
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
        export interface ErrorInformation {
            code?: ErrorCode;
            message?: ErrorMessage;
        }
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
        export interface IamUserArnAlreadyRegisteredException {
        }
        export interface IamUserArnRequiredException {
        }
        export interface InstanceDoesNotExistException {
        }
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
        export interface InstanceLimitExceededException {
        }
        export interface InstanceNameAlreadyRegisteredException {
        }
        export interface InstanceNameRequiredException {
        }
        export interface InstanceNotRegisteredException {
        }
        export interface InstanceSummary {
            deploymentId?: DeploymentId;
            instanceId?: InstanceId;
            status?: InstanceStatus;
            lastUpdatedAt?: Timestamp;
            lifecycleEvents?: LifecycleEventList;
        }
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
        export interface InvalidTriggerConfigException {
        }
        export interface LifecycleEvent {
            lifecycleEventName?: LifecycleEventName;
            diagnostics?: Diagnostics;
            startTime?: Timestamp;
            endTime?: Timestamp;
            status?: LifecycleEventStatus;
        }
        export interface LifecycleHookLimitExceededException {
        }
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
        export interface MinimumHealthyHosts {
            value?: MinimumHealthyHostsValue;
            type?: MinimumHealthyHostsType;
        }
        export interface RegisterApplicationRevisionInput {
            applicationName: ApplicationName;
            description?: Description;
            revision: RevisionLocation;
        }
        export interface RegisterOnPremisesInstanceInput {
            instanceName: InstanceName;
            iamUserArn: IamUserArn;
        }
        export interface RemoveTagsFromOnPremisesInstancesInput {
            tags: TagList;
            instanceNames: InstanceNameList;
        }
        export interface RevisionDoesNotExistException {
        }
        export interface RevisionInfo {
            revisionLocation?: RevisionLocation;
            genericRevisionInfo?: GenericRevisionInfo;
        }
        export interface RevisionLocation {
            revisionType?: RevisionLocationType;
            s3Location?: S3Location;
            gitHubLocation?: GitHubLocation;
        }
        export interface RevisionRequiredException {
        }
        export interface RoleRequiredException {
        }
        export interface S3Location {
            bucket?: S3Bucket;
            key?: S3Key;
            bundleType?: BundleType;
            version?: VersionId;
            eTag?: ETag;
        }
        export interface StopDeploymentInput {
            deploymentId: DeploymentId;
        }
        export interface StopDeploymentOutput {
            status?: StopStatus;
            statusMessage?: Message;
        }
        export interface Tag {
            Key?: Key;
            Value?: Value;
        }
        export interface TagFilter {
            Key?: Key;
            Value?: Value;
            Type?: TagFilterType;
        }
        export interface TagLimitExceededException {
        }
        export interface TagRequiredException {
        }
        export interface TimeRange {
            start?: Timestamp;
            end?: Timestamp;
        }
        export interface TriggerConfig {
            triggerName?: TriggerName;
            triggerTargetArn?: TriggerTargetArn;
            triggerEvents?: TriggerEventTypeList;
        }
        export interface TriggerTargetsLimitExceededException {
        }
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
            triggerConfigurations?: TriggerConfigList;
        }
        export interface UpdateDeploymentGroupOutput {
            hooksNotCleanedUp?: AutoScalingGroupList;
        }

    }
}
