// 例外処理について

// 出力先の要素を習得
let output = document.getElementById('output')
let output2 = document.getElementById('output2')

// 実行するとエラーが発生する
// output.innerHTML = "存在する"
// output2.innerHTML = "存在しない"
// output.innerHTML = "存在する"


// 例外処理の基本
try {
    // 例外が発生しうる処理
    output.innerHTML = "存在する"
    // 実行するとエラーが発生する可能性のある部分
    output2.innerHTML = "存在しない"
    output.innerHTML = "存在する"
} catch (error) {
    // 例外が発生した時
    output.innerHTML += "<br>エラー対応済み"
} finally {
    // 何があっても実行される
    output.innerHTML += '<br>foo<br>'
}

function div(num1,num2){
    if(num2 == 0){
        throw new Error('0では割れません。')
    }
    return num1 / num2
}

// 実行するとエラーが発生する。
// output.innerHTML += div(3,0)

try {
    output.innerHTML += div(3,0)
} catch (error) {
    output.innerHTML += error.message
} finally{
    output.innerHTML += '<br>ファイナリー<br>'
}
