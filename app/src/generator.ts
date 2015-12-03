/// <reference path="../../typings/tsd.d.ts" />

import meta = require("./meta")
import fs = require("fs")
import handlebars = require("handlebars")

export class AWSTypeGenerator {
  fetchTemplate(name: string) {
    var templateSource = fs.readFileSync(__dirname + `/../src/${name}.handlebars`).toString()
    return handlebars.compile(templateSource)
  }

  generateServiceDefinitions(api: meta.ServiceInfo) {
    var moduleTemplate = this.fetchTemplate("module")
    
    this.cleanShapes(api.descriptor);

    handlebars.registerHelper("camelCase", function(name) {
      return name.charAt(0).toLowerCase() + name.substring(1)
    })

    return moduleTemplate(api)
  }
  
  generateMainModule(services:string[]) {
    var template = this.fetchTemplate('aws-sdk');
    return template({services:services});
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
      alias.comment = comments.join(', ');
    }
    
    return alias;
  }
  
  private getStructure(shape:meta.Shape):meta.Shape {
    Object.keys(shape.members).forEach(function(k) {
      shape.members[k].required = "?";
    })
    
    if (shape.required) {
      shape.required.forEach(function(k) {
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
