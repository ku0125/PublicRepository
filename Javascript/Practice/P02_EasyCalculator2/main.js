// 出力準備
let output = document.getElementById('output')

// モードごとの定数をおく
// 記号をそのまま使ったら省略できそう
const ADD = 1
const SUB = 2
const MUL = 3
const DIV = 4
const MOD = 5
const BMI = 6
const RESET = 0

// 変数の宣言
let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
// 結果
let result = ''
// 途中式
let intermediate = ''

// 計算の関数
function calc(mode) {
    // 先に型を変換しておく
    let val1 = Number(num1.value)
    let val2 = Number(num2.value)
    switch (mode) {
        // 足し算
        case ADD:
            // 途中式を表示
            intermediate = `${val1} + ${val2}`
            result = val1 + val2
            break;
        // 引き算
        case SUB:
            intermediate = `${val1} - ${val2}`
            result = val1 - val2
            break;
        // 掛け算
        case MUL:
            intermediate = `${val1} * ${val2}`
            result = val1 * val2
            break;
        // 割り算
        case DIV:
            intermediate = `${val1} / ${val2}`
            result = val1 / val2
            break;
        // 剰余算
        case MOD:
            intermediate = `${val1} % ${val2}`
            result = val1 % val2
            break;
        // BMI計算
        case BMI:
            intermediate = `${val2} / (${val1} / 100) ^ 2`
            result = val2 / (val1 / 100) ** 2
            break;
        // リセット（RESETがcaseにない値なのでここに飛ぶ）
        default:
            // 保持してある値を全部消す
            result = ''
            intermediate = ''
            num1.value = ''
            num2.value = ''
            break;
    }
    // 結果を変数に格納
    // テンプレートリテラルを使って途中式と結果を分けて表示する
    let msg = `計算結果:${intermediate} = ${result}`

    // 結果をHTMLに出力
    output.innerHTML = msg
}
