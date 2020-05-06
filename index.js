#!/usr/bin/env node
const yargs = require("yargs");
const chalk = require("chalk");
const boxen = require("boxen");
const clear = require('clear');
const figlet = require('figlet');

/******************
 * Reading Arguments
 ******************/
const options = yargs
    .usage("Usage: -n <name>")
    .option("n", {
        alias: "name",
        describe: "Your project name",
        type: "string",
        demandOption: true
    })
    .argv;

console.log(options);