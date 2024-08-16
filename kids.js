// Sample kids product data
const kidsProducts = [
    { id: 1, name: "Fun T-Shirt", price: 19.99, category: "kids" },
    { id: 2, name: "Playful Shorts", price: 29.99, category: "kids" },
    { id: 3, name: "Colorful Hoodie", price: 39.99, category: "kids" },
    { id: 4, name: "Comfy Sneakers", price: 49.99, category: "kids" },
    { id: 5, name: "Cute Dress", price: 34.99, category: "kids" },
    { id: 6, name: "Warm Jacket", price: 59.99, category: "kids" }
];

// DOM Elements
const kidsProductsGrid = document.getElementById('kids-products-grid');

// Initialize the Kids' page
function initKidsPage() {
    displayKidsProducts(kidsProducts);
}

// Display kids' products in the grid
function displayKidsProducts(productsToShow) {
    kidsProductsGrid.innerHTML = '';
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        kidsProductsGrid.appendChild(productCard);
    });
}

// Create a product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
        <img src="https://imgs.search.brave.com/ma1uoGSW0RfQ7U98WBxajDT7GfQJLTmOVgXRD0vnVkw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5obS5jb20vYXNz/ZXRzL2htLzBhLzY1/LzBhNjU5ZDM4MzRm/NTFlNjMzMjhhNDA5/YjEwYzVkZWYzYTI3/MDRjZjUuanBnP2lt/d2lkdGg9MTUzNg alt="${product.name}">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
    return card;
}

// Initialize the Kids' page when the DOM is loaded
document.addEventListener('DOMContentLoaded', initKidsPage);
