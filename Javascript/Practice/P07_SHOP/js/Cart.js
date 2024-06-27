// カートクラス

export default class Cart {
    // プロパティ

    // クラスプロパティ
    // プロパティ:商品リスト(配列) 
    static #itemList = {}

    // 税率
    static #tax = 1.10

    // 小計はメソッドで計算すればいいのでプロパティは不要
    // // 小計
    // static #subtotal = 0

    // 同じページ内で動的に更新する必要がないので今回は不要
    // // 全体の状態出力先
    // static #output


    // プライベートプロパティ
    // // アイテム番号
    static #itemNumber = 0

    // 配列を直接操作するので存在する要素のプロパティは持たなくてよい

    // 全商品のオブジェクトリスト取得
    static get itemList() {
        return Cart.#itemList
    }

    static GetitemList() {
        return Cart.#itemList
    }

    // クラスメソッド

    // 直接送る形式にしたのでなくす
    // JSONのファイルを取得

    // メソッド:商品追加 
    static addItem(product) {

        // あとで数量の処理を追加したい（願望）

        // 既存の商品の場合は数量を1追加
        const existingItem = Object.values(Cart.#itemList).find(item => item.name === product.name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            // 新規の商品の場合は新しくquantity要素を追加し1を足す
            product.quantity = 1;
            Cart.#itemList[product.name] = product;
        }

        // sessionStorageにカートのデータを置く
        // sessionStorage.setItemは書式 持ってくるときはgetItem 消すときはRemoveItem
        sessionStorage.setItem('cartItems', JSON.stringify(Cart.#itemList));

        // カートの中身を更新(
        this.updateCart();

        // ショッピングカートの内容が更新されました。通知
        console.log("ショッピングカートの内容が更新されました。")

        // console.log(Cart.#itemList)



    }

    // 今回はいらないので省略
    // メソッド:商品削除
    static removeItem(productName) {
    }

    // メソッド:商品数量変更
    static updateQuantity(productName, quantity) {
        if (Cart.#itemList[productName]) {
            Cart.#itemList[productName].quantity = quantity;
            sessionStorage.setItem('cartItems', JSON.stringify(Cart.#itemList));
            this.updateCart();
        }
    }

    // 商品購入時に動かす 
    // メソッド:カート全消去
    static clearCart() {
        this.#itemList = {};
        this.updateCart();
    }


    // 個人的にほしいやつ

    // メソッド:カート内容更新確認 
    static updateCart() {
        console.log('Cart updated:', this.#itemList);
        console.log('合計金額:', this.getTotal());
    }

    // メソッド:合計金額計算 
    static getTotal() {
        const storedItems = JSON.parse(sessionStorage.getItem('cartItems'));

        // 個数なんてものはない 
        return Math.ceil(Object.values(storedItems).reduce((total, item) => total + item.price * item.quantity, 0) * this.#tax);
        // return Math.ceil(Object.values(storedItems).reduce((total, item) => total + item.price, 0) * this.#tax);
    }

    // メソッド:商品一覧表示 
    static listItem(parent, button) {
        // sessionStorageに置いてたカートのデータを持ってくる
        const storedItems = JSON.parse(sessionStorage.getItem('cartItems'));
        if (storedItems) {
            Cart.displayProducts(Object.values(storedItems), parent, button, true);
        }
    }

    // メソッド:商品購入
    static buyItem() {
        console.log('ご購入ありがとうございました。');
        // complete.htmlに遷移させる
        window.location.href = 'complete.html';
        this.clearCart();
        this.updateCart();
    }

    constructor(itemList = []) {
        this.itemList = itemList
    }


    // 商品情報を表示する関数
    static displayProducts(products, parent, button, total) {
        products.forEach((product, index) => {
            // 商品情報を表示するdiv要素を作成
            const productDiv = document.createElement('div');
            productDiv.classList.add("product-item");

            if (total == true) {
                productDiv.innerHTML = `<img id="detail-img" src="../img/${product.img}" alt="${product.name}"><p>${product.name}</p><p>${product.price}円</p><p>数量:${product.quantity}</p><p>小計:${product.price * product.quantity}円</p>`;

            } else {
                productDiv.innerHTML = `<img id="detail-img" src="../img/${product.img}" alt="${product.name}"><p>${product.name}</p><p>${product.price}円</p>`;

            }
            if (button == true) {
                // 詳細を見るボタンを作成
                Cart.createItemButton("詳細を見る", () => Cart.viewDetail(index), productDiv);

                // カートに入れるボタンを作成
                Cart.createItemButton("カートに入れる", () => Cart.addToCart(index), productDiv);
            }

            // parentにproductDivを追加
            parent.appendChild(productDiv);
        });
    }

    // ボタンを生成する関数
    static createItemButton(value, handler, parent) {
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

    // 詳細を見るリンク
    static viewDetail(index) {
        window.open(`detail.html?index=${index}`);
    }

    // カートに入れるボタン
    static addToCart(index) {
        let cart

        if (window.sessionStorage.getItem('cartItems')) {
            // cartItemsの中が存在する時
            // カートのインスタンス化(cartItems(文字列)を取得し、これをオブジェクトに変換してCartクラスのコンストラクタの引数に渡している。)
            cart = new Cart(JSON.parse(window.sessionStorage.getItem('cartItems')))
        } else {
            // cartItemsの中が存在しない時
            // カートのインスタンス化
            cart = new Cart()
        }

        let storedData = sessionStorage.getItem('products');
        if (storedData) {
            let data = JSON.parse(storedData);
            const product = data.products[index];
            // console.log(product);
            Cart.addItem(product);
            document.dispatchEvent(new Event('cartUpdated'));
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
                        // console.log(product);
                        Cart.addItem(product);
                        alert('カートに追加しました');
                    }
                })
                .catch(error => console.error('Error fetching the JSON data:', error));
        }
    }



}