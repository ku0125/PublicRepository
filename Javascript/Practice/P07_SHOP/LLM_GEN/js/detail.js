import Cart from "./Cart.js";

// 出力準備
const output = document.getElementById('item-list');

// GETパラメータの取得
const url = new URL(window.location.href);
const params = url.searchParams;
const index = params.get('index');

// DOMContentLoadedイベントを使用して、DOMが完全に読み込まれた後にコードを実行
document.addEventListener('DOMContentLoaded', () => {
    let storedData = sessionStorage.getItem('products');
    if (storedData) {
        let data = JSON.parse(storedData);
        displayDetail(data);
    } else {
        fetch('../data/data.json')
            .then(response => response.json())
            .then(data => {
                sessionStorage.setItem('products', JSON.stringify(data));
                displayDetail(data);
            })
            .catch(error => console.error('Error fetching the JSON data:', error));
    }
});

function displayDetail(data) {
    const product = data.products[index];
    document.getElementById('detail-name').textContent = product.name;
    document.getElementById('detail-price').textContent = `価格: ${product.price}円`;
    document.getElementById('detail-img').src = `../img/${product.img}`;
    document.getElementById('detail-img').alt = product.name;
    document.getElementById('detail-description').textContent = product.detail;

    document.getElementById('detail-buy').addEventListener('click', () => Cart.addToCart(index));
    document.getElementById('back-button').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}