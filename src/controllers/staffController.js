const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const Staff = require("../models/staffModel");

// @desc    Register new staff
// @route   POST /api/auth/staff
// @access  Public
const registerStaff = asyncHandler(async (req, res) => {
  const { staffId, flightId } = req.body;

  if (!staffId || !flightId) {
    res.status(400).json({ message: "Please add all fields" });
    return;
  }

  // Check if staff exists
  const staffExists = await Staff.findOne({ staffId, flightId });

  if (staffExists) {
    res.status(400).json({ message: "Staff already exists" });
    return;
  }

  // Create staff
  const staff = await Staff.create({
    staffId,
    flightId,
  });

  if (staff) {
    res.status(201).json({
      _id: staff.id,
      staffId: staff.staffId,
      flightId: staff.flightId,
      token: generateToken(staff._id),
    });
  } else {
    res.status(400).json({ message: "Invalid staff data" });
  }
});

// @desc    Authenticate a staff
// @route   POST /api/auth/staff/login
// @access  Public
const loginStaff = asyncHandler(async (req, res) => {
  const { staffId, flightId } = req.body;

  // Check for staff
  const staff = await Staff.findOne({ staffId, flightId });

  if (staff) {
    res.json({
      _id: staff.id,
      staffId: staff.staffId,
      flightId: staff.flightId,
      token: generateToken(staff._id),
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
  registerStaff,
  loginStaff,
};
