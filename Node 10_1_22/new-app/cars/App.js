const cors = require('cors')
const express = require('express')
const Car = require('./models/CarsModel')


var app = express();

app.use(cors());
app.use(express.json());

app.route('/addCar').get((req, res) => {
    let car = new Car(req.query.model, req.query.price, req.query.color, req.query.year);
    car.addToCars()
    res.send("success")
})
app.route('/showAllCars').get((req, res) => {
    res.send(Car.showCars());
});
app.listen(5000)