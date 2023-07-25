const express = require("express");
const { registerUser, loginUser, logoutUser, getuser, loginStatus, updateUser } = require('../controllers/userControllers.js');
const protect = require("../middleware/authMiddleware.js");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/logout", logoutUser);

router.get("/getUser", protect, getuser);

router.get("/loggedIn", loginStatus);

router.patch("/updateuser", protect, updateUser);

// router.patch("/changepassword", protect, changePassword)

module.exports = router;