// Type definitions for aws-sdk - AWS Elastic Beanstalk
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2010-12-01
     * endpointPrefix: elasticbeanstalk
     * serviceAbbreviation: Elastic Beanstalk
     * signatureVersion: v4
     * protocol: query
     */
    export class ElasticBeanstalk extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      abortEnvironmentUpdate(params: ElasticBeanstalk.AbortEnvironmentUpdateMessage, callback?: (err: ElasticBeanstalk.InsufficientPrivilegesException|any, data: any) => void): Request;
      checkDNSAvailability(params: ElasticBeanstalk.CheckDNSAvailabilityMessage, callback?: (err: any, data: ElasticBeanstalk.CheckDNSAvailabilityResultMessage|any) => void): Request;
      composeEnvironments(params: ElasticBeanstalk.ComposeEnvironmentsMessage, callback?: (err: ElasticBeanstalk.TooManyEnvironmentsException|ElasticBeanstalk.InsufficientPrivilegesException|any, data: ElasticBeanstalk.EnvironmentDescriptionsMessage|any) => void): Request;
      createApplication(params: ElasticBeanstalk.CreateApplicationMessage, callback?: (err: ElasticBeanstalk.TooManyApplicationsException|any, data: ElasticBeanstalk.ApplicationDescriptionMessage|any) => void): Request;
      createApplicationVersion(params: ElasticBeanstalk.CreateApplicationVersionMessage, callback?: (err: ElasticBeanstalk.TooManyApplicationsException|ElasticBeanstalk.TooManyApplicationVersionsException|ElasticBeanstalk.InsufficientPrivilegesException|ElasticBeanstalk.S3LocationNotInServiceRegionException|any, data: ElasticBeanstalk.ApplicationVersionDescriptionMessage|any) => void): Request;
      createConfigurationTemplate(params: ElasticBeanstalk.CreateConfigurationTemplateMessage, callback?: (err: ElasticBeanstalk.InsufficientPrivilegesException|ElasticBeanstalk.TooManyConfigurationTemplatesException|any, data: ElasticBeanstalk.ConfigurationSettingsDescription|any) => void): Request;
      createEnvironment(params: ElasticBeanstalk.CreateEnvironmentMessage, callback?: (err: ElasticBeanstalk.TooManyEnvironmentsException|ElasticBeanstalk.InsufficientPrivilegesException|any, data: ElasticBeanstalk.EnvironmentDescription|any) => void): Request;
      createStorageLocation(callback?: (err: ElasticBeanstalk.TooManyBucketsException|ElasticBeanstalk.S3SubscriptionRequiredException|ElasticBeanstalk.InsufficientPrivilegesException|any, data: ElasticBeanstalk.CreateStorageLocationResultMessage|any) => void): Request;
      deleteApplication(params: ElasticBeanstalk.DeleteApplicationMessage, callback?: (err: ElasticBeanstalk.OperationInProgressException|any, data: any) => void): Request;
      deleteApplicationVersion(params: ElasticBeanstalk.DeleteApplicationVersionMessage, callback?: (err: ElasticBeanstalk.SourceBundleDeletionException|ElasticBeanstalk.InsufficientPrivilegesException|ElasticBeanstalk.OperationInProgressException|ElasticBeanstalk.S3LocationNotInServiceRegionException|any, data: any) => void): Request;
      deleteConfigurationTemplate(params: ElasticBeanstalk.DeleteConfigurationTemplateMessage, callback?: (err: ElasticBeanstalk.OperationInProgressException|any, data: any) => void): Request;
      deleteEnvironmentConfiguration(params: ElasticBeanstalk.DeleteEnvironmentConfigurationMessage, callback?: (err: any, data: any) => void): Request;
      describeApplicationVersions(params: ElasticBeanstalk.DescribeApplicationVersionsMessage, callback?: (err: any, data: ElasticBeanstalk.ApplicationVersionDescriptionsMessage|any) => void): Request;
      describeApplications(params: ElasticBeanstalk.DescribeApplicationsMessage, callback?: (err: any, data: ElasticBeanstalk.ApplicationDescriptionsMessage|any) => void): Request;
      describeConfigurationOptions(params: ElasticBeanstalk.DescribeConfigurationOptionsMessage, callback?: (err: any, data: ElasticBeanstalk.ConfigurationOptionsDescription|any) => void): Request;
      describeConfigurationSettings(params: ElasticBeanstalk.DescribeConfigurationSettingsMessage, callback?: (err: any, data: ElasticBeanstalk.ConfigurationSettingsDescriptions|any) => void): Request;
      describeEnvironmentHealth(params: ElasticBeanstalk.DescribeEnvironmentHealthRequest, callback?: (err: ElasticBeanstalk.InvalidRequestException|ElasticBeanstalk.ElasticBeanstalkServiceException|any, data: ElasticBeanstalk.DescribeEnvironmentHealthResult|any) => void): Request;
      describeEnvironmentResources(params: ElasticBeanstalk.DescribeEnvironmentResourcesMessage, callback?: (err: ElasticBeanstalk.InsufficientPrivilegesException|any, data: ElasticBeanstalk.EnvironmentResourceDescriptionsMessage|any) => void): Request;
      describeEnvironments(params: ElasticBeanstalk.DescribeEnvironmentsMessage, callback?: (err: any, data: ElasticBeanstalk.EnvironmentDescriptionsMessage|any) => void): Request;
      describeEvents(params: ElasticBeanstalk.DescribeEventsMessage, callback?: (err: any, data: ElasticBeanstalk.EventDescriptionsMessage|any) => void): Request;
      describeInstancesHealth(params: ElasticBeanstalk.DescribeInstancesHealthRequest, callback?: (err: ElasticBeanstalk.InvalidRequestException|ElasticBeanstalk.ElasticBeanstalkServiceException|any, data: ElasticBeanstalk.DescribeInstancesHealthResult|any) => void): Request;
      listAvailableSolutionStacks(callback?: (err: any, data: ElasticBeanstalk.ListAvailableSolutionStacksResultMessage|any) => void): Request;
      rebuildEnvironment(params: ElasticBeanstalk.RebuildEnvironmentMessage, callback?: (err: ElasticBeanstalk.InsufficientPrivilegesException|any, data: any) => void): Request;
      requestEnvironmentInfo(params: ElasticBeanstalk.RequestEnvironmentInfoMessage, callback?: (err: any, data: any) => void): Request;
      restartAppServer(params: ElasticBeanstalk.RestartAppServerMessage, callback?: (err: any, data: any) => void): Request;
      retrieveEnvironmentInfo(params: ElasticBeanstalk.RetrieveEnvironmentInfoMessage, callback?: (err: any, data: ElasticBeanstalk.RetrieveEnvironmentInfoResultMessage|any) => void): Request;
      swapEnvironmentCNAMEs(params: ElasticBeanstalk.SwapEnvironmentCNAMEsMessage, callback?: (err: any, data: any) => void): Request;
      terminateEnvironment(params: ElasticBeanstalk.TerminateEnvironmentMessage, callback?: (err: ElasticBeanstalk.InsufficientPrivilegesException|any, data: ElasticBeanstalk.EnvironmentDescription|any) => void): Request;
      updateApplication(params: ElasticBeanstalk.UpdateApplicationMessage, callback?: (err: any, data: ElasticBeanstalk.ApplicationDescriptionMessage|any) => void): Request;
      updateApplicationVersion(params: ElasticBeanstalk.UpdateApplicationVersionMessage, callback?: (err: any, data: ElasticBeanstalk.ApplicationVersionDescriptionMessage|any) => void): Request;
      updateConfigurationTemplate(params: ElasticBeanstalk.UpdateConfigurationTemplateMessage, callback?: (err: ElasticBeanstalk.InsufficientPrivilegesException|any, data: ElasticBeanstalk.ConfigurationSettingsDescription|any) => void): Request;
      updateEnvironment(params: ElasticBeanstalk.UpdateEnvironmentMessage, callback?: (err: ElasticBeanstalk.InsufficientPrivilegesException|any, data: ElasticBeanstalk.EnvironmentDescription|any) => void): Request;
      validateConfigurationSettings(params: ElasticBeanstalk.ValidateConfigurationSettingsMessage, callback?: (err: ElasticBeanstalk.InsufficientPrivilegesException|any, data: ElasticBeanstalk.ConfigurationSettingsValidationMessages|any) => void): Request;

    }

    export module ElasticBeanstalk {
        export type AbortableOperationInProgress = boolean;
        export type ApplicationDescriptionList = ApplicationDescription[];
        export type ApplicationName = string;    // max: 100, min: 1
        export type ApplicationNamesList = ApplicationName[];
        export type ApplicationVersionDescriptionList = ApplicationVersionDescription[];
        export type ApplicationVersionProccess = boolean;
        export type ApplicationVersionStatus = string;
        export type AutoCreateApplication = boolean;
        export type AutoScalingGroupList = AutoScalingGroup[];
        export type AvailableSolutionStackDetailsList = SolutionStackDescription[];
        export type AvailableSolutionStackNamesList = SolutionStackName[];
        export type Cause = string;    // max: 255, min: 1
        export type Causes = Cause[];
        export type CnameAvailability = boolean;
        export type ConfigurationDeploymentStatus = string;
        export type ConfigurationOptionDefaultValue = string;
        export type ConfigurationOptionDescriptionsList = ConfigurationOptionDescription[];
        export type ConfigurationOptionName = string;
        export type ConfigurationOptionPossibleValue = string;
        export type ConfigurationOptionPossibleValues = ConfigurationOptionPossibleValue[];
        export type ConfigurationOptionSettingsList = ConfigurationOptionSetting[];
        export type ConfigurationOptionSeverity = string;
        export type ConfigurationOptionValue = string;
        export type ConfigurationOptionValueType = string;
        export type ConfigurationSettingsDescriptionList = ConfigurationSettingsDescription[];
        export type ConfigurationTemplateName = string;    // max: 100, min: 1
        export type ConfigurationTemplateNamesList = ConfigurationTemplateName[];
        export type CreationDate = number;
        export type DNSCname = string;    // max: 255, min: 1
        export type DNSCnamePrefix = string;    // max: 63, min: 4
        export type DeleteSourceBundle = boolean;
        export type Description = string;    // max: 200
        export type Ec2InstanceId = string;
        export type EndpointURL = string;
        export type EnvironmentDescriptionsList = EnvironmentDescription[];
        export type EnvironmentHealth = string;
        export type EnvironmentHealthAttribute = string;
        export type EnvironmentHealthAttributes = EnvironmentHealthAttribute[];
        export type EnvironmentHealthStatus = string;
        export type EnvironmentId = string;
        export type EnvironmentIdList = EnvironmentId[];
        export type EnvironmentInfoDescriptionList = EnvironmentInfoDescription[];
        export type EnvironmentInfoType = string;
        export type EnvironmentLinks = EnvironmentLink[];
        export type EnvironmentName = string;    // max: 23, min: 4
        export type EnvironmentNamesList = EnvironmentName[];
        export type EnvironmentStatus = string;
        export type EventDate = number;
        export type EventDescriptionList = EventDescription[];
        export type EventMessage = string;
        export type EventSeverity = string;
        export type ExceptionMessage = string;
        export type FileTypeExtension = string;    // max: 100, min: 1
        export type ForceTerminate = boolean;
        export type GroupName = string;    // max: 19, min: 1
        export type IncludeDeleted = boolean;
        export type IncludeDeletedBackTo = number;
        export type InstanceHealthList = SingleInstanceHealth[];
        export type InstanceId = string;    // max: 255, min: 1
        export type InstanceList = Instance[];
        export type InstancesHealthAttribute = string;
        export type InstancesHealthAttributes = InstancesHealthAttribute[];
        export type Integer = number;
        export type LaunchConfigurationList = LaunchConfiguration[];
        export type LaunchedAt = number;
        export type LoadAverage = LoadAverageValue[];
        export type LoadAverageValue = number;
        export type LoadBalancerList = LoadBalancer[];
        export type LoadBalancerListenersDescription = Listener[];
        export type MaxRecords = number;    // max: 1000, min: 1
        export type Message = string;
        export type NextToken = string;    // max: 100, min: 1
        export type NullableDouble = number;
        export type NullableInteger = number;
        export type OptionNamespace = string;
        export type OptionRestrictionMaxLength = number;
        export type OptionRestrictionMaxValue = number;
        export type OptionRestrictionMinValue = number;
        export type OptionsSpecifierList = OptionSpecification[];
        export type QueueList = Queue[];
        export type RefreshedAt = number;
        export type RegexLabel = string;
        export type RegexPattern = string;
        export type RequestCount = number;
        export type RequestId = string;
        export type ResourceId = string;
        export type ResourceName = string;    // max: 256, min: 1
        export type S3Bucket = string;    // max: 255
        export type S3Key = string;    // max: 1024
        export type SampleTimestamp = number;
        export type SolutionStackFileTypeList = FileTypeExtension[];
        export type SolutionStackName = string;    // max: 100
        export type String = string;
        export type TagKey = string;    // max: 128, min: 1
        export type TagValue = string;    // max: 256, min: 1
        export type Tags = Tag[];
        export type TerminateEnvForce = boolean;
        export type TerminateEnvironmentResources = boolean;
        export type TimeFilterEnd = number;
        export type TimeFilterStart = number;
        export type Token = string;
        export type TriggerList = Trigger[];
        export type UpdateDate = number;
        export type UserDefinedOption = boolean;
        export type ValidationMessageString = string;
        export type ValidationMessagesList = ValidationMessage[];
        export type ValidationSeverity = string;
        export type VersionLabel = string;    // max: 100, min: 1
        export type VersionLabels = VersionLabel[];
        export type VersionLabelsList = VersionLabel[];

        export interface AbortEnvironmentUpdateMessage {
            EnvironmentId?: EnvironmentId;
            EnvironmentName?: EnvironmentName;
        }
        export interface ApplicationDescription {
            ApplicationName?: ApplicationName;
            Description?: Description;
            DateCreated?: CreationDate;
            DateUpdated?: UpdateDate;
            Versions?: VersionLabelsList;
            ConfigurationTemplates?: ConfigurationTemplateNamesList;
        }
        export interface ApplicationDescriptionMessage {
            Application?: ApplicationDescription;
        }
        export interface ApplicationDescriptionsMessage {
            Applications?: ApplicationDescriptionList;
        }
        export interface ApplicationMetrics {
            Duration?: NullableInteger;
            RequestCount?: RequestCount;
            StatusCodes?: StatusCodes;
            Latency?: Latency;
        }
        export interface ApplicationVersionDescription {
            ApplicationName?: ApplicationName;
            Description?: Description;
            VersionLabel?: VersionLabel;
            SourceBundle?: S3Location;
            DateCreated?: CreationDate;
            DateUpdated?: UpdateDate;
            Status?: ApplicationVersionStatus;
        }
        export interface ApplicationVersionDescriptionMessage {
            ApplicationVersion?: ApplicationVersionDescription;
        }
        export interface ApplicationVersionDescriptionsMessage {
            ApplicationVersions?: ApplicationVersionDescriptionList;
        }
        export interface AutoScalingGroup {
            Name?: ResourceId;
        }
        export interface CPUUtilization {
            User?: NullableDouble;
            Nice?: NullableDouble;
            System?: NullableDouble;
            Idle?: NullableDouble;
            IOWait?: NullableDouble;
            IRQ?: NullableDouble;
            SoftIRQ?: NullableDouble;
        }
        export interface CheckDNSAvailabilityMessage {
            CNAMEPrefix: DNSCnamePrefix;
        }
        export interface CheckDNSAvailabilityResultMessage {
            Available?: CnameAvailability;
            FullyQualifiedCNAME?: DNSCname;
        }
        export interface ComposeEnvironmentsMessage {
            ApplicationName?: ApplicationName;
            GroupName?: GroupName;
            VersionLabels?: VersionLabels;
        }
        export interface ConfigurationOptionDescription {
            Namespace?: OptionNamespace;
            Name?: ConfigurationOptionName;
            DefaultValue?: ConfigurationOptionDefaultValue;
            ChangeSeverity?: ConfigurationOptionSeverity;
            UserDefined?: UserDefinedOption;
            ValueType?: ConfigurationOptionValueType;
            ValueOptions?: ConfigurationOptionPossibleValues;
            MinValue?: OptionRestrictionMinValue;
            MaxValue?: OptionRestrictionMaxValue;
            MaxLength?: OptionRestrictionMaxLength;
            Regex?: OptionRestrictionRegex;
        }
        export interface ConfigurationOptionSetting {
            ResourceName?: ResourceName;
            Namespace?: OptionNamespace;
            OptionName?: ConfigurationOptionName;
            Value?: ConfigurationOptionValue;
        }
        export interface ConfigurationOptionsDescription {
            SolutionStackName?: SolutionStackName;
            Options?: ConfigurationOptionDescriptionsList;
        }
        export interface ConfigurationSettingsDescription {
            SolutionStackName?: SolutionStackName;
            ApplicationName?: ApplicationName;
            TemplateName?: ConfigurationTemplateName;
            Description?: Description;
            EnvironmentName?: EnvironmentName;
            DeploymentStatus?: ConfigurationDeploymentStatus;
            DateCreated?: CreationDate;
            DateUpdated?: UpdateDate;
            OptionSettings?: ConfigurationOptionSettingsList;
        }
        export interface ConfigurationSettingsDescriptions {
            ConfigurationSettings?: ConfigurationSettingsDescriptionList;
        }
        export interface ConfigurationSettingsValidationMessages {
            Messages?: ValidationMessagesList;
        }
        export interface CreateApplicationMessage {
            ApplicationName: ApplicationName;
            Description?: Description;
        }
        export interface CreateApplicationVersionMessage {
            ApplicationName: ApplicationName;
            VersionLabel: VersionLabel;
            Description?: Description;
            SourceBundle?: S3Location;
            AutoCreateApplication?: AutoCreateApplication;
            Process?: ApplicationVersionProccess;
        }
        export interface CreateConfigurationTemplateMessage {
            ApplicationName: ApplicationName;
            TemplateName: ConfigurationTemplateName;
            SolutionStackName?: SolutionStackName;
            SourceConfiguration?: SourceConfiguration;
            EnvironmentId?: EnvironmentId;
            Description?: Description;
            OptionSettings?: ConfigurationOptionSettingsList;
        }
        export interface CreateEnvironmentMessage {
            ApplicationName: ApplicationName;
            EnvironmentName?: EnvironmentName;
            GroupName?: GroupName;
            Description?: Description;
            CNAMEPrefix?: DNSCnamePrefix;
            Tier?: EnvironmentTier;
            Tags?: Tags;
            VersionLabel?: VersionLabel;
            TemplateName?: ConfigurationTemplateName;
            SolutionStackName?: SolutionStackName;
            OptionSettings?: ConfigurationOptionSettingsList;
            OptionsToRemove?: OptionsSpecifierList;
        }
        export interface CreateStorageLocationResultMessage {
            S3Bucket?: S3Bucket;
        }
        export interface DeleteApplicationMessage {
            ApplicationName: ApplicationName;
            TerminateEnvByForce?: TerminateEnvForce;
        }
        export interface DeleteApplicationVersionMessage {
            ApplicationName: ApplicationName;
            VersionLabel: VersionLabel;
            DeleteSourceBundle?: DeleteSourceBundle;
        }
        export interface DeleteConfigurationTemplateMessage {
            ApplicationName: ApplicationName;
            TemplateName: ConfigurationTemplateName;
        }
        export interface DeleteEnvironmentConfigurationMessage {
            ApplicationName: ApplicationName;
            EnvironmentName: EnvironmentName;
        }
        export interface DescribeApplicationVersionsMessage {
            ApplicationName?: ApplicationName;
            VersionLabels?: VersionLabelsList;
        }
        export interface DescribeApplicationsMessage {
            ApplicationNames?: ApplicationNamesList;
        }
        export interface DescribeConfigurationOptionsMessage {
            ApplicationName?: ApplicationName;
            TemplateName?: ConfigurationTemplateName;
            EnvironmentName?: EnvironmentName;
            SolutionStackName?: SolutionStackName;
            Options?: OptionsSpecifierList;
        }
        export interface DescribeConfigurationSettingsMessage {
            ApplicationName: ApplicationName;
            TemplateName?: ConfigurationTemplateName;
            EnvironmentName?: EnvironmentName;
        }
        export interface DescribeEnvironmentHealthRequest {
            EnvironmentName?: EnvironmentName;
            EnvironmentId?: EnvironmentId;
            AttributeNames?: EnvironmentHealthAttributes;
        }
        export interface DescribeEnvironmentHealthResult {
            EnvironmentName?: EnvironmentName;
            HealthStatus?: String;
            Status?: EnvironmentHealth;
            Color?: String;
            Causes?: Causes;
            ApplicationMetrics?: ApplicationMetrics;
            InstancesHealth?: InstanceHealthSummary;
            RefreshedAt?: RefreshedAt;
        }
        export interface DescribeEnvironmentResourcesMessage {
            EnvironmentId?: EnvironmentId;
            EnvironmentName?: EnvironmentName;
        }
        export interface DescribeEnvironmentsMessage {
            ApplicationName?: ApplicationName;
            VersionLabel?: VersionLabel;
            EnvironmentIds?: EnvironmentIdList;
            EnvironmentNames?: EnvironmentNamesList;
            IncludeDeleted?: IncludeDeleted;
            IncludedDeletedBackTo?: IncludeDeletedBackTo;
        }
        export interface DescribeEventsMessage {
            ApplicationName?: ApplicationName;
            VersionLabel?: VersionLabel;
            TemplateName?: ConfigurationTemplateName;
            EnvironmentId?: EnvironmentId;
            EnvironmentName?: EnvironmentName;
            RequestId?: RequestId;
            Severity?: EventSeverity;
            StartTime?: TimeFilterStart;
            EndTime?: TimeFilterEnd;
            MaxRecords?: MaxRecords;
            NextToken?: Token;
        }
        export interface DescribeInstancesHealthRequest {
            EnvironmentName?: EnvironmentName;
            EnvironmentId?: EnvironmentId;
            AttributeNames?: InstancesHealthAttributes;
            NextToken?: NextToken;
        }
        export interface DescribeInstancesHealthResult {
            InstanceHealthList?: InstanceHealthList;
            RefreshedAt?: RefreshedAt;
            NextToken?: NextToken;
        }
        export interface ElasticBeanstalkServiceException {
            message?: ExceptionMessage;
        }
        export interface EnvironmentDescription {
            EnvironmentName?: EnvironmentName;
            EnvironmentId?: EnvironmentId;
            ApplicationName?: ApplicationName;
            VersionLabel?: VersionLabel;
            SolutionStackName?: SolutionStackName;
            TemplateName?: ConfigurationTemplateName;
            Description?: Description;
            EndpointURL?: EndpointURL;
            CNAME?: DNSCname;
            DateCreated?: CreationDate;
            DateUpdated?: UpdateDate;
            Status?: EnvironmentStatus;
            AbortableOperationInProgress?: AbortableOperationInProgress;
            Health?: EnvironmentHealth;
            HealthStatus?: EnvironmentHealthStatus;
            Resources?: EnvironmentResourcesDescription;
            Tier?: EnvironmentTier;
            EnvironmentLinks?: EnvironmentLinks;
        }
        export interface EnvironmentDescriptionsMessage {
            Environments?: EnvironmentDescriptionsList;
        }
        export interface EnvironmentInfoDescription {
            InfoType?: EnvironmentInfoType;
            Ec2InstanceId?: Ec2InstanceId;
            SampleTimestamp?: SampleTimestamp;
            Message?: Message;
        }
        export interface EnvironmentLink {
            LinkName?: String;
            EnvironmentName?: String;
        }
        export interface EnvironmentResourceDescription {
            EnvironmentName?: EnvironmentName;
            AutoScalingGroups?: AutoScalingGroupList;
            Instances?: InstanceList;
            LaunchConfigurations?: LaunchConfigurationList;
            LoadBalancers?: LoadBalancerList;
            Triggers?: TriggerList;
            Queues?: QueueList;
        }
        export interface EnvironmentResourceDescriptionsMessage {
            EnvironmentResources?: EnvironmentResourceDescription;
        }
        export interface EnvironmentResourcesDescription {
            LoadBalancer?: LoadBalancerDescription;
        }
        export interface EnvironmentTier {
            Name?: String;
            Type?: String;
            Version?: String;
        }
        export interface EventDescription {
            EventDate?: EventDate;
            Message?: EventMessage;
            ApplicationName?: ApplicationName;
            VersionLabel?: VersionLabel;
            TemplateName?: ConfigurationTemplateName;
            EnvironmentName?: EnvironmentName;
            RequestId?: RequestId;
            Severity?: EventSeverity;
        }
        export interface EventDescriptionsMessage {
            Events?: EventDescriptionList;
            NextToken?: Token;
        }
        export interface Instance {
            Id?: ResourceId;
        }
        export interface InstanceHealthSummary {
            NoData?: NullableInteger;
            Unknown?: NullableInteger;
            Pending?: NullableInteger;
            Ok?: NullableInteger;
            Info?: NullableInteger;
            Warning?: NullableInteger;
            Degraded?: NullableInteger;
            Severe?: NullableInteger;
        }
        export interface InsufficientPrivilegesException {
        }
        export interface InvalidRequestException {
        }
        export interface Latency {
            P999?: NullableDouble;
            P99?: NullableDouble;
            P95?: NullableDouble;
            P90?: NullableDouble;
            P85?: NullableDouble;
            P75?: NullableDouble;
            P50?: NullableDouble;
            P10?: NullableDouble;
        }
        export interface LaunchConfiguration {
            Name?: ResourceId;
        }
        export interface ListAvailableSolutionStacksResultMessage {
            SolutionStacks?: AvailableSolutionStackNamesList;
            SolutionStackDetails?: AvailableSolutionStackDetailsList;
        }
        export interface Listener {
            Protocol?: String;
            Port?: Integer;
        }
        export interface LoadBalancer {
            Name?: ResourceId;
        }
        export interface LoadBalancerDescription {
            LoadBalancerName?: String;
            Domain?: String;
            Listeners?: LoadBalancerListenersDescription;
        }
        export interface OperationInProgressException {
        }
        export interface OptionRestrictionRegex {
            Pattern?: RegexPattern;
            Label?: RegexLabel;
        }
        export interface OptionSpecification {
            ResourceName?: ResourceName;
            Namespace?: OptionNamespace;
            OptionName?: ConfigurationOptionName;
        }
        export interface Queue {
            Name?: String;
            URL?: String;
        }
        export interface RebuildEnvironmentMessage {
            EnvironmentId?: EnvironmentId;
            EnvironmentName?: EnvironmentName;
        }
        export interface RequestEnvironmentInfoMessage {
            EnvironmentId?: EnvironmentId;
            EnvironmentName?: EnvironmentName;
            InfoType: EnvironmentInfoType;
        }
        export interface RestartAppServerMessage {
            EnvironmentId?: EnvironmentId;
            EnvironmentName?: EnvironmentName;
        }
        export interface RetrieveEnvironmentInfoMessage {
            EnvironmentId?: EnvironmentId;
            EnvironmentName?: EnvironmentName;
            InfoType: EnvironmentInfoType;
        }
        export interface RetrieveEnvironmentInfoResultMessage {
            EnvironmentInfo?: EnvironmentInfoDescriptionList;
        }
        export interface S3Location {
            S3Bucket?: S3Bucket;
            S3Key?: S3Key;
        }
        export interface S3LocationNotInServiceRegionException {
        }
        export interface S3SubscriptionRequiredException {
        }
        export interface SingleInstanceHealth {
            InstanceId?: InstanceId;
            HealthStatus?: String;
            Color?: String;
            Causes?: Causes;
            LaunchedAt?: LaunchedAt;
            ApplicationMetrics?: ApplicationMetrics;
            System?: SystemStatus;
        }
        export interface SolutionStackDescription {
            SolutionStackName?: SolutionStackName;
            PermittedFileTypes?: SolutionStackFileTypeList;
        }
        export interface SourceBundleDeletionException {
        }
        export interface SourceConfiguration {
            ApplicationName?: ApplicationName;
            TemplateName?: ConfigurationTemplateName;
        }
        export interface StatusCodes {
            Status2xx?: NullableInteger;
            Status3xx?: NullableInteger;
            Status4xx?: NullableInteger;
            Status5xx?: NullableInteger;
        }
        export interface SwapEnvironmentCNAMEsMessage {
            SourceEnvironmentId?: EnvironmentId;
            SourceEnvironmentName?: EnvironmentName;
            DestinationEnvironmentId?: EnvironmentId;
            DestinationEnvironmentName?: EnvironmentName;
        }
        export interface SystemStatus {
            CPUUtilization?: CPUUtilization;
            LoadAverage?: LoadAverage;
        }
        export interface Tag {
            Key?: TagKey;
            Value?: TagValue;
        }
        export interface TerminateEnvironmentMessage {
            EnvironmentId?: EnvironmentId;
            EnvironmentName?: EnvironmentName;
            TerminateResources?: TerminateEnvironmentResources;
            ForceTerminate?: ForceTerminate;
        }
        export interface TooManyApplicationVersionsException {
        }
        export interface TooManyApplicationsException {
        }
        export interface TooManyBucketsException {
        }
        export interface TooManyConfigurationTemplatesException {
        }
        export interface TooManyEnvironmentsException {
        }
        export interface Trigger {
            Name?: ResourceId;
        }
        export interface UpdateApplicationMessage {
            ApplicationName: ApplicationName;
            Description?: Description;
        }
        export interface UpdateApplicationVersionMessage {
            ApplicationName: ApplicationName;
            VersionLabel: VersionLabel;
            Description?: Description;
        }
        export interface UpdateConfigurationTemplateMessage {
            ApplicationName: ApplicationName;
            TemplateName: ConfigurationTemplateName;
            Description?: Description;
            OptionSettings?: ConfigurationOptionSettingsList;
            OptionsToRemove?: OptionsSpecifierList;
        }
        export interface UpdateEnvironmentMessage {
            ApplicationName?: ApplicationName;
            EnvironmentId?: EnvironmentId;
            EnvironmentName?: EnvironmentName;
            GroupName?: GroupName;
            Description?: Description;
            Tier?: EnvironmentTier;
            VersionLabel?: VersionLabel;
            TemplateName?: ConfigurationTemplateName;
            SolutionStackName?: SolutionStackName;
            OptionSettings?: ConfigurationOptionSettingsList;
            OptionsToRemove?: OptionsSpecifierList;
        }
        export interface ValidateConfigurationSettingsMessage {
            ApplicationName: ApplicationName;
            TemplateName?: ConfigurationTemplateName;
            EnvironmentName?: EnvironmentName;
            OptionSettings: ConfigurationOptionSettingsList;
        }
        export interface ValidationMessage {
            Message?: ValidationMessageString;
            Severity?: ValidationSeverity;
            Namespace?: OptionNamespace;
            OptionName?: ConfigurationOptionName;
        }

    }
}
