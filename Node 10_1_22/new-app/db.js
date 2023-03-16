const cors = require('cors');
const express = require('express');
const con = require('./utils/database');

var app = express();

app.use(cors())
app.use(express.json());

app.route('/').get(async(req, res) => {
    let categories = await con.execute(`SELECT * FROM categories`)
    res.send(categories[0]);
});
app.route('/insertCategory').get(async(req, res) => {
    let name = req.query.name;
    let image = req.query.image;
    let color = req.query.color;

    let insert = await con.execute(`INSERT INTO categories(Name,Image,Color) VALUES (?,?,?)`, [name,image,color])
    res.send(insert[0]);
});

app.listen(5000);