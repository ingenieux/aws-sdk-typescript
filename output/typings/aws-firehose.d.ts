// Type definitions for aws-sdk - Amazon Kinesis Firehose
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2015-08-04
    * endpointPrefix: firehose
    * serviceAbbreviation: Firehose
    * signatureVersion: v4
    * protocol: json
    *
    * Amazon Kinesis Firehose API Reference Amazon Kinesis Firehose is a fully-managed
 service that delivers real-time streaming data to destinations such as Amazon
 Simple Storage Service (Amazon S3), Amazon Elasticsearch Service (Amazon ES),
 and Amazon Redshift.
    *
    */
  export class Firehose extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Creates a delivery stream.

 CreateDeliveryStream is an asynchronous operation that immediately returns. The
initial status of the delivery stream is CREATING. After the delivery stream is
created, its status is ACTIVE and it now accepts data. Attempts to send data to
a delivery stream that is not in the ACTIVE state cause an exception. To check
the state of a delivery stream, use DescribeDeliveryStream.

The name of a delivery stream identifies it. You can&#x27;t have two delivery streams
with the same name in the same region. Two delivery streams in different AWS
accounts or different regions in the same AWS account can have the same name.

By default, you can create up to 20 delivery streams per region.

A delivery stream can only be configured with a single destination, Amazon S3,
Amazon Elasticsearch Service, or Amazon Redshift. For correct 
CreateDeliveryStream request syntax, specify only one destination configuration
parameter: either S3DestinationConfiguration, 
ElasticsearchDestinationConfiguration, or RedshiftDestinationConfiguration. 

As part of S3DestinationConfiguration, optional values BufferingHints, 
EncryptionConfiguration, and CompressionFormat can be provided. By default, if
no BufferingHints value is provided, Firehose buffers data up to 5 MB or for 5
minutes, whichever condition is satisfied first. Note that BufferingHints is a
hint, so there are some cases where the service cannot adhere to these
conditions strictly; for example, record boundaries are such that the size is a
little over or under the configured buffering size. By default, no encryption is
performed. We strongly recommend that you enable encryption to ensure secure
data storage in Amazon S3.

A few notes about RedshiftDestinationConfiguration:

 &amp;#42;  An Amazon Redshift destination requires an S3 bucket as intermediate
   location, as Firehose first delivers data to S3 and then uses COPY syntax to
   load data into an Amazon Redshift table. This is specified in the 
   RedshiftDestinationConfiguration.S3Configuration parameter element.
   
   
 &amp;#42;  The compression formats SNAPPY or ZIP cannot be specified in 
   RedshiftDestinationConfiguration.S3Configuration because the Amazon Redshift 
   COPY operation that reads from the S3 bucket doesn&#x27;t support these
   compression formats.
   
   
 &amp;#42;  We strongly recommend that the username and password provided is used
   exclusively for Firehose purposes, and that the permissions for the account
   are restricted for Amazon Redshift INSERT permissions.
   
   

Firehose assumes the IAM role that is configured as part of destinations. The
IAM role should allow the Firehose principal to assume the role, and the role
should have permissions that allows the service to deliver the data. For more
information, see Amazon S3 Bucket Access
[http://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3] 
in the Amazon Kinesis Firehose Developer Guide.
     *
     * @error InvalidArgumentException   
     * @error LimitExceededException   
     * @error ResourceInUseException   
     */
    createDeliveryStream(params: Firehose.CreateDeliveryStreamInput, callback?: (err: Firehose.InvalidArgumentException | Firehose.LimitExceededException | Firehose.ResourceInUseException | any, data: Firehose.CreateDeliveryStreamOutput | any) => void): Request<Firehose.CreateDeliveryStreamOutput | any, Firehose.InvalidArgumentException | Firehose.LimitExceededException | Firehose.ResourceInUseException | any>;
    /**
     * Deletes a delivery stream and its data.

You can delete a delivery stream only if it is in ACTIVE or DELETING state, and
not in the CREATING state. While the deletion request is in process, the
delivery stream is in the DELETING state.

To check the state of a delivery stream, use DescribeDeliveryStream.

While the delivery stream is DELETING state, the service may continue to accept
the records, but the service doesn&#x27;t make any guarantees with respect to
delivering the data. Therefore, as a best practice, you should first stop any
applications that are sending records before deleting a delivery stream.
     *
     * @error ResourceInUseException   
     * @error ResourceNotFoundException   
     */
    deleteDeliveryStream(params: Firehose.DeleteDeliveryStreamInput, callback?: (err: Firehose.ResourceInUseException | Firehose.ResourceNotFoundException | any, data: Firehose.DeleteDeliveryStreamOutput | any) => void): Request<Firehose.DeleteDeliveryStreamOutput | any, Firehose.ResourceInUseException | Firehose.ResourceNotFoundException | any>;
    /**
     * Describes the specified delivery stream and gets the status. For example, after
your delivery stream is created, call DescribeDeliveryStream to see if the
delivery stream is ACTIVE and therefore ready for data to be sent to it.
     *
     * @error ResourceNotFoundException   
     */
    describeDeliveryStream(params: Firehose.DescribeDeliveryStreamInput, callback?: (err: Firehose.ResourceNotFoundException | any, data: Firehose.DescribeDeliveryStreamOutput | any) => void): Request<Firehose.DescribeDeliveryStreamOutput | any, Firehose.ResourceNotFoundException | any>;
    /**
     * Lists your delivery streams.

The number of delivery streams might be too large to return using a single call
to ListDeliveryStreams. You can limit the number of delivery streams returned,
using the Limit parameter. To determine whether there are more delivery streams
to list, check the value of HasMoreDeliveryStreams in the output. If there are
more delivery streams to list, you can request them by specifying the name of
the last delivery stream returned in the call in the 
ExclusiveStartDeliveryStreamName parameter of a subsequent call.
     *
     */
    listDeliveryStreams(params: Firehose.ListDeliveryStreamsInput, callback?: (err: any, data: Firehose.ListDeliveryStreamsOutput | any) => void): Request<Firehose.ListDeliveryStreamsOutput | any, any>;
    /**
     * Writes a single data record into an Amazon Kinesis Firehose delivery stream. To
write multiple data records into a delivery stream, use PutRecordBatch.
Applications using these operations are referred to as producers.

By default, each delivery stream can take in up to 2,000 transactions per
second, 5,000 records per second, or 5 MB per second. Note that if you use 
PutRecord and PutRecordBatch, the limits are an aggregate across these two
operations for each delivery stream. For more information about limits and how
to request an increase, see Amazon Kinesis Firehose Limits
[http://docs.aws.amazon.com/firehose/latest/dev/limits.html]. 

You must specify the name of the delivery stream and the data record when using 
PutRecord. The data record consists of a data blob that can be up to 1,000 KB in
size, and any kind of data, for example, a segment from a log file, geographic
location data, web site clickstream data, etc.

Firehose buffers records before delivering them to the destination. To
disambiguate the data blobs at the destination, a common solution is to use
delimiters in the data, such as a newline (\n) or some other character unique
within the data. This allows the consumer application(s) to parse individual
data items when reading the data from the destination.

The PutRecord operation returns a RecordId, which is a unique string assigned to
each record. Producer applications can use this ID for purposes such as
auditability and investigation.

If the PutRecord operation throws a ServiceUnavailableException, back off and
retry. If the exception persists, it is possible that the throughput limits have
been exceeded for the delivery stream. 

Data records sent to Firehose are stored for 24 hours from the time they are
added to a delivery stream as it attempts to send the records to the
destination. If the destination is unreachable for more than 24 hours, the data
is no longer available.
     *
     * @error ResourceNotFoundException   
     * @error InvalidArgumentException   
     * @error ServiceUnavailableException   
     */
    putRecord(params: Firehose.PutRecordInput, callback?: (err: Firehose.ResourceNotFoundException | Firehose.InvalidArgumentException | Firehose.ServiceUnavailableException | any, data: Firehose.PutRecordOutput | any) => void): Request<Firehose.PutRecordOutput | any, Firehose.ResourceNotFoundException | Firehose.InvalidArgumentException | Firehose.ServiceUnavailableException | any>;
    /**
     * Writes multiple data records into a delivery stream in a single call, which can
achieve higher throughput per producer than when writing single records. To
write single data records into a delivery stream, use PutRecord. Applications
using these operations are referred to as producers.

Each PutRecordBatch request supports up to 500 records. Each record in the
request can be as large as 1,000 KB (before 64-bit encoding), up to a limit of 4
MB for the entire request. By default, each delivery stream can take in up to
2,000 transactions per second, 5,000 records per second, or 5 MB per second.
Note that if you use PutRecord and PutRecordBatch, the limits are an aggregate
across these two operations for each delivery stream. For more information about
limits and how to request an increase, see Amazon Kinesis Firehose Limits
[http://docs.aws.amazon.com/firehose/latest/dev/limits.html]. 

You must specify the name of the delivery stream and the data record when using 
PutRecord. The data record consists of a data blob that can be up to 1,000 KB in
size, and any kind of data, for example, a segment from a log file, geographic
location data, web site clickstream data, and so on.

Firehose buffers records before delivering them to the destination. To
disambiguate the data blobs at the destination, a common solution is to use
delimiters in the data, such as a newline (\n) or some other character unique
within the data. This allows the consumer application(s) to parse individual
data items when reading the data from the destination.

The PutRecordBatch response includes a count of any failed records, 
FailedPutCount, and an array of responses, RequestResponses. The FailedPutCount 
value is a count of records that failed. Each entry in the RequestResponses 
array gives additional information of the processed record. Each entry in 
RequestResponses directly correlates with a record in the request array using
the same ordering, from the top to the bottom of the request and response. 
RequestResponses always includes the same number of records as the request
array. RequestResponses both successfully and unsuccessfully processed records.
Firehose attempts to process all records in each PutRecordBatch request. A
single record failure does not stop the processing of subsequent records.

A successfully processed record includes a RecordId value, which is a unique
value identified for the record. An unsuccessfully processed record includes 
ErrorCode and ErrorMessage values. ErrorCode reflects the type of error and is
one of the following values: ServiceUnavailable or InternalFailure. ErrorMessage 
provides more detailed information about the error.

If FailedPutCount is greater than 0 (zero), retry the request. A retry of the
entire batch of records is possible; however, we strongly recommend that you
inspect the entire response and resend only those records that failed
processing. This minimizes duplicate records and also reduces the total bytes
sent (and corresponding charges).

If the PutRecordBatch operation throws a ServiceUnavailableException, back off
and retry. If the exception persists, it is possible that the throughput limits
have been exceeded for the delivery stream.

Data records sent to Firehose are stored for 24 hours from the time they are
added to a delivery stream as it attempts to send the records to the
destination. If the destination is unreachable for more than 24 hours, the data
is no longer available.
     *
     * @error ResourceNotFoundException   
     * @error InvalidArgumentException   
     * @error ServiceUnavailableException   
     */
    putRecordBatch(params: Firehose.PutRecordBatchInput, callback?: (err: Firehose.ResourceNotFoundException | Firehose.InvalidArgumentException | Firehose.ServiceUnavailableException | any, data: Firehose.PutRecordBatchOutput | any) => void): Request<Firehose.PutRecordBatchOutput | any, Firehose.ResourceNotFoundException | Firehose.InvalidArgumentException | Firehose.ServiceUnavailableException | any>;
    /**
     * Updates the specified destination of the specified delivery stream. Note:
Switching between Elasticsearch and other services is not supported. For
Elasticsearch destination, you can only update an existing Elasticsearch
destination with this operation.

This operation can be used to change the destination type (for example, to
replace the Amazon S3 destination with Amazon Redshift) or change the parameters
associated with a given destination (for example, to change the bucket name of
the Amazon S3 destination). The update may not occur immediately. The target
delivery stream remains active while the configurations are updated, so data
writes to the delivery stream can continue during this process. The updated
configurations are normally effective within a few minutes.

If the destination type is the same, Firehose merges the configuration
parameters specified in the UpdateDestination request with the destination
configuration that already exists on the delivery stream. If any of the
parameters are not specified in the update request, then the existing
configuration parameters are retained. For example, in the Amazon S3
destination, if EncryptionConfiguration is not specified then the existing 
EncryptionConfiguration is maintained on the destination.

If the destination type is not the same, for example, changing the destination
from Amazon S3 to Amazon Redshift, Firehose does not merge any parameters. In
this case, all parameters must be specified.

Firehose uses the CurrentDeliveryStreamVersionId to avoid race conditions and
conflicting merges. This is a required field in every request and the service
only updates the configuration if the existing configuration matches the 
VersionId. After the update is applied successfully, the VersionId is updated,
which can be retrieved with the DescribeDeliveryStream operation. The new 
VersionId should be uses to set CurrentDeliveryStreamVersionId in the next 
UpdateDestination operation.
     *
     * @error InvalidArgumentException   
     * @error ResourceInUseException   
     * @error ResourceNotFoundException   
     * @error ConcurrentModificationException   
     */
    updateDestination(params: Firehose.UpdateDestinationInput, callback?: (err: Firehose.InvalidArgumentException | Firehose.ResourceInUseException | Firehose.ResourceNotFoundException | Firehose.ConcurrentModificationException | any, data: Firehose.UpdateDestinationOutput | any) => void): Request<Firehose.UpdateDestinationOutput | any, Firehose.InvalidArgumentException | Firehose.ResourceInUseException | Firehose.ResourceNotFoundException | Firehose.ConcurrentModificationException | any>;

  }

  export module Firehose {

    export type AWSKMSKeyARN = string;

    export type BooleanObject = boolean;

    export type BucketARN = string;

    export type ClusterJDBCURL = string;

    export type CompressionFormat = string;

    export type CopyOptions = string;

    export type Data = any;

    export type DataTableColumns = string;

    export type DataTableName = string;

    export type DeliveryStreamARN = string;

    export type DeliveryStreamName = string;

    export type DeliveryStreamNameList = DeliveryStreamName[];

    export type DeliveryStreamStatus = string;

    export type DeliveryStreamVersionId = string;

    export type DescribeDeliveryStreamInputLimit = number;

    export type DestinationDescriptionList = DestinationDescription[];

    export type DestinationId = string;

    export type ElasticsearchBufferingIntervalInSeconds = number;

    export type ElasticsearchBufferingSizeInMBs = number;

    export type ElasticsearchDomainARN = string;

    export type ElasticsearchIndexName = string;

    export type ElasticsearchIndexRotationPeriod = string;

    export type ElasticsearchRetryDurationInSeconds = number;

    export type ElasticsearchS3BackupMode = string;

    export type ElasticsearchTypeName = string;

    export type ErrorCode = string;

    export type ErrorMessage = string;

    export type IntervalInSeconds = number;

    export type ListDeliveryStreamsInputLimit = number;

    export type LogGroupName = string;

    export type LogStreamName = string;

    export type NoEncryptionConfig = string;

    export type NonNegativeIntegerObject = number;

    export type Password = string;

    export type Prefix = string;

    export type PutRecordBatchRequestEntryList = Record[];

    export type PutRecordBatchResponseEntryList = PutRecordBatchResponseEntry[];

    export type PutResponseRecordId = string;

    export type RedshiftRetryDurationInSeconds = number;

    export type RoleARN = string;

    export type SizeInMBs = number;

    export type Timestamp = number;

    export type Username = string;

    export interface BufferingHints {
      /** Buffer incoming data to the specified size, in MBs, before delivering it to the
destination. The default value is 5.

We recommend setting SizeInMBs to a value greater than the amount of data you
typically ingest into the delivery stream in 10 seconds. For example, if you
typically ingest data at 1 MB/sec set SizeInMBs to be 10 MB or higher. **/
      SizeInMBs?: SizeInMBs;
      /** Buffer incoming data for the specified period of time, in seconds, before
delivering it to the destination. The default value is 300. **/
      IntervalInSeconds?: IntervalInSeconds;
    }
    export interface CloudWatchLoggingOptions {
      /** Enables or disables CloudWatch logging. **/
      Enabled?: BooleanObject;
      /** The CloudWatch group name for logging. This value is required if Enabled is
true. **/
      LogGroupName?: LogGroupName;
      /** The CloudWatch log stream name for logging. This value is required if Enabled is
true. **/
      LogStreamName?: LogStreamName;
    }
    export interface ConcurrentModificationException {
      /** A message that provides information about the error. **/
      message?: ErrorMessage;
    }
    export interface CopyCommand {
      /** The name of the target table. The table must already exist in the database. **/
      DataTableName: DataTableName;
      /** A comma-separated list of column names. **/
      DataTableColumns?: DataTableColumns;
      /** Optional parameters to use with the Amazon Redshift COPY command. For more
information, see the &quot;Optional Parameters&quot; section of Amazon Redshift COPY
command [http://docs.aws.amazon.com/redshift/latest/dg/r_COPY.html]. Some
possible examples that would apply to Firehose are as follows.

delimiter &#x27;\t&#x27; lzop; - fields are delimited with &quot;\t&quot; (TAB character) and
compressed using lzop.

delimiter &#x27;| - fields are delimited with &quot;|&quot; (this is the default delimiter).

delimiter &#x27;|&#x27; escape - the delimiter should be escaped.

fixedwidth &#x27;venueid:3,venuename:25,venuecity:12,venuestate:2,venueseats:6&#x27; -
fields are fixed width in the source, with each width specified after every
column in the table.

JSON &#x27;s3://mybucket/jsonpaths.txt&#x27; - data is in JSON format, and the path
specified is the format of the data.

For more examples, see Amazon Redshift COPY command examples
[http://docs.aws.amazon.com/redshift/latest/dg/r_COPY_command_examples.html]. **/
      CopyOptions?: CopyOptions;
    }
    export interface CreateDeliveryStreamInput {
      /** The name of the delivery stream. **/
      DeliveryStreamName: DeliveryStreamName;
      /** The destination in Amazon S3. This value must be specified if 
ElasticsearchDestinationConfiguration or RedshiftDestinationConfiguration is
specified (see restrictions listed above). **/
      S3DestinationConfiguration?: S3DestinationConfiguration;
      /** The destination in Amazon Redshift. This value cannot be specified if Amazon S3
or Amazon Elasticsearch is the desired destination (see restrictions listed
above). **/
      RedshiftDestinationConfiguration?: RedshiftDestinationConfiguration;
      /** The destination in Amazon ES. This value cannot be specified if Amazon S3 or
Amazon Redshift is the desired destination (see restrictions listed above). **/
      ElasticsearchDestinationConfiguration?: ElasticsearchDestinationConfiguration;
    }
    export interface CreateDeliveryStreamOutput {
      /** The ARN of the delivery stream. **/
      DeliveryStreamARN?: DeliveryStreamARN;
    }
    export interface DeleteDeliveryStreamInput {
      /** The name of the delivery stream. **/
      DeliveryStreamName: DeliveryStreamName;
    }
    export interface DeleteDeliveryStreamOutput {
    }
    export interface DeliveryStreamDescription {
      /** The name of the delivery stream. **/
      DeliveryStreamName: DeliveryStreamName;
      /** The Amazon Resource Name (ARN) of the delivery stream. **/
      DeliveryStreamARN: DeliveryStreamARN;
      /** The status of the delivery stream. **/
      DeliveryStreamStatus: DeliveryStreamStatus;
      /** Used when calling the UpdateDestination operation. Each time the destination is
updated for the delivery stream, the VersionId is changed, and the current
VersionId is required when updating the destination. This is so that the service
knows it is applying the changes to the correct version of the delivery stream. **/
      VersionId: DeliveryStreamVersionId;
      /** The date and time that the delivery stream was created. **/
      CreateTimestamp?: Timestamp;
      /** The date and time that the delivery stream was last updated. **/
      LastUpdateTimestamp?: Timestamp;
      /** The destinations. **/
      Destinations: DestinationDescriptionList;
      /** Indicates whether there are more destinations available to list. **/
      HasMoreDestinations: BooleanObject;
    }
    export interface DescribeDeliveryStreamInput {
      /** The name of the delivery stream. **/
      DeliveryStreamName: DeliveryStreamName;
      /** The limit on the number of destinations to return. Currently, you can have one
destination per delivery stream. **/
      Limit?: DescribeDeliveryStreamInputLimit;
      /** Specifies the destination ID to start returning the destination information.
Currently Firehose supports one destination per delivery stream. **/
      ExclusiveStartDestinationId?: DestinationId;
    }
    export interface DescribeDeliveryStreamOutput {
      /** Information about the delivery stream. **/
      DeliveryStreamDescription: DeliveryStreamDescription;
    }
    export interface DestinationDescription {
      /** The ID of the destination. **/
      DestinationId: DestinationId;
      /** The Amazon S3 destination. **/
      S3DestinationDescription?: S3DestinationDescription;
      /** The destination in Amazon Redshift. **/
      RedshiftDestinationDescription?: RedshiftDestinationDescription;
      /** The destination in Amazon ES. **/
      ElasticsearchDestinationDescription?: ElasticsearchDestinationDescription;
    }
    export interface ElasticsearchBufferingHints {
      /** Buffer incoming data for the specified period of time, in seconds, before
delivering it to the destination. The default value is 300 (5 minutes). **/
      IntervalInSeconds?: ElasticsearchBufferingIntervalInSeconds;
      /** Buffer incoming data to the specified size, in MBs, before delivering it to the
destination. The default value is 5.

We recommend setting SizeInMBs to a value greater than the amount of data you
typically ingest into the delivery stream in 10 seconds. For example, if you
typically ingest data at 1 MB/sec, set SizeInMBs to be 10 MB or higher. **/
      SizeInMBs?: ElasticsearchBufferingSizeInMBs;
    }
    export interface ElasticsearchDestinationConfiguration {
      /** The ARN of the IAM role to be assumed by Firehose for calling the Amazon ES
Configuration API and for indexing documents. For more information, see Amazon
S3 Bucket Access
[http://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3]
. **/
      RoleARN: RoleARN;
      /** The ARN of the Amazon ES domain. The IAM role must have permission for
DescribeElasticsearchDomain, DescribeElasticsearchDomains, and 
DescribeElasticsearchDomainConfigafter assuming RoleARN. **/
      DomainARN: ElasticsearchDomainARN;
      /** The Elasticsearch index name. **/
      IndexName: ElasticsearchIndexName;
      /** The Elasticsearch type name. **/
      TypeName: ElasticsearchTypeName;
      /** The Elasticsearch index rotation period. Index rotation appends a timestamp to
the IndexName to facilitate expiration of old data. For more information, see 
Index Rotation for Amazon Elasticsearch Service Destination
[http://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html#es-index-rotation]
. Default value isOneDay. **/
      IndexRotationPeriod?: ElasticsearchIndexRotationPeriod;
      /** Buffering options. If no value is specified, ElasticsearchBufferingHints object
default values are used. **/
      BufferingHints?: ElasticsearchBufferingHints;
      /** Configures retry behavior in the event that Firehose is unable to deliver
documents to Amazon ES. Default value is 300 (5 minutes). **/
      RetryOptions?: ElasticsearchRetryOptions;
      /** Defines how documents should be delivered to Amazon S3. When set to
FailedDocumentsOnly, Firehose writes any documents that could not be indexed to
the configured Amazon S3 destination, with elasticsearch-failed/ appended to the
key prefix. When set to AllDocuments, Firehose delivers all incoming records to
Amazon S3, and also writes failed documents with elasticsearch-failed/ appended
to the prefix. For more information, see Amazon S3 Backup for Amazon
Elasticsearch Service Destination
[http://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html#es-s3-backup]
. Default value is FailedDocumentsOnly. **/
      S3BackupMode?: ElasticsearchS3BackupMode;
      S3Configuration: S3DestinationConfiguration;
      /** Describes CloudWatch logging options for your delivery stream. **/
      CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    }
    export interface ElasticsearchDestinationDescription {
      /** The ARN of the AWS credentials. **/
      RoleARN?: RoleARN;
      /** The ARN of the Amazon ES domain. **/
      DomainARN?: ElasticsearchDomainARN;
      /** The Elasticsearch index name. **/
      IndexName?: ElasticsearchIndexName;
      /** The Elasticsearch type name. **/
      TypeName?: ElasticsearchTypeName;
      /** The Elasticsearch index rotation period **/
      IndexRotationPeriod?: ElasticsearchIndexRotationPeriod;
      /** Buffering options. **/
      BufferingHints?: ElasticsearchBufferingHints;
      /** Elasticsearch retry options. **/
      RetryOptions?: ElasticsearchRetryOptions;
      /** Amazon S3 backup mode. **/
      S3BackupMode?: ElasticsearchS3BackupMode;
      S3DestinationDescription?: S3DestinationDescription;
      /** CloudWatch logging options. **/
      CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    }
    export interface ElasticsearchDestinationUpdate {
      /** The ARN of the IAM role to be assumed by Firehose for calling the Amazon ES
Configuration API and for indexing documents. For more information, see Amazon
S3 Bucket Access
[http://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3]
. **/
      RoleARN?: RoleARN;
      /** The ARN of the Amazon ES domain. The IAM role must have permission for
DescribeElasticsearchDomain, DescribeElasticsearchDomains , and
DescribeElasticsearchDomainConfig after assuming RoleARN. **/
      DomainARN?: ElasticsearchDomainARN;
      /** The Elasticsearch index name. **/
      IndexName?: ElasticsearchIndexName;
      /** The Elasticsearch type name. **/
      TypeName?: ElasticsearchTypeName;
      /** The Elasticsearch index rotation period. Index rotation appends a timestamp to
the IndexName to facilitate the expiration of old data. For more information,
see Index Rotation for Amazon Elasticsearch Service Destination
[http://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html#es-index-rotation]
. Default value isOneDay. **/
      IndexRotationPeriod?: ElasticsearchIndexRotationPeriod;
      /** Buffering options. If no value is specified, ElasticsearchBufferingHints object
default values are used. **/
      BufferingHints?: ElasticsearchBufferingHints;
      /** Configures retry behavior in the event that Firehose is unable to deliver
documents to Amazon ES. Default value is 300 (5 minutes). **/
      RetryOptions?: ElasticsearchRetryOptions;
      S3Update?: S3DestinationUpdate;
      /** Describes CloudWatch logging options for your delivery stream. **/
      CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    }
    export interface ElasticsearchRetryOptions {
      /** After an initial failure to deliver to Amazon ES, the total amount of time
during which Firehose re-attempts delivery (including the first attempt). After
this time has elapsed, the failed documents are written to Amazon S3. Default
value is 300 seconds (5 minutes). A value of 0 (zero) results in no retries. **/
      DurationInSeconds?: ElasticsearchRetryDurationInSeconds;
    }
    export interface EncryptionConfiguration {
      /** Specifically override existing encryption information to ensure no encryption is
used. **/
      NoEncryptionConfig?: NoEncryptionConfig;
      /** The encryption key. **/
      KMSEncryptionConfig?: KMSEncryptionConfig;
    }
    export interface InvalidArgumentException {
      /** A message that provides information about the error. **/
      message?: ErrorMessage;
    }
    export interface KMSEncryptionConfig {
      /** The ARN of the encryption key. Must belong to the same region as the destination
Amazon S3 bucket. **/
      AWSKMSKeyARN: AWSKMSKeyARN;
    }
    export interface LimitExceededException {
      /** A message that provides information about the error. **/
      message?: ErrorMessage;
    }
    export interface ListDeliveryStreamsInput {
      /** The maximum number of delivery streams to list. **/
      Limit?: ListDeliveryStreamsInputLimit;
      /** The name of the delivery stream to start the list with. **/
      ExclusiveStartDeliveryStreamName?: DeliveryStreamName;
    }
    export interface ListDeliveryStreamsOutput {
      /** The names of the delivery streams. **/
      DeliveryStreamNames: DeliveryStreamNameList;
      /** Indicates whether there are more delivery streams available to list. **/
      HasMoreDeliveryStreams: BooleanObject;
    }
    export interface PutRecordBatchInput {
      /** The name of the delivery stream. **/
      DeliveryStreamName: DeliveryStreamName;
      /** One or more records. **/
      Records: PutRecordBatchRequestEntryList;
    }
    export interface PutRecordBatchOutput {
      /** The number of unsuccessfully written records. **/
      FailedPutCount: NonNegativeIntegerObject;
      /** The results for the individual records. The index of each element matches the
same index in which records were sent. **/
      RequestResponses: PutRecordBatchResponseEntryList;
    }
    export interface PutRecordBatchResponseEntry {
      /** The ID of the record. **/
      RecordId?: PutResponseRecordId;
      /** The error code for an individual record result. **/
      ErrorCode?: ErrorCode;
      /** The error message for an individual record result. **/
      ErrorMessage?: ErrorMessage;
    }
    export interface PutRecordInput {
      /** The name of the delivery stream. **/
      DeliveryStreamName: DeliveryStreamName;
      /** The record. **/
      Record: Record;
    }
    export interface PutRecordOutput {
      /** The ID of the record. **/
      RecordId: PutResponseRecordId;
    }
    export interface Record {
      /** The data blob, which is base64-encoded when the blob is serialized. The maximum
size of the data blob, before base64-encoding, is 1,000 KB. **/
      Data: Data;
    }
    export interface RedshiftDestinationConfiguration {
      /** The ARN of the AWS credentials. **/
      RoleARN: RoleARN;
      /** The database connection string. **/
      ClusterJDBCURL: ClusterJDBCURL;
      /** The COPY command. **/
      CopyCommand: CopyCommand;
      /** The name of the user. **/
      Username: Username;
      /** The user password. **/
      Password: Password;
      /** Configures retry behavior in the event that Firehose is unable to deliver
documents to Amazon Redshift. Default value is 3600 (60 minutes). **/
      RetryOptions?: RedshiftRetryOptions;
      /** The S3 configuration for the intermediate location from which Amazon Redshift
obtains data. Restrictions are described in the topic for CreateDeliveryStream.

The compression formats SNAPPY or ZIP cannot be specified in 
RedshiftDestinationConfiguration.S3Configuration because the Amazon Redshift 
COPY operation that reads from the S3 bucket doesn&#x27;t support these compression
formats. **/
      S3Configuration: S3DestinationConfiguration;
      /** Describes CloudWatch logging options for your delivery stream. **/
      CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    }
    export interface RedshiftDestinationDescription {
      /** The ARN of the AWS credentials. **/
      RoleARN: RoleARN;
      /** The database connection string. **/
      ClusterJDBCURL: ClusterJDBCURL;
      /** The COPY command. **/
      CopyCommand: CopyCommand;
      /** The name of the user. **/
      Username: Username;
      /** Configures retry behavior in the event that Firehose is unable to deliver
documents to Amazon Redshift. Default value is 3600 (60 minutes). **/
      RetryOptions?: RedshiftRetryOptions;
      /** The Amazon S3 destination. **/
      S3DestinationDescription: S3DestinationDescription;
      /** Describes CloudWatch logging options for your delivery stream. **/
      CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    }
    export interface RedshiftDestinationUpdate {
      /** The ARN of the AWS credentials. **/
      RoleARN?: RoleARN;
      /** The database connection string. **/
      ClusterJDBCURL?: ClusterJDBCURL;
      /** The COPY command. **/
      CopyCommand?: CopyCommand;
      /** The name of the user. **/
      Username?: Username;
      /** The user password. **/
      Password?: Password;
      /** Configures retry behavior in the event that Firehose is unable to deliver
documents to Amazon Redshift. Default value is 3600 (60 minutes). **/
      RetryOptions?: RedshiftRetryOptions;
      /** The Amazon S3 destination.

The compression formats SNAPPY or ZIP cannot be specified in 
RedshiftDestinationUpdate.S3Update because the Amazon Redshift COPY operation
that reads from the S3 bucket doesn&#x27;t support these compression formats. **/
      S3Update?: S3DestinationUpdate;
      /** Describes CloudWatch logging options for your delivery stream. **/
      CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    }
    export interface RedshiftRetryOptions {
      /** The length of time during which Firehose retries delivery after a failure,
starting from the initial request and including the first attempt. The default
value is 3600 seconds (60 minutes). Firehose does not retry if the value of 
DurationInSeconds is 0 (zero) or if the first delivery attempt takes longer than
the current value. **/
      DurationInSeconds?: RedshiftRetryDurationInSeconds;
    }
    export interface ResourceInUseException {
      /** A message that provides information about the error. **/
      message?: ErrorMessage;
    }
    export interface ResourceNotFoundException {
      /** A message that provides information about the error. **/
      message?: ErrorMessage;
    }
    export interface S3DestinationConfiguration {
      /** The ARN of the AWS credentials. **/
      RoleARN: RoleARN;
      /** The ARN of the S3 bucket. **/
      BucketARN: BucketARN;
      /** The &quot;YYYY/MM/DD/HH&quot; time format prefix is automatically used for delivered S3
files. You can specify an extra prefix to be added in front of the time format
prefix. Note that if the prefix ends with a slash, it appears as a folder in the
S3 bucket. For more information, see Amazon S3 Object Name Format
[http://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html] in the 
Amazon Kinesis Firehose Developer Guide
[http://docs.aws.amazon.com/firehose/latest/dev/]. **/
      Prefix?: Prefix;
      /** The buffering option. If no value is specified, BufferingHints object default
values are used. **/
      BufferingHints?: BufferingHints;
      /** The compression format. If no value is specified, the default is UNCOMPRESSED.

The compression formats SNAPPY or ZIP cannot be specified for Amazon Redshift
destinations because they are not supported by the Amazon Redshift COPY 
operation that reads from the S3 bucket. **/
      CompressionFormat?: CompressionFormat;
      /** The encryption configuration. If no value is specified, the default is no
encryption. **/
      EncryptionConfiguration?: EncryptionConfiguration;
      /** Describes CloudWatch logging options for your delivery stream. **/
      CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    }
    export interface S3DestinationDescription {
      /** The ARN of the AWS credentials. **/
      RoleARN: RoleARN;
      /** The ARN of the S3 bucket. **/
      BucketARN: BucketARN;
      /** The &quot;YYYY/MM/DD/HH&quot; time format prefix is automatically used for delivered S3
files. You can specify an extra prefix to be added in front of the time format
prefix. Note that if the prefix ends with a slash, it appears as a folder in the
S3 bucket. For more information, see Amazon S3 Object Name Format
[http://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html] in the 
Amazon Kinesis Firehose Developer Guide
[http://docs.aws.amazon.com/firehose/latest/dev/]. **/
      Prefix?: Prefix;
      /** The buffering option. If no value is specified, BufferingHints object default
values are used. **/
      BufferingHints: BufferingHints;
      /** The compression format. If no value is specified, the default is NOCOMPRESSION. **/
      CompressionFormat: CompressionFormat;
      /** The encryption configuration. If no value is specified, the default is no
encryption. **/
      EncryptionConfiguration: EncryptionConfiguration;
      /** Describes CloudWatch logging options for your delivery stream. **/
      CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    }
    export interface S3DestinationUpdate {
      /** The ARN of the AWS credentials. **/
      RoleARN?: RoleARN;
      /** The ARN of the S3 bucket. **/
      BucketARN?: BucketARN;
      /** The &quot;YYYY/MM/DD/HH&quot; time format prefix is automatically used for delivered S3
files. You can specify an extra prefix to be added in front of the time format
prefix. Note that if the prefix ends with a slash, it appears as a folder in the
S3 bucket. For more information, see Amazon S3 Object Name Format
[http://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html] in the 
Amazon Kinesis Firehose Developer Guide
[http://docs.aws.amazon.com/firehose/latest/dev/]. **/
      Prefix?: Prefix;
      /** The buffering option. If no value is specified, BufferingHints object default
values are used. **/
      BufferingHints?: BufferingHints;
      /** The compression format. If no value is specified, the default is NOCOMPRESSION.

The compression formats SNAPPY or ZIP cannot be specified for Amazon Redshift
destinations because they are not supported by the Amazon Redshift COPY 
operation that reads from the S3 bucket. **/
      CompressionFormat?: CompressionFormat;
      /** The encryption configuration. If no value is specified, the default is no
encryption. **/
      EncryptionConfiguration?: EncryptionConfiguration;
      /** Describes CloudWatch logging options for your delivery stream. **/
      CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    }
    export interface ServiceUnavailableException {
      /** A message that provides information about the error. **/
      message?: ErrorMessage;
    }
    export interface UpdateDestinationInput {
      /** The name of the delivery stream. **/
      DeliveryStreamName: DeliveryStreamName;
      /** Obtain this value from the VersionId result of the DeliveryStreamDescription 
operation. This value is required, and helps the service to perform conditional
operations. For example, if there is a interleaving update and this value is
null, then the update destination fails. After the update is successful, the 
VersionId value is updated. The service then performs a merge of the old
configuration with the new configuration. **/
      CurrentDeliveryStreamVersionId: DeliveryStreamVersionId;
      /** The ID of the destination. **/
      DestinationId: DestinationId;
      /** Describes an update for a destination in Amazon S3. **/
      S3DestinationUpdate?: S3DestinationUpdate;
      /** Describes an update for a destination in Amazon Redshift. **/
      RedshiftDestinationUpdate?: RedshiftDestinationUpdate;
      /** Describes an update for a destination in Amazon ES. **/
      ElasticsearchDestinationUpdate?: ElasticsearchDestinationUpdate;
    }
    export interface UpdateDestinationOutput {
    }
  }
}
