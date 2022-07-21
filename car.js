class Vehicle {
  
    constructor(name) {
      this.name = name;
    }
  
    say() {
      console.log("I am a " + this.name)
    }
  }

class Car extends Vehicle {
    say() {
          console.log("I used to be " + this.name)
    }
 }

 let myCar = new Car('Bugatti');
  let yourCar = new Vehicle('Toyota')

  myCar.say(); // I am a Bugatti
  yourCar.say(); // I am a Toyota