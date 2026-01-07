const area = document.getElementById('display-area');

export function assignElements3(){
    const label = document.createElement('label');
    const input = document.createElement('input');
    const btn2 = document.createElement('button');
    const pDiv = document.createElement('div');
    const cDiv1 = document.createElement('div');
    const cDiv2 = document.createElement('div');

    label.htmlfor = 'string';
    label.textContent = "Enter Here to Check -- ";
    label.id= "inputLabel";
    
    input.id= "string";
    input.type= 'text';
    input.placeholder= 'Type Here';

    btn2.id='btn2';
    btn2.textContent = 'CHECK';

    pDiv.id= 'parent-div';

    cDiv1.id= 'child-1';
    cDiv1.textContent = 'Vowels: -';

    cDiv2.id= 'child-2';
    cDiv2.textContent = 'Consonants: -';

    area.appendChild(label);
    label.appendChild(input);
    area.appendChild(btn2);
    area.appendChild(pDiv);
    pDiv.appendChild(cDiv1);
    pDiv.appendChild(cDiv2);

    input.addEventListener('keyUp', (e)=>{
        if(e.key==='Enter'){
            char_checker(input.value);
        }
    })
}
export function removeElements3() {
    const elementIds = ['string', 'child-1', 'child-2', 'inputLabel', 'btn2', 'parent-div'];

    elementIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
    });
}

const vRegex = /[aeiou]/i;
const alphaRegex =/[a-z]/i;

export function char_checker(word){
    let vCnt = 0;
    let cCnt = 0;
    for(const char of word){
        if(vRegex.test(char)) vCnt++;
        if(!(vRegex.test(char)) && alphaRegex.test(char)) cCnt++;
    }

    return [vCnt, cCnt];
}

export function decorate_area_3(){
    Object.assign(document.getElementById('display-area').style,{
        background: 'red',
        'font-size': '24px',
        display: 'grid',
        gap: '25px',
        padding: '4vh 0',
        'grid-template-cols': '8%'
    });

    Object.assign(document.getElementById('inputLabel').style, {
        'font-variant' : 'small-caps'
    });


    Object.assign(document.getElementById('parent-div').style, {
        display: 'flex',
        'justify-content' : 'center',
        border: '2px ridge snow',
        padding: '30px',
        'border-radius': '20vh',
        background: 'linear-gradient(35deg, navy, navy, lightgreen, lightyellow, tomato, blue, blue)'
    });

    Object.assign(document.getElementById('child-1').style, {
        border: '1vh groove white',
        'margin-right' : '10vw',
        padding: '10px',
        'border-radius': '10vh',
        width: '20vw',
        'text-align': 'center',
        color: 'black',
        'font-weight': '600',
        background: 'lightblue'
    });

    Object.assign(document.getElementById('child-2').style, {
        border: '1vh groove white',
        'margin-left': '10vw',
        padding: '10px',
        'border-radius': '10vh',
        width: '20vw',
        'text-align': 'center',
        color: 'black',
        'font-weight': '600',
        background: 'lightblue'
    });

    Object.assign(document.getElementById('string').style, {
        background: 'transparent',
        'font-size': '24px',
        'text-align': 'center',
        background: 'tomato'
    });

    Object.assign(document.getElementById('inputLabel').style, {
        display: 'grid',
        'justify-content': 'center',
        gap: '20px',
        'text-align': 'center'
    });
} 