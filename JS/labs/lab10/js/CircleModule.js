import Shape from './shapeModule.js';

class Circle extends Shape {
    constructor(color, radius, x, y) {
        super(color); // Call parent constructor (Shape)
        this.radius = radius;
        this.x = x;
        this.y = y;
    }

    // Function to calculate circle area
    getArea() {
        this.DrawShape(); // Call Shape's DrawShape method
        return Math.PI * this.radius * this.radius;
    }
}

// Export Circle class
export default Circle;
