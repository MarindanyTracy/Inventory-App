const express = require("express");
const { createProduct } = require("../controllers/productControllers");
const router = express.Router();
const protect = require("../middleware/authMiddleware.js");

router.post('/', protect, createProduct)

module.exports = router