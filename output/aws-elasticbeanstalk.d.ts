// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class ElasticBeanstalk {
      constructor(options?: any);
      abortEnvironmentUpdate(params: AbortEnvironmentUpdateMessage, callback: (err: InsufficientPrivilegesException|any, data: any) => void): void;
      checkDNSAvailability(params: CheckDNSAvailabilityMessage, callback: (err: any, data: CheckDNSAvailabilityResultMessage|any) => void): void;
      createApplication(params: CreateApplicationMessage, callback: (err: TooManyApplicationsException|any, data: ApplicationDescriptionMessage|any) => void): void;
      createApplicationVersion(params: CreateApplicationVersionMessage, callback: (err: TooManyApplicationsException|TooManyApplicationVersionsException|InsufficientPrivilegesException|S3LocationNotInServiceRegionException|any, data: ApplicationVersionDescriptionMessage|any) => void): void;
      createConfigurationTemplate(params: CreateConfigurationTemplateMessage, callback: (err: InsufficientPrivilegesException|TooManyConfigurationTemplatesException|any, data: ConfigurationSettingsDescription|any) => void): void;
      createEnvironment(params: CreateEnvironmentMessage, callback: (err: TooManyEnvironmentsException|InsufficientPrivilegesException|any, data: EnvironmentDescription|any) => void): void;
      createStorageLocation(callback: (err: TooManyBucketsException|S3SubscriptionRequiredException|InsufficientPrivilegesException|any, data: CreateStorageLocationResultMessage|any) => void): void;
      deleteApplication(params: DeleteApplicationMessage, callback: (err: OperationInProgressException|any, data: any) => void): void;
      deleteApplicationVersion(params: DeleteApplicationVersionMessage, callback: (err: SourceBundleDeletionException|InsufficientPrivilegesException|OperationInProgressException|S3LocationNotInServiceRegionException|any, data: any) => void): void;
      deleteConfigurationTemplate(params: DeleteConfigurationTemplateMessage, callback: (err: OperationInProgressException|any, data: any) => void): void;
      deleteEnvironmentConfiguration(params: DeleteEnvironmentConfigurationMessage, callback: (err: any, data: any) => void): void;
      describeApplicationVersions(params: DescribeApplicationVersionsMessage, callback: (err: any, data: ApplicationVersionDescriptionsMessage|any) => void): void;
      describeApplications(params: DescribeApplicationsMessage, callback: (err: any, data: ApplicationDescriptionsMessage|any) => void): void;
      describeConfigurationOptions(params: DescribeConfigurationOptionsMessage, callback: (err: any, data: ConfigurationOptionsDescription|any) => void): void;
      describeConfigurationSettings(params: DescribeConfigurationSettingsMessage, callback: (err: any, data: ConfigurationSettingsDescriptions|any) => void): void;
      describeEnvironmentResources(params: DescribeEnvironmentResourcesMessage, callback: (err: InsufficientPrivilegesException|any, data: EnvironmentResourceDescriptionsMessage|any) => void): void;
      describeEnvironments(params: DescribeEnvironmentsMessage, callback: (err: any, data: EnvironmentDescriptionsMessage|any) => void): void;
      describeEvents(params: DescribeEventsMessage, callback: (err: any, data: EventDescriptionsMessage|any) => void): void;
      listAvailableSolutionStacks(callback: (err: any, data: ListAvailableSolutionStacksResultMessage|any) => void): void;
      rebuildEnvironment(params: RebuildEnvironmentMessage, callback: (err: InsufficientPrivilegesException|any, data: any) => void): void;
      requestEnvironmentInfo(params: RequestEnvironmentInfoMessage, callback: (err: any, data: any) => void): void;
      restartAppServer(params: RestartAppServerMessage, callback: (err: any, data: any) => void): void;
      retrieveEnvironmentInfo(params: RetrieveEnvironmentInfoMessage, callback: (err: any, data: RetrieveEnvironmentInfoResultMessage|any) => void): void;
      swapEnvironmentCNAMEs(params: SwapEnvironmentCNAMEsMessage, callback: (err: any, data: any) => void): void;
      terminateEnvironment(params: TerminateEnvironmentMessage, callback: (err: InsufficientPrivilegesException|any, data: EnvironmentDescription|any) => void): void;
      updateApplication(params: UpdateApplicationMessage, callback: (err: any, data: ApplicationDescriptionMessage|any) => void): void;
      updateApplicationVersion(params: UpdateApplicationVersionMessage, callback: (err: any, data: ApplicationVersionDescriptionMessage|any) => void): void;
      updateConfigurationTemplate(params: UpdateConfigurationTemplateMessage, callback: (err: InsufficientPrivilegesException|any, data: ConfigurationSettingsDescription|any) => void): void;
      updateEnvironment(params: UpdateEnvironmentMessage, callback: (err: InsufficientPrivilegesException|any, data: EnvironmentDescription|any) => void): void;
      validateConfigurationSettings(params: ValidateConfigurationSettingsMessage, callback: (err: InsufficientPrivilegesException|any, data: ConfigurationSettingsValidationMessages|any) => void): void;
    }

    export interface AbortEnvironmentUpdateMessage {
      EnvironmentId?: EnvironmentId;
      EnvironmentName?: EnvironmentName;
    }


    export type AbortableOperationInProgress = boolean;

    export interface ApplicationDescription {
      ApplicationName?: ApplicationName;
      Description?: Description;
      DateCreated?: CreationDate;
      DateUpdated?: UpdateDate;
      Versions?: VersionLabelsList;
      ConfigurationTemplates?: ConfigurationTemplateNamesList;
    }


    export type ApplicationDescriptionList = Array<ApplicationDescription>;

    export interface ApplicationDescriptionMessage {
      Application?: ApplicationDescription;
    }


    export interface ApplicationDescriptionsMessage {
      Applications?: ApplicationDescriptionList;
    }


    export type ApplicationName = string;

    export type ApplicationNamesList = Array<ApplicationName>;

    export interface ApplicationVersionDescription {
      ApplicationName?: ApplicationName;
      Description?: Description;
      VersionLabel?: VersionLabel;
      SourceBundle?: S3Location;
      DateCreated?: CreationDate;
      DateUpdated?: UpdateDate;
    }


    export type ApplicationVersionDescriptionList = Array<ApplicationVersionDescription>;

    export interface ApplicationVersionDescriptionMessage {
      ApplicationVersion?: ApplicationVersionDescription;
    }


    export interface ApplicationVersionDescriptionsMessage {
      ApplicationVersions?: ApplicationVersionDescriptionList;
    }


    export type AutoCreateApplication = boolean;

    export interface AutoScalingGroup {
      Name?: ResourceId;
    }


    export type AutoScalingGroupList = Array<AutoScalingGroup>;

    export type AvailableSolutionStackDetailsList = Array<SolutionStackDescription>;

    export type AvailableSolutionStackNamesList = Array<SolutionStackName>;

    export interface CheckDNSAvailabilityMessage {
      CNAMEPrefix: DNSCnamePrefix;
    }


    export interface CheckDNSAvailabilityResultMessage {
      Available?: CnameAvailability;
      FullyQualifiedCNAME?: DNSCname;
    }


    export type CnameAvailability = boolean;

    export type ConfigurationDeploymentStatus = string;

    export type ConfigurationOptionDefaultValue = string;

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


    export type ConfigurationOptionDescriptionsList = Array<ConfigurationOptionDescription>;

    export type ConfigurationOptionName = string;

    export type ConfigurationOptionPossibleValue = string;

    export type ConfigurationOptionPossibleValues = Array<ConfigurationOptionPossibleValue>;

    export interface ConfigurationOptionSetting {
      ResourceName?: ResourceName;
      Namespace?: OptionNamespace;
      OptionName?: ConfigurationOptionName;
      Value?: ConfigurationOptionValue;
    }


    export type ConfigurationOptionSettingsList = Array<ConfigurationOptionSetting>;

    export type ConfigurationOptionSeverity = string;

    export type ConfigurationOptionValue = string;

    export type ConfigurationOptionValueType = string;

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


    export type ConfigurationSettingsDescriptionList = Array<ConfigurationSettingsDescription>;

    export interface ConfigurationSettingsDescriptions {
      ConfigurationSettings?: ConfigurationSettingsDescriptionList;
    }


    export interface ConfigurationSettingsValidationMessages {
      Messages?: ValidationMessagesList;
    }


    export type ConfigurationTemplateName = string;

    export type ConfigurationTemplateNamesList = Array<ConfigurationTemplateName>;

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
      EnvironmentName: EnvironmentName;
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


    export type CreationDate = number;

    export type DNSCname = string;

    export type DNSCnamePrefix = string;

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


    export type DeleteSourceBundle = boolean;

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


    export type Description = string;

    export type Ec2InstanceId = string;

    export type EndpointURL = string;

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
      Resources?: EnvironmentResourcesDescription;
      Tier?: EnvironmentTier;
    }


    export type EnvironmentDescriptionsList = Array<EnvironmentDescription>;

    export interface EnvironmentDescriptionsMessage {
      Environments?: EnvironmentDescriptionsList;
    }


    export type EnvironmentHealth = string;

    export type EnvironmentId = string;

    export type EnvironmentIdList = Array<EnvironmentId>;

    export interface EnvironmentInfoDescription {
      InfoType?: EnvironmentInfoType;
      Ec2InstanceId?: Ec2InstanceId;
      SampleTimestamp?: SampleTimestamp;
      Message?: Message;
    }


    export type EnvironmentInfoDescriptionList = Array<EnvironmentInfoDescription>;

    export type EnvironmentInfoType = string;

    export type EnvironmentName = string;

    export type EnvironmentNamesList = Array<EnvironmentName>;

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


    export type EnvironmentStatus = string;

    export interface EnvironmentTier {
      Name?: String;
      Type?: String;
      Version?: String;
    }


    export type EventDate = number;

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


    export type EventDescriptionList = Array<EventDescription>;

    export interface EventDescriptionsMessage {
      Events?: EventDescriptionList;
      NextToken?: Token;
    }


    export type EventMessage = string;

    export type EventSeverity = string;

    export type FileTypeExtension = string;

    export type IncludeDeleted = boolean;

    export type IncludeDeletedBackTo = number;

    export interface Instance {
      Id?: ResourceId;
    }


    export type InstanceList = Array<Instance>;

    export interface InsufficientPrivilegesException {
    }


    export type Integer = number;

    export interface LaunchConfiguration {
      Name?: ResourceId;
    }


    export type LaunchConfigurationList = Array<LaunchConfiguration>;

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


    export type LoadBalancerList = Array<LoadBalancer>;

    export type LoadBalancerListenersDescription = Array<Listener>;

    export type MaxRecords = number;

    export type Message = string;

    export interface OperationInProgressException {
    }


    export type OptionNamespace = string;

    export type OptionRestrictionMaxLength = number;

    export type OptionRestrictionMaxValue = number;

    export type OptionRestrictionMinValue = number;

    export interface OptionRestrictionRegex {
      Pattern?: RegexPattern;
      Label?: RegexLabel;
    }


    export interface OptionSpecification {
      ResourceName?: ResourceName;
      Namespace?: OptionNamespace;
      OptionName?: ConfigurationOptionName;
    }


    export type OptionsSpecifierList = Array<OptionSpecification>;

    export interface Queue {
      Name?: String;
      URL?: String;
    }


    export type QueueList = Array<Queue>;

    export interface RebuildEnvironmentMessage {
      EnvironmentId?: EnvironmentId;
      EnvironmentName?: EnvironmentName;
    }


    export type RegexLabel = string;

    export type RegexPattern = string;

    export interface RequestEnvironmentInfoMessage {
      EnvironmentId?: EnvironmentId;
      EnvironmentName?: EnvironmentName;
      InfoType: EnvironmentInfoType;
    }


    export type RequestId = string;

    export type ResourceId = string;

    export type ResourceName = string;

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


    export type S3Bucket = string;

    export type S3Key = string;

    export interface S3Location {
      S3Bucket?: S3Bucket;
      S3Key?: S3Key;
    }


    export interface S3LocationNotInServiceRegionException {
    }


    export interface S3SubscriptionRequiredException {
    }


    export type SampleTimestamp = number;

    export interface SolutionStackDescription {
      SolutionStackName?: SolutionStackName;
      PermittedFileTypes?: SolutionStackFileTypeList;
    }


    export type SolutionStackFileTypeList = Array<FileTypeExtension>;

    export type SolutionStackName = string;

    export interface SourceBundleDeletionException {
    }


    export interface SourceConfiguration {
      ApplicationName?: ApplicationName;
      TemplateName?: ConfigurationTemplateName;
    }


    export type String = string;

    export interface SwapEnvironmentCNAMEsMessage {
      SourceEnvironmentId?: EnvironmentId;
      SourceEnvironmentName?: EnvironmentName;
      DestinationEnvironmentId?: EnvironmentId;
      DestinationEnvironmentName?: EnvironmentName;
    }


    export interface Tag {
      Key?: TagKey;
      Value?: TagValue;
    }


    export type TagKey = string;

    export type TagValue = string;

    export type Tags = Array<Tag>;

    export type TerminateEnvForce = boolean;

    export interface TerminateEnvironmentMessage {
      EnvironmentId?: EnvironmentId;
      EnvironmentName?: EnvironmentName;
      TerminateResources?: TerminateEnvironmentResources;
    }


    export type TerminateEnvironmentResources = boolean;

    export type TimeFilterEnd = number;

    export type TimeFilterStart = number;

    export type Token = string;

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


    export type TriggerList = Array<Trigger>;

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


    export type UpdateDate = number;

    export interface UpdateEnvironmentMessage {
      EnvironmentId?: EnvironmentId;
      EnvironmentName?: EnvironmentName;
      Description?: Description;
      Tier?: EnvironmentTier;
      VersionLabel?: VersionLabel;
      TemplateName?: ConfigurationTemplateName;
      SolutionStackName?: SolutionStackName;
      OptionSettings?: ConfigurationOptionSettingsList;
      OptionsToRemove?: OptionsSpecifierList;
    }


    export type UserDefinedOption = boolean;

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


    export type ValidationMessageString = string;

    export type ValidationMessagesList = Array<ValidationMessage>;

    export type ValidationSeverity = string;

    export type VersionLabel = string;

    export type VersionLabelsList = Array<VersionLabel>;

}
