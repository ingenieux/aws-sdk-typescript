/// <reference path="../../typings/tsd.d.ts" />

import generator = require("./generator");
import meta = require("./meta");
import fs = require("fs");
import path = require("path");
import glob = require("glob");

require('source-map-support').install();
  
var sdkDir:string;
var metadata:{[serviceName:string]:meta.ServiceInfo}; 

function readMetadata():{[serviceName:string]:meta.ServiceInfo} {
  return JSON.parse(fs.readFileSync(path.join(sdkDir, "metadata.json")).toString());
}

function readServiceFiles() {
  Object.keys(metadata).forEach((serviceName) => {
    var serviceInfo = metadata[serviceName];
    var expr = path.join(sdkDir, `${serviceName}-????-??-??.normal.json`)
  
    var result = glob.sync(expr)
  
    if (result  && result.length > 0) {
      serviceInfo.input = result[result.length -1];   //most recent API version
      serviceInfo.output = `output/aws-${serviceName}.d.ts`
  
      console.log(serviceName + ": " + JSON.stringify(serviceInfo, null, 2));
      var content = fs.readFileSync(serviceInfo.input).toString();
      serviceInfo.descriptor = JSON.parse(content);
    }
  });
}

function generateServiceDefinitions() {
  Object.keys(metadata).forEach((serviceName) => {
    
    console.log(`Generating ${metadata[serviceName].output}`)
  
    var result = new generator.AWSTypeGenerator().generateServiceDefinitions(metadata[serviceName]);
  
    fs.writeFileSync(metadata[serviceName].output, result);
  });
}

function copyCommonDefs() {
  var content = fs.readFileSync(__dirname + '/../src/aws-sdk-common.d.ts');
  fs.writeFileSync('output/aws-sdk-common.d.ts', content);
}

function generateModuleFile() {
  var services = Object.keys(metadata);
  var result = new generator.AWSTypeGenerator().generateMainModule(services);
  
  fs.writeFileSync('output/aws-sdk.d.ts', result);
}

function cleanDefinitions() {
  var unrecognizedServices = Object.keys(metadata)
    .filter(name => !metadata[name].descriptor);
  
  unrecognizedServices.forEach(name => {
    console.log(`Ommitting service ${name} because the json definitions are missing`);
    delete metadata[name];
  });
  
}

console.log(JSON.stringify(process.argv))

sdkDir = (process.argv.length > 2) ? process.argv[-1 + process.argv.length] : "../aws-sdk-js/apis";

metadata = readMetadata();
readServiceFiles();
cleanDefinitions();
copyCommonDefs();
generateServiceDefinitions();
generateModuleFile();
