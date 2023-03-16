var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"super 1st"
});
module.exports = con.promise();