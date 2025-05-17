const feedbackCards = document.querySelector('.feedback-cards');
const cards = document.querySelectorAll('.feedback-card');
const cardWidth = cards[0].offsetWidth + 20; // Width of each card + margin
const totalCards = cards.length;
let currentIndex = 0;

function moveLeft() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

function moveRight() {
    if (currentIndex < totalCards - 3) { // Show 3 cards at a time
        currentIndex++;
        updateCarousel();
    }
}

function updateCarousel() {
    feedbackCards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}



// clienttele
document.addEventListener('DOMContentLoaded', () => {
    const targetElement = document.querySelector('.collage-container');
    const elementToObserve = targetElement || document.getElementById('clienteleSection');

    if (!elementToObserve) {
        console.error('Target element for Intersection Observer not found.');
        return;
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25 // Trigger when 25% is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (targetElement) {
                    targetElement.classList.add('visible');
                } else {
                    document.querySelector('.collage-container')?.classList.add('visible');
                }
                observer.unobserve(entry.target);
            }
        });
    };

    const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);
    intersectionObserver.observe(elementToObserve);
});