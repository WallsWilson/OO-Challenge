class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return ('Beep')
    }
    toString() {
        return (`The vehicle is a ${this.make} ${this.model} from ${this.year}. `)
    }
}
let myFirstVehicle = new Vehicle("Chevy", "C10", "1969");

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
    }
    numWheels() {
        return 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year)
    }
    numWheels() {
        return 2;
    }
    revEngine() {
        return "VROOM!!!"
    }
}

class Garage {
    constructor(capacity){
    // creating a property as well
    this.capacity = capacity;
    // creating a property
    this.vehicles = [];
    }
    // this is creating a method 
    add(newVehicle){
        // this is check for a make model and year used from the vehicle class. 
        if(!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        // this is checking the length of the array from the property of vehiles. using the capacity as the number to not go over the lengh of the array. If it does it will throw the retrun for sorry for full.  
        if(this.vehicles.length >= this.capacity) {
            return "Sorry, we're full."
        }
        // this is will add the new to the array of vehicles if it is not full. 
        this.vehicles.push(newVehicle);
        return "Vehicle added!"
    }
}

// Below is what to run through the console to get a better understanding of what the code does. This is added to help me understand how it works and when i look back it will skip the steps of trying to figure out what to accomplish. 


// let garage = new Garage(2);
// garage.vehicles; // []
// garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
// garage.vehicles; // [Car]
// garage.add("Taco"); // "Only vehicles are allowed in here!"

// garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// // "Vehicle added!"
// garage.vehicles; // [Car, Motorcycle]

// garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
// // "Sorry, we're full."