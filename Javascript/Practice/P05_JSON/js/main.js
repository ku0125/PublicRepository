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
                <dd><img src="../img/${member.img}" alt="${member.name}" ></dd>
                <dd>${member.name}</dd>
                </dl>
                `
                output.innerHTML += outHtml + '<br>'
            });
        });


}