let header = document.getElementById('header');
let menu__toggle_button = document.getElementById('menu__toggle-button');
let nav__menu_list = document.getElementById('nav__menu-list');

menu__toggle_button.addEventListener('click', function () {
    console.log('click');
    menu__toggle_button.classList.toggle('menu__toggle-button-active');
    nav__menu_list.classList.toggle('nav__menu__list-active');
});








