const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
    res.render('admin/add-product', 
    {pageTitle: 'Add Product', path: '/admin/add-product'});
}

exports.postAddProduct = (req, res) => {
    const { title, imageurl, description, price } = req.body;
    const product = new Product(title, imageurl, description, price);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', 
        { 
            prods: products, 
            pageTitle: 'Admin Products Page', 
            path: '/admin/products' 
        });
    })
}