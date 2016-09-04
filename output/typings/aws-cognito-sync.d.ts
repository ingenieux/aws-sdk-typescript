// Type definitions for aws-sdk - Amazon Cognito Sync
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2014-06-30
    * endpointPrefix: cognito-sync
    * serviceAbbreviation: 
    * signatureVersion: v4
    * protocol: rest-json
    *
    * Amazon Cognito Sync Amazon Cognito Sync provides an AWS service and client
 library that enable cross-device syncing of application-related user data.
 High-level client libraries are available for both iOS and Android. You can use
 these libraries to persist data locally so that it&#x27;s available even if the
 device is offline. Developer credentials don&#x27;t need to be stored on the mobile
 device to access the service. You can use Amazon Cognito to obtain a normalized
 user ID and credentials. User data is persisted in a dataset that can store up
 to 1 MB of key-value pairs, and you can have up to 20 datasets per user
 identity.
 
 With Amazon Cognito Sync, the data stored for each identity is accessible only
 to credentials assigned to that identity. In order to use the Cognito Sync
 service, you need to make API calls using credentials retrieved with Amazon
 Cognito Identity service
 [http://docs.aws.amazon.com/cognitoidentity/latest/APIReference/Welcome.html].
 
 If you want to use Cognito Sync in an Android or iOS application, you will
 probably want to make API calls via the AWS Mobile SDK. To learn more, see the 
 Developer Guide for Android
 [http://docs.aws.amazon.com/mobile/sdkforandroid/developerguide/cognito-sync.html] 
 and the Developer Guide for iOS
 [http://docs.aws.amazon.com/mobile/sdkforios/developerguide/cognito-sync.html].
    *
    */
  export class CognitoSync extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Initiates a bulk publish of all existing datasets for an Identity Pool to the
configured stream. Customers are limited to one successful bulk publish per 24
hours. Bulk publish is an asynchronous request, customers can see the status of
the request via the GetBulkPublishDetails operation.

This API can only be called with developer credentials. You cannot call this API
with the temporary user credentials provided by Cognito Identity.
     *
     * @error NotAuthorizedException Thrown when a user is not authorized to access the requested resource.  
     * @error InvalidParameterException Thrown when a request parameter does not comply with the associated constraints.  
     * @error ResourceNotFoundException Thrown if the resource doesn&#x27;t exist.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error DuplicateRequestException An exception thrown when there is an IN_PROGRESS bulk publish operation for the
given identity pool.  
     * @error AlreadyStreamedException An exception thrown when a bulk publish operation is requested less than 24
hours after a previous bulk publish operation completed successfully.  
     */
    bulkPublish(params: CognitoSync.BulkPublishRequest, callback?: (err: CognitoSync.NotAuthorizedException | CognitoSync.InvalidParameterException | CognitoSync.ResourceNotFoundException | CognitoSync.InternalErrorException | CognitoSync.DuplicateRequestException | CognitoSync.AlreadyStreamedException | any, data: CognitoSync.BulkPublishResponse | any) => void): Request<CognitoSync.BulkPublishResponse | any, CognitoSync.NotAuthorizedException | CognitoSync.InvalidParameterException | CognitoSync.ResourceNotFoundException | CognitoSync.InternalErrorException | CognitoSync.DuplicateRequestException | CognitoSync.AlreadyStreamedException | any>;
    /**
     * Deletes the specific dataset. The dataset will be deleted permanently, and the
action can&#x27;t be undone. Datasets that this dataset was merged with will no
longer report the merge. Any subsequent operation on this dataset will result in
a ResourceNotFoundException.

This API can be called with temporary user credentials provided by Cognito
Identity or with developer credentials.
     *
     * @error NotAuthorizedException Thrown when a user is not authorized to access the requested resource.  
     * @error InvalidParameterException Thrown when a request parameter does not comply with the associated constraints.  
     * @error ResourceNotFoundException Thrown if the resource doesn&#x27;t exist.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error TooManyRequestsException Thrown if the request is throttled.  
     * @error ResourceConflictException Thrown if an update can&#x27;t be applied because the resource was changed by another
call and this would result in a conflict.  
     */
    deleteDataset(params: CognitoSync.DeleteDatasetRequest, callback?: (err: CognitoSync.NotAuthorizedException | CognitoSync.InvalidParameterException | CognitoSync.ResourceNotFoundException | CognitoSync.InternalErrorException | CognitoSync.TooManyRequestsException | CognitoSync.ResourceConflictException | any, data: CognitoSync.DeleteDatasetResponse | any) => void): Request<CognitoSync.DeleteDatasetResponse | any, CognitoSync.NotAuthorizedException | CognitoSync.InvalidParameterException | CognitoSync.ResourceNotFoundException | CognitoSync.InternalErrorException | CognitoSync.TooManyRequestsException | CognitoSync.ResourceConflictException | any>;
    /**
     * Gets meta data about a dataset by identity and dataset name. With Amazon Cognito
Sync, each identity has access only to its own data. Thus, the credentials used
to make this API call need to have access to the identity data.

This API can be called with temporary user credentials provided by Cognito
Identity or with developer credentials. You should use Cognito Identity
credentials to make this API call.
     *
     * @error NotAuthorizedException Thrown when a user is not authorized to access the requested resource.  
     * @error InvalidParameterException Thrown when a request parameter does not comply with the associated constraints.  
     * @error ResourceNotFoundException Thrown if the resource doesn&#x27;t exist.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error TooManyRequestsException Thrown if the request is throttled.  
     */
    describeDataset(params: CognitoSync.DescribeDatasetRequest, callback?: (err: CognitoSync.NotAuthorizedException | CognitoSync.InvalidParameterException | CognitoSync.ResourceNotFoundException | CognitoSync.InternalErrorException | CognitoSync.TooManyRequestsException | any, data: CognitoSync.DescribeDatasetResponse | any) => void): Request<CognitoSync.DescribeDatasetResponse | any, CognitoSync.NotAuthorizedException | CognitoSync.InvalidParameterException | CognitoSync.ResourceNotFoundException | CognitoSync.InternalErrorException | CognitoSync.TooManyRequestsException | any>;
    /**
     * Gets usage details (for example, data storage) about a particular identity pool.

This API can only be called with developer credentials. You cannot call this API
with the temporary user credentials provided by Cognito Identity.
     *
     * @error NotAuthorizedException Thrown when a user is not authorized to access the requested resource.  
     * @error InvalidParameterException Thrown when a request parameter does not comply with the associated constraints.  
     * @error ResourceNotFoundException Thrown if the resource doesn&#x27;t exist.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error TooManyRequestsException Thrown if the request is throttled.  
     */
    describeIdentityPoolUsage(params: CognitoSync.DescribeIdentityPoolUsageRequest, callback?: (err: CognitoSync.NotAuthorizedException | CognitoSync.InvalidParameterException | CognitoSync.ResourceNotFoundException | CognitoSync.InternalErrorException | CognitoSync.TooManyRequestsException | any, data: CognitoSync.DescribeIdentityPoolUsageResponse | any) => void): Request<CognitoSync.DescribeIdentityPoolUsageResponse | any, CognitoSync.NotAuthorizedException | CognitoSync.InvalidParameterException | CognitoSync.ResourceNotFoundException | CognitoSync.InternalErrorException | CognitoSync.TooManyRequestsException | any>;
    /**
     * Gets usage information for an identity, including number of datasets and data
usage.

This API can be called with temporary user credentials provided by Cognito
Identity or with developer credentials.
     *
     * @error NotAuthorizedException Thrown when a user is not authorized to access the requested resource.  
     * @error InvalidParameterException Thrown when a request parameter does not comply with the associated constraints.  
     * @error ResourceNotFoundException Thrown if the resource doesn&#x27;t exist.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error TooManyRequestsException Thrown if the request is throttled.  
     */
    describeIdentityUsage(params: CognitoSync.DescribeIdentityUsageRequest, callback?: (err: CognitoSync.NotAuthorizedException | CognitoSync.InvalidParameterException | CognitoSync.ResourceNotFoundException | CognitoSync.InternalErrorException | CognitoSync.TooManyRequestsException | any, data: CognitoSync.DescribeIdentityUsageResponse | any) => void): Request<CognitoSync.DescribeIdentityUsageResponse | any, CognitoSync.NotAuthorizedException | CognitoSync.InvalidParameterException | CognitoSync.ResourceNotFoundException | CognitoSync.InternalErrorException | CognitoSync.TooManyRequestsException | any>;
    /**
     * Get the status of the last BulkPublish operation for an identity pool.

This API can only be called with developer credentials. You cannot call this API
with the temporary user credentials provided by Cognito Identity.
     *
     * @error NotAuthorizedException Thrown when a user is not authorized to access the requested resource.  
     * @error InvalidParameterException Thrown when a request parameter does not comply with the associated constraints.  
     * @error ResourceNotFoundException Thrown if the resource doesn&#x27;t exist.  
     * @error InternalErrorException Indicates an internal service error.  
     */
    getBulkPublishDetails(params: CognitoSync.GetBulkPublishDetailsRequest, callback?: (err: CognitoSync.NotAuthorizedException | CognitoSync.InvalidParameterException | CognitoSync.ResourceNotFoundException | CognitoSync.InternalErrorException | any, data: CognitoSync.GetBulkPublishDetailsResponse | any) => void): Request<CognitoSync.GetBulkPublishDetailsResponse | any, CognitoSync.NotAuthorizedException | CognitoSync.InvalidParameterException | CognitoSync.ResourceNotFoundException | CognitoSync.InternalErrorException | any>;
    /**
     * Gets the events and the corresponding Lambda functions associated with an
identity pool.

This API can only be called with developer credentials. You cannot call this API
with the temporary user credentials provided by Cognito Identity.
     *
     * @error InvalidParameterException Thrown when a request parameter does not comply with the associated constraints.  
     * @error ResourceNotFoundException Thrown if the resource doesn&#x27;t exist.  
     * @error NotAuthorizedException Thrown when a user is not authorized to access the requested resource.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error TooManyRequestsException Thrown if the request is throttled.  
     */
    getCognitoEvents(params: CognitoSync.GetCognitoEventsRequest, callback?: (err: CognitoSync.InvalidParameterException | CognitoSync.ResourceNotFoundException | CognitoSync.NotAuthorizedException | CognitoSync.InternalErrorException | CognitoSync.TooManyRequestsException | any, data: CognitoSync.GetCognitoEventsResponse | any) => void): Request<CognitoSync.GetCognitoEventsResponse | any, CognitoSync.InvalidParameterException | CognitoSync.ResourceNotFoundException | CognitoSync.NotAuthorizedException | CognitoSync.InternalErrorException | CognitoSync.TooManyRequestsException | any>;
    /**
     * Gets the configuration settings of an identity pool.

This API can only be called with developer credentials. You cannot call this API
with the temporary user credentials provided by Cognito Identity.
     *
     * @error NotAuthorizedException Thrown when a user is not authorized to access the requested resource.  
     * @error InvalidParameterException Thrown when a request parameter does not comply with the associated constraints.  
     * @error ResourceNotFoundException Thrown if the resource doesn&#x27;t exist.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error TooManyRequestsException Thrown if the request is throttled.  
     */
    getIdentityPoolConfiguration(params: CognitoSync.GetIdentityPoolConfigurationRequest, callback?: (err: CognitoSync.NotAuthorizedException | CognitoSync.InvalidParameterException | CognitoSync.ResourceNotFoundException | CognitoSync.InternalErrorException | CognitoSync.TooManyRequestsException | any, data: CognitoSync.GetIdentityPoolConfigurationResponse | any) => void): Request<CognitoSync.GetIdentityPoolConfigurationResponse | any, CognitoSync.NotAuthorizedException | CognitoSync.InvalidParameterException | CognitoSync.ResourceNotFoundException | CognitoSync.InternalErrorException | CognitoSync.TooManyRequestsException | any>;
    /**
     * Lists datasets for an identity. With Amazon Cognito Sync, each identity has
access only to its own data. Thus, the credentials used to make this API call
need to have access to the identity data.

ListDatasets can be called with temporary user credentials provided by Cognito
Identity or with developer credentials. You should use the Cognito Identity
credentials to make this API call.
     *
     * @error NotAuthorizedException Thrown when a user is not authorized to access the requested resource.  
     * @error InvalidParameterException Thrown when a request parameter does not comply with the associated constraints.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error TooManyRequestsException Thrown if the request is throttled.  
     */
    listDatasets(params: CognitoSync.ListDatasetsRequest, callback?: (err: CognitoSync.NotAuthorizedException | CognitoSync.InvalidParameterException | CognitoSync.InternalErrorException | CognitoSync.TooManyRequestsException | any, data: CognitoSync.ListDatasetsResponse | any) => void): Request<CognitoSync.ListDatasetsResponse | any, CognitoSync.NotAuthorizedException | CognitoSync.InvalidParameterException | CognitoSync.InternalErrorException | CognitoSync.TooManyRequestsException | any>;
    /**
     * Gets a list of identity pools registered with Cognito.

ListIdentityPoolUsage can only be called with developer credentials. You cannot
make this API call with the temporary user credentials provided by Cognito
Identity.
     *
     * @error NotAuthorizedException Thrown when a user is not authorized to access the requested resource.  
     * @error InvalidParameterException Thrown when a request parameter does not comply with the associated constraints.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error TooManyRequestsException Thrown if the request is throttled.  
     */
    listIdentityPoolUsage(params: CognitoSync.ListIdentityPoolUsageRequest, callback?: (err: CognitoSync.NotAuthorizedException | CognitoSync.InvalidParameterException | CognitoSync.InternalErrorException | CognitoSync.TooManyRequestsException | any, data: CognitoSync.ListIdentityPoolUsageResponse | any) => void): Request<CognitoSync.ListIdentityPoolUsageResponse | any, CognitoSync.NotAuthorizedException | CognitoSync.InvalidParameterException | CognitoSync.InternalErrorException | CognitoSync.TooManyRequestsException | any>;
    /**
     * Gets paginated records, optionally changed after a particular sync count for a
dataset and identity. With Amazon Cognito Sync, each identity has access only to
its own data. Thus, the credentials used to make this API call need to have
access to the identity data.

ListRecords can be called with temporary user credentials provided by Cognito
Identity or with developer credentials. You should use Cognito Identity
credentials to make this API call.
     *
     * @error InvalidParameterException Thrown when a request parameter does not comply with the associated constraints.  
     * @error NotAuthorizedException Thrown when a user is not authorized to access the requested resource.  
     * @error TooManyRequestsException Thrown if the request is throttled.  
     * @error InternalErrorException Indicates an internal service error.  
     */
    listRecords(params: CognitoSync.ListRecordsRequest, callback?: (err: CognitoSync.InvalidParameterException | CognitoSync.NotAuthorizedException | CognitoSync.TooManyRequestsException | CognitoSync.InternalErrorException | any, data: CognitoSync.ListRecordsResponse | any) => void): Request<CognitoSync.ListRecordsResponse | any, CognitoSync.InvalidParameterException | CognitoSync.NotAuthorizedException | CognitoSync.TooManyRequestsException | CognitoSync.InternalErrorException | any>;
    /**
     * Registers a device to receive push sync notifications.

This API can only be called with temporary credentials provided by Cognito
Identity. You cannot call this API with developer credentials.
     *
     * @error NotAuthorizedException Thrown when a user is not authorized to access the requested resource.  
     * @error InvalidParameterException Thrown when a request parameter does not comply with the associated constraints.  
     * @error ResourceNotFoundException Thrown if the resource doesn&#x27;t exist.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error InvalidConfigurationException   
     * @error TooManyRequestsException Thrown if the request is throttled.  
     */
    registerDevice(params: CognitoSync.RegisterDeviceRequest, callback?: (err: CognitoSync.NotAuthorizedException | CognitoSync.InvalidParameterException | CognitoSync.ResourceNotFoundException | CognitoSync.InternalErrorException | CognitoSync.InvalidConfigurationException | CognitoSync.TooManyRequestsException | any, data: CognitoSync.RegisterDeviceResponse | any) => void): Request<CognitoSync.RegisterDeviceResponse | any, CognitoSync.NotAuthorizedException | CognitoSync.InvalidParameterException | CognitoSync.ResourceNotFoundException | CognitoSync.InternalErrorException | CognitoSync.InvalidConfigurationException | CognitoSync.TooManyRequestsException | any>;
    /**
     * Sets the AWS Lambda function for a given event type for an identity pool. This
request only updates the key/value pair specified. Other key/values pairs are
not updated. To remove a key value pair, pass a empty value for the particular
key.

This API can only be called with developer credentials. You cannot call this API
with the temporary user credentials provided by Cognito Identity.
     *
     * @error InvalidParameterException Thrown when a request parameter does not comply with the associated constraints.  
     * @error ResourceNotFoundException Thrown if the resource doesn&#x27;t exist.  
     * @error NotAuthorizedException Thrown when a user is not authorized to access the requested resource.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error TooManyRequestsException Thrown if the request is throttled.  
     */
    setCognitoEvents(params: CognitoSync.SetCognitoEventsRequest, callback?: (err: CognitoSync.InvalidParameterException | CognitoSync.ResourceNotFoundException | CognitoSync.NotAuthorizedException | CognitoSync.InternalErrorException | CognitoSync.TooManyRequestsException | any, data: any) => void): Request<any, CognitoSync.InvalidParameterException | CognitoSync.ResourceNotFoundException | CognitoSync.NotAuthorizedException | CognitoSync.InternalErrorException | CognitoSync.TooManyRequestsException | any>;
    /**
     * Sets the necessary configuration for push sync.

This API can only be called with developer credentials. You cannot call this API
with the temporary user credentials provided by Cognito Identity.
     *
     * @error NotAuthorizedException Thrown when a user is not authorized to access the requested resource.  
     * @error InvalidParameterException Thrown when a request parameter does not comply with the associated constraints.  
     * @error ResourceNotFoundException Thrown if the resource doesn&#x27;t exist.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error TooManyRequestsException Thrown if the request is throttled.  
     * @error ConcurrentModificationException Thrown if there are parallel requests to modify a resource.  
     */
    setIdentityPoolConfiguration(params: CognitoSync.SetIdentityPoolConfigurationRequest, callback?: (err: CognitoSync.NotAuthorizedException | CognitoSync.InvalidParameterException | CognitoSync.ResourceNotFoundException | CognitoSync.InternalErrorException | CognitoSync.TooManyRequestsException | CognitoSync.ConcurrentModificationException | any, data: CognitoSync.SetIdentityPoolConfigurationResponse | any) => void): Request<CognitoSync.SetIdentityPoolConfigurationResponse | any, CognitoSync.NotAuthorizedException | CognitoSync.InvalidParameterException | CognitoSync.ResourceNotFoundException | CognitoSync.InternalErrorException | CognitoSync.TooManyRequestsException | CognitoSync.ConcurrentModificationException | any>;
    /**
     * Subscribes to receive notifications when a dataset is modified by another
device.

This API can only be called with temporary credentials provided by Cognito
Identity. You cannot call this API with developer credentials.
     *
     * @error NotAuthorizedException Thrown when a user is not authorized to access the requested resource.  
     * @error InvalidParameterException Thrown when a request parameter does not comply with the associated constraints.  
     * @error ResourceNotFoundException Thrown if the resource doesn&#x27;t exist.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error InvalidConfigurationException   
     * @error TooManyRequestsException Thrown if the request is throttled.  
     */
    subscribeToDataset(params: CognitoSync.SubscribeToDatasetRequest, callback?: (err: CognitoSync.NotAuthorizedException | CognitoSync.InvalidParameterException | CognitoSync.ResourceNotFoundException | CognitoSync.InternalErrorException | CognitoSync.InvalidConfigurationException | CognitoSync.TooManyRequestsException | any, data: CognitoSync.SubscribeToDatasetResponse | any) => void): Request<CognitoSync.SubscribeToDatasetResponse | any, CognitoSync.NotAuthorizedException | CognitoSync.InvalidParameterException | CognitoSync.ResourceNotFoundException | CognitoSync.InternalErrorException | CognitoSync.InvalidConfigurationException | CognitoSync.TooManyRequestsException | any>;
    /**
     * Unsubscribes from receiving notifications when a dataset is modified by another
device.

This API can only be called with temporary credentials provided by Cognito
Identity. You cannot call this API with developer credentials.
     *
     * @error NotAuthorizedException Thrown when a user is not authorized to access the requested resource.  
     * @error InvalidParameterException Thrown when a request parameter does not comply with the associated constraints.  
     * @error ResourceNotFoundException Thrown if the resource doesn&#x27;t exist.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error InvalidConfigurationException   
     * @error TooManyRequestsException Thrown if the request is throttled.  
     */
    unsubscribeFromDataset(params: CognitoSync.UnsubscribeFromDatasetRequest, callback?: (err: CognitoSync.NotAuthorizedException | CognitoSync.InvalidParameterException | CognitoSync.ResourceNotFoundException | CognitoSync.InternalErrorException | CognitoSync.InvalidConfigurationException | CognitoSync.TooManyRequestsException | any, data: CognitoSync.UnsubscribeFromDatasetResponse | any) => void): Request<CognitoSync.UnsubscribeFromDatasetResponse | any, CognitoSync.NotAuthorizedException | CognitoSync.InvalidParameterException | CognitoSync.ResourceNotFoundException | CognitoSync.InternalErrorException | CognitoSync.InvalidConfigurationException | CognitoSync.TooManyRequestsException | any>;
    /**
     * Posts updates to records and adds and deletes records for a dataset and user.

The sync count in the record patch is your last known sync count for that
record. The server will reject an UpdateRecords request with a
ResourceConflictException if you try to patch a record with a new value but a
stale sync count.

For example, if the sync count on the server is 5 for a key called highScore and
you try and submit a new highScore with sync count of 4, the request will be
rejected. To obtain the current sync count for a record, call ListRecords. On a
successful update of the record, the response returns the new sync count for
that record. You should present that sync count the next time you try to update
that same record. When the record does not exist, specify the sync count as 0.

This API can be called with temporary user credentials provided by Cognito
Identity or with developer credentials.
     *
     * @error InvalidParameterException Thrown when a request parameter does not comply with the associated constraints.  
     * @error LimitExceededException Thrown when the limit on the number of objects or operations has been exceeded.  
     * @error NotAuthorizedException Thrown when a user is not authorized to access the requested resource.  
     * @error ResourceNotFoundException Thrown if the resource doesn&#x27;t exist.  
     * @error ResourceConflictException Thrown if an update can&#x27;t be applied because the resource was changed by another
call and this would result in a conflict.  
     * @error InvalidLambdaFunctionOutputException The AWS Lambda function returned invalid output or an exception.  
     * @error LambdaThrottledException AWS Lambda throttled your account, please contact AWS Support  
     * @error TooManyRequestsException Thrown if the request is throttled.  
     * @error InternalErrorException Indicates an internal service error.  
     */
    updateRecords(params: CognitoSync.UpdateRecordsRequest, callback?: (err: CognitoSync.InvalidParameterException | CognitoSync.LimitExceededException | CognitoSync.NotAuthorizedException | CognitoSync.ResourceNotFoundException | CognitoSync.ResourceConflictException | CognitoSync.InvalidLambdaFunctionOutputException | CognitoSync.LambdaThrottledException | CognitoSync.TooManyRequestsException | CognitoSync.InternalErrorException | any, data: CognitoSync.UpdateRecordsResponse | any) => void): Request<CognitoSync.UpdateRecordsResponse | any, CognitoSync.InvalidParameterException | CognitoSync.LimitExceededException | CognitoSync.NotAuthorizedException | CognitoSync.ResourceNotFoundException | CognitoSync.ResourceConflictException | CognitoSync.InvalidLambdaFunctionOutputException | CognitoSync.LambdaThrottledException | CognitoSync.TooManyRequestsException | CognitoSync.InternalErrorException | any>;

  }

  export module CognitoSync {

    export type ApplicationArn = string;

    export type ApplicationArnList = ApplicationArn[];

    export type AssumeRoleArn = string;

    export type Boolean = boolean;

    export type BulkPublishStatus = string;

    export type ClientContext = string;

    export type CognitoEventType = string;

    export type DatasetList = Dataset[];

    export type DatasetName = string;

    export type Date = number;

    export type DeviceId = string;

    export type Events = { [key: string]: LambdaFunctionArn };

    export type ExceptionMessage = string;

    export type IdentityId = string;

    export type IdentityPoolId = string;

    export type IdentityPoolUsageList = IdentityPoolUsage[];

    export type Integer = number;

    export type IntegerString = number;

    export type LambdaFunctionArn = string;

    export type Long = number;

    export type MergedDatasetNameList = String[];

    export type Operation = string;

    export type Platform = string;

    export type PushToken = string;

    export type RecordKey = string;

    export type RecordList = Record[];

    export type RecordPatchList = RecordPatch[];

    export type RecordValue = string;

    export type StreamName = string;

    export type StreamingStatus = string;

    export type String = string;

    export type SyncSessionToken = string;

    export interface AlreadyStreamedException {
      /** The message associated with the AlreadyStreamedException exception. **/
      message: ExceptionMessage;
    }
    export interface BulkPublishRequest {
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. GUID generation is unique within a region. **/
      IdentityPoolId: IdentityPoolId;
    }
    export interface BulkPublishResponse {
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. GUID generation is unique within a region. **/
      IdentityPoolId?: IdentityPoolId;
    }
    export interface CognitoStreams {
      /** The name of the Cognito stream to receive updates. This stream must be in the
developers account and in the same region as the identity pool. **/
      StreamName?: StreamName;
      /** The ARN of the role Amazon Cognito can assume in order to publish to the stream.
This role must grant access to Amazon Cognito (cognito-sync) to invoke PutRecord
on your Cognito stream. **/
      RoleArn?: AssumeRoleArn;
      /** Status of the Cognito streams. Valid values are: ENABLED - Streaming of updates
to identity pool is enabled.

DISABLED - Streaming of updates to identity pool is disabled. Bulk publish will
also fail if StreamingStatus is DISABLED. **/
      StreamingStatus?: StreamingStatus;
    }
    export interface ConcurrentModificationException {
      /** The message returned by a ConcurrentModicationException. **/
      message: String;
    }
    export interface Dataset {
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. GUID generation is unique within a region. **/
      IdentityId?: IdentityId;
      /** A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, &#x27;_&#x27;
(underscore), &#x27;-&#x27; (dash), and &#x27;.&#x27; (dot). **/
      DatasetName?: DatasetName;
      /** Date on which the dataset was created. **/
      CreationDate?: Date;
      /** Date when the dataset was last modified. **/
      LastModifiedDate?: Date;
      /** The device that made the last change to this dataset. **/
      LastModifiedBy?: String;
      /** Total size in bytes of the records in this dataset. **/
      DataStorage?: Long;
      /** Number of records in this dataset. **/
      NumRecords?: Long;
    }
    export interface DeleteDatasetRequest {
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. GUID generation is unique within a region. **/
      IdentityPoolId: IdentityPoolId;
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. GUID generation is unique within a region. **/
      IdentityId: IdentityId;
      /** A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, &#x27;_&#x27;
(underscore), &#x27;-&#x27; (dash), and &#x27;.&#x27; (dot). **/
      DatasetName: DatasetName;
    }
    export interface DeleteDatasetResponse {
      /** A collection of data for an identity pool. An identity pool can have multiple
datasets. A dataset is per identity and can be general or associated with a
particular entity in an application (like a saved game). Datasets are
automatically created if they don&#x27;t exist. Data is synced by dataset, and a
dataset can hold up to 1MB of key-value pairs. **/
      Dataset?: Dataset;
    }
    export interface DescribeDatasetRequest {
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. GUID generation is unique within a region. **/
      IdentityPoolId: IdentityPoolId;
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. GUID generation is unique within a region. **/
      IdentityId: IdentityId;
      /** A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, &#x27;_&#x27;
(underscore), &#x27;-&#x27; (dash), and &#x27;.&#x27; (dot). **/
      DatasetName: DatasetName;
    }
    export interface DescribeDatasetResponse {
      /** Meta data for a collection of data for an identity. An identity can have
multiple datasets. A dataset can be general or associated with a particular
entity in an application (like a saved game). Datasets are automatically created
if they don&#x27;t exist. Data is synced by dataset, and a dataset can hold up to 1MB
of key-value pairs. **/
      Dataset?: Dataset;
    }
    export interface DescribeIdentityPoolUsageRequest {
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. GUID generation is unique within a region. **/
      IdentityPoolId: IdentityPoolId;
    }
    export interface DescribeIdentityPoolUsageResponse {
      /** Information about the usage of the identity pool. **/
      IdentityPoolUsage?: IdentityPoolUsage;
    }
    export interface DescribeIdentityUsageRequest {
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. GUID generation is unique within a region. **/
      IdentityPoolId: IdentityPoolId;
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. GUID generation is unique within a region. **/
      IdentityId: IdentityId;
    }
    export interface DescribeIdentityUsageResponse {
      /** Usage information for the identity. **/
      IdentityUsage?: IdentityUsage;
    }
    export interface DuplicateRequestException {
      /** The message associated with the DuplicateRequestException exception. **/
      message: ExceptionMessage;
    }
    export interface GetBulkPublishDetailsRequest {
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. GUID generation is unique within a region. **/
      IdentityPoolId: IdentityPoolId;
    }
    export interface GetBulkPublishDetailsResponse {
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. GUID generation is unique within a region. **/
      IdentityPoolId?: IdentityPoolId;
      /** The date/time at which the last bulk publish was initiated. **/
      BulkPublishStartTime?: Date;
      /** If BulkPublishStatus is SUCCEEDED, the time the last bulk publish operation
completed. **/
      BulkPublishCompleteTime?: Date;
      /** Status of the last bulk publish operation, valid values are: NOT_STARTED - No
bulk publish has been requested for this identity pool

IN_PROGRESS - Data is being published to the configured stream

SUCCEEDED - All data for the identity pool has been published to the configured
stream

FAILED - Some portion of the data has failed to publish, check FailureMessage
for the cause. **/
      BulkPublishStatus?: BulkPublishStatus;
      /** If BulkPublishStatus is FAILED this field will contain the error message that
caused the bulk publish to fail. **/
      FailureMessage?: String;
    }
    export interface GetCognitoEventsRequest {
      /** The Cognito Identity Pool ID for the request **/
      IdentityPoolId: IdentityPoolId;
    }
    export interface GetCognitoEventsResponse {
      /** The Cognito Events returned from the GetCognitoEvents request **/
      Events?: Events;
    }
    export interface GetIdentityPoolConfigurationRequest {
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. This is the ID of the pool for which to return a
configuration. **/
      IdentityPoolId: IdentityPoolId;
    }
    export interface GetIdentityPoolConfigurationResponse {
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. **/
      IdentityPoolId?: IdentityPoolId;
      /** Options to apply to this identity pool for push synchronization. **/
      PushSync?: PushSync;
      /** Options to apply to this identity pool for Amazon Cognito streams. **/
      CognitoStreams?: CognitoStreams;
    }
    export interface IdentityPoolUsage {
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. GUID generation is unique within a region. **/
      IdentityPoolId?: IdentityPoolId;
      /** Number of sync sessions for the identity pool. **/
      SyncSessionsCount?: Long;
      /** Data storage information for the identity pool. **/
      DataStorage?: Long;
      /** Date on which the identity pool was last modified. **/
      LastModifiedDate?: Date;
    }
    export interface IdentityUsage {
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. GUID generation is unique within a region. **/
      IdentityId?: IdentityId;
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. GUID generation is unique within a region. **/
      IdentityPoolId?: IdentityPoolId;
      /** Date on which the identity was last modified. **/
      LastModifiedDate?: Date;
      /** Number of datasets for the identity. **/
      DatasetCount?: Integer;
      /** Total data storage for this identity. **/
      DataStorage?: Long;
    }
    export interface InternalErrorException {
      /** Message returned by InternalErrorException. **/
      message: ExceptionMessage;
    }
    export interface InvalidConfigurationException {
      /** Message returned by InvalidConfigurationException. **/
      message: ExceptionMessage;
    }
    export interface InvalidLambdaFunctionOutputException {
      /** A message returned when an InvalidLambdaFunctionOutputException occurs **/
      message: ExceptionMessage;
    }
    export interface InvalidParameterException {
      /** Message returned by InvalidParameterException. **/
      message: ExceptionMessage;
    }
    export interface LambdaThrottledException {
      /** A message returned when an LambdaThrottledException is thrown **/
      message: ExceptionMessage;
    }
    export interface LimitExceededException {
      /** Message returned by LimitExceededException. **/
      message: ExceptionMessage;
    }
    export interface ListDatasetsRequest {
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. GUID generation is unique within a region. **/
      IdentityPoolId: IdentityPoolId;
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. GUID generation is unique within a region. **/
      IdentityId: IdentityId;
      /** A pagination token for obtaining the next page of results. **/
      NextToken?: String;
      /** The maximum number of results to be returned. **/
      MaxResults?: IntegerString;
    }
    export interface ListDatasetsResponse {
      /** A set of datasets. **/
      Datasets?: DatasetList;
      /** Number of datasets returned. **/
      Count?: Integer;
      /** A pagination token for obtaining the next page of results. **/
      NextToken?: String;
    }
    export interface ListIdentityPoolUsageRequest {
      /** A pagination token for obtaining the next page of results. **/
      NextToken?: String;
      /** The maximum number of results to be returned. **/
      MaxResults?: IntegerString;
    }
    export interface ListIdentityPoolUsageResponse {
      /** Usage information for the identity pools. **/
      IdentityPoolUsages?: IdentityPoolUsageList;
      /** The maximum number of results to be returned. **/
      MaxResults?: Integer;
      /** Total number of identities for the identity pool. **/
      Count?: Integer;
      /** A pagination token for obtaining the next page of results. **/
      NextToken?: String;
    }
    export interface ListRecordsRequest {
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. GUID generation is unique within a region. **/
      IdentityPoolId: IdentityPoolId;
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. GUID generation is unique within a region. **/
      IdentityId: IdentityId;
      /** A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, &#x27;_&#x27;
(underscore), &#x27;-&#x27; (dash), and &#x27;.&#x27; (dot). **/
      DatasetName: DatasetName;
      /** The last server sync count for this record. **/
      LastSyncCount?: Long;
      /** A pagination token for obtaining the next page of results. **/
      NextToken?: String;
      /** The maximum number of results to be returned. **/
      MaxResults?: IntegerString;
      /** A token containing a session ID, identity ID, and expiration. **/
      SyncSessionToken?: SyncSessionToken;
    }
    export interface ListRecordsResponse {
      /** A list of all records. **/
      Records?: RecordList;
      /** A pagination token for obtaining the next page of results. **/
      NextToken?: String;
      /** Total number of records. **/
      Count?: Integer;
      /** Server sync count for this dataset. **/
      DatasetSyncCount?: Long;
      /** The user/device that made the last change to this record. **/
      LastModifiedBy?: String;
      /** Names of merged datasets. **/
      MergedDatasetNames?: MergedDatasetNameList;
      /** Indicates whether the dataset exists. **/
      DatasetExists?: Boolean;
      /** A boolean value specifying whether to delete the dataset locally. **/
      DatasetDeletedAfterRequestedSyncCount?: Boolean;
      /** A token containing a session ID, identity ID, and expiration. **/
      SyncSessionToken?: String;
    }
    export interface NotAuthorizedException {
      /** The message returned by a NotAuthorizedException. **/
      message: ExceptionMessage;
    }
    export interface PushSync {
      /** List of SNS platform application ARNs that could be used by clients. **/
      ApplicationArns?: ApplicationArnList;
      /** A role configured to allow Cognito to call SNS on behalf of the developer. **/
      RoleArn?: AssumeRoleArn;
    }
    export interface Record {
      /** The key for the record. **/
      Key?: RecordKey;
      /** The value for the record. **/
      Value?: RecordValue;
      /** The server sync count for this record. **/
      SyncCount?: Long;
      /** The date on which the record was last modified. **/
      LastModifiedDate?: Date;
      /** The user/device that made the last change to this record. **/
      LastModifiedBy?: String;
      /** The last modified date of the client device. **/
      DeviceLastModifiedDate?: Date;
    }
    export interface RecordPatch {
      /** An operation, either replace or remove. **/
      Op: Operation;
      /** The key associated with the record patch. **/
      Key: RecordKey;
      /** The value associated with the record patch. **/
      Value?: RecordValue;
      /** Last known server sync count for this record. Set to 0 if unknown. **/
      SyncCount: Long;
      /** The last modified date of the client device. **/
      DeviceLastModifiedDate?: Date;
    }
    export interface RegisterDeviceRequest {
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. Here, the ID of the pool that the identity belongs
to. **/
      IdentityPoolId: IdentityPoolId;
      /** The unique ID for this identity. **/
      IdentityId: IdentityId;
      /** The SNS platform type (e.g. GCM, SDM, APNS, APNS_SANDBOX). **/
      Platform: Platform;
      /** The push token. **/
      Token: PushToken;
    }
    export interface RegisterDeviceResponse {
      /** The unique ID generated for this device by Cognito. **/
      DeviceId?: DeviceId;
    }
    export interface ResourceConflictException {
      /** The message returned by a ResourceConflictException. **/
      message: ExceptionMessage;
    }
    export interface ResourceNotFoundException {
      /** Message returned by a ResourceNotFoundException. **/
      message: ExceptionMessage;
    }
    export interface SetCognitoEventsRequest {
      /** The Cognito Identity Pool to use when configuring Cognito Events **/
      IdentityPoolId: IdentityPoolId;
      /** The events to configure **/
      Events: Events;
    }
    export interface SetIdentityPoolConfigurationRequest {
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. This is the ID of the pool to modify. **/
      IdentityPoolId: IdentityPoolId;
      /** Options to apply to this identity pool for push synchronization. **/
      PushSync?: PushSync;
      /** Options to apply to this identity pool for Amazon Cognito streams. **/
      CognitoStreams?: CognitoStreams;
    }
    export interface SetIdentityPoolConfigurationResponse {
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. **/
      IdentityPoolId?: IdentityPoolId;
      /** Options to apply to this identity pool for push synchronization. **/
      PushSync?: PushSync;
      /** Options to apply to this identity pool for Amazon Cognito streams. **/
      CognitoStreams?: CognitoStreams;
    }
    export interface SubscribeToDatasetRequest {
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. The ID of the pool to which the identity belongs. **/
      IdentityPoolId: IdentityPoolId;
      /** Unique ID for this identity. **/
      IdentityId: IdentityId;
      /** The name of the dataset to subcribe to. **/
      DatasetName: DatasetName;
      /** The unique ID generated for this device by Cognito. **/
      DeviceId: DeviceId;
    }
    export interface SubscribeToDatasetResponse {
    }
    export interface TooManyRequestsException {
      /** Message returned by a TooManyRequestsException. **/
      message: ExceptionMessage;
    }
    export interface UnsubscribeFromDatasetRequest {
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. The ID of the pool to which this identity belongs. **/
      IdentityPoolId: IdentityPoolId;
      /** Unique ID for this identity. **/
      IdentityId: IdentityId;
      /** The name of the dataset from which to unsubcribe. **/
      DatasetName: DatasetName;
      /** The unique ID generated for this device by Cognito. **/
      DeviceId: DeviceId;
    }
    export interface UnsubscribeFromDatasetResponse {
    }
    export interface UpdateRecordsRequest {
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. GUID generation is unique within a region. **/
      IdentityPoolId: IdentityPoolId;
      /** A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE)
created by Amazon Cognito. GUID generation is unique within a region. **/
      IdentityId: IdentityId;
      /** A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, &#x27;_&#x27;
(underscore), &#x27;-&#x27; (dash), and &#x27;.&#x27; (dot). **/
      DatasetName: DatasetName;
      /** The unique ID generated for this device by Cognito. **/
      DeviceId?: DeviceId;
      /** A list of patch operations. **/
      RecordPatches?: RecordPatchList;
      /** The SyncSessionToken returned by a previous call to ListRecords for this dataset
and identity. **/
      SyncSessionToken: SyncSessionToken;
      /** Intended to supply a device ID that will populate the lastModifiedBy field
referenced in other methods. The ClientContext field is not yet implemented. **/
      ClientContext?: ClientContext;
    }
    export interface UpdateRecordsResponse {
      /** A list of records that have been updated. **/
      Records?: RecordList;
    }
  }
}
