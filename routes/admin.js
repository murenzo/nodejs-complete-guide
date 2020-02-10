const path = require('path');

const express = require('express');

const rootDir = require('./../utils/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res) => {
    res.render('add-product', { pageTitle: 'Add Product'});
});

router.post('/add-product', (req, res) => {
    const { title } = req.body;
    products.push({ Title: title })
    console.log(products);
    res.redirect('/');
})

module.exports.router = router;
module.exports.products = products;