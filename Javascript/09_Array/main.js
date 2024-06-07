// 配列

// 出力準備
let output = document.getElementById('output')

// 配列の生成方法
let arr01 = []
let arr02 = ['田中','山本','佐藤']

// 配列の取得方法
output.innerHTML += arr02[0] + '<br>'
output.innerHTML += arr02[1] + '<br>'
output.innerHTML += arr02[2] + '<br>'

// 配列の上書き
arr02[0] = '田中太郎'
output.innerHTML += arr02[0] + '<br>'

// 配列への要素の追加方法
arr02[3] = '鈴木' 
output.innerHTML += arr02 + '<br>'

// ここでのarr02.lengthは4(要素が4つ)
// arr02[4]は存在しないので新規で追加される
// 配列番号(0スタート)と長さが絶対1ずれることを利用した新規追加方法
arr02[arr02.length] = '高橋' 

// arr02の要素を除くとまとめて表示される
output.innerHTML += arr02 + '<br>'

arr02.push('伊藤')
output.innerHTML += arr02 + '<br>'

// 削除(取り出す)

output.innerHTML += arr02.pop() + '<br>'
output.innerHTML += arr02 + '<br>'

// 連想配列
