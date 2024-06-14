// JSON処理

// 出力準備
let output = document.getElementsByClassName('item-list')

window.onload = function list() {
    // データの取得（非同期通信）
    // 現代の通信では必須
    // fetch('http://192.168.0.32/data/employees')
    fetch('../data/data.json')
        .then(Response => Response.json())
        .then(json => {
            // 動作確認用のlog
            console.log(json)

            json.members.forEach(function (member) {
                let outHtml = `
                <dl onclick="href()">
                <div class='item-detail'>
                <h2>${member.name}</h2>
                <img src="../img/${member.img}" alt="${member.name}" ></dd>
                </div></dl>
                `
                output.innerHTML += outHtml
            });
        })
        // エラー起きたときの処理 書かなくてもいい
        .catch(error => console.error('Error fetching the JSON data:', error));
};

function href(){
    window.location.href = "detail.html"
}

// <img src="http://192.168.0.32/img/${member.img}" alt="${member.name}" ></dd>