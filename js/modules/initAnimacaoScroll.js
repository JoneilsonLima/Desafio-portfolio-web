export default function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');

    if (sections.length) {
        const windowMetdade = window.innerHeight * 0.8;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetdade) < 0;
                if (isSectionVisible)
                    section.classList.add('ativo')
            })
        }
        animaScroll();

        window.addEventListener('scroll', animaScroll)

    }
}
initAnimacaoScroll();
