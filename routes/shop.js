const path = require('path');

const express = require('express');

const admin = require('./admin');

const rootDir = require('./../utils/path');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('shop', {prods: admin.products});
});

module.exports = router;