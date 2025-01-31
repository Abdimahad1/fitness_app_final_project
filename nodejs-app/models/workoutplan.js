const mongoose = require('mongoose');

const workoutPlanSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('WorkoutPlan', workoutPlanSchema);