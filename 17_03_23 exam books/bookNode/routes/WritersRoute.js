const express = require('express');
const router = express.Router();

const WritersController = require('../controllers/WritersController')

router.get('/GetAllWriters', WritersController.GetAllWriters);
router.get('/InsertWriter', WritersController.InsertWriter);

module.exports = router;


//http://localhost:5000/GetAllBooks
//http://localhost:5000/InsertBook?FirstName=abcd&LastName=dfg
//http://localhost:5000/GetAllWriters