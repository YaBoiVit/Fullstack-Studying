const con = require('../utils/database')

exports.GetAllVacations = async (req, res) => {
    let vacations = await con.execute(`SELECT * FROM vacations`)
    res.send(vacations[0]);
}


exports.InsertVacation = async (req, res) => {
    let destination = req.query.destination;
    let startDate = req.query.startDate;
    let endDate = req.query.endDate;
    let description = req.query.description;
    let price = req.query.price;
    let image = req.query.image;
    let insert = await con.execute(`INSERT INTO vacations(destination,startDate,endDate,description,price,image) VALUES (?,?,?,?,?,?)`, [destination,startDate,endDate,description,price,image])
    res.send(insert[0]);
}