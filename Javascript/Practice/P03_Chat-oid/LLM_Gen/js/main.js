const A_SAN = 'A_SAN';
const B_SAN = 'B_SAN';
const C_SAN = 'C_SAN'; // Cさん用の定数を追加

let comment = document.getElementById('comment');
let msg = document.getElementById('msg');
let lastMode = null;

function chat(mode) {
    const now = new Date();
    const timestamp = now.toLocaleString('ja-JP');
    let dispName = '';

    if (comment.value === '') {
        return;
    }

    switch (mode) {
        case A_SAN:
            dispName = 'Aさん';
            break;
        case B_SAN:
            dispName = 'Bさん';
            break;
        case C_SAN: // Cさんの場合を追加
            dispName = 'Cさん';
            break;
        default:
            return;
    }

    msg.innerHTML += `
        <p class="${mode}">
            ${timestamp} : ${dispName}<br>
            ${comment.value}
        </p>
    `;

    comment.value = '';
    lastMode = mode;
}

function resetFields() {
    msg.innerHTML = '';
    comment.value = '';
    lastMode = null;
}

comment.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && lastMode) {
        chat(lastMode);
    }
});
