///<reference path="../../typings/index.d.ts"/>

import * as meta from './meta'
import fs = require('fs')
import handlebars = require('handlebars')
import htmlToText = require('html-to-text')

export class AWSTypeGenerator {
  constructor() {
    handlebars.registerHelper("camelCase", function(name: string) {
      return name.charAt(0).toLowerCase() + name.substring(1)
    });

    handlebars.registerHelper("comment", function(name: string) {
      var source = name || '';

      if ('' == source) {
        return '';
      }

      source = source.replace(/^[\s\uFEFF\xA0\*\r\n]+|[\s\uFEFF\xA0\*\r\n]+$/g, '');

      var htmlResult = htmlToText.fromString(name || '').replace(/\*/i, '&#42;');

      return htmlResult;
    });

    handlebars.registerHelper("as-service", function(name: string) {
      var source = name || '';

      if ('' == source) {
        return '';
      }

      var result = source.replace(/-/, '');

      return result;
    });
  }

  fetchTemplate(name: string) {
    var templateSource = fs.readFileSync(__dirname + `/../src/${name}.handlebars`).toString()
    var template = handlebars.compile(templateSource);

    return template
  }

  generateMainModule(services:string[]) {
    var template = this.fetchTemplate('aws-sdk');

    return template({services:services});
  }

  generateServiceDefinitions(api: meta.ServiceInfo) {
    var moduleTemplate = this.fetchTemplate("module")

    this.cleanShapes(api.descriptor);

    return moduleTemplate(api)
  }

  private getAlias(shape:meta.Shape): meta.Alias {
    var alias:meta.Alias = {name: shape.name, type: shape.type};

    var comments:string[] = [];
    if (shape.pattern) {
      comments.push(`pattern: "${shape.pattern}"`);
    }
    if (shape.max) {
      comments.push(`max: ${shape.max}`);
    }
    if (shape.min) {
      comments.push(`min: ${shape.min}`);
    }

    if (shape.type.match(/long|integer|timestamp|double|float/)){
      alias.type = 'number';
    }
    else if (shape.type == 'map') {
      if (shape.value) {
        alias.type = `{[key:string]: ${shape.value.shape}}`
      } else {
        shape.type == 'any';
        comments.push('type: map');
      }
    }
    else if (shape.type == 'blob') {
      alias.type = 'any';
      comments.push('type: ' + 'blob');
    }
    else if (shape.type == 'list') {
      alias.type = shape.member.shape + '[]';
    }

    if (comments.length) {
      alias.commentStr = comments.join(', ');
    }

    return alias;
  }

  private getStructure(shape:meta.Shape):meta.Shape {
    Object.keys(shape.members).forEach(function(k) {
      shape.members[k].required = "?";
    })

    if (shape.required) {
      shape.required.forEach(function(k: string) {
        shape.members[k].required = "";
      })
    }
    return shape;
  }

  private cleanShapes(descriptor:meta.Descriptor) {
    //set the name
    Object.keys(descriptor.shapes)
      .forEach(name => descriptor.shapes[name].name = name);

    //get aliases
    descriptor.aliases = Object.keys(descriptor.shapes)
      .map(name => descriptor.shapes[name])
      .filter(shape => shape.type != 'structure')
      .filter(shape => shape.name != 'string' && shape.name != 'boolean' && shape.name != 'number')  //exclude builtins
      .map(this.getAlias);

    //Get structures
    descriptor.structures = Object.keys(descriptor.shapes)
      .map(name => descriptor.shapes[name])
      .filter(shape => shape.type == 'structure')
      .map(this.getStructure);
  }

}
