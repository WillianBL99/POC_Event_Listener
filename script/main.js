let currentEvent;

const comands = {
    mousedown: {
        img: './img/img_code/click.png',
        conteiner_div: `<button>Clique</button>`,
        section: '',
        msg: 'Algum botão do mouse foi clicado'
    },
    click: {
        img: './img/img_code/click.png',
        conteiner_div: `<button>Clique com o botão esquerdo</button>`,
        section: '',
        msg: 'O botão esquerdo do mouse foi clicado'
    },
    dblclick: {
        img: './img/img_code/click.png',
        conteiner_div: `<button>Clique duas vezes</button>`,
        section: '',
        msg: 'Foi clicado duas vezes seguidas o botão esquerdo do mouse'
    },
    contextmenu: {
        img: './img/img_code/click.png',
        conteiner_div: `<button>Clique com o botão direito</button>`,
        section: '',
        msg: 'Foi clicado o botão direito do mouse'
    },
    // keyboard
    keypressed: {
        img: './img/img_code/click.png',
        conteiner_div: `<button>Clique e digite</button>`,
        section: '',
        msg: 'Tecla precionada e solta'
    },
    keydown: {
        img: './img/img_code/click.png',
        conteiner_div: `<button>Clique e digite</button>`,
        section: '',
        msg: 'Tecla pressionada'
    },
    keyup: {
        img: './img/img_code/click.png',
        conteiner_div: `<button>Clique e digite</button>`,
        section: '',
        msg: 'Tecla solta'
    },
    //bubblin
}

const listOfOptions = {
    mouse: {
        mousedown: {icon: 'mouse'},
        click: {icon: 'leftclickmouse'},
        dblclick: {icon: 'leftclickmouse'},
        contextmenu: {icon: 'rightclickmouse'}
    },
    keyboard: {
        keypressed: {icon: 'mouse'},
        keydown: {icon: 'mouse'},
        keyup: {icon: 'leftclickmouse'},
    }
}

const buttons = [...document.querySelectorAll('header nav:first-child button')];
addEvents(buttons);

/* Main logic */

function assembleSubButtons(category){
    const secondNavArea = document.querySelector('header nav:last-child');
    secondNavArea.innerHTML = '';

    for(const option in listOfOptions[category]){
        secondNavArea.innerHTML += button(category, option);
    }

    const subOptios = [...secondNavArea.querySelectorAll('button')];
    addEvents(subOptios);

    focusButton(category);
}

function button(category, option){
    return `
    <button id="${option}">
        <img onclick="" src="./img/${listOfOptions[category][option].icon}.png" alt="botão"></img>
        ${option}
    </button>`;
}

function subButtons(btnClickedId){
    currentEvent = btnClickedId;
    for (const id in comands) {
        if(id === btnClickedId){
            makeScreen(comands[id]);
        }
    }
}

function makeScreen(obj){
    const codeSide = document.querySelector('section.esq .conteiner');
    const eventSide = document.querySelector('section.dir .conteiner');

    codeSide.innerHTML = `<img src="${obj.img}"></img>`;
    eventSide.innerHTML = `<div>${obj.conteiner_div}</div>`;
    eventSide.innerHTML += `<section><p><span>~ console:</span>${obj.section}</p></section>`;

    upDateElements();
}

function focusButton(id){
    const button = document.querySelector('.main-btn-click');
    if(button){
        button.classList.remove('main-btn-click');
    }
    const buttonFocus = document.querySelector(`#${id}`);
    buttonFocus.classList.add('main-btn-click');
}

/* Eventos */

function upDateElements(){
    const button = document.querySelector('.dir .conteiner button');
    button.addEventListener(currentEvent, simulateEvent, true);
}

function addEvents(elements){
    for (const index in elements) {
        const button = elements[index];
        button.addEventListener('click', eventsListener, true);
    }
}

function eventsListener(event){
    const id = event.target.id;

    switch(id){
        case 'mouse':
            assembleSubButtons(id);
            break;

        case 'keyboard':
            assembleSubButtons(id);
            break;

        case 'screen':
            assembleSubButtons(id);
            break;

        case 'element':
            assembleSubButtons(id);
            break;

        default: subButtons(id);
    }
}

function simulateEvent(event){
    event.stopPropagation();
    const console = document.querySelector('.dir section p');
    console.innerHTML += `<span>${comands[currentEvent].msg}</span>`;

    setTimeout(() => {
        console.innerHTML += '<span>limpando...</span>';
        setTimeout(() => {          
            console.innerHTML = '<span>~ console:</span>';
        }, 1200);
    }, 3000);
}