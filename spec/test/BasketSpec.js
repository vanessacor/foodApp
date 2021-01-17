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
        const product = new Product("paella", 30, "Seafood Rice", "url");
        this.basket.addProduct(product);
      });
      it("should contain one product", function () {
        const result = this.basket.getQuantity();
        expect(result).toEqual(1);
      });
      it("should add the price to the subtotal", function () {
        const total = this.basket.subTotal;
        expect(total).toEqual(30);
      });
      it("should calculate the fees of the subTotal", function () {
        const total = this.basket.fees;
        expect(total).toEqual(3);
      });
      it("should calculate the total to pay in the basket", function () {
        const total = this.basket.total;
        expect(total).toEqual(3);
      });
    });
  });
});
