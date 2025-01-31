const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const workoutPlanRoutes = require('./routes/workoutPlanRoutes'); // Import workout plan routes
const profileRoutes = require('./routes/profileRoutes'); // Import profile routes
const breathRoutes = require('./routes/breathRoutes'); // Import breath routes
const cors = require('cors'); // Import cors

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS for all routes

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected'); // Log message on successful connection
    })
    .catch(err => console.error('MongoDB connection error:', err));

// User routes
app.use('/api/users', userRoutes); // Use user routes

// Workout plan routes
app.use('/api/workout-plans', workoutPlanRoutes); // Use workout plan routes

// Profile routes
app.use('/api/profiles', profileRoutes); // Use profile routes

// Breath notification routes
app.use('/api/breaths', breathRoutes); // Use breath routes

// Basic route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});