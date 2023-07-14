// In each test case, a new shape object is created then
// (...cont'd) a shapeColor, text & textColor is assigned to it. 
// (...cont'd) The `render` method is called & the returned SVG markup is compared 
// (...cont'd) against the expected value using the `expect` & `toEqual` functions.

// Imports the shape classes from `shapes.js` file
const {Circle, Triangle, Square} = require("./shapes.js");

// Circle test case
describe("Circle", () => {
    test("renders correctly", () => {
        const shapeColor = "orange";
        const text = "ILY";
        const textColor = "white";
        const shape = new Circle(shapeColor, text, textColor);
        expect(shape.render()).toEqual(
            `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
               <circle cx="100" cy="100" r="90" fill="${shapeColor}"/>
               <text x="100" y="100" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="${textColor}">
                 ${text}
               </text>
            </svg>`
        );
    });
});

// Triangle test case
describe("Triangle", () => {
    test("renders correctly", () => {
        const shapeColor = "blue";
        const text = "ILY";
        const textColor = "white";
        const shape = new Triangle(shapeColor, text, textColor);
        expect(shape.render()).toEqual(
            `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
               <polygon points="100, 0 200, 165 0, 165" fill="${shapeColor}"/>
               <text x="100" y="100" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="${textColor}">
                 ${text}
               </text>
            </svg>`
        );
    });
});

// Square test case
describe("Square", () => {
    test("renders correctly", () => {
        const shapeColor = "purple";
        const text = "ILY";
        const textColor = "white";
        const shape = new Square(shapeColor, text, textColor);
        expect(shape.render()).toEqual(
            `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
               <rect height="200" width="200" fill="${shapeColor}"/>
               <text x="100" y="100" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="${textColor}">
                 ${text}
               </text>
            </svg>`
        );
    });
});

