const con = require('../utils/database')

exports.GetAllVacations = async (req, res) => {
    let vacations = await con.execute(`SELECT * FROM vacations`)
    res.send(vacations[0]);
}


exports.InsertVacation = async (req, res) => {
    const destination = req.body.Destination;
    const startDate = req.body.StartDate;
    const endDate = req.body.EndDate;
    const description = req.body.Description;
    const price = req.body.Price;
    console.log(req.file);
    const image = req.file.filename

    let insert = await con.execute(`INSERT INTO vacations(Destination,StartDate,EndDate,Description,Price,Image) VALUES (?,?,?,?,?,?)`, [destination,startDate,endDate,description,price,image])
    res.send(insert[0]);
}
exports.deleteVacation = async (req, res) => {
    let id = req.query.id; 
    let data = await con.execute(`DELETE FROM vacations WHERE VacationID = ${id}`)
    res.send(data[0]);
}
exports.EditVacation = async (req, res) => {
    const id = req.body.id;
    const destination = req.body.Destination;
    const startDate = req.body.StartDate;
    const endDate = req.body.EndDate;
    const description = req.body.Description;
    const price = req.body.Price;
    console.log(req.file);
    let data = ""
    if(req.file){   
        const image = req.file.filename // If req.file has an image
        data = await con.execute(`UPDATE vacations SET Destination =? , StartDate = ?, EndDate = ?, Description =? , Price = ?, Image = ? WHERE VacationID = ?`, [destination,startDate,endDate,description,price,image,id])
    }
    else{ // If req.file is empty
        data = await con.execute(`UPDATE vacations SET Destination =? , StartDate = ?, EndDate = ?, Description =? , Price = ? WHERE VacationID = ?`, [destination,startDate,endDate,description,price,id])
    }
    res.send(data[0]);
}
exports.AddFollower = async (req, res) => {
    const VacationID = req.query.VacationID;
    let insert = await con.execute(`UPDATE vacations SET Followers=Followers+1 WHERE VacationID = ?`, [VacationID])
    res.send(insert[0]);
}
