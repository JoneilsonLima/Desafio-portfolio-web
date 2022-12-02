let arr = [];
function salvar() {
    if (localStorage.listaNomes) {
        arr = JSON.parse(localStorage.getItem('listaNomes'))
    }


    let nome = document.querySelector('#mensagem').value;
    arr.push(nome);
    nome = '';
    localStorage.listaNomes = JSON.stringify(arr);
}

function mostrar() {
    let result = document.querySelector('.nova-msg');
    result.innerHTML = '';
    if(localStorage.listaNomes) {
        arr = JSON.parse(localStorage.getItem('listaNomes'))
    }

    for(let i in arr) {
        let p = document.createElement("li");
        p.innerHTML = arr[i];
        result.append(p);
    }
}

function limpar() {
    localStorage.clear();
    window.location.reload(true);
}



function botaoHandler(event){
    event.preventDefault()
    console.log("Botão Clicado!")
}












/*** MENSAGEM SALVA ***/
const botaoEnviar = document.querySelector("#alerta-mensagem");
const divMessage = document.querySelector(".alert");

const msg = "Mensagem Salva";

function ativarMensagem(msg) {
    const message = document.createElement('div');
    message.classList.add('mensagem-salva')
    message.innerText = msg;
    divMessage.appendChild(message)

    setTimeout(() => {
        message.style.display = "none";
    }, 3000);
}

botaoEnviar.addEventListener("click", () => {
    ativarMensagem(msg);
});
