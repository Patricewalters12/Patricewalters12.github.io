document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemsContainer = document.getElementById('invoice-items');

    if (cart.length > 0) {
        let subtotal = 0;

        cart.forEach(product => {
            const row = document.createElement('tr');
            const totalPrice = product.cost * product.qty;
            subtotal += totalPrice;

            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.qty}</td>
                <td>$${product.cost.toFixed(2)}</td>
                <td>$${totalPrice.toFixed(2)}</td>
            `;
            itemsContainer.appendChild(row);
        });

        const tax = subtotal * 0.1; // 10% tax
        const total = subtotal + tax;

        // Display totals
        document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
        document.getElementById('total').textContent = `$${total.toFixed(2)}`;
    } else {
        itemsContainer.innerHTML = '<tr><td colspan="4">No items found.</td></tr>';
    }

    // Back button functionality
    document.getElementById('back-button').addEventListener('click', () => {
        window.location.href = 'productpage.html';
    });
});
