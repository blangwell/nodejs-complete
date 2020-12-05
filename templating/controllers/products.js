const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
  res.render('shop/index.ejs', {
    pageTitle: 'Welcome to Da shop',
    path: '/'
  })
}

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll(products => {
    res.render('shop/product-list', { 
      pageTitle: 'Shop',
      path: '/products', 
      prods: products
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    pageTitle: 'Your Cart',
    path: '/cart'
  })
}

// ADMIN
exports.getAdminProducts = (req, res, next) => {
  const products = Product.fetchAll(products => {
    res.render('admin/products', {
      pageTitle: 'Admin Products',
      path: '/admin/products',
      prods: products,
    })
  })
};

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add a Product',
    path: '/admin/add-product',
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};
