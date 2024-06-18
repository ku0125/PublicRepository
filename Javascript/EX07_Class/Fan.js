// 扇風機クラス
export default class Fan {
    // プロパティ

    // クラスプロパティ
    // 台数
    static #number = 0

    // 全体の状態出力先
    static #output

    // 扇風機のコレクションオブジェクト
    static #fanList = {}

    // クラス定数
    // windPowerの日本語名称の統一用定数
    static #POWER_STATUS = { OFF: '切', P1: '弱', P2: '中', P3: '強' }

    // プライベートプロパティ
    // シリアルナンバー
    #serialNumber
    // 羽根の枚数
    #blades
    // 風力
    #windPower
    // 電源
    #power
    // 首振り
    #swing
    // 状態の出力先
    #deviceOutput


    // 全デバイスのオブジェクトリスト取得
    static get fanList() {
        return Fan.#fanList
    }

    // クラスメソッド
    // 扇風機の統計情報の表示
    static infoFans() {
        if (Fan.#output == undefined) {
            Fan.#output = document.getElementById('#deviceOutput')
        }
        Fan.#output.innerHTML += `扇風機の台数は全部で${Fan.#number}台です。`
    }

    // コンストラクタ(メソッド)の宣言
    constructor(deviceOutput, blades = 5) {
        // 扇風機の台数に一台追加        
        Fan.#number++
        this.#serialNumber = Fan.#number

        // 各値を初期化
        this.#deviceOutput = deviceOutput
        this.#blades = blades
        this.#windPower = Fan.#POWER_STATUS.OFF
        this.#power = false
        this.#swing = false

        if (Fan.#output == undefined) {
            Fan.#output = document.getElementById('output')
        }


        // ブロック生成(divタグの生成)
        let block = document.createElement('div')
        // 各扇風機ブロックにIDを付与(シリアルナンバー)
        block.id = this.#serialNumber

        // 各扇風機ブロックの出力部分のdivタグを生成
        this.#deviceOutput = document.createElement('div')

        this.#deviceOutput.innerHTML += "こんにちは～"

        // blockの子要素に各扇風機ブロックの出力部分を追加
        block.appendChild(this.#deviceOutput)

        // 全体の状態出力先の子要素に各扇風機ブロックを追加
        Fan.#output.appendChild(block)

        // 切ボタン生成
        // inputタグを生成
        let btn1 = document.createElement('input')

        // ボタンの各設定
        // タイプの指定
        btn1.type = 'button'
        // valueの指定
        btn1.value = '切'
        // イベントの指定
        btn1.addEventListener('click', () => this.pressPowerButton(Fan.#POWER_STATUS.OFF))

        // ボタンをblockの子要素に追加
        block.appendChild(btn1)

        // 弱ボタン生成
        // inputタグを生成
        let btn2 = document.createElement('input')

        // ボタンの各設定
        // タイプの指定
        btn2.type = 'button'
        // valueの指定
        btn2.value = '弱'
        // イベントの指定
        btn2.addEventListener('click', () => this.pressPowerButton(Fan.#POWER_STATUS.P1))

        // ボタンをblockの子要素に追加
        block.appendChild(btn2)

        // 中ボタン生成
        // inputタグを生成
        let btn3 = document.createElement('input')

        // ボタンの各設定
        // タイプの指定
        btn3.type = 'button'
        // valueの指定
        btn3.value = '中'
        // イベントの指定
        btn3.addEventListener('click', () => this.pressPowerButton(Fan.#POWER_STATUS.P2))

        // ボタンをblockの子要素に追加
        block.appendChild(btn3)

        // 強ボタン生成
        // inputタグを生成
        let btn4 = document.createElement('input')

        // ボタンの各設定
        // タイプの指定
        btn4.type = 'button'
        // valueの指定
        btn4.value = '強'
        // イベントの指定
        btn4.addEventListener('click', () => this.pressPowerButton(Fan.#POWER_STATUS.P3))

        // ボタンをblockの子要素に追加
        block.appendChild(btn4)

        // 首振りボタン生成
        // inputタグを生成
        let btn5 = document.createElement('input')

        // ボタンの各設定
        // タイプの指定
        btn5.type = 'button'
        // valueの指定
        btn5.value = '首振り'
        // イベントの指定
        btn5.addEventListener('click', () => this.pressSwingButton())

        // ボタンをblockの子要素に追加
        block.appendChild(btn5)


        // 情報表示
        this.infoView()

        // データの管理
        // どういう意味？
        Fan.#fanList[this.#serialNumber] = this

    }

    // メソッド(関数)

    // パワーボタングループ押下
    pressPowerButton(btnName) {
        console.log(`パワーボタン『${btnName}』が押されました。`)
        switch (btnName) {
            case Fan.#POWER_STATUS.OFF:
                // 風力0
                this.#windPower = 0
                // 電源OFF
                this.#power = false
                break;
            case Fan.#POWER_STATUS.P1:
                // 風力1
                this.#windPower = 1
                // 電源ON
                this.#power = true

                break;
            case Fan.#POWER_STATUS.P2:
                // 風力2
                this.#windPower = 2
                // 電源ON
                this.#power = true

                break;
            case Fan.#POWER_STATUS.P3:
                // 風力3
                this.#windPower = 3
                // 電源ON
                this.#power = true

                break;

            default:
                break;
        }
        this.infoView()
    }

    // 首振りボタン押下
    pressSwingButton() {
        console.log('首振りボタンが押されました。')
        // 現在の状態を反転させる処理
        this.#swing = !this.#swing
        this.infoView()
    }

    // 状態確認
    infoView() {
        this.#deviceOutput.innerHTML = `
羽根の枚数：${this.#blades}<br>
風力：${this.#windPower}<br>
電源：${this.#power}<br>
首振り：${this.#swing}<br>
TimeStamp:${new Date().toLocaleString('ja-JP')}<br>        `
    }

}