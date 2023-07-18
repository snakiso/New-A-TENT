// let burger = document.querySelector('.header__burger-box');
// let close = document.querySelector('.menu__close');
// let menu = document.querySelector('.menu');
// let html = document.querySelector('.html');

// function Scroll() {
//   if (menu.classList.contains('open')) {
//     html.style.overflow = 'hidden'
//   } else {
//     html.style.overflow = 'auto'
//   }
// }

// burger.addEventListener('click', () => {
//   menu.classList.add('open')
//   Scroll()
//   menu.style.top = '0%'
// })

// close.addEventListener('click', () => {
//   menu.classList.remove('open')
//   Scroll()
//   menu.style.top = '-200%'
// })

let menuItem = document.querySelectorAll('.menu__block-title_with-arrow');
let menuBlock = document.querySelectorAll('.menu__block_open');


function closeItem() {
  for (let i = 0; i < menuItem.length; i++) {
      menuBlock[i].classList.remove('active')
  }
}

function TouchItem() {
  var screenWidth = window.innerWidth;
  if (screenWidth < 1200) {
    for (let i = 0; i < menuItem.length; i++) {
      menuItem[i].addEventListener('click', () => {
        closeItem()
        menuBlock[i].classList.toggle('active');
      })
    }
  }
}

$(document).ready(function () {
  TouchItem();
}); //Проверка при загрузке страницы

$(window).on('resize', function () {
  TouchItem()
}); //Запуск функции при изменении размера