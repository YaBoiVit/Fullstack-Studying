const express = require('express');
const router = express.Router();

const VacationController = require('../controllers/VacationController')

router.get('/GetAllVacations', VacationController.GetAllVacations);
router.get('/InsertVacation', VacationController.InsertVacation);

module.exports = router;
