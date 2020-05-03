const slider1 = document.querySelector('.slider1');

let mySwiper1;

function mobileSlider1() {
  if (window.innerWidth <= 575 && slider1.dataset.mobile == 'false') {
    mySwiper1 = new Swiper(slider1, {
        slidesPerView: 1,
        slideClass: 'training-apps__item',
        spaceBetween: 17,
        slideToClicedSlide: true,
        loop: true,
        wrapperClass: 'training-apps__wrapper',
        navigation: {
          nextEl: '.training-apps__next',
          prevEl: '.training-apps__prev',
        },
    });

    slider1.dataset.mobile = 'true';
  }

  if (window.innerWidth > 575) {
    slider1.dataset.mobile = 'false';
    if (slider1.classList.contains('swiper-container-initialized')) {
      mySwiper1.destroy();
    }
  }
}

mobileSlider1()

window.addEventListener('resize', () => {
  mobileSlider1();
});




const slider = document.querySelector('.slider2');

let mySwiper;

function mobileSlider() {
  if (window.innerWidth <= 575 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
        slidesPerView: 1,
        slideClass: 'comments__item',
        spaceBetween: 17,
        slideToClicedSlide: true,
        loop: true,
        wrapperClass: 'comments__wrapper',
        navigation: {
          nextEl: '.comments__next',
          prevEl: '.comments__prev',
        },
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 575) {
    slider.dataset.mobile = 'false';
    if (slider.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
    }
  }
}

mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider();
});




const slider3 = document.querySelector('.slider3');

let mySwiper3;

function mobileSlider3() {
  if (window.innerWidth <= 575 && slider3.dataset.mobile == 'false') {
    mySwiper3 = new Swiper(slider3, {
        slidesPerView: 2,
        slideClass: 'license__item',
        spaceBetween: 60,
        slideToClicedSlide: true,
        loop: true,
        wrapperClass: 'license__wrapper',
        navigation: {
          nextEl: '.license__next',
          prevEl: '.license__prev',
        },
    });

    slider3.dataset.mobile = 'true';
  }

  if (window.innerWidth > 575) {
    slider3.dataset.mobile = 'false';
    if (slider3.classList.contains('swiper-container-initialized')) {
      mySwiper3.destroy();
    }
  }
}

mobileSlider3()

window.addEventListener('resize', () => {
  mobileSlider3();
});

