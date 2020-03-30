const Product = require('../models/product');

exports.getShop = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', 
        {
            prods: products,
            pageTitle: 'Shop Page', 
            path: '/'
        })
    })
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', 
    {
        pageTitle: 'Product Cart', 
        path: '/cart'
    })
}

exports.postCart = (req, res, next) => {
    const {productId} = req.body;
    console.log(productId);
    res.redirect('/');
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', 
    {
        pageTitle: 'My Orders', 
        path: '/orders'
    })
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', 
        { 
            prods: products, 
            pageTitle: 'Products Page', 
            path: '/products' 
        });
    })
    
}

exports.getProduct = (req, res, next) => {
    const { productId } = req.params;
    Product.findById(productId, product => {
        res.render('shop/product-detail', 
        {
            product: product, 
            pageTitle: product.Title, 
            path: '/products'
        })
    });
}