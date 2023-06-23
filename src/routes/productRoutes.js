const express = require("express");
const {
  addProduct,
  getProducts,
  getProductById,
} = require("../controllers/productController");
const { staffAuth } = require("../middlewares/staffAuthMiddleware");
const router = express.Router();

router.route("/").post(staffAuth, addProduct).get(getProducts);
router.route("/:id").get(getProductById);

module.exports = router;
