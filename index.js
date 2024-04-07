
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
const userRoutes = require('./api/v1/routes/user.route');
app.use( userRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {

})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((err) => console.error('Error connecting to MongoDB:', err));
