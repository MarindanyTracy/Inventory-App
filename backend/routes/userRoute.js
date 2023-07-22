const express = require("express");
const { registerUser } = require('../controllers/userControllers.js')

const router = express.Router();

router.post("/register", registerUser)

module.exports = router;