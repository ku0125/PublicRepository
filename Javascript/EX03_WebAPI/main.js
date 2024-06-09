// WebAPI

// 出力準備
let output = document.getElementById('output');
let captureButton = document.getElementById('captureButton');

// 待機時間を設定（秒）
const waitTime = 3;

function capture() {
    // ボタンを無効化
    captureButton.disabled = true;

    // 待機時間を設定（秒）
    let remainingTime = waitTime;

    // ボタンのテキストを更新
    captureButton.value = `待機中... ${remainingTime}秒`;

    // カウントダウンタイマーを開始
    const countdownTimer = setInterval(() => {
        remainingTime--;
        captureButton.value = `待機中... ${remainingTime}秒`;

        if (remainingTime <= 0) {
            clearInterval(countdownTimer);
            captureButton.value = "取得";
            captureButton.disabled = false;
        }
    }, 1000);

    output.alt = "画像取得中";
    // データの取得（非同期通信）
    // 現代の通信では必須
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(Response => Response.json())
        .then(json => {
            console.log(json);
            output.src = json.message;
        })
        .catch(error => {
            console.error('エラーが発生しました:', error);
        });
}

// ボタンのクリックイベントとタッチイベントの両方に対応
captureButton.addEventListener('click', capture);
captureButton.addEventListener('touchstart', capture);