// Defines parent/superclass called `Shape` which has a constructor that initializes the `color` value
class Shape {
    constructor(color) {
        this.color = color;
    }
}

// Defines `Circle` class extended from `Shape` class
class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
    }
}

// Defines `Triangle` class extended from `Shape` class
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}">`
    }
}

// Defines `Square` class extended from `Shape` class
class Square extends Shape {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}">`
    }
}

module.exports = {Circle, Triangle, Square};