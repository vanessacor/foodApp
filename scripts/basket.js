class Basket {
    constructor() {
      this.products = [];
      this.total = 0
      this.quantity = 0;
    }

    addProduct (product) {
        this.products.push(product)
        this.quantity++
    }

    getQuantity () {
        return this.quantity
    }

    

  }
  
  if (typeof module !== "undefined") {
    module.exports = Basket;
  }