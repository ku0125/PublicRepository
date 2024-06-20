// JSON処理

// 出力準備
let output = document.getElementById('item-list')

// GETパラメータの取得する処理
// new って何？
// アドレスバーの部分を取得する
let url = new URL(window.location.href)
// 受け取る情報 searchParamsはプロパティ
let params = url.searchParams
// 取得した情報をメッセージに渡す
let msg = params.get('msg')

window.onload = function list() {
    // データの取得（非同期通信）
    // 現代の通信では必須
    fetch('../data/data.json')
    // fetch('http://192.168.0.32/data/employees')
        .then(Response => Response.json())
        .then(json => {
            // 動作確認用のlog
            console.log(json)
            
            //関数detailに受け取ったjsonを渡す 
            detail(json);
        })
        // おまじない
        // .thenがうまくいかなかったとき(jsonが取れなかったり)用の処理を書く
        .catch(error => console.error('Error fetching the JSON data:', error));
}

// JSONデータを引数に受け取ってDOM操作を行う関数を作成
// DOM操作って何？

function detail(json) {
    // msgで送ってきた配列番号を指定する
    // constのほうがいいらしい
    const member = json.members[msg];

    // detail.htmlでid指定しまくって表示
    document.getElementById('detail-name').textContent = member.name;
    document.getElementById('detail-age').textContent = `Age: ${member.age}`;
    // document.getElementById('detail-img').src = `http://192.168.0.32/img/${member.img}`;
    document.getElementById('detail-img').src = `../img/${member.img}`;
    document.getElementById('detail-img').alt = member.name;
    document.getElementById('detail-description').textContent = member.detail;
}

// イキった戻るボタン
document.getElementById('back-button').addEventListener('click', () => {
    window.location.href = 'index.html';
});