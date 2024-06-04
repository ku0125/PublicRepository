// 分岐構文

// 出力準備
let output = document.getElementById('output')

// 入力準備
let opt = document.getElementById('opt')
let variable = ""

function changeSelect() {
    variable = opt.value
    // variable = Number(variable)

    output.innerHTML = ""

    // if文
    // ブロックで囲った処理を実行するかどうか？の分岐を行う構文
    // ()の中には条件式を入れる
    // 条件式の結果はtrueかfalseになる
    // 特殊パターンが存在する。
    // 文字列の場合は""(空白)がfalse
    // 数値の場合は0がfalse

    if (variable) {
        output.innerHTML += "変数:True"
    }
    output.innerHTML += "<br>"

    // if-else文
    // ifブロックで囲った処理は実行するかどうか？
    // ifブロックを実行しない場合はelseブロックを実行する。
    if (variable) {
        output.innerHTML += "変数:True"
    } else {
        output.innerHTML += "変数:False"
    }
    output.innerHTML += "<br>"


    // if-else if-else文
    // ifブロックで囲った処理は実行するかどうか？
    // ifブロックを実行しない場合はelse ifブロックを処理を実行するかどうか？
    // else ifブロックを実行しない場合はelseブロックを実行する。
    if (variable == 1) {
        output.innerHTML += "変数:1"
    } else if (variable > 1) {
        output.innerHTML += "変数:1より大きい"
    } else {
        output.innerHTML += "変数:1より小さい"
    }
    output.innerHTML += "<br>"

    // 正しいif-else if-else文使い方。
    // variable >= 100とvariable >= 10が別のブロックになる。
    if (variable >= 100) {
        output.innerHTML += "変数:100以上"
    } else if (variable >= 10) {
        output.innerHTML += "変数:10以上100未満"
    } else {
        output.innerHTML += "変数:10未満"
    }
    output.innerHTML += "<br>"

    // 誤ったif-else if-else文の使い方
    // variable >= 10のブロックが実行されると
    // variable >= 100のブロックが実行されない(どの数字が来ても実行されない)

    if (variable >= 10) {
        output.innerHTML += "変数:10以上100未満"
    } else if (variable >= 100) {
        output.innerHTML += "変数:100以上"
    } else {
        output.innerHTML += "変数:10未満"
    }
    output.innerHTML += "<br>"



}
changeSelect()