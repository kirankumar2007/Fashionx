// Sample product data for Women
const womensProducts = [
    { id: 9, name: "Elegant Gown", price: 89.99, category: "women" },
    { id: 10, name: "Chic Blouse", price: 39.99, category: "women" },
    { id: 11, name: "Stylish Skirt", price: 49.99, category: "women" },
    { id: 12, name: "Comfortable Leggings", price: 29.99, category: "women" }
];

// Display Women’s products in the grid
function displayWomensProducts(productsToShow) {
    const womensProductsGrid = document.getElementById('womens-products-grid');
    womensProductsGrid.innerHTML = '';
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        womensProductsGrid.appendChild(productCard);
    });
}

// Create a product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
        <img src="/api/placeholder/300/400" alt="${product.name}">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
    return card;
}

// Initialize the Women's page
function initWomenPage() {
    displayWomensProducts(womensProducts);
}

// Initialize the page when the DOM is loaded
document.addEventListener('DOMContentLoaded', initWomenPage);
