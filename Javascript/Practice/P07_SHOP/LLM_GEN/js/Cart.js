class Cart {
  constructor(productRepository) {
      this.productRepository = productRepository;
      this.itemList = {};
      this.tax = 1.10;
      this.itemNumber = 0;
  }

  addItem(product) {
      this.itemNumber++;
      this.itemList[this.itemNumber] = product;
      sessionStorage.setItem('cartItems', JSON.stringify(this.itemList));
      this.updateCart();
      console.log("ショッピングカートの内容が更新されました。");
  }

  updateCart() {
      console.log('Cart updated:', this.itemList);
      console.log('合計金額:', this.getTotal());
  }

  getTotal() {
      const storedItems = JSON.parse(sessionStorage.getItem('cartItems'));
      return Math.ceil(Object.values(storedItems).reduce((total, item) => total + item.price, 0) * this.tax);
  }

  listItem(parent, button) {
      const storedItems = JSON.parse(sessionStorage.getItem('cartItems'));
      if (storedItems) {
          this.displayProducts(Object.values(storedItems), parent, button);
      }
  }

  buyItem() {
      console.log('ご購入ありがとうございました。');
      window.location.href = 'complete.html';
      this.clearCart();
      this.updateCart();
  }

  displayProducts(products, parent, button) {
      products.forEach((product, index) => {
          const productDiv = document.createElement('div');
          productDiv.classList.add("product-item");
          productDiv.innerHTML = `
              <h3>${product.name}</h3>
              <p>${product.price}円</p>
          `;
          if (button) {
              this.createItemButton("詳細を見る", () => this.viewDetail(index), productDiv);
              this.createItemButton("カートに入れる", () => this.addToCart(index), productDiv);
          }
          parent.appendChild(productDiv);
      });
  }

  createItemButton(value, handler, parent) {
      const btn = document.createElement('input');
      btn.type = 'button';
      btn.value = value;
      btn.addEventListener('click', handler);
      parent.appendChild(btn);
  }

  viewDetail(index) {
      window.location.href = `detail.html?index=${index}`;
  }

  addToCart(index) {
      let storedData = sessionStorage.getItem('products');
      if (storedData) {
          let data = JSON.parse(storedData);
          const product = data.products[index];
          this.addItem(product);
          document.dispatchEvent(new Event('cartUpdated'));
          alert('カートに追加しました');
      } else {
          fetch('../data/data.json')
              .then(response => response.json())
              .then(data => {
                  sessionStorage.setItem('products', JSON.stringify(data));
                  let storedData = sessionStorage.getItem('products');
                  if (storedData) {
                      let data = JSON.parse(storedData);
                      const product = data.products[index];
                      this.addItem(product);
                      alert('カートに追加しました');
                  }
              })
              .catch(error => console.error('Error fetching the JSON data:', error));
      }
  }

  clearCart() {
      this.itemList = {};
      this.updateCart();
  }
}

// シングルトンパターンの実装
const productRepository = new productRepository(); // 依存関係の注入
const cartInstance = new Cart(productRepository);
export default cartInstance;