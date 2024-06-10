// 出力準備
let output = document.getElementById('output');

// GETパラメータの取得する処理
// new って何？
// アドレスバーの部分
let url = new URL(window.location.href)
// 受け取る情報 searchParamsはプロパティ
let params = url.searchParams
// 取得した情報をメッセージに渡す
let msg = params.get('msg')

output.innerHTML = msg