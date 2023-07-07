let swiper = undefined;
function initSwiperCategory() {
  var screenWidth = window.innerWidth;
  if (screenWidth < 768 && swiper == undefined) {
    swiper = new Swiper('.cards-slider', {
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoWidth: false,
      freemode: true,
      // centeredSlides: true,
    });
  } else if (screenWidth >= 600 && swiper != undefined) {
    swiper.destroy();
    swiper = undefined;
  }
}
$(document).ready(function () {
  initSwiperCategory();
}); //Проверка при загрузке страницы

$(window).on('resize', function () {
  initSwiperCategory();
}); //Запуск функции при изменении размера