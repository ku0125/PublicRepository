let output = document.getElementById('output');
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

const operations = {
    ADD: (a, b) => a + b,
    SUB: (a, b) => a - b,
    MUL: (a, b) => a * b,
    DIV: (a, b) => a / b,
    MOD: (a, b) => a % b,
    BMI: (a, b) => b / (a / 100) ** 2,
    RESET: () => {
        num1.value = '';
        num2.value = '';
        return '';
    }
};

function calc(mode) {
    let val1 = Number(num1.value);
    let val2 = Number(num2.value);
    let result = mode === 'RESET' ? operations[mode]() : operations[mode](val1, val2);
    let intermediate = mode === 'RESET' ? '' : `${val1} ${mode === 'ADD' ? '+' : mode === 'SUB' ? '-' : mode === 'MUL' ? '*' : mode === 'DIV' ? '/' : mode === 'MOD' ? '%' : '/'} ${val2}`;
    output.innerHTML = `計算結果: ${intermediate} = ${result}`;
}

