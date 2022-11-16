const menuIcon = document.querySelector('.menu-mobile-icon')
const menuOpen = document.querySelector('.mobile-menu');
const iconOpen = document.querySelector('.icon-open');
const iconClosed = document.querySelector('.menu-closed');

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
