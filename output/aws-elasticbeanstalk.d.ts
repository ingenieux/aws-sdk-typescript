// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {

    export class ElasticBeanstalk extends Service {
      constructor(options?: any);
      abortEnvironmentUpdate(params: ElasticBeanstalkAbortEnvironmentUpdateMessage, callback?: (err: ElasticBeanstalkInsufficientPrivilegesException|any, data: any) => void): Request;
      checkDNSAvailability(params: ElasticBeanstalkCheckDNSAvailabilityMessage, callback?: (err: any, data: ElasticBeanstalkCheckDNSAvailabilityResultMessage|any) => void): Request;
      composeEnvironments(params: ElasticBeanstalkComposeEnvironmentsMessage, callback?: (err: ElasticBeanstalkTooManyEnvironmentsException|ElasticBeanstalkInsufficientPrivilegesException|any, data: ElasticBeanstalkEnvironmentDescriptionsMessage|any) => void): Request;
      createApplication(params: ElasticBeanstalkCreateApplicationMessage, callback?: (err: ElasticBeanstalkTooManyApplicationsException|any, data: ElasticBeanstalkApplicationDescriptionMessage|any) => void): Request;
      createApplicationVersion(params: ElasticBeanstalkCreateApplicationVersionMessage, callback?: (err: ElasticBeanstalkTooManyApplicationsException|ElasticBeanstalkTooManyApplicationVersionsException|ElasticBeanstalkInsufficientPrivilegesException|ElasticBeanstalkS3LocationNotInServiceRegionException|any, data: ElasticBeanstalkApplicationVersionDescriptionMessage|any) => void): Request;
      createConfigurationTemplate(params: ElasticBeanstalkCreateConfigurationTemplateMessage, callback?: (err: ElasticBeanstalkInsufficientPrivilegesException|ElasticBeanstalkTooManyConfigurationTemplatesException|any, data: ElasticBeanstalkConfigurationSettingsDescription|any) => void): Request;
      createEnvironment(params: ElasticBeanstalkCreateEnvironmentMessage, callback?: (err: ElasticBeanstalkTooManyEnvironmentsException|ElasticBeanstalkInsufficientPrivilegesException|any, data: ElasticBeanstalkEnvironmentDescription|any) => void): Request;
      createStorageLocation(callback?: (err: ElasticBeanstalkTooManyBucketsException|ElasticBeanstalkS3SubscriptionRequiredException|ElasticBeanstalkInsufficientPrivilegesException|any, data: ElasticBeanstalkCreateStorageLocationResultMessage|any) => void): Request;
      deleteApplication(params: ElasticBeanstalkDeleteApplicationMessage, callback?: (err: ElasticBeanstalkOperationInProgressException|any, data: any) => void): Request;
      deleteApplicationVersion(params: ElasticBeanstalkDeleteApplicationVersionMessage, callback?: (err: ElasticBeanstalkSourceBundleDeletionException|ElasticBeanstalkInsufficientPrivilegesException|ElasticBeanstalkOperationInProgressException|ElasticBeanstalkS3LocationNotInServiceRegionException|any, data: any) => void): Request;
      deleteConfigurationTemplate(params: ElasticBeanstalkDeleteConfigurationTemplateMessage, callback?: (err: ElasticBeanstalkOperationInProgressException|any, data: any) => void): Request;
      deleteEnvironmentConfiguration(params: ElasticBeanstalkDeleteEnvironmentConfigurationMessage, callback?: (err: any, data: any) => void): Request;
      describeApplicationVersions(params: ElasticBeanstalkDescribeApplicationVersionsMessage, callback?: (err: any, data: ElasticBeanstalkApplicationVersionDescriptionsMessage|any) => void): Request;
      describeApplications(params: ElasticBeanstalkDescribeApplicationsMessage, callback?: (err: any, data: ElasticBeanstalkApplicationDescriptionsMessage|any) => void): Request;
      describeConfigurationOptions(params: ElasticBeanstalkDescribeConfigurationOptionsMessage, callback?: (err: any, data: ElasticBeanstalkConfigurationOptionsDescription|any) => void): Request;
      describeConfigurationSettings(params: ElasticBeanstalkDescribeConfigurationSettingsMessage, callback?: (err: any, data: ElasticBeanstalkConfigurationSettingsDescriptions|any) => void): Request;
      describeEnvironmentHealth(params: ElasticBeanstalkDescribeEnvironmentHealthRequest, callback?: (err: ElasticBeanstalkInvalidRequestException|ElasticBeanstalkElasticBeanstalkServiceException|any, data: ElasticBeanstalkDescribeEnvironmentHealthResult|any) => void): Request;
      describeEnvironmentResources(params: ElasticBeanstalkDescribeEnvironmentResourcesMessage, callback?: (err: ElasticBeanstalkInsufficientPrivilegesException|any, data: ElasticBeanstalkEnvironmentResourceDescriptionsMessage|any) => void): Request;
      describeEnvironments(params: ElasticBeanstalkDescribeEnvironmentsMessage, callback?: (err: any, data: ElasticBeanstalkEnvironmentDescriptionsMessage|any) => void): Request;
      describeEvents(params: ElasticBeanstalkDescribeEventsMessage, callback?: (err: any, data: ElasticBeanstalkEventDescriptionsMessage|any) => void): Request;
      describeInstancesHealth(params: ElasticBeanstalkDescribeInstancesHealthRequest, callback?: (err: ElasticBeanstalkInvalidRequestException|ElasticBeanstalkElasticBeanstalkServiceException|any, data: ElasticBeanstalkDescribeInstancesHealthResult|any) => void): Request;
      listAvailableSolutionStacks(callback?: (err: any, data: ElasticBeanstalkListAvailableSolutionStacksResultMessage|any) => void): Request;
      rebuildEnvironment(params: ElasticBeanstalkRebuildEnvironmentMessage, callback?: (err: ElasticBeanstalkInsufficientPrivilegesException|any, data: any) => void): Request;
      requestEnvironmentInfo(params: ElasticBeanstalkRequestEnvironmentInfoMessage, callback?: (err: any, data: any) => void): Request;
      restartAppServer(params: ElasticBeanstalkRestartAppServerMessage, callback?: (err: any, data: any) => void): Request;
      retrieveEnvironmentInfo(params: ElasticBeanstalkRetrieveEnvironmentInfoMessage, callback?: (err: any, data: ElasticBeanstalkRetrieveEnvironmentInfoResultMessage|any) => void): Request;
      swapEnvironmentCNAMEs(params: ElasticBeanstalkSwapEnvironmentCNAMEsMessage, callback?: (err: any, data: any) => void): Request;
      terminateEnvironment(params: ElasticBeanstalkTerminateEnvironmentMessage, callback?: (err: ElasticBeanstalkInsufficientPrivilegesException|any, data: ElasticBeanstalkEnvironmentDescription|any) => void): Request;
      updateApplication(params: ElasticBeanstalkUpdateApplicationMessage, callback?: (err: any, data: ElasticBeanstalkApplicationDescriptionMessage|any) => void): Request;
      updateApplicationVersion(params: ElasticBeanstalkUpdateApplicationVersionMessage, callback?: (err: any, data: ElasticBeanstalkApplicationVersionDescriptionMessage|any) => void): Request;
      updateConfigurationTemplate(params: ElasticBeanstalkUpdateConfigurationTemplateMessage, callback?: (err: ElasticBeanstalkInsufficientPrivilegesException|any, data: ElasticBeanstalkConfigurationSettingsDescription|any) => void): Request;
      updateEnvironment(params: ElasticBeanstalkUpdateEnvironmentMessage, callback?: (err: ElasticBeanstalkInsufficientPrivilegesException|any, data: ElasticBeanstalkEnvironmentDescription|any) => void): Request;
      validateConfigurationSettings(params: ElasticBeanstalkValidateConfigurationSettingsMessage, callback?: (err: ElasticBeanstalkInsufficientPrivilegesException|any, data: ElasticBeanstalkConfigurationSettingsValidationMessages|any) => void): Request;
    }

    export interface ElasticBeanstalkAbortEnvironmentUpdateMessage {
        EnvironmentId?: ElasticBeanstalkEnvironmentId;
        EnvironmentName?: ElasticBeanstalkEnvironmentName;
    }

    export type ElasticBeanstalkAbortableOperationInProgress = boolean;
    export interface ElasticBeanstalkApplicationDescription {
        ApplicationName?: ElasticBeanstalkApplicationName;
        Description?: ElasticBeanstalkDescription;
        DateCreated?: ElasticBeanstalkCreationDate;
        DateUpdated?: ElasticBeanstalkUpdateDate;
        Versions?: ElasticBeanstalkVersionLabelsList;
        ConfigurationTemplates?: ElasticBeanstalkConfigurationTemplateNamesList;
    }

    export type ElasticBeanstalkApplicationDescriptionList = Array<ElasticBeanstalkApplicationDescription>;
    export interface ElasticBeanstalkApplicationDescriptionMessage {
        Application?: ElasticBeanstalkApplicationDescription;
    }

    export interface ElasticBeanstalkApplicationDescriptionsMessage {
        Applications?: ElasticBeanstalkApplicationDescriptionList;
    }

    export interface ElasticBeanstalkApplicationMetrics {
        Duration?: ElasticBeanstalkNullableInteger;
        RequestCount?: ElasticBeanstalkRequestCount;
        StatusCodes?: ElasticBeanstalkStatusCodes;
        Latency?: ElasticBeanstalkLatency;
    }

    export type ElasticBeanstalkApplicationName = string;
    export type ElasticBeanstalkApplicationNamesList = Array<ElasticBeanstalkApplicationName>;
    export interface ElasticBeanstalkApplicationVersionDescription {
        ApplicationName?: ElasticBeanstalkApplicationName;
        Description?: ElasticBeanstalkDescription;
        VersionLabel?: ElasticBeanstalkVersionLabel;
        SourceBundle?: ElasticBeanstalkS3Location;
        DateCreated?: ElasticBeanstalkCreationDate;
        DateUpdated?: ElasticBeanstalkUpdateDate;
        Status?: ElasticBeanstalkApplicationVersionStatus;
    }

    export type ElasticBeanstalkApplicationVersionDescriptionList = Array<ElasticBeanstalkApplicationVersionDescription>;
    export interface ElasticBeanstalkApplicationVersionDescriptionMessage {
        ApplicationVersion?: ElasticBeanstalkApplicationVersionDescription;
    }

    export interface ElasticBeanstalkApplicationVersionDescriptionsMessage {
        ApplicationVersions?: ElasticBeanstalkApplicationVersionDescriptionList;
    }

    export type ElasticBeanstalkApplicationVersionProccess = boolean;
    export type ElasticBeanstalkApplicationVersionStatus = string;
    export type ElasticBeanstalkAutoCreateApplication = boolean;
    export interface ElasticBeanstalkAutoScalingGroup {
        Name?: ElasticBeanstalkResourceId;
    }

    export type ElasticBeanstalkAutoScalingGroupList = Array<ElasticBeanstalkAutoScalingGroup>;
    export type ElasticBeanstalkAvailableSolutionStackDetailsList = Array<ElasticBeanstalkSolutionStackDescription>;
    export type ElasticBeanstalkAvailableSolutionStackNamesList = Array<ElasticBeanstalkSolutionStackName>;
    export interface ElasticBeanstalkCPUUtilization {
        User?: ElasticBeanstalkNullableDouble;
        Nice?: ElasticBeanstalkNullableDouble;
        System?: ElasticBeanstalkNullableDouble;
        Idle?: ElasticBeanstalkNullableDouble;
        IOWait?: ElasticBeanstalkNullableDouble;
        IRQ?: ElasticBeanstalkNullableDouble;
        SoftIRQ?: ElasticBeanstalkNullableDouble;
    }

    export type ElasticBeanstalkCause = string;
    export type ElasticBeanstalkCauses = Array<ElasticBeanstalkCause>;
    export interface ElasticBeanstalkCheckDNSAvailabilityMessage {
        CNAMEPrefix: ElasticBeanstalkDNSCnamePrefix;
    }

    export interface ElasticBeanstalkCheckDNSAvailabilityResultMessage {
        Available?: ElasticBeanstalkCnameAvailability;
        FullyQualifiedCNAME?: ElasticBeanstalkDNSCname;
    }

    export type ElasticBeanstalkCnameAvailability = boolean;
    export interface ElasticBeanstalkComposeEnvironmentsMessage {
        ApplicationName?: ElasticBeanstalkApplicationName;
        GroupName?: ElasticBeanstalkGroupName;
        VersionLabels?: ElasticBeanstalkVersionLabels;
    }

    export type ElasticBeanstalkConfigurationDeploymentStatus = string;
    export type ElasticBeanstalkConfigurationOptionDefaultValue = string;
    export interface ElasticBeanstalkConfigurationOptionDescription {
        Namespace?: ElasticBeanstalkOptionNamespace;
        Name?: ElasticBeanstalkConfigurationOptionName;
        DefaultValue?: ElasticBeanstalkConfigurationOptionDefaultValue;
        ChangeSeverity?: ElasticBeanstalkConfigurationOptionSeverity;
        UserDefined?: ElasticBeanstalkUserDefinedOption;
        ValueType?: ElasticBeanstalkConfigurationOptionValueType;
        ValueOptions?: ElasticBeanstalkConfigurationOptionPossibleValues;
        MinValue?: ElasticBeanstalkOptionRestrictionMinValue;
        MaxValue?: ElasticBeanstalkOptionRestrictionMaxValue;
        MaxLength?: ElasticBeanstalkOptionRestrictionMaxLength;
        Regex?: ElasticBeanstalkOptionRestrictionRegex;
    }

    export type ElasticBeanstalkConfigurationOptionDescriptionsList = Array<ElasticBeanstalkConfigurationOptionDescription>;
    export type ElasticBeanstalkConfigurationOptionName = string;
    export type ElasticBeanstalkConfigurationOptionPossibleValue = string;
    export type ElasticBeanstalkConfigurationOptionPossibleValues = Array<ElasticBeanstalkConfigurationOptionPossibleValue>;
    export interface ElasticBeanstalkConfigurationOptionSetting {
        ResourceName?: ElasticBeanstalkResourceName;
        Namespace?: ElasticBeanstalkOptionNamespace;
        OptionName?: ElasticBeanstalkConfigurationOptionName;
        Value?: ElasticBeanstalkConfigurationOptionValue;
    }

    export type ElasticBeanstalkConfigurationOptionSettingsList = Array<ElasticBeanstalkConfigurationOptionSetting>;
    export type ElasticBeanstalkConfigurationOptionSeverity = string;
    export type ElasticBeanstalkConfigurationOptionValue = string;
    export type ElasticBeanstalkConfigurationOptionValueType = string;
    export interface ElasticBeanstalkConfigurationOptionsDescription {
        SolutionStackName?: ElasticBeanstalkSolutionStackName;
        Options?: ElasticBeanstalkConfigurationOptionDescriptionsList;
    }

    export interface ElasticBeanstalkConfigurationSettingsDescription {
        SolutionStackName?: ElasticBeanstalkSolutionStackName;
        ApplicationName?: ElasticBeanstalkApplicationName;
        TemplateName?: ElasticBeanstalkConfigurationTemplateName;
        Description?: ElasticBeanstalkDescription;
        EnvironmentName?: ElasticBeanstalkEnvironmentName;
        DeploymentStatus?: ElasticBeanstalkConfigurationDeploymentStatus;
        DateCreated?: ElasticBeanstalkCreationDate;
        DateUpdated?: ElasticBeanstalkUpdateDate;
        OptionSettings?: ElasticBeanstalkConfigurationOptionSettingsList;
    }

    export type ElasticBeanstalkConfigurationSettingsDescriptionList = Array<ElasticBeanstalkConfigurationSettingsDescription>;
    export interface ElasticBeanstalkConfigurationSettingsDescriptions {
        ConfigurationSettings?: ElasticBeanstalkConfigurationSettingsDescriptionList;
    }

    export interface ElasticBeanstalkConfigurationSettingsValidationMessages {
        Messages?: ElasticBeanstalkValidationMessagesList;
    }

    export type ElasticBeanstalkConfigurationTemplateName = string;
    export type ElasticBeanstalkConfigurationTemplateNamesList = Array<ElasticBeanstalkConfigurationTemplateName>;
    export interface ElasticBeanstalkCreateApplicationMessage {
        ApplicationName: ElasticBeanstalkApplicationName;
        Description?: ElasticBeanstalkDescription;
    }

    export interface ElasticBeanstalkCreateApplicationVersionMessage {
        ApplicationName: ElasticBeanstalkApplicationName;
        VersionLabel: ElasticBeanstalkVersionLabel;
        Description?: ElasticBeanstalkDescription;
        SourceBundle?: ElasticBeanstalkS3Location;
        AutoCreateApplication?: ElasticBeanstalkAutoCreateApplication;
        Process?: ElasticBeanstalkApplicationVersionProccess;
    }

    export interface ElasticBeanstalkCreateConfigurationTemplateMessage {
        ApplicationName: ElasticBeanstalkApplicationName;
        TemplateName: ElasticBeanstalkConfigurationTemplateName;
        SolutionStackName?: ElasticBeanstalkSolutionStackName;
        SourceConfiguration?: ElasticBeanstalkSourceConfiguration;
        EnvironmentId?: ElasticBeanstalkEnvironmentId;
        Description?: ElasticBeanstalkDescription;
        OptionSettings?: ElasticBeanstalkConfigurationOptionSettingsList;
    }

    export interface ElasticBeanstalkCreateEnvironmentMessage {
        ApplicationName: ElasticBeanstalkApplicationName;
        EnvironmentName?: ElasticBeanstalkEnvironmentName;
        GroupName?: ElasticBeanstalkGroupName;
        Description?: ElasticBeanstalkDescription;
        CNAMEPrefix?: ElasticBeanstalkDNSCnamePrefix;
        Tier?: ElasticBeanstalkEnvironmentTier;
        Tags?: ElasticBeanstalkTags;
        VersionLabel?: ElasticBeanstalkVersionLabel;
        TemplateName?: ElasticBeanstalkConfigurationTemplateName;
        SolutionStackName?: ElasticBeanstalkSolutionStackName;
        OptionSettings?: ElasticBeanstalkConfigurationOptionSettingsList;
        OptionsToRemove?: ElasticBeanstalkOptionsSpecifierList;
    }

    export interface ElasticBeanstalkCreateStorageLocationResultMessage {
        S3Bucket?: ElasticBeanstalkS3Bucket;
    }

    export type ElasticBeanstalkCreationDate = number;
    export type ElasticBeanstalkDNSCname = string;
    export type ElasticBeanstalkDNSCnamePrefix = string;
    export interface ElasticBeanstalkDeleteApplicationMessage {
        ApplicationName: ElasticBeanstalkApplicationName;
        TerminateEnvByForce?: ElasticBeanstalkTerminateEnvForce;
    }

    export interface ElasticBeanstalkDeleteApplicationVersionMessage {
        ApplicationName: ElasticBeanstalkApplicationName;
        VersionLabel: ElasticBeanstalkVersionLabel;
        DeleteSourceBundle?: ElasticBeanstalkDeleteSourceBundle;
    }

    export interface ElasticBeanstalkDeleteConfigurationTemplateMessage {
        ApplicationName: ElasticBeanstalkApplicationName;
        TemplateName: ElasticBeanstalkConfigurationTemplateName;
    }

    export interface ElasticBeanstalkDeleteEnvironmentConfigurationMessage {
        ApplicationName: ElasticBeanstalkApplicationName;
        EnvironmentName: ElasticBeanstalkEnvironmentName;
    }

    export type ElasticBeanstalkDeleteSourceBundle = boolean;
    export interface ElasticBeanstalkDescribeApplicationVersionsMessage {
        ApplicationName?: ElasticBeanstalkApplicationName;
        VersionLabels?: ElasticBeanstalkVersionLabelsList;
    }

    export interface ElasticBeanstalkDescribeApplicationsMessage {
        ApplicationNames?: ElasticBeanstalkApplicationNamesList;
    }

    export interface ElasticBeanstalkDescribeConfigurationOptionsMessage {
        ApplicationName?: ElasticBeanstalkApplicationName;
        TemplateName?: ElasticBeanstalkConfigurationTemplateName;
        EnvironmentName?: ElasticBeanstalkEnvironmentName;
        SolutionStackName?: ElasticBeanstalkSolutionStackName;
        Options?: ElasticBeanstalkOptionsSpecifierList;
    }

    export interface ElasticBeanstalkDescribeConfigurationSettingsMessage {
        ApplicationName: ElasticBeanstalkApplicationName;
        TemplateName?: ElasticBeanstalkConfigurationTemplateName;
        EnvironmentName?: ElasticBeanstalkEnvironmentName;
    }

    export interface ElasticBeanstalkDescribeEnvironmentHealthRequest {
        EnvironmentName?: ElasticBeanstalkEnvironmentName;
        EnvironmentId?: ElasticBeanstalkEnvironmentId;
        AttributeNames?: ElasticBeanstalkEnvironmentHealthAttributes;
    }

    export interface ElasticBeanstalkDescribeEnvironmentHealthResult {
        EnvironmentName?: ElasticBeanstalkEnvironmentName;
        HealthStatus?: ElasticBeanstalkString;
        Status?: ElasticBeanstalkEnvironmentHealth;
        Color?: ElasticBeanstalkString;
        Causes?: ElasticBeanstalkCauses;
        ApplicationMetrics?: ElasticBeanstalkApplicationMetrics;
        InstancesHealth?: ElasticBeanstalkInstanceHealthSummary;
        RefreshedAt?: ElasticBeanstalkRefreshedAt;
    }

    export interface ElasticBeanstalkDescribeEnvironmentResourcesMessage {
        EnvironmentId?: ElasticBeanstalkEnvironmentId;
        EnvironmentName?: ElasticBeanstalkEnvironmentName;
    }

    export interface ElasticBeanstalkDescribeEnvironmentsMessage {
        ApplicationName?: ElasticBeanstalkApplicationName;
        VersionLabel?: ElasticBeanstalkVersionLabel;
        EnvironmentIds?: ElasticBeanstalkEnvironmentIdList;
        EnvironmentNames?: ElasticBeanstalkEnvironmentNamesList;
        IncludeDeleted?: ElasticBeanstalkIncludeDeleted;
        IncludedDeletedBackTo?: ElasticBeanstalkIncludeDeletedBackTo;
    }

    export interface ElasticBeanstalkDescribeEventsMessage {
        ApplicationName?: ElasticBeanstalkApplicationName;
        VersionLabel?: ElasticBeanstalkVersionLabel;
        TemplateName?: ElasticBeanstalkConfigurationTemplateName;
        EnvironmentId?: ElasticBeanstalkEnvironmentId;
        EnvironmentName?: ElasticBeanstalkEnvironmentName;
        RequestId?: ElasticBeanstalkRequestId;
        Severity?: ElasticBeanstalkEventSeverity;
        StartTime?: ElasticBeanstalkTimeFilterStart;
        EndTime?: ElasticBeanstalkTimeFilterEnd;
        MaxRecords?: ElasticBeanstalkMaxRecords;
        NextToken?: ElasticBeanstalkToken;
    }

    export interface ElasticBeanstalkDescribeInstancesHealthRequest {
        EnvironmentName?: ElasticBeanstalkEnvironmentName;
        EnvironmentId?: ElasticBeanstalkEnvironmentId;
        AttributeNames?: ElasticBeanstalkInstancesHealthAttributes;
        NextToken?: ElasticBeanstalkNextToken;
    }

    export interface ElasticBeanstalkDescribeInstancesHealthResult {
        InstanceHealthList?: ElasticBeanstalkInstanceHealthList;
        RefreshedAt?: ElasticBeanstalkRefreshedAt;
        NextToken?: ElasticBeanstalkNextToken;
    }

    export type ElasticBeanstalkDescription = string;
    export type ElasticBeanstalkEc2InstanceId = string;
    export interface ElasticBeanstalkElasticBeanstalkServiceException {
        message?: ElasticBeanstalkExceptionMessage;
    }

    export type ElasticBeanstalkEndpointURL = string;
    export interface ElasticBeanstalkEnvironmentDescription {
        EnvironmentName?: ElasticBeanstalkEnvironmentName;
        EnvironmentId?: ElasticBeanstalkEnvironmentId;
        ApplicationName?: ElasticBeanstalkApplicationName;
        VersionLabel?: ElasticBeanstalkVersionLabel;
        SolutionStackName?: ElasticBeanstalkSolutionStackName;
        TemplateName?: ElasticBeanstalkConfigurationTemplateName;
        Description?: ElasticBeanstalkDescription;
        EndpointURL?: ElasticBeanstalkEndpointURL;
        CNAME?: ElasticBeanstalkDNSCname;
        DateCreated?: ElasticBeanstalkCreationDate;
        DateUpdated?: ElasticBeanstalkUpdateDate;
        Status?: ElasticBeanstalkEnvironmentStatus;
        AbortableOperationInProgress?: ElasticBeanstalkAbortableOperationInProgress;
        Health?: ElasticBeanstalkEnvironmentHealth;
        HealthStatus?: ElasticBeanstalkEnvironmentHealthStatus;
        Resources?: ElasticBeanstalkEnvironmentResourcesDescription;
        Tier?: ElasticBeanstalkEnvironmentTier;
        EnvironmentLinks?: ElasticBeanstalkEnvironmentLinks;
    }

    export type ElasticBeanstalkEnvironmentDescriptionsList = Array<ElasticBeanstalkEnvironmentDescription>;
    export interface ElasticBeanstalkEnvironmentDescriptionsMessage {
        Environments?: ElasticBeanstalkEnvironmentDescriptionsList;
    }

    export type ElasticBeanstalkEnvironmentHealth = string;
    export type ElasticBeanstalkEnvironmentHealthAttribute = string;
    export type ElasticBeanstalkEnvironmentHealthAttributes = Array<ElasticBeanstalkEnvironmentHealthAttribute>;
    export type ElasticBeanstalkEnvironmentHealthStatus = string;
    export type ElasticBeanstalkEnvironmentId = string;
    export type ElasticBeanstalkEnvironmentIdList = Array<ElasticBeanstalkEnvironmentId>;
    export interface ElasticBeanstalkEnvironmentInfoDescription {
        InfoType?: ElasticBeanstalkEnvironmentInfoType;
        Ec2InstanceId?: ElasticBeanstalkEc2InstanceId;
        SampleTimestamp?: ElasticBeanstalkSampleTimestamp;
        Message?: ElasticBeanstalkMessage;
    }

    export type ElasticBeanstalkEnvironmentInfoDescriptionList = Array<ElasticBeanstalkEnvironmentInfoDescription>;
    export type ElasticBeanstalkEnvironmentInfoType = string;
    export interface ElasticBeanstalkEnvironmentLink {
        LinkName?: ElasticBeanstalkString;
        EnvironmentName?: ElasticBeanstalkString;
    }

    export type ElasticBeanstalkEnvironmentLinks = Array<ElasticBeanstalkEnvironmentLink>;
    export type ElasticBeanstalkEnvironmentName = string;
    export type ElasticBeanstalkEnvironmentNamesList = Array<ElasticBeanstalkEnvironmentName>;
    export interface ElasticBeanstalkEnvironmentResourceDescription {
        EnvironmentName?: ElasticBeanstalkEnvironmentName;
        AutoScalingGroups?: ElasticBeanstalkAutoScalingGroupList;
        Instances?: ElasticBeanstalkInstanceList;
        LaunchConfigurations?: ElasticBeanstalkLaunchConfigurationList;
        LoadBalancers?: ElasticBeanstalkLoadBalancerList;
        Triggers?: ElasticBeanstalkTriggerList;
        Queues?: ElasticBeanstalkQueueList;
    }

    export interface ElasticBeanstalkEnvironmentResourceDescriptionsMessage {
        EnvironmentResources?: ElasticBeanstalkEnvironmentResourceDescription;
    }

    export interface ElasticBeanstalkEnvironmentResourcesDescription {
        LoadBalancer?: ElasticBeanstalkLoadBalancerDescription;
    }

    export type ElasticBeanstalkEnvironmentStatus = string;
    export interface ElasticBeanstalkEnvironmentTier {
        Name?: ElasticBeanstalkString;
        Type?: ElasticBeanstalkString;
        Version?: ElasticBeanstalkString;
    }

    export type ElasticBeanstalkEventDate = number;
    export interface ElasticBeanstalkEventDescription {
        EventDate?: ElasticBeanstalkEventDate;
        Message?: ElasticBeanstalkEventMessage;
        ApplicationName?: ElasticBeanstalkApplicationName;
        VersionLabel?: ElasticBeanstalkVersionLabel;
        TemplateName?: ElasticBeanstalkConfigurationTemplateName;
        EnvironmentName?: ElasticBeanstalkEnvironmentName;
        RequestId?: ElasticBeanstalkRequestId;
        Severity?: ElasticBeanstalkEventSeverity;
    }

    export type ElasticBeanstalkEventDescriptionList = Array<ElasticBeanstalkEventDescription>;
    export interface ElasticBeanstalkEventDescriptionsMessage {
        Events?: ElasticBeanstalkEventDescriptionList;
        NextToken?: ElasticBeanstalkToken;
    }

    export type ElasticBeanstalkEventMessage = string;
    export type ElasticBeanstalkEventSeverity = string;
    export type ElasticBeanstalkExceptionMessage = string;
    export type ElasticBeanstalkFileTypeExtension = string;
    export type ElasticBeanstalkForceTerminate = boolean;
    export type ElasticBeanstalkGroupName = string;
    export type ElasticBeanstalkIncludeDeleted = boolean;
    export type ElasticBeanstalkIncludeDeletedBackTo = number;
    export interface ElasticBeanstalkInstance {
        Id?: ElasticBeanstalkResourceId;
    }

    export type ElasticBeanstalkInstanceHealthList = Array<ElasticBeanstalkSingleInstanceHealth>;
    export interface ElasticBeanstalkInstanceHealthSummary {
        NoData?: ElasticBeanstalkNullableInteger;
        Unknown?: ElasticBeanstalkNullableInteger;
        Pending?: ElasticBeanstalkNullableInteger;
        Ok?: ElasticBeanstalkNullableInteger;
        Info?: ElasticBeanstalkNullableInteger;
        Warning?: ElasticBeanstalkNullableInteger;
        Degraded?: ElasticBeanstalkNullableInteger;
        Severe?: ElasticBeanstalkNullableInteger;
    }

    export type ElasticBeanstalkInstanceId = string;
    export type ElasticBeanstalkInstanceList = Array<ElasticBeanstalkInstance>;
    export type ElasticBeanstalkInstancesHealthAttribute = string;
    export type ElasticBeanstalkInstancesHealthAttributes = Array<ElasticBeanstalkInstancesHealthAttribute>;
    export interface ElasticBeanstalkInsufficientPrivilegesException {
    }

    export type ElasticBeanstalkInteger = number;
    export interface ElasticBeanstalkInvalidRequestException {
    }

    export interface ElasticBeanstalkLatency {
        P999?: ElasticBeanstalkNullableDouble;
        P99?: ElasticBeanstalkNullableDouble;
        P95?: ElasticBeanstalkNullableDouble;
        P90?: ElasticBeanstalkNullableDouble;
        P85?: ElasticBeanstalkNullableDouble;
        P75?: ElasticBeanstalkNullableDouble;
        P50?: ElasticBeanstalkNullableDouble;
        P10?: ElasticBeanstalkNullableDouble;
    }

    export interface ElasticBeanstalkLaunchConfiguration {
        Name?: ElasticBeanstalkResourceId;
    }

    export type ElasticBeanstalkLaunchConfigurationList = Array<ElasticBeanstalkLaunchConfiguration>;
    export type ElasticBeanstalkLaunchedAt = number;
    export interface ElasticBeanstalkListAvailableSolutionStacksResultMessage {
        SolutionStacks?: ElasticBeanstalkAvailableSolutionStackNamesList;
        SolutionStackDetails?: ElasticBeanstalkAvailableSolutionStackDetailsList;
    }

    export interface ElasticBeanstalkListener {
        Protocol?: ElasticBeanstalkString;
        Port?: ElasticBeanstalkInteger;
    }

    export type ElasticBeanstalkLoadAverage = Array<ElasticBeanstalkLoadAverageValue>;
    export type ElasticBeanstalkLoadAverageValue = number;
    export interface ElasticBeanstalkLoadBalancer {
        Name?: ElasticBeanstalkResourceId;
    }

    export interface ElasticBeanstalkLoadBalancerDescription {
        LoadBalancerName?: ElasticBeanstalkString;
        Domain?: ElasticBeanstalkString;
        Listeners?: ElasticBeanstalkLoadBalancerListenersDescription;
    }

    export type ElasticBeanstalkLoadBalancerList = Array<ElasticBeanstalkLoadBalancer>;
    export type ElasticBeanstalkLoadBalancerListenersDescription = Array<ElasticBeanstalkListener>;
    export type ElasticBeanstalkMaxRecords = number;
    export type ElasticBeanstalkMessage = string;
    export type ElasticBeanstalkNextToken = string;
    export type ElasticBeanstalkNullableDouble = number;
    export type ElasticBeanstalkNullableInteger = number;
    export interface ElasticBeanstalkOperationInProgressException {
    }

    export type ElasticBeanstalkOptionNamespace = string;
    export type ElasticBeanstalkOptionRestrictionMaxLength = number;
    export type ElasticBeanstalkOptionRestrictionMaxValue = number;
    export type ElasticBeanstalkOptionRestrictionMinValue = number;
    export interface ElasticBeanstalkOptionRestrictionRegex {
        Pattern?: ElasticBeanstalkRegexPattern;
        Label?: ElasticBeanstalkRegexLabel;
    }

    export interface ElasticBeanstalkOptionSpecification {
        ResourceName?: ElasticBeanstalkResourceName;
        Namespace?: ElasticBeanstalkOptionNamespace;
        OptionName?: ElasticBeanstalkConfigurationOptionName;
    }

    export type ElasticBeanstalkOptionsSpecifierList = Array<ElasticBeanstalkOptionSpecification>;
    export interface ElasticBeanstalkQueue {
        Name?: ElasticBeanstalkString;
        URL?: ElasticBeanstalkString;
    }

    export type ElasticBeanstalkQueueList = Array<ElasticBeanstalkQueue>;
    export interface ElasticBeanstalkRebuildEnvironmentMessage {
        EnvironmentId?: ElasticBeanstalkEnvironmentId;
        EnvironmentName?: ElasticBeanstalkEnvironmentName;
    }

    export type ElasticBeanstalkRefreshedAt = number;
    export type ElasticBeanstalkRegexLabel = string;
    export type ElasticBeanstalkRegexPattern = string;
    export type ElasticBeanstalkRequestCount = number;
    export interface ElasticBeanstalkRequestEnvironmentInfoMessage {
        EnvironmentId?: ElasticBeanstalkEnvironmentId;
        EnvironmentName?: ElasticBeanstalkEnvironmentName;
        InfoType: ElasticBeanstalkEnvironmentInfoType;
    }

    export type ElasticBeanstalkRequestId = string;
    export type ElasticBeanstalkResourceId = string;
    export type ElasticBeanstalkResourceName = string;
    export interface ElasticBeanstalkRestartAppServerMessage {
        EnvironmentId?: ElasticBeanstalkEnvironmentId;
        EnvironmentName?: ElasticBeanstalkEnvironmentName;
    }

    export interface ElasticBeanstalkRetrieveEnvironmentInfoMessage {
        EnvironmentId?: ElasticBeanstalkEnvironmentId;
        EnvironmentName?: ElasticBeanstalkEnvironmentName;
        InfoType: ElasticBeanstalkEnvironmentInfoType;
    }

    export interface ElasticBeanstalkRetrieveEnvironmentInfoResultMessage {
        EnvironmentInfo?: ElasticBeanstalkEnvironmentInfoDescriptionList;
    }

    export type ElasticBeanstalkS3Bucket = string;
    export type ElasticBeanstalkS3Key = string;
    export interface ElasticBeanstalkS3Location {
        S3Bucket?: ElasticBeanstalkS3Bucket;
        S3Key?: ElasticBeanstalkS3Key;
    }

    export interface ElasticBeanstalkS3LocationNotInServiceRegionException {
    }

    export interface ElasticBeanstalkS3SubscriptionRequiredException {
    }

    export type ElasticBeanstalkSampleTimestamp = number;
    export interface ElasticBeanstalkSingleInstanceHealth {
        InstanceId?: ElasticBeanstalkInstanceId;
        HealthStatus?: ElasticBeanstalkString;
        Color?: ElasticBeanstalkString;
        Causes?: ElasticBeanstalkCauses;
        LaunchedAt?: ElasticBeanstalkLaunchedAt;
        ApplicationMetrics?: ElasticBeanstalkApplicationMetrics;
        System?: ElasticBeanstalkSystemStatus;
    }

    export interface ElasticBeanstalkSolutionStackDescription {
        SolutionStackName?: ElasticBeanstalkSolutionStackName;
        PermittedFileTypes?: ElasticBeanstalkSolutionStackFileTypeList;
    }

    export type ElasticBeanstalkSolutionStackFileTypeList = Array<ElasticBeanstalkFileTypeExtension>;
    export type ElasticBeanstalkSolutionStackName = string;
    export interface ElasticBeanstalkSourceBundleDeletionException {
    }

    export interface ElasticBeanstalkSourceConfiguration {
        ApplicationName?: ElasticBeanstalkApplicationName;
        TemplateName?: ElasticBeanstalkConfigurationTemplateName;
    }

    export interface ElasticBeanstalkStatusCodes {
        Status2xx?: ElasticBeanstalkNullableInteger;
        Status3xx?: ElasticBeanstalkNullableInteger;
        Status4xx?: ElasticBeanstalkNullableInteger;
        Status5xx?: ElasticBeanstalkNullableInteger;
    }

    export type ElasticBeanstalkString = string;
    export interface ElasticBeanstalkSwapEnvironmentCNAMEsMessage {
        SourceEnvironmentId?: ElasticBeanstalkEnvironmentId;
        SourceEnvironmentName?: ElasticBeanstalkEnvironmentName;
        DestinationEnvironmentId?: ElasticBeanstalkEnvironmentId;
        DestinationEnvironmentName?: ElasticBeanstalkEnvironmentName;
    }

    export interface ElasticBeanstalkSystemStatus {
        CPUUtilization?: ElasticBeanstalkCPUUtilization;
        LoadAverage?: ElasticBeanstalkLoadAverage;
    }

    export interface ElasticBeanstalkTag {
        Key?: ElasticBeanstalkTagKey;
        Value?: ElasticBeanstalkTagValue;
    }

    export type ElasticBeanstalkTagKey = string;
    export type ElasticBeanstalkTagValue = string;
    export type ElasticBeanstalkTags = Array<ElasticBeanstalkTag>;
    export type ElasticBeanstalkTerminateEnvForce = boolean;
    export interface ElasticBeanstalkTerminateEnvironmentMessage {
        EnvironmentId?: ElasticBeanstalkEnvironmentId;
        EnvironmentName?: ElasticBeanstalkEnvironmentName;
        TerminateResources?: ElasticBeanstalkTerminateEnvironmentResources;
        ForceTerminate?: ElasticBeanstalkForceTerminate;
    }

    export type ElasticBeanstalkTerminateEnvironmentResources = boolean;
    export type ElasticBeanstalkTimeFilterEnd = number;
    export type ElasticBeanstalkTimeFilterStart = number;
    export type ElasticBeanstalkToken = string;
    export interface ElasticBeanstalkTooManyApplicationVersionsException {
    }

    export interface ElasticBeanstalkTooManyApplicationsException {
    }

    export interface ElasticBeanstalkTooManyBucketsException {
    }

    export interface ElasticBeanstalkTooManyConfigurationTemplatesException {
    }

    export interface ElasticBeanstalkTooManyEnvironmentsException {
    }

    export interface ElasticBeanstalkTrigger {
        Name?: ElasticBeanstalkResourceId;
    }

    export type ElasticBeanstalkTriggerList = Array<ElasticBeanstalkTrigger>;
    export interface ElasticBeanstalkUpdateApplicationMessage {
        ApplicationName: ElasticBeanstalkApplicationName;
        Description?: ElasticBeanstalkDescription;
    }

    export interface ElasticBeanstalkUpdateApplicationVersionMessage {
        ApplicationName: ElasticBeanstalkApplicationName;
        VersionLabel: ElasticBeanstalkVersionLabel;
        Description?: ElasticBeanstalkDescription;
    }

    export interface ElasticBeanstalkUpdateConfigurationTemplateMessage {
        ApplicationName: ElasticBeanstalkApplicationName;
        TemplateName: ElasticBeanstalkConfigurationTemplateName;
        Description?: ElasticBeanstalkDescription;
        OptionSettings?: ElasticBeanstalkConfigurationOptionSettingsList;
        OptionsToRemove?: ElasticBeanstalkOptionsSpecifierList;
    }

    export type ElasticBeanstalkUpdateDate = number;
    export interface ElasticBeanstalkUpdateEnvironmentMessage {
        ApplicationName?: ElasticBeanstalkApplicationName;
        EnvironmentId?: ElasticBeanstalkEnvironmentId;
        EnvironmentName?: ElasticBeanstalkEnvironmentName;
        GroupName?: ElasticBeanstalkGroupName;
        Description?: ElasticBeanstalkDescription;
        Tier?: ElasticBeanstalkEnvironmentTier;
        VersionLabel?: ElasticBeanstalkVersionLabel;
        TemplateName?: ElasticBeanstalkConfigurationTemplateName;
        SolutionStackName?: ElasticBeanstalkSolutionStackName;
        OptionSettings?: ElasticBeanstalkConfigurationOptionSettingsList;
        OptionsToRemove?: ElasticBeanstalkOptionsSpecifierList;
    }

    export type ElasticBeanstalkUserDefinedOption = boolean;
    export interface ElasticBeanstalkValidateConfigurationSettingsMessage {
        ApplicationName: ElasticBeanstalkApplicationName;
        TemplateName?: ElasticBeanstalkConfigurationTemplateName;
        EnvironmentName?: ElasticBeanstalkEnvironmentName;
        OptionSettings: ElasticBeanstalkConfigurationOptionSettingsList;
    }

    export interface ElasticBeanstalkValidationMessage {
        Message?: ElasticBeanstalkValidationMessageString;
        Severity?: ElasticBeanstalkValidationSeverity;
        Namespace?: ElasticBeanstalkOptionNamespace;
        OptionName?: ElasticBeanstalkConfigurationOptionName;
    }

    export type ElasticBeanstalkValidationMessageString = string;
    export type ElasticBeanstalkValidationMessagesList = Array<ElasticBeanstalkValidationMessage>;
    export type ElasticBeanstalkValidationSeverity = string;
    export type ElasticBeanstalkVersionLabel = string;
    export type ElasticBeanstalkVersionLabels = Array<ElasticBeanstalkVersionLabel>;
    export type ElasticBeanstalkVersionLabelsList = Array<ElasticBeanstalkVersionLabel>;
}
