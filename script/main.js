

const comands = {
    mousedown: {
        img: './img/img_code/click.png',
        conteiner_div: `<button>Clique aqui</button>`,
        section: ''
    },
    click: {
        img: './img/img_code/click.png',
        conteiner_div: `<button>Clique aqui</button>`,
        section: ''
    },
    dblclick: {
        img: './img/img_code/click.png',
        conteiner_div: `<button>Clique aqui</button>`,
        section: ''
    }
}

const listOfOptions = {
    mouse: {
        mousedown: {img: 'mouse'},
        click: {img: 'leftclickmouse'},
        dblclick: {img: 'leftclickmouse'},
        contextmenu: {img: 'rightclickmouse'}
    }
}


/* Main logic */

function assembleSubButtons(mainButton){
    const secondNavArea = document.querySelector('header nav:last-child');
    secondNavArea.innerHTML = '';
    const listOfOptionsBtnMain = listOfOptions[mainButton];

    for(const option in listOfOptionsBtnMain){
        secondNavArea.innerHTML += `
            <button id="${option}">
                <img src="./img/${listOfOptionsBtnMain[option].img}.png" alt="botão"></img>
                ${option}
            </button>`;
    }

    const subOptios = [...secondNavArea.querySelectorAll('button')];
    addEvents(subOptios);
}

function subButtons(btnClickedId){
    for (const id in comands) {
        console.log(id);
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
    eventSide.innerHTML += `<section>${obj.section}</section>`;
}


/* Eventos */

const buttons = [...document.querySelectorAll('header nav:first-child button')];
addEvents(buttons);

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