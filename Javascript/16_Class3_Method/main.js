// クラスについて
// メソッド編

// 出力先の要素を習得
let output = document.getElementById('output')

// クラスの宣言
class Fan {
    // プロパティ
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

    // メソッド(関数)

    // 首振りボタンが押された時
    // 引数、戻り値無しのメソッド
    // 関数とは違いfunctionは書かなくて良い
    // thisは自分自身(オブジェクト(インスタンス))を示す
    pressSwingButton() {
        output.innerHTML += '首振りボタンが押されました。' + '<br>'
        this.swing = true
    }

}

// インスタンス化
// 呼び出した分だけ実体がある
let fan01 = new Fan()
let fan02 = new Fan()

output.innerHTML += fan01.swing + '<br>'
// fan01のメソッドの呼び出し
fan01.pressSwingButton() + '<br>'
output.innerHTML += fan01.swing + '<br>'

output.innerHTML += fan02.swing + '<br>'
// fan02のメソッドの呼び出し
fan02.pressSwingButton() + '<br>'
output.innerHTML += fan02.swing + '<br>'
