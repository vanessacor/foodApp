"use strict";

class Product {
  constructor(id, title, price, description, category, image) {
    this.id = id
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category
    this.image = image;
  }
  

}

if (typeof module !== "undefined") {
  module.exports = Product;
}
