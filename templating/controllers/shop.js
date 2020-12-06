const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
  const products = Product.fetchAll(products => {
    res.render('shop/index', { 
      pageTitle: 'Shop',
      path: '/shop', 
      prods: products
    });
  });
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll(products => {
    res.render('shop/product-list', { 
      pageTitle: 'Products',
      path: '/products', 
      prods: products
    });
  });
};

exports.getProductDetail = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    console.log(product)
    res.render('shop/product-detail', {
      pageTitle: 'Product Detail',
      path: '/details',
      product: product
    });
  });
}

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    pageTitle: 'Your Cart',
    path: '/cart'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    pageTitle: 'Checkout',
    path: '/checkout'
  })
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    pageTitle: 'Your Orders',
    path: '/orders'
  })
};