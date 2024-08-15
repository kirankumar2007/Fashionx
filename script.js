let cart = [];
let cartTotal = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    cartTotal += price;
    updateCartCount();
    alert(`Added ${product} to cart!`);
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.length;
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    updateCartModal();
}

function updateCartModal() {
    const cartItems = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    cartTotalElement.textContent = `Total: $${cartTotal.toFixed(2)}`;
}

function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with email: ${email}`);
    event.target.reset();
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('cart-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}