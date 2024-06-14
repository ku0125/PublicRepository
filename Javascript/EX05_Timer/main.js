// 遅延実行

// 出力先の要素を習得
let output = document.getElementById('output')


function greeting(){
    output.innerHTML += 'こんにちは！' + '<br>'
}
// setTimeout(関数,時間)
// 指定ミリ秒数後に実行

setTimeout(greeting,3000)

function sayTime(){
    output.innerHTML += new Date().toLocaleTimeString("ja-JP") + '<br>'
}

// setInterval(関数,時間)
// 繰り返し処理 ミリ秒単位で指定

let sayTimeID = setInterval(sayTime,1000)

function stopSayTime() {
    clearInterval(sayTimeID)
}

setTimeout(stopSayTime,10000)
