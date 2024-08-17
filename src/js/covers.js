document.addEventListener("DOMContentLoaded", function () {
    const sectionCovers = document.querySelector(".covers");
    const listCovers = document.querySelectorAll(".list-covers");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    function checkVisibility() {
        const isVisible = isInViewport(sectionCovers);

        listCovers.forEach(ul => {
            ul.classList.toggle("in-view", isVisible);
            console.log(`Animation ${isVisible ? "started" : "stopped"}`);
        });
    }

    const debouncedCheckVisibility = debounce(checkVisibility, 150);
    window.addEventListener("scroll", debouncedCheckVisibility);
    checkVisibility();
});

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}