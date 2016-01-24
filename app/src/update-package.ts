#!/usr/bin/env node

// / <reference path="../../typings/tsd.d.ts" />

import fs = require("fs");
import path = require("path");
import glob = require("glob");

require('source-map-support').install();

if (process.argv.length < 2) {
  console.log("Usage: update-package.js [baseDir] [outputFile] # Use '-' for stdout")
  process.exit(1)
}

var baseDir = process.argv[-2 + process.argv.length]
var outputFile = process.argv[-1 + process.argv.length]

var typingDefinitionsPath = path.join(baseDir, "output/typings")

var typingFiles = glob.sync(typingDefinitionsPath + "/**/*.d.ts")

var packageJsonPath = path.resolve(path.join(baseDir, 'package.json'))

var packageJson = function() {
  var packageJsonContent = fs.readFileSync(packageJsonPath).toString()

  return JSON.parse(packageJsonContent)
}();

packageJson["typings"] = "output/typings/"

packageJson["typescript"] = {
  definitions: typingFiles
}

// console.log(JSON.stringify(packageJson, null, 2))

if ("-" === outputFile) {
  console.log(JSON.stringify(packageJson, null, 2))
} else {
  fs.writeFileSync(outputFile, JSON.stringify(packageJson, null, 2))
}
