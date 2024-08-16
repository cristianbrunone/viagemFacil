document.addEventListener('DOMContentLoaded', function () {
    // Inicializa o Pikaday para cada campo individualmente
    var pickerDate = new Pikaday({
        field: document.querySelector('.search-date'),
        format: 'DD/MM/YYYY',
        minDate: new Date(),
        maxDate: new Date().setMonth(new Date().getMonth() + 3)
    });

    var pickerDateCard = new Pikaday({
        field: document.querySelector('.search-date-card'),
        format: 'DD/MM/YYYY',
        minDate: new Date(),
        maxDate: new Date().setMonth(new Date().getMonth() + 3)
    });


    // Seleciona todos os campos de entrada e menus
    const inputElements = document.querySelectorAll('.search-input, .search-input-card');

    // Função para ocultar todos os menus
    function hideAllMenus() {
        const allMenus = document.querySelectorAll('.menu');
        allMenus.forEach(menu => menu.style.display = 'none');
    }

    // Função para mostrar o menu associado a um campo de entrada
    function showMenuForInput(input) {
        const menu = input.closest('.input-container, .input-container-card').querySelector('.menu');
        if (menu) {
            menu.style.display = 'block';
        }
    }

    // Manipulação do clique nos campos de entrada
    inputElements.forEach(input => {
        input.addEventListener('click', function (event) {
            event.stopPropagation(); // Evita que o clique feche o menu imediatamente
            hideAllMenus(); // Oculta todos os menus
            showMenuForInput(input); // Mostra o menu associado ao campo de entrada
        });
    });

    // Fechar o menu ao clicar fora dele
    document.addEventListener('click', function () {
        hideAllMenus();
    });

    // Evita que o menu feche se o clique for dentro do menu
    const menus = document.querySelectorAll('.menu');
    menus.forEach(menu => {
        menu.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    });
});
