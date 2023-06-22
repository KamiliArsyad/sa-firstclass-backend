const express = require("express");
const { registerStaff, loginStaff } = require("../controllers/staffController");
// TODO
const staffAuth = require("../middlewares/staffAuthMiddleware");
const router = express.Router();

router.route("/").post(registerStaff);
router.route("/login").post(loginStaff);

module.exports = router;
