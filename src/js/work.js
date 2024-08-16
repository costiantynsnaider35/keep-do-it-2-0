import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const modalWindow = document.getElementById('modal-window');
  const modalOverlay = document.querySelector('.modal-overlay');
  const closeModalBtn = document.querySelector('.close-btn');
  const form = document.querySelector('.footer-form');

  form.addEventListener('submit', async function (event) {
    // event.preventDefault();

    try {
      const formData = new FormData(form);
      const response = await fetch('/your-server-endpoint', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Server responded with an error');
      }

      modalOverlay.classList.remove('visually-hidden');
      modalWindow.classList.remove('visually-hidden');
      modalOverlay.classList.add('active');
      modalWindow.classList.add('active');
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message:
          'There was an error with your submission. Please check your input and try again.',
        position: 'topRight',
      });
    }
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
