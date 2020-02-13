const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
    res.render('add-product', 
    {pageTitle: 'Add Product', path: '/admin/add-product'});
}

exports.postAddProduct = (req, res) => {
    const { title } = req.body;
    const product = new Product(title);
    product.save();
    res.redirect('/');
}

exports.getProduct = (req, res) => {
    res.render('shop', 
    { 
        prods: Product.fetchAll(), 
        pageTitle: 'Shop', 
        path: '/' 
    });
}