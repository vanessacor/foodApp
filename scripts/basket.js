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

    getTotal () {
        const total = this.products.reduce(
            (accumulator, currentValue) => accumulator + currentValue.price
            , 0
        )
        return this.total = this.formatCurrency(total);
    }


    formatCurrency (price) {
    return (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price));
    }

  }
  
  if (typeof module !== "undefined") {
    module.exports = Basket;
  }