const con = require('../utils/databse')

exports.GetAllWriters = async (req, res) => {
    let writers = await con.execute(`SELECT * FROM writers`)
    res.send(writers[0]);
}


exports.InsertWriter = async (req, res) => {
    let WriterName = req.query.WriterName;

    let insert = await con.execute(`INSERT INTO writers(WriterName) VALUES (?)`, [WriterName])
    res.send(insert[0]);
}