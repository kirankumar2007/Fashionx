document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedProducts();
});

// Update product data to include ratings
const products = [
    { id: 1, name: "Stylish T-Shirt", price: 29.99, category: "men", rating: 4.5, numReviews: 120 },
    { id: 2, name: "Elegant Dress", price: 79.99, category: "women", rating: 4.8, numReviews: 200 },
    { id: 3, name: "Kids' Playsuit", price: 34.99, category: "kids", rating: 4.2, numReviews: 80 },
    { id: 4, name: "Casual Shoes", price: 49.99, category: "men", rating: 4.0, numReviews: 150 },
    { id: 5, name: "Designer Handbag", price: 129.99, category: "accessories", rating: 4.7, numReviews: 180 },
    // ... (add ratings and numReviews for other products) ...
];

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
        <img src="https://imgs.search.brave.com/Bt3olfOIsXHdXMr90U1K53s2Oh48z63OSgLC85uLPjY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kb3du/dG93bm5hcGVydmls/bGUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzA3L2Nh/dGVnb3J5LWFwcGFy/ZWwtYXRobGV0aWMt/ODYweDk2MC5qcGc" alt="${product.name}">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <div class="product-rating">
                ${generateStarRating(product.rating)}
                <span>(${product.numReviews} reviews)</span>
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
    return card;
}

function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return `
        ${'<i class="fas fa-star"></i>'.repeat(fullStars)}
        ${halfStar ? '<i class="fas fa-star-half-alt"></i>' : ''}
        ${'<i class="far fa-star"></i>'.repeat(emptyStars)}
    `;
}

function loadFeaturedProducts() {
    const featuredProductsGrid = document.getElementById('featured-products-grid');
    products.forEach(product => {
        const productCard = createProductCard(product);
        featuredProductsGrid.appendChild(productCard);
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

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        const newItem = document.createElement('li');
        newItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
        cartItems.appendChild(newItem);
        
        const currentTotal = parseFloat(cartTotal.textContent.replace('Total: $', '')) || 0;
        const itemPrice = product.price;
        cartTotal.textContent = `Total: $${(currentTotal + itemPrice).toFixed(2)}`;
    }
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
        const productData = products.find(p => p.id === parseInt(productId));
        if (productData) {
            modalImage.src = '/api/placeholder/300/400'; // Placeholder
            modalTitle.textContent = productData.name;
            modalDescription.textContent = `Price: $${productData.price.toFixed(2)}`;
            modalPrice.textContent = `Price: $${productData.price.toFixed(2)}`;
            modal.style.display = 'block';
        }
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
    card.querySelector('.product-info').appendChild(rating);

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
