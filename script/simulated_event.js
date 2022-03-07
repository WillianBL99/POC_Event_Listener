



const button = document.querySelector('button');
document.querySelector('button').onclick = () => { };



document.addEventListener('keydown', escutarEvento);
button.addEventListener('mouseDown', escutarEvento);
button.addEventListener('over', escutarEvento);

function escutarEvento(event) {
    console.log(event);
}















function exibirNome(nome){
    alert('olá '+ nome);
}


function pedirNome(callback){
    const nome = prompt('Digite seu nome');

    setTimeout(() => {
        callback(nome);        
    }, 2000);
}
