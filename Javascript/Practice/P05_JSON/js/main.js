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
            console.log(json)
            const members = json.members[0]
            json.members.forEach(function (member) {
                let outHtml = `
                <a href="./detail.html"><div class='item-detail'>
                <h2>${member.name}</h2>
                <img src="../img/${member.img}" alt="${member.name}" ></dd>
                </div></a>
                `
                output.innerHTML += outHtml
                });
                })
                .catch(error => console.error('Error fetching the JSON data:', error));
                };
                
                // <img src="http://192.168.0.32/img/${member.img}" alt="${member.name}" ></dd>