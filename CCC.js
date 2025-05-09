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