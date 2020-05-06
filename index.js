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

        msg = `
    Creat react app offline

    Hello! i'm going to make it as fast as i can.`
    createContent(msg);



    // for creating the Header
    function createHeader() {
        clear();
        console.log(
            chalk.yellow(
                figlet.textSync('C-R-A-O', {
                    horizontalLayout: 'full'
                })
            )
        );
    }

    // For Creating nice content 
    function createContent(message, wh = false) {
        if (wh) {
            createHeader()
        }
    
        const boxenOptions = {
            padding: 1,
            margin: 1,
            borderStyle: "round",
            borderColor: "green",
            align: "canter"
        };
        const msgBox = boxen(message, boxenOptions);
    
        console.log(msgBox);
    
    }