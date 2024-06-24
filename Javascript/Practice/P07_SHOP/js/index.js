import Cart from "./Cart.js";

// 出力先の要素を取得
const productList = document.getElementById('product-list');
const cartElement = document.getElementById('cart');

// DOMContentLoadedイベントを使用して、DOMが完全に読み込まれた後にコードを実行
document.addEventListener('DOMContentLoaded', () => {
  updateCartDisplay();
  loadProducts();
});

function loadProducts() {
  let storedData = sessionStorage.getItem('products');
  if (storedData) {
    let data = JSON.parse(storedData);
    Cart.displayProducts(data.products, productList, true, false);
  } else {
    fetch('../data/data.json')
      .then(response => response.json())
      .then(data => {
        sessionStorage.setItem('products', JSON.stringify(data));
        Cart.displayProducts(data.products, productList, true, false);
      })
      .catch(error => console.error('Error fetching the JSON data:', error));
  }
}

function updateCartDisplay() {
  const storedItems = JSON.parse(sessionStorage.getItem('cartItems')) || {};
  const totalQuantity = Object.values(storedItems).reduce((sum, item) => sum + item.quantity, 0);

    cartElement.innerHTML = `
        カート(${totalQuantity})
    `;

}

// DOMContentLoadedイベントでカート表示を初期化
document.addEventListener('DOMContentLoaded', () => {

});

cartElement.addEventListener('click', () => {
  window.location.href = 'confirm.html';
});

// カートに商品が追加されたときにカート表示を更新
document.addEventListener('cartUpdated', () => {
  updateCartDisplay();
});


