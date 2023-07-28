const express = require("express");
const { createProduct } = require("../controllers/productControllers");
const router = express.Router();
const protect = require("../middleware/authMiddleware.js");
const { upload } = require("../utils/fileUpload");

router.post('/', protect, upload.single("image"), createProduct);

module.exports = router