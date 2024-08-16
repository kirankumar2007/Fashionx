// Sample accessories product data
const accessoriesProducts = [
    { id: 1, name: "Elegant Watch", price: 99.99, category: "accessories" },
    { id: 2, name: "Stylish Sunglasses", price: 79.99, category: "accessories" },
    { id: 3, name: "Chic Hat", price: 49.99, category: "accessories" },
    { id: 4, name: "Leather Belt", price: 39.99, category: "accessories" },
    { id: 5, name: "Fashionable Scarf", price: 29.99, category: "accessories" },
    { id: 6, name: "Trendy Necklace", price: 89.99, category: "accessories" }
];

// DOM Elements
const accessoriesProductsGrid = document.getElementById('accessories-products-grid');

// Initialize the Accessories page
function initAccessoriesPage() {
    displayAccessoriesProducts(accessoriesProducts);
}

// Display accessories products in the grid
function displayAccessoriesProducts(productsToShow) {
    accessoriesProductsGrid.innerHTML = '';
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        accessoriesProductsGrid.appendChild(productCard);
    });
}

// Create a product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
        <img src="https://imgs.search.brave.com/ma1uoGSW0RfQ7U98WBxajDT7GfQJLTmOVgXRD0vnVkw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5obS5jb20vYXNz/ZXRzL2htLzBhLzY1/LzBhNjU5ZDM4MzRm/NTFlNjMzMjhhNDA5/YjEwYzVkZWYzYTI3/MDRjZjUuanBnP2lt/d2lkdGg9MTUzNg" alt="${product.name}">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
    return card;
}

// Initialize the Accessories page when the DOM is loaded
document.addEventListener('DOMContentLoaded', initAccessoriesPage);
