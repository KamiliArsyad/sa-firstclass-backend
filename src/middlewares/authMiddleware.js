const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

// TODO: Implement this middleware
const auth = asyncHandler(async (req, res, next) => {
  next(); 
});

module.exports = { protect: auth };