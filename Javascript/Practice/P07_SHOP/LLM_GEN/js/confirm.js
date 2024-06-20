import cart from './Cart.js';

document.addEventListener('DOMContentLoaded', () => {
  const cartItems = cart.getItems();
  const cartItemsDiv = document.getElementById('cart-items');
  cartItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `
      <img src="../img/${item.img}" alt="${item.name}">
      <h2>${item.name}</h2>
      <p>${item.price}円</p>
    `;
    cartItemsDiv.appendChild(itemDiv);
  });
});

function purchase() {
  cart.purchaseItems();
  alert('購入が完了しました');
  window.location.href = 'complete.html';
}