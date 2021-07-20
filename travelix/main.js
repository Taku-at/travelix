/**
 * Selectors 
 ===========================================================*/
// Select the element from the DOM
let header = document.querySelector('.header');
let hambugerMenu = document.querySelector('.hamburger-menu');


/**
 * Event Listener 
 ===========================================================*/
hambugerMenu.addEventListener('click', function () {
    header.classList.toggle('menu-open');
})
