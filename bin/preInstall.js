#!/usr/env node
var fs = require("fs");
var path = require("path");
var CLI_MODULE_PATH = function() {
  return path.resolve(process.cwd(), "node_modules", "react-native", "cli.js");
};

var REACT_NATIVE_PACKAGE_JSON_PATH = function() {
  return path.resolve(
    process.cwd(),
    "node_modules",
    "react-native",
    "package.json"
  );
};
if (!fs.existsSync(CLI_MODULE_PATH())) {
  //Uhoh
  console.log("Could not find react native dependency");
  die(1);
}
const root = process.cwd();
var package = JSON.parse(fs.readFileSync(root + "/package.json"));
const name = package.name;
cli = require(CLI_MODULE_PATH());
cli.init(root, name);
