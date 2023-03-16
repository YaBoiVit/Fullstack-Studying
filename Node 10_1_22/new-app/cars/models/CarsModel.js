const cars = []

module.exports = class Car {
    model = ''
    price = 0
    color = ''
    year = 0
    constructor(model,price,color,year){
        this.model = model;
        this.price = price;
        this.color = color;
        this.year = year;
    }

    addToCars(){
        cars.push(this)
        console.log(cars)
    }

    static showCars(){
        return cars
    }
}

