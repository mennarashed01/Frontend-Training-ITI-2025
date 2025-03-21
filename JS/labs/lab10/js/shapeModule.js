/*
Create shapeModule.js file that contains Shape class with the following 
properties a-  Has one property (private) color(string)  using setter and getter Color. b-  Create DrawShape function that print color value 
Export it*/

class Shape {
    #color; // Private property

    constructor(color) {
        this.#color = color;
    }

    // Setter for color
    set Color(newColor) {
        this.#color = newColor;
    }

    // Getter for color
    get Color() {
        return this.#color;
    }

    // Function to print color
    DrawShape() {
        console.log(`Shape color is: ${this.#color}`);
    }
}

// Export the class
export default Shape;
