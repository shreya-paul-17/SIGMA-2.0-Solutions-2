// A set of classes that calculates the area & perimeter of the circle, rectangle and triangle

class Shape {
    calculateArea () {
        return 'Invalid Area Calculation'
    }

    calculatePerimeter () {
        return 'Invalid Perimeter Calculation'
    }
}

class Circle extends Shape {
    constructor (radius) {
        super ()
        this.radius = radius
    }

    calculateArea () {
        return Math.PI*this.radius*this.radius
    }

    calculatePerimeter () {
        return 2*Math.PI*this.radius
    }
} 

class Rectangle extends Shape {
    constructor (length, breadth) {
        super ()
        this.length = length
        this.width = breadth
    }

    calculateArea () {
        return this.length*this.width
    }

    calculatePerimeter () {
        return 2*(this.length + this.width)
    }
} 

class Triangle extends Shape {
    constructor (base, height, side1, side2, side3) {
        super ()
        this.base = base
        this.height = height
        this.side1 = side1
        this.side2 = side2
        this.side3 = side3
    }

    calculateArea () {
        return 0.5*this.base*this.height
    }

    calculatePerimeter () {
        return this.side1 + this.side2 + this.side3
    }
} 

const circle = new Circle (5);
console.log(`Circle - Area: ${circle.calculateArea()}, Perimeter: ${circle.calculatePerimeter()}`);

const rectangle = new Rectangle (4, 6);
console.log(`Rectangle - Area: ${rectangle.calculateArea()}, Perimeter: ${rectangle.calculatePerimeter()}`);

const triangle = new Triangle (8, 6, 5, 7, 10);
console.log(`Triangle - Area: ${triangle.calculateArea()}, Perimeter: ${triangle.calculatePerimeter()}`);