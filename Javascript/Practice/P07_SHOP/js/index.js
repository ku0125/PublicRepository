// import Cart from "./Cart.js";

// 出力先の要素を取得
let output = document.getElementById('output');
const productList = document.getElementById('product-list');

// DOMContentLoadedイベントを使用して、DOMが完全に読み込まれた後にコードを実行
document.addEventListener('DOMContentLoaded', () => {
    // sessionStorageからデータを取得
    let storedData = sessionStorage.getItem('products');

    if (storedData) {
        // sessionStorageにデータがある場合、それを使用
        let data = JSON.parse(storedData);
        displayProducts(data.products);
    } else {
        // sessionStorageにデータがない場合、fetchして保存
        fetch('../data/data.json')
            .then(response => response.json())
            .then(data => {
                // データをsessionStorageに保存
                sessionStorage.setItem('products', JSON.stringify(data));
                displayProducts(data.products);
            })
            .catch(error => console.error('Error fetching the JSON data:', error));
    }
});

// 商品情報を表示する関数
function displayProducts(products) {
    products.forEach((product, index) => {
        // 商品情報を表示するdiv要素を作成
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `<img id="detail-img" src="../img/${product.img}" alt="${product.name}"><p>${product.name}</p><p>${product.price}円</p>`;

        // 詳細を見るボタンを作成
        createItemButton("詳細を見る", () => viewDetail(index), productDiv);

        // カートに入れるボタンを作成
        createItemButton("カートに入れる", () => addToCart(index), productDiv);

        // productListにproductDivを追加
        productList.appendChild(productDiv);
    });
}

// ボタンを生成する関数
function createItemButton(value, handler, parent) {
    // inputタグを生成
    let btn = document.createElement('input');

    // ボタンの各設定
    btn.type = 'button';
    btn.value = value;

    // イベントの指定
    btn.addEventListener('click', handler);

    // ボタンをparentの子要素に追加
    parent.appendChild(btn);
}

function viewDetail(index) {
    window.location.href = `detail.html?index=${index}`;
}

function addToCart(index) {
    let storedData = sessionStorage.getItem('products');
    if (storedData) {
        let data = JSON.parse(storedData);
        const product = data.products[index];
        console.log(product);
        // Cart.addItem(product);
        alert('カートに追加しました');
    } else {
        fetch('../data/data.json')
            .then(response => response.json())
            .then(data => {
                // データをsessionStorageに保存
                sessionStorage.setItem('products', JSON.stringify(data));

                // 再度sessionStorageからデータを取得
                let storedData = sessionStorage.getItem('products');
                if (storedData) {
                    let data = JSON.parse(storedData);
                    const product = data.products[index];
                    console.log(product);

                    // Cart.addItem(product);
                    alert('カートに追加しました');
                }
            })
            .catch(error => console.error('Error fetching the JSON data:', error));
    }
}