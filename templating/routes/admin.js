const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// don't invoke the function!
router.get('/products', productsController.getAdminProducts);

router.get('/add-product', productsController.getAddProduct);
router.post('/add-product', productsController.postAddProduct);

module.exports = router;