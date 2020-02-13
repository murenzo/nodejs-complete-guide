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
    constructor(t) {
        this.Title = t;
    }

    save() {
        getProductsFromFile(products => {
            products.push(this);

            fs.writeFile(dataSource, JSON.stringify(products), (err) => {
                console.log(err);
            })
        })
        fs.readFile(dataSource, (err, fileContent) => {
            

            
        })
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}