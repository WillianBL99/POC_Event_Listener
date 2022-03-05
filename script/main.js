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
    }
}

const listOfOptions = {
    mouse: {
        mousedown: {icon: 'mouse'},
        click: {icon: 'leftclickmouse'},
        dblclick: {icon: 'leftclickmouse'},
        contextmenu: {icon: 'rightclickmouse'}
    }
}

const buttons = [...document.querySelectorAll('header nav:first-child button')];
addEvents(buttons);

/* Main logic */

function assembleSubButtons(mainButton){
    const secondNavArea = document.querySelector('header nav:last-child');
    secondNavArea.innerHTML = '';
    const listOfOptionsBtnMain = listOfOptions[mainButton];

    for(const option in listOfOptionsBtnMain){
        secondNavArea.innerHTML += `
            <button id="${option}">
                <img src="./img/${listOfOptionsBtnMain[option].icon}.png" alt="botão"></img>
                ${option}
            </button>`;
    }

    const subOptios = [...secondNavArea.querySelectorAll('button')];
    addEvents(subOptios);
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


/* Eventos */

function upDateElements(){
    const button = document.querySelector('.dir .conteiner button');
    button.addEventListener(currentEvent, simulateEvent, false);
}

function addEvents(elements){
    for (const index in elements) {
        const button = elements[index];
        button.addEventListener('click', eventsListener);
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