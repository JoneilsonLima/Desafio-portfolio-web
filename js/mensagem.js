// Salvar dados do formulário
function salvarMensagem() {
    let formulario = document.querySelector('.formulario');

    let nome_usuario = document.querySelector("#nome_usuario").value;
    let email_usuario = document.querySelector("#email_usuario").value;
    let mensagem_usuario = document.querySelector('#mensagem').value;

    let usuarios = new Array();

    if (localStorage.hasOwnProperty("usuarios")) {
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }

    usuarios.push({ mensagem_usuario, nome_usuario, email_usuario });

    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    formulario.reset()
}

// Carregar dados do formulário
function mostrarHistorico() {
    let usuarios;
    let result = document.querySelector('.nova-msg');
    result.innerHTML = '';
    if (localStorage.usuarios) {
        usuarios = JSON.parse(localStorage.getItem('usuarios'))
    }

    for (let i in usuarios) {
        let criandoListas = document.createElement("li");
        let reltadoNome = document.createElement('h3');
        reltadoNome.innerText = `Nome: ${usuarios[i].nome_usuario}`;
        let resultadoEmail = document.createElement('h2')
        resultadoEmail.innerText = `E-mail: ${usuarios[i].email_usuario}`;
        let resultadoMensagem = document.createElement('p')
        resultadoMensagem.innerText = usuarios[i].mensagem_usuario;

        criandoListas.appendChild(resultadoEmail);
        criandoListas.appendChild(reltadoNome);
        criandoListas.appendChild(resultadoMensagem);
        result.append(criandoListas);
    }
}

// Limpar dados do local storage 
function limparHistorico() {
    localStorage.clear();
    window.location.reload(true);
}

// ALERTA DE MENSAGEM SALVA 
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
    }

    botaoEnviar.addEventListener("click", () => {
        ativarMensagem(msg);
    });
}
initAlertaMensagemSalva();

// Modal Mensagem
function initModalMensagem() {
    const indexMensage = document.querySelector('.index-mensagem');
    if (indexMensage) {
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
}
initModalMensagem();