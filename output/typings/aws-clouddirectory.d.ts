// Type definitions for aws-sdk - Amazon CloudDirectory
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2016-05-10
   * endpointPrefix: clouddirectory
   * serviceAbbreviation: 
   * signatureVersion: v4
   * protocol: rest-json
   *
   * Amazon Cloud DirectoryAmazon Cloud Directory is a component of the AWS Directory
Service that simplifies the development and management of cloud-scale web,
mobile and IoT applications. This guide describes the Cloud Directory operations
that you can call programatically and includes detailed information on data
types and errors. For information about AWS Directory Services features, see AWS
Directory Service [https://aws.amazon.com/directoryservice/] and the AWS
Directory Service Administration Guide
[http://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html] .
   *
   */
  export class CloudDirectory extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Adds a new Facet to an object.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error DirectoryNotEnabledException   
     * @error ResourceNotFoundException   
     * @error FacetValidationException   
     */
    addFacetToObject(params: CloudDirectory.AddFacetToObjectRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.ResourceNotFoundException|CloudDirectory.FacetValidationException|any, data: CloudDirectory.AddFacetToObjectResponse|any) => void): Request<CloudDirectory.AddFacetToObjectResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.ResourceNotFoundException|CloudDirectory.FacetValidationException|any>;
    /**
     * Copies input published schema into Directory with same name and version as that
of published schema .
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error ResourceNotFoundException   
     * @error InvalidAttachmentException   
     */
    applySchema(params: CloudDirectory.ApplySchemaRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.InvalidAttachmentException|any, data: CloudDirectory.ApplySchemaResponse|any) => void): Request<CloudDirectory.ApplySchemaResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.InvalidAttachmentException|any>;
    /**
     * Attaches an existing object to another object. An object can be accessed in two
ways:

 1. Using the path
    
    
 2. Using ObjectIdentifier
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error DirectoryNotEnabledException   
     * @error ResourceNotFoundException   
     * @error LinkNameAlreadyInUseException   
     * @error InvalidAttachmentException   
     * @error ValidationException   
     */
    attachObject(params: CloudDirectory.AttachObjectRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.ResourceNotFoundException|CloudDirectory.LinkNameAlreadyInUseException|CloudDirectory.InvalidAttachmentException|CloudDirectory.ValidationException|any, data: CloudDirectory.AttachObjectResponse|any) => void): Request<CloudDirectory.AttachObjectResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.ResourceNotFoundException|CloudDirectory.LinkNameAlreadyInUseException|CloudDirectory.InvalidAttachmentException|CloudDirectory.ValidationException|any>;
    /**
     * Attaches a policy object to a regular object. An object can have a limited
number of attached policies.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error DirectoryNotEnabledException   
     * @error InvalidArnException   
     * @error ResourceNotFoundException   
     * @error NotPolicyException   
     */
    attachPolicy(params: CloudDirectory.AttachPolicyRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.InvalidArnException|CloudDirectory.ResourceNotFoundException|CloudDirectory.NotPolicyException|any, data: CloudDirectory.AttachPolicyResponse|any) => void): Request<CloudDirectory.AttachPolicyResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.InvalidArnException|CloudDirectory.ResourceNotFoundException|CloudDirectory.NotPolicyException|any>;
    /**
     * Attaches the specified object to the specified index.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error DirectoryNotEnabledException   
     * @error ResourceNotFoundException   
     * @error LinkNameAlreadyInUseException   
     * @error IndexedAttributeMissingException   
     * @error NotIndexException   
     */
    attachToIndex(params: CloudDirectory.AttachToIndexRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.ResourceNotFoundException|CloudDirectory.LinkNameAlreadyInUseException|CloudDirectory.IndexedAttributeMissingException|CloudDirectory.NotIndexException|any, data: CloudDirectory.AttachToIndexResponse|any) => void): Request<CloudDirectory.AttachToIndexResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.ResourceNotFoundException|CloudDirectory.LinkNameAlreadyInUseException|CloudDirectory.IndexedAttributeMissingException|CloudDirectory.NotIndexException|any>;
    /**
     * Performs all the read operations in a batch.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error DirectoryNotEnabledException   
     */
    batchRead(params: CloudDirectory.BatchReadRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|any, data: CloudDirectory.BatchReadResponse|any) => void): Request<CloudDirectory.BatchReadResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|any>;
    /**
     * Performs all the write operations in a batch. Either all the operations succeed
or none. Batch writes supports only object-related operations.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error DirectoryNotEnabledException   
     * @error BatchWriteException   
     */
    batchWrite(params: CloudDirectory.BatchWriteRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.BatchWriteException|any, data: CloudDirectory.BatchWriteResponse|any) => void): Request<CloudDirectory.BatchWriteResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.BatchWriteException|any>;
    /**
     * Creates a Directory by copying the published schema into the directory. A
directory cannot be created without a schema.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error DirectoryAlreadyExistsException   
     * @error InvalidArnException   
     * @error ResourceNotFoundException   
     */
    createDirectory(params: CloudDirectory.CreateDirectoryRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryAlreadyExistsException|CloudDirectory.InvalidArnException|CloudDirectory.ResourceNotFoundException|any, data: CloudDirectory.CreateDirectoryResponse|any) => void): Request<CloudDirectory.CreateDirectoryResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryAlreadyExistsException|CloudDirectory.InvalidArnException|CloudDirectory.ResourceNotFoundException|any>;
    /**
     * Creates a new Facet in a schema. Facet creation is allowed only in development
or applied schemas.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error ResourceNotFoundException   
     * @error FacetAlreadyExistsException   
     * @error InvalidRuleException   
     */
    createFacet(params: CloudDirectory.CreateFacetRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.FacetAlreadyExistsException|CloudDirectory.InvalidRuleException|any, data: CloudDirectory.CreateFacetResponse|any) => void): Request<CloudDirectory.CreateFacetResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.FacetAlreadyExistsException|CloudDirectory.InvalidRuleException|any>;
    /**
     * Creates an index object. See Indexing
[http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_indexing.html] 
for more information.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error DirectoryNotEnabledException   
     * @error ResourceNotFoundException   
     * @error FacetValidationException   
     * @error LinkNameAlreadyInUseException   
     * @error UnsupportedIndexTypeException   
     */
    createIndex(params: CloudDirectory.CreateIndexRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.ResourceNotFoundException|CloudDirectory.FacetValidationException|CloudDirectory.LinkNameAlreadyInUseException|CloudDirectory.UnsupportedIndexTypeException|any, data: CloudDirectory.CreateIndexResponse|any) => void): Request<CloudDirectory.CreateIndexResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.ResourceNotFoundException|CloudDirectory.FacetValidationException|CloudDirectory.LinkNameAlreadyInUseException|CloudDirectory.UnsupportedIndexTypeException|any>;
    /**
     * Creates an object in a Directory . Additionally attaches the object to a parent,
if a parent reference and LinkName is specified. An object is simply a
collection of Facet attributes. You can also use this API call to create a
policy object, if the facet from which you create the object is a policy facet.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error DirectoryNotEnabledException   
     * @error InvalidArnException   
     * @error ResourceNotFoundException   
     * @error FacetValidationException   
     * @error LinkNameAlreadyInUseException   
     * @error UnsupportedIndexTypeException   
     */
    createObject(params: CloudDirectory.CreateObjectRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.InvalidArnException|CloudDirectory.ResourceNotFoundException|CloudDirectory.FacetValidationException|CloudDirectory.LinkNameAlreadyInUseException|CloudDirectory.UnsupportedIndexTypeException|any, data: CloudDirectory.CreateObjectResponse|any) => void): Request<CloudDirectory.CreateObjectResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.InvalidArnException|CloudDirectory.ResourceNotFoundException|CloudDirectory.FacetValidationException|CloudDirectory.LinkNameAlreadyInUseException|CloudDirectory.UnsupportedIndexTypeException|any>;
    /**
     * Creates a new schema in a development state. A schema can exist in three phases:

 &amp;#42; Development: This is a mutable phase of the schema. All new schemas are in
   the development phase. Once the schema is finalized, it can be published.
   
   
 * Published: Published schemas are immutable and have a version associated with
   them.
   
   
 * Applied: Applied schemas are mutable in a way that allows you to add new
   schema facets. You can also add new, nonrequired attributes to existing
   schema facets. You can apply only published schemas to directories.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error SchemaAlreadyExistsException   
     * @error AccessDeniedException   
     */
    createSchema(params: CloudDirectory.CreateSchemaRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.SchemaAlreadyExistsException|CloudDirectory.AccessDeniedException|any, data: CloudDirectory.CreateSchemaResponse|any) => void): Request<CloudDirectory.CreateSchemaResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.SchemaAlreadyExistsException|CloudDirectory.AccessDeniedException|any>;
    /**
     * Deletes a directory. Only disabled directories can be deleted. A deleted
directory cannot be undone. Exercise extreme caution when deleting directories.
     *
     * @error ResourceNotFoundException   
     * @error DirectoryNotDisabledException   
     * @error InternalServiceException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error DirectoryDeletedException   
     */
    deleteDirectory(params: CloudDirectory.DeleteDirectoryRequest, callback?: (err: CloudDirectory.ResourceNotFoundException|CloudDirectory.DirectoryNotDisabledException|CloudDirectory.InternalServiceException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryDeletedException|any, data: CloudDirectory.DeleteDirectoryResponse|any) => void): Request<CloudDirectory.DeleteDirectoryResponse|any,CloudDirectory.ResourceNotFoundException|CloudDirectory.DirectoryNotDisabledException|CloudDirectory.InternalServiceException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryDeletedException|any>;
    /**
     * Deletes a given Facet . All attributes and Rule s associated with the facet will
be deleted. Only development schema facets are allowed deletion.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error ResourceNotFoundException   
     * @error FacetNotFoundException   
     * @error FacetInUseException   
     */
    deleteFacet(params: CloudDirectory.DeleteFacetRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.FacetNotFoundException|CloudDirectory.FacetInUseException|any, data: CloudDirectory.DeleteFacetResponse|any) => void): Request<CloudDirectory.DeleteFacetResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.FacetNotFoundException|CloudDirectory.FacetInUseException|any>;
    /**
     * Deletes an object and its associated attributes. Only objects with no children
and no parents can be deleted.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error DirectoryNotEnabledException   
     * @error ResourceNotFoundException   
     * @error ObjectNotDetachedException   
     */
    deleteObject(params: CloudDirectory.DeleteObjectRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.ResourceNotFoundException|CloudDirectory.ObjectNotDetachedException|any, data: CloudDirectory.DeleteObjectResponse|any) => void): Request<CloudDirectory.DeleteObjectResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.ResourceNotFoundException|CloudDirectory.ObjectNotDetachedException|any>;
    /**
     * Deletes a given schema. Schemas in a development and published state can only be
deleted.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error ResourceNotFoundException   
     * @error StillContainsLinksException   
     */
    deleteSchema(params: CloudDirectory.DeleteSchemaRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.StillContainsLinksException|any, data: CloudDirectory.DeleteSchemaResponse|any) => void): Request<CloudDirectory.DeleteSchemaResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.StillContainsLinksException|any>;
    /**
     * Detaches the specified object from the specified index.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error DirectoryNotEnabledException   
     * @error ResourceNotFoundException   
     * @error ObjectAlreadyDetachedException   
     * @error NotIndexException   
     */
    detachFromIndex(params: CloudDirectory.DetachFromIndexRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.ResourceNotFoundException|CloudDirectory.ObjectAlreadyDetachedException|CloudDirectory.NotIndexException|any, data: CloudDirectory.DetachFromIndexResponse|any) => void): Request<CloudDirectory.DetachFromIndexResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.ResourceNotFoundException|CloudDirectory.ObjectAlreadyDetachedException|CloudDirectory.NotIndexException|any>;
    /**
     * Detaches a given object from the parent object. The object that is to be
detached from the parent is specified by the link name.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error DirectoryNotEnabledException   
     * @error ResourceNotFoundException   
     */
    detachObject(params: CloudDirectory.DetachObjectRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.ResourceNotFoundException|any, data: CloudDirectory.DetachObjectResponse|any) => void): Request<CloudDirectory.DetachObjectResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.ResourceNotFoundException|any>;
    /**
     * Detaches a policy from an object.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error DirectoryNotEnabledException   
     * @error InvalidArnException   
     * @error ResourceNotFoundException   
     * @error NotPolicyException   
     */
    detachPolicy(params: CloudDirectory.DetachPolicyRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.InvalidArnException|CloudDirectory.ResourceNotFoundException|CloudDirectory.NotPolicyException|any, data: CloudDirectory.DetachPolicyResponse|any) => void): Request<CloudDirectory.DetachPolicyResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.InvalidArnException|CloudDirectory.ResourceNotFoundException|CloudDirectory.NotPolicyException|any>;
    /**
     * Disables the specified directory. Disabled directories cannot be read or written
to. Only enabled directories can be disabled. Disabled directories may be
reenabled.
     *
     * @error ResourceNotFoundException   
     * @error DirectoryDeletedException   
     * @error InternalServiceException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     */
    disableDirectory(params: CloudDirectory.DisableDirectoryRequest, callback?: (err: CloudDirectory.ResourceNotFoundException|CloudDirectory.DirectoryDeletedException|CloudDirectory.InternalServiceException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|any, data: CloudDirectory.DisableDirectoryResponse|any) => void): Request<CloudDirectory.DisableDirectoryResponse|any,CloudDirectory.ResourceNotFoundException|CloudDirectory.DirectoryDeletedException|CloudDirectory.InternalServiceException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|any>;
    /**
     * Enables the specified directory. Only disabled directories can be enabled. Once
enabled, the directory can then be read and written to.
     *
     * @error ResourceNotFoundException   
     * @error DirectoryDeletedException   
     * @error InternalServiceException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     */
    enableDirectory(params: CloudDirectory.EnableDirectoryRequest, callback?: (err: CloudDirectory.ResourceNotFoundException|CloudDirectory.DirectoryDeletedException|CloudDirectory.InternalServiceException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|any, data: CloudDirectory.EnableDirectoryResponse|any) => void): Request<CloudDirectory.EnableDirectoryResponse|any,CloudDirectory.ResourceNotFoundException|CloudDirectory.DirectoryDeletedException|CloudDirectory.InternalServiceException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|any>;
    /**
     * Retrieves metadata about a directory.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     */
    getDirectory(params: CloudDirectory.GetDirectoryRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|any, data: CloudDirectory.GetDirectoryResponse|any) => void): Request<CloudDirectory.GetDirectoryResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|any>;
    /**
     * Gets details of the Facet , such as Facet Name, Attributes, Rule s, or
ObjectType. You can call this on all kinds of schema facets -- published,
development, or applied.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error ResourceNotFoundException   
     * @error FacetNotFoundException   
     */
    getFacet(params: CloudDirectory.GetFacetRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.FacetNotFoundException|any, data: CloudDirectory.GetFacetResponse|any) => void): Request<CloudDirectory.GetFacetResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.FacetNotFoundException|any>;
    /**
     * Retrieves metadata about an object.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error DirectoryNotEnabledException   
     * @error ResourceNotFoundException   
     */
    getObjectInformation(params: CloudDirectory.GetObjectInformationRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.ResourceNotFoundException|any, data: CloudDirectory.GetObjectInformationResponse|any) => void): Request<CloudDirectory.GetObjectInformationResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.ResourceNotFoundException|any>;
    /**
     * Retrieves a JSON representation of the schema. See JSON Schema Format
[http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_schemas.html#jsonformat] 
for more information.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error ResourceNotFoundException   
     * @error ValidationException   
     */
    getSchemaAsJson(params: CloudDirectory.GetSchemaAsJsonRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.ValidationException|any, data: CloudDirectory.GetSchemaAsJsonResponse|any) => void): Request<CloudDirectory.GetSchemaAsJsonResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.ValidationException|any>;
    /**
     * Lists schemas applied to a directory.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error ResourceNotFoundException   
     * @error InvalidNextTokenException   
     */
    listAppliedSchemaArns(params: CloudDirectory.ListAppliedSchemaArnsRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.InvalidNextTokenException|any, data: CloudDirectory.ListAppliedSchemaArnsResponse|any) => void): Request<CloudDirectory.ListAppliedSchemaArnsResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.InvalidNextTokenException|any>;
    /**
     * Lists indices attached to an object.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error DirectoryNotEnabledException   
     * @error ResourceNotFoundException   
     */
    listAttachedIndices(params: CloudDirectory.ListAttachedIndicesRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.ResourceNotFoundException|any, data: CloudDirectory.ListAttachedIndicesResponse|any) => void): Request<CloudDirectory.ListAttachedIndicesResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.ResourceNotFoundException|any>;
    /**
     * Retrieves the ARNs of schemas in the development state.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error ResourceNotFoundException   
     * @error InvalidNextTokenException   
     */
    listDevelopmentSchemaArns(params: CloudDirectory.ListDevelopmentSchemaArnsRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.InvalidNextTokenException|any, data: CloudDirectory.ListDevelopmentSchemaArnsResponse|any) => void): Request<CloudDirectory.ListDevelopmentSchemaArnsResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.InvalidNextTokenException|any>;
    /**
     * Lists directories created within an account.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error InvalidNextTokenException   
     */
    listDirectories(params: CloudDirectory.ListDirectoriesRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.InvalidNextTokenException|any, data: CloudDirectory.ListDirectoriesResponse|any) => void): Request<CloudDirectory.ListDirectoriesResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.InvalidNextTokenException|any>;
    /**
     * Retrieves attributes attached to the facet.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error ResourceNotFoundException   
     * @error FacetNotFoundException   
     * @error InvalidNextTokenException   
     */
    listFacetAttributes(params: CloudDirectory.ListFacetAttributesRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.FacetNotFoundException|CloudDirectory.InvalidNextTokenException|any, data: CloudDirectory.ListFacetAttributesResponse|any) => void): Request<CloudDirectory.ListFacetAttributesResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.FacetNotFoundException|CloudDirectory.InvalidNextTokenException|any>;
    /**
     * Retrieves the names of facets that exist in a schema.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error ResourceNotFoundException   
     * @error InvalidNextTokenException   
     */
    listFacetNames(params: CloudDirectory.ListFacetNamesRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.InvalidNextTokenException|any, data: CloudDirectory.ListFacetNamesResponse|any) => void): Request<CloudDirectory.ListFacetNamesResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.InvalidNextTokenException|any>;
    /**
     * Lists objects attached to the specified index.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error DirectoryNotEnabledException   
     * @error ResourceNotFoundException   
     * @error NotIndexException   
     */
    listIndex(params: CloudDirectory.ListIndexRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.ResourceNotFoundException|CloudDirectory.NotIndexException|any, data: CloudDirectory.ListIndexResponse|any) => void): Request<CloudDirectory.ListIndexResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.ResourceNotFoundException|CloudDirectory.NotIndexException|any>;
    /**
     * Lists all attributes associated with an object. This also supports common
namespace prefix (key) listing. For example, if you want to retrieve all
attributes associated with facet1, key can be facet1 . If key is empty, all
attributes are returned in a paginated list.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error DirectoryNotEnabledException   
     * @error InvalidArnException   
     * @error ResourceNotFoundException   
     * @error InvalidNextTokenException   
     */
    listObjectAttributes(params: CloudDirectory.ListObjectAttributesRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.InvalidArnException|CloudDirectory.ResourceNotFoundException|CloudDirectory.InvalidNextTokenException|any, data: CloudDirectory.ListObjectAttributesResponse|any) => void): Request<CloudDirectory.ListObjectAttributesResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.InvalidArnException|CloudDirectory.ResourceNotFoundException|CloudDirectory.InvalidNextTokenException|any>;
    /**
     * Returns a paginated list of child objects associated with a given object.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error DirectoryNotEnabledException   
     * @error InvalidArnException   
     * @error ResourceNotFoundException   
     * @error InvalidNextTokenException   
     * @error NotNodeException   
     */
    listObjectChildren(params: CloudDirectory.ListObjectChildrenRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.InvalidArnException|CloudDirectory.ResourceNotFoundException|CloudDirectory.InvalidNextTokenException|CloudDirectory.NotNodeException|any, data: CloudDirectory.ListObjectChildrenResponse|any) => void): Request<CloudDirectory.ListObjectChildrenResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.InvalidArnException|CloudDirectory.ResourceNotFoundException|CloudDirectory.InvalidNextTokenException|CloudDirectory.NotNodeException|any>;
    /**
     * Lists parent objects associated with a given object in pagination fashion.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error DirectoryNotEnabledException   
     * @error InvalidArnException   
     * @error ResourceNotFoundException   
     * @error InvalidNextTokenException   
     * @error CannotListParentOfRootException   
     */
    listObjectParents(params: CloudDirectory.ListObjectParentsRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.InvalidArnException|CloudDirectory.ResourceNotFoundException|CloudDirectory.InvalidNextTokenException|CloudDirectory.CannotListParentOfRootException|any, data: CloudDirectory.ListObjectParentsResponse|any) => void): Request<CloudDirectory.ListObjectParentsResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.InvalidArnException|CloudDirectory.ResourceNotFoundException|CloudDirectory.InvalidNextTokenException|CloudDirectory.CannotListParentOfRootException|any>;
    /**
     * Returns policies attached to an object in pagination fashion.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error DirectoryNotEnabledException   
     * @error ResourceNotFoundException   
     * @error InvalidNextTokenException   
     */
    listObjectPolicies(params: CloudDirectory.ListObjectPoliciesRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.ResourceNotFoundException|CloudDirectory.InvalidNextTokenException|any, data: CloudDirectory.ListObjectPoliciesResponse|any) => void): Request<CloudDirectory.ListObjectPoliciesResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.ResourceNotFoundException|CloudDirectory.InvalidNextTokenException|any>;
    /**
     * Returns all of the ObjectIdentifiers to which a given policy is attached.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error DirectoryNotEnabledException   
     * @error InvalidArnException   
     * @error InvalidNextTokenException   
     * @error ResourceNotFoundException   
     * @error NotPolicyException   
     */
    listPolicyAttachments(params: CloudDirectory.ListPolicyAttachmentsRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.InvalidArnException|CloudDirectory.InvalidNextTokenException|CloudDirectory.ResourceNotFoundException|CloudDirectory.NotPolicyException|any, data: CloudDirectory.ListPolicyAttachmentsResponse|any) => void): Request<CloudDirectory.ListPolicyAttachmentsResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.InvalidArnException|CloudDirectory.InvalidNextTokenException|CloudDirectory.ResourceNotFoundException|CloudDirectory.NotPolicyException|any>;
    /**
     * Retrieves published schema ARNs.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error ResourceNotFoundException   
     * @error InvalidNextTokenException   
     */
    listPublishedSchemaArns(params: CloudDirectory.ListPublishedSchemaArnsRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.InvalidNextTokenException|any, data: CloudDirectory.ListPublishedSchemaArnsResponse|any) => void): Request<CloudDirectory.ListPublishedSchemaArnsResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.InvalidNextTokenException|any>;
    /**
     * Returns tags for a resource. Tagging is currently supported only for directories
with a limit of 50 tags per directory. All 50 tags are returned for a given
directory with this API call.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error ResourceNotFoundException   
     * @error InvalidTaggingRequestException   
     */
    listTagsForResource(params: CloudDirectory.ListTagsForResourceRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.InvalidTaggingRequestException|any, data: CloudDirectory.ListTagsForResourceResponse|any) => void): Request<CloudDirectory.ListTagsForResourceResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.InvalidTaggingRequestException|any>;
    /**
     * Lists all policies from the root of the Directory to the object specified. If
there are no policies present, an empty list is returned. If policies are
present, and if some objects don&#x27;t have the policies attached, it returns the
objectIdentifier for such objects. If policies are present, it returns
objectIdentifier, policyId, and policyType. Paths that don&#x27;t lead to the root
from the target object are ignored.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error DirectoryNotEnabledException   
     * @error InvalidArnException   
     * @error InvalidNextTokenException   
     * @error ResourceNotFoundException   
     */
    lookupPolicy(params: CloudDirectory.LookupPolicyRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.InvalidArnException|CloudDirectory.InvalidNextTokenException|CloudDirectory.ResourceNotFoundException|any, data: CloudDirectory.LookupPolicyResponse|any) => void): Request<CloudDirectory.LookupPolicyResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.InvalidArnException|CloudDirectory.InvalidNextTokenException|CloudDirectory.ResourceNotFoundException|any>;
    /**
     * Publishes a development schema with a version. If description and attributes are
specified, PublishSchema overrides the development schema description and
attributes. If not, the development schema description and attributes are used.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error ResourceNotFoundException   
     * @error SchemaAlreadyPublishedException   
     */
    publishSchema(params: CloudDirectory.PublishSchemaRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.SchemaAlreadyPublishedException|any, data: CloudDirectory.PublishSchemaResponse|any) => void): Request<CloudDirectory.PublishSchemaResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.SchemaAlreadyPublishedException|any>;
    /**
     * Allows a schema to be updated using JSON upload. Only available for development
schemas. See JSON Schema Format
[http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_schemas.html#jsonformat] 
for more information.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error InvalidSchemaDocException   
     * @error InvalidRuleException   
     */
    putSchemaFromJson(params: CloudDirectory.PutSchemaFromJsonRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.InvalidSchemaDocException|CloudDirectory.InvalidRuleException|any, data: CloudDirectory.PutSchemaFromJsonResponse|any) => void): Request<CloudDirectory.PutSchemaFromJsonResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.InvalidSchemaDocException|CloudDirectory.InvalidRuleException|any>;
    /**
     * Removes the specified facet from the specified object.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error DirectoryNotEnabledException   
     * @error ResourceNotFoundException   
     * @error FacetValidationException   
     */
    removeFacetFromObject(params: CloudDirectory.RemoveFacetFromObjectRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.ResourceNotFoundException|CloudDirectory.FacetValidationException|any, data: CloudDirectory.RemoveFacetFromObjectResponse|any) => void): Request<CloudDirectory.RemoveFacetFromObjectResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.ResourceNotFoundException|CloudDirectory.FacetValidationException|any>;
    /**
     * API for adding tags to a resource.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error ResourceNotFoundException   
     * @error InvalidTaggingRequestException   
     */
    tagResource(params: CloudDirectory.TagResourceRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.InvalidTaggingRequestException|any, data: CloudDirectory.TagResourceResponse|any) => void): Request<CloudDirectory.TagResourceResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.InvalidTaggingRequestException|any>;
    /**
     * API for removing tags from a resource.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error ResourceNotFoundException   
     * @error InvalidTaggingRequestException   
     */
    untagResource(params: CloudDirectory.UntagResourceRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.InvalidTaggingRequestException|any, data: CloudDirectory.UntagResourceResponse|any) => void): Request<CloudDirectory.UntagResourceResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|CloudDirectory.InvalidTaggingRequestException|any>;
    /**
     * Does the following:

 1. Adds new Attributes, Rules, or ObjectTypes.
    
    
 2. Updates existing Attributes, Rules, or ObjectTypes.
    
    
 3. Deletes existing Attributes, Rules, or ObjectTypes.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error InvalidFacetUpdateException   
     * @error ResourceNotFoundException   
     * @error FacetNotFoundException   
     * @error InvalidRuleException   
     */
    updateFacet(params: CloudDirectory.UpdateFacetRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.InvalidFacetUpdateException|CloudDirectory.ResourceNotFoundException|CloudDirectory.FacetNotFoundException|CloudDirectory.InvalidRuleException|any, data: CloudDirectory.UpdateFacetResponse|any) => void): Request<CloudDirectory.UpdateFacetResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.InvalidFacetUpdateException|CloudDirectory.ResourceNotFoundException|CloudDirectory.FacetNotFoundException|CloudDirectory.InvalidRuleException|any>;
    /**
     * Updates a given object&#x27;s attributes.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error DirectoryNotEnabledException   
     * @error ResourceNotFoundException   
     * @error FacetValidationException   
     */
    updateObjectAttributes(params: CloudDirectory.UpdateObjectAttributesRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.ResourceNotFoundException|CloudDirectory.FacetValidationException|any, data: CloudDirectory.UpdateObjectAttributesResponse|any) => void): Request<CloudDirectory.UpdateObjectAttributesResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.DirectoryNotEnabledException|CloudDirectory.ResourceNotFoundException|CloudDirectory.FacetValidationException|any>;
    /**
     * Updates the schema name with a new name. Only development schema names can be
updated.
     *
     * @error InternalServiceException   
     * @error InvalidArnException   
     * @error RetryableConflictException   
     * @error ValidationException   
     * @error LimitExceededException   
     * @error AccessDeniedException   
     * @error ResourceNotFoundException   
     */
    updateSchema(params: CloudDirectory.UpdateSchemaRequest, callback?: (err: CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|any, data: CloudDirectory.UpdateSchemaResponse|any) => void): Request<CloudDirectory.UpdateSchemaResponse|any,CloudDirectory.InternalServiceException|CloudDirectory.InvalidArnException|CloudDirectory.RetryableConflictException|CloudDirectory.ValidationException|CloudDirectory.LimitExceededException|CloudDirectory.AccessDeniedException|CloudDirectory.ResourceNotFoundException|any>;

  }

  export module CloudDirectory {
    
    export type Arn = string;
    
    export type Arns = Arn[];
    
    export type AttributeKeyAndValueList = AttributeKeyAndValue[];
    
    export type AttributeKeyList = AttributeKey[];
    
    export type AttributeName = string;
    
    export type BatchOperationIndex = number;
    
    export type BatchReadExceptionType = string;
    
    export type BatchReadOperationList = BatchReadOperation[];
    
    export type BatchReadOperationResponseList = BatchReadOperationResponse[];
    
    export type BatchReferenceName = string;
    
    export type BatchWriteExceptionType = string;
    
    export type BatchWriteOperationList = BatchWriteOperation[];
    
    export type BatchWriteOperationResponseList = BatchWriteOperationResponse[];
    
    export type BinaryAttributeValue = any;
    
    export type Bool = boolean;
    
    export type BooleanAttributeValue = boolean;
    
    export type ConsistencyLevel = string;
    
    export type Date = number;
    
    export type DatetimeAttributeValue = number;
    
    export type DirectoryArn = string;
    
    export type DirectoryList = Directory[];
    
    export type DirectoryName = string;
    
    export type DirectoryState = string;
    
    export type ExceptionMessage = string;
    
    export type FacetAttributeList = FacetAttribute[];
    
    export type FacetAttributeType = string;
    
    export type FacetAttributeUpdateList = FacetAttributeUpdate[];
    
    export type FacetName = string;
    
    export type FacetNameList = FacetName[];
    
    export type IndexAttachmentList = IndexAttachment[];
    
    export type LinkName = string;
    
    export type LinkNameToObjectIdentifierMap = {[key:string]: ObjectIdentifier};
    
    export type NextToken = string;
    
    export type NumberAttributeValue = string;
    
    export type NumberResults = number;
    
    export type ObjectAttributeRangeList = ObjectAttributeRange[];
    
    export type ObjectAttributeUpdateList = ObjectAttributeUpdate[];
    
    export type ObjectIdentifier = string;
    
    export type ObjectIdentifierList = ObjectIdentifier[];
    
    export type ObjectIdentifierToLinkNameMap = {[key:string]: LinkName};
    
    export type ObjectType = string;
    
    export type PathString = string;
    
    export type PolicyAttachmentList = PolicyAttachment[];
    
    export type PolicyToPathList = PolicyToPath[];
    
    export type PolicyType = string;
    
    export type RangeMode = string;
    
    export type RequiredAttributeBehavior = string;
    
    export type RuleKey = string;
    
    export type RuleMap = {[key:string]: Rule};
    
    export type RuleParameterKey = string;
    
    export type RuleParameterMap = {[key:string]: RuleParameterValue};
    
    export type RuleParameterValue = string;
    
    export type RuleType = string;
    
    export type SchemaFacetList = SchemaFacet[];
    
    export type SchemaJsonDocument = string;
    
    export type SchemaName = string;
    
    export type SelectorObjectReference = string;
    
    export type StringAttributeValue = string;
    
    export type TagKey = string;
    
    export type TagKeyList = TagKey[];
    
    export type TagList = Tag[];
    
    export type TagValue = string;
    
    export type TagsNumberResults = number;
    
    export type UpdateActionType = string;
    
    export type Version = string;

    export interface AccessDeniedException {
        Message?: ExceptionMessage;
    }
    export interface AddFacetToObjectRequest {
        /** ARN associated with the Directory where the object resides. For more
information, see arns . **/
        DirectoryArn: Arn;
        /** Identifiers for the facet that you are adding to the object. **/
        SchemaFacet: SchemaFacet;
        /** Attributes on the facet you are adding to the object. **/
        ObjectAttributeList?: AttributeKeyAndValueList;
        /** A reference to the object you are adding the specified facet to. **/
        ObjectReference: ObjectReference;
    }
    export interface AddFacetToObjectResponse {
    }
    export interface ApplySchemaRequest {
        /** Published schema ARN that needs to be copied. For more information, see arns . **/
        PublishedSchemaArn: Arn;
        /** ARN associated with the Directory into which the schema is copied. For more
information, see arns . **/
        DirectoryArn: Arn;
    }
    export interface ApplySchemaResponse {
        /** Applied schema ARN associated with the copied schema in the Directory . You can
use this ARN to describe the schema information applied on this directory. For
more information, see arns . **/
        AppliedSchemaArn?: Arn;
        /** ARN associated with the Directory . For more information, see arns . **/
        DirectoryArn?: Arn;
    }
    export interface AttachObjectRequest {
        /** ARN associated with the Directory where both objects reside. For more
information, see arns . **/
        DirectoryArn: Arn;
        /** Parent object reference. **/
        ParentReference: ObjectReference;
        /** Child object reference to be attached to the object. **/
        ChildReference: ObjectReference;
        /** Link name with which the child object is attached to the parent. **/
        LinkName: LinkName;
    }
    export interface AttachObjectResponse {
        /** Attached ObjectIdentifier, which is the child ObjectIdentifier. **/
        AttachedObjectIdentifier?: ObjectIdentifier;
    }
    export interface AttachPolicyRequest {
        /** ARN associated with the Directory where both objects reside. For more
information, see arns . **/
        DirectoryArn?: Arn;
        /** Reference associated with the policy object. **/
        PolicyReference: ObjectReference;
        /** Reference that identifies the object to which the policy will be attached. **/
        ObjectReference: ObjectReference;
    }
    export interface AttachPolicyResponse {
    }
    export interface AttachToIndexRequest {
        /** The ARN of the directory where the object and index exist. **/
        DirectoryArn: Arn;
        /** A reference to the index that you are attaching the object to. **/
        IndexReference: ObjectReference;
        /** A reference to the object that you are attaching to the index. **/
        TargetReference: ObjectReference;
    }
    export interface AttachToIndexResponse {
        /** The ObjectIdentifier of the object that was attached to the index. **/
        AttachedObjectIdentifier?: ObjectIdentifier;
    }
    export interface AttributeKey {
        /** The ARN of the schema that contains the facet and attribute. **/
        SchemaArn: Arn;
        /** The name of the facet the attribute exists within. **/
        FacetName: FacetName;
        /** The name of the attribute. **/
        Name: AttributeName;
    }
    export interface AttributeKeyAndValue {
        /** The key of the attribute. **/
        Key: AttributeKey;
        /** The value of the attribute. **/
        Value: TypedAttributeValue;
    }
    export interface BatchAddFacetToObject {
        /** Represents the facet being added to the object. **/
        SchemaFacet: SchemaFacet;
        /** The attributes to set on the object. **/
        ObjectAttributeList: AttributeKeyAndValueList;
        /** A reference to the object being mutated. **/
        ObjectReference: ObjectReference;
    }
    export interface BatchAddFacetToObjectResponse {
    }
    export interface BatchAttachObject {
        /** Parent object reference. **/
        ParentReference: ObjectReference;
        /** Child object reference to be attached to the object. **/
        ChildReference: ObjectReference;
        /** The name of the link. **/
        LinkName: LinkName;
    }
    export interface BatchAttachObjectResponse {
        /** The ObjectIdentifier of the object that has been attached. **/
        attachedObjectIdentifier?: ObjectIdentifier;
    }
    export interface BatchCreateObject {
        /** List of FacetArns that will be associated with the object. For more information,
see arns . **/
        SchemaFacet: SchemaFacetList;
        /** Attribute map, which contains an attribute ARN as the key and attribute value as
the map value. **/
        ObjectAttributeList: AttributeKeyAndValueList;
        /** If specified, the parent reference to which this object will be attached. **/
        ParentReference: ObjectReference;
        /** The name of the link. **/
        LinkName: LinkName;
        /** The batch reference name. See Batches
[http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_advanced.html#batches] 
for more information. **/
        BatchReferenceName: BatchReferenceName;
    }
    export interface BatchCreateObjectResponse {
        /** ID associated with the object. **/
        ObjectIdentifier?: ObjectIdentifier;
    }
    export interface BatchDeleteObject {
        /** Reference that identifies the object. **/
        ObjectReference: ObjectReference;
    }
    export interface BatchDeleteObjectResponse {
    }
    export interface BatchDetachObject {
        /** Parent reference from which the object with the specified link name is detached. **/
        ParentReference: ObjectReference;
        /** The name of the link. **/
        LinkName: LinkName;
        /** The batch reference name. See Batches
[http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_advanced.html#batches] 
for more information. **/
        BatchReferenceName: BatchReferenceName;
    }
    export interface BatchDetachObjectResponse {
        /** The ObjectIdentifier of the detached object. **/
        detachedObjectIdentifier?: ObjectIdentifier;
    }
    export interface BatchListObjectAttributes {
        /** Reference of the object whose attributes need to be listed. **/
        ObjectReference: ObjectReference;
        /** Token used for pagination. **/
        NextToken?: NextToken;
        /** Maximum number of items to be retrieved in a single call. This is an approximate
number. **/
        MaxResults?: NumberResults;
    }
    export interface BatchListObjectAttributesResponse {
        /** Attributes map associated with the object. AttributeArn is the key; attribute
value is the value. **/
        Attributes?: AttributeKeyAndValueList;
        /** Token used for pagination. **/
        NextToken?: NextToken;
    }
    export interface BatchListObjectChildren {
        /** Reference of the object for which child objects are being listed. **/
        ObjectReference: ObjectReference;
        /** Token used for pagination. **/
        NextToken?: NextToken;
        /** Maximum number of items to be retrieved in a single call. This is an approximate
number. **/
        MaxResults?: NumberResults;
    }
    export interface BatchListObjectChildrenResponse {
        /** Children structure, which is a map with key as the LinkName and ObjectIdentifier
as the value. **/
        Children?: LinkNameToObjectIdentifierMap;
        /** Token used for pagination. **/
        NextToken?: NextToken;
    }
    export interface BatchReadException {
        /** Type of exception, such as InvalidArnException. **/
        Type?: BatchReadExceptionType;
        /** Exception message associated with the failure. **/
        Message?: ExceptionMessage;
    }
    export interface BatchReadOperation {
        /** Lists all attributes associated with an object. **/
        ListObjectAttributes?: BatchListObjectAttributes;
        /** Returns a paginated list of child objects that are associated with a given
object. **/
        ListObjectChildren?: BatchListObjectChildren;
    }
    export interface BatchReadOperationResponse {
        /** Identifies which operation in a batch has succeeded. **/
        SuccessfulResponse?: BatchReadSuccessfulResponse;
        /** Identifies which operation in a batch has failed. **/
        ExceptionResponse?: BatchReadException;
    }
    export interface BatchReadRequest {
        /** ARN associated with the Directory . For more information, see arns . **/
        DirectoryArn: Arn;
        /** List of operations that are part of the batch. **/
        Operations: BatchReadOperationList;
        /** Represents the manner and timing in which the successful write or update of an
object is reflected in a subsequent read operation of that same object. **/
        ConsistencyLevel?: ConsistencyLevel;
    }
    export interface BatchReadResponse {
        /** List of all the responses for each batch read. **/
        Responses?: BatchReadOperationResponseList;
    }
    export interface BatchReadSuccessfulResponse {
        /** Lists all attributes associated with an object. **/
        ListObjectAttributes?: BatchListObjectAttributesResponse;
        /** Returns a paginated list of child objects associated with a given object. **/
        ListObjectChildren?: BatchListObjectChildrenResponse;
    }
    export interface BatchRemoveFacetFromObject {
        /** The facet to remove from the object. **/
        SchemaFacet: SchemaFacet;
        /** A reference to the object whose facet will be removed. **/
        ObjectReference: ObjectReference;
    }
    export interface BatchRemoveFacetFromObjectResponse {
    }
    export interface BatchUpdateObjectAttributes {
        /** Reference that identifies the object. **/
        ObjectReference: ObjectReference;
        /** Attributes update structure. **/
        AttributeUpdates: ObjectAttributeUpdateList;
    }
    export interface BatchUpdateObjectAttributesResponse {
        /** ID associated with the object. **/
        ObjectIdentifier?: ObjectIdentifier;
    }
    export interface BatchWriteException {
        Index?: BatchOperationIndex;
        Type?: BatchWriteExceptionType;
        Message?: ExceptionMessage;
    }
    export interface BatchWriteOperation {
        /** Creates an object. **/
        CreateObject?: BatchCreateObject;
        /** Attaches an object to a Directory . **/
        AttachObject?: BatchAttachObject;
        /** Detaches an object from a Directory . **/
        DetachObject?: BatchDetachObject;
        /** Update a given object&#x27;s attributes. **/
        UpdateObjectAttributes?: BatchUpdateObjectAttributes;
        /** Deletes an object in a Directory . **/
        DeleteObject?: BatchDeleteObject;
        /** Batch operation adding a facet to an object. **/
        AddFacetToObject?: BatchAddFacetToObject;
        /** Batch operation removing a facet from an object. **/
        RemoveFacetFromObject?: BatchRemoveFacetFromObject;
    }
    export interface BatchWriteOperationResponse {
        /** Creates an object in a Directory . **/
        CreateObject?: BatchCreateObjectResponse;
        /** Attaches an object to a Directory . **/
        AttachObject?: BatchAttachObjectResponse;
        /** Detaches an object from a Directory . **/
        DetachObject?: BatchDetachObjectResponse;
        /** Updates a given object’s attributes. **/
        UpdateObjectAttributes?: BatchUpdateObjectAttributesResponse;
        /** Deletes an object in a Directory . **/
        DeleteObject?: BatchDeleteObjectResponse;
        /** Result of an add facet to object batch operation. **/
        AddFacetToObject?: BatchAddFacetToObjectResponse;
        /** Result of a batch remove facet from object operation. **/
        RemoveFacetFromObject?: BatchRemoveFacetFromObjectResponse;
    }
    export interface BatchWriteRequest {
        /** ARN associated with the Directory . For more information, see arns . **/
        DirectoryArn: Arn;
        /** List of operations that are part of the batch. **/
        Operations: BatchWriteOperationList;
    }
    export interface BatchWriteResponse {
        /** List of all the responses for each batch write. **/
        Responses?: BatchWriteOperationResponseList;
    }
    export interface CannotListParentOfRootException {
        Message?: ExceptionMessage;
    }
    export interface CreateDirectoryRequest {
        /** Name of the Directory . Should be unique per account, per region. **/
        Name: DirectoryName;
        /** ARN of the published schema that will be copied into the data Directory . For
more information, see arns . **/
        SchemaArn: Arn;
    }
    export interface CreateDirectoryResponse {
        /** ARN associated with the Directory . For more information, see arns . **/
        DirectoryArn: DirectoryArn;
        /** Name of the Directory . **/
        Name: DirectoryName;
        /** The root object node of the created directory. **/
        ObjectIdentifier: ObjectIdentifier;
        /** ARN of the published schema in the Directory . Once a published schema is copied
into the directory, it has its own ARN which is referred to applied schema ARN.
For more information, see arns . **/
        AppliedSchemaArn: Arn;
    }
    export interface CreateFacetRequest {
        /** Schema ARN in which the new Facet will be created. For more information, see 
arns . **/
        SchemaArn: Arn;
        /** Name of the Facet , which is unique for a given schema. **/
        Name: FacetName;
        /** Attributes associated with the Facet .e **/
        Attributes?: FacetAttributeList;
        /** Specifies whether a given object created from this facet is of type Node, Leaf
Node, Policy or Index.

 &amp;#42; Node: Can have multiple children but one parent.
   
   

 * Leaf Node: Cannot have children but can have multiple parents.
   
   

 * Policy: Allows you to store a policy document and policy type. For more
   information, see Policies
   [http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#policies] 
   .
   
   

 * Index: Can be created with the Index API. **/
        ObjectType: ObjectType;
    }
    export interface CreateFacetResponse {
    }
    export interface CreateIndexRequest {
        /** The ARN of the directory where the index should be created. **/
        DirectoryArn: Arn;
        /** Specifies the Attributes that should be indexed on. Currently only a single
attribute is supported. **/
        OrderedIndexedAttributeList: AttributeKeyList;
        /** Indicates whether objects with the same indexed attribute value can be added to
the index. **/
        IsUnique: Bool;
        /** A reference to the parent object that contains the index object. **/
        ParentReference?: ObjectReference;
        /** The name of the link between the parent object and the index object. **/
        LinkName?: LinkName;
    }
    export interface CreateIndexResponse {
        /** The ObjectIdentifier of the index created by this operation. **/
        ObjectIdentifier?: ObjectIdentifier;
    }
    export interface CreateObjectRequest {
        /** ARN associated with the Directory in which the object will be created. For more
information, see arns . **/
        DirectoryArn: Arn;
        /** List of facet ARNs to be associated with the object. For more information, see 
arns . **/
        SchemaFacets: SchemaFacetList;
        /** Attribute map whose attribute ARN contains the key and attribute value as the
map value. **/
        ObjectAttributeList?: AttributeKeyAndValueList;
        /** If specified, the parent reference to which this object will be attached. **/
        ParentReference?: ObjectReference;
        /** The name of link that is used to attach this object to a parent. **/
        LinkName?: LinkName;
    }
    export interface CreateObjectResponse {
        /** Identifier associated with the object. **/
        ObjectIdentifier?: ObjectIdentifier;
    }
    export interface CreateSchemaRequest {
        /** Name associated with the schema. This is unique to each account and in each
region. **/
        Name: SchemaName;
    }
    export interface CreateSchemaResponse {
        /** ARN associated with the schema. For more information, see arns . **/
        SchemaArn?: Arn;
    }
    export interface DeleteDirectoryRequest {
        /** The ARN of the directory to delete. **/
        DirectoryArn: Arn;
    }
    export interface DeleteDirectoryResponse {
        /** The ARN of the deleted directory. **/
        DirectoryArn: Arn;
    }
    export interface DeleteFacetRequest {
        /** ARN associated with the Facet . For more information, see arns . **/
        SchemaArn: Arn;
        /** The name of the facet to delete. **/
        Name: FacetName;
    }
    export interface DeleteFacetResponse {
    }
    export interface DeleteObjectRequest {
        /** ARN associated with the Directory where the object resides. For more
information, see arns . **/
        DirectoryArn: Arn;
        /** Reference that identifies the object. **/
        ObjectReference: ObjectReference;
    }
    export interface DeleteObjectResponse {
    }
    export interface DeleteSchemaRequest {
        /** ARN of the development schema. For more information, see arns . **/
        SchemaArn: Arn;
    }
    export interface DeleteSchemaResponse {
        /** Input ARN that is returned as part of the response. For more information, see 
arns . **/
        SchemaArn?: Arn;
    }
    export interface DetachFromIndexRequest {
        /** The ARN of the directory the index and object exist in. **/
        DirectoryArn: Arn;
        /** A reference to the index object. **/
        IndexReference: ObjectReference;
        /** A reference to the object being detached from the index. **/
        TargetReference: ObjectReference;
    }
    export interface DetachFromIndexResponse {
        /** The ObjectIdentifier of the object that was detached from the index. **/
        DetachedObjectIdentifier?: ObjectIdentifier;
    }
    export interface DetachObjectRequest {
        /** ARN associated with the Directory where objects reside. For more information,
see arns . **/
        DirectoryArn: Arn;
        /** Parent reference from which the object with the specified link name is detached. **/
        ParentReference: ObjectReference;
        /** Link name associated with the object that needs to be detached. **/
        LinkName: LinkName;
    }
    export interface DetachObjectResponse {
        /** The ObjectIdentifier that was detached from the object. **/
        DetachedObjectIdentifier?: ObjectIdentifier;
    }
    export interface DetachPolicyRequest {
        /** ARN associated with the Directory where both objects reside. For more
information, see arns . **/
        DirectoryArn: Arn;
        /** Reference that identifies the policy object. **/
        PolicyReference: ObjectReference;
        /** Reference that identifies the object whose policy object will be detached. **/
        ObjectReference: ObjectReference;
    }
    export interface DetachPolicyResponse {
    }
    export interface Directory {
        /** The name of the directory. **/
        Name?: DirectoryName;
        /** ARN associated with the directory. For more information, see arns . **/
        DirectoryArn?: DirectoryArn;
        /** The state of the directory. Can be either Enabled, Disabled, or Deleted. **/
        State?: DirectoryState;
        /** The date and time when the directory was created. **/
        CreationDateTime?: Date;
    }
    export interface DirectoryAlreadyExistsException {
        Message?: ExceptionMessage;
    }
    export interface DirectoryDeletedException {
        Message?: ExceptionMessage;
    }
    export interface DirectoryNotDisabledException {
        Message?: ExceptionMessage;
    }
    export interface DirectoryNotEnabledException {
        Message?: ExceptionMessage;
    }
    export interface DisableDirectoryRequest {
        /** The ARN of the directory to disable. **/
        DirectoryArn: Arn;
    }
    export interface DisableDirectoryResponse {
        /** The ARN of the directory that has been disabled. **/
        DirectoryArn: Arn;
    }
    export interface EnableDirectoryRequest {
        /** The ARN of the directory to enable. **/
        DirectoryArn: Arn;
    }
    export interface EnableDirectoryResponse {
        /** The ARN of the enabled directory. **/
        DirectoryArn: Arn;
    }
    export interface Facet {
        /** The name of the Facet . **/
        Name?: FacetName;
        /** Object type associated with the facet. See CreateFacetRequest$ObjectType for
more details. **/
        ObjectType?: ObjectType;
    }
    export interface FacetAlreadyExistsException {
        Message?: ExceptionMessage;
    }
    export interface FacetAttribute {
        /** The name of the facet attribute. **/
        Name: AttributeName;
        /** A facet attribute consists of either a definition or a reference. This structure
contains the attribute definition. See Attribute References
[http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_advanced.html#attributereferences] 
for more information. **/
        AttributeDefinition?: FacetAttributeDefinition;
        /** Attribute reference associated with the attribute. See Attribute References
[http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_advanced.html#attributereferences] 
for more information. **/
        AttributeReference?: FacetAttributeReference;
        /** The required behavior of the FacetAttribute. **/
        RequiredBehavior?: RequiredAttributeBehavior;
    }
    export interface FacetAttributeDefinition {
        /** The type of the attribute. **/
        Type: FacetAttributeType;
        /** The default value of the attribute (if configured). **/
        DefaultValue?: TypedAttributeValue;
        /** Whether the attribute is mutable or not. **/
        IsImmutable?: Bool;
        /** Validation rules attached to the attribute definition. **/
        Rules?: RuleMap;
    }
    export interface FacetAttributeReference {
        /** Target facet name associated with the facet reference. See Attribute References
[http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_advanced.html#attributereferences] 
for more information. **/
        TargetFacetName: FacetName;
        /** Target attribute name associated with the facet reference. See Attribute
References
[http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_advanced.html#attributereferences] 
for more information. **/
        TargetAttributeName: AttributeName;
    }
    export interface FacetAttributeUpdate {
        /** The attribute to update. **/
        Attribute?: FacetAttribute;
        /** The action to perform when updating the attribute. **/
        Action?: UpdateActionType;
    }
    export interface FacetInUseException {
        Message?: ExceptionMessage;
    }
    export interface FacetNotFoundException {
        Message?: ExceptionMessage;
    }
    export interface FacetValidationException {
        Message?: ExceptionMessage;
    }
    export interface GetDirectoryRequest {
        /** The ARN of the directory. **/
        DirectoryArn: DirectoryArn;
    }
    export interface GetDirectoryResponse {
        /** Metadata about the directory. **/
        Directory: Directory;
    }
    export interface GetFacetRequest {
        /** ARN associated with the Facet . For more information, see arns . **/
        SchemaArn: Arn;
        /** The name of the facet to retrieve. **/
        Name: FacetName;
    }
    export interface GetFacetResponse {
        /** Facet structure associated with the facet. **/
        Facet?: Facet;
    }
    export interface GetObjectInformationRequest {
        /** The ARN of the directory being retrieved. **/
        DirectoryArn: Arn;
        /** A reference to the object. **/
        ObjectReference: ObjectReference;
        /** The consistency level at which to retrieve the object information. **/
        ConsistencyLevel?: ConsistencyLevel;
    }
    export interface GetObjectInformationResponse {
        /** The facets attached to the specified object. **/
        SchemaFacets?: SchemaFacetList;
        /** The ObjectIdentifier of the specified object. **/
        ObjectIdentifier?: ObjectIdentifier;
    }
    export interface GetSchemaAsJsonRequest {
        /** The ARN of the schema to retrieve. **/
        SchemaArn: Arn;
    }
    export interface GetSchemaAsJsonResponse {
        /** The name of the retrieved schema. **/
        Name?: SchemaName;
        /** The JSON representation of the schema document. **/
        Document?: SchemaJsonDocument;
    }
    export interface IndexAttachment {
        /** The indexed attribute values. **/
        IndexedAttributes?: AttributeKeyAndValueList;
        /** The ObjectIdentifier of the object attached to the index. **/
        ObjectIdentifier?: ObjectIdentifier;
    }
    export interface IndexedAttributeMissingException {
        Message?: ExceptionMessage;
    }
    export interface InternalServiceException {
        Message?: ExceptionMessage;
    }
    export interface InvalidArnException {
        Message?: ExceptionMessage;
    }
    export interface InvalidAttachmentException {
        Message?: ExceptionMessage;
    }
    export interface InvalidFacetUpdateException {
        Message?: ExceptionMessage;
    }
    export interface InvalidNextTokenException {
        Message?: ExceptionMessage;
    }
    export interface InvalidRuleException {
        Message?: ExceptionMessage;
    }
    export interface InvalidSchemaDocException {
        Message?: ExceptionMessage;
    }
    export interface InvalidTaggingRequestException {
        Message?: ExceptionMessage;
    }
    export interface LimitExceededException {
        Message?: ExceptionMessage;
    }
    export interface LinkNameAlreadyInUseException {
        Message?: ExceptionMessage;
    }
    export interface ListAppliedSchemaArnsRequest {
        /** The ARN of the directory you are listing. **/
        DirectoryArn: Arn;
        /** The pagination token. **/
        NextToken?: NextToken;
        /** The maximum number of results to retrieve. **/
        MaxResults?: NumberResults;
    }
    export interface ListAppliedSchemaArnsResponse {
        /** The ARNs of schemas that are applied to the directory. **/
        SchemaArns?: Arns;
        /** The pagination token. **/
        NextToken?: NextToken;
    }
    export interface ListAttachedIndicesRequest {
        /** The ARN of the directory. **/
        DirectoryArn: Arn;
        /** A reference to the object to that has indices attached. **/
        TargetReference: ObjectReference;
        /** The pagination token. **/
        NextToken?: NextToken;
        /** The maximum number of results to retrieve. **/
        MaxResults?: NumberResults;
        /** The consistency level to use for this operation. **/
        ConsistencyLevel?: ConsistencyLevel;
    }
    export interface ListAttachedIndicesResponse {
        /** The indices attached to the specified object. **/
        IndexAttachments?: IndexAttachmentList;
        /** The pagination token. **/
        NextToken?: NextToken;
    }
    export interface ListDevelopmentSchemaArnsRequest {
        /** The pagination token. **/
        NextToken?: NextToken;
        /** The maximum number of results to retrieve. **/
        MaxResults?: NumberResults;
    }
    export interface ListDevelopmentSchemaArnsResponse {
        /** The ARNs of retrieved development schemas. **/
        SchemaArns?: Arns;
        /** The pagination token. **/
        NextToken?: NextToken;
    }
    export interface ListDirectoriesRequest {
        /** The pagination token. **/
        NextToken?: NextToken;
        /** The maximum number of results to retrieve. **/
        MaxResults?: NumberResults;
        /** The state of the directories in the list. Can be either Enabled, Disabled, or
Deleted. **/
        state?: DirectoryState;
    }
    export interface ListDirectoriesResponse {
        /** Lists all directories associated with your account in pagination fashion. **/
        Directories: DirectoryList;
        /** The pagination token. **/
        NextToken?: NextToken;
    }
    export interface ListFacetAttributesRequest {
        /** The ARN of the schema where the facet resides. **/
        SchemaArn: Arn;
        /** The name of the facet whose attributes will be retrieved. **/
        Name: FacetName;
        /** The pagination token. **/
        NextToken?: NextToken;
        /** The maximum number of results to retrieve. **/
        MaxResults?: NumberResults;
    }
    export interface ListFacetAttributesResponse {
        /** The attributes attached to the facet. **/
        Attributes?: FacetAttributeList;
        /** The pagination token. **/
        NextToken?: NextToken;
    }
    export interface ListFacetNamesRequest {
        /** The ARN to retrieve facet names from. **/
        SchemaArn: Arn;
        /** The pagination token. **/
        NextToken?: NextToken;
        /** The maximum number of results to retrieve **/
        MaxResults?: NumberResults;
    }
    export interface ListFacetNamesResponse {
        /** The names of facets that exist within the schema. **/
        FacetNames?: FacetNameList;
        /** The pagination token. **/
        NextToken?: NextToken;
    }
    export interface ListIndexRequest {
        /** The ARN of the directory that the index exists in. **/
        DirectoryArn: Arn;
        /** Specifies the ranges of indexed values that you want to query. **/
        RangesOnIndexedValues?: ObjectAttributeRangeList;
        /** The reference to the index to list. **/
        IndexReference: ObjectReference;
        /** The maximum number of results to retrieve from the index. **/
        MaxResults?: NumberResults;
        /** The pagination token. **/
        NextToken?: NextToken;
        /** The consistency level to execute the request at. **/
        ConsistencyLevel?: ConsistencyLevel;
    }
    export interface ListIndexResponse {
        /** The objects and indexed values attached to the index. **/
        IndexAttachments?: IndexAttachmentList;
        /** The pagination token. **/
        NextToken?: NextToken;
    }
    export interface ListObjectAttributesRequest {
        /** ARN associated with the Directory where the object resides. For more
information, see arns . **/
        DirectoryArn: Arn;
        /** Reference that identifies the object whose attributes will be listed. **/
        ObjectReference: ObjectReference;
        /** Token used for pagination. **/
        NextToken?: NextToken;
        /** Maximum number of items to be retrieved in a single call. This is an approximate
number. **/
        MaxResults?: NumberResults;
        /** Represents the manner and timing in which the successful write or update of an
object is reflected in a subsequent read operation of that same object. **/
        ConsistencyLevel?: ConsistencyLevel;
    }
    export interface ListObjectAttributesResponse {
        /** Attributes map associated with the object. AttributeArn is the key, and
attribute value is the value. **/
        Attributes?: AttributeKeyAndValueList;
        /** Token used for pagination. **/
        NextToken?: NextToken;
    }
    export interface ListObjectChildrenRequest {
        /** ARN associated with the Directory where the object resides. For more
information, see arns . **/
        DirectoryArn: Arn;
        /** Reference that identifies the object for which child objects are being listed. **/
        ObjectReference: ObjectReference;
        /** Token used for pagination. **/
        NextToken?: NextToken;
        /** Maximum number of items to be retrieved in a single call. This is an approximate
number. **/
        MaxResults?: NumberResults;
        /** Represents the manner and timing in which the successful write or update of an
object is reflected in a subsequent read operation of that same object. **/
        ConsistencyLevel?: ConsistencyLevel;
    }
    export interface ListObjectChildrenResponse {
        /** Children structure, which is a map with key as the LinkName and ObjectIdentifier
as the value. **/
        Children?: LinkNameToObjectIdentifierMap;
        /** Token used for pagination. **/
        NextToken?: NextToken;
    }
    export interface ListObjectParentsRequest {
        /** ARN associated with the Directory where the object resides. For more
information, see arns . **/
        DirectoryArn: Arn;
        /** Reference that identifies the object for which parent objects are being listed. **/
        ObjectReference: ObjectReference;
        /** Token used for pagination. **/
        NextToken?: NextToken;
        /** Maximum number of items to be retrieved in a single call. This is an approximate
number. **/
        MaxResults?: NumberResults;
        /** Represents the manner and timing in which the successful write or update of an
object is reflected in a subsequent read operation of that same object. **/
        ConsistencyLevel?: ConsistencyLevel;
    }
    export interface ListObjectParentsResponse {
        /** Parent structure, which is a map with key as the ObjectIdentifier and LinkName
as the value. **/
        Parents?: ObjectIdentifierToLinkNameMap;
        /** Token used for pagination. **/
        NextToken?: NextToken;
    }
    export interface ListObjectPoliciesRequest {
        /** ARN associated with the Directory where objects reside. For more information,
see arns . **/
        DirectoryArn: Arn;
        /** Reference that identifies the object for which policies will be listed. **/
        ObjectReference: ObjectReference;
        /** Token used for pagination. **/
        NextToken?: NextToken;
        /** Maximum number of items to be retrieved in a single call. This is an approximate
number. **/
        MaxResults?: NumberResults;
        /** Represents the manner and timing in which the successful write or update of an
object is reflected in a subsequent read operation of that same object. **/
        ConsistencyLevel?: ConsistencyLevel;
    }
    export interface ListObjectPoliciesResponse {
        /** List of policy ObjectIdentifiers, that are attached to the object. **/
        AttachedPolicyIds?: ObjectIdentifierList;
        /** Token used for pagination. **/
        NextToken?: NextToken;
    }
    export interface ListPolicyAttachmentsRequest {
        /** ARN associated with the Directory where objects reside. For more information,
see arns . **/
        DirectoryArn: Arn;
        /** Reference that identifies the policy object. **/
        PolicyReference: ObjectReference;
        /** Token used for pagination. **/
        NextToken?: NextToken;
        /** Maximum number of items to be retrieved in a single call. This is an approximate
number. **/
        MaxResults?: NumberResults;
        /** Represents the manner and timing in which the successful write or update of an
object is reflected in a subsequent read operation of that same object. **/
        ConsistencyLevel?: ConsistencyLevel;
    }
    export interface ListPolicyAttachmentsResponse {
        /** List of ObjectIdentifiers to which the policy is attached. **/
        ObjectIdentifiers?: ObjectIdentifierList;
        /** Token used for pagination. **/
        NextToken?: NextToken;
    }
    export interface ListPublishedSchemaArnsRequest {
        /** The pagination token. **/
        NextToken?: NextToken;
        /** The maximum number of results to retrieve. **/
        MaxResults?: NumberResults;
    }
    export interface ListPublishedSchemaArnsResponse {
        /** The ARNs of published schemas. **/
        SchemaArns?: Arns;
        /** The pagination token. **/
        NextToken?: NextToken;
    }
    export interface ListTagsForResourceRequest {
        /** ARN of the resource. Tagging is only supported for directories. **/
        ResourceArn: Arn;
        /** Next token used for pagination. This is for future use. Currently pagination is
not supported for tagging. **/
        NextToken?: NextToken;
        /** The MaxResults parameter sets the maximum number of results returned in a single
page. This is for future use and is not supported currently. **/
        MaxResults?: TagsNumberResults;
    }
    export interface ListTagsForResourceResponse {
        /** List of tag key value pairs associated with the response. **/
        Tags?: TagList;
        /** The token to use to retrieve the next page of results. This value is null when
there are no more results to return. **/
        NextToken?: NextToken;
    }
    export interface LookupPolicyRequest {
        /** ARN associated with the Directory . For more information, see arns . **/
        DirectoryArn: Arn;
        /** Reference that identifies the object whose policies will be looked up. **/
        ObjectReference: ObjectReference;
        /** The token to request the next page of results. **/
        NextToken?: NextToken;
        /** Maximum number of items to be retrieved in a single call. This is an approximate
number. **/
        MaxResults?: NumberResults;
    }
    export interface LookupPolicyResponse {
        /** Provides list of path to policies. Policies contain PolicyId, ObjectIdentifier,
and PolicyType. **/
        PolicyToPathList?: PolicyToPathList;
        /** Token used for pagination. **/
        NextToken?: NextToken;
    }
    export interface NotIndexException {
        Message?: ExceptionMessage;
    }
    export interface NotNodeException {
        Message?: ExceptionMessage;
    }
    export interface NotPolicyException {
        Message?: ExceptionMessage;
    }
    export interface ObjectAlreadyDetachedException {
        Message?: ExceptionMessage;
    }
    export interface ObjectAttributeAction {
        /** Type can be either Update or Delete. **/
        ObjectAttributeActionType?: UpdateActionType;
        /** The value that you want to update to. **/
        ObjectAttributeUpdateValue?: TypedAttributeValue;
    }
    export interface ObjectAttributeRange {
        /** The key of the attribute the attribute range covers. **/
        AttributeKey?: AttributeKey;
        /** The range of attribute values being selected. **/
        Range?: TypedAttributeValueRange;
    }
    export interface ObjectAttributeUpdate {
        /** The key of the attribute being updated. **/
        ObjectAttributeKey?: AttributeKey;
        /** The action to perform as part of the attribute update. **/
        ObjectAttributeAction?: ObjectAttributeAction;
    }
    export interface ObjectNotDetachedException {
        Message?: ExceptionMessage;
    }
    export interface ObjectReference {
        /** Allows you to specify an object. You can identify an object in one of the
following ways:

 &amp;#42; $ObjectIdentifier - Identifies the object by ObjectIdentifier
   
   
 * /some/path - Identifies the object based on path
   
   
 * #SomeBatchReference - Identifies the object in a batch call **/
        Selector?: SelectorObjectReference;
    }
    export interface PolicyAttachment {
        /** The ID of PolicyAttachment. **/
        PolicyId?: ObjectIdentifier;
        /** The ObjectIdentifier associated with PolicyAttachment. **/
        ObjectIdentifier?: ObjectIdentifier;
        /** The type of policy that can be associated with PolicyAttachment. **/
        PolicyType?: PolicyType;
    }
    export interface PolicyToPath {
        /** The path that is referenced from the root. **/
        Path?: PathString;
        /** List of policy objects. **/
        Policies?: PolicyAttachmentList;
    }
    export interface PublishSchemaRequest {
        /** ARN associated with the development schema. For more information, see arns . **/
        DevelopmentSchemaArn: Arn;
        /** Version under which the schema will be published. **/
        Version: Version;
        /** New name under which the schema will be published. If this is not provided, the
development schema is considered. **/
        Name?: SchemaName;
    }
    export interface PublishSchemaResponse {
        /** ARN associated with the published schema. For more information, see arns . **/
        PublishedSchemaArn?: Arn;
    }
    export interface PutSchemaFromJsonRequest {
        /** The ARN of the schema to update. **/
        SchemaArn: Arn;
        /** The replacement JSON schema. **/
        Document: SchemaJsonDocument;
    }
    export interface PutSchemaFromJsonResponse {
        /** The ARN of the schema to update. **/
        Arn?: Arn;
    }
    export interface RemoveFacetFromObjectRequest {
        /** The ARN of the directory in which the object resides. **/
        DirectoryArn: Arn;
        /** The facet to remove. **/
        SchemaFacet: SchemaFacet;
        /** A reference to the object to remove the facet from. **/
        ObjectReference: ObjectReference;
    }
    export interface RemoveFacetFromObjectResponse {
    }
    export interface ResourceNotFoundException {
        Message?: ExceptionMessage;
    }
    export interface RetryableConflictException {
        Message?: ExceptionMessage;
    }
    export interface Rule {
        /** The type of attribute validation rule. **/
        Type?: RuleType;
        /** Min and max parameters associated with the rule. **/
        Parameters?: RuleParameterMap;
    }
    export interface SchemaAlreadyExistsException {
        Message?: ExceptionMessage;
    }
    export interface SchemaAlreadyPublishedException {
        Message?: ExceptionMessage;
    }
    export interface SchemaFacet {
        /** The ARN of the schema that contains the facet. **/
        SchemaArn?: Arn;
        /** The name of the facet. **/
        FacetName?: FacetName;
    }
    export interface StillContainsLinksException {
        Message?: ExceptionMessage;
    }
    export interface Tag {
        /** Key associated with the tag. **/
        Key?: TagKey;
        /** Value associated with the tag. **/
        Value?: TagValue;
    }
    export interface TagResourceRequest {
        /** ARN of the resource. Tagging is only supported for directories. **/
        ResourceArn: Arn;
        /** List of tag key value pairs. **/
        Tags: TagList;
    }
    export interface TagResourceResponse {
    }
    export interface TypedAttributeValue {
        /** A string data value. **/
        StringValue?: StringAttributeValue;
        /** A binary data value. **/
        BinaryValue?: BinaryAttributeValue;
        /** A Boolean data value. **/
        BooleanValue?: BooleanAttributeValue;
        /** A number data value. **/
        NumberValue?: NumberAttributeValue;
        /** A date and time value. **/
        DatetimeValue?: DatetimeAttributeValue;
    }
    export interface TypedAttributeValueRange {
        /** Inclusive or exclusive range start. **/
        StartMode: RangeMode;
        /** The value to start the range at. **/
        StartValue?: TypedAttributeValue;
        /** Inclusive or exclusive range end. **/
        EndMode: RangeMode;
        /** The attribute value to terminate the range at. **/
        EndValue?: TypedAttributeValue;
    }
    export interface UnsupportedIndexTypeException {
        Message?: ExceptionMessage;
    }
    export interface UntagResourceRequest {
        /** ARN of the resource. Tagging is only supported for directories. **/
        ResourceArn: Arn;
        /** Keys of the tag that needs to be removed from the resource. **/
        TagKeys: TagKeyList;
    }
    export interface UntagResourceResponse {
    }
    export interface UpdateFacetRequest {
        /** ARN associated with the Facet . For more information, see arns . **/
        SchemaArn: Arn;
        /**  **/
        Name: FacetName;
        /** List of attributes that need to be updated in a given schema Facet . Each
attribute is followed by AttributeAction, which specifies the type of update
operation to perform. **/
        AttributeUpdates?: FacetAttributeUpdateList;
        /** Object type associated with the facet. See CreateFacetRequest$ObjectType for
more details. **/
        ObjectType?: ObjectType;
    }
    export interface UpdateFacetResponse {
    }
    export interface UpdateObjectAttributesRequest {
        /** ARN associated with the Directory where the object resides. For more
information, see arns . **/
        DirectoryArn: Arn;
        /** Reference that identifies the object. **/
        ObjectReference: ObjectReference;
        /** Attributes update structure. **/
        AttributeUpdates: ObjectAttributeUpdateList;
    }
    export interface UpdateObjectAttributesResponse {
        /** ObjectIdentifier of the updated object. **/
        ObjectIdentifier?: ObjectIdentifier;
    }
    export interface UpdateSchemaRequest {
        /** ARN of the development schema. For more information, see arns . **/
        SchemaArn: Arn;
        /** Name of the schema. **/
        Name: SchemaName;
    }
    export interface UpdateSchemaResponse {
        /** ARN associated with the updated schema. For more information, see arns . **/
        SchemaArn?: Arn;
    }
    export interface ValidationException {
        Message?: ExceptionMessage;
    }
  }
}
