import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';
import 'accordion-js/dist/accordion.min.css';
import Accordion from 'accordion-js';
import '../css/about.css';

// ----- Accordion ------
new Accordion('.accordion-container', {
  openOnInit: [0],
  elementClass: 'accordion-item',
  triggerClass: 'accordion-trigger',
  panelClass: 'accordion-panel',
  showMultiple: true,
});

// ----- Swiper ------
const aboutSwiper = new Swiper('.about-me-swiper', {
  modules: [Navigation, Keyboard],
  speed: 500,
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

// ----- show scroll up -----
function scrollUp() {
  const scrollUp = document.querySelector('.scroll-up');

  if (this.scrollY >= 2250) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

// ----- scrolling up -----
document.querySelector('.scroll-up').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
