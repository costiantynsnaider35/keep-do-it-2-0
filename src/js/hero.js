import anime from 'animejs';
import ScrollReveal from 'scrollreveal';
import '../css/hero.css';

export const heroBg = document.addEventListener('DOMContentLoaded', () => {
  // Анімація для background-effect
  const animation = anime({
    targets: '.background-effect',
    translateX: 52,
    duration: 1000,
    loop: true,
    easing: 'linear',
  });

  // Відображаємо заголовок відразу після завантаження сторінки
  const heroTitle = document.querySelector('.hero-title');
  heroTitle.style.opacity = '1';

  // Set ScrollReveal 
  setTimeout(() => {
    const heroBg = ScrollReveal({
      origin: 'bottom',
      distance: '50px',
      duration: 2300,
      delay: 0,
      reset: true,
    });

    heroBg.reveal('.hero-title');
  }, 1000); 

 
  const sectionCovers = document.querySelector('.hero-background');
  const listCovers = document.querySelectorAll('.background-effect');

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function checkVisibility() {
    const isVisible = isInViewport(sectionCovers);

    listCovers.forEach(ul => {
      ul.classList.toggle('in-view', isVisible);
      if (!isVisible) {
        animation.pause(); 
      } else {
        animation.play(); 
      }
    });
  }

  const debouncedCheckVisibility = debounce(checkVisibility, 150);
  window.addEventListener('scroll', debouncedCheckVisibility);
  checkVisibility();
});

// Функція debounce для оптимізації
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}



