const yargs = require("yargs");

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