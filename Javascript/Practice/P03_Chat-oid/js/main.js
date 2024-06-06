const A_SAN = 'coma'
const B_SAN = 'comb'

// comment(入力フォームの内容)、msg(表示内容)を準備
let comment = document.getElementById('comment')
let msg = document.getElementById('msg')

function chat(mode) {
    // Date関数をつかってnow(時刻)を取得
    // パソコンの時間を取得
    const now = new Date();
    // now(時刻)をtimestamp(日本の形式)になおす
    const timestamp = now.toLocaleString('ja-JP');

    let className = mode
    let dispName = ''

    if (comment.value == '') {
        // 入力フォームが空のときは何もしない
        return;
    }

    // switch-caseを使って分岐
    switch (mode) {
        case 'A_SAN':
            dispName = 'Aさん'
            // Aさん出力部分に入力部分の内容が出力される(赤色)
            break;
        case 'B_SAN':
            dispName = 'Bさん'
            // Bさん出力部分に入力部分の内容が出力される(青色)  
            break;
        default:
            break;
    }
    // timestamp(取得した時刻)、色変更用のclassを入れたpタグをテンプレートリテラルを使ってむりやり埋め込む
    // msg(表示内容)を追記する
    // 入力フォームの消去
    msg.innerHTML += `<p class='${className}'>${timestamp} : ${dispName}<br>${comment.value}</p>`
    comment.value = ''
}
// 入力フォームが空のときは何もしない処理がリセットボタンにまで効いていたので関数をわける
function resetFields() {
    // 入力フォームの消去
    comment.value = ''
    // msg(表示内容)を消去
    msg.innerHTML = ''
}