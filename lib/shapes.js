// Defines parent/super class called `Shape` which has a 
// (...cont'd) constructor that takes shapeColor, text & textColor 
// (...cont'd) properties as arguments & sets them with user input
class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }

    // Adds a function that will put user text in center of shape when generated
    centerText() {
        return `<text x="100" y="100" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="${this.textColor}">
        ${this.text}</text>`;
    }
}

// Defines `Circle` class extended from `Shape` class
class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }
    
    render() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="100" cy="100" r="90" fill="${this.shapeColor}"/> 
        ${super.centerText()}
        </svg>`

    }
}

// Defines `Triangle` class extended from `Shape` class
class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }

    render() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="100, 0 200, 165 0, 165" fill="${this.shapeColor}"/> 
        ${super.centerText()}
        </svg>`
    }
}

// Defines `Square` class extended from `Shape` class
class Square extends Shape {
        constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }

    render() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect height="200" width="200" fill="${this.shapeColor}"/>
        ${super.centerText()}
        </svg>`

    }
}

module.exports = {Circle, Triangle, Square};