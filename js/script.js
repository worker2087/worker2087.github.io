    var swiper = new Swiper('.slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.slider-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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

