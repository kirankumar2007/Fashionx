// Sample product data
const products = [
    { id: 1, name: "Stylish T-Shirt", price: 29.99, category: "men" },
    { id: 2, name: "Trendy Jeans", price: 59.99, category: "women" },
    { id: 3, name: "Elegant Dress", price: 79.99, category: "women" },
    { id: 4, name: "Casual Shoes", price: 49.99, category: "men" },
    { id: 5, name: "Kids' Pajamas", price: 24.99, category: "kids" },
    { id: 6, name: "Leather Wallet", price: 39.99, category: "accessories" },
    { id: 7, name: "Summer Hat", price: 19.99, category: "accessories" },
    { id: 8, name: "Cozy Sweater", price: 69.99, category: "women" }
];

let cart = [];
let cartTotal = 0;

// DOM Elements
const featuredProductsGrid = document.getElementById('featured-products-grid');
const cartItems = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartModal = document.getElementById('cart-modal');
const userMenu = document.getElementById('user-menu');

// Initialize the page
function init() {
    displayProducts(products);
    updateCartCount();
}

// Display products in the grid
function displayProducts(productsToShow) {
    featuredProductsGrid.innerHTML = '';
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        featuredProductsGrid.appendChild(productCard);
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

// Add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        cartTotal += product.price;
        updateCartCount();
        alert(`Added ${product.name} to cart!`);
    }
}

// Update the cart count in the header
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.length;
}

// Toggle the cart modal
function toggleCart() {
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
    updateCartModal();
}

// Update the cart modal contents
function updateCartModal() {
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    cartTotalElement.textContent = `Total: $${cartTotal.toFixed(2)}`;
}

// Filter products by category
function filterProducts(category) {
    const filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

// Subscribe to newsletter
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with email: ${email}`);
    event.target.reset();
}

// Toggle user menu
function toggleUserMenu() {
    userMenu.style.display = userMenu.style.display === 'block' ? 'none' : 'block';
}

// Logout function (placeholder)
function logout() {
    alert('You have been logged out.');
    toggleUserMenu();
}

// Checkout function (placeholder)
function checkout() {
    alert('Proceeding to checkout. Total: $' + cartTotal.toFixed(2));
    cart = [];
    cartTotal = 0;
    updateCartCount();
    toggleCart();
}

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target == cartModal) {
        cartModal.style.display = "none";
    }
    if (event.target == userMenu) {
        userMenu.style.display = "none";
    }
}

// Initialize the page when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);