let idditional = undefined;
function initSwiperCategory() {
  var screenWidth = window.innerWidth;
  if (screenWidth < 768 && idditional == undefined) {
    idditional = new Swiper('.additional-slider', {

      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      autoWidth: false,
      freemode: true,
      // centeredSlides: true,
    });
  } else if (screenWidth >= 768 && idditional != undefined) {
    idditional.destroy();
    idditional = undefined;
  }
}
$(document).ready(function () {
  initSwiperCategory();
}); //Проверка при загрузке страницы

$(window).on('resize', function () {
  initSwiperCategory();
}); //Запуск функции при изменении размера