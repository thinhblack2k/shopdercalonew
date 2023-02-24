/**
 * Xử lý menu
 * Author: THINHDH (06/02/2023)
 */

const menu = document.querySelector('.nav__items');
const menuButton = document.querySelector('.menu__button');
const iconMenu = document.querySelector('.icon__menu');
const overlay = document.querySelector('#overlay');

menuButton.addEventListener("click", ()=>{
    menu.classList.toggle("nav__items--open");
    overlay.classList.toggle("show");
})

overlay.addEventListener("click", ()=>{
    overlay.classList.toggle("show");
    menu.classList.toggle("nav__items--open");
});