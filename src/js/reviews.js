import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Zoom } from 'swiper/modules';
const reviwesList = document.querySelector('.review-list');

const swiper = new Swiper('.review-container', {
  modules: [Navigation, Keyboard, Zoom],
  speed: 500,
  loop: false,

  spaceBetween: 16,
  navigation: {
    nextEl: '.review-btn-next',
    prevEl: '.review-btn-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  zoom: true,
  zoom: {
    toggle: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },

    1440: {
      slidesPerView: 4,
    },
  },
});

async function getReviwes() {
  // const newArr = []; // array для перевірки на пустий масив від сервера
  // newArr підставити у перевірку замість res.data, та розкоментувати
  try {
    const res = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );

    if (res.data.length === 0) {
      reviwesList.insertAdjacentHTML(
        'beforeend',
        '<div class="err-container"><p class="error-mes">Not Found</p></div>'
      );
    } else {
      const reviwes = res.data
        .map(
          (reviwe, index) => `<li class="review-item swiper-slide card-zoom">
            <img src="${reviwe.avatar_url}" alt="" class="review-item-img" />
            <h3 class="review-item-name">${reviwe.author}</h3>
            <p class="review-item-text">
              ${reviwe.review}
            </p>
          </li>`
        )
        .join('');
      // this.jokes = [];
      // заглушка для перевірки на помилку від сервера, розкоментувати this.jokes

      reviwesList.insertAdjacentHTML('beforeend', reviwes);

      const reviewItems = document.querySelectorAll('.review-item');
      reviewItems.forEach(item => {
        item.addEventListener('click', () => {
          item.classList.toggle('expanded');
        });
      });
    }
  } catch (err) {
    console.log(err);
    reviwesList.insertAdjacentHTML(
      'beforeend',
      '<div class="err-container"><p class="error-mes">Not Found</p></div>'
    );
    window.addEventListener('scroll', () => {
      if (isScrolledIntoView(targetSection) && !isToastShown) {
        iziToast.error({
          message: 'Serever error 404',
          backgroundColor: 'red',
          position: 'bottomRight',
          timeout: 3000,
        });
        isToastShown = true;
      }
    });
  }
}

getReviwes();

const targetSection = document.querySelector('.review-section');
let isToastShown = false;
function isScrolledIntoView(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}
