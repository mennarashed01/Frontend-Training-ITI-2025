import Shape from './shapeModule.js';

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color); // Call parent constructor (Shape)
        this.width = width;
        this.height = height;
    }

    // Function to calculate area
    getArea() {
        this.DrawShape(); // Call Shape's DrawShape method
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    constructor(color, side) {
        super(color, side, side); // Pass the same value for width & height
    }
}

// Export both classes
export { Rectangle, Square };
