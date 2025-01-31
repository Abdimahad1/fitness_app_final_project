// backend/controllers/ProfileController.js
const Profile = require('../models/ProfileModel');

exports.registerProfile = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newProfile = new Profile({ username, email, password });
    await newProfile.save();
    res.status(201).json({ success: true, message: 'Profile registered successfully', profile: newProfile });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getProfile = async (req, res) => {
  const { userId } = req.params;
  try {
    const profile = await Profile.findById(userId);
    if (!profile) return res.status(404).json({ success: false, message: 'Profile not found' });
    res.status(200).json({ success: true, profile });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};