document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.memory-card');
    let flippedCard = false;
    let firstCard, secondCard;
    let lockCards = false;

    function cardFlip() {
        this.classList.add('cardFlip');
        if (!flippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        flippedCard = false;

        checkCards()
    }

    function checkCards() {
        let isAMatch = firstCard.dataset.framework === secondCard.dataset.framework;
        isAMatch ? matchingCards() : unmatchingCards();
    }

    function matchingCards() {
        firstCard.removeEventListener('click', cardFlip);
        secondCard.removeEventListener('click', cardFlip)
    }

    function unmatchingCards() {
        lockCards = true;
        setTimeout(() => {
            firstCard.classList.remove('cardFlip');
            secondCard.classList.remove('cardFlip');
            lockCards = false;
        }, 1500);
    }
    cards.forEach(card => card.addEventListener('click', cardFlip));

})
