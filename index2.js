class Car {
    constructor(make, model, color, fuelType) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.fuelType = fuelType;
    }

    getCarMakeModel() {
        const makeModel = {
          make: this.make,
          model: this.model
        }
        return makeModel;
    }

    engineFuel() {
        if (this.fuelType === 'Diesel') {
            console.log('Automobilis varomas dyzeliu')
        } else if (this.fuelType === 'Petrol') {
            console.log('Automobilis varomas benzinu')
        } else if (this.fuelType === 'Electricity') {
            console.log('Automobilis varomas elektra')
        }
    }
}

const car = new Car('BMW', 'X5', 'Black', 'Diesel');
console.log(car.getCarMakeModel());
car.engineFuel();