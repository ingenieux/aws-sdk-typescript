/// <reference path="../../typings/tsd.d.ts" />

var AWS = require("aws-sdk")

var ec2 = new AWS.EC2();

var req = AWS.EC2DescribeInstancesRequest = { InstanceIds: [ "i-82e538af" ] };

ec2.describeInstances(req, (err, result) => {
  result.Reservations.forEach(console.log);
});

/*
var req: AWS.EC2Module.DescribeInstancesRequest = {
  InstanceIds: [ "" ]
}


ec2.describeInstances(req, (err, result) => {

});

ec2.describeInstances({}, (err, result) => {
  result.Instances.forEach((i: AWS.Instance, idx) => {
    i.
  })
});
*/
