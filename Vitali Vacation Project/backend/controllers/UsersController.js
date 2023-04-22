const con = require('../utils/database')

exports.GetAllUsers = async (req, res) => {
    let users = await con.execute(`SELECT * FROM users`)
    res.send(users[0]);
}
exports.InsertUser = async (req, res) => {
    let firstname = req.query.firstname;
    let lastname = req.query.lastname;
    let username = req.query.username;
    let password = req.query.password;
    let isadmin = req.query.isadmin;

    let insert = await con.execute(`INSERT INTO users(firstname,lastname,username,password,isadmin) VALUES (?,?,?,?,?)`, [firstname,lastname,username,password,isadmin])
    res.send(insert[0]);
}