import { Rectangle, Square } from './SquareModule.js';
import Circle from './CircleModule.js';

// Create an array of different shapes
const shapes = [
    new Rectangle("Blue", 10, 5),
    new Square("Green", 4),
    new Circle("Red", 7, 5, 5)
];

// Loop through each shape and call getArea
shapes.forEach(shape => {
    console.log(`Area: ${shape.getArea().toFixed(2)}`);
});
