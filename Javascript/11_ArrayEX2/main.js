// 配列(実用)

// 出力準備
let output = document.getElementById('output')

// 配列の生成
let member = ['亀梨', '赤西', '田中', '田口', '上田', '中丸']

output.innerHTML += member + '<br>'

// 一人ずつ出力する (for文)
for (let index = 0; index < member.length; index++) {
    output.innerHTML += member[index] + '<br>'

}
// 一人ずつ出力する (forEach文)
// 無名関数 局所的な利用に使う
member.forEach(function (element) {
    output.innerHTML += element + '<br>'
});

// 一人ずつ出力する (forEach文+アロー関数) 
// アロー関数 
// function(element){code}を1行で書ける
member.forEach(element => {output.innerHTML += element + '<br>'});

// 従業員生成
let emp01 = {
    name: '従業員A',
    age: 33,
    gender: 0
}
let emp02 = {
    name: '従業員B',
    age: 42,
    gender: 1
}
let emp03 = {
    name: '従業員C',
    age: 25,
    gender: 0
}
let emp04 = {
    name: '従業員D',
    age: 33,
    gender: 3
}
let emp05 = {
    name: '従業員E',
    age: 31,
    gender: 1
}

// 従業員配列の生成
let employees = [emp01, emp02, emp03, emp04, emp05]

employees.forEach(function (employee) {
    let outHtml = `
    <dl>
        <dt>名前</dt>
        <dd>${employee.name}</dd>
        <dt>年齢</dt>
        <dd>${employee.age}</dd>
        <dt>性別</dt>
        <dd>${employee.gender == 0 ? '男' : employee.gender == 1 ? '女':'!?'}</dd>
    </dl>
    `
    output.innerHTML += outHtml + '<br>'
});

// 従業員配列の生成(アロー関数)
employees.forEach(employee => {
    let outHtml = `
    <dl>
        <dt>名前</dt>
        <dd>${employee.name}</dd>
        <dt>年齢</dt>
        <dd>${employee.age}</dd>
        <dt>性別</dt>
        <dd>${employee.gender == 0 ? '男' : employee.gender == 1 ? '女':'!?'}</dd>
    </dl>
    `
    output.innerHTML += outHtml + '<br>'
});