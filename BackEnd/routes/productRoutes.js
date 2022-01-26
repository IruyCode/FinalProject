const express = require('express')
const router = express.Router();

const {getAllProducts, getProductById} = require('../controller/productControllers');

// main purpose of getting all products from database
// route GET /api/products
router.get('/', getAllProducts)

// main purpose of getting all products from database
// route GET /api/products/:id
router.get('/product/:id', getProductById) // só com /:id

module.exports = router;