// p5.js

// 出力先の要素を習得
let output = document.getElementById('output')

window.setup = function(){
    let canvasElement = createCanvas(500, 500)
    canvasElement.parent(output)
    background('#32cd32')
    frameRate(60)
}
let size = 0
window.draw = function(){
    fill('#ffff00')
    strokeWeight(0)
    ellipse(250, 250, 300, 300)
    strokeWeight(50)
    stroke('#ffffff')
    line(0,0,500,500)
    fill('#0000ff')
    size++
    circle(250,250,size)
}
