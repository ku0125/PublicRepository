import Cart from "./Cart.js";

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const cartElement = document.getElementById('cart');

    updateCartDisplay();
    loadProducts(productList);

    cartElement.addEventListener('click', () => window.location.href = 'confirm.html');
    document.addEventListener('cartUpdated', updateCartDisplay);
});

function loadProducts(productList) {
    const storedData = sessionStorage.getItem('products');
    if (storedData) {
        const data = JSON.parse(storedData);
        Cart.displayProducts(data.products, productList, true, false);
    } else {
        fetchAndDisplayProducts(productList);
    }
}

function fetchAndDisplayProducts(productList) {
    fetch('../data/data.json')
        .then(response => response.json())
        .then(data => {
            sessionStorage.setItem('products', JSON.stringify(data));
            Cart.displayProducts(data.products, productList, true, false);
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
}

function updateCartDisplay() {
    const storedItems = JSON.parse(sessionStorage.getItem('cartItems')) || {};
    const totalQuantity = Object.values(storedItems).reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart').innerHTML = `カート(${totalQuantity})`;
}