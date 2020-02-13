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
    Product.fetchAll(products => {
        res.render('shop', 
        { 
            prods: products, 
            pageTitle: 'Shop', 
            path: '/' 
        });
    })
    
}