const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc    Register new user
// @route   POST /api/auth/user
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { surname, flightNumber, seatNumber } = req.body;

  if (!surname || !flightNumber || !seatNumber) {
    res.status(400).json({ message: "Please add all fields" });
    return;
  }

  // Check if user exists
  const userExists = await User.findOne({ surname, flightNumber, seatNumber });

  if (userExists) {
    res.status(400).json({ message: "User already exists" });
    return;
  }

  // Create user
  const user = await User.create({
    surname,
    flightNumber,
    seatNumber,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      surname: user.surname,
      flightNumber: user.flightNumber,
      seatNumber: user.seatNumber,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }
});

// @desc    Authenticate a user
// @route   POST /api/auth/user/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { surname, flightNumber, seatNumber } = req.body;

  // Check for user email
  const user = await User.findOne({ surname, flightNumber, seatNumber });

  if (user) {
    res.json({
      _id: user.id,
      surname: user.surname,
      flightNumber: user.flightNumber,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
};