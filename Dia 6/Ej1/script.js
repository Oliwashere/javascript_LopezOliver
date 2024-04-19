class Person {
    constructor (name, age, country) {
        this.name=name
        this.age=age
        this.country=country
    }

    details() {
        console.log (`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`);
    }
}

const Person1 = new Person ('John','23', 'Canada');
const Person2 = new Person ('Gabriel','26.000.00 BC', 'Heaven');

console.log ("\nPerson 1:");
Person1.details();

console.log("\nPerson 2:");
Person2.details();