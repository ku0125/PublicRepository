// 関数について

// 出力先の要素を習得
let output = document.getElementById('output')
// 説明がエラーを起こさないための定義
値 = 0

// 関数(Function)

// オブジェクト、クラスと『.』でつながっている関数の事をメソッド(Method)と呼ぶ

// 関数の定義
// 戻り値がある

// サブルーチン、プロシージャ
// 戻り値がない

// 関数定義の書式
// 関数:Javascriptの場合は変数と同じようなもの
// 引数:正式名称『仮引数』で関数で利用する変数を呼び出し元から受け取るもの
//      『,』で区切ると複数指定できる。
// 戻り値:呼び出し元に返す値
function 関数名(引数名) {
    処理
    return 戻り値
}

// 引数、戻り値を省略(不必要)した場合
function 関数名() {
}

// 関数呼び出しの書式
// 関数:Javascriptの場合は変数と同じようなもの
// 値:正式名称『実引数』で関数で利用する値を関数に渡すもの
関数名(値)

// 関数の動きの説明

// 加算関数
// 関数名：add
// 引数：x 加算対象の値1
// 引数：y 加算対象の値2
// 戻り値：x+yの結果
function add(x, y) {
    return x + y
}

let a = 3
let b = 5
output.innerHTML += `${a} + ${b} = ${add(a, b)}<br>`
// 上記の処理を行うための途中式(数学の考え方)
// 処理には優先順位があり、関数の『()』の中(引数)が最も早く動作する。

// aとbが展開される
output.innerHTML += `${a} + ${b} = ${add(3, 5)}<br>`

// addが計算される
output.innerHTML += `${a} + ${b} = ${8}<br>`

// 左のaとbが展開される
output.innerHTML += `${3} + ${5} = ${8}<br>`

// default引数
// 仮引数に代入式を記述すると
// 呼び出し時に値が渡されなかった(実引数がない)とき
// 代わりに代入される
// default引数を定義するときは右の仮引数が優先される(エラーにはならない)

output.innerHTML += 'デフォルト引数<br>'
function defaultParams(x = 0, y = 1) {
    output.innerHTML += x + y + '<br>'
}
defaultParams(3, 5)
defaultParams(5)
defaultParams(undefined, undefined)
defaultParams()

// ブロック(スコープ)について
// 下記の場合『{}』に囲まれている部分の事
function 関数名() {
}

// スコープとは
// 変数の有効範囲(寿命)の事です。

// スコープの種類
// グローバルスコープ
// 基本的に利用しない方が良い
// プログラム全体で利用できる範囲
// 何のブロックにも所属していない
let v = 0
output.innerHTML += v + '<br>'

// ローカル(ブロック)スコープ
// ブロックの中で利用できる範囲
// 関数のブロックに所属している
function 関数() {

    // 関数内で同名の変数を宣言するとグローバルからローカルに改めて定義される
    let v = 1
    v++
    output.innerHTML += v + '<br>'
}
関数()
output.innerHTML += v + '<br>'
// ブロックスコープ
// ブロックの中で利用できる範囲
// 関数やif,switchなどのブロックに所属している
if (v) {
    let v = 2
}

// スコープ(let)の説明
// 再定義不可
// グローバルスコープ
let y = 0
output.innerHTML += y + '<br>'

function 関数() {
    // ローカル(ブロック)スコープ
    let y = 1
    y++
    output.innerHTML += y + '<br>'
}
関数()
output.innerHTML += y + '<br>'

// スコープ(var)の説明
// 再定義可
// グローバルスコープ
var z = 0
output.innerHTML += z + '<br>'

function 関数() {
    // ローカル(ブロック)スコープ
    var z = 1
    z++
    output.innerHTML += z + '<br>'
}
関数()
output.innerHTML += y + '<br>'


// varの問題点
output.innerHTML += 'varの問題<br>'

// if (false){
if (true) {
    var z2 = 2
}
// 関数内で宣言してもグローバルとして扱えてしまう
output.innerHTML += z2 + '<br>'

// if (false){
if (true) {
    let z3 = 2
}
output.innerHTML += z3 + '<br>'