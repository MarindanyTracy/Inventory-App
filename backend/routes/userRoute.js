const express = require("express");
const { registerUser, loginUser } = require('../controllers/userControllers.js')

const router = express.Router();

router.post("/register", registerUser);

router.get("/login", loginUser);

module.exports = router;