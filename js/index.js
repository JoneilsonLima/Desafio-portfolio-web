const menuIcon = document.querySelector('.menu-mobile-icon')
const menuOpen = document.querySelector('.mobile-menu');
const iconOpen = document.querySelector('.icon-open');
const iconClosed = document.querySelector('.menu-closed');

/** Função do menu mobile **/
function initMenuMobile() {
    function toggleMenu() {
        menuOpen.classList.toggle('menu-ativo')
    }

    menuIcon.addEventListener('click', toggleMenu);

    iconOpen.addEventListener('click', () => {
        iconOpen.classList.toggle('menu-none')
        iconClosed.classList.toggle('menu-block')
    })

    iconClosed.addEventListener('click', () => {
        iconOpen.classList.remove('menu-none')
        iconClosed.classList.remove('menu-block')
    })
}

initMenuMobile();

/**** Modal Projeto 1 ****/
const linkProjeto1 = document.querySelector('.link-projeto1');
const projeto1 = document.querySelector('.projeto1');
const closedModal = document.querySelectorAll('.closed-modal');

function openProjeto1() {
    projeto1.classList.add('display-flex-modal')

    closedModal[0].addEventListener('click', ()=> {
        projeto1.classList.remove('display-flex-modal');
    })
}
linkProjeto1.addEventListener('click', openProjeto1);

/**** Modal Projeto 2 ****/
const linkProjeto2 = document.querySelector('.link-projeto2');
const projeto2 = document.querySelector('.projeto2');

function openProjeto2() {
    projeto2.classList.add('display-flex-modal')

    closedModal[1].addEventListener('click', ()=> {
        projeto2.classList.remove('display-flex-modal')
    })
}
linkProjeto2.addEventListener('click', openProjeto2);


/**** Modal Projeto 2 ****/
const linkProjeto3 = document.querySelector('.link-projeto3');
const projeto3 = document.querySelector('.projeto3');

function openProjeto3() {
    projeto3.classList.add('display-flex-modal')

    closedModal[2].addEventListener('click', ()=> {
        projeto3.classList.remove('display-flex-modal')
    })
}

linkProjeto3.addEventListener('click', openProjeto3);



