$(document).ready(function () {
  new Swiper('.swiper-review-container', {
    paginationClickable: true,
    direction: 'horizontal',
    dynamicBullets: true,
    simulateTouch: true,
    initialSlide: 0,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    pagination: {
      el: '.slider-nav',
      clickable: true,
    },
    autoplay: {
      delay: 2000,
    },
    speed: 1000,
    spaceBetween: 20,
    breakpoints: {
      1280: {
        slidesPerView: 3,
        spaceBetween: 32,
        simulateTouch: false,
      },
      768: {
        loop: true,
        centeredSlides: false,
        slidesPerView: 2,
        spaceBetween: 16,
      },
      320: {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 20,
      },
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
});
