import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';


const swiper = new Swiper('.projects-swiper', {
  modules: [Navigation, Keyboard],
  speed: 500,
  loop: false,
  spaceBetween: 30,
  slidesPerView: 1,
  direction: 'horizontal',

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  // mousewheel: {
  //   invert: true,
  // },

  navigation: {
    nextEl: '.projects-swiper-button-right',
    prevEl: '.projects-swiper-button-left',
    disabledClass: 'swiper-button-disabled',
  },

  });

