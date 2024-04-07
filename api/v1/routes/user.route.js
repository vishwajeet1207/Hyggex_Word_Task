
const express = require('express');
const router = express.Router();
const UserController = require('../controller/user.controller');

router.post('/', UserController.createUser);
router.get('/random', UserController.getRandomUser);
router.get('/check_existence', UserController.checkUserExistence);
router.get('/above_age', UserController.getUsersAboveAge);
router.get('/names', UserController.listUserNames);

module.exports = router;
