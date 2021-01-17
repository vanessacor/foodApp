class Basket {
  constructor() {
    this.products = [];
    this.fees = 0;
    this.SubTotal = 0;
    this.generateId = 1
  }

  addProduct(product) {
    product.id = this.generateId++
    this.products.push(product);
    this.getSubTotal();
    this.getFees();
    this.getTotal();
  }

  removeProduct(id) {
    const productIndex = this.products.findIndex(item => item.id === id)
    this.products.splice(productIndex, 1)
    this.getSubTotal();
    this.getFees();
    this.getTotal()
  }

  getQuantity() {
    const quantity = this.products.length;
    return quantity;
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

  getTotal() {
    return this.total = this.subTotal + this.fees;
  }
  
}

if (typeof module !== "undefined") {
  module.exports = Basket;
}
