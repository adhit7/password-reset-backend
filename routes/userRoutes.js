import express from 'express';
import {
  forgotPassword,
  loginUser,
  logoutUser,
  newPassword,
  registerUser,
  tempPassword,
} from '../controllers/userController.js';

const router = express.Router();

// @desc  Register
router.route('/register').post(registerUser);

// @desc  Login
router.route('/login').post(loginUser);

// @desc  Temporary Password
router.route('/check-temppassword/:token').get(tempPassword);

// @desc  New Password
router.route('/new-password').put(newPassword);

// @desc  Forgot Password
router.route('/forgot-password').put(forgotPassword);

// @desc  Logout
router.post('/logout', logoutUser);

export default router;
