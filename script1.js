const products = [
    { id: 1, name: "Turmeric Glow + Vitamin C Toner", cost: 1500.00, qty: 0 },
    { id: 2, name: "Turmeric Glow + Vitamin C Serum", cost: 1350.00, qty: 0 },
    { id: 3, name: "Turmeric Glow + Vitamin C Scrub", cost: 1350.00, qty: 0 },
    { id: 4, name: "Rosehip Clay Bar Soap", cost: 1200.00, qty: 0 },
    { id: 5, name: "Secret Garden Candle", cost: 1800.00, qty: 0 },
    { id: 6, name: "Calming Calendula + Chamomile Butter Cream", cost: 2000.00, qty: 0 },
    { id: 7, name: "Sweet Zest Beard Conditioner", cost: 1000.00, qty: 0 },
    { id: 8, name: "Sweet Zest Beard Oil", cost: 1500.00, qty: 0 },
    { id: 9, name: "Stimulating Hair Growth Oil", cost: 1500.00, qty: 0 },
    { id: 10, name: "African Black Soap", cost: 1500.00, qty: 0 },
    { id: 11, name: "35.5 inches African Net Sponge", cost: 1200.00, qty: 0 },
    { id: 12, name: "Aloe Cucumber + Niacinamide Facial Moisturizer", cost: 1500.00, qty: 0 },
];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        product.qty++;
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(p => p.id === productId);
        
        if (existingProduct) {
            existingProduct.qty++;
        } else {
            cart.push({ ...product });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
        alert(`${product.name} added to cart. Quantity: ${product.qty}`);
    }
}

function displayCart() {
    const cartContainer = document.getElementById('cart-container');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartContainer.innerHTML = '';

    cart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${product.name} - Qty: ${product.qty} - $${(product.cost * product.qty).toFixed(2)} 
            <button onclick="removeFromCart(${product.id})">Remove</button></p>
        `;
        cartContainer.appendChild(cartItem);
    });
}

function removeFromCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.filter(p => p.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    displayCart();
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productId = parseInt(button.getAttribute('data-id'));
        addToCart(productId);
    });
});

document.getElementById('checkout-button').addEventListener('click', () => {
    window.location.href = 'invoice.html';
});

// Redirect to the invoice when the shopping cart image is clicked
function viewCart() {
    window.location.href = 'invoice.html';
}

// Initial display of cart items when the page loads
window.onload = displayCart;
