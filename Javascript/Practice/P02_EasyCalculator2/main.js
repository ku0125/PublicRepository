let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let result = document.getElementById("result")

const operators = {
   '+': (a, b) => a + b,
   '-': (a, b) => a - b,
   '*': (a, b) => a * b,
   '/': (a, b) => a / b,
   '%': (a, b) => ({quotient: Math.floor(a / b), remainder: a % b}),
   'BMI': (height, weight) => weight / ((height / 100) ** 2)
}

function truncateToFourDecimals(number) {
    return Math.floor(number * 10000) / 10000;
}

function calc(op) {
   let num1n = Number(num1.value)
   let num2n = Number(num2.value)
   let resultNum = operators[op](num1n, num2n)
   let msg;

   if (op === '%') {
       msg = `${num1n} ${op} ${num2n} = 商: ${truncateToFourDecimals(resultNum.quotient)}, 余り: ${truncateToFourDecimals(resultNum.remainder)}`
   } else if (op === 'BMI') {
       msg = `BMI = ${truncateToFourDecimals(resultNum).toFixed(2)}`
   } else {
       msg = `${num1n} ${op} ${num2n} = ${truncateToFourDecimals(resultNum)}`
   }

   result.textContent = msg
}

function resetFields() {
    num1.value = ''
    num2.value = ''
    result.textContent = ''
}
