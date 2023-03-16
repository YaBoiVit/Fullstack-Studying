const express = require('express');
const router = express.Router();

const TasksController = require('../controllers/TasksController')

router.get('/GetAllTasks', TasksController.GetAllTasks);
router.get('/InsertTask', TasksController.InsertTask);

module.exports = router;


//http://localhost:5000/GetAllTasks
//http://localhost:5000/InsertTask?task=abcd&userID=2
//http://localhost:5000/GetAllUsers