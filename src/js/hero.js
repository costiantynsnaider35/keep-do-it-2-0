import anime from 'animejs';
import ScrollReveal from 'scrollreveal';
import '../css/hero.css'


export const heroBg = document.addEventListener('DOMContentLoaded', () => {
  const animation = anime({
    targets: '.background-effect',
    translateX: 52,
    duration: 1000,
    loop: true,
    easing: 'linear',
  });
});


// ----- ScrollReveal ------

document.addEventListener('DOMContentLoaded', () => {
    const heroBg = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 2300,
        delay: 0,
        reset: true,
    });

    heroBg.reveal(`.hero-title`);

});
