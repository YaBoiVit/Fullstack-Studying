const express = require('express');
const router = express.Router();

const FollowController = require('../controllers/FollowController')

router.get('/GetFollowers', FollowController.GetFollowers)
router.get('/InsertFollower', FollowController.InsertFollower);
router.get('/RemoveFollower', FollowController.RemoveFollower);

module.exports = router;