class Basket {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    const item = this.products.find((item) => item.product.id === product.id);
    if (item) {
      item.quantity++;
      return item
    } else {
      const productItem = {quantity: 1, product}
      this.products.push(productItem);
      return  productItem;  
    }
  }

  removeProduct(product) {
    const item = this.products.find((item) => item.product.id === product.id);
    if (item.quantity > 1) {
      item.quantity-- 
      return item;
    } else {
      const productIndex = this.products.findIndex((item) => item.product.id === product.id);
      this.products.splice(productIndex, 1);
    }
  }

  getItemQuantity(product) {
    const item = this.products.find((item) => item.product.id === product.id);
    return item.quantity;
  }

  get productCount() {
    const quantity = this.products.length;
    return quantity;
  }

  get subTotal() {
    const total = this.products.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
    return total;
  }

  get fees() {
    const feePercentage = 0.1;
    const fees = this.subTotal * feePercentage;
    return fees;
  }

  get total() {
    return this.subTotal + this.fees;
  }
}

if (typeof module !== "undefined") {
  module.exports = Basket;
}
