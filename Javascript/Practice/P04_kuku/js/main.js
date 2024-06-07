// 反復構文

// 出力準備
let output1 = document.getElementById('output1')
let output2 = document.getElementById('output2')
let output3 = document.getElementById('output3')
let output4 = document.getElementById('output4')

// 課題1
// 九九の答えだけを出力

for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        output1.textContent += `${i*j} `
    }
}

// 課題2
// 九九の式と答えを出力

for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        output2.innerHTML += `${i}*${j} = ${i * j} `
    }
    output2.innerHTML += '<br>'
}

// 課題3-1
// 九九表を出力
// 空白文字を使用

// output3.innerHTMLでタグをどんどん追加する

for (let i = 1; i < 10; i++) {


    for (let j = 1; j < 10; j++) {
        if(i*j>9){
            output3.innerHTML += `${i*j}&nbsp;`
         }else{
            output3.innerHTML += `&nbsp;&nbsp;${i*j}&nbsp;`
         }
    }
    output3.innerHTML += '<br>'
}
output3.innerHTML += '</table>'
// 動かない（？？？？？？）


// 課題3-2
// 九九表を出力
// tableタグを使用

// tableHTMLの箱を作ってタグをどんどん追加する
let tableHTML = '<table border=1 class="kuku">'
tableHTML += '<tr>'

for (let i = 1; i < 10; i++) {

    for (let j = 1; j < 10; j++) {
        tableHTML += `<td>${i * j}</td>`
    }
    tableHTML += '</tr>'
}
tableHTML += '</table>'

// まとめてtableHTMLを出力
output4.innerHTML = tableHTML
// 動く（？？？？？？）


// 課題4
// 外枠つきの九九表を出力

// tableHTMLの箱を作ってタグをどんどん追加する
tableHTML = '<table border=1>'
tableHTML += '<tr>'

// 外枠(<th>)用の数字を追加
for (let i = 0; i < 10; i++) {
    tableHTML += `<th>${i}</th>`
}
tableHTML += '</tr>'

for (let i = 1; i < 10; i++) {
    // 外枠(<th>)用の数字を出力
    tableHTML += `<th>${i}</th>`

    for (let j = 1; j < 10; j++) {
        tableHTML += `<td>${i * j}</td>`
    }
    tableHTML += '</tr>'
}

// tableタグを閉じる
tableHTML += '</table>'

// まとめてtableHTMLを出力
output5.innerHTML += tableHTML
