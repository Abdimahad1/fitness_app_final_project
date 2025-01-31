const WorkoutPlan = require('../models/WorkoutPlan');

// Create a new workout plan
exports.createWorkoutPlan = async (req, res) => {
  try {
    const { title, description, level, duration } = req.body;

    const newWorkoutPlan = new WorkoutPlan({
      title,
      description,
      level,
      duration,
    });

    const savedWorkoutPlan = await newWorkoutPlan.save();
    res.status(201).json(savedWorkoutPlan);
  } catch (error) {
    res.status(500).json({ message: 'Error creating workout plan', error });
  }
};

// Get all workout plans
exports.getAllWorkoutPlans = async (req, res) => {
  try {
    const workoutPlans = await WorkoutPlan.find();
    res.status(200).json(workoutPlans);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching workout plans', error });
  }
};

// Delete a workout plan by ID
exports.deleteWorkoutPlan = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPlan = await WorkoutPlan.findByIdAndDelete(id);
    if (!deletedPlan) {
      return res.status(404).json({ message: 'Workout plan not found' });
    }

    res.status(200).json({ message: 'Workout plan deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting workout plan', error });
  }
};

// Update a workout plan by ID
exports.updateWorkoutPlan = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, level, duration } = req.body;
  
      const updatedPlan = await WorkoutPlan.findByIdAndUpdate(
        id,
        { title, description, level, duration },
        { new: true } // Return the updated document
      );
  
      if (!updatedPlan) {
        return res.status(404).json({ message: 'Workout plan not found' });
      }
  
      res.status(200).json(updatedPlan);
    } catch (error) {
      res.status(500).json({ message: 'Error updating workout plan', error });
    }
  };
