const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

// @desc    Add a product
// @route   POST /api/product
// @access  Private
const addProduct = asyncHandler(async (req, res) => {
  const { name, category, description, ingredients, allergens, imageUrl, price, flightNumber, availability } = req.body;

  const product = new Product({
    name,
    category,
    description,
    ingredients,
    allergens,
    imageUrl,
    price,
    flightNumber,
    availability
  });

  const createdProduct = await product.save();

  res.status(201).json(createdProduct);
});

// @desc    Get all products
// @route   GET /api/product
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    Get a product by ID
// @route   GET /api/product/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

module.exports = {
  addProduct,
  getProducts,
  getProductById,
};
