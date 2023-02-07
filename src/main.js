document.addEventListener('DOMContentLoaded', function () {

    mostrandoAbas();
    abreOuFechaResposta();
});

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