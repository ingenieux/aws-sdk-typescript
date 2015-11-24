// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {
    export class CodeDeploy {
      constructor(options?: any);
      addTagsToOnPremisesInstances(params: CodeDeployAddTagsToOnPremisesInstancesInput, callback: (err: CodeDeployInstanceNameRequiredException|CodeDeployTagRequiredException|CodeDeployInvalidTagException|CodeDeployTagLimitExceededException|CodeDeployInstanceLimitExceededException|CodeDeployInstanceNotRegisteredException|any, data: any) => void): void;
      batchGetApplications(params: CodeDeployBatchGetApplicationsInput, callback: (err: CodeDeployApplicationNameRequiredException|CodeDeployInvalidApplicationNameException|CodeDeployApplicationDoesNotExistException|any, data: CodeDeployBatchGetApplicationsOutput|any) => void): void;
      batchGetDeployments(params: CodeDeployBatchGetDeploymentsInput, callback: (err: CodeDeployDeploymentIdRequiredException|CodeDeployInvalidDeploymentIdException|any, data: CodeDeployBatchGetDeploymentsOutput|any) => void): void;
      batchGetOnPremisesInstances(params: CodeDeployBatchGetOnPremisesInstancesInput, callback: (err: CodeDeployInstanceNameRequiredException|CodeDeployInvalidInstanceNameException|any, data: CodeDeployBatchGetOnPremisesInstancesOutput|any) => void): void;
      createApplication(params: CodeDeployCreateApplicationInput, callback: (err: CodeDeployApplicationNameRequiredException|CodeDeployInvalidApplicationNameException|CodeDeployApplicationAlreadyExistsException|CodeDeployApplicationLimitExceededException|any, data: CodeDeployCreateApplicationOutput|any) => void): void;
      createDeployment(params: CodeDeployCreateDeploymentInput, callback: (err: CodeDeployApplicationNameRequiredException|CodeDeployInvalidApplicationNameException|CodeDeployApplicationDoesNotExistException|CodeDeployDeploymentGroupNameRequiredException|CodeDeployInvalidDeploymentGroupNameException|CodeDeployDeploymentGroupDoesNotExistException|CodeDeployRevisionRequiredException|CodeDeployInvalidRevisionException|CodeDeployInvalidDeploymentConfigNameException|CodeDeployDeploymentConfigDoesNotExistException|CodeDeployDescriptionTooLongException|CodeDeployDeploymentLimitExceededException|any, data: CodeDeployCreateDeploymentOutput|any) => void): void;
      createDeploymentConfig(params: CodeDeployCreateDeploymentConfigInput, callback: (err: CodeDeployInvalidDeploymentConfigNameException|CodeDeployDeploymentConfigNameRequiredException|CodeDeployDeploymentConfigAlreadyExistsException|CodeDeployInvalidMinimumHealthyHostValueException|CodeDeployDeploymentConfigLimitExceededException|any, data: CodeDeployCreateDeploymentConfigOutput|any) => void): void;
      createDeploymentGroup(params: CodeDeployCreateDeploymentGroupInput, callback: (err: CodeDeployApplicationNameRequiredException|CodeDeployInvalidApplicationNameException|CodeDeployApplicationDoesNotExistException|CodeDeployDeploymentGroupNameRequiredException|CodeDeployInvalidDeploymentGroupNameException|CodeDeployDeploymentGroupAlreadyExistsException|CodeDeployInvalidEC2TagException|CodeDeployInvalidTagException|CodeDeployInvalidAutoScalingGroupException|CodeDeployInvalidDeploymentConfigNameException|CodeDeployDeploymentConfigDoesNotExistException|CodeDeployRoleRequiredException|CodeDeployInvalidRoleException|CodeDeployDeploymentGroupLimitExceededException|any, data: CodeDeployCreateDeploymentGroupOutput|any) => void): void;
      deleteApplication(params: CodeDeployDeleteApplicationInput, callback: (err: CodeDeployApplicationNameRequiredException|CodeDeployInvalidApplicationNameException|any, data: any) => void): void;
      deleteDeploymentConfig(params: CodeDeployDeleteDeploymentConfigInput, callback: (err: CodeDeployInvalidDeploymentConfigNameException|CodeDeployDeploymentConfigNameRequiredException|CodeDeployDeploymentConfigInUseException|CodeDeployInvalidOperationException|any, data: any) => void): void;
      deleteDeploymentGroup(params: CodeDeployDeleteDeploymentGroupInput, callback: (err: CodeDeployApplicationNameRequiredException|CodeDeployInvalidApplicationNameException|CodeDeployDeploymentGroupNameRequiredException|CodeDeployInvalidDeploymentGroupNameException|CodeDeployInvalidRoleException|any, data: CodeDeployDeleteDeploymentGroupOutput|any) => void): void;
      deregisterOnPremisesInstance(params: CodeDeployDeregisterOnPremisesInstanceInput, callback: (err: CodeDeployInstanceNameRequiredException|CodeDeployInvalidInstanceNameException|any, data: any) => void): void;
      getApplication(params: CodeDeployGetApplicationInput, callback: (err: CodeDeployApplicationNameRequiredException|CodeDeployInvalidApplicationNameException|CodeDeployApplicationDoesNotExistException|any, data: CodeDeployGetApplicationOutput|any) => void): void;
      getApplicationRevision(params: CodeDeployGetApplicationRevisionInput, callback: (err: CodeDeployApplicationDoesNotExistException|CodeDeployApplicationNameRequiredException|CodeDeployInvalidApplicationNameException|CodeDeployRevisionDoesNotExistException|CodeDeployRevisionRequiredException|CodeDeployInvalidRevisionException|any, data: CodeDeployGetApplicationRevisionOutput|any) => void): void;
      getDeployment(params: CodeDeployGetDeploymentInput, callback: (err: CodeDeployDeploymentIdRequiredException|CodeDeployInvalidDeploymentIdException|CodeDeployDeploymentDoesNotExistException|any, data: CodeDeployGetDeploymentOutput|any) => void): void;
      getDeploymentConfig(params: CodeDeployGetDeploymentConfigInput, callback: (err: CodeDeployInvalidDeploymentConfigNameException|CodeDeployDeploymentConfigNameRequiredException|CodeDeployDeploymentConfigDoesNotExistException|any, data: CodeDeployGetDeploymentConfigOutput|any) => void): void;
      getDeploymentGroup(params: CodeDeployGetDeploymentGroupInput, callback: (err: CodeDeployApplicationNameRequiredException|CodeDeployInvalidApplicationNameException|CodeDeployApplicationDoesNotExistException|CodeDeployDeploymentGroupNameRequiredException|CodeDeployInvalidDeploymentGroupNameException|CodeDeployDeploymentGroupDoesNotExistException|any, data: CodeDeployGetDeploymentGroupOutput|any) => void): void;
      getDeploymentInstance(params: CodeDeployGetDeploymentInstanceInput, callback: (err: CodeDeployDeploymentIdRequiredException|CodeDeployDeploymentDoesNotExistException|CodeDeployInstanceIdRequiredException|CodeDeployInvalidDeploymentIdException|CodeDeployInstanceDoesNotExistException|any, data: CodeDeployGetDeploymentInstanceOutput|any) => void): void;
      getOnPremisesInstance(params: CodeDeployGetOnPremisesInstanceInput, callback: (err: CodeDeployInstanceNameRequiredException|CodeDeployInstanceNotRegisteredException|CodeDeployInvalidInstanceNameException|any, data: CodeDeployGetOnPremisesInstanceOutput|any) => void): void;
      listApplicationRevisions(params: CodeDeployListApplicationRevisionsInput, callback: (err: CodeDeployApplicationDoesNotExistException|CodeDeployApplicationNameRequiredException|CodeDeployInvalidApplicationNameException|CodeDeployInvalidSortByException|CodeDeployInvalidSortOrderException|CodeDeployInvalidBucketNameFilterException|CodeDeployInvalidKeyPrefixFilterException|CodeDeployBucketNameFilterRequiredException|CodeDeployInvalidDeployedStateFilterException|CodeDeployInvalidNextTokenException|any, data: CodeDeployListApplicationRevisionsOutput|any) => void): void;
      listApplications(params: CodeDeployListApplicationsInput, callback: (err: CodeDeployInvalidNextTokenException|any, data: CodeDeployListApplicationsOutput|any) => void): void;
      listDeploymentConfigs(params: CodeDeployListDeploymentConfigsInput, callback: (err: CodeDeployInvalidNextTokenException|any, data: CodeDeployListDeploymentConfigsOutput|any) => void): void;
      listDeploymentGroups(params: CodeDeployListDeploymentGroupsInput, callback: (err: CodeDeployApplicationNameRequiredException|CodeDeployInvalidApplicationNameException|CodeDeployApplicationDoesNotExistException|CodeDeployInvalidNextTokenException|any, data: CodeDeployListDeploymentGroupsOutput|any) => void): void;
      listDeploymentInstances(params: CodeDeployListDeploymentInstancesInput, callback: (err: CodeDeployDeploymentIdRequiredException|CodeDeployDeploymentDoesNotExistException|CodeDeployDeploymentNotStartedException|CodeDeployInvalidNextTokenException|CodeDeployInvalidDeploymentIdException|CodeDeployInvalidInstanceStatusException|any, data: CodeDeployListDeploymentInstancesOutput|any) => void): void;
      listDeployments(params: CodeDeployListDeploymentsInput, callback: (err: CodeDeployApplicationNameRequiredException|CodeDeployInvalidApplicationNameException|CodeDeployApplicationDoesNotExistException|CodeDeployInvalidDeploymentGroupNameException|CodeDeployDeploymentGroupDoesNotExistException|CodeDeployDeploymentGroupNameRequiredException|CodeDeployInvalidTimeRangeException|CodeDeployInvalidDeploymentStatusException|CodeDeployInvalidNextTokenException|any, data: CodeDeployListDeploymentsOutput|any) => void): void;
      listOnPremisesInstances(params: CodeDeployListOnPremisesInstancesInput, callback: (err: CodeDeployInvalidRegistrationStatusException|CodeDeployInvalidTagFilterException|CodeDeployInvalidNextTokenException|any, data: CodeDeployListOnPremisesInstancesOutput|any) => void): void;
      registerApplicationRevision(params: CodeDeployRegisterApplicationRevisionInput, callback: (err: CodeDeployApplicationDoesNotExistException|CodeDeployApplicationNameRequiredException|CodeDeployInvalidApplicationNameException|CodeDeployDescriptionTooLongException|CodeDeployRevisionRequiredException|CodeDeployInvalidRevisionException|any, data: any) => void): void;
      registerOnPremisesInstance(params: CodeDeployRegisterOnPremisesInstanceInput, callback: (err: CodeDeployInstanceNameAlreadyRegisteredException|CodeDeployIamUserArnAlreadyRegisteredException|CodeDeployInstanceNameRequiredException|CodeDeployIamUserArnRequiredException|CodeDeployInvalidInstanceNameException|CodeDeployInvalidIamUserArnException|any, data: any) => void): void;
      removeTagsFromOnPremisesInstances(params: CodeDeployRemoveTagsFromOnPremisesInstancesInput, callback: (err: CodeDeployInstanceNameRequiredException|CodeDeployTagRequiredException|CodeDeployInvalidTagException|CodeDeployTagLimitExceededException|CodeDeployInstanceLimitExceededException|CodeDeployInstanceNotRegisteredException|any, data: any) => void): void;
      stopDeployment(params: CodeDeployStopDeploymentInput, callback: (err: CodeDeployDeploymentIdRequiredException|CodeDeployDeploymentDoesNotExistException|CodeDeployDeploymentAlreadyCompletedException|CodeDeployInvalidDeploymentIdException|any, data: CodeDeployStopDeploymentOutput|any) => void): void;
      updateApplication(params: CodeDeployUpdateApplicationInput, callback: (err: CodeDeployApplicationNameRequiredException|CodeDeployInvalidApplicationNameException|CodeDeployApplicationAlreadyExistsException|CodeDeployApplicationDoesNotExistException|any, data: any) => void): void;
      updateDeploymentGroup(params: CodeDeployUpdateDeploymentGroupInput, callback: (err: CodeDeployApplicationNameRequiredException|CodeDeployInvalidApplicationNameException|CodeDeployApplicationDoesNotExistException|CodeDeployInvalidDeploymentGroupNameException|CodeDeployDeploymentGroupAlreadyExistsException|CodeDeployDeploymentGroupNameRequiredException|CodeDeployDeploymentGroupDoesNotExistException|CodeDeployInvalidEC2TagException|CodeDeployInvalidTagException|CodeDeployInvalidAutoScalingGroupException|CodeDeployInvalidDeploymentConfigNameException|CodeDeployDeploymentConfigDoesNotExistException|CodeDeployInvalidRoleException|any, data: CodeDeployUpdateDeploymentGroupOutput|any) => void): void;
    }

    export interface CodeDeployAddTagsToOnPremisesInstancesInput {
        tags: CodeDeployTagList;
        instanceNames: CodeDeployInstanceNameList;
    }

    export interface CodeDeployApplicationAlreadyExistsException {
    }

    export interface CodeDeployApplicationDoesNotExistException {
    }

    export type CodeDeployApplicationId = string;
    export interface CodeDeployApplicationInfo {
        applicationId?: CodeDeployApplicationId;
        applicationName?: CodeDeployApplicationName;
        createTime?: CodeDeployTimestamp;
        linkedToGitHub?: CodeDeployBoolean;
    }

    export interface CodeDeployApplicationLimitExceededException {
    }

    export type CodeDeployApplicationName = string;
    export interface CodeDeployApplicationNameRequiredException {
    }

    export type CodeDeployApplicationRevisionSortBy = string;
    export type CodeDeployApplicationsInfoList = Array<CodeDeployApplicationInfo>;
    export type CodeDeployApplicationsList = Array<CodeDeployApplicationName>;
    export interface CodeDeployAutoScalingGroup {
        name?: CodeDeployAutoScalingGroupName;
        hook?: CodeDeployAutoScalingGroupHook;
    }

    export type CodeDeployAutoScalingGroupHook = string;
    export type CodeDeployAutoScalingGroupList = Array<CodeDeployAutoScalingGroup>;
    export type CodeDeployAutoScalingGroupName = string;
    export type CodeDeployAutoScalingGroupNameList = Array<CodeDeployAutoScalingGroupName>;
    export interface CodeDeployBatchGetApplicationsInput {
        applicationNames?: CodeDeployApplicationsList;
    }

    export interface CodeDeployBatchGetApplicationsOutput {
        applicationsInfo?: CodeDeployApplicationsInfoList;
    }

    export interface CodeDeployBatchGetDeploymentsInput {
        deploymentIds?: CodeDeployDeploymentsList;
    }

    export interface CodeDeployBatchGetDeploymentsOutput {
        deploymentsInfo?: CodeDeployDeploymentsInfoList;
    }

    export interface CodeDeployBatchGetOnPremisesInstancesInput {
        instanceNames?: CodeDeployInstanceNameList;
    }

    export interface CodeDeployBatchGetOnPremisesInstancesOutput {
        instanceInfos?: CodeDeployInstanceInfoList;
    }

    export type CodeDeployBoolean = boolean;
    export interface CodeDeployBucketNameFilterRequiredException {
    }

    export type CodeDeployBundleType = string;
    export type CodeDeployCommitId = string;
    export interface CodeDeployCreateApplicationInput {
        applicationName: CodeDeployApplicationName;
    }

    export interface CodeDeployCreateApplicationOutput {
        applicationId?: CodeDeployApplicationId;
    }

    export interface CodeDeployCreateDeploymentConfigInput {
        deploymentConfigName: CodeDeployDeploymentConfigName;
        minimumHealthyHosts?: CodeDeployMinimumHealthyHosts;
    }

    export interface CodeDeployCreateDeploymentConfigOutput {
        deploymentConfigId?: CodeDeployDeploymentConfigId;
    }

    export interface CodeDeployCreateDeploymentGroupInput {
        applicationName: CodeDeployApplicationName;
        deploymentGroupName: CodeDeployDeploymentGroupName;
        deploymentConfigName?: CodeDeployDeploymentConfigName;
        ec2TagFilters?: CodeDeployEC2TagFilterList;
        onPremisesInstanceTagFilters?: CodeDeployTagFilterList;
        autoScalingGroups?: CodeDeployAutoScalingGroupNameList;
        serviceRoleArn: CodeDeployRole;
    }

    export interface CodeDeployCreateDeploymentGroupOutput {
        deploymentGroupId?: CodeDeployDeploymentGroupId;
    }

    export interface CodeDeployCreateDeploymentInput {
        applicationName: CodeDeployApplicationName;
        deploymentGroupName?: CodeDeployDeploymentGroupName;
        revision?: CodeDeployRevisionLocation;
        deploymentConfigName?: CodeDeployDeploymentConfigName;
        description?: CodeDeployDescription;
        ignoreApplicationStopFailures?: CodeDeployBoolean;
    }

    export interface CodeDeployCreateDeploymentOutput {
        deploymentId?: CodeDeployDeploymentId;
    }

    export interface CodeDeployDeleteApplicationInput {
        applicationName: CodeDeployApplicationName;
    }

    export interface CodeDeployDeleteDeploymentConfigInput {
        deploymentConfigName: CodeDeployDeploymentConfigName;
    }

    export interface CodeDeployDeleteDeploymentGroupInput {
        applicationName: CodeDeployApplicationName;
        deploymentGroupName: CodeDeployDeploymentGroupName;
    }

    export interface CodeDeployDeleteDeploymentGroupOutput {
        hooksNotCleanedUp?: CodeDeployAutoScalingGroupList;
    }

    export interface CodeDeployDeploymentAlreadyCompletedException {
    }

    export interface CodeDeployDeploymentConfigAlreadyExistsException {
    }

    export interface CodeDeployDeploymentConfigDoesNotExistException {
    }

    export type CodeDeployDeploymentConfigId = string;
    export interface CodeDeployDeploymentConfigInUseException {
    }

    export interface CodeDeployDeploymentConfigInfo {
        deploymentConfigId?: CodeDeployDeploymentConfigId;
        deploymentConfigName?: CodeDeployDeploymentConfigName;
        minimumHealthyHosts?: CodeDeployMinimumHealthyHosts;
        createTime?: CodeDeployTimestamp;
    }

    export interface CodeDeployDeploymentConfigLimitExceededException {
    }

    export type CodeDeployDeploymentConfigName = string;
    export interface CodeDeployDeploymentConfigNameRequiredException {
    }

    export type CodeDeployDeploymentConfigsList = Array<CodeDeployDeploymentConfigName>;
    export type CodeDeployDeploymentCreator = string;
    export interface CodeDeployDeploymentDoesNotExistException {
    }

    export interface CodeDeployDeploymentGroupAlreadyExistsException {
    }

    export interface CodeDeployDeploymentGroupDoesNotExistException {
    }

    export type CodeDeployDeploymentGroupId = string;
    export interface CodeDeployDeploymentGroupInfo {
        applicationName?: CodeDeployApplicationName;
        deploymentGroupId?: CodeDeployDeploymentGroupId;
        deploymentGroupName?: CodeDeployDeploymentGroupName;
        deploymentConfigName?: CodeDeployDeploymentConfigName;
        ec2TagFilters?: CodeDeployEC2TagFilterList;
        onPremisesInstanceTagFilters?: CodeDeployTagFilterList;
        autoScalingGroups?: CodeDeployAutoScalingGroupList;
        serviceRoleArn?: CodeDeployRole;
        targetRevision?: CodeDeployRevisionLocation;
    }

    export interface CodeDeployDeploymentGroupLimitExceededException {
    }

    export type CodeDeployDeploymentGroupName = string;
    export interface CodeDeployDeploymentGroupNameRequiredException {
    }

    export type CodeDeployDeploymentGroupsList = Array<CodeDeployDeploymentGroupName>;
    export type CodeDeployDeploymentId = string;
    export interface CodeDeployDeploymentIdRequiredException {
    }

    export interface CodeDeployDeploymentInfo {
        applicationName?: CodeDeployApplicationName;
        deploymentGroupName?: CodeDeployDeploymentGroupName;
        deploymentConfigName?: CodeDeployDeploymentConfigName;
        deploymentId?: CodeDeployDeploymentId;
        revision?: CodeDeployRevisionLocation;
        status?: CodeDeployDeploymentStatus;
        errorInformation?: CodeDeployErrorInformation;
        createTime?: CodeDeployTimestamp;
        startTime?: CodeDeployTimestamp;
        completeTime?: CodeDeployTimestamp;
        deploymentOverview?: CodeDeployDeploymentOverview;
        description?: CodeDeployDescription;
        creator?: CodeDeployDeploymentCreator;
        ignoreApplicationStopFailures?: CodeDeployBoolean;
    }

    export interface CodeDeployDeploymentLimitExceededException {
    }

    export interface CodeDeployDeploymentNotStartedException {
    }

    export interface CodeDeployDeploymentOverview {
        Pending?: CodeDeployInstanceCount;
        InProgress?: CodeDeployInstanceCount;
        Succeeded?: CodeDeployInstanceCount;
        Failed?: CodeDeployInstanceCount;
        Skipped?: CodeDeployInstanceCount;
    }

    export type CodeDeployDeploymentStatus = string;
    export type CodeDeployDeploymentStatusList = Array<CodeDeployDeploymentStatus>;
    export type CodeDeployDeploymentsInfoList = Array<CodeDeployDeploymentInfo>;
    export type CodeDeployDeploymentsList = Array<CodeDeployDeploymentId>;
    export interface CodeDeployDeregisterOnPremisesInstanceInput {
        instanceName: CodeDeployInstanceName;
    }

    export type CodeDeployDescription = string;
    export interface CodeDeployDescriptionTooLongException {
    }

    export interface CodeDeployDiagnostics {
        errorCode?: CodeDeployLifecycleErrorCode;
        scriptName?: CodeDeployScriptName;
        message?: CodeDeployLifecycleMessage;
        logTail?: CodeDeployLogTail;
    }

    export interface CodeDeployEC2TagFilter {
        Key?: CodeDeployKey;
        Value?: CodeDeployValue;
        Type?: CodeDeployEC2TagFilterType;
    }

    export type CodeDeployEC2TagFilterList = Array<CodeDeployEC2TagFilter>;
    export type CodeDeployEC2TagFilterType = string;
    export type CodeDeployETag = string;
    export type CodeDeployErrorCode = string;
    export interface CodeDeployErrorInformation {
        code?: CodeDeployErrorCode;
        message?: CodeDeployErrorMessage;
    }

    export type CodeDeployErrorMessage = string;
    export interface CodeDeployGenericRevisionInfo {
        description?: CodeDeployDescription;
        deploymentGroups?: CodeDeployDeploymentGroupsList;
        firstUsedTime?: CodeDeployTimestamp;
        lastUsedTime?: CodeDeployTimestamp;
        registerTime?: CodeDeployTimestamp;
    }

    export interface CodeDeployGetApplicationInput {
        applicationName: CodeDeployApplicationName;
    }

    export interface CodeDeployGetApplicationOutput {
        application?: CodeDeployApplicationInfo;
    }

    export interface CodeDeployGetApplicationRevisionInput {
        applicationName: CodeDeployApplicationName;
        revision: CodeDeployRevisionLocation;
    }

    export interface CodeDeployGetApplicationRevisionOutput {
        applicationName?: CodeDeployApplicationName;
        revision?: CodeDeployRevisionLocation;
        revisionInfo?: CodeDeployGenericRevisionInfo;
    }

    export interface CodeDeployGetDeploymentConfigInput {
        deploymentConfigName: CodeDeployDeploymentConfigName;
    }

    export interface CodeDeployGetDeploymentConfigOutput {
        deploymentConfigInfo?: CodeDeployDeploymentConfigInfo;
    }

    export interface CodeDeployGetDeploymentGroupInput {
        applicationName: CodeDeployApplicationName;
        deploymentGroupName: CodeDeployDeploymentGroupName;
    }

    export interface CodeDeployGetDeploymentGroupOutput {
        deploymentGroupInfo?: CodeDeployDeploymentGroupInfo;
    }

    export interface CodeDeployGetDeploymentInput {
        deploymentId: CodeDeployDeploymentId;
    }

    export interface CodeDeployGetDeploymentInstanceInput {
        deploymentId: CodeDeployDeploymentId;
        instanceId: CodeDeployInstanceId;
    }

    export interface CodeDeployGetDeploymentInstanceOutput {
        instanceSummary?: CodeDeployInstanceSummary;
    }

    export interface CodeDeployGetDeploymentOutput {
        deploymentInfo?: CodeDeployDeploymentInfo;
    }

    export interface CodeDeployGetOnPremisesInstanceInput {
        instanceName: CodeDeployInstanceName;
    }

    export interface CodeDeployGetOnPremisesInstanceOutput {
        instanceInfo?: CodeDeployInstanceInfo;
    }

    export interface CodeDeployGitHubLocation {
        repository?: CodeDeployRepository;
        commitId?: CodeDeployCommitId;
    }

    export type CodeDeployIamUserArn = string;
    export interface CodeDeployIamUserArnAlreadyRegisteredException {
    }

    export interface CodeDeployIamUserArnRequiredException {
    }

    export type CodeDeployInstanceArn = string;
    export type CodeDeployInstanceCount = number;
    export interface CodeDeployInstanceDoesNotExistException {
    }

    export type CodeDeployInstanceId = string;
    export interface CodeDeployInstanceIdRequiredException {
    }

    export interface CodeDeployInstanceInfo {
        instanceName?: CodeDeployInstanceName;
        iamUserArn?: CodeDeployIamUserArn;
        instanceArn?: CodeDeployInstanceArn;
        registerTime?: CodeDeployTimestamp;
        deregisterTime?: CodeDeployTimestamp;
        tags?: CodeDeployTagList;
    }

    export type CodeDeployInstanceInfoList = Array<CodeDeployInstanceInfo>;
    export interface CodeDeployInstanceLimitExceededException {
    }

    export type CodeDeployInstanceName = string;
    export interface CodeDeployInstanceNameAlreadyRegisteredException {
    }

    export type CodeDeployInstanceNameList = Array<CodeDeployInstanceName>;
    export interface CodeDeployInstanceNameRequiredException {
    }

    export interface CodeDeployInstanceNotRegisteredException {
    }

    export type CodeDeployInstanceStatus = string;
    export type CodeDeployInstanceStatusList = Array<CodeDeployInstanceStatus>;
    export interface CodeDeployInstanceSummary {
        deploymentId?: CodeDeployDeploymentId;
        instanceId?: CodeDeployInstanceId;
        status?: CodeDeployInstanceStatus;
        lastUpdatedAt?: CodeDeployTimestamp;
        lifecycleEvents?: CodeDeployLifecycleEventList;
    }

    export type CodeDeployInstancesList = Array<CodeDeployInstanceId>;
    export interface CodeDeployInvalidApplicationNameException {
    }

    export interface CodeDeployInvalidAutoScalingGroupException {
    }

    export interface CodeDeployInvalidBucketNameFilterException {
    }

    export interface CodeDeployInvalidDeployedStateFilterException {
    }

    export interface CodeDeployInvalidDeploymentConfigNameException {
    }

    export interface CodeDeployInvalidDeploymentGroupNameException {
    }

    export interface CodeDeployInvalidDeploymentIdException {
    }

    export interface CodeDeployInvalidDeploymentStatusException {
    }

    export interface CodeDeployInvalidEC2TagException {
    }

    export interface CodeDeployInvalidIamUserArnException {
    }

    export interface CodeDeployInvalidInstanceNameException {
    }

    export interface CodeDeployInvalidInstanceStatusException {
    }

    export interface CodeDeployInvalidKeyPrefixFilterException {
    }

    export interface CodeDeployInvalidMinimumHealthyHostValueException {
    }

    export interface CodeDeployInvalidNextTokenException {
    }

    export interface CodeDeployInvalidOperationException {
    }

    export interface CodeDeployInvalidRegistrationStatusException {
    }

    export interface CodeDeployInvalidRevisionException {
    }

    export interface CodeDeployInvalidRoleException {
    }

    export interface CodeDeployInvalidSortByException {
    }

    export interface CodeDeployInvalidSortOrderException {
    }

    export interface CodeDeployInvalidTagException {
    }

    export interface CodeDeployInvalidTagFilterException {
    }

    export interface CodeDeployInvalidTimeRangeException {
    }

    export type CodeDeployKey = string;
    export type CodeDeployLifecycleErrorCode = string;
    export interface CodeDeployLifecycleEvent {
        lifecycleEventName?: CodeDeployLifecycleEventName;
        diagnostics?: CodeDeployDiagnostics;
        startTime?: CodeDeployTimestamp;
        endTime?: CodeDeployTimestamp;
        status?: CodeDeployLifecycleEventStatus;
    }

    export type CodeDeployLifecycleEventList = Array<CodeDeployLifecycleEvent>;
    export type CodeDeployLifecycleEventName = string;
    export type CodeDeployLifecycleEventStatus = string;
    export type CodeDeployLifecycleMessage = string;
    export interface CodeDeployListApplicationRevisionsInput {
        applicationName: CodeDeployApplicationName;
        sortBy?: CodeDeployApplicationRevisionSortBy;
        sortOrder?: CodeDeploySortOrder;
        s3Bucket?: CodeDeployS3Bucket;
        s3KeyPrefix?: CodeDeployS3Key;
        deployed?: CodeDeployListStateFilterAction;
        nextToken?: CodeDeployNextToken;
    }

    export interface CodeDeployListApplicationRevisionsOutput {
        revisions?: CodeDeployRevisionLocationList;
        nextToken?: CodeDeployNextToken;
    }

    export interface CodeDeployListApplicationsInput {
        nextToken?: CodeDeployNextToken;
    }

    export interface CodeDeployListApplicationsOutput {
        applications?: CodeDeployApplicationsList;
        nextToken?: CodeDeployNextToken;
    }

    export interface CodeDeployListDeploymentConfigsInput {
        nextToken?: CodeDeployNextToken;
    }

    export interface CodeDeployListDeploymentConfigsOutput {
        deploymentConfigsList?: CodeDeployDeploymentConfigsList;
        nextToken?: CodeDeployNextToken;
    }

    export interface CodeDeployListDeploymentGroupsInput {
        applicationName: CodeDeployApplicationName;
        nextToken?: CodeDeployNextToken;
    }

    export interface CodeDeployListDeploymentGroupsOutput {
        applicationName?: CodeDeployApplicationName;
        deploymentGroups?: CodeDeployDeploymentGroupsList;
        nextToken?: CodeDeployNextToken;
    }

    export interface CodeDeployListDeploymentInstancesInput {
        deploymentId: CodeDeployDeploymentId;
        nextToken?: CodeDeployNextToken;
        instanceStatusFilter?: CodeDeployInstanceStatusList;
    }

    export interface CodeDeployListDeploymentInstancesOutput {
        instancesList?: CodeDeployInstancesList;
        nextToken?: CodeDeployNextToken;
    }

    export interface CodeDeployListDeploymentsInput {
        applicationName?: CodeDeployApplicationName;
        deploymentGroupName?: CodeDeployDeploymentGroupName;
        includeOnlyStatuses?: CodeDeployDeploymentStatusList;
        createTimeRange?: CodeDeployTimeRange;
        nextToken?: CodeDeployNextToken;
    }

    export interface CodeDeployListDeploymentsOutput {
        deployments?: CodeDeployDeploymentsList;
        nextToken?: CodeDeployNextToken;
    }

    export interface CodeDeployListOnPremisesInstancesInput {
        registrationStatus?: CodeDeployRegistrationStatus;
        tagFilters?: CodeDeployTagFilterList;
        nextToken?: CodeDeployNextToken;
    }

    export interface CodeDeployListOnPremisesInstancesOutput {
        instanceNames?: CodeDeployInstanceNameList;
        nextToken?: CodeDeployNextToken;
    }

    export type CodeDeployListStateFilterAction = string;
    export type CodeDeployLogTail = string;
    export type CodeDeployMessage = string;
    export interface CodeDeployMinimumHealthyHosts {
        value?: CodeDeployMinimumHealthyHostsValue;
        type?: CodeDeployMinimumHealthyHostsType;
    }

    export type CodeDeployMinimumHealthyHostsType = string;
    export type CodeDeployMinimumHealthyHostsValue = number;
    export type CodeDeployNextToken = string;
    export interface CodeDeployRegisterApplicationRevisionInput {
        applicationName: CodeDeployApplicationName;
        description?: CodeDeployDescription;
        revision: CodeDeployRevisionLocation;
    }

    export interface CodeDeployRegisterOnPremisesInstanceInput {
        instanceName: CodeDeployInstanceName;
        iamUserArn: CodeDeployIamUserArn;
    }

    export type CodeDeployRegistrationStatus = string;
    export interface CodeDeployRemoveTagsFromOnPremisesInstancesInput {
        tags: CodeDeployTagList;
        instanceNames: CodeDeployInstanceNameList;
    }

    export type CodeDeployRepository = string;
    export interface CodeDeployRevisionDoesNotExistException {
    }

    export interface CodeDeployRevisionLocation {
        revisionType?: CodeDeployRevisionLocationType;
        s3Location?: CodeDeployS3Location;
        gitHubLocation?: CodeDeployGitHubLocation;
    }

    export type CodeDeployRevisionLocationList = Array<CodeDeployRevisionLocation>;
    export type CodeDeployRevisionLocationType = string;
    export interface CodeDeployRevisionRequiredException {
    }

    export type CodeDeployRole = string;
    export interface CodeDeployRoleRequiredException {
    }

    export type CodeDeployS3Bucket = string;
    export type CodeDeployS3Key = string;
    export interface CodeDeployS3Location {
        bucket?: CodeDeployS3Bucket;
        key?: CodeDeployS3Key;
        bundleType?: CodeDeployBundleType;
        version?: CodeDeployVersionId;
        eTag?: CodeDeployETag;
    }

    export type CodeDeployScriptName = string;
    export type CodeDeploySortOrder = string;
    export interface CodeDeployStopDeploymentInput {
        deploymentId: CodeDeployDeploymentId;
    }

    export interface CodeDeployStopDeploymentOutput {
        status?: CodeDeployStopStatus;
        statusMessage?: CodeDeployMessage;
    }

    export type CodeDeployStopStatus = string;
    export interface CodeDeployTag {
        Key?: CodeDeployKey;
        Value?: CodeDeployValue;
    }

    export interface CodeDeployTagFilter {
        Key?: CodeDeployKey;
        Value?: CodeDeployValue;
        Type?: CodeDeployTagFilterType;
    }

    export type CodeDeployTagFilterList = Array<CodeDeployTagFilter>;
    export type CodeDeployTagFilterType = string;
    export interface CodeDeployTagLimitExceededException {
    }

    export type CodeDeployTagList = Array<CodeDeployTag>;
    export interface CodeDeployTagRequiredException {
    }

    export interface CodeDeployTimeRange {
        start?: CodeDeployTimestamp;
        end?: CodeDeployTimestamp;
    }

    export type CodeDeployTimestamp = number;
    export interface CodeDeployUpdateApplicationInput {
        applicationName?: CodeDeployApplicationName;
        newApplicationName?: CodeDeployApplicationName;
    }

    export interface CodeDeployUpdateDeploymentGroupInput {
        applicationName: CodeDeployApplicationName;
        currentDeploymentGroupName: CodeDeployDeploymentGroupName;
        newDeploymentGroupName?: CodeDeployDeploymentGroupName;
        deploymentConfigName?: CodeDeployDeploymentConfigName;
        ec2TagFilters?: CodeDeployEC2TagFilterList;
        onPremisesInstanceTagFilters?: CodeDeployTagFilterList;
        autoScalingGroups?: CodeDeployAutoScalingGroupNameList;
        serviceRoleArn?: CodeDeployRole;
    }

    export interface CodeDeployUpdateDeploymentGroupOutput {
        hooksNotCleanedUp?: CodeDeployAutoScalingGroupList;
    }

    export type CodeDeployValue = string;
    export type CodeDeployVersionId = string;
}
