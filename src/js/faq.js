import Accordion from 'accordion-js';
import '../css/faq.css';

new Accordion('.accordion-container', {
  openOnInit: [0],
  elementClass: 'faq-accordion-item',
  triggerClass: 'faq-accordion-trigger',
  panelClass: 'faq-accordion-panel',
  showMultiple: false,
});