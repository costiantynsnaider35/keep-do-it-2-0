import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
// import ScrollReveal from 'scrollreveal';

const modalWindow = document.getElementById('modal-window');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModalBtn = document.querySelector('.close-btn');
const form = document.querySelector('.footer-form');

form.addEventListener('submit', async function HandleFormBtn(event) {
  event.preventDefault();

  const inputValue1 = form.elements.email.value;
  const inputValue2 = form.elements.comment.value;
  const formObj = {
    email: inputValue1,
    comment: inputValue2,
  };

  try {
    const response = await axios.post(
      'https://portfolio-js.b.goit.study/api/requests',
      formObj
    );
    console.log(response);

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
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please correct your input and try again.',
      position: 'topRight',
    });
  }
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

document.addEventListener('DOMContentLoaded', () => {
  const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 2300,
    delay: 0,
    reset: true,
  });

  sr.reveal(`.footer`);
});
