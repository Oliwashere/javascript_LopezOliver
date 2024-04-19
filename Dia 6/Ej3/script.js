class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    displayDetails() {
      console.log(`Vehicle: ${this.year} ${this.make} ${this.model}`);
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
      super(make, model, year);
      this.numDoors = numDoors;
    }
  
    displayDetails() {
      super.displayDetails();
      console.log(`Number of doors: ${this.numDoors}`);
    }
  }
  
  const myCar = new Car('Mazda', 'Miata', 1990, 2);
  myCar.displayDetails();
  