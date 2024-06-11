// JSON処理

// 出力準備
let output = document.getElementById('item-list')

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

                // msgで配列の番号をdetail.htmlに送る
                // (配列).indexOf(キー)で配列の番号が取ってこれるらしい！
                let outHtml = `
                <a href="./detail.html?msg=${json.members.indexOf(member)}"><div class='item-detail'>
                <img src="../img/${member.img}" alt="${member.name}" ></dd>
                <h2>${member.name}</h2>
                </div></a>
                `
                output.innerHTML += outHtml
                });
                })
                // おまじない
                .catch(error => console.error('Error fetching the JSON data:', error));
                };
                
                // <img src="http://192.168.0.32/img/${member.img}" alt="${member.name}" ></dd>