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
   * AWS Service CatalogOverview

AWS Service Catalog [https://aws.amazon.com/servicecatalog/] allows
organizations to create and manage catalogs of IT services that are approved for
use on AWS. This documentation provides reference material for the AWS Service
Catalog end user API. To get the most out of this documentation, you need to be
familiar with the terminology discussed in AWS Service Catalog Concepts
[http://docs.aws.amazon.com/servicecatalog/latest/userguide/what-is_concepts.html] 
.

Additional Resources

 &amp;#42; AWS Service Catalog Administrator Guide
   [http://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html]
   
   
 * AWS Service Catalog User Guide
   [http://docs.aws.amazon.com/servicecatalog/latest/userguide/introduction.html]
   *
   */
  export class ServiceCatalog extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Accepts an offer to share a portfolio.
     *
     * @error InvalidParametersException   
     * @error ResourceNotFoundException   
     * @error LimitExceededException   
     */
    acceptPortfolioShare(params: ServiceCatalog.AcceptPortfolioShareInput, callback?: (err: ServiceCatalog.InvalidParametersException|ServiceCatalog.ResourceNotFoundException|ServiceCatalog.LimitExceededException|any, data: ServiceCatalog.AcceptPortfolioShareOutput|any) => void): Request<ServiceCatalog.AcceptPortfolioShareOutput|any,ServiceCatalog.InvalidParametersException|ServiceCatalog.ResourceNotFoundException|ServiceCatalog.LimitExceededException|any>;
    /**
     * Associates the specified principal ARN with the specified portfolio.
     *
     * @error InvalidParametersException   
     * @error ResourceNotFoundException   
     * @error LimitExceededException   
     */
    associatePrincipalWithPortfolio(params: ServiceCatalog.AssociatePrincipalWithPortfolioInput, callback?: (err: ServiceCatalog.InvalidParametersException|ServiceCatalog.ResourceNotFoundException|ServiceCatalog.LimitExceededException|any, data: ServiceCatalog.AssociatePrincipalWithPortfolioOutput|any) => void): Request<ServiceCatalog.AssociatePrincipalWithPortfolioOutput|any,ServiceCatalog.InvalidParametersException|ServiceCatalog.ResourceNotFoundException|ServiceCatalog.LimitExceededException|any>;
    /**
     * Associates a product with a portfolio.
     *
     * @error InvalidParametersException   
     * @error ResourceNotFoundException   
     * @error LimitExceededException   
     */
    associateProductWithPortfolio(params: ServiceCatalog.AssociateProductWithPortfolioInput, callback?: (err: ServiceCatalog.InvalidParametersException|ServiceCatalog.ResourceNotFoundException|ServiceCatalog.LimitExceededException|any, data: ServiceCatalog.AssociateProductWithPortfolioOutput|any) => void): Request<ServiceCatalog.AssociateProductWithPortfolioOutput|any,ServiceCatalog.InvalidParametersException|ServiceCatalog.ResourceNotFoundException|ServiceCatalog.LimitExceededException|any>;
    /**
     * Creates a new constraint.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParametersException   
     * @error LimitExceededException   
     * @error DuplicateResourceException   
     */
    createConstraint(params: ServiceCatalog.CreateConstraintInput, callback?: (err: ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|ServiceCatalog.LimitExceededException|ServiceCatalog.DuplicateResourceException|any, data: ServiceCatalog.CreateConstraintOutput|any) => void): Request<ServiceCatalog.CreateConstraintOutput|any,ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|ServiceCatalog.LimitExceededException|ServiceCatalog.DuplicateResourceException|any>;
    /**
     * Creates a new portfolio.
     *
     * @error InvalidParametersException   
     * @error LimitExceededException   
     */
    createPortfolio(params: ServiceCatalog.CreatePortfolioInput, callback?: (err: ServiceCatalog.InvalidParametersException|ServiceCatalog.LimitExceededException|any, data: ServiceCatalog.CreatePortfolioOutput|any) => void): Request<ServiceCatalog.CreatePortfolioOutput|any,ServiceCatalog.InvalidParametersException|ServiceCatalog.LimitExceededException|any>;
    /**
     * Creates a new portfolio share.
     *
     * @error ResourceNotFoundException   
     * @error LimitExceededException   
     * @error InvalidParametersException   
     */
    createPortfolioShare(params: ServiceCatalog.CreatePortfolioShareInput, callback?: (err: ServiceCatalog.ResourceNotFoundException|ServiceCatalog.LimitExceededException|ServiceCatalog.InvalidParametersException|any, data: ServiceCatalog.CreatePortfolioShareOutput|any) => void): Request<ServiceCatalog.CreatePortfolioShareOutput|any,ServiceCatalog.ResourceNotFoundException|ServiceCatalog.LimitExceededException|ServiceCatalog.InvalidParametersException|any>;
    /**
     * Creates a new product.
     *
     * @error InvalidParametersException   
     * @error LimitExceededException   
     */
    createProduct(params: ServiceCatalog.CreateProductInput, callback?: (err: ServiceCatalog.InvalidParametersException|ServiceCatalog.LimitExceededException|any, data: ServiceCatalog.CreateProductOutput|any) => void): Request<ServiceCatalog.CreateProductOutput|any,ServiceCatalog.InvalidParametersException|ServiceCatalog.LimitExceededException|any>;
    /**
     * Create a new provisioning artifact for the specified product. This operation
will not work with a product that has been shared with you.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParametersException   
     * @error LimitExceededException   
     */
    createProvisioningArtifact(params: ServiceCatalog.CreateProvisioningArtifactInput, callback?: (err: ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|ServiceCatalog.LimitExceededException|any, data: ServiceCatalog.CreateProvisioningArtifactOutput|any) => void): Request<ServiceCatalog.CreateProvisioningArtifactOutput|any,ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|ServiceCatalog.LimitExceededException|any>;
    /**
     * Deletes the specified constraint.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParametersException   
     */
    deleteConstraint(params: ServiceCatalog.DeleteConstraintInput, callback?: (err: ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|any, data: ServiceCatalog.DeleteConstraintOutput|any) => void): Request<ServiceCatalog.DeleteConstraintOutput|any,ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|any>;
    /**
     * Deletes the specified portfolio. This operation will not work with a portfolio
that has been shared with you or if it has products, users, constraints, or
shared accounts associated with it.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParametersException   
     * @error ResourceInUseException   
     */
    deletePortfolio(params: ServiceCatalog.DeletePortfolioInput, callback?: (err: ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|ServiceCatalog.ResourceInUseException|any, data: ServiceCatalog.DeletePortfolioOutput|any) => void): Request<ServiceCatalog.DeletePortfolioOutput|any,ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|ServiceCatalog.ResourceInUseException|any>;
    /**
     * Deletes the specified portfolio share.
     *
     * @error ResourceNotFoundException   
     */
    deletePortfolioShare(params: ServiceCatalog.DeletePortfolioShareInput, callback?: (err: ServiceCatalog.ResourceNotFoundException|any, data: ServiceCatalog.DeletePortfolioShareOutput|any) => void): Request<ServiceCatalog.DeletePortfolioShareOutput|any,ServiceCatalog.ResourceNotFoundException|any>;
    /**
     * Deletes the specified product. This operation will not work with a product that
has been shared with you or is associated with a portfolio.
     *
     * @error ResourceNotFoundException   
     * @error ResourceInUseException   
     * @error InvalidParametersException   
     */
    deleteProduct(params: ServiceCatalog.DeleteProductInput, callback?: (err: ServiceCatalog.ResourceNotFoundException|ServiceCatalog.ResourceInUseException|ServiceCatalog.InvalidParametersException|any, data: ServiceCatalog.DeleteProductOutput|any) => void): Request<ServiceCatalog.DeleteProductOutput|any,ServiceCatalog.ResourceNotFoundException|ServiceCatalog.ResourceInUseException|ServiceCatalog.InvalidParametersException|any>;
    /**
     * Deletes the specified provisioning artifact. This operation will not work on a
provisioning artifact associated with a product that has been shared with you,
or on the last provisioning artifact associated with a product (a product must
have at least one provisioning artifact).
     *
     * @error ResourceNotFoundException   
     * @error ResourceInUseException   
     * @error InvalidParametersException   
     */
    deleteProvisioningArtifact(params: ServiceCatalog.DeleteProvisioningArtifactInput, callback?: (err: ServiceCatalog.ResourceNotFoundException|ServiceCatalog.ResourceInUseException|ServiceCatalog.InvalidParametersException|any, data: ServiceCatalog.DeleteProvisioningArtifactOutput|any) => void): Request<ServiceCatalog.DeleteProvisioningArtifactOutput|any,ServiceCatalog.ResourceNotFoundException|ServiceCatalog.ResourceInUseException|ServiceCatalog.InvalidParametersException|any>;
    /**
     * Retrieves detailed information for a specified constraint.
     *
     * @error ResourceNotFoundException   
     */
    describeConstraint(params: ServiceCatalog.DescribeConstraintInput, callback?: (err: ServiceCatalog.ResourceNotFoundException|any, data: ServiceCatalog.DescribeConstraintOutput|any) => void): Request<ServiceCatalog.DescribeConstraintOutput|any,ServiceCatalog.ResourceNotFoundException|any>;
    /**
     * Retrieves detailed information and any tags associated with the specified
portfolio.
     *
     * @error ResourceNotFoundException   
     */
    describePortfolio(params: ServiceCatalog.DescribePortfolioInput, callback?: (err: ServiceCatalog.ResourceNotFoundException|any, data: ServiceCatalog.DescribePortfolioOutput|any) => void): Request<ServiceCatalog.DescribePortfolioOutput|any,ServiceCatalog.ResourceNotFoundException|any>;
    /**
     * Retrieves information about a specified product.

This operation is functionally identical to DescribeProductView except that it
takes as input ProductId instead of ProductViewId .
     *
     * @error ResourceNotFoundException   
     * @error InvalidParametersException   
     */
    describeProduct(params: ServiceCatalog.DescribeProductInput, callback?: (err: ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|any, data: ServiceCatalog.DescribeProductOutput|any) => void): Request<ServiceCatalog.DescribeProductOutput|any,ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|any>;
    /**
     * Retrieves information about a specified product, run with administrator access.
     *
     * @error ResourceNotFoundException   
     */
    describeProductAsAdmin(params: ServiceCatalog.DescribeProductAsAdminInput, callback?: (err: ServiceCatalog.ResourceNotFoundException|any, data: ServiceCatalog.DescribeProductAsAdminOutput|any) => void): Request<ServiceCatalog.DescribeProductAsAdminOutput|any,ServiceCatalog.ResourceNotFoundException|any>;
    /**
     * Retrieves information about a specified product.

This operation is functionally identical to DescribeProduct except that it takes
as input ProductViewId instead of ProductId .
     *
     * @error ResourceNotFoundException   
     * @error InvalidParametersException   
     */
    describeProductView(params: ServiceCatalog.DescribeProductViewInput, callback?: (err: ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|any, data: ServiceCatalog.DescribeProductViewOutput|any) => void): Request<ServiceCatalog.DescribeProductViewOutput|any,ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|any>;
    /**
     * Retrieves detailed information about the specified provisioning artifact.
     *
     * @error ResourceNotFoundException   
     */
    describeProvisioningArtifact(params: ServiceCatalog.DescribeProvisioningArtifactInput, callback?: (err: ServiceCatalog.ResourceNotFoundException|any, data: ServiceCatalog.DescribeProvisioningArtifactOutput|any) => void): Request<ServiceCatalog.DescribeProvisioningArtifactOutput|any,ServiceCatalog.ResourceNotFoundException|any>;
    /**
     * Provides information about parameters required to provision a specified product
in a specified manner. Use this operation to obtain the list of 
ProvisioningArtifactParameters parameters available to call the ProvisionProduct 
operation for the specified product.
     *
     * @error InvalidParametersException   
     * @error ResourceNotFoundException   
     */
    describeProvisioningParameters(params: ServiceCatalog.DescribeProvisioningParametersInput, callback?: (err: ServiceCatalog.InvalidParametersException|ServiceCatalog.ResourceNotFoundException|any, data: ServiceCatalog.DescribeProvisioningParametersOutput|any) => void): Request<ServiceCatalog.DescribeProvisioningParametersOutput|any,ServiceCatalog.InvalidParametersException|ServiceCatalog.ResourceNotFoundException|any>;
    /**
     * Retrieves a paginated list of the full details of a specific request. Use this
operation after calling a request operation ( ProvisionProduct , 
TerminateProvisionedProduct , or UpdateProvisionedProduct ).
     *
     * @error ResourceNotFoundException   
     */
    describeRecord(params: ServiceCatalog.DescribeRecordInput, callback?: (err: ServiceCatalog.ResourceNotFoundException|any, data: ServiceCatalog.DescribeRecordOutput|any) => void): Request<ServiceCatalog.DescribeRecordOutput|any,ServiceCatalog.ResourceNotFoundException|any>;
    /**
     * Disassociates a previously associated principal ARN from a specified portfolio.
     *
     * @error InvalidParametersException   
     * @error ResourceNotFoundException   
     */
    disassociatePrincipalFromPortfolio(params: ServiceCatalog.DisassociatePrincipalFromPortfolioInput, callback?: (err: ServiceCatalog.InvalidParametersException|ServiceCatalog.ResourceNotFoundException|any, data: ServiceCatalog.DisassociatePrincipalFromPortfolioOutput|any) => void): Request<ServiceCatalog.DisassociatePrincipalFromPortfolioOutput|any,ServiceCatalog.InvalidParametersException|ServiceCatalog.ResourceNotFoundException|any>;
    /**
     * Disassociates the specified product from the specified portfolio.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParametersException   
     */
    disassociateProductFromPortfolio(params: ServiceCatalog.DisassociateProductFromPortfolioInput, callback?: (err: ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|any, data: ServiceCatalog.DisassociateProductFromPortfolioOutput|any) => void): Request<ServiceCatalog.DisassociateProductFromPortfolioOutput|any,ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|any>;
    /**
     * Lists details of all portfolios for which sharing was accepted by this account.
     *
     * @error InvalidParametersException   
     */
    listAcceptedPortfolioShares(params: ServiceCatalog.ListAcceptedPortfolioSharesInput, callback?: (err: ServiceCatalog.InvalidParametersException|any, data: ServiceCatalog.ListAcceptedPortfolioSharesOutput|any) => void): Request<ServiceCatalog.ListAcceptedPortfolioSharesOutput|any,ServiceCatalog.InvalidParametersException|any>;
    /**
     * Retrieves detailed constraint information for the specified portfolio and
product.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParametersException   
     */
    listConstraintsForPortfolio(params: ServiceCatalog.ListConstraintsForPortfolioInput, callback?: (err: ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|any, data: ServiceCatalog.ListConstraintsForPortfolioOutput|any) => void): Request<ServiceCatalog.ListConstraintsForPortfolioOutput|any,ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|any>;
    /**
     * Returns a paginated list of all paths to a specified product. A path is how the
user has access to a specified product, and is necessary when provisioning a
product. A path also determines the constraints put on the product.
     *
     * @error InvalidParametersException   
     * @error ResourceNotFoundException   
     */
    listLaunchPaths(params: ServiceCatalog.ListLaunchPathsInput, callback?: (err: ServiceCatalog.InvalidParametersException|ServiceCatalog.ResourceNotFoundException|any, data: ServiceCatalog.ListLaunchPathsOutput|any) => void): Request<ServiceCatalog.ListLaunchPathsOutput|any,ServiceCatalog.InvalidParametersException|ServiceCatalog.ResourceNotFoundException|any>;
    /**
     * Lists the account IDs that have been authorized sharing of the specified
portfolio.
     *
     * @error ResourceNotFoundException   
     */
    listPortfolioAccess(params: ServiceCatalog.ListPortfolioAccessInput, callback?: (err: ServiceCatalog.ResourceNotFoundException|any, data: ServiceCatalog.ListPortfolioAccessOutput|any) => void): Request<ServiceCatalog.ListPortfolioAccessOutput|any,ServiceCatalog.ResourceNotFoundException|any>;
    /**
     * Lists all portfolios in the catalog.
     *
     * @error InvalidParametersException   
     */
    listPortfolios(params: ServiceCatalog.ListPortfoliosInput, callback?: (err: ServiceCatalog.InvalidParametersException|any, data: ServiceCatalog.ListPortfoliosOutput|any) => void): Request<ServiceCatalog.ListPortfoliosOutput|any,ServiceCatalog.InvalidParametersException|any>;
    /**
     * Lists all portfolios that the specified product is associated with.
     *
     * @error InvalidParametersException   
     * @error ResourceNotFoundException   
     */
    listPortfoliosForProduct(params: ServiceCatalog.ListPortfoliosForProductInput, callback?: (err: ServiceCatalog.InvalidParametersException|ServiceCatalog.ResourceNotFoundException|any, data: ServiceCatalog.ListPortfoliosForProductOutput|any) => void): Request<ServiceCatalog.ListPortfoliosForProductOutput|any,ServiceCatalog.InvalidParametersException|ServiceCatalog.ResourceNotFoundException|any>;
    /**
     * Lists all principal ARNs associated with the specified portfolio.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParametersException   
     */
    listPrincipalsForPortfolio(params: ServiceCatalog.ListPrincipalsForPortfolioInput, callback?: (err: ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|any, data: ServiceCatalog.ListPrincipalsForPortfolioOutput|any) => void): Request<ServiceCatalog.ListPrincipalsForPortfolioOutput|any,ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|any>;
    /**
     * Lists all provisioning artifacts associated with the specified product.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParametersException   
     */
    listProvisioningArtifacts(params: ServiceCatalog.ListProvisioningArtifactsInput, callback?: (err: ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|any, data: ServiceCatalog.ListProvisioningArtifactsOutput|any) => void): Request<ServiceCatalog.ListProvisioningArtifactsOutput|any,ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|any>;
    /**
     * Returns a paginated list of all performed requests, in the form of RecordDetails
objects that are filtered as specified.
     *
     * @error InvalidParametersException   
     */
    listRecordHistory(params: ServiceCatalog.ListRecordHistoryInput, callback?: (err: ServiceCatalog.InvalidParametersException|any, data: ServiceCatalog.ListRecordHistoryOutput|any) => void): Request<ServiceCatalog.ListRecordHistoryOutput|any,ServiceCatalog.InvalidParametersException|any>;
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
    provisionProduct(params: ServiceCatalog.ProvisionProductInput, callback?: (err: ServiceCatalog.InvalidParametersException|ServiceCatalog.ResourceNotFoundException|ServiceCatalog.DuplicateResourceException|any, data: ServiceCatalog.ProvisionProductOutput|any) => void): Request<ServiceCatalog.ProvisionProductOutput|any,ServiceCatalog.InvalidParametersException|ServiceCatalog.ResourceNotFoundException|ServiceCatalog.DuplicateResourceException|any>;
    /**
     * Rejects an offer to share a portfolio.
     *
     * @error ResourceNotFoundException   
     */
    rejectPortfolioShare(params: ServiceCatalog.RejectPortfolioShareInput, callback?: (err: ServiceCatalog.ResourceNotFoundException|any, data: ServiceCatalog.RejectPortfolioShareOutput|any) => void): Request<ServiceCatalog.RejectPortfolioShareOutput|any,ServiceCatalog.ResourceNotFoundException|any>;
    /**
     * Returns a paginated list of all the ProvisionedProduct objects that are
currently available (not terminated).
     *
     * @error InvalidParametersException   
     */
    scanProvisionedProducts(params: ServiceCatalog.ScanProvisionedProductsInput, callback?: (err: ServiceCatalog.InvalidParametersException|any, data: ServiceCatalog.ScanProvisionedProductsOutput|any) => void): Request<ServiceCatalog.ScanProvisionedProductsOutput|any,ServiceCatalog.InvalidParametersException|any>;
    /**
     * Returns a paginated list all of the Products objects to which the caller has
access.

The output of this operation can be used as input for other operations, such as 
DescribeProductView .
     *
     * @error InvalidParametersException   
     */
    searchProducts(params: ServiceCatalog.SearchProductsInput, callback?: (err: ServiceCatalog.InvalidParametersException|any, data: ServiceCatalog.SearchProductsOutput|any) => void): Request<ServiceCatalog.SearchProductsOutput|any,ServiceCatalog.InvalidParametersException|any>;
    /**
     * Retrieves summary and status information about all products created within the
caller&#x27;s account. If a portfolio ID is provided, this operation retrieves
information for only those products that are associated with the specified
portfolio.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParametersException   
     */
    searchProductsAsAdmin(params: ServiceCatalog.SearchProductsAsAdminInput, callback?: (err: ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|any, data: ServiceCatalog.SearchProductsAsAdminOutput|any) => void): Request<ServiceCatalog.SearchProductsAsAdminOutput|any,ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|any>;
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
    terminateProvisionedProduct(params: ServiceCatalog.TerminateProvisionedProductInput, callback?: (err: ServiceCatalog.ResourceNotFoundException|any, data: ServiceCatalog.TerminateProvisionedProductOutput|any) => void): Request<ServiceCatalog.TerminateProvisionedProductOutput|any,ServiceCatalog.ResourceNotFoundException|any>;
    /**
     * Updates an existing constraint.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParametersException   
     */
    updateConstraint(params: ServiceCatalog.UpdateConstraintInput, callback?: (err: ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|any, data: ServiceCatalog.UpdateConstraintOutput|any) => void): Request<ServiceCatalog.UpdateConstraintOutput|any,ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|any>;
    /**
     * Updates the specified portfolio&#x27;s details. This operation will not work with a
product that has been shared with you.
     *
     * @error InvalidParametersException   
     * @error ResourceNotFoundException   
     * @error LimitExceededException   
     */
    updatePortfolio(params: ServiceCatalog.UpdatePortfolioInput, callback?: (err: ServiceCatalog.InvalidParametersException|ServiceCatalog.ResourceNotFoundException|ServiceCatalog.LimitExceededException|any, data: ServiceCatalog.UpdatePortfolioOutput|any) => void): Request<ServiceCatalog.UpdatePortfolioOutput|any,ServiceCatalog.InvalidParametersException|ServiceCatalog.ResourceNotFoundException|ServiceCatalog.LimitExceededException|any>;
    /**
     * Updates an existing product.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParametersException   
     */
    updateProduct(params: ServiceCatalog.UpdateProductInput, callback?: (err: ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|any, data: ServiceCatalog.UpdateProductOutput|any) => void): Request<ServiceCatalog.UpdateProductOutput|any,ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|any>;
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
    updateProvisionedProduct(params: ServiceCatalog.UpdateProvisionedProductInput, callback?: (err: ServiceCatalog.InvalidParametersException|ServiceCatalog.ResourceNotFoundException|any, data: ServiceCatalog.UpdateProvisionedProductOutput|any) => void): Request<ServiceCatalog.UpdateProvisionedProductOutput|any,ServiceCatalog.InvalidParametersException|ServiceCatalog.ResourceNotFoundException|any>;
    /**
     * Updates an existing provisioning artifact&#x27;s information. This operation will not
work on a provisioning artifact associated with a product that has been shared
with you.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParametersException   
     */
    updateProvisioningArtifact(params: ServiceCatalog.UpdateProvisioningArtifactInput, callback?: (err: ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|any, data: ServiceCatalog.UpdateProvisioningArtifactOutput|any) => void): Request<ServiceCatalog.UpdateProvisioningArtifactOutput|any,ServiceCatalog.ResourceNotFoundException|ServiceCatalog.InvalidParametersException|any>;

  }

  export module ServiceCatalog {
    
    export type AcceptLanguage = string;
    
    export type AccessLevelFilterKey = string;
    
    export type AccessLevelFilterValue = string;
    
    export type AccountId = string;
    
    export type AccountIds = AccountId[];
    
    export type AddTags = Tag[];
    
    export type AllowedValue = string;
    
    export type AllowedValues = AllowedValue[];
    
    export type ApproximateCount = number;
    
    export type AttributeValue = string;
    
    export type ConstraintDescription = string;
    
    export type ConstraintDetails = ConstraintDetail[];
    
    export type ConstraintParameters = string;
    
    export type ConstraintSummaries = ConstraintSummary[];
    
    export type ConstraintType = string;
    
    export type CreatedTime = number;
    
    export type CreationTime = number;
    
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
    
    export type PortfolioDescription = string;
    
    export type PortfolioDetails = PortfolioDetail[];
    
    export type PortfolioDisplayName = string;
    
    export type PortfolioName = string;
    
    export type PrincipalARN = string;
    
    export type PrincipalType = string;
    
    export type Principals = Principal[];
    
    export type ProductSource = string;
    
    export type ProductType = string;
    
    export type ProductViewAggregationType = string;
    
    export type ProductViewAggregationValues = ProductViewAggregationValue[];
    
    export type ProductViewAggregations = {[key:string]: ProductViewAggregationValues};
    
    export type ProductViewDetails = ProductViewDetail[];
    
    export type ProductViewDistributor = string;
    
    export type ProductViewFilterBy = string;
    
    export type ProductViewFilterValue = string;
    
    export type ProductViewFilterValues = ProductViewFilterValue[];
    
    export type ProductViewFilters = {[key:string]: ProductViewFilterValues};
    
    export type ProductViewName = string;
    
    export type ProductViewOwner = string;
    
    export type ProductViewShortDescription = string;
    
    export type ProductViewSortBy = string;
    
    export type ProductViewSummaries = ProductViewSummary[];
    
    export type ProviderName = string;
    
    export type ProvisionedProductDetails = ProvisionedProductDetail[];
    
    export type ProvisionedProductId = string;
    
    export type ProvisionedProductName = string;
    
    export type ProvisionedProductNameOrArn = string;
    
    export type ProvisionedProductStatusMessage = string;
    
    export type ProvisionedProductType = string;
    
    export type ProvisioningArtifactCreatedTime = number;
    
    export type ProvisioningArtifactDescription = string;
    
    export type ProvisioningArtifactDetails = ProvisioningArtifactDetail[];
    
    export type ProvisioningArtifactInfo = {[key:string]: ProvisioningArtifactInfoValue};
    
    export type ProvisioningArtifactInfoKey = string;
    
    export type ProvisioningArtifactInfoValue = string;
    
    export type ProvisioningArtifactName = string;
    
    export type ProvisioningArtifactParameters = ProvisioningArtifactParameter[];
    
    export type ProvisioningArtifactType = string;
    
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
    
    export type ResourceARN = string;
    
    export type SearchFilterKey = string;
    
    export type SearchFilterValue = string;
    
    export type SortOrder = string;
    
    export type Status = string;
    
    export type SupportDescription = string;
    
    export type SupportEmail = string;
    
    export type SupportUrl = string;
    
    export type TagKey = string;
    
    export type TagKeys = TagKey[];
    
    export type TagValue = string;
    
    export type Tags = Tag[];
    
    export type UpdateProvisioningParameters = UpdateProvisioningParameter[];
    
    export type UpdatedTime = number;
    
    export type UsageInstructions = UsageInstruction[];
    
    export type UsePreviousValue = boolean;

    export interface AcceptPortfolioShareInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The portfolio identifier. **/
        PortfolioId: Id;
    }
    export interface AcceptPortfolioShareOutput {
    }
    export interface AccessLevelFilter {
        /** Specifies the access level.

Account allows results at the account level.

Role allows results based on the federated role of the specified user.

User allows results limited to the specified user. **/
        Key?: AccessLevelFilterKey;
        /** Specifies the user to which the access level applies. A value of Self is
currently supported. **/
        Value?: AccessLevelFilterValue;
    }
    export interface AssociatePrincipalWithPortfolioInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The portfolio identifier. **/
        PortfolioId: Id;
        /** The ARN representing the principal (IAM user, role, or group). **/
        PrincipalARN: PrincipalARN;
        /** The principal type. Must be IAM **/
        PrincipalType: PrincipalType;
    }
    export interface AssociatePrincipalWithPortfolioOutput {
    }
    export interface AssociateProductWithPortfolioInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The product identifier. **/
        ProductId: Id;
        /** The portfolio identifier. **/
        PortfolioId: Id;
        /** The identifier of the source portfolio to use with this association. **/
        SourcePortfolioId?: Id;
    }
    export interface AssociateProductWithPortfolioOutput {
    }
    export interface ConstraintDetail {
        /** The identifier of the constraint. **/
        ConstraintId?: Id;
        /** The type of the constraint. **/
        Type?: ConstraintType;
        /** The text description of the constraint. **/
        Description?: ConstraintDescription;
        /** The owner of the constraint. **/
        Owner?: AccountId;
    }
    export interface ConstraintSummary {
        /** The type of the constraint. **/
        Type?: ConstraintType;
        /** The text description of the constraint. **/
        Description?: ConstraintDescription;
    }
    export interface CreateConstraintInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The portfolio identifier. **/
        PortfolioId: Id;
        /** The product identifier. **/
        ProductId: Id;
        /** The constraint parameters. **/
        Parameters: ConstraintParameters;
        /** The type of the constraint. **/
        Type: ConstraintType;
        /** The text description of the constraint. **/
        Description?: ConstraintDescription;
        /** A token to disambiguate duplicate requests. You can create multiple resources
using the same input in multiple requests, provided that you also specify a
different idempotency token for each request. **/
        IdempotencyToken: IdempotencyToken;
    }
    export interface CreateConstraintOutput {
        /** The resulting detailed constraint information. **/
        ConstraintDetail?: ConstraintDetail;
        /** The resulting constraint parameters. **/
        ConstraintParameters?: ConstraintParameters;
        /** The status of the current request. **/
        Status?: Status;
    }
    export interface CreatePortfolioInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The name to use for display purposes. **/
        DisplayName: PortfolioDisplayName;
        /** The text description of the portfolio. **/
        Description?: PortfolioDescription;
        /** The name of the portfolio provider. **/
        ProviderName: ProviderName;
        /** Tags to associate with the new portfolio. **/
        Tags?: AddTags;
        /** A token to disambiguate duplicate requests. You can create multiple resources
using the same input in multiple requests, provided that you also specify a
different idempotency token for each request. **/
        IdempotencyToken: IdempotencyToken;
    }
    export interface CreatePortfolioOutput {
        /** The resulting detailed portfolio information. **/
        PortfolioDetail?: PortfolioDetail;
        /** Tags successfully associated with the new portfolio. **/
        Tags?: Tags;
    }
    export interface CreatePortfolioShareInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The portfolio identifier. **/
        PortfolioId: Id;
        /** The account ID with which to share the portfolio. **/
        AccountId: AccountId;
    }
    export interface CreatePortfolioShareOutput {
    }
    export interface CreateProductInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The name of the product. **/
        Name: ProductViewName;
        /** The owner of the product. **/
        Owner: ProductViewOwner;
        /** The text description of the product. **/
        Description?: ProductViewShortDescription;
        /** The distributor of the product. **/
        Distributor?: ProductViewOwner;
        /** Support information about the product. **/
        SupportDescription?: SupportDescription;
        /** Contact email for product support. **/
        SupportEmail?: SupportEmail;
        /** Contact URL for product support. **/
        SupportUrl?: SupportUrl;
        /** The type of the product to create. **/
        ProductType: ProductType;
        /** Tags to associate with the new product. **/
        Tags?: AddTags;
        /** Parameters for the provisioning artifact. **/
        ProvisioningArtifactParameters: ProvisioningArtifactProperties;
        /** A token to disambiguate duplicate requests. You can create multiple resources
using the same input in multiple requests, provided that you also specify a
different idempotency token for each request. **/
        IdempotencyToken: IdempotencyToken;
    }
    export interface CreateProductOutput {
        /** The resulting detailed product view information. **/
        ProductViewDetail?: ProductViewDetail;
        /** The resulting detailed provisioning artifact information. **/
        ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
        /** Tags successfully associated with the new product. **/
        Tags?: Tags;
    }
    export interface CreateProvisioningArtifactInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The product identifier. **/
        ProductId: Id;
        /** The parameters to use when creating the new provisioning artifact. **/
        Parameters: ProvisioningArtifactProperties;
        /** A token to disambiguate duplicate requests. You can create multiple resources
using the same input in multiple requests, provided that you also specify a
different idempotency token for each request. **/
        IdempotencyToken: IdempotencyToken;
    }
    export interface CreateProvisioningArtifactOutput {
        /** The resulting detailed provisioning artifact information. **/
        ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
        /** Additional information about the provisioning artifact create request. **/
        Info?: ProvisioningArtifactInfo;
        /** The status of the current request. **/
        Status?: Status;
    }
    export interface DeleteConstraintInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The identifier of the constraint to delete. **/
        Id: Id;
    }
    export interface DeleteConstraintOutput {
    }
    export interface DeletePortfolioInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The identifier of the portfolio for the delete request. **/
        Id: Id;
    }
    export interface DeletePortfolioOutput {
    }
    export interface DeletePortfolioShareInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The portfolio identifier. **/
        PortfolioId: Id;
        /** The account ID associated with the share to delete. **/
        AccountId: AccountId;
    }
    export interface DeletePortfolioShareOutput {
    }
    export interface DeleteProductInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The identifier of the product for the delete request. **/
        Id: Id;
    }
    export interface DeleteProductOutput {
    }
    export interface DeleteProvisioningArtifactInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The product identifier. **/
        ProductId: Id;
        /** The identifier of the provisioning artifact for the delete request. **/
        ProvisioningArtifactId: Id;
    }
    export interface DeleteProvisioningArtifactOutput {
    }
    export interface DescribeConstraintInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The identifier of the constraint. **/
        Id: Id;
    }
    export interface DescribeConstraintOutput {
        /** Detailed constraint information. **/
        ConstraintDetail?: ConstraintDetail;
        /** The current parameters associated with the specified constraint. **/
        ConstraintParameters?: ConstraintParameters;
        /** The status of the current request. **/
        Status?: Status;
    }
    export interface DescribePortfolioInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The identifier of the portfolio for which to retrieve information. **/
        Id: Id;
    }
    export interface DescribePortfolioOutput {
        /** Detailed portfolio information. **/
        PortfolioDetail?: PortfolioDetail;
        /** Tags associated with the portfolio. **/
        Tags?: Tags;
    }
    export interface DescribeProductAsAdminInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The identifier of the product for which to retrieve information. **/
        Id: Id;
    }
    export interface DescribeProductAsAdminOutput {
        /** Detailed product view information. **/
        ProductViewDetail?: ProductViewDetail;
        /** Tags associated with the product. **/
        Tags?: Tags;
    }
    export interface DescribeProductInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

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
        /** The language code to use for this operation. Supported language codes are as
follows:

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
    export interface DescribeProvisioningArtifactInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The identifier of the provisioning artifact. **/
        ProvisioningArtifactId: Id;
        /** The product identifier. **/
        ProductId: Id;
    }
    export interface DescribeProvisioningArtifactOutput {
        /** Detailed provisioning artifact information. **/
        ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
        /** Additional information about the provisioning artifact. **/
        Info?: ProvisioningArtifactInfo;
        /** The status of the current request. **/
        Status?: Status;
    }
    export interface DescribeProvisioningParametersInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The product identifier. **/
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
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The record identifier of the ProvisionedProduct object for which to retrieve
output information. This is the RecordDetail.RecordId obtained from the request
operation&#x27;s response. **/
        Id: Id;
        /** The page token of the first page retrieved. If null, this retrieves the first
page of size PageSize . **/
        PageToken?: PageToken;
        /** The maximum number of items to return in the results. If more results exist than
fit in the specified PageSize , the value of NextPageToken in the response is
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
    export interface DisassociatePrincipalFromPortfolioInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The portfolio identifier. **/
        PortfolioId: Id;
        /** The ARN representing the principal (IAM user, role, or group). **/
        PrincipalARN: PrincipalARN;
    }
    export interface DisassociatePrincipalFromPortfolioOutput {
    }
    export interface DisassociateProductFromPortfolioInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The product identifier. **/
        ProductId: Id;
        /** The portfolio identifier. **/
        PortfolioId: Id;
    }
    export interface DisassociateProductFromPortfolioOutput {
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
    export interface LimitExceededException {
    }
    export interface ListAcceptedPortfolioSharesInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The page token of the first page retrieved. If null, this retrieves the first
page of size PageSize . **/
        PageToken?: PageToken;
        /** The maximum number of items to return in the results. If more results exist than
fit in the specified PageSize , the value of NextPageToken in the response is
non-null. **/
        PageSize?: PageSize;
    }
    export interface ListAcceptedPortfolioSharesOutput {
        /** List of detailed portfolio information objects. **/
        PortfolioDetails?: PortfolioDetails;
        /** The page token to use to retrieve the next page of results for this operation.
If there are no more pages, this value is null. **/
        NextPageToken?: PageToken;
    }
    export interface ListConstraintsForPortfolioInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The portfolio identifier. **/
        PortfolioId: Id;
        /** The product identifier. **/
        ProductId?: Id;
        /** The maximum number of items to return in the results. If more results exist than
fit in the specified PageSize , the value of NextPageToken in the response is
non-null. **/
        PageSize?: PageSize;
        /** The page token of the first page retrieved. If null, this retrieves the first
page of size PageSize . **/
        PageToken?: PageToken;
    }
    export interface ListConstraintsForPortfolioOutput {
        /** List of detailed constraint information objects. **/
        ConstraintDetails?: ConstraintDetails;
        /** The page token to use to retrieve the next page of results for this operation.
If there are no more pages, this value is null. **/
        NextPageToken?: PageToken;
    }
    export interface ListLaunchPathsInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The product identifier.. Identifies the product for which to retrieve 
LaunchPathSummaries information. **/
        ProductId: Id;
        /** The maximum number of items to return in the results. If more results exist than
fit in the specified PageSize , the value of NextPageToken in the response is
non-null. **/
        PageSize?: PageSize;
        /** The page token of the first page retrieved. If null, this retrieves the first
page of size PageSize . **/
        PageToken?: PageToken;
    }
    export interface ListLaunchPathsOutput {
        /** List of launch path information summaries for the specified PageToken . **/
        LaunchPathSummaries?: LaunchPathSummaries;
        /** The page token to use to retrieve the next page of results for this operation.
If there are no more pages, this value is null. **/
        NextPageToken?: PageToken;
    }
    export interface ListPortfolioAccessInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The portfolio identifier. **/
        PortfolioId: Id;
    }
    export interface ListPortfolioAccessOutput {
        /** List of account IDs associated with access to the portfolio. **/
        AccountIds?: AccountIds;
        /** The page token to use to retrieve the next page of results for this operation.
If there are no more pages, this value is null. **/
        NextPageToken?: PageToken;
    }
    export interface ListPortfoliosForProductInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The product identifier. **/
        ProductId: Id;
        /** The page token of the first page retrieved. If null, this retrieves the first
page of size PageSize . **/
        PageToken?: PageToken;
        /** The maximum number of items to return in the results. If more results exist than
fit in the specified PageSize , the value of NextPageToken in the response is
non-null. **/
        PageSize?: PageSize;
    }
    export interface ListPortfoliosForProductOutput {
        /** List of detailed portfolio information objects. **/
        PortfolioDetails?: PortfolioDetails;
        /** The page token to use to retrieve the next page of results for this operation.
If there are no more pages, this value is null. **/
        NextPageToken?: PageToken;
    }
    export interface ListPortfoliosInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The page token of the first page retrieved. If null, this retrieves the first
page of size PageSize . **/
        PageToken?: PageToken;
        /** The maximum number of items to return in the results. If more results exist than
fit in the specified PageSize , the value of NextPageToken in the response is
non-null. **/
        PageSize?: PageSize;
    }
    export interface ListPortfoliosOutput {
        /** List of detailed portfolio information objects. **/
        PortfolioDetails?: PortfolioDetails;
        /** The page token to use to retrieve the next page of results for this operation.
If there are no more pages, this value is null. **/
        NextPageToken?: PageToken;
    }
    export interface ListPrincipalsForPortfolioInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The portfolio identifier. **/
        PortfolioId: Id;
        /** The maximum number of items to return in the results. If more results exist than
fit in the specified PageSize , the value of NextPageToken in the response is
non-null. **/
        PageSize?: PageSize;
        /** The page token of the first page retrieved. If null, this retrieves the first
page of size PageSize . **/
        PageToken?: PageToken;
    }
    export interface ListPrincipalsForPortfolioOutput {
        /** The IAM principals (users or roles) associated with the portfolio. **/
        Principals?: Principals;
        /** The page token to use to retrieve the next page of results for this operation.
If there are no more pages, this value is null. **/
        NextPageToken?: PageToken;
    }
    export interface ListProvisioningArtifactsInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The product identifier. **/
        ProductId: Id;
    }
    export interface ListProvisioningArtifactsOutput {
        /** List of detailed provisioning artifact information objects. **/
        ProvisioningArtifactDetails?: ProvisioningArtifactDetails;
        /** The page token to use to retrieve the next page of results for this operation.
If there are no more pages, this value is null. **/
        NextPageToken?: PageToken;
    }
    export interface ListRecordHistoryInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The access level for obtaining results. If left unspecified, User level access
is used. **/
        AccessLevelFilter?: AccessLevelFilter;
        /** The filter to limit search results. **/
        SearchFilter?: ListRecordHistorySearchFilter;
        /** The maximum number of items to return in the results. If more results exist than
fit in the specified PageSize , the value of NextPageToken in the response is
non-null. **/
        PageSize?: PageSize;
        /** The page token of the first page retrieved. If null, this retrieves the first
page of size PageSize . **/
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
        /** The filter value for Key . **/
        Value?: SearchFilterValue;
    }
    export interface ParameterConstraints {
        /** The values that the administrator has allowed for the parameter. **/
        AllowedValues?: AllowedValues;
    }
    export interface PortfolioDetail {
        /** The identifier for the portfolio. **/
        Id?: Id;
        /** The ARN assigned to the portfolio. **/
        ARN?: ResourceARN;
        /** The name to use for display purposes. **/
        DisplayName?: PortfolioDisplayName;
        /** The text description of the portfolio. **/
        Description?: PortfolioDescription;
        /** The UTC timestamp of the creation time. **/
        CreatedTime?: CreationTime;
        /** The name of the portfolio provider. **/
        ProviderName?: ProviderName;
    }
    export interface Principal {
        /** The ARN representing the principal (IAM user, role, or group). **/
        PrincipalARN?: PrincipalARN;
        /** The principal type. Must be IAM **/
        PrincipalType?: PrincipalType;
    }
    export interface ProductViewAggregationValue {
        /** The value of the product view aggregation. **/
        Value?: AttributeValue;
        /** An approximate count of the products that match the value. **/
        ApproximateCount?: ApproximateCount;
    }
    export interface ProductViewDetail {
        /** The summary metadata about the specified product view. **/
        ProductViewSummary?: ProductViewSummary;
        /** Current status of the product. **/
        Status?: Status;
        /** The ARN associated with the product. **/
        ProductARN?: ResourceARN;
        /** The UTC timestamp of the creation time. **/
        CreatedTime?: CreatedTime;
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
DescribeProvisioningParameters . **/
        HasDefaultPath?: HasDefaultPath;
        /** The email contact information to obtain support for this Product. **/
        SupportEmail?: SupportEmail;
        /** The description of the support for this Product. **/
        SupportDescription?: SupportDescription;
        /** The URL information to obtain support for this Product. **/
        SupportUrl?: SupportUrl;
    }
    export interface ProvisionProductInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The product identifier. **/
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
        /** A list of tags to use as provisioning options. **/
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
        /** The UTC timestamp of the creation time. **/
        CreatedTime?: CreatedTime;
        /** A token to disambiguate duplicate requests. You can create multiple resources
using the same input in multiple requests, provided that you also specify a
different idempotency token for each request. **/
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
        /** The UTC timestamp of the creation time. **/
        CreatedTime?: ProvisioningArtifactCreatedTime;
    }
    export interface ProvisioningArtifactDetail {
        /** The identifier of the provisioning artifact. **/
        Id?: Id;
        /** The name assigned to the provisioning artifact. **/
        Name?: ProvisioningArtifactName;
        /** The text description of the provisioning artifact. **/
        Description?: ProvisioningArtifactName;
        /** The type of the provisioning artifact. **/
        Type?: ProvisioningArtifactType;
        /** The UTC timestamp of the creation time. **/
        CreatedTime?: CreationTime;
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
    export interface ProvisioningArtifactProperties {
        /** The name assigned to the provisioning artifact properties. **/
        Name?: ProvisioningArtifactName;
        /** The text description of the provisioning artifact properties. **/
        Description?: ProvisioningArtifactDescription;
        /** Additional information about the provisioning artifact properties. **/
        Info: ProvisioningArtifactInfo;
        /** The type of the provisioning artifact properties. **/
        Type?: ProvisioningArtifactType;
    }
    export interface ProvisioningParameter {
        /** The ProvisioningArtifactParameter.ParameterKey parameter from 
DescribeProvisioningParameters . **/
        Key?: ParameterKey;
        /** The value to use for provisioning. Any constraints on this value can be found in 
ProvisioningArtifactParameter for Key . **/
        Value?: ParameterValue;
    }
    export interface RecordDetail {
        /** The identifier of the ProvisionedProduct object record. **/
        RecordId?: Id;
        /** The user-friendly name of the ProvisionedProduct object. **/
        ProvisionedProductName?: ProvisionedProductName;
        /** The status of the ProvisionedProduct object. **/
        Status?: RecordStatus;
        /** The UTC timestamp of the creation time. **/
        CreatedTime?: CreatedTime;
        /** The time when the record for the ProvisionedProduct object was last updated. **/
        UpdatedTime?: UpdatedTime;
        /** The type of the ProvisionedProduct object. **/
        ProvisionedProductType?: ProvisionedProductType;
        /** The record type for this record. **/
        RecordType?: RecordType;
        /** The identifier of the ProvisionedProduct object. **/
        ProvisionedProductId?: Id;
        /** The product identifier. **/
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
    export interface RejectPortfolioShareInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The portfolio identifier. **/
        PortfolioId: Id;
    }
    export interface RejectPortfolioShareOutput {
    }
    export interface ResourceInUseException {
    }
    export interface ResourceNotFoundException {
    }
    export interface ScanProvisionedProductsInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The access level for obtaining results. If left unspecified, User level access
is used. **/
        AccessLevelFilter?: AccessLevelFilter;
        /** The maximum number of items to return in the results. If more results exist than
fit in the specified PageSize , the value of NextPageToken in the response is
non-null. **/
        PageSize?: PageSize;
        /** The page token of the first page retrieved. If null, this retrieves the first
page of size PageSize . **/
        PageToken?: PageToken;
    }
    export interface ScanProvisionedProductsOutput {
        /** A list of ProvisionedProduct detail objects. **/
        ProvisionedProducts?: ProvisionedProductDetails;
        /** The page token to use to retrieve the next page of results for this operation.
If there are no more pages, this value is null. **/
        NextPageToken?: PageToken;
    }
    export interface SearchProductsAsAdminInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The portfolio identifier. **/
        PortfolioId?: Id;
        /** The list of filters with which to limit search results. If no search filters are
specified, the output is all the products to which the administrator has access. **/
        Filters?: ProductViewFilters;
        /** The sort field specifier. If no value is specified, results are not sorted. **/
        SortBy?: ProductViewSortBy;
        /** The sort order specifier. If no value is specified, results are not sorted. **/
        SortOrder?: SortOrder;
        /** The page token of the first page retrieved. If null, this retrieves the first
page of size PageSize . **/
        PageToken?: PageToken;
        /** The maximum number of items to return in the results. If more results exist than
fit in the specified PageSize , the value of NextPageToken in the response is
non-null. **/
        PageSize?: PageSize;
        /** Access level of the source of the product. **/
        ProductSource?: ProductSource;
    }
    export interface SearchProductsAsAdminOutput {
        /** List of detailed product view information objects. **/
        ProductViewDetails?: ProductViewDetails;
        /** The page token to use to retrieve the next page of results for this operation.
If there are no more pages, this value is null. **/
        NextPageToken?: PageToken;
    }
    export interface SearchProductsInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The list of filters with which to limit search results. If no search filters are
specified, the output is all the products to which the calling user has access. **/
        Filters?: ProductViewFilters;
        /** The maximum number of items to return in the results. If more results exist than
fit in the specified PageSize , the value of NextPageToken in the response is
non-null. **/
        PageSize?: PageSize;
        /** The sort field specifier. If no value is specified, results are not sorted. **/
        SortBy?: ProductViewSortBy;
        /** The sort order specifier. If no value is specified, results are not sorted. **/
        SortOrder?: SortOrder;
        /** The page token of the first page retrieved. If null, this retrieves the first
page of size PageSize . **/
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
DescribeProvisioningParameters . **/
        Key: TagKey;
        /** The esired value for this key. **/
        Value: TagValue;
    }
    export interface TerminateProvisionedProductInput {
        /** The name of the ProvisionedProduct object to terminate. You must specify either 
ProvisionedProductName or ProvisionedProductId , but not both. **/
        ProvisionedProductName?: ProvisionedProductNameOrArn;
        /** The identifier of the ProvisionedProduct object to terminate. You must specify
either ProvisionedProductName or ProvisionedProductId , but not both. **/
        ProvisionedProductId?: Id;
        /** An idempotency token that uniquely identifies the termination request. This
token is only valid during the termination process. After the ProvisionedProduct
object is terminated, further requests to terminate the same ProvisionedProduct
object always return ResourceNotFound regardless of the value of TerminateToken 
. **/
        TerminateToken: IdempotencyToken;
        /** If set to true, AWS Service Catalog stops managing the specified
ProvisionedProduct object even if it cannot delete the underlying resources. **/
        IgnoreErrors?: IgnoreErrors;
        /** The language code to use for this operation. Supported language codes are as
follows:

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
    export interface UpdateConstraintInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The identifier of the constraint to update. **/
        Id: Id;
        /** The updated text description of the constraint. **/
        Description?: ConstraintDescription;
    }
    export interface UpdateConstraintOutput {
        /** The resulting detailed constraint information. **/
        ConstraintDetail?: ConstraintDetail;
        /** The resulting updated constraint parameters. **/
        ConstraintParameters?: ConstraintParameters;
        /** The status of the current request. **/
        Status?: Status;
    }
    export interface UpdatePortfolioInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The identifier of the portfolio for the update request. **/
        Id: Id;
        /** The name to use for display purposes. **/
        DisplayName?: PortfolioDisplayName;
        /** The updated text description of the portfolio. **/
        Description?: PortfolioDescription;
        /** The updated name of the portfolio provider. **/
        ProviderName?: ProviderName;
        /** Tags to add to the existing list of tags associated with the portfolio. **/
        AddTags?: AddTags;
        /** Tags to remove from the existing list of tags associated with the portfolio. **/
        RemoveTags?: TagKeys;
    }
    export interface UpdatePortfolioOutput {
        /** The resulting detailed portfolio information. **/
        PortfolioDetail?: PortfolioDetail;
        /** Tags associated with the portfolio. **/
        Tags?: Tags;
    }
    export interface UpdateProductInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The identifier of the product for the update request. **/
        Id: Id;
        /** The updated product name. **/
        Name?: ProductViewName;
        /** The updated owner of the product. **/
        Owner?: ProductViewOwner;
        /** The updated text description of the product. **/
        Description?: ProductViewShortDescription;
        /** The updated distributor of the product. **/
        Distributor?: ProductViewOwner;
        /** The updated support description for the product. **/
        SupportDescription?: SupportDescription;
        /** The updated support email for the product. **/
        SupportEmail?: SupportEmail;
        /** The updated support URL for the product. **/
        SupportUrl?: SupportUrl;
        /** Tags to add to the existing list of tags associated with the product. **/
        AddTags?: AddTags;
        /** Tags to remove from the existing list of tags associated with the product. **/
        RemoveTags?: TagKeys;
    }
    export interface UpdateProductOutput {
        /** The resulting detailed product view information. **/
        ProductViewDetail?: ProductViewDetail;
        /** Tags associated with the product. **/
        Tags?: Tags;
    }
    export interface UpdateProvisionedProductInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The updated name of the ProvisionedProduct object . You must specify either 
ProvisionedProductName or ProvisionedProductId , but not both. **/
        ProvisionedProductName?: ProvisionedProductNameOrArn;
        /** The identifier of the ProvisionedProduct object to update. You must specify
either ProvisionedProductName or ProvisionedProductId , but not both. **/
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
    export interface UpdateProvisioningArtifactInput {
        /** The language code to use for this operation. Supported language codes are as
follows:

&quot;en&quot; (English)

&quot;jp&quot; (Japanese)

&quot;zh&quot; (Chinese)

If no code is specified, &quot;en&quot; is used as the default. **/
        AcceptLanguage?: AcceptLanguage;
        /** The product identifier. **/
        ProductId: Id;
        /** The identifier of the provisioning artifact for the update request. **/
        ProvisioningArtifactId: Id;
        /** The updated name of the provisioning artifact. **/
        Name?: ProvisioningArtifactName;
        /** The updated text description of the provisioning artifact. **/
        Description?: ProvisioningArtifactDescription;
    }
    export interface UpdateProvisioningArtifactOutput {
        /** The resulting detailed provisioning artifact information. **/
        ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
        /** Additional information about the provisioning artifact update request. **/
        Info?: ProvisioningArtifactInfo;
        /** The status of the current request. **/
        Status?: Status;
    }
    export interface UpdateProvisioningParameter {
        /** The ProvisioningArtifactParameter.ParameterKey parameter from 
DescribeProvisioningParameters . **/
        Key?: ParameterKey;
        /** The value to use for updating the product provisioning. Any constraints on this
value can be found in the ProvisioningArtifactParameter parameter for Key . **/
        Value?: ParameterValue;
        /** If true, uses the currently set value for Key , ignoring 
UpdateProvisioningParameter.Value . **/
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
