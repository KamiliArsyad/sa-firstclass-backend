const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema({
  staffId: {
    type: String,
    required: true,
  },
  flightId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Staff", StaffSchema);
