
const select = (selector) => document.querySelector(selector);

const mobMenuOpen = select('.mob-menu-open-btn');
const mobMenu = select('.mob-menu');
const mobMenuClose = select('.mob-menu-close-btn');
const dropMenu = select('.drop-menu-nav');
const dropMenuBtn = select('.header-menu');
const mobMenuLink = select('.mob-menu-nav');
const orderLink = select('.order-btn');
const orderLinkMob = select('.mob-order-btn');


const toggleClass = (element, className) => element.classList.toggle(className);

const openMobMenu = () => {
  mobMenu.classList.add('is-open');
  document.body.classList.add('no-scroll');
};

const closeMobMenu = () => {
  mobMenu.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
};

const openDropMenu = () => toggleClass(dropMenu, 'drop-menu-show');

const closeDropMenuESC = ({ key }) => {
  if (key === 'Escape') dropMenu.classList.remove('drop-menu-show');
};

const handlerScroll = (evt) => {
  evt.preventDefault();
  closeMobMenu(); 
  const targetSection = document.getElementById(evt.target.getAttribute('href').substring(1));

  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth',
  });
};


[
  { element: mobMenuOpen, action: openMobMenu },
  { element: mobMenuClose, action: closeMobMenu },
  { element: dropMenuBtn, action: openDropMenu },
  { element: dropMenu, action: handlerScroll },
  { element: mobMenuLink, action: handlerScroll },
  { element: orderLink, action: handlerScroll },
  { element: orderLinkMob, action: handlerScroll },
].forEach(({ element, action }) => element.addEventListener('click', action));

window.addEventListener('keydown', closeDropMenuESC);

window.onclick = ({ target }) => {
  if (!target.closest('.header-menu, .drop-menu-nav')) {
    dropMenu.classList.remove('drop-menu-show');
  }
};




