// 値が変化する、取得する要素を予め変数に格納しておく
let output = document.getElementById('output')

const PLUS = 1
const MINUS = 2
const RESET = -1

let counter = 0
let msg = `カウンター：${counter}`
output.textContent = msg

function btn(mode) {
    switch (mode) {
        case PLUS:
            counter++
            break;
        case MINUS:
            counter--
            break;
        case RESET:
            counter = 0
            break;

        default:
            break;
    }
    // 出力文字列の生成(template literal)
    let msg = `カウンター:${counter}`
    output.textContent = msg
}
