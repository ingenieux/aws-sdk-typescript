///<reference path="../typings/index.d.ts" />
///<reference path="../output/typings/aws-sdk.d.ts" />
///<reference path="../output/typings/aws-s3.d.ts" />
///<reference path="../output/typings/aws-sqs.d.ts" />

import AWS = require('aws-sdk');

var str: string;

var creds: AWS.Credentials;

creds = new AWS.Credentials(str, str);
creds = new AWS.Credentials(str, str, str);
str = creds.accessKeyId;

/*
 * Base service class
 */
var service = new AWS.SQS();
service.makeRequest('POST', {param1:'foobar'}, (err, data) => {});
service.makeUnauthenticatedRequest('POST', {param1:'foobar'}, (err, data) => {});
service.setupRequestListeners();
service.makeRequest('state', {param1:'foobar'}, (err, data) => {});

var endpoint:AWS.Endpoint = service.endpoint;
endpoint.host.toUpperCase() + endpoint.hostname.toUpperCase() + endpoint.href.toUpperCase() + endpoint.port.toFixed() + endpoint.protocol.toUpperCase();

/*
 * Request class
 */

var request = new AWS.Request(service, 'POST', {param1: 'foobar'});
request.send();
request.send((err, data) => null);
request.abort();
if (request.isPageable()) {
	request.eachPage((err, data, done) => done());
}

new AWS.S3().putObject({Bucket: 'bucket', Key: 'key'}, (err, data) => {
  if (err) {
    console.log('err: ', err);
  } else {
    console.log('data: ', data);
  }
});

/*
 * SQS
 */
var sqs:AWS.SQS

//Default constructor
sqs = new AWS.SQS();

//Locking the API Version
sqs = new AWS.SQS({apiVersion: '2012-11-05'});

// Locking the API Version Globally
AWS.config.apiVersions = {
  sqs: '2012-11-05',
  // other service API versions
};

sqs.addPermission({
	AWSAccountIds: [ /* required */
		'STRING_VALUE',
		/* more items */
	],
	Actions: [ /* required */
		'STRING_VALUE',
		/* more items */
	],
	Label: 'STRING_VALUE', /* required */
	QueueUrl: 'STRING_VALUE' /* required */
	},
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else     console.log(data);           // successful response
	});

sqs.changeMessageVisibility({
		QueueUrl: 'STRING_VALUE', /* required */
		ReceiptHandle: 'STRING_VALUE', /* required */
		VisibilityTimeout: 0 /* required */
	},
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else     console.log(data);           // successful response
	});

sqs.changeMessageVisibilityBatch({
		Entries: [ /* required */
			{
				Id: 'STRING_VALUE', /* required */
				ReceiptHandle: 'STRING_VALUE', /* required */
				VisibilityTimeout: 0
			},
			/* more items */
		],
		QueueUrl: 'STRING_VALUE' /* required */
	},
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else     console.log(data);           // successful response
	});

sqs.createQueue({
		QueueName: 'STRING_VALUE', /* required */
		Attributes: {
			someKey: 'STRING_VALUE',
			/* anotherKey: ... */
		}
	},
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else     console.log(data);           // successful response
	});

sqs.deleteMessage({
		QueueUrl: 'STRING_VALUE', /* required */
		ReceiptHandle: 'STRING_VALUE' /* required */
	},
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else     console.log(data);           // successful response
	});

sqs.deleteMessageBatch({
		Entries: [ /* required */
			{
			Id: 'STRING_VALUE', /* required */
			ReceiptHandle: 'STRING_VALUE' /* required */
			},
			/* more items */
		],
		QueueUrl: 'STRING_VALUE' /* required */
	},
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else     console.log(data);           // successful response
	});

sqs.deleteQueue({
		QueueUrl: 'STRING_VALUE' /* required */
	},
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});

sqs.getQueueAttributes({
		QueueUrl: 'STRING_VALUE', /* required */
		AttributeNames: [
			'Policy | VisibilityTimeout | MaximumMessageSize | MessageRetentionPeriod | ApproximateNumberOfMessages | ApproximateNumberOfMessagesNotVisible | CreatedTimestamp | LastModifiedTimestamp | QueueArn | ApproximateNumberOfMessagesDelayed | DelaySeconds | ReceiveMessageWaitTimeSeconds | RedrivePolicy',
			/* more items */
		]
	},
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});

sqs.getQueueUrl({
		QueueName: 'STRING_VALUE', /* required */
		QueueOwnerAWSAccountId: 'STRING_VALUE'
	},
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else     console.log(data);           // successful response
	});

sqs.listDeadLetterSourceQueues({
		QueueUrl: 'STRING_VALUE' /* required */
	}, function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else     console.log(data);           // successful response
	});

sqs.listQueues({
		QueueNamePrefix: 'STRING_VALUE'
	},
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else     console.log(data);           // successful response
	});

sqs.purgeQueue({
		QueueUrl: 'STRING_VALUE' /* required */
	}, function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});

sqs.receiveMessage({
		QueueUrl: 'STRING_VALUE', /* required */
		AttributeNames: [
			'Policy | VisibilityTimeout | MaximumMessageSize | MessageRetentionPeriod | ApproximateNumberOfMessages | ApproximateNumberOfMessagesNotVisible | CreatedTimestamp | LastModifiedTimestamp | QueueArn | ApproximateNumberOfMessagesDelayed | DelaySeconds | ReceiveMessageWaitTimeSeconds | RedrivePolicy',
			/* more items */
		],
		MaxNumberOfMessages: 0,
		MessageAttributeNames: [
			'STRING_VALUE',
			/* more items */
		],
		VisibilityTimeout: 0,
		WaitTimeSeconds: 0
	}, function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});

sqs.removePermission({
		Label: 'STRING_VALUE', /* required */
		QueueUrl: 'STRING_VALUE' /* required */
	}, function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});

sqs.sendMessage({
		MessageBody: 'STRING_VALUE', /* required */
		QueueUrl: 'STRING_VALUE', /* required */
		DelaySeconds: 0,
		MessageAttributes: {
			someKey: {
				DataType: 'STRING_VALUE', /* required */
				BinaryListValues: [
					new Buffer('...') || 'STRING_VALUE',
					/* more items */
				],
				BinaryValue: new Buffer('...') || 'STRING_VALUE',
				StringListValues: [
					'STRING_VALUE',
					/* more items */
				],
				StringValue: 'STRING_VALUE'
			},
			/* anotherKey: ... */
		}
	},
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});

sqs.sendMessageBatch({
		Entries: [ /* required */
			{
				Id: 'STRING_VALUE', /* required */
				MessageBody: 'STRING_VALUE', /* required */
				DelaySeconds: 0,
				MessageAttributes: {
					someKey: {
						DataType: 'STRING_VALUE', /* required */
						BinaryListValues: [
							new Buffer('...') ,
							/* more items */
						],
						BinaryValue: new Buffer('...'),
						StringListValues: [
							'STRING_VALUE',
							/* more items */
						],
						StringValue: 'STRING_VALUE'
					},
					/* anotherKey: ... */
				}
			},
			/* more items */
		],
		QueueUrl: 'STRING_VALUE' /* required */
	},
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});

sqs.setQueueAttributes({
		Attributes: { /* required */
			someKey: 'STRING_VALUE',
			/* anotherKey: ... */
		},
		QueueUrl: 'STRING_VALUE' /* required */
	}, function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});

