const fs = require('fs');
const path = require('path');

const rootDir = require('../utils/path');

const dataSource = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = (cb) => {
    fs.readFile(dataSource, (err, fileContent) => {
        if(err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    })
}

module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.Title = title,
        this.ImageUrl = imageUrl,
        this.Description = description,
        this.Price = price
    }

    save() {
        getProductsFromFile(products => {
            products.push(this);

            fs.writeFile(dataSource, JSON.stringify(products), (err) => {
                console.log(err);
            })
        })
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }

    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(p => p.Id === id);
            cb(product);
        })
    }
}