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

  // ScrollReveal 
  const heroBg = ScrollReveal({
      origin: 'bottom',
      distance: '50px',
      duration: 2300,
      delay: 0,
      reset: true,
  });

  heroBg.reveal(`.hero-title`);

  // Додавання перевірки видимості секції та запуску/зупинки анімації
  const sectionCovers = document.querySelector(".hero-background");
  const listCovers = document.querySelectorAll(".background-effect");

  function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      console.log('Top:', rect.top, 'Bottom:', rect.bottom); 
      return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function checkVisibility() {
      const isVisible = isInViewport(sectionCovers);

      listCovers.forEach(ul => {
          ul.classList.toggle("in-view", isVisible);
          console.log(`Animation ${isVisible ? "started" : "stopped"}`);
          console.log(ul.classList);
      });
  }

  const debouncedCheckVisibility = debounce(checkVisibility, 150);
  window.addEventListener("scroll", debouncedCheckVisibility);
  checkVisibility();
});

// Функція debounce
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

