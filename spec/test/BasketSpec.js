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
        const product = new Product(
          1,
          "paella",
          30,
          "Seafood Rice",
          "lunch",
          "url"
        );
        this.basket.addProduct(product);
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
        expect(total).toEqual(33);
      });

      describe("and when I add another product with same ID", function () {
        beforeEach(function () {
          const product1 = new Product(
            1,
            "paella",
            30,
            "Seafood Rice",
            "lunch",
            "url"
          );
          this.basket.addProduct(product1);
        });
  
        it("should increment the item count", function () {
          const itemCount = this.basket.getItemQuantity(product1);
          expect(itemCount).toEqual(1);
        });
      });

      describe("when I add another product with a diffent ID", function () {
        beforeEach(function () {
          const product2 = new Product(
            2,
            "veggie burger",
            30,
            "Burgers",
            "lunch",
            "url"
          );
          this.basket.addProduct(product2);
        });
        it("should increment the product count", function () {
          const productCount = this.basket.productCount;
          expect(productCount).toEqual(2);
        });
      });
    });

    describe("when remove a product", function () {
      beforeEach(function () {
        const product = new Product(
          1,
          "paella",
          30,
          "Seafood Rice",
          "Lunch",
          "url"
        );
        this.basket.addProduct(product);
        this.basket.removeProduct(product);
      });
      it("should contain zero products", function () {
        const result = this.basket.productCount;
        expect(result).toEqual(0);
      });
      it("should subtract the price to the subtotal", function () {
        const total = this.basket.subTotal;
        expect(total).toEqual(0);
      });
      it("should calculate the fees of the subTotal", function () {
        const total = this.basket.fees;
        expect(total).toEqual(0);
      });
      it("should calculate the total to pay in the basket", function () {
        const total = this.basket.total;
        expect(total).toEqual(0);
      });
    });
  });
});
