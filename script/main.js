

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

/* Eventos */
const buttons = [...document.querySelectorAll('button')];
for (const index in buttons) {
    buttons[index].addEventListener('click', eventsListener);
}

function eventsListener(event){
    const id = event.target.id;

    switch(id){
        case 'mouse':
            assembleSubButtons(id);
            break;

        case 'keyBoard':
            break;

        case 'screen':
            break;

        case 'element':
            break;

        default: subButtons(id);
    }
}

function assembleSubButtons(mainButton){
    const secondNavArea = document.querySelector('header nav:last-child');
    const listOfOptionsBtnMain = listOfOptions[mainButton];

    for(const option in listOfOptionsBtnMain){
        secondNavArea.innerHTML += `
            <button id="${option}">
                <img src="./img/${listOfOptionsBtnMain[option].img}.png" alt="botão"></img>
                ${option}
            </button>`;
    }
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