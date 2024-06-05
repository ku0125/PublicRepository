let comment = document.getElementById('comment')
let msg = document.getElementById('msg')

function chat(mode) {
    switch (mode) {
        case 'A':
            // Aさん出力部分に入力部分の内容が出力される(赤色)
            msg.innerHTML += `<p class="coma">${comment.value}</p>`
            comment.value = ''
            break;
        case 'B':
            // Bさん出力部分に入力部分の内容が出力される(青色)  
            msg.innerHTML += `<p class="comb">${comment.value}</p>`
            comment.value = ''
            break;
        case 'RESET':
            comment.value = ''
            msg.innerHTML = ''
            break;
        default:
            break;
    }
}