
const User = require('../models/user.model');

// Controller to store user data
exports.createUser = async (req, res) => {
  try {
    const { name, dob, location } = req.query;
    const user = new User({
      name,
      dob,
      location
    });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

// Controller to get a random user
exports.getRandomUser = async (req, res) => {
  try {
    const count = await User.countDocuments();
    const random = Math.floor(Math.random() * count);
    const user = await User.findOne().skip(random);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to check user existence
exports.checkUserExistence = async (req, res) => {
  try {
    const { name } = req.query;
    const user = await User.findOne({ name });
    res.json({ exists: !!user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to get users above a certain age
exports.getUsersAboveAge = async (req, res) => {
  try {
    const { age } = req.query;
    const users = await User.find({ dob: { $lte: new Date(new Date().getFullYear() - age, 0, 1) } });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to list user names
exports.listUserNames = async (req, res) => {
  try {
    const users = await User.find({}, 'name');
    const names = users.map(user => user.name);
    res.json(names);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
