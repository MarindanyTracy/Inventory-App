const express = require("express");
const { createProduct, getProducts, getProduct, deleteProduct } = require("../controllers/productControllers");
const router = express.Router();
const protect = require("../middleware/authMiddleware.js");
const { upload } = require("../utils/fileUpload");

router.post('/', protect, upload.single("image"), createProduct);

router.get('/', protect, getProducts)

router.get('/:id', protect, getProduct)

router.delete('/:id', protect, deleteProduct)


module.exports = router