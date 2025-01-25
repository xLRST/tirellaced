// File JavaScript per lo slider della sezione Chi Siamo

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showNextSlide() {
        slides[currentSlide].style.transform = 'translateX(-100%)';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.transform = 'translateX(0)';
    }

    // Imposta l'interval per lo slider
    setInterval(showNextSlide, 3000); // Cambia slide ogni 3 secondi
});
