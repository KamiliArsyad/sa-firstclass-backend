const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

// TODO: Implement this middleware
const staffAuth = asyncHandler(async (req, res, next) => {
  next(); 
});

module.exports = { staffAuth };