///<reference path="../typings/main/ambient/node/index.d.ts" />
///<reference path="../output/typings/index.d.ts" />

import AWS = require('aws-sdk');

var docClient = new AWS.DynamoDB.DocumentClient();

docClient.batchGet({}, (err, data) => {
});

docClient.batchWrite({}, (err, data) => {
});

docClient.query({}, (err, data) => {
});

docClient.scan({}, (err, data) => {
});
