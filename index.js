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

    // A message to user
msg = `
    Creat react app offline

    Hello! i'm going to make it as fast as i can.`
createContent(msg);

// unzip project to folder
UnzipToFolder(__dirname+'/react-src/react.zip', options.name)

// Just succsess MSG
function succsessMSG(foldername) {

    usefulCMD = chalk.blue.bold('Enjoy, here are some useful commands.') + "\n\n";
    usefulCMD += "- Go to your project folder \n" + chalk.red.bold('        cd ' + foldername) + '\n\n';
    usefulCMD += "- Runs the app in development mode. \n" + chalk.red.bold('        npm start ') + '\n\n';
    usefulCMD += "- Runs the test watcher in an interactive mode. \n" + chalk.red.bold('        npm test') + '\n\n';
    usefulCMD += "- Builds the app for production to the build folder. \n" + chalk.red.bold('       npm run build') + '\n\n';

    console.log(usefulCMD);
}

// for unzipping react  to process folder
function UnzipToFolder(src, foldername) {
    let target = process.cwd() + '/' + foldername
    extract(src, target)
        .then(() => {
            message = chalk.white.bold('Project Created successfully');
            createContent(message, true);
            succsessMSG(foldername);
        }, err => {
            createContent('extract failed' + err)
        })
}

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