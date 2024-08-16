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
        <img src="https://imgs.search.brave.com/Bt3olfOIsXHdXMr90U1K53s2Oh48z63OSgLC85uLPjY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kb3du/dG93bm5hcGVydmls/bGUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzA3L2Nh/dGVnb3J5LWFwcGFy/ZWwtYXRobGV0aWMt/ODYweDk2MC5qcGc" alt="${product.name}">
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
