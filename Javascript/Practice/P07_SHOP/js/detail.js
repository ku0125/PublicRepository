import Cart from "./Cart.js";

// JSON処理

// 出力準備
let output = document.getElementById('item-list')

// GETパラメータの取得する処理
// new って何？
// アドレスバーの部分を取得する
let url = new URL(window.location.href)
// 受け取る情報 searchParamsはプロパティ
let params = url.searchParams
// 取得した情報をメッセージに渡す
let index = params.get('index')

// 取得しているJSONを用意
let storedData = sessionStorage.getItem('products');

document.addEventListener('DOMContentLoaded', () => {
    if (storedData) {
        // sessionStorageにデータがある場合、それを使用
        let data = JSON.parse(storedData);
        // 動作確認用のlog
        // console.log(data)
        //関数detailに受け取ったjsonを渡す 
        detail(data);

    } else {
        // sessionStorageにデータがない場合、fetchして保存
        fetch('../data/data.json')
            .then(response => response.json())
            .then(data => {
                // データをsessionStorageに保存
                sessionStorage.setItem('products', JSON.stringify(data));
                // console.log(data)
                detail(data);
            })
            .catch(error => console.error('Error fetching the JSON data:', error));

    }
});


// JSONデータを引数に受け取ってDOM操作を行う関数を作成

function detail(data) {
    // indexで送ってきた配列番号を指定する
    // constのほうがいいらしい
    const product = data.products[index];

    // detail.htmlでid指定しまくって表示
    document.getElementById('detail-name').textContent = product.name;
    document.getElementById('detail-price').textContent = `価格: ${product.price}円`;
    // document.getElementById('detail-img').src = `http://192.168.0.32/img/${product.img}`;
    document.getElementById('detail-img').src = `../img/${product.img}`;
    document.getElementById('detail-img').alt = product.name;
    document.getElementById('detail-description').textContent = product.detail;
    // カートに入れるボタンのリンクを作成
    document.getElementById('detail-buy').addEventListener('click',  () => Cart.addToCart(index))

}


// イキった戻るボタン
document.getElementById('back-button').addEventListener('click', () => {
    window.location.href = 'index.html';
});