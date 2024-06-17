// 扇風機クラス

// 標準モジュール出力
export default class Fan {

    // モジュール出力
    // export class Fan {

    // プロパティ

    // クラスプロパティ
    // 台数
    static number = 0

    // 全体の状態出力先
    static totalOutput

    // クラス定数
    // windPowerの日本語名称の統一用定数
    static POWER_STATUS = { OFF: '切', P1: '弱', P2: '中', P3: '強' }

    // 羽根の枚数
    blades
    // 風力
    windPower
    // 電源
    power
    // 首振り
    swing
    // 状態の出力先
    output

    // クラスメソッド
    // オブジェクト(this)にアクセス不可
    // 扇風機の統計情報の表示
    // console.log()で動きを見る

    static infoFans() {
        if (Fan.totalOutput == undefined) {
            Fan.totalOutput = document.getElementById('output')
        }
    
        Fan.totalOutput.innerHTML += `扇風機の台数は全部で${Fan.number}台です。`
    }

// コンストラクタ(メソッド)の宣言
constructor(output, blades = 5) {
    // 扇風機の台数に一台追加        
    Fan.number++

    // 各値を初期化
    this.output = output
    this.blades = blades
    this.windPower = Fan.POWER_STATUS.OFF
    this.power = false
    this.swing = false
}

// メソッド(関数)
// 首振りボタン押下
pressSwingButton() {
    // コンソール出力に切り替え
    console.log('首振りボタンが押されました。')
    // 現在の状態を反転させる処理
    this.swing = !this.swing
}
}
