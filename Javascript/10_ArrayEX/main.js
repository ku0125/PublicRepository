// 配列

// 出力準備
let output = document.getElementById('output')

// 多次元配列

// 2次元配列
let arr01 =[[]]
let arr02 =[['0-0','0-1','0-2'],['1-0','1-1','1-2']]

output.innerHTML += arr02[0] + '<br>'
output.innerHTML += arr02[1] + '<br>'
// 呼び出すときは[]を並べる
output.innerHTML += arr02[1][1] + '<br>'

// オブジェクト
let classRoom = {
    classNumber:201,
    // 配列→複数形とするとよい
    teachers:['佐藤','鈴木','高橋'],
    students:['田中','伊藤','渡辺','山本','中村','小林']

}

output.innerHTML += classRoom.classNumber + '<br>'
output.innerHTML += classRoom.students[4] + '<br>'