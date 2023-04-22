const con = require('../utils/databse')

exports.GetAllBooks = async (req, res) => {
    let books = await con.execute(`SELECT * FROM books`)
    res.send(books[0]);
}

exports.InsertBook = async (req, res) => {
    let WriterID = req.query.WriterID;
    let BookName = req.query.BookName;
    let Pages = req.query.Pages;
    let Price = req.query.Price;

    let insert = await con.execute(`INSERT INTO books(WriterID,BookName,Pages,Price) VALUES (?,?,?,?)`, [WriterID,BookName,Pages,Price])
    res.send(insert[0]);
}
exports.DeleteBook = async (req, res) => {
    let BookID = req.query.BookID;
    let insert = await con.execute(`DELETE FROM books WHERE BookID = ${BookID}`)
    res.send(insert[0]);
}