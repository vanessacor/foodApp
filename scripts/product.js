"use strict";

class Product {
  constructor(title, price, description, quantity = 0) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.quantity = quantity;
  }
}

if (typeof module !== "undefined") {
  module.exports = Product;
}
