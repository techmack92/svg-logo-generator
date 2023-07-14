// Defines parent/super class called `Shape` which has a 
// (...cont'd) constructor that initializes the `color` value
class Shape {
    constructor(color) {
        this.color = color;
    }
}

// Defines `Circle` class extended from `Shape` class
class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"></circle>`
    }
}

// Defines `Triangle` class extended from `Shape` class
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"></polygon>`
    }
}

// Defines `Square` class extended from `Shape` class
class Square extends Shape {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}"></rect>`
    }
}

// Defines `Text` class extended from `Shape` class
// The render() method overrides the render() methods in above shape classes and 
// (...cont'd) includes the SVG markup for the text as well as the shape
class Text extends Shape {
    constructor(color, text, textColor) {
        // `super` calls the constructor of the parent class/super class
        super(color);
        this.text = text;
        this.textColor = textColor;
        this.shape = null;
    }

    setShape(shape) {
        this.shape = shape;
    }

    renderShapeMarkup() {
        // Checks if user's choice is an instance of a `Shape` class, 
        // (...cont'd) then generates the corresponding shape markup
        if (this.shape === "Circle") {
            return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"></circle>`;
          } else if (this.shape === "Triangle") {
            return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"></polygon>`;
          } else if (this.shape === "Square") {
            return `<rect x="50" height="200" width="200" fill="${this.color}"></rect>`;
          } else {
            throw new Error("Invalid shape");
          }
        }
        
    render(){
        const shapeMarkup = this.renderShapeMarkup();

        return `
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
            ${shapeMarkup}
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">
            ${this.text}
            </text>
        </svg>
        `;

    }
}

module.exports = {Circle, Triangle, Square, Text};