import Cart from "./Cart.js";

document.addEventListener('DOMContentLoaded', () => {
    const url = new URL(window.location.href);
    const index = url.searchParams.get('index');

    loadProductDetails(index);
});

function loadProductDetails(index) {
    const storedData = sessionStorage.getItem('products');
    if (storedData) {
        const data = JSON.parse(storedData);
        displayProductDetails(data.products[index]);
    } else {
        fetchAndDisplayProductDetails(index);
    }
}

function fetchAndDisplayProductDetails(index) {
    fetch('../data/data.json')
        .then(response => response.json())
        .then(data => {
            sessionStorage.setItem('products', JSON.stringify(data));
            displayProductDetails(data.products[index]);
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
}

function displayProductDetails(product) {
    document.getElementById('detail-name').textContent = product.name;
    document.getElementById('detail-price').textContent = `価格: ${product.price}円`;
    document.getElementById('detail-img').src = `../img/${product.img}`;
    document.getElementById('detail-img').alt = product.name;
    document.getElementById('detail-description').textContent = product.detail;

    document.getElementById('detail-buy').addEventListener('click', () => Cart.addToCart(index));
    document.getElementById('back-button').addEventListener('click', () => window.location.href = 'index.html');
}