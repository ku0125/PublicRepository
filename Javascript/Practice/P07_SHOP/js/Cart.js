// カートクラス

export default class Cart {
    // プロパティ

    // クラスプロパティ
    // アイテム数
    static #number = 0

    // 税率
    static #tax = 1.10

    // 小計
    static #subtotal = 0

    // 全体の状態出力先
    static #output

    // プロパティ:商品リスト(配列) 
    static #itemList = {}


    // プライベートプロパティ
    // アイテム番号
    #itemNumber

    // 商品名
    #itemName

    // 個数
    #itemQuantity

    // 価格
    #price

    // 概要
    #detail


    // 商品詳細の出力先
    #itemOutput

    // 全商品のオブジェクトリスト取得
    static get itemList() {
        return Cart.#itemList
    }


    // クラスメソッド
    // JSONのファイルを取得
    static JSONFetch(itemid) {
        fetch('../data/data.json')
            .then(Response => Response.json())
            .then(json => {
                // 動作確認用のlog
                console.log(json)
                this.itemName = json.products[itemid].name
                this.price = json.products[itemid].name
                this.itemQuantity++
                    ;
            })
            // エラー起きたときの処理 書かなくてもいい
            .catch(error => console.error('Error fetching the JSON data:', error));
    }
    // アイテムを表示
    static infoItems() {
        if (Cart.#output == undefined) {
            Cart.#output = document.getElementById('#itemOutput')
        }
        Fan.#output.innerHTML += `計${Cart.#number}点`
    }

    // メソッド:商品追加 
    static addItem(itemid) {
        // ショッピングカートの内容が更新されました。通知
        console.log("ショッピングカートの内容が更新されました。")
        this.JSONFetch(itemid)
    }

    // メソッド:商品一覧表示 
    static listItem() {
        return this.itemList
    }

    // メソッド:商品購入
    static buyItem(){

    }

    // コンストラクタ(メソッド)の宣言
    constructor(itemOutput, itemid) {

        // カートのアイテム数を一個追加        
        Cart.#number++
        this.#itemNumber = Cart.#number

        // 各値を初期化
        this.#itemOutput = itemOutput
        this.#itemName = ''
        this.#itemQuantity = 0
        this.#price = 0

        if (Cart.#output == undefined) {
            Cart.#output = document.getElementById('output')
        }

        Cart.#itemList[this.#itemNumber] = this

        console.log(Cart.itemList)
        console.log(Object.values(Cart.itemList))

    }

    // メソッド(関数)


}