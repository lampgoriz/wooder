//toggle menu//
let menu__toggle_button = document.getElementById('menu__toggle-button');
let nav__menu_list = document.getElementById('nav__menu-list');
let nav__menu_list_items = document.getElementsByClassName('nav__menu__list-item');

menu__toggle_button.addEventListener('click', function () {
    menu__toggle_button.classList.toggle('menu__toggle-button-active');
    nav__menu_list.classList.toggle('nav__menu__list-active');
    for(let i = 0; i <nav__menu_list_items.length; i++){
        nav__menu_list_items[i].classList.toggle('nav__menu__list-item-active');
    }
});

//smooth scroll//
function smoothScroll(target, duration) {
    let Target = document.querySelector(target);
    let targetPosition = Target.getBoundingClientRect();
    let startPosition = window.pageYOffset;
    let distance = targetPosition.top - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if(t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

nav__menu_list.addEventListener("click", getIdToSmoothScroll);

function getIdToSmoothScroll(event) {

    let clickedElement = event.target;
    let elementIdToScroll = clickedElement.innerHTML;

    smoothScroll('#' + elementIdToScroll, 1000);
}

