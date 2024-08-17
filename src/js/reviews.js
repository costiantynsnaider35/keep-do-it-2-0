import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Zoom } from 'swiper/modules';
axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api/reviews';
const reviwesList = document.querySelector('.review-list');
const prevBtn = document.querySelector('.review-btn-prev');
const nextBtn = document.querySelector('.review-btn-next');
const btnIcon = document.querySelector('.btn-icon-svg');

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
  try {
    const res = await axios.get('');
    console.log(res.data);
    const reviwes = res.data
      .map(
        reviwe => `<li class="review-item swiper-slide swiper-zoom-target">
            <img src="${reviwe.avatar_url}" alt="" class="review-item-img" />
            <h3 class="review-item-name">${reviwe.author}</h3>
            <p class="review-item-text">
              ${reviwe.review}
            </p>
          </li>`
      )
      .join('');
    reviwesList.insertAdjacentHTML('beforeend', reviwes);
  } catch (err) {
    console.log(err);
  }
}

getReviwes();
