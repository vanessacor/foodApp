class MenuOptions {
  constructor(menuUI) {
    this.options = [
      { name: "breakfast", img: "./assets/005-breakfast-1.png" },
      { name: "lunch", img: "./assets/002-hamburger.png" },
      { name: "dinner", img: "./assets/006-dinner.png" },
      { name: "desserts", img: "./assets/003-cake.png" },
      { name: "drinks", img: "./assets/001-juice.png" },
      { name: "salads", img: "./assets/001-salad.png" },
    ];
    this.parent = document.querySelector(".categories-carousel");
    this.menuUi = menuUI;
    this.render();
  }

  renderOptionCard(option) {
    const optionCard = document.createElement("button");
    optionCard.innerHTML = `<img src="${option.img}" alt="cake" />
            <p>${option.name}</p>`;
    optionCard.className = "category-card";
    optionCard.setAttribute("id", option.name);
    optionCard.addEventListener("click", () =>
      this.menuUi.filterProduct(option.name)
    );

    return optionCard;
  }

  render() {
    this.options.forEach((option) => {
      const card = this.renderOptionCard(option);
      this.parent.appendChild(card);
    });
  }
}
