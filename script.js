// Kelsey's Closet Products

const products = [
    {
        id: 1,
        name: "Elegant Evening Dress",
        category: "Dresses",
        price: 1500,
        image: "images/dress1.jpg"
    },

    {
        id: 2,
        name: "Classic Black Dress",
        category: "Dresses",
        price: 1800,
        image: "images/dress2.jpg"
    },

    {
        id: 3,
        name: "YSL-Inspired Heels",
        category: "Shoes",
        price: 3500,
        image: "images/ysl-heels.jpg"
    },

    {
        id: 4,
        name: "Red-Bottom Style Heels",
        category: "Shoes",
        price: 3000,
        image: "images/red-heels.jpg"
    },

    {
        id: 5,
        name: "Classic Handbag",
        category: "Handbags",
        price: 2500,
        image: "images/handbag1.jpg"
    },

    {
        id: 6,
        name: "Luxury Style Handbag",
        category: "Handbags",
        price: 3500,
        image: "images/handbag2.jpg"
    },

    {
        id: 7,
        name: "Men's Classic Shoes",
        category: "Men",
        price: 3500,
        image: "images/mens-shoes.jpg"
    },

    {
        id: 8,
        name: "Men's Smart Shirt",
        category: "Men",
        price: 2000,
        image: "images/mens-shirt.jpg"
    }
];


// Display products

const productContainer = document.getElementById("product-container");

function displayProducts(items) {

    productContainer.innerHTML = "";

    items.forEach(product => {

        const productCard = document.createElement("div");

        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" 
                 alt="${product.name}">

            <h3>${product.name}</h3>

            <p class="category">${product.category}</p>

            <p class="price">
                KSh ${product.price.toLocaleString()}
            </p>

            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        `;

        productContainer.appendChild(productCard);
    });
}


// Shopping cart

let cart = [];

function addToCart(productId) {

    const product = products.find(
        item => item.id === productId
    );

    cart.push(product);

    updateCart();

    alert(`${product.name} has been added to your cart!`);
}


// Update cart

function updateCart() {

    const cartCount = document.getElementById("cart-count");

    cartCount.textContent = cart.length;
}


// Search products

const searchBox = document.getElementById("search");

searchBox.addEventListener("input", function () {

    const searchTerm = searchBox.value.toLowerCase();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );

    displayProducts(filteredProducts);
});


// Category filter

function filterProducts(category) {

    if (category === "All") {

        displayProducts(products);

    } else {

        const filteredProducts = products.filter(
            product => product.category === category
        );

        displayProducts(filteredProducts);
    }
}


// Show all products when website loads

displayProducts(products);
