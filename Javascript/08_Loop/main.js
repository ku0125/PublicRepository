// 反復構文

// 出力準備
let output = document.getElementById('output')

// for文
// 初期化式：for文に初めて訪れた時実行される。
// 条件式：条件式の判定がtrueだったとき、ブロックが実行される
// 増分式：ブロック実行後に実行され、後に条件式で判定を行う。
for (let index = 0; index < 10; index++) {
    output.innerHTML += index
}

output.innerHTML += '<br>'

// while文
// 条件式：条件式の判定がtrueだったとき、ブロックが実行される
let index = 0
while (index < 10) {
    output.innerHTML += index
    index++
}

output.innerHTML += '<br>'

// do-while文
// 条件式：条件式の判定がtrueだったとき、ブロックが実行される
index = 0
do {
    output.innerHTML += index
    index++
} while (index < 10)

output.innerHTML += '<br>'

// break文
// ブロックの処理を中断する

let runnerA = 0
let runnerB = 100

while (runnerA < runnerB) {
    runnerA += 3
    runnerB += 2
    output.innerHTML += `A${runnerA}:B${runnerB}<br>`
    // ゴール
    if (runnerB >= 200) {
        output.innerHTML += 'ゴール！<br>'
        break
    }
}

// continue文
// ルーブ内の現在の処理をスキップして再度反復するイメージ
for (let index = 0; index <= 10; index++) {
    if (index % 2 == 1) {
        continue
    }
    output.innerHTML += index + ' '

}