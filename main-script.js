import { area, clearArea, decorateForB1, assignElements, checker } from './components/palindrome.js';
import { removeElements3, assignElements3, decorate_area_3, char_checker } from './components/vowels-consonants-count.js';
import { assignElements4, removeElements4, generate_random, decorateElements4 } from './components/randomNo.js';
import { assignElement2, decorate_2, clickOperations } from './components/calculator.js';

let isB1Render = false;
let isB2Render = false;
let isB3Render = false;
let isB4Render = false;

const btn1 = document.getElementById('b1');
const btn2 = document.getElementById('b2');
const btn3 = document.getElementById('b3');
const btn4 = document.getElementById('b4');
const clearBtn = document.getElementById('clearAll');

function clearDisplay(){
    if (isB1Render) clearArea();
    // if(isB3Render) ();
    if (isB3Render) removeElements3();

    if (isB4Render) removeElements4();

    area.removeAttribute('style');
    isB1Render = false;
    isB2Render = false;
    isB3Render = false;
    isB4Render = false;
}

clearBtn.addEventListener('click', ()=>{
    clearDisplay();
})


btn1.addEventListener('click', ()=>{
    // if()
    clearDisplay();
    if (!isB1Render){
        assignElements();
        decorateForB1();
        isB1Render = true;
        const checkBtn = document.getElementById('check-btn');
        checkBtn.addEventListener('click', () => {
            document.getElementById('display-text').textContent = checker(document.getElementById('string').value);
        });
    }    
});

btn3.addEventListener('click', ()=>{
    clearDisplay();
    if (!isB3Render){
        assignElements3();
        isB3Render = true;
        const checkBtn = document.getElementById('btn2');
        checkBtn.addEventListener('click', () => {
            document.getElementById('child-1').textContent = `Vowels: ${char_checker(document.getElementById('string').value)[0]}`;
            document.getElementById('child-2').textContent = `Consonants: ${char_checker(document.getElementById('string').value)[1]}`;
        });
        decorate_area_3();
    }
});

btn4.addEventListener('click', ()=>{
    if (!isB4Render){
         clearDisplay();
         assignElements4();
         decorateElements4();
         isB4Render = true;
         const checkBtn = document.getElementById('generate-btn');
         checkBtn.addEventListener('click', () => {
             document.getElementById('random-value').textContent = generate_random(document.getElementById('from-in').value, document.getElementById('to-in').value);
        });
    }

});


btn2.addEventListener('click', () => {
    if (!isB2Render){
        //clearDiplsay();
        assignElement2();
        clickOperations();
        decorate_2();
    }


    isB2Render = true;
    // const checkBtn = document.getElementById('check-btn');
    // checkBtn.addEventListener('click', () => {
    //     document.getElementById('display-text').textContent = checker(document.getElementById('string').value);
    // });

});

// window.onclick = () => {
    
// }



