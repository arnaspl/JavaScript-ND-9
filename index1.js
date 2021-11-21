function Car(make, model, color, fuelType) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.fuelType = fuelType;
}

const car1 = new Car('BMW', 'X5', 'Black', 'Petrol');

Car.prototype.getCarMakeModel = function () {
  const makeModel = {
    make: this.make,
    model: this.model
  }
  
  console.log(makeModel); 
};
car1.getCarMakeModel();

Car.prototype.engineFuel = function () {
    if (this.fuelType === 'Diesel') {
        console.log('Automobilis varomas dyzeliu')
    } else if (this.fuelType === 'Petrol') {
        console.log('Automobilis varomas benzinu')
    } else if (this.fuelType === 'Electricity') {
        console.log('Automobilis varomas elektra')
    }
}

car1.engineFuel();