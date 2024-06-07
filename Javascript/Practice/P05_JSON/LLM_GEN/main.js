// JSON処理

// 出力準備
let output = document.getElementById('output')

window.onload = function list(){
    // データの取得（非同期通信）
    // 現代の通信では必須
    fetch('../data/data.json')
        .then(Response => Response.json())
        .then(data => {
            console.log(data)
            data.members.forEach(function (member) {
                output.innerHTML += `${member.name}`
            });
        });


}