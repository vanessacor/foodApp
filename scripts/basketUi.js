'use strict'

class BasketUi {
    constructor(basket, parent) {
        this.basket = basket,
        this.parent = parent
        this.renderBasket()
    }

    renderBasket() {
        const html = `
        <button class="button-basket">
          <ion-icon name="bag-outline"></ion-icon>
        </button>
        <section id="order-details">
            <ul >
            <li class="order-details">
            <p>Subtotal</p>
            <p>${this.basket.subTotal}</p>
            </li>
            <li class="order-details">
            <p>IVA</p>
            <p>${this.basket.fees}</p>
            </li>
            <li class="order-details">
            <p>Delivery Fee</p>
            <p>1.00€</p>
            </li>
            <li class="order-details order-total">
            <p>TOTAL</p>
            <p>${this.basket.total}</p>
            </li>
        </ul>
      <button class="order-button">Send Order</button>
      </section>`
     return this.parent.innerHTML = html
    //   const orderBtn = document.querySelector("order-button")
 //   orderBtn.addEventListener()
    }
}