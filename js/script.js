    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
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

