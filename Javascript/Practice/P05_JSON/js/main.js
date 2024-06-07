// JSON処理

// 出力準備
let output = document.getElementById('item-list')

window.onload = function list(){
    // データの取得（非同期通信）
    // 現代の通信では必須
    fetch('../data/data.json')
        .then(Response => Response.json())
        .then(json => {
            console.log(json)
            json.members.forEach(function (member) {
                let outHtml = `
                <dl>
                    <dt>名前</dt>
                    <dd>${member.name}</dd>
                    <dt>画像</dt>
                    <dd>${member.img}</dd>
                </dl>
                `
                output.innerHTML += outHtml + '<br>'
            });
        });


}