import Cart from "./Cart.js";

document.addEventListener('DOMContentLoaded', () => {
    const subtotal = document.getElementById('subtotal-amount');
    const cartItem = document.getElementById('cart-items');
    const purchaseButton = document.getElementById('button-purchase');
    const backButton = document.getElementById('back-button');

    Cart.listItem(cartItem, false);
    subtotal.innerHTML = `合計金額:${Cart.getTotal()}円`;

    purchaseButton.addEventListener('click', Cart.buyItem);
    backButton.addEventListener('click', () => window.location.href = 'index.html');
});