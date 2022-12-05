export default function initModal() {
    const bodyProjetos = document.querySelector('body');

    if (bodyProjetos.classList.contains('body-projetos-modal')) {
        function modal() {

            const linkProjeto1 = document.querySelector('.link-projeto1');
            const projeto1 = document.querySelector('.projeto1');
            const closedModal = document.querySelectorAll('.closed-modal');

            function openProjeto1() {
                projeto1.classList.add('display-flex-modal')

                closedModal[0].addEventListener('click', () => {
                    projeto1.classList.remove('display-flex-modal');
                })
            }
            linkProjeto1.addEventListener('click', openProjeto1);


            const linkProjeto2 = document.querySelector('.link-projeto2');
            const projeto2 = document.querySelector('.projeto2');

            function openProjeto2() {
                projeto2.classList.add('display-flex-modal')

                closedModal[1].addEventListener('click', () => {
                    projeto2.classList.remove('display-flex-modal')
                })
            }
            linkProjeto2.addEventListener('click', openProjeto2);


            const linkProjeto3 = document.querySelector('.link-projeto3');
            const projeto3 = document.querySelector('.projeto3');

            function openProjeto3() {
                projeto3.classList.add('display-flex-modal')

                closedModal[2].addEventListener('click', () => {
                    projeto3.classList.remove('display-flex-modal')
                })
            }
            linkProjeto3.addEventListener('click', openProjeto3);


            const linkProjeto4 = document.querySelector('.link-projeto4');
            const projeto4 = document.querySelector('.projeto4');

            function openProjeto4() {
                projeto4.classList.add('display-flex-modal')

                closedModal[3].addEventListener('click', () => {
                    projeto4.classList.remove('display-flex-modal')
                })
            }
            linkProjeto4.addEventListener('click', openProjeto4);

            const linkProjeto5 = document.querySelector('.link-projeto5');
            const projeto5 = document.querySelector('.projeto5');

            function openProjeto5() {
                projeto5.classList.add('display-flex-modal')

                closedModal[4].addEventListener('click', () => {
                    projeto5.classList.remove('display-flex-modal')
                })
            }
            linkProjeto5.addEventListener('click', openProjeto5);
        }
        modal();
    }
}
