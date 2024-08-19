const mobMenuOpen = document.querySelector('.mob-menu-open-btn');
const mobMenu = document.querySelector('.mob-menu');
const mobMenuClose = document.querySelector('.mob-menu-close-btn');
const dropMenu = document.querySelector('.drop-menu-nav');
const dropMenuBtn = document.querySelector('.header-menu');
const mobMenuLink = document.querySelector('.mob-menu-nav');
const orderLink = document.querySelector('.order-btn');
const orderLinkMob = document.querySelector('.mob-order-btn');

function openMobMenu() {
  mobMenu.classList.add('is-open');
  document.body.classList.add('no-scroll'); 
}

function closeMobMenu() {
  mobMenu.classList.remove('is-open');
  document.body.classList.remove('no-scroll'); 
}

function openDropMenu() {
  if (dropMenu.classList.contains('drop-menu-show')) {
    dropMenu.classList.remove('drop-menu-show');
  } else {
    dropMenu.classList.add('drop-menu-show');
  }
}

function closeDropMenuECS(evt) {
  if (evt.key === 'Escape') {
    dropMenu.classList.remove('drop-menu-show');
  }
}

function handlerScroll(evt) {
  evt.preventDefault();
  if (mobMenu.classList.contains('is-open')) {
    closeMobMenu(); 
  }
  const target = evt.target.getAttribute('href').substring(1);
  const targetSection = document.getElementById(target);

  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth',
  });
}

mobMenuOpen.addEventListener('click', openMobMenu);
mobMenuClose.addEventListener('click', closeMobMenu);
dropMenuBtn.addEventListener('click', openDropMenu);
dropMenu.addEventListener('click', handlerScroll);
mobMenuLink.addEventListener('click', handlerScroll);
window.addEventListener('keydown', closeDropMenuECS);
orderLink.addEventListener('click', handlerScroll);
orderLinkMob.addEventListener('click', handlerScroll);

window.onclick = function (evt) {
  if (
    !evt.target.matches('.header-menu') &&
    !evt.target.matches('.drop-menu-nav')
  ) {
    dropMenu.classList.remove('drop-menu-show');
  }
};




