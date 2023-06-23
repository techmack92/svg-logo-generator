// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const {Circle, Triangle, Square} = require("./lib/shapes");

// Array of questions for user input
const questions = [
    {
        type: "input",
        name: "text",
        message: "LOGO TEXT: Enter up to 3 characters:"
    },

    {
        type: "input",
        name: "textColor",
        message: "LOGO TEXT COLOR: Enter a color keyword or hexadecimal number:"
    },

    {
        type: "input",
        name: "shape",
        message: "LOGO SHAPE: Choose a shape:",
        choices: ["Circle", "Triangle", "Square"]
    },

    {
        type: "input",
        name: "shapeColor",
        message: "LOGO SHAPE COLOR: Enter a color keyword or hexadecimal number:"
    },
];

// Function that writes an SVG logo file
function writeSVGFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function that initializes app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Your SVG logo has been generated; you can find it in the 'dist' folder!");
        console.log("Data Object:", responses);
        writeSVGFile("./dist/logo.svg", {...responses});
    });
}

init();


