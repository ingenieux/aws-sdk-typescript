/// <reference path="../../typings/main.d.ts" />

import * as generator from './generator';
import * as meta from './meta';
import * as fs from 'fs';
import * as path from 'path';
import * as glob from 'glob';

var jsstana = require('jsstana');

import * as esprima from 'esprima';

var estraverse = require('estraverse');

var escodegen = require('escodegen');

import * as handlebars from 'handlebars';
import {ExtraClientMethod} from "./meta";

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

    if (result && result.length > 0) {
      serviceInfo.input = result[result.length - 1];   //most recent API version
      serviceInfo.output = `output/typings/aws-${serviceInfo.prefix}.d.ts`;

      var content = fs.readFileSync(serviceInfo.input).toString();
      serviceInfo.descriptor = JSON.parse(content);
    }
  });
}

function generateServiceDefinitions() {
  Object.keys(metadata).forEach((serviceName) => {

    var result = new generator.AWSTypeGenerator().generateServiceDefinitions(metadata[serviceName]);

    metadata[serviceName].content = result;

    fs.writeFileSync(metadata[serviceName].output, result);
  });
}

function copyCommonDefs() {
  // TODO: What if we don't support Buffer?
  //
  var templateContent = fs.readFileSync(__dirname + '/../src/aws-sdk.handlebars').toString();

  [ 'output', 'output/typings'].forEach((path: string) => {
    if (! fs.existsSync(path)) {
      fs.mkdirSync(path)
    }
  })

  var template = handlebars.compile(templateContent);

  var commonContent = template({services: Object.keys(metadata)});

  fs.writeFileSync('output/typings/aws-sdk-common.d.ts', commonContent);
}

function generateModuleFile() {
  var services = Object.keys(metadata)
    .map(shortName => metadata[shortName].prefix);
  var result = new generator.AWSTypeGenerator().generateMainModule(services);

  fs.writeFileSync('output/typings/aws-sdk.d.ts', result);
}

function generateBaseDir() {
  ['output', 'output/typings'].forEach((path:string) => {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path)
    }
  })
}

function generateIndexDTS() {
  // TODO: What if we don't support Buffer?
  //
  var templateContent = fs.readFileSync(__dirname + '/../src/aws-sdk.handlebars').toString();

  var template = handlebars.compile(templateContent);

  var moduleContent = Object.keys(metadata).map(name => {
    return metadata[name].output;
  }).join("\n");

  var commonContent = template({services: Object.keys(metadata), sdkContent: moduleContent});

  fs.writeFileSync('output/typings/index.d.ts', commonContent);
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

  var methodsToAdd:any = {}

  if (paths && paths.length > 0) {
    paths.forEach((p:string) => {
      var src = fs.readFileSync(p).toString()
      var ast = esprima.parse(src, {comment: true, attachComment: true})

      var matcher = jsstana.createMatcher("(call (lookup AWS.util.update) ? ?)")

      estraverse.traverse(ast, {
        enter: function (n:any) {
          if (matcher(n)) {
            var classname = escodegen.generate(n.arguments[0]).replace(/AWS\.(\w+)\.prototype/, "$1")

            var methodList = n.arguments[1].properties.map((x:any) => {
              var context = {
                classname: classname,
                name: x.key.name,
                commentStr: (x.leadingComments && x.leadingComments.map((x: any) => { return x.value }).join('\n')) || ""
              } as ExtraClientMethod

              context.commentStr = context.commentStr.replace(/\n\s+\*/g, "\n     *");

              var m = /@api\s+private/.exec(context.commentStr)

              if (m) {
                return null
              }

              if (0 == context.commentStr.length) {
                context.commentStr = null;
              }

              return context
            }).filter((x: ExtraClientMethod) => {
              return null != x
            })

            console.log("Adding class: ", classname, " and methods: ", methodList)

            methodsToAdd[classname] = methodList
          }
        }
      })
    })
  }

  Object.keys(metadata).forEach((serviceName:string) => {
    var k = metadata[serviceName].name
    if (methodsToAdd.hasOwnProperty(k)) {
      metadata[serviceName].extraClientMethods = methodsToAdd[k]

      delete methodsToAdd[k]
    }
  })

  console.log("Extra Service Class Methods not found: ", JSON.stringify(methodsToAdd))
}

function updateTypingsJson() {
  var paths = glob.sync('output/typings/*.d.ts');

  var source: any = JSON.parse(fs.readFileSync('typings.json').toString());

  source['files'] = paths;

  fs.writeFileSync('typings.json', JSON.stringify(source, null, 2));
}

console.log(JSON.stringify(process.argv))

sdkDir = "./aws-sdk-js/apis/";

metadata = readMetadata();

readServiceFiles();

readCustomCode();

cleanDefinitions();

generateBaseDir();

generateServiceDefinitions();

generateModuleFile();

updateTypingsJson();
