document.addEventListener('DOMContentLoaded', function () {
    //Seção de atrações
    mostrandoAbas();
    //Seção FAQ, acordion
    abreOuFechaResposta();

    ocultarOuExibirElementosDoHeader();

});

function ocultarOuExibirElementosDoHeader() {
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        const posicaoAtual = window.scrollY;
        posicaoAtual < alturaHero ? header.classList.add('header--is-hidden') : header.classList.remove('header--is-hidden');
    });
}

function abreOuFechaResposta() {
    const questions = document.querySelectorAll('[data-faq-question]');

    for (let i = 0; i < questions.length; i++) {

        questions[i].addEventListener('click', function (elemento) {

            const classe = 'faq__questions__item--is-open';
            const elementoPai = elemento.target.parentNode;

            elementoPai.classList.toggle(classe);
        })
    }
}

function mostrandoAbas() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener('click', function (botao) {

            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');

        });
    }
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}