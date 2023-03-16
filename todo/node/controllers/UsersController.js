const con = require('../utils/databse')

exports.getAllUsers = async (req, res) => {
    let users = await con.execute(`SELECT * FROM users`)
    res.send(users[0]);
}