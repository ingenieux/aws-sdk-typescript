/// <reference path="../../typings/tsd.d.ts" />

import generator = require("./generator");
import meta = require("./meta");
import fs = require("fs");
import path = require("path");
import glob = require("glob");
  
var sdkDir:string;
var metadata:{[serviceName:string]:meta.ServiceInfo}; 

console.log(JSON.stringify(process.argv))

sdkDir = (process.argv.length > 2) ? process.argv[-1 + process.argv.length] : "../aws-sdk-js/apis";

metadata = JSON.parse(fs.readFileSync(path.join(sdkDir, "metadata.json")).toString())

Object.keys(metadata).forEach((serviceName) => {
  var expr = path.join(sdkDir, `${serviceName}-*.normal.json`)

  var result = glob.sync(expr)

  if (result) {
    metadata[serviceName].input = result[0]
    metadata[serviceName].output = `output/aws-${serviceName}.d.ts`

    console.log(serviceName + ": " + JSON.stringify(metadata[serviceName], null, 2));
  }
});

Object.keys(metadata).forEach((serviceName) => {
  if (!metadata[serviceName].input) {
    return;
  }

  console.log(`Generating ${metadata[serviceName].output} from ${metadata[serviceName].input}`)

  var content = fs.readFileSync(metadata[serviceName].input);
  var result = new generator.AWSTypeGenerator().executeOn(metadata[serviceName], content);

  fs.writeFileSync(metadata[serviceName].output, result);
})
