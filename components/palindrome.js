
export const area = document.getElementById('display-area');

function createElements() {
    const label = document.createElement('label');
    const input = document.createElement('input');
    const outputArea = document.createElement('section');
    const output = document.createElement('div');
    const checkButton = document.createElement('button');

    return [label, input, outputArea, output, checkButton];
}


export function assignElements() {
    const elements = createElements();
    elements[0].id = 'inputLabel';
    elements[0].textContent = 'Enter Somehing to Test: ';
    elements[1].id = 'string';
    elements[1].type = 'text';
    elements[0].htmlfor = 'string';
    elements[1].placeholder = 'Type Here';
    elements[2].id = 'display';
    elements[3].id = 'display-text';
    elements[3].textContent = 'Enter Something to Check';
    elements[4].id = 'check-btn';
    elements[4].textContent = 'CHECK';

    area.appendChild(elements[0]);
    elements[0].appendChild(elements[1]);
    area.appendChild(elements[4]);
    area.appendChild(elements[2]);
    elements[2].appendChild(elements[3]);

    const checkBtn = document.getElementById('check-btn');

}


export function clearArea() {
    const elementIds = ['string', 'display-text', 'display', 'check-btn', 'inputLabel', 'parent-div'];

    elementIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
    });
}


export function checker(spell){
    if(spell === '') return 'Please Enter Something';
    const revSpell = spell.split('').reverse().join('');
    return (spell===revSpell)? `${spell} is a Palindrome String` : `${spell} is not a Palindrome String` ;
}


export function decorateForB1(){

    Object.assign(area.style, {
        background: "black",
        color: "snow",
        border: "2px solid grey",
        padding: "2px",
        display: 'grid',
        height: '10cm',
        'align-items': 'center',
        'justify-content': 'center',
        'font-size': '28px'
    });

    Object.assign(document.getElementById('inputLabel').style, {
        display: 'grid',
        'justify-content': 'center',
        gap: '20px',
        'font-size': '18px',
        'font-weight': '600'
    });
    Object.assign(document.getElementById('check-btn').style, {
        margin: 'auto',
        background: 'black',
        color: 'red',
        width: '50%',
        'font-size': '20px',
        cursor: 'pointer',
        border: '3px solid maroon'
    });

    Object.assign(document.getElementById('string').style, {
        width: '30vw',
        background: 'pink',
        margin: 'auto',
        'text-align': 'center',
        'font-size': '18px',
        padding: '1px'
    });

    Object.assign(document.getElementById('display-text').style, {
        background: 'yellow',
        color: 'green',
        'border-radius' : '20px',
        padding: '13px',
        'font-weight': '700',
        'text-align': 'center'
    });
}