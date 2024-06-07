// 配列(実用)

// 出力準備
let output = document.getElementById('output')

// 配列の生成
let member = ['亀梨','赤西','田中','田口','上田','中丸']

output.innerHTML += member + '<br>'

// 一人ずつ出力する
for (let index = 0; index < member.length; index++) {
    output.innerHTML += member[index] + '<br>'
    
}