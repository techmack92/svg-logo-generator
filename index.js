// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const {Circle, Triangle, Square} = require("./lib/shapes.js");

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
function writeFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function that initializes app
const init = () => {
  inquirer.prompt(questions)
      .then((data) => {
          switch (`${data.shape}`) {
              case "Square":
                  const square = new Square(data.shapeColor, data.text, data.textColor)
                  writeFile("./dist/logo.svg", square.render(), (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log("Your SVG logo has been generated; you can find it in the 'dist' folder!");
                    }
                  });
                  break;
              case "Circle":
                  const circle = new Circle(data.shapeColor, data.text, data.textColor)
                  writeFile("./dist/logo.svg", circle.render(), (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log("Your SVG logo has been generated; you can find it in the 'dist' folder!");
                    }
                  });
                  break;
                  case "Triangle":
                  const triangle = new Triangle(data.shapeColor, data.text, data.textColor)
                  writeFile("./dist/logo.svg", triangle.render(), (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log("Your SVG logo has been generated; you can find it in the 'dist' folder!");
                    }
                  });
                  break;
          }
                  console.log("Your SVG logo has been generated; you can find it in the 'dist' folder!");
                  console.log("Data Object:", data);

      });
}

// Function call to initialize app
init();