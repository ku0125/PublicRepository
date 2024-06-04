let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let result = document.getElementById("result")

let numh = document.getElementById("numh")
let numm = document.getElementById("numm")
let bmi = document.getElementById("bmi")

let calc = document.getElementById("calc")
let calc_bmi = document.getElementById("calc_bmi")

function calc1() {
    result = Number(num1.value) + Number(num2.value)
    calc.innerHTML = result
}
function calc2() {
    result = Number(num1.value) - Number(num2.value)
    calc.innerHTML = result
}
function calc3() {
    result = Number(num1.value) * Number(num2.value)
    calc.innerHTML = result
}
function calc4() {
    result = Number(num1.value) / Number(num2.value)
    calc.innerHTML = result
}
function calc5() {
    result = Number(num1.value) % Number(num2.value)
    calc.innerHTML = result
}
function calc6() {
    bmi = Number(numm.value) / (Number(numh.value) / 100) ** 2
    calc_bmi.innerHTML = bmi.toPrecision(4)
}
