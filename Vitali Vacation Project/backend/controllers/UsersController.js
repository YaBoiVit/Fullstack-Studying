const con = require('../utils/database')

exports.GetAllUsers = async (req, res) => {
    let users = await con.execute(`SELECT * FROM users`)
    res.send(users[0]);
}
exports.InsertUser = async (req, res) => {
    let firstname = req.query.firstname;
    let lastname = req.query.lastname;
    let email = req.query.email;
    let password = req.query.password;
    let isadmin = req.query.isadmin;

    let insert = await con.execute(`INSERT INTO users(FirstName,LastName,Email,Password,isadmin) VALUES (?,?,?,?,?)`, [firstname,lastname,email,password,isadmin])
    res.send(insert[0]);
}