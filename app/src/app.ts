/// <reference path="../../typings/tsd.d.ts" />

import generator = require("./generator");
import meta = require("./meta");
import fs = require("fs");
import path = require("path");
import glob = require("glob");

var jsstana = require("jsstana")

import esprima = require("esprima");

var estraverse = require("estraverse");

var escodegen = require("escodegen")

require('source-map-support').install();

var sdkDir:string;
var metadata:{[serviceName:string]:meta.ServiceInfo};

function readMetadata():{[serviceName:string]:meta.ServiceInfo} {
  return JSON.parse(fs.readFileSync(path.join(sdkDir, "metadata.json")).toString());
}

function readServiceFiles() {
  Object.keys(metadata).forEach((shortName) => {
    var serviceInfo = metadata[shortName];
    serviceInfo.prefix = serviceInfo.prefix || shortName;

    var expr = path.join(sdkDir, `${serviceInfo.prefix}-????-??-??.normal.json`);

    var result = glob.sync(expr);

    if (result  && result.length > 0) {
      serviceInfo.input = result[result.length -1];   //most recent API version
      serviceInfo.output = `output/typings/aws-${serviceInfo.prefix}.d.ts`;

      console.log(shortName + ": " + JSON.stringify(serviceInfo, null, 2));
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
  // TODO: What if we don't support Buffer?
  //
  var content = fs.readFileSync(__dirname + '/../src/aws-sdk-common.d.ts.template');

  [ 'output', 'output/typings'].forEach((path: string) => {
    if (! fs.existsSync(path)) {
      fs.mkdirSync(path)
    }
  })

  fs.writeFileSync('output/typings/aws-sdk-common.d.ts', content);
}

function generateModuleFile() {
  var services = Object.keys(metadata)
    .map(shortName => metadata[shortName].prefix);
  var result = new generator.AWSTypeGenerator().generateMainModule(services);

  fs.writeFileSync('output/typings/aws-sdk.d.ts', result);
}

function cleanDefinitions() {
  var unrecognizedServices = Object.keys(metadata)
    .filter(name => !metadata[name].descriptor);

  unrecognizedServices.forEach(name => {
    console.log(`Ommitting service ${name} because the json definitions are missing`);
    delete metadata[name];
  });
}

function readCustomCode() {
  var expr = path.join(sdkDir, '../lib/services/**/*.js')

  var paths = glob.sync(expr)

  var methodsToAdd: any = {}

  if (paths && paths.length > 0) {
    paths.forEach(function(p: string) {
      var src = fs.readFileSync(p).toString()
      var ast = esprima.parse(src)

      var matcher = jsstana.createMatcher("(call (lookup AWS.util.update) ? ?)")

      estraverse.traverse(ast, {
        enter: function(n: any) {
          if (matcher(n)) {
            var classname = escodegen.generate(n.arguments[0]).replace(/AWS\.(\w+)\.prototype/, "$1")

            var methodList = n.arguments[1].properties.map(function(x: any) { return x.key.name })

            console.log("Adding class: ", classname, " and methods: ", methodList)

            methodsToAdd[classname] = methodList
          }
        }
      })
    })
  }

  Object.keys(metadata).forEach((serviceName: string) => {
    var k = metadata[serviceName].name
    if (methodsToAdd.hasOwnProperty(k)) {
      metadata[serviceName].extraClientMethods = methodsToAdd[k]

      delete methodsToAdd[k]
    }
  })

  console.log("Extra Service Class Methods not found: ", JSON.stringify(methodsToAdd))
}

console.log(JSON.stringify(process.argv))

sdkDir = "./aws-sdk-js/apis";

metadata = readMetadata();
readServiceFiles();

readCustomCode();

cleanDefinitions();

copyCommonDefs();

generateServiceDefinitions();
generateModuleFile();
