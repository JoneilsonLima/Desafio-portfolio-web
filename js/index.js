const menuIcon = document.querySelector('.menu-mobile-icon')
const menuOpen = document.querySelector('.mobile-menu');
const iconOpen = document.querySelector('.icon-open');
const iconClosed = document.querySelector('.menu-closed');

/**
const buttonModal = document.querySelector('.closed-modal');
const modalContainer = document.querySelector('.modal-container');
const openModal = document.querySelector('.open-modal');


 Função do modal 

function initModal() {
    function linkOpenModal() {
        modalContainer.classList.add('hidden');
    }
    openModal.addEventListener('click', linkOpenModal);


    function closedModal() {
        modalContainer.classList.remove('hidden')
    }
    buttonModal.addEventListener('click', closedModal);
}
initModal();

**/

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


/*** fechar modal ***/

