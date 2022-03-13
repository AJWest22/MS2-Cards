document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.memory-card');
    let flippedCard = false;
    let firstCard, secondCard;
    let lockCards = false;

    function cardFlip() {
        if (lockCards) return;
        if (this === firstCard) return;
        this.classList.add('cardFlip');
        if (!flippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;

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
            resetGame();
        }, 1500);
    }

    function resetGame() {
        [hasFlippedCard, lockCards] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    cards.forEach(card => card.addEventListener('click', cardFlip));

})