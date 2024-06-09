// WebAPI

// 出力準備
let output = document.getElementById('output');
let captureButton = document.getElementById('captureButton');

function capture(){
    // ボタンを無効化
    captureButton.disabled = true;
    output.alt = "画像取得中";
    // データの取得（非同期通信）
    // 現代の通信では必須
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(Response => Response.json())
        .then(json => {
            console.log(json);
            output.src = json.message;
            // 画像の読み込み完了後にボタンを有効化
            captureButton.disabled = false;
        });
}

// ボタンのクリックイベントとタッチイベントの両方に対応
captureButton.addEventListener('click', capture);
captureButton.addEventListener('touchstart', capture);