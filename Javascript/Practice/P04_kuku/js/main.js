// 反復構文

// 出力準備
let output1 = document.getElementById('output1')
let output2 = document.getElementById('output2')
let output3 = document.getElementById('output3')
let output4 = document.getElementById('output4')
let result = ''

// 課題1
// 九九の答えだけを出力

for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        result = i * j
        output1.innerHTML += result + ' '
    }
}

// 課題2
// 九九の式と答えを出力

for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        result = i * j
        output2.innerHTML += `${i} * ${j} = ${result} `
    }
    output2.innerHTML += '<br>'
}

// // 課題3-1
// // 九九表を出力
// // tableタグを使用

// // output3.innerHTMLでタグをどんどん追加する
// output3.innerHTML = '<table border=1>'
// output3.innerHTML += '<tr>'

// for (let i = 1; i < 10; i++) {

//     for (let j = 1; j < 10; j++) {
//         result = i * j
//         output3.innerHTML += `<td>${result}</td>`
//     }
//     output3.innerHTML += '</tr>'
// }
// output3.innerHTML += '</table>'
// // 動かない（？？？？？？）

// 課題3-2
// 九九表を出力
// tableタグを使用

// tableHTMLの箱を作ってタグをどんどん追加する
let tableHTML = '<table border=1>'
tableHTML += '<tr>'

for (let i = 1; i < 10; i++) {

    for (let j = 1; j < 10; j++) {
        result = i * j
        tableHTML += `<td>${result}</td>`
    }
    tableHTML += '</tr>'
}
tableHTML += '</table>'

// まとめてtableHTMLを出力
output3.innerHTML = tableHTML
// 動く（？？？？？？）


// 課題4
// 外枠つきの九九表を出力

// tableHTMLの箱を作ってタグをどんどん追加する
tableHTML = '<table border=1>'
tableHTML += '<tr>'

// 外枠(<th>)用の数字を追加
for (let i = 0; i < 10; i++) {
    result = i
    tableHTML += `<th>${result}</th>`
}
tableHTML += '</tr>'


for (let i = 1; i < 10; i++) {
    // 外枠(<th>)用の数字を出力
    result = i
    tableHTML += `<th>${result}</th>`

    for (let j = 1; j < 10; j++) {
        result = i * j
        tableHTML += `<td>${result}</td>`
    }
    tableHTML += '</tr>'
}

// tableタグを閉じる
tableHTML += '</table>'

// まとめてtableHTMLを出力
output4.innerHTML += tableHTML