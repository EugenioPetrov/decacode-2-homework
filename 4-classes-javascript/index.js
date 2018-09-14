const path = require('path');
const fs = require('fs');

const pathToFile = path.resolve(__dirname, 'products.csv');
const pathToJSON = path.resolve(__dirname, 'result.json');
const content = fs.readFileSync(pathToFile, 'utf8');

const items = content.split(', ');

const Product = function(str) {
    const value = str.split(' ');
    this.title = value[1];
    this.price = {'rubles':Number(value[0]),'dollars':Number((Number(value[0])/70).toFixed(2))};
};

const products = items.map(item => new Product(item));
const productsJSON = JSON.stringify(products);
fs.writeFileSync(pathToJSON, productsJSON, 'utf8');