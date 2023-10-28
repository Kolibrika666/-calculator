const createEl = (el) => document.createElement(el)
const createBtn = () => document.createElement("button")
const section = document.getElementById("main")
const exp = createEl('p')
const rezult = createEl('p')
const buttonBox = createEl('article')
const clear = createBtn()
const system = createBtn()
const percent = createBtn()
const division = createBtn()
const seven = createBtn()
const eight = createBtn()
const nine = createBtn()
const multiplication = createBtn()
const four = createBtn()
const five = createBtn()
const six = createBtn()
const minus = createBtn()
const one = createBtn()
const two = createBtn()
const three = createBtn()
const plus = createBtn()
const zero = createBtn()
const dot = createBtn()
const equals = createBtn()
const arrBtn = [clear, system, percent, division, seven, eight, nine, multiplication, four, five, six, minus, one, two, three, plus, zero, dot, equals]

function AppendBtn (arr) {
    for (i of arr) {
        buttonBox.append(i)
    }
}
function getDarkStyle (arr) {
    section.classList.add('dark__background');
    exp.classList.add('gray__text');
    rezult.classList.add('white__text');
    for (let i = 0; i < 3; i++){
        arr[i].classList.add('gray__btn');
    }
    for (let i = 4; i < arr.length-1; i++){
        arr[i].classList.add('dark__gray__btn');
    }
    for (let i = 3; i < arr.length; i+=4){
        arr[i].classList.add('orange__btn');
    }
    arr[arr.length-1].classList.add('orange__btn');
}

function getLightStyle(arr) {

    section.classList.add('light__background');
    exp.classList.add('light__text');
    rezult.classList.add('black__text');
    for (let i = 0; i < 3; i++){
        arr[i].classList.add('light__btn');
    }
    for (let i = 4; i < arr.length-1; i++){
        arr[i].classList.add('white__btn');
    }
    for (let i = 3; i < arr.length; i+=4){
        arr[i].classList.add('dark__orange__btn');
    }
    arr[arr.length-1].classList.add('dark__orange__btn');
}

exp.textContent = '19,34 + 11,23' 
rezult.textContent = ' = 30,75'
clear.textContent = 'С'
system.textContent = '+/-' //
percent.textContent = '%'
division.textContent = '/' // 
seven.textContent = '7'
eight.textContent = '8'
nine.textContent = '9'
multiplication.textContent = 'x'
four.textContent = '4'
five.textContent = '5'
six.textContent = '6'
minus.textContent = '-'
one.textContent = '1'
two.textContent = '2'
three.textContent = '3'
plus.textContent = '+'
zero.textContent = '0'
dot.textContent = '.'
equals.textContent = '='

rezult.className = 'rezult';
exp.className = 'exp';

AppendBtn(arrBtn)
section.append(exp, rezult, buttonBox)

getDarkStyle(arrBtn);
getLightStyle(arrBtn);