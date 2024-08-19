import Accordion from 'accordion-js';
import '../css/faq.css';

new Accordion('.accordion-container-faq', {
  openOnInit: [],
  elementClass: 'faq-accordion-item',
  triggerClass: 'faq-accordion-trigger',
  panelClass: 'faq-accordion-panel',
  showMultiple: false,
  onOpen: function(currentElement) {
    console.log(currentElement);
  },
  beforeOpen:(item)=>{
    console.log(item);
  }
});