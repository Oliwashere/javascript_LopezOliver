class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return (this.width + this.height) * 2;
    }
}

const Rectangle1 = new Rectangle (5, 5);
const Rectangle2 = new Rectangle (2, 2);

console.log ("\nRectangle 1:");
console.log(`Area: ${Rectangle1.area()}`);
console.log(`Perimeter: ${Rectangle1.perimeter()}`);

console.log("\nRectangle 2:");
console.log(`Area: ${Rectangle2.area()}`);
console.log(`Perimeter: ${Rectangle2.perimeter()}`);
