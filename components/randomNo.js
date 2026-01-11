const area = document.getElementById('display-area');

export function assignElements4(){
    const inputDiv = document.createElement('div');
    const upper_p = document.createElement('p');
    const labelFrom = document.createElement('label');
    const inputFrom = document.createElement('input');
    const labelTo = document.createElement('label');
    const inputTo = document.createElement('input');
    const btn = document.createElement('button');
    const displayDiv = document.createElement('div');
    const h3 = document.createElement('h3');
    const h2 = document.createElement('h2');

    inputDiv.id = 'input-area';
    upper_p.id = 'upper-div';
    upper_p.textContent = 'ENTER RANGE TO GENERATE RANDOM VALUE';
    labelFrom.id = 'from-lab';
    labelFrom.htmlfor = 'from-in';
    labelFrom.textContent = 'From  ';
    inputFrom.id = 'from-in';
    inputFrom.type = 'number';
    inputFrom.value = 0
    
    inputTo.id = 'to-in';
    inputTo.type = 'number';
    inputTo.value = 0;
    labelTo.id = 'to-lab';
    labelTo.htmlfor ='to-in';
    labelTo.textContent = 'To  ';
    btn.id= 'generate-btn';
    btn.textContent = 'GENERATE';
    displayDiv.id= "lower-display";
    h3.id = 'pre-assign-text';
    h3.textContent = 'Generated Random Value Between the given range: ';
    h2.id = 'random-value';
    h2.textContent = '0';

    area.appendChild(inputDiv);
    area.appendChild(displayDiv);
    inputDiv.appendChild(upper_p);
    inputDiv.appendChild(labelFrom);
    labelFrom.appendChild(inputFrom);
    inputDiv.appendChild(labelTo);
    labelTo.appendChild(inputTo);
    inputDiv.appendChild(btn);
    displayDiv.appendChild(h3);
    displayDiv.appendChild(h2);
}

export function removeElements4() {
    const elementIds = ['input-area', 'lower-div', 'upper-div', 'from-lab', 'from-in', 'to-lab', 'to-in', 'pre-assign-text', 'random-value'];

    elementIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
    });
}

export function generate_random(from, to){
    if(from===null || to===null || from===NaN || to===NaN){
        alert('Enter valid Value');
    }
    return (Math.floor(Math.random() * ((to) - (from)) + parseInt(from)));
}

export function decorateElements4(){
    Object.assign(area.style, {
        background: 'lightgreen',
        width: '60vw',
        margin: 'auto',
        display: 'grid',
        padding: '5px',
        'border-radius': '10vh',
        'font-size': '2rem'
    } )
    Object.assign(document.getElementById('input-area').style, {
        background: 'linear-gradient(38deg, #00dd00, #0d6d6d, #4dc90a',
        display: 'grid',
        width: '60vw',
        margin: 'auto',
        'justify-content': 'center',
        'border-radius': '10vh 10vh 0 0',
        'align-items': 'center',
        'text-align': 'center',
        'grid-template-rows' : 'auto auto auto',
        'grid-template-columns': '1fr 1fr',
        'grid-row-gap': '1vh',
        'grid-template-areas': "'top top' 'mid1 mid2' 'bottom bottom'"
    });
    Object.assign(document.getElementById('upper-div').style, {
        'grid-area': 'top'
    });

    Object.assign(document.getElementById('to-lab').style, {
        'grid-area': 'mid2'
    });

    Object.assign(document.getElementById('from-lab').style, {
        'grid-area': 'mid1',
        'text-align': 'center'
    });

    Object.assign(document.getElementById('generate-btn').style, {
        display: 'grid',
        margin: 'auto',
        'grid-area': 'bottom',
        width: '40vw',
        background: 'linear-gradient(128deg, #00dd00, #0d6d6d, #4dc90a)',
        'aling-items': 'center',
        padding: '3px',
        'font-weight': '600',
        color: 'cyan',
        'font-size': '1.5rem'
    });

    Object.assign(document.getElementById('from-in').style, {
        'text-align': 'center',
        width: '15vw',
        'background-color': 'tomato',
        color: 'white',
        padding: '5px',
        'font-size': '16px'
    });

    Object.assign(document.getElementById('to-in').style, {
        'text-align' : 'center',
        width: '15vw',
        'background-color': 'tomato',
        color: 'white',
        padding: '5px',
        'font-size': '16px'
    });

    Object.assign(document.getElementById('lower-display').style, {
        background: 'linear-gradient(128deg, #00dd00, #0d6d6d, #44c90a)',
        margin: '0',
        width: '60vw',
        margin: 'auto',
        'border-radius': '0 0 10vh 10vh',
        display: 'grid',
        'text-align': 'center'
    });
    Object.assign(document.getElementById('pre-assign-text').style,{
        width: '60vw',
        margin: 'auto',
        'font-size': '2rem',
        padding: '20px'
    })
}