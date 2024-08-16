// Sample product data for men
const mensProducts = [
    { id: 9, name: "Tshirt", price: 89.99, category: "men" },
    { id: 10, name: "Jeans", price: 39.99, category: "men" },
    { id: 11, name: "shirt", price: 49.99, category: "men" },
    { id: 12, name: "jacket", price: 29.99, category: "men" }
];

// Display men’s products in the grid
function displaymensProducts(productsToShow) {
    const mensProductsGrid = document.getElementById('mens-products-grid');
    mensProductsGrid.innerHTML = '';
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        mensProductsGrid.appendChild(productCard);
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

// Initialize the men's page
function initmenPage() {
    displaymensProducts(mensProducts);
}

// Initialize the page when the DOM is loaded
document.addEventListener('DOMContentLoaded', initmenPage);
