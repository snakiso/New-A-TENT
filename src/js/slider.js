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
    nextEl: '.show__slider-next',
    prevEl: '.show__slider-prev', 
  },
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,
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

const swiper4 = new Swiper('.additional__slider', {
  navigation: {
    nextEl: '.additional__slider-button-next',
    prevEl: '.additional__slider-button-prev',
  },
  slidesPerView: 'auto',
  spaceBetween: 0,
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

const swiper5 = new Swiper('.our-projects__slider', {
  navigation: {
    nextEl: '.our-projects__slider-next',
    prevEl: '.our-projects__slider-prev',
  },
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 50,
  autoWidth: false,
  autoHeight: false,
  freeMode: false,
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      centeredSlides: false,
    }
  }
});

const swiper6 = new Swiper('.infinite-slider', {
  navigation: {
    nextEl: '.infinite-slider__next',
    prevEl: '.infinite-slider__prev',
  },
  slidesPerView: 'auto',
  spaceBetween: 0,
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


var swiper7 = new Swiper(".certificates__slider", {
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