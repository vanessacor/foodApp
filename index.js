"use strict";

let products = [
  new Product(
    1,
    "Bagel Mediterranea",
    12,
    "Bagel with tomato and prosciutto",
    "breakfast",
    "https://source.unsplash.com/eV5PkVkDWDs/300x200"
  ),
  new Product(
    2,
    "French Toast",
    8,
    "Classic Toast with ham and cheese",
    "breakfast",
    "https://source.unsplash.com/1FQx2-YtV1A/300x200"
  ),
  new Product(
    3,
    "Avocado Toast",
    13,
    "Sourdough bread with avocado & tomato",
    "breakfast",
    "https://source.unsplash.com/iecg0mWrnlE/300x200"
  ),
  new Product(
    4,
    "Super Bowl",
    10,
    "Fruits and grains with spiced yogurt",
    "breakfast",
    "https://source.unsplash.com/W9OKrxBqiZA/300x200"
  ),
];


const showBasketBtn = document.querySelector('.button-basket')
showBasketBtn.addEventListener('click', showBasket)

function showBasket() {
  const basket = document.querySelector('.basket-order')
  basket.classList.remove('basket-hidden');
  showBasketBtn.className ='button-basket-show'
  basket.classList.add('basket-show');
  
}

function main() {
  const basket = new Basket();
  const menuParent = document.querySelector(".restaurant-menu");
  const basketParent = document.querySelector(".basket-order")
  const basketUi = new BasketUi(basket,basketParent)
  const menuUi = new MenuUi(basket, menuParent, products, basketUi);
}

window.addEventListener("load", main);
