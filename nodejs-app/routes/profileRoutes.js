const express = require('express');
const router = express.Router();
const profileController = require('../controllers/ProfileController');

// Register a new profile
router.post('/register', profileController.registerProfile);

// Get a profile by user ID
router.get('/:userId', profileController.getProfile);

module.exports = router;