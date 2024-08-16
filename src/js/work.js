import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const modalWindow = document.getElementById('modal-window');
  const modalOverlay = document.querySelector('.modal-overlay');
  const closeModalBtn = document.querySelector('.close-btn');
  const form = document.querySelector('.footer-form');

  // Выполнение GET запроса при загрузке страницы
  axios
    .get('https://portfolio-js.b.goit.study/api')
    .then(response => {
      console.log('GET Response:', response.data);
      // Можно обработать данные или показать уведомление об успешном получении данных
    })
    .catch(error => {
      console.error('GET Error:', error);
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch data from server.',
        position: 'topRight',
      });
    });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Form submit intercepted');

    const formData = new FormData(form);

    // Выполнение POST запроса при отправке формы
    axios
      .post('https://portfolio-js.b.goit.study/api', formData)
      .then(response => {
        console.log('POST Response:', response.data);
        modalOverlay.classList.remove('visually-hidden');
        modalWindow.classList.remove('visually-hidden');
        modalOverlay.classList.add('active');
        modalWindow.classList.add('active');
      })
      .catch(error => {
        console.error('POST Error:', error);
        iziToast.error({
          title: 'Error',
          message: 'There was an error with your submission. Please try again.',
          position: 'topRight',
        });
      });
  });

  closeModalBtn.addEventListener('click', function () {
    modalOverlay.classList.remove('active');
    modalWindow.classList.remove('active');
    setTimeout(() => {
      modalOverlay.classList.add('visually-hidden');
      modalWindow.classList.add('visually-hidden');
    }, 300);
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
