import Fan from "./Fan.js"

// 出力先の要素を習得
let output = document.getElementById('output')

// チェイニング
document.getElementById('new').addEventListener('click',()=>new Fan())

// 全切ボタンのイベントリスナー
document.getElementById('allOff').addEventListener('click', () => Fan.allFanOff())

// 全入ボタンのイベントリスナー
document.getElementById('allOn').addEventListener('click', () => Fan.allFanOn())