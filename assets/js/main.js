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

/**
 * Xử lý slider show
 * Author: THINHDH (27/02/2013)
 */

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}