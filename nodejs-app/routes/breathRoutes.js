const express = require('express');
const router = express.Router();
const breathController = require('../controllers/BreathController');

// Create a new breath notification
router.post('/', breathController.createBreathNotification);

// Get all breath notifications for a user by user ID
router.get('/:userId', breathController.getUserBreathNotifications);

module.exports = router;