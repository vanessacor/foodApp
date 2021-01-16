"use strict";

const Product = require("../../scripts/product");

describe("Product", function () {
  describe("when I create a product", function () {
    beforeEach(function () {
      this.product = new Product("paella", "9€", "Seafood Rice", "url");
    });

    it("should contain the correct title", function () {
      expect(this.product.title).toEqual("paella");
    });

    it("should contain the correct price", function () {
      expect(this.product.price).toEqual("9€");
    });

    it("should contain the correct description", function () {
      expect(this.product.description).toEqual("Seafood Rice");
    });

    it("should contain the selected image", function () {
      expect(this.product.image).toEqual("url");
    });
    
  });
  
});
