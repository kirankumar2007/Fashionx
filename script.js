document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedProducts();
});

function loadFeaturedProducts() {
    const featuredProductsGrid = document.getElementById('featured-products-grid');
    const products = [
        { name: 'Product 1', price: '$20', img: '/api/placeholder/300/200' },
        { name: 'Product 2', price: '$30', img: '/api/placeholder/300/200' },
        { name: 'Product 3', price: '$40', img: '/api/placeholder/300/200' }
    ];
    
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-card');
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button onclick="quickView('${product.name}', '${product.price}', '${product.img}')">Quick View</button>
        `;
        featuredProductsGrid.appendChild(productElement);
    });
}

function quickView(name, price, img) {
    const quickViewContent = document.getElementById('quick-view-content');
    quickViewContent.innerHTML = `
        <img src="${img}" alt="${name}">
        <h3>${name}</h3>
        <p>${price}</p>
        <button onclick="addToCart('${name}', '${price}')">Add to Cart</button>
    `;
    document.getElementById('quick-view-modal').style.display = 'block';
}

function toggleQuickView() {
    const quickViewModal = document.getElementById('quick-view-modal');
    quickViewModal.style.display = quickViewModal.style.display === 'block' ? 'none' : 'block';
}

function toggleProfileModal() {
    const profileModal = document.getElementById('profile-modal');
    profileModal.style.display = profileModal.style.display === 'block' ? 'none' : 'block';
}

function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
}

function toggleUserMenu() {
    const userMenu = document.getElementById('user-menu');
    userMenu.style.display = userMenu.style.display === 'block' ? 'none' : 'block';
}

function applyFilters() {
    const minPrice = document.getElementById('min-price').value;
    const maxPrice = document.getElementById('max-price').value;
    const rating = document.getElementById('rating').value;
    console.log(`Filtering products between $${minPrice} and $${maxPrice}, with a minimum rating of ${rating}`);
}

function subscribeNewsletter(event) {
    event.preventDefault();
    alert('Subscribed to the newsletter!');
}

function addToCart(name, price) {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const newItem = document.createElement('li');
    newItem.textContent = `${name} - ${price}`;
    cartItems.appendChild(newItem);
    
    const currentTotal = parseFloat(cartTotal.textContent.replace('Total: $', '')) || 0;
    const itemPrice = parseFloat(price.replace('$', ''));
    cartTotal.textContent = `Total: $${(currentTotal + itemPrice).toFixed(2)}`;
}

function checkout() {
    alert('Proceeding to checkout...');
}

function logout() {
    alert('Logged out successfully!');
}
