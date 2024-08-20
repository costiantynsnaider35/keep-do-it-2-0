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
});


