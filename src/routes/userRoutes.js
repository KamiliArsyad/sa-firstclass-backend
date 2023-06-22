const express = require('express');
const router = express.Router();

const { auth } = require('../middlewares/authMiddleware');
const userController = require('../controllers/userController');

router
  .route('/')
  .post(userController.createUser);

router
  .route('/login')
  .post(userController.loginUser);

module.exports = router;

