// backend/models/ProfileModel.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: String, default: '' },
  goal: { type: String, default: '' },
  birthYear: { type: String, default: '' },
  height: { type: String, default: '' },
  weight: { type: String, default: '' },
});

module.exports = mongoose.model('Profile', profileSchema);