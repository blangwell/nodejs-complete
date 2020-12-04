const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  // this data is stored in our server
  // it is available across users/requests and browsers
  const products = adminData.products;
  res.render('shop', { 
    prods: products, 
    docTitle: 'Shop', 
    path: '/', 
    pageTitle: 'Shop',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;