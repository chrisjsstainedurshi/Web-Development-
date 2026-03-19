// init() function is called when the page loads in index.html
function init() {
  // Array of pizza names (titles) and pizza image file names
  const titles = ["title1.png", "title2.png", "title3.png", "title4.png", "title5.png"];
  const pizzas = ["pizza1.jpg", "pizza2.jpg", "pizza3.jpg", "pizza4.jpg", "pizza5.jpg"];

  // Get the output div to insert content
  const outputDiv = document.getElementById("output");

  // Loop through the pizza arrays to create the pizza cards
  for (let i = 0; i < pizzas.length; i++) {
    // Create the container for each pizza card
    const card = document.createElement("div");
    card.classList.add("card");

    // Create the pizza image element
    const pizzaImg = document.createElement("img");
    pizzaImg.src = `images/${pizzas[i]}`;
    pizzaImg.classList.add("pizza");

    // Create the title image element
    const titleImg = document.createElement("img");
    titleImg.src = `images/${titles[i]}`;
    titleImg.classList.add("title");

    // Create a random price for each pizza
    const price = (Math.random() * (15 - 5) + 5).toFixed(2); // Random price between $5 and $15

    // Create a paragraph for the price
    const pricePara = document.createElement("p");
    pricePara.textContent = `Price: $${price}`;

    // Create an input field for the quantity
    const quantityInput = document.createElement("input");
    quantityInput.type = "text";
    quantityInput.placeholder = "Enter Quantity";

    // Create a button for buying the pizza
    const buyButton = document.createElement("input");
    buyButton.type = "button";
    buyButton.value = "Buy";

    // Append the elements to the card
    card.appendChild(titleImg);
    card.appendChild(pizzaImg);
    card.appendChild(pricePara);
    card.appendChild(quantityInput);
    card.appendChild(buyButton);

    // Append the card to the output div
    outputDiv.appendChild(card);
  }
}