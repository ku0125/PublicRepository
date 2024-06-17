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
    pressSwingButton(){
        output.innerHTML += '首振りボタンが押されました。'
        
    }

}

// インスタンス化
let fan01 = new Fan()
