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
        // sessionStorageにデータがある場合、それを使用
        let data = JSON.parse(storedData);
        Cart.displayProducts(data.products, productList, true);
    } else {
        // sessionStorageにデータがない場合、fetchして保存
        fetch('../data/data.json')
            .then(response => response.json())
            .then(data => {
                // データをsessionStorageに保存
                sessionStorage.setItem('products', JSON.stringify(data));
                Cart.displayProducts(data.products, productList, true);
            })
            .catch(error => console.error('Error fetching the JSON data:', error));
    }
}

function updateCartDisplay() {
    cartElement.innerHTML = `カート`;

    // カートに商品が追加されたときにカート表示を更新
    document.addEventListener('cartUpdated', () => {
        cartElement.innerHTML = `カート`;
    });
}