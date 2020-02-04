   new Swiper('.slider', {
      spaceBetween: 30,
      slideClass: 'slider__item',
      wrapperClass: 'slider__wrap',
      loop: true,
      pagination: {
        el: '.slider__pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.slider__button--next',
        prevEl: '.slider__button--prev',
      },
      a11y: {
        prevSlideMessage: 'предыдущий слайд',
        nextSlideMessage: 'следующий слайд',
      },
      breakpoints: {
        1369: {
          slidesPerView: 3,
        },
        989: {
          slidesPerView: 2,
        },
        485: {
          slidesPerView: 1,
        }
      }
    });

