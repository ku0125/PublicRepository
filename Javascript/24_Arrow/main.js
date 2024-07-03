// アロー関数について

// 出力先の要素を習得
let output = document.getElementById('output')

// 通常の関数の作り方
function func01() {
    console.log("Hello")
}
func01()

const func02 = function () {
    console.log("Hello!!!!")
}
func02()

// アロー関数
const func03 = () => {
    console.log("Hello!!!!!")
}
func03()
// アロー関数

const func04 = () => console.log("Hello!!!!!!!!!!")
func04()

const func05 = () => "Hello"

console.log(func05())
