// JSON処理

// 出力準備
let output = document.getElementById('item-list')

window.onload = function list() {
    // データの取得（非同期通信）
    // 現代の通信では必須
    fetch('../data/data.json')
    // fetch('http://192.168.0.32/data/employees')
        .then(Response => Response.json())
        .then(json => {
            console.log(json)
            detail(json);
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
}

//JSONデータを引数に受け取ってDOM操作を行う関数を作成
function detail(json) {
    const member = json.members[0];
    document.getElementById('detail-name').textContent = member.name;
    document.getElementById('detail-age').textContent = `Age: ${member.age}`;
    // document.getElementById('detail-img').src = `http://192.168.0.32/img/${member.img}`;
    document.getElementById('detail-img').src = `../img/${member.img}`;
    document.getElementById('detail-img').alt = member.name;
    document.getElementById('detail-description').textContent = member.detail;
    }

    document.getElementById('back-button').addEventListener('click', () => {
        window.location.href = 'index.html';
    });