let num0 = document.getElementById('btn0')
let num1 = document.getElementById('btn1')
let res = document.getElementById('res')
let btnSum = document.getElementById('btnSum')
let btnEql = document.getElementById('btnEql')
let btnClr = document.getElementById('btnClr')
let btnSub = document.getElementById('btnSub')
let btnMul = document.getElementById('btnMul')
let btnDiv = document.getElementById('btnDiv')

let value = ''
let operand1 = '';
let operand2 = '';
let operator = '';
let result = 0;

num0.addEventListener('click', function () {
    res.innerHTML += 0;
    value += 0
})
num1.addEventListener('click', function () {
    res.innerHTML += 1;
    value += 1
})
btnClr.addEventListener('click', function () {
    res.innerHTML = ''
    value = ''
    operand1 = '';
    operand2 = '';
    operator = '';
    result = 0;
})
btnSum.addEventListener('click', function () {
    res.innerHTML += "+"
    operator = "+"
    operand1 = value;
    value = '';
})
btnSub.addEventListener('click', function () {
    res.innerHTML += "-"
    operator = "-"
    operand1 = value;
    value = '';
})
btnMul.addEventListener('click', function () {
    res.innerHTML += "*"
    operator = "*"
    operand1 = value;
    value = '';
})
btnDiv.addEventListener('click', function () {
    res.innerHTML += "/"
    operator = "/"
    operand1 = value;
    value = '';
})
btnEql.addEventListener('click', function () {
    res.innerHTML = ''
    operand2 = value;
    if (operator == "+") {
        result = parseInt(operand1, 2) + parseInt(operand2, 2)
    } else if (operator == "-") {
        result = parseInt(operand1, 2) - parseInt(operand2, 2)
    } else if (operator == "*") {
        result = parseInt(operand1, 2) * parseInt(operand2, 2)
    } else if (operator == "/") {
        result = parseInt(operand1, 2) / parseInt(operand2, 2)
    }
    res.innerHTML = result.toString(2)
    operator = ''
    value = ''
    operand1 = ''
    operand2 = ''
})
