const express = require("express");
const { registerUser, loginUser, logoutUser, getuser } = require('../controllers/userControllers.js');
const protect = require("../middleware/authMiddleware.js");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/logout", logoutUser);

router.get("/getUser", protect, getuser);

module.exports = router;