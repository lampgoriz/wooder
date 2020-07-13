let menu__toggle_button = document.getElementById('menu__toggle-button');
let nav__menu_list = document.getElementById('nav__menu-list');
let nav__menu_list_items = document.getElementsByClassName('nav__menu__list-item');
// let yOffsetOfTop = document.

menu__toggle_button.addEventListener('click', function () {
    // console.log('click');
    menu__toggle_button.classList.toggle('menu__toggle-button-active');
    nav__menu_list.classList.toggle('nav__menu__list-active');
    for(let i = 0; i <nav__menu_list_items.length; i++){
        nav__menu_list_items[i].classList.toggle('nav__menu__list-item-active');
    }
});

function smoothScroll() {

}







