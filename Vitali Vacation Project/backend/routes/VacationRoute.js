let express = require('express');
    router = express.Router();
    multer = require('multer');

const DIR = './public/images';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "_" + file.originalname.toLowerCase())
    }
});


var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

const VacationController = require('../controllers/VacationController')

router.get('/GetAllVacations', VacationController.GetAllVacations);
router.post('/InsertVacation', upload.single('Image'),VacationController.InsertVacation);
router.get('/deleteVacation', VacationController.deleteVacation);
router.post('/EditVacation', upload.single('Image'),VacationController.EditVacation)
router.get('/AddFollower', VacationController.AddFollower)
module.exports = router;
