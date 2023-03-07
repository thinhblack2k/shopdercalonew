/**
 * Xử lý menu
 * Author: THINHDH (06/02/2023)
 */

const menu = document.querySelector('.nav__items');
const menuButton = document.querySelector('.menu__button');
const iconMenu = document.querySelector('.icon__menu');
const overlay = document.querySelector('.header');

menuButton.addEventListener("click", ()=>{
    menu.classList.toggle("nav__items--open");
    menuButton.classList.toggle("icon__open-close");
    overlay.classList.toggle("show");
})

overlay.addEventListener("click", ()=>{
    overlay.classList.toggle("show");
    menu.classList.toggle("nav__items--open");
    menuButton.classList.toggle("icon__open-close");
});


/**
 * Xử lý popule video
 * Author: THINHDH (28/02/2023)
 */
$(".vpop").on('click', function(e) {
  e.preventDefault();
  $("#video-popup-overlay,#video-popup-iframe-container,#video-popup-container,#video-popup-close").show();
  $("#video-popup-iframe").on('load', function() {
    $("#video-popup-container").show();
  });
});

$("#video-popup-close, #video-popup-overlay").on('click', function(e) {
  $("#video-popup-iframe-container,#video-popup-container,#video-popup-close,#video-popup-overlay").hide();
});

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
 * Xử lý slider hình ảnh
 * AUTHOR: THINHDH (02/03/2023)
 */
function selectImages(imgs) {
  var expandImg = document.querySelector(".product-detail__image img");
  expandImg.src = imgs.src;
}

const listImages = document.querySelectorAll("product-detail__images--item img");
console.log(listImages);

/**
 * Xử lý select number
 * AUTHOR: THINHDH (02/03/2023)
 */
const inputNumber = document.querySelector('.select__input--number');
console.log(inputNumber.value);
function sumNumber() {
  var number = inputNumber.value;
  inputNumber.value = ++number;
} 

function subNumber() {
  var number = inputNumber.value;
  if(number <= 1) {
    inputNumber.value = 1;
  } else {
    inputNumber.value = --number;
  }
}