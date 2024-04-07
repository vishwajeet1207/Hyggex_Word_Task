const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  location: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
