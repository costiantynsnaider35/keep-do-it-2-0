import ScrollReveal from 'scrollreveal';

// ----- ScrollReveal ------
document.addEventListener('DOMContentLoaded', () => {
    const bfsr = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 2300,
        delay: 0,
        reset: true,
    });

    bfsr.reveal(`.benefits-cards`);

});