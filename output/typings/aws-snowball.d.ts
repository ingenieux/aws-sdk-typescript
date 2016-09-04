// Type definitions for aws-sdk - Amazon Import/Export Snowball
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2016-06-30
    * endpointPrefix: snowball
    * serviceAbbreviation: Amazon Snowball
    * signatureVersion: v4
    * protocol: json
    *
    * This is a test of the welcome page front matter.
    *
    */
  export class Snowball extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Cancels the specified job. Note that you can only cancel a job before its 
JobState value changes to PreparingAppliance. Requesting the ListJobs or 
DescribeJob action will return a job&#x27;s JobState as part of the response element
data returned.
     *
     * @error InvalidResourceException   
     * @error InvalidJobStateException   
     * @error KMSRequestFailedException   
     */
    cancelJob(params: Snowball.CancelJobRequest, callback?: (err: Snowball.InvalidResourceException | Snowball.InvalidJobStateException | Snowball.KMSRequestFailedException | any, data: Snowball.CancelJobResult | any) => void): Request<Snowball.CancelJobResult | any, Snowball.InvalidResourceException | Snowball.InvalidJobStateException | Snowball.KMSRequestFailedException | any>;
    /**
     * Creates an address for a Snowball to be shipped to. 

Addresses are validated at the time of creation. The address you provide must be
located within the serviceable area of your region. If the address is invalid or
unsupported, then an exception is thrown.
     *
     * @error InvalidAddressException   
     * @error UnsupportedAddressException   
     */
    createAddress(params: Snowball.CreateAddressRequest, callback?: (err: Snowball.InvalidAddressException | Snowball.UnsupportedAddressException | any, data: Snowball.CreateAddressResult | any) => void): Request<Snowball.CreateAddressResult | any, Snowball.InvalidAddressException | Snowball.UnsupportedAddressException | any>;
    /**
     * Creates a job to import or export data between Amazon S3 and your on-premises
data center. Note that your AWS account must have the right trust policies and
permissions in place to create a job for Snowball. For more information, see 
api-reference-policies.
     *
     * @error InvalidResourceException   
     * @error KMSRequestFailedException   
     */
    createJob(params: Snowball.CreateJobRequest, callback?: (err: Snowball.InvalidResourceException | Snowball.KMSRequestFailedException | any, data: Snowball.CreateJobResult | any) => void): Request<Snowball.CreateJobResult | any, Snowball.InvalidResourceException | Snowball.KMSRequestFailedException | any>;
    /**
     * Takes an AddressId and returns specific details about that address in the form
of an Address object.
     *
     * @error InvalidResourceException   
     */
    describeAddress(params: Snowball.DescribeAddressRequest, callback?: (err: Snowball.InvalidResourceException | any, data: Snowball.DescribeAddressResult | any) => void): Request<Snowball.DescribeAddressResult | any, Snowball.InvalidResourceException | any>;
    /**
     * Returns a specified number of ADDRESS objects. Calling this API in one of the US
regions will return addresses from the list of all addresses associated with
this account in all US regions.
     *
     * @error InvalidResourceException   
     */
    describeAddresses(params: Snowball.DescribeAddressesRequest, callback?: (err: Snowball.InvalidResourceException | any, data: Snowball.DescribeAddressesResult | any) => void): Request<Snowball.DescribeAddressesResult | any, Snowball.InvalidResourceException | any>;
    /**
     * Returns information about a specific job including shipping information, job
status, and other important metadata.
     *
     * @error InvalidResourceException   
     */
    describeJob(params: Snowball.DescribeJobRequest, callback?: (err: Snowball.InvalidResourceException | any, data: Snowball.DescribeJobResult | any) => void): Request<Snowball.DescribeJobResult | any, Snowball.InvalidResourceException | any>;
    /**
     * Returns a link to an Amazon S3 presigned URL for the manifest file associated
with the specified JobId value. You can access the manifest file for up to 60
minutes after this request has been made. To access the manifest file after 60
minutes have passed, you&#x27;ll have to make another call to the GetJobManifest 
action.

The manifest is an encrypted file that you can download after your job enters
the WithCustomer status. The manifest is decrypted by using the UnlockCode code
value, when you pass both values to the Snowball through the Snowball client
when the client is started for the first time.

As a best practice, we recommend that you don&#x27;t save a copy of an UnlockCode 
value in the same location as the manifest file for that job. Saving these
separately helps prevent unauthorized parties from gaining access to the
Snowball associated with that job.

Note that the credentials of a given job, including its manifest file and unlock
code, expire 90 days after the job is created.
     *
     * @error InvalidResourceException   
     * @error InvalidJobStateException   
     */
    getJobManifest(params: Snowball.GetJobManifestRequest, callback?: (err: Snowball.InvalidResourceException | Snowball.InvalidJobStateException | any, data: Snowball.GetJobManifestResult | any) => void): Request<Snowball.GetJobManifestResult | any, Snowball.InvalidResourceException | Snowball.InvalidJobStateException | any>;
    /**
     * Returns the UnlockCode code value for the specified job. A particular UnlockCode 
value can be accessed for up to 90 days after the associated job has been
created.

The UnlockCode value is a 29-character code with 25 alphanumeric characters and
4 hyphens. This code is used to decrypt the manifest file when it is passed
along with the manifest to the Snowball through the Snowball client when the
client is started for the first time.

As a best practice, we recommend that you don&#x27;t save a copy of the UnlockCode in
the same location as the manifest file for that job. Saving these separately
helps prevent unauthorized parties from gaining access to the Snowball
associated with that job.
     *
     * @error InvalidResourceException   
     * @error InvalidJobStateException   
     */
    getJobUnlockCode(params: Snowball.GetJobUnlockCodeRequest, callback?: (err: Snowball.InvalidResourceException | Snowball.InvalidJobStateException | any, data: Snowball.GetJobUnlockCodeResult | any) => void): Request<Snowball.GetJobUnlockCodeResult | any, Snowball.InvalidResourceException | Snowball.InvalidJobStateException | any>;
    /**
     * Returns information about the Snowball service limit for your account, and also
the number of Snowballs your account has in use.

Note that the default service limit for the number of Snowballs that you can
have at one time is 1. If you want to increase your service limit, contact AWS
Support.
     *
     */
    getSnowballUsage(params: Snowball.GetSnowballUsageRequest, callback?: (err: any, data: Snowball.GetSnowballUsageResult | any) => void): Request<Snowball.GetSnowballUsageResult | any, any>;
    /**
     * Returns an array of JobListEntry objects of the specified length. Each 
JobListEntry object contains a job&#x27;s state, a job&#x27;s ID, and a value that
indicates whether the job is a job part, in the case of export jobs. Calling
this API action in one of the US regions will return jobs from the list of all
jobs associated with this account in all US regions.
     *
     */
    listJobs(params: Snowball.ListJobsRequest, callback?: (err: any, data: Snowball.ListJobsResult | any) => void): Request<Snowball.ListJobsResult | any, any>;
    /**
     * While a job&#x27;s JobState value is New, you can update some of the information
associated with a job. Once the job changes to a different job state, usually
within 60 minutes of the job being created, this action is no longer available.
     *
     * @error InvalidResourceException   
     * @error InvalidJobStateException   
     * @error KMSRequestFailedException   
     */
    updateJob(params: Snowball.UpdateJobRequest, callback?: (err: Snowball.InvalidResourceException | Snowball.InvalidJobStateException | Snowball.KMSRequestFailedException | any, data: Snowball.UpdateJobResult | any) => void): Request<Snowball.UpdateJobResult | any, Snowball.InvalidResourceException | Snowball.InvalidJobStateException | Snowball.KMSRequestFailedException | any>;

  }

  export module Snowball {

    export type AddressId = string;

    export type AddressList = Address[];

    export type Boolean = boolean;

    export type Integer = number;

    export type JobId = string;

    export type JobListEntryList = JobListEntry[];

    export type JobMetadataList = JobMetadata[];

    export type JobState = string;

    export type JobStateList = JobState[];

    export type JobType = string;

    export type KmsKeyARN = string;

    export type ListLimit = number;

    export type Long = number;

    export type ResourceARN = string;

    export type RoleARN = string;

    export type S3ResourceList = S3Resource[];

    export type ShippingOption = string;

    export type SnowballCapacity = string;

    export type SnsTopicARN = string;

    export type String = string;

    export type Timestamp = number;

    export interface Address {
      /** The unique ID for an address. **/
      AddressId?: AddressId;
      /** The name of a person to receive a Snowball at an address. **/
      Name?: String;
      /** The name of the company to receive a Snowball at an address. **/
      Company?: String;
      /** The first line in a street address that a Snowball is to be delivered to. **/
      Street1?: String;
      /** The second line in a street address that a Snowball is to be delivered to. **/
      Street2?: String;
      /** The third line in a street address that a Snowball is to be delivered to. **/
      Street3?: String;
      /** The city in an address that a Snowball is to be delivered to. **/
      City?: String;
      /** The state or province in an address that a Snowball is to be delivered to. **/
      StateOrProvince?: String;
      /** The prefecture or district in an address that a Snowball is to be delivered to. **/
      PrefectureOrDistrict?: String;
      /** A landmark listed in an address that a Snowball is to be delivered to. **/
      Landmark?: String;
      /** The country in an address that a Snowball is to be delivered to. **/
      Country?: String;
      /** The postal code in an address that a Snowball is to be delivered to. **/
      PostalCode?: String;
      /** The phone number associated with an address that a Snowball is to be delivered
to. **/
      PhoneNumber?: String;
    }
    export interface CancelJobRequest {
      /** The 39 character job ID for the job that you want to cancel, for example 
JID123e4567-e89b-12d3-a456-426655440000. **/
      JobId: JobId;
    }
    export interface CancelJobResult {
    }
    export interface CreateAddressRequest {
      /** The address that you want the Snowball shipped to. **/
      Address: Address;
    }
    export interface CreateAddressResult {
      /** The automatically generated ID for a specific address. You&#x27;ll use this ID when
you create a job to specify which address you want the Snowball for that job
shipped to. **/
      AddressId?: String;
    }
    export interface CreateJobRequest {
      /** Defines the type of job that you&#x27;re creating. **/
      JobType: JobType;
      /** Defines the Amazon S3 buckets associated with this job.

With IMPORT jobs, you specify the bucket or buckets that your transferred data
will be imported into.

With EXPORT jobs, you specify the bucket or buckets that your transferred data
will be exported from. Optionally, you can also specify a KeyRange value. If you
choose to export a range, you define the length of the range by providing either
an inclusive BeginMarker value, an inclusive EndMarker value, or both. Ranges
are UTF-8 binary sorted. **/
      Resources: JobResource;
      /** Defines an optional description of this specific job, for example Important
Photos 2016-08-11. **/
      Description?: String;
      /** The ID for the address that you want the Snowball shipped to. **/
      AddressId: AddressId;
      /** The KmsKeyARN that you want to associate with this job. KmsKeyARNs are created
using the CreateKey
[http://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html] AWS Key
Management Service (KMS) API action. **/
      KmsKeyARN?: KmsKeyARN;
      /** The RoleARN that you want to associate with this job. RoleArns are created using
the CreateRole
[http://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html] AWS
Identity and Access Management (IAM) API action. **/
      RoleARN: RoleARN;
      /** If your job is being created in one of the US regions, you have the option of
specifying what size Snowball you&#x27;d like for this job. In all other regions,
Snowballs come with 80 TB in storage capacity. **/
      SnowballCapacityPreference?: SnowballCapacity;
      /** The shipping speed for this job. Note that this speed does not dictate how soon
you&#x27;ll get the Snowball, rather it represents how quickly the Snowball moves to
its destination while in transit. Regional shipping speeds are as follows:

&amp;#42;  In Australia, you have access to express shipping. Typically, Snowballs
 shipped express are delivered in about a day.
 
 
*  In the European Union (EU), you have access to express shipping. Typically,
 Snowballs shipped express are delivered in about a day. In addition, most
 countries in the EU have access to standard shipping, which typically takes
 less than a week, one way.
 
 
*  In India, Snowballs are delivered in one to seven days.
 
 
*  In the US, you have access to one-day shipping and two-day shipping. **/
      ShippingOption: ShippingOption;
      /** Defines the Amazon Simple Notification Service (Amazon SNS) notification
settings for this job. **/
      Notification?: Notification;
    }
    export interface CreateJobResult {
      /** The automatically generated ID for a job, for example 
JID123e4567-e89b-12d3-a456-426655440000. **/
      JobId?: JobId;
    }
    export interface DataTransfer {
      /** The number of bytes transferred between a Snowball and Amazon S3. **/
      BytesTransferred?: Long;
      /** The number of objects transferred between a Snowball and Amazon S3. **/
      ObjectsTransferred?: Long;
      /** The total bytes of data for a transfer between a Snowball and Amazon S3. This
value is set to 0 (zero) until all the keys that will be transferred have been
listed. **/
      TotalBytes?: Long;
      /** The total number of objects for a transfer between a Snowball and Amazon S3.
This value is set to 0 (zero) until all the keys that will be transferred have
been listed. **/
      TotalObjects?: Long;
    }
    export interface DescribeAddressRequest {
      /** The automatically generated ID for a specific address. **/
      AddressId: AddressId;
    }
    export interface DescribeAddressResult {
      /** The address that you want the Snowball or Snowballs associated with a specific
job to be shipped to. **/
      Address?: Address;
    }
    export interface DescribeAddressesRequest {
      /** The number of ADDRESS objects to return. **/
      MaxResults?: ListLimit;
      /** HTTP requests are stateless. To identify what object comes &quot;next&quot; in the list of 
ADDRESS objects, you have the option of specifying a value for NextToken as the
starting point for your list of returned addresses. **/
      NextToken?: String;
    }
    export interface DescribeAddressesResult {
      /** The Snowball shipping addresses that were created for this account. **/
      Addresses?: AddressList;
      /** HTTP requests are stateless. If you use the automatically generated NextToken 
value in your next DescribeAddresses call, your list of returned addresses will
start from this point in the array. **/
      NextToken?: String;
    }
    export interface DescribeJobRequest {
      /** The automatically generated ID for a job, for example 
JID123e4567-e89b-12d3-a456-426655440000. **/
      JobId: JobId;
    }
    export interface DescribeJobResult {
      /** Information about a specific job, including shipping information, job status,
and other important metadata. **/
      JobMetadata?: JobMetadata;
      /** Information about a specific job part (in the case of an export job), including
shipping information, job status, and other important metadata. **/
      SubJobMetadata?: JobMetadataList;
    }
    export interface GetJobManifestRequest {
      /** The ID for a job that you want to get the manifest file for, for example 
JID123e4567-e89b-12d3-a456-426655440000. **/
      JobId: JobId;
    }
    export interface GetJobManifestResult {
      /** The Amazon S3 presigned URL for the manifest file associated with the specified 
JobId value. **/
      ManifestURI?: String;
    }
    export interface GetJobUnlockCodeRequest {
      /** The ID for the job that you want to get the UnlockCode value for, for example 
JID123e4567-e89b-12d3-a456-426655440000. **/
      JobId: JobId;
    }
    export interface GetJobUnlockCodeResult {
      /** The UnlockCode value for the specified job. The UnlockCode value can be accessed
for up to 90 days after the job has been created. **/
      UnlockCode?: String;
    }
    export interface GetSnowballUsageRequest {
    }
    export interface GetSnowballUsageResult {
      /** The service limit for number of Snowballs this account can have at once. The
default service limit is 1 (one). **/
      SnowballLimit?: Integer;
      /** The number of Snowballs that this account is currently using. **/
      SnowballsInUse?: Integer;
    }
    export interface InvalidAddressException {
      Message?: String;
    }
    export interface InvalidJobStateException {
      Message?: String;
    }
    export interface InvalidResourceException {
      Message?: String;
    }
    export interface JobListEntry {
      /** The automatically generated ID for a job, for example 
JID123e4567-e89b-12d3-a456-426655440000. **/
      JobId?: String;
      /** The current state of this job. **/
      JobState?: JobState;
      /** A value that indicates that this job is a master job. A master job represents a
successful request to create an export job. Master jobs aren&#x27;t associated with
any Snowballs. Instead, each master job will have at least one job part, and
each job part is associated with a Snowball. It might take some time before the
job parts associated with a particular master job are listed, because they are
created after the master job is created. **/
      IsMaster?: Boolean;
    }
    export interface JobLogs {
      /** A link to an Amazon S3 presigned URL where the job completion report is located. **/
      JobCompletionReportURI?: String;
      /** A link to an Amazon S3 presigned URL where the job success log is located. **/
      JobSuccessLogURI?: String;
      /** A link to an Amazon S3 presigned URL where the job failure log is located. **/
      JobFailureLogURI?: String;
    }
    export interface JobMetadata {
      /** The automatically generated ID for a job, for example 
JID123e4567-e89b-12d3-a456-426655440000. **/
      JobId?: String;
      /** The current state of the jobs. **/
      JobState?: JobState;
      /** The type of job. **/
      JobType?: JobType;
      /** The creation date for this job. **/
      CreationDate?: Timestamp;
      /** An array of S3Resource objects. Each S3Resource object represents an Amazon S3
bucket that your transferred data will be exported from or imported into. **/
      Resources?: JobResource;
      /** The description of the job, provided at job creation. **/
      Description?: String;
      /** The Amazon Resource Name (ARN) for the AWS Key Management Service (AWS KMS) key
associated with this job. This ARN was created using the CreateKey API action in
AWS KMS. **/
      KmsKeyARN?: KmsKeyARN;
      /** The role ARN associated with this job. This ARN was created using the CreateRole 
API action in AWS Identity and Access Management (IAM). **/
      RoleARN?: RoleARN;
      /** The ID for the address that you want the Snowball shipped to. **/
      AddressId?: AddressId;
      /** A job&#x27;s shipping information, including inbound and outbound tracking numbers
and shipping speed options. **/
      ShippingDetails?: ShippingDetails;
      /** The Snowball capacity preference for this job, specified at job creation. In US
regions, you can choose between 50 TB and 80 TB Snowballs. All other regions use
80 TB capacity Snowballs. **/
      SnowballCapacityPreference?: SnowballCapacity;
      /** The Amazon Simple Notification Service (Amazon SNS) notification settings
associated with a specific job. The Notification object is returned as a part of
the response syntax of the DescribeJob action in the JobMetadata data type. **/
      Notification?: Notification;
      /** A value that defines the real-time status of a Snowball&#x27;s data transfer while
the appliance is at AWS. Note that this data is only available while a job has a 
JobState value of InProgress, for both import and export jobs. **/
      DataTransferProgress?: DataTransfer;
      /** Links to Amazon S3 presigned URLs for the job report and logs. For import jobs,
the PDF job report becomes available at the end of the import process. For
export jobs, your job report typically becomes available while the Snowball for
your job part is being delivered to you. **/
      JobLogInfo?: JobLogs;
    }
    export interface JobResource {
      /** An array of S3Resource objects. **/
      S3Resources?: S3ResourceList;
    }
    export interface KMSRequestFailedException {
      Message?: String;
    }
    export interface KeyRange {
      /** The key that starts an optional key range for an export job. Ranges are
inclusive and UTF-8 binary sorted. **/
      BeginMarker?: String;
      /** The key that ends an optional key range for an export job. Ranges are inclusive
and UTF-8 binary sorted. **/
      EndMarker?: String;
    }
    export interface ListJobsRequest {
      /** The number of JobListEntry objects to return. **/
      MaxResults?: ListLimit;
      /** HTTP requests are stateless. To identify what object comes &quot;next&quot; in the list of 
JobListEntry objects, you have the option of specifying NextToken as the
starting point for your returned list. **/
      NextToken?: String;
    }
    export interface ListJobsResult {
      /** Each JobListEntry object contains a job&#x27;s state, a job&#x27;s ID, and a value that
indicates whether the job is a job part, in the case of export jobs. **/
      JobListEntries?: JobListEntryList;
      /** HTTP requests are stateless. If you use this automatically generated NextToken 
value in your next ListJobs call, your returned JobListEntry objects will start
from this point in the array. **/
      NextToken?: String;
    }
    export interface Notification {
      /** The new SNS TopicArn that you want to associate with this job. You can create
Amazon Resource Names (ARNs) for topics by using the CreateTopic
[http://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html] Amazon SNS API
action.

Note that you can subscribe email addresses to an Amazon SNS topic through the
AWS Management Console, or by using the Subscribe
[http://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html] AWS Simple
Notification Service (SNS) API action. **/
      SnsTopicARN?: SnsTopicARN;
      /** The list of job states that will trigger a notification for this job. **/
      JobStatesToNotify?: JobStateList;
      /** Any change in job state will trigger a notification for this job. **/
      NotifyAll?: Boolean;
    }
    export interface S3Resource {
      /** The Amazon Resource Name (ARN) of an Amazon S3 bucket. **/
      BucketArn?: ResourceARN;
      /** For export jobs, you can provide an optional KeyRange within a specific Amazon
S3 bucket. The length of the range is defined at job creation, and has either an
inclusive BeginMarker, an inclusive EndMarker, or both. Ranges are UTF-8 binary
sorted. **/
      KeyRange?: KeyRange;
    }
    export interface Shipment {
      /** Status information for a shipment. Valid statuses include NEW, IN_TRANSIT, and 
DELIVERED. **/
      Status?: String;
      /** The tracking number for this job. Using this tracking number with your region&#x27;s
carrier&#x27;s website, you can track a Snowball as the carrier transports it.

For India, the carrier is Amazon Logistics. For all other regions, UPS is the
carrier. **/
      TrackingNumber?: String;
    }
    export interface ShippingDetails {
      /** The shipping speed for a particular job. Note that this speed does not dictate
how soon you&#x27;ll get the Snowball from the job&#x27;s creation date. This speed
represents how quickly it moves to its destination while in transit. Regional
shipping speeds are as follows:

&amp;#42;  In Australia, you have access to express shipping. Typically, Snowballs
 shipped express are delivered in about a day.
 
 
*  In the European Union (EU), you have access to express shipping. Typically,
 Snowballs shipped express are delivered in about a day. In addition, most
 countries in the EU have access to standard shipping, which typically takes
 less than a week, one way.
 
 
*  In India, Snowballs are delivered in one to seven days.
 
 
*  In the United States of America (US), you have access to one-day shipping
 and two-day shipping. **/
      ShippingOption?: ShippingOption;
      /** The Status and TrackingNumber values for a Snowball being delivered to the
address that you specified for a particular job. **/
      InboundShipment?: Shipment;
      /** The Status and TrackingNumber values for a Snowball being returned to AWS for a
particular job. **/
      OutboundShipment?: Shipment;
    }
    export interface UnsupportedAddressException {
      Message?: String;
    }
    export interface UpdateJobRequest {
      /** The job ID of the job that you want to update, for example 
JID123e4567-e89b-12d3-a456-426655440000. **/
      JobId: JobId;
      /** The new role Amazon Resource Name (ARN) that you want to associate with this
job. To create a role ARN, use the CreateRole
[http://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html] AWS
Identity and Access Management (IAM) API action. **/
      RoleARN?: RoleARN;
      /** The new or updated Notification object. **/
      Notification?: Notification;
      /** The updated S3Resource object (for a single Amazon S3 bucket or key range), or
the updated JobResource object (for multiple buckets or key ranges). **/
      Resources?: JobResource;
      /** The ID of the updated Address object. **/
      AddressId?: AddressId;
      /** The updated shipping option value of this job&#x27;s ShippingDetails object. **/
      ShippingOption?: ShippingOption;
      /** The updated description of this job&#x27;s JobMetadata object. **/
      Description?: String;
      /** The updated SnowballCapacityPreference of this job&#x27;s JobMetadata object. Note
that the 50 TB Snowballs are only available in the US regions. **/
      SnowballCapacityPreference?: SnowballCapacity;
    }
    export interface UpdateJobResult {
    }
  }
}
