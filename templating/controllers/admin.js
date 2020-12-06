const Product = require('../models/product');

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
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const price = req.body.price;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect('/products');
};
