import Fan from "./Fan.js"

// 出力先の要素を習得
let output = document.getElementById('output')

// インスタンス化
let fan01 = new Fan(output)

let p0btn = document.getElementById('p1')
let p1btn = document.getElementById('p2')
let p2btn = document.getElementById('p3')
let p3btn = document.getElementById('p4')

// よくある間違い
// p0btn.addEventListener('click',fan01.pressPowerButton(Fan.POWER_STATUS.OFF))