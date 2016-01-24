#!/usr/bin/env node

// / <reference path="../../typings/tsd.d.ts" />

import fs = require("fs");
import path = require("path");
import glob = require("glob");

require('source-map-support').install();

var baseDir = process.argv[-1 + process.argv.length]

var typingDefinitionsPath = path.join(baseDir, "output/typings")

var typingFiles = glob.sync(typingDefinitionsPath + "/**/*.d.ts")

var packageJson = function() {
  var packageJsonPath = path.resolve(path.join(baseDir, 'package.json'))

  var packageJsonContent = fs.readFileSync(packageJsonPath).toString()

  return JSON.parse(packageJsonContent)
}();

packageJson["typings"] = "output/typings/"

packageJson["typescript"] = {
  definitions: typingFiles
}

console.log(JSON.stringify(packageJson, null, 2))
