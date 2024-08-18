import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api/requests';

document.addEventListener('DOMContentLoaded', function () {
  const modalWindow = document.getElementById('modal-window');
  const modalOverlay = document.querySelector('.modal-overlay');
  const closeModalBtn = document.querySelector('.close-btn');
  const form = document.querySelector('.footer-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    modalOverlay.classList.remove('visually-hidden');
    modalWindow.classList.remove('visually-hidden');
    modalOverlay.classList.add('active');
    modalWindow.classList.add('active');

    form.reset();

    iziToast.success({
      title: 'Success',
      message: 'Your message has been sent successfully!',
      position: 'topRight',
    });
  });

  closeModalBtn.addEventListener('click', function () {
    modalOverlay.classList.remove('active');
    modalWindow.classList.remove('active');
    modalOverlay.classList.add('visually-hidden');
    modalWindow.classList.add('visually-hidden');
  });

  modalOverlay.addEventListener('click', function () {
    closeModalBtn.click();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModalBtn.click();
    }
  });
});
