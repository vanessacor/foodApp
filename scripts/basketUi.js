"use strict";

class BasketUi {
  constructor(basket, parent) {
    (this.basket = basket), (this.parent = parent);
    this.renderBasket();
  }

  formatCurrency(number) {
    const price = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(number);
    return price;
  }
  renderBasket() {
    let { subTotal, fees, total } = this.basket;
    subTotal = this.formatCurrency(subTotal);
    fees = this.formatCurrency(fees);
    total = this.formatCurrency(total);
    const html = `
        <section id="order-details">
            <ul >
            <li class="order-details">
            <p>Subtotal</p>
            <p>${subTotal}</p>
            </li>
            <li class="order-details">
            <p>IVA</p>
            <p>${fees}</p>
            </li>
            <li class="order-details">
            <p>Delivery Fee</p>
            <p>1.00€</p>
            </li>
            <li class="order-details order-total">
            <p>TOTAL</p>
            <p>${total}</p>
            </li>
        </ul>
      <button class="order-button">Send Order</button>
      </section>`;
    this.parent.innerHTML = html;
    const orderBtn = document.querySelector(".order-button");
    orderBtn.addEventListener("click", () => {
        this.processCheckout();
      });
    return this.parent.innerHTML;
  }

  processCheckout() {
      const message = `Your order: fees= ${this.basket.total}, total=${this.basket.total}`
      window.open(`https://api.whatsapp.com/send?phone=+*YOURNUMBER&text=%20 + ${message}`)
  }
}
