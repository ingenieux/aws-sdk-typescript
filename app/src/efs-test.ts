/// <reference path="../../typings/tsd.d.ts" />

var AWS = require("aws-sdk")

var efs = new AWS.EFS({ region: "us-west-2" })

efs.describeFileSystems({ }, function(err, data) {
  console.log("err", err)
  console.log("data", data)
})
