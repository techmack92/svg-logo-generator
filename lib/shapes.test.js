// In each test case, a new shape object is created & 
// (...cont'd) a color is assigned to it using the `setColor` method. 
// (...cont'd) The `render` method is called & the returned SVG markup is compared 
// (...cont'd) against the expected value using the `expect` & `toEqual` function.

// Imports the shape classes from `shapes.js` file
const {Circle, Triangle, Square} = require("./shapes");

// Circle test case
describe("Circle", () => {
    test("renders correctly", () => {
        const shape = new Circle();
        let color = ("orange");
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
});

// Triangle test case
describe("Triangle", () => {
    test("renders correctly", () => {
        const shape = new Triangle();
        let color = ("blue");
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
    });
});

// Square test case
describe("Square", () => {
    test("renders correctly", () => {
        const shape = new Square();
        let color = ("green");
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
    });
});

