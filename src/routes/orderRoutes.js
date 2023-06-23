const express = require("express");
const {
  addOrder,
  getOrders,
  checkoutOrder,
  getCustomerOrders,
} = require("../controllers/orderController");
const { userAuth } = require("../middlewares/userAuthMiddleware");
const { staffAuth } = require("../middlewares/staffAuthMiddleware");
const router = express.Router();

router.route("/").post(userAuth, addOrder).get(staffAuth, getOrders);
router.route("/checkout").post(userAuth, checkoutOrder);
router.route("/sales").get(userAuth, getCustomerOrders);

module.exports = router;
