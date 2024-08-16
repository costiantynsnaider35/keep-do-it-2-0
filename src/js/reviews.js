import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api/reviews';
const reviwesList = document.querySelector('.review-list');
// const prevBtn = document.querySelector('.swiper-button-prev');
// const nextBtn = document.querySelector('.swiper-button-next');

function initializeSwiper() {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 16,
    loop: false,
    speed: 500,
    navigation: {
      nextEl: '.review-nav-btn.swiper-button-next',
      prevEl: '.review-nav-btn.swiper-button-prev',
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
}

initializeSwiper();

async function getReviwes() {
  try {
    const res = await axios.get('');
    console.log(res.data);
    const reviwes = res.data
      .map(
        reviwe => `<li class="review-item swiper-slide">
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
