const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: String,
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  allergens: String,
  imageUrl: String,
  price: {
    type: Number,
    required: true,
  },
  flightNumber: {
    type: String,
    required: true,
  },
  availability: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
