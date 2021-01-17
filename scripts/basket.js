class Basket {
  constructor() {
    this.products = [];
    this.fees = 0;
    this.SubTotal = 0;
    this.quantity = 0;
  }

  addProduct(product) {
    this.products.push(product);
    this.quantity++;
    this.getSubTotal();
    this.getFees();
  }

  getQuantity() {
    return this.quantity;
  }

  getSubTotal() {
    const total = this.products.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );
    return this.subTotal = total;
  }

  getFees() {
    const feePercentage = .10
    const fees = this.subTotal * feePercentage;
    return this.fees = fees;
  }
  // formatCurrency(price) {
  //   return new Intl.NumberFormat("de-DE", {
  //     style: "currency",
  //     currency: "EUR",
  //   }).format(price);
  // }
}

if (typeof module !== "undefined") {
  module.exports = Basket;
}
