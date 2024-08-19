import anime from 'animejs';


export const heroBg = document.addEventListener('DOMContentLoaded', () => {
  const animation = anime({
    targets: '.background-effect',
    translateX: 52,
    duration: 1000,
    loop: true,
    easing: 'linear',
  });
});
