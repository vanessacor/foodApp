"use strict";

const Basket = require("../../scripts/basket");
const Product = require("../../scripts/product");

describe("Basket", function () {
  describe("given an empty basket", function () {
    beforeEach(function () {
      this.basket = new Basket();
    });

    describe("when add a product", function () {
      beforeEach(function () {
        const product = new Product("paella", "9€", "Seafood Rice", "url");
        this.basket.addProduct(product);
      });
      it("should contain one product", function () {
        const result = this.basket.getQuantity();
        expect(result).toEqual(1);
      });
      it("should add the price to the total", function () {
        const total = this.basket.getTotal();
        expect(total).toEqual("9€");
      });
    });
  });
});
