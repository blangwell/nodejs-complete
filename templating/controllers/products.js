const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add a Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
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
};