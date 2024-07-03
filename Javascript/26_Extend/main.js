import Fan,{PortableFan} from "./Fan.js"

// 出力先の要素を習得
let output = document.getElementById('output')

// チェイニング
document.getElementById('new').addEventListener('click',()=>new Fan())
document.getElementById('new2').addEventListener('click',()=>new PortableFan())

