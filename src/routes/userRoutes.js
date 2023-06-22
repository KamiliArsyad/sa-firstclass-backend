const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
// TODO:
const userAuth = require("../middlewares/userAuthMiddleware");
const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(loginUser);

module.exports = router;
