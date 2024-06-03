// 変数
// 変数の定義
// var let
// 基本はletを使う

// 変数の定義と初期化
let name = '田中太郎'

// let name = '田中太郎'の処理を2行に分解
let name2
name2 = '田中太郎2'

// 変数名の付け方
// 意味のある（意図の伝わる）名前をつけてください。

// ２単語以上の場合
let personalName

// 命名規則について
// キャメルケース（camelCase）
// ローワーキャメルケース（lowerCamelCase）
// アッパーキャメルケース（UpperCamelCase）
// スネークケース（snake_case）（SNAKE_CASE）
// 変数は基本的にローワーキャメルケースを利用する。

// 変数の代入について
// = を利用して右辺の値を左辺に代入する
// 左辺に値が入っていた場合は上書きされる

// 変数の取得について
// 変数名を書くだけ


// JavaScriptでHTMLに出力する処理
let output = document.getElementById('output')

// 入力する文字を定義
let msg = 'あいうえお'

// 文字を出力する
output.textContent = msg


// 変数の型について
// 大きく分類すると基本型と参照型に分けられる

// 基本型
// 文字列型や数値型のことで、その値がそのまま変数に格納されている。
// 一覧：
// 数値型
// 文字列型
// 真偽型
// numll
// undefined
// シンボル

// 参照型
// 配列やオブジェクト、関数の事でその値が格納されているアドレスを格納している。
// 一覧：
// 配列
// オブジェクト
// 関数

// 数値型としての変数
let num1 = 100
// 文字列型としての変数
let str1 = '100'

output.innerHTML += '<br>'
output.innerHTML += num1
output.innerHTML += '<br>'
output.innerHTML += str1

// 数値型+数値型 : 数値型
let num2 = num1 + num1
output.innerHTML += '<br>'
output.innerHTML += num2

// 文字列型+文字列型 : 文字列型
let str2 = str1 + str1
output.innerHTML += '<br>'
output.innerHTML += str2

// 数値型+文字列型 : 文字列型
let mix1 = num1 + str1
output.innerHTML += '<br>'
output.innerHTML += mix1