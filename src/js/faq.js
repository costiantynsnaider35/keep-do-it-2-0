import Accordion from 'accordion-js';
import '../css/faq.css';

new Accordion('.faq-accordion-container', {
  elementClass: 'faq-accordion-item',
  triggerClass: 'faq-accordion-trigger',
  panelClass: 'faq-accordion-panel',
  showMultiple: false,
});

// ---- Delete focus ------

const faqBtns = document.querySelectorAll('.accordion-trigger');

function handleClick() {
  this.blur();
}

faqBtns.forEach(faqBtn => {
  faqBtn.addEventListener('click', handleClick);
});
