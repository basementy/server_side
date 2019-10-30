var fs = require('fs');

var productsFilePath = 'db/products.json';

var loadFileProducts = function() {
  var fileData = fs.readFileSync(productsFilePath, 'utf8');
  var products = JSON.parse(fileData);

  return products;
}

var saveFileProducts = function(products) {
  var data = JSON.stringify(products);
  fs.writeFileSync(productsFilePath, data, 'utf8');
}

var getProducts = function() {
  var products = loadFileProducts();
  return products;
}

var saveProduct = function(newProduct) {
  var products = loadFileProducts();
  products.push(newProduct);
  saveFileProducts(products);
}

var getCart = function() {
  return JSON.parse(localStorage.getItem("cart"))
}

module.exports = {
  getProducts: getProducts,
  saveProduct: saveProduct,
  getCart: getCart
}