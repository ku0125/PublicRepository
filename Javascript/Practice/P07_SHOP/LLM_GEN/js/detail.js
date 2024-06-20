import cart from './Cart.js';

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productIndex = urlParams.get('index');

  fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {
      const product = data.products[productIndex];
      const productDetail = document.getElementById('product-detail');
      productDetail.innerHTML = `
        <img src="../img/${product.img}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.price}円</p>
        <p>${product.detail}</p>
      `;
    });
});

function addToCart() {
  const urlParams = new URLSearchParams(window.location.search);
  const productIndex = urlParams.get('index');

  fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {
      const product = data.products[productIndex];
      cart.addItem(product);
      alert('カートに追加しました');
    });
}