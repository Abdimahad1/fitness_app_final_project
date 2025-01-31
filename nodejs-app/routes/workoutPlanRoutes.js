const express = require('express');
const router = express.Router();
const workoutPlanController = require('../controllers/workoutPlanController');

// Create a new workout plan
router.post('/', workoutPlanController.createWorkoutPlan);

// Get all workout plans
router.get('/', workoutPlanController.getAllWorkoutPlans);

// Delete a workout plan by ID
router.delete('/:id', workoutPlanController.deleteWorkoutPlan);

// update the workout plan
router.put('/:id', workoutPlanController.updateWorkoutPlan);


module.exports = router;