/// <reference path="../../typings/tsd.d.ts" />

var AWS = require("aws-sdk")

var s3 = new AWS.S3()

s3.listBuckets((err, data) => {
  data.Buckets
  console.log("Buckets: ", JSON.stringify(data.Buckets))

})
