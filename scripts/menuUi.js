"use strict";

class MenuUi {
  constructor(basket, parent, products, basketUi) {
    this.basket = basket;
    this.menuList = parent;
    this.productList = products;
    this.basketUi = basketUi;
    this.isFiltered = false;
    this.category;
    this.renderProductList();
  }

  renderProductCard(product) {
    const productCard = document.createElement("article");
    const id = product.id;
    const quantity = this.basket.getItemQuantity(product);
    productCard.setAttribute("class", "item-card");
    const productPrice = this.formatCurrency(product.price);
    productCard.innerHTML = ` 
            <div class="item-photo-wrapper">
              <img class="item-photo" src="${product.image}" alt="${product.title}" />
            </div>
            <div class="item-details">
              <h4 class="item-price">${productPrice}</h4>
              <h4 class="item-title">${product.title}</h4>
              <p class="item-options">${product.description}</p>
              <div class="item-picker" id=${id}>
                <button class="remove-product" >-</button>
                <p id=quantity-${id}>${quantity}</p>
                <button class="add-product">+</button>
              </div>
            </div>
          `;

    const addBtn = productCard.querySelector(".add-product");
    addBtn.addEventListener("click", () => {
      this.addProduct(product);
    });

    const removeBtn = productCard.querySelector(".remove-product");
    removeBtn.addEventListener("click", () => {
      this.removeProduct(product);
    });

    return productCard;
  }

  formatCurrency(number) {
    const price = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(number);
    return price;
  }

  renderProductList() {
    this.menuList.innerHTML = "";
    const productList = this.productList.filter(
      (product) => product.category === this.category || !this.isFiltered
    );
    productList.forEach((product) => {
      const card = this.renderProductCard(product);
      this.menuList.appendChild(card);
    });
  }

  addProduct(product) {
    const item = this.basket.addProduct(product);
    this.updateQuantity(item.quantity, item.product.id);
    this.basketUi.renderBasket();
  }

  removeProduct(product) {
    const item = this.basket.removeProduct(product);
    if (!item) {
      this.updateQuantity(0, product.id);
      this.basketUi.renderBasket();
      return;
    }
    this.basketUi.renderBasket();
    this.updateQuantity(item.quantity, item.product.id);
  }

  updateQuantity(quantity, id) {
    document.querySelector(`#quantity-${id}`).innerHTML = quantity;
  }

  filterProduct(filter) {
    this.isFiltered = true;
    this.category = filter;
    this.renderProductList();
  }
}
