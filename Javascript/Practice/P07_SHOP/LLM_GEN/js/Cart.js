// カートクラス
export default class Cart {
    // クラスプロパティ
    static #itemList = {};
    static #tax = 1.10;
    static #itemNumber = 0;

    // 全商品のオブジェクトリスト取得
    static get itemList() {
        return Cart.#itemList;
    }

    // メソッド:商品追加
    static addItem(product) {
        const existingItem = Object.values(Cart.#itemList).find(item => item.name === product.name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            product.quantity = 1;
            Cart.#itemList[product.name] = product;
        }
        sessionStorage.setItem('cartItems', JSON.stringify(Cart.#itemList));
        this.updateCart();
        console.log("ショッピングカートの内容が更新されました。");
    }

    // メソッド:商品数量変更
    static updateQuantity(productName, quantity) {
        if (Cart.#itemList[productName]) {
            Cart.#itemList[productName].quantity = quantity;
            sessionStorage.setItem('cartItems', JSON.stringify(Cart.#itemList));
            this.updateCart();
        }
    }

    // メソッド:カート全消去
    static clearCart() {
        this.#itemList = {};
        this.updateCart();
    }

    // メソッド:カート内容更新確認
    static updateCart() {
        console.log('Cart updated:', this.#itemList);
        console.log('合計金額:', this.getTotal());
    }

    // メソッド:合計金額計算
    static getTotal() {
        const storedItems = JSON.parse(sessionStorage.getItem('cartItems')) || {};
        return Math.ceil(Object.values(storedItems).reduce((total, item) => total + item.price * item.quantity, 0) * this.#tax);
    }

    // メソッド:商品一覧表示
    static listItem(parent, button) {
        const storedItems = JSON.parse(sessionStorage.getItem('cartItems')) || {};
        if (storedItems) {
            Cart.displayProducts(Object.values(storedItems), parent, button, true);
        }
    }

    // メソッド:商品購入
    static buyItem() {
        console.log('ご購入ありがとうございました。');
        window.location.href = 'complete.html';
        this.clearCart();
        this.updateCart();
    }

    // 商品情報を表示する関数
    static displayProducts(products, parent, button, total) {
        products.forEach((product, index) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add("product-item");
            productDiv.innerHTML = `
                <div>${product.name}</div>
                <div>${product.price}円</div>
                <img src="../img/${product.img}" alt="${product.name}">
                ${total ? `<div>数量:${product.quantity}</div><div>小計:${product.price * product.quantity}円</div>` : ''}
            `;
            if (button) {
                Cart.createItemButton("詳細を見る", () => Cart.viewDetail(index), productDiv);
                Cart.createItemButton("カートに入れる", () => Cart.addToCart(index), productDiv);
            }
            parent.appendChild(productDiv);
        });
    }

    // ボタンを生成する関数
    static createItemButton(value, handler, parent) {
        const btn = document.createElement('input');
        btn.type = 'button';
        btn.value = value;
        btn.addEventListener('click', handler);
        parent.appendChild(btn);
    }

    // 詳細を見るリンク
    static viewDetail(index) {
        window.location.href = `detail.html?index=${index}`;
    }

    // カートに入れるボタン
    static addToCart(index) {
        let storedData = sessionStorage.getItem('products');
        if (storedData) {
            const data = JSON.parse(storedData);
            const product = data.products[index];
            Cart.addItem(product);
            document.dispatchEvent(new Event('cartUpdated'));
            alert('カートに追加しました');
        } else {
            fetch('../data/data.json')
                .then(response => response.json())
                .then(data => {
                    sessionStorage.setItem('products', JSON.stringify(data));
                    const product = data.products[index];
                    Cart.addItem(product);
                    alert('カートに追加しました');
                })
                .catch(error => console.error('Error fetching the JSON data:', error));
        }
    }
}