const express = require('express');
const router = express.Router();

const userController = require('../controllers/UsersController')

router.get('/getAllUsers', userController.getAllUsers);

module.exports = router;

//localhost:5000/getAllUsers