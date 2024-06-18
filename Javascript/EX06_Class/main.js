import Fan from "./Fan.js"

// 出力先の要素を習得
let output = document.getElementById('output')

// インスタンス化
let fan01 = new Fan(output)

let p0btn = document.getElementById('p0')
let p1btn = document.getElementById('p1')
let p2btn = document.getElementById('p2')
let p3btn = document.getElementById('p3')
let swingbtn = document.getElementById('swing')

// 間違いの例
// HTMLで定義していた『onClick』は押されたら実行するプログラムを入れておく
// 今回は、押されたら実行する関数を入れるのが正しい
// p0btn.addEventListener('click',fan01.pressPowerButton(Fan.POWER_STATUS.OFF))
// 正しくは以下の通りに書く
// コールバック関数の定義
function pressPowerButtonOFF(){
    fan01.pressPowerButton(Fan.POWER_STATUS.OFF)
}

// ボタンのイベントとコールバック関数の関連付け
// イベントと関数を関連付ける事をバインドと言う
p0btn.addEventListener('click',pressPowerButtonOFF)

// 無名関数を利用すると、コールバック関数を用意しなくても実装できる。
p1btn.addEventListener('click',function (){fan01.pressPowerButton(Fan.POWER_STATUS.P1)})

p2btn.addEventListener('click',function (){fan01.pressPowerButton(Fan.POWER_STATUS.P2)})

p3btn.addEventListener('click',function (){fan01.pressPowerButton(Fan.POWER_STATUS.P3)})

swingbtn.addEventListener('click',function (){fan01.pressSwingButton()})

fan01.infoView()