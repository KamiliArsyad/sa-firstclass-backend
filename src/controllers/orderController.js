const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");

// @desc    Create a new order
// @route   POST /api/order
// @access  Private
const addOrder = asyncHandler(async (req, res) => {
  const { orderDateTime, products } = req.body;

  const order = new Order({
    user: req.user._id,
    orderDateTime,
    products,
    status: "Pending",
  });

  const createdOrder = await order.save();

  res.status(201).json(createdOrder);
});

// @desc    Get all orders
// @route   GET /api/order
// @access  Private
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate("user", "id surname");
  res.json(orders);
});

// @desc    Checkout an order
// @route   POST /api/order/checkout
// @access  Private
const checkoutOrder = asyncHandler(async (req, res) => {
  const { orderId } = req.body;

  const order = await Order.findById(orderId);

  if (order && order.user.toString() === req.user._id.toString()) {
    order.status = "Completed";
    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404).json({ message: "Order not found" });
  }
});

// @desc    Get orders of the authenticated customer
// @route   GET /api/order/sales
// @access  Private
const getCustomerOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

module.exports = {
  addOrder,
  getOrders,
  checkoutOrder,
  getCustomerOrders,
};
