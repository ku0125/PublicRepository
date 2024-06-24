import Cart from "./Cart.js";

// 出力先の要素を取得
const subtotal = document.getElementById('subtotal-amount');
const cartItem = document.getElementById('cart-items');

// DOMContentLoadedイベントを使用して、DOMが完全に読み込まれた後にコードを実行
document.addEventListener('DOMContentLoaded', () => {
    Cart.listItem(cartItem, false);
    subtotal.innerHTML = `合計金額: ${Cart.getTotal()}円`;

    document.getElementById('button-purchase').addEventListener('click', () => Cart.buyItem());
    document.getElementById('back-button').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});