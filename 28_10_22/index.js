let CarArr = []
var id=1;
class Car {
    id = 0
    name = ''
    engine = 0
    color = ''
    year = 0
    CarService = []
    constructor(id,name, engine, color, year) {
        this.id = id
        this.name = name
        this.engine = engine
        this.color = color
        this.year = year
    }  
    SetService(date,km) {
        this.CarService.push({date,km})
    }
}
function AddCar(){
    let name = NameDV.value
    let engine = EngineDV.value
    let color = ColorDV.value
    let year = YearDV.value
let NewCar = new Car(id,name,engine,color,year)
CarArr.push(NewCar)
console.log(CarArr)
id++;
formEL.reset();
}
function AddService(){
    let date = DateDV.value
    let km = KmDV.value
    let CarObject = CarArr.find(car =>{
        return car.id == IdDV.value
    
    })
    CarObject.SetService(date,km)
    console.log(CarArr)
    formAL.reset();
}



