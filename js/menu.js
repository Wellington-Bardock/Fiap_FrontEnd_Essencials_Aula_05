let navMenu = document.querySelector('.nav-menu');
let sanduiche = document.querySelector('.sanduiche');

function toggleMenu() {
    //o toogle nesse contexto adiciona ou remove a classe caso ela já esteja no elemento
    sanduiche.classList.toggle('active');
    navMenu.classList.toggle('active');

}

sanduiche.addEventListener('click', toggleMenu);

navMenu.addEventListener('click', (event) => {
    if (event.target.classList.contains('item-menu')) {
        toggleMenu();
    }
})