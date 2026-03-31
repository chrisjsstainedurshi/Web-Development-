/*
Images:
"beeftips.jpg","brisket.jpg","ribeye.jpg","steak.jpg",
"clams.jpg","crabs.jpg","lobster.png","scallops.jpg","shrimp.jpg","tuna.jpg",
"flan.jpg","passionberry.jpeg","oreocup.jpg"
*/

// Challenge 1–3: Fill arrays

let meat_titles = ["Beef Tips", "Brisket", "Ribeye", "Steak"];
let meats = ["beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg"];
let meat_prices = [12.99, 14.99, 19.99, 17.99];

let seafood_titles = ["Clams", "Crabs", "Lobster", "Scallops", "Shrimp", "Tuna"];
let seafood = ["clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg", "tuna.jpg"];
let seafood_prices = [9.99, 15.99, 24.99, 18.99, 13.99, 16.99];

let dessert_titles = ["Flan", "Passion Berry Cake", "Oreo Cup"];
let dessert = ["flan.jpg", "passionberry.jpeg", "oreocup.jpg"];
let dessert_prices = [5.99, 6.99, 4.99];

function init(){
  // FIXED IDs to match HTML
  let m = document.getElementById("meats");
  let s = document.getElementById("seafood");
  let d = document.getElementById("dessert");

  let build = ``;

  // ✅ Challenge 4: Meats
  for(let i = 0; i < meats.length; i++){
    build += `
      <div class="card">
        <h3>${meat_titles[i]}</h3>
        <img src="images/${meats[i]}" alt="${meat_titles[i]}">
        <p>$${meat_prices[i]}</p>
      </div>
    `;
  }
  m.innerHTML = build;

  // ✅ Challenge 5: Seafood
  build = ``;
  for(let i = 0; i < seafood.length; i++){
    build += `
      <div class="card">
        <h3>${seafood_titles[i]}</h3>
        <img src="images/${seafood[i]}" alt="${seafood_titles[i]}">
        <p>$${seafood_prices[i]}</p>
      </div>
    `;
  }
  s.innerHTML = build;

  // ✅ Challenge 6: Desserts
  build = ``;
  for(let i = 0; i < dessert.length; i++){
    build += `
      <div class="card">
        <h3>${dessert_titles[i]}</h3>
        <img src="images/${dessert[i]}" alt="${dessert_titles[i]}">
        <p>$${dessert_prices[i]}</p>
      </div>
    `;
  }
  d.innerHTML = build;
}