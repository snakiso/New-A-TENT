const swiper = new Swiper('.project-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 30,
  autoWidth: false,
  freeMode: false,
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      freeMode: true,
    }
  }
});

const swiper1 = new Swiper('.solution-slider', {
  navigation: {
    nextEl: '.solution-slider__next',
    prevEl: '.solution-slider__prev',
  },
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 50,
  autoWidth: false,
  autoHeight: true,
  freeMode: false,
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 12,
      centeredSlides: false,
    }
  }
});

const swiper2 = new Swiper('.show__slider', {
  navigation: {
    nextEl: '.solution-slider__next',
    prevEl: '.solution-slider__prev',
  },
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 50,
  autoWidth: false,
  autoHeight: true,
  freeMode: false,
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      centeredSlides: false,
    }
  }
});

var swiper3 = new Swiper(".clients__slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  // autoplay: {
  //   delay: 3000,
  // },
  // speed: 4000,
  autoWidth: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1300: {
      slidesPerView: 4,
    },
  }
});

const swiper4 = new Swiper('.design-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 'auto',
  spaceBetween: 10,
  autoWidth: false,
  centeredSlides: true,
  loop: true,
  768: {
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 30,
    centeredSlides: true,
  }
});