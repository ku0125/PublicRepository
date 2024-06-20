import cart from './Cart.js';

document.addEventListener('DOMContentLoaded', () => {
  fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {
      const productList = document.getElementById('product-list');
      data.products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
          <img src="../img/${product.img}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>${product.price}円</p>
          <button onclick="viewDetail(${index})">詳細を見る</button>
          <button onclick="addToCart(${index})">カートに入れる</button>
        `;
        productList.appendChild(productDiv);
      });
    });
});

function viewDetail(productIndex) {
  window.open(`detail.html?index=${productIndex}`, '_blank');
}

function addToCart(productIndex) {
  fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {
      const product = data.products[productIndex];
      cart.addItem(product);
      alert('カートに追加しました');
    });
}