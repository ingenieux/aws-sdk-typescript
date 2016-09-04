// Type definitions for aws-sdk - AWS Service Catalog
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2015-12-10
    * endpointPrefix: servicecatalog
    * serviceAbbreviation: 
    * signatureVersion: v4
    * protocol: json
    *
    * AWS Service Catalog  Overview 
 
  AWS Service Catalog [https://aws.amazon.com/servicecatalog/] allows
 organizations to create and manage catalogs of IT services that are approved for
 use on AWS. This documentation provides reference material for the AWS Service
 Catalog end user API. To get the most out of this documentation, you need to be
 familiar with the terminology discussed in AWS Service Catalog Concepts
 [http://docs.aws.amazon.com/servicecatalog/latest/userguide/what-is_concepts.html]
 .
 
  Additional Resources 
 
  &amp;#42;   AWS Service Catalog Administrator Guide
    [http://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html] 
    
    
  &amp;#42;   AWS Service Catalog User Guide
    [http://docs.aws.amazon.com/servicecatalog/latest/userguide/introduction.html]
    *
    */
  export class ServiceCatalog extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Retrieves information about a specified product.

This operation is functionally identical to DescribeProductView except that it
takes as input ProductId instead of ProductViewId.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParametersException   
     */
    describeProduct(params: ServiceCatalog.DescribeProductInput, callback?: (err: ServiceCatalog.ResourceNotFoundException | ServiceCatalog.InvalidParametersException | any, data: ServiceCatalog.DescribeProductOutput | any) => void): Request<ServiceCatalog.DescribeProductOutput | any, ServiceCatalog.ResourceNotFoundException | ServiceCatalog.InvalidParametersException | any>;
    /**
     * Retrieves information about a specified product.

This operation is functionally identical to DescribeProduct except that it takes
as input ProductViewId instead of ProductId.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParametersException   
     */
    describeProductView(params: ServiceCatalog.DescribeProductViewInput, callback?: (err: ServiceCatalog.ResourceNotFoundException | ServiceCatalog.InvalidParametersException | any, data: ServiceCatalog.DescribeProductViewOutput | any) => void): Request<ServiceCatalog.DescribeProductViewOutput | any, ServiceCatalog.ResourceNotFoundException | ServiceCatalog.InvalidParametersException | any>;
    /**
     * Provides information about parameters required to provision a specified product
in a specified manner. Use this operation to obtain the list of 
ProvisioningArtifactParameters parameters available to call the ProvisionProduct 
operation for the specified product.
     *
     * @error InvalidParametersException   
     * @error ResourceNotFoundException   
     */
    describeProvisioningParameters(params: ServiceCatalog.DescribeProvisioningParametersInput, callback?: (err: ServiceCatalog.InvalidParametersException | ServiceCatalog.ResourceNotFoundException | any, data: ServiceCatalog.DescribeProvisioningParametersOutput | any) => void): Request<ServiceCatalog.DescribeProvisioningParametersOutput | any, ServiceCatalog.InvalidParametersException | ServiceCatalog.ResourceNotFoundException | any>;
    /**
     * Retrieves a paginated list of the full details of a specific request. Use this
operation after calling a request operation (ProvisionProduct, 
TerminateProvisionedProduct, or UpdateProvisionedProduct).
     *
     * @error ResourceNotFoundException   
     */
    describeRecord(params: ServiceCatalog.DescribeRecordInput, callback?: (err: ServiceCatalog.ResourceNotFoundException | any, data: ServiceCatalog.DescribeRecordOutput | any) => void): Request<ServiceCatalog.DescribeRecordOutput | any, ServiceCatalog.ResourceNotFoundException | any>;
    /**
     * Returns a paginated list of all paths to a specified product. A path is how the
user has access to a specified product, and is necessary when provisioning a
product. A path also determines the constraints put on the product.
     *
     * @error InvalidParametersException   
     * @error ResourceNotFoundException   
     */
    listLaunchPaths(params: ServiceCatalog.ListLaunchPathsInput, callback?: (err: ServiceCatalog.InvalidParametersException | ServiceCatalog.ResourceNotFoundException | any, data: ServiceCatalog.ListLaunchPathsOutput | any) => void): Request<ServiceCatalog.ListLaunchPathsOutput | any, ServiceCatalog.InvalidParametersException | ServiceCatalog.ResourceNotFoundException | any>;
    /**
     * Returns a paginated list of all performed requests, in the form of RecordDetails
objects that are filtered as specified.
     *
     * @error InvalidParametersException   
     */
    listRecordHistory(params: ServiceCatalog.ListRecordHistoryInput, callback?: (err: ServiceCatalog.InvalidParametersException | any, data: ServiceCatalog.ListRecordHistoryOutput | any) => void): Request<ServiceCatalog.ListRecordHistoryOutput | any, ServiceCatalog.InvalidParametersException | any>;
    /**
     * Requests a Provision of a specified product. A ProvisionedProduct is a resourced
instance for a product. For example, provisioning a
CloudFormation-template-backed product results in launching a CloudFormation
stack and all the underlying resources that come with it. 

You can check the status of this request using the DescribeRecord operation.
     *
     * @error InvalidParametersException   
     * @error ResourceNotFoundException   
     * @error DuplicateResourceException   
     */
    provisionProduct(params: ServiceCatalog.ProvisionProductInput, callback?: (err: ServiceCatalog.InvalidParametersException | ServiceCatalog.ResourceNotFoundException | ServiceCatalog.DuplicateResourceException | any, data: ServiceCatalog.ProvisionProductOutput | any) => void): Request<ServiceCatalog.ProvisionProductOutput | any, ServiceCatalog.InvalidParametersException | ServiceCatalog.ResourceNotFoundException | ServiceCatalog.DuplicateResourceException | any>;
    /**
     * Returns a paginated list of all the ProvisionedProduct objects that are
currently available (not terminated).
     *
     * @error InvalidParametersException   
     */
    scanProvisionedProducts(params: ServiceCatalog.ScanProvisionedProductsInput, callback?: (err: ServiceCatalog.InvalidParametersException | any, data: ServiceCatalog.ScanProvisionedProductsOutput | any) => void): Request<ServiceCatalog.ScanProvisionedProductsOutput | any, ServiceCatalog.InvalidParametersException | any>;
    /**
     * Returns a paginated list all of the Products objects to which the caller has
access. 

The output of this operation can be used as input for other operations, such as 
DescribeProductView.
     *
     * @error InvalidParametersException   
     */
    searchProducts(params: ServiceCatalog.SearchProductsInput, callback?: (err: ServiceCatalog.InvalidParametersException | any, data: ServiceCatalog.SearchProductsOutput | any) => void): Request<ServiceCatalog.SearchProductsOutput | any, ServiceCatalog.InvalidParametersException | any>;
    /**
     * Requests termination of an existing ProvisionedProduct object. If there are Tags 
associated with the object, they are terminated when the ProvisionedProduct
object is terminated. 

This operation does not delete any records associated with the
ProvisionedProduct object.

You can check the status of this request using the DescribeRecord operation.
     *
     * @error ResourceNotFoundException   
     */
    terminateProvisionedProduct(params: ServiceCatalog.TerminateProvisionedProductInput, callback?: (err: ServiceCatalog.ResourceNotFoundException | any, data: ServiceCatalog.TerminateProvisionedProductOutput | any) => void): Request<ServiceCatalog.TerminateProvisionedProductOutput | any, ServiceCatalog.ResourceNotFoundException | any>;
    /**
     * Requests updates to the configuration of an existing ProvisionedProduct object.
If there are tags associated with the object, they cannot be updated or added
with this operation. Depending on the specific updates requested, this operation
may update with no interruption, with some interruption, or replace the
ProvisionedProduct object entirely. 

You can check the status of this request using the DescribeRecord operation.
     *
     * @error InvalidParametersException   
     * @error ResourceNotFoundException   
     */
    updateProvisionedProduct(params: ServiceCatalog.UpdateProvisionedProductInput, callback?: (err: ServiceCatalog.InvalidParametersException | ServiceCatalog.ResourceNotFoundException | any, data: ServiceCatalog.UpdateProvisionedProductOutput | any) => void): Request<ServiceCatalog.UpdateProvisionedProductOutput | any, ServiceCatalog.InvalidParametersException | ServiceCatalog.ResourceNotFoundException | any>;

  }

  export module ServiceCatalog {

    export type AcceptLanguage = string;

    export type AllowedValue = string;

    export type AllowedValues = AllowedValue[];

    export type ApproximateCount = number;

    export type AttributeValue = string;

    export type ConstraintDescription = string;

    export type ConstraintSummaries = ConstraintSummary[];

    export type ConstraintType = string;

    export type CreatedTime = number;

    export type DefaultValue = string;

    export type Description = string;

    export type ErrorCode = string;

    export type ErrorDescription = string;

    export type HasDefaultPath = boolean;

    export type Id = string;

    export type IdempotencyToken = string;

    export type IgnoreErrors = boolean;

    export type InstructionType = string;

    export type InstructionValue = string;

    export type LastRequestId = string;

    export type LaunchPathSummaries = LaunchPathSummary[];

    export type NoEcho = boolean;

    export type NotificationArn = string;

    export type NotificationArns = NotificationArn[];

    export type OutputKey = string;

    export type OutputValue = string;

    export type PageSize = number;

    export type PageToken = string;

    export type ParameterKey = string;

    export type ParameterType = string;

    export type ParameterValue = string;

    export type PortfolioName = string;

    export type ProductType = string;

    export type ProductViewAggregationType = string;

    export type ProductViewAggregationValues = ProductViewAggregationValue[];

    export type ProductViewAggregations = { [key: string]: ProductViewAggregationValues };

    export type ProductViewDistributor = string;

    export type ProductViewFilterBy = string;

    export type ProductViewFilterValue = string;

    export type ProductViewFilterValues = ProductViewFilterValue[];

    export type ProductViewFilters = { [key: string]: ProductViewFilterValues };

    export type ProductViewName = string;

    export type ProductViewOwner = string;

    export type ProductViewShortDescription = string;

    export type ProductViewSortBy = string;

    export type ProductViewSummaries = ProductViewSummary[];

    export type ProvisionedProductDetails = ProvisionedProductDetail[];

    export type ProvisionedProductId = string;

    export type ProvisionedProductName = string;

    export type ProvisionedProductNameOrArn = string;

    export type ProvisionedProductStatusMessage = string;

    export type ProvisionedProductType = string;

    export type ProvisioningArtifactCreatedTime = number;

    export type ProvisioningArtifactDescription = string;

    export type ProvisioningArtifactName = string;

    export type ProvisioningArtifactParameters = ProvisioningArtifactParameter[];

    export type ProvisioningArtifacts = ProvisioningArtifact[];

    export type ProvisioningParameters = ProvisioningParameter[];

    export type RecordDetails = RecordDetail[];

    export type RecordErrors = RecordError[];

    export type RecordOutputs = RecordOutput[];

    export type RecordStatus = string;

    export type RecordTagKey = string;

    export type RecordTagValue = string;

    export type RecordTags = RecordTag[];

    export type RecordType = string;

    export type SearchFilterKey = string;

    export type SearchFilterValue = string;

    export type SortOrder = string;

    export type SupportDescription = string;

    export type SupportEmail = string;

    export type SupportUrl = string;

    export type TagKey = string;

    export type TagValue = string;

    export type Tags = Tag[];

    export type UpdateProvisioningParameters = UpdateProvisioningParameter[];

    export type UpdatedTime = number;

    export type UsageInstructions = UsageInstruction[];

    export type UsePreviousValue = boolean;

    export interface ConstraintSummary {
      /** The type of the constraint. **/
      Type?: ConstraintType;
      /** The text description of the constraint. **/
      Description?: ConstraintDescription;
    }
    export interface DescribeProductInput {
      /** Optional language code. Supported language codes are as follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
      AcceptLanguage?: AcceptLanguage;
      /** The ProductId of the product to describe. **/
      Id: Id;
    }
    export interface DescribeProductOutput {
      /** The summary metadata about the specified product. **/
      ProductViewSummary?: ProductViewSummary;
      /** A list of provisioning artifact objects for the specified product. The 
ProvisioningArtifacts parameter represent the ways the specified product can be
provisioned. **/
      ProvisioningArtifacts?: ProvisioningArtifacts;
    }
    export interface DescribeProductViewInput {
      /** Optional language code. Supported language codes are as follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
      AcceptLanguage?: AcceptLanguage;
      /** The ProductViewId of the product to describe. **/
      Id: Id;
    }
    export interface DescribeProductViewOutput {
      /** The summary metadata about the specified product. **/
      ProductViewSummary?: ProductViewSummary;
      /** A list of provisioning artifact objects for the specified product. The 
ProvisioningArtifacts represent the ways in which the specified product can be
provisioned. **/
      ProvisioningArtifacts?: ProvisioningArtifacts;
    }
    export interface DescribeProvisioningParametersInput {
      /** Optional language code. Supported language codes are as follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
      AcceptLanguage?: AcceptLanguage;
      /** The identifier of the product. **/
      ProductId: Id;
      /** The provisioning artifact identifier for this product. **/
      ProvisioningArtifactId: Id;
      /** The identifier of the path for this product&#x27;s provisioning. This value is
optional if the product has a default path, and is required if there is more
than one path for the specified product. **/
      PathId?: Id;
    }
    export interface DescribeProvisioningParametersOutput {
      /** The list of parameters used to successfully provision the product. Each
parameter includes a list of allowable values and additional metadata about each
parameter. **/
      ProvisioningArtifactParameters?: ProvisioningArtifactParameters;
      /** The list of constraint summaries that apply to provisioning this product. **/
      ConstraintSummaries?: ConstraintSummaries;
      /** Any additional metadata specifically related to the provisioning of the product.
For example, see the Version field of the CloudFormation template. **/
      UsageInstructions?: UsageInstructions;
    }
    export interface DescribeRecordInput {
      /** Optional language code. Supported language codes are as follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
      AcceptLanguage?: AcceptLanguage;
      /** The record identifier of the ProvisionedProduct object for which to retrieve
output information. This is the RecordDetail.RecordId obtained from the request
operation&#x27;s response. **/
      Id: Id;
      /** The page token of the first page retrieve. If null, this retrieves the first
page of size PageSize. **/
      PageToken?: PageToken;
      /** The maximum number of items to return in the results. If more results exist than
fit in the specified PageSize, the value of NextPageToken in the response is
non-null. **/
      PageSize?: PageSize;
    }
    export interface DescribeRecordOutput {
      /** Detailed record information for the specified product. **/
      RecordDetail?: RecordDetail;
      /** A list of outputs for the specified Product object created as the result of a
request. For example, a CloudFormation-backed product that creates an S3 bucket
would have an output for the S3 bucket URL. **/
      RecordOutputs?: RecordOutputs;
      /** The page token to use to retrieve the next page of results for this operation.
If there are no more pages, this value is null. **/
      NextPageToken?: PageToken;
    }
    export interface DuplicateResourceException {
    }
    export interface InvalidParametersException {
    }
    export interface LaunchPathSummary {
      /** The unique identifier of the product path. **/
      Id?: Id;
      /** List of constraints on the portfolio-product relationship. **/
      ConstraintSummaries?: ConstraintSummaries;
      /** List of tags used by this launch path. **/
      Tags?: Tags;
      /** Corresponds to the name of the portfolio to which the user was assigned. **/
      Name?: PortfolioName;
    }
    export interface ListLaunchPathsInput {
      /** Optional language code. Supported language codes are as follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
      AcceptLanguage?: AcceptLanguage;
      /** Identifies the product for which to retrieve LaunchPathSummaries information. **/
      ProductId: Id;
      /** The maximum number of items to return in the results. If more results exist than
fit in the specified PageSize, the value of NextPageToken in the response is
non-null. **/
      PageSize?: PageSize;
      /** The page token of the first page retrieve. If null, this retrieves the first
page of size PageSize. **/
      PageToken?: PageToken;
    }
    export interface ListLaunchPathsOutput {
      /** List of launch path information summaries for the specified PageToken. **/
      LaunchPathSummaries?: LaunchPathSummaries;
      /** The page token to use to retrieve the next page of results for this operation.
If there are no more pages, this value is null. **/
      NextPageToken?: PageToken;
    }
    export interface ListRecordHistoryInput {
      /** Optional language code. Supported language codes are as follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
      AcceptLanguage?: AcceptLanguage;
      /** (Optional) The filter to limit search results. **/
      SearchFilter?: ListRecordHistorySearchFilter;
      /** The maximum number of items to return in the results. If more results exist than
fit in the specified PageSize, the value of NextPageToken in the response is
non-null. **/
      PageSize?: PageSize;
      /** The page token of the first page retrieve. If null, this retrieves the first
page of size PageSize. **/
      PageToken?: PageToken;
    }
    export interface ListRecordHistoryOutput {
      /** A list of record detail objects, listed in reverse chronological order. **/
      RecordDetails?: RecordDetails;
      /** The page token to use to retrieve the next page of results for this operation.
If there are no more pages, this value is null. **/
      NextPageToken?: PageToken;
    }
    export interface ListRecordHistorySearchFilter {
      /** The filter key. **/
      Key?: SearchFilterKey;
      /** The filter value for Key. **/
      Value?: SearchFilterValue;
    }
    export interface ParameterConstraints {
      /** The values that the administrator has allowed for the parameter. **/
      AllowedValues?: AllowedValues;
    }
    export interface ProductViewAggregationValue {
      /** The value of the product view aggregation. **/
      Value?: AttributeValue;
      /** An approximate count of the products that match the value. **/
      ApproximateCount?: ApproximateCount;
    }
    export interface ProductViewSummary {
      /** The product view identifier. **/
      Id?: Id;
      /** The product identifier. **/
      ProductId?: Id;
      /** The name of the product. **/
      Name?: ProductViewName;
      /** The owner of the product. Contact the product administrator for the significance
of this value. **/
      Owner?: ProductViewOwner;
      /** Short description of the product. **/
      ShortDescription?: ProductViewShortDescription;
      /** The product type. Contact the product administrator for the significance of this
value. **/
      Type?: ProductType;
      /** The distributor of the product. Contact the product administrator for the
significance of this value. **/
      Distributor?: ProductViewDistributor;
      /** A value of false indicates that the product does not have a default path, while
a value of true indicates that it does. If it&#x27;s false, call ListLaunchPaths to
disambiguate between paths. If true, ListLaunchPaths is not required, and the
output of the ProductViewSummary operation can be used directly with 
DescribeProvisioningParameters. **/
      HasDefaultPath?: HasDefaultPath;
      /** The email contact information to obtain support for this Product. **/
      SupportEmail?: SupportEmail;
      /** The description of the support for this Product. **/
      SupportDescription?: SupportDescription;
      /** The URL information to obtain support for this Product. **/
      SupportUrl?: SupportUrl;
    }
    export interface ProvisionProductInput {
      /** Optional language code. Supported language codes are as follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
      AcceptLanguage?: AcceptLanguage;
      /** The identifier of the product. **/
      ProductId: Id;
      /** The provisioning artifact identifier for this product. **/
      ProvisioningArtifactId: Id;
      /** The identifier of the path for this product&#x27;s provisioning. This value is
optional if the product has a default path, and is required if there is more
than one path for the specified product. **/
      PathId?: Id;
      /** A user-friendly name to identify the ProvisionedProduct object. This value must
be unique for the AWS account and cannot be updated after the product is
provisioned. **/
      ProvisionedProductName: ProvisionedProductName;
      /** Parameters specified by the administrator that are required for provisioning the
product. **/
      ProvisioningParameters?: ProvisioningParameters;
      /** (Optional) A list of tags to use as provisioning options. **/
      Tags?: Tags;
      /** Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related
events. **/
      NotificationArns?: NotificationArns;
      /** An idempotency token that uniquely identifies the provisioning request. **/
      ProvisionToken: IdempotencyToken;
    }
    export interface ProvisionProductOutput {
      /** The detailed result of the ProvisionProduct request, containing the inputs made
to that request, the current state of the request, a pointer to the
ProvisionedProduct object of the request, and a list of any errors that the
request encountered. **/
      RecordDetail?: RecordDetail;
    }
    export interface ProvisionedProductDetail {
      /** The user-friendly name of the ProvisionedProduct object. **/
      Name?: ProvisionedProductNameOrArn;
      /** The ARN associated with the ProvisionedProduct object. **/
      Arn?: ProvisionedProductNameOrArn;
      /** The type of the ProvisionedProduct object. **/
      Type?: ProvisionedProductType;
      /** The identifier of the ProvisionedProduct object. **/
      Id?: ProvisionedProductId;
      /** The current status of the ProvisionedProduct. **/
      Status?: RecordStatus;
      /** The current status message of the ProvisionedProduct. **/
      StatusMessage?: ProvisionedProductStatusMessage;
      /** The time the ProvisionedProduct was created. **/
      CreatedTime?: CreatedTime;
      /** An idempotency token that uniquely identifies this ProvisionedProduct. **/
      IdempotencyToken?: IdempotencyToken;
      /** The record identifier of the last request performed on this ProvisionedProduct
object. **/
      LastRecordId?: LastRequestId;
    }
    export interface ProvisioningArtifact {
      /** The identifier for the artifact. **/
      Id?: Id;
      /** The name of the artifact. **/
      Name?: ProvisioningArtifactName;
      /** The text description of the artifact. **/
      Description?: ProvisioningArtifactDescription;
      /** The time that the artifact was created by the Administrator. **/
      CreatedTime?: ProvisioningArtifactCreatedTime;
    }
    export interface ProvisioningArtifactParameter {
      /** The parameter key. **/
      ParameterKey?: ParameterKey;
      /** The default value for this parameter. **/
      DefaultValue?: DefaultValue;
      /** The parameter type. **/
      ParameterType?: ParameterType;
      /** If this value is true, the value for this parameter is obfuscated from view when
the parameter is retrieved. This parameter is used to hide sensitive
information. **/
      IsNoEcho?: NoEcho;
      /** The text description of the parameter. **/
      Description?: Description;
      /** The list of constraints that the administrator has put on the parameter. **/
      ParameterConstraints?: ParameterConstraints;
    }
    export interface ProvisioningParameter {
      /** The ProvisioningArtifactParameter.ParameterKey parameter from 
DescribeProvisioningParameters. **/
      Key?: ParameterKey;
      /** The value to use for provisioning. Any constraints on this value can be found in 
ProvisioningArtifactParameter for Key. **/
      Value?: ParameterValue;
    }
    export interface RecordDetail {
      /** The identifier of the ProvisionedProduct object record. **/
      RecordId?: Id;
      /** The user-friendly name of the ProvisionedProduct object. **/
      ProvisionedProductName?: ProvisionedProductName;
      /** The status of the ProvisionedProduct object. **/
      Status?: RecordStatus;
      /** The time when the record for the ProvisionedProduct object was created. **/
      CreatedTime?: CreatedTime;
      /** The time when the record for the ProvisionedProduct object was last updated. **/
      UpdatedTime?: UpdatedTime;
      /** The type of the ProvisionedProduct object. **/
      ProvisionedProductType?: ProvisionedProductType;
      /** The record type for this record. **/
      RecordType?: RecordType;
      /** The identifier of the ProvisionedProduct object. **/
      ProvisionedProductId?: Id;
      /** The identifier of the product. **/
      ProductId?: Id;
      /** The provisioning artifact identifier for this product. **/
      ProvisioningArtifactId?: Id;
      /** The identifier of the path for this product&#x27;s provisioning. **/
      PathId?: Id;
      /** A list of errors that occurred while processing the request. **/
      RecordErrors?: RecordErrors;
      /** List of tags associated with this record. **/
      RecordTags?: RecordTags;
    }
    export interface RecordError {
      /** The numeric value of the error. **/
      Code?: ErrorCode;
      /** The text description of the error. **/
      Description?: ErrorDescription;
    }
    export interface RecordOutput {
      /** The output key. **/
      OutputKey?: OutputKey;
      /** The output value. **/
      OutputValue?: OutputValue;
      /** The text description of the output. **/
      Description?: Description;
    }
    export interface RecordTag {
      /** The key for this tag. **/
      Key?: RecordTagKey;
      /** The value for this tag. **/
      Value?: RecordTagValue;
    }
    export interface ResourceNotFoundException {
    }
    export interface ScanProvisionedProductsInput {
      /** Optional language code. Supported language codes are as follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
      AcceptLanguage?: AcceptLanguage;
      /** The maximum number of items to return in the results. If more results exist than
fit in the specified PageSize, the value of NextPageToken in the response is
non-null. **/
      PageSize?: PageSize;
      /** The page token of the first page retrieve. If null, this retrieves the first
page of size PageSize. **/
      PageToken?: PageToken;
    }
    export interface ScanProvisionedProductsOutput {
      /** A list of ProvisionedProduct detail objects. **/
      ProvisionedProducts?: ProvisionedProductDetails;
      /** The page token to use to retrieve the next page of results for this operation.
If there are no more pages, this value is null. **/
      NextPageToken?: PageToken;
    }
    export interface SearchProductsInput {
      /** Optional language code. Supported language codes are as follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
      AcceptLanguage?: AcceptLanguage;
      /** (Optional) The list of filters with which to limit search results. If no search
filters are specified, the output is all the products to which the calling user
has access. **/
      Filters?: ProductViewFilters;
      /** The maximum number of items to return in the results. If more results exist than
fit in the specified PageSize, the value of NextPageToken in the response is
non-null. **/
      PageSize?: PageSize;
      /** (Optional) The sort field specifier. If no value is specified, results are not
sorted. **/
      SortBy?: ProductViewSortBy;
      /** (Optional) The sort order specifier. If no value is specified, results are not
sorted. **/
      SortOrder?: SortOrder;
      /** The page token of the first page retrieve. If null, this retrieves the first
page of size PageSize. **/
      PageToken?: PageToken;
    }
    export interface SearchProductsOutput {
      /** A list of the product view summary objects. **/
      ProductViewSummaries?: ProductViewSummaries;
      /** A list of the product view aggregation value objects. **/
      ProductViewAggregations?: ProductViewAggregations;
      /** The page token to use to retrieve the next page of results for this operation.
If there are no more pages, this value is null. **/
      NextPageToken?: PageToken;
    }
    export interface Tag {
      /** The ProvisioningArtifactParameter.TagKey parameter from 
DescribeProvisioningParameters. **/
      Key?: TagKey;
      /** The esired value for this key. **/
      Value?: TagValue;
    }
    export interface TerminateProvisionedProductInput {
      /** The name of the ProvisionedProduct object to terminate. You must specify either 
ProvisionedProductName or ProvisionedProductId, but not both. **/
      ProvisionedProductName?: ProvisionedProductNameOrArn;
      /** The identifier of the ProvisionedProduct object to terminate. You must specify
either ProvisionedProductName or ProvisionedProductId, but not both. **/
      ProvisionedProductId?: Id;
      /** An idempotency token that uniquely identifies the termination request. This
token is only valid during the termination process. After the ProvisionedProduct
object is terminated, further requests to terminate the same ProvisionedProduct
object always return ResourceNotFound regardless of the value of TerminateToken. **/
      TerminateToken: IdempotencyToken;
      /** Optional Boolean parameter. If set to true, AWS Service Catalog stops managing
the specified ProvisionedProduct object even if it cannot delete the underlying
resources. **/
      IgnoreErrors?: IgnoreErrors;
      /** Optional language code. Supported language codes are as follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
      AcceptLanguage?: AcceptLanguage;
    }
    export interface TerminateProvisionedProductOutput {
      /** The detailed result of the TerminateProvisionedProduct request, containing the
inputs made to that request, the current state of the request, a pointer to the
ProvisionedProduct object that the request is modifying, and a list of any
errors that the request encountered. **/
      RecordDetail?: RecordDetail;
    }
    export interface UpdateProvisionedProductInput {
      /** Optional language code. Supported language codes are as follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
      AcceptLanguage?: AcceptLanguage;
      /** The updated name of the ProvisionedProduct object . You must specify either 
ProvisionedProductName or ProvisionedProductId, but not both. **/
      ProvisionedProductName?: ProvisionedProductNameOrArn;
      /** The identifier of the ProvisionedProduct object to update. You must specify
either ProvisionedProductName or ProvisionedProductId, but not both. **/
      ProvisionedProductId?: Id;
      /** The identifier of the ProvisionedProduct object. **/
      ProductId?: Id;
      /** The provisioning artifact identifier for this product. **/
      ProvisioningArtifactId?: Id;
      /** The identifier of the path to use in the updated ProvisionedProduct object. This
value is optional if the product has a default path, and is required if there is
more than one path for the specified product. **/
      PathId?: Id;
      /** A list of ProvisioningParameter objects used to update the ProvisionedProduct
object. **/
      ProvisioningParameters?: UpdateProvisioningParameters;
      /** The idempotency token that uniquely identifies the provisioning update request. **/
      UpdateToken: IdempotencyToken;
    }
    export interface UpdateProvisionedProductOutput {
      /** The detailed result of the UpdateProvisionedProduct request, containing the
inputs made to that request, the current state of the request, a pointer to the
ProvisionedProduct object that the request is modifying, and a list of any
errors that the request encountered. **/
      RecordDetail?: RecordDetail;
    }
    export interface UpdateProvisioningParameter {
      /** The ProvisioningArtifactParameter.ParameterKey parameter from 
DescribeProvisioningParameters. **/
      Key?: ParameterKey;
      /** The value to use for updating the product provisioning. Any constraints on this
value can be found in the ProvisioningArtifactParameter parameter for Key. **/
      Value?: ParameterValue;
      /** If true, uses the currently set value for Key, ignoring 
UpdateProvisioningParameter.Value. **/
      UsePreviousValue?: UsePreviousValue;
    }
    export interface UsageInstruction {
      /** The usage instruction type for the value. **/
      Type?: InstructionType;
      /** The usage instruction value for this type. **/
      Value?: InstructionValue;
    }
  }
}
