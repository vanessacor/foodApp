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
  new Product(
    5,
    "Veggie Pasta",
    18,
    "Pasta with roasted veggies",
    "lunch",
    "https://source.unsplash.com/C2vfoQmsTyg/300x200"
  ),
  new Product(
    6,
    "Tofu Curry",
    20,
    "Spicy indian tofu curry",
    "lunch",
    "https://source.unsplash.com/PqsImnjuElM/300x200"
  ),
  new Product(
    7,
    "Super Lunch",
    25,
    "Complete veggie lunch",
    "lunch",
    "https://source.unsplash.com/Y0Dc9lY0A3I/300x200"
  ),
  new Product(
    8,
    "Lentils Burger",
    23,
    "Lentils burger on a whole grain bun",
    "lunch",
    "https://source.unsplash.com/_TLKIVSW6Do/300x200"
  ),
];

function main() {
  const basket = new Basket();
  
  const menuParent = document.querySelector(".restaurant-menu");
  const basketParent = document.querySelector(".basket")
  const basketUi = new BasketUi(basket,basketParent)
  const menuUi = new MenuUi(basket, menuParent, products, basketUi);
  const menuOptions = new MenuOptions(menuUi);
}

window.addEventListener("load", main);
