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
 * Xử lý popule video
 * Author: THINHDH (28/02/2023)
 */

window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
}

function lightbox_open() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  window.scrollTo(0, 0);
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  lightBoxVideo.play();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}



/**
 *  Xử lý select option
 * AUTHOR: THINHDH (01/03/2023)
 */

const selectBtn = document.querySelector('#select .select__input');
const selectBox = document.querySelector('#select .select__items');
const selectItems = document.querySelectorAll('#select .select__item');

selectBtn.addEventListener("click", () => {
  selectBox.classList.toggle('select__items--open');
});

console.log(selectItems[0].innerHTML);