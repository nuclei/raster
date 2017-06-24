#!/usr/bin/env node
var fs = require('fs');
var path = require('path');
var sass = require('node-sass');
const commandLineArgs = require('command-line-args')
const options = commandLineArgs([
  { name: 'columns', type: Number, defaultValue: 16 },
  { name: 'gutter', type: String, defaultValue: '10px' },
  { name: 'xs', type: String, defaultValue: '400px' },
  { name: 'sm', type: String, defaultValue: '800px' },
  { name: 'lg', type: String, defaultValue: '1200px' },
  { name: 'xl', type: String, defaultValue: '1500px' },
  { name: 'prefix', type: String, defaultValue: 'o-column--' },
  { name: 'raster', type: String, defaultValue: 'o-raster' }
])

let variables = ''
let sizes = ''
Object.keys(options).forEach(key => {
  if(['xs','sm','lg','xl'].indexOf(key) === -1){
    variables += '$'+key+': "' + options[key] + '";\n'
  } else {
    sizes += key+': "' + options[key] + '", '
  }
});
sizes = '$breakpoints: (' + sizes.substring(0,sizes.length-2) + ');'
variables += sizes
console.log(variables);
// Object.keys(options).forEach(key => {
//   variables += '$breakpoints: '+key+': "' + options[key] + '";\n'
// });

let file = './src/raster.scss';

var saveFile = function(error, result) { // node-style callback from v3.0.0 onwards
  if (error) {
    console.log(`${error.status} in line ${error.column}: ${error.message}`); // used to be "code" in v2x and below
  } else {
    console.log(result.stats);
    // No errors during the compilation, write this result on the disk
    fs.writeFile('dist/raster.css', result.css, function(err){
      if(!err){
        console.log(result.css.toString());
        console.log('raster.css saved!');
      } else {
        console.log(err);
      }
    });
  }
}
//if not, get file data and add $ENV variable in Sass before compiling
fs.readFile(file, function(err, d) {
  sass.render({
    data: variables + d,
    // data: "$ENV: \"" + ENV + "\";\n" + data
    // includePaths: [ path.dirname(file) ]
    outputStyle: 'expanded'
  }, saveFile)
})
