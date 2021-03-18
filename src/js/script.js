import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const heroSlider = new Swiper('.hero-slider', {
  speed: 600,
  effect: 'fade',
  allowTouchMove: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
});

const testimonialSlider = new Swiper('.testimonials-slider', {
  speed: 600,
  slidesPerView: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  grabCursor: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
});
