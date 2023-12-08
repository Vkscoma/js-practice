// const pet = { species: "dog", name: "Rex", age: 5 };

// // Functions and Data
// function getTriangleArea(base, height) {
//     return base * height / 2;
// }

// function getTriangleHypotenuse(base, height) {
//     return Math.sqrt(base * base + height * height);
// }

// Use a POJO to store data
// let myTriangle = {
//     a: 3,
//     b: 4,
//     getArea: function () {
//         return (this.a + this.b) / 2;
//     },
//     getHypotenuse: function () {
//         return Math.sqrt(this.a * this.a + this.b * this.b);
//     }
// };

// issue with above is you cannot access those functions globally so you need to add them to each object

// Classes - below can be understood as a Blueprint - it defines the methods and properties of an object
// Make a new triangle with the new keyword
// Can still add/look at arbitrary properties
// the "this" keyword refers to the instance or object of that class

class Triangle {
    constructor(a, b) {
        // Add validation to ensure sides are numbers
        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("Sides must be numbers");
        }
        this.a = a;
        this.b = b;
    }
    getArea() {
        return (this.a + this.b) / 2;
    }
    getHypotenuse() {
        return Math.sqrt(this.a * this.a + this.b * this.b);
    }
    sayHi() {
        return "Hi";
    }
}

const firstTriangle = new Triangle(3, 4);

// Classes
// class names use UpperCamelCase
// Reduces confusion between classes and variables
// a triangle itself is still an object
// JS knows it's an "instanceof" a class 

// Constructors
// Special method automatically called when you make a new instance
// Constructors can do anything you want it to

// Two main things constructors are used for:
// 1. Validate Data
// 2. Assign properties
