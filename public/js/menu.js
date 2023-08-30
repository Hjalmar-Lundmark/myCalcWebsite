const button = document.querySelector('.navbar__button');

button.addEventListener('click', function(event) {
    const menu = document.querySelector('.navbar__collapse');
    menu.classList.toggle('navbar__collapse--show');

    const navbar = document.querySelector('.navbar__inner');
    navbar.classList.toggle('navbar__inner--open');
});