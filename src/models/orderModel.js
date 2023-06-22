const mongoose = require('mongoose');

const OrderedProductSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  orderDateTime: {
    type: Date,
    required: true
  },
  products: [OrderedProductSchema],
  status: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Order', OrderSchema);
