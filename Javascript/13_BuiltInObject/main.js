// 組み込みオブジェクト

// 出力先の要素を習得
let output = document.getElementById('output')
const br = document.createElement("br");

// Mathオブジェクト
// 計算を行うオブジェクト

function rand(min, max) {
    max++
    return Math.floor(Math.random() * (max - min) + min)
}

output.innerHTML += rand(50, 100)
output.appendChild(br);
output.innerHTML += rand(50, 100)
output.appendChild(br);

output.appendChild(br);

// Dateクラス
output.innerHTML += '日付型'
output.appendChild(br);


// 現在時刻の取得
let today = new Date()

output.innerHTML += 'dateそのまま'
output.appendChild(br);
output.innerHTML += today
output.appendChild(br);

// 日本でよく使われる形式に変換
output.innerHTML += 'toLocaleString("ja-JP")で変換'
output.appendChild(br);
output.innerHTML += today.toLocaleString("ja-JP")
output.appendChild(br);

// 日付を指定した日時を取得
output.innerHTML += '日付を指定した日時を取得'
output.appendChild(br);
let day1 = new Date('2024/06/14')
output.innerHTML += day1.toLocaleString("ja-JP")
output.appendChild(br);
output.appendChild(br);

// 日付と時刻を指定した日時を取得
output.innerHTML += '日付と時刻を指定した日時を取得'
output.appendChild(br);

let day2 = new Date('2024/06/14 18:30')
output.innerHTML += day2.toLocaleString("ja-JP")
output.appendChild(br);
output.appendChild(br);

// 日付を指定した日時を取得
output.innerHTML += '日付を指定した日時を取得'
output.appendChild(br);
let day3 = new Date(2024, 5, 14)
output.innerHTML += day3.toLocaleString("ja-JP")
output.appendChild(br);
output.appendChild(br);

// 日付を指定した日時を取得
output.innerHTML += '日付を指定した日時を取得'
output.appendChild(br);
let day4 = new Date(2024, 11, 14, 18, 30)
output.innerHTML += day4.toLocaleString("ja-JP")
output.appendChild(br);
output.appendChild(br);

// 日付を指定した日時を取得
output.innerHTML += '日付を指定した日時を取得'
output.appendChild(br);
let day5 = new Date(1718341290000)
output.innerHTML += day5.toLocaleString("ja-JP", { weekday: 'short' })
output.appendChild(br);
output.appendChild(br);

// JavaScriptには日付フォーマットを行う標準クラスは無い
// なので、自作する。

output.innerHTML += '日付フォーマットを行う標準クラスがないので自作関数を作る'
output.appendChild(br);
output.innerHTML += 'toLocaleStringsのoptionsでも一応ある程度フォーマットは利く'
output.appendChild(br);

function dateFormat(inputDate) {
    let yyyy = inputDate.getFullYear().toString().padStart(4, '0')
    let MM = (inputDate.getMonth() + 1).toString().padStart(2, '0')
    let dd = inputDate.getDate().toString().padStart(2, '0')
    let hh = inputDate.getHours().toString().padStart(2, '0')
    let mm = inputDate.getMinutes().toString().padStart(2, '0')
    let ss = inputDate.getSeconds().toString().padStart(2, '0')

    // .padStart(4,'0') は4桁で0埋めする処理

    return `${yyyy}/${MM}/${dd} ${hh}:${mm}:${ss}`
}

output.innerHTML += dateFormat(day5)
output.appendChild(br);

output.innerHTML += day2 - day1 + '<output.appendChild(br);>'
let day7 = new Date(day2 - day1)
let hh = day7.getHours().toString().padStart(2, '0')
let mm = day7.getMinutes().toString().padStart(2, '0')
let ss = day7.getSeconds().toString().padStart(2, '0')

output.innerHTML += `${hh}:${mm}:${ss}`
