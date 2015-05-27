/// <reference path="../../typings/tsd.d.ts" />

import meta = require("./meta")
import fs = require("fs")
import handlebars = require("handlebars")

export interface APIGeneratorArgs {
  name: string
  prefix?: string
  versions: Array<String>
}

export class AWSTypeGenerator {
  fetchTemplate(name: string) {
    var templateSource = fs.readFileSync(__dirname + `/../src/${name}.handlebars`).toString()
    return handlebars.compile(templateSource)
  }

  executeOn(apiGeneratorArgs: APIGeneratorArgs, content:string) {
    var moduleTemplate = this.fetchTemplate("module")
    var structureTemplate = this.fetchTemplate("structure")

    handlebars.registerHelper("camelCase", function(name) {
      return name.charAt(0).toLowerCase() + name.substring(1)
    })

    var m: meta.Descriptor = JSON.parse(content)

    handlebars.registerHelper("dumpShape", function(context, options) {
      var result = ""
      if ("string" === context.type) {
        result = `    export type ${options.data.key} = string;`

        if (context.pattern) {
          result += ` // pattern: "${context.pattern}"`
        }
      } else if ("long" === context.type || "integer" === context.type || "timestamp" === context.type || "double" === context.type || "float" === context.type) {
        result = `    export type ${options.data.key} = number;`
      } else if ("boolean" === context.type) {
        result = `    export type ${options.data.key} = boolean;`
      } else if ("map" === context.type || "blob" === context.type) {
        result = `    export type ${options.data.key} = any; // not really - it was '${context.type}' instead - must fix this one`
      } else if ("list" === context.type) {
        result = `    export type ${options.data.key} = Array<${context.member.shape}>;`

        if (context.max) {
          result += ` // max: ${context.max}`
        }
      } else if ("structure" === context.type) {
        Object.keys(context.members).forEach(function(k) {
          context.members[k].required = "?"
        })

        if (context.required) {
          context.required.forEach(function(k) {
            context.members[k].required = "";
          })
        }

        result = structureTemplate({ c: context, name: options.data.key })
      } else {
        throw new Error(`Unknown type: ${context.type}`)
      }
      return result;
    });

    var ctx = {
      m: m,
      api: apiGeneratorArgs
    }

    return moduleTemplate(ctx)
  }
}
