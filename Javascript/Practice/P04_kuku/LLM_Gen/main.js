// 出力準備
const outputs = [
    document.getElementById('output1'),
    document.getElementById('output2'),
    document.getElementById('output3'),
    document.getElementById('output4')
];

// 関数定義
const generateMultiplicationTable = () => {
    const table = Array.from({ length: 9 }, (_, i) => 
        Array.from({ length: 9 }, (_, j) => (i + 1) * (j + 1))
    );
    return table;
};

// 九九表を生成
const table = generateMultiplicationTable();

// 課題1: 九九の答えだけを出力
outputs[0].innerHTML = table.flat().join(' ');

// 課題2: 九九の式と答えを出力
outputs[1].innerHTML = table.map((row, i) => 
    row.map((val, j) => `${i + 1} * ${j + 1} = ${val}`).join(' ')
).join('<br>');

// 課題3: 九九表を出力 (tableタグを使用)
let tableHTML = '<table border="1">';
table.forEach(row => {
    tableHTML += '<tr>' + row.map(val => `<td>${val}</td>`).join('') + '</tr>';
});
tableHTML += '</table>';
outputs[2].innerHTML = tableHTML;

// 課題4: 外枠つきの九九表を出力
tableHTML = '<table border="1"><tr><th></th>';
for (let i = 1; i <= 9; i++) {
    tableHTML += `<th>${i}</th>`;
}
tableHTML += '</tr>';
table.forEach((row, i) => {
    tableHTML += `<tr><th>${i + 1}</th>` + row.map(val => `<td>${val}</td>`).join('') + '</tr>';
});
tableHTML += '</table>';
outputs[3].innerHTML = tableHTML;