import axios from 'axios';
import ScrollReveal from 'scrollreveal';

const modalWindow = document.getElementById('modal-window');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModalBtn = document.querySelector('.close-btn');
const form = document.querySelector('.footer-form');
const emailInput = form.elements.email;

form.addEventListener('submit', async function HandleFormBtn(event) {
  event.preventDefault();

  const inputValue1 = emailInput.value.trim();
  const inputValue2 = form.elements.comment.value.trim();

  clearValidationMessages();

  if (!inputValue1 || !inputValue2) {
    displayValidationMessage('Please fill in all fields.');
    return;
  }

  if (!validateEmail(inputValue1)) {
    displayValidationMessage('Invalid email, try again');
    return;
  }

  const formObj = {
    email: inputValue1,
    comment: inputValue2,
  };

  try {
    const response = await axios.post(
      'https://portfolio-js.b.goit.study/api/requests',
      formObj
    );

    displayValidationMessage('Success', true);

    modalOverlay.classList.remove('visually-hidden');
    modalWindow.classList.remove('visually-hidden');
    modalOverlay.classList.add('active');
    modalWindow.classList.add('active');

    document.body.classList.add('no-scroll');

    form.reset();
  } catch (error) {
    displayValidationMessage('Invalid email, try again');
  }
});

closeModalBtn.addEventListener('click', function () {
  modalOverlay.classList.remove('active');
  modalWindow.classList.remove('active');
  modalOverlay.classList.add('visually-hidden');
  modalWindow.classList.add('visually-hidden');

  document.body.classList.remove('no-scroll');

  clearValidationMessages();
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

  sr.reveal(`.footer`, { delay: 200 });
});

emailInput.addEventListener('blur', function () {
  if (validateEmail(emailInput.value.trim())) {
    displayValidationMessage('Success!', true);
  } else {
    displayValidationMessage('Invalid email, try again');
  }
});

function displayValidationMessage(message, success = false) {
  clearValidationMessages();
  const messageContainer = document.createElement('div');
  messageContainer.className = `validation-message ${
    success ? 'success' : 'error'
  }`;
  messageContainer.textContent = message;

  const emailInputContainer = form.querySelector('.footer-inp-img:first-child');
  emailInputContainer.appendChild(messageContainer);

  emailInputContainer.classList.add(success ? 'success' : 'error');
}

function clearValidationMessages() {
  const messages = document.querySelectorAll('.validation-message');
  messages.forEach(msg => msg.remove());

  const inputContainers = document.querySelectorAll('.footer-inp-img');
  inputContainers.forEach(container => {
    container.classList.remove('success', 'error');
  });
}

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}
