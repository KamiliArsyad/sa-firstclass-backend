const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  surname: {
    type: String,
    required: true,
  },
  flightNumber: {
    type: String,
    required: true,
  },
  seatNumber: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
