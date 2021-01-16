"use strict";

class Product {
  constructor(title, price, description, image) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
  }

}

if (typeof module !== "undefined") {
  module.exports = Product;
}
