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



