// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const {Circle, Triangle, Square, Text} = require("./lib/shapes");

// Array of questions for user input
const questions = [
    {
        type: "input",
        name: "text",
        message: "LOGO TEXT - Enter up to 3 characters:"
    },

    {
        type: "input",
        name: "textColor",
        message: "LOGO TEXT COLOR - Enter a color keyword or hexadecimal number:"
    },

    {
        type: "list",
        name: "shape",
        message: "LOGO SHAPE - Choose a shape:",
        choices: ["Circle", "Triangle", "Square"]
    },

    {
        type: "input",
        name: "shapeColor",
        message: "LOGO SHAPE COLOR - Enter a color keyword or hexadecimal number:"
    },
];

// Function that writes an SVG logo file
function writeSVGFile(fileName, svgMarkup) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), svgMarkup);
}
  
// Function that initializes app
function init() {
    inquirer.prompt(questions).then((responses) => {
    // Extract properties that contain user input from `data` object
    const { shape, shapeColor, text, textColor } = responses;
  
    let newShape;
    // Take user's choice and create a new instance of that shape's class
    if (shape === "Circle") {
      newShape = new Circle(shapeColor);
    } 
    else if (shape === "Triangle") {
      newShape = new Triangle(shapeColor);
    } 
    else if (shape === "Square") {
      newShape = new Square(shapeColor);
    } 
    else {
      throw new Error("Invalid shape");
    }

    // Create new instance of `Text` class which combines the shape and text
    const newText = new Text(shapeColor, text, textColor);
    
    // Call render() method from `newText` class to generate the SVG markup for logo
    const svgMarkup = newText.render();
    
    // Pass SVG markup to write to `logo.svg` file in `dist` folder
    writeSVGFile("./dist/logo.svg", svgMarkup);

    console.log("Your SVG logo has been generated; you can find it in the 'dist' folder!");
    console.log("Data Object:", responses);
    });
}

// Function call to initialize app
init();