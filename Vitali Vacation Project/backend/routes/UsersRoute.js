const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/UsersController')

router.get('/GetAllUsers', UsersController.GetAllUsers);
router.get('/InsertUser', UsersController.InsertUser);

module.exports = router;