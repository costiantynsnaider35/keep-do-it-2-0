import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';
import 'accordion-js/dist/accordion.min.css';
import Accordion from 'accordion-js';
import '../css/about.css';

new Accordion('.accordion-container', {
  openOnInit: [0],
  elementClass: 'accordion-item',
  triggerClass: 'accordion-trigger',
  panelClass: 'accordion-panel',
  showMultiple: true,
});

// ----------------Swiper-
const aboutSwiper = new Swiper('.about-me-swiper', {
  modules: [Navigation, Keyboard],
  navigation: {
    nextEl: '.custom-nav-btn',
  },
  slidesPerView: 2,
  spaceBetween: 0,
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },

    1440: {
      slidesPerView: 6,
    },
  },
});
