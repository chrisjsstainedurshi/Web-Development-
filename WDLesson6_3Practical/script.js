// ================= Data =================
let meatsData = [
    { title: "Beef Tips", image: "images/beeftips.jpg", price: 18.99, rating: 4.5, category: "meats", salePrice: 15.99 },
    { title: "Brisket", image: "images/brisket.jpg", price: 27.99, rating: 4.7, category: "meats" },
    { title: "Ribeye", image: "images/ribeye.jpg", price: 21.99, rating: 4.8, category: "meats" },
    { title: "Steak", image: "images/steak.jpg", price: 15.99, rating: 4.2, category: "meats" }
];

let seafoodData = [
    { title: "Clams", image: "images/clams.jpg", price: 8.99, rating: 4.3, category: "seafood" },
    { title: "Crabs", image: "images/crabs.jpg", price: 12.99, rating: 4.5, category: "seafood" },
    { title: "Lobster", image: "images/lobster.png", price: 30.59, rating: 5, category: "seafood" },
    { title: "Scallop", image: "images/scallops.jpg", price: 23.95, rating: 4.7, category: "seafood" },
    { title: "Shrimp", image: "images/shrimp.jpg", price: 10.99, rating: 4.2, category: "seafood" },
    { title: "Tuna", image: "images/tuna.jpg", price: 5.99, rating: 3.9, category: "seafood" }
];

let dessertData = [
    { title: "Flan", image: "images/flan.jpg", price: 4.15, rating: 4.6, category: "desserts" },
    { title: "Passion Berry", image: "images/passionberry.jpeg", price: 3.99, rating: 4.4, category: "desserts" },
    { title: "Oreo Cup", image: "images/oreocup.jpg", price: 2.99, rating: 4.8, category: "desserts" }
];

// ================= Cart =================
let cart = [];

// ================= Display Items =================
function displayItems(data, category) {
    let title = document.querySelector("#title");
    let output = document.querySelector("#items");
    let build = '';

    title.innerHTML = category.charAt(0).toUpperCase() + category.slice(1);

    data.forEach(item => {
        build += `
        <div class="card" onclick='showModal(${JSON.stringify(item)})'>
            <img src="${item.image}" class="item" loading="lazy" alt="${item.title}">
            ${item.salePrice ? '<div class="badge">SALE</div>' : ''}
            ${item.rating >= 4.5 ? '<div class="badge" style="background-color:#28a745; top:40px;">TOP</div>' : ''}
            <p class="heading">${item.title}</p>
            <p class="highlight">
                ${item.salePrice ? `<span>$${item.price.toFixed(2)}</span> $${item.salePrice.toFixed(2)}` : `$${item.price.toFixed(2)}`}
            </p>
            ${getRatingStars(item.rating)}
            <a href="#" onclick='addToCart(${JSON.stringify(item)}, event)'>Add to Cart</a>
        </div>
        `;
    });

    output.innerHTML = build;
}

// ================= Rating Stars =================
function getRatingStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? '⭐' : '☆';
    }
    return `<p class="rating">${stars}</p>`;
}

// ================= Add to Cart =================
function addToCart(item, e) {
    e.stopPropagation();
    cart.push(item);
    updateCartCount();
    updateCartDropdown();
}

function updateCartCount() {
    document.querySelector("#cart-count").innerText = cart.length;
}

// ================= Cart Dropdown =================
function toggleCartDropdown() {
    const dropdown = document.getElementById("cart-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function updateCartDropdown() {
    const dropdown = document.getElementById("cart-dropdown");
    if(cart.length === 0){
        dropdown.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        dropdown.innerHTML = cart.map(item => `<p>${item.title} - $${(item.salePrice || item.price).toFixed(2)}</p>`).join('');
    }
}

// ================= Sorting & Filtering =================
function sortByPrice() {
    let sortedData = [...meatsData, ...seafoodData, ...dessertData].sort((a,b) => (a.salePrice || a.price) - (b.salePrice || b.price));
    displayItems(sortedData, "All Items");
}

function filterByCategory(category) {
    let filteredData = [...meatsData, ...seafoodData, ...dessertData].filter(item => item.category === category);
    displayItems(filteredData, category);
}

// ================= Modal =================
function showModal(item) {
    document.getElementById("modal-title").innerText = item.title;
    document.getElementById("modal-price").innerText = `$${(item.salePrice || item.price).toFixed(2)}`;
    document.getElementById("modal-image").src = item.image;
    document.getElementById("modal-description").innerText = "Description of the product goes here...";
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// ================= Display Categories =================
function meats() { displayItems(meatsData, "Meats"); }
function seafood() { displayItems(seafoodData, "Seafood"); }
function dessert() { displayItems(dessertData, "Desserts"); }

// ================= Initial Load =================
meats(); // Show meats by default.