let arr = [];
function salvar() {
    if (localStorage.listaMensagem) {
        arr = JSON.parse(localStorage.getItem('listaMensagem'))
    }

    let nome = document.querySelector('#mensagem').value;
    arr.push(nome);
    nome = '';
    localStorage.listaMensagem = JSON.stringify(arr);
}

function mostrar() {
    let result = document.querySelector('.nova-msg');
    result.innerHTML = '';
    if (localStorage.listaMensagem) {
        arr = JSON.parse(localStorage.getItem('listaMensagem'))
    }

    for (let i in arr) {
        let p = document.createElement("li");
        p.innerHTML = arr[i];
        result.append(p);
    }
}

function limpar() {
    localStorage.clear();
    window.location.reload(true);
}

/*** ALERTA DE MENSAGEM SALVA ***/
function initAlertaMensagemSalva() {
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
        }, 2500);

        setTimeout(() => {
            window.location.reload(true);
        }, 2500)
    }

    botaoEnviar.addEventListener("click", () => {
        ativarMensagem(msg);
    });
}
initAlertaMensagemSalva()

/**** Modal Mensagem *****/
const indexMensage = document.querySelector('.index-mensagem');
if(indexMensage) {
    const buttonApagarHistorico = document.querySelector('.button-apagar')
const modalMensagem = document.querySelector('.modal-mensagem');
const closedModalMensagem = document.querySelectorAll('.closed-modal-mensagem');

closedModalMensagem.forEach((item) => {
    item.addEventListener('click', () => {
        modalMensagem.classList.add('hiden')
    })
})

buttonApagarHistorico.addEventListener('click', () => {
    modalMensagem.classList.remove('hiden')
})
}

