import Cart from "./Cart.js";

// 出力先の要素を取得
let subtotal = document.getElementById('subtotal-amount');
const cartItem = document.getElementById('cart-items');

// DOMContentLoadedイベントを使用して、DOMが完全に読み込まれた後にコードを実行
document.addEventListener('DOMContentLoaded', () => {

    console.log(Cart.GetitemList())

    Cart.listItem(cartItem,false)
    subtotal.innerHTML = `<h2>合計金額:${Cart.getTotal()}円`
    // 購入ボタンに機能を追加
    document.getElementById('button-purchase').addEventListener('click',  () => Cart.buyItem())
});

// イキった戻るボタン
document.getElementById('back-button').addEventListener('click', () => {
    window.location.href = 'index.html';
});