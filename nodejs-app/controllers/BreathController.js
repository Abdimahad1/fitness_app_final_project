// backend/controllers/BreathController.js
const Breath = require('../models/BreathModel');

exports.createBreathNotification = async (req, res) => {
  const { userId, message } = req.body;
  try {
    const notification = new Breath({ userId, message });
    await notification.save();
    res.status(201).json({ success: true, message: 'Breath notification created successfully', notification });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getUserBreathNotifications = async (req, res) => {
  const { userId } = req.params;
  try {
    const notifications = await Breath.find({ userId });
    res.status(200).json({ success: true, notifications });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};