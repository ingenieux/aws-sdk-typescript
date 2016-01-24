// Type definitions for aws-sdk - Elastic Load Balancing
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2012-06-01
     * endpointPrefix: elasticloadbalancing
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: query
     */
    export class ELB extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      addTags(params: ELB.AddTagsInput, callback?: (err: ELB.AccessPointNotFoundException|ELB.TooManyTagsException|ELB.DuplicateTagKeysException|any, data: ELB.AddTagsOutput|any) => void): Request;
      applySecurityGroupsToLoadBalancer(params: ELB.ApplySecurityGroupsToLoadBalancerInput, callback?: (err: ELB.AccessPointNotFoundException|ELB.InvalidConfigurationRequestException|ELB.InvalidSecurityGroupException|any, data: ELB.ApplySecurityGroupsToLoadBalancerOutput|any) => void): Request;
      attachLoadBalancerToSubnets(params: ELB.AttachLoadBalancerToSubnetsInput, callback?: (err: ELB.AccessPointNotFoundException|ELB.InvalidConfigurationRequestException|ELB.SubnetNotFoundException|ELB.InvalidSubnetException|any, data: ELB.AttachLoadBalancerToSubnetsOutput|any) => void): Request;
      configureHealthCheck(params: ELB.ConfigureHealthCheckInput, callback?: (err: ELB.AccessPointNotFoundException|any, data: ELB.ConfigureHealthCheckOutput|any) => void): Request;
      createAppCookieStickinessPolicy(params: ELB.CreateAppCookieStickinessPolicyInput, callback?: (err: ELB.AccessPointNotFoundException|ELB.DuplicatePolicyNameException|ELB.TooManyPoliciesException|ELB.InvalidConfigurationRequestException|any, data: ELB.CreateAppCookieStickinessPolicyOutput|any) => void): Request;
      createLBCookieStickinessPolicy(params: ELB.CreateLBCookieStickinessPolicyInput, callback?: (err: ELB.AccessPointNotFoundException|ELB.DuplicatePolicyNameException|ELB.TooManyPoliciesException|ELB.InvalidConfigurationRequestException|any, data: ELB.CreateLBCookieStickinessPolicyOutput|any) => void): Request;
      createLoadBalancer(params: ELB.CreateAccessPointInput, callback?: (err: ELB.DuplicateAccessPointNameException|ELB.TooManyAccessPointsException|ELB.CertificateNotFoundException|ELB.InvalidConfigurationRequestException|ELB.SubnetNotFoundException|ELB.InvalidSubnetException|ELB.InvalidSecurityGroupException|ELB.InvalidSchemeException|ELB.TooManyTagsException|ELB.DuplicateTagKeysException|any, data: ELB.CreateAccessPointOutput|any) => void): Request;
      createLoadBalancerListeners(params: ELB.CreateLoadBalancerListenerInput, callback?: (err: ELB.AccessPointNotFoundException|ELB.DuplicateListenerException|ELB.CertificateNotFoundException|ELB.InvalidConfigurationRequestException|any, data: ELB.CreateLoadBalancerListenerOutput|any) => void): Request;
      createLoadBalancerPolicy(params: ELB.CreateLoadBalancerPolicyInput, callback?: (err: ELB.AccessPointNotFoundException|ELB.PolicyTypeNotFoundException|ELB.DuplicatePolicyNameException|ELB.TooManyPoliciesException|ELB.InvalidConfigurationRequestException|any, data: ELB.CreateLoadBalancerPolicyOutput|any) => void): Request;
      deleteLoadBalancer(params: ELB.DeleteAccessPointInput, callback?: (err: any, data: ELB.DeleteAccessPointOutput|any) => void): Request;
      deleteLoadBalancerListeners(params: ELB.DeleteLoadBalancerListenerInput, callback?: (err: ELB.AccessPointNotFoundException|any, data: ELB.DeleteLoadBalancerListenerOutput|any) => void): Request;
      deleteLoadBalancerPolicy(params: ELB.DeleteLoadBalancerPolicyInput, callback?: (err: ELB.AccessPointNotFoundException|ELB.InvalidConfigurationRequestException|any, data: ELB.DeleteLoadBalancerPolicyOutput|any) => void): Request;
      deregisterInstancesFromLoadBalancer(params: ELB.DeregisterEndPointsInput, callback?: (err: ELB.AccessPointNotFoundException|ELB.InvalidEndPointException|any, data: ELB.DeregisterEndPointsOutput|any) => void): Request;
      describeInstanceHealth(params: ELB.DescribeEndPointStateInput, callback?: (err: ELB.AccessPointNotFoundException|ELB.InvalidEndPointException|any, data: ELB.DescribeEndPointStateOutput|any) => void): Request;
      describeLoadBalancerAttributes(params: ELB.DescribeLoadBalancerAttributesInput, callback?: (err: ELB.AccessPointNotFoundException|ELB.LoadBalancerAttributeNotFoundException|any, data: ELB.DescribeLoadBalancerAttributesOutput|any) => void): Request;
      describeLoadBalancerPolicies(params: ELB.DescribeLoadBalancerPoliciesInput, callback?: (err: ELB.AccessPointNotFoundException|ELB.PolicyNotFoundException|any, data: ELB.DescribeLoadBalancerPoliciesOutput|any) => void): Request;
      describeLoadBalancerPolicyTypes(params: ELB.DescribeLoadBalancerPolicyTypesInput, callback?: (err: ELB.PolicyTypeNotFoundException|any, data: ELB.DescribeLoadBalancerPolicyTypesOutput|any) => void): Request;
      describeLoadBalancers(params: ELB.DescribeAccessPointsInput, callback?: (err: ELB.AccessPointNotFoundException|any, data: ELB.DescribeAccessPointsOutput|any) => void): Request;
      describeTags(params: ELB.DescribeTagsInput, callback?: (err: ELB.AccessPointNotFoundException|any, data: ELB.DescribeTagsOutput|any) => void): Request;
      detachLoadBalancerFromSubnets(params: ELB.DetachLoadBalancerFromSubnetsInput, callback?: (err: ELB.AccessPointNotFoundException|ELB.InvalidConfigurationRequestException|any, data: ELB.DetachLoadBalancerFromSubnetsOutput|any) => void): Request;
      disableAvailabilityZonesForLoadBalancer(params: ELB.RemoveAvailabilityZonesInput, callback?: (err: ELB.AccessPointNotFoundException|ELB.InvalidConfigurationRequestException|any, data: ELB.RemoveAvailabilityZonesOutput|any) => void): Request;
      enableAvailabilityZonesForLoadBalancer(params: ELB.AddAvailabilityZonesInput, callback?: (err: ELB.AccessPointNotFoundException|any, data: ELB.AddAvailabilityZonesOutput|any) => void): Request;
      modifyLoadBalancerAttributes(params: ELB.ModifyLoadBalancerAttributesInput, callback?: (err: ELB.AccessPointNotFoundException|ELB.LoadBalancerAttributeNotFoundException|ELB.InvalidConfigurationRequestException|any, data: ELB.ModifyLoadBalancerAttributesOutput|any) => void): Request;
      registerInstancesWithLoadBalancer(params: ELB.RegisterEndPointsInput, callback?: (err: ELB.AccessPointNotFoundException|ELB.InvalidEndPointException|any, data: ELB.RegisterEndPointsOutput|any) => void): Request;
      removeTags(params: ELB.RemoveTagsInput, callback?: (err: ELB.AccessPointNotFoundException|any, data: ELB.RemoveTagsOutput|any) => void): Request;
      setLoadBalancerListenerSSLCertificate(params: ELB.SetLoadBalancerListenerSSLCertificateInput, callback?: (err: ELB.CertificateNotFoundException|ELB.AccessPointNotFoundException|ELB.ListenerNotFoundException|ELB.InvalidConfigurationRequestException|any, data: ELB.SetLoadBalancerListenerSSLCertificateOutput|any) => void): Request;
      setLoadBalancerPoliciesForBackendServer(params: ELB.SetLoadBalancerPoliciesForBackendServerInput, callback?: (err: ELB.AccessPointNotFoundException|ELB.PolicyNotFoundException|ELB.InvalidConfigurationRequestException|any, data: ELB.SetLoadBalancerPoliciesForBackendServerOutput|any) => void): Request;
      setLoadBalancerPoliciesOfListener(params: ELB.SetLoadBalancerPoliciesOfListenerInput, callback?: (err: ELB.AccessPointNotFoundException|ELB.PolicyNotFoundException|ELB.ListenerNotFoundException|ELB.InvalidConfigurationRequestException|any, data: ELB.SetLoadBalancerPoliciesOfListenerOutput|any) => void): Request;

    }

    export module ELB {
        export type AccessLogEnabled = boolean;
        export type AccessLogInterval = number;
        export type AccessLogPrefix = string;
        export type AccessPointName = string;
        export type AccessPointPort = number;
        export type AdditionalAttributes = AdditionalAttribute[];
        export type AppCookieStickinessPolicies = AppCookieStickinessPolicy[];
        export type AttributeName = string;
        export type AttributeType = string;
        export type AttributeValue = string;
        export type AvailabilityZone = string;
        export type AvailabilityZones = AvailabilityZone[];
        export type BackendServerDescriptions = BackendServerDescription[];
        export type Cardinality = string;
        export type ConnectionDrainingEnabled = boolean;
        export type ConnectionDrainingTimeout = number;
        export type CookieExpirationPeriod = number;
        export type CookieName = string;
        export type CreatedTime = number;
        export type CrossZoneLoadBalancingEnabled = boolean;
        export type DNSName = string;
        export type DefaultValue = string;
        export type Description = string;
        export type EndPointPort = number;
        export type HealthCheckInterval = number;    // max: 300, min: 1
        export type HealthCheckTarget = string;
        export type HealthCheckTimeout = number;    // max: 300, min: 1
        export type HealthyThreshold = number;    // max: 10, min: 2
        export type IdleTimeout = number;    // max: 3600, min: 1
        export type InstanceId = string;
        export type InstancePort = number;    // max: 65535, min: 1
        export type InstanceStates = InstanceState[];
        export type Instances = Instance[];
        export type LBCookieStickinessPolicies = LBCookieStickinessPolicy[];
        export type ListenerDescriptions = ListenerDescription[];
        export type Listeners = Listener[];
        export type LoadBalancerDescriptions = LoadBalancerDescription[];
        export type LoadBalancerNames = AccessPointName[];
        export type LoadBalancerNamesMax20 = AccessPointName[];    // max: 20, min: 1
        export type LoadBalancerScheme = string;
        export type Marker = string;
        export type PageSize = number;    // max: 400, min: 1
        export type PolicyAttributeDescriptions = PolicyAttributeDescription[];
        export type PolicyAttributeTypeDescriptions = PolicyAttributeTypeDescription[];
        export type PolicyAttributes = PolicyAttribute[];
        export type PolicyDescriptions = PolicyDescription[];
        export type PolicyName = string;
        export type PolicyNames = PolicyName[];
        export type PolicyTypeDescriptions = PolicyTypeDescription[];
        export type PolicyTypeName = string;
        export type PolicyTypeNames = PolicyTypeName[];
        export type Ports = AccessPointPort[];
        export type Protocol = string;
        export type ReasonCode = string;
        export type S3BucketName = string;
        export type SSLCertificateId = string;
        export type SecurityGroupId = string;
        export type SecurityGroupName = string;
        export type SecurityGroupOwnerAlias = string;
        export type SecurityGroups = SecurityGroupId[];
        export type State = string;
        export type StringVal = string;
        export type SubnetId = string;
        export type Subnets = SubnetId[];
        export type TagDescriptions = TagDescription[];
        export type TagKey = string;    // pattern: &quot;^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$&quot;, max: 128, min: 1
        export type TagKeyList = TagKeyOnly[];    // min: 1
        export type TagList = Tag[];    // min: 1
        export type TagValue = string;    // pattern: &quot;^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$&quot;, max: 256
        export type UnhealthyThreshold = number;    // max: 10, min: 2
        export type VPCId = string;

        export interface AccessLog {
            Enabled: AccessLogEnabled;
            S3BucketName?: S3BucketName;
            EmitInterval?: AccessLogInterval;
            S3BucketPrefix?: AccessLogPrefix;
        }
        export interface AccessPointNotFoundException {
        }
        export interface AddAvailabilityZonesInput {
            LoadBalancerName: AccessPointName;
            AvailabilityZones: AvailabilityZones;
        }
        export interface AddAvailabilityZonesOutput {
            AvailabilityZones?: AvailabilityZones;
        }
        export interface AddTagsInput {
            LoadBalancerNames: LoadBalancerNames;
            Tags: TagList;
        }
        export interface AddTagsOutput {
        }
        export interface AdditionalAttribute {
            Key?: StringVal;
            Value?: StringVal;
        }
        export interface AppCookieStickinessPolicy {
            PolicyName?: PolicyName;
            CookieName?: CookieName;
        }
        export interface ApplySecurityGroupsToLoadBalancerInput {
            LoadBalancerName: AccessPointName;
            SecurityGroups: SecurityGroups;
        }
        export interface ApplySecurityGroupsToLoadBalancerOutput {
            SecurityGroups?: SecurityGroups;
        }
        export interface AttachLoadBalancerToSubnetsInput {
            LoadBalancerName: AccessPointName;
            Subnets: Subnets;
        }
        export interface AttachLoadBalancerToSubnetsOutput {
            Subnets?: Subnets;
        }
        export interface BackendServerDescription {
            InstancePort?: InstancePort;
            PolicyNames?: PolicyNames;
        }
        export interface CertificateNotFoundException {
        }
        export interface ConfigureHealthCheckInput {
            LoadBalancerName: AccessPointName;
            HealthCheck: HealthCheck;
        }
        export interface ConfigureHealthCheckOutput {
            HealthCheck?: HealthCheck;
        }
        export interface ConnectionDraining {
            Enabled: ConnectionDrainingEnabled;
            Timeout?: ConnectionDrainingTimeout;
        }
        export interface ConnectionSettings {
            IdleTimeout: IdleTimeout;
        }
        export interface CreateAccessPointInput {
            LoadBalancerName: AccessPointName;
            Listeners: Listeners;
            AvailabilityZones?: AvailabilityZones;
            Subnets?: Subnets;
            SecurityGroups?: SecurityGroups;
            Scheme?: LoadBalancerScheme;
            Tags?: TagList;
        }
        export interface CreateAccessPointOutput {
            DNSName?: DNSName;
        }
        export interface CreateAppCookieStickinessPolicyInput {
            LoadBalancerName: AccessPointName;
            PolicyName: PolicyName;
            CookieName: CookieName;
        }
        export interface CreateAppCookieStickinessPolicyOutput {
        }
        export interface CreateLBCookieStickinessPolicyInput {
            LoadBalancerName: AccessPointName;
            PolicyName: PolicyName;
            CookieExpirationPeriod?: CookieExpirationPeriod;
        }
        export interface CreateLBCookieStickinessPolicyOutput {
        }
        export interface CreateLoadBalancerListenerInput {
            LoadBalancerName: AccessPointName;
            Listeners: Listeners;
        }
        export interface CreateLoadBalancerListenerOutput {
        }
        export interface CreateLoadBalancerPolicyInput {
            LoadBalancerName: AccessPointName;
            PolicyName: PolicyName;
            PolicyTypeName: PolicyTypeName;
            PolicyAttributes?: PolicyAttributes;
        }
        export interface CreateLoadBalancerPolicyOutput {
        }
        export interface CrossZoneLoadBalancing {
            Enabled: CrossZoneLoadBalancingEnabled;
        }
        export interface DeleteAccessPointInput {
            LoadBalancerName: AccessPointName;
        }
        export interface DeleteAccessPointOutput {
        }
        export interface DeleteLoadBalancerListenerInput {
            LoadBalancerName: AccessPointName;
            LoadBalancerPorts: Ports;
        }
        export interface DeleteLoadBalancerListenerOutput {
        }
        export interface DeleteLoadBalancerPolicyInput {
            LoadBalancerName: AccessPointName;
            PolicyName: PolicyName;
        }
        export interface DeleteLoadBalancerPolicyOutput {
        }
        export interface DeregisterEndPointsInput {
            LoadBalancerName: AccessPointName;
            Instances: Instances;
        }
        export interface DeregisterEndPointsOutput {
            Instances?: Instances;
        }
        export interface DescribeAccessPointsInput {
            LoadBalancerNames?: LoadBalancerNames;
            Marker?: Marker;
            PageSize?: PageSize;
        }
        export interface DescribeAccessPointsOutput {
            LoadBalancerDescriptions?: LoadBalancerDescriptions;
            NextMarker?: Marker;
        }
        export interface DescribeEndPointStateInput {
            LoadBalancerName: AccessPointName;
            Instances?: Instances;
        }
        export interface DescribeEndPointStateOutput {
            InstanceStates?: InstanceStates;
        }
        export interface DescribeLoadBalancerAttributesInput {
            LoadBalancerName: AccessPointName;
        }
        export interface DescribeLoadBalancerAttributesOutput {
            LoadBalancerAttributes?: LoadBalancerAttributes;
        }
        export interface DescribeLoadBalancerPoliciesInput {
            LoadBalancerName?: AccessPointName;
            PolicyNames?: PolicyNames;
        }
        export interface DescribeLoadBalancerPoliciesOutput {
            PolicyDescriptions?: PolicyDescriptions;
        }
        export interface DescribeLoadBalancerPolicyTypesInput {
            PolicyTypeNames?: PolicyTypeNames;
        }
        export interface DescribeLoadBalancerPolicyTypesOutput {
            PolicyTypeDescriptions?: PolicyTypeDescriptions;
        }
        export interface DescribeTagsInput {
            LoadBalancerNames: LoadBalancerNamesMax20;
        }
        export interface DescribeTagsOutput {
            TagDescriptions?: TagDescriptions;
        }
        export interface DetachLoadBalancerFromSubnetsInput {
            LoadBalancerName: AccessPointName;
            Subnets: Subnets;
        }
        export interface DetachLoadBalancerFromSubnetsOutput {
            Subnets?: Subnets;
        }
        export interface DuplicateAccessPointNameException {
        }
        export interface DuplicateListenerException {
        }
        export interface DuplicatePolicyNameException {
        }
        export interface DuplicateTagKeysException {
        }
        export interface HealthCheck {
            Target: HealthCheckTarget;
            Interval: HealthCheckInterval;
            Timeout: HealthCheckTimeout;
            UnhealthyThreshold: UnhealthyThreshold;
            HealthyThreshold: HealthyThreshold;
        }
        export interface Instance {
            InstanceId?: InstanceId;
        }
        export interface InstanceState {
            InstanceId?: InstanceId;
            State?: State;
            ReasonCode?: ReasonCode;
            Description?: Description;
        }
        export interface InvalidConfigurationRequestException {
        }
        export interface InvalidEndPointException {
        }
        export interface InvalidSchemeException {
        }
        export interface InvalidSecurityGroupException {
        }
        export interface InvalidSubnetException {
        }
        export interface LBCookieStickinessPolicy {
            PolicyName?: PolicyName;
            CookieExpirationPeriod?: CookieExpirationPeriod;
        }
        export interface Listener {
            Protocol: Protocol;
            LoadBalancerPort: AccessPointPort;
            InstanceProtocol?: Protocol;
            InstancePort: InstancePort;
            SSLCertificateId?: SSLCertificateId;
        }
        export interface ListenerDescription {
            Listener?: Listener;
            PolicyNames?: PolicyNames;
        }
        export interface ListenerNotFoundException {
        }
        export interface LoadBalancerAttributeNotFoundException {
        }
        export interface LoadBalancerAttributes {
            CrossZoneLoadBalancing?: CrossZoneLoadBalancing;
            AccessLog?: AccessLog;
            ConnectionDraining?: ConnectionDraining;
            ConnectionSettings?: ConnectionSettings;
            AdditionalAttributes?: AdditionalAttributes;
        }
        export interface LoadBalancerDescription {
            LoadBalancerName?: AccessPointName;
            DNSName?: DNSName;
            CanonicalHostedZoneName?: DNSName;
            CanonicalHostedZoneNameID?: DNSName;
            ListenerDescriptions?: ListenerDescriptions;
            Policies?: Policies;
            BackendServerDescriptions?: BackendServerDescriptions;
            AvailabilityZones?: AvailabilityZones;
            Subnets?: Subnets;
            VPCId?: VPCId;
            Instances?: Instances;
            HealthCheck?: HealthCheck;
            SourceSecurityGroup?: SourceSecurityGroup;
            SecurityGroups?: SecurityGroups;
            CreatedTime?: CreatedTime;
            Scheme?: LoadBalancerScheme;
        }
        export interface ModifyLoadBalancerAttributesInput {
            LoadBalancerName: AccessPointName;
            LoadBalancerAttributes: LoadBalancerAttributes;
        }
        export interface ModifyLoadBalancerAttributesOutput {
            LoadBalancerName?: AccessPointName;
            LoadBalancerAttributes?: LoadBalancerAttributes;
        }
        export interface Policies {
            AppCookieStickinessPolicies?: AppCookieStickinessPolicies;
            LBCookieStickinessPolicies?: LBCookieStickinessPolicies;
            OtherPolicies?: PolicyNames;
        }
        export interface PolicyAttribute {
            AttributeName?: AttributeName;
            AttributeValue?: AttributeValue;
        }
        export interface PolicyAttributeDescription {
            AttributeName?: AttributeName;
            AttributeValue?: AttributeValue;
        }
        export interface PolicyAttributeTypeDescription {
            AttributeName?: AttributeName;
            AttributeType?: AttributeType;
            Description?: Description;
            DefaultValue?: DefaultValue;
            Cardinality?: Cardinality;
        }
        export interface PolicyDescription {
            PolicyName?: PolicyName;
            PolicyTypeName?: PolicyTypeName;
            PolicyAttributeDescriptions?: PolicyAttributeDescriptions;
        }
        export interface PolicyNotFoundException {
        }
        export interface PolicyTypeDescription {
            PolicyTypeName?: PolicyTypeName;
            Description?: Description;
            PolicyAttributeTypeDescriptions?: PolicyAttributeTypeDescriptions;
        }
        export interface PolicyTypeNotFoundException {
        }
        export interface RegisterEndPointsInput {
            LoadBalancerName: AccessPointName;
            Instances: Instances;
        }
        export interface RegisterEndPointsOutput {
            Instances?: Instances;
        }
        export interface RemoveAvailabilityZonesInput {
            LoadBalancerName: AccessPointName;
            AvailabilityZones: AvailabilityZones;
        }
        export interface RemoveAvailabilityZonesOutput {
            AvailabilityZones?: AvailabilityZones;
        }
        export interface RemoveTagsInput {
            LoadBalancerNames: LoadBalancerNames;
            Tags: TagKeyList;
        }
        export interface RemoveTagsOutput {
        }
        export interface SetLoadBalancerListenerSSLCertificateInput {
            LoadBalancerName: AccessPointName;
            LoadBalancerPort: AccessPointPort;
            SSLCertificateId: SSLCertificateId;
        }
        export interface SetLoadBalancerListenerSSLCertificateOutput {
        }
        export interface SetLoadBalancerPoliciesForBackendServerInput {
            LoadBalancerName: AccessPointName;
            InstancePort: EndPointPort;
            PolicyNames: PolicyNames;
        }
        export interface SetLoadBalancerPoliciesForBackendServerOutput {
        }
        export interface SetLoadBalancerPoliciesOfListenerInput {
            LoadBalancerName: AccessPointName;
            LoadBalancerPort: AccessPointPort;
            PolicyNames: PolicyNames;
        }
        export interface SetLoadBalancerPoliciesOfListenerOutput {
        }
        export interface SourceSecurityGroup {
            OwnerAlias?: SecurityGroupOwnerAlias;
            GroupName?: SecurityGroupName;
        }
        export interface SubnetNotFoundException {
        }
        export interface Tag {
            Key: TagKey;
            Value?: TagValue;
        }
        export interface TagDescription {
            LoadBalancerName?: AccessPointName;
            Tags?: TagList;
        }
        export interface TagKeyOnly {
            Key?: TagKey;
        }
        export interface TooManyAccessPointsException {
        }
        export interface TooManyPoliciesException {
        }
        export interface TooManyTagsException {
        }

    }
}
