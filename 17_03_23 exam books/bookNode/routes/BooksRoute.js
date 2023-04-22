const express = require('express');
const router = express.Router();

const BooksController = require('../controllers/BooksController')

router.get('/GetAllBooks', BooksController.GetAllBooks);
router.get('/InsertBook', BooksController.InsertBook);
router.get('/DeleteBook', BooksController.DeleteBook);

module.exports = router;

//localhost:5000/GetAllBooks
//http://localhost:5000/InsertBook?BookName="abcd"&WriterName=dfg