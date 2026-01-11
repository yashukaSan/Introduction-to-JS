const area = document.getElementById('display-area');

let buttonsList;
let elementsList;
const lastDigit = /[\+\-*\/]/;
const count = [
    'zero', 'one', 'two',
    'three', 'four', 'five', 'six',
    'seven', 'eight', 'nine', 'point',
    'plus', 'minus', 'del', 'ac'
];

const toInsert = ['1', '2', '3', '4',
    '5', '6', '7', '8', '9', '0', '.',
    '/', '*', '+', '-', '', '(', ')'];

export function assignElement2(){
    const mainDiv = document.createElement('div');
    const inputArea = document.createElement('div');
    const butOne = document.createElement('button');
    const butTwo = document.createElement('button');
    const butThree = document.createElement('button');
    const butFour = document.createElement('button');
    const butFive = document.createElement('button');
    const butSix = document.createElement('button');
    const butSeven = document.createElement('button');
    const butEight = document.createElement('button');
    const butNine = document.createElement('button');
    const butPoint = document.createElement('button');
    const butDiv = document.createElement('button');
    const butMul = document.createElement('button');
    const butPlus = document.createElement('button');
    const butMinus = document.createElement('button');
    const butEnter = document.createElement('button');
    const butB_open = document.createElement('button');
    const butB_close = document.createElement('button');
    const butZero = document.createElement('button');
    const butDel = document.createElement('button');
    const butAC = document.createElement('button');
    const outDisplay = document.createElement('div');

    buttonsList = [
        butOne, butTwo, butThree, butFour,
        butFive, butSix, butSeven, butEight,
        butNine, butZero, butPoint, butDiv,
        butMul, butPlus, butMinus, butEnter,
        butB_open, butB_close, butDel, butAC
    ];

    elementsList = [...buttonsList, inputArea, outDisplay];

    mainDiv.id = 'main-display-2';
    inputArea.id = 'input-area';
    outDisplay.id = 'output-area';
    butAC.id = 'ac';
    butAC.textContent = 'AC';

    butOne.value = 1;
    butOne.textContent = 1;
    butOne.id = 'one';
    butDel.id = 'del';
    butDel.textContent = 'del'

    butTwo.value = 2;
    butTwo.textContent = 2;
    butTwo.id = 'two';

    butThree.value = 3;
    butThree.textContent = 3;
    butThree.id = 'three';

    butFour.value = 4;
    butFour.textContent = 4;
    butFour.id = 'four';

    butFive.value = 5;
    butFive.textContent = 5;
    butFive.id = 'five';

    butSix.value = 6;
    butSix.textContent = 6;
    butSix.id = 'six';

    butSeven.value = 7;
    butSeven.textContent = 7;
    butSeven.id = 'seven';

    butEight.value = 8;
    butEight.textContent = 8;
    butEight.id ='eight';

    butNine.value = 9;
    butNine.textContent = 9;
    butNine.id = 'nine';

    butZero.value = 0;
    butZero.textContent = 0;
    butZero.id = 'zero';

    butPoint.value='.';
    butPoint.textContent = '.';
    butPoint.id = 'point';

    butPlus.value = '+';
    butPlus.textContent = '+';
    butPlus.id = 'plus';

    butMinus.value = '-';
    butMinus.textContent = '-';
    butMinus.id = 'minus';

    butMul.value = '*';
    butMul.textContent = '*';
    butMul.id = 'multiply';

    butDiv.value = '/';
    butDiv.textContent = '/';
    butDiv.id = 'divide';

    butB_open.value = '(';
    butB_open.textContent = '(';
    butB_open.id = 'bOpen';

    butB_close.value = ')';
    butB_close.textContent = ')';
    butB_close.id = 'bClose';

    butEnter.value = '=';
    butEnter.textContent = '=';
    butEnter.id = 'enter';

    area.appendChild(mainDiv);
    mainDiv.appendChild(outDisplay);
    mainDiv.appendChild(inputArea);
    buttonsList.forEach((but)=> mainDiv.appendChild(but));


}

export function clickOperations() {
    for (let i = 0; i < 20; i++) {
        if (i !== 15 && i !== 18 && i !== 19) {
            elementsList[i].addEventListener('click', () => {
                elementsList[20].textContent += toInsert[i];
            })
        }
        if (i === 18)
            elementsList[18].addEventListener('click', () => {
                let val = elementsList[20].textContent;
                console.log(val);
                elementsList[20].textContent = [...val].slice(0, -1).join('');
                
            });

        if (i === 15) {
            elementsList[15].addEventListener('click', () => {
                let expr = elementsList[20].textContent.trim();
                if (expr === '') {
                    alert('Please enter an expression to calculate.');
                    return;
                }
                if (/^[\+\-*\/]/.test(expr)) {
                    alert('Expression cannot start with an operator.');
                    return;
                }
                if (/[\+\-*\/]$/.test(expr)) {
                    alert('Expression cannot end with an operator.');
                    return;
                }
                if (/[\+\-*\/]{2,}/.test(expr)) {
                    alert('Expression cannot have consecutive operators.');
                    return;
                }
                if (!lastDigit.test(expr[0])) {
                    elementsList[21].textContent = solveExpression(expr);
                } else {
                    alert('Please close all opened brackets.');
                }
            });
        }
        if (i === 19) {
            elementsList[19].addEventListener('click', () => {
                elementsList[20].textContent = '';
                elementsList[21].textContent = '';
            });
        }
    }
}

export function clearArea2(){
    const elementsIDList = [...count,
        'multiply', 'divide', 'enter', 
        'bOpen', 'bClose', 'input-area',
        'output-area', 'main-display-2'
    ];

    elementsIDList.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
    });
}
function solveExpression(expr) {
    try{
        return Function('"use strict"; return (' + expr + ')')();
    }
    catch(error){
        console.error(error);
        alert(error);
    }
}


export function decorate_2(){
    count.forEach((num)=>{
        Object.assign(document.getElementById(num).style,{
            'grid-area' : `${num}`
        });
    })

    Object.assign(document.getElementById('bOpen').style, {
        'grid-area': 'l-brac'
    });

    Object.assign(document.getElementById('bClose').style, {
        'grid-area': 'r-brac'
    });

    Object.assign(document.getElementById('multiply').style, {
        'grid-area': 'mul'
    });

    Object.assign(document.getElementById('divide').style, {
        'grid-area': 'div'
    });

    Object.assign(document.getElementById('enter').style, {
        'grid-area': 'equal'
    });

    Object.assign(document.getElementById('input-area').style, {
        'grid-area': 'in',
        background: 'tomato',
        'text-align': 'center',
        border: '3px solid red',
        overflow: 'hidden'
    });

    Object.assign(document.getElementById('output-area').style, {
        'grid-area': 'out',
        background: 'tomato',
        'text-align' : 'left',
        border: '2px solid red'
    });
}