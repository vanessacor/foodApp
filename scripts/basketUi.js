"use strict";

class BasketUi {
  constructor(basket, parent) {
    (this.basket = basket),
      (this.parent = parent),
      (this.isBasketShown = false);
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
          <button class="button-basket">
            <ion-icon name="bag-outline"></ion-icon>
          </button>
          <section id="order-details" class="basket-order basket-hidden">
    
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
              <button class="send-order">Send Order</button>
      </section>`;
    this.parent.innerHTML = html;
    const orderBtn = document.querySelector(".send-order");
    orderBtn.addEventListener("click", () => {
      this.processCheckout();
    });
    const showBasketBtn = document.querySelector(".button-basket");
    showBasketBtn.addEventListener("click", () => {
      this.toggleBasket(showBasketBtn);
    });
    return this.parent.innerHTML;
  }

  toggleBasket(button) {
    if (this.isBasketShown == true) {
      this.hideBasket(button);
      return;
    } else this.showBasket(button);
  }

  hideBasket(button) {
    const basket = document.querySelector(".basket-order");
    basket.classList.remove("basket-hidden");
    button.className = "button-basket-show";
    basket.classList.add("basket-show");
    this.isBasketShown = false;
    this.renderBasket();
  }

  showBasket = (button) => {
    const basket = document.querySelector(".basket-order");
    basket.classList.remove("basket-hidden");
    button.className = "button-basket-show";
    basket.classList.add("basket-show");
    this.isBasketShown = true;
  };
  processCheckout() {
    const message = `Your order: fees= ${this.basket.total}, total=${this.basket.total}`;
    window.open(
      `https://api.whatsapp.com/send?phone=+*YOURNUMBER&text=%20 + ${message}`
    );
  }
}
