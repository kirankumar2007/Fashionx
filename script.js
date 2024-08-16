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
// Quick View Modal Script
const quickViewButtons = document.querySelectorAll('.quick-view-btn');
const modal = document.getElementById('quick-view-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const closeBtn = document.querySelector('.close-btn');

quickViewButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const productId = button.getAttribute('data-id');
    // Simulate fetching product data
    const productData = {
      1: {
        image: 'mens-fashion1.jpg',
        title: 'Casual Shirt',
        description: 'A stylish casual shirt perfect for any occasion.',
        price: '$49.99'
      }
      // Add more products as needed
    };
    const product = productData[productId];
    modalImage.src = product.image;
    modalTitle.textContent = product.title;
    modalDescription.textContent = product.description;
    modalPrice.textContent = product.price;
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// JavaScript for adding ratings and marking FashionX's Choice

document.querySelectorAll('.product-card').forEach(function(card, index) {
    // Adding 4.5/5 rating to all products
    const rating = document.createElement('div');
    rating.classList.add('rating');
    rating.innerHTML = '⭐️⭐️⭐️⭐️✰ 4.5/5';
    card.querySelector('.product-details').appendChild(rating);

    // Randomly mark some products as "FashionX's Choice"
    if (Math.random() < 0.3) {
        const choiceLabel = document.createElement('div');
        choiceLabel.classList.add('fashionx-choice');
        choiceLabel.innerText = "FashionX's Choice";
        card.appendChild(choiceLabel);
    }
});
// Function to open a quick view modal
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        showQuickViewModal(product);
    }
}

