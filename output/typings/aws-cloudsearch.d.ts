// Type definitions for aws-sdk - Amazon CloudSearch
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2013-01-01
    * endpointPrefix: cloudsearch
    * serviceAbbreviation: 
    * signatureVersion: v4
    * protocol: query
    *
    * Amazon CloudSearch Configuration Service You use the Amazon CloudSearch
 configuration service to create, configure, and manage search domains.
 Configuration service requests are submitted using the AWS Query protocol. AWS
 Query requests are HTTP or HTTPS requests submitted via HTTP GET or POST with a
 query parameter named Action.
 
 The endpoint for configuration service requests is region-specific: cloudsearch.
 region.amazonaws.com. For example, cloudsearch.us-east-1.amazonaws.com. For a
 current list of supported regions and endpoints, see Regions and Endpoints
 [http://docs.aws.amazon.com/general/latest/gr/rande.html#cloudsearch_region].
    *
    */
  export class CloudSearch extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Indexes the search suggestions. For more information, see Configuring Suggesters
[http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters] 
in the Amazon CloudSearch Developer Guide.
     *
     * @error BaseException An error occurred while processing the request.  
     * @error InternalException An internal error occurred while processing the request. If this problem
persists, report an issue from the Service Health Dashboard
[http://status.aws.amazon.com/].  
     * @error ResourceNotFoundException The request was rejected because it attempted to reference a resource that does
not exist.  
     */
    buildSuggesters(params: CloudSearch.BuildSuggestersRequest, callback?: (err: CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.ResourceNotFoundException | any, data: CloudSearch.BuildSuggestersResponse | any) => void): Request<CloudSearch.BuildSuggestersResponse | any, CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.ResourceNotFoundException | any>;
    /**
     * Creates a new search domain. For more information, see Creating a Search Domain
[http://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html] 
in the Amazon CloudSearch Developer Guide.
     *
     * @error BaseException An error occurred while processing the request.  
     * @error InternalException An internal error occurred while processing the request. If this problem
persists, report an issue from the Service Health Dashboard
[http://status.aws.amazon.com/].  
     * @error LimitExceededException The request was rejected because a resource limit has already been met.  
     */
    createDomain(params: CloudSearch.CreateDomainRequest, callback?: (err: CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.LimitExceededException | any, data: CloudSearch.CreateDomainResponse | any) => void): Request<CloudSearch.CreateDomainResponse | any, CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.LimitExceededException | any>;
    /**
     * Configures an analysis scheme that can be applied to a text or text-array field
to define language-specific text processing options. For more information, see 
Configuring Analysis Schemes
[http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html] 
in the Amazon CloudSearch Developer Guide.
     *
     * @error BaseException An error occurred while processing the request.  
     * @error InternalException An internal error occurred while processing the request. If this problem
persists, report an issue from the Service Health Dashboard
[http://status.aws.amazon.com/].  
     * @error LimitExceededException The request was rejected because a resource limit has already been met.  
     * @error InvalidTypeException The request was rejected because it specified an invalid type definition.  
     * @error ResourceNotFoundException The request was rejected because it attempted to reference a resource that does
not exist.  
     */
    defineAnalysisScheme(params: CloudSearch.DefineAnalysisSchemeRequest, callback?: (err: CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.LimitExceededException | CloudSearch.InvalidTypeException | CloudSearch.ResourceNotFoundException | any, data: CloudSearch.DefineAnalysisSchemeResponse | any) => void): Request<CloudSearch.DefineAnalysisSchemeResponse | any, CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.LimitExceededException | CloudSearch.InvalidTypeException | CloudSearch.ResourceNotFoundException | any>;
    /**
     * Configures an Expression for the search domain. Used to create new expressions
and modify existing ones. If the expression exists, the new configuration
replaces the old one. For more information, see Configuring Expressions
[http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html] 
in the Amazon CloudSearch Developer Guide.
     *
     * @error BaseException An error occurred while processing the request.  
     * @error InternalException An internal error occurred while processing the request. If this problem
persists, report an issue from the Service Health Dashboard
[http://status.aws.amazon.com/].  
     * @error LimitExceededException The request was rejected because a resource limit has already been met.  
     * @error InvalidTypeException The request was rejected because it specified an invalid type definition.  
     * @error ResourceNotFoundException The request was rejected because it attempted to reference a resource that does
not exist.  
     */
    defineExpression(params: CloudSearch.DefineExpressionRequest, callback?: (err: CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.LimitExceededException | CloudSearch.InvalidTypeException | CloudSearch.ResourceNotFoundException | any, data: CloudSearch.DefineExpressionResponse | any) => void): Request<CloudSearch.DefineExpressionResponse | any, CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.LimitExceededException | CloudSearch.InvalidTypeException | CloudSearch.ResourceNotFoundException | any>;
    /**
     * Configures an IndexField for the search domain. Used to create new fields and
modify existing ones. You must specify the name of the domain you are
configuring and an index field configuration. The index field configuration
specifies a unique name, the index field type, and the options you want to
configure for the field. The options you can specify depend on the 
IndexFieldType. If the field exists, the new configuration replaces the old one.
For more information, see Configuring Index Fields
[http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html] 
in the Amazon CloudSearch Developer Guide.
     *
     * @error BaseException An error occurred while processing the request.  
     * @error InternalException An internal error occurred while processing the request. If this problem
persists, report an issue from the Service Health Dashboard
[http://status.aws.amazon.com/].  
     * @error LimitExceededException The request was rejected because a resource limit has already been met.  
     * @error InvalidTypeException The request was rejected because it specified an invalid type definition.  
     * @error ResourceNotFoundException The request was rejected because it attempted to reference a resource that does
not exist.  
     */
    defineIndexField(params: CloudSearch.DefineIndexFieldRequest, callback?: (err: CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.LimitExceededException | CloudSearch.InvalidTypeException | CloudSearch.ResourceNotFoundException | any, data: CloudSearch.DefineIndexFieldResponse | any) => void): Request<CloudSearch.DefineIndexFieldResponse | any, CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.LimitExceededException | CloudSearch.InvalidTypeException | CloudSearch.ResourceNotFoundException | any>;
    /**
     * Configures a suggester for a domain. A suggester enables you to display possible
matches before users finish typing their queries. When you configure a
suggester, you must specify the name of the text field you want to search for
possible matches and a unique name for the suggester. For more information, see 
Getting Search Suggestions
[http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html] 
in the Amazon CloudSearch Developer Guide.
     *
     * @error BaseException An error occurred while processing the request.  
     * @error InternalException An internal error occurred while processing the request. If this problem
persists, report an issue from the Service Health Dashboard
[http://status.aws.amazon.com/].  
     * @error LimitExceededException The request was rejected because a resource limit has already been met.  
     * @error InvalidTypeException The request was rejected because it specified an invalid type definition.  
     * @error ResourceNotFoundException The request was rejected because it attempted to reference a resource that does
not exist.  
     */
    defineSuggester(params: CloudSearch.DefineSuggesterRequest, callback?: (err: CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.LimitExceededException | CloudSearch.InvalidTypeException | CloudSearch.ResourceNotFoundException | any, data: CloudSearch.DefineSuggesterResponse | any) => void): Request<CloudSearch.DefineSuggesterResponse | any, CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.LimitExceededException | CloudSearch.InvalidTypeException | CloudSearch.ResourceNotFoundException | any>;
    /**
     * Deletes an analysis scheme. For more information, see Configuring Analysis
Schemes
[http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html] 
in the Amazon CloudSearch Developer Guide.
     *
     * @error BaseException An error occurred while processing the request.  
     * @error InternalException An internal error occurred while processing the request. If this problem
persists, report an issue from the Service Health Dashboard
[http://status.aws.amazon.com/].  
     * @error InvalidTypeException The request was rejected because it specified an invalid type definition.  
     * @error ResourceNotFoundException The request was rejected because it attempted to reference a resource that does
not exist.  
     */
    deleteAnalysisScheme(params: CloudSearch.DeleteAnalysisSchemeRequest, callback?: (err: CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.InvalidTypeException | CloudSearch.ResourceNotFoundException | any, data: CloudSearch.DeleteAnalysisSchemeResponse | any) => void): Request<CloudSearch.DeleteAnalysisSchemeResponse | any, CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.InvalidTypeException | CloudSearch.ResourceNotFoundException | any>;
    /**
     * Permanently deletes a search domain and all of its data. Once a domain has been
deleted, it cannot be recovered. For more information, see Deleting a Search
Domain
[http://docs.aws.amazon.com/cloudsearch/latest/developerguide/deleting-domains.html] 
in the Amazon CloudSearch Developer Guide.
     *
     * @error BaseException An error occurred while processing the request.  
     * @error InternalException An internal error occurred while processing the request. If this problem
persists, report an issue from the Service Health Dashboard
[http://status.aws.amazon.com/].  
     */
    deleteDomain(params: CloudSearch.DeleteDomainRequest, callback?: (err: CloudSearch.BaseException | CloudSearch.InternalException | any, data: CloudSearch.DeleteDomainResponse | any) => void): Request<CloudSearch.DeleteDomainResponse | any, CloudSearch.BaseException | CloudSearch.InternalException | any>;
    /**
     * Removes an Expression from the search domain. For more information, see 
Configuring Expressions
[http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html] 
in the Amazon CloudSearch Developer Guide.
     *
     * @error BaseException An error occurred while processing the request.  
     * @error InternalException An internal error occurred while processing the request. If this problem
persists, report an issue from the Service Health Dashboard
[http://status.aws.amazon.com/].  
     * @error InvalidTypeException The request was rejected because it specified an invalid type definition.  
     * @error ResourceNotFoundException The request was rejected because it attempted to reference a resource that does
not exist.  
     */
    deleteExpression(params: CloudSearch.DeleteExpressionRequest, callback?: (err: CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.InvalidTypeException | CloudSearch.ResourceNotFoundException | any, data: CloudSearch.DeleteExpressionResponse | any) => void): Request<CloudSearch.DeleteExpressionResponse | any, CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.InvalidTypeException | CloudSearch.ResourceNotFoundException | any>;
    /**
     * Removes an IndexField from the search domain. For more information, see 
Configuring Index Fields
[http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html] 
in the Amazon CloudSearch Developer Guide.
     *
     * @error BaseException An error occurred while processing the request.  
     * @error InternalException An internal error occurred while processing the request. If this problem
persists, report an issue from the Service Health Dashboard
[http://status.aws.amazon.com/].  
     * @error InvalidTypeException The request was rejected because it specified an invalid type definition.  
     * @error ResourceNotFoundException The request was rejected because it attempted to reference a resource that does
not exist.  
     */
    deleteIndexField(params: CloudSearch.DeleteIndexFieldRequest, callback?: (err: CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.InvalidTypeException | CloudSearch.ResourceNotFoundException | any, data: CloudSearch.DeleteIndexFieldResponse | any) => void): Request<CloudSearch.DeleteIndexFieldResponse | any, CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.InvalidTypeException | CloudSearch.ResourceNotFoundException | any>;
    /**
     * Deletes a suggester. For more information, see Getting Search Suggestions
[http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html] 
in the Amazon CloudSearch Developer Guide.
     *
     * @error BaseException An error occurred while processing the request.  
     * @error InternalException An internal error occurred while processing the request. If this problem
persists, report an issue from the Service Health Dashboard
[http://status.aws.amazon.com/].  
     * @error InvalidTypeException The request was rejected because it specified an invalid type definition.  
     * @error ResourceNotFoundException The request was rejected because it attempted to reference a resource that does
not exist.  
     */
    deleteSuggester(params: CloudSearch.DeleteSuggesterRequest, callback?: (err: CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.InvalidTypeException | CloudSearch.ResourceNotFoundException | any, data: CloudSearch.DeleteSuggesterResponse | any) => void): Request<CloudSearch.DeleteSuggesterResponse | any, CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.InvalidTypeException | CloudSearch.ResourceNotFoundException | any>;
    /**
     * Gets the analysis schemes configured for a domain. An analysis scheme defines
language-specific text processing options for a text field. Can be limited to
specific analysis schemes by name. By default, shows all analysis schemes and
includes any pending changes to the configuration. Set the Deployed option to 
true to show the active configuration and exclude pending changes. For more
information, see Configuring Analysis Schemes
[http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html] 
in the Amazon CloudSearch Developer Guide.
     *
     * @error BaseException An error occurred while processing the request.  
     * @error InternalException An internal error occurred while processing the request. If this problem
persists, report an issue from the Service Health Dashboard
[http://status.aws.amazon.com/].  
     * @error ResourceNotFoundException The request was rejected because it attempted to reference a resource that does
not exist.  
     */
    describeAnalysisSchemes(params: CloudSearch.DescribeAnalysisSchemesRequest, callback?: (err: CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.ResourceNotFoundException | any, data: CloudSearch.DescribeAnalysisSchemesResponse | any) => void): Request<CloudSearch.DescribeAnalysisSchemesResponse | any, CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.ResourceNotFoundException | any>;
    /**
     * Gets the availability options configured for a domain. By default, shows the
configuration with any pending changes. Set the Deployed option to true to show
the active configuration and exclude pending changes. For more information, see 
Configuring Availability Options
[http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html] 
in the Amazon CloudSearch Developer Guide.
     *
     * @error BaseException An error occurred while processing the request.  
     * @error InternalException An internal error occurred while processing the request. If this problem
persists, report an issue from the Service Health Dashboard
[http://status.aws.amazon.com/].  
     * @error InvalidTypeException The request was rejected because it specified an invalid type definition.  
     * @error LimitExceededException The request was rejected because a resource limit has already been met.  
     * @error ResourceNotFoundException The request was rejected because it attempted to reference a resource that does
not exist.  
     * @error DisabledOperationException The request was rejected because it attempted an operation which is not enabled.  
     */
    describeAvailabilityOptions(params: CloudSearch.DescribeAvailabilityOptionsRequest, callback?: (err: CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.InvalidTypeException | CloudSearch.LimitExceededException | CloudSearch.ResourceNotFoundException | CloudSearch.DisabledOperationException | any, data: CloudSearch.DescribeAvailabilityOptionsResponse | any) => void): Request<CloudSearch.DescribeAvailabilityOptionsResponse | any, CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.InvalidTypeException | CloudSearch.LimitExceededException | CloudSearch.ResourceNotFoundException | CloudSearch.DisabledOperationException | any>;
    /**
     * Gets information about the search domains owned by this account. Can be limited
to specific domains. Shows all domains by default. To get the number of
searchable documents in a domain, use the console or submit a matchall request
to your domain&#x27;s search endpoint: q=matchall&amp;amp;q.parser=structured&amp;amp;size=0.
For more information, see Getting Information about a Search Domain
[http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html] 
in the Amazon CloudSearch Developer Guide.
     *
     * @error BaseException An error occurred while processing the request.  
     * @error InternalException An internal error occurred while processing the request. If this problem
persists, report an issue from the Service Health Dashboard
[http://status.aws.amazon.com/].  
     */
    describeDomains(params: CloudSearch.DescribeDomainsRequest, callback?: (err: CloudSearch.BaseException | CloudSearch.InternalException | any, data: CloudSearch.DescribeDomainsResponse | any) => void): Request<CloudSearch.DescribeDomainsResponse | any, CloudSearch.BaseException | CloudSearch.InternalException | any>;
    /**
     * Gets the expressions configured for the search domain. Can be limited to
specific expressions by name. By default, shows all expressions and includes any
pending changes to the configuration. Set the Deployed option to true to show
the active configuration and exclude pending changes. For more information, see 
Configuring Expressions
[http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html] 
in the Amazon CloudSearch Developer Guide.
     *
     * @error BaseException An error occurred while processing the request.  
     * @error InternalException An internal error occurred while processing the request. If this problem
persists, report an issue from the Service Health Dashboard
[http://status.aws.amazon.com/].  
     * @error ResourceNotFoundException The request was rejected because it attempted to reference a resource that does
not exist.  
     */
    describeExpressions(params: CloudSearch.DescribeExpressionsRequest, callback?: (err: CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.ResourceNotFoundException | any, data: CloudSearch.DescribeExpressionsResponse | any) => void): Request<CloudSearch.DescribeExpressionsResponse | any, CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.ResourceNotFoundException | any>;
    /**
     * Gets information about the index fields configured for the search domain. Can be
limited to specific fields by name. By default, shows all fields and includes
any pending changes to the configuration. Set the Deployed option to true to
show the active configuration and exclude pending changes. For more information,
see Getting Domain Information
[http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html] 
in the Amazon CloudSearch Developer Guide.
     *
     * @error BaseException An error occurred while processing the request.  
     * @error InternalException An internal error occurred while processing the request. If this problem
persists, report an issue from the Service Health Dashboard
[http://status.aws.amazon.com/].  
     * @error ResourceNotFoundException The request was rejected because it attempted to reference a resource that does
not exist.  
     */
    describeIndexFields(params: CloudSearch.DescribeIndexFieldsRequest, callback?: (err: CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.ResourceNotFoundException | any, data: CloudSearch.DescribeIndexFieldsResponse | any) => void): Request<CloudSearch.DescribeIndexFieldsResponse | any, CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.ResourceNotFoundException | any>;
    /**
     * Gets the scaling parameters configured for a domain. A domain&#x27;s scaling
parameters specify the desired search instance type and replication count. For
more information, see Configuring Scaling Options
[http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html] 
in the Amazon CloudSearch Developer Guide.
     *
     * @error BaseException An error occurred while processing the request.  
     * @error InternalException An internal error occurred while processing the request. If this problem
persists, report an issue from the Service Health Dashboard
[http://status.aws.amazon.com/].  
     * @error ResourceNotFoundException The request was rejected because it attempted to reference a resource that does
not exist.  
     */
    describeScalingParameters(params: CloudSearch.DescribeScalingParametersRequest, callback?: (err: CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.ResourceNotFoundException | any, data: CloudSearch.DescribeScalingParametersResponse | any) => void): Request<CloudSearch.DescribeScalingParametersResponse | any, CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.ResourceNotFoundException | any>;
    /**
     * Gets information about the access policies that control access to the domain&#x27;s
document and search endpoints. By default, shows the configuration with any
pending changes. Set the Deployed option to true to show the active
configuration and exclude pending changes. For more information, see Configuring
Access for a Search Domain
[http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html] 
in the Amazon CloudSearch Developer Guide.
     *
     * @error BaseException An error occurred while processing the request.  
     * @error InternalException An internal error occurred while processing the request. If this problem
persists, report an issue from the Service Health Dashboard
[http://status.aws.amazon.com/].  
     * @error ResourceNotFoundException The request was rejected because it attempted to reference a resource that does
not exist.  
     */
    describeServiceAccessPolicies(params: CloudSearch.DescribeServiceAccessPoliciesRequest, callback?: (err: CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.ResourceNotFoundException | any, data: CloudSearch.DescribeServiceAccessPoliciesResponse | any) => void): Request<CloudSearch.DescribeServiceAccessPoliciesResponse | any, CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.ResourceNotFoundException | any>;
    /**
     * Gets the suggesters configured for a domain. A suggester enables you to display
possible matches before users finish typing their queries. Can be limited to
specific suggesters by name. By default, shows all suggesters and includes any
pending changes to the configuration. Set the Deployed option to true to show
the active configuration and exclude pending changes. For more information, see 
Getting Search Suggestions
[http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html] 
in the Amazon CloudSearch Developer Guide.
     *
     * @error BaseException An error occurred while processing the request.  
     * @error InternalException An internal error occurred while processing the request. If this problem
persists, report an issue from the Service Health Dashboard
[http://status.aws.amazon.com/].  
     * @error ResourceNotFoundException The request was rejected because it attempted to reference a resource that does
not exist.  
     */
    describeSuggesters(params: CloudSearch.DescribeSuggestersRequest, callback?: (err: CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.ResourceNotFoundException | any, data: CloudSearch.DescribeSuggestersResponse | any) => void): Request<CloudSearch.DescribeSuggestersResponse | any, CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.ResourceNotFoundException | any>;
    /**
     * Tells the search domain to start indexing its documents using the latest
indexing options. This operation must be invoked to activate options whose 
OptionStatus is RequiresIndexDocuments.
     *
     * @error BaseException An error occurred while processing the request.  
     * @error InternalException An internal error occurred while processing the request. If this problem
persists, report an issue from the Service Health Dashboard
[http://status.aws.amazon.com/].  
     * @error ResourceNotFoundException The request was rejected because it attempted to reference a resource that does
not exist.  
     */
    indexDocuments(params: CloudSearch.IndexDocumentsRequest, callback?: (err: CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.ResourceNotFoundException | any, data: CloudSearch.IndexDocumentsResponse | any) => void): Request<CloudSearch.IndexDocumentsResponse | any, CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.ResourceNotFoundException | any>;
    /**
     * Lists all search domains owned by an account.
     *
     * @error BaseException An error occurred while processing the request.  
     */
    listDomainNames(callback?: (err: CloudSearch.BaseException | any, data: CloudSearch.ListDomainNamesResponse | any) => void): Request<CloudSearch.ListDomainNamesResponse | any, CloudSearch.BaseException | any>;
    /**
     * Configures the availability options for a domain. Enabling the Multi-AZ option
expands an Amazon CloudSearch domain to an additional Availability Zone in the
same Region to increase fault tolerance in the event of a service disruption.
Changes to the Multi-AZ option can take about half an hour to become active. For
more information, see Configuring Availability Options
[http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html] 
in the Amazon CloudSearch Developer Guide.
     *
     * @error BaseException An error occurred while processing the request.  
     * @error InternalException An internal error occurred while processing the request. If this problem
persists, report an issue from the Service Health Dashboard
[http://status.aws.amazon.com/].  
     * @error InvalidTypeException The request was rejected because it specified an invalid type definition.  
     * @error LimitExceededException The request was rejected because a resource limit has already been met.  
     * @error ResourceNotFoundException The request was rejected because it attempted to reference a resource that does
not exist.  
     * @error DisabledOperationException The request was rejected because it attempted an operation which is not enabled.  
     */
    updateAvailabilityOptions(params: CloudSearch.UpdateAvailabilityOptionsRequest, callback?: (err: CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.InvalidTypeException | CloudSearch.LimitExceededException | CloudSearch.ResourceNotFoundException | CloudSearch.DisabledOperationException | any, data: CloudSearch.UpdateAvailabilityOptionsResponse | any) => void): Request<CloudSearch.UpdateAvailabilityOptionsResponse | any, CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.InvalidTypeException | CloudSearch.LimitExceededException | CloudSearch.ResourceNotFoundException | CloudSearch.DisabledOperationException | any>;
    /**
     * Configures scaling parameters for a domain. A domain&#x27;s scaling parameters
specify the desired search instance type and replication count. Amazon
CloudSearch will still automatically scale your domain based on the volume of
data and traffic, but not below the desired instance type and replication count.
If the Multi-AZ option is enabled, these values control the resources used per
Availability Zone. For more information, see Configuring Scaling Options
[http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html] 
in the Amazon CloudSearch Developer Guide.
     *
     * @error BaseException An error occurred while processing the request.  
     * @error InternalException An internal error occurred while processing the request. If this problem
persists, report an issue from the Service Health Dashboard
[http://status.aws.amazon.com/].  
     * @error LimitExceededException The request was rejected because a resource limit has already been met.  
     * @error ResourceNotFoundException The request was rejected because it attempted to reference a resource that does
not exist.  
     * @error InvalidTypeException The request was rejected because it specified an invalid type definition.  
     */
    updateScalingParameters(params: CloudSearch.UpdateScalingParametersRequest, callback?: (err: CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.LimitExceededException | CloudSearch.ResourceNotFoundException | CloudSearch.InvalidTypeException | any, data: CloudSearch.UpdateScalingParametersResponse | any) => void): Request<CloudSearch.UpdateScalingParametersResponse | any, CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.LimitExceededException | CloudSearch.ResourceNotFoundException | CloudSearch.InvalidTypeException | any>;
    /**
     * Configures the access rules that control access to the domain&#x27;s document and
search endpoints. For more information, see Configuring Access for an Amazon
CloudSearch Domain
[http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html]
.
     *
     * @error BaseException An error occurred while processing the request.  
     * @error InternalException An internal error occurred while processing the request. If this problem
persists, report an issue from the Service Health Dashboard
[http://status.aws.amazon.com/].  
     * @error LimitExceededException The request was rejected because a resource limit has already been met.  
     * @error ResourceNotFoundException The request was rejected because it attempted to reference a resource that does
not exist.  
     * @error InvalidTypeException The request was rejected because it specified an invalid type definition.  
     */
    updateServiceAccessPolicies(params: CloudSearch.UpdateServiceAccessPoliciesRequest, callback?: (err: CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.LimitExceededException | CloudSearch.ResourceNotFoundException | CloudSearch.InvalidTypeException | any, data: CloudSearch.UpdateServiceAccessPoliciesResponse | any) => void): Request<CloudSearch.UpdateServiceAccessPoliciesResponse | any, CloudSearch.BaseException | CloudSearch.InternalException | CloudSearch.LimitExceededException | CloudSearch.ResourceNotFoundException | CloudSearch.InvalidTypeException | any>;

  }

  export module CloudSearch {

    export type APIVersion = string;

    export type ARN = string;

    export type AlgorithmicStemming = string;

    export type AnalysisSchemeLanguage = string;

    export type AnalysisSchemeStatusList = AnalysisSchemeStatus[];

    export type Boolean = boolean;

    export type DomainId = string;

    export type DomainName = string;

    export type DomainNameList = DomainName[];

    export type DomainNameMap = { [key: string]: APIVersion };

    export type DomainStatusList = DomainStatus[];

    export type Double = number;

    export type DynamicFieldName = string;

    export type DynamicFieldNameList = DynamicFieldName[];

    export type ErrorCode = string;

    export type ErrorMessage = string;

    export type ExpressionStatusList = ExpressionStatus[];

    export type ExpressionValue = string;

    export type FieldName = string;

    export type FieldNameCommaList = string;

    export type FieldNameList = FieldName[];

    export type FieldValue = string;

    export type IndexFieldStatusList = IndexFieldStatus[];

    export type IndexFieldType = string;

    export type InstanceCount = number;

    export type Long = number;

    export type MaximumPartitionCount = number;

    export type MaximumReplicationCount = number;

    export type MultiAZ = boolean;

    export type OptionState = string;

    export type PartitionCount = number;

    export type PartitionInstanceType = string;

    export type PolicyDocument = string;

    export type SearchInstanceType = string;

    export type ServiceUrl = string;

    export type StandardName = string;

    export type StandardNameList = StandardName[];

    export type String = string;

    export type SuggesterFuzzyMatching = string;

    export type SuggesterStatusList = SuggesterStatus[];

    export type UIntValue = number;

    export type UpdateTimestamp = number;

    export type Word = string;

    export interface AccessPoliciesStatus {
      Options: PolicyDocument;
      Status: OptionStatus;
    }
    export interface AnalysisOptions {
      /** A JSON object that defines synonym groups and aliases. A synonym group is an
array of arrays, where each sub-array is a group of terms where each term in the
group is considered a synonym of every other term in the group. The aliases
value is an object that contains a collection of string:value pairs where the
string specifies a term and the array of values specifies each of the aliases
for that term. An alias is considered a synonym of the specified term, but the
term is not considered a synonym of the alias. For more information about
specifying synonyms, see Synonyms
[http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html#synonyms] 
in the Amazon CloudSearch Developer Guide. **/
      Synonyms?: String;
      /** A JSON array of terms to ignore during indexing and searching. For example, 
[&quot;a&quot;, &quot;an&quot;, &quot;the&quot;, &quot;of&quot;]. The stopwords dictionary must explicitly list each
word you want to ignore. Wildcards and regular expressions are not supported. **/
      Stopwords?: String;
      /** A JSON object that contains a collection of string:value pairs that each map a
term to its stem. For example, {&quot;term1&quot;: &quot;stem1&quot;, &quot;term2&quot;: &quot;stem2&quot;, &quot;term3&quot;:
&quot;stem3&quot;}. The stemming dictionary is applied in addition to any algorithmic
stemming. This enables you to override the results of the algorithmic stemming
to correct specific cases of overstemming or understemming. The maximum size of
a stemming dictionary is 500 KB. **/
      StemmingDictionary?: String;
      /** A JSON array that contains a collection of terms, tokens, readings and part of
speech for Japanese Tokenizaiton. The Japanese tokenization dictionary enables
you to override the default tokenization for selected terms. This is only valid
for Japanese language fields. **/
      JapaneseTokenizationDictionary?: String;
      /** The level of algorithmic stemming to perform: none, minimal, light, or full. The
available levels vary depending on the language. For more information, see 
Language Specific Text Processing Settings
[http://docs.aws.amazon.com/cloudsearch/latest/developerguide/text-processing.html#text-processing-settings] 
in the Amazon CloudSearch Developer Guide **/
      AlgorithmicStemming?: AlgorithmicStemming;
    }
    export interface AnalysisScheme {
      AnalysisSchemeName: StandardName;
      AnalysisSchemeLanguage: AnalysisSchemeLanguage;
      AnalysisOptions?: AnalysisOptions;
    }
    export interface AnalysisSchemeStatus {
      Options: AnalysisScheme;
      Status: OptionStatus;
    }
    export interface AvailabilityOptionsStatus {
      /** The availability options configured for the domain. **/
      Options: MultiAZ;
      Status: OptionStatus;
    }
    export interface BaseException {
      Code?: ErrorCode;
      Message?: ErrorMessage;
    }
    export interface BuildSuggestersRequest {
      DomainName: DomainName;
    }
    export interface BuildSuggestersResponse {
      FieldNames?: FieldNameList;
    }
    export interface CreateDomainRequest {
      /** A name for the domain you are creating. Allowed characters are a-z (lower-case
letters), 0-9, and hyphen (-). Domain names must start with a letter or number
and be at least 3 and no more than 28 characters long. **/
      DomainName: DomainName;
    }
    export interface CreateDomainResponse {
      DomainStatus?: DomainStatus;
    }
    export interface DateArrayOptions {
      /** A value to use for the field if the field isn&#x27;t specified for a document. **/
      DefaultValue?: FieldValue;
      /** A list of source fields to map to the field. **/
      SourceFields?: FieldNameCommaList;
      /** Whether facet information can be returned for the field. **/
      FacetEnabled?: Boolean;
      /** Whether the contents of the field are searchable. **/
      SearchEnabled?: Boolean;
      /** Whether the contents of the field can be returned in the search results. **/
      ReturnEnabled?: Boolean;
    }
    export interface DateOptions {
      /** A value to use for the field if the field isn&#x27;t specified for a document. **/
      DefaultValue?: FieldValue;
      SourceField?: FieldName;
      /** Whether facet information can be returned for the field. **/
      FacetEnabled?: Boolean;
      /** Whether the contents of the field are searchable. **/
      SearchEnabled?: Boolean;
      /** Whether the contents of the field can be returned in the search results. **/
      ReturnEnabled?: Boolean;
      /** Whether the field can be used to sort the search results. **/
      SortEnabled?: Boolean;
    }
    export interface DefineAnalysisSchemeRequest {
      DomainName: DomainName;
      AnalysisScheme: AnalysisScheme;
    }
    export interface DefineAnalysisSchemeResponse {
      AnalysisScheme: AnalysisSchemeStatus;
    }
    export interface DefineExpressionRequest {
      DomainName: DomainName;
      Expression: Expression;
    }
    export interface DefineExpressionResponse {
      Expression: ExpressionStatus;
    }
    export interface DefineIndexFieldRequest {
      DomainName: DomainName;
      /** The index field and field options you want to configure. **/
      IndexField: IndexField;
    }
    export interface DefineIndexFieldResponse {
      IndexField: IndexFieldStatus;
    }
    export interface DefineSuggesterRequest {
      DomainName: DomainName;
      Suggester: Suggester;
    }
    export interface DefineSuggesterResponse {
      Suggester: SuggesterStatus;
    }
    export interface DeleteAnalysisSchemeRequest {
      DomainName: DomainName;
      /** The name of the analysis scheme you want to delete. **/
      AnalysisSchemeName: StandardName;
    }
    export interface DeleteAnalysisSchemeResponse {
      /** The status of the analysis scheme being deleted. **/
      AnalysisScheme: AnalysisSchemeStatus;
    }
    export interface DeleteDomainRequest {
      /** The name of the domain you want to permanently delete. **/
      DomainName: DomainName;
    }
    export interface DeleteDomainResponse {
      DomainStatus?: DomainStatus;
    }
    export interface DeleteExpressionRequest {
      DomainName: DomainName;
      /** The name of the Expression to delete. **/
      ExpressionName: StandardName;
    }
    export interface DeleteExpressionResponse {
      /** The status of the expression being deleted. **/
      Expression: ExpressionStatus;
    }
    export interface DeleteIndexFieldRequest {
      DomainName: DomainName;
      /** The name of the index field your want to remove from the domain&#x27;s indexing
options. **/
      IndexFieldName: DynamicFieldName;
    }
    export interface DeleteIndexFieldResponse {
      /** The status of the index field being deleted. **/
      IndexField: IndexFieldStatus;
    }
    export interface DeleteSuggesterRequest {
      DomainName: DomainName;
      /** Specifies the name of the suggester you want to delete. **/
      SuggesterName: StandardName;
    }
    export interface DeleteSuggesterResponse {
      /** The status of the suggester being deleted. **/
      Suggester: SuggesterStatus;
    }
    export interface DescribeAnalysisSchemesRequest {
      /** The name of the domain you want to describe. **/
      DomainName: DomainName;
      /** The analysis schemes you want to describe. **/
      AnalysisSchemeNames?: StandardNameList;
      /** Whether to display the deployed configuration (true) or include any pending
changes (false). Defaults to false. **/
      Deployed?: Boolean;
    }
    export interface DescribeAnalysisSchemesResponse {
      /** The analysis scheme descriptions. **/
      AnalysisSchemes: AnalysisSchemeStatusList;
    }
    export interface DescribeAvailabilityOptionsRequest {
      /** The name of the domain you want to describe. **/
      DomainName: DomainName;
      /** Whether to display the deployed configuration (true) or include any pending
changes (false). Defaults to false. **/
      Deployed?: Boolean;
    }
    export interface DescribeAvailabilityOptionsResponse {
      /** The availability options configured for the domain. Indicates whether Multi-AZ
is enabled for the domain. **/
      AvailabilityOptions?: AvailabilityOptionsStatus;
    }
    export interface DescribeDomainsRequest {
      /** The names of the domains you want to include in the response. **/
      DomainNames?: DomainNameList;
    }
    export interface DescribeDomainsResponse {
      DomainStatusList: DomainStatusList;
    }
    export interface DescribeExpressionsRequest {
      /** The name of the domain you want to describe. **/
      DomainName: DomainName;
      /** Limits the DescribeExpressions response to the specified expressions. If not
specified, all expressions are shown. **/
      ExpressionNames?: StandardNameList;
      /** Whether to display the deployed configuration (true) or include any pending
changes (false). Defaults to false. **/
      Deployed?: Boolean;
    }
    export interface DescribeExpressionsResponse {
      /** The expressions configured for the domain. **/
      Expressions: ExpressionStatusList;
    }
    export interface DescribeIndexFieldsRequest {
      /** The name of the domain you want to describe. **/
      DomainName: DomainName;
      /** A list of the index fields you want to describe. If not specified, information
is returned for all configured index fields. **/
      FieldNames?: DynamicFieldNameList;
      /** Whether to display the deployed configuration (true) or include any pending
changes (false). Defaults to false. **/
      Deployed?: Boolean;
    }
    export interface DescribeIndexFieldsResponse {
      /** The index fields configured for the domain. **/
      IndexFields: IndexFieldStatusList;
    }
    export interface DescribeScalingParametersRequest {
      DomainName: DomainName;
    }
    export interface DescribeScalingParametersResponse {
      ScalingParameters: ScalingParametersStatus;
    }
    export interface DescribeServiceAccessPoliciesRequest {
      /** The name of the domain you want to describe. **/
      DomainName: DomainName;
      /** Whether to display the deployed configuration (true) or include any pending
changes (false). Defaults to false. **/
      Deployed?: Boolean;
    }
    export interface DescribeServiceAccessPoliciesResponse {
      /** The access rules configured for the domain specified in the request. **/
      AccessPolicies: AccessPoliciesStatus;
    }
    export interface DescribeSuggestersRequest {
      /** The name of the domain you want to describe. **/
      DomainName: DomainName;
      /** The suggesters you want to describe. **/
      SuggesterNames?: StandardNameList;
      /** Whether to display the deployed configuration (true) or include any pending
changes (false). Defaults to false. **/
      Deployed?: Boolean;
    }
    export interface DescribeSuggestersResponse {
      /** The suggesters configured for the domain specified in the request. **/
      Suggesters: SuggesterStatusList;
    }
    export interface DisabledOperationException {
    }
    export interface DocumentSuggesterOptions {
      /** The name of the index field you want to use for suggestions. **/
      SourceField: FieldName;
      /** The level of fuzziness allowed when suggesting matches for a string: none, low,
or high. With none, the specified string is treated as an exact prefix. With
low, suggestions must differ from the specified string by no more than one
character. With high, suggestions can differ by up to two characters. The
default is none. **/
      FuzzyMatching?: SuggesterFuzzyMatching;
      /** An expression that computes a score for each suggestion to control how they are
sorted. The scores are rounded to the nearest integer, with a floor of 0 and a
ceiling of 2^31-1. A document&#x27;s relevance score is not computed for suggestions,
so sort expressions cannot reference the _score value. To sort suggestions using
a numeric field or existing expression, simply specify the name of the field or
expression. If no expression is configured for the suggester, the suggestions
are sorted with the closest matches listed first. **/
      SortExpression?: String;
    }
    export interface DomainStatus {
      DomainId: DomainId;
      DomainName: DomainName;
      ARN?: ARN;
      /** True if the search domain is created. It can take several minutes to initialize
a domain when CreateDomain is called. Newly created search domains are returned
from DescribeDomains with a false value for Created until domain creation is
complete. **/
      Created?: Boolean;
      /** True if the search domain has been deleted. The system must clean up resources
dedicated to the search domain when DeleteDomain is called. Newly deleted search
domains are returned from DescribeDomains with a true value for IsDeleted for
several minutes until resource cleanup is complete. **/
      Deleted?: Boolean;
      /** The service endpoint for updating documents in a search domain. **/
      DocService?: ServiceEndpoint;
      /** The service endpoint for requesting search results from a search domain. **/
      SearchService?: ServiceEndpoint;
      /** True if IndexDocuments needs to be called to activate the current domain
configuration. **/
      RequiresIndexDocuments: Boolean;
      /** True if processing is being done to activate the current domain configuration. **/
      Processing?: Boolean;
      /** The instance type that is being used to process search requests. **/
      SearchInstanceType?: SearchInstanceType;
      /** The number of partitions across which the search index is spread. **/
      SearchPartitionCount?: PartitionCount;
      /** The number of search instances that are available to process search requests. **/
      SearchInstanceCount?: InstanceCount;
      Limits?: Limits;
    }
    export interface DoubleArrayOptions {
      /** A value to use for the field if the field isn&#x27;t specified for a document. **/
      DefaultValue?: Double;
      /** A list of source fields to map to the field. **/
      SourceFields?: FieldNameCommaList;
      /** Whether facet information can be returned for the field. **/
      FacetEnabled?: Boolean;
      /** Whether the contents of the field are searchable. **/
      SearchEnabled?: Boolean;
      /** Whether the contents of the field can be returned in the search results. **/
      ReturnEnabled?: Boolean;
    }
    export interface DoubleOptions {
      /** A value to use for the field if the field isn&#x27;t specified for a document. This
can be important if you are using the field in an expression and that field is
not present in every document. **/
      DefaultValue?: Double;
      /** The name of the source field to map to the field. **/
      SourceField?: FieldName;
      /** Whether facet information can be returned for the field. **/
      FacetEnabled?: Boolean;
      /** Whether the contents of the field are searchable. **/
      SearchEnabled?: Boolean;
      /** Whether the contents of the field can be returned in the search results. **/
      ReturnEnabled?: Boolean;
      /** Whether the field can be used to sort the search results. **/
      SortEnabled?: Boolean;
    }
    export interface Expression {
      ExpressionName: StandardName;
      ExpressionValue: ExpressionValue;
    }
    export interface ExpressionStatus {
      /** The expression that is evaluated for sorting while processing a search request. **/
      Options: Expression;
      Status: OptionStatus;
    }
    export interface IndexDocumentsRequest {
      DomainName: DomainName;
    }
    export interface IndexDocumentsResponse {
      /** The names of the fields that are currently being indexed. **/
      FieldNames?: FieldNameList;
    }
    export interface IndexField {
      /** A string that represents the name of an index field. CloudSearch supports
regular index fields as well as dynamic fields. A dynamic field&#x27;s name defines a
pattern that begins or ends with a wildcard. Any document fields that don&#x27;t map
to a regular index field but do match a dynamic field&#x27;s pattern are configured
with the dynamic field&#x27;s indexing options. 

Regular field names begin with a letter and can contain the following
characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must
begin or end with a wildcard (&amp;#42;). The wildcard can also be the only character in
a dynamic field name. Multiple wildcards, and wildcards embedded within a string
are not supported. 

The name score is reserved and cannot be used as a field name. To reference a
document&#x27;s ID, you can use the name _id. **/
      IndexFieldName: DynamicFieldName;
      IndexFieldType: IndexFieldType;
      IntOptions?: IntOptions;
      DoubleOptions?: DoubleOptions;
      LiteralOptions?: LiteralOptions;
      TextOptions?: TextOptions;
      DateOptions?: DateOptions;
      LatLonOptions?: LatLonOptions;
      IntArrayOptions?: IntArrayOptions;
      DoubleArrayOptions?: DoubleArrayOptions;
      LiteralArrayOptions?: LiteralArrayOptions;
      TextArrayOptions?: TextArrayOptions;
      DateArrayOptions?: DateArrayOptions;
    }
    export interface IndexFieldStatus {
      Options: IndexField;
      Status: OptionStatus;
    }
    export interface IntArrayOptions {
      /** A value to use for the field if the field isn&#x27;t specified for a document. **/
      DefaultValue?: Long;
      /** A list of source fields to map to the field. **/
      SourceFields?: FieldNameCommaList;
      /** Whether facet information can be returned for the field. **/
      FacetEnabled?: Boolean;
      /** Whether the contents of the field are searchable. **/
      SearchEnabled?: Boolean;
      /** Whether the contents of the field can be returned in the search results. **/
      ReturnEnabled?: Boolean;
    }
    export interface IntOptions {
      /** A value to use for the field if the field isn&#x27;t specified for a document. This
can be important if you are using the field in an expression and that field is
not present in every document. **/
      DefaultValue?: Long;
      /** The name of the source field to map to the field. **/
      SourceField?: FieldName;
      /** Whether facet information can be returned for the field. **/
      FacetEnabled?: Boolean;
      /** Whether the contents of the field are searchable. **/
      SearchEnabled?: Boolean;
      /** Whether the contents of the field can be returned in the search results. **/
      ReturnEnabled?: Boolean;
      /** Whether the field can be used to sort the search results. **/
      SortEnabled?: Boolean;
    }
    export interface InternalException {
    }
    export interface InvalidTypeException {
    }
    export interface LatLonOptions {
      /** A value to use for the field if the field isn&#x27;t specified for a document. **/
      DefaultValue?: FieldValue;
      SourceField?: FieldName;
      /** Whether facet information can be returned for the field. **/
      FacetEnabled?: Boolean;
      /** Whether the contents of the field are searchable. **/
      SearchEnabled?: Boolean;
      /** Whether the contents of the field can be returned in the search results. **/
      ReturnEnabled?: Boolean;
      /** Whether the field can be used to sort the search results. **/
      SortEnabled?: Boolean;
    }
    export interface LimitExceededException {
    }
    export interface Limits {
      MaximumReplicationCount: MaximumReplicationCount;
      MaximumPartitionCount: MaximumPartitionCount;
    }
    export interface ListDomainNamesResponse {
      /** The names of the search domains owned by an account. **/
      DomainNames?: DomainNameMap;
    }
    export interface LiteralArrayOptions {
      /** A value to use for the field if the field isn&#x27;t specified for a document. **/
      DefaultValue?: FieldValue;
      /** A list of source fields to map to the field. **/
      SourceFields?: FieldNameCommaList;
      /** Whether facet information can be returned for the field. **/
      FacetEnabled?: Boolean;
      /** Whether the contents of the field are searchable. **/
      SearchEnabled?: Boolean;
      /** Whether the contents of the field can be returned in the search results. **/
      ReturnEnabled?: Boolean;
    }
    export interface LiteralOptions {
      /** A value to use for the field if the field isn&#x27;t specified for a document. **/
      DefaultValue?: FieldValue;
      SourceField?: FieldName;
      /** Whether facet information can be returned for the field. **/
      FacetEnabled?: Boolean;
      /** Whether the contents of the field are searchable. **/
      SearchEnabled?: Boolean;
      /** Whether the contents of the field can be returned in the search results. **/
      ReturnEnabled?: Boolean;
      /** Whether the field can be used to sort the search results. **/
      SortEnabled?: Boolean;
    }
    export interface OptionStatus {
      /** A timestamp for when this option was created. **/
      CreationDate: UpdateTimestamp;
      /** A timestamp for when this option was last updated. **/
      UpdateDate: UpdateTimestamp;
      /** A unique integer that indicates when this option was last updated. **/
      UpdateVersion?: UIntValue;
      /** The state of processing a change to an option. Possible values:

&amp;#42;  RequiresIndexDocuments: the option&#x27;s latest value will not be deployed until 
 IndexDocuments has been called and indexing is complete.
*  Processing: the option&#x27;s latest value is in the process of being activated. 
*  Active: the option&#x27;s latest value is completely deployed.
*  FailedToValidate: the option value is not compatible with the domain&#x27;s data
 and cannot be used to index the data. You must either modify the option value
 or update or remove the incompatible documents. **/
      State: OptionState;
      /** Indicates that the option will be deleted once processing is complete. **/
      PendingDeletion?: Boolean;
    }
    export interface ResourceNotFoundException {
    }
    export interface ScalingParameters {
      /** The instance type that you want to preconfigure for your domain. For example, 
search.m1.small. **/
      DesiredInstanceType?: PartitionInstanceType;
      /** The number of replicas you want to preconfigure for each index partition. **/
      DesiredReplicationCount?: UIntValue;
      /** The number of partitions you want to preconfigure for your domain. Only valid
when you select m2.2xlarge as the desired instance type. **/
      DesiredPartitionCount?: UIntValue;
    }
    export interface ScalingParametersStatus {
      Options: ScalingParameters;
      Status: OptionStatus;
    }
    export interface ServiceEndpoint {
      Endpoint?: ServiceUrl;
    }
    export interface Suggester {
      SuggesterName: StandardName;
      DocumentSuggesterOptions: DocumentSuggesterOptions;
    }
    export interface SuggesterStatus {
      Options: Suggester;
      Status: OptionStatus;
    }
    export interface TextArrayOptions {
      /** A value to use for the field if the field isn&#x27;t specified for a document. **/
      DefaultValue?: FieldValue;
      /** A list of source fields to map to the field. **/
      SourceFields?: FieldNameCommaList;
      /** Whether the contents of the field can be returned in the search results. **/
      ReturnEnabled?: Boolean;
      /** Whether highlights can be returned for the field. **/
      HighlightEnabled?: Boolean;
      /** The name of an analysis scheme for a text-array field. **/
      AnalysisScheme?: Word;
    }
    export interface TextOptions {
      /** A value to use for the field if the field isn&#x27;t specified for a document. **/
      DefaultValue?: FieldValue;
      SourceField?: FieldName;
      /** Whether the contents of the field can be returned in the search results. **/
      ReturnEnabled?: Boolean;
      /** Whether the field can be used to sort the search results. **/
      SortEnabled?: Boolean;
      /** Whether highlights can be returned for the field. **/
      HighlightEnabled?: Boolean;
      /** The name of an analysis scheme for a text field. **/
      AnalysisScheme?: Word;
    }
    export interface UpdateAvailabilityOptionsRequest {
      DomainName: DomainName;
      /** You expand an existing search domain to a second Availability Zone by setting
the Multi-AZ option to true. Similarly, you can turn off the Multi-AZ option to
downgrade the domain to a single Availability Zone by setting the Multi-AZ
option to false. **/
      MultiAZ: Boolean;
    }
    export interface UpdateAvailabilityOptionsResponse {
      /** The newly-configured availability options. Indicates whether Multi-AZ is enabled
for the domain. **/
      AvailabilityOptions?: AvailabilityOptionsStatus;
    }
    export interface UpdateScalingParametersRequest {
      DomainName: DomainName;
      ScalingParameters: ScalingParameters;
    }
    export interface UpdateScalingParametersResponse {
      ScalingParameters: ScalingParametersStatus;
    }
    export interface UpdateServiceAccessPoliciesRequest {
      DomainName: DomainName;
      /** The access rules you want to configure. These rules replace any existing rules. **/
      AccessPolicies: PolicyDocument;
    }
    export interface UpdateServiceAccessPoliciesResponse {
      /** The access rules configured for the domain. **/
      AccessPolicies: AccessPoliciesStatus;
    }
  }
}
